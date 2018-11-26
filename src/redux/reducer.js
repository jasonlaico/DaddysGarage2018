let initialState = {
    first_name: '',
    last_name: '',   
    address: '',
    city: '',
    state: '',
    zip: 0,
    phone: 0,
    rating: 0,
    email:'',
    user_id: 0,
    tool_id: 0
}
const updatefirstname1 = 'updatefirstname';
const updatelastname1 = 'updatelastname';
const updateAddress1 = 'updateAddress';
const updateCity1 = 'updateCity';
const updateState1 = 'updateState';
const updateZip1= 'updateZip';
const updatePhone1 = 'updatePhone';
const updateRating1 = 'updateRating';
const updateEmail1 = 'updateEmail';
const sendUser1 = 'sendUser';
const sendTool1 = 'sendTool';
// const ADD_IMAGE = 'addImage';
 
export default function reducer(state=initialState, action){
    switch (action.type) {
        case updatefirstname:
        return Object.assign({}, state, {name: action.payload});
        case updatelastname:
        return Object.assign({}, state, {name: action.payload});
        case updateAddress1:
        return Object.assign({}, state, {address: action.payload});
        case updateCity1:
        return Object.assign({}, state, {city: action.payload});
        case updateState1:
        return Object.assign({}, state, {state: action.payload});
        case updateZip1:
        return Object.assign({}, state, {zip: action.payload});
        case updatePhone1:
        return Object.assign({}, state, {phone: action.payload});
        case updateRating1:
        return Object.assign({}, state, {rating: action.payload});
        case updateEmail1:
        return Object.assign({}, state, {email: action.payload});
        case sendUser1:
        return Object.assign({}, state, {user_id: action.payload});
        case sendTool1:
        return Object.assign({}, state, {tool_id: action.payload});
        
        // case ADD_IMAGE:
        // return Object.assign({}, state, {s3_image: action.payload})    
        
        default:
        return state;
            
    }
}
export function updatefirstname(firstname){
    return {
        type: updatefirstname1,
        payload: firstname
    }
}
export function updatelastname(lastname){
    return {
        type: updatelastname1,
        payload: lastname
    }
}
export function updateAddress(address){
    return{
        type: updateAddress1,
        payload: address
    }
}
export function updateCity(city){
    return{
        type: updateCity1,
        payload: city
    }
}
export function updateState(state){
    return{
        type: updateState1,
        payload: state
    }
}
export function updateZip(zip){
    return{
        type: updateZip1,
        payload: zip
    }
}
export function updatePhone(phone){
    return{
        type: updatePhone1,
        payload: phone
    }
}
export function updateRating(rating){
    return{
        type: updateRating1,
        payload: rating
    }
}
 
export function updateEmail(email){
    return{
        type: updateEmail1,
        payload: email
    }
}

export function sendUser(user_id){
    return{
        type: sendUser1,
        payload: user_id
    }
}
 
export function sendTool(tool_id){
    return{
        type: sendTool1,
        payload: tool_id
    }
}



// export function addImage(s3_image){
//     return {
//       type: ADD_IMAGE,
//       payload: s3_image 
//     };
//   };