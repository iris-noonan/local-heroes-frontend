import {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import JobForm from '../../components/JobForm/JobForm'

const JobCreate = () => {

    return(
        <main>
            <div className='main-content'>
                <h1>This is the new job form</h1>
                <JobForm/>
            </div>
        </main>
    )
}

export default JobCreate