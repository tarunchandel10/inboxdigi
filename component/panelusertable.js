import { DoughnutChart } from "./charts/doughnutChart";
import { BarChart } from "./charts/barChart";
import AdminDashboardTable from "./table/AdminDashboardTable";
import SuperadminDashboardTable from "./table/SuperadminDashboardTable";
import CustomButton from "./button/CustomButton";
import Image from "next/image";
import { ADMIN, SUPER_ADMIN } from "@/common/constants";
import PanelUserTable from "./table/paneluserTable";

function PanelTable(props, onApply) {
  const { users, role } = props

  return (
    <>
      <section className="main">
        <div className="container-fluid mt-4 dashboard-container">

          <div className="row table-data">
            <div className="col-12">
              <div className="table_top">
                {role && role == SUPER_ADMIN && <CustomButton href='/superadmin/createUserForm' text="Create User" iconSrc="/images/plus.svg" />}
                {role && role == ADMIN && <CustomButton href='/admin/createUserForm' text="Create User" iconSrc="/images/plus.svg" />}

                {/* <div className="ms-auto clear">Clear All</div> */}
              </div>
            </div>
            <div className="col-12 dashboard_table">
              
              <div className="table-responsive">
                {role && role == SUPER_ADMIN && <PanelUserTable role={role} users={users} />}
                {role && role == ADMIN && <PanelUserTable role={role} users={users} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default PanelTable;
