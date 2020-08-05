# MountainCrow

MountainCrow is a full stack application that displays various products with their details, descriptions, and reviews. The goal of the application was to focus on deployment and scalability. Each component of the application was separately scaled and load-balanced using AWS EC2 instances and NGINX.

This repository particularly focuses on the reviews module of the MountainCrow application. This module was able to scale up to handle 3,000 requests per second to a database containing 10 million reviews with 67ms latency and no errors.

## Related Projects

  - https://github.com/MountainCrow/product_details
  - https://github.com/MountainCrow/Product-description-service
  - https://github.com/MountainCrow/reviews-proxy

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)


## Requirements

Node 6.13.0
Nodemon

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run react-dev
npm start
```

