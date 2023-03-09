import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {    
    UserPoolId : "us-east-1_8zskkikUR", // Your user pool id here    
    ClientId : "5q7ankjpkitica24lmpuc4q6ds" // Your client id here
    }; 

var UserPool= new CognitoUserPool(poolData)
export default UserPool