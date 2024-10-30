import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"

import styles from './HelperDetails.module.scss'
import profileImage from '../../assets/images/dummy-profile.jpg'

// Services
import { show } from '../../services/helperService'

const HelperDetails = () => {

    const [helper, setHelper] = useState(null)
    // const [errors, setErrors] = useState(null)

    // Location variables
    const { helperId } = useParams()

    const fetchHelper = useCallback(async () => {
        try {
            const { data } = await show(helperId)
            setHelper(data)
        } catch (error) {
            console.log(error)
        }
    }, [helperId])

    useEffect(() => {
        fetchHelper()
    }, [helperId, fetchHelper])

    console.log(helper)

    return (
        <main className={styles.container}>
            <header>
                <img src={profileImage} />
                {/* <h1>{helper.user.username}</h1> */}
                <h1>Username</h1>
                <p><strong>London</strong> - Helper since: 2024</p>
            </header>
            <section>
                {/* <p>{helper.profileDesc}</p> */}
                <p>Recently retired and suddenly have lots of time on my hands! I love cooking, gardening and odd jobs.</p>
                {/* <p><strong>Availability:</strong> {helper.availability}</p> */}
                <p><strong>My skills:</strong> Example, cooking, gardening</p>
                <p><strong>Helper since: </strong>2024</p>
            </section>
        </main>
    )
}

export default HelperDetails