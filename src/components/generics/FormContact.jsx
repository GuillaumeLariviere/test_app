// import { Link } from "react-router-dom";


const FormContact =(props)=>{
const {onClick} = props
    return (
<>
    <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputmessage" className="form-label">Message</label>
            <textarea className="form-control" name="formMessage" id="formMessage"rows="5"/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onClick}>Submit</button>
    </form>
</>
    );
};
export default FormContact;