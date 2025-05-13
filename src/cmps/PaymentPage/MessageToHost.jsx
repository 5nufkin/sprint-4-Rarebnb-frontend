export function MessageToHost({ onSubmit }) {
  return (
    <>
      <section className="message-to-host">
        <h3>Write a message to the host</h3>
        <p>
          Before you can continue, let the host know a little about your trip and
          why their place is a good fit.
        </p>
        <textarea
          placeholder="Example: 'Hi Amir, my partner and I are going to a friend’s wedding and your place is right down the street.'"
          rows="5"
        ></textarea>
      </section>

      <p className="confirmation-note">
        The host has 24 hours to confirm your booking. You’ll be charged after
        the request is accepted.
      </p>

      <button className="btn-request" onClick={onSubmit}>
        Request to book
      </button>
    </>
  )
}
