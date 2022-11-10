/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  fragment PostSimpleFragment on Post {\n    content\n    createdAtBlock\n    createdAtTime\n    createdByAccount {\n      id\n    }\n    title\n    summary\n    image\n    link\n    downvotesCount\n    hidden\n    id\n    isComment\n    kind\n    repliesCount\n    sharesCount\n    upvotesCount\n    updatedAtTime\n    canonical\n    tagsOriginal\n    ownedByAccount {\n      id\n    }\n    space {\n      id\n    }\n    parentPost {\n      id\n    }\n    sharedPost {\n      id\n    }\n  }\n": types.PostSimpleFragmentFragmentDoc,
    "\n  fragment PostFragment on Post {\n    ...PostSimpleFragment\n  }\n": types.PostFragmentFragmentDoc,
    "\n  query GetPostsData($where: PostWhereInput) {\n    posts(where: $where) {\n      ...PostFragment\n      sharedPost {\n        ...PostFragment\n      }\n      parentPost {\n        ...PostFragment\n      }\n    }\n  }\n": types.GetPostsDataDocument,
};

export function graphql(source: "\n  fragment PostSimpleFragment on Post {\n    content\n    createdAtBlock\n    createdAtTime\n    createdByAccount {\n      id\n    }\n    title\n    summary\n    image\n    link\n    downvotesCount\n    hidden\n    id\n    isComment\n    kind\n    repliesCount\n    sharesCount\n    upvotesCount\n    updatedAtTime\n    canonical\n    tagsOriginal\n    ownedByAccount {\n      id\n    }\n    space {\n      id\n    }\n    parentPost {\n      id\n    }\n    sharedPost {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment PostSimpleFragment on Post {\n    content\n    createdAtBlock\n    createdAtTime\n    createdByAccount {\n      id\n    }\n    title\n    summary\n    image\n    link\n    downvotesCount\n    hidden\n    id\n    isComment\n    kind\n    repliesCount\n    sharesCount\n    upvotesCount\n    updatedAtTime\n    canonical\n    tagsOriginal\n    ownedByAccount {\n      id\n    }\n    space {\n      id\n    }\n    parentPost {\n      id\n    }\n    sharedPost {\n      id\n    }\n  }\n"];
export function graphql(source: "\n  fragment PostFragment on Post {\n    ...PostSimpleFragment\n  }\n"): (typeof documents)["\n  fragment PostFragment on Post {\n    ...PostSimpleFragment\n  }\n"];
export function graphql(source: "\n  query GetPostsData($where: PostWhereInput) {\n    posts(where: $where) {\n      ...PostFragment\n      sharedPost {\n        ...PostFragment\n      }\n      parentPost {\n        ...PostFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostsData($where: PostWhereInput) {\n    posts(where: $where) {\n      ...PostFragment\n      sharedPost {\n        ...PostFragment\n      }\n      parentPost {\n        ...PostFragment\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;