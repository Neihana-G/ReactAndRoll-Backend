module.exports= {
    homePage: (req, res)=> {
        console.log('Root test endpoint reached.')
        res.send('Home page test route working!')
    } 
}