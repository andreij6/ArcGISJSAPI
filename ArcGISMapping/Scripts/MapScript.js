
require(["esri/map",
  "esri/geometry/Point",
  "esri/graphic",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/InfoTemplate",
  "dojo/_base/Color",
  "dojo/query",
  "dojo/on",
  "dojo/dom",
  "dojo/domReady!",
  "esri/SpatialReference"
],
  function (Map, Point, Graphic, SimpleMarkerSymbol, SimpleLineSymbol, InfoTemplate, Color, query, on, dom, SpatialReference) {
      "use strict"

      var pointSymbol,
          map;

      // Create map
      map = new Map("mapDiv", {
          basemap: "gray",
          center: [-79.40, 43.55],
          zoom: 3,
      });

      // Create symbols for the graphics
      pointSymbol = createPointSymbol();

      // Wire event
      on(map, "load", addGraphics);

      // Wait for to Map Loads
      function addGraphics() {
          var pt = new Point(
              {
                  "x": -122.65,
                  "y": 45.53,
                  "spatialReference":
                      {
                          "wkid": 4326
                      }
              });
          addPoint(pt);
      }

      // Add point graphic
      function addPoint(pt) {
          var graphic = new Graphic(pt, pointSymbol);
          map.graphics.add(graphic);
      }

      function createPointSymbol() {
          return new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_DIAMOND, 7,
            new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
            new Color([255, 0, 0]), 1),
            new Color([255, 0, 0, 0.75]));
      }

  }
);