/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Big number integer */
  BigInt: any;
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  activities: Array<Activity>;
  feeds: Array<NewsFeed>;
  followers: Array<AccountFollowers>;
  followersCount: Scalars['Int'];
  followingAccounts: Array<AccountFollowers>;
  followingAccountsCount: Scalars['Int'];
  followingPostsCount: Scalars['Int'];
  followingSpacesCount: Scalars['Int'];
  id: Scalars['String'];
  notifications: Array<Notification>;
  posts: Array<Post>;
  profileSpace?: Maybe<Space>;
  reactions: Array<Reaction>;
  spacesCreated: Array<Space>;
  spacesFollowed: Array<SpaceFollowers>;
  spacesOwned: Array<Space>;
  updatedAtBlock?: Maybe<Scalars['BigInt']>;
  updatedAtTime?: Maybe<Scalars['DateTime']>;
};


export type AccountActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActivityOrderByInput>>;
  where?: InputMaybe<ActivityWhereInput>;
};


export type AccountFeedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NewsFeedOrderByInput>>;
  where?: InputMaybe<NewsFeedWhereInput>;
};


export type AccountFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountFollowersOrderByInput>>;
  where?: InputMaybe<AccountFollowersWhereInput>;
};


export type AccountFollowingAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountFollowersOrderByInput>>;
  where?: InputMaybe<AccountFollowersWhereInput>;
};


export type AccountNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NotificationOrderByInput>>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type AccountPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderByInput>>;
  where?: InputMaybe<PostWhereInput>;
};


export type AccountReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReactionOrderByInput>>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type AccountSpacesCreatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpaceOrderByInput>>;
  where?: InputMaybe<SpaceWhereInput>;
};


export type AccountSpacesFollowedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpaceFollowersOrderByInput>>;
  where?: InputMaybe<SpaceFollowersWhereInput>;
};


export type AccountSpacesOwnedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpaceOrderByInput>>;
  where?: InputMaybe<SpaceWhereInput>;
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  cursor: Scalars['String'];
  node: Account;
};

export type AccountFollowers = {
  __typename?: 'AccountFollowers';
  followerAccount: Account;
  followingAccount: Account;
  id: Scalars['String'];
};

export type AccountFollowersConnection = {
  __typename?: 'AccountFollowersConnection';
  edges: Array<AccountFollowersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AccountFollowersEdge = {
  __typename?: 'AccountFollowersEdge';
  cursor: Scalars['String'];
  node: AccountFollowers;
};

export enum AccountFollowersOrderByInput {
  FollowerAccountFollowersCountAsc = 'followerAccount_followersCount_ASC',
  FollowerAccountFollowersCountDesc = 'followerAccount_followersCount_DESC',
  FollowerAccountFollowingAccountsCountAsc = 'followerAccount_followingAccountsCount_ASC',
  FollowerAccountFollowingAccountsCountDesc = 'followerAccount_followingAccountsCount_DESC',
  FollowerAccountFollowingPostsCountAsc = 'followerAccount_followingPostsCount_ASC',
  FollowerAccountFollowingPostsCountDesc = 'followerAccount_followingPostsCount_DESC',
  FollowerAccountFollowingSpacesCountAsc = 'followerAccount_followingSpacesCount_ASC',
  FollowerAccountFollowingSpacesCountDesc = 'followerAccount_followingSpacesCount_DESC',
  FollowerAccountIdAsc = 'followerAccount_id_ASC',
  FollowerAccountIdDesc = 'followerAccount_id_DESC',
  FollowerAccountUpdatedAtBlockAsc = 'followerAccount_updatedAtBlock_ASC',
  FollowerAccountUpdatedAtBlockDesc = 'followerAccount_updatedAtBlock_DESC',
  FollowerAccountUpdatedAtTimeAsc = 'followerAccount_updatedAtTime_ASC',
  FollowerAccountUpdatedAtTimeDesc = 'followerAccount_updatedAtTime_DESC',
  FollowingAccountFollowersCountAsc = 'followingAccount_followersCount_ASC',
  FollowingAccountFollowersCountDesc = 'followingAccount_followersCount_DESC',
  FollowingAccountFollowingAccountsCountAsc = 'followingAccount_followingAccountsCount_ASC',
  FollowingAccountFollowingAccountsCountDesc = 'followingAccount_followingAccountsCount_DESC',
  FollowingAccountFollowingPostsCountAsc = 'followingAccount_followingPostsCount_ASC',
  FollowingAccountFollowingPostsCountDesc = 'followingAccount_followingPostsCount_DESC',
  FollowingAccountFollowingSpacesCountAsc = 'followingAccount_followingSpacesCount_ASC',
  FollowingAccountFollowingSpacesCountDesc = 'followingAccount_followingSpacesCount_DESC',
  FollowingAccountIdAsc = 'followingAccount_id_ASC',
  FollowingAccountIdDesc = 'followingAccount_id_DESC',
  FollowingAccountUpdatedAtBlockAsc = 'followingAccount_updatedAtBlock_ASC',
  FollowingAccountUpdatedAtBlockDesc = 'followingAccount_updatedAtBlock_DESC',
  FollowingAccountUpdatedAtTimeAsc = 'followingAccount_updatedAtTime_ASC',
  FollowingAccountUpdatedAtTimeDesc = 'followingAccount_updatedAtTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AccountFollowersWhereInput = {
  AND?: InputMaybe<Array<AccountFollowersWhereInput>>;
  OR?: InputMaybe<Array<AccountFollowersWhereInput>>;
  followerAccount?: InputMaybe<AccountWhereInput>;
  followerAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  followingAccount?: InputMaybe<AccountWhereInput>;
  followingAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
};

export enum AccountOrderByInput {
  FollowersCountAsc = 'followersCount_ASC',
  FollowersCountDesc = 'followersCount_DESC',
  FollowingAccountsCountAsc = 'followingAccountsCount_ASC',
  FollowingAccountsCountDesc = 'followingAccountsCount_DESC',
  FollowingPostsCountAsc = 'followingPostsCount_ASC',
  FollowingPostsCountDesc = 'followingPostsCount_DESC',
  FollowingSpacesCountAsc = 'followingSpacesCount_ASC',
  FollowingSpacesCountDesc = 'followingSpacesCount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProfileSpaceAboutAsc = 'profileSpace_about_ASC',
  ProfileSpaceAboutDesc = 'profileSpace_about_DESC',
  ProfileSpaceCanEveryoneCreatePostsAsc = 'profileSpace_canEveryoneCreatePosts_ASC',
  ProfileSpaceCanEveryoneCreatePostsDesc = 'profileSpace_canEveryoneCreatePosts_DESC',
  ProfileSpaceCanFollowerCreatePostsAsc = 'profileSpace_canFollowerCreatePosts_ASC',
  ProfileSpaceCanFollowerCreatePostsDesc = 'profileSpace_canFollowerCreatePosts_DESC',
  ProfileSpaceContentAsc = 'profileSpace_content_ASC',
  ProfileSpaceContentDesc = 'profileSpace_content_DESC',
  ProfileSpaceCreatedAtBlockAsc = 'profileSpace_createdAtBlock_ASC',
  ProfileSpaceCreatedAtBlockDesc = 'profileSpace_createdAtBlock_DESC',
  ProfileSpaceCreatedAtTimeAsc = 'profileSpace_createdAtTime_ASC',
  ProfileSpaceCreatedAtTimeDesc = 'profileSpace_createdAtTime_DESC',
  ProfileSpaceCreatedOnDayAsc = 'profileSpace_createdOnDay_ASC',
  ProfileSpaceCreatedOnDayDesc = 'profileSpace_createdOnDay_DESC',
  ProfileSpaceEmailAsc = 'profileSpace_email_ASC',
  ProfileSpaceEmailDesc = 'profileSpace_email_DESC',
  ProfileSpaceFollowersCountAsc = 'profileSpace_followersCount_ASC',
  ProfileSpaceFollowersCountDesc = 'profileSpace_followersCount_DESC',
  ProfileSpaceFormatAsc = 'profileSpace_format_ASC',
  ProfileSpaceFormatDesc = 'profileSpace_format_DESC',
  ProfileSpaceHiddenPostsCountAsc = 'profileSpace_hiddenPostsCount_ASC',
  ProfileSpaceHiddenPostsCountDesc = 'profileSpace_hiddenPostsCount_DESC',
  ProfileSpaceHiddenAsc = 'profileSpace_hidden_ASC',
  ProfileSpaceHiddenDesc = 'profileSpace_hidden_DESC',
  ProfileSpaceIdAsc = 'profileSpace_id_ASC',
  ProfileSpaceIdDesc = 'profileSpace_id_DESC',
  ProfileSpaceImageAsc = 'profileSpace_image_ASC',
  ProfileSpaceImageDesc = 'profileSpace_image_DESC',
  ProfileSpaceLinksOriginalAsc = 'profileSpace_linksOriginal_ASC',
  ProfileSpaceLinksOriginalDesc = 'profileSpace_linksOriginal_DESC',
  ProfileSpaceNameAsc = 'profileSpace_name_ASC',
  ProfileSpaceNameDesc = 'profileSpace_name_DESC',
  ProfileSpacePostsCountAsc = 'profileSpace_postsCount_ASC',
  ProfileSpacePostsCountDesc = 'profileSpace_postsCount_DESC',
  ProfileSpacePublicPostsCountAsc = 'profileSpace_publicPostsCount_ASC',
  ProfileSpacePublicPostsCountDesc = 'profileSpace_publicPostsCount_DESC',
  ProfileSpaceSummaryAsc = 'profileSpace_summary_ASC',
  ProfileSpaceSummaryDesc = 'profileSpace_summary_DESC',
  ProfileSpaceTagsOriginalAsc = 'profileSpace_tagsOriginal_ASC',
  ProfileSpaceTagsOriginalDesc = 'profileSpace_tagsOriginal_DESC',
  ProfileSpaceUpdatedAtBlockAsc = 'profileSpace_updatedAtBlock_ASC',
  ProfileSpaceUpdatedAtBlockDesc = 'profileSpace_updatedAtBlock_DESC',
  ProfileSpaceUpdatedAtTimeAsc = 'profileSpace_updatedAtTime_ASC',
  ProfileSpaceUpdatedAtTimeDesc = 'profileSpace_updatedAtTime_DESC',
  UpdatedAtBlockAsc = 'updatedAtBlock_ASC',
  UpdatedAtBlockDesc = 'updatedAtBlock_DESC',
  UpdatedAtTimeAsc = 'updatedAtTime_ASC',
  UpdatedAtTimeDesc = 'updatedAtTime_DESC'
}

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  activities_every?: InputMaybe<ActivityWhereInput>;
  activities_none?: InputMaybe<ActivityWhereInput>;
  activities_some?: InputMaybe<ActivityWhereInput>;
  feeds_every?: InputMaybe<NewsFeedWhereInput>;
  feeds_none?: InputMaybe<NewsFeedWhereInput>;
  feeds_some?: InputMaybe<NewsFeedWhereInput>;
  followersCount_eq?: InputMaybe<Scalars['Int']>;
  followersCount_gt?: InputMaybe<Scalars['Int']>;
  followersCount_gte?: InputMaybe<Scalars['Int']>;
  followersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  followersCount_isNull?: InputMaybe<Scalars['Boolean']>;
  followersCount_lt?: InputMaybe<Scalars['Int']>;
  followersCount_lte?: InputMaybe<Scalars['Int']>;
  followersCount_not_eq?: InputMaybe<Scalars['Int']>;
  followersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  followers_every?: InputMaybe<AccountFollowersWhereInput>;
  followers_none?: InputMaybe<AccountFollowersWhereInput>;
  followers_some?: InputMaybe<AccountFollowersWhereInput>;
  followingAccountsCount_eq?: InputMaybe<Scalars['Int']>;
  followingAccountsCount_gt?: InputMaybe<Scalars['Int']>;
  followingAccountsCount_gte?: InputMaybe<Scalars['Int']>;
  followingAccountsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  followingAccountsCount_isNull?: InputMaybe<Scalars['Boolean']>;
  followingAccountsCount_lt?: InputMaybe<Scalars['Int']>;
  followingAccountsCount_lte?: InputMaybe<Scalars['Int']>;
  followingAccountsCount_not_eq?: InputMaybe<Scalars['Int']>;
  followingAccountsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  followingAccounts_every?: InputMaybe<AccountFollowersWhereInput>;
  followingAccounts_none?: InputMaybe<AccountFollowersWhereInput>;
  followingAccounts_some?: InputMaybe<AccountFollowersWhereInput>;
  followingPostsCount_eq?: InputMaybe<Scalars['Int']>;
  followingPostsCount_gt?: InputMaybe<Scalars['Int']>;
  followingPostsCount_gte?: InputMaybe<Scalars['Int']>;
  followingPostsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  followingPostsCount_isNull?: InputMaybe<Scalars['Boolean']>;
  followingPostsCount_lt?: InputMaybe<Scalars['Int']>;
  followingPostsCount_lte?: InputMaybe<Scalars['Int']>;
  followingPostsCount_not_eq?: InputMaybe<Scalars['Int']>;
  followingPostsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  followingSpacesCount_eq?: InputMaybe<Scalars['Int']>;
  followingSpacesCount_gt?: InputMaybe<Scalars['Int']>;
  followingSpacesCount_gte?: InputMaybe<Scalars['Int']>;
  followingSpacesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  followingSpacesCount_isNull?: InputMaybe<Scalars['Boolean']>;
  followingSpacesCount_lt?: InputMaybe<Scalars['Int']>;
  followingSpacesCount_lte?: InputMaybe<Scalars['Int']>;
  followingSpacesCount_not_eq?: InputMaybe<Scalars['Int']>;
  followingSpacesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  notifications_every?: InputMaybe<NotificationWhereInput>;
  notifications_none?: InputMaybe<NotificationWhereInput>;
  notifications_some?: InputMaybe<NotificationWhereInput>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  profileSpace?: InputMaybe<SpaceWhereInput>;
  profileSpace_isNull?: InputMaybe<Scalars['Boolean']>;
  reactions_every?: InputMaybe<ReactionWhereInput>;
  reactions_none?: InputMaybe<ReactionWhereInput>;
  reactions_some?: InputMaybe<ReactionWhereInput>;
  spacesCreated_every?: InputMaybe<SpaceWhereInput>;
  spacesCreated_none?: InputMaybe<SpaceWhereInput>;
  spacesCreated_some?: InputMaybe<SpaceWhereInput>;
  spacesFollowed_every?: InputMaybe<SpaceFollowersWhereInput>;
  spacesFollowed_none?: InputMaybe<SpaceFollowersWhereInput>;
  spacesFollowed_some?: InputMaybe<SpaceFollowersWhereInput>;
  spacesOwned_every?: InputMaybe<SpaceWhereInput>;
  spacesOwned_none?: InputMaybe<SpaceWhereInput>;
  spacesOwned_some?: InputMaybe<SpaceWhereInput>;
  updatedAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTime_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAtTime_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAtTime_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ActivitiesConnection = {
  __typename?: 'ActivitiesConnection';
  edges: Array<ActivityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Activity = {
  __typename?: 'Activity';
  account: Account;
  aggCount: Scalars['BigInt'];
  aggregated?: Maybe<Scalars['Boolean']>;
  blockNumber: Scalars['BigInt'];
  date: Scalars['DateTime'];
  event: EventName;
  eventIndex: Scalars['Int'];
  followingAccount?: Maybe<Account>;
  id: Scalars['String'];
  post?: Maybe<Post>;
  reaction?: Maybe<Reaction>;
  space?: Maybe<Space>;
  spacePrev?: Maybe<Space>;
};

export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  cursor: Scalars['String'];
  node: Activity;
};

export enum ActivityOrderByInput {
  AccountFollowersCountAsc = 'account_followersCount_ASC',
  AccountFollowersCountDesc = 'account_followersCount_DESC',
  AccountFollowingAccountsCountAsc = 'account_followingAccountsCount_ASC',
  AccountFollowingAccountsCountDesc = 'account_followingAccountsCount_DESC',
  AccountFollowingPostsCountAsc = 'account_followingPostsCount_ASC',
  AccountFollowingPostsCountDesc = 'account_followingPostsCount_DESC',
  AccountFollowingSpacesCountAsc = 'account_followingSpacesCount_ASC',
  AccountFollowingSpacesCountDesc = 'account_followingSpacesCount_DESC',
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountUpdatedAtBlockAsc = 'account_updatedAtBlock_ASC',
  AccountUpdatedAtBlockDesc = 'account_updatedAtBlock_DESC',
  AccountUpdatedAtTimeAsc = 'account_updatedAtTime_ASC',
  AccountUpdatedAtTimeDesc = 'account_updatedAtTime_DESC',
  AggCountAsc = 'aggCount_ASC',
  AggCountDesc = 'aggCount_DESC',
  AggregatedAsc = 'aggregated_ASC',
  AggregatedDesc = 'aggregated_DESC',
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  EventIndexAsc = 'eventIndex_ASC',
  EventIndexDesc = 'eventIndex_DESC',
  EventAsc = 'event_ASC',
  EventDesc = 'event_DESC',
  FollowingAccountFollowersCountAsc = 'followingAccount_followersCount_ASC',
  FollowingAccountFollowersCountDesc = 'followingAccount_followersCount_DESC',
  FollowingAccountFollowingAccountsCountAsc = 'followingAccount_followingAccountsCount_ASC',
  FollowingAccountFollowingAccountsCountDesc = 'followingAccount_followingAccountsCount_DESC',
  FollowingAccountFollowingPostsCountAsc = 'followingAccount_followingPostsCount_ASC',
  FollowingAccountFollowingPostsCountDesc = 'followingAccount_followingPostsCount_DESC',
  FollowingAccountFollowingSpacesCountAsc = 'followingAccount_followingSpacesCount_ASC',
  FollowingAccountFollowingSpacesCountDesc = 'followingAccount_followingSpacesCount_DESC',
  FollowingAccountIdAsc = 'followingAccount_id_ASC',
  FollowingAccountIdDesc = 'followingAccount_id_DESC',
  FollowingAccountUpdatedAtBlockAsc = 'followingAccount_updatedAtBlock_ASC',
  FollowingAccountUpdatedAtBlockDesc = 'followingAccount_updatedAtBlock_DESC',
  FollowingAccountUpdatedAtTimeAsc = 'followingAccount_updatedAtTime_ASC',
  FollowingAccountUpdatedAtTimeDesc = 'followingAccount_updatedAtTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PostBodyAsc = 'post_body_ASC',
  PostBodyDesc = 'post_body_DESC',
  PostCanonicalAsc = 'post_canonical_ASC',
  PostCanonicalDesc = 'post_canonical_DESC',
  PostContentAsc = 'post_content_ASC',
  PostContentDesc = 'post_content_DESC',
  PostCreatedAtBlockAsc = 'post_createdAtBlock_ASC',
  PostCreatedAtBlockDesc = 'post_createdAtBlock_DESC',
  PostCreatedAtTimeAsc = 'post_createdAtTime_ASC',
  PostCreatedAtTimeDesc = 'post_createdAtTime_DESC',
  PostCreatedOnDayAsc = 'post_createdOnDay_ASC',
  PostCreatedOnDayDesc = 'post_createdOnDay_DESC',
  PostDownvotesCountAsc = 'post_downvotesCount_ASC',
  PostDownvotesCountDesc = 'post_downvotesCount_DESC',
  PostFollowersCountAsc = 'post_followersCount_ASC',
  PostFollowersCountDesc = 'post_followersCount_DESC',
  PostFormatAsc = 'post_format_ASC',
  PostFormatDesc = 'post_format_DESC',
  PostHiddenRepliesCountAsc = 'post_hiddenRepliesCount_ASC',
  PostHiddenRepliesCountDesc = 'post_hiddenRepliesCount_DESC',
  PostHiddenAsc = 'post_hidden_ASC',
  PostHiddenDesc = 'post_hidden_DESC',
  PostIdAsc = 'post_id_ASC',
  PostIdDesc = 'post_id_DESC',
  PostImageAsc = 'post_image_ASC',
  PostImageDesc = 'post_image_DESC',
  PostIsCommentAsc = 'post_isComment_ASC',
  PostIsCommentDesc = 'post_isComment_DESC',
  PostKindAsc = 'post_kind_ASC',
  PostKindDesc = 'post_kind_DESC',
  PostLinkAsc = 'post_link_ASC',
  PostLinkDesc = 'post_link_DESC',
  PostMetaAsc = 'post_meta_ASC',
  PostMetaDesc = 'post_meta_DESC',
  PostProposalIndexAsc = 'post_proposalIndex_ASC',
  PostProposalIndexDesc = 'post_proposalIndex_DESC',
  PostPublicRepliesCountAsc = 'post_publicRepliesCount_ASC',
  PostPublicRepliesCountDesc = 'post_publicRepliesCount_DESC',
  PostReactionsCountAsc = 'post_reactionsCount_ASC',
  PostReactionsCountDesc = 'post_reactionsCount_DESC',
  PostRepliesCountAsc = 'post_repliesCount_ASC',
  PostRepliesCountDesc = 'post_repliesCount_DESC',
  PostSharesCountAsc = 'post_sharesCount_ASC',
  PostSharesCountDesc = 'post_sharesCount_DESC',
  PostSlugAsc = 'post_slug_ASC',
  PostSlugDesc = 'post_slug_DESC',
  PostSummaryAsc = 'post_summary_ASC',
  PostSummaryDesc = 'post_summary_DESC',
  PostTagsOriginalAsc = 'post_tagsOriginal_ASC',
  PostTagsOriginalDesc = 'post_tagsOriginal_DESC',
  PostTitleAsc = 'post_title_ASC',
  PostTitleDesc = 'post_title_DESC',
  PostUpdatedAtTimeAsc = 'post_updatedAtTime_ASC',
  PostUpdatedAtTimeDesc = 'post_updatedAtTime_DESC',
  PostUpvotesCountAsc = 'post_upvotesCount_ASC',
  PostUpvotesCountDesc = 'post_upvotesCount_DESC',
  ReactionCreatedAtBlockAsc = 'reaction_createdAtBlock_ASC',
  ReactionCreatedAtBlockDesc = 'reaction_createdAtBlock_DESC',
  ReactionCreatedAtTimeAsc = 'reaction_createdAtTime_ASC',
  ReactionCreatedAtTimeDesc = 'reaction_createdAtTime_DESC',
  ReactionIdAsc = 'reaction_id_ASC',
  ReactionIdDesc = 'reaction_id_DESC',
  ReactionKindAsc = 'reaction_kind_ASC',
  ReactionKindDesc = 'reaction_kind_DESC',
  ReactionStatusAsc = 'reaction_status_ASC',
  ReactionStatusDesc = 'reaction_status_DESC',
  ReactionUpdatedAtBlockAsc = 'reaction_updatedAtBlock_ASC',
  ReactionUpdatedAtBlockDesc = 'reaction_updatedAtBlock_DESC',
  ReactionUpdatedAtTimeAsc = 'reaction_updatedAtTime_ASC',
  ReactionUpdatedAtTimeDesc = 'reaction_updatedAtTime_DESC',
  SpacePrevAboutAsc = 'spacePrev_about_ASC',
  SpacePrevAboutDesc = 'spacePrev_about_DESC',
  SpacePrevCanEveryoneCreatePostsAsc = 'spacePrev_canEveryoneCreatePosts_ASC',
  SpacePrevCanEveryoneCreatePostsDesc = 'spacePrev_canEveryoneCreatePosts_DESC',
  SpacePrevCanFollowerCreatePostsAsc = 'spacePrev_canFollowerCreatePosts_ASC',
  SpacePrevCanFollowerCreatePostsDesc = 'spacePrev_canFollowerCreatePosts_DESC',
  SpacePrevContentAsc = 'spacePrev_content_ASC',
  SpacePrevContentDesc = 'spacePrev_content_DESC',
  SpacePrevCreatedAtBlockAsc = 'spacePrev_createdAtBlock_ASC',
  SpacePrevCreatedAtBlockDesc = 'spacePrev_createdAtBlock_DESC',
  SpacePrevCreatedAtTimeAsc = 'spacePrev_createdAtTime_ASC',
  SpacePrevCreatedAtTimeDesc = 'spacePrev_createdAtTime_DESC',
  SpacePrevCreatedOnDayAsc = 'spacePrev_createdOnDay_ASC',
  SpacePrevCreatedOnDayDesc = 'spacePrev_createdOnDay_DESC',
  SpacePrevEmailAsc = 'spacePrev_email_ASC',
  SpacePrevEmailDesc = 'spacePrev_email_DESC',
  SpacePrevFollowersCountAsc = 'spacePrev_followersCount_ASC',
  SpacePrevFollowersCountDesc = 'spacePrev_followersCount_DESC',
  SpacePrevFormatAsc = 'spacePrev_format_ASC',
  SpacePrevFormatDesc = 'spacePrev_format_DESC',
  SpacePrevHiddenPostsCountAsc = 'spacePrev_hiddenPostsCount_ASC',
  SpacePrevHiddenPostsCountDesc = 'spacePrev_hiddenPostsCount_DESC',
  SpacePrevHiddenAsc = 'spacePrev_hidden_ASC',
  SpacePrevHiddenDesc = 'spacePrev_hidden_DESC',
  SpacePrevIdAsc = 'spacePrev_id_ASC',
  SpacePrevIdDesc = 'spacePrev_id_DESC',
  SpacePrevImageAsc = 'spacePrev_image_ASC',
  SpacePrevImageDesc = 'spacePrev_image_DESC',
  SpacePrevLinksOriginalAsc = 'spacePrev_linksOriginal_ASC',
  SpacePrevLinksOriginalDesc = 'spacePrev_linksOriginal_DESC',
  SpacePrevNameAsc = 'spacePrev_name_ASC',
  SpacePrevNameDesc = 'spacePrev_name_DESC',
  SpacePrevPostsCountAsc = 'spacePrev_postsCount_ASC',
  SpacePrevPostsCountDesc = 'spacePrev_postsCount_DESC',
  SpacePrevPublicPostsCountAsc = 'spacePrev_publicPostsCount_ASC',
  SpacePrevPublicPostsCountDesc = 'spacePrev_publicPostsCount_DESC',
  SpacePrevSummaryAsc = 'spacePrev_summary_ASC',
  SpacePrevSummaryDesc = 'spacePrev_summary_DESC',
  SpacePrevTagsOriginalAsc = 'spacePrev_tagsOriginal_ASC',
  SpacePrevTagsOriginalDesc = 'spacePrev_tagsOriginal_DESC',
  SpacePrevUpdatedAtBlockAsc = 'spacePrev_updatedAtBlock_ASC',
  SpacePrevUpdatedAtBlockDesc = 'spacePrev_updatedAtBlock_DESC',
  SpacePrevUpdatedAtTimeAsc = 'spacePrev_updatedAtTime_ASC',
  SpacePrevUpdatedAtTimeDesc = 'spacePrev_updatedAtTime_DESC',
  SpaceAboutAsc = 'space_about_ASC',
  SpaceAboutDesc = 'space_about_DESC',
  SpaceCanEveryoneCreatePostsAsc = 'space_canEveryoneCreatePosts_ASC',
  SpaceCanEveryoneCreatePostsDesc = 'space_canEveryoneCreatePosts_DESC',
  SpaceCanFollowerCreatePostsAsc = 'space_canFollowerCreatePosts_ASC',
  SpaceCanFollowerCreatePostsDesc = 'space_canFollowerCreatePosts_DESC',
  SpaceContentAsc = 'space_content_ASC',
  SpaceContentDesc = 'space_content_DESC',
  SpaceCreatedAtBlockAsc = 'space_createdAtBlock_ASC',
  SpaceCreatedAtBlockDesc = 'space_createdAtBlock_DESC',
  SpaceCreatedAtTimeAsc = 'space_createdAtTime_ASC',
  SpaceCreatedAtTimeDesc = 'space_createdAtTime_DESC',
  SpaceCreatedOnDayAsc = 'space_createdOnDay_ASC',
  SpaceCreatedOnDayDesc = 'space_createdOnDay_DESC',
  SpaceEmailAsc = 'space_email_ASC',
  SpaceEmailDesc = 'space_email_DESC',
  SpaceFollowersCountAsc = 'space_followersCount_ASC',
  SpaceFollowersCountDesc = 'space_followersCount_DESC',
  SpaceFormatAsc = 'space_format_ASC',
  SpaceFormatDesc = 'space_format_DESC',
  SpaceHiddenPostsCountAsc = 'space_hiddenPostsCount_ASC',
  SpaceHiddenPostsCountDesc = 'space_hiddenPostsCount_DESC',
  SpaceHiddenAsc = 'space_hidden_ASC',
  SpaceHiddenDesc = 'space_hidden_DESC',
  SpaceIdAsc = 'space_id_ASC',
  SpaceIdDesc = 'space_id_DESC',
  SpaceImageAsc = 'space_image_ASC',
  SpaceImageDesc = 'space_image_DESC',
  SpaceLinksOriginalAsc = 'space_linksOriginal_ASC',
  SpaceLinksOriginalDesc = 'space_linksOriginal_DESC',
  SpaceNameAsc = 'space_name_ASC',
  SpaceNameDesc = 'space_name_DESC',
  SpacePostsCountAsc = 'space_postsCount_ASC',
  SpacePostsCountDesc = 'space_postsCount_DESC',
  SpacePublicPostsCountAsc = 'space_publicPostsCount_ASC',
  SpacePublicPostsCountDesc = 'space_publicPostsCount_DESC',
  SpaceSummaryAsc = 'space_summary_ASC',
  SpaceSummaryDesc = 'space_summary_DESC',
  SpaceTagsOriginalAsc = 'space_tagsOriginal_ASC',
  SpaceTagsOriginalDesc = 'space_tagsOriginal_DESC',
  SpaceUpdatedAtBlockAsc = 'space_updatedAtBlock_ASC',
  SpaceUpdatedAtBlockDesc = 'space_updatedAtBlock_DESC',
  SpaceUpdatedAtTimeAsc = 'space_updatedAtTime_ASC',
  SpaceUpdatedAtTimeDesc = 'space_updatedAtTime_DESC'
}

export type ActivityWhereInput = {
  AND?: InputMaybe<Array<ActivityWhereInput>>;
  OR?: InputMaybe<Array<ActivityWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']>;
  aggCount_eq?: InputMaybe<Scalars['BigInt']>;
  aggCount_gt?: InputMaybe<Scalars['BigInt']>;
  aggCount_gte?: InputMaybe<Scalars['BigInt']>;
  aggCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aggCount_isNull?: InputMaybe<Scalars['Boolean']>;
  aggCount_lt?: InputMaybe<Scalars['BigInt']>;
  aggCount_lte?: InputMaybe<Scalars['BigInt']>;
  aggCount_not_eq?: InputMaybe<Scalars['BigInt']>;
  aggCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  aggregated_eq?: InputMaybe<Scalars['Boolean']>;
  aggregated_isNull?: InputMaybe<Scalars['Boolean']>;
  aggregated_not_eq?: InputMaybe<Scalars['Boolean']>;
  blockNumber_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_eq?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_eq?: InputMaybe<Scalars['DateTime']>;
  date_gt?: InputMaybe<Scalars['DateTime']>;
  date_gte?: InputMaybe<Scalars['DateTime']>;
  date_in?: InputMaybe<Array<Scalars['DateTime']>>;
  date_isNull?: InputMaybe<Scalars['Boolean']>;
  date_lt?: InputMaybe<Scalars['DateTime']>;
  date_lte?: InputMaybe<Scalars['DateTime']>;
  date_not_eq?: InputMaybe<Scalars['DateTime']>;
  date_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  eventIndex_eq?: InputMaybe<Scalars['Int']>;
  eventIndex_gt?: InputMaybe<Scalars['Int']>;
  eventIndex_gte?: InputMaybe<Scalars['Int']>;
  eventIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  eventIndex_isNull?: InputMaybe<Scalars['Boolean']>;
  eventIndex_lt?: InputMaybe<Scalars['Int']>;
  eventIndex_lte?: InputMaybe<Scalars['Int']>;
  eventIndex_not_eq?: InputMaybe<Scalars['Int']>;
  eventIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  event_eq?: InputMaybe<EventName>;
  event_in?: InputMaybe<Array<EventName>>;
  event_isNull?: InputMaybe<Scalars['Boolean']>;
  event_not_eq?: InputMaybe<EventName>;
  event_not_in?: InputMaybe<Array<EventName>>;
  followingAccount?: InputMaybe<AccountWhereInput>;
  followingAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  post?: InputMaybe<PostWhereInput>;
  post_isNull?: InputMaybe<Scalars['Boolean']>;
  reaction?: InputMaybe<ReactionWhereInput>;
  reaction_isNull?: InputMaybe<Scalars['Boolean']>;
  space?: InputMaybe<SpaceWhereInput>;
  spacePrev?: InputMaybe<SpaceWhereInput>;
  spacePrev_isNull?: InputMaybe<Scalars['Boolean']>;
  space_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type CommentFollowers = {
  __typename?: 'CommentFollowers';
  followerAccount: Account;
  followingComment: Post;
  id: Scalars['String'];
};

export type CommentFollowersConnection = {
  __typename?: 'CommentFollowersConnection';
  edges: Array<CommentFollowersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentFollowersEdge = {
  __typename?: 'CommentFollowersEdge';
  cursor: Scalars['String'];
  node: CommentFollowers;
};

export enum CommentFollowersOrderByInput {
  FollowerAccountFollowersCountAsc = 'followerAccount_followersCount_ASC',
  FollowerAccountFollowersCountDesc = 'followerAccount_followersCount_DESC',
  FollowerAccountFollowingAccountsCountAsc = 'followerAccount_followingAccountsCount_ASC',
  FollowerAccountFollowingAccountsCountDesc = 'followerAccount_followingAccountsCount_DESC',
  FollowerAccountFollowingPostsCountAsc = 'followerAccount_followingPostsCount_ASC',
  FollowerAccountFollowingPostsCountDesc = 'followerAccount_followingPostsCount_DESC',
  FollowerAccountFollowingSpacesCountAsc = 'followerAccount_followingSpacesCount_ASC',
  FollowerAccountFollowingSpacesCountDesc = 'followerAccount_followingSpacesCount_DESC',
  FollowerAccountIdAsc = 'followerAccount_id_ASC',
  FollowerAccountIdDesc = 'followerAccount_id_DESC',
  FollowerAccountUpdatedAtBlockAsc = 'followerAccount_updatedAtBlock_ASC',
  FollowerAccountUpdatedAtBlockDesc = 'followerAccount_updatedAtBlock_DESC',
  FollowerAccountUpdatedAtTimeAsc = 'followerAccount_updatedAtTime_ASC',
  FollowerAccountUpdatedAtTimeDesc = 'followerAccount_updatedAtTime_DESC',
  FollowingCommentBodyAsc = 'followingComment_body_ASC',
  FollowingCommentBodyDesc = 'followingComment_body_DESC',
  FollowingCommentCanonicalAsc = 'followingComment_canonical_ASC',
  FollowingCommentCanonicalDesc = 'followingComment_canonical_DESC',
  FollowingCommentContentAsc = 'followingComment_content_ASC',
  FollowingCommentContentDesc = 'followingComment_content_DESC',
  FollowingCommentCreatedAtBlockAsc = 'followingComment_createdAtBlock_ASC',
  FollowingCommentCreatedAtBlockDesc = 'followingComment_createdAtBlock_DESC',
  FollowingCommentCreatedAtTimeAsc = 'followingComment_createdAtTime_ASC',
  FollowingCommentCreatedAtTimeDesc = 'followingComment_createdAtTime_DESC',
  FollowingCommentCreatedOnDayAsc = 'followingComment_createdOnDay_ASC',
  FollowingCommentCreatedOnDayDesc = 'followingComment_createdOnDay_DESC',
  FollowingCommentDownvotesCountAsc = 'followingComment_downvotesCount_ASC',
  FollowingCommentDownvotesCountDesc = 'followingComment_downvotesCount_DESC',
  FollowingCommentFollowersCountAsc = 'followingComment_followersCount_ASC',
  FollowingCommentFollowersCountDesc = 'followingComment_followersCount_DESC',
  FollowingCommentFormatAsc = 'followingComment_format_ASC',
  FollowingCommentFormatDesc = 'followingComment_format_DESC',
  FollowingCommentHiddenRepliesCountAsc = 'followingComment_hiddenRepliesCount_ASC',
  FollowingCommentHiddenRepliesCountDesc = 'followingComment_hiddenRepliesCount_DESC',
  FollowingCommentHiddenAsc = 'followingComment_hidden_ASC',
  FollowingCommentHiddenDesc = 'followingComment_hidden_DESC',
  FollowingCommentIdAsc = 'followingComment_id_ASC',
  FollowingCommentIdDesc = 'followingComment_id_DESC',
  FollowingCommentImageAsc = 'followingComment_image_ASC',
  FollowingCommentImageDesc = 'followingComment_image_DESC',
  FollowingCommentIsCommentAsc = 'followingComment_isComment_ASC',
  FollowingCommentIsCommentDesc = 'followingComment_isComment_DESC',
  FollowingCommentKindAsc = 'followingComment_kind_ASC',
  FollowingCommentKindDesc = 'followingComment_kind_DESC',
  FollowingCommentLinkAsc = 'followingComment_link_ASC',
  FollowingCommentLinkDesc = 'followingComment_link_DESC',
  FollowingCommentMetaAsc = 'followingComment_meta_ASC',
  FollowingCommentMetaDesc = 'followingComment_meta_DESC',
  FollowingCommentProposalIndexAsc = 'followingComment_proposalIndex_ASC',
  FollowingCommentProposalIndexDesc = 'followingComment_proposalIndex_DESC',
  FollowingCommentPublicRepliesCountAsc = 'followingComment_publicRepliesCount_ASC',
  FollowingCommentPublicRepliesCountDesc = 'followingComment_publicRepliesCount_DESC',
  FollowingCommentReactionsCountAsc = 'followingComment_reactionsCount_ASC',
  FollowingCommentReactionsCountDesc = 'followingComment_reactionsCount_DESC',
  FollowingCommentRepliesCountAsc = 'followingComment_repliesCount_ASC',
  FollowingCommentRepliesCountDesc = 'followingComment_repliesCount_DESC',
  FollowingCommentSharesCountAsc = 'followingComment_sharesCount_ASC',
  FollowingCommentSharesCountDesc = 'followingComment_sharesCount_DESC',
  FollowingCommentSlugAsc = 'followingComment_slug_ASC',
  FollowingCommentSlugDesc = 'followingComment_slug_DESC',
  FollowingCommentSummaryAsc = 'followingComment_summary_ASC',
  FollowingCommentSummaryDesc = 'followingComment_summary_DESC',
  FollowingCommentTagsOriginalAsc = 'followingComment_tagsOriginal_ASC',
  FollowingCommentTagsOriginalDesc = 'followingComment_tagsOriginal_DESC',
  FollowingCommentTitleAsc = 'followingComment_title_ASC',
  FollowingCommentTitleDesc = 'followingComment_title_DESC',
  FollowingCommentUpdatedAtTimeAsc = 'followingComment_updatedAtTime_ASC',
  FollowingCommentUpdatedAtTimeDesc = 'followingComment_updatedAtTime_DESC',
  FollowingCommentUpvotesCountAsc = 'followingComment_upvotesCount_ASC',
  FollowingCommentUpvotesCountDesc = 'followingComment_upvotesCount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CommentFollowersWhereInput = {
  AND?: InputMaybe<Array<CommentFollowersWhereInput>>;
  OR?: InputMaybe<Array<CommentFollowersWhereInput>>;
  followerAccount?: InputMaybe<AccountWhereInput>;
  followerAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  followingComment?: InputMaybe<PostWhereInput>;
  followingComment_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
};

export enum EventName {
  AccountFollowed = 'AccountFollowed',
  AccountUnfollowed = 'AccountUnfollowed',
  CommentCreated = 'CommentCreated',
  CommentDeleted = 'CommentDeleted',
  CommentReactionCreated = 'CommentReactionCreated',
  CommentReactionDeleted = 'CommentReactionDeleted',
  CommentReactionUpdated = 'CommentReactionUpdated',
  CommentReplyCreated = 'CommentReplyCreated',
  CommentReplyDeleted = 'CommentReplyDeleted',
  CommentReplyReactionCreated = 'CommentReplyReactionCreated',
  CommentReplyReactionDeleted = 'CommentReplyReactionDeleted',
  CommentReplyReactionUpdated = 'CommentReplyReactionUpdated',
  CommentReplyShared = 'CommentReplyShared',
  CommentReplyUpdated = 'CommentReplyUpdated',
  CommentShared = 'CommentShared',
  CommentUpdated = 'CommentUpdated',
  PostCreated = 'PostCreated',
  PostDeleted = 'PostDeleted',
  PostMoved = 'PostMoved',
  PostReactionCreated = 'PostReactionCreated',
  PostReactionDeleted = 'PostReactionDeleted',
  PostReactionUpdated = 'PostReactionUpdated',
  PostShared = 'PostShared',
  PostUpdated = 'PostUpdated',
  ProfileUpdated = 'ProfileUpdated',
  SpaceCreated = 'SpaceCreated',
  SpaceFollowed = 'SpaceFollowed',
  SpaceUnfollowed = 'SpaceUnfollowed',
  SpaceUpdated = 'SpaceUpdated'
}

export type NewsFeed = {
  __typename?: 'NewsFeed';
  account: Account;
  activity: Activity;
  id: Scalars['String'];
};

export type NewsFeedEdge = {
  __typename?: 'NewsFeedEdge';
  cursor: Scalars['String'];
  node: NewsFeed;
};

export enum NewsFeedOrderByInput {
  AccountFollowersCountAsc = 'account_followersCount_ASC',
  AccountFollowersCountDesc = 'account_followersCount_DESC',
  AccountFollowingAccountsCountAsc = 'account_followingAccountsCount_ASC',
  AccountFollowingAccountsCountDesc = 'account_followingAccountsCount_DESC',
  AccountFollowingPostsCountAsc = 'account_followingPostsCount_ASC',
  AccountFollowingPostsCountDesc = 'account_followingPostsCount_DESC',
  AccountFollowingSpacesCountAsc = 'account_followingSpacesCount_ASC',
  AccountFollowingSpacesCountDesc = 'account_followingSpacesCount_DESC',
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountUpdatedAtBlockAsc = 'account_updatedAtBlock_ASC',
  AccountUpdatedAtBlockDesc = 'account_updatedAtBlock_DESC',
  AccountUpdatedAtTimeAsc = 'account_updatedAtTime_ASC',
  AccountUpdatedAtTimeDesc = 'account_updatedAtTime_DESC',
  ActivityAggCountAsc = 'activity_aggCount_ASC',
  ActivityAggCountDesc = 'activity_aggCount_DESC',
  ActivityAggregatedAsc = 'activity_aggregated_ASC',
  ActivityAggregatedDesc = 'activity_aggregated_DESC',
  ActivityBlockNumberAsc = 'activity_blockNumber_ASC',
  ActivityBlockNumberDesc = 'activity_blockNumber_DESC',
  ActivityDateAsc = 'activity_date_ASC',
  ActivityDateDesc = 'activity_date_DESC',
  ActivityEventIndexAsc = 'activity_eventIndex_ASC',
  ActivityEventIndexDesc = 'activity_eventIndex_DESC',
  ActivityEventAsc = 'activity_event_ASC',
  ActivityEventDesc = 'activity_event_DESC',
  ActivityIdAsc = 'activity_id_ASC',
  ActivityIdDesc = 'activity_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type NewsFeedWhereInput = {
  AND?: InputMaybe<Array<NewsFeedWhereInput>>;
  OR?: InputMaybe<Array<NewsFeedWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']>;
  activity?: InputMaybe<ActivityWhereInput>;
  activity_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
};

export type NewsFeedsConnection = {
  __typename?: 'NewsFeedsConnection';
  edges: Array<NewsFeedEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Notification = {
  __typename?: 'Notification';
  account: Account;
  activity: Activity;
  id: Scalars['String'];
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  cursor: Scalars['String'];
  node: Notification;
};

export enum NotificationOrderByInput {
  AccountFollowersCountAsc = 'account_followersCount_ASC',
  AccountFollowersCountDesc = 'account_followersCount_DESC',
  AccountFollowingAccountsCountAsc = 'account_followingAccountsCount_ASC',
  AccountFollowingAccountsCountDesc = 'account_followingAccountsCount_DESC',
  AccountFollowingPostsCountAsc = 'account_followingPostsCount_ASC',
  AccountFollowingPostsCountDesc = 'account_followingPostsCount_DESC',
  AccountFollowingSpacesCountAsc = 'account_followingSpacesCount_ASC',
  AccountFollowingSpacesCountDesc = 'account_followingSpacesCount_DESC',
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountUpdatedAtBlockAsc = 'account_updatedAtBlock_ASC',
  AccountUpdatedAtBlockDesc = 'account_updatedAtBlock_DESC',
  AccountUpdatedAtTimeAsc = 'account_updatedAtTime_ASC',
  AccountUpdatedAtTimeDesc = 'account_updatedAtTime_DESC',
  ActivityAggCountAsc = 'activity_aggCount_ASC',
  ActivityAggCountDesc = 'activity_aggCount_DESC',
  ActivityAggregatedAsc = 'activity_aggregated_ASC',
  ActivityAggregatedDesc = 'activity_aggregated_DESC',
  ActivityBlockNumberAsc = 'activity_blockNumber_ASC',
  ActivityBlockNumberDesc = 'activity_blockNumber_DESC',
  ActivityDateAsc = 'activity_date_ASC',
  ActivityDateDesc = 'activity_date_DESC',
  ActivityEventIndexAsc = 'activity_eventIndex_ASC',
  ActivityEventIndexDesc = 'activity_eventIndex_DESC',
  ActivityEventAsc = 'activity_event_ASC',
  ActivityEventDesc = 'activity_event_DESC',
  ActivityIdAsc = 'activity_id_ASC',
  ActivityIdDesc = 'activity_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']>;
  activity?: InputMaybe<ActivityWhereInput>;
  activity_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
};

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  edges: Array<NotificationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  canonical?: Maybe<Scalars['String']>;
  commentFollowers: Array<CommentFollowers>;
  content?: Maybe<Scalars['String']>;
  createdAtBlock?: Maybe<Scalars['BigInt']>;
  createdAtTime?: Maybe<Scalars['DateTime']>;
  createdByAccount: Account;
  createdOnDay?: Maybe<Scalars['DateTime']>;
  downvotesCount: Scalars['Int'];
  followersCount: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
  hidden: Scalars['Boolean'];
  hiddenRepliesCount: Scalars['Int'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  isComment: Scalars['Boolean'];
  kind?: Maybe<PostKind>;
  link?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['String']>;
  ownedByAccount: Account;
  parentPost?: Maybe<Post>;
  postFollowers: Array<PostFollowers>;
  proposalIndex?: Maybe<Scalars['Int']>;
  publicRepliesCount: Scalars['Int'];
  reactions: Array<Reaction>;
  reactionsCount: Scalars['Int'];
  repliesCount: Scalars['Int'];
  rootPost?: Maybe<Post>;
  sharedPost?: Maybe<Post>;
  sharesCount: Scalars['Int'];
  slug?: Maybe<Scalars['String']>;
  space?: Maybe<Space>;
  summary?: Maybe<Scalars['String']>;
  tagsOriginal?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAtTime?: Maybe<Scalars['DateTime']>;
  upvotesCount: Scalars['Int'];
};


export type PostCommentFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentFollowersOrderByInput>>;
  where?: InputMaybe<CommentFollowersWhereInput>;
};


export type PostPostFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostFollowersOrderByInput>>;
  where?: InputMaybe<PostFollowersWhereInput>;
};


export type PostReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReactionOrderByInput>>;
  where?: InputMaybe<ReactionWhereInput>;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String'];
  node: Post;
};

export type PostFollowers = {
  __typename?: 'PostFollowers';
  followerAccount: Account;
  followingPost: Post;
  id: Scalars['String'];
};

export type PostFollowersConnection = {
  __typename?: 'PostFollowersConnection';
  edges: Array<PostFollowersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PostFollowersEdge = {
  __typename?: 'PostFollowersEdge';
  cursor: Scalars['String'];
  node: PostFollowers;
};

export enum PostFollowersOrderByInput {
  FollowerAccountFollowersCountAsc = 'followerAccount_followersCount_ASC',
  FollowerAccountFollowersCountDesc = 'followerAccount_followersCount_DESC',
  FollowerAccountFollowingAccountsCountAsc = 'followerAccount_followingAccountsCount_ASC',
  FollowerAccountFollowingAccountsCountDesc = 'followerAccount_followingAccountsCount_DESC',
  FollowerAccountFollowingPostsCountAsc = 'followerAccount_followingPostsCount_ASC',
  FollowerAccountFollowingPostsCountDesc = 'followerAccount_followingPostsCount_DESC',
  FollowerAccountFollowingSpacesCountAsc = 'followerAccount_followingSpacesCount_ASC',
  FollowerAccountFollowingSpacesCountDesc = 'followerAccount_followingSpacesCount_DESC',
  FollowerAccountIdAsc = 'followerAccount_id_ASC',
  FollowerAccountIdDesc = 'followerAccount_id_DESC',
  FollowerAccountUpdatedAtBlockAsc = 'followerAccount_updatedAtBlock_ASC',
  FollowerAccountUpdatedAtBlockDesc = 'followerAccount_updatedAtBlock_DESC',
  FollowerAccountUpdatedAtTimeAsc = 'followerAccount_updatedAtTime_ASC',
  FollowerAccountUpdatedAtTimeDesc = 'followerAccount_updatedAtTime_DESC',
  FollowingPostBodyAsc = 'followingPost_body_ASC',
  FollowingPostBodyDesc = 'followingPost_body_DESC',
  FollowingPostCanonicalAsc = 'followingPost_canonical_ASC',
  FollowingPostCanonicalDesc = 'followingPost_canonical_DESC',
  FollowingPostContentAsc = 'followingPost_content_ASC',
  FollowingPostContentDesc = 'followingPost_content_DESC',
  FollowingPostCreatedAtBlockAsc = 'followingPost_createdAtBlock_ASC',
  FollowingPostCreatedAtBlockDesc = 'followingPost_createdAtBlock_DESC',
  FollowingPostCreatedAtTimeAsc = 'followingPost_createdAtTime_ASC',
  FollowingPostCreatedAtTimeDesc = 'followingPost_createdAtTime_DESC',
  FollowingPostCreatedOnDayAsc = 'followingPost_createdOnDay_ASC',
  FollowingPostCreatedOnDayDesc = 'followingPost_createdOnDay_DESC',
  FollowingPostDownvotesCountAsc = 'followingPost_downvotesCount_ASC',
  FollowingPostDownvotesCountDesc = 'followingPost_downvotesCount_DESC',
  FollowingPostFollowersCountAsc = 'followingPost_followersCount_ASC',
  FollowingPostFollowersCountDesc = 'followingPost_followersCount_DESC',
  FollowingPostFormatAsc = 'followingPost_format_ASC',
  FollowingPostFormatDesc = 'followingPost_format_DESC',
  FollowingPostHiddenRepliesCountAsc = 'followingPost_hiddenRepliesCount_ASC',
  FollowingPostHiddenRepliesCountDesc = 'followingPost_hiddenRepliesCount_DESC',
  FollowingPostHiddenAsc = 'followingPost_hidden_ASC',
  FollowingPostHiddenDesc = 'followingPost_hidden_DESC',
  FollowingPostIdAsc = 'followingPost_id_ASC',
  FollowingPostIdDesc = 'followingPost_id_DESC',
  FollowingPostImageAsc = 'followingPost_image_ASC',
  FollowingPostImageDesc = 'followingPost_image_DESC',
  FollowingPostIsCommentAsc = 'followingPost_isComment_ASC',
  FollowingPostIsCommentDesc = 'followingPost_isComment_DESC',
  FollowingPostKindAsc = 'followingPost_kind_ASC',
  FollowingPostKindDesc = 'followingPost_kind_DESC',
  FollowingPostLinkAsc = 'followingPost_link_ASC',
  FollowingPostLinkDesc = 'followingPost_link_DESC',
  FollowingPostMetaAsc = 'followingPost_meta_ASC',
  FollowingPostMetaDesc = 'followingPost_meta_DESC',
  FollowingPostProposalIndexAsc = 'followingPost_proposalIndex_ASC',
  FollowingPostProposalIndexDesc = 'followingPost_proposalIndex_DESC',
  FollowingPostPublicRepliesCountAsc = 'followingPost_publicRepliesCount_ASC',
  FollowingPostPublicRepliesCountDesc = 'followingPost_publicRepliesCount_DESC',
  FollowingPostReactionsCountAsc = 'followingPost_reactionsCount_ASC',
  FollowingPostReactionsCountDesc = 'followingPost_reactionsCount_DESC',
  FollowingPostRepliesCountAsc = 'followingPost_repliesCount_ASC',
  FollowingPostRepliesCountDesc = 'followingPost_repliesCount_DESC',
  FollowingPostSharesCountAsc = 'followingPost_sharesCount_ASC',
  FollowingPostSharesCountDesc = 'followingPost_sharesCount_DESC',
  FollowingPostSlugAsc = 'followingPost_slug_ASC',
  FollowingPostSlugDesc = 'followingPost_slug_DESC',
  FollowingPostSummaryAsc = 'followingPost_summary_ASC',
  FollowingPostSummaryDesc = 'followingPost_summary_DESC',
  FollowingPostTagsOriginalAsc = 'followingPost_tagsOriginal_ASC',
  FollowingPostTagsOriginalDesc = 'followingPost_tagsOriginal_DESC',
  FollowingPostTitleAsc = 'followingPost_title_ASC',
  FollowingPostTitleDesc = 'followingPost_title_DESC',
  FollowingPostUpdatedAtTimeAsc = 'followingPost_updatedAtTime_ASC',
  FollowingPostUpdatedAtTimeDesc = 'followingPost_updatedAtTime_DESC',
  FollowingPostUpvotesCountAsc = 'followingPost_upvotesCount_ASC',
  FollowingPostUpvotesCountDesc = 'followingPost_upvotesCount_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type PostFollowersWhereInput = {
  AND?: InputMaybe<Array<PostFollowersWhereInput>>;
  OR?: InputMaybe<Array<PostFollowersWhereInput>>;
  followerAccount?: InputMaybe<AccountWhereInput>;
  followerAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  followingPost?: InputMaybe<PostWhereInput>;
  followingPost_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
};

export enum PostKind {
  Comment = 'Comment',
  RegularPost = 'RegularPost',
  SharedPost = 'SharedPost'
}

export enum PostOrderByInput {
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC',
  CanonicalAsc = 'canonical_ASC',
  CanonicalDesc = 'canonical_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtBlockAsc = 'createdAtBlock_ASC',
  CreatedAtBlockDesc = 'createdAtBlock_DESC',
  CreatedAtTimeAsc = 'createdAtTime_ASC',
  CreatedAtTimeDesc = 'createdAtTime_DESC',
  CreatedByAccountFollowersCountAsc = 'createdByAccount_followersCount_ASC',
  CreatedByAccountFollowersCountDesc = 'createdByAccount_followersCount_DESC',
  CreatedByAccountFollowingAccountsCountAsc = 'createdByAccount_followingAccountsCount_ASC',
  CreatedByAccountFollowingAccountsCountDesc = 'createdByAccount_followingAccountsCount_DESC',
  CreatedByAccountFollowingPostsCountAsc = 'createdByAccount_followingPostsCount_ASC',
  CreatedByAccountFollowingPostsCountDesc = 'createdByAccount_followingPostsCount_DESC',
  CreatedByAccountFollowingSpacesCountAsc = 'createdByAccount_followingSpacesCount_ASC',
  CreatedByAccountFollowingSpacesCountDesc = 'createdByAccount_followingSpacesCount_DESC',
  CreatedByAccountIdAsc = 'createdByAccount_id_ASC',
  CreatedByAccountIdDesc = 'createdByAccount_id_DESC',
  CreatedByAccountUpdatedAtBlockAsc = 'createdByAccount_updatedAtBlock_ASC',
  CreatedByAccountUpdatedAtBlockDesc = 'createdByAccount_updatedAtBlock_DESC',
  CreatedByAccountUpdatedAtTimeAsc = 'createdByAccount_updatedAtTime_ASC',
  CreatedByAccountUpdatedAtTimeDesc = 'createdByAccount_updatedAtTime_DESC',
  CreatedOnDayAsc = 'createdOnDay_ASC',
  CreatedOnDayDesc = 'createdOnDay_DESC',
  DownvotesCountAsc = 'downvotesCount_ASC',
  DownvotesCountDesc = 'downvotesCount_DESC',
  FollowersCountAsc = 'followersCount_ASC',
  FollowersCountDesc = 'followersCount_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  HiddenRepliesCountAsc = 'hiddenRepliesCount_ASC',
  HiddenRepliesCountDesc = 'hiddenRepliesCount_DESC',
  HiddenAsc = 'hidden_ASC',
  HiddenDesc = 'hidden_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  IsCommentAsc = 'isComment_ASC',
  IsCommentDesc = 'isComment_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  OwnedByAccountFollowersCountAsc = 'ownedByAccount_followersCount_ASC',
  OwnedByAccountFollowersCountDesc = 'ownedByAccount_followersCount_DESC',
  OwnedByAccountFollowingAccountsCountAsc = 'ownedByAccount_followingAccountsCount_ASC',
  OwnedByAccountFollowingAccountsCountDesc = 'ownedByAccount_followingAccountsCount_DESC',
  OwnedByAccountFollowingPostsCountAsc = 'ownedByAccount_followingPostsCount_ASC',
  OwnedByAccountFollowingPostsCountDesc = 'ownedByAccount_followingPostsCount_DESC',
  OwnedByAccountFollowingSpacesCountAsc = 'ownedByAccount_followingSpacesCount_ASC',
  OwnedByAccountFollowingSpacesCountDesc = 'ownedByAccount_followingSpacesCount_DESC',
  OwnedByAccountIdAsc = 'ownedByAccount_id_ASC',
  OwnedByAccountIdDesc = 'ownedByAccount_id_DESC',
  OwnedByAccountUpdatedAtBlockAsc = 'ownedByAccount_updatedAtBlock_ASC',
  OwnedByAccountUpdatedAtBlockDesc = 'ownedByAccount_updatedAtBlock_DESC',
  OwnedByAccountUpdatedAtTimeAsc = 'ownedByAccount_updatedAtTime_ASC',
  OwnedByAccountUpdatedAtTimeDesc = 'ownedByAccount_updatedAtTime_DESC',
  ParentPostBodyAsc = 'parentPost_body_ASC',
  ParentPostBodyDesc = 'parentPost_body_DESC',
  ParentPostCanonicalAsc = 'parentPost_canonical_ASC',
  ParentPostCanonicalDesc = 'parentPost_canonical_DESC',
  ParentPostContentAsc = 'parentPost_content_ASC',
  ParentPostContentDesc = 'parentPost_content_DESC',
  ParentPostCreatedAtBlockAsc = 'parentPost_createdAtBlock_ASC',
  ParentPostCreatedAtBlockDesc = 'parentPost_createdAtBlock_DESC',
  ParentPostCreatedAtTimeAsc = 'parentPost_createdAtTime_ASC',
  ParentPostCreatedAtTimeDesc = 'parentPost_createdAtTime_DESC',
  ParentPostCreatedOnDayAsc = 'parentPost_createdOnDay_ASC',
  ParentPostCreatedOnDayDesc = 'parentPost_createdOnDay_DESC',
  ParentPostDownvotesCountAsc = 'parentPost_downvotesCount_ASC',
  ParentPostDownvotesCountDesc = 'parentPost_downvotesCount_DESC',
  ParentPostFollowersCountAsc = 'parentPost_followersCount_ASC',
  ParentPostFollowersCountDesc = 'parentPost_followersCount_DESC',
  ParentPostFormatAsc = 'parentPost_format_ASC',
  ParentPostFormatDesc = 'parentPost_format_DESC',
  ParentPostHiddenRepliesCountAsc = 'parentPost_hiddenRepliesCount_ASC',
  ParentPostHiddenRepliesCountDesc = 'parentPost_hiddenRepliesCount_DESC',
  ParentPostHiddenAsc = 'parentPost_hidden_ASC',
  ParentPostHiddenDesc = 'parentPost_hidden_DESC',
  ParentPostIdAsc = 'parentPost_id_ASC',
  ParentPostIdDesc = 'parentPost_id_DESC',
  ParentPostImageAsc = 'parentPost_image_ASC',
  ParentPostImageDesc = 'parentPost_image_DESC',
  ParentPostIsCommentAsc = 'parentPost_isComment_ASC',
  ParentPostIsCommentDesc = 'parentPost_isComment_DESC',
  ParentPostKindAsc = 'parentPost_kind_ASC',
  ParentPostKindDesc = 'parentPost_kind_DESC',
  ParentPostLinkAsc = 'parentPost_link_ASC',
  ParentPostLinkDesc = 'parentPost_link_DESC',
  ParentPostMetaAsc = 'parentPost_meta_ASC',
  ParentPostMetaDesc = 'parentPost_meta_DESC',
  ParentPostProposalIndexAsc = 'parentPost_proposalIndex_ASC',
  ParentPostProposalIndexDesc = 'parentPost_proposalIndex_DESC',
  ParentPostPublicRepliesCountAsc = 'parentPost_publicRepliesCount_ASC',
  ParentPostPublicRepliesCountDesc = 'parentPost_publicRepliesCount_DESC',
  ParentPostReactionsCountAsc = 'parentPost_reactionsCount_ASC',
  ParentPostReactionsCountDesc = 'parentPost_reactionsCount_DESC',
  ParentPostRepliesCountAsc = 'parentPost_repliesCount_ASC',
  ParentPostRepliesCountDesc = 'parentPost_repliesCount_DESC',
  ParentPostSharesCountAsc = 'parentPost_sharesCount_ASC',
  ParentPostSharesCountDesc = 'parentPost_sharesCount_DESC',
  ParentPostSlugAsc = 'parentPost_slug_ASC',
  ParentPostSlugDesc = 'parentPost_slug_DESC',
  ParentPostSummaryAsc = 'parentPost_summary_ASC',
  ParentPostSummaryDesc = 'parentPost_summary_DESC',
  ParentPostTagsOriginalAsc = 'parentPost_tagsOriginal_ASC',
  ParentPostTagsOriginalDesc = 'parentPost_tagsOriginal_DESC',
  ParentPostTitleAsc = 'parentPost_title_ASC',
  ParentPostTitleDesc = 'parentPost_title_DESC',
  ParentPostUpdatedAtTimeAsc = 'parentPost_updatedAtTime_ASC',
  ParentPostUpdatedAtTimeDesc = 'parentPost_updatedAtTime_DESC',
  ParentPostUpvotesCountAsc = 'parentPost_upvotesCount_ASC',
  ParentPostUpvotesCountDesc = 'parentPost_upvotesCount_DESC',
  ProposalIndexAsc = 'proposalIndex_ASC',
  ProposalIndexDesc = 'proposalIndex_DESC',
  PublicRepliesCountAsc = 'publicRepliesCount_ASC',
  PublicRepliesCountDesc = 'publicRepliesCount_DESC',
  ReactionsCountAsc = 'reactionsCount_ASC',
  ReactionsCountDesc = 'reactionsCount_DESC',
  RepliesCountAsc = 'repliesCount_ASC',
  RepliesCountDesc = 'repliesCount_DESC',
  RootPostBodyAsc = 'rootPost_body_ASC',
  RootPostBodyDesc = 'rootPost_body_DESC',
  RootPostCanonicalAsc = 'rootPost_canonical_ASC',
  RootPostCanonicalDesc = 'rootPost_canonical_DESC',
  RootPostContentAsc = 'rootPost_content_ASC',
  RootPostContentDesc = 'rootPost_content_DESC',
  RootPostCreatedAtBlockAsc = 'rootPost_createdAtBlock_ASC',
  RootPostCreatedAtBlockDesc = 'rootPost_createdAtBlock_DESC',
  RootPostCreatedAtTimeAsc = 'rootPost_createdAtTime_ASC',
  RootPostCreatedAtTimeDesc = 'rootPost_createdAtTime_DESC',
  RootPostCreatedOnDayAsc = 'rootPost_createdOnDay_ASC',
  RootPostCreatedOnDayDesc = 'rootPost_createdOnDay_DESC',
  RootPostDownvotesCountAsc = 'rootPost_downvotesCount_ASC',
  RootPostDownvotesCountDesc = 'rootPost_downvotesCount_DESC',
  RootPostFollowersCountAsc = 'rootPost_followersCount_ASC',
  RootPostFollowersCountDesc = 'rootPost_followersCount_DESC',
  RootPostFormatAsc = 'rootPost_format_ASC',
  RootPostFormatDesc = 'rootPost_format_DESC',
  RootPostHiddenRepliesCountAsc = 'rootPost_hiddenRepliesCount_ASC',
  RootPostHiddenRepliesCountDesc = 'rootPost_hiddenRepliesCount_DESC',
  RootPostHiddenAsc = 'rootPost_hidden_ASC',
  RootPostHiddenDesc = 'rootPost_hidden_DESC',
  RootPostIdAsc = 'rootPost_id_ASC',
  RootPostIdDesc = 'rootPost_id_DESC',
  RootPostImageAsc = 'rootPost_image_ASC',
  RootPostImageDesc = 'rootPost_image_DESC',
  RootPostIsCommentAsc = 'rootPost_isComment_ASC',
  RootPostIsCommentDesc = 'rootPost_isComment_DESC',
  RootPostKindAsc = 'rootPost_kind_ASC',
  RootPostKindDesc = 'rootPost_kind_DESC',
  RootPostLinkAsc = 'rootPost_link_ASC',
  RootPostLinkDesc = 'rootPost_link_DESC',
  RootPostMetaAsc = 'rootPost_meta_ASC',
  RootPostMetaDesc = 'rootPost_meta_DESC',
  RootPostProposalIndexAsc = 'rootPost_proposalIndex_ASC',
  RootPostProposalIndexDesc = 'rootPost_proposalIndex_DESC',
  RootPostPublicRepliesCountAsc = 'rootPost_publicRepliesCount_ASC',
  RootPostPublicRepliesCountDesc = 'rootPost_publicRepliesCount_DESC',
  RootPostReactionsCountAsc = 'rootPost_reactionsCount_ASC',
  RootPostReactionsCountDesc = 'rootPost_reactionsCount_DESC',
  RootPostRepliesCountAsc = 'rootPost_repliesCount_ASC',
  RootPostRepliesCountDesc = 'rootPost_repliesCount_DESC',
  RootPostSharesCountAsc = 'rootPost_sharesCount_ASC',
  RootPostSharesCountDesc = 'rootPost_sharesCount_DESC',
  RootPostSlugAsc = 'rootPost_slug_ASC',
  RootPostSlugDesc = 'rootPost_slug_DESC',
  RootPostSummaryAsc = 'rootPost_summary_ASC',
  RootPostSummaryDesc = 'rootPost_summary_DESC',
  RootPostTagsOriginalAsc = 'rootPost_tagsOriginal_ASC',
  RootPostTagsOriginalDesc = 'rootPost_tagsOriginal_DESC',
  RootPostTitleAsc = 'rootPost_title_ASC',
  RootPostTitleDesc = 'rootPost_title_DESC',
  RootPostUpdatedAtTimeAsc = 'rootPost_updatedAtTime_ASC',
  RootPostUpdatedAtTimeDesc = 'rootPost_updatedAtTime_DESC',
  RootPostUpvotesCountAsc = 'rootPost_upvotesCount_ASC',
  RootPostUpvotesCountDesc = 'rootPost_upvotesCount_DESC',
  SharedPostBodyAsc = 'sharedPost_body_ASC',
  SharedPostBodyDesc = 'sharedPost_body_DESC',
  SharedPostCanonicalAsc = 'sharedPost_canonical_ASC',
  SharedPostCanonicalDesc = 'sharedPost_canonical_DESC',
  SharedPostContentAsc = 'sharedPost_content_ASC',
  SharedPostContentDesc = 'sharedPost_content_DESC',
  SharedPostCreatedAtBlockAsc = 'sharedPost_createdAtBlock_ASC',
  SharedPostCreatedAtBlockDesc = 'sharedPost_createdAtBlock_DESC',
  SharedPostCreatedAtTimeAsc = 'sharedPost_createdAtTime_ASC',
  SharedPostCreatedAtTimeDesc = 'sharedPost_createdAtTime_DESC',
  SharedPostCreatedOnDayAsc = 'sharedPost_createdOnDay_ASC',
  SharedPostCreatedOnDayDesc = 'sharedPost_createdOnDay_DESC',
  SharedPostDownvotesCountAsc = 'sharedPost_downvotesCount_ASC',
  SharedPostDownvotesCountDesc = 'sharedPost_downvotesCount_DESC',
  SharedPostFollowersCountAsc = 'sharedPost_followersCount_ASC',
  SharedPostFollowersCountDesc = 'sharedPost_followersCount_DESC',
  SharedPostFormatAsc = 'sharedPost_format_ASC',
  SharedPostFormatDesc = 'sharedPost_format_DESC',
  SharedPostHiddenRepliesCountAsc = 'sharedPost_hiddenRepliesCount_ASC',
  SharedPostHiddenRepliesCountDesc = 'sharedPost_hiddenRepliesCount_DESC',
  SharedPostHiddenAsc = 'sharedPost_hidden_ASC',
  SharedPostHiddenDesc = 'sharedPost_hidden_DESC',
  SharedPostIdAsc = 'sharedPost_id_ASC',
  SharedPostIdDesc = 'sharedPost_id_DESC',
  SharedPostImageAsc = 'sharedPost_image_ASC',
  SharedPostImageDesc = 'sharedPost_image_DESC',
  SharedPostIsCommentAsc = 'sharedPost_isComment_ASC',
  SharedPostIsCommentDesc = 'sharedPost_isComment_DESC',
  SharedPostKindAsc = 'sharedPost_kind_ASC',
  SharedPostKindDesc = 'sharedPost_kind_DESC',
  SharedPostLinkAsc = 'sharedPost_link_ASC',
  SharedPostLinkDesc = 'sharedPost_link_DESC',
  SharedPostMetaAsc = 'sharedPost_meta_ASC',
  SharedPostMetaDesc = 'sharedPost_meta_DESC',
  SharedPostProposalIndexAsc = 'sharedPost_proposalIndex_ASC',
  SharedPostProposalIndexDesc = 'sharedPost_proposalIndex_DESC',
  SharedPostPublicRepliesCountAsc = 'sharedPost_publicRepliesCount_ASC',
  SharedPostPublicRepliesCountDesc = 'sharedPost_publicRepliesCount_DESC',
  SharedPostReactionsCountAsc = 'sharedPost_reactionsCount_ASC',
  SharedPostReactionsCountDesc = 'sharedPost_reactionsCount_DESC',
  SharedPostRepliesCountAsc = 'sharedPost_repliesCount_ASC',
  SharedPostRepliesCountDesc = 'sharedPost_repliesCount_DESC',
  SharedPostSharesCountAsc = 'sharedPost_sharesCount_ASC',
  SharedPostSharesCountDesc = 'sharedPost_sharesCount_DESC',
  SharedPostSlugAsc = 'sharedPost_slug_ASC',
  SharedPostSlugDesc = 'sharedPost_slug_DESC',
  SharedPostSummaryAsc = 'sharedPost_summary_ASC',
  SharedPostSummaryDesc = 'sharedPost_summary_DESC',
  SharedPostTagsOriginalAsc = 'sharedPost_tagsOriginal_ASC',
  SharedPostTagsOriginalDesc = 'sharedPost_tagsOriginal_DESC',
  SharedPostTitleAsc = 'sharedPost_title_ASC',
  SharedPostTitleDesc = 'sharedPost_title_DESC',
  SharedPostUpdatedAtTimeAsc = 'sharedPost_updatedAtTime_ASC',
  SharedPostUpdatedAtTimeDesc = 'sharedPost_updatedAtTime_DESC',
  SharedPostUpvotesCountAsc = 'sharedPost_upvotesCount_ASC',
  SharedPostUpvotesCountDesc = 'sharedPost_upvotesCount_DESC',
  SharesCountAsc = 'sharesCount_ASC',
  SharesCountDesc = 'sharesCount_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SpaceAboutAsc = 'space_about_ASC',
  SpaceAboutDesc = 'space_about_DESC',
  SpaceCanEveryoneCreatePostsAsc = 'space_canEveryoneCreatePosts_ASC',
  SpaceCanEveryoneCreatePostsDesc = 'space_canEveryoneCreatePosts_DESC',
  SpaceCanFollowerCreatePostsAsc = 'space_canFollowerCreatePosts_ASC',
  SpaceCanFollowerCreatePostsDesc = 'space_canFollowerCreatePosts_DESC',
  SpaceContentAsc = 'space_content_ASC',
  SpaceContentDesc = 'space_content_DESC',
  SpaceCreatedAtBlockAsc = 'space_createdAtBlock_ASC',
  SpaceCreatedAtBlockDesc = 'space_createdAtBlock_DESC',
  SpaceCreatedAtTimeAsc = 'space_createdAtTime_ASC',
  SpaceCreatedAtTimeDesc = 'space_createdAtTime_DESC',
  SpaceCreatedOnDayAsc = 'space_createdOnDay_ASC',
  SpaceCreatedOnDayDesc = 'space_createdOnDay_DESC',
  SpaceEmailAsc = 'space_email_ASC',
  SpaceEmailDesc = 'space_email_DESC',
  SpaceFollowersCountAsc = 'space_followersCount_ASC',
  SpaceFollowersCountDesc = 'space_followersCount_DESC',
  SpaceFormatAsc = 'space_format_ASC',
  SpaceFormatDesc = 'space_format_DESC',
  SpaceHiddenPostsCountAsc = 'space_hiddenPostsCount_ASC',
  SpaceHiddenPostsCountDesc = 'space_hiddenPostsCount_DESC',
  SpaceHiddenAsc = 'space_hidden_ASC',
  SpaceHiddenDesc = 'space_hidden_DESC',
  SpaceIdAsc = 'space_id_ASC',
  SpaceIdDesc = 'space_id_DESC',
  SpaceImageAsc = 'space_image_ASC',
  SpaceImageDesc = 'space_image_DESC',
  SpaceLinksOriginalAsc = 'space_linksOriginal_ASC',
  SpaceLinksOriginalDesc = 'space_linksOriginal_DESC',
  SpaceNameAsc = 'space_name_ASC',
  SpaceNameDesc = 'space_name_DESC',
  SpacePostsCountAsc = 'space_postsCount_ASC',
  SpacePostsCountDesc = 'space_postsCount_DESC',
  SpacePublicPostsCountAsc = 'space_publicPostsCount_ASC',
  SpacePublicPostsCountDesc = 'space_publicPostsCount_DESC',
  SpaceSummaryAsc = 'space_summary_ASC',
  SpaceSummaryDesc = 'space_summary_DESC',
  SpaceTagsOriginalAsc = 'space_tagsOriginal_ASC',
  SpaceTagsOriginalDesc = 'space_tagsOriginal_DESC',
  SpaceUpdatedAtBlockAsc = 'space_updatedAtBlock_ASC',
  SpaceUpdatedAtBlockDesc = 'space_updatedAtBlock_DESC',
  SpaceUpdatedAtTimeAsc = 'space_updatedAtTime_ASC',
  SpaceUpdatedAtTimeDesc = 'space_updatedAtTime_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TagsOriginalAsc = 'tagsOriginal_ASC',
  TagsOriginalDesc = 'tagsOriginal_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtTimeAsc = 'updatedAtTime_ASC',
  UpdatedAtTimeDesc = 'updatedAtTime_DESC',
  UpvotesCountAsc = 'upvotesCount_ASC',
  UpvotesCountDesc = 'upvotesCount_DESC'
}

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_containsInsensitive?: InputMaybe<Scalars['String']>;
  body_endsWith?: InputMaybe<Scalars['String']>;
  body_eq?: InputMaybe<Scalars['String']>;
  body_gt?: InputMaybe<Scalars['String']>;
  body_gte?: InputMaybe<Scalars['String']>;
  body_in?: InputMaybe<Array<Scalars['String']>>;
  body_isNull?: InputMaybe<Scalars['Boolean']>;
  body_lt?: InputMaybe<Scalars['String']>;
  body_lte?: InputMaybe<Scalars['String']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  body_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  body_not_endsWith?: InputMaybe<Scalars['String']>;
  body_not_eq?: InputMaybe<Scalars['String']>;
  body_not_in?: InputMaybe<Array<Scalars['String']>>;
  body_not_startsWith?: InputMaybe<Scalars['String']>;
  body_startsWith?: InputMaybe<Scalars['String']>;
  canonical_contains?: InputMaybe<Scalars['String']>;
  canonical_containsInsensitive?: InputMaybe<Scalars['String']>;
  canonical_endsWith?: InputMaybe<Scalars['String']>;
  canonical_eq?: InputMaybe<Scalars['String']>;
  canonical_gt?: InputMaybe<Scalars['String']>;
  canonical_gte?: InputMaybe<Scalars['String']>;
  canonical_in?: InputMaybe<Array<Scalars['String']>>;
  canonical_isNull?: InputMaybe<Scalars['Boolean']>;
  canonical_lt?: InputMaybe<Scalars['String']>;
  canonical_lte?: InputMaybe<Scalars['String']>;
  canonical_not_contains?: InputMaybe<Scalars['String']>;
  canonical_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  canonical_not_endsWith?: InputMaybe<Scalars['String']>;
  canonical_not_eq?: InputMaybe<Scalars['String']>;
  canonical_not_in?: InputMaybe<Array<Scalars['String']>>;
  canonical_not_startsWith?: InputMaybe<Scalars['String']>;
  canonical_startsWith?: InputMaybe<Scalars['String']>;
  commentFollowers_every?: InputMaybe<CommentFollowersWhereInput>;
  commentFollowers_none?: InputMaybe<CommentFollowersWhereInput>;
  commentFollowers_some?: InputMaybe<CommentFollowersWhereInput>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_containsInsensitive?: InputMaybe<Scalars['String']>;
  content_endsWith?: InputMaybe<Scalars['String']>;
  content_eq?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_isNull?: InputMaybe<Scalars['Boolean']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  content_not_endsWith?: InputMaybe<Scalars['String']>;
  content_not_eq?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_startsWith?: InputMaybe<Scalars['String']>;
  content_startsWith?: InputMaybe<Scalars['String']>;
  createdAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTime_eq?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_gt?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_gte?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAtTime_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAtTime_lt?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_lte?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdByAccount?: InputMaybe<AccountWhereInput>;
  createdByAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  createdOnDay_eq?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_gt?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_gte?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdOnDay_isNull?: InputMaybe<Scalars['Boolean']>;
  createdOnDay_lt?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_lte?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  downvotesCount_eq?: InputMaybe<Scalars['Int']>;
  downvotesCount_gt?: InputMaybe<Scalars['Int']>;
  downvotesCount_gte?: InputMaybe<Scalars['Int']>;
  downvotesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  downvotesCount_isNull?: InputMaybe<Scalars['Boolean']>;
  downvotesCount_lt?: InputMaybe<Scalars['Int']>;
  downvotesCount_lte?: InputMaybe<Scalars['Int']>;
  downvotesCount_not_eq?: InputMaybe<Scalars['Int']>;
  downvotesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  followersCount_eq?: InputMaybe<Scalars['Int']>;
  followersCount_gt?: InputMaybe<Scalars['Int']>;
  followersCount_gte?: InputMaybe<Scalars['Int']>;
  followersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  followersCount_isNull?: InputMaybe<Scalars['Boolean']>;
  followersCount_lt?: InputMaybe<Scalars['Int']>;
  followersCount_lte?: InputMaybe<Scalars['Int']>;
  followersCount_not_eq?: InputMaybe<Scalars['Int']>;
  followersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  format_contains?: InputMaybe<Scalars['String']>;
  format_containsInsensitive?: InputMaybe<Scalars['String']>;
  format_endsWith?: InputMaybe<Scalars['String']>;
  format_eq?: InputMaybe<Scalars['String']>;
  format_gt?: InputMaybe<Scalars['String']>;
  format_gte?: InputMaybe<Scalars['String']>;
  format_in?: InputMaybe<Array<Scalars['String']>>;
  format_isNull?: InputMaybe<Scalars['Boolean']>;
  format_lt?: InputMaybe<Scalars['String']>;
  format_lte?: InputMaybe<Scalars['String']>;
  format_not_contains?: InputMaybe<Scalars['String']>;
  format_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  format_not_endsWith?: InputMaybe<Scalars['String']>;
  format_not_eq?: InputMaybe<Scalars['String']>;
  format_not_in?: InputMaybe<Array<Scalars['String']>>;
  format_not_startsWith?: InputMaybe<Scalars['String']>;
  format_startsWith?: InputMaybe<Scalars['String']>;
  hiddenRepliesCount_eq?: InputMaybe<Scalars['Int']>;
  hiddenRepliesCount_gt?: InputMaybe<Scalars['Int']>;
  hiddenRepliesCount_gte?: InputMaybe<Scalars['Int']>;
  hiddenRepliesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hiddenRepliesCount_isNull?: InputMaybe<Scalars['Boolean']>;
  hiddenRepliesCount_lt?: InputMaybe<Scalars['Int']>;
  hiddenRepliesCount_lte?: InputMaybe<Scalars['Int']>;
  hiddenRepliesCount_not_eq?: InputMaybe<Scalars['Int']>;
  hiddenRepliesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hidden_eq?: InputMaybe<Scalars['Boolean']>;
  hidden_isNull?: InputMaybe<Scalars['Boolean']>;
  hidden_not_eq?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_containsInsensitive?: InputMaybe<Scalars['String']>;
  image_endsWith?: InputMaybe<Scalars['String']>;
  image_eq?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_isNull?: InputMaybe<Scalars['Boolean']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  image_not_endsWith?: InputMaybe<Scalars['String']>;
  image_not_eq?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_startsWith?: InputMaybe<Scalars['String']>;
  image_startsWith?: InputMaybe<Scalars['String']>;
  isComment_eq?: InputMaybe<Scalars['Boolean']>;
  isComment_isNull?: InputMaybe<Scalars['Boolean']>;
  isComment_not_eq?: InputMaybe<Scalars['Boolean']>;
  kind_eq?: InputMaybe<PostKind>;
  kind_in?: InputMaybe<Array<PostKind>>;
  kind_isNull?: InputMaybe<Scalars['Boolean']>;
  kind_not_eq?: InputMaybe<PostKind>;
  kind_not_in?: InputMaybe<Array<PostKind>>;
  link_contains?: InputMaybe<Scalars['String']>;
  link_containsInsensitive?: InputMaybe<Scalars['String']>;
  link_endsWith?: InputMaybe<Scalars['String']>;
  link_eq?: InputMaybe<Scalars['String']>;
  link_gt?: InputMaybe<Scalars['String']>;
  link_gte?: InputMaybe<Scalars['String']>;
  link_in?: InputMaybe<Array<Scalars['String']>>;
  link_isNull?: InputMaybe<Scalars['Boolean']>;
  link_lt?: InputMaybe<Scalars['String']>;
  link_lte?: InputMaybe<Scalars['String']>;
  link_not_contains?: InputMaybe<Scalars['String']>;
  link_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  link_not_endsWith?: InputMaybe<Scalars['String']>;
  link_not_eq?: InputMaybe<Scalars['String']>;
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  link_not_startsWith?: InputMaybe<Scalars['String']>;
  link_startsWith?: InputMaybe<Scalars['String']>;
  meta_contains?: InputMaybe<Scalars['String']>;
  meta_containsInsensitive?: InputMaybe<Scalars['String']>;
  meta_endsWith?: InputMaybe<Scalars['String']>;
  meta_eq?: InputMaybe<Scalars['String']>;
  meta_gt?: InputMaybe<Scalars['String']>;
  meta_gte?: InputMaybe<Scalars['String']>;
  meta_in?: InputMaybe<Array<Scalars['String']>>;
  meta_isNull?: InputMaybe<Scalars['Boolean']>;
  meta_lt?: InputMaybe<Scalars['String']>;
  meta_lte?: InputMaybe<Scalars['String']>;
  meta_not_contains?: InputMaybe<Scalars['String']>;
  meta_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  meta_not_endsWith?: InputMaybe<Scalars['String']>;
  meta_not_eq?: InputMaybe<Scalars['String']>;
  meta_not_in?: InputMaybe<Array<Scalars['String']>>;
  meta_not_startsWith?: InputMaybe<Scalars['String']>;
  meta_startsWith?: InputMaybe<Scalars['String']>;
  ownedByAccount?: InputMaybe<AccountWhereInput>;
  ownedByAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  parentPost?: InputMaybe<PostWhereInput>;
  parentPost_isNull?: InputMaybe<Scalars['Boolean']>;
  postFollowers_every?: InputMaybe<PostFollowersWhereInput>;
  postFollowers_none?: InputMaybe<PostFollowersWhereInput>;
  postFollowers_some?: InputMaybe<PostFollowersWhereInput>;
  proposalIndex_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_gt?: InputMaybe<Scalars['Int']>;
  proposalIndex_gte?: InputMaybe<Scalars['Int']>;
  proposalIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  proposalIndex_isNull?: InputMaybe<Scalars['Boolean']>;
  proposalIndex_lt?: InputMaybe<Scalars['Int']>;
  proposalIndex_lte?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_eq?: InputMaybe<Scalars['Int']>;
  proposalIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  publicRepliesCount_eq?: InputMaybe<Scalars['Int']>;
  publicRepliesCount_gt?: InputMaybe<Scalars['Int']>;
  publicRepliesCount_gte?: InputMaybe<Scalars['Int']>;
  publicRepliesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  publicRepliesCount_isNull?: InputMaybe<Scalars['Boolean']>;
  publicRepliesCount_lt?: InputMaybe<Scalars['Int']>;
  publicRepliesCount_lte?: InputMaybe<Scalars['Int']>;
  publicRepliesCount_not_eq?: InputMaybe<Scalars['Int']>;
  publicRepliesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  reactionsCount_eq?: InputMaybe<Scalars['Int']>;
  reactionsCount_gt?: InputMaybe<Scalars['Int']>;
  reactionsCount_gte?: InputMaybe<Scalars['Int']>;
  reactionsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  reactionsCount_isNull?: InputMaybe<Scalars['Boolean']>;
  reactionsCount_lt?: InputMaybe<Scalars['Int']>;
  reactionsCount_lte?: InputMaybe<Scalars['Int']>;
  reactionsCount_not_eq?: InputMaybe<Scalars['Int']>;
  reactionsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  reactions_every?: InputMaybe<ReactionWhereInput>;
  reactions_none?: InputMaybe<ReactionWhereInput>;
  reactions_some?: InputMaybe<ReactionWhereInput>;
  repliesCount_eq?: InputMaybe<Scalars['Int']>;
  repliesCount_gt?: InputMaybe<Scalars['Int']>;
  repliesCount_gte?: InputMaybe<Scalars['Int']>;
  repliesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  repliesCount_isNull?: InputMaybe<Scalars['Boolean']>;
  repliesCount_lt?: InputMaybe<Scalars['Int']>;
  repliesCount_lte?: InputMaybe<Scalars['Int']>;
  repliesCount_not_eq?: InputMaybe<Scalars['Int']>;
  repliesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  rootPost?: InputMaybe<PostWhereInput>;
  rootPost_isNull?: InputMaybe<Scalars['Boolean']>;
  sharedPost?: InputMaybe<PostWhereInput>;
  sharedPost_isNull?: InputMaybe<Scalars['Boolean']>;
  sharesCount_eq?: InputMaybe<Scalars['Int']>;
  sharesCount_gt?: InputMaybe<Scalars['Int']>;
  sharesCount_gte?: InputMaybe<Scalars['Int']>;
  sharesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  sharesCount_isNull?: InputMaybe<Scalars['Boolean']>;
  sharesCount_lt?: InputMaybe<Scalars['Int']>;
  sharesCount_lte?: InputMaybe<Scalars['Int']>;
  sharesCount_not_eq?: InputMaybe<Scalars['Int']>;
  sharesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_containsInsensitive?: InputMaybe<Scalars['String']>;
  slug_endsWith?: InputMaybe<Scalars['String']>;
  slug_eq?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_isNull?: InputMaybe<Scalars['Boolean']>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  slug_not_endsWith?: InputMaybe<Scalars['String']>;
  slug_not_eq?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_startsWith?: InputMaybe<Scalars['String']>;
  slug_startsWith?: InputMaybe<Scalars['String']>;
  space?: InputMaybe<SpaceWhereInput>;
  space_isNull?: InputMaybe<Scalars['Boolean']>;
  summary_contains?: InputMaybe<Scalars['String']>;
  summary_containsInsensitive?: InputMaybe<Scalars['String']>;
  summary_endsWith?: InputMaybe<Scalars['String']>;
  summary_eq?: InputMaybe<Scalars['String']>;
  summary_gt?: InputMaybe<Scalars['String']>;
  summary_gte?: InputMaybe<Scalars['String']>;
  summary_in?: InputMaybe<Array<Scalars['String']>>;
  summary_isNull?: InputMaybe<Scalars['Boolean']>;
  summary_lt?: InputMaybe<Scalars['String']>;
  summary_lte?: InputMaybe<Scalars['String']>;
  summary_not_contains?: InputMaybe<Scalars['String']>;
  summary_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  summary_not_endsWith?: InputMaybe<Scalars['String']>;
  summary_not_eq?: InputMaybe<Scalars['String']>;
  summary_not_in?: InputMaybe<Array<Scalars['String']>>;
  summary_not_startsWith?: InputMaybe<Scalars['String']>;
  summary_startsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_contains?: InputMaybe<Scalars['String']>;
  tagsOriginal_containsInsensitive?: InputMaybe<Scalars['String']>;
  tagsOriginal_endsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_eq?: InputMaybe<Scalars['String']>;
  tagsOriginal_gt?: InputMaybe<Scalars['String']>;
  tagsOriginal_gte?: InputMaybe<Scalars['String']>;
  tagsOriginal_in?: InputMaybe<Array<Scalars['String']>>;
  tagsOriginal_isNull?: InputMaybe<Scalars['Boolean']>;
  tagsOriginal_lt?: InputMaybe<Scalars['String']>;
  tagsOriginal_lte?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_contains?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_endsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_eq?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_in?: InputMaybe<Array<Scalars['String']>>;
  tagsOriginal_not_startsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_startsWith?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_containsInsensitive?: InputMaybe<Scalars['String']>;
  title_endsWith?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_isNull?: InputMaybe<Scalars['Boolean']>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  title_not_endsWith?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_startsWith?: InputMaybe<Scalars['String']>;
  title_startsWith?: InputMaybe<Scalars['String']>;
  updatedAtTime_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAtTime_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAtTime_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  upvotesCount_eq?: InputMaybe<Scalars['Int']>;
  upvotesCount_gt?: InputMaybe<Scalars['Int']>;
  upvotesCount_gte?: InputMaybe<Scalars['Int']>;
  upvotesCount_in?: InputMaybe<Array<Scalars['Int']>>;
  upvotesCount_isNull?: InputMaybe<Scalars['Boolean']>;
  upvotesCount_lt?: InputMaybe<Scalars['Int']>;
  upvotesCount_lte?: InputMaybe<Scalars['Int']>;
  upvotesCount_not_eq?: InputMaybe<Scalars['Int']>;
  upvotesCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type PostsConnection = {
  __typename?: 'PostsConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  accountById?: Maybe<Account>;
  /** @deprecated Use accountById */
  accountByUniqueInput?: Maybe<Account>;
  accountFollowers: Array<AccountFollowers>;
  accountFollowersById?: Maybe<AccountFollowers>;
  /** @deprecated Use accountFollowersById */
  accountFollowersByUniqueInput?: Maybe<AccountFollowers>;
  accountFollowersConnection: AccountFollowersConnection;
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  activities: Array<Activity>;
  activitiesConnection: ActivitiesConnection;
  activityById?: Maybe<Activity>;
  /** @deprecated Use activityById */
  activityByUniqueInput?: Maybe<Activity>;
  commentFollowers: Array<CommentFollowers>;
  commentFollowersById?: Maybe<CommentFollowers>;
  /** @deprecated Use commentFollowersById */
  commentFollowersByUniqueInput?: Maybe<CommentFollowers>;
  commentFollowersConnection: CommentFollowersConnection;
  newsFeedById?: Maybe<NewsFeed>;
  /** @deprecated Use newsFeedById */
  newsFeedByUniqueInput?: Maybe<NewsFeed>;
  newsFeeds: Array<NewsFeed>;
  newsFeedsConnection: NewsFeedsConnection;
  notificationById?: Maybe<Notification>;
  /** @deprecated Use notificationById */
  notificationByUniqueInput?: Maybe<Notification>;
  notifications: Array<Notification>;
  notificationsConnection: NotificationsConnection;
  postById?: Maybe<Post>;
  /** @deprecated Use postById */
  postByUniqueInput?: Maybe<Post>;
  postFollowers: Array<PostFollowers>;
  postFollowersById?: Maybe<PostFollowers>;
  /** @deprecated Use postFollowersById */
  postFollowersByUniqueInput?: Maybe<PostFollowers>;
  postFollowersConnection: PostFollowersConnection;
  posts: Array<Post>;
  postsConnection: PostsConnection;
  reactionById?: Maybe<Reaction>;
  /** @deprecated Use reactionById */
  reactionByUniqueInput?: Maybe<Reaction>;
  reactions: Array<Reaction>;
  reactionsConnection: ReactionsConnection;
  spaceById?: Maybe<Space>;
  /** @deprecated Use spaceById */
  spaceByUniqueInput?: Maybe<Space>;
  spaceFollowers: Array<SpaceFollowers>;
  spaceFollowersById?: Maybe<SpaceFollowers>;
  /** @deprecated Use spaceFollowersById */
  spaceFollowersByUniqueInput?: Maybe<SpaceFollowers>;
  spaceFollowersConnection: SpaceFollowersConnection;
  spaces: Array<Space>;
  spacesConnection: SpacesConnection;
  squidStatus?: Maybe<SquidStatus>;
};


export type QueryAccountByIdArgs = {
  id: Scalars['String'];
};


export type QueryAccountByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountFollowersOrderByInput>>;
  where?: InputMaybe<AccountFollowersWhereInput>;
};


export type QueryAccountFollowersByIdArgs = {
  id: Scalars['String'];
};


export type QueryAccountFollowersByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountFollowersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AccountFollowersOrderByInput>;
  where?: InputMaybe<AccountFollowersWhereInput>;
};


export type QueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AccountOrderByInput>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryActivitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ActivityOrderByInput>>;
  where?: InputMaybe<ActivityWhereInput>;
};


export type QueryActivitiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<ActivityOrderByInput>;
  where?: InputMaybe<ActivityWhereInput>;
};


export type QueryActivityByIdArgs = {
  id: Scalars['String'];
};


export type QueryActivityByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCommentFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommentFollowersOrderByInput>>;
  where?: InputMaybe<CommentFollowersWhereInput>;
};


export type QueryCommentFollowersByIdArgs = {
  id: Scalars['String'];
};


export type QueryCommentFollowersByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCommentFollowersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<CommentFollowersOrderByInput>;
  where?: InputMaybe<CommentFollowersWhereInput>;
};


export type QueryNewsFeedByIdArgs = {
  id: Scalars['String'];
};


export type QueryNewsFeedByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryNewsFeedsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NewsFeedOrderByInput>>;
  where?: InputMaybe<NewsFeedWhereInput>;
};


export type QueryNewsFeedsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<NewsFeedOrderByInput>;
  where?: InputMaybe<NewsFeedWhereInput>;
};


export type QueryNotificationByIdArgs = {
  id: Scalars['String'];
};


export type QueryNotificationByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NotificationOrderByInput>>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryNotificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<NotificationOrderByInput>;
  where?: InputMaybe<NotificationWhereInput>;
};


export type QueryPostByIdArgs = {
  id: Scalars['String'];
};


export type QueryPostByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryPostFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostFollowersOrderByInput>>;
  where?: InputMaybe<PostFollowersWhereInput>;
};


export type QueryPostFollowersByIdArgs = {
  id: Scalars['String'];
};


export type QueryPostFollowersByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryPostFollowersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<PostFollowersOrderByInput>;
  where?: InputMaybe<PostFollowersWhereInput>;
};


export type QueryPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderByInput>>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<PostOrderByInput>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryReactionByIdArgs = {
  id: Scalars['String'];
};


export type QueryReactionByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ReactionOrderByInput>>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type QueryReactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<ReactionOrderByInput>;
  where?: InputMaybe<ReactionWhereInput>;
};


export type QuerySpaceByIdArgs = {
  id: Scalars['String'];
};


export type QuerySpaceByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QuerySpaceFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpaceFollowersOrderByInput>>;
  where?: InputMaybe<SpaceFollowersWhereInput>;
};


export type QuerySpaceFollowersByIdArgs = {
  id: Scalars['String'];
};


export type QuerySpaceFollowersByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QuerySpaceFollowersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SpaceFollowersOrderByInput>;
  where?: InputMaybe<SpaceFollowersWhereInput>;
};


export type QuerySpacesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpaceOrderByInput>>;
  where?: InputMaybe<SpaceWhereInput>;
};


export type QuerySpacesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<SpaceOrderByInput>;
  where?: InputMaybe<SpaceWhereInput>;
};

export type Reaction = {
  __typename?: 'Reaction';
  account: Account;
  createdAtBlock: Scalars['BigInt'];
  createdAtTime: Scalars['DateTime'];
  id: Scalars['String'];
  kind: ReactionKind;
  post: Post;
  status: Status;
  updatedAtBlock?: Maybe<Scalars['BigInt']>;
  updatedAtTime?: Maybe<Scalars['DateTime']>;
};

export type ReactionEdge = {
  __typename?: 'ReactionEdge';
  cursor: Scalars['String'];
  node: Reaction;
};

export enum ReactionKind {
  Downvote = 'Downvote',
  Upvote = 'Upvote'
}

export enum ReactionOrderByInput {
  AccountFollowersCountAsc = 'account_followersCount_ASC',
  AccountFollowersCountDesc = 'account_followersCount_DESC',
  AccountFollowingAccountsCountAsc = 'account_followingAccountsCount_ASC',
  AccountFollowingAccountsCountDesc = 'account_followingAccountsCount_DESC',
  AccountFollowingPostsCountAsc = 'account_followingPostsCount_ASC',
  AccountFollowingPostsCountDesc = 'account_followingPostsCount_DESC',
  AccountFollowingSpacesCountAsc = 'account_followingSpacesCount_ASC',
  AccountFollowingSpacesCountDesc = 'account_followingSpacesCount_DESC',
  AccountIdAsc = 'account_id_ASC',
  AccountIdDesc = 'account_id_DESC',
  AccountUpdatedAtBlockAsc = 'account_updatedAtBlock_ASC',
  AccountUpdatedAtBlockDesc = 'account_updatedAtBlock_DESC',
  AccountUpdatedAtTimeAsc = 'account_updatedAtTime_ASC',
  AccountUpdatedAtTimeDesc = 'account_updatedAtTime_DESC',
  CreatedAtBlockAsc = 'createdAtBlock_ASC',
  CreatedAtBlockDesc = 'createdAtBlock_DESC',
  CreatedAtTimeAsc = 'createdAtTime_ASC',
  CreatedAtTimeDesc = 'createdAtTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  PostBodyAsc = 'post_body_ASC',
  PostBodyDesc = 'post_body_DESC',
  PostCanonicalAsc = 'post_canonical_ASC',
  PostCanonicalDesc = 'post_canonical_DESC',
  PostContentAsc = 'post_content_ASC',
  PostContentDesc = 'post_content_DESC',
  PostCreatedAtBlockAsc = 'post_createdAtBlock_ASC',
  PostCreatedAtBlockDesc = 'post_createdAtBlock_DESC',
  PostCreatedAtTimeAsc = 'post_createdAtTime_ASC',
  PostCreatedAtTimeDesc = 'post_createdAtTime_DESC',
  PostCreatedOnDayAsc = 'post_createdOnDay_ASC',
  PostCreatedOnDayDesc = 'post_createdOnDay_DESC',
  PostDownvotesCountAsc = 'post_downvotesCount_ASC',
  PostDownvotesCountDesc = 'post_downvotesCount_DESC',
  PostFollowersCountAsc = 'post_followersCount_ASC',
  PostFollowersCountDesc = 'post_followersCount_DESC',
  PostFormatAsc = 'post_format_ASC',
  PostFormatDesc = 'post_format_DESC',
  PostHiddenRepliesCountAsc = 'post_hiddenRepliesCount_ASC',
  PostHiddenRepliesCountDesc = 'post_hiddenRepliesCount_DESC',
  PostHiddenAsc = 'post_hidden_ASC',
  PostHiddenDesc = 'post_hidden_DESC',
  PostIdAsc = 'post_id_ASC',
  PostIdDesc = 'post_id_DESC',
  PostImageAsc = 'post_image_ASC',
  PostImageDesc = 'post_image_DESC',
  PostIsCommentAsc = 'post_isComment_ASC',
  PostIsCommentDesc = 'post_isComment_DESC',
  PostKindAsc = 'post_kind_ASC',
  PostKindDesc = 'post_kind_DESC',
  PostLinkAsc = 'post_link_ASC',
  PostLinkDesc = 'post_link_DESC',
  PostMetaAsc = 'post_meta_ASC',
  PostMetaDesc = 'post_meta_DESC',
  PostProposalIndexAsc = 'post_proposalIndex_ASC',
  PostProposalIndexDesc = 'post_proposalIndex_DESC',
  PostPublicRepliesCountAsc = 'post_publicRepliesCount_ASC',
  PostPublicRepliesCountDesc = 'post_publicRepliesCount_DESC',
  PostReactionsCountAsc = 'post_reactionsCount_ASC',
  PostReactionsCountDesc = 'post_reactionsCount_DESC',
  PostRepliesCountAsc = 'post_repliesCount_ASC',
  PostRepliesCountDesc = 'post_repliesCount_DESC',
  PostSharesCountAsc = 'post_sharesCount_ASC',
  PostSharesCountDesc = 'post_sharesCount_DESC',
  PostSlugAsc = 'post_slug_ASC',
  PostSlugDesc = 'post_slug_DESC',
  PostSummaryAsc = 'post_summary_ASC',
  PostSummaryDesc = 'post_summary_DESC',
  PostTagsOriginalAsc = 'post_tagsOriginal_ASC',
  PostTagsOriginalDesc = 'post_tagsOriginal_DESC',
  PostTitleAsc = 'post_title_ASC',
  PostTitleDesc = 'post_title_DESC',
  PostUpdatedAtTimeAsc = 'post_updatedAtTime_ASC',
  PostUpdatedAtTimeDesc = 'post_updatedAtTime_DESC',
  PostUpvotesCountAsc = 'post_upvotesCount_ASC',
  PostUpvotesCountDesc = 'post_upvotesCount_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtBlockAsc = 'updatedAtBlock_ASC',
  UpdatedAtBlockDesc = 'updatedAtBlock_DESC',
  UpdatedAtTimeAsc = 'updatedAtTime_ASC',
  UpdatedAtTimeDesc = 'updatedAtTime_DESC'
}

export type ReactionWhereInput = {
  AND?: InputMaybe<Array<ReactionWhereInput>>;
  OR?: InputMaybe<Array<ReactionWhereInput>>;
  account?: InputMaybe<AccountWhereInput>;
  account_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTime_eq?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_gt?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_gte?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAtTime_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAtTime_lt?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_lte?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  kind_eq?: InputMaybe<ReactionKind>;
  kind_in?: InputMaybe<Array<ReactionKind>>;
  kind_isNull?: InputMaybe<Scalars['Boolean']>;
  kind_not_eq?: InputMaybe<ReactionKind>;
  kind_not_in?: InputMaybe<Array<ReactionKind>>;
  post?: InputMaybe<PostWhereInput>;
  post_isNull?: InputMaybe<Scalars['Boolean']>;
  status_eq?: InputMaybe<Status>;
  status_in?: InputMaybe<Array<Status>>;
  status_isNull?: InputMaybe<Scalars['Boolean']>;
  status_not_eq?: InputMaybe<Status>;
  status_not_in?: InputMaybe<Array<Status>>;
  updatedAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTime_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAtTime_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAtTime_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type ReactionsConnection = {
  __typename?: 'ReactionsConnection';
  edges: Array<ReactionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Space = {
  __typename?: 'Space';
  about?: Maybe<Scalars['String']>;
  canEveryoneCreatePosts?: Maybe<Scalars['Boolean']>;
  canFollowerCreatePosts?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
  createdAtBlock?: Maybe<Scalars['BigInt']>;
  createdAtTime?: Maybe<Scalars['DateTime']>;
  createdByAccount: Account;
  createdOnDay?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  everyonePermissions?: Maybe<SpacePermissions>;
  followerPermissions?: Maybe<SpacePermissions>;
  followers: Array<SpaceFollowers>;
  followersCount: Scalars['Int'];
  format?: Maybe<Scalars['String']>;
  hidden: Scalars['Boolean'];
  hiddenPostsCount: Scalars['Int'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  linksOriginal?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nonePermissions?: Maybe<SpacePermissions>;
  ownedByAccount: Account;
  posts: Array<Post>;
  postsCount: Scalars['Int'];
  profileSpace?: Maybe<Account>;
  publicPostsCount: Scalars['Int'];
  spaceOwnerPermissions?: Maybe<SpacePermissions>;
  summary?: Maybe<Scalars['String']>;
  tagsOriginal?: Maybe<Scalars['String']>;
  updatedAtBlock?: Maybe<Scalars['BigInt']>;
  updatedAtTime?: Maybe<Scalars['DateTime']>;
};


export type SpaceFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<SpaceFollowersOrderByInput>>;
  where?: InputMaybe<SpaceFollowersWhereInput>;
};


export type SpacePostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PostOrderByInput>>;
  where?: InputMaybe<PostWhereInput>;
};

export type SpaceEdge = {
  __typename?: 'SpaceEdge';
  cursor: Scalars['String'];
  node: Space;
};

export type SpaceFollowers = {
  __typename?: 'SpaceFollowers';
  followerAccount: Account;
  followingSpace: Space;
  id: Scalars['String'];
};

export type SpaceFollowersConnection = {
  __typename?: 'SpaceFollowersConnection';
  edges: Array<SpaceFollowersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SpaceFollowersEdge = {
  __typename?: 'SpaceFollowersEdge';
  cursor: Scalars['String'];
  node: SpaceFollowers;
};

export enum SpaceFollowersOrderByInput {
  FollowerAccountFollowersCountAsc = 'followerAccount_followersCount_ASC',
  FollowerAccountFollowersCountDesc = 'followerAccount_followersCount_DESC',
  FollowerAccountFollowingAccountsCountAsc = 'followerAccount_followingAccountsCount_ASC',
  FollowerAccountFollowingAccountsCountDesc = 'followerAccount_followingAccountsCount_DESC',
  FollowerAccountFollowingPostsCountAsc = 'followerAccount_followingPostsCount_ASC',
  FollowerAccountFollowingPostsCountDesc = 'followerAccount_followingPostsCount_DESC',
  FollowerAccountFollowingSpacesCountAsc = 'followerAccount_followingSpacesCount_ASC',
  FollowerAccountFollowingSpacesCountDesc = 'followerAccount_followingSpacesCount_DESC',
  FollowerAccountIdAsc = 'followerAccount_id_ASC',
  FollowerAccountIdDesc = 'followerAccount_id_DESC',
  FollowerAccountUpdatedAtBlockAsc = 'followerAccount_updatedAtBlock_ASC',
  FollowerAccountUpdatedAtBlockDesc = 'followerAccount_updatedAtBlock_DESC',
  FollowerAccountUpdatedAtTimeAsc = 'followerAccount_updatedAtTime_ASC',
  FollowerAccountUpdatedAtTimeDesc = 'followerAccount_updatedAtTime_DESC',
  FollowingSpaceAboutAsc = 'followingSpace_about_ASC',
  FollowingSpaceAboutDesc = 'followingSpace_about_DESC',
  FollowingSpaceCanEveryoneCreatePostsAsc = 'followingSpace_canEveryoneCreatePosts_ASC',
  FollowingSpaceCanEveryoneCreatePostsDesc = 'followingSpace_canEveryoneCreatePosts_DESC',
  FollowingSpaceCanFollowerCreatePostsAsc = 'followingSpace_canFollowerCreatePosts_ASC',
  FollowingSpaceCanFollowerCreatePostsDesc = 'followingSpace_canFollowerCreatePosts_DESC',
  FollowingSpaceContentAsc = 'followingSpace_content_ASC',
  FollowingSpaceContentDesc = 'followingSpace_content_DESC',
  FollowingSpaceCreatedAtBlockAsc = 'followingSpace_createdAtBlock_ASC',
  FollowingSpaceCreatedAtBlockDesc = 'followingSpace_createdAtBlock_DESC',
  FollowingSpaceCreatedAtTimeAsc = 'followingSpace_createdAtTime_ASC',
  FollowingSpaceCreatedAtTimeDesc = 'followingSpace_createdAtTime_DESC',
  FollowingSpaceCreatedOnDayAsc = 'followingSpace_createdOnDay_ASC',
  FollowingSpaceCreatedOnDayDesc = 'followingSpace_createdOnDay_DESC',
  FollowingSpaceEmailAsc = 'followingSpace_email_ASC',
  FollowingSpaceEmailDesc = 'followingSpace_email_DESC',
  FollowingSpaceFollowersCountAsc = 'followingSpace_followersCount_ASC',
  FollowingSpaceFollowersCountDesc = 'followingSpace_followersCount_DESC',
  FollowingSpaceFormatAsc = 'followingSpace_format_ASC',
  FollowingSpaceFormatDesc = 'followingSpace_format_DESC',
  FollowingSpaceHiddenPostsCountAsc = 'followingSpace_hiddenPostsCount_ASC',
  FollowingSpaceHiddenPostsCountDesc = 'followingSpace_hiddenPostsCount_DESC',
  FollowingSpaceHiddenAsc = 'followingSpace_hidden_ASC',
  FollowingSpaceHiddenDesc = 'followingSpace_hidden_DESC',
  FollowingSpaceIdAsc = 'followingSpace_id_ASC',
  FollowingSpaceIdDesc = 'followingSpace_id_DESC',
  FollowingSpaceImageAsc = 'followingSpace_image_ASC',
  FollowingSpaceImageDesc = 'followingSpace_image_DESC',
  FollowingSpaceLinksOriginalAsc = 'followingSpace_linksOriginal_ASC',
  FollowingSpaceLinksOriginalDesc = 'followingSpace_linksOriginal_DESC',
  FollowingSpaceNameAsc = 'followingSpace_name_ASC',
  FollowingSpaceNameDesc = 'followingSpace_name_DESC',
  FollowingSpacePostsCountAsc = 'followingSpace_postsCount_ASC',
  FollowingSpacePostsCountDesc = 'followingSpace_postsCount_DESC',
  FollowingSpacePublicPostsCountAsc = 'followingSpace_publicPostsCount_ASC',
  FollowingSpacePublicPostsCountDesc = 'followingSpace_publicPostsCount_DESC',
  FollowingSpaceSummaryAsc = 'followingSpace_summary_ASC',
  FollowingSpaceSummaryDesc = 'followingSpace_summary_DESC',
  FollowingSpaceTagsOriginalAsc = 'followingSpace_tagsOriginal_ASC',
  FollowingSpaceTagsOriginalDesc = 'followingSpace_tagsOriginal_DESC',
  FollowingSpaceUpdatedAtBlockAsc = 'followingSpace_updatedAtBlock_ASC',
  FollowingSpaceUpdatedAtBlockDesc = 'followingSpace_updatedAtBlock_DESC',
  FollowingSpaceUpdatedAtTimeAsc = 'followingSpace_updatedAtTime_ASC',
  FollowingSpaceUpdatedAtTimeDesc = 'followingSpace_updatedAtTime_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type SpaceFollowersWhereInput = {
  AND?: InputMaybe<Array<SpaceFollowersWhereInput>>;
  OR?: InputMaybe<Array<SpaceFollowersWhereInput>>;
  followerAccount?: InputMaybe<AccountWhereInput>;
  followerAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  followingSpace?: InputMaybe<SpaceWhereInput>;
  followingSpace_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
};

export enum SpaceOrderByInput {
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  CanEveryoneCreatePostsAsc = 'canEveryoneCreatePosts_ASC',
  CanEveryoneCreatePostsDesc = 'canEveryoneCreatePosts_DESC',
  CanFollowerCreatePostsAsc = 'canFollowerCreatePosts_ASC',
  CanFollowerCreatePostsDesc = 'canFollowerCreatePosts_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtBlockAsc = 'createdAtBlock_ASC',
  CreatedAtBlockDesc = 'createdAtBlock_DESC',
  CreatedAtTimeAsc = 'createdAtTime_ASC',
  CreatedAtTimeDesc = 'createdAtTime_DESC',
  CreatedByAccountFollowersCountAsc = 'createdByAccount_followersCount_ASC',
  CreatedByAccountFollowersCountDesc = 'createdByAccount_followersCount_DESC',
  CreatedByAccountFollowingAccountsCountAsc = 'createdByAccount_followingAccountsCount_ASC',
  CreatedByAccountFollowingAccountsCountDesc = 'createdByAccount_followingAccountsCount_DESC',
  CreatedByAccountFollowingPostsCountAsc = 'createdByAccount_followingPostsCount_ASC',
  CreatedByAccountFollowingPostsCountDesc = 'createdByAccount_followingPostsCount_DESC',
  CreatedByAccountFollowingSpacesCountAsc = 'createdByAccount_followingSpacesCount_ASC',
  CreatedByAccountFollowingSpacesCountDesc = 'createdByAccount_followingSpacesCount_DESC',
  CreatedByAccountIdAsc = 'createdByAccount_id_ASC',
  CreatedByAccountIdDesc = 'createdByAccount_id_DESC',
  CreatedByAccountUpdatedAtBlockAsc = 'createdByAccount_updatedAtBlock_ASC',
  CreatedByAccountUpdatedAtBlockDesc = 'createdByAccount_updatedAtBlock_DESC',
  CreatedByAccountUpdatedAtTimeAsc = 'createdByAccount_updatedAtTime_ASC',
  CreatedByAccountUpdatedAtTimeDesc = 'createdByAccount_updatedAtTime_DESC',
  CreatedOnDayAsc = 'createdOnDay_ASC',
  CreatedOnDayDesc = 'createdOnDay_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EveryonePermissionsCreateCommentsAsc = 'everyonePermissions_createComments_ASC',
  EveryonePermissionsCreateCommentsDesc = 'everyonePermissions_createComments_DESC',
  EveryonePermissionsCreatePostsAsc = 'everyonePermissions_createPosts_ASC',
  EveryonePermissionsCreatePostsDesc = 'everyonePermissions_createPosts_DESC',
  EveryonePermissionsCreateSubspacesAsc = 'everyonePermissions_createSubspaces_ASC',
  EveryonePermissionsCreateSubspacesDesc = 'everyonePermissions_createSubspaces_DESC',
  EveryonePermissionsDeleteAnyPostAsc = 'everyonePermissions_deleteAnyPost_ASC',
  EveryonePermissionsDeleteAnyPostDesc = 'everyonePermissions_deleteAnyPost_DESC',
  EveryonePermissionsDeleteAnySubspaceAsc = 'everyonePermissions_deleteAnySubspace_ASC',
  EveryonePermissionsDeleteAnySubspaceDesc = 'everyonePermissions_deleteAnySubspace_DESC',
  EveryonePermissionsDeleteOwnCommentsAsc = 'everyonePermissions_deleteOwnComments_ASC',
  EveryonePermissionsDeleteOwnCommentsDesc = 'everyonePermissions_deleteOwnComments_DESC',
  EveryonePermissionsDeleteOwnPostsAsc = 'everyonePermissions_deleteOwnPosts_ASC',
  EveryonePermissionsDeleteOwnPostsDesc = 'everyonePermissions_deleteOwnPosts_DESC',
  EveryonePermissionsDeleteOwnSubspacesAsc = 'everyonePermissions_deleteOwnSubspaces_ASC',
  EveryonePermissionsDeleteOwnSubspacesDesc = 'everyonePermissions_deleteOwnSubspaces_DESC',
  EveryonePermissionsDownvoteAsc = 'everyonePermissions_downvote_ASC',
  EveryonePermissionsDownvoteDesc = 'everyonePermissions_downvote_DESC',
  EveryonePermissionsHideAnyCommentAsc = 'everyonePermissions_hideAnyComment_ASC',
  EveryonePermissionsHideAnyCommentDesc = 'everyonePermissions_hideAnyComment_DESC',
  EveryonePermissionsHideAnyPostAsc = 'everyonePermissions_hideAnyPost_ASC',
  EveryonePermissionsHideAnyPostDesc = 'everyonePermissions_hideAnyPost_DESC',
  EveryonePermissionsHideAnySubspaceAsc = 'everyonePermissions_hideAnySubspace_ASC',
  EveryonePermissionsHideAnySubspaceDesc = 'everyonePermissions_hideAnySubspace_DESC',
  EveryonePermissionsHideOwnCommentsAsc = 'everyonePermissions_hideOwnComments_ASC',
  EveryonePermissionsHideOwnCommentsDesc = 'everyonePermissions_hideOwnComments_DESC',
  EveryonePermissionsHideOwnPostsAsc = 'everyonePermissions_hideOwnPosts_ASC',
  EveryonePermissionsHideOwnPostsDesc = 'everyonePermissions_hideOwnPosts_DESC',
  EveryonePermissionsHideOwnSubspacesAsc = 'everyonePermissions_hideOwnSubspaces_ASC',
  EveryonePermissionsHideOwnSubspacesDesc = 'everyonePermissions_hideOwnSubspaces_DESC',
  EveryonePermissionsManageRolesAsc = 'everyonePermissions_manageRoles_ASC',
  EveryonePermissionsManageRolesDesc = 'everyonePermissions_manageRoles_DESC',
  EveryonePermissionsOverridePostPermissionsAsc = 'everyonePermissions_overridePostPermissions_ASC',
  EveryonePermissionsOverridePostPermissionsDesc = 'everyonePermissions_overridePostPermissions_DESC',
  EveryonePermissionsOverrideSubspacePermissionsAsc = 'everyonePermissions_overrideSubspacePermissions_ASC',
  EveryonePermissionsOverrideSubspacePermissionsDesc = 'everyonePermissions_overrideSubspacePermissions_DESC',
  EveryonePermissionsRepresentSpaceExternallyAsc = 'everyonePermissions_representSpaceExternally_ASC',
  EveryonePermissionsRepresentSpaceExternallyDesc = 'everyonePermissions_representSpaceExternally_DESC',
  EveryonePermissionsRepresentSpaceInternallyAsc = 'everyonePermissions_representSpaceInternally_ASC',
  EveryonePermissionsRepresentSpaceInternallyDesc = 'everyonePermissions_representSpaceInternally_DESC',
  EveryonePermissionsShareAsc = 'everyonePermissions_share_ASC',
  EveryonePermissionsShareDesc = 'everyonePermissions_share_DESC',
  EveryonePermissionsSuggestEntityStatusAsc = 'everyonePermissions_suggestEntityStatus_ASC',
  EveryonePermissionsSuggestEntityStatusDesc = 'everyonePermissions_suggestEntityStatus_DESC',
  EveryonePermissionsUpdateAnyPostAsc = 'everyonePermissions_updateAnyPost_ASC',
  EveryonePermissionsUpdateAnyPostDesc = 'everyonePermissions_updateAnyPost_DESC',
  EveryonePermissionsUpdateAnySubspaceAsc = 'everyonePermissions_updateAnySubspace_ASC',
  EveryonePermissionsUpdateAnySubspaceDesc = 'everyonePermissions_updateAnySubspace_DESC',
  EveryonePermissionsUpdateEntityStatusAsc = 'everyonePermissions_updateEntityStatus_ASC',
  EveryonePermissionsUpdateEntityStatusDesc = 'everyonePermissions_updateEntityStatus_DESC',
  EveryonePermissionsUpdateOwnCommentsAsc = 'everyonePermissions_updateOwnComments_ASC',
  EveryonePermissionsUpdateOwnCommentsDesc = 'everyonePermissions_updateOwnComments_DESC',
  EveryonePermissionsUpdateOwnPostsAsc = 'everyonePermissions_updateOwnPosts_ASC',
  EveryonePermissionsUpdateOwnPostsDesc = 'everyonePermissions_updateOwnPosts_DESC',
  EveryonePermissionsUpdateOwnSubspacesAsc = 'everyonePermissions_updateOwnSubspaces_ASC',
  EveryonePermissionsUpdateOwnSubspacesDesc = 'everyonePermissions_updateOwnSubspaces_DESC',
  EveryonePermissionsUpdateSpaceSettingsAsc = 'everyonePermissions_updateSpaceSettings_ASC',
  EveryonePermissionsUpdateSpaceSettingsDesc = 'everyonePermissions_updateSpaceSettings_DESC',
  EveryonePermissionsUpdateSpaceAsc = 'everyonePermissions_updateSpace_ASC',
  EveryonePermissionsUpdateSpaceDesc = 'everyonePermissions_updateSpace_DESC',
  EveryonePermissionsUpvoteAsc = 'everyonePermissions_upvote_ASC',
  EveryonePermissionsUpvoteDesc = 'everyonePermissions_upvote_DESC',
  FollowerPermissionsCreateCommentsAsc = 'followerPermissions_createComments_ASC',
  FollowerPermissionsCreateCommentsDesc = 'followerPermissions_createComments_DESC',
  FollowerPermissionsCreatePostsAsc = 'followerPermissions_createPosts_ASC',
  FollowerPermissionsCreatePostsDesc = 'followerPermissions_createPosts_DESC',
  FollowerPermissionsCreateSubspacesAsc = 'followerPermissions_createSubspaces_ASC',
  FollowerPermissionsCreateSubspacesDesc = 'followerPermissions_createSubspaces_DESC',
  FollowerPermissionsDeleteAnyPostAsc = 'followerPermissions_deleteAnyPost_ASC',
  FollowerPermissionsDeleteAnyPostDesc = 'followerPermissions_deleteAnyPost_DESC',
  FollowerPermissionsDeleteAnySubspaceAsc = 'followerPermissions_deleteAnySubspace_ASC',
  FollowerPermissionsDeleteAnySubspaceDesc = 'followerPermissions_deleteAnySubspace_DESC',
  FollowerPermissionsDeleteOwnCommentsAsc = 'followerPermissions_deleteOwnComments_ASC',
  FollowerPermissionsDeleteOwnCommentsDesc = 'followerPermissions_deleteOwnComments_DESC',
  FollowerPermissionsDeleteOwnPostsAsc = 'followerPermissions_deleteOwnPosts_ASC',
  FollowerPermissionsDeleteOwnPostsDesc = 'followerPermissions_deleteOwnPosts_DESC',
  FollowerPermissionsDeleteOwnSubspacesAsc = 'followerPermissions_deleteOwnSubspaces_ASC',
  FollowerPermissionsDeleteOwnSubspacesDesc = 'followerPermissions_deleteOwnSubspaces_DESC',
  FollowerPermissionsDownvoteAsc = 'followerPermissions_downvote_ASC',
  FollowerPermissionsDownvoteDesc = 'followerPermissions_downvote_DESC',
  FollowerPermissionsHideAnyCommentAsc = 'followerPermissions_hideAnyComment_ASC',
  FollowerPermissionsHideAnyCommentDesc = 'followerPermissions_hideAnyComment_DESC',
  FollowerPermissionsHideAnyPostAsc = 'followerPermissions_hideAnyPost_ASC',
  FollowerPermissionsHideAnyPostDesc = 'followerPermissions_hideAnyPost_DESC',
  FollowerPermissionsHideAnySubspaceAsc = 'followerPermissions_hideAnySubspace_ASC',
  FollowerPermissionsHideAnySubspaceDesc = 'followerPermissions_hideAnySubspace_DESC',
  FollowerPermissionsHideOwnCommentsAsc = 'followerPermissions_hideOwnComments_ASC',
  FollowerPermissionsHideOwnCommentsDesc = 'followerPermissions_hideOwnComments_DESC',
  FollowerPermissionsHideOwnPostsAsc = 'followerPermissions_hideOwnPosts_ASC',
  FollowerPermissionsHideOwnPostsDesc = 'followerPermissions_hideOwnPosts_DESC',
  FollowerPermissionsHideOwnSubspacesAsc = 'followerPermissions_hideOwnSubspaces_ASC',
  FollowerPermissionsHideOwnSubspacesDesc = 'followerPermissions_hideOwnSubspaces_DESC',
  FollowerPermissionsManageRolesAsc = 'followerPermissions_manageRoles_ASC',
  FollowerPermissionsManageRolesDesc = 'followerPermissions_manageRoles_DESC',
  FollowerPermissionsOverridePostPermissionsAsc = 'followerPermissions_overridePostPermissions_ASC',
  FollowerPermissionsOverridePostPermissionsDesc = 'followerPermissions_overridePostPermissions_DESC',
  FollowerPermissionsOverrideSubspacePermissionsAsc = 'followerPermissions_overrideSubspacePermissions_ASC',
  FollowerPermissionsOverrideSubspacePermissionsDesc = 'followerPermissions_overrideSubspacePermissions_DESC',
  FollowerPermissionsRepresentSpaceExternallyAsc = 'followerPermissions_representSpaceExternally_ASC',
  FollowerPermissionsRepresentSpaceExternallyDesc = 'followerPermissions_representSpaceExternally_DESC',
  FollowerPermissionsRepresentSpaceInternallyAsc = 'followerPermissions_representSpaceInternally_ASC',
  FollowerPermissionsRepresentSpaceInternallyDesc = 'followerPermissions_representSpaceInternally_DESC',
  FollowerPermissionsShareAsc = 'followerPermissions_share_ASC',
  FollowerPermissionsShareDesc = 'followerPermissions_share_DESC',
  FollowerPermissionsSuggestEntityStatusAsc = 'followerPermissions_suggestEntityStatus_ASC',
  FollowerPermissionsSuggestEntityStatusDesc = 'followerPermissions_suggestEntityStatus_DESC',
  FollowerPermissionsUpdateAnyPostAsc = 'followerPermissions_updateAnyPost_ASC',
  FollowerPermissionsUpdateAnyPostDesc = 'followerPermissions_updateAnyPost_DESC',
  FollowerPermissionsUpdateAnySubspaceAsc = 'followerPermissions_updateAnySubspace_ASC',
  FollowerPermissionsUpdateAnySubspaceDesc = 'followerPermissions_updateAnySubspace_DESC',
  FollowerPermissionsUpdateEntityStatusAsc = 'followerPermissions_updateEntityStatus_ASC',
  FollowerPermissionsUpdateEntityStatusDesc = 'followerPermissions_updateEntityStatus_DESC',
  FollowerPermissionsUpdateOwnCommentsAsc = 'followerPermissions_updateOwnComments_ASC',
  FollowerPermissionsUpdateOwnCommentsDesc = 'followerPermissions_updateOwnComments_DESC',
  FollowerPermissionsUpdateOwnPostsAsc = 'followerPermissions_updateOwnPosts_ASC',
  FollowerPermissionsUpdateOwnPostsDesc = 'followerPermissions_updateOwnPosts_DESC',
  FollowerPermissionsUpdateOwnSubspacesAsc = 'followerPermissions_updateOwnSubspaces_ASC',
  FollowerPermissionsUpdateOwnSubspacesDesc = 'followerPermissions_updateOwnSubspaces_DESC',
  FollowerPermissionsUpdateSpaceSettingsAsc = 'followerPermissions_updateSpaceSettings_ASC',
  FollowerPermissionsUpdateSpaceSettingsDesc = 'followerPermissions_updateSpaceSettings_DESC',
  FollowerPermissionsUpdateSpaceAsc = 'followerPermissions_updateSpace_ASC',
  FollowerPermissionsUpdateSpaceDesc = 'followerPermissions_updateSpace_DESC',
  FollowerPermissionsUpvoteAsc = 'followerPermissions_upvote_ASC',
  FollowerPermissionsUpvoteDesc = 'followerPermissions_upvote_DESC',
  FollowersCountAsc = 'followersCount_ASC',
  FollowersCountDesc = 'followersCount_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  HiddenPostsCountAsc = 'hiddenPostsCount_ASC',
  HiddenPostsCountDesc = 'hiddenPostsCount_DESC',
  HiddenAsc = 'hidden_ASC',
  HiddenDesc = 'hidden_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  LinksOriginalAsc = 'linksOriginal_ASC',
  LinksOriginalDesc = 'linksOriginal_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NonePermissionsCreateCommentsAsc = 'nonePermissions_createComments_ASC',
  NonePermissionsCreateCommentsDesc = 'nonePermissions_createComments_DESC',
  NonePermissionsCreatePostsAsc = 'nonePermissions_createPosts_ASC',
  NonePermissionsCreatePostsDesc = 'nonePermissions_createPosts_DESC',
  NonePermissionsCreateSubspacesAsc = 'nonePermissions_createSubspaces_ASC',
  NonePermissionsCreateSubspacesDesc = 'nonePermissions_createSubspaces_DESC',
  NonePermissionsDeleteAnyPostAsc = 'nonePermissions_deleteAnyPost_ASC',
  NonePermissionsDeleteAnyPostDesc = 'nonePermissions_deleteAnyPost_DESC',
  NonePermissionsDeleteAnySubspaceAsc = 'nonePermissions_deleteAnySubspace_ASC',
  NonePermissionsDeleteAnySubspaceDesc = 'nonePermissions_deleteAnySubspace_DESC',
  NonePermissionsDeleteOwnCommentsAsc = 'nonePermissions_deleteOwnComments_ASC',
  NonePermissionsDeleteOwnCommentsDesc = 'nonePermissions_deleteOwnComments_DESC',
  NonePermissionsDeleteOwnPostsAsc = 'nonePermissions_deleteOwnPosts_ASC',
  NonePermissionsDeleteOwnPostsDesc = 'nonePermissions_deleteOwnPosts_DESC',
  NonePermissionsDeleteOwnSubspacesAsc = 'nonePermissions_deleteOwnSubspaces_ASC',
  NonePermissionsDeleteOwnSubspacesDesc = 'nonePermissions_deleteOwnSubspaces_DESC',
  NonePermissionsDownvoteAsc = 'nonePermissions_downvote_ASC',
  NonePermissionsDownvoteDesc = 'nonePermissions_downvote_DESC',
  NonePermissionsHideAnyCommentAsc = 'nonePermissions_hideAnyComment_ASC',
  NonePermissionsHideAnyCommentDesc = 'nonePermissions_hideAnyComment_DESC',
  NonePermissionsHideAnyPostAsc = 'nonePermissions_hideAnyPost_ASC',
  NonePermissionsHideAnyPostDesc = 'nonePermissions_hideAnyPost_DESC',
  NonePermissionsHideAnySubspaceAsc = 'nonePermissions_hideAnySubspace_ASC',
  NonePermissionsHideAnySubspaceDesc = 'nonePermissions_hideAnySubspace_DESC',
  NonePermissionsHideOwnCommentsAsc = 'nonePermissions_hideOwnComments_ASC',
  NonePermissionsHideOwnCommentsDesc = 'nonePermissions_hideOwnComments_DESC',
  NonePermissionsHideOwnPostsAsc = 'nonePermissions_hideOwnPosts_ASC',
  NonePermissionsHideOwnPostsDesc = 'nonePermissions_hideOwnPosts_DESC',
  NonePermissionsHideOwnSubspacesAsc = 'nonePermissions_hideOwnSubspaces_ASC',
  NonePermissionsHideOwnSubspacesDesc = 'nonePermissions_hideOwnSubspaces_DESC',
  NonePermissionsManageRolesAsc = 'nonePermissions_manageRoles_ASC',
  NonePermissionsManageRolesDesc = 'nonePermissions_manageRoles_DESC',
  NonePermissionsOverridePostPermissionsAsc = 'nonePermissions_overridePostPermissions_ASC',
  NonePermissionsOverridePostPermissionsDesc = 'nonePermissions_overridePostPermissions_DESC',
  NonePermissionsOverrideSubspacePermissionsAsc = 'nonePermissions_overrideSubspacePermissions_ASC',
  NonePermissionsOverrideSubspacePermissionsDesc = 'nonePermissions_overrideSubspacePermissions_DESC',
  NonePermissionsRepresentSpaceExternallyAsc = 'nonePermissions_representSpaceExternally_ASC',
  NonePermissionsRepresentSpaceExternallyDesc = 'nonePermissions_representSpaceExternally_DESC',
  NonePermissionsRepresentSpaceInternallyAsc = 'nonePermissions_representSpaceInternally_ASC',
  NonePermissionsRepresentSpaceInternallyDesc = 'nonePermissions_representSpaceInternally_DESC',
  NonePermissionsShareAsc = 'nonePermissions_share_ASC',
  NonePermissionsShareDesc = 'nonePermissions_share_DESC',
  NonePermissionsSuggestEntityStatusAsc = 'nonePermissions_suggestEntityStatus_ASC',
  NonePermissionsSuggestEntityStatusDesc = 'nonePermissions_suggestEntityStatus_DESC',
  NonePermissionsUpdateAnyPostAsc = 'nonePermissions_updateAnyPost_ASC',
  NonePermissionsUpdateAnyPostDesc = 'nonePermissions_updateAnyPost_DESC',
  NonePermissionsUpdateAnySubspaceAsc = 'nonePermissions_updateAnySubspace_ASC',
  NonePermissionsUpdateAnySubspaceDesc = 'nonePermissions_updateAnySubspace_DESC',
  NonePermissionsUpdateEntityStatusAsc = 'nonePermissions_updateEntityStatus_ASC',
  NonePermissionsUpdateEntityStatusDesc = 'nonePermissions_updateEntityStatus_DESC',
  NonePermissionsUpdateOwnCommentsAsc = 'nonePermissions_updateOwnComments_ASC',
  NonePermissionsUpdateOwnCommentsDesc = 'nonePermissions_updateOwnComments_DESC',
  NonePermissionsUpdateOwnPostsAsc = 'nonePermissions_updateOwnPosts_ASC',
  NonePermissionsUpdateOwnPostsDesc = 'nonePermissions_updateOwnPosts_DESC',
  NonePermissionsUpdateOwnSubspacesAsc = 'nonePermissions_updateOwnSubspaces_ASC',
  NonePermissionsUpdateOwnSubspacesDesc = 'nonePermissions_updateOwnSubspaces_DESC',
  NonePermissionsUpdateSpaceSettingsAsc = 'nonePermissions_updateSpaceSettings_ASC',
  NonePermissionsUpdateSpaceSettingsDesc = 'nonePermissions_updateSpaceSettings_DESC',
  NonePermissionsUpdateSpaceAsc = 'nonePermissions_updateSpace_ASC',
  NonePermissionsUpdateSpaceDesc = 'nonePermissions_updateSpace_DESC',
  NonePermissionsUpvoteAsc = 'nonePermissions_upvote_ASC',
  NonePermissionsUpvoteDesc = 'nonePermissions_upvote_DESC',
  OwnedByAccountFollowersCountAsc = 'ownedByAccount_followersCount_ASC',
  OwnedByAccountFollowersCountDesc = 'ownedByAccount_followersCount_DESC',
  OwnedByAccountFollowingAccountsCountAsc = 'ownedByAccount_followingAccountsCount_ASC',
  OwnedByAccountFollowingAccountsCountDesc = 'ownedByAccount_followingAccountsCount_DESC',
  OwnedByAccountFollowingPostsCountAsc = 'ownedByAccount_followingPostsCount_ASC',
  OwnedByAccountFollowingPostsCountDesc = 'ownedByAccount_followingPostsCount_DESC',
  OwnedByAccountFollowingSpacesCountAsc = 'ownedByAccount_followingSpacesCount_ASC',
  OwnedByAccountFollowingSpacesCountDesc = 'ownedByAccount_followingSpacesCount_DESC',
  OwnedByAccountIdAsc = 'ownedByAccount_id_ASC',
  OwnedByAccountIdDesc = 'ownedByAccount_id_DESC',
  OwnedByAccountUpdatedAtBlockAsc = 'ownedByAccount_updatedAtBlock_ASC',
  OwnedByAccountUpdatedAtBlockDesc = 'ownedByAccount_updatedAtBlock_DESC',
  OwnedByAccountUpdatedAtTimeAsc = 'ownedByAccount_updatedAtTime_ASC',
  OwnedByAccountUpdatedAtTimeDesc = 'ownedByAccount_updatedAtTime_DESC',
  PostsCountAsc = 'postsCount_ASC',
  PostsCountDesc = 'postsCount_DESC',
  ProfileSpaceFollowersCountAsc = 'profileSpace_followersCount_ASC',
  ProfileSpaceFollowersCountDesc = 'profileSpace_followersCount_DESC',
  ProfileSpaceFollowingAccountsCountAsc = 'profileSpace_followingAccountsCount_ASC',
  ProfileSpaceFollowingAccountsCountDesc = 'profileSpace_followingAccountsCount_DESC',
  ProfileSpaceFollowingPostsCountAsc = 'profileSpace_followingPostsCount_ASC',
  ProfileSpaceFollowingPostsCountDesc = 'profileSpace_followingPostsCount_DESC',
  ProfileSpaceFollowingSpacesCountAsc = 'profileSpace_followingSpacesCount_ASC',
  ProfileSpaceFollowingSpacesCountDesc = 'profileSpace_followingSpacesCount_DESC',
  ProfileSpaceIdAsc = 'profileSpace_id_ASC',
  ProfileSpaceIdDesc = 'profileSpace_id_DESC',
  ProfileSpaceUpdatedAtBlockAsc = 'profileSpace_updatedAtBlock_ASC',
  ProfileSpaceUpdatedAtBlockDesc = 'profileSpace_updatedAtBlock_DESC',
  ProfileSpaceUpdatedAtTimeAsc = 'profileSpace_updatedAtTime_ASC',
  ProfileSpaceUpdatedAtTimeDesc = 'profileSpace_updatedAtTime_DESC',
  PublicPostsCountAsc = 'publicPostsCount_ASC',
  PublicPostsCountDesc = 'publicPostsCount_DESC',
  SpaceOwnerPermissionsCreateCommentsAsc = 'spaceOwnerPermissions_createComments_ASC',
  SpaceOwnerPermissionsCreateCommentsDesc = 'spaceOwnerPermissions_createComments_DESC',
  SpaceOwnerPermissionsCreatePostsAsc = 'spaceOwnerPermissions_createPosts_ASC',
  SpaceOwnerPermissionsCreatePostsDesc = 'spaceOwnerPermissions_createPosts_DESC',
  SpaceOwnerPermissionsCreateSubspacesAsc = 'spaceOwnerPermissions_createSubspaces_ASC',
  SpaceOwnerPermissionsCreateSubspacesDesc = 'spaceOwnerPermissions_createSubspaces_DESC',
  SpaceOwnerPermissionsDeleteAnyPostAsc = 'spaceOwnerPermissions_deleteAnyPost_ASC',
  SpaceOwnerPermissionsDeleteAnyPostDesc = 'spaceOwnerPermissions_deleteAnyPost_DESC',
  SpaceOwnerPermissionsDeleteAnySubspaceAsc = 'spaceOwnerPermissions_deleteAnySubspace_ASC',
  SpaceOwnerPermissionsDeleteAnySubspaceDesc = 'spaceOwnerPermissions_deleteAnySubspace_DESC',
  SpaceOwnerPermissionsDeleteOwnCommentsAsc = 'spaceOwnerPermissions_deleteOwnComments_ASC',
  SpaceOwnerPermissionsDeleteOwnCommentsDesc = 'spaceOwnerPermissions_deleteOwnComments_DESC',
  SpaceOwnerPermissionsDeleteOwnPostsAsc = 'spaceOwnerPermissions_deleteOwnPosts_ASC',
  SpaceOwnerPermissionsDeleteOwnPostsDesc = 'spaceOwnerPermissions_deleteOwnPosts_DESC',
  SpaceOwnerPermissionsDeleteOwnSubspacesAsc = 'spaceOwnerPermissions_deleteOwnSubspaces_ASC',
  SpaceOwnerPermissionsDeleteOwnSubspacesDesc = 'spaceOwnerPermissions_deleteOwnSubspaces_DESC',
  SpaceOwnerPermissionsDownvoteAsc = 'spaceOwnerPermissions_downvote_ASC',
  SpaceOwnerPermissionsDownvoteDesc = 'spaceOwnerPermissions_downvote_DESC',
  SpaceOwnerPermissionsHideAnyCommentAsc = 'spaceOwnerPermissions_hideAnyComment_ASC',
  SpaceOwnerPermissionsHideAnyCommentDesc = 'spaceOwnerPermissions_hideAnyComment_DESC',
  SpaceOwnerPermissionsHideAnyPostAsc = 'spaceOwnerPermissions_hideAnyPost_ASC',
  SpaceOwnerPermissionsHideAnyPostDesc = 'spaceOwnerPermissions_hideAnyPost_DESC',
  SpaceOwnerPermissionsHideAnySubspaceAsc = 'spaceOwnerPermissions_hideAnySubspace_ASC',
  SpaceOwnerPermissionsHideAnySubspaceDesc = 'spaceOwnerPermissions_hideAnySubspace_DESC',
  SpaceOwnerPermissionsHideOwnCommentsAsc = 'spaceOwnerPermissions_hideOwnComments_ASC',
  SpaceOwnerPermissionsHideOwnCommentsDesc = 'spaceOwnerPermissions_hideOwnComments_DESC',
  SpaceOwnerPermissionsHideOwnPostsAsc = 'spaceOwnerPermissions_hideOwnPosts_ASC',
  SpaceOwnerPermissionsHideOwnPostsDesc = 'spaceOwnerPermissions_hideOwnPosts_DESC',
  SpaceOwnerPermissionsHideOwnSubspacesAsc = 'spaceOwnerPermissions_hideOwnSubspaces_ASC',
  SpaceOwnerPermissionsHideOwnSubspacesDesc = 'spaceOwnerPermissions_hideOwnSubspaces_DESC',
  SpaceOwnerPermissionsManageRolesAsc = 'spaceOwnerPermissions_manageRoles_ASC',
  SpaceOwnerPermissionsManageRolesDesc = 'spaceOwnerPermissions_manageRoles_DESC',
  SpaceOwnerPermissionsOverridePostPermissionsAsc = 'spaceOwnerPermissions_overridePostPermissions_ASC',
  SpaceOwnerPermissionsOverridePostPermissionsDesc = 'spaceOwnerPermissions_overridePostPermissions_DESC',
  SpaceOwnerPermissionsOverrideSubspacePermissionsAsc = 'spaceOwnerPermissions_overrideSubspacePermissions_ASC',
  SpaceOwnerPermissionsOverrideSubspacePermissionsDesc = 'spaceOwnerPermissions_overrideSubspacePermissions_DESC',
  SpaceOwnerPermissionsRepresentSpaceExternallyAsc = 'spaceOwnerPermissions_representSpaceExternally_ASC',
  SpaceOwnerPermissionsRepresentSpaceExternallyDesc = 'spaceOwnerPermissions_representSpaceExternally_DESC',
  SpaceOwnerPermissionsRepresentSpaceInternallyAsc = 'spaceOwnerPermissions_representSpaceInternally_ASC',
  SpaceOwnerPermissionsRepresentSpaceInternallyDesc = 'spaceOwnerPermissions_representSpaceInternally_DESC',
  SpaceOwnerPermissionsShareAsc = 'spaceOwnerPermissions_share_ASC',
  SpaceOwnerPermissionsShareDesc = 'spaceOwnerPermissions_share_DESC',
  SpaceOwnerPermissionsSuggestEntityStatusAsc = 'spaceOwnerPermissions_suggestEntityStatus_ASC',
  SpaceOwnerPermissionsSuggestEntityStatusDesc = 'spaceOwnerPermissions_suggestEntityStatus_DESC',
  SpaceOwnerPermissionsUpdateAnyPostAsc = 'spaceOwnerPermissions_updateAnyPost_ASC',
  SpaceOwnerPermissionsUpdateAnyPostDesc = 'spaceOwnerPermissions_updateAnyPost_DESC',
  SpaceOwnerPermissionsUpdateAnySubspaceAsc = 'spaceOwnerPermissions_updateAnySubspace_ASC',
  SpaceOwnerPermissionsUpdateAnySubspaceDesc = 'spaceOwnerPermissions_updateAnySubspace_DESC',
  SpaceOwnerPermissionsUpdateEntityStatusAsc = 'spaceOwnerPermissions_updateEntityStatus_ASC',
  SpaceOwnerPermissionsUpdateEntityStatusDesc = 'spaceOwnerPermissions_updateEntityStatus_DESC',
  SpaceOwnerPermissionsUpdateOwnCommentsAsc = 'spaceOwnerPermissions_updateOwnComments_ASC',
  SpaceOwnerPermissionsUpdateOwnCommentsDesc = 'spaceOwnerPermissions_updateOwnComments_DESC',
  SpaceOwnerPermissionsUpdateOwnPostsAsc = 'spaceOwnerPermissions_updateOwnPosts_ASC',
  SpaceOwnerPermissionsUpdateOwnPostsDesc = 'spaceOwnerPermissions_updateOwnPosts_DESC',
  SpaceOwnerPermissionsUpdateOwnSubspacesAsc = 'spaceOwnerPermissions_updateOwnSubspaces_ASC',
  SpaceOwnerPermissionsUpdateOwnSubspacesDesc = 'spaceOwnerPermissions_updateOwnSubspaces_DESC',
  SpaceOwnerPermissionsUpdateSpaceSettingsAsc = 'spaceOwnerPermissions_updateSpaceSettings_ASC',
  SpaceOwnerPermissionsUpdateSpaceSettingsDesc = 'spaceOwnerPermissions_updateSpaceSettings_DESC',
  SpaceOwnerPermissionsUpdateSpaceAsc = 'spaceOwnerPermissions_updateSpace_ASC',
  SpaceOwnerPermissionsUpdateSpaceDesc = 'spaceOwnerPermissions_updateSpace_DESC',
  SpaceOwnerPermissionsUpvoteAsc = 'spaceOwnerPermissions_upvote_ASC',
  SpaceOwnerPermissionsUpvoteDesc = 'spaceOwnerPermissions_upvote_DESC',
  SummaryAsc = 'summary_ASC',
  SummaryDesc = 'summary_DESC',
  TagsOriginalAsc = 'tagsOriginal_ASC',
  TagsOriginalDesc = 'tagsOriginal_DESC',
  UpdatedAtBlockAsc = 'updatedAtBlock_ASC',
  UpdatedAtBlockDesc = 'updatedAtBlock_DESC',
  UpdatedAtTimeAsc = 'updatedAtTime_ASC',
  UpdatedAtTimeDesc = 'updatedAtTime_DESC'
}

export type SpacePermissions = {
  __typename?: 'SpacePermissions';
  createComments?: Maybe<Scalars['Boolean']>;
  createPosts?: Maybe<Scalars['Boolean']>;
  createSubspaces?: Maybe<Scalars['Boolean']>;
  deleteAnyPost?: Maybe<Scalars['Boolean']>;
  deleteAnySubspace?: Maybe<Scalars['Boolean']>;
  deleteOwnComments?: Maybe<Scalars['Boolean']>;
  deleteOwnPosts?: Maybe<Scalars['Boolean']>;
  deleteOwnSubspaces?: Maybe<Scalars['Boolean']>;
  downvote?: Maybe<Scalars['Boolean']>;
  hideAnyComment?: Maybe<Scalars['Boolean']>;
  hideAnyPost?: Maybe<Scalars['Boolean']>;
  hideAnySubspace?: Maybe<Scalars['Boolean']>;
  hideOwnComments?: Maybe<Scalars['Boolean']>;
  hideOwnPosts?: Maybe<Scalars['Boolean']>;
  hideOwnSubspaces?: Maybe<Scalars['Boolean']>;
  manageRoles?: Maybe<Scalars['Boolean']>;
  overridePostPermissions?: Maybe<Scalars['Boolean']>;
  overrideSubspacePermissions?: Maybe<Scalars['Boolean']>;
  representSpaceExternally?: Maybe<Scalars['Boolean']>;
  representSpaceInternally?: Maybe<Scalars['Boolean']>;
  share?: Maybe<Scalars['Boolean']>;
  suggestEntityStatus?: Maybe<Scalars['Boolean']>;
  updateAnyPost?: Maybe<Scalars['Boolean']>;
  updateAnySubspace?: Maybe<Scalars['Boolean']>;
  updateEntityStatus?: Maybe<Scalars['Boolean']>;
  updateOwnComments?: Maybe<Scalars['Boolean']>;
  updateOwnPosts?: Maybe<Scalars['Boolean']>;
  updateOwnSubspaces?: Maybe<Scalars['Boolean']>;
  updateSpace?: Maybe<Scalars['Boolean']>;
  updateSpaceSettings?: Maybe<Scalars['Boolean']>;
  upvote?: Maybe<Scalars['Boolean']>;
};

export type SpacePermissionsWhereInput = {
  createComments_eq?: InputMaybe<Scalars['Boolean']>;
  createComments_isNull?: InputMaybe<Scalars['Boolean']>;
  createComments_not_eq?: InputMaybe<Scalars['Boolean']>;
  createPosts_eq?: InputMaybe<Scalars['Boolean']>;
  createPosts_isNull?: InputMaybe<Scalars['Boolean']>;
  createPosts_not_eq?: InputMaybe<Scalars['Boolean']>;
  createSubspaces_eq?: InputMaybe<Scalars['Boolean']>;
  createSubspaces_isNull?: InputMaybe<Scalars['Boolean']>;
  createSubspaces_not_eq?: InputMaybe<Scalars['Boolean']>;
  deleteAnyPost_eq?: InputMaybe<Scalars['Boolean']>;
  deleteAnyPost_isNull?: InputMaybe<Scalars['Boolean']>;
  deleteAnyPost_not_eq?: InputMaybe<Scalars['Boolean']>;
  deleteAnySubspace_eq?: InputMaybe<Scalars['Boolean']>;
  deleteAnySubspace_isNull?: InputMaybe<Scalars['Boolean']>;
  deleteAnySubspace_not_eq?: InputMaybe<Scalars['Boolean']>;
  deleteOwnComments_eq?: InputMaybe<Scalars['Boolean']>;
  deleteOwnComments_isNull?: InputMaybe<Scalars['Boolean']>;
  deleteOwnComments_not_eq?: InputMaybe<Scalars['Boolean']>;
  deleteOwnPosts_eq?: InputMaybe<Scalars['Boolean']>;
  deleteOwnPosts_isNull?: InputMaybe<Scalars['Boolean']>;
  deleteOwnPosts_not_eq?: InputMaybe<Scalars['Boolean']>;
  deleteOwnSubspaces_eq?: InputMaybe<Scalars['Boolean']>;
  deleteOwnSubspaces_isNull?: InputMaybe<Scalars['Boolean']>;
  deleteOwnSubspaces_not_eq?: InputMaybe<Scalars['Boolean']>;
  downvote_eq?: InputMaybe<Scalars['Boolean']>;
  downvote_isNull?: InputMaybe<Scalars['Boolean']>;
  downvote_not_eq?: InputMaybe<Scalars['Boolean']>;
  hideAnyComment_eq?: InputMaybe<Scalars['Boolean']>;
  hideAnyComment_isNull?: InputMaybe<Scalars['Boolean']>;
  hideAnyComment_not_eq?: InputMaybe<Scalars['Boolean']>;
  hideAnyPost_eq?: InputMaybe<Scalars['Boolean']>;
  hideAnyPost_isNull?: InputMaybe<Scalars['Boolean']>;
  hideAnyPost_not_eq?: InputMaybe<Scalars['Boolean']>;
  hideAnySubspace_eq?: InputMaybe<Scalars['Boolean']>;
  hideAnySubspace_isNull?: InputMaybe<Scalars['Boolean']>;
  hideAnySubspace_not_eq?: InputMaybe<Scalars['Boolean']>;
  hideOwnComments_eq?: InputMaybe<Scalars['Boolean']>;
  hideOwnComments_isNull?: InputMaybe<Scalars['Boolean']>;
  hideOwnComments_not_eq?: InputMaybe<Scalars['Boolean']>;
  hideOwnPosts_eq?: InputMaybe<Scalars['Boolean']>;
  hideOwnPosts_isNull?: InputMaybe<Scalars['Boolean']>;
  hideOwnPosts_not_eq?: InputMaybe<Scalars['Boolean']>;
  hideOwnSubspaces_eq?: InputMaybe<Scalars['Boolean']>;
  hideOwnSubspaces_isNull?: InputMaybe<Scalars['Boolean']>;
  hideOwnSubspaces_not_eq?: InputMaybe<Scalars['Boolean']>;
  manageRoles_eq?: InputMaybe<Scalars['Boolean']>;
  manageRoles_isNull?: InputMaybe<Scalars['Boolean']>;
  manageRoles_not_eq?: InputMaybe<Scalars['Boolean']>;
  overridePostPermissions_eq?: InputMaybe<Scalars['Boolean']>;
  overridePostPermissions_isNull?: InputMaybe<Scalars['Boolean']>;
  overridePostPermissions_not_eq?: InputMaybe<Scalars['Boolean']>;
  overrideSubspacePermissions_eq?: InputMaybe<Scalars['Boolean']>;
  overrideSubspacePermissions_isNull?: InputMaybe<Scalars['Boolean']>;
  overrideSubspacePermissions_not_eq?: InputMaybe<Scalars['Boolean']>;
  representSpaceExternally_eq?: InputMaybe<Scalars['Boolean']>;
  representSpaceExternally_isNull?: InputMaybe<Scalars['Boolean']>;
  representSpaceExternally_not_eq?: InputMaybe<Scalars['Boolean']>;
  representSpaceInternally_eq?: InputMaybe<Scalars['Boolean']>;
  representSpaceInternally_isNull?: InputMaybe<Scalars['Boolean']>;
  representSpaceInternally_not_eq?: InputMaybe<Scalars['Boolean']>;
  share_eq?: InputMaybe<Scalars['Boolean']>;
  share_isNull?: InputMaybe<Scalars['Boolean']>;
  share_not_eq?: InputMaybe<Scalars['Boolean']>;
  suggestEntityStatus_eq?: InputMaybe<Scalars['Boolean']>;
  suggestEntityStatus_isNull?: InputMaybe<Scalars['Boolean']>;
  suggestEntityStatus_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateAnyPost_eq?: InputMaybe<Scalars['Boolean']>;
  updateAnyPost_isNull?: InputMaybe<Scalars['Boolean']>;
  updateAnyPost_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateAnySubspace_eq?: InputMaybe<Scalars['Boolean']>;
  updateAnySubspace_isNull?: InputMaybe<Scalars['Boolean']>;
  updateAnySubspace_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateEntityStatus_eq?: InputMaybe<Scalars['Boolean']>;
  updateEntityStatus_isNull?: InputMaybe<Scalars['Boolean']>;
  updateEntityStatus_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateOwnComments_eq?: InputMaybe<Scalars['Boolean']>;
  updateOwnComments_isNull?: InputMaybe<Scalars['Boolean']>;
  updateOwnComments_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateOwnPosts_eq?: InputMaybe<Scalars['Boolean']>;
  updateOwnPosts_isNull?: InputMaybe<Scalars['Boolean']>;
  updateOwnPosts_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateOwnSubspaces_eq?: InputMaybe<Scalars['Boolean']>;
  updateOwnSubspaces_isNull?: InputMaybe<Scalars['Boolean']>;
  updateOwnSubspaces_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateSpaceSettings_eq?: InputMaybe<Scalars['Boolean']>;
  updateSpaceSettings_isNull?: InputMaybe<Scalars['Boolean']>;
  updateSpaceSettings_not_eq?: InputMaybe<Scalars['Boolean']>;
  updateSpace_eq?: InputMaybe<Scalars['Boolean']>;
  updateSpace_isNull?: InputMaybe<Scalars['Boolean']>;
  updateSpace_not_eq?: InputMaybe<Scalars['Boolean']>;
  upvote_eq?: InputMaybe<Scalars['Boolean']>;
  upvote_isNull?: InputMaybe<Scalars['Boolean']>;
  upvote_not_eq?: InputMaybe<Scalars['Boolean']>;
};

export type SpaceWhereInput = {
  AND?: InputMaybe<Array<SpaceWhereInput>>;
  OR?: InputMaybe<Array<SpaceWhereInput>>;
  about_contains?: InputMaybe<Scalars['String']>;
  about_containsInsensitive?: InputMaybe<Scalars['String']>;
  about_endsWith?: InputMaybe<Scalars['String']>;
  about_eq?: InputMaybe<Scalars['String']>;
  about_gt?: InputMaybe<Scalars['String']>;
  about_gte?: InputMaybe<Scalars['String']>;
  about_in?: InputMaybe<Array<Scalars['String']>>;
  about_isNull?: InputMaybe<Scalars['Boolean']>;
  about_lt?: InputMaybe<Scalars['String']>;
  about_lte?: InputMaybe<Scalars['String']>;
  about_not_contains?: InputMaybe<Scalars['String']>;
  about_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  about_not_endsWith?: InputMaybe<Scalars['String']>;
  about_not_eq?: InputMaybe<Scalars['String']>;
  about_not_in?: InputMaybe<Array<Scalars['String']>>;
  about_not_startsWith?: InputMaybe<Scalars['String']>;
  about_startsWith?: InputMaybe<Scalars['String']>;
  canEveryoneCreatePosts_eq?: InputMaybe<Scalars['Boolean']>;
  canEveryoneCreatePosts_isNull?: InputMaybe<Scalars['Boolean']>;
  canEveryoneCreatePosts_not_eq?: InputMaybe<Scalars['Boolean']>;
  canFollowerCreatePosts_eq?: InputMaybe<Scalars['Boolean']>;
  canFollowerCreatePosts_isNull?: InputMaybe<Scalars['Boolean']>;
  canFollowerCreatePosts_not_eq?: InputMaybe<Scalars['Boolean']>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_containsInsensitive?: InputMaybe<Scalars['String']>;
  content_endsWith?: InputMaybe<Scalars['String']>;
  content_eq?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_isNull?: InputMaybe<Scalars['Boolean']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  content_not_endsWith?: InputMaybe<Scalars['String']>;
  content_not_eq?: InputMaybe<Scalars['String']>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_startsWith?: InputMaybe<Scalars['String']>;
  content_startsWith?: InputMaybe<Scalars['String']>;
  createdAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createdAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAtTime_eq?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_gt?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_gte?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAtTime_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAtTime_lt?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_lte?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAtTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdByAccount?: InputMaybe<AccountWhereInput>;
  createdByAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  createdOnDay_eq?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_gt?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_gte?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdOnDay_isNull?: InputMaybe<Scalars['Boolean']>;
  createdOnDay_lt?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_lte?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdOnDay_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  email_contains?: InputMaybe<Scalars['String']>;
  email_containsInsensitive?: InputMaybe<Scalars['String']>;
  email_endsWith?: InputMaybe<Scalars['String']>;
  email_eq?: InputMaybe<Scalars['String']>;
  email_gt?: InputMaybe<Scalars['String']>;
  email_gte?: InputMaybe<Scalars['String']>;
  email_in?: InputMaybe<Array<Scalars['String']>>;
  email_isNull?: InputMaybe<Scalars['Boolean']>;
  email_lt?: InputMaybe<Scalars['String']>;
  email_lte?: InputMaybe<Scalars['String']>;
  email_not_contains?: InputMaybe<Scalars['String']>;
  email_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  email_not_endsWith?: InputMaybe<Scalars['String']>;
  email_not_eq?: InputMaybe<Scalars['String']>;
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  email_not_startsWith?: InputMaybe<Scalars['String']>;
  email_startsWith?: InputMaybe<Scalars['String']>;
  everyonePermissions?: InputMaybe<SpacePermissionsWhereInput>;
  everyonePermissions_isNull?: InputMaybe<Scalars['Boolean']>;
  followerPermissions?: InputMaybe<SpacePermissionsWhereInput>;
  followerPermissions_isNull?: InputMaybe<Scalars['Boolean']>;
  followersCount_eq?: InputMaybe<Scalars['Int']>;
  followersCount_gt?: InputMaybe<Scalars['Int']>;
  followersCount_gte?: InputMaybe<Scalars['Int']>;
  followersCount_in?: InputMaybe<Array<Scalars['Int']>>;
  followersCount_isNull?: InputMaybe<Scalars['Boolean']>;
  followersCount_lt?: InputMaybe<Scalars['Int']>;
  followersCount_lte?: InputMaybe<Scalars['Int']>;
  followersCount_not_eq?: InputMaybe<Scalars['Int']>;
  followersCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  followers_every?: InputMaybe<SpaceFollowersWhereInput>;
  followers_none?: InputMaybe<SpaceFollowersWhereInput>;
  followers_some?: InputMaybe<SpaceFollowersWhereInput>;
  format_contains?: InputMaybe<Scalars['String']>;
  format_containsInsensitive?: InputMaybe<Scalars['String']>;
  format_endsWith?: InputMaybe<Scalars['String']>;
  format_eq?: InputMaybe<Scalars['String']>;
  format_gt?: InputMaybe<Scalars['String']>;
  format_gte?: InputMaybe<Scalars['String']>;
  format_in?: InputMaybe<Array<Scalars['String']>>;
  format_isNull?: InputMaybe<Scalars['Boolean']>;
  format_lt?: InputMaybe<Scalars['String']>;
  format_lte?: InputMaybe<Scalars['String']>;
  format_not_contains?: InputMaybe<Scalars['String']>;
  format_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  format_not_endsWith?: InputMaybe<Scalars['String']>;
  format_not_eq?: InputMaybe<Scalars['String']>;
  format_not_in?: InputMaybe<Array<Scalars['String']>>;
  format_not_startsWith?: InputMaybe<Scalars['String']>;
  format_startsWith?: InputMaybe<Scalars['String']>;
  hiddenPostsCount_eq?: InputMaybe<Scalars['Int']>;
  hiddenPostsCount_gt?: InputMaybe<Scalars['Int']>;
  hiddenPostsCount_gte?: InputMaybe<Scalars['Int']>;
  hiddenPostsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  hiddenPostsCount_isNull?: InputMaybe<Scalars['Boolean']>;
  hiddenPostsCount_lt?: InputMaybe<Scalars['Int']>;
  hiddenPostsCount_lte?: InputMaybe<Scalars['Int']>;
  hiddenPostsCount_not_eq?: InputMaybe<Scalars['Int']>;
  hiddenPostsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  hidden_eq?: InputMaybe<Scalars['Boolean']>;
  hidden_isNull?: InputMaybe<Scalars['Boolean']>;
  hidden_not_eq?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  image_contains?: InputMaybe<Scalars['String']>;
  image_containsInsensitive?: InputMaybe<Scalars['String']>;
  image_endsWith?: InputMaybe<Scalars['String']>;
  image_eq?: InputMaybe<Scalars['String']>;
  image_gt?: InputMaybe<Scalars['String']>;
  image_gte?: InputMaybe<Scalars['String']>;
  image_in?: InputMaybe<Array<Scalars['String']>>;
  image_isNull?: InputMaybe<Scalars['Boolean']>;
  image_lt?: InputMaybe<Scalars['String']>;
  image_lte?: InputMaybe<Scalars['String']>;
  image_not_contains?: InputMaybe<Scalars['String']>;
  image_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  image_not_endsWith?: InputMaybe<Scalars['String']>;
  image_not_eq?: InputMaybe<Scalars['String']>;
  image_not_in?: InputMaybe<Array<Scalars['String']>>;
  image_not_startsWith?: InputMaybe<Scalars['String']>;
  image_startsWith?: InputMaybe<Scalars['String']>;
  linksOriginal_contains?: InputMaybe<Scalars['String']>;
  linksOriginal_containsInsensitive?: InputMaybe<Scalars['String']>;
  linksOriginal_endsWith?: InputMaybe<Scalars['String']>;
  linksOriginal_eq?: InputMaybe<Scalars['String']>;
  linksOriginal_gt?: InputMaybe<Scalars['String']>;
  linksOriginal_gte?: InputMaybe<Scalars['String']>;
  linksOriginal_in?: InputMaybe<Array<Scalars['String']>>;
  linksOriginal_isNull?: InputMaybe<Scalars['Boolean']>;
  linksOriginal_lt?: InputMaybe<Scalars['String']>;
  linksOriginal_lte?: InputMaybe<Scalars['String']>;
  linksOriginal_not_contains?: InputMaybe<Scalars['String']>;
  linksOriginal_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  linksOriginal_not_endsWith?: InputMaybe<Scalars['String']>;
  linksOriginal_not_eq?: InputMaybe<Scalars['String']>;
  linksOriginal_not_in?: InputMaybe<Array<Scalars['String']>>;
  linksOriginal_not_startsWith?: InputMaybe<Scalars['String']>;
  linksOriginal_startsWith?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_endsWith?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_not_endsWith?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']>;
  name_startsWith?: InputMaybe<Scalars['String']>;
  nonePermissions?: InputMaybe<SpacePermissionsWhereInput>;
  nonePermissions_isNull?: InputMaybe<Scalars['Boolean']>;
  ownedByAccount?: InputMaybe<AccountWhereInput>;
  ownedByAccount_isNull?: InputMaybe<Scalars['Boolean']>;
  postsCount_eq?: InputMaybe<Scalars['Int']>;
  postsCount_gt?: InputMaybe<Scalars['Int']>;
  postsCount_gte?: InputMaybe<Scalars['Int']>;
  postsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  postsCount_isNull?: InputMaybe<Scalars['Boolean']>;
  postsCount_lt?: InputMaybe<Scalars['Int']>;
  postsCount_lte?: InputMaybe<Scalars['Int']>;
  postsCount_not_eq?: InputMaybe<Scalars['Int']>;
  postsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  posts_every?: InputMaybe<PostWhereInput>;
  posts_none?: InputMaybe<PostWhereInput>;
  posts_some?: InputMaybe<PostWhereInput>;
  profileSpace?: InputMaybe<AccountWhereInput>;
  profileSpace_isNull?: InputMaybe<Scalars['Boolean']>;
  publicPostsCount_eq?: InputMaybe<Scalars['Int']>;
  publicPostsCount_gt?: InputMaybe<Scalars['Int']>;
  publicPostsCount_gte?: InputMaybe<Scalars['Int']>;
  publicPostsCount_in?: InputMaybe<Array<Scalars['Int']>>;
  publicPostsCount_isNull?: InputMaybe<Scalars['Boolean']>;
  publicPostsCount_lt?: InputMaybe<Scalars['Int']>;
  publicPostsCount_lte?: InputMaybe<Scalars['Int']>;
  publicPostsCount_not_eq?: InputMaybe<Scalars['Int']>;
  publicPostsCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  spaceOwnerPermissions?: InputMaybe<SpacePermissionsWhereInput>;
  spaceOwnerPermissions_isNull?: InputMaybe<Scalars['Boolean']>;
  summary_contains?: InputMaybe<Scalars['String']>;
  summary_containsInsensitive?: InputMaybe<Scalars['String']>;
  summary_endsWith?: InputMaybe<Scalars['String']>;
  summary_eq?: InputMaybe<Scalars['String']>;
  summary_gt?: InputMaybe<Scalars['String']>;
  summary_gte?: InputMaybe<Scalars['String']>;
  summary_in?: InputMaybe<Array<Scalars['String']>>;
  summary_isNull?: InputMaybe<Scalars['Boolean']>;
  summary_lt?: InputMaybe<Scalars['String']>;
  summary_lte?: InputMaybe<Scalars['String']>;
  summary_not_contains?: InputMaybe<Scalars['String']>;
  summary_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  summary_not_endsWith?: InputMaybe<Scalars['String']>;
  summary_not_eq?: InputMaybe<Scalars['String']>;
  summary_not_in?: InputMaybe<Array<Scalars['String']>>;
  summary_not_startsWith?: InputMaybe<Scalars['String']>;
  summary_startsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_contains?: InputMaybe<Scalars['String']>;
  tagsOriginal_containsInsensitive?: InputMaybe<Scalars['String']>;
  tagsOriginal_endsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_eq?: InputMaybe<Scalars['String']>;
  tagsOriginal_gt?: InputMaybe<Scalars['String']>;
  tagsOriginal_gte?: InputMaybe<Scalars['String']>;
  tagsOriginal_in?: InputMaybe<Array<Scalars['String']>>;
  tagsOriginal_isNull?: InputMaybe<Scalars['Boolean']>;
  tagsOriginal_lt?: InputMaybe<Scalars['String']>;
  tagsOriginal_lte?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_contains?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_endsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_eq?: InputMaybe<Scalars['String']>;
  tagsOriginal_not_in?: InputMaybe<Array<Scalars['String']>>;
  tagsOriginal_not_startsWith?: InputMaybe<Scalars['String']>;
  tagsOriginal_startsWith?: InputMaybe<Scalars['String']>;
  updatedAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  updatedAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  updatedAtTime_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAtTime_isNull?: InputMaybe<Scalars['Boolean']>;
  updatedAtTime_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAtTime_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type SpacesConnection = {
  __typename?: 'SpacesConnection';
  edges: Array<SpaceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']>;
};

export enum Status {
  Active = 'Active',
  Deleted = 'Deleted'
}

export type WhereIdInput = {
  id: Scalars['String'];
};

export type PostSimpleFragmentFragment = { __typename?: 'Post', content?: string | null, createdAtBlock?: any | null, createdAtTime?: any | null, title?: string | null, summary?: string | null, image?: string | null, link?: string | null, downvotesCount: number, hidden: boolean, id: string, isComment: boolean, kind?: PostKind | null, repliesCount: number, sharesCount: number, upvotesCount: number, updatedAtTime?: any | null, canonical?: string | null, tagsOriginal?: string | null, createdByAccount: { __typename?: 'Account', id: string }, ownedByAccount: { __typename?: 'Account', id: string }, space?: { __typename?: 'Space', id: string } | null, parentPost?: { __typename?: 'Post', id: string } | null, sharedPost?: { __typename?: 'Post', id: string } | null } & { ' $fragmentName'?: 'PostSimpleFragmentFragment' };

export type PostFragmentFragment = (
  { __typename?: 'Post' }
  & { ' $fragmentRefs'?: { 'PostSimpleFragmentFragment': PostSimpleFragmentFragment } }
) & { ' $fragmentName'?: 'PostFragmentFragment' };

export type GetPostsDataQueryVariables = Exact<{
  where?: InputMaybe<PostWhereInput>;
}>;


export type GetPostsDataQuery = { __typename?: 'Query', posts: Array<(
    { __typename?: 'Post', sharedPost?: (
      { __typename?: 'Post' }
      & { ' $fragmentRefs'?: { 'PostFragmentFragment': PostFragmentFragment } }
    ) | null, parentPost?: (
      { __typename?: 'Post' }
      & { ' $fragmentRefs'?: { 'PostFragmentFragment': PostFragmentFragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'PostFragmentFragment': PostFragmentFragment } }
  )> };

export const PostSimpleFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostSimpleFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtBlock"}},{"kind":"Field","name":{"kind":"Name","value":"createdAtTime"}},{"kind":"Field","name":{"kind":"Name","value":"createdByAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"downvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isComment"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"repliesCount"}},{"kind":"Field","name":{"kind":"Name","value":"sharesCount"}},{"kind":"Field","name":{"kind":"Name","value":"upvotesCount"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAtTime"}},{"kind":"Field","name":{"kind":"Name","value":"canonical"}},{"kind":"Field","name":{"kind":"Name","value":"tagsOriginal"}},{"kind":"Field","name":{"kind":"Name","value":"ownedByAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"space"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parentPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sharedPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PostSimpleFragmentFragment, unknown>;
export const PostFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostSimpleFragment"}}]}},...PostSimpleFragmentFragmentDoc.definitions]} as unknown as DocumentNode<PostFragmentFragment, unknown>;
export const GetPostsDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostsData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PostWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFragment"}},{"kind":"Field","name":{"kind":"Name","value":"sharedPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parentPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFragment"}}]}}]}}]}},...PostFragmentFragmentDoc.definitions]} as unknown as DocumentNode<GetPostsDataQuery, GetPostsDataQueryVariables>;