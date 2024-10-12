##Development

Install Dependencies\
`npm i`

Start typescript translator\
`npm run watch`

Run server in development mode\
`npm run dev`

##Docker

compose
`docker compose -f docker-compose.dev.yaml up --build -d`
-d for detached, --build to rebuild





Build image
`docker build -t isaiahgardeen/sampleImage:1.0`

Run image
`docker run -p 1080:80 abc123gfed31`