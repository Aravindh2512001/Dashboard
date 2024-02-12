import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../../Datas/LeaveReqData";

export default function AllLeaveRequest() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    CustomerService.getCustomersLarge().then((data) => setCustomers(data));
  }, []);

  const getStatusColor = (rowData) => {
    switch (rowData.Status) {
      case "pending":
        return "orange";
      case "approved":
        return "green";
      case "rejected":
        return "red";
      default:
        return "";
    }
  };

  const actionTemplate = (rowData) => {
    const handleApprove = () => {
      rowData.Status = "approved";
      setCustomers([...customers]);
    };

    const handleReject = () => {
      rowData.Status = "rejected";
      setCustomers([...customers]);
    };

    return (
      <div className="flex items-center">
        <button
          className="icon-button p-2"
          style={{ background: "none", border: "none" }}
          onClick={handleApprove}
        >
          <i className="fi fi-br-check text-green-500"></i>
        </button>
        <button
          className="icon-button p-2"
          style={{ background: "none", border: "none" }}
          onClick={handleReject}
        >
          <i className="fi fi-br-cross text-red-500"></i>
        </button>
      </div>
    );
  };

  return (
    <>
      {/* <div className="card"> */}
      <DataTable value={customers} scrollable scrollHeight="400px" className="">
        <Column
          field="Name"
          header="Name"
          style={{ minWidth: "100px" }}
          frozen
          className="font-bold"
        ></Column>
        <Column
          field="EmpID"
          header="Emp ID"
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="LeaveFrom"
          header="Leave From"
          style={{ minWidth: "120px" }}
        ></Column>
        <Column
          field="LeaveTo"
          header="Leave To"
          style={{ minWidth: "120px" }}
        ></Column>
        <Column
          field="NoOfDays"
          header="No Of Days"
          style={{ minWidth: "120px" }}
        ></Column>
        <Column
          field="LeaveType"
          header="Leave Type"
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="Reason"
          header="Reason"
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="Status"
          header="Status"
          style={{ minWidth: "100px" }}
          body={(rowData) => (
            <span style={{ color: getStatusColor(rowData) }}>
              {rowData.Status}
            </span>
          )}
        ></Column>
        <Column
          field="Action"
          header="Action"
          body={actionTemplate}
          style={{ minWidth: "100px" }}
        ></Column>
      </DataTable>
      {/* </div> */}
    </>
  );
}

// I have a jasand cross buton in another column .
// if i clicke the on data with 3 status pending , approved , rejecject .
// i hvae a tick check icon the approved in the status column should be change to green color .
// if i clicke the cross icon the rejected in the status column should be change to red color .
// before that both should be in  default color .
// if the status had pending the text color should be in orange.
// if i click the check icon the pendings status should be change to approved with green colcor.
// if i click the cross icon  is reject it should be in red color.
