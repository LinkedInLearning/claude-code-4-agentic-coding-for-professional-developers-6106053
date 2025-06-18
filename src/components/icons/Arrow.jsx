function Arrow({ color = 'currentColor', stroke = 'currentColor',
  width = 20, height = 20, strokeWidth = 0, flip = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      stroke={stroke}
      strokeWidth={strokeWidth}
      style={{ transform: flip ? 'rotate(180deg' : 'none' }}
    >
      <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
    </svg>
  )
}

export default Arrow;