import * as React from 'react'

interface BoxCheckedIconProps {
  width?: number
  height?: number
  color?: string
}

const BoxCheckedIcon = ({
  height = 24,
  width = 24,
  color = '#EFF4FC'
}: BoxCheckedIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <g id="check">
      <path
        id="Vector"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 6 9 17l-5-5"
      ></path>
    </g>
  </svg>
)

export default BoxCheckedIcon
