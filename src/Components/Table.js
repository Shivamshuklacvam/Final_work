import { useEffect, useState } from "react";
import "../index.css";

const Table = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("/data.json")
        .then((response) => response.json())
        .then((json) => setData(json.assetAdoption));
    }, []);

    return(
        <div className="table-container toggle-container container ">
            <strong>Asset Adoption </strong>
           
        <table>
          <thead>
            <tr>
              <th>Account Name</th>
              <th>Asset Name</th>
              <th>MCO</th>
              <th>IH/RH</th>
              <th>Deal Closure</th>
              <th>Asset Revenue</th>
              <th>In Focus</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="in-focus">{item.accountName}</td>
                <td>{item.assetName}</td>
                <td>{item.MCO}</td>
                <td>{item.IHRH}</td>
                <td>{item.dealClosureQuarter}</td>
                <td >${item.assetRevenue.toFixed(2)}</td>
                <td className="in-focus">{item.inFocus ? "Yes" : "No" }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Table;