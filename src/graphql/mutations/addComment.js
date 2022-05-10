import {gql} from "@apollo/client";

export const ADDCOMMENT = gql `
    mutation AddComment($subjectId:ID!,$clientMutationId:String!,$body:String!) {
        addComment(input: {
            subjectId: $subjectId,
            clientMutationId: $clientMutationId,
            body: $body
        }) {
            subject {
                id
            }
            commentEdge {
                cursor
                node {
                    body
                }
            }
            clientMutationId
            timelineEdge {
                cursor
            }
        }
    }
`
