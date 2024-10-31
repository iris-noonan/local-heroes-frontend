import { useEffect, useState, useCallback } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

import styles from './JobDetails.module.scss'

//!--- Services
import { show, deleteJob } from '../../services/jobService'
import CommentForm from "../../components/CommentForm/CommentForm"



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
        <main className={styles.container}>

            <h1>{job.title}</h1>


            <section className={styles.box}>
                <p>{job.description}</p><br />
                <p><strong>Job location: </strong>{job.location}</p>
                <p><strong>Date posted: </strong>{new Date(job.createdAt).toDateString()}</p>
            </section>

            

            {/* Authorized actions */}
            {job.user._id === user._id 
            ? <div className={styles.creatorBlock}>
                <p>You created this job</p>
                <div className={styles.editDelete}>
                    <Link to={`/jobs/${jobId}/edit`}>Edit job listing</Link>
                    <button onClick={handleDeleteJob}>Delete</button>
                </div>
            </div>
            : <div className={styles.userSection}>
                <p>This job was created by:</p>
                <div
                    className={styles.userPhoto}
                    style={{
                        backgroundImage: `url(${job.user.photo})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    alt={`Profile photo of ${job.user.username}`}
                />
                <h2>{job.user.username}</h2>
            </div>
            }

            <section>
                <h1>Comments</h1>
                {!job.comments.length && <div className={styles.box}><p className={styles.grey}>Able to help or want to know more? Send a comment</p></div>}
                <ul>
                    {job.comments.map((comment) => {
                        return (
                            <li key={comment._id} className={styles.box}>
                                <p><strong>{comment.user.username}</strong> {comment.text}</p>
                            </li>
                        )
                    })}
                </ul>
                <CommentForm jobId={jobId} fetchJob={fetchJob}/>
            </section>

        </main>
    )
}

export default JobDetails