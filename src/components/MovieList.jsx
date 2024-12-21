import React, { useContext, useState } from 'react'
import { MoviesContext } from '../context/MovieContext'
import { Link } from 'react-router-dom';

const MovieList = () => {
    const {movies,addMoviesToFavorite} = useContext(MoviesContext);

  return (
    <div className='w-full flex flex-col items-center justify-center gap-3 mt-7'>
      <h1 className='text-white text-3xl font-sans font-bold mb-3   drop-shadow-xl '>All Movies List</h1>
      {movies.map(movie=>(
        <div key={movie.id} className=' w-2/4 flex justify-between items-center rounded-md bg-white px-4 py-3'>
            <div className='flex flex-col gap-1'>
            <h1 className=' font-serif font-bold md:text-2xl sm:text-xl'>{movie.title}</h1>

            <div className='flex gap-2'>
            <span className='text-gray-400'>{movie.genre},</span>
            <span className='text-gray-400'>{movie.year}</span>
            </div>
            </div>
            <button className='bg-orange-500 font-semibold rounded-lg hover:bg-orange-600 text-white px-3 py-1 cursor-pointer' onClick={()=>addMoviesToFavorite(movie)}>"Add to Favorite"</button>
          
        </div>
      ))}
      <Link to="/favorite-movie" className='bg-rose-500 border border-white shadow-md px-3 py-1 rounded-[50px] text-xl text-white'>Go to Favorite Movie list</Link>
    </div>
  )
}

export default MovieList
