import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import tableData from "../data/tableData.json";
import _ from "lodash";
const Table = () => {
  const [products] = useState(_.get(tableData, "data", []));
  const paginatorTemplate = {
    layout: "PrevPageLink PageLinks NextPageLink",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <i className="pi pi-chevron-left"></i>
          <span className="p-3">Back</span>
        </button>
      );
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >

          <span className="p-3">Next</span>
          <i className="pi pi-chevron-right"></i>

        </button>
      );
    },
    PageLinks: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
        </button>
      );
    },
  };
  return (
    <div>
      <div className="card">
        <h5>Single Column</h5>
        <DataTable
          value={products}
          paginator
          responsiveLayout="scroll"
          paginatorTemplate={paginatorTemplate}
          rows={8}
        >
          <Column field="code" header="CODE" sortable></Column>
          <Column field="name" header="NAME" sortable></Column>
          <Column field="category" header="CATEGORY" sortable></Column>
          <Column field="quantity" header="QUANTITY" sortable></Column>
          <Column field="price" header="PRICE" sortable></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Table;
