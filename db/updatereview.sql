UPDATE Reviews
SET rental_id =$2 , rating = $3, user_id= $4, date = $5
WHERE review_id = $1;

 