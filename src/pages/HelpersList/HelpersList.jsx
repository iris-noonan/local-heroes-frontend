import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

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

    return (
        <main>
            <h1>Here is a list of nearby helpers</h1>
            { helpers.map((helper) => {
                return <p key={helper._id}>{helper.profileDesc}</p>
            })}
        </main>
    )
}

export default HelperList