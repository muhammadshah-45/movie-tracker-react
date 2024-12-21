import { createContext, useState } from "react";

const MoviesContext = createContext();

const MoviesProvider = ({children})=>{
    const [favoriteMovies,setFavoriteMovies] = useState([]);
  
   
    const [movies,setMovies] = useState([
        {id:1,title:"Hero Ride",genre:"Red Movies",year:2012},
        {id:2,title:"Lucky Boy",genre:"Ary Digital",year:2011},
        {id:3,title:"Salman Khan",genre:"Lone Star",year:2004},
        {id:4,title:"Ice Burg",genre:"Sunny Digital",year:2002},


    ])
    const addMoviesToFavorite = (movie)=>{
        setFavoriteMovies([...favoriteMovies,movie])
        if(movie === movie){
            setAdded(true)
        }
    }

    const removeMoviehandler = (movieId)=>{
       setFavoriteMovies(favoriteMovies.filter(favMovie=> favMovie.id !== movieId))
    }

    return(
        <MoviesContext.Provider value={{
            favoriteMovies,movies,addMoviesToFavorite,removeMoviehandler
        }}>
            {children}
        </MoviesContext.Provider>
    )
}

export {MoviesContext,MoviesProvider}