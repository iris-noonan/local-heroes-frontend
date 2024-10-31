//!--- Imports
import {useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import styles from '../JobForm/JobForm.module.scss';

//!--- Services
import {show, create, update } from '../../services/jobService'


const JobForm = () => {
    //Form Data State
    const[formData, setFormData] = useState ({
        title: '',
        description: '',
        location: '',
        skill: '',
        image: '',
        completed: false,
        appreciation: false,        
    })

    //State for file upload
    const [selectedFile, setSelectedFile] = useState(null);

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

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        formData.image = selectedFile;
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
        <div className='main-content'>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="title">Title:</label>
                <input
                required 
                type="text" 
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                /> <br />

                <label htmlFor="description">Description:</label>
                <input
                    required
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                /> <br />

                <label htmlFor="location">Location:</label>
                <input
                    required
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                /> <br />

                <label htmlFor="skill">Skill:</label>
                <input
                    type="text"
                    name="skill"
                    id="skill"
                    value={formData.skill}
                    onChange={handleChange}
                /> <br />

                <label htmlFor="image">Image of your job:</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    value={formData.image}
                    accept="image/*"
                    onChange={handleFileSelect}
                /> <br />

                <button type="submit"> Submit </button>
            </form>
        </div>
    );
}

export default JobForm;

