const userService = require('../service/userService');
const constants = require('../constants');

var globalRes;

module.exports.create =  async (req,res) => {
    globalRes = res;
    try {
        await userService.create(req.body,createResponse);
    }catch(error){
        console.log('Something went wrong: Controller : create',error); 
    }
}
function createResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                if(type==1){
                    response.status = 200;
                    response.message = constants.USERMESSAGE.LOGIN;
                    response.body = responseFromService;
                }
                else{
                    response.status = 201;
                    response.message = constants.USERMESSAGE.INCORRECT;
                    response.body = responseFromService;
                }
            }
     }catch(error){
        console.log('Something went wrong: Controller :createResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }


  module.exports.update =  async (req,res) => {
    globalRes = res;
    try {
        await userService.update(req,updateResponse);
    }catch(error){
        console.log('Something went wrong: Controller : update',error); 
    }
}
function updateResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.ADD;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :updateResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }

  module.exports.list =  async (req,res) => {
    globalRes = res;
    try {
        await userService.list(req,listResponse);
    }catch(error){
        console.log('Something went wrong: Controller : list',error); 
    }
}
function listResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.UPDATE;
                    response.body = responseFromService;
                
            }
     }catch(error){
        console.log('Something went wrong: Controller :listResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }


  module.exports.Deletepost =  async (req,res) => {
    globalRes = res;
    try {
        await userService.Deletepost(req.body,DeleteResponse);
    }catch(error){
        console.log('Something went wrong: Controller : Deletepost',error); 
    }
}
function DeleteResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.DELETE;
                    response.body = responseFromService;
            }
     }catch(error){
        console.log('Something went wrong: Controller :DeleteResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }


  module.exports.search =  async (req,res) => {
    globalRes = res;
    try {
        await userService.search(req,searchResponse);
    }catch(error){
        console.log('Something went wrong: Controller : search',error); 
    }
}
function searchResponse(err, result,type) {
    let response = {...constants.defaultServerResponse};
    try {
            if(err){
                response.message = err.message;
            }else {
                const responseFromService =  result;
                    response.status = 200;
                    response.message = constants.USERMESSAGE.UPDATE;
                    response.body = responseFromService;
                
            }
     }catch(error){
        console.log('Something went wrong: Controller :searchResponse',error);
        response.message = error.message; 
     }
     return globalRes.status(response.status).send(response);
  }
