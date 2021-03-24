import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
`

const sampleArticle = {
    title: 'title',
    description: 'desc sdadsd asdada.. ',
    url: 'https://www.google.com',
    urlToImage: 'https://via.placeholder.com/160'
};

const NewsList = ({data}) => {
    console.log(data.articles);
    const articles = data.articles
    return ( 
        <NewsListBlock>
            {articles && articles.length > 0 && (
                articles.map(item => <NewsItem article={item} />)
            )}
        </NewsListBlock>
        )
    }

export default NewsList;