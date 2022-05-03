import { useState, useEffect } from 'react';

import people from './people.js';

import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

import './App.css';

const App = () => {
  console.log('rendered');

  const [searchField, setSearchField] = useState('');  // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
      .catch(() => setMonsters(people.people));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search Monsters'
        className='monsters-search-box'
      />
      <h2 className='app-title'> { 
        filteredMonsters.length === 0 ? "No results :(" : "" 
      } </h2>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
