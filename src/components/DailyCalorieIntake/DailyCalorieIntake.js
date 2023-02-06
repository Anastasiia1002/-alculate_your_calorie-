import React from 'react';

import s from './DailyCalorieIntake.module.css'

export const DailyCalorieIntake = ({ result }) => {
  return (
    <div className={s.container}>
        
      <h2 className={s.title}>Your recommended daily calorie intake is</h2>
      <div className={s.textKcal}>
        <h3>
          {result}
          <span >Kcal</span>
        </h3>
      </div>
      <div>
        <h4>Foods you should not eat</h4>
        <ol>
          <li>Flour products</li>
          <li>Milk </li>
          <li>Red meat</li>
          <li>Smoked meats </li>
        </ol>
      </div>
      <button className={s.button} type="submit">Start losing weight</button>
    </div>
  );
};
