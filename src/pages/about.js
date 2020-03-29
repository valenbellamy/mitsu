import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="Accueil" />
      <div className="menu-fixed">
        <div className="logo">
          <Link to="/">
            <h1>studio mitsu</h1>
          </Link>
        </div>
        <div className="menu__collapse">
          <div className="menu__center">
            <ul>
              <li>
                <Link to="/about">
                  <span>about</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span>contact</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu__dropdown">
            <div className="dropdown">
              <span>projets</span>
              <div className="dropdown__items">
                <ul
                  className="menu__list dropdown__item"
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
                    <Link to="/contact">
                      <span>labatut</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span>lv the book</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span>hobbies</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span>fleury-mérogis</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span>martin massé</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
