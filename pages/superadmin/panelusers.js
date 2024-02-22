import React, { useEffect, useState } from 'react';
import Footer from '@/component/Footer';
import Header from '@/component/Header';
import SideBar from '@/component/SideBar';
import AdminDasboard from '@/component/adminDashboard';
import { getAllAdvertiser } from '../api/admin';
import { getAllAdmins, getAllPanelUsers } from '../api/superadmin';
import { getLocalUserProfile } from '../../common/commonFunction';
import { withAuthAndRole } from '../../common/withAuthAndRole';
import { ADMIN, SUPER_ADMIN } from '../../common/constants';
import PanelTable from '@/component/panelusertable';

function PanelUsers() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userProfile = getLocalUserProfile();
        setLoggedInUser(userProfile);
        if (userProfile.user_type === ADMIN) {
          const data = await getAllAdvertiser();
          if (data.status) {
            setUsers(data.data);
          }
        } else if (userProfile.user_type === SUPER_ADMIN) {
          const data = await getAllPanelUsers();
          if (data.status) {
            setUsers(data.data);
          } 
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Header />
      <SideBar role={loggedInUser.user_type ?? ''} />
      <PanelTable users={users} role={loggedInUser.user_type ?? ''} />
      {/* <AdminDasboard users={users} role={loggedInUser.user_type ?? ''} /> */}
      <Footer />
    </>
  );
}

export default withAuthAndRole(PanelUsers, [SUPER_ADMIN]);
