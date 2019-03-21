import React from 'react';
import {MyContext} from '../App';
class DeletedTask extends React.Component
{
    checkboxChange=(completetodo,id)=>(e)=>
    {
        completetodo(id);
    }
render()
{
    return(
        <MyContext.Consumer>
        {
            value => (

                <>
                    {value.state.data.filter(t => (t.deleted===true)).map(t =><div key={t.id}> <p key={t.id}>{t.text} <input onChange={this.checkboxChange(value.completetodo,t.id)} type="checkbox" /> </p> </div>)}
                    </>
                )
            }
        </MyContext.Consumer>
    )
}
}

export default DeletedTask;