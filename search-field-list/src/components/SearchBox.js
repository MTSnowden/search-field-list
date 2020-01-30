import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class SearchBox extends Component {
    constructor() {
        super();
        this.state = { 
            searchTerm: '',
            results: {},
            loading: false,
            message: ''
        }
    }

    render() {
        const { searchTerm } = this.state;
        return (

            <div className="container" 
                 style={searchContainerStyle}>
                <h2 className="heading" 
                    alt="Live Search React Application"
                    style={headingStyle}>React Search Application
                </h2>
                <p></p>
                <label className="search-label" 
                       style={searchLabelStyle} 
                       htmlFor="search-input">
                        <input 
                            className="responsive"
                            alt="search"
                            type="text"
                            value={searchTerm}
                            name="searchTerm"
                            style={searchInputStyle}
                            placeholder="Search for a movie, actor or director..."
                            onChange={
                                (e)=>this.setState({searchTerm: e.target.value})}
                            onKeyUp={
                                // this provides ability to search when the Enter key is pressed
                                (e)=>{
                                    if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                                        this.props.loadSearch(this.state.searchTerm)
                                    }
                                }
                            }
                        />
                    
                </label>
            </div>
        )
    }
}

const searchContainerStyle = {
    margin: '50px auto',
    display: 'block',
    width: '80%',
    outline: "2px solid black"
}

const headingStyle = {
    fontSize: '50px',
    padding: '20px 0',
    color: '#555',
    textAlign: 'center'
}

const searchLabelStyle = {
    position: 'relative'
}

const searchInputStyle = {
    width: '200%',
    marginLeft: '100px',
    padding: '20px',
    fontSize: '30px',
    fontStyle: 'italic',
    color: '#444',
    boxSizing: 'borderBox',
    outline: 'none'
}

export default SearchBox