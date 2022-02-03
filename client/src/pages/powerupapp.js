import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.min.css';

const Powerupapp = () => {
  const [exercises, setExercises] = useState([]);
  const [currentExercises, setCurrentExercises] = useState([]);
useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "5f63023f83msh83cf10d432a7b75p1534f3jsnb0aad54e672d"
    }
})
.then(response => {
    return response.json();
})
.then(response => {
    console.log(response);
    setExercises (response)
    console.log(exercises)
})
.catch(err => {
    console.error(err);
});

    
  }, []);


  function exercise (type){
    //   onclick={exercise("abs")}
      switch(type){
          case "abs":
            //   change exrcisecurrent into a usestate variable 
             setCurrentExercises(exercises.filter(exercise => exercise.target==="abs"));
            break
          case "quads":
            //   change exrcisecurrent into a usestate variable 
            console.log(currentExercises)
             setCurrentExercises(exercises.filter(exercise => exercise.target==="quads"));
             
            break
      }
  }

  return (
    <div className="container">
      <button onClick= {()=> exercise("abs")}>Abs</button>
      <button onClick= {()=> exercise("quads")}>quads</button>
        This is words to test
        {/* { exercises.length>0  && exercises.map (exercise => {
            return (
            <div>
            <p>{exercise.name}</p>
            <img src={exercise.gifUrl}></img>
            </div>
            )
            
        })
        
        */}

        {currentExercises.length>0 && currentExercises.slice(0,5).map (exercise => {
            return (

            <div>
            <p>{exercise.target}</p>
            <p>{exercise.id}</p>
            <img src={exercise.gifUrl}></img>
            </div>
            )
            
        })



        }
    </div>
  );
};

export default Powerupapp;
