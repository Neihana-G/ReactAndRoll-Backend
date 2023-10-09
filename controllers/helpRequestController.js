const model = require('../models/helpRequestModel')

module.exports= {
    loadHelpRequests: async (req, res)=> {
        console.log('Load requests endpoint hit')
        const result = await model.queryAllHelpRequests()
        res.status(200).send(result)
    } ,

    markRequestAsDone: async (req, res)=> {
        console.log('Mark as done endpoint reached')
        
        const student_ids = req.body.student_ids;
        const idsAsString = `(${student_ids.map((id) => id)})`
        const result = await model.markDoneHelpRequests(idsAsString)
        
        res.status(200).send(result)
    } 
}