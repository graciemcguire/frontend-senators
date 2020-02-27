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
    console.log(senator, 'I was swiped left.');
    dispatch(senatorsActions.handleCreateRating(senator.id, 'joke'));
    setMessage('J O K E !');
  };
  const onSwipeRight = senator => {
    console.log(senator, 'I was swiped right.');
    dispatch(senatorsActions.handleCreateRating(senator.id, 'woke'));
    setMessage('W O K E !');
  };

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
      return senators.map(senator => {
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
      console.log('elseeeee');
      return (
        <center>
          <h1>L O A D I N G . . .</h1>
        </center>
      );
    }
  };
  let wrapperStyle = {
    backgroundColor: '#00293C',
    height: '80vh'
  };

  let containerStyle = {
    backgroundColor: '00293C',
    height: 'calc(100vh - 16px)'
  };

  let messageStyle = {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2vw',
    fontFamily: 'Sans-Serif',
    color: '#F1F3CE'
  };

  return (
    <>
      <Nav />
      <div style={containerStyle}>
        <CardWrapper style={wrapperStyle}>{renderPage()}</CardWrapper>
        <div style={messageStyle}>{message}</div>
      </div>
    </>
  );

  // END OF COMP
}
export default MainContainer;
