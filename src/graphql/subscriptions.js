/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePath = /* GraphQL */ `
  subscription OnCreatePath {
    onCreatePath {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePath = /* GraphQL */ `
  subscription OnUpdatePath {
    onUpdatePath {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePath = /* GraphQL */ `
  subscription OnDeletePath {
    onDeletePath {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateMiniPath = /* GraphQL */ `
  subscription OnCreateMiniPath {
    onCreateMiniPath {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMiniPath = /* GraphQL */ `
  subscription OnUpdateMiniPath {
    onUpdateMiniPath {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMiniPath = /* GraphQL */ `
  subscription OnDeleteMiniPath {
    onDeleteMiniPath {
      id
      title
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateNode = /* GraphQL */ `
  subscription OnCreateNode {
    onCreateNode {
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
export const onUpdateNode = /* GraphQL */ `
  subscription OnUpdateNode {
    onUpdateNode {
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
export const onDeleteNode = /* GraphQL */ `
  subscription OnDeleteNode {
    onDeleteNode {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
