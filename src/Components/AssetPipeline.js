// components/AssetPipeline.js
import React, { useState, useEffect } from 'react';

const AssetPipeline = () => {
  const [pipelineData, setPipelineData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data from a JSON file or API
    fetch('/pipelineData.json') // Replace with your data source
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPipelineData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  },);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ marginTop: '20px' }} className='container'>
      <h2>View asset pipeline</h2>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pipelineData.map(item => (
              <tr key={item.opportunityId} style={{ borderBottom: '1px solid #ddd' }}>
                <td>{item.opportunityId}</td>
                <td>{item.accountName}</td>
                <td>{item.assetName}</td>
                <td>{item.mco}</td>
                <td>{item.ih}</td>
                <td>{item.revenue}</td>
                <td>{item.expectedClosureDate}</td>
                <td>{item.dealWinningProbability}</td>
                <td>{item.dealStage}</td>
                <td>{item.remark}</td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '10px' }}>+ Add new pipeline</button>
        <button>Update bulk</button>
      </div>
    </div>
  );
};

export default AssetPipeline;