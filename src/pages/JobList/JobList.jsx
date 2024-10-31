import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './JobList.module.scss';

//!--- Sewrvices
import { index } from '../../services/jobService'


const JobList = () => {

    //!--- States
    const [jobs, setJobs] = useState ([])

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const { data } = await index()
                setJobs(data) 
            } catch (error) {
                console.log(error)
            }
        }
        fetchJobs()
    }, [])

    //!--- Render
    return (
        <main>
            <div className='main-content'>
            <h1>Jobs List</h1>
            <ul className={styles.jobs}>
                { jobs.map((job) => (
                    <Link key={job._id} to={`/jobs/${job._id}`}>
                        <li className={styles.jobCard}>
                            <div className={styles.jobCardContent}>
                                <div className={styles.jobCardRow}>
                                    <span>Title: </span>
                                    <span>{job.title}</span>
                                </div>
                                <div className={styles.jobCardRow}>
                                    <span>Location: </span>
                                    <span>{job.location}</span>
                                </div>
                                <div className={styles.jobCardRow}>
                                    <span>Description: </span>
                                    <span>{job.description}</span>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    )
}

export default JobList