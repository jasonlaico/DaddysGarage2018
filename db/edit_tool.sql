UPDATE tools
SET brand =$2 , model = $3, description= $4, category_id = $5, s3_image= $6, day_price= $7,  
hour_price =$8, week_price= $9, deposit = $10, rating = $11, available= $12,  first_name= $13, address= $14, lat =$15, lng= $16

WHERE tool_id = $1;

 