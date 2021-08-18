import { remoteConf, sysConf } from "../settings";

export const getUrl = (path) => {
    return remoteConf.endPoint + path;
};

export const httpHeader = () => {
    return {
        crossDomain:true, 
        headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': sysConf.hostInfo
            }
        }
};
