import React from 'react';
import {MyContext} from '../App';
class CompletedTask extends React.Component {
    checkboxchange =(completetodo,id)=> (e) => {
        completetodo(id);
    }
    render() {
        return(
        <MyContext.Consumer>
            {
                value => (

                    <>
                        {
                            value.state.data.filter(t => (t.completed === true && t.deleted === false)).map(t => <div key={t.id}><p key={t.id}>{t.text} <input onChange={this.checkboxchange(value.completetodo,t.id)} data-cid={t.id} type="checkbox" /></p></div>)

                        }
                    </>
                )
            }
        </MyContext.Consumer>
        )
    }
}

export default CompletedTask;
