import './index.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import SearchMovies from './searchMovie';

class Main extends React.Component{
render(){
  return(
    <div className='container'>
         <h1>
            ReactJs Movie Search
      
        </h1>
        <SearchMovies />
    </div>
 
  )
}

}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Main/>);


// ReactDOM.render(<Main />, document.getElementById('root'));