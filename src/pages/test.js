import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />
    <div className="grid">
      <div className="menu">
        <div className="menu__column">
          <div className="menu__blk">
            <h1>studio mitsu</h1>
          </div>
          <div className="menu__blk">
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
        </div>
        <div className="menu__column">
          <div className="menu__blk --fullHeight">
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
      <div className="content">
        <div className="slider">
          <div className="slide"></div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
