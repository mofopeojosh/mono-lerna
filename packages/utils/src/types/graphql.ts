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
    /**
     * Represents non-fractional signed whole numeric values. Since the value may
     * exceed the size of a 32-bit integer, it's encoded as a string.
     */
    BigInt: any;
    /**
     * Represents textual data as UTF-8 character sequences. This type is most often
     * used by GraphQL to represent free-form human-readable text.
     */
    IP: any;
    /** An ISO 8601-encoded date */
    ISO8601Date: any;
    /** An ISO 8601-encoded datetime */
    ISO8601DateTime: any;
    /** Represents untyped JSON */
    JSON: any;
};

export type HighlightedText = {
    __typename?: 'HighlightedText';
    highlightFrom?: Maybe<Scalars['Int']>;
    highlightTo?: Maybe<Scalars['Int']>;
    text: Scalars['String'];
};

export type Department = {
    __typename?: 'Department';
    createdAt: Scalars['ISO8601DateTime'];
    custom: Scalars['Boolean'];
    emoji?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    updatedAt: Scalars['ISO8601DateTime'];
};

export type Industry = {
    __typename?: 'Industry';
    emoji?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
};
