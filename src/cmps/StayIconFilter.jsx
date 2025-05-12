export function StayIconFilter() {
  const filters = [
    {
      label: "Arctic",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076719/asset_34_o7egrr.png",
    },
    {
      label: "New",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076720/asset_39_g2mvv7.png",
    },
    {
      label: "A-frames",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076719/asset_31_m3rvi7.png",
    },
    {
      label: "Domes",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076720/asset_37_lbax4n.png",
    },
    {
      label: "Lake",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076708/asset_62_xwwnlj.png",
    },
    {
      label: "Beach",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076708/asset_1_iglns6.png",
    },
    {
      label: "Hanoks",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_56_xurb2f.png",
    },
    {
      label: "Adapted",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076707/asset_55_bkiemu.png",
    },
    {
      label: "Surfing",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076721/asset_42_igctlh.png",
    },
    {
      label: "Camping",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076720/asset_38_ny5pcu.png",
    },
    {
      label: "Cave",
      iconUrl:
        "https://res.cloudinary.com/dkdlwoien/image/upload/v1747076720/asset_36_tmbusb.png",
    },
    {
      label: "Tower",
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
  ]

  return (
    <section className="filter-carousel">
      <button className="scroll-btn left">←</button>

      <div className="filter-list">
        {filters.map((filter, idx) => (
          <div className="filter-item" key={idx}>
            <img className="icon-img" src={filter.iconUrl} alt={filter.label} />
            <span className="label">{filter.label}</span>
          </div>
        ))}
      </div>

      <button className="scroll-btn right">→</button>
    </section>
  )
}
