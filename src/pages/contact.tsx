import Footer from '../nav-bar/footer';
import './contact.css' 


/* 
 * Instagram
 * Facebook
 * Email
 * Comment submission box?
 */

function Contact() {
    console.log("Contact rendered!")
    return(
        <>
        <div className="container">
            <a href="mailto:miainegypt@gmail.com">✉️: miainegypt@gmail.com</a>
            <a href="tel:(202) 3909930 / 3901520">📞: (202) 3909930 / 3901520</a>
            <a href="http://maps.google.com/?q=Museum of Islamic Art in Cairo">📍: Port Said, Ghayt Al Adah, Al-Darb Al-Ahmar, Cairo Governorate 11638, Egypt </a>
            <form style={{padding: "10px"}}>
                <div className="form-group">
                    <label>Email Address</label><br/>
                    <input type="email" className="form-control" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label>Leave a Message</label><br/>
                    <textarea id="message" className="form-control" rows={4} cols={50} placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{alignSelf:"left"}}>Send</button>
            </form>
        </div>
        <Footer /></>
    );
}

export default Contact;
