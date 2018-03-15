import React from 'react';
import { Button, Form, FormGroup,  Input } from 'reactstrap';

export default class SetName extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            data: { type: '', value: [{ id: 0, joke: "Chuck Norris doesn't cheat death. He wins fair and square.", categories: [] }] }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        if (target.name === 'fname') {
            this.setState({
                fname: target.value,
            });
        } if (target.name === 'lname') {
            this.setState({
                lname: target.value
            });

        }
    }

    handleSubmit(event) {
        // alert('Your favorite flavor is: ' + this.state.select + ' ' + this.state.fname + " " + this.state.lname);
        let url = `http://api.icndb.com/jokes/random?firstName=${this.state.fname}&amp;lastName=${this.state.lname}`
        let request = new XMLHttpRequest();
        request.onerror = (e) => {
            alert('เกิดเหตุขัดข้องจ้า');
        };
        request.onload = (e) => {
            if (request.readyState === 4 && request.status === 200) {
                let myObj = JSON.parse(request.responseText);
                console.log(myObj.value.joke);
                console.log('Type', request.responseType);

                this.setState({
                    data: myObj
                });
            
            } else {
                console.warn('error');
            }
        };
        request.onloadend=(e)=>{
            alert(this.state.data.value.joke);
            
        };
        console.log(url);
        request.open("GET", url, true);
        request.send();
       
        event.preventDefault();
    }

    render() {
        return (
            <div>
                Changing the name of the main character
        <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input type="text" name='fname' value={this.state.fname} onChange={this.handleChange} placeholder="Firstname" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Input type="text" name='lname' value={this.state.lname} onChange={this.handleChange} placeholder="Lastname" />
                    </FormGroup>
                    {' '}
                    <Button>Change and Show</Button>
                </Form>
                <br />
            </div>
        );
    }
}