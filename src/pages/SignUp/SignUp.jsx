// src/components/SignUp/SignUp.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../services/userService'
import styles from '../SignUp/SignUp.module.scss';

const SignUp = ({ setUser }) => {

  // ! State
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    location: '',
    photo: '',
    password: '',
    confirmPassword: ''
  })

  const [selectedFile, setSelectedFile] = useState(null);

  // ! Location variables
  const navigate = useNavigate()

  // ! Event Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    formData.photo =  selectedFile;
    try {
      const { user } = await signup(formData) // sign in
      setUser(user) // set user to state
      navigate('/') // navigate to dashboard
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <div>

          <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="name"
              value={formData.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              name="location"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="photo">Profile Photo:</label>
            <input type="file" name="photo" id="photo" accept="image/*" onChange={handleFileSelect} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input
              type="password"
              id="confirm"
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Sign Up</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}

export default SignUp