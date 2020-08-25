import React from 'react';

export const ProgressIndicator = () => {
  return (
    <div className='progress-wrapper'>
      <ul className='progressbar'>
        <li className='active'>
          <span className='step-indicator'>1</span>Review & Schedule
        </li>
        <li>
          <span className='step-indicator'>2</span>Select Address
        </li>
        <li>
          <span className='step-indicator'>3</span>Check Quote
        </li>
        <li>
          <span className='step-indicator'>4</span>Order Placed
        </li>
      </ul>
    </div>
  );
};
