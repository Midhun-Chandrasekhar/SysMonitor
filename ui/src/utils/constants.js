
export const dataStruct = {
    "RAM": {
        "name": "RAM",
        "data": [],
        "color": "green",
        "xAxis": [],
        'label': [""]
    },
    "CPU": {
        "name": "CPU",
        "data": [],
        "color": "orange",
        "xAxis": [],
        'label': [""]
    },
    "GPU": {
        "name": "GPU",
        "data": [],
        "color": "yellow",
        "xAxis": [],
        'label': [""]
    }
};

export const graphOptions = {
    y_max_columns: 20,
    options: {
    animation: false, 
    scales : {
        y : {
            min: 0,
            max: 100,
        }
    }
  }
}
