import { useEffect, useState } from "react"
import * as echarts from "echarts"
import ReactECharts from "echarts-for-react"

export function HeatMap({ dataByCountry }) {
  const [isMapReady, setIsMapReady] = useState(false)

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const res = await fetch("/maps/world.geo.json")
        const geoJson = await res.json()
        echarts.registerMap("world", geoJson)
        setIsMapReady(true)
      } catch (err) {
        console.error("Failed to load world map:", err)
        throw err
      }
    }

    fetchMap()
  }, [])

  if (!isMapReady || !Array.isArray(dataByCountry) || !dataByCountry.length) {
    return <p>Loading heatmap...</p>
  }

  const option = {
    title: {
      text: "Sales Heatmap by Country",
      left: "center",
      textStyle: { fontSize: 32 },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}<br/>Orders: {c}",
    },
    visualMap: {
      min: 0,
      max: Math.max(...dataByCountry.map((d) => d.value), 1),
      left: "left",
      bottom: "5%",
      text: ["High", "Low"],
      calculable: true,
      inRange: {
        color: ["#e0f3f8", "#74add1", "#4575b4"],
      },
    },
    series: [
      {
        name: "Orders",
        type: "map",
        map: "world",
        roam: true,
        emphasis: {
          label: { show: true },
        },
        data: dataByCountry,
      },
    ],
  }

  return (
    <section className="heatmap-container">
      <ReactECharts
        option={option}
        style={{
          height: "600px",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      />
    </section>
  )
}
