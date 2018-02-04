const express = require('express')
const axios   = require('axios')
const cors    = require('cors');
const PORT    = process.env.PORT || 8080 

      app     = express()
      app.use(cors());
      app.use(express.json())
      app.use(express.urlencoded({ extended : true }))


let givenURL = "http://gd2.mlb.com/components/game/mlb/year_";
let endURL   = "/master_scoreboard.json"

let testURL  = "http://gd2.mlb.com/components/game/mlb/year_2016/month_08/day_04/master_scoreboard.json"
app.get("/", (req, res) => {
    
    return axios.get(testURL)

    .then(response => {
        result = response.data;
        console.log("WORKED")
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })
})

app.get('/:date', (req, res) => {
    let date  = req.params.date
    let day   = date.slice(0, 2)
    let month = date.slice(2, 4)
    let year  = date.slice(4, 8)

    let baseURL = givenURL + year + '/month_' + month + '/day_' + day + endURL
    return axios.get(baseURL)

    .then(response => {
        result = response.data;
        console.log("IT REALLY WORKS")
        res.send(result.data)
    })
    .catch(err => {
        console.log(err)
    })
})


app.listen(PORT, _ => {
    console.log(`Express is listening on ${PORT}, ctrl+c to kill`)
})

