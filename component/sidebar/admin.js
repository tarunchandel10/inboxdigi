import MenuItem from "../MenuItem/MenuItem";

export default function AdminMenu() {
  return (
    <>
      {/* <MenuItem
        href="/admin/dashboard"
        src="/images/dashboard.svg"
        alt="Dashboard"
        text="Dashboard"
      /> */}
      <MenuItem
        href="/admin/dashboard"
        src="/images/dashboard.svg"
        alt="Advertisers"
        text="Advertisers"
      />
      <MenuItem
        href="#"
        src="/images/Reports.svg"
        alt="Reports"
        text="Reports"
      />
      <MenuItem
        href="/admin/panelusers"
        src="/images/user_icon.svg"
        alt="Panel User"
        text="Panel User"
      />
    </>
  );
}
