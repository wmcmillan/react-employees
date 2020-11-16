import React, { Component } from 'react';
import Row from "../Container/Container";
import "./style.css";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import Directory from "../Directory/Directory";
import moment from "moment";
import API from "./API";

class RowContainer extends Component {
    state = {
        employees: [],
        filtered: [],
        nameSort: true,
        search: "",
        Directory: {},
    };

    componentDidMount() {
        API.search()
        .then(res => {
            console.log(res.data.results);
            this.setState({
                employees: res.data.results,
                filtered: res.data.results
            });
        })
        .catch(err => console.log(err))
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    };

    handleSortByFirstName = () => {
        this.setState({ nameSort: true })
        if (this.state.nameSort) {
            const nameSortArr = this.state.employees.sort((a,b) => (a.name.first > b.name.first)?1 : -1);
            this.setState({ filtered: nameSortArr });
        }
    };

    handleSortByLastName = () => {
        this.setState({ nameSort: true })
        if (this.state.nameSort) {
            const nameSortArr = this.state.employees.sort((a,b) => (a.name.last > b.name.last)?1 : -1);
            this.setState({ filtered: nameSortArr });
        }
    };

    handleSortByDate = () => {
        this.setState({ nameSort: true });
        if (this.state.nameSort) {
            const dateSortArr = this.state.employees.sort((a,b) => {
                return a.dob.date < b.dob.date? -1 : a.dob.date > b.dob.date ? 1 : 0;
            })
            this.setState({ filtered: dateSortArr });
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const inputVal = this.state.search;
        const filterArr = this.state.employees.filter(employee => employee.name.first.includes(inputVal) || employee.name.last.includes(inputVal));
        this.setState({
            filtered: filterArr,
            search: ""
        });
    };

    handleSeeAll = event => {
        event.preventDefault();
        this.setState({
            filtered: this.state.employees,
            search: ""
        });
    };

    handleClick = (e) => {
        // e.preventDefault();
        console.log(e.target.alt);
        this.setState({
            Directory: {
                url: e.target.getAttribute("data_image"),
                phone: e.target.getAttribute("data_phone"),
                email: e.target.getAttribute("data_email"),
                dob: e.target.getAttribute("data_dob"),
                alt: e.target.alt
            }
        });
    };
    
    render() {
        return (
            <div className="table-container">
            <div className="fade-div"></div>
            <section className="dropdown_search">
                <Search 
                handleInputChange = {this.handleInputChange}
                search = {this.state.search}
                handleFormSubmit = {this.handleFormSubmit}
                list = {this.state.employees.map(employee => (
                    <option value={`${employee.name.first} ${employee.name.last}`} />
                ))}
                />
                <Sort handleSortByFirstName={this.handleSortByFirstName}
                handleSortByLastName={this.handleSortByLastName}
                handleSortByDate={this.handleSortByDate}
                handleSeeAll = {this.handleSeeAll}
                />
            </section>
            <table>
                <thead>
                <tr>
                    <th style={{padding: "0 0.7rem"}}>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                </thead>
                
                {this.state.employees.map(employee => {
                    return (
                        <Directory
                        handleClick={this.handleClick} largeImage={employee.picture.large} id={employee.id.value}
                        name={`${employee.name.first}
                        ${employee.name.last}`}
                        email={employee.email}
                        emailAttr={employee.email}
                        phone={employee.phone}
                        phoneAttr={employee.phone}
                        image={employee.picture.thumbnail}
                        dob={moment(employee.dob.date).format('L')}
                        dobAttr={moment(employee.dob.date).format('MMMM Do YYYY')}
                        />
                    )
                })}
            
            </table>
            <Directory imageLg={this.state.Directory.url} name={this.state.Directory.alt} title={this.state.Directory.alt} phone={this.state.Directory.phone} email={this.state.Directory.email} dob={this.state.Directory.dob} />
            </div>
        )
    }
}

export default RowContainer