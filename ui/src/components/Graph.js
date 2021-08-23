import React from 'react';
import { Line } from 'react-chartjs-2';
import Loader from './shared/Loader';
import { formatGraphData } from '../utils/graphUtils';
import { graphOptions } from '../utils/constants';


const Graph = (props) => {

  if (props.graph === undefined){
    return <Loader />;
  }
  
  const { name } = props.graph;
  const graph = formatGraphData(props.graph);

  const clearData = () => {
    props.clearDataHandler(name);
  }

  return (
      <div className="card text-center">
          <br/>
          <div>
            <Line data={graph} options={graphOptions.options}/>
          </div>
          <button onClick={clearData} 
            className="btn btn-warning">Clear Data</button>
      </div>
    );
  };

  export default Graph;