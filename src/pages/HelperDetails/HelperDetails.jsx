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

    console.log(helper)

    return (
        <main>
            <section>
                <p>Profile pic</p>
                {/* <h1>{helper.user.username}</h1> */}
                <p><strong>Location: </strong></p>
                {/* <p>{helper.profileDesc}</p> */}
                {/* <p><strong>Availability:</strong> {helper.availability}</p> */}
                <p><strong>My skills:</strong> Example, cooking, gardening</p>
                <p><strong>Helper since: </strong></p>
            </section>
        </main>
    )
}

export default HelperDetails