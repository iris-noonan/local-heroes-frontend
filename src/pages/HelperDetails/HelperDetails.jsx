import { useState, useEffect, useCallback } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

import styles from './HelperDetails.module.scss'

// Services
import { deleteHelper, deleteTestimonial, show } from '../../services/helperService'
import CommentForm from "../../components/CommentForm/CommentForm"

const HelperDetails = ({ user }) => {

    const [helper, setHelper] = useState(null)

    // Location variables
    const { helperId } = useParams()
    const navigate = useNavigate()

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

    // Event handlers
    const handleDeleteHelper = async () => {
        try {
            await deleteHelper(helperId)
            navigate('/helpers')
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteTestimonial = async (e) => {
        try {
            await deleteTestimonial(helperId, e.target.id)
            fetchHelper()
        } catch (error) {
            console.log(error)
        }
    }

    if (!helper) return <p>Loading...</p>

    return (
        <main className={styles.container}>
            <div className={styles.headerSection}>
                <div
                    className={styles.userPhoto}
                    style={{
                        backgroundImage: `url(${helper.user.photo})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                    alt={`Profile photo of ${helper.user.username}`}
                />
                <h1>{helper.user.username}</h1>
                <p><strong>{helper.user.location}</strong></p>
            </div>

            <section className={styles.box}>
                <p>{helper.profileDesc}</p><br />
                <p><strong>Availability:</strong> {helper.availability}</p>
                <p><strong>Helper since: </strong>{new Date(helper.createdAt).toLocaleString('default', { month: 'long' })} {new Date(helper.createdAt).getFullYear()}</p>
            </section>

            { helper.user._id === user._id &&
                <div className={styles.editDelete}>
                    <Link to={`/helpers/${helperId}/edit`}>Edit helper profile</Link>
                    <button onClick={handleDeleteHelper}>Delete</button>
                </div>
            }

            <section className={styles.commentSection}>
                <h2>Testimonials</h2>
                {!helper.testimonials.length && <div className={styles.box}><p className={styles.grey}>Send {helper.user.username} a testimonial to see it here</p></div>}
                <ul>
                    {helper.testimonials.map((testimonial) => {
                        return (
                            <li key={testimonial._id} className={styles.box}>
                                <p><strong>{testimonial.user.username}</strong> {testimonial.text}</p>
                                {testimonial.user._id === user._id && <button id={testimonial._id} onClick={handleDeleteTestimonial}>Delete</button>}
                            </li>
                        )
                    })}
                </ul>
                <CommentForm helperId={helperId} fetchHelper={fetchHelper}/>
            </section>
        </main>
    )
}

export default HelperDetails