import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
// import { ToggleButton } from "primereact/togglebutton";
import { AttendanceService } from "../../Datas/AttendanceService";

export default function EmpAttendance() {
  const [customers, setCustomers] = useState([]);
  //   const [actionFrozen, setActionFrozen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AttendanceService.getCustomersLarge().then((data) => setCustomers(data));
  }, []);

  const allowEdit = (rowData) => {
    return rowData.name !== "Blue Band";
  };
  const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
  };
  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  return (
    <div>
      <h5 className="pb-6 att_sheet">Employee Attendance</h5>
      <div className="card">
        <div className="grid justify-content-between">
          <div className="col-2 col-md-2 p-3">
            <h6 className="att_h6">Merlin Smith</h6>
            <p>Software Developer</p>
          </div>
          <div className="col-2 col-md-2 p-3">
            <h6 className="att_h6">Employee ID</h6>
            <p>IM062587UT</p>
          </div>
          <div className="col-2 col-md-2 p-3">
            <h6 className="att_h6">Joining Date</h6>
            <p>12 January 2015</p>
          </div>
          <div className="col-2 col-md-2 p-3">
            <h6 className="att_h6">Department</h6>
            <p>IT</p>
          </div>
          {/* <div className="col-2 col-md-2 p-3">
          <h6 className="att_h6">Designation</h6>
          <p>Software Developer</p>
        </div> */}
        </div>
        {/* <div className="card"> */}
        {/* <ToggleButton
          checked={actionFrozen}
          onChange={(e) => setActionFrozen(e.value)}
          onIcon="pi pi-lock"
          offIcon="pi pi-lock-open"
          onLabel="Edit"
          offLabel="Edit"
          style={{ width: "150px" }}
        /> */}
      </div>

      <DataTable
        stripedRows
        value={customers}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        scrollable
        scrollHeight="500px"
        className="mt-4"
      >
        <Column
          field="date"
          header="Date"
          style={{ minWidth: "150px" }}
          frozen
          className="font-bold"
          headerStyle={{
            borderTopLeftRadius: "14px",
            borderBottomLeftRadius: "14px",
          }}
        ></Column>

        <Column
          field="department"
          header="Department"
          style={{ minWidth: "150px" }}
        ></Column>
        <Column
          field="designation"
          header="Designation"
          style={{ minWidth: "150px" }}
        ></Column>
        <Column
          field="checkin"
          header="Check-In"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="checkout"
          header="Check-Out"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="workinghours"
          header="Working Hours"
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="shift"
          header="Shift"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          field="status"
          header="Status"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "200px" }}
        ></Column>
        <Column
          rowEditor={allowEdit}
          header="Action"
          style={{ minWidth: "100px" }}
        ></Column>
        {/* <Column field="joinDate" header="Joining Date" style={{ minWidth: '200px' }}></Column> */}
        {/* <Column field="checkintime" header="Check-in" style={{ minWidth: '200px' }}></Column> */}
        {/* <Column field="checkouttime" header="check-out" style={{ minWidth: '200px' }}></Column> */}
        {/* <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '200px' }} alignFrozen="right" frozen={balanceFrozen}></Column> */}
      </DataTable>
      {/* </div> */}
    </div>
  );
}
