UPDATE marketplace
SET s3_image =$2 , tool_price = $3, description= $4, brand = $5, model= $6, category= $7,  
phone =$8

WHERE listing_id = $1;

 