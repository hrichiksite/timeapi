module.exports = (req, res) => {

var json = new Date();

var dateStr = JSON.parse(json);  
        
var date = new Date(dateStr);



    res.send(date);
}
