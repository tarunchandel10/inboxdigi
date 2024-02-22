import MenuItem from "../MenuItem/MenuItem";

export default function SuperAdminMenu() {
  return (
    <>
      {/* <MenuItem
        href="/superadmin/dashboard"
        src="/images/dashboard.svg"
        alt="Campaigns"
        text="Dashboard"
      /> */}
      <MenuItem
        href="/superadmin/dashboard"
        src="/images/dashboard.svg"
        alt="Accounts"
        text="Accounts"
      />
      <MenuItem
        href="#"
        src="/images/Reports.svg"
        alt="Reports"
        text="Reports"
      />
      <MenuItem
        href="/superadmin/panelusers"
        src="/images/user_icon.svg"
        alt="Panel User"
        text="Panel User"
      />
    </>
  );
}
