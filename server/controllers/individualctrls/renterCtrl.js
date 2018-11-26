const getallrenter = (req, res, next) => {
    const db = req.app.get('db');
  
    db.getrenter()
      .then(response => {
        res.status(200).send(response);
        //   console.log();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const createrenter = (req, res, next) => {
    const db = req.app.get('db');
    const { session_id, login_id, first_name, last_name, city, zip, address, email, phone, rating } = req.body;
  
    db.addrenter([session_id, login_id, first_name, last_name, city, zip, address, email, phone, rating])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(`Something went wrong!`);
      });
  };
  
  const delrenter = (req, res, next) => {
    const db = req.app.get('db');
  
    db.deleterenter(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const updaterenter = (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { first_name, last_name, city, zip, address, email, phone, rating } = req.body;
  
    db.editrenter([ id, first_name, last_name, city, zip, address, email, phone, rating])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  module.exports = {
    getallrenter,
    createrenter,
    delrenter,
    updaterenter
  };