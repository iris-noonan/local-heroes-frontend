//!--- Imports
import {useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

import styles from '../JobForm/JobForm.module.scss';
import Errors from '../../components/Errors/Errors'

//!--- Services
import {show, create, update } from '../../services/jobService'

const JobForm = () => {
    //Form Data State
    const[formData, setFormData] = useState ({
        title: '',
        description: '',
        location: '',      
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
            navigate(`/jobs/${res.data._id}`)
        } catch(error) {
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }

    return (
        <div className='somethingnew'>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="title">Title:</label>
                <input
                required 
                type="text" 
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                /> 
                {errors.title && <p className='error'>{errors.title.message}</p>}

                <label htmlFor="description">Description:</label>
                <input
                    required
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                /> 
                {errors.description && <p className='error'>{errors.description.message}</p>}

                <label htmlFor="location">Location:</label>
                <input
                    required
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                /> 
                {errors.location && <p className='error'>{errors.location.message}</p>}

                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default JobForm;

