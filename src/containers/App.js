import React from 'react';
import AddUser from './User/AddUser'
import SearchUser from './User/SearchUser'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchUser: true, users:[] };
        this.handleGoToAddUsers = this.handleGoToAddUsers.bind(this);
        this.handleCancelAddUser = this.handleCancelAddUser.bind(this);
        this.handleAddNewUser = this.handleAddNewUser.bind(this);
    }


    handleAddNewUser(user) {
        var {users} = this.state;
        users.push(user);
        this.setState({ searchUser: true, users:users });
    }


    handleCancelAddUser() {
        this.setState({ searchUser: true });
    }

    handleGoToAddUsers() {
        this.setState({ searchUser: false });
    }

    render() {
        const { searchUser } = this.state;

        if (searchUser) {
            return <SearchUser users={this.state.users} handleGoToAddUsers={this.handleGoToAddUsers}/>;
        } else {
            return <AddUser handleCancelAddUser={this.handleCancelAddUser} handleAddNewUser={this.handleAddNewUser}/>;
        }
    }
}


export default App;