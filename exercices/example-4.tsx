import React from "react";

interface TableProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export const Table = <T,>(props: TableProps<T>) => {
  return null;
};

export const Component = () => {
  return (
    <>
      <Table
        items={[
          { id: 1, firstName: "John", single: true },
          { id: 2, firstName: "Jane" },
        ]}
        renderItem={(item) => {
          return null;
        }}
      />

      <Table
        items={[
          { id: 1, name: "John", age: 30 },
          { id: 2, name: "Jane" },
        ]}
        renderItem={(item) => {
          return null;
        }}
      />
    </>
  );
};
