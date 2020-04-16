import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

const Project = ({ content }) => {
  const [open, setOpen] = useState(false)
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {node.content[0].value}
          </a>
        )
      },
    },
  }
  return (
    <div className={open ? "project-detail --open" : "project-detail"}>
      <button
        className="trigger"
        onClick={() => setOpen(open => !open)}
        type="button"
        aria-label="See information"
      >
        {open ? "- less infos" : "+"}
      </button>
      <div>{documentToReactComponents(content.json, options)}</div>
    </div>
  )
}

export default Project
