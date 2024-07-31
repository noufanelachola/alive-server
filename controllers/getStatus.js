const getStatus = async (req,res,db) => {
    const {username} = req.query;
    
    try{
        let status = {}

        const days = await db.from("users")
            .select(db.raw('CURRENT_DATE - click_date AS days'))
            .where({username:username});

        if(days[0].days > 1){
            status = {
                status : false
            }
        } else {
            status = {
                status : true
            }
        }

        res.json(status);

    } catch (error) {
        res.status(400).json("couldnt make the response");
        console.log(error);
    }
}

module.exports = {
    getStatus
}