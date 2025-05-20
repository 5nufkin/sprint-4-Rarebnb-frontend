import { GlobeIcon, PrivacyChoicesIcon } from './Icons'

export function AppFooter() {
  return (
    <footer className="app-footer full">
      <div className="footer-left">
        <span>© 2025 Rarebnb, Inc.</span>
        <span> · </span>
        <div className='help-section-fotter'>
          <a href="#">Terms</a>
          <span> · </span>
          <a href="#">Sitemap</a>
          <span> · </span>
          <a href="#">Privacy</a>
          <span> · </span>
        </div>
        <a href="#">Your Privacy Choices {<PrivacyChoicesIcon />}</a>
      </div>

      <div className="footer-right">
        <div className="lng-cur">
          <a className="language">{<GlobeIcon />}English (US)</a>
          <a>$ USD</a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
