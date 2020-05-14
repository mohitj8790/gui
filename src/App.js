import React from 'react';
//import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import CustomerList from './containers/CustomerListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <CustomerList />
      </CustomLayout>
    </div>
  );
}

export default App;
