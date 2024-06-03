import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>CITY</TableColumn>
        <TableColumn>DATE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Better Things Berlin</TableCell>
          <TableCell>Berlin</TableCell>
          <TableCell>2023-08-21</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Hängmattan</TableCell>
          <TableCell>Gothenburg</TableCell>
          <TableCell>2023-02-25</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
