import React, { useContext, useState } from 'react';


function IndividualArticle({ article }) {

    let articleTitle = article.title
    let articleHyphenIndex = articleTitle.lastIndexOf('-')
    // let articleHyphenIndex = articleTitle.indexOf('-')
    let articleTitleCropped = articleTitle.slice(0, articleHyphenIndex)
    const [title, setTitle] = useState(articleTitleCropped);

    return (

        <article className="indiv-article">
            <figure className="img-article-container">
                <img src={article.urlToImage} alt="no image" className="img-article" />
            </figure>
            <div className='article-info'>
            <h2>{title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read More...</a>
                </div>
        </article>
    )
}


export default IndividualArticle
