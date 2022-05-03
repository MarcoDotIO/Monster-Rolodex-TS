import './search-box.styles.css';

const SearchBox = props => {
    const { onChangeHandler, placeholder, className } = props;

    return (
        <div className='SearchBox'>
            <input
                className={`search-box ${className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
}

export default SearchBox;