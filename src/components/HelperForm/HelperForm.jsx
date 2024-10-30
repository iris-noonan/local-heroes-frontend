import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

// Services
import { create, update } from '../../services/helperService'

const HelperForm = () => {

    const [formData, setFormData] = useState({
        profileDesc: '',
        availability: '',
        pauseMyProfile: false
    })

// Location variables
    const { helperId } = useParams()
    const navigate = useNavigate()

// Event handlers
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res
            if (helperId) {
                res = await update(helperId, formData)
            } else {
                res = await create(formData)
            }
            navigate(`/hoots/${res.data._id}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main>
            <h1>{ helperId ? 'Update' : 'Create' } your helper profile</h1>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Profile description</Form.Label>
                    <Form.Control
                        type="text"
                        name="profileDesc"
                        id="profileDesc"
                        placeholder="Introduce yourself!"
                        value={formData.profileDesc}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>My availability</Form.Label>
                    <Form.Control
                        type="text"
                        name="availability"
                        id="availability"
                        placeholder="I am usually free..."
                        value={formData.availability}
                        onChange={handleChange}
                    />
                </Form.Group>

                { helperId 
                    ? <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            name="pauseMyProfile"
                            id="pauseMyProfile"
                            label="I'm away! Pause my helper profile"
                            value={formData.pauseMyProfile}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    : ''
                }

                <Button variant="primary" type="submit">
                    { helperId ? 'Save changes' : 'Create' }
                </Button>

            </Form>
        </main>
    )
}

export default HelperForm