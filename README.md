
# Shortenify

A URL Shortener made with Express and MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`BASE_URL` a base url, example: `http://localhost:5000`

`DB` your MongoDB url, example: `mongodb://localhost:27017/urlshortener`, or for MongoDB Cloud: `mongodb+srv://<username>:<password>@cluster0.28wh6.mongodb.net/urlshortener?retryWrites=true&w=majority`
## Installation

Install packages with npm

```bash
  npm install
```

Make sure you have already installed `nodemon` package globally. If not, run this command below
```bash
  npm install -g nodemon
```

Run the application
```bash
  npm run dev
```


## How to use


You can do `POST` HTTP Request with `POSTMAN` to `http://localhost:5000/api/url/shorten`, and set the headers to
```
  Key: Content-type
  Value: application/json
```
and input the Long URL to the body
```json
  {
      "longUrl": "https://longurlthatyouwanttoshorten.com"
  }
```
and server will response with `JSON` with shortUrl as the shorten URL
```json
  {
    "urlCode": "bE7m8q284",
    "longUrl": "https://longurlthatyouwanttoshorten.com",
    "shortUrl": "https://localhost:5000/bE7m8q284",
    "date": "Mon Aug 30 2021 07:11:48 GMT+0000 (Coordinated Universal Time)",
    "_id": "612c84b46f788e50b1b867aa",
    "__v": 0
  }
```