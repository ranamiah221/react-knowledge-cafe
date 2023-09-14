
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import BoookmarkBlogs from './components/BookmarkBlogs/BoookmarkBlogs';


function App() {
  

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <BoookmarkBlogs></BoookmarkBlogs>
      </div>
    </>
  )
}

export default App
