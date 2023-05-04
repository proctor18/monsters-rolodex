import { Component } from "react";

import Card from '../card/card.component.jsx';

import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list' >
                {monsters.map((monster) => {
                    const { id, name, email } = monster;
                    return (
                    <Card key={id} id={id} name={name} email={email} />
                )})}
            </div>
        );
    }
}

export default CardList;