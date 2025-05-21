import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import {
  AirbnbLogoFull,
  AirbnbLogoIcon,
  MenuIcon,
  UserGuestIcon,
} from './Icons'
import { StayFilterExpanded } from '../cmps/StayFilterExpanded'
import { stayService } from '../services/stay'
import { loadStays } from '../store/actions/stay.actions'
import { HamburgerMenu } from './HamburgerMenu'
import { StayFilterMinimized } from './StayFilterMinimized'
import { getFilterFromSearchParams } from '../services/util.service'
import { LoginModal } from '../pages/Login'

export function AppHeader() {
  const loggedInUser = useSelector(
    (storeState) => storeState.userModule.loggedInUser
  )
  // const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
  // const pageIdx = useSelector(storeState => storeState.stayModule.pageIdx)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(true)
  const [isScreenWide, setIsScreenWide] = useState(window.innerWidth > 639)
  const [activeSection, setActiveSection] = useState('')

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const menuRef = useRef()
  const buttonRef = useRef()
  const topRef = useRef()

  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const defaultFilter = stayService.getDefaultFilter()
  const filterBy = getFilterFromSearchParams(searchParams)

  useEffect(() => {
    loadStays(filterBy)
  }, [searchParams])

  useEffect(() => {
    const filterBy = Object.fromEntries(searchParams.entries())
    filterBy.pageIdx = +filterBy.pageIdx || 0
  }, [])

  useEffect(() => {
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
  }, [])

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

  // useEffect(() => {
  //   function handleClickOutside(ev) {
  //     if ( menuRef.current && !menuRef.current.contains(ev.target)) {
  //       setIsMenuOpen(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [isMenuOpen])

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }

  function closeHamburgerMenu() {
    setIsMenuOpen(false)
  }

  function openLoginModal() {
    closeHamburgerMenu()
    setIsLoginModalOpen(true)
  }

  function closeLoginModal() {
    setIsLoginModalOpen(false)
  }

  return (
    <>
      <div className="observer-top" ref={topRef}></div>
      <header
        className={`app-header main-layout full ${
          isAtTop || isHeaderExpanded ? 'header-large' : 'header-small'
        }`}
      >
        {!isHeaderExpanded && (
          <StayFilterMinimized
            filterBy={filterBy}
            isHidden={isAtTop}
            setIsHeaderExpanded={setIsHeaderExpanded}
            setActiveSection={setActiveSection}
          />
        )}

        <section className="header-content ">
          <NavLink to="/" className="logo">
            <AirbnbLogoIcon className="logo-icon" />
            <AirbnbLogoFull className="logo-full" />
          </NavLink>
          <div className="spacer"></div>
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

        {(isHeaderExpanded || isAtTop) && (
          <StayFilterExpanded
            filterBy={filterBy}
            // setFilterBy={setFilterBy}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        )}
      </header>
      <div
        className={`header-backdrop ${
          !isAtTop && isHeaderExpanded ? 'visible' : ''
        }`}
        onClick={() => {
          setIsHeaderExpanded(false)
          setActiveSection('')
        }}
      ></div>
    </>
  )
}
