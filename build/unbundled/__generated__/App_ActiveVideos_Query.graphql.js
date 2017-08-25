/**
 * @flow
 * @relayHash 341c7d7af5114c3be400b9da16807602
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
query App_ActiveVideos_Query(
  $statsAge: Int!
) {
  activeVideos {
    ...SetActiveVideosPage_activeVideos
    ...VideoList_activeVideos
    id
  }
}

fragment SetActiveVideosPage_activeVideos on Video {
  id
}

fragment VideoList_activeVideos on Video {
  id
  snapshots: statsByAge(seconds: $statsAge) {
    views
    likes
    dislikes
    favorites
    comments
  }
  ...Video_video
}

fragment Video_video on Video {
  id
  details {
    title
    thumbnailURL
  }
  snapshots: statsByAge(seconds: $statsAge) {
    ...StatsChart_snapshots
    ...StatsChange_snapshots
  }
}

fragment StatsChart_snapshots on VideoStats {
  views
  likes
  dislikes
  favorites
  comments
}

fragment StatsChange_snapshots on VideoStats {
  views
  likes
  dislikes
  favorites
  comments
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "statsAge",
        "type": "Int!",
        "defaultValue": null
      }
    ],
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
            "name": "SetActiveVideosPage_activeVideos",
            "args": null
          },
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
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "statsAge",
        "type": "Int!",
        "defaultValue": null
      }
    ],
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
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query App_ActiveVideos_Query(\n  $statsAge: Int!\n) {\n  activeVideos {\n    ...SetActiveVideosPage_activeVideos\n    ...VideoList_activeVideos\n    id\n  }\n}\n\nfragment SetActiveVideosPage_activeVideos on Video {\n  id\n}\n\nfragment VideoList_activeVideos on Video {\n  id\n  snapshots: statsByAge(seconds: $statsAge) {\n    views\n    likes\n    dislikes\n    favorites\n    comments\n  }\n  ...Video_video\n}\n\nfragment Video_video on Video {\n  id\n  details {\n    title\n    thumbnailURL\n  }\n  snapshots: statsByAge(seconds: $statsAge) {\n    ...StatsChart_snapshots\n    ...StatsChange_snapshots\n  }\n}\n\nfragment StatsChart_snapshots on VideoStats {\n  views\n  likes\n  dislikes\n  favorites\n  comments\n}\n\nfragment StatsChange_snapshots on VideoStats {\n  views\n  likes\n  dislikes\n  favorites\n  comments\n}\n"
};

module.exports = batch;
