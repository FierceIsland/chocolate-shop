import React from "react"
import PropTypes from "prop-types"

const Youtube = props => {
  const widthValue = isNaN(props.width) ? props.width : props.width + "px"
  const heightValue = isNaN(props.height) ? props.height : props.height + "px"
  const ariaId = `${props.title}_title`
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      style={{
        minWidth: widthValue,
        width: widthValue,
        height: heightValue,
      }}
      aria-hidden="true"
      className={"icon " + props.className}
      aria-labelledby={ariaId}
    >
      <title>{props.title}</title>
      <path
        fill={props.color}
        d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"
      />
    </svg>
  )
}

Youtube.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.oneOf(["auto"]), PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.oneOf(["auto"]), PropTypes.number]),
  className: PropTypes.string,
  title: PropTypes.string,
}

Youtube.defaultProps = {
  height: 40,
  width: 40,
  color: "#000000",
  title: "Youtube",
  className: "",
}

export default Youtube
