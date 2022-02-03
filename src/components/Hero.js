function Hero( {heroArt}) {
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
            <a href=""></a>
            </div>
        </article>
      )
  }
  
  export default Hero;

  