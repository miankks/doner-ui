import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'

import './Header.css'
import Logo from '../../static/images/Fondon1.svg'

const Header = ({ auth }) => {
  const authButton = auth ? (
    <Link to="/logout">Logga ut</Link>
  ) : (
      <Link to="/login">Logga in</Link>
    )

  return (
    <React.Fragment>
      <div className='row flex-wrap-row'>
        <div className='header'>
          <span className='header-logo'>
            <Link to='/'>
              <img src={Logo} alt='Fonden Logotype' />
            </Link>
          </span>

          <span className='header-menu'>
            <div className='header-menu-row'>
              <ul className="menu upper">
                <li role="menuitem">
                  {/* <a href="/om-barncancerfonden/" tabIndex="0"><span>Om Fonden</span></a> */}
                  <a href="/om-fonden/" tabIndex="0"><span>Om Fonden</span></a>
                </li>
                <li className="is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true" aria-expanded="false" aria-label="
                              Lokala föreningar
                              
                          ">
                  <a href="#dropped-menu">
                    <span>Lokala föreningar</span>
                    <i className="icon-menu"></i>
                  </a>
                  {/* <ul id="dropped-menu" className="menu submenu is-dropdown-submenu first-sub vertical" data-submenu="" aria-hidden="true" role="menu">
                    <li role="menuitem" className="is-submenu-item is-dropdown-submenu-item"><a href="/lokala-foreningar/sodra/">Södra</a></li>
                    <li role="menuitem" className="is-submenu-item is-dropdown-submenu-item"><a href="/lokala-foreningar/vastra/">Västra</a></li>
                    <li role="menuitem" className="is-submenu-item is-dropdown-submenu-item"><a href="/lokala-foreningar/ostra/">Östra</a></li>
                    <li role="menuitem" className="is-submenu-item is-dropdown-submenu-item"><a href="/lokala-foreningar/stockholm-gotland/">Stockholm Gotland</a></li>
                    <li role="menuitem" className="is-submenu-item is-dropdown-submenu-item"><a href="/lokala-foreningar/mellansverige/">Mellansverige</a></li>
                    <li role="menuitem" className="is-submenu-item is-dropdown-submenu-item"><a href="/lokala-foreningar/norra/">Norra</a></li>
                          </ul> */}
                </li>
                <li role="menuitem">
                  <a href="/event/"><span>Idrottsevenemang</span></a>
                </li>
                <li role="menuitem">
                  <a href="/press/"><span>Press</span></a>
                </li>
                <li role="menuitem">
                  <a href="/link/8b3ca2f7aac744ad9ca8c312569ecd9d.aspx?epslanguage=en"><span>In English</span></a>
                </li>


                <li role="menuitem">
                  {authButton}
                </li>

              </ul>
            </div>

            <div className="header-menu-row">


              <ul className="menu lower left">
                <li><Link to='/blockchain'>Blockchain</Link></li>
                <li><Link to='/packages'>Jag vill bidra</Link></li>
                <li><Link to='/donations'>Mina gåvor</Link></li>
              </ul>

              {/* <div className="c-header__bottomwrapper--beta">

              <form action="/sok/" method="GET">

                  <button type="button" aria-expanded="false" aria-controls="header-menu" className="c-header__menu-button button js-menu-button blank minorpad button--menu" id="js-menu-button">
                      <span aria-hidden="true">
                          <i className="icon-menu"></i>
                      </span>
                      <label for="nav-primary">Meny</label>
                  </button>

                  <a className="button js-shop-button blank minorpad button--chart hide" id="js-shop-button" href="/varukorg/">
                      <label className="show-for-sr" for="header-shoppingbasket">Din varukorg</label>
                      <span aria-hidden="true">
                          <i className="icon-cart"></i>
                      </span>
                      <span id="cartItemsCount" className="warning badge">0</span>
                  </a>

                  <button type="button" aria-expanded="false" aria-controls="header-search" className="button js-search-button blank minorpad button--search" id="js-search-button" autocomplete="off">
                      <label for="search-field" className="show-for-sr">
                          Sök
                      </label>
                      <span aria-hidden="true">
                          <i className="icon-search"></i>
                      </span>
                  </button>

                  <div className="input-group  js-header__search">
                      <label for="search-field" className="is-vishidden">
                          Sök 
                      </label>
                      <input type="search" name="q" id="search-field" className="quick-search input-group-field js-search-field search-field--autocomplete ui-autocomplete-input" placeholder="" aria-describedby="search field" data-search-url="https://www.barncancerfonden.se/sok/Autocomplete/" autocomplete="off" />
                      <div className="input-group-button input-group-button--search">
                          <button className="button" type="Submit">
                              <i className="icon-search" aria-hidden="true"></i>
                              <span className="visihidden">
                                  Sök
                              </span>
                          </button>
                      </div>
                  </div>
              </form>
          </div> */}

            </div>
          </span>

        </div>



      </div>
      <div className='row'>
        <div className='breadcrumbs'>
          <Breadcrumbs
            separator={<b> &gt; </b>}
            container={'div'}
            containerProps={{ className: 'breadcrumbs-inner' }}
            item={Link}
            finalItem={'span'}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

Header.propTypes = {
  auth: PropTypes.bool
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
