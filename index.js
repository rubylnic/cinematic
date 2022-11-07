const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/genre', (req, res) => {
    const id = req.query.id;
    const page = req.query.page;
    const url = `${process.env.REACT_APP_MOVIEDB_URL}/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1&with_genres=${id}&with_watch_monetization_types=flatrate&page=${page}`;
    const options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })
})
app.get('/type', (req, res) => {
    const type = req.query.type;
    const page = req.query.page ? req.query.page : 1;
    const url = `${process.env.REACT_APP_MOVIEDB_URL}/movie/${type}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=${page}`;
    console.log(url)
    const options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })
})
app.get('/similar', (req, res) => {
    const id = req.query.id;
    const url = `${process.env.REACT_APP_MOVIEDB_URL}/movie/${id}/similar?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1`;
    const options = {
        method: 'GET',
        url: url
    }
    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })
})
app.get('/genres', (req, res) => {
    const id = req.query.id;
    const url = `${process.env.REACT_APP_MOVIEDB_URL}genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
    const options = {
        method: 'GET',
        url: url
    }
    axios.request(options).then((response) => {
        res.json(response.data)

    }).catch((error) => {
        console.error(error)
    })
})



app.listen(8000, () => console.log(`Server is running on port ${PORT}`))