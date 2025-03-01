import React, { useEffect, useState } from 'react'
// import { fetchBooks } from '../redux/action'
// import {useDispatch } from 'react-redux'
import "../styles/home.css"
import axios from 'axios'

function Home() {
    let [books,setBooks]=useState({})
    const booksArray = Object.values(books);
    console.log(booksArray);
    
    // const dispatch=useDispatch()
    // useEffect(()=>{
    //     dispatch(fetchBooks())
    //     // console.log(response.data)

    // },[dispatch])
    useEffect(()=>{
       let fetchdata=async ()=>{ 
        let response=await axios.get("https://maineval-db219-default-rtdb.firebaseio.com/books/-OKGEfehvvmlMmD_1ung/books.json")
        // .then((response)=>{setBooks(response.data)})
        // .then((data)=>{console.log(data)})
        // console.log(response.data)
        setBooks(response.data)
       }
       fetchdata()
    },[])
    
  return (
    <div className='homePage'>
        {booksArray.map((ele)=>{
            return (
                <div className='bookCard'>
                    <img src={ele.coverImage}/>
                    <h5>{ele.author}</h5>
                    <p>{ele.title}</p>
                    <button>want to read</button>
                 </div>   
            )
        })}
       
        
      
    </div>
  )
}

export default Home
