import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountriesActions, addCountryActions, deleteCountryActions } from '../../actions/contriesActions';
import { ROUTES } from '../../Routes';
import { getContries } from '../../services/index';
import './styles.css';

function Crud() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.reducers.countries);

  useEffect(() => {
    getContries().then(res => {
      dispatch(getCountriesActions(res));
    });
  }, [dispatch]);

  const toggleAddCountry = e => {
    e.preventDefault();
    const { target } = e;
    const country = target.country.value;
    const capital = target.capital.value;
    const newCountry = { id: Math.floor(Math.random() * 1000), country, capital };
    dispatch(addCountryActions(newCountry));
  };

  const deleteCountry = id => {
    dispatch(deleteCountryActions(id));
  };

  return (
    <>
      <div>
        <div>
          <header className="headerContries">
            <span className="headerTitle">Countries</span>
            <span className="headerTitle">Capital</span>
          </header>
          {data.map(item => (
            <div key={item.id} className="headerContries">
              <span>{item.country}</span>
              <span>{item.capital}</span>
              <button className="delete" onClick={() => deleteCountry(item.id)}>
                -
              </button>
            </div>
          ))}
        </div>
        <div>
          <form onSubmit={toggleAddCountry}>
            <input type="text" name="country" placeholder="Country" />
            <input type="text" name="capital" placeholder="Capital" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      <Link className="button bottom" to={ROUTES.HOME}>
        Go back
      </Link>
    </>
  );
}

export default Crud;
