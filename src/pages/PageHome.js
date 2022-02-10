import { useState, useEffect } from 'react';

import Data from "../top-headlines.json";
import Articles from "../components/Articles"
import Header from "../components/Header"
import Hero from '../components/Hero';

function PageHome() {

  const [articles, setArticles] = useState([]);
  const [heroArticle, setHeroArticle] = useState({});
  const [title, setTitle] = useState('');



  useEffect(() => {
    const fetchData = async () => {

      // e6f94eb56d1a476a9a4c2ca75914e1b5

      // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=ca&apiKey=e6f94eb56d1a476a9a4c2ca75914e1b5`);
      // const data = await res.json();

      let firstArticle = Data.articles[0]
      let articleTitle = firstArticle.title
      let articleHyphenIndex = articleTitle.indexOf('-')
      let articleTitleCropped = articleTitle.slice(0, articleHyphenIndex)
      //setting title for Hero article from main page
      setTitle(articleTitleCropped)
      //setting the object of hero article to send to Hero component
      setHeroArticle(firstArticle)
      //setting an array of objects of 12 articles to send to Hero component
      let articlesData = (Data.articles).splice(1, 12)
      setArticles(articlesData)
      console.log(articlesData)
    }
    fetchData();
  }, [])

  return (
    <main>
      {heroArticle !== null && <Hero heroArt={heroArticle} heroTitle={title} />}
      {articles !== null && <Articles articles={articles} />}
    </main>
  )
}

export default PageHome;