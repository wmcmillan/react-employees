import React, { Component } from 'react';
import API from '../../utils/API';
import Container from '.';
import Search from '../Search';
import Sort from '../Sort';
import TableRow from '../TableRow';

export default class DirectoryContainer extends Component {

    state = {
        result: [],
        table: [],
        search: "",
        sort: "",
    };

    componentDidMount() {
        this.searchUser(10);
    }

    searchUser = numResults => {
        API.search(numResults)
            .then(res => {
                this.setState({
                    result: res.data.results,
                    table: res.data.results
                });
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        if (event.target.value === "") {
            this.setState({
                search: ""
            });
        } else {
            this.setState({
                search: event.target.value
            });
        }
    };

    handleSortChange = event => {
        this.setState({
            sort: event.target.value
        })
        if (event.target.value === "unsorted") {
            console.log("here");
            this.setState({ search: "" });
        } else if (event.target.value === "age") {
            const sortedList = this.state.table.sort((a, b) => a.dob.age - b.dob.age);
            this.setState({ table: sortedList });
        }
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const filteredArray = this.state.result.filter(
            user =>
                user.name.first.includes(this.state.search) ||
                user.name.last.includes(this.state.search));
        this.setState({ table: filteredArray });
    };

    render() {
        return (
            <Container>
                <div className="row">
                    {/* Search Box and Button */}
                    <div className="col-md-6">
                        <Search
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </div >

                    {/* Sort Dropdown */}
                    <div className="col-md-6">
                        <Sort
                            value={this.state.sort}
                            handleSortChange={this.handleSortChange}
                        />
                    </div>
                </div>

                {/* Table Header */}
                <TableRow image="Image" name="Name" phone="Phone" email="Email" age="Age" />

                {/* Table Content Rows */}
                {this.state.search === "" ?
                    this.state.result.map(user =>
                        <TableRow
                            key={user.username}
                            image={user.picture.thumbnail}
                            name={user.name.first + " " + user.name.last}
                            phone={user.phone}
                            email={user.email}
                            age={user.dob.age}
                        />) :
                    this.state.table.map(user =>
                        <TableRow
                            key={user.username}
                            image={user.picture.thumbnail}
                            name={user.name.first + " " + user.name.last}
                            phone={user.phone}
                            email={user.email}
                            age={user.dob.age}
                        />)
                }
            </Container>
        );
    }
}