import React from 'react'

const NewsItem = (props) => {
  
  return (
    <div >
      <div className="card" style = {{width: "18rem"}}>
  <img src={props.imgUrl} className="card-img-top" alt="..." width={288} height={161}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <a href={props.newsUrl} target='_xo' className="btn btn-sm btn-primary"> Read article </a>
  </div>
</div>
    </div>
  )
}

export default NewsItem
