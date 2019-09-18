---
title: Pulling Github repositories data into Gatsby
description: >-
  Add your open source projects to Gatsby using the gatsby-source-github-api
  package
date: '2019-09-18 02:16:20'
image: /assets/gatsby.jpg
tags:
  - gatsbyjs
  - github
  - javascript
---

## Introduction

In this post we will learn how to pull Github repositories into Gatsby-based website using the [gatsby-source-github-api](https://www.gatsbyjs.org/packages/gatsby-source-github-api/).

## Configuring the plugin

The first step is adding the plugin as a dependency:

```
npm i gatsby-source-github-api --save

# or

yarn gatsby-source-github-api
```

Then, configure the plugin in the `gatsby-config.js` file:

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
