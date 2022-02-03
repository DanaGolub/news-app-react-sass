import IndividualArticle from "./IndividualArticle";

function Articles({ articles }) {
    return (
        <div className="article-container">
            {articles.map((articleObj, i) => <IndividualArticle article={articleObj} key={articleObj.id} />)}
        </div>
    )
}

export default Articles