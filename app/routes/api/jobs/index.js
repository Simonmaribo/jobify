const router = require('express').Router();

module.exports = async (next, db) => {

    const jobs = require('../../../funcs/jobs')(db);

    router.get('/', async (req, res) => {
        var data = await jobs.getMinimalJobList();
        if(!data) return res.status(404).json({
            status: 500,
            message: 'Internal Server Error'
        })
        return res.status(200).json({
            status: 200,
            message: 'Request Successful',
            data
        })
    })

    router.get('/:job', async (req, res) => {
        var data = await jobs.getJobById(req.params.job);
        if(!data) return res.status(404).json({
            status: 500,
            message: 'Internal Server Error'
        })
        return res.status(200).json({
            status: 200,
            message: 'Request Successful',
            data
        })
    });


    return router;
}