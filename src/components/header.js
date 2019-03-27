import { Link } from "gatsby"
import React from "react"
import "../styles/_header.scss"
import Navbar from "./navbar"
import ColoredLine from "./colored_line"

import {Phone} from 'styled-icons/material'
import {Map} from 'styled-icons/boxicons-solid'


const Header = () => (
  <header className = "header_format">
    <style>
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
      @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,400,700');
    </style>
    <div className = "header_content">
      <div className = "contact_area">
        <span style = {{ margin: 0 }}>
          <Link to="/" className = "elements">
            <Phone className = "contact_icon"/>
            {'(212) 434-2000'}
          </Link>
          <span className = "elements">
            <Map className = "contact_icon" />
            {'100 E 77th St, New York, New York 10075'}
          </span>
        </span>
      </div>
    </div>
    <ColoredLine/>
  </header>
)

export default Header
