import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  float8: any;
};



/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Float. All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: Maybe<Scalars['Float']>;
  _gt?: Maybe<Scalars['Float']>;
  _gte?: Maybe<Scalars['Float']>;
  _in?: Maybe<Array<Scalars['Float']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Float']>;
  _lte?: Maybe<Scalars['Float']>;
  _neq?: Maybe<Scalars['Float']>;
  _nin?: Maybe<Array<Scalars['Float']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};



/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "node" */
  delete_node?: Maybe<Node_Mutation_Response>;
  /** delete single row from the table: "node" */
  delete_node_by_pk?: Maybe<Node>;
  /** insert data into the table: "node" */
  insert_node?: Maybe<Node_Mutation_Response>;
  /** insert a single row into the table: "node" */
  insert_node_one?: Maybe<Node>;
  /** update data of the table: "node" */
  update_node?: Maybe<Node_Mutation_Response>;
  /** update single row of the table: "node" */
  update_node_by_pk?: Maybe<Node>;
};


/** mutation root */
export type Mutation_RootDelete_NodeArgs = {
  where: Node_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Node_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_NodeArgs = {
  objects: Array<Node_Insert_Input>;
  on_conflict?: Maybe<Node_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Node_OneArgs = {
  object: Node_Insert_Input;
  on_conflict?: Maybe<Node_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_NodeArgs = {
  _inc?: Maybe<Node_Inc_Input>;
  _set?: Maybe<Node_Set_Input>;
  where: Node_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Node_By_PkArgs = {
  _inc?: Maybe<Node_Inc_Input>;
  _set?: Maybe<Node_Set_Input>;
  pk_columns: Node_Pk_Columns_Input;
};

/** columns and relationships of "node" */
export type Node = {
  __typename?: 'node';
  /** A computed field, executes function "children_count" */
  childCount?: Maybe<Scalars['bigint']>;
  /** An array relationship */
  children: Array<Node>;
  /** An aggregated array relationship */
  children_aggregate: Node_Aggregate;
  id: Scalars['Int'];
  isCompleted: Scalars['Boolean'];
  /** An array relationship */
  parent: Array<Node>;
  parentId?: Maybe<Scalars['Int']>;
  /** An aggregated array relationship */
  parent_aggregate: Node_Aggregate;
  progress: Scalars['Float'];
  /** A computed field, executes function "progress_computed" */
  progressComputed?: Maybe<Scalars['float8']>;
  title: Scalars['String'];
};


/** columns and relationships of "node" */
export type NodeChildrenArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** columns and relationships of "node" */
export type NodeChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** columns and relationships of "node" */
export type NodeParentArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** columns and relationships of "node" */
export type NodeParent_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};

/** aggregated selection of "node" */
export type Node_Aggregate = {
  __typename?: 'node_aggregate';
  aggregate?: Maybe<Node_Aggregate_Fields>;
  nodes: Array<Node>;
};

/** aggregate fields of "node" */
export type Node_Aggregate_Fields = {
  __typename?: 'node_aggregate_fields';
  avg?: Maybe<Node_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Node_Max_Fields>;
  min?: Maybe<Node_Min_Fields>;
  stddev?: Maybe<Node_Stddev_Fields>;
  stddev_pop?: Maybe<Node_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Node_Stddev_Samp_Fields>;
  sum?: Maybe<Node_Sum_Fields>;
  var_pop?: Maybe<Node_Var_Pop_Fields>;
  var_samp?: Maybe<Node_Var_Samp_Fields>;
  variance?: Maybe<Node_Variance_Fields>;
};


/** aggregate fields of "node" */
export type Node_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Node_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "node" */
export type Node_Aggregate_Order_By = {
  avg?: Maybe<Node_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Node_Max_Order_By>;
  min?: Maybe<Node_Min_Order_By>;
  stddev?: Maybe<Node_Stddev_Order_By>;
  stddev_pop?: Maybe<Node_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Node_Stddev_Samp_Order_By>;
  sum?: Maybe<Node_Sum_Order_By>;
  var_pop?: Maybe<Node_Var_Pop_Order_By>;
  var_samp?: Maybe<Node_Var_Samp_Order_By>;
  variance?: Maybe<Node_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "node" */
export type Node_Arr_Rel_Insert_Input = {
  data: Array<Node_Insert_Input>;
  on_conflict?: Maybe<Node_On_Conflict>;
};

/** aggregate avg on columns */
export type Node_Avg_Fields = {
  __typename?: 'node_avg_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "node" */
export type Node_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "node". All fields are combined with a logical 'AND'. */
export type Node_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Node_Bool_Exp>>>;
  _not?: Maybe<Node_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Node_Bool_Exp>>>;
  children?: Maybe<Node_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isCompleted?: Maybe<Boolean_Comparison_Exp>;
  parent?: Maybe<Node_Bool_Exp>;
  parentId?: Maybe<Int_Comparison_Exp>;
  progress?: Maybe<Float_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "node" */
export enum Node_Constraint {
  /** unique or primary key constraint */
  TreePkey = 'tree_pkey'
}

/** input type for incrementing integer column in table "node" */
export type Node_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Float']>;
};

/** input type for inserting data into table "node" */
export type Node_Insert_Input = {
  children?: Maybe<Node_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Node_Arr_Rel_Insert_Input>;
  parentId?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Node_Max_Fields = {
  __typename?: 'node_max_fields';
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "node" */
export type Node_Max_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Node_Min_Fields = {
  __typename?: 'node_min_fields';
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "node" */
export type Node_Min_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "node" */
export type Node_Mutation_Response = {
  __typename?: 'node_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Node>;
};

/** input type for inserting object relation for remote table "node" */
export type Node_Obj_Rel_Insert_Input = {
  data: Node_Insert_Input;
  on_conflict?: Maybe<Node_On_Conflict>;
};

/** on conflict condition type for table "node" */
export type Node_On_Conflict = {
  constraint: Node_Constraint;
  update_columns: Array<Node_Update_Column>;
  where?: Maybe<Node_Bool_Exp>;
};

/** ordering options when selecting data from "node" */
export type Node_Order_By = {
  children_aggregate?: Maybe<Node_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  isCompleted?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  parent_aggregate?: Maybe<Node_Aggregate_Order_By>;
  progress?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** primary key columns input for table: "node" */
export type Node_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "node" */
export enum Node_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Progress = 'progress',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "node" */
export type Node_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  parentId?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Node_Stddev_Fields = {
  __typename?: 'node_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "node" */
export type Node_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Node_Stddev_Pop_Fields = {
  __typename?: 'node_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "node" */
export type Node_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Node_Stddev_Samp_Fields = {
  __typename?: 'node_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "node" */
export type Node_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Node_Sum_Fields = {
  __typename?: 'node_sum_fields';
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by sum() on columns of table "node" */
export type Node_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** update columns of table "node" */
export enum Node_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Progress = 'progress',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Node_Var_Pop_Fields = {
  __typename?: 'node_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "node" */
export type Node_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Node_Var_Samp_Fields = {
  __typename?: 'node_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "node" */
export type Node_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Node_Variance_Fields = {
  __typename?: 'node_variance_fields';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "node" */
export type Node_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parentId?: Maybe<Order_By>;
  progress?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "node" */
  node: Array<Node>;
  /** fetch aggregated fields from the table: "node" */
  node_aggregate: Node_Aggregate;
  /** fetch data from the table: "node" using primary key columns */
  node_by_pk?: Maybe<Node>;
  /** execute function "root_node" which returns "node" */
  root_node: Array<Node>;
  /** execute function "root_node" and query aggregates on result of table type "node" */
  root_node_aggregate: Node_Aggregate;
};


/** query root */
export type Query_RootNodeArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** query root */
export type Query_RootNode_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** query root */
export type Query_RootNode_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRoot_NodeArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** query root */
export type Query_RootRoot_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "node" */
  node: Array<Node>;
  /** fetch aggregated fields from the table: "node" */
  node_aggregate: Node_Aggregate;
  /** fetch data from the table: "node" using primary key columns */
  node_by_pk?: Maybe<Node>;
  /** execute function "root_node" which returns "node" */
  root_node: Array<Node>;
  /** execute function "root_node" and query aggregates on result of table type "node" */
  root_node_aggregate: Node_Aggregate;
};


/** subscription root */
export type Subscription_RootNodeArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNode_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNode_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRoot_NodeArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoot_Node_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Node_Order_By>>;
  where?: Maybe<Node_Bool_Exp>;
};

export type NodeFragment = (
  { __typename?: 'node' }
  & Pick<Node, 'id' | 'title' | 'parentId' | 'isCompleted'>
  & { children_aggregate: (
    { __typename?: 'node_aggregate' }
    & { aggregate?: Maybe<(
      { __typename?: 'node_aggregate_fields' }
      & Pick<Node_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type RenameNodeMutationVariables = Exact<{
  nodeId: Scalars['Int'];
  nodeTitle: Scalars['String'];
}>;


export type RenameNodeMutation = (
  { __typename?: 'mutation_root' }
  & { update_node_by_pk?: Maybe<(
    { __typename?: 'node' }
    & NodeFragment
  )> }
);

export type CreateNodeMutationVariables = Exact<{
  parentNodeId: Scalars['Int'];
}>;


export type CreateNodeMutation = (
  { __typename?: 'mutation_root' }
  & { insert_node_one?: Maybe<(
    { __typename?: 'node' }
    & NodeFragment
  )> }
);

export type DeleteNodeMutationVariables = Exact<{
  nodeId: Scalars['Int'];
}>;


export type DeleteNodeMutation = (
  { __typename?: 'mutation_root' }
  & { delete_node_by_pk?: Maybe<(
    { __typename?: 'node' }
    & Pick<Node, 'id'>
  )> }
);

export type SetStatusMutationVariables = Exact<{
  nodeId: Scalars['Int'];
  value?: Maybe<Scalars['Boolean']>;
}>;


export type SetStatusMutation = (
  { __typename?: 'mutation_root' }
  & { update_node_by_pk?: Maybe<(
    { __typename?: 'node' }
    & NodeFragment
  )> }
);

export type GetNodeQueryVariables = Exact<{
  nodeId: Scalars['Int'];
}>;


export type GetNodeQuery = (
  { __typename?: 'query_root' }
  & { node_by_pk?: Maybe<(
    { __typename?: 'node' }
    & NodeFragment
  )> }
);

export type GetNodeWithChildrenQueryVariables = Exact<{
  nodeId: Scalars['Int'];
}>;


export type GetNodeWithChildrenQuery = (
  { __typename?: 'query_root' }
  & { node_by_pk?: Maybe<(
    { __typename?: 'node' }
    & { children: Array<(
      { __typename?: 'node' }
      & NodeFragment
    )> }
    & NodeFragment
  )> }
);

export type GetRootNodesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRootNodesQuery = (
  { __typename?: 'query_root' }
  & { root_node: Array<(
    { __typename?: 'node' }
    & { children: Array<(
      { __typename?: 'node' }
      & NodeFragment
    )> }
    & NodeFragment
  )> }
);

export const NodeFragmentDoc = gql`
    fragment node on node {
  id
  title
  parentId
  isCompleted
  children_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const RenameNodeDocument = gql`
    mutation renameNode($nodeId: Int!, $nodeTitle: String!) {
  update_node_by_pk(pk_columns: {id: $nodeId}, _set: {title: $nodeTitle}) {
    ...node
  }
}
    ${NodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RenameNodeGQL extends Apollo.Mutation<RenameNodeMutation, RenameNodeMutationVariables> {
    document = RenameNodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateNodeDocument = gql`
    mutation createNode($parentNodeId: Int!) {
  insert_node_one(object: {title: "_", parentId: $parentNodeId}) {
    ...node
  }
}
    ${NodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNodeGQL extends Apollo.Mutation<CreateNodeMutation, CreateNodeMutationVariables> {
    document = CreateNodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteNodeDocument = gql`
    mutation deleteNode($nodeId: Int!) {
  delete_node_by_pk(id: $nodeId) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteNodeGQL extends Apollo.Mutation<DeleteNodeMutation, DeleteNodeMutationVariables> {
    document = DeleteNodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetStatusDocument = gql`
    mutation setStatus($nodeId: Int!, $value: Boolean) {
  update_node_by_pk(pk_columns: {id: $nodeId}, _set: {isCompleted: $value}) {
    ...node
  }
}
    ${NodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SetStatusGQL extends Apollo.Mutation<SetStatusMutation, SetStatusMutationVariables> {
    document = SetStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetNodeDocument = gql`
    query getNode($nodeId: Int!) {
  node_by_pk(id: $nodeId) {
    ...node
  }
}
    ${NodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNodeGQL extends Apollo.Query<GetNodeQuery, GetNodeQueryVariables> {
    document = GetNodeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetNodeWithChildrenDocument = gql`
    query getNodeWithChildren($nodeId: Int!) {
  node_by_pk(id: $nodeId) {
    ...node
    children {
      ...node
    }
  }
}
    ${NodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNodeWithChildrenGQL extends Apollo.Query<GetNodeWithChildrenQuery, GetNodeWithChildrenQueryVariables> {
    document = GetNodeWithChildrenDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetRootNodesDocument = gql`
    query getRootNodes {
  root_node {
    ...node
    children {
      ...node
    }
  }
}
    ${NodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetRootNodesGQL extends Apollo.Query<GetRootNodesQuery, GetRootNodesQueryVariables> {
    document = GetRootNodesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }