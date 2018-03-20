import React from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';

const InputWithLabel = props => <div style={{ display: 'inline-block', width: '50%', marginTop: '10px', marginBottom: '10px' }}>
    <label style={{ fontSize: '14px' }}>{props.labelText}</label><br />
    <input value={props.value} onChange={props.onChange} style={{ marginBottom: '10px', marginTop: '5px', width: '85%', height: '30px', paddingLeft: '10px' }} type="text" placeholder={props.placeholder} />
    <div style={{ fontSize: '10px' }}>{props.fieldNote}</div>
</div>

const radioButtonFieldStyle = {
    display: 'inline-block',
    width: '40%',
    marginRight: '20px',
    clear: 'both'
}

const RadioButtonField = props => <div style={radioButtonFieldStyle}>
    <label style={{ fontSize: '14px' }}>{props.labelText}</label><br />
    <div style={{ borderTop: '1px solid gray', height: '30px', marginTop: '5px' }}>
        <input style={{ borderTop: '1px solid gray', marginTop: '8px' }} type="radio" name={props.name} value={props.firstOption.value} checked />{props.firstOption.text}<br />
    </div>
    <div style={{ borderTop: '1px solid gray', height: '30px', borderBottom: '1px solid gray' }}>
        <input style={{ marginTop: '8px' }} type="radio" name={props.name} value={props.secondOption.value} />{props.secondOption.text}
    </div>
</div>

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: "", lastName: "", email: "", field: "", role: "" };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }


    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }

    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleFieldChange(e) {
        this.setState({ field: e.target.value });
    }

    handleRoleChange(e) {
        this.setState({ role: e.target.value });
    }

    handleAdd() {
        this.props.handleAddNewUser({ ...this.state });
    }
    render() {

        const { firstName, lastName, email, role, field } = this.state;

        const firstOptionField = { text: "Field", value: "field" };
        const secondOptionField = { text: "Office", value: "office" };
        const firstOptionRole = { text: "User", value: "user" };
        const secondOptionRole = { text: "Admin", value: "admin" };

        return (<div style={{ padding: '20px', paddingRight: '200px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>
            <Title title={"Add User"} />
            <div style={{ width: '100%' }}>
                <InputWithLabel value={firstName} onChange={this.handleFirstNameChange} labelText="First Name" placeholder="FirstName MiddleName" fieldNote="This is a note about the field" />
                <InputWithLabel value={lastName} onChange={this.handleLastNameChange} labelText="Last Name" placeholder="LastName" fieldNote="This is a note about the field" />
            </div>
            <div style={{ width: '100%' }}>
                <InputWithLabel value={email} onChange={this.handleEmailChange} labelText="Email" placeholder="name.lastname@exxonmobil.com" fieldNote="This is a note about the field" />
                <div style={{ verticalAlign: 'top', width: '50%', display: 'inline-block', marginTop: '10px' }}>
                    <RadioButtonField labelText="Field" name="field" firstOption={firstOptionField} secondOption={secondOptionField} />
                    <RadioButtonField labelText="Role/s" name="role" firstOption={firstOptionRole} secondOption={secondOptionRole} />
                </div>
            </div>
            <div style={{ width: '94%', clear: 'both', marginRight: '80px', marginTop: '50px' }}>
                <Button onClick={this.handleAdd} label={"Add New User"} />
                <Button onClick={this.props.handleCancelAddUser} label={"Cancel"} />
            </div>
        </div>);
    }
}

export default AddUser;



