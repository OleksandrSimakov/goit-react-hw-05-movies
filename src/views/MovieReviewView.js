export default function MovieReviewView({ reviews }) {
  const reviewsArr = reviews.results
  console.log(reviewsArr)
  return (
    <>
      <ul>
        {reviewsArr.map((review) => (
          <li key={review.id}>
            <p>
              <b>Author: {review.author}</b>
            </p>
            <p>'{review.content}'</p>
          </li>
        ))}
      </ul>
    </>
  )
}
