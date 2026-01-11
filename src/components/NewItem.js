import React from "react";

const NewItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {

  // let { title, description, imageUrl, newsUrl, author, date, source } = props; // we can do it this way also. other way is doing inside the function //line 3.
  return (
    <div className="my-3">
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
        <img src={imageUrl ? imageUrl : "https://www.investors.com/wp-content/uploads/2025/08/Stock-TrumpBitcoin-mash-shut.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewItem;
