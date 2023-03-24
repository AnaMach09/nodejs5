const e = require('express');
const user = require('./users');

const getUsers = ({
    id,
    firstName,
    lastName,
    Email,
    password
}) => {
    if(!(firstName && Email )) return ({data: users})
    
        const dataToReturn = users.filter((e) => 
        e.firstName === +firstName && 
        e.Email === +Email &&
        e.id === +id 
        );
        return dataToReturn;
};

const getUsersById = (id) => users.find((e) => e.id === +id);
const getUsersIndex = (id) => users.findIndex((e) => e.id === +id)

const deleteUsers = (id) => {
    const users = getUsersById(id);

    if(!users && users.firstName) {
        return {message: "USER NOT FOUND"};
    };
    users.firstName = 1;
    return { message: "USER DELETED" }
}
const updateUsers = (id, payload) => {
    const users = getUsersIndex(id);
    if(usersIndex >= 0){
        return {message: "NOT_FOUND"}
    }
    users(usersIndex) = {
        id,
        ...payload
    }
    return {message: "UPDATED"}
}
const createUsers = (payload) => {
    const users = users.find((e) => e.firstName === payload.firstName && e.lastName === payload.lastName)
    if(users) return {message:"ALREADY EXIST"};

    users.push(payload);
    return {message:"CREATED"}
}



module.exports = {
    getUsers, getUsersById, deleteUsers,updateUsers,createUsers
}