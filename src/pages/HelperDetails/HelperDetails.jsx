import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


// Services
import { show } from '../../services/helperService'

const HelperDetails = () => {

    const [helper, setHelper] = useState(null)
    // const [errors, setErrors] = useState(null)

    // Location variables
    const { helperId } = useParams()

    useEffect(() => {
        const fetchHelper = async () => {
            try {
                const { data } = await show(helperId)
                setHelper(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchHelper()
    }, [helperId])

    return (
        <main>
            <section>
                <p>Profile pic</p>
                <h1>Username</h1>
                <p>Location</p>
                <p>Description goes here, I am free to help people, so please get in touch!</p>
                <p><strong>My skills:</strong> Example, cooking, gardening</p>
                <p><strong>Availability:</strong>Recently retired, so I can be quite flexible - can't do Wednesdays though.</p>
            </section>
        </main>
    )
}

export default HelperDetails