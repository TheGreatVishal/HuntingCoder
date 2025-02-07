import * as fs from 'fs'


export default function handler(req, res) {

  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {

    if(err){
      console.log(`Fetching problem : blogdata/${req.query.slug}.json`);
      
      res.status(500).json({error: "Inside getblog: Some error occured.."});
      
    }
    console.log(`Fetching successfull : blogdata/${req.query.slug}.json`);
    console.log(req.query.slug); 
    
    res.status(200).json(JSON.parse(data));
  })
}
