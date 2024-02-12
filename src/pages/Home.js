import React from "react";
import Project from "../pages/Projects/index";
import Dashboard from "../pages/Dashboard/index";

function AdminDashboard() {
  return (
    <div>
      <h1>home page</h1>
      {/* <Header title="Dashboard" /> */}
      <div>
        <section>
          <Dashboard/>
          <Project />
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
