
import React, { Component } from 'react'

export default class PNewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://readwrite.com/wp-content/uploads/2023/08/dice-5012425_1280.jpg": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" _ className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
