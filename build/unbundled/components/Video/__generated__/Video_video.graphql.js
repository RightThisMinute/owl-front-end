/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Video_video = {|
  +id: string;
  +details: ?{|
    +title: string;
    +thumbnailURL: string;
  |};
  +snapshots: $ReadOnlyArray<?{| |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Video_video",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "VideoDetails",
      "name": "details",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "title",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "thumbnailURL",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": "snapshots",
      "args": [
        {
          "kind": "Literal",
          "name": "seconds",
          "value": 86400,
          "type": "Int!"
        }
      ],
      "concreteType": "VideoStats",
      "name": "statsByAge",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "StatsChart_snapshots",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "StatsChange_snapshots",
          "args": null
        }
      ],
      "storageKey": "statsByAge{\"seconds\":86400}"
    }
  ],
  "type": "Video"
};

module.exports = fragment;
