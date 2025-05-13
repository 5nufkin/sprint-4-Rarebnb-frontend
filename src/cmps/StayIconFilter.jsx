import { useEffect, useRef, useState } from "react"
import { LeftIcon, RightIcon } from "../../src/cmps/Icons"

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
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087385/asset_1_wvz8jp.png",
    },
    {
      label: "Amazing pools",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_4_eratlb.png",
    },
    {
      label: "Cabins",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087386/asset_3_mm4slz.png",
    },
    {
      label: "Luxe",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087393/asset_18_egbufh.png",
    },
    {
      label: "OMG!",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_8_abswds.png",
    },
    {
      label: "Amazing view",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087388/asset_6_jhuyck.png",
    },
    {
      label: "Beachfront",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087389/asset_8_fxggjr.png",
    },
    {
      label: "Mansions",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087389/asset_9_bmsvby.png",
    },
    {
      label: "Countryside",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747121570/countryside_qtoqjd.png",
    },
    {
      label: "Lakefront",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087390/asset_11_v2kpqd.png",
    },
    {
      label: "Islands",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087391/asset_12_qx02rk.png",
    },
    {
      label: "Design",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087391/asset_13_s0ylfv.png",
    },
    {
      label: "Off-the-grid",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087391/asset_14_gmtlld.png",
    },
    {
      label: "Farms",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087392/asset_15_hmpfnz.png",
    },
    {
      label: "Trending",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087392/asset_16_bspsni.png",
    },
    {
      label: "Treehouses",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_5_iorm5b.png",
    },
    {
      label: "Top cities",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_6_ykxppv.png",
    },
    {
      label: "Tiny homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087395/asset_20_wegcaz.png",
    },
    {
      label: "Tropical",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087395/asset_21_nsnakp.png",
    },
    {
      label: "Top of the world",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087395/asset_22_vqnbok.png",
    },
    {
      label: "Historical homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087396/asset_23_hxc6q2.png",
    },
    {
      label: "Boats",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087396/asset_24_f04fcp.png",
    },
    {
      label: "Play",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087397/asset_25_idnujj.png",
    },
    {
      label: "Earth homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087397/asset_26_vhcp2e.png",
    },
    {
      label: "Ski-in/out",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087398/asset_27_ddbyud.png",
    },
    {
      label: "National parks",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087398/asset_28_rs9hyi.png",
    },
    {
      label: "Houseboats",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087399/asset_29_sn6gss.png",
    },
    {
      label: "Desert",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087399/asset_30_ilnxez.png",
    },
    {
      label: "A-frames",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087400/asset_31_xbvkzp.png",
    },
    {
      label: "Chef's kitchens",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087400/asset_32_jl1vmp.png",
    },
    {
      label: "Vineyards",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087401/asset_33_pvgn9n.png",
    },
    {
      label: "Arctic",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_53_oq1fcf.png",
    },
    {
      label: "Rooms",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087402/asset_35_kaesg0.png",
    },
    {
      label: "Caves",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087402/asset_36_mil2ir.png",
    },
    {
      label: "Domes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087403/asset_37_t7pct3.png",
    },
    {
      label: "Camping",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087405/asset_38_x2bkjx.png",
    },
    {
      label: "New",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087387/asset_5_yxg7gc.png",
    },
    {
      label: "Bed & breakfasts",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087405/asset_39_sbbv7k.png",
    },
    {
      label: "Towers",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087406/asset_40_frsexx.png",
    },
    {
      label: "Surfing",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087448/asset_41_cbsnb5.png",
    },
    {
      label: "Creative spaces",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087471/asset_42_syujlj.png",
    },
    {
      label: "Containers",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087471/asset_43_rhrsju.png",
    },
    {
      label: "Skiing",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087471/asset_44_tci3po.png",
    },
    {
      label: "Windmills",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087472/asset_45_qqqok3.png",
    },
    {
      label: "Dammusi",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087472/asset_46_pv0lnz.png",
    },
    {
      label: "Riads",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087473/asset_47_tjfazg.png",
    },
    {
      label: "Barns",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087473/asset_48_dnsnpz.png",
    },
    {
      label: "Ryokans",
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
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087475/asset_51_tb4sov.png",
    },
    {
      label: "Yurts",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_53_oq1fcf.png",
    },
    {
      label: "Shepherd's huts",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087476/asset_53_aazica.png",
    },
    {
      label: "Adapted",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_55_bkiemu.png",
    },
    {
      label: "Hanoks",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078120/asset_55_qnrt7p.png",
    },
    {
      label: "Campers",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078120/asset_56_qjkmge.png",
    },
    {
      label: "Golfing",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078075/asset_4_d86ei1.png",
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
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078135/asset_59_yc8wi5.png",
    },
    {
      label: "Beach",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087479/asset_60_hjkfvt.png",
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
          <LeftIcon />
        </button>
      )}

      <div className="scroll-wrapper">
        <div className="filter-list" ref={scrollContainerRef}>
          {filters.map((filter, idx) => (
            <div className="filter-item" key={idx}>
              <img
                className="icon-img"
                src={filter.iconUrl}
                alt={filter.label}
              />
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
