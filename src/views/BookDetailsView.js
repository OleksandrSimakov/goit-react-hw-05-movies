// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import PageHeading from '../components/PageHeading/PageHeading'
// import * as moviesApi from '../services/movies-api'

// export default function BookDetailsView() {
//   const { bookId } = useParams()
//   const [book, setBook] = useState(null)

//   useEffect(() => {
//     moviesApi.fetchBookById(bookId).then(setBook)
//   }, [bookId])

//   return (
//     <>
//       <PageHeading text={`Книга ${bookId}`} />

//       {book && (
//         <>
//           <img src={book.imgUrl} alt={book.title} />
//           <h2>{book.title}</h2>
//           <p>Автор: {book.author.name}</p>
//           <p>{book.descr}</p>
//         </>
//       )}
//     </>
//   )
// }
