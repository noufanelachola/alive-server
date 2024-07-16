const register = (req,res) => {
    res.json(req.body);
    console.log(req.body)
}

module.exports = {
    register
}