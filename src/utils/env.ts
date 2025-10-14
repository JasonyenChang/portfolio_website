// interface IConfig {
//     FRONTEND: string
// }
const defaultConfig = {
    // API_URL: 'http://localhost:3000/api' // for local test
    API_URL: 'http://18.143.56.25/api' // for deploy to server
}
let FRONTEND : string = '';
export default FRONTEND ? JSON.parse(FRONTEND) : defaultConfig;
