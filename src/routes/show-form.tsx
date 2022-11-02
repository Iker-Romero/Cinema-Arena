import { useState } from 'react';

import DisplayShow from '../../components/display-show';
import { ShowType } from './finder';

const ShowForm = () => {
  const [show, setShow] = useState<ShowType>({
    Title: 'Spider-Man',
    Year: '2002',
    Runtime: '121 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Director: 'Sa Raimi',
    Plot: 'After being bitten by a genetically-modified spider, a shy teenager gains spider-like abilities that he uses to fight injustice as a masked superhero and face a vengeful enemy.',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg',
    Type: 'movie',
  });

  return (
    <>
      <h1>Add a New Show</h1>
      <section className="add-show-section">
        <h2>Form</h2>
        <form action="">
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={(e) => {
                setShow({ ...show, Title: e.target.value });
              }}
            />
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year"
              onChange={(e) => {
                setShow({ ...show, Year: e.target.value });
              }}
            />
            <label htmlFor="runtime">Runtime</label>
            <input
              type="text"
              id="runtime"
              onChange={(e) => {
                setShow({ ...show, Runtime: e.target.value });
              }}
            />
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              onChange={(e) => {
                setShow({ ...show, Genre: e.target.value });
              }}
            />
            <label htmlFor="director">Director</label>
            <input
              type="text"
              id="director"
              onChange={(e) => {
                setShow({ ...show, Director: e.target.value });
              }}
            />
            <label htmlFor="plot">Plot</label>
            <input
              type="text"
              id="plot"
              onChange={(e) => {
                setShow({ ...show, Plot: e.target.value });
              }}
            />
            <label htmlFor="poster">Poster</label>
            <input
              type="text"
              id="poster"
              onChange={(e) => {
                setShow({ ...show, Poster: e.target.value });
              }}
            />
            <label htmlFor="type">Type</label>
            <input
              type="text"
              id="type"
              onChange={(e) => {
                setShow({ ...show, Type: e.target.value });
              }}
            />
          </div>
        </form>
        <button
          className="submit-form"
          style={{ backgroundColor: '#db0000' }}
          // onClick={() => {}}
        >
          CREATE
        </button>
      </section>
      <section className="show-preview-section">
        <h2>Preview</h2>
        <DisplayShow show={show} />
      </section>
    </>
  );
};

export default ShowForm;
