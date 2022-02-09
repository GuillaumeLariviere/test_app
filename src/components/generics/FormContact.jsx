// import { Link } from "react-router-dom";


const FormContact =()=>{

    return (
        <>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Message</label>
    <textarea className="form-control" name="formMessage" id="formMessage"rows="5"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    );
};
export default FormContact;