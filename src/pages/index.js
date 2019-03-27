import React from "react"
import Header from "../components/header"
import About from "../components/about"
import Navbar from "../components/navbar"
import ColoredLine from "../components/colored_line"
import ClinicInformation from "../components/clinic_information"
import ServiceAreas from "../components/service_areas"
import News from "../components/news"
import FooterBanner from "../components/footer_banner"
import DoctorsCarousel from "../components/doctors_carousel"
import OpinionsCarousel from "../components/opinions_carousel"
import StaffCarousel from "../components/staff_carousel"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

import * as feather from 'styled-icons/feather'
import * as faSolid from 'styled-icons/fa-solid'
import * as material from 'styled-icons/material'
import * as boxiconsSolid from 'styled-icons/boxicons-solid'


const IndexPage = () => (
  <>
    <Header/>
    <Navbar/>
    <DoctorsCarousel/>
    <About/>
    <ClinicInformation/>
    <OpinionsCarousel/>
    <ServiceAreas/>
    <StaffCarousel/>
    <News/>
    <FooterBanner/>
    <ScrollUpButton ContainerClassName = "ba_button"/>
  </>
)

export default IndexPage
