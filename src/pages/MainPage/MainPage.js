
import React, { useState, useEffect } from 'react';
import { DailyCaloriesForm } from "../../components/DailyCaloriesForm/DailyCaloriesForm";
import s from "./MainPage.module.css";
import {DailyCalorieIntake} from "../../components/DailyCalorieIntake/DailyCalorieIntake";

export const MainPage = () => {
const [result, setResult]=useState(false)

console.log(result)
    return (
      <>
      {result&& <div  className={s.lineBack}><span onClick={()=>setResult(false)}>&#8617;</span></div>}
     <div className={s.container}>

      {!result? 
      <DailyCaloriesForm setResult={setResult}/>
    :
    <DailyCalorieIntake result={result}/>}
     
     </div>
    </>);
  };