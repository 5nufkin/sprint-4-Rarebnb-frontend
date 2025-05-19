import { GlobeIcon, PrivacyChoicesIcon } from "./Icons";

export function AppFooter() {
  return (
    <footer className="app-footer full">
      <div className="footer-left">
        <span>© 2025 Rarebnb, Inc.</span>
        <span> · </span>
        <a href="#">Terms</a>
        <span> · </span>
        <a href="#">Sitemap</a>
        <span> · </span>
        <a href="#">Privacy</a>
        <span> · </span>
        <a href="#">Your Privacy Choices {<PrivacyChoicesIcon />
        }</a>
      </div>

      <div className="footer-right">
        <a className="language">{<GlobeIcon />}English (US)</a>
        <a>$ ILS</a>
        <a href="#"> Support & resources</a>
      </div>
    </footer>
  )
}
