"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, Row } from "react-bootstrap";

export default function MyNextJsExcelSheet() {
  const [items, setItems] = useState([]);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {
          type: "buffer",
        });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        console.log(data);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
    });
  };
  return (
    <div>
      <br></br>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />
      <br></br>
      <br></br>

      <h2 className="mb-3">The Data of The Uploaded Excel Sheet</h2>
      <div className="table-set">
        <Table bordered hover variant="light">
          <thead>
            <tr>
              <th>Who Dealt</th>
              <th>Email</th>
              <th>Website</th>
              <th>Backlink</th>
              <th>Niche</th>
              <th>Traffic</th>
              <th>DR</th>
              <th>Language</th>
              <th>Free</th>
              <th>Asking Price</th>
              <th>Final Price</th>
              <th>LinkType</th>
              <th>Index</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((datas, index) => (
              <tr key={index}>
                <td>{datas.WhoDealt}</td>
                <td>{datas.Email}</td>
                <td>{datas.Website}</td>
                <td>{datas.Backlink}</td>
                <td>{datas.Niche}</td>
                <td>{datas.Traffic}</td>
                <td>{datas.DR}</td>
                <td>{datas.Language}</td>
                <td>{datas.Free}</td>
                <td>{datas.AskingPrice}</td>
                <td>{datas.FinalPrice}</td>
                <td>{datas.LinkType}</td>
                <td>{datas.Index}</td>
                <td>{datas.Remove}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
