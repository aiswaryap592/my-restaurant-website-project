import './Contact.css';
const Contact=()=>{
    return(
        <div className="contact">
            <div className="contactleftside">ergfeht</div>
            <div className="contactrightside">
                <h1>Contact Us</h1>
                <form>
                    <label>Full Name</label>
                    <input type="text"placeholder="Name"/>
                    <label>emailid</label>
                    <input type="email"placeholder="Email Id"/>
                    <label>Address</label>
                    <textarea placeholder="address"></textarea>
                </form>
            </div>
        </div>
    )
}
export default Contact;