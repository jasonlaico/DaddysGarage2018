 SELECT * FROM  approved a
JOIN tools b
on a.tool_id = b.tool_id 
where b.user_id  =  1