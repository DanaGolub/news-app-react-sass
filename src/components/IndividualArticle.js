import React, { useContext } from 'react';


function IndividualArticle({ article }) {


    return (

        <article className="indiv-article">
            <figure className="img-article-container">
                {/* {article.urlToImage === null ?
                    <img alt="News Article Contains No Image" /> :
                    <img src={article.urlToImage} alt="no image" />
                } */}
                <img src={article.urlToImage} alt="no image" className="img-article" />
            </figure>
            <div className='article-info'>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read More...</a>
                </div>
        </article>
    )
}


export default IndividualArticle
