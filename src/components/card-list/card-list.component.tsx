import Card from '../card/card.component';

import { Monster } from '../../App';

import './card-list.styles.css';

interface ICardList {
    monsters: Monster[]
}

const CardList: Function = ({ monsters }: ICardList) => (
    <div className='card-list'>
        {
            monsters.map(monster => {
                const { id } = monster;

                return (
                    <div key={id}>
                        <Card monster={monster} />
                    </div>
                );
            })
        }
    </div>
);

export default CardList;