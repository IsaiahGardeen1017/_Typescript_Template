##Development

Install Dependencies\
`npm i`

Start typescript translator\
`npm run watch`

Run server in development mode\
`npm run dev`

##Docker

Compose and run for development
`docker compose -f docker-compose.dev.yaml up --build -d`
-d for detached, --build to rebuild

build image with compose
`docker compose -f docker-compose.yaml build` 

Run image without composing
`docker run -d -p 80:100 username/imagename`

Push/pull docker image
`docker push username/imagename`
`docker pull username/imagename`

