const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ydurga232bhavani@',
    database: 'testing'
});

connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("MySQL Database is connected Successfully");
    }
});
module.exports = connection;