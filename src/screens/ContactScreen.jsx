import { useEffect } from "react";
import FormContact from "../components/generics/FormContact";




const ContactScreen =() =>{
   

 function handleClick(evt){

     evt.preventDefault();
     const formEvt=evt.currentTarget.closest("form");
     const formData = new FormData(formEvt)
     const body = JSON.stringify(Object.fromEntries(formData.entries()));
     const init = {
        method: "post",
        headers:{
            "Content-Type": "application/json",
        },
        body
    }
    fetch("http://localhost:5000/contact",init).then(reps => reps.text()).then(console.log);
 }
    return(
        <>
            <h1>ContactScreen</h1>
            <FormContact onClick = {handleClick}/>
        </>
    );
};

export default ContactScreen;