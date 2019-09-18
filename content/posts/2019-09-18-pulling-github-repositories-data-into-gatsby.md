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

## 1. Configuring the plugin

The first step is adding the plugin as a dependency:

```
npm i gatsby-source-github-api --save

# or

yarn gatsby-source-github-api
```

Then, add the plugin in the `gatsby-config.js` file:

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

## 2. Generate Github Personal Access Token

Personal access tokens function like ordinary OAuth access tokens. They can be used instead of a password for Git over HTTPS, or can be used to [authenticate to the API over Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication). So, for use the plugin we will need generate one at Github page. We can do that following these steps:

1. Select your profile in the Github header and pick the \`Settings\` option.

![Github profile settings](/assets/pulling-github-repositories-data-into-gatsby-1.jpg "Github profile settings")

2. Go to \`Developer settings\` and \`Personal access token\`. When you there click in \`Generate new token\` button.

![Github developer settings](/assets/pulling-github-repositories-data-into-gatsby-2.jpg "Github developer settings")

3. Lastly, you should fill the fields \`Note\` and \`Select scopes\` based in your needs. Then, click in the button \`Generate Token\`.

![Github personal access token](/assets/pulling-github-repositories-data-into-gatsby-3.jpg "Github personal access token")

Copy your generated token and add it in your plugin configuration:

```
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-github-api`,
    options: {
      // token: required by the GitHub API
      token: 'b4d3c921cbe54e54e7587545ca307dabf1371a25',

      // GraphQLquery: defaults to a search query
      graphQLQuery: anotherString,

      // variables: defaults to variables needed for a search query
      variables: someObject
    }
  }
];
```

_**Tip:**_ _Always add your tokens in a \`.env\` file. To learn more please look this_ [_link_](https://www.gatsbyjs.org/docs/environment-variables/)_._

## 3. Add your GraphQL query

```
{
  graphQLQuery: `query ($author: String = "", $userFirst: Int = 0) {
    user(login: $author) {
      repositories(first: $userFirst, orderBy: {field: STARGAZERS, direction: DESC} privacy: PUBLIC, isFork: false) {
        edges {
          node {
            name
            description
            url
            forkCount
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }`,
  variables: {
    userFirst: 12,
    author: 'LucasBassetti',
  },
}
```
