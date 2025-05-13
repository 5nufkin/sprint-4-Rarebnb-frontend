

export function Popover({ children, style = { left: '50%', transform: 'translateX(-50%)' } }) {
  console.log(style)
  return (
    <div className="popover" style={style}>
      {children}
    </div>
  )
}