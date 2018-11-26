INSERT INTO Tools
( user_id, brand, model, description, category_id, S3_image, day_price, hour_price,
week_price, deposit, available, rating, first_name, address, lat, lng)

VALUES(1, $1, $2, $3, $4, $5, $6, $7, $8, $9, true ,5 , $12, $13, $14, $15);