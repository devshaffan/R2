const middleware = (req, res, next) => {
    console.log("hi middleware")
   
    next()
}

module.exports = middleware