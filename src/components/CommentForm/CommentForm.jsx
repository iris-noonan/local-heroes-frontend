import { useState } from "react"
import { createTestimonial } from "../../services/helperService"
import { createComment } from "../../services/jobService"

import styles from './CommentForm.module.scss'

const CommentForm = ({ helperId, fetchHelper, jobId, fetchJob }) => {
    const [formData, setFormData] = useState({ text: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            
            if (helperId) {
                await createTestimonial(helperId, formData)
                fetchHelper()
            } else {
                await createComment(jobId, formData)
                fetchJob()
            }
            setFormData({ text: '' })
            console.log('done')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className={styles.container}>
            <h2>Add a { helperId ? "testimonial" : "comment" }</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text" hidden>Add text</label>
                <textarea
                    required
                    type="text"
                    name="text"
                    id="text"
                    value={formData.text}
                    onChange={handleChange}
                /><br />
        <button type="submit">Send { helperId ? "testimonial" : "comment" }</button>
            </form>
        </main>
    )
}

export default CommentForm