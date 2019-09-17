const githubQueryOptions = {
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

module.exports = githubQueryOptions
