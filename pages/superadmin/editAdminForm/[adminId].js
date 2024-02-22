import { useEffect, useState } from "react";
import { PersonFill } from 'react-bootstrap-icons';
import FormField from "@/component/Form/InputField";
import SelectField from "@/component/Form/SelectField";
import { createAdmin, getAdminDetail, updateeAdmin } from "@/pages/api/superadmin"
import { useRouter } from "next/router";
import { useParams } from 'next/navigation';

export default function Admin() {
    const params = useParams()

    const currency = ['Impression']
    const currencyType = ['USD', 'INR']
    const [formValues, setFormValue] = useState({
        fname: '',
        lname: '',
        domain_name: '',
        email: '',
        password: '',
        currency: '',
        currency_type: '',
        mobile: '',
        inital_budget: ''
    })
    const [loading, setLoadiing] = useState(false)
    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            ...formValues,
            user_id: params.adminId,
        }
        updateeAdmin(body).then((data) => {
            router.push(`/superadmin/dashboard`);
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        console.log(params)
        getAdminDetail(params.adminId).then((data) => {
            console.log(data.data.user_detail, "datatdwha")
            let { fname,
                lname,
                domain_name,
                email,
                password,
                currency,
                currency_type,
                mobile,
                inital_budget } = data.data.user_detail

            setFormValue({
                fname: fname,
                lname: lname,
                domain_name: domain_name,
                email: email,
                password: password,
                currency: currency,
                currency_type: currency_type,
                mobile: mobile,
                inital_budget: inital_budget,
            })
        }).catch(() => {

        })


    }, [])

    return (
        <>
            <div className="create-form">
                <div className="container">
                    <div className="create-form-page">
                        <div className="create-form-img">
                            <img src="/images/ad-logo.png" alt="" />
                        </div>
                        <div className="create-form-hdng">
                            <h2>Edit Admin</h2>
                            <p>For whatever matters most, make it easier for potential customers to find your business with AD 360 Global.</p>
                        </div>
                        {console.log(formValues, "formvalue")}
                        <form className="create-form-box" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="fname" placeholder="First Name" value={formValues.fname} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="lname" placeholder="Last Name" value={formValues.lname} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-12">
                                    <FormField icon={<PersonFill />} type="text" name="domain_name" placeholder="Domain Name" value={formValues.domain_name} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="email" name="email" placeholder="Email" value={formValues.email} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="password" name="password" placeholder="Password" value={formValues.password} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <SelectField name="currency" value={formValues.currency} setValue={handleInputChange} options={currency} />
                                </div>
                                <div className="col-md-6">
                                    <SelectField name="currency_type" value={formValues.currency_type} setValue={handleInputChange} options={currencyType} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="mobile" placeholder="Mobile" value={formValues.mobile} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="inital_budget" placeholder="Initial Budget" value={formValues.inital_budget} required onChange={handleInputChange} />
                                </div>
                                <div className="create-form-btn">
                                    <button type="submit" className="btn">Update Admin</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
