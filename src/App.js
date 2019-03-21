import React, { Component } from 'react';
import './App.css';
import AddTasks from './ToDo Task/AddTask';
import AllTasks from './ToDo Task/AllTasks';
import CompletedTask from './ToDo Task/Completed_Task';
import DeletedTask from './ToDo Task/Deleted_Task';
export const MyContext =React.createContext({data:[]});
class App extends Component {
  state={
    data:[],
  }
  addtodo=(todo)=>{
    const {data}=this.state;
    this.setState({data:data.concat(todo)});
  }
  completetodo=(id)=>{
    const {data}=this.state;
    this.state.data.find(t => (t.id === id)).completed = !(this.state.data.find(t => (t.id === id)).completed);
    if ( this.state.data.find(t => (t.id === id)).deleted)
    {
      this.state.data.find(t => (t.id === id)).completed=false;
      this.state.data.find(t => (t.id === id)).deleted=false;
    }
    this.setState({data:[...data]});
  //  this.setState({data:[this.state.data]})
  }
  deletetodo=(id)=>{
    const {data}=this.state;
    this.state.data.find(t => (t.id === id)).deleted = true;
    this.setState({data:[...data]});
  }
  render() {
    const value={
      state:this.state,
      addtodo:this.addtodo,
      completetodo:this.completetodo,
      deletetodo:this.deletetodo,
    }
    return (
      <>
      {/* hab3at ma3 el value de function hab3atha ll parent wl parent hyb3atha ll child y3del feha aw y3del fl data y3ny ba3den el child yb3at el function tany ll parent ba3d el ta3del */}
      <MyContext.Provider value={value}>
      ALL TASKS:
        <AddTasks />
        <div className="alltasks">
          <AllTasks />
        </div>
COMPLETED:
        <div className="completed">

          <CompletedTask />
        </div>
DELETED:
        <div className="deleted">
          <DeletedTask />
        </div>
      </MyContext.Provider>
      </>
    )
  }
}

export default App;
