
## Initilize Nodejs

`npm init`

## Install project dependences

`npm install typescript ts-node express @types/express morgan @types/morgan axios @types/axios nodemon`

## Initialize TypeScript

`tsc --init`

## Make sure tsconfig.json like this

`

    "compilerOptions": {
        "forceConsistentCasingInFileNames": true,
        "module": "commonjs",
        "esModuleInterop": true,
        "outDir": "./build",
        "rootDir": "./source",
        "target": "es6",
        "skipLibCheck": true,
        "strict": true
    }
}
`

## Run the api

`npm run dev`