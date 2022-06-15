# Axios Usage

This code, used in lecture, demonstrates how to use some of the more advanced capabilities of axios.

# Where to Look

## Axios Configuration
To see how we made it so we could send requests without having to type `'http://localhost:8000/api'` elevendy million times, we configured our axios client to use a `baseURL`. Additionally, to avoid `response.data.result`, we looked at how we can intercept the response and format it to our liking. 

To see these in action, check out [`client/src/utils/axiosConfig.js`](https://github.com/StevenCThaller/AdvancedAxios/blob/main/client/src/utils/axiosConfig.js)

## GET requests
As a refresher, we looked at making `GET` requests using `axios` (keep in mind this utilizes the modified `axios` client from `axiosConfig`). To see instances of this:
- [`client/src/pages/AllHeroes/index.js`](https://github.com/StevenCThaller/AdvancedAxios/blob/main/client/src/pages/AllHeroes/index.js)
- [`client/src/pages/OneHero/index.js`](https://github.com/StevenCThaller/AdvancedAxios/blob/main/client/src/pages/OneHero/index.js) - with route parameters
- [`client/src/pages/UpdateHero/index.js`](https://github.com/StevenCThaller/AdvancedAxios/blob/main/client/src/pages/UpdateHero/index.js) - with route parameters and state usage

## POST request
New to us is using axios to submit data along with a `POST` request. Example at [`client/src/pages/CreateHero/index.js](https://github.com/StevenCThaller/AdvancedAxios/blob/main/client/src/pages/CreateHero/index.js)

## PUT request
Also new to us is sending data with a `PUT` (or `PATCH`, which works the same from the client side) to edit information on the server. Example at [`client/src/pages/UpdateHero/index.js`](https://github.com/StevenCThaller/AdvancedAxios/blob/main/client/src/pages/UpdateHero/index.js)

## DELETE request
Finally, we can send a `DELETE` request using `axios` as well. Example of this can be seen in the `deleteFirstItem` function at [`client/src/pages/AllHeroes/index.js`](https://github.com/StevenCThaller/AdvancedAxios/blob/main/client/src/pages/AllHeroes/index.js)