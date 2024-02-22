import Image from "next/image";
import { useRouter } from "next/router";
import SuperAdminMenu from "./sidebar/superadmin";
import AdminMenu from "./sidebar/admin";
import AdvertiserMenu from "./sidebar/advertiser";
import CustomerMenu from "./sidebar/customer";
import { ADMIN, ADVERTISER, CUSTOMER, SUPER_ADMIN } from "@/common/constants";
function SideBar(props) {
  const { role } = props;
  const router = useRouter();
  const handleLogout = () => {
    router.push('/logout');
  };
  return (
    <>
      <input type="checkbox" id="sidebar-menu" role="button" />
      <div className="sidebar-container">
        <ol className="sidebar">
          {role && role == SUPER_ADMIN && <SuperAdminMenu />}
          {role && role == ADMIN && <AdminMenu />}
          {role && role == ADVERTISER && <AdvertiserMenu />}
          {role && role == CUSTOMER && <CustomerMenu />}
          <li>
            <a>
              <span >
                <Image
                  src="/images/Settings.svg"
                  width={26}
                  height={20}
                  alt="Picture of the author"
                  style={{ width: "26px", height: "20px" }}
                />
              </span>
              <strong>Settings</strong>
            </a>
          </li>
          <li>
            <a onClick={handleLogout}>
              <span >
                <Image
                  src="/images/Logout.svg"
                  width={26}
                  height={20}
                  alt="Picture of the author"
                  style={{ width: "26px", height: "20px" }}
                />
              </span>
              <strong>Logout</strong>
            </a>
          </li>
        </ol>
      </div>
    </>
  );
}

export default SideBar;