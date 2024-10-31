import { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

//!--- Services
import { show, deleteJob } from '../../services/jobService'



const JobDetails = ({ user }) => {

    //!--- States
    const[job, setJob] = useState(null)
    //Error State.....


    const { jobId } = useParams()
    const navigate = useNavigate()

    const fetchJob = useCallback(async () => {
        try {
            const { data } = await show(jobId)
            setJob(data)
        } catch (error) {
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }, [jobId])
    
    useEffect(() => {
        fetchJob()
    },[jobId, fetchJob])
    console.log(job)

    //!--- Handlers
    const handleDeleteJob = async () => {
        try {
            await deleteJob(jobId)
            navigate('/jobs')
        } catch (error) {
            console.log(error)            
        }
    }

    //!--- Render Error messages


    //!--- Render loading message??????? 
    
    //!--- Render 
    if (!job) return <p>Loading</p>
    return (
        <main>
            <h1>{job.title}</h1>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.user.username}</p>

            {/* Authorized actions */}
            {job.user._id === user._id &&
                <>
                    <Link to={`/jobs/${jobId}/edit`}>Edit</Link>
                    <button onClick={handleDeleteJob}>Delete</button>
                </>
            }
        </main>
    )
}

export default JobDetails