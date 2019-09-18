---
title: Pulling Github repositories data into Gatsby
description: >-
  Add your open source projects to Gatsby using the gatsby-source-github-api
  package
date: '2019-09-18 02:16:20'
thumbnail: /assets/gatsby.jpg
tags:
  - gatsbyjs
  - github
  - javascript
---
## Introduction

In this post we will learn how to pull Github repositories into Gatsby-based website using the [gatsby-source-github-api](https://www.gatsbyjs.org/packages/gatsby-source-github-api/). 

## Configuring the plugin

The first step is install the plugin in your project with the npm command:

```
npm i gatsby-source-github-api --save
```

For yarn users you can use:

```
yarn gatsby-source-github-api
```

After that you need add the plugin in the `gatsby-config.js` file like so:

```
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-github-api`,
    options: {
      // token: required by the GitHub API
      token: someString,

      // GraphQLquery: defaults to a search query
      graphQLQuery: anotherString,

      // variables: defaults to variables needed for a search query
      variables: someObject
    }
  }
];
```
