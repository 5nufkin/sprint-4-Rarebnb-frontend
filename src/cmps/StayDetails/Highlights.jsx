export function Highlights({ highlights = [] }) {
  return (
    <ul className="highlights">
      {highlights.map((txt, idx) => (
        <li key={idx}>{txt}</li>
      ))}
    </ul>
  )
}
