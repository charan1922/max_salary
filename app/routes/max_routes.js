module.exports = function(app, db) {
  app.get("/salary", (req, res) => {
    db
      .collection("salary")
      .find()
      .toArray(function(err, results) {
        console.log(results);
        res.send(results);
      });
  });

  app.get("/maxsalary", (req, res) => {
    db
      .collection("salary")
      .find()
      .sort({ salary: -1 })
      .limit(1)
      .toArray(function(err, results) {
        console.log(results);
        res.send(results);
      });
  });

  app.post("/maxsalary", (req, res) => {
    const note = { name: req.body.name, salary: req.body.salary };

    db.collection("salary").insert(note, (err, result) => {
      if (err) {
        res.send({ error: "An error has occured" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
