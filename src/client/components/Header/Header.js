import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'

import './Header.css'
import Logo from '../../static/images/eways-logo.png'

const Header = ({ auth }) => {
  const authButton = auth ? (
    <Link to="/logout">Logga ut</Link>
  ) : (
    <Link to="/login">Logga in</Link>
  )

  return (
    <React.Fragment>
      <div className="row flex-wrap-row">
        <div className="header">
          <span className="header-logo">
            <Link to="/">
              <img src={Logo} alt="Fonden Logotype" className="logo-image" />
            </Link>
          </span>

          <span className="header-menu">
            <div className="header-menu-row">
              <ul className="menu upper">
                <li role="menuitem">
                  <a href="/om-eways/" tabIndex="0">
                    <span>Om Eways</span>
                  </a>
                </li>
                {/* <li
                  className="is-dropdown-submenu-parent opens-right"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Lokala föreningar"
                >
                  <a href="#dropped-menu">
                    <span>Lokala föreningar</span>
                    <i className="icon-menu"></i>
                  </a>
                </li>
                <li role="menuitem">
                  <a href="/event/">
                    <span>Idrottsevenemang</span>
                  </a>
                </li>
                <li role="menuitem">
                  <a href="/press/">
                    <span>Press</span>
                  </a>
                </li> */}
                <li role="menuitem">
                  <a href="/link/8b3ca2f7aac744ad9ca8c312569ecd9d.aspx?epslanguage=en">
                    <span>In English</span>
                  </a>
                </li>

                <li role="menuitem">{authButton}</li>
              </ul>
            </div>

            <div className="header-menu-row">
              <ul className="menu lower left">
                <li>
                  <Link to="/ewaysinfo">Eways</Link>
                </li>
                <li>
                  <Link to="/packages">Min Profil</Link>
                </li>
                <li>
                  <Link to="/courses">Mina Kurser</Link>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="breadcrumbs">
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
  auth: PropTypes.bool,
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
