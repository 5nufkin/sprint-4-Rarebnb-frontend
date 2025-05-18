import { useState } from "react"

export function SignupModal({ onClose, onBack }) {
  const [credentials, setCredentials] = useState({
    fullname: "",
    username: "",
    password: "",
  })

  function handleChange(ev) {
    const { name, value } = ev.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  function onSignup(ev) {
    ev.preventDefault()
    console.log("Signing up with:", credentials)
    // תוכל להפעיל כאן userService.signup(credentials)
    onClose()
  }

  return (
    <form className="login-form" onSubmit={onSignup}>
      <h2>Sign up</h2>

      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={credentials.fullname}
        onChange={handleChange}
      />

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />

      <button type="submit">Create Account</button>
      <button type="button" onClick={onBack}>Back to Login</button>
    </form>
  )
}
