export const ProductService = {
  getProductsData() {
    return [
      {
        EmployeeName: "John Doe",
        AnnualLeaveBalance: 20,
        SickLeaveBalance: 10,
        OtherLeaveBalance: 5,
        LeaveTaken: 15,
        ExpiredLeave: 0,
        Accepted: 12,
        Rejected: 3,
      },
      {
        EmployeeName: "Jane Smith",
        AnnualLeaveBalance: 15,
        SickLeaveBalance: 8,
        OtherLeaveBalance: 3,
        LeaveTaken: 12,
        ExpiredLeave: 1,
        Accepted: 10,
        Rejected: 2,
      },
      {
        EmployeeName: "Alice Johnson",
        AnnualLeaveBalance: 18,
        SickLeaveBalance: 12,
        OtherLeaveBalance: 6,
        LeaveTaken: 14,
        ExpiredLeave: 2,
        Accepted: 13,
        Rejected: 1,
      },
      {
        EmployeeName: "Michael Brown",
        AnnualLeaveBalance: 22,
        SickLeaveBalance: 9,
        OtherLeaveBalance: 7,
        LeaveTaken: 18,
        ExpiredLeave: 0,
        Accepted: 16,
        Rejected: 2,
      },
      {
        EmployeeName: "Emily Davis",
        AnnualLeaveBalance: 17,
        SickLeaveBalance: 11,
        OtherLeaveBalance: 4,
        LeaveTaken: 13,
        ExpiredLeave: 0,
        Accepted: 11,
        Rejected: 2,
      },
    ];
  },

  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },

  getProducts() {
    return Promise.resolve(this.getProductsData());
  },

  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  },

  getProductsWithOrders() {
    return Promise.resolve(this.getProductsWithOrdersData());
  },
};
