# Dockerfile

This is a file called `Dockerfile` which allows us to specify how to build a container. Let's have a look at one:

```
FROM <image>
```

This means we pull down an image that we base this on, this is usually an image that is based on an OS like Ubuntu for example. Let's take an image where nodejs is pre installed, like so:

```
FROM node:8
```

Now let's set a working directory for our app. This is where all the files will be placed. It's done with the `WORKDIR` command:

```
WORKDIR /usr/src/app
```

Next step is copying over the `package.json` file as it contains instructions for what NPM modules our app needs, like so:

```
COPY package*.json ./
```

After that we need to actually install the libraries like so:

```
RUN npm install
```

Now let's copy the entire app. We want all the files to end up in our work directory so we write:

```
COPY . .
```

from current directory into `WORKDIR`

Now let's expose a port in which you can find our application:

```
EXPOSE 8080
```

Lastly start up our app by calling

```
CMD ["npm", "start"]
```

Let's show the `Dockerfile` in its entirety:

```
FROM node:8
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "npm  ", "start" ]
```

# build

Next step is to build our `Dockerfile` and create an image. Once we have an image we can start a container from it. For that we will use the `docker build` command, like so:

```
docker build -t <your username>/node-web-app .
```

We use the `-t` to tag, give it a name. Let's inspect by running

```
docker images
```

This should list our image with the name we tagged it with.

# run

Now let's create a container from our image so we can actually is ut for something. We do that with the following command:

```
docker run -p 49160:8080 -d <your username>/node-web-app
```

Let's break apart this a bit `-p` means that we are creating a bridge between our host OS and our container. What we are saying is which port on our container should connect to what port in the container. The syntax looks like this:

```
-p <port on our system>:<exposed container port>
```

By typing

```
-p 49160:8080
```

We are saying we can find the app running at `http://localhost:49160`
OR we can use `curl`, like so:

```
curl -i localhost:49160
```

We have already said in `app.js` that we aim to run our express server on port 8080 and expose the same port in the `Dockerfile`
