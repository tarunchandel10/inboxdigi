import { useState } from "react";
import { PersonFill } from 'react-bootstrap-icons';
import FormField from "@/component/Form/InputField";
import { useRouter } from "next/router";
import { createAdvertiser } from "../api/admin";

export default function CreateAdvertiserForm() {
    const [formValues, setFormValue] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        mobile: '',
        inital_budget: ''
    })
    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createAdvertiser(formValues).then((data) => {
            router.push(`/admin/dashboard`);
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <>
            <div className="create-form">
                <div className="container">
                    <div className="create-form-page">
                        <div className="create-form-img">
                            <img src="/images/ad-logo.png" alt="" />
                        </div>
                        <div className="create-form-hdng">
                            <h2>Create Advertiser</h2>
                            <p>For whatever matters most, make it easier for potential customers to find your business with AD 360 Global.</p>
                        </div>
                        <form className="create-form-box" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="fname" placeholder="First Name" values={formValues.fname} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="lname" placeholder="Last Name" values={formValues.lname} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="email" name="email" placeholder="Email" values={formValues.email} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="password" name="password" placeholder="Password" values={formValues.password} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="mobile" placeholder="Mobile" values={formValues.mobile} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="inital_budget" placeholder="Initial Budget" values={formValues.inital_budget} required onChange={handleInputChange} />
                                </div>
                                <div className="create-form-btn">
                                    <button type="submit" className="btn">Create Advertiser</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
