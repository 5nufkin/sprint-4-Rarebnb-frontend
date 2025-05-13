import { useRef } from "react"
import { LeftIcon, RightIcon } from "../../src/cmps/Icons"

export function StayIconFilter() {
  const scrollContainerRef = useRef(null)

  function onScrollLeft() {
    scrollContainerRef.current?.scrollBy({ left: -700, behavior: "smooth" })
  }
  function onScrollRight() {
    scrollContainerRef.current?.scrollBy({ left: 700, behavior: "smooth" })
  }

  const filters = [
    {
      label: "Arctic",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_53_oq1fcf.png",
    },
    {
      label: "New",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087387/asset_5_yxg7gc.png",
    },
    {
      label: "A-frames",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087400/asset_31_xbvkzp.png",
    },
    {
      label: "Domes",
      iconUrl: "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087403/asset_37_t7pct3.png"
    },
    {
      label: "Lake",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076708/asset_62_xwwnlj.png",
    },
    {
      label: "Beach",
      iconUrl: "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087479/asset_60_hjkfvt.png"
    },
    {
      label: "Hanoks",
      iconUrl: "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078120/asset_55_qnrt7p.png"
    },
    {
      label: "Adapted",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_55_bkiemu.png",
    },
    {
      label: "Surfing",
      iconUrl: "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087448/asset_41_cbsnb5.png"
    },
    {
      label: "Campers",
      iconUrl: "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078120/asset_56_qjkmge.png"
    },
    {
      label: "Caves",
      iconUrl: "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087402/asset_36_mil2ir.png"
    },
    {
      label: "Towers",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076721/asset_41_ruqbxs.png",
    },
    {
      label: "National parks",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076719/asset_28_jslw9x.png",
    },
    {
      label: "Boats",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076711/asset_24_zs5hxn.png",
    },
    {
      label: "Tropical",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076710/asset_21_cuxs03.png",
    },
    {
      label: "Tiny homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076710/asset_20_djqctz.png",
    },
    {
      label: "Grand pianos",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078119/asset_51_zyf3ex.png",
    },
    {
      label: "Windmills",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078112/asset_45_cfaocv.png",
    },
    {
      label: "Containers",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078112/asset_43_excpzs.png",
    },
    {
      label: "Dammusi",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078112/asset_46_l0p0kn.png",
    },
    {
      label: "Barns",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078113/asset_48_lwpmg6.png",
    },
    {
      label: "Vineyards",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078100/asset_33_nltjxi.png",
    },
    {
      label: "Bed & breakfasts",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078107/asset_39_zvjgdv.png",
    },
    {
      label: "Creative spaces",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078107/asset_42_galcb0.png",
    },
    {
      label: "Ski-in/out",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078112/asset_44_oninsx.png",
    },
    {
      label: "Rooms",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078100/asset_35_qmvilw.png",
    },
    {
      label: "Chef kitchen",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078100/asset_32_nkkkyp.png",
    },
    {
      label: "Desert",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076719/asset_30_wmvje2.png",
    },
    {
      label: "Earth homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076719/asset_26_cdvesj.png",
    },
    {
      label: "Histociral homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076710/asset_23_euvuyo.png",
    },
    {
      label: "Top cities",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_6_ykxppv.png",
    },
    {
      label: "Luxe",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076710/asset_19_yaqdxo.png",
    },
    {
      label: "Off-the-grid",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076709/asset_16_druvl0.png",
    },
    {
      label: "Trending",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076710/asset_18_b1aurj.png",
    },
    {
      label: "Golfing",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_58_zkeykv.png",
    },
    {
      label: "Farms",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078084/asset_15_ohyulg.png",
    },
    {
      label: "Countryside",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078079/asset_10_je1oeh.png",
    },
    {
      label: "Amazing view",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078076/asset_6_t8vfgp.png",
    },
    {
      label: "Amazing pools",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078074/asset_2_va6d1q.png",
    },
    {
      label: "Shepherd's huts",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078119/asset_53_zzrauf.png",
    },
    {
      label: "Minsus",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078130/asset_57_zjl8z5.png",
    },
    {
      label: "Trulli",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078135/asset_59_yc8wi5.png",
    },
    {
      label: "Casas particulares",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078135/asset_58_cpnm9t.png",
    },
    {
      label: "Cycldic homes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078135/asset_58_cpnm9t.png",
    },
    {
      label: "Ryokans",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076727/asset_50_eic5th.png",
    },
    {
      label: "OMG!",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_8_abswds.png",
    },
    {
      label: "Mansions",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087389/asset_9_bmsvby.png",
    },
    {
      label: "Beachfront",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087389/asset_8_fxggjr.png",
    },
    {
      label: "Cabins",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087386/asset_3_mm4slz.png",
    },
    {
      label: "Yurts",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076706/asset_53_oq1fcf.png",
    },
    {
      label: "Riads",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087473/asset_47_tjfazg.png",
    },
    {
      label: "Campers",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747078120/asset_56_qjkmge.png",
    },
    {
      label: "Play",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087397/asset_25_idnujj.png",
    },
    {
      label: "Treehouses",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_5_iorm5b.png",
    },
    {
      label: "Caves",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747087402/asset_36_mil2ir.png",
    },
  ]

  return (
    <section className="filter-carousel">
      <button className="scroll-btn left" onClick={onScrollLeft}>
        <LeftIcon />
      </button>

      <div className="filter-list" ref={scrollContainerRef}>
        {filters.map((filter, idx) => (
          <div className="filter-item" key={idx}>
            <img className="icon-img" src={filter.iconUrl} alt={filter.label} />
            <span className="label">{filter.label}</span>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={onScrollRight}>
        <RightIcon />
      </button>
    </section>
  )
}
