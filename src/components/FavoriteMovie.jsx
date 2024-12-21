import React, { useContext } from 'react'
import { MoviesContext } from '../context/MovieContext'
import { Link } from 'react-router-dom'

const FavoriteMovies = () => {
  const {favoriteMovies,removeMoviehandler} = useContext(MoviesContext) 
  console.log(favoriteMovies)
  if(favoriteMovies.length === 0){
    return (<div className='mt-4 w-full h-[90vh] flex flex-col gap-4 justify-center items-center'><h2 className='text-3xl text-white'>No movie available yet...</h2>
               <Link to={'/'} className='bg-green-500 px-3 py-1 rounded-md text-white' >Go Back</Link>   </div>)
  }
  return (
    <div className='w-full flex flex-col items-center justify-center gap-3 mt-12'>
      <h1 className='text-white text-4xl font-sans font-bold mb-3   drop-shadow-xl '>Favorite Movies List</h1>

       {favoriteMovies.map(movie=>(
        <div key={movie.id} className=' w-2/4 flex justify-between items-center rounded-md bg-white px-4 py-3'>
            <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-serif font-bold'>{movie.title}</h1>
            <div className='flex gap-2'>
            <span>{movie.year} ,</span>
            <span>{movie.genre}</span>
            </div>
            </div>
            <button onClick={()=> removeMoviehandler(movie.id)} className='bg-red-500 font-semibold rounded-lg hover:bg-orange-700 text-white px-3 py-1 cursor-pointer'>Delete</button>
          
        </div>
      ))}
      <Link to={'/'} className='bg-green-500 px-3 py-1 rounded-md text-white' >Go Back</Link>
    </div>
  )
}

export default FavoriteMovies
