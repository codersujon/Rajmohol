import React, { Component } from 'react';
import Dishes from '../../data/Dishes';
import MenuItem from "./MenuItem";
import DishDetail from './DishDetail';

class Menu extends Component{
    state={
        DISHES:  Dishes,
        selectedDish: null
    }

    onDishSelect = dish=>{
        this.setState({ selectedDish: dish })
    }



    render(){
        const menu = this.state.DISHES.map(item=>{
            return(
                <MenuItem

                key={item.id} 
                dish={item}
                dishSelect={this.onDishSelect}
                
                />
            )
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail =  <DishDetail  dish={this.state.selectedDish} />
        } 

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        {menu}
                    </div>
                    <div className="col-xl-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;