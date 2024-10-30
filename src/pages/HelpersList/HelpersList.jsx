import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// Services
import { index } from "../../services/helperService"


const HelperList = () => {

    const [helpers, setHelpers] = useState([])

    useEffect(() => {
        const fetchHelpers = async () => {
            try {
                const { data } = await index()
                setHelpers(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchHelpers()
    }, [])

    console.log(helpers)

    return (
        <main>
            <h1>Here is a list of nearby helpers</h1>
            <ul>
                {helpers.map((helper) => {
                    return <li key={helper._id}>
                        <h3><Link to={`/helpers/${helper._id}`}>{helper.user.username}</Link></h3>
                        <p>{helper.profileDesc}</p>
                    </li>
                })}
            </ul>
        </main>
    )
}

export default HelperList