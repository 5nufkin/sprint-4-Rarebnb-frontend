export function SleepingRooms({ rooms = [] }) {
  return (
    <section>
      <h2 className="section-title">Where you'll sleep</h2>
      <div className="sleeping-scroll">
        {rooms.map((room, idx) => (
          <div className="sleeping-card" key={idx}>
            <img src={room.imgUrl} alt={room.type} />
            <p>{room.type} · {room.beds.length} beds</p>
          </div>
        ))}
      </div>
    </section>
  )
}
