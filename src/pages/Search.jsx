import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './search.css'
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=bd9e67173d26ad3e4dcffbb5f3f67a2b');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container fluid className='p-0'>
      <Row className='mb-4'>
        <Col md={12} className='ms-2 p-5'>
          <div className='d-flex'>
            <div className="input-group mb-4">
              <div className="input-group-prepend">
                <span className="input-group-text search-icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
              </div>
              <input
                type='text'
                placeholder='Movies, Shows, and More'
                className='form-control search-input'
              />
            </div>
            <Link to={'/'}><FontAwesomeIcon icon={faHouse} style={{color: "#ebedef", marginLeft:'150px'}} /></Link>
          </div>
        </Col>
      </Row>

      {/* Movie Cards */}
      <Row className='p-4'>

        {movies.map((movie) => (
          <Col key={movie.id} lg={3} md={4} sm={6} className='mb-4'>
            <Card className='shadow rounded'>
              <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
