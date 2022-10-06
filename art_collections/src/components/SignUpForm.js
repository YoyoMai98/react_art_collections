import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"

const SignUpForm = ({registeredAccount}) => {

    const [newAccount, setNewAccount] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleChange = e => {
        const propertyName = e.target.name
        const savedAccount = {...newAccount}
        savedAccount[propertyName] = e.target.value
        setNewAccount(savedAccount)
    }

    const handleSubmit = e => {
        e.preventDefault()
        registeredAccount(newAccount)
        setNewAccount({
            firstName: "",
            lastName: "",
            email: ""
        })
    }

    return (
        <>
            <Header />
            <div className="sign-up" onSubmit={handleSubmit}>
                <p className="sign-up-p">Sign up here!</p>
                <form className="sign-up-form">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="fname"
                        onChange={handleChange} 
                        value={newAccount.firstName}
                        name="firstName"
                    />
                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="lname"
                        onChange={handleChange}
                        value={newAccount.lastName}
                        name="lastName"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        value={newAccount.email}
                        name="email"
                    />
                    <input type="submit" value="Subscribe" id="subscribe-btn"/>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SignUpForm