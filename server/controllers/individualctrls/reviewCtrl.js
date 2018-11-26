const getallreviews = (req, res, next) => {
    const db = req.app.get('db');
  
    db.getreviews()
      .then(response => {
        res.status(200).send(response);
        //   console.log();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const createreviews = (req, res, next) => {
    const db = req.app.get('db');
    const { rental_id, rating, user_id, date } = req.body;
  
    db.addreviews([rental_id, rating, user_id, date])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(`Something went wrong!`);
      });
  };
  
  const delreviews = (req, res, next) => {
    const db = req.app.get('db');
  
    db.deletereviews(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const updatereviews = (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { rental_id, rating, user_id, date } = req.body;
  
    db.updatereview([ id, rental_id, rating, user_id, date])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  module.exports = {
    getallreviews,
    createreviews,
    delreviews,
    updatereviews
  };