/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fullname
      email
      username
      bio
      location
      isAdmin
      image
      posts {
        items {
          id
          content
          authorID
          createdAt
          updatedAt
          postCategoryId
          owner
        }
        nextToken
      }
      nodesCreated {
        items {
          id
          title
          videoResources
          webResources
          bookResources
          authorID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullname
        email
        username
        bio
        location
        isAdmin
        image
        posts {
          nextToken
        }
        nodesCreated {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPath = /* GraphQL */ `
  query GetPath($id: ID!) {
    getPath(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPaths = /* GraphQL */ `
  query ListPaths(
    $filter: ModelPathFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getMiniPath = /* GraphQL */ `
  query GetMiniPath($id: ID!) {
    getMiniPath(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMiniPaths = /* GraphQL */ `
  query ListMiniPaths(
    $filter: ModelMiniPathFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMiniPaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getNode = /* GraphQL */ `
  query GetNode($id: ID!) {
    getNode(id: $id) {
      id
      title
      videoResources
      webResources
      bookResources
      authorID
      author {
        id
        fullname
        email
        username
        bio
        location
        isAdmin
        image
        posts {
          nextToken
        }
        nodesCreated {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNodes = /* GraphQL */ `
  query ListNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        videoResources
        webResources
        bookResources
        authorID
        author {
          id
          fullname
          email
          username
          bio
          location
          isAdmin
          image
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      category {
        id
        title
        description
        createdAt
        updatedAt
        owner
      }
      authorID
      author {
        id
        fullname
        email
        username
        bio
        location
        isAdmin
        image
        posts {
          nextToken
        }
        nodesCreated {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      postCategoryId
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        category {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        authorID
        author {
          id
          fullname
          email
          username
          bio
          location
          isAdmin
          image
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        postCategoryId
        owner
      }
      nextToken
    }
  }
`;
