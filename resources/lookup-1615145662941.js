(function(window, undefined) {
  var dictionary = {
    "68942202-c367-47ae-ba90-f6900560980e": "PuttingScreen",
    "626718b4-45c6-4b52-87b1-8b933a1a5bd4": "setScoreScreen",
    "8d1fa70d-a858-49ce-b997-c9fb3f5897d7": "ScorecardScreen",
    "ec08f0d2-bfc8-468f-b2b3-43179c508690": "HelpScreen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "HomeScreen",
    "735fcef3-f253-498b-994b-377df6043612": "MeasureScreen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);