import { useEffect, useState } from 'react'
import CreativeMain from "@/component/CreativeMain";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import SideBar from "@/component/SideBar";
import { Baseurl } from '@/component/Baseurl';
import withAuth from '@/component/withAuth';
import { getLocalUserProfile } from '../../common/commonFunction';


function Creatives() {
    const [creative, setCreative] = useState([]);
    const [disableBtn, setdisableBtn] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState({});
    useEffect(() => {
        // Fetch campaign list from the API
        const fetchCreative = async () => {
            try {
                // Get token from localStorage
                const token = localStorage.getItem('token'); 
                const response = await fetch(`${Baseurl}all-creative-list`, {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                        'Content-Type': 'application/json' 
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setdisableBtn(false)
                    setCreative(data);
                } else {
                    setdisableBtn(false)
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                setdisableBtn(false)
                console.error('Error fetching data:', error);
                setCreative([]);
            }
            const userProfile = getLocalUserProfile();
            setLoggedInUser(userProfile);
        };

        fetchCreative();
    }, []);
    return (
        <>
            <Header />
            <SideBar role={loggedInUser.user_type ?? ''} />
            <CreativeMain data={creative.data} />
            <Footer />
            {disableBtn ?
                <div className='bg_page_white'>
                    <span className="loader"></span>
                </div>
                : ""}
        </>
    )
}

export default withAuth(Creatives);