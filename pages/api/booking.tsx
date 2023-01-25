import { query } from "../../lib/db";

export default async function handler(req, res) {
    try {
        if (req.method == "GET") {
            const querySql =
                "SELECT * FROM booking";
            const valueParams = [];
            const data = await query({ query: querySql, values: [valueParams] });

            res.status(200).json({ booking: data });

        }
        else if (req.method == "POST") {
            const newData = req.body;  
            console.log(req.body);
            const insertedData = 'INSERT INTO booking SET task_name=? , project=? , start_date=? , end_date=? ,duo_date=? , over_time=? , assigned_to=?  ' 
            // const insert=`INSERT INTO booking (task_name, project, start_date, end_date,duo_date, over_time,assigned_to ) VALUES (${newData.task_name, newData.project,newData.start_date,newData.end_date,newData.duo_date,newData.over_time,newData.assigned_to})` 

            // await query(insert);      

            const datas = [newData.task_name, newData.project, newData.start_date, newData.end_date, newData.duo_date, newData.over_time, newData.assigned_to]; 
            const data = await query({ query: insertedData, values: datas } );        

            res.status(200).send({ message: "success" });  
        }

    } catch (error) {
        // unhide to check error
        console.log(error); 
        res.status(500).json({ error: error.message }); 
    }
} 
