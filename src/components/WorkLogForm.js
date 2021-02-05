import React, { Component } from 'react'
import "./CSS/Login.css";

export class WorkLogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            project: '',
            logDetails: [{
                log: '',
                hours: '',
                date: new Date().toISOString()
            }]

        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.resetState = this.resetState.bind(this);
    }


    resetState() {
        this.setState({
            name: '',
            position: '',
            project: '',
            logDetails:[ {
                log: '',
                hours: '',
                date: new Date().toISOString()
            }]
        })
    }

    onSubmit = e => {
         e.preventDefault();
        console.log(this.state);
        this.props.onFormSubmit(this.state);
        this.resetState()

    };

    onChange = (e) => {
        console.log(e.target)
        this.setState({ [e.target.name]: e.target.value })
    }

    onChangeLog = (e) => {
        console.log(e.target)
        this.setState({logDetails:{
            [e.target.name] : e.target.value
        }})
    }

    render() {
        const username = this.props.username;
        return (
            <div>
                <h3>Hello {username}</h3>
                <form onSubmit={this.onSubmit} style={{ textAlign: 'center' }}>
                    <h2 className='text-primary'>Add Log</h2>
                    <div className="form-group">
                        <label >Enter the Name:</label>
                        <input
                            type='text'
                            placeholder='Name'
                            className="form-control"
                            name='name'
                            value={this.state.name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Select the position</label>
                        <select
                            placeholder='Position'
                            className="form-control"
                            name='position'
                            onChange={this.onChange}
                            value={this.state.position}
                        >
                            <option value="none">None</option>
                            <option value="PAT">PAT</option>
                            <option value="Associate">Associate</option>
                            <option value="SR.Associate">SR.Associate</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Select the project:</label>
                        <select
                            placeholder='Project'
                            className="form-control"
                            name='project'
                            onChange={this.onChange}
                            value={this.state.project}
                        >
                            <option value="none">None</option>
                            <option value="Met life">Met Life</option>
                            <option value="GSSP">GSSP</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label >Enter the Log:</label>
                        <textarea rows="5" cols="30"
                            placeholder='Enter Log description'
                            className="form-control"
                            name='log'
                            value={this.state.logDetails.log}
                            onChange={this.onChangeLog}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter the No of hours:</label>
                        <input
                            type='text'
                            placeholder='Enter No of Hours'
                            className="form-control"
                            name='hours'
                            value={this.state.logDetails.hours}
                            onChange={this.onChangeLog}
                        />
                    </div>
                    <input
                        type='submit'
                        value="Add"
                        className='btn btn-primary btn'
                    />
                </form>
            </div>
        );
    }
}

export default WorkLogForm;