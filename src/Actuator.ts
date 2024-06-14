import actuator, { Options }   from 'express-actuator';

const options : Options = {
    basePath: '/actuator', 
    infoGitMode: 'simple',
    customEndpoints: [] 
};

const Actuator = actuator(options)

export default Actuator;