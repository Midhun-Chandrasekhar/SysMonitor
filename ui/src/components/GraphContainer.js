import React, { Component } from 'react';
import { getUrl, httpHeader } from '../utils/httpUtils';
import { dataStruct, graphOptions } from '../utils/constants';
import { apiInterval } from '../settings';
import Graph from './Graph';
import * as _ from 'lodash';


class GraphContainer extends Component {
    state = dataStruct;

    componentDidMount() {
        this.getData()
        this.interval = setInterval(() => {
            this.getData();
          }, apiInterval);
      };

    componentWillUnmount() {
        clearInterval(this.interval);
      };

    clearDataHandler = (graphName) => {
        const newData = _.cloneDeep(this.state);
        newData[graphName].data = [];
        newData[graphName].label = [""];
        this.setState(newData);
    };

    reFrameData = (data) => {
        Object.entries(data).forEach(([k,v]) => {
            console.log(v.data.length)
            if (v.data.length > graphOptions.y_max_columns){
                v.data.shift();
                v.label.shift();
            }
        })
        return data;
    };


    updateData = (res) => {
        const newData = _.cloneDeep(this.state);
        this.reFrameData(newData);

        newData.RAM.data.push(res.data.ram);
        newData.CPU.data.push(res.data.cpu);
        newData.GPU.data.push(res.data.gpu);

        newData.RAM.label.push("");
        newData.CPU.label.push("");
        newData.GPU.label.push("");
        return newData;
        
    };

    getData() {
           fetch(getUrl('matrix/'), httpHeader())
        .then(res => {
            return res.json();})
            .then(res => {
            const newData = this.updateData(res);
            this.setState(newData);
        });
    };

    render(){
        return (
            <div className="container-fluid">
                <br/>
                <br/>
                <h3 className="text-info text-center">Sys Matrix | Dashboard</h3>
                <br/>
                <br/>
                <div className="card-deck">
                    <Graph graph={this.state.RAM} clearDataHandler={this.clearDataHandler}/>
                    <Graph graph={this.state.CPU} clearDataHandler={this.clearDataHandler}/>
                    <Graph graph={this.state.GPU} clearDataHandler={this.clearDataHandler}/>
                </div>
            </div>
        );
    }
  };

  export default GraphContainer;