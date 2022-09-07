// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Path, Node, MiniPath } = initSchema(schema);

export {
  User,
  Post,
  Path,
  Node,
  MiniPath
};