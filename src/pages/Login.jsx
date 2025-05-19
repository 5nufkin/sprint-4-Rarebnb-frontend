import { useEffect, useState } from "react"
import { login } from "../store/actions/user.actions"
import { SignupModal } from "../cmps/SignupModal"
import { userService } from "../services/user"

export function LoginModal({ onClose, onLoginSuccess }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [isSignup, setIsSignup] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [users, setUsers] = useState([])

  async function onQuickLogin(user) {
  try {
    await login({ username: user.username, password: user.password || "user" }) // או סיסמה שאתה קובע
    onLoginSuccess()
    onClose()
  } catch (err) {
    console.error("Quick login failed:", err)
    setErrorMsg("Login failed")
    setTimeout(() => setErrorMsg(""), 1500)
  }
}


  useEffect(() => {
    async function loadUsers() {
      try {
        const users = await userService.getUsers()
        setUsers(users)
      } catch (err) {
        console.error("Failed to load users:", err)
        setErrorMsg("Failed to load users")
      }
    }

    loadUsers()
  }, [])

  async function onLogin(ev) {
    ev.preventDefault()
    if (!credentials.username || !credentials.password) return

    try {
      await login(credentials)
      onLoginSuccess()
      onClose()
    } catch (err) {
      console.error("Login failed:", err)
      setErrorMsg("Login failed, try again!")

      setTimeout(() => {
        setErrorMsg("")
      }, 1500)
    }
  }

  function handleChange(ev) {
    const field = ev.target.name
    const value = ev.target.value
    setCredentials({ ...credentials, [field]: value })
  }

  return (
    <div className="modal-screen" onClick={onClose}>
      <div className="modal login-form" onClick={(ev) => ev.stopPropagation()}>
        {isSignup ? (
          <SignupModal
            onClose={onClose}
            onBack={() => setIsSignup(false)}
            onLoginSuccess={onLoginSuccess}
          />
        ) : (
          <>
            <h2>Login</h2>
            <form className="login-form" onSubmit={onLogin}>
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

              <button type="submit">Login</button>

              <h3>Or choose a user:</h3>
              <ul className="user-list">
                {users.map((user) => (
                  <li
                    key={user._id}
                    onClick={() => onQuickLogin(user)}
                    className="user-preview"
                  >
                    <img src={user.imgUrl} alt={user.username} />
                    <span>
                      {user.fullname || user.username}
                      {user.isHost && (
                        <span className="host-label"> (Host)</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {errorMsg && <div className="error-msg">{errorMsg}</div>}
            </form>

            <div>
              <button className="signup-btn" onClick={() => setIsSignup(true)}>
                Sign up
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

