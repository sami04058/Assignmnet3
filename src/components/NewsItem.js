
import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={!imageUrl ? "https://www.reuters.com/resizer/yBFJyRLWk0Lj-AiJj6uH8_y3CM8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/X2WN6YXJ2FMDBM5JPPMFFSRPOI.jpg" : imageUrl} className="card-img-top" alt="..." />
        <h5 className="card-title">{title}...<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: 1 }}>
          {source}
          <span className="visually-hidden">unread messages</span>
        </span></h5>
      </div>
      <p className="card-text">{description}...</p>
      <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
      <a rel="noreferrer" href={newsUrl} target="_blank" _ className="btn btn-sm btn-primary">Read More</a>
    </div>
  )
}

export default NewsItem;
