import './App.css';

import SearchForm from './components/SearchForm';
import ResultsGrid from './components/ResultsGrid';
import Modal from './components/Modal';

import { useEffect, useState } from 'react';
import { getResults } from './services/giphy.service';

interface Result {
  id: string;
  url: string;
}

function App() {
  const [results, setResults] = useState([] as Result[]);
  const [indexItem, setIndexItem] = useState(0);
  const [currentItem, setCurrentItem] = useState();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const refreshResults = (query: string) => {
    getResults(query).then((results: any) => {
      setResults(results);
    });
  };

  const showModal = (result: any) => {
    setCurrentItem(result);
    setIsModalOpened(true);
  }

  const changeImage = (value: number) => {
    setIndexItem(indexItem + value);
    setCurrentItem(results[indexItem] as any)
  }

  useEffect(() => {
    refreshResults('cats');
  }, []);

  return (
    <div className="App">
      {/* <pre>{JSON.stringify(results)}</pre> */}
      <SearchForm refreshResults={refreshResults} />
      <ResultsGrid showModal={showModal} results={results} />
      <Modal changeImage={changeImage} opened={isModalOpened} currentItem={currentItem} />
    </div>
  );
}

export default App;
