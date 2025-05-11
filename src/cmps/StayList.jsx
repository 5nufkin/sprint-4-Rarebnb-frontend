import { userService } from '../services/user'
import { StayPreview } from './StayPreview'

export function StayList({ Stays, onRemoveStay, onUpdateStay }) {
    
    function shouldShowActionBtns(Stay) {
        const user = userService.getLoggedinUser()
        
        if (!user) return false
        if (user.isAdmin) return true
        return Stay.owner?._id === user._id
    }

    return <section>
        <ul className="list">
            {Stays.map(Stay =>
                <li key={Stay._id}>
                    <StayPreview Stay={Stay}/>
                    {shouldShowActionBtns(Stay) && <div className="actions">
                        <button onClick={() => onUpdateStay(Stay)}>Edit</button>
                        <button onClick={() => onRemoveStay(Stay._id)}>x</button>
                    </div>}
                </li>)
            }
        </ul>
    </section>
}