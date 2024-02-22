import { useEffect, useState } from "react";
import { PersonFill } from 'react-bootstrap-icons';
import FormField from "@/component/Form/InputField";
import SelectField from "@/component/Form/SelectField";
import { useRouter } from "next/router";
import { getAdminDetail, updateeAdmin } from "@/pages/api/superadmin";
import { useParams } from "next/navigation";

export default function CreateUserForm() {
    const params = useParams()
    const userRoles = [{ name: 'Super Admin', value: 'Super_admin ' }, { name: 'Manager', value: 'Manager' }]
    const [formValues, setFormValue] = useState({
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        password: '',
        mark_as_user_type: ''
    })
    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            ...formValues,
            user_id: params.userId,
        }
        updateeAdmin(body).then((data) => {
            router.push(`/superadmin/panelusers`);
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        getAdminDetail(params.userId).then((data) => {
            let { fname,
                lname,
                email,
                password,

                mobile,
                user_type } = data.data.user_detail

            setFormValue({
                fname: fname,
                lname: lname,
                email: email,
                password: password,
                mobile: mobile,
                mark_as_user_type: user_type,
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
                            <h2>Create User</h2>
                            <p>For whatever matters most, make it easier for potential customers to find your business with AD 360 Global.</p>
                        </div>
                        <form className="create-form-box" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="fname" placeholder="First Name" value={formValues.fname} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="lname" placeholder="Last Name" value={formValues.lname} required onChange={handleInputChange} />
                                </div>

                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="email" name="email" placeholder="Email" value={formValues.email} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="password" name="password" placeholder="Password" value={formValues.password} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <FormField icon={<PersonFill />} type="text" name="mobile" placeholder="Mobile" value={formValues.mobile} required onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <SelectField type={'obj'} name="mark_as_user_type" value={formValues.mark_as_user_type} setValue={handleInputChange} options={userRoles} />
                                </div>

                                <div className="create-form-btn">
                                    <button type="submit" className="btn">Create User</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
