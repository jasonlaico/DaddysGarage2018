UPDATE Renter
SET first_name =$2, last_name = $3, city = $4, zip = $5, address = $6, email = $7, phone = $8, rating = 5

WHERE user_id = $1;

 