import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'
import { AirbnbLogoFull, AirbnbLogoIcon, MagnifyingGlassIcon, MenuIcon, UserGuestIcon } from './Icons'
import { StayFilterExpanded } from '../cmps/StayFilterExpanded'
import { loadStays } from '../store/actions/stay.actions'
import { HamburgerMenu } from './HamburgerMenu'
import { StayFilterMinimized } from './StayFilterMinimized'
import { getFilterFromSearchParams } from '../services/util.service'
import { LoginModal } from '../pages/Login'
import { logout } from '../store/actions/user.actions'
import { StayIconFilter } from '../cmps/StayIconFilter'
import { MainNav } from './MainNav'

export function AppHeader() {
  const loggedInUser = useSelector((storeState) => storeState.userModule.loggedInUser)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true)
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 639)
  const [activeSection, setActiveSection] = useState('')

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const [mobileSearchFilter, setMobileSearchFilter] = useState({
    country: '',
    checkIn: '',
    checkOut: '',
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
    guestTotal: 0,
  })

  const menuRef = useRef()
  const buttonRef = useRef()
  const topRef = useRef()
  const currPage = useLocation()

  const [searchParams, setSearchParams] = useSearchParams()
  const filterBy = getFilterFromSearchParams(searchParams)

  useEffect(() => {
    const hasToken = document.cookie.includes('loginToken')
    const hasUser = !!loggedInUser

    if (!hasUser && hasToken) {
      logout()
    }
  }, [loggedInUser])

  useEffect(() => {
    loadStays(filterBy)
  }, [searchParams])

  useEffect(() => {
    const filterBy = Object.fromEntries(searchParams.entries())
    filterBy.pageIdx = +filterBy.pageIdx || 0
  }, [])

  useEffect(() => {
    if (currPage.pathname !== '/') {
      setIsAtTop(false)
      setIsHeaderExpanded(false)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtTop(entry.isIntersecting)
        if (entry.isIntersecting) {
          setIsHeaderExpanded(false)
        }
      },
      { root: null, threshold: 0 }
    )

    if (topRef.current) {
      observer.observe(topRef.current)
    }

    return () => {
      if (topRef.current) observer.unobserve(topRef.current)
    }
  }, [currPage.pathname])

  useEffect(() => {
    function handleResize() {
      setIsScreenWide(window.innerWidth > 639)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    function handleClickOutside(ev) {
      if (
        menuRef.current &&
        !menuRef.current.contains(ev.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(ev.target)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  function closeHamburgerMenu() {
    setIsMenuOpen(false)
  }

  function openLoginModal() {
    closeHamburgerMenu()
    setIsLoginModalOpen(true)
  } currPage

  function closeLoginModal() {
    setIsLoginModalOpen(false)
  }

  return (
    <>
      <div className="observer-top" ref={topRef}></div>
      <header
        className={`app-header main-layout full ${(isAtTop && currPage.pathname === '/') || isHeaderExpanded ? 'header-large' : 'header-small'
          }`}
      >
        {/* Mobile: show compact search bar + icons only at top of page */}
        {!isScreenWide && isAtTop && !isHeaderExpanded && (
          <div className="search-wrapper-card">
            <button
              className="compact-search-bar"
              onClick={() => setIsHeaderExpanded(true)}
            >
              <MagnifyingGlassIcon />
              <span>Start your search</span>
            </button>

            <StayIconFilter />
          </div>
        )}

        {!isHeaderExpanded && (
          <StayFilterMinimized
            filterBy={filterBy}
            isHidden={isAtTop && currPage.pathname === '/'}
            setIsHeaderExpanded={setIsHeaderExpanded}
            setActiveSection={setActiveSection}
          />
        )}

        {/* Mobile: show minimized bar with filter icons when scrolling */}
        {!isScreenWide && isHeaderExpanded && (
          <div className="mobile-overlay">
            <button
              className="btn-close-overlay"
              onClick={() => setIsHeaderExpanded(false)}
            >
              ×
            </button>

            <StayFilterExpanded
              filterBy={mobileSearchFilter}
              setFilterBy={setMobileSearchFilter}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
        )}

        {/* Shared content: logo and user menu */}
        <section className="header-content">
          <NavLink to="/" className="logo">
            <AirbnbLogoIcon className="logo-icon" />
            <img className='logo-full' src="https://res.cloudinary.com/dbbj46yzt/image/upload/v1748125476/ChatGPT_Image_May_25_2025_01_24_19_AM_ih42tm.png" />
          </NavLink>
          {((isAtTop && currPage.pathname === '/') || isHeaderExpanded) && <MainNav />}
          {isScreenWide && (
            <div className="menu-container">
              <button
                className="user-menu-btn"
                onClick={toggleMenu}
                ref={buttonRef}
              >
                <MenuIcon className="menu-icon" />
                {!loggedInUser ? (
                  <UserGuestIcon />
                ) : (
                  <img
                    className="user-img"
                    src={loggedInUser.imgUrl}
                    alt={loggedInUser.fullname}
                  />
                )}
              </button>

              {isMenuOpen && (
                <div ref={menuRef}>
                  <HamburgerMenu
                    onClose={closeHamburgerMenu}
                    onOpenLogin={openLoginModal}
                  />
                </div>
              )}

              {isLoginModalOpen && (
                <LoginModal
                  onClose={closeLoginModal}
                  onLoginSuccess={closeLoginModal}
                />
              )}
            </div>
          )}
        </section>

        {/* Desktop: always show expanded filter when at top or open */}
        {isScreenWide && (isHeaderExpanded || isAtTop) && (
          <StayFilterExpanded
            filterBy={filterBy}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}

        {/* Mobile: show expanded filter inside overlay modal */}
        {!isScreenWide && isHeaderExpanded && (
          <div className="mobile-overlay">
            <button
              className="btn-close-overlay"
              onClick={() => setIsHeaderExpanded(false)}
            >
              ×
            </button>
            <StayFilterExpanded
              filterBy={filterBy}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              onClose={() => {
                setActiveSection('')
                setIsHeaderExpanded(false)
              }}
            />
          </div>
        )}
      </header>
      <div
        className={`header-backdrop ${!isAtTop && isHeaderExpanded ? 'visible' : ''
          }`}
        onClick={() => {
          setIsHeaderExpanded(false)
          setActiveSection('')
        }}
      ></div>
    </>
  )
}
