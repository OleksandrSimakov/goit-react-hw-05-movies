import logo from '../defaultImage/nopicture.jpg'

export default function MovieCastView({ casts }) {
  const styles = {
    img: {
      width: '90px',
    },
  }
  const castsArr = casts.cast
  return (
    <>
      <ul>
        {castsArr.map((cast) => (
          <li key={cast.cast_id}>
            {cast.profile_path ? (
              <img
                style={styles.img}
                src={`https://image.tmdb.org/t/p/w400${cast.profile_path}`}
                alt={cast.title}
              />
            ) : (
              <img src={logo} alt="Not available" style={styles.img} />
            )}
            {cast.name}
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
