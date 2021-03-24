// import { useCallback, useState } from 'react';
// import Categories from './components/Categories';
// import NewsList from './components/NewsList';
import { Route } from 'react-router';
import NewsPage from './pages/NewsPage';

const App = () => {

  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  // return (
  //   <div>
  //       <Categories category={category} onSelect={onSelect}/>
  //       <NewsList category={category}/>
  //   </div>
  // )

  return <Route path='/:category?' component={NewsPage} /> 
}
export default App;
