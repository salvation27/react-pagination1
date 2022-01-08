import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import './App.css';
import List from './components/List';
import Pagination from './components/Pagination';

function App() {

  const[arr,setArr] = useState([])
  const [loading,setLoading]= useState(false)
  // стейт для текущей страницы
  const [currentPage,setCurrentPage] = useState(1)
  // колличество элементов на странице
  const [elemPerPage] = useState(7);
  

useEffect(()=>{
  const getCountries =  async ()=>{
    setLoading(true)
    const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
    // console.log(res.data)
    setArr(res.data);
    setLoading(false);
  }
  getCountries();
},[])

const lastIndex = currentPage * elemPerPage;
const firstIndex = lastIndex - elemPerPage;
const currentUser = arr.slice(firstIndex, lastIndex);


const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
}

const nextPage = () => {
  setCurrentPage(prev => prev+1)
  // console.log(currentPage + 1);
  
}
const prevPage = () => {
  setCurrentPage((prev) => prev - 1);
// console.log(currentPage-1);
}

  return (
    <div className="App">
      <b>Список:</b>
      <br />
      <br />
      <List user={currentUser} loading={loading} />
      <Pagination
        elemPerPage={elemPerPage}
        totalElem={arr.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <button onClick={prevPage}>prev</button>
      <button onClick={nextPage}>next</button>
    </div>
  );
}

export default App;
