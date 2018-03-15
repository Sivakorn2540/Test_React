import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Fade} from 'reactstrap';

export default class ShowList extends React.Component {
    constructor() {
        super();
        this.state = {
            select: 1,
            fname: '',
            lname: '',
            data: { type: '', value: [{ id: 0, joke: "Chuck Norris doesn't cheat death. He wins fair and square.", categories: [] }] }
        };

        this.loadXMLDoc = this.loadXMLDoc.bind(this);
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
        } if (target.name === 'select') {
            this.setState({
                select: target.value
            });
        }
    }

    handleSubmit(event) {
        // alert('Your favorite flavor is: ' + this.state.select + ' ' + this.state.fname + " " + this.state.lname);
        event.preventDefault();
    }

    loadXMLDoc() {
        let request = new XMLHttpRequest();
        request.open("GET", `http://api.icndb.com/jokes/random/${this.state.select}`, true);
        request.send();
        request.onerror = (e) => {
            alert('เกิดเหตุขัดข้องจ้า');
        };
        request.onload = (e) => {
            if (request.readyState === 4 && request.status === 200) {
                let myObj = JSON.parse(request.responseText);
                console.log(myObj);
                console.log('Type', request.responseType);
                console.log(typeof (myObj));
                this.setState({
                    data: myObj
                });
            } else {
                console.warn('error');
            }
        };
    }

    render() {
        let item = this.state.data;
        const listItems = item.value.map((i) =>
            <Fade timeout={{ enter: 500 }}  >
                {<ListGroupItem >
                    <ListGroupItemText>
                        {i.joke}
                    </ListGroupItemText>
                </ListGroupItem>}
            </Fade>);
        return (
            <div>

                <Label >OR Get Now</Label>
                <Form inline>

                    <FormGroup>
                        <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange}>
                            <option value={1}>Number of Result</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </Input>
                    </FormGroup>
                    {' '}
                    <Button color="warning" onClick={this.loadXMLDoc}>Get A Joke Now!</Button>
                </Form>
                <br />
                <ListGroup>
                    <ListGroupItem active>
                        <ListGroupItemHeading>THE JOKE</ListGroupItemHeading>
                    </ListGroupItem>
                    {listItems}
                </ListGroup>

            </div>
        );
    }
}