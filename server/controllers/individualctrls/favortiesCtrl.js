const getallfavorites = (req, res, next) => {
    const db = req.app.get('db');
  
    db.getfavorite()
      .then(response => {
        res.status(200).send(response);
        //   console.log();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const createfavorites = (req, res, next) => {
    const db = req.app.get('db');
    const { tool_id, user_id, listing_id } = req.body;
  
    db.addfavorite([tool_id, user_id, listing_id ])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(`Something went wrong!`);
      });
  };
  
  const delfavorites = (req, res, next) => {
    const db = req.app.get('db');
  
    db.deletefavorite(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
 

  module.exports = {
    getallfavorites,
    createfavorites,
    delfavorites,
   };