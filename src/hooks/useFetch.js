import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    setloading(true);
    fetch(url)
      .then((res) =>
        res.json().then((data) => {
          setCharacter(data.results);
          console.log(data.results);
          setloading(false);
        })
      )
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, [url]);
  return { loading, character, error };
};

export default useFetch;
