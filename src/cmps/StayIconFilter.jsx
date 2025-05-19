import { useEffect, useRef, useState } from "react"
import {
  adaptedIcon,
  aFramesIcon,
  barnsIcon,
  BeachFrontIcon,
  boatIcon,
  cabinHomeIcon,
  campingIcon,
  castelIcon,
  caveIcon,
  containersIcon,
  dammusiIcon,
  desertIcon,
  designHomesIcon,
  domesIcon,
  farmsIcon,
  golfIcon,
  hanoksIcon,
  islandsIcon,
  lakeFrontIcon,
  LeftIcon,
  luxeIcon,
  mansionIcon,
  minsusIcon,
  newHomeIcon,
  OMGIcon,
  playHomeIcon,
  riadsIcon,
  RightIcon,
  roomIcon,
  skiingIcon,
  skiInOutIcon,
  snowIcon,
  surfingIcon,
  tinyHomesIcon,
  towerIcon,
  trendingIcon,
  tropicalIcon,
  trulliIcon,
  vineyardsIcon,
  windmillsIcon,
  YurtsIcon,
} from "../../src/cmps/Icons"

export function StayIconFilter() {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState(null)

  function onScrollLeft() {
    scrollContainerRef.current?.scrollBy({ left: -500, behavior: "smooth" })
  }
  function onScrollRight() {
    scrollContainerRef.current?.scrollBy({ left: 500, behavior: "smooth" })
  }
  function updateScrollButtons() {
    const el = scrollContainerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  const filters = [
    {
      label: "Castels",
      icon: castelIcon,
    },
    {
      label: "Cabins",
      icon: cabinHomeIcon,
    },
    {
      label: "Luxe",
      icon: luxeIcon,
    },
    {
      label: "OMG!",
      icon: OMGIcon,
    },
    {
      label: "Beachfront",
      icon: BeachFrontIcon,
    },
    {
      label: "Mansions",
      icon: mansionIcon,
    },
    {
      label: "Lakefront",
      icon: lakeFrontIcon,
    },
    {
      label: "Islands",
      icon: islandsIcon,
    },
    {
      label: "Design",
      icon: designHomesIcon,
    },
    {
      label: "Farms",
      icon: farmsIcon,
    },
    {
      label: "Trending",
      icon: trendingIcon,
    },
    {
      label: "Tiny homes",
      icon: tinyHomesIcon,
    },
    {
      label: "Tropical",
      icon: tropicalIcon,
    },
    {
      label: "Boats",
      icon: boatIcon,
    },
    {
      label: "Play",
      icon: playHomeIcon,
    },
    {
      label: "Ski-in/out",
      icon: skiInOutIcon,
    },
    {
      label: "Desert",
      icon: desertIcon,
    },
    {
      label: "A-frames",
      icon: aFramesIcon,
    },
    {
      label: "Vineyards",
      icon: vineyardsIcon,
    },
    {
      label: "Arctic",
      icon: snowIcon,
    },
    {
      label: "Rooms",
      icon: roomIcon,
    },
    {
      label: "Caves",
      icon: caveIcon,
    },
    {
      label: "Domes",
      icon: domesIcon,
    },
    {
      label: "Camping",
      icon: campingIcon,
    },
    {
      label: "New",
      icon: newHomeIcon,
    },
    {
      label: "Towers",
      icon: towerIcon,
    },
    {
      label: "Surfing",
      icon: surfingIcon,
    },
    {
      label: "Containers",
      icon: containersIcon,
    },
    {
      label: "Skiing",
      icon: skiingIcon,
    },
    {
      label: "Windmills",
      icon: windmillsIcon,
    },
    {
      label: "Dammusi",
      icon: dammusiIcon,
    },
    {
      label: "Riads",
      icon: riadsIcon,
    },
    {
      label: "Barns",
      icon: barnsIcon,
    },
    {
      label: "Yurts",
      icon: YurtsIcon,
    },
    {
      label: "Adapted",
      icon: adaptedIcon,
    },
    {
      label: "Hanoks",
      icon: hanoksIcon,
    },
    {
      label: "Golfing",
      icon: golfIcon,
    },
    {
      label: "Minsus",
      icon: minsusIcon,
    },
    {
      label: "Trulli",
      icon: trulliIcon,
    },
  ]

  useEffect(() => {
    updateScrollButtons()
    scrollContainerRef.current?.addEventListener("scroll", updateScrollButtons)
    return () =>
      scrollContainerRef.current?.removeEventListener(
        "scroll",
        updateScrollButtons
      )
  }, [])

  function onLabelClick(label) {
    setSelectedLabel(label)
  }

  return (
    <section className="filter-carousel">
      {canScrollLeft && (
        <button className="scroll-btn left" onClick={onScrollLeft}>
          <LeftIcon className="left-scroll" />
        </button>
      )}

      <div className="scroll-wrapper">
        <div className="filter-list" ref={scrollContainerRef}>
          {filters.map((filter, idx) => (
            <div
              className={`filter-item ${
                selectedLabel === filter.label ? "active" : ""
              }`}
              key={idx}
              onClick={() => onLabelClick(filter.label)}
            >
              {filter.icon ? (
                <filter.icon className="icon-img" />
              ) : (
                <img
                  className="icon-img"
                  src={filter.iconUrl}
                  alt={filter.label}
                />
              )}
              <span className="icon-label">{filter.label}</span>
            </div>

            // <div className="filter-item" key={idx}>
            //   {filter.icon ? (
            //     <filter.icon className="icon-img" />
            //   ) : (
            //     <img
            //       className="icon-img"
            //       src={filter.iconUrl}
            //       alt={filter.label}
            //     />
            //   )}
            //   <span className="icon-label">{filter.label}</span>
            // </div>

          ))}
        </div>

        {canScrollLeft && <div className="filter-fade-left" />}
        {canScrollRight && <div className="filter-fade-right" />}
      </div>

      {canScrollRight && (
        <button className="scroll-btn right" onClick={onScrollRight}>
          <RightIcon />
        </button>
      )}
    </section>
  )
}
