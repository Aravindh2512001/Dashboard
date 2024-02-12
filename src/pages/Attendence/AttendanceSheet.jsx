import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { AttendanceService } from "../../Datas/AttendanceService";

export default function AttendanceSheet() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    AttendanceService.getCustomersLarge().then((data) => setCustomers(data));
  }, []);

  // const imageTemplate = (rowData) => {
  //   return (
  //     <img
  //       src={rowData.image}
  //       alt={rowData.name}
  //       style={{ width: "50px", height: "50px", borderRadius: "50%" }}
  //     />
  //   );
  // };

  const columns = [];
  for (let i = 0; i < 30; i++) {
    const dayNumber = i + 1;

    columns.push(
      <Column
        key={dayNumber}
        field={`attendance.day${dayNumber}`}
        header={dayNumber.toString()}
        style={{ minWidth: "30px", fontSize: "12px", padding: "0" }}
      />
    );
  }

  return (
    <div>
      <h5 className="pb-6 att_sheet">Attendance Sheet</h5>
      {/* <div className="card"> */}
      <DataTable value={customers} scrollable scrollHeight="500px">
        <Column
          field="name"
          header="Name"
          style={{ minWidth: "100px" }}
          frozen
          className="font-bold"
        ></Column>
        {/* <Column
            field="image"
            header="Image"
            body={imageTemplate}
            frozen
            className="font-bold"
            style={{ minWidth: "30px" }}
          ></Column> */}
        {columns}
      </DataTable>
      {/* </div> */}
    </div>
  );
}
