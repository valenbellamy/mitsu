import React, { useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Project = ({ content }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={open ? "project-detail --open" : "project-detail"}>
      <span className="trigger" onClick={() => setOpen(open => !open)}>
        {open ? "- less infos" : "+"}
      </span>
      <div>{documentToReactComponents(content.json)}</div>
    </div>
  )
}

export default Project
