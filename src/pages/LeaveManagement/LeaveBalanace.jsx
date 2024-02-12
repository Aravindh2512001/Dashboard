import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../../Datas/LeaveBalData";
import { CSVLink } from "react-csv";
import { Button } from "primereact/button";

export default function LeaveBalanace() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  const headers = [
    { label: "EmployeeName", key: "EmployeeName" },
    { label: "Annual Leave Balance", key: "AnnualLeaveBalance" },
    { label: "Sick Leave Balance", key: "SickLeaveBalance" },
    { label: "Other Leave Balance", key: "OtherLeaveBalance" },
    { label: "Leave Taken", key: "LeaveTaken" },
    { label: "Expired Leave", key: "ExpiredLeave" },
    { label: "Accepted", key: "Accepted" },
    { label: "Rejected", key: "Rejected" },
  ];

  return (
    <div className="card">
      <div className="leave_excel">
        <CSVLink
          data={products}
          headers={headers}
          filename={"leave_balance.csv"}
        >
          <Button
            type="button"
            icon="pi pi-file-excel"
            severity="success"
            rounded
            data-pr-tooltip="XLS"
          />
        </CSVLink>
      </div>
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column
          field="EmployeeName"
          header="EmployeeName"
          className="font-bold"
        ></Column>
        Column{" "}
        <Column field="AnnualLeaveBalance" header="Annual Leave"></Column>
        <Column field="AnnualLeaveBalance" header="Leave Taken"></Column>
        <Column field="AnnualLeaveBalance" header="Leave Balance"></Column>
        <Column field="SickLeaveBalance" header="Sick Leave Balance"></Column>
        <Column field="OtherLeaveBalance" header="Other Leave Balance"></Column>
        <Column field="LeaveTaken" header="Total Leave Taken"></Column>
      </DataTable>
    </div>
  );
}
