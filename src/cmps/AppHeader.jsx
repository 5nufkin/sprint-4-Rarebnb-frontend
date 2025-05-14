import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AirbnbLogoFull, AirbnbLogoIcon, MenuIcon } from "./Icons";
import { StayFilterExpanded } from '../cmps/StayFilterExpanded'
import { stayService } from "../services/stay";
import { loadStays } from "../store/actions/stay.actions";


export function AppHeader() {
  const loggedInUser = useSelector(storeState => storeState.userModule.loggedInUser)
  const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
  const [isAtTop, setIsAtTop] = useState(true)
  const topRef = useRef()

  useEffect(() => {
    loadStays(filterBy)
  }, [filterBy])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtTop(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.1
      }
    )

    if (topRef.current) {
      observer.observe(topRef.current)
    }

    return () => {
      if (topRef.current) observer.unobserve(topRef.current)
    }
  }, [])



  return (
    <>
      <div className="observer-top" ref={topRef}></div>
      <header className={`app-header full ${isAtTop ? 'header-large' : 'header-small'}`}>
        <section className='header-content main-layout'>
          <NavLink to="/" className="logo">
            <AirbnbLogoIcon className="logo-icon" />
            <AirbnbLogoFull className="logo-full" />
          </NavLink>

          <button className="btn-user">
            <img className="user-img" src={loggedInUser?.imgUrl} alt={loggedInUser?.fullname} /></button>
          <button className="btn-menu"><MenuIcon /></button>
        </section>

        <StayFilterExpanded filterBy={filterBy} setFilterBy={setFilterBy} />

      </header>
    </>
  )
}

//*Homes img
{/*
<img src="https://res.cloudinary.com/dbbj46yzt/image/upload/v1747242745/4aae4ed7-5939-4e76-b100-e69440ebeae4.png_im_w_240_zptu40.avif" alt="" /> */}
