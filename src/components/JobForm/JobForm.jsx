//!--- Imports
import {useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//!--- Services
import {show, create, update } from '../../services/jobService'


const JobForm = () => {
    //Form Data State
    const[formData, setFormData] = useState ({
        title: '',
        description: '',
        location: ''        
    })
    //Errors State - for storing erros to use in error handling
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()
    const { jobId } = useParams()

    //useEffect for bringing in the data if form is being used for update
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const { data } = await show(jobId)
                setFormData(data)
            } catch(error){
                console.log(error)
            }
        }
        if (jobId) fetchJob()
    }, [jobId])

    //!--- Handlers
    //Handle live changes to form inputs
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let res
            if (jobId) {//Determining if it's a new job or updating an existing
                res = await update(jobId, formData)
            } else {
                res = await create(formData)
            }
            navigate(`/jobs/${res.data._id}`)  //Check it's best to show the show job page on submit. I think that's better than going to the jobs index.
        } catch(error) {
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="title">Title</label>
            <input
            required 
            type="text" 
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            /> <br />

            <label htmlFor="description">Description</label>
            <input
                required
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
            /> <br />

            <label htmlFor="location">Location</label>
            <input
                required
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
            /> <br />

            <button type="submit"> Submit </button>
        </form>
        // <Form onSubmit={ handleSubmit }>
        //     <Form.Group className="mb-3">
        //         <Form.Label>Job Title</Form.Label>
        //         <Form.Control 
        //         required
        //         type="text"
        //         name="title"
        //         id="title"
        //         value={formData.title}
        //         onChange={ handleChange }
        //         placeholder="Enter a short title for your job" />
        //         <Form.Text className="text-muted">
        //             Place holder text but could his be used for error messaging?
        //         </Form.Text>
        //     </Form.Group>

        //     <Form.Group className="mb-3">
        //         <Form.Label>Job Description</Form.Label>
        //         <Form.Control 
        //         required
        //         type="text"
        //         name="description"
        //         id="description"
        //         value={formData.description}
        //         onChange={handleChange}
        //         placeholder="Please enter a short description of what your job involves" />
        //         <Form.Text className="text-muted">
        //             Place holder text but could his be used for error messaging?
        //         </Form.Text>
        //     </Form.Group>
        //     <Form.Group className="mb-3">
        //         <Form.Label>Job Location</Form.Label>
        //         <Form.Control 
        //         required
        //         type="text" 
        //         name="location"
        //         id="location"
        //         value={ formData.location }
        //         onChange={ handleChange }
        //         placeholder="Where will your job take place?" />
        //         <Form.Text className="text-muted">
        //             Place holder text but could his be used for error messaging?
        //         </Form.Text>
        //     </Form.Group>

        //     <Button variant="primary" type="submit">{jobId ? 'Update' : 'Create' } Job </Button>
        // </Form>
    );
}

export default JobForm;

