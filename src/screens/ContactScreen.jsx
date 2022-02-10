import GenericForm from "../components/generics/FormContact";
import FormInput from "../components/layouts/FormInput";

const ContactScreen = () => {

    return (
        <>
            <h1>ContactScreen</h1>
            <GenericForm method="post" endpoint="http://localhost:5000/contact" submitButtonText="Envoyer">
                <FormInput htmlFor="email" labelText="votre mail" inputType="email" inputIdName="email" />
                <FormInput htmlFor="firstName" labelText="Prénom" inputType="text" inputIdName="firstName" />
                <FormInput htmlFor="lastName"  labelText="Nom" inputType="text" inputIdName="lastName" />
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"

                    ></textarea>
                </div>
            </GenericForm>
        </>
    );
};

export default ContactScreen;