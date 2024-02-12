import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import ApplyLeave from "./ApplyLeave";
import ApplyPending from "./ApplyPending";
import ApplyHistory from "./ApplyHistory";

function LeaveApply() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="Leaveapply">
      <div className="card">
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          <TabPanel header="Apply Leave">
            <ApplyLeave />
          </TabPanel>
          <TabPanel header="Pending">
            <ApplyPending />
          </TabPanel>
          <TabPanel header="History">
            <ApplyHistory />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}

export default LeaveApply;
