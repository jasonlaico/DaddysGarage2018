const getallmarketlisting = (req, res, next) => {
    const db = req.app.get('db');
  
    db.getmarketlisting()
      .then(response => {
        res.status(200).send(response);
        //   console.log();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const createmarketlisting = (req, res, next) => {
    const db = req.app.get('db');
    const { user_id, S3_image, tool_price, description, brand, model, category, phone } = req.body;
  
    db.addmarketlisting([user_id, S3_image, tool_price, description, brand, model, category, phone])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(`Something went wrong!`);
      });
  };
  
  const delmarketlisting = (req, res, next) => {
    const db = req.app.get('db');
  
    db.deletemarketlisting(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const updatemarketlisting = (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { first_name, last_name, city, zip, address, email, phone, rating } = req.body;
  
    db.updatemarketlisting([ id, first_name, last_name, city, zip, address, email, phone, rating])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  module.exports = {
    getallmarketlisting,
    createmarketlisting,
    delmarketlisting,
    updatemarketlisting
  };