import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";

export default function ApplyLeave() {
  const [date, setDate] = useState(null);
  const [date1, setDate1] = useState(null);
  const [value, setValue] = useState("");
  const [ingredient, setIngredient] = useState("");

  const [selectedCity, setSelectedCity] = useState(null);
  const leave = [
    { name: "Paid Leave" },
    { name: "Comp - Off" },
    { name: "Casual Leave" },
    { name: "Sick Leave" },
    { name: "Quarantine leave" },
    { name: "Marriage leave" },
    { name: "Work From Home" },
    { name: "Maternity Leave" },
    { name: "Privilege Leave" },
    { name: "Jury Duty Leave" },
    { name: "Military Leave" },
  ];

  return (
    <div className="Applyleave">
      <div className="flex flex-wrap gap-3">
        <div className="flex align-items-center">
          <RadioButton
            inputId="ingredient1"
            name="pizza"
            value="Cheese"
            onChange={(e) => setIngredient(e.value)}
            checked={ingredient === "Cheese"}
          />
          <label htmlFor="ingredient1" className="ml-2">
            Paid
          </label>
        </div>
        <div className="flex align-items-center">
          <RadioButton
            inputId="ingredient2"
            name="pizza"
            value="Mushroom"
            onChange={(e) => setIngredient(e.value)}
            checked={ingredient === "Mushroom"}
          />
          <label htmlFor="ingredient2" className="ml-2">
            Unpaid
          </label>
        </div>
      </div>
      <div className="flex flex-column mt-4">
        <label htmlFor="username">Leave*</label>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={leave}
          optionLabel="name"
          placeholder="Select a leave"
          className="w-full md:w-14rem mt-2"
        />
      </div>
      <div className="flex flex-column mt-4">
        <label htmlFor="username">From Date*</label>
        <div className="d">
          <Calendar
            id="buttondisplay"
            className="mt-2"
            value={date}
            onChange={(e) => setDate(e.value)}
            showIcon
            dateFormat="dd/mm/yy"
          />
        </div>
      </div>
      <div className="flex flex-column mt-4">
        <label htmlFor="username">To Date*</label>
        <div className="d">
          <Calendar
            id="buttondisplay"
            className="mt-2"
            value={date1}
            onChange={(e) => setDate1(e.value)}
            showIcon
            dateFormat="dd/mm/yy"
          />
        </div>
      </div>
      <div className="flex flex-column mt-4">
        <label htmlFor="username">Reason</label>
        <InputTextarea
          autoResize
          value={value}
          className="mt-2"
          onChange={(e) => setValue(e.target.value)}
          rows={3}
          cols={30}
        />
      </div>
      <div className="flex justify-content-center mt-4">
        <Button label="Submit" />
        <Button label="Cancel" className="mx-3" />
      </div>
    </div>
  );
}
