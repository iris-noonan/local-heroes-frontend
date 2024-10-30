import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
            <h1>Jobs List</h1>
            { jobs.map((job) => (
                <Link key={job._id} to={`/jobs/${job._id}`}>
                    <h2>{job.title}</h2>
                </Link>
            ))}
        </main>
    )
}

export default JobList