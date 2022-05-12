import {gql} from "@apollo/client";

export const ISSUES_QUERY_COMMENTS = gql `
  query QueryIssuesComments($owner:String!,$name:String!) {
    repository(owner: $owner, name: $name) {
      name
      issues(last: 10) {
        edges {
          node {
            author {
              login
            }
            body
            createdAt
            number
            title
            state
            comments(last: 10) {
              edges {
                node {
                  author {
                    login
                  }
                  body
                  createdAt
                }
              }
            }
          }
        }
      }
    }
  }
`
