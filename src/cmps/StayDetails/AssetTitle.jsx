import { LuShare2 }      from 'react-icons/lu'      // share-icon
import { AiOutlineHeart } from 'react-icons/ai'

export function AssetTitle({ title }) {
  return (
      <div className="title-row">
        <h1 className="stay-title">{title}</h1>

        <div className="title-actions">
          <button className="share-btn">
            <LuShare2 size={18} /> <span>Share</span>
          </button>
          <button className="save-btn">
            <AiOutlineHeart size={18} /> <span>Save</span>
          </button>
        </div>
      </div>
  )
}
