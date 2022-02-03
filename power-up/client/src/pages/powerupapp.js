import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.min.css';




const Powerupapp = () => {
  const [exercises, setExercises] = useState([]);
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

  const exerciseCurrent = exercises.filter(exercise => exercise.target="abs");

  return (
      <div>










        {/* { exercises.length>0  && exercises.map (exercise => {
            return (
            <div>
            <p>{exercise.name}</p>
            <img src={exercise.gifUrl}></img>
            </div>
            )
            
        })
        
        */}

        {exerciseCurrent.length>0 && exerciseCurrent.map (exercise => {
            return (
            <div>
            <p>{exercise.target}</p>
            <img src={exercise.gifUrl}></img>
            </div>
            )
            
        })



    }
    </div>
  );
};

export default Powerupapp;
