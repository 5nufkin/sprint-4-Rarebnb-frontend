import { useState } from "react"
import { userService } from "../services/user/index"
import { login } from "../store/actions/user.actions"

export function SignupModal({ onClose, onBack, onLoginSuccess }) {
  const [credentials, setCredentials] = useState({
    fullname: "",
    username: "",
    password: "",
  })

  function handleChange(ev) {
    const { name, value } = ev.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  // function onSignup(ev) {
  //   ev.preventDefault()
  //   console.log("Signing up with:", credentials)
  //   onClose()
  // }
  async function onSignup(ev) {
    ev.preventDefault()

    try {
      await userService.signup(credentials)
      await login(credentials) 
      onClose() 
    } catch (err) {
      console.error("Signup failed", err)
    }
  }

  return (
    <section>
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
      </form>
      <button type="button" onClick={onBack}>
        Back to Login
      </button>
    </section>
  )
}
