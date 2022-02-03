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


  useEffect(() => {
    const fetchData = async () => {
        // const res = await fetch(`https://api.themoviedb.org/3/movie/${chosenMovCategory}?api_key=${API_KEY}&language=en-US&page=1`);
        // const data = await res.json();

        let firstArticle = Data.articles[0]
        // console.log(firstArticle)
        setHeroArticle(firstArticle)

        let articlesData = (Data.articles).splice(1, 12)
        // console.log(articlesData)
        setArticles(articlesData)
    }
    fetchData();
}, [])

  return (
      <main>
        {/* <Header /> */}
            {heroArticle !== null && <Hero heroArt={heroArticle} />}
            {articles !== null && <Articles articles={articles} />}
            {/* {articles !== null && console.log(articles)} */}
      </main>
    )
}

export default PageHome;