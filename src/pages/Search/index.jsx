import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const style = {
    "backgroundColor": "#F73B2A"
}

class Search extends Component {
    constructor() {
        super();

        this.state = {
            results: [],
            active: true
        };
        this.handleChange = this.handleChange.bind(this);
    }


    onSearch = (value) => {

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {

                this.setState({
                    results: data.results,
                    active: false,
                    searchValue: ""
                });
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    handleChange(event) {
        this.setState({ searchValue: event.target.value });
        event.preventDefault();
    }

    renderItem(item) {
        return (
            <li key={`item_${item.id}`}>
                {item.title}
                <Link style={style} to={`/product/${item.id}`}> Open Product</Link>
            </li>
        );
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.searchValue} type="text" />
                <button onClick={() => this.onSearch(this.state.searchValue)}>Search</button>
                <ul>
                    {this.state.results.map(this.renderItem)}
                </ul>
            </div>
        );
    }
}

export default Search;