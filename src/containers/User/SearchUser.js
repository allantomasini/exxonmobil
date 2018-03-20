import React from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';


class SearchUser extends React.Component {

    constructor(props) {
        super(props);
        var searchResult = props.users ? props.users : [];
        this.state = { users: props.users, query: "", searchResult: searchResult };
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearchBarChange(e) {
        this.setState({ query: e.target.value });
    }

    handleSearch() {
        const { query } = this.state;
        if (query) {
            const searchResult = this.state.users.filter(user => {
                return user.firstName === query
                    || user.lastName === query
                    || user.email === query;
            });
            this.setState({ searchResult: searchResult });
            return;
        }

        this.setState({ searchResult: this.state.users });
    }

    render() {
        const { query, searchResult } = this.state;
        const { handleGoToAddUsers } = this.props;
        return (<div style={{ padding: '20px', paddingRight: '100px', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px' }}>
            <div style={{ marginBottom: '20px' }}>
                <Title title={"Search User"} />
                <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleGoToAddUsers} label={"+ Add User"} />
            </div>
            <SearchBar value={query} onClick={this.handleSearch} onChange={this.handleSearchBarChange} placeholder="Last name, first name, email" />
            <SearchResults users={searchResult} />
        </div>);
    }
}

export default SearchUser;



