const register = (req,res,db,bcrypt) => {
    const {name,username,password} = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    
    db.transaction(trx => {
        trx.insert({
            name:name,
            username:username,
            password:hashedPassword,
        })
        .into("users")
        .returning("username")
        .then(user => {
            res.json(user[0]);
        })
        .then(trx.commit)
        .catch(error => {
            res.status(400).json("unable to register user");
            trx.rollback;
            console.log(error);
        })
    })
    
}

module.exports = {
    register
}