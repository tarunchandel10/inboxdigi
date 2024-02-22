import { DoughnutChart } from "./charts/doughnutChart";
import { BarChart } from "./charts/barChart";
import AdminDashboardTable from "./table/AdminDashboardTable";
import SuperadminDashboardTable from "./table/SuperadminDashboardTable";
import CustomButton from "./button/CustomButton";
import Image from "next/image";
import { ADMIN, SUPER_ADMIN } from "@/common/constants";

function AdminDashboard(props, onApply) {
  const {users, role ,accountCount, budgetCount} = props
    
  return (
    <>
      <section className="main">
        <div className="container-fluid mt-4 dashboard-container">
          <div className="row chart-data">
            <div className="col-md-4">
              <DoughnutChart accountCount={accountCount} />
            </div>
            <div className="col-md-4">
              <BarChart budgetCount={budgetCount} />
            </div>
          </div>
          <div className="row table-data">
            <div className="col-12">
              <div className="table_top">
                {role && role == SUPER_ADMIN && <CustomButton href='/superadmin/createAdminForm' text="Create Admin" iconSrc="/images/plus.svg"/>}
                {role && role == ADMIN && <CustomButton href='/admin/createAdvertiserForm' text="Create Advertiser" iconSrc="/images/plus.svg" />}
                <div className="custom_date">
                  <input id="startDate" type="date" />
                </div>
                <span className="filter">
                  Filter
                  <Image
                    src="/images/Filter.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                    style={{ width: "20px", height: "20px" }}
                  />
                </span>
                {/* <div className="ms-auto clear">Clear All</div> */}
              </div>
            </div>
            <div className="col-12 dashboard_table">
              <div className="table-responsive">
                {role && role == SUPER_ADMIN && <SuperadminDashboardTable users={users} />}
                {role && role == ADMIN && <AdminDashboardTable users={users} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AdminDashboard;
