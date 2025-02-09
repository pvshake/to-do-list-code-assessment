import * as React from 'react'

interface CheckIconProps {
  width?: number
  height?: number
  color?: string
}

const CheckIcon = ({
  width = 36,
  height = 36,
  color = '#000'
}: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 36 36"
  >
    <g
      id="check-circle"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="4"
    >
      <path id="Vector" d="M33 16.62V18a15 15 0 1 1-8.895-13.71"></path>
      <path id="Vector_2" d="M33 6 18 21.015l-4.5-4.5"></path>
    </g>
  </svg>
)

export default CheckIcon
