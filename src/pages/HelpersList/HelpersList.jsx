import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import styles from './HelpersList.module.scss';

// Services
import { index } from "../../services/helperService"


const HelperList = () => {

    const [helpers, setHelpers] = useState([])

    useEffect(() => {
        const fetchHelpers = async () => {
            try {
                const { data } = await index()
                setHelpers(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchHelpers()
    }, [])

    return (
        <main>
            <h1>Here is a list of nearby helpers</h1>
            <ul className={styles.helpers}>
                {helpers.map((helper) => (
                    <Link key={helper._id} to={`/helpers/${helper._id}`}>
                        <li className={styles.helperCard}>
                            <div className={styles.helperCardContent}>
                                <div className={styles.helperCardRow}>
                                    <span>Title: </span>
                                    <span>{helper.user.username}</span>
                                </div>
                                <div className={styles.helperCardRow}>
                                    <span>Location: </span>
                                    <span>{helper.profileDesc}</span>
                                </div>
                                <div className={styles.helperCardRow}>
                                    <span>Availability: </span>
                                    <span>{helper.availability}</span>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    )
}

export default HelperList