import { useState, useEffect } from 'react';

// import SectionInfo from '../components/SectionInfo';
// import SectionGallery from '../components/SectionGallery';
// import SectionSales from '../components/SectionSales';
// import SectionStuff from '../components/SectionStuff';
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
      // const res = await fetch(`https://api.themoviedb.org/3/movie/${chosenMovCategory}?api_key=${API_KEY}&language=en-US&page=1`);
      // const data = await res.json();

      let firstArticle = Data.articles[0]
      let articleTitle = firstArticle.title
      let articleHyphenIndex = articleTitle.lastIndexOf('-')
      let articleTitleCropped = articleTitle.slice(0, articleHyphenIndex)
      //setting title for Hero article from main page
      setTitle(articleTitleCropped)
      //setting the object of hero article to send to Hero component
      setHeroArticle(firstArticle)
      //setting an array of objects of 12 articles to send to Hero component
      let articlesData = (Data.articles).splice(1, 12)
      setArticles(articlesData)
    }
    fetchData();
  }, [])

  return (
    <main>
      {/* <Header /> */}
      {heroArticle !== null && <Hero heroArt={heroArticle} heroTitle={title} />}
      {articles !== null && <Articles articles={articles} />}
      {/* {articles !== null && console.log(articles)} */}
    </main>
  )
}

export default PageHome;