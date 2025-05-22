import { useState } from "react"

export function MessageToHost() {
  const [msg, setMsg] = useState("")

  return (
    <>
      <section className="message-to-host">
        <h3>Write a message to the host</h3>
        <p>
          Before you can continue, let the host know a little about your trip and
          why their place is a good fit.
        </p>

        <textarea
        className="message-area"
          value={msg}
          onChange={(ev) => setMsg(ev.target.value)}
          placeholder="Example: 'Hi Amir, my partner and I are going to a friend’s wedding and your place is right down the street.'"
          rows="3"
        />
      </section>

      <p className="confirmation-note">
        The host has 24 hours to confirm your booking. You’ll be charged after
        the request is accepted.
      </p>
    </>
  )
}
