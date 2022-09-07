/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPath = /* GraphQL */ `
  mutation CreatePath(
    $input: CreatePathInput!
    $condition: ModelPathConditionInput
  ) {
    createPath(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePath = /* GraphQL */ `
  mutation UpdatePath(
    $input: UpdatePathInput!
    $condition: ModelPathConditionInput
  ) {
    updatePath(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePath = /* GraphQL */ `
  mutation DeletePath(
    $input: DeletePathInput!
    $condition: ModelPathConditionInput
  ) {
    deletePath(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMiniPath = /* GraphQL */ `
  mutation CreateMiniPath(
    $input: CreateMiniPathInput!
    $condition: ModelMiniPathConditionInput
  ) {
    createMiniPath(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMiniPath = /* GraphQL */ `
  mutation UpdateMiniPath(
    $input: UpdateMiniPathInput!
    $condition: ModelMiniPathConditionInput
  ) {
    updateMiniPath(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMiniPath = /* GraphQL */ `
  mutation DeleteMiniPath(
    $input: DeleteMiniPathInput!
    $condition: ModelMiniPathConditionInput
  ) {
    deleteMiniPath(input: $input, condition: $condition) {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createNode = /* GraphQL */ `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    createNode(input: $input, condition: $condition) {
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
export const updateNode = /* GraphQL */ `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    updateNode(input: $input, condition: $condition) {
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
export const deleteNode = /* GraphQL */ `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
    deleteNode(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
