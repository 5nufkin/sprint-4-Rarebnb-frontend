import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../store/actions/user.actions"

export function LoginMobile() {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [errorMsg, setErrorMsg] = useState("")
  const navigate = useNavigate()


  function handleChange(ev) {
    const { name, value } = ev.target
    setCredentials(prev => ({ ...prev, [name]: value }))
  }

  async function onLogin(ev) {
    ev.preventDefault()
    try {
      await login(credentials)
      window.dispatchEvent(new Event("userChanged"))
      navigate("/") 
    } catch {
      setErrorMsg("Login failed. Try again.")
    }
  }

  return (
    <section className="mobile-login">
      <h2>Log in</h2>
      <form onSubmit={onLogin}>
        <input name="username" placeholder="Username" onChange={handleChange} value={credentials.username} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={credentials.password} />
        <button>Log in</button>
      </form>

      {errorMsg && <p className="error">{errorMsg}</p>}

      <p>Dont have an account?</p>
      <button onClick={() => navigate("/signup")}>Sign up</button>
    </section>
  )
}
