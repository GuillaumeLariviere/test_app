// import { Link } from "react-router-dom";




const GenericForm =(props)=>{
//  const {method, endpoint , submitButtonText} = props
    function handleSubmit(evt){

        evt.preventDefault();
        const formEvt=evt.currentTarget;
        const formData = new FormData(formEvt)
        const body = JSON.stringify(Object.fromEntries(formData.entries()));
        const init = {
           method: props.method,
           headers:{
               "Content-Type": "application/json",
           },
           body
       }
       fetch(props.endpoint,init).then(reps => reps.text()).then(console.log);
    };
    return (
<>
    <form onSubmit={handleSubmit}>
        
         {props.children}

        <button type="submit" className="btn btn-primary">{props.submitButtonText}</button>
    </form>
</>
    );
};
export default GenericForm;