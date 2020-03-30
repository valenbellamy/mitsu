import React, { useState } from "react"

const Project = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className={open ? "project-detail --open" : "project-detail"}>
      <span className="trigger" onClick={() => setOpen(open => !open)}>
        {open ? "- less infos" : "+"}
      </span>
      <div>
        Aenean ornare eros sed bibendum placerat. Proin faucibus iaculis nibh in
        rhoncus. Morbi eu accumsan felis. Nam interdum lacus ante.
      </div>
    </div>
  )
}

export default Project
