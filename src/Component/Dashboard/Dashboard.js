import React from 'react';
import Header from '../Header/Header';

const Dashboard = () => {
  return (
    <>
    <Header />
    <div className="container mt-5">
      <h2 className="mb-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Widget 1</h5>
              <p className="card-text">This is the content of Widget 1.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Widget 2</h5>
              <p className="card-text">This is the content of Widget 2.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Widget 3</h5>
              <p className="card-text">This is the content of Widget 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
