import React, { useRef, useEffect, useState } from "react"

const Video = ({
  videoMp4,
  videoWebm,
  poster,
  system,
  browser,
  placeholder,
  position,
  currentSlide,
}) => {
  const [play, setPlay] = useState(false)
  const videoEl = useRef(null)

  useEffect(() => {
    if (position === currentSlide) {
      setPlay(true)
      videoEl.current.play()
    }
    if (play && position !== currentSlide) {
      videoEl.current.pause()
      setPlay(false)
    }
  }, [currentSlide])

  return (
    <>
      <video
        playsInline
        loop
        muted
        poster={poster ? poster.file.url : placeholder}
        ref={videoEl}
      >
        {system === "iOS" || browser === "Safari" ? (
          <source src={videoMp4.file.url} type={videoMp4.file.contentType} />
        ) : (
          <source src={videoWebm.file.url} type={videoWebm.file.contentType} />
        )}
        <p>Sorry, the video can't be displayed with your browser.</p>
      </video>
    </>
  )
}

export default Video
