var sql = require("mssql");

var config = {
    user: 'sa',
    password: 'nguyentiennhat',
    server: 'localhost',
    database: 'QLHV'
};

sql.connect(config, function (err) {
    if (err) console.log(err);
});

var request = new sql.Request();

request.query('select * from Students', function (err, recordset) {
    if (err) console.log(err)

    res.send(recordset);
})
