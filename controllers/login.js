const login = (req,res,db,bcrypt) => {
    const {username,password} = req.body;
    
    db.from("users")
    .where({username:username})
    .then(user => {
        const isValid = bcrypt.compareSync(password,user[0].password,null);
        if(isValid){
            res.json(user[0].username);
        } else {
            res.status(400).json("Wrong credentials!")
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).json("No user found");
    })
}

module.exports = {
    login
}