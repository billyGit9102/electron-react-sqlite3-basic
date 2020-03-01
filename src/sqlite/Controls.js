var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("CREATE TABLE textContent (text TEXT)");
 
  var stmt = db.prepare("INSERT INTO textContent VALUES (111222)");
 
  stmt.finalize();
 
  // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  // });
});


const sqliteControls={};

sqliteControls.update=(text)=>{
  console.log('sqliteControls running');
  db.serialize(function() {
    db.run("UPDATE textContent SET text = $text WHERE id = $id", {
        $id: 1,
        $text: text
    });
  });
  db.close()
};
//db.close();

module.exports = sqliteControls;