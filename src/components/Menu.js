import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Cart from "./Cart"

const Menu = ({
  showFilters,
  showProjects,
  showCart,
  menuHover,
  bgResponsive,
  specialPaddingXs,
}) => {
  const [open, setOpen] = useState(false)
  const [showprojects, setShowprojects] = useState(false)
  const [showeditions, setShoweditions] = useState(false)
  const [cat, setCat] = useState(null)
  const [project, setProject] = useState([])

  const data = useStaticQuery(graphql`
    query {
      allContentfulProjet(sort: { fields: ordre, order: DESC }) {
        edges {
          node {
            id
            titre
            slug
            client
            categorie {
              nom
              id
            }
          }
        }
      }
      allContentfulCategorie(sort: { fields: ordre, order: DESC }) {
        edges {
          node {
            id
            nom
          }
        }
      }
      allContentfulCollection {
        edges {
          node {
            id
            nom
            slug
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (showProjects) {
      setShowprojects(true)
    }
    // if (showProjects && window.innerWidth < 992) {
    //   setShowprojects(true)
    // }
    if (showFilters) {
      setShoweditions(true)
    }
  }, [showProjects, showFilters])

  useEffect(() => {
    if (showFilters && window.innerWidth < 992) {
      if (showprojects) {
        setShoweditions(false)
      } else {
        setShoweditions(true)
      }
    }
  }, [showprojects, showFilters])

  const mouseEnterProject = index => {
    menuHover(index)
    setProject(data.allContentfulProjet.edges[index].node.categorie)
  }

  const mouseLeaveProject = () => {
    menuHover(null)
    setProject([])
  }

  const mouseEnterCat = index => {
    setCat(data.allContentfulCategorie.edges[index].node.nom)
  }

  const mouseLeaveCat = () => {
    setCat(null)
  }

  return (
    <nav>
      <div
        className={`menu__top ${bgResponsive ? "--bg" : ""} ${
          specialPaddingXs ? "--special-padding" : ""
        }`}
      >
        <div>
          <Link to="/">
            <h1>studio mitsu</h1>
          </Link>

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
      <div className={`cart ${showCart ? "--show" : ""}`}>
        <Cart />
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
                {data.allContentfulCategorie.edges.map((edge, i) => (
                  <li
                    key={edge.node.id}
                    className={
                      project.some(e => e.nom === `${edge.node.nom}`)
                        ? "--highlight"
                        : ""
                    }
                  >
                    <span
                      onMouseEnter={() => mouseEnterCat(i)}
                      onMouseLeave={mouseLeaveCat}
                    >
                      {edge.node.nom}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="menu__list dropdown__item">
                {data.allContentfulProjet.edges.map((edge, i) => (
                  <li
                    key={edge.node.id}
                    className={
                      edge.node.categorie.some(e => e.nom === `${cat}`)
                        ? "--highlight"
                        : ""
                    }
                  >
                    <Link
                      to={`/project/${edge.node.slug}`}
                      onMouseEnter={() => mouseEnterProject(i)}
                      onMouseLeave={mouseLeaveProject}
                      activeClassName="active"
                    >
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
            <ul
              className={`filter-values menu__list ${
                showeditions ? "--show" : ""
              }`}
            >
              {/* {data.allContentfulCollection.edges.map((edge, i) => (
                <li key={edge.node.id}>
                  <Link to={`/editions/${edge.node.slug}`}>
                    {edge.node.nom}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/editions">all</Link>
              </li> */}
              <li>
                <Link to="/editions/about">about</Link>
              </li>
            </ul>
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
  menuHover: () => {},
  bgResponsive: true,
  specialPaddingXs: false,
}

Menu.propTypes = {
  showFilters: PropTypes.bool,
  showProjects: PropTypes.bool,
  showCart: PropTypes.bool,
  menuHover: PropTypes.func,
  bgResponsive: PropTypes.bool,
  specialPaddingXs: PropTypes.bool,
}

export default Menu
