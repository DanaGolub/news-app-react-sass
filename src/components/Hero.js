function Hero( {heroArt, heroTitle, useState}) {
    // console.log(heroArt)
    // let articleTitle = heroArt.title
    // console.log(articleTitle)
    // let articleHyphenIndex = articleTitle.lastIndexOf('-')
    // let articleTitleCropped = articleTitle.slice(0, articleHyphenIndex)
    // const [title, setTitle] = useState(articleTitleCropped);
    // const [title, setTitle] = useState(articleTitleCropped);

    return (
        <article className="hero-row">
            <figure className="hero-left">
                <img 
                className="hero-img"
                src={heroArt.urlToImage} 
                alt="hero banner" />
            </figure>
            <div className="hero-right">
            {/* <h2>{heroArt.title}</h2> */}
            <h2>{heroTitle}</h2>
            {/* <h2>{title}</h2> */}
            <a href={heroArt.url}>Read More...</a>
            </div>
        </article>
      )
  }
  
  export default Hero;

  