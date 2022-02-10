const FormInput=(props)=> {

    const {htmlFor, labelText, inputType, inputIdName} =props
    return(
<>
        <div className="mb-3">
        <label htmlFor={htmlFor} className="form-label">
            {labelText}
        </label>
        <input
            type={inputType}
            className="form-control"
            id={inputIdName}
            name={inputIdName}
        />
    </div>
</>
    )
}
export default FormInput;