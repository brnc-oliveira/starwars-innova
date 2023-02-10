import axios from "axios";
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";

import styles from "./Modal.module.css";

export default function Modal({ isOpen, setModalIsClose, characterSelected }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const films = characterSelected.films;

    let moviesFetched = [];

    await Promise.all(
      films.map(async (film) => {
        const res = await axios.get(film);

        moviesFetched.push(res);
      })
    );

    setMovies(moviesFetched);
  };

  if (isOpen) {
    return (
      <div className={styles.backgroundModal}>
        <div className={styles.containerModal}>
          <div className={styles.containerCharacterInfo}>
            <span className={styles.characterName}>
              {characterSelected.name}
              <a onClick={() => setModalIsClose()}>
                <RiCloseFill size={30} />
              </a>
            </span>
            <div className={styles.characterInfo}>
              <span>
                <b>Ano de nascimento:</b> {characterSelected.birth_year}
              </span>
              <span>
                <b>Gênero:</b> {characterSelected.gender}
              </span>
              <span>
                <b>Cor dos olhos:</b> {characterSelected.eye_color}
              </span>
              <span className={styles.movies}>
                <b>Filmes:</b>
                {movies.map((movie) => {
                  return (
                    <div className={styles.moviesInfo} key = {movie.title}>
                      <div>
                        <span>
                          <b>Título:</b> {movie.data.title}
                        </span>
                        <span>
                          <b>Lançamento:</b> {movie.data.release_date}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
