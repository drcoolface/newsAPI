import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const News = () => {
 let  articles = [];


    const [art, setArt] = useState(articles);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        async function fetchdata()
        {
        let url = "https://newsapi.org/v2/top-headlines?apiKey=9e4f4dc637d34eb681240c137c322cae&q=AI";
        let data =  await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        setArt(parsedData.articles )
        }
        fetchdata()
    },[])
  return (
    <div className='container mx-10 my-3'>
    console.log("wdwdwd");

      <h2 className='text-center'> News monkey headlines  </h2>

  
      <div className="row">
        {art.map((element)=>
            (
        <div className="col md-3 '768px': mx-3 my-3" key= {element.url}>
            <NewsItem  title={!element.title?"":
            element.title.length < 45? element.title:element.title.slice(0,45)+'...'}
            desc= {!element.description?`No desc`:
            element.title.length < 90? element.title:element.title.slice(0,90)+'...'} imgUrl={element.urlToImage?element.urlToImage:'https://sirv.sirv.com/assets/error_pages/0.svg'} newsUrl={element.url}/>
        </div>
       ) )}
      </div>

<div className='container d-flex justify-content-between'>
<button type="button" class="btn btn-dark">&rarr;Previous</button>
<button type="button" class="btn btn-dark">Next &larr;</button>

</div>
      
    </div>
  )
}

export default News
