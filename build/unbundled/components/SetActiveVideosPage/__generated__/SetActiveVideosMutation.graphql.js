/**
 * @flow
 * @relayHash 4abf544b0bef8c8ac798dd6e6a81ed88
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SetActiveVideosMutationVariables = {|
  input: {
    ids: $ReadOnlyArray<?string>;
    clientMutationId: string;
  };
|};

export type SetActiveVideosMutationResponse = {|
  +setActiveVideos: ?{|
    +clientMutationId: string;
  |};
|};
*/


/*
mutation SetActiveVideosMutation(
  $input: SetActiveVideosInput!
) {
  setActiveVideos(input: $input) {
    clientMutationId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SetActiveVideosInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SetActiveVideosMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SetActiveVideosInput!"
          }
        ],
        "concreteType": "SetActiveVideosPayload",
        "name": "setActiveVideos",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SetActiveVideosMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "SetActiveVideosInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SetActiveVideosMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "SetActiveVideosInput!"
          }
        ],
        "concreteType": "SetActiveVideosPayload",
        "name": "setActiveVideos",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation SetActiveVideosMutation(\n  $input: SetActiveVideosInput!\n) {\n  setActiveVideos(input: $input) {\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
