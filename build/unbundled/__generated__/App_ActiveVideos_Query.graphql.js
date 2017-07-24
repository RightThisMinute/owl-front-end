/**
 * @flow
 * @relayHash 8be3daf13e6c063e87ef774056ade898
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type App_ActiveVideos_QueryResponse = {|
  +activeVideos: $ReadOnlyArray<?{| |}>;
|};
*/


/*
query App_ActiveVideos_Query {
  activeVideos {
    ...VideoList_activeVideos
    id
  }
}

fragment VideoList_activeVideos on Video {
  id
  ...Video_video
}

fragment Video_video on Video {
  id
  details {
    title
    thumbnailURL
  }
  snapshots: statsByAge(seconds: 86400) {
    ...StatsChart_snapshots
  }
}

fragment StatsChart_snapshots on VideoStats {
  recordedAt
  views
  likes
  dislikes
  favorites
  comments
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "App_ActiveVideos_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Video",
        "name": "activeVideos",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "VideoList_activeVideos",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "App_ActiveVideos_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "App_ActiveVideos_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Video",
        "name": "activeVideos",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Video",
            "selections": [
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
                    "kind": "InlineFragment",
                    "type": "VideoStats",
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "recordedAt",
                        "storageKey": null
                      },
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
                    ]
                  }
                ],
                "storageKey": "statsByAge{\"seconds\":86400}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query App_ActiveVideos_Query {\n  activeVideos {\n    ...VideoList_activeVideos\n    id\n  }\n}\n\nfragment VideoList_activeVideos on Video {\n  id\n  ...Video_video\n}\n\nfragment Video_video on Video {\n  id\n  details {\n    title\n    thumbnailURL\n  }\n  snapshots: statsByAge(seconds: 86400) {\n    ...StatsChart_snapshots\n  }\n}\n\nfragment StatsChart_snapshots on VideoStats {\n  recordedAt\n  views\n  likes\n  dislikes\n  favorites\n  comments\n}\n"
};

module.exports = batch;
