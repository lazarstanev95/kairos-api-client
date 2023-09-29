# Kairos face recognition API client for Node.js

[![NPM version](http://img.shields.io/npm/v/kairos-api-client.svg?style=flat)](https://www.npmjs.com/package/kairos-api-client)


## Overview

Kairos is a simple concept—you submit images into our API, and our deep learning algorithms analyze the faces found, then the API returns a bunch of useful data about the faces we find. You can use this to search, match and compare faces, or measure characteristics such as age, and gender.

## Installation

```
npm install kairos-api
```

## Usage

```js
const { KairosApiClient } = require('kairos-api-client')
const kairos = new KairosApiClient({ appId: "app_id", appKey: "app_key" });
// To use the Kairos client with proxy add proxy parameter to the constructor

async function KairosClient() {
    try {
        const params = {
            image: 'http://media.kairos.com/kairos-elizabeth.jpg',
            subject_id: 'Elizabeth',
            gallery_name: 'MyGallery',
        }
        const results = await kairos.enroll(params);   // return Promise
        //  result: {
        //    status: <http status code>,
        //    body: <data>
        //  } 
    } catch (error) {
        throw new Error(error);
    }
}

KairosClient();
```
