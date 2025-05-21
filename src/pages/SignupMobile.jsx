import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../store/actions/user.actions'

export function SignupMobile() {
  const [userCred, setUserCred] = useState({
    fullname: '',
    username: '',
    password: '',
  })
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  function handleChange(ev) {
    const { name, value } = ev.target
    setUserCred((prev) => ({ ...prev, [name]: value }))
  }

  async function onSignup(ev) {
    ev.preventDefault()
    try {
      await signup(userCred)
      window.dispatchEvent(new Event('userChanged'))
      navigate('/')
    } catch {
      setErrorMsg('Signup failed. Try again.')
    }
  }

  return (
    <section className="mobile-login">
      <h2>Sign up</h2>
      <form onSubmit={onSignup}>
        <input
          name="fullname"
          required="required"
          placeholder="Fullname"
          value={userCred.fullname}
          onChange={handleChange}
        />
        <input
          name="username"
          required="required"
          placeholder="Username"
          value={userCred.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required="required"
          placeholder="Password"
          value={userCred.password}
          onChange={handleChange}
        />

        <button>Sign up</button>
      </form>

      {errorMsg && <p className="error">{errorMsg}</p>}

      <p>Already have an account?</p>
      <button onClick={() => navigate('/login')}>Log in</button>
    </section>
  )
}
