import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  console.log('rendered');

  const [searchField, setSearchField] = useState('');  // [value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange: Function = (event: ChangeEvent<HTMLInputElement>) => {
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
