import React, { Component } from 'react';
import Dishes from '../../data/Dishes';
import MenuItem from "./MenuItem";
import DishDetail from './DishDetail';
import { CardColumns, Button, Modal, ModalBody, ModalFooter } from "reactstrap"

class Menu extends Component {
    state = {
        DISHES: Dishes,
        selectedDish: null,
        ismodalOpen: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            ismodalOpen: !this.state.ismodalOpen
        })
    }

    toggleModal = () => {
        this.setState({
            ismodalOpen: !this.state.ismodalOpen
        })
    }



    render() {
        const menu = this.state.DISHES.map(item => {
            return (
                <MenuItem

                    key={item.id}
                    dish={item}
                    dishSelect={this.onDishSelect}

                />
            )
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }

        return (
            <div className="container">
                <div className="row">

                    <CardColumns>
                        {menu}
                    </CardColumns>

                    <Modal isOpen={this.state.ismodalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    

                </div>
            </div>
        )
    }
}

export default Menu;