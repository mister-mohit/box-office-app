import { useState } from 'react';
import { useSearchStr } from './lib/useSearchStr';
//import { useSearchStr } from './lib/useSearchStr';

const SearchBar = ({ onSubmit }) => {
  const [searchedStr, setSearchedStr] = useSearchStr();
  const [searchCategory, setSearchCategory] = useState('shows');

  const handleChange = ev => {
    setSearchedStr(ev.target.value);
  };

  function handleSubmit(ev) {
    ev.preventDefault();
    onSubmit({ searchCategory, searchedStr });
  }

  const onRadioChange = ev => {
    setSearchCategory(ev.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={searchedStr} />
        <label>
          Shows
          <input
            type="radio"
            name="select-type"
            value="shows"
            checked={searchCategory === 'shows'}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="select-type"
            value="actors"
            checked={searchCategory === 'actors'}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
