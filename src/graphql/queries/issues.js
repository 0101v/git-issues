import {gql} from "@apollo/client";

export const ISSUES_QUERY = gql `
    query Issues($owner:String!,$name:String!){
        repository(owner: $owner, name: $name) {
            owner{
                login
            }
            issues(last: 20) {
                edges {
                    node {
                        title
                        url
                        body
                        number
                        state
                        createdAt
                        comments(first:30){
                            edges{
                                node{
                                    body
                                    author{
                                        login
                                    }
                                    createdAt
                                }
                            }
                        }
                        author{
                            login
                        }
                    }
                }
            }
        }
    }
`
