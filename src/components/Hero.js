function Hero( {heroArt}) {

    console.log(heroArt.title)
    return (
        <article className="hero-row">
            <figure className="hero-left">
                <img 
                className="hero-img"
                src={heroArt.urlToImage} 
                alt="hero banner" />
            </figure>
            <div className="hero-right">
            <h2>{heroArt.title}</h2>
            {/* <h2>{heroTitle}</h2> */}
            <a href={heroArt.url}>Read More...</a>
            </div>
        </article>
      )
  }
  
  export default Hero;

  