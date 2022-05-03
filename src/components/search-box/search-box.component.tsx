import { ChangeEventHandler } from 'react';

import './search-box.styles.css';

interface ISearchBoxProps {
    className: string;
    placeholder?: string;
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox: Function = ({ onChangeHandler, placeholder, className }: ISearchBoxProps) => (
    <div className='SearchBox'>
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
);

export default SearchBox;