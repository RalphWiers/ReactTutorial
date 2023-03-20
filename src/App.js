import logo from './logo.svg';
import './App.css';

function App() {
  const title = 'welcome to the new blog1';
  const likes = 50; 
  //output nr's strings & arrays
  const link = "http://www.google.com";

  return (
   <div className="App">
    <div className="content">
      <h1>{title}</h1>
      <p>liked {likes}</p>
      <p>{"hello ninjas"}</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>website</a>
    </div>
   </div>
  );
}



export default App;
