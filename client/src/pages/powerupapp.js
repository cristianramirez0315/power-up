import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

const Powerupapp = () => {
  const [exercises, setExercises] = useState([]);
  const [currentExercises, setCurrentExercises] = useState([]);
useEffect(() => {
    fetch("https://exercisedb.p.rapidapi.com/exercises", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "cf4213a26cmsh0eb979481a6fedap1d2f18jsna1a0e5a15e15"
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
          case "lats":
            //   change exrcisecurrent into a usestate variable 
            console.log(currentExercises)
             setCurrentExercises(exercises.filter(exercise => exercise.target==="lats"));
             
            break
          case "calves":
            //   change exrcisecurrent into a usestate variable 
            console.log(currentExercises)
             setCurrentExercises(exercises.filter(exercise => exercise.target==="calves"));
             
            break
          case "glutes":
            //   change exrcisecurrent into a usestate variable 
            console.log(currentExercises)
             setCurrentExercises(exercises.filter(exercise => exercise.target==="glutes"));
             
            break
      }
  }

  return (
    <div className="container coulmns">
      <div class="hero is-small is-link">
        <div class="hero-body">
          <h1 class="title">Target Category</h1> 
        </div>
        
      </div>
      
      <div className="buttons columns">
        <button class="button is-info is-large column is-one-sixth" onClick= {()=> exercise("abs")}>Abs</button>
        <button class="button is-info is-large column is-one-sixth" onClick= {()=> exercise("quads")}>Quads</button>
        <button class="button is-info is-large column is-one-sixth" onClick= {()=> exercise("lats")}>Lats</button>
        <button class="button is-info is-large column is-one-sixth" onClick= {()=> exercise("calves")}>Calves</button>
        <button class="button is-info is-large column is-one-sixth" onClick= {()=> exercise("glutes")}>Glutes</button>
      </div>
      
        
        {/* { exercises.length>0  && exercises.map (exercise => {
            return (
            <div>
            <p>{exercise.name}</p>
            <img src={exercise.gifUrl}></img>
            </div>
            )
            
        })
        
        */}

        {currentExercises.length>0 && currentExercises.slice(0,10).map (exercise => {
            return (

              

            <div class="card">
              <div class="card-image">
                <figure class="image is-128x128">
                  <img src={exercise.gifUrl}></img>
                </figure>
              </div>

            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{exercise.name}</p>
                  <p class="subtitle is-6">{exercise.target}</p>
                  <button class="button is-success">Save to profile</button>
          
                </div>

              </div>
            </div>
            
            
            
            </div>
            )
            
        })



        }
    </div>
  );
};

export default Powerupapp;
