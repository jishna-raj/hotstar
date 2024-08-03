import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bd9e67173d26ad3e4dcffbb5f3f67a2b');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='p-0'>
      <div className='row'>
  <div className="col-md-10 ms-4 p-4">
    <div className="input-group">
      <span className="input-group-text"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
      <input type='text' placeholder='Movies Shows and More' className='form-control'/>
    </div>
  </div>
  <div className="col-md-2"></div>
</div>

      <div className="row">
      {movies.map((movie) => (
          <div key={movie.id} className='col-lg-3 col-md-4 col-sm-6 mb-4 shadow rounded'>
            <Card style={{ width: '100%',height:'100%',padding:'12px' }}>
              <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
