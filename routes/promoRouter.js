const express=require('express');
const bodyParser=require('body-parser');

const promoRouter=express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'type/plain' });
    next();
  });

promoRouter.route('/')
.get((req, res, next)=>{
    res.end('Will send all the promotions to you!');
});
promoRouter.route('/')
.post((req, res, next)=>{
    res.end('Will add the promotion: '+req.body.name+ ' With details: '+req.body.description);
});
promoRouter.route('/')
.put((req, res, next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /promotions');
});
promoRouter.route('/')
.delete((req, res, next)=>{
    res.end('DELETE all the promotions!');
});

promoRouter.route('/:promotionsId')
.all(function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'type/plain' });
    next();
  });

promoRouter.route('/:promoId')
.get((req, res, next)=>{
    res.end('Will send details of the promotion: ' +req.params.promoId+ 'to you!');
});
promoRouter.route('/:promoId')
.post((req, res, next)=>{
    res.end('POST operation not supported on /promotions/:promoId' +req.params.promoId);
});
promoRouter.route('/:promoId')
.put((req, res, next)=>{
    res.write('Updating the promotion: ' +req.params.promoId+ '.\n');
    res.end('Will update the promotion: ' +req.body.name+ 'with details: ' +req.body.description);
});
promoRouter.route('/:promoId')
.delete((req, res, next)=>{
    res.end('Deleting promotion: ' +req.params.promoId);
});

module.exports=promoRouter;