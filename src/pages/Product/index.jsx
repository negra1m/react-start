import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading'

class Product extends Component {

    product = {}

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            id: props.match.params.id,
            data: {},
            active: true
        }
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}?attributes=title,price,initial_quantity,pictures`)
            .then((response) => {
                this.setState({
                    data: response.data,
                    active: false
                })
                console.log(response.data);

            })
    }

    componentWillMount() {

    }

    renderItem(state) {

        let item = state.data;

        if (state.active) {
            return (<Loading />)
        }
        return (
            <div>
                <h4>{item.title}</h4>
                <img srcSet={item.pictures[0].url} alt="" />
                <p>R$ {item.price}</p>
                <p>Amount: {item.initial_quantity}</p>
            </div>
        )
    }

    render() {
        return (
            <div>{(this.renderItem(this.state))}</div>
        )
    }

}

export default Product;