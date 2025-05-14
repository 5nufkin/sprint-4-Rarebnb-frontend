import { useEffect, useRef, useState } from "react"
import {
  adaptedIcon,
  aFramesIcon,
  AmazingPoolIcon,
  AmazingViewIcon,
  BeachFrontIcon,
  BeachIcon,
  bedAndBreakfastIcon,
  boatIcon,
  cabinHomeIcon,
  campingIcon,
  castelIcon,
  caveIcon,
  chefKitchenIcon,
  containersIcon,
  countrySideIcon,
  creativeSpaces,
  dammusiIcon,
  desertIcon,
  designHomesIcon,
  domesIcon,
  earthHomesIcon,
  farmsIcon,
  golfIcon,
  grandPianosIcon,
  hanoksIcon,
  historicalHomesIcon,
  houseBoatsIcon,
  islandsIcon,
  lakeFrontIcon,
  LeftIcon,
  luxeIcon,
  mansionIcon,
  nationalParkIcon,
  newHomeIcon,
  offTheGridIcon,
  OMGIcon,
  playHomeIcon,
  riadsIcon,
  RightIcon,
  roomIcon,
  shepherdHuts,
  skiingIcon,
  skiInOutIcon,
  snowIcon,
  surfingIcon,
  tinyHomesIcon,
  topCitiesIcon,
  topOfTheWorld,
  towerIcon,
  treehousesIcon,
  trendingIcon,
  tropicalIcon,
  trulliIcon,
  vineyardsIcon,
  windmillsIcon,
} from "../../src/cmps/Icons"

export function StayIconFilter() {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

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
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087385/asset_1_wvz8jp.png",
    },
    {
      label: "Amazing pools",
      icon: AmazingPoolIcon,
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_4_eratlb.png",
    },
    {
      label: "Cabins",
      icon: cabinHomeIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087386/asset_3_mm4slz.png",
    },
    {
      label: "Luxe",
      icon: luxeIcon,
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087393/asset_18_egbufh.png",
    },
    {
      label: "OMG!",
      icon: OMGIcon,
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078079/asset_7_gmzfon.png",
    },
    {
      label: "Amazing view",
      icon: AmazingViewIcon,
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087388/asset_6_jhuyck.png",
    },
    {
      label: "Beachfront",
      icon: BeachFrontIcon,
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087389/asset_8_fxggjr.png",
    },
    {
      label: "Mansions",
      icon: mansionIcon,
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087389/asset_9_bmsvby.png",
    },
    {
      label: "Countryside",
      icon: countrySideIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747121570/countryside_qtoqjd.png",
    },
    {
      label: "Lakefront",
      icon: lakeFrontIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087390/asset_11_v2kpqd.png",
    },
    {
      label: "Islands",
      icon: islandsIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087391/asset_12_qx02rk.png",
    },
    {
      label: "Design",
      icon: designHomesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087391/asset_13_s0ylfv.png",
    },
    {
      label: "Off-the-grid",
      icon: offTheGridIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087391/asset_14_gmtlld.png",
    },
    {
      label: "Farms",
      icon: farmsIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087392/asset_15_hmpfnz.png",
    },
    {
      label: "Trending",
      icon: trendingIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087392/asset_16_bspsni.png",
    },
    {
      label: "Treehouses",
      icon: treehousesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_5_iorm5b.png",
    },
    {
      label: "Top cities",
      icon: topCitiesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_6_ykxppv.png",
    },
    {
      label: "Tiny homes",
      icon: tinyHomesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087395/asset_20_wegcaz.png",
    },
    {
      label: "Tropical",
      icon: tropicalIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087395/asset_21_nsnakp.png",
    },
    {
      label: "Top of the world",
      icon: topOfTheWorld
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087395/asset_22_vqnbok.png",
    },
    {
      label: "Historical homes",
      icon: historicalHomesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087396/asset_23_hxc6q2.png",
    },
    {
      label: "Boats",
      icon: boatIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087396/asset_24_f04fcp.png",
    },
    {
      label: "Play",
      icon: playHomeIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087397/asset_25_idnujj.png",
    },
    {
      label: "Earth homes",
      icon: earthHomesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087397/asset_26_vhcp2e.png",
    },
    {
      label: "Ski-in/out",
      icon: skiInOutIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087398/asset_27_ddbyud.png",
    },
    {
      label: "National parks",
      icon: nationalParkIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087398/asset_28_rs9hyi.png",
    },
    {
      label: "Houseboats",
      icon: houseBoatsIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087399/asset_29_sn6gss.png",
    },
    {
      label: "Desert",
      icon: desertIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087399/asset_30_ilnxez.png",
    },
    {
      label: "A-frames",
      icon: aFramesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087400/asset_31_xbvkzp.png",
    },
    {
      label: "Chef's kitchens",
      icon: chefKitchenIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087400/asset_32_jl1vmp.png",
    },
    {
      label: "Vineyards",
      icon: vineyardsIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087401/asset_33_pvgn9n.png",
    },
    {
      label: "Arctic",
      icon: snowIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_53_oq1fcf.png",
    },
    {
      label: "Rooms",
      icon: roomIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087402/asset_35_kaesg0.png",
    },
    {
      label: "Caves",
      icon: caveIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087402/asset_36_mil2ir.png",
    },
    {
      label: "Domes",
      icon: domesIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087403/asset_37_t7pct3.png",
    },
    {
      label: "Camping",
      icon: campingIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087405/asset_38_x2bkjx.png",
    },
    {
      label: "New",
      icon: newHomeIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087387/asset_5_yxg7gc.png",
    },
    {
      label: "Bed & breakfasts",
      icon: bedAndBreakfastIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087405/asset_39_sbbv7k.png",
    },
    {
      label: "Towers",
      icon: towerIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087406/asset_40_frsexx.png",
    },
    {
      label: "Surfing",
      icon: surfingIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087448/asset_41_cbsnb5.png",
    },
    {
      label: "Creative spaces",
      icon: creativeSpaces
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087471/asset_42_syujlj.png",
    },
    {
      label: "Containers",
      icon: containersIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087471/asset_43_rhrsju.png",
    },
    {
      label: "Skiing",
      icon: skiingIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087471/asset_44_tci3po.png",
    },
    {
      label: "Windmills",
      icon: windmillsIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087472/asset_45_qqqok3.png",
    },
    {
      label: "Dammusi",
      icon: dammusiIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087472/asset_46_pv0lnz.png",
    },
    {
      label: "Riads",
      icon: riadsIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087473/asset_47_tjfazg.png",
    },
    {
      label: "Barns",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087473/asset_48_dnsnpz.png",
    },
    {
      label: "Ryokans",
      // icon: 
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076727/asset_50_eic5th.png",
    },
    {
      label: "Cycldic homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078135/asset_58_cpnm9t.png",
    },
    {
      label: "Grand pianos",
      icon: grandPianosIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087475/asset_51_tb4sov.png",
    },
    {
      label: "Yurts",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_53_oq1fcf.png",
    },
    {
      label: "Shepherd's huts",
      icon: shepherdHuts
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087476/asset_53_aazica.png",
    },
    {
      label: "Adapted",
      icon: adaptedIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_55_bkiemu.png",
    },
    {
      label: "Hanoks",
      icon: hanoksIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078120/asset_55_qnrt7p.png",
    },
    {
      label: "Campers",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078120/asset_56_qjkmge.png",
    },
    {
      label: "Golfing",
      icon: golfIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078075/asset_4_d86ei1.png",
    },
    {
      label: "Minsus",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076708/asset_59_gklgvt.png",
    },
    {
      label: "Casas particulares",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078135/asset_58_cpnm9t.png",
    },
    {
      label: "Trulli",
      icon: trulliIcon
      // iconUrl:
      //   "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078135/asset_59_yc8wi5.png",
    },
    {
      label: "Beach",
      icon: BeachIcon,

      // "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087479/asset_60_hjkfvt.png",
    },
    {
      label: "Lake",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076708/asset_62_xwwnlj.png",
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

  return (
    <section className="filter-carousel">
      {canScrollLeft && (
        <button className="scroll-btn left" onClick={onScrollLeft}>
          <LeftIcon className="left-scroll"/>
        </button>
      )}

      <div className="scroll-wrapper">
        <div className="filter-list" ref={scrollContainerRef}>
          {filters.map((filter, idx) => (
            <div className="filter-item" key={idx}>
              {filter.icon ? (
                <filter.icon className="icon-img" />
              ) : (
                <img
                  className="icon-img"
                  src={filter.iconUrl}
                  alt={filter.label}
                />
              )}
              <span className="label">{filter.label}</span>
            </div>
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
