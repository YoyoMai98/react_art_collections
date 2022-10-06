import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

const SignUpForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleFirstName = e => {
        setFirstName(e.target.value)
    }

    const handleLastName = e => {
        setLastName(e.target.value)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <>
            <Header />
            <div className="sign-up">
                <p className="sign-up-p">Sign up here!</p>
                <form className="sign-up-form">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="fname" onChange={handleFirstName}/>
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="lname" onChange={handleLastName} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleEmail} />
                    <input type="submit" value="Subscribe" id="subscribe-btn" onSubmit={handleSubmit} />
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignUpForm