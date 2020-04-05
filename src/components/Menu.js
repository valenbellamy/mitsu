import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"

const Menu = ({ showFilters, showProjects, showCart }) => {
  const [open, setOpen] = useState(false)
  const [showprojects, setShowprojects] = useState(false)
  const [showeditions, setShoweditions] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allContentfulProjet(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            titre
            slug
            client
          }
        }
      }
      allContentfulCategorie {
        edges {
          node {
            id
            nom
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (showProjects && window.innerWidth < 992) {
      setShowprojects(true)
    }
    if (showFilters) {
      setShoweditions(true)
    }
  }, [])

  useEffect(() => {
    if (showFilters && window.innerWidth < 992) {
      // if (showeditions) {
      //   setShowprojects(false)
      // }
      if (showprojects) {
        setShoweditions(false)
      } else {
        setShoweditions(true)
      }
    }
  }, [showprojects])

  return (
    <nav>
      <div className="menu__top">
        <div>
          <Link to="/">
            <h1>studio mitsu</h1>
          </Link>
          <div className={`cart ${showCart ? "--show" : ""}`}>cart</div>
          <div
            className={`burger-btn ${open ? "--open" : ""}`}
            onClick={() => setOpen(open => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`menu__collapse ${open ? "--visible" : ""}`}>
        <div className="menu__center">
          <ul>
            <li>
              <Link to="/about" activeClassName="active">
                about
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu__dropdown">
          <div className={`dropdown --special ${showprojects ? "--show" : ""}`}>
            <span
              onClick={() => setShowprojects(showprojects => !showprojects)}
              className={showProjects ? "active" : ""}
            >
              projets
            </span>
            <div className="dropdown__menu">
              <ul
                className="menu__list --special-color dropdown__item"
                id="project__category"
              >
                {data.allContentfulCategorie.edges.map(edge => (
                  <li key={edge.node.id}>
                    <span>{edge.node.nom}</span>
                  </li>
                ))}
              </ul>
              <ul className="menu__list dropdown__item">
                {data.allContentfulProjet.edges.map((edge, i) => (
                  <li key={edge.node.id}>
                    <Link to={`/project/${edge.node.slug}`}>
                      {edge.node.client}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="filters">
            <Link to="/editions" className={showFilters ? "active" : ""}>
              <span>editions</span>
            </Link>
            {/* <div className="dropdown__menu"> */}
            <ul
              className={`filter-values menu__list ${
                showeditions ? "--show" : ""
              }`}
            >
              <li>collection n°1</li>
              <li>special editions</li>
              <li>all</li>
              <li>
                <Link to="/editions/about">about</Link>
              </li>
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
  showProjects: false,
  showCart: false,
}

Menu.propTypes = {
  showFilters: PropTypes.bool,
  showProjects: PropTypes.bool,
  showCart: PropTypes.bool,
}

export default Menu
