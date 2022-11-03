const Contact = () => {

    const name = "Sharon Yakubu"

    return (
        <main className="contact__page">
            <div className="contact__container">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <form>
                    <div className="name__container">
                        <div className="form__child">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" id="first_name" placeholder="Enter your first name" />
                        </div>
                        <div className="form__child">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" id="last_name" placeholder="Enter your last name" />
                        </div>
                    </div>
                    <div className="form__child">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="yourname@email.com" />
                    </div>
                    <div className="form__child">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Send me a message and I will reply you as soon as possible..."></textarea>
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" name="data" />
                        <label htmlFor="data">You agree to providing your data to {name} who may contact you.</label>
                    </div>
                    <button id="btn__submit">Send Message</button>
                </form>
            </div>
        </main>
    );
}

export default Contact;