import { useState } from "react";

const Contact = () => {

    const name = "Sharon Yakubu"

    const [inputValue, setInputValue] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
        if (inputValue.length > 0) {
            setErrorMessage('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.length <= 0) {
            setErrorMessage('Please enter a message')
        } else {
            alert("Message sent!")
            setInputValue(e.target.value)
            window.location.href = "/contact"
        }
    }

    return (
        <main className="contact__page">
            <div className="contact__container">
                <h1 className="contact__title">Contact Me</h1>
                <p className="contact__text">Hi there, contact me to ask me about anything you have in mind.</p>
                <form onSubmit={handleSubmit}>
                    <div className="name__container">
                        <div className="form__child">
                            <label htmlFor="first_name" className="form__child-title">First Name</label>
                            <input type="text" id="first_name" placeholder="Enter your first name" required />
                        </div>
                        <div className="form__child">
                            <label htmlFor="last_name" className="form__child-title">Last Name</label>
                            <input type="text" id="last_name" placeholder="Enter your last name" required  />
                        </div>
                    </div>
                    <div className="form__child">
                        <label htmlFor="email" className="form__child-title">Email</label>
                        <input type="email" name="email" id="email" placeholder="yourname@email.com" required />
                    </div>
                    <div className="form__child">
                        <label htmlFor="message" className="form__child-title">Message</label>
                        <textarea className={`${errorMessage !== '' ? 'error__border' : ''}`} name="message" id="message" placeholder="Send me a message and I will reply you as soon as possible..." onChange={handleChange} value={inputValue}></textarea>
                        {errorMessage !== '' && <p className="error__msg">{errorMessage}</p>}
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="data" required />
                        <label htmlFor="data">You agree to providing your data to {name} who may contact you.</label>
                    </div>
                    <button id="btn__submit">Send Message</button>
                </form>
            </div>
        </main>
    );
}

export default Contact;
