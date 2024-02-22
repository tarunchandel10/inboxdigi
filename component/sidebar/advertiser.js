import MenuItem from "../MenuItem/MenuItem";

export default function AdvertiserMenu() {
  return (
    <>
      <MenuItem
        href="/advertiser/dashboard"
        src="/images/Campaigns.svg"
        alt="Campaigns"
        text="Campaigns"
      />
      <MenuItem
        href="/advertiser/creatives"
        src="/images/Creative.svg"
        alt="Creative"
        text="Creative"
      />
      <MenuItem
        href="#"
        src="/images/Reports.svg"
        alt="Reports"
        text="Reports"
      />
      <MenuItem
        href="#"
        src="/images/user_icon.svg"
        alt="Panel User"
        text="Panel User"
      />
    </>
  );
}
