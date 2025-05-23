// cmps/CompactSearchBar.jsx
import { MagnifyingGlassIcon } from './Icons'
import { StayIconFilter } from './StayIconFilter'

export function CompactSearchBar({ onClick }) {
  return (
    <button className="compact-search-bar" onClick={onClick}>
      <MagnifyingGlassIcon />
      <StayIconFilter />
      <span>Start your search</span>
    </button>
  )
}
