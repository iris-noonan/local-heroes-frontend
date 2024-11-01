// src/components/Dashboard/Dashboard.jsx
import { useState, useEffect } from "react"

import styles from './Dashboard.module.scss';

import { Link } from "react-router-dom";

// Services
import { index } from "../../services/helperService"

const Dashboard = ({ user }) => {

  const [helperId, setHelperId] = useState(false)
  const [helper, setHelper] = useState({})

  useEffect(() => {
      const fetchHelpers = async () => {
          try {
              const { data } = await index()
              const helper = data.find((helper) => helper.user._id === user._id)
              !!helper ? setHelperId(helper._id) : setHelperId(false)
              setHelper(helper)
          } catch (error) {
              console.log(error)
          }
      }
      fetchHelpers()
  }, [])

  return (
    <main>
      <div className={styles.welcome}>
        <div
          className={styles.userPhoto}
          style={{
            backgroundImage: `url(${user.photo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          alt={`Profile photo of ${user.username}`}
        />
        <h1>Hi {user.username} 👋</h1>
      </div>
      <div className={styles.buttons}>
        <Link to="/jobs/new">Post Job</Link>
        { helperId 
            ? (
              <Link to={`/helpers/${helperId}`}>My helper profile</Link>
            ) : (
              <Link to="/helpers/new">Become a helper</Link>
            )
        }
      </div>
    </main>
  );
};

export default Dashboard;