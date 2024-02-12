import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { AttendanceService } from "../../Datas/AttendanceService";
// import { findByLabelText } from "@testing-library/react";

export default function TodayAttendance() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    AttendanceService.getCustomersLarge().then((data) => setCustomers(data));
  }, []);

  // const allowEdit = (rowData) => {
  //   return rowData.name !== "Blue Band";
  // };

  const onRowEditComplete = (e) => {};

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };
  const imageTemplate = (rowData) => {
    return (
      <div className="flex" style={{ alignItems: "center" }}>
        <img
          src={rowData.image}
          alt={rowData.name}
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        />
        <span>{rowData.name}</span>
      </div>
    );
  };
  return (
    <div>
      <h5 className="pb-6 att_sheet">Today Attendance</h5>
      {/* <div className="card"> */}
      <DataTable
        className="Emp_att"
        value={customers}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        scrollable
        scrollHeight="400px"
        // className="mt-4"
        //   rowClassName={() => 'table-row-border'}
      >
        {/* <Column
            field="image"
            header="Image"
            frozen
            className="font-bold"
            body={imageTemplate}
            style={{ minWidth: "" }}
          ></Column> */}
        <Column
          // field="name"
          header="Name"
          frozen
          className="font-bold"
          body={imageTemplate}
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px", textAlign: "center" }}
        ></Column>
        <Column
          field="department"
          header="Department"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="firstIn"
          header="First In"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="break"
          header="Break"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="lastOut"
          header="Last Out"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="total"
          header="Total"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="status"
          header="Status"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px" }}
        ></Column>
        <Column
          field="shift"
          header="Shift"
          editor={(options) => textEditor(options)}
          style={{ minWidth: "100px" }}
        ></Column>
        {/* <Column
          rowEditor={allowEdit}
          header="Action"
          style={{ minWidth: "100px" }}
        ></Column> */}
      </DataTable>
      {/* </div> */}
    </div>
  );
}
