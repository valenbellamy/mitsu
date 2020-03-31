import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Menu = ({ showFilters, showCart }) => {
  return (
    <nav>
      <div className="menu__top">
        <div>
          <Link to="/">
            <h1>studio mitsu</h1>
          </Link>
          <div className={`cart ${showCart ? "--show" : ""}`}>cart</div>
          <div className="burger-btn --open">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="menu__collapse">
        <div className="menu__center">
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu__dropdown">
          <div className="dropdown --special">
            <span>projets</span>
            <div className="dropdown__menu">
              <ul
                className="menu__list --special-color dropdown__item"
                id="project__category"
              >
                <li>
                  <span>identity</span>
                </li>
                <li>
                  <span>art direction</span>
                </li>
                <li>
                  <span>editorial design</span>
                </li>
                <li>
                  <span>graphic design</span>
                </li>
                <li>
                  <span>digital design</span>
                </li>
                <li>
                  <span>packaging</span>
                </li>
                <li>
                  <span>scenography</span>
                </li>
              </ul>
              <ul className="menu__list dropdown__item">
                <li>
                  <Link to="/project">
                    <span>labatut</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>lv the book</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>hobbies</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>fleury-mérogis</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>martin massé</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>labatut</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>lv the book</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>hobbies</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>fleury-mérogis</span>
                  </Link>
                </li>
                <li>
                  <Link to="/project">
                    <span>martin massé</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="filters">
            <Link to="/editions">
              <span>editions</span>
            </Link>
            {/* <div className="dropdown__menu"> */}
            <ul
              className={`filter-values menu__list ${
                showFilters ? "--show" : ""
              }`}
            >
              <li>collection n°1</li>
              <li>special editions</li>
              <li>selected book</li>
              <li>all</li>
            </ul>
            {/* </div> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

Menu.defaultProps = {
  showFilters: false,
  showCart: false,
}

Menu.propTypes = {
  showFilters: PropTypes.bool,
  showCart: PropTypes.bool,
}

export default Menu
