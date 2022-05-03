import './card.styles.css';

import { Monster } from '../../App';

interface ICard {
    monster: Monster;
}

const Card: Function = ({ monster: { id, name, email } }: ICard) => (
    <div className='card-container'>
        <img
            alt={`monster portrait of ${name}`}
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

export default Card