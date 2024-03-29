import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InsertionListItem from '@/component/InsertionListItem'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import SideBar from '@/component/SideBar'
import withAuth from '@/component/withAuth';
import { Baseurl } from '@/component/Baseurl';
import { getLocalUserProfile } from '../../common/commonFunction';

function Insertionlist() {
  const [insertionList, setInsertionList] = useState([]);
  const [lineItem, setLineItem] = useState([]);
  const [countsData, setcountsData] = useState();
  const [lineItemCount, setlineItemCount] = useState();
  const [selectedDate, setSelectedDate] = useState('');
  const router = useRouter();
  const { id } = router.query;
  const [disableBtn, setdisableBtn] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token && id) {
          const response = await fetch(`${Baseurl}campaign-insertion-order-list?campaign_id=${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setInsertionList(data)
            setdisableBtn(false)
          } else {
            setInsertionList("")
            setdisableBtn(false)
            throw new Error('Failed to fetch data');
          }

        }
      } catch (error) {
        setdisableBtn(false)
        console.error('Error fetching data:', error);
        setInsertionList([]);
      }
    };

    fetchData();

  }, [id]);

  useEffect(() => {
    const fetchFilterDate = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch(`${Baseurl}campaign-filter-insertion-list?campaign_id=${id}&filter_date=${selectedDate}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setInsertionList(data)
          } else {
            setInsertionList("")
            throw new Error('Failed to fetch data');
          }

        }
      } catch (error) {
        setInsertionList("")
        console.error('Error fetching campaign data:', error);
      }
    };
    if (selectedDate) {
      fetchFilterDate();
    }

  }, [selectedDate]);

  useEffect(() => {
    const fetchLineItem = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token && id) {
          const response = await fetch(`${Baseurl}view-insertion-order-line-item?insertion_line_item_id=00001`, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setLineItem(data)
          } else {
            throw new Error('Failed to fetch data');
          }

        }
      } catch (error) {
        console.error('Error fetching campaign data:', error);
      }
    };

    fetchLineItem();
  }, [id]);

  useEffect(() => {
    // Fetch campaign list from the API
    const fetchCounts = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        const response = await fetch(`${Baseurl}dashboard-insertion-order-count`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setcountsData(data.data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setcountsData([]);
      }
    };

    fetchCounts();
  }, []);
  useEffect(() => {
    // Fetch campaign list from the API
    const fetchCounts = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        const response = await fetch(`${Baseurl}dashboard-line-item-count`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setlineItemCount(data.data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setlineItemCount([]);
      }
    };

    const userProfile = getLocalUserProfile();
            setLoggedInUser(userProfile);

    fetchCounts();
  }, []);

  const cloneInsertionOrder = async (campaignId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${Baseurl}clone-insertion-order?insertion_order_id=${campaignId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const responseData = await response.json();
        window.location.reload();
      } else {
        throw new Error('Failed to clone campaign');
      }
    } catch (error) {
      console.error('Error cloning campaign:', error);
    }
  };
  const cloneLineItem = async (campaignId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${Baseurl}clone-line-item?line_item_id=${campaignId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const responseData = await response.json();
        window.location.reload();
      } else {
        throw new Error('Failed to clone campaign');
      }
    } catch (error) {
      console.error('Error cloning campaign:', error);
    }
  };

  const handleDateChange = (event) => {
    const selected = event.target.value;
    setSelectedDate(selected);
  };

  return (
    <>
      <Header />
      <SideBar role={loggedInUser.user_type ?? ''}/>
      <InsertionListItem data={insertionList} campid={id} countsData={countsData} lineItemCount={lineItemCount} dateChange={handleDateChange} onCloneInsertion={cloneInsertionOrder} onCloneLineItem={cloneLineItem} />
      <Footer />
      {disableBtn ?
        <div className='bg_page_white'>
          <span className="loader"></span>
        </div>
        : ""}
    </>
  )
}
export default withAuth(Insertionlist);