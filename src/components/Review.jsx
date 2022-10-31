import React from 'react'


import ReadMoreReact from 'read-more-react';

const Review = ({reviews}) => {
  return (
    <div className="review_section">
    <h1 className="section-title"> Reviews</h1>
      {reviews != "null" ? (
        reviews.map((review) => (
          <div className="review">
            <h1>{review.author_details?.username} </h1>
            <div>
            <ReadMoreReact 
              className="fds"
              text={ review.content}
              min={150}
              ideal={150}
              max={150}
              readMoreText=" ..."/>
            </div>
          </div>
        ))
      ) : (
        <p className="reaview_not_avilable">Reviews Not Avilable</p>
      )}
    </div>
  )
}

export default Review