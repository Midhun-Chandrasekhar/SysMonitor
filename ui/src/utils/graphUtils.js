export const formatGraphData = (data) => {
    const gData = {
      labels: data.label,
      datasets: [
          {
            label: data.name,
            fill: false,
            lineTension: .1,
            backgroundColor: data.color,
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: data.data
          }
        ]
      }
  
    return gData;
  };
  