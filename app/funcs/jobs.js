const { ObjectId } = require('mongodb')

module.exports = (db) => {
    const obj = {};

    obj.getMinimalJobList = async () => {
        var res = await db.jobs.find({}).project({_id: 1, title: 1, description: 1, category: 1, location: 1});
        if(!res) return null;
        return res.toArray();
    }

    obj.getJobById = async (id) => {
        var res = await db.jobs.findOne({_id: new ObjectId(id)})
        if(!res) return null;
        return res;
    }

    return obj;
}