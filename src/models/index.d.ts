import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PathMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NodeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MiniPathMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly fullname: string;
  readonly email: string;
  readonly username: string;
  readonly bio?: string | null;
  readonly location?: string | null;
  readonly isAdmin: boolean;
  readonly image: string;
  readonly posts?: (Post | null)[] | null;
  readonly nodesCreated?: (Node | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly content: string;
  readonly category?: Path | null;
  readonly author?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postCategoryId?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Path {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Path, PathMetaData>);
  static copyOf(source: Path, mutator: (draft: MutableModel<Path, PathMetaData>) => MutableModel<Path, PathMetaData> | void): Path;
}

export declare class Node {
  readonly id: string;
  readonly title: string;
  readonly videoResources?: (string | null)[] | null;
  readonly webResources?: (string | null)[] | null;
  readonly bookResources?: (string | null)[] | null;
  readonly author?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Node, NodeMetaData>);
  static copyOf(source: Node, mutator: (draft: MutableModel<Node, NodeMetaData>) => MutableModel<Node, NodeMetaData> | void): Node;
}

export declare class MiniPath {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MiniPath, MiniPathMetaData>);
  static copyOf(source: MiniPath, mutator: (draft: MutableModel<MiniPath, MiniPathMetaData>) => MutableModel<MiniPath, MiniPathMetaData> | void): MiniPath;
}