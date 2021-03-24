import axios from 'axios';
import { useState } from 'react';
import './App.css';
import NewsList from './components/NewsList';

const App = () => {
  const [data, setData] = useState(null);
  const news_api_key = '31d584fe1e824388b5386ddab774050b';
  const news_target_country_code = 'de';
  const news_api_url = 'https://newsapi.org/v2/top-headlines'
  const full_request_url = `${news_api_url}?country=${news_target_country_code}&apiKey=${news_api_key}`
  const onClick = async() => {
    try {
      const response = await axios.get(
        full_request_url
        );
      setData(response.data);
    }
    catch(error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>Load</button>
      </div>
      {data && (
        <NewsList data={data}/>
      )}
      
    </div>
  )
}

export default App;
