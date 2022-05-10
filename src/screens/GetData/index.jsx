import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCharactersActions, clearCharacterActions } from '../../actions/characterActions';
import { ROUTES } from '../../Routes';
import { getCharacters } from '../../services/index';
import './styles.css';

function CardCharacter() {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.reducers.characters);

  useEffect(() => {
    getCharacters().then(data => {
      dispatch(getCharactersActions(data.results));
    });
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearCharacterActions([]));
    };
  }, []);

  console.log(characters.length > 0);

  return (
    <>
      <div className="container-character">
        {characters.length > 0
          ? characters.map(item => (
              <Link to={`/character/${item.id}`} key={item.id}>
                <div className="sectionn">
                  <img src={item.image} alt={item.name} />
                  <div className="section-content">
                    <span className="item-name">Name: </span>
                    <span className="item-info">{item.name}</span>
                  </div>
                </div>
              </Link>
            ))
          : 'Loading...'}
      </div>
      <Link className="button bottom" to={ROUTES.HOME}>
        Go back
      </Link>
    </>
  );
}

export default CardCharacter;
