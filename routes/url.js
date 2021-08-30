const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')

const router = express.Router()

const Url = require('../models/Url')

// @route   POST /api/url/shorten
// @description`  Create short URL

// The API base Url endpoint
const baseUrl = process.env.BASE_URL || 'http:localhost:5000'

router.post('/shorten', async (req, res) => {
  const {longUrl} = req.body
  //check base url
  if(!validUrl.isUri(baseUrl)){
      return res.status(401).json('Invalid base URL')
  }
  // create url code
  const urlCode = shortid.generate()
  //check long url
  if(validUrl.isUri(longUrl)){
      try{
          let url = await Url.findOne({longUrl})
          if(url){
              res.json(url)
          }
          else{
              const shortUrl = baseUrl + '/'+ urlCode
              url = new Url({
                  longUrl,
                  shortUrl,
                  urlCode,
                  date: new Date()
              })
              await url.save()
              res.json(url)
          }
      }
      catch(err){
          console.log(err)
          res.status(500).json('Server Error')
      }
  }
  else{
      res.status(401).json('Invalid longUrl')
  }
})

module.exports = router