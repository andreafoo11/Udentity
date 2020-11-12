import React from 'react'
import Form from './form.js'
import "./form.css"

class Dashboard extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
          name: props.name
      };
    }

  render() {
    return (
    <>
    {
      
      <div class = "dashboard_container">
            Welcome, {this.state.name}
      </div>
    }

    </>
    );
  }
}

export default Dashboard;
