import Footer from "./Footer"
import Header from "./Header"

const Account = ({account}) => {

    return (
        <>
        <Header />
        <div className="account">
            <h2>{account.firstName} {account.lastName}</h2>
            <h3>Email address: {account.email}</h3>
            <p>Hurray!</p>
            <p>You are one of us now</p>
            <p>You will get the latest news from now on</p>
            <p>Give us support if you like the service</p>
            <p>Need any help? Send a message and we would be here right away!</p>
        </div>
        <Footer />
        </>
    )
}

export default Account