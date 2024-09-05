
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleAddToBM=blog=>{
    const newbookmarks=[...bookmarks,blog]
    setBookmarks(newbookmarks)
  }

  const handleReadingTime=(reading_time)=>{
    console.log(readingTime)
    const newTime=readingTime+reading_time
    setReadingTime(newTime)
  }

  return (
    <>
    <Header className='max-w-7xl mx-auto' ></Header>
    <div className='md:flex max-w-7xl mx-auto ' >
    <Blogs
    handleAddToBM={handleAddToBM}
    handleReadingTime={handleReadingTime}
     ></Blogs>
    <Bookmarks 
    bookmarks={bookmarks}
    readingTime={readingTime}
    
    ></Bookmarks>
    </div>
    </>
  )
}

export default App
