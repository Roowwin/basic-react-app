var newspaperData = require('../../data/newspaper');
var advertisement = require('../../data/advertisement');

/*
 Returns the json data with page break. 
*/
module.exports.getNews = function(req, res, next){
    var skip = req.headers.skip ? req.headers.skip : 0;
    var limit = req.headers.limit ? req.headers.limit : 4;
    var totalData = newsPaperData.data;
    var totalCount =  newspaperData.totalCount;
    var data = []
    if(totalData.length >0){
        data = totalData.slice(skip , limit); 
    }
    if(skip < totalCount){
        return res.status(200).json({success:true  , msg:"Successfully got the information", totalItem:totalCount , noOfPage:Math.floor(totalCount/limit) , currentPage: skip+1 , data:data });

    }
    else{
        return res.status(404).json({success:true  , msg:"Sorry no Item"});

    }
}
module.exports.getAdvertisement = function(req, res, next){
    
    return res.status(200).json({success:true , data:advertisement});
}