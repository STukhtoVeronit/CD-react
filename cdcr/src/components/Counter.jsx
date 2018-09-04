import React from 'react';
import logprops from '../hoc/log-props';

function Counter({ count, onCountUp, onCountDown }) {
    return (
      <div className="counter btn-group">
          <button className="btn btn-danger dtn-lg" onClick={onCountDown}>-</button>
          <span className="btn btn-secondary dtn-lg active">{count}</span>
          <button className="btn btn-success dtn-lg" onClick={onCountUp}>+</button>
      </div>
    );
}

export default logprops(Counter);