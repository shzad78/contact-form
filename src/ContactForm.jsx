import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component {
    state={
        name: '',
        subject: '',
        message: ''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log({submitedvalue:this.state})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={this.state.name} onChange= {this.handleChange}/>
                <br/><br/>

                <label htmlFor="">Subject</label>
                <input type="text" name='subject' value={this.state.subject} onChange= {this.handleChange}/>
                <br/><br/>
                <label htmlFor="">Message</label>
                <textarea type="text" name='message' value={this.state.message} onChange= {this.handleChange}/>
                
                <input type="submit" value='submit' />
                </form>
            </div>


        )

    }
}
export default ContactForm;