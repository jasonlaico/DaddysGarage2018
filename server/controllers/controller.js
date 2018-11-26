const getAlltool = (req, res, next) => {
    const db = req.app.get('db');
  
    db.get_tool()
      .then(response => {
        res.status(200).send(response);
        //   console.log();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const createtool = (req, res, next) => {
    console.log(req.body)
    const db = req.app.get('db');
    const { user_id, brand, model, description, category_id, s3_image, day_price, hour_price,
      week_price, deposit, available, rating, first_name , address, lat, lng} = req.body;
  
    db.create_tool([brand, model, description, category_id, s3_image, day_price, hour_price,
      week_price, deposit, available, rating, first_name, address, lat, lng])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(`Something went wrong!`, err);
      });
  };
  
  const deltool = (req, res, next) => {
    const db = req.app.get('db');
  
    db.delete_tool(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
  
  const updatetool = (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const { brand, model, description, category_id, s3_image, day_price, hour_price,
      week_price, deposit, rating, available, first_name, address, lat, lng } = req.body;
  
    db.edit_tool([ id, brand, model, description, category_id, s3_image, day_price, hour_price,
      week_price, deposit, rating, available, first_name, address, lat, lng])
      .then(response => {
        res.status(200).send(response);
      })        
      
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  };
  

  //favorites

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
 //markettool

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
  console.log(req.body)
  const {  s3_image, tool_price, description, brand, model, category, phone } = req.body;

  db.addmarketlisting([ s3_image, tool_price, description, brand, model, category, phone])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
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
  const {s3_image, tool_price, description, brand, model, category, phone} = req.body;

  db.updatemarketlisting([ id, s3_image, tool_price, description, brand, model, category, phone])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};





  // renter
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

  //reviews
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
  
  //PENDING
  const createpending = (req, res, next) => {
    const db = req.app.get('db');
    const { user_id, tool_id, duration, date } = req.body;
  
    db.addpending([user_id, tool_id, duration, date ])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(`Something went wrong!`);
      });
  };
  
  const delpending = (req, res, next) => {
    const db = req.app.get('db');
  
    db.deletepending(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err)
      });
  };
  const getallpending = (req, res, next) => {
    const db = req.app.get('db');
  
    db.showtools()
      .then(response => {
        res.status(200).send(response);
        //   console.log();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };

  const createapproved = (req, res, next) => {
    const db = req.app.get('db');
    const { rental_id, user_id, tool_id, duration, date } = req.body;
  
    db.addapproved([rental_id, user_id, tool_id, duration, date ])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  };

  const getallapproved = (req, res, next) => {
    const db = req.app.get('db');
  
    db.showapprovedtools()
      .then(response => {
        res.status(200).send(response);
        //   console.log();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };

  // const addImage = (req, res) => {
  //   console.log(req.body);
  //   let db = req.app.get("db");
  //   const { s3_image } = req.body;
  //   db.add_image([s3_image, req.user.tool_id])
  //     .then(response => {
  //       res.status(200).json(response);
  //     })
  //     .catch(err => res.status(500).send(err => console.log("Error", err)));
  // };

  module.exports = {
    getAlltool,
    createtool,
    deltool,
    updatetool,
    getallfavorites,
    createfavorites,
    delfavorites,
    getallmarketlisting,
    createmarketlisting,
    delmarketlisting,
    updatemarketlisting,
    getallrenter,
    createrenter,
    delrenter,
    updaterenter,
    getallreviews,
    createreviews,
    delreviews,
    updatereviews,
    delpending,
    createpending,
    getallpending,
    createapproved,
    getallapproved
    // addImage
  };