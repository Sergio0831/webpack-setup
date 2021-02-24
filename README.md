## Running webpack

1. Type node_modules/.bin/wp to run the locally installed webpack-nano.

2. You can display the exact path of the executables using npm bin. Most likely it points to ./node_modules/.bin

## Configuring mini-html-webpack-plugin

1. Build the project using node_modules/.bin/wp --mode production. You can try the development and none modes too.

2. Run a static file server using npx serve dist or a similar command you are familiar with.

## Accessing development server from the network

1. To access your development server from the network, you need to figure out the IP address of your machine. For example, using ifconfig | grep inet on Unix, or ipconfig on Windows. Then you need to set your HOST to match your IP like this: HOST=<ip goes here> npm start.
