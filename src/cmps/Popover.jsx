

export function Popover({ children, style = {} }) {
  console.log(style)
  // if (!style) style = {
  //   left: '50%',
  //   transform: 'translateX(-50%)'
  // }

  return (
    <div className="popover" style={style}>
      {children}
    </div>
  )
}