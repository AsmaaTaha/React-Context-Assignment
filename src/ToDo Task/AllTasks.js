import React from 'react';
import {MyContext} from '../App';
class AllTasks extends React.Component {
    checkboxChange =(completetodo,id)=> (e) => {
        completetodo(id);
    }
    deleteChange = (deletetodo,id)=>(e) => {
      deletetodo(id);
    }
    
    render() {
        return(
        <MyContext.Consumer>
            {
                value => (

                    <>
                        {

                            value.state.data.filter(t => (!t.completed && !t.deleted)).map(t => <div key={t.id}><span>{t.text}</span> <span onClick={this.deleteChange(value.deletetodo,t.id)}  className="fa fa-close"></span> <input onChange={this.checkboxChange(value.completetodo,t.id)}  type="checkbox" /></div>)
                        }
                    </>
                )
            }
        </MyContext.Consumer>
        )
    }
}

export default AllTasks;
