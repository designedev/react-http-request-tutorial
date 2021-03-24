import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
`



const NewsList = ({data}) => {

    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    const news_api_key = '31d584fe1e824388b5386ddab774050b';
    const news_target_country_code = 'de';
    const news_api_url = 'https://newsapi.org/v2/top-headlines'
    const full_request_url = `${news_api_url}?country=${news_target_country_code}&apiKey=${news_api_key}`

    useEffect(() => {
        const setData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(full_request_url);
                setArticles(response.data.articles)
            }
            catch(err) {
                console.log(err);
            }
            setLoading(false);
        }
        setData();
    }, [full_request_url]);
    if (loading) {
        return <NewsListBlock>Loading..</NewsListBlock>
    }
    if (!articles) {
        return null;
    }

    return ( 
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
        )
    }

export default NewsList;