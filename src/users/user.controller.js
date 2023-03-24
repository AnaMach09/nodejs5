const UserService = require('./user.service')

const getUsers = (req,res) => {
    
        const { id,email,firstName,lastName, password } = req.query;
    
        const data = UserService.getUsers({
            firstName,id, lastName, email,password
        })
        return res.json({
            data,
        })

};
const deleteUsers = (req,res) => {
    const { id } = req.params;
    
    const message = UserService.deleteUsers(id)

    return res.json( message)

};
const updateUsers = (req,res) => {
    const { id } = req.params;
    const payload = req.body;
    const message = UserService.updateUsers(id,payload);

    res.json(message);

};
const createUsers = (req,res) => {
    const payload = req.body;

    const message = UserService.createUsers(payload);

    return res.json(message);

};

module.exports = {
    getUsers,
    deleteUsers,
    updateUsers,
    createUsers
}