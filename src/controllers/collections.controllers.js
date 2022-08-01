const collectionCtrl = {}

collectionCtrl.listCollections = (req, res) =>{
    res.send('get route')
}

collectionCtrl.createCollection = (req, res) =>{
    console.log(req.body);
    res.send('post route')
}

export default collectionCtrl