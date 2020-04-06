import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Edition = ({ data }) => {
  const { taille, prix, page, langue, date, copie, description } = data
  return (
    <div className="edition-detail">
      <div className="edition-detail__description">
        {documentToReactComponents(description.json)}
      </div>
      <div className="edition-detail__list">
        <span>{page}</span>
        <span>{taille}</span>
        <span>{date}</span>
        <span>
          {langue}, {copie}
        </span>
      </div>
      <div className="edition-detail__footer">
        <span className="edition-detail__price">€ {prix}</span>
      </div>
    </div>
  )
}

export default Edition
