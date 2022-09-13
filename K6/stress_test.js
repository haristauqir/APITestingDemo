import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2s', target: 100 }, // below normal load
        { duration: '5s', target: 100 },
        { duration: '2s', target: 200 }, // normal load
        { duration: '5s', target: 200 },
        { duration: '2s', target: 300 }, // around the breaking point
        { duration: '5s', target: 300 },
        { duration: '2s', target: 400 }, // beyond the breaking point
        { duration: '5s', target: 400 },
        { duration: '10s', target: 0 }, // scale down. Recovery stage.
    ],
};

export default () => {
    http.get('http://localhost:5001/WeatherForecast');
    sleep(1);
};
