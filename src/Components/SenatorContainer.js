import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SenatorThumbnail from './SenatorThumbnail';
import Nav from './Nav';
import SearchForm from './SearchForm';

function SenatorContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const senators = useSelector(state => state.senators);

  const filteredSenators = () => {
    if (searchTerm === '') {
      return senators.map(senator => (
        <SenatorThumbnail key={senator.id} senator={senator} />
      ));
    } else {
      let filtered = senators.filter(senator =>
        senator.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filtered.map(senator => (
        <SenatorThumbnail key={senator.id} senator={senator} />
      ));
    }
  };

  return (
    <>
      <Nav />
      <div className="title">
        <center>
          <h1>2019 US Senators</h1>
        </center>
        <center>
          <SearchForm changeHandler={setSearchTerm} />
        </center>
      </div>

      <div className="senator-grid">
        {senators ? filteredSenators() : console.log(senators)}
      </div>
    </>
  );
}

export default SenatorContainer;
