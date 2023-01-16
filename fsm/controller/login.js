const login = (req,res,next) => {
    console.log("hi controller")
    res.status(200).send({
        data : null
    })
    return
}

module.exports = login