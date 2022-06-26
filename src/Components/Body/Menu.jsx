import React, { Component } from 'react';
import Dishes from '../../data/Dishes';
import MenuItem from "./MenuItem";

class Menu extends Component{
    state={
        DISHES:  Dishes

    }

    render(){
        const menu = this.state.DISHES.map(item=>{
            return(
                <MenuItem key={item.id} dish={item}/>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        {menu}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;