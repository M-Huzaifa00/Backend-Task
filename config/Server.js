const PORT = 5000 | process.env.PORT;
module.exports = (app)=>{
    app.listen(PORT,()=>{
        console.info(`Server is running at Port ${PORT}.`)
    })
}