import { useEffect, useState } from 'react';
import { FaSearch, FaCircle } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';
import Header from '../components/Header';
import Charactercard from '../components/Charactercard';
function Home() {
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState([]);

  const { loading, character, error } = useFetch(
    `https://rickandmortyapi.com/api/character/?name=${search}`
  );
  const [message, setMessage] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      window.alert('tffff');
    } else {
      setCards(character);
      console.log(cards);

      setSearch('');
    }
  };

  return (
    <div>
      <div className="section-home">
        <div className="container">
          <Header />
          <form onSubmit={onSubmit}>
            {message && <p color="#000">{message}</p>}
            <div className="search">
              <input
                type="text"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-search"
                placeholder="Search character.....</"
              />
              <button type="submit" className="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <section className="section-search">
        <div className="grid-2-cols">
          {loading ? (
            <h1>Loading.............</h1>
          ) : cards && cards.length > 0 ? (
            <>
              <Charactercard cards={cards} FaCircle={FaCircle} />
            </>
          ) : (
            onSubmit && (
              <p className="error-msg">Put in fucking character amigo</p>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
