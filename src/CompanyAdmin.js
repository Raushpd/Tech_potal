import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CompanyAdmin1 from './CompanyAdmin1'
import './compstyle.css'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function CompanyAdmin(props) {
    // const [mail, setMail] = useState("")
    var mail = props.mail

    // setMail(props.mail)
    // console.log(mail)
    console.log(props.mail)
    const [active, setActive] = useState("home")
    return (
        <div id="main1">

            <div id="section">
                <div className='fixedButton'>
                    <button style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setActive("home")}>Internal Portal</button>
                    <button style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setActive("company")}>Company</button>
                </div>
                {/* <button onClick={() => setActive("test")}>Test</button */}

            </div>

            <div className='component'>
                {active === "home" && <Home mail={mail} />}

                {active === "company" && <CompanyAdmin1 mail={mail} />}
                {/* {active === "test" && <Test />} */}
            </div>




        </div>
    )
}

export default CompanyAdmin
