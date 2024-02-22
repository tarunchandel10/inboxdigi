import React, { useEffect, useState } from 'react';
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import SideBar from '@/component/SideBar';
import AdminDasboard from '@/component/adminDashboard';
import { getAllAdvertiser, getMonthltyBudgetCount, getTotalAccountCount } from '../api/admin';
import { getLocalUserProfile } from '../../common/commonFunction';
import { withAuthAndRole } from '../../common/withAuthAndRole';
import Usertype, { ADMIN } from '../../common/constants';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});
    const [accountCount, setAccountCount] = useState({});
    const [budgetCount, setBudgetCount] = useState(0)

    useEffect(() => {
        getAllAdvertiser().then((data) => {
            if (data.status) {
                setUsers(data.data)
            }
        }).catch((error) => {
            console.log(error)
        })
        const userProfile = getLocalUserProfile();
        setLoggedInUser(userProfile);

        getTotalAccount();
        getMonthltyCount();
    }, []);


    const getTotalAccount = async () => {
        const data = await getTotalAccountCount();
        if (data.status) {
            setAccountCount(data.data)
        }
    }
    const getMonthltyCount = async () => {


        const data = await getMonthltyBudgetCount();
        if (data.status) {
            setBudgetCount(data.data.total_budget)
        }
    }
    return (
        <>
            <Header />
            <SideBar role={loggedInUser.user_type ?? ''} />
            <AdminDasboard users={users} role={loggedInUser.user_type ?? ''} accountCount={accountCount} budgetCount={budgetCount} />
            <Footer />

        </>
    );
}


export default withAuthAndRole(Dashboard, [ADMIN]); 