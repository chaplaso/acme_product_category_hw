import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom';

class ProdListCat extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <Category />
                <ProdList />
            </div>
        )
    }
}

const Category = () => {
    return (

        <div>
            <h2>Category</h2>
            <button class="btn btn-primary">+</button>
            <button class="btn btn-danger">-</button>
        </div>
    )
}

const ProdList = () => {
    return (

        <div>
            <h2>Product Lists</h2>
            <button class="btn btn-danger">-</button>
        </div>
    )
}

export default ProdListCat