import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';
import { Card, CardWrapper } from 'react-swipeable-cards';
import senatorsActions from '../Redux/senatorActions';

function MainContainer() {
  const dispatch = useDispatch();
  const senators = useSelector(state => state.senators);

  const [message, setMessage] = useState('S W I P E !');

  const onSwipeLeft = senator => {
    dispatch(senatorsActions.handleCreateRating(senator.id, 'joke'));
    setMessage('J O K E !');
  };

  const onSwipeRight = senator => {
    dispatch(senatorsActions.handleCreateRating(senator.id, 'woke'));
    setMessage('W O K E !');
  };


  const shuffle = senators => {
    let i = 0
    let j = 0
    let temp = null
    for (i = senators.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1))
      temp = senators[i]
      senators[i] = senators[j]
      senators[j] = temp
    }
  }

  const renderPage = () => {
    let titleStyle = {
      textAlign: 'center',
      fontSize: '30px',
      fontFamily: 'Serif',
      marginTop: '10px',
      color: '#00293C',
      display: 'inline-block'
    };

    if (senators.length) {

      function shuffle(senators) {
        let currentIndex = senators.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = senators[currentIndex];
          senators[currentIndex] = senators[randomIndex];
          senators[randomIndex] = temporaryValue;
        }
        return senators;
      }

      return shuffle(senators).map(senator => {
        return (
          <Card
            style={{ backgroundColor: '#F1F3CE' }}
            key={senator.id}
            senator={senator}
            onSwipeLeft={() => onSwipeLeft(senator)}
            onSwipeRight={() => onSwipeRight(senator)}
          >
            <div style={titleStyle}>
              <img
                className="card-image"
                src={senator.image}
                alt={senator.name}
              />
              <h2>{senator.name}</h2>
              <h3>
                {senator.party} - {senator.state}
              </h3>
            </div>
          </Card>
        );
      });
    } else {
      return (
        <center>
          <h1>L O A D I N G . . .</h1>
        </center>
      );
    }
  };

  return (
    <>
      <Nav />
      <div className='swipe-container'>
        <CardWrapper className='swipe-wrapper'>{ renderPage() }</CardWrapper>
        <div className='swipe-message'>{ message }</div>
      </div>
    </>
  );

  // END OF COMP
}
export default MainContainer;
