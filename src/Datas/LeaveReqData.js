export const CustomerService = {
  getData() {
    return [
      {
        Image: "https://example.com/image1.jpg",
        Name: "John Doe",
        LeaveType: "Annual Leave",
        LeaveFrom: "2024-01-15",
        LeaveTo: "2024-01-20",
        NoOfDays: 6,
        Status: "Approved",
        Reason: "Family vacation",
        Actions: "",
        EmpID: "01",
        balance: "2000",
      },
      {
        Image: "https://example.com/image2.jpg",
        Name: "Alice Smith",
        LeaveType: "Sick Leave",
        LeaveFrom: "2024-02-01",
        LeaveTo: "2024-02-03",
        NoOfDays: 3,
        Status: "Approved",
        Reason: "Flu",
        Actions: "",
        EmpID: "02",
        balance: "2000",
      },
      {
        Image: "https://example.com/image3.jpg",
        Name: "Michael Johnson",
        LeaveType: "Paternity Leave",
        LeaveFrom: "2024-01-10",
        LeaveTo: "2024-01-11",
        NoOfDays: 2,
        Status: "Approved",
        Reason: "Welcoming newborn",
        Actions: "",
        EmpID: "03",
        balance: "2000",
      },
      {
        Image: "https://example.com/image4.jpg",
        Name: "Emily Brown",
        LeaveType: "Unpaid Leave",
        LeaveFrom: "2024-01-25",
        LeaveTo: "2024-01-27",
        NoOfDays: 3,
        Status: "Rejected",
        Reason: "Personal reasons",
        Actions: "",
        EmpID: "04",
        balance: "2000",
      },
      {
        Image: "https://example.com/image5.jpg",
        Name: "David Lee",
        LeaveType: "Maternity Leave",
        LeaveFrom: "2024-02-10",
        LeaveTo: "2024-02-15",
        NoOfDays: 6,
        Status: "Pending",
        Reason: "Expected childbirth",
        Actions: "",
        EmpID: "05",
        balance: "2000",
      },
    ];
  },
  getCustomersSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  },

  getCustomersMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  },

  getCustomersLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  },

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  },

  getCustomers(params) {
    const queryParams = params
      ? Object.keys(params)
          .map(
            (k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
          )
          .join("&")
      : "";

    return fetch(
      "https://www.primefaces.org/data/customers?" + queryParams
    ).then((res) => res.json());
  },
};
