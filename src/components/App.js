import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./Admin";
import ManagerList from "./ManagerList";
import Tabs from 'react-bootstrap/Tabs';
import Tab from "react-bootstrap/Tab";
import CustomerList from "./CustomerList";


function App() {
  return (
    <>
      <Tabs defaultActiveKey="admin"  className="tabs mb-3">
        <Tab eventKey="admin" title="Admin" className="tab col-md-3">
           <Admin />
        </Tab>
        <Tab eventKey="manager" title="Manager" className="tab col-md-3">
          <ManagerList />
        </Tab>
        <Tab eventKey="customer" title="Customer" className="tab col-md-3">
          <CustomerList />
        </Tab>
    </Tabs>
    </>
  );
}

export default App;
