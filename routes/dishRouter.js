const express=require('express');
const bodyParser=require('body-parser');

const dishRouter=express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get((req, res, next)=>{
    res.end('Will send all the dishes to you!');
});
dishRouter.route('/')
.post((req, res, next)=>{
    res.end('Will add the dish: '+req.body.name+ ' With details: '+req.body.description);
});
dishRouter.route('/')
.put((req, res, next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /dishes');
});
dishRouter.route('/')
.delete((req, res, next)=>{
    res.end('DELETE all the dishes!');
});

dishRouter.route('/:dishId')
.get((req, res, next)=>{
    res.end('Will send details of the dish: ' +req.params.dishId+ 'to you!');
});
dishRouter.route('/:dishId')
.post((req, res, next)=>{
    res.end('POST operation not supported on /dishes/:dishId' +req.params.dishId);
});
dishRouter.route('/:dishId')
.put((req, res, next)=>{
    res.write('Updating the dish: ' +req.params.dishId+ '.\n');
    res.end('Will update the dish: ' +req.body.name+ 'with details: ' +req.body.description);
});
dishRouter.route('/:dishId')
.delete((req, res, next)=>{
    res.end('Deleting dish: ' +req.params.dishId);
});

module.exports=dishRouter;