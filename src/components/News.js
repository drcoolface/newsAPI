import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const apiKey = 'ec2b46f804054441a8d613bc2c7c58c9';
 
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchNews() {
      const url = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${props.country}&q=AI&page=${page}&pageSize=${props.pagesize}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.articles) {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      }
    }
    fetchNews();
  }, [page]);

  const handlePreviousClick = async () => {
    const newPage = page - 1;
    setPage(newPage);
  };

  const handleNextClick = async () => {
    const newPage = page + 1;
    if (newPage < Math.ceil(totalResults/15)) {
      setPage(newPage);
    } else {
      console.log('done');
      // Disable the Next button when there are no more articles to fetch
      const nextButton = document.querySelector('.btn-next');
      if (nextButton) {
        nextButton.disabled = true;
      }
    }
  };

  return (
    <div className='container mx-10 my-3'>
      <h1 className='text-center font-italic text-white '> NewsMonkey Headlines </h1>
      <div className='row'>
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <div className='col md-3 mx-3 my-3' key={article.url}>
              <NewsItem
                title={
                  !article.title
                    ? ''
                    : article.title.length < 45
                    ? article.title
                    : article.title.slice(0, 45) + '...'
                }
                desc={
                  !article.description ? 'No desc': article.description.length < 90? article.description: article.description.slice(0, 90) + '...'
                }
                imgUrl={article.urlToImage ? article.urlToImage : 'https://sirv.sirv.com/assets/error_pages/0.svg'}
                newsUrl={article.url}
              />
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
      <div className='container d-flex justify-content-between'>
        <button
          type='button'
          disabled={page <= 1}
          className='btn btn-dark'
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>
        <button
       
          type='button'
          className='btn btn-dark'
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
