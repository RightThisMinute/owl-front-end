/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type VideoList_activeVideos = $ReadOnlyArray<{|
  +id: string;
  +snapshots: $ReadOnlyArray<?{|
    +views: string;
    +likes: string;
    +dislikes: string;
    +favorites: string;
    +comments: string;
  |}>;
|}>;
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "statsAge",
      "type": "Int!"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "VideoList_activeVideos",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Video_video",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": "snapshots",
      "args": [
        {
          "kind": "Variable",
          "name": "seconds",
          "variableName": "statsAge",
          "type": "Int!"
        }
      ],
      "concreteType": "VideoStats",
      "name": "statsByAge",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "views",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "likes",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "dislikes",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "favorites",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "comments",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Video"
};

module.exports = fragment;
