import React from "react"
import Img from "gatsby-image"

const Edition = () => {
  return (
    <div className="edition-detail">
      <div className="edition-detail__description">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Integer sed sapien at elit maximus porttitor.
        Maecenas tincidunt, nisl non ullamcorper sollicitudin, lectus quam
        tristique eros, nec fermentum urna justo at quam. Suspendisse congue
        lacus nisi, eu vehicula magna finibus sit amet. Aliquam tempus mattis
        pharetra. Maecenas gravida pellentesque purus in auctor. Aliquam in urna
        lacus.
      </div>
      <div className="edition-detail__list">
        <span>Pages</span>
        <span>Taille</span>
        <span>Date</span>
        <span>Copies</span>
      </div>
      <div className="edition-detail__footer">
        <span className="edition-detail__price">€ 30</span>
      </div>
    </div>
  )
}

export default Edition
