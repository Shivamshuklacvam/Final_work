import React, { useState, useEffect } from 'react';
import "../index.css";

const AssetPipeline = () => {
  const [pipelineData, setPipelineData] = useState(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/pipelineData.json') 
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPipelineData(data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error("Error:", error);
      });
  },);

  if (loading) return <div>Loading...</div>;
  return (
    <div className="container table">
      <h3>View asset pipeline</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Opportunity ID</th>
              <th>Account name</th>
              <th>Asset name</th>
              <th>MCO</th>
              <th>IH</th>
              <th>Revenue (MUSD)</th>
              <th>Expected Closure Date</th>
              <th>Deal winning probability</th>
              <th>Deal stage</th>
              <th>Remark</th>
              <th className="action">Action</th>
            </tr>
          </thead>
          <tbody>
            {pipelineData.map(item => ( 
              <tr key={item.opportunityId}>
                <td className='in-focus'>{item.opportunityId}</td>
                <td>{item.accountName}</td>
                <td>{item.assetName}</td>
                <td>{item.mco}</td>
                <td>{item.ih}</td>
                <td>{item.revenue}</td>
                <td>{item.expectedClosureDate}</td>
                <td>{item.dealWinningProbability}</td>
                <td>{item.dealStage}</td>
                <td>{item.remark}</td>
                <td className="action fixed"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <button>+ Add new pipeline</button>
        <button>Update bulk</button>
      </div>
    </div>
  );
};

export default AssetPipeline;