import React from 'react'
import './feed.css'

class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            names: '',
            department:'',
            reating:'',
            arr:[],
            showfeed: false
        }
    }
    updateName = (event) => {
        this.setState({names: event.target.value})
    }
    updateDepartment = (event) => {
        this.setState({department: event.target.value})
    }
    updateReating = (event) => {
        this.setState({reating: event.target.value})
    }
    Show = () =>{
        const updateArray = this.state.arr
        updateArray.push({names: this.state.names, department: this.state.department, reating: this.state.reating})
        this.setState({showfeed: true,arr:updateArray})
    }
    render(){
        return(
            <div>
                <div className='employee'>
                    <h1 style={{fontSize:"60px"}}>EMPLOYEE FEEDBACK FORM</h1>
                </div>
                <div className="form" style={{fontSize:"30px"}}>
                    <lable>Name:</lable>
                    <input type="text" value={this.state.names} onChange={this.updateName}/><br></br><br></br>

                    <lable>Department:</lable>
                    <input type="text" value={this.state.department} onChange={this.updateDepartment}/><br></br><br></br>
 
                    <lable>Rating:</lable>
                    <input type="number" value={this.state.reating} onChange={this.updateReating}/><br></br><br></br>

                    <button className="submit" onClick={this.Show}>Submit</button>
                </div>
                
                {this.state.showfeed && <div className='state1'>
                    {this.state.arr.map(item =>{
                        return(
                            <div className='state2'>
                                {`Name :${item.names} | Department : ${item.department} | Rating :${item.reating}`}
                            </div>
                        )
                    })}</div>}
            </div>
        )
    }
}
export default ClassComponent