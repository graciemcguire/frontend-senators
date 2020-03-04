import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import SenatorThumbnail from './SenatorThumbnail';
// import { setAndFetchUser, fetchUserSenators } from '../Redux/userActions'
import Nav from './Nav';
import SearchForm from './SearchForm';

function Profile() {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const user = useSelector(state => state.user);

  const filteredSenators = () => {

    if (user.senators) {
      if (search === '') {
        return user.senators.map(senator => (
          <SenatorThumbnail key={senator.id} senator={senator} />
        ));
      } else if (search !== '' || clicked){
        let filtered = user.senators.filter(senator =>
          senator.name.toLowerCase().includes(search.toLowerCase())
        );
        return filtered.map(senator => (
          <SenatorThumbnail key={senator.id} senator={senator} />
        ));
      }
    }
  };
  //

  return (
    <Fragment>
      <Nav />
      <div className="title">
        <center>
          <h1>My Rated Senators</h1>
        </center>
        <center>
          <SearchForm changeHandler={setSearch} />
          <button
            className="button-reverse"
            onClick={ e => setClicked(!clicked) }
          >
            {clicked ? 'Viewing Woke Senators' : 'Viewing Joke Senators'}
          </button>
        </center>
      </div>

      <div className="senator-grid">
        { user.senators ? (
          filteredSenators()
        ) : (
          <center>
            <h1>L O A D I N G . . .</h1>
          </center>
        )}
      </div>
    </Fragment>
  );

  // End of compnent
}

export default Profile;
