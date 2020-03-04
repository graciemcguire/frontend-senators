import React from 'react';
import Popup from 'reactjs-popup';

function SenatorThumbnail({ senator }) {

  const renderPartyColor = () => {
    return senator.party === 'R'
      ? 'senator-thumbnail-gop'
      : 'senator-thumbnail-dem';
  };

  const renderModalPartyColor = () => {
    return senator.party === 'R' ? 'senator-modal-gop' : 'senator-modal-dem';
  };

  const renderUserSenators = () => {
    if (senator) {

      return (
        <div className={ renderPartyColor() }>
          <img
            className="thumbnail-images"
            src={ senator.image }
            alt={ senator.name }
          />
          <h2>{ senator.name }</h2>
          <h3>
            { senator.party } - { senator.state }
          </h3>
        </div>
      );
    } else {
      return null;
    }
  };

  const wokeOrJokeBtn = e => {
    console.log(e.target['value']);
    // this.props.handleCreateRating(user.id, senator.id, e.target.value)
  };

  const renderModals = () => {
    return (
      <div className={ renderModalPartyColor() }>
        <img className="modal-images" src={ senator.image } alt={ senator.name } />
        <h2>{ senator.name }</h2>
        <h3>
          { senator.party } - { senator.state }
        </h3>
        <h3>Details:</h3>
        <h3>
          <a href={ senator.contact } target="_blank" rel="noopener noreferrer">
            Contact { senator.name }
          </a>{' '}
        </h3>
        <button value="woke" onClick={ e => wokeOrJokeBtn(e) }>
          Woke?
        </button>
        <button value="joke" onClick={ e => wokeOrJokeBtn(e) }>
          Joke?
        </button>
      </div>
    );
  };

  return (
    <Popup trigger={ renderUserSenators() } modal position="right center">
      <div className="modal">{ renderModals() }</div>
    </Popup>
  );
}

export default SenatorThumbnail;
