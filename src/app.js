import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import ProdListCat from './list'


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            allCategory: []
        }
    this.createCategory = this.createCategory.bind(this);

    }
    createCategory(){
        axios.get('/api/categories').then((categories) => {
            categories.map((eachCategory) => {
                const allCategory = this.state.allCategory
                allCategory.push(eachCategory)
                this.setState(this.state.allCategory)
                console.log('here now')
            })
        })
        }
    render(){
        return (

            <div>
                <button class="btn btn-primary" onClick={this.createCategory}>
                Create Category
                </button>
                <ProdListCat />
            
            </div>

        )
    }

}

export default App;