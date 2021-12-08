import { useState, useEffect } from 'react';
import List from './components/List';
import kdramaData from './data';



const App = () => {

  const [data, setData] = useState(undefined);

  useEffect(() => {

    setTimeout(() => {
      setData(kdramaData)
    }, 2000);

  }, [])



  return (
    <div className="App">

      <h1 className="title">KDRAMA LISTS</h1>
      <List data={data} />
    </div>
  );
}

export default App;
