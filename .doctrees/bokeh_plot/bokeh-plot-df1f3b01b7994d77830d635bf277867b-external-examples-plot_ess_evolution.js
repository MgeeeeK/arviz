(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("7eac53ae-4cbd-4e40-9009-2790ee72a93d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '7eac53ae-4cbd-4e40-9009-2790ee72a93d' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"0605e373-967d-4cce-a239-3eb668e19e2d":{"roots":{"references":[{"attributes":{"source":{"id":"17348"}},"id":"17352","type":"CDSView"},{"attributes":{"source":{"id":"17338"}},"id":"17342","type":"CDSView"},{"attributes":{"source":{"id":"17333"}},"id":"17337","type":"CDSView"},{"attributes":{},"id":"17369","type":"UnionRenderers"},{"attributes":{},"id":"17307","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"17324"}],"tools":[{"id":"17314"},{"id":"17315"},{"id":"17316"},{"id":"17317"},{"id":"17318"},{"id":"17319"},{"id":"17320"},{"id":"17321"}]},"id":"17376","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"17322"}},"id":"17316","type":"BoxZoomTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17351"},{"id":"17346"}]},"id":"17356","type":"LegendItem"},{"attributes":{},"id":"17319","type":"UndoTool"},{"attributes":{},"id":"17367","type":"UnionRenderers"},{"attributes":{},"id":"17298","type":"DataRange1d"},{"attributes":{"data_source":{"id":"17343"},"glyph":{"id":"17344"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17345"},"selection_glyph":null,"view":{"id":"17347"}},"id":"17346","type":"GlyphRenderer"},{"attributes":{},"id":"17360","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"17323"}},"id":"17318","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17323","type":"PolyAnnotation"},{"attributes":{},"id":"17371","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17366"},"selection_policy":{"id":"17367"}},"id":"17338","type":"ColumnDataSource"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17360"},"ticker":{"id":"17307"}},"id":"17306","type":"LinearAxis"},{"attributes":{"above":[{"id":"17354"}],"below":[{"id":"17306"}],"center":[{"id":"17309"},{"id":"17313"}],"left":[{"id":"17310"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17336"},{"id":"17341"},{"id":"17346"},{"id":"17351"},{"id":"17353"}],"title":{"id":"17357"},"toolbar":{"id":"17324"},"toolbar_location":null,"x_range":{"id":"17298"},"x_scale":{"id":"17302"},"y_range":{"id":"17300"},"y_scale":{"id":"17304"}},"id":"17297","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17314"},{"id":"17315"},{"id":"17316"},{"id":"17317"},{"id":"17318"},{"id":"17319"},{"id":"17320"},{"id":"17321"}]},"id":"17324","type":"Toolbar"},{"attributes":{},"id":"17362","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17345","type":"Line"},{"attributes":{},"id":"17304","type":"LinearScale"},{"attributes":{"data_source":{"id":"17348"},"glyph":{"id":"17349"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17350"},"selection_glyph":null,"view":{"id":"17352"}},"id":"17351","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"17310"},"dimension":1,"ticker":null},"id":"17313","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17364"},"selection_policy":{"id":"17365"}},"id":"17333","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17370"},"selection_policy":{"id":"17371"}},"id":"17348","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17350","type":"Circle"},{"attributes":{},"id":"17364","type":"Selection"},{"attributes":{},"id":"17366","type":"Selection"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17362"},"ticker":{"id":"17311"}},"id":"17310","type":"LinearAxis"},{"attributes":{},"id":"17317","type":"WheelZoomTool"},{"attributes":{},"id":"17365","type":"UnionRenderers"},{"attributes":{},"id":"17302","type":"LinearScale"},{"attributes":{"data_source":{"id":"17333"},"glyph":{"id":"17334"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17335"},"selection_glyph":null,"view":{"id":"17337"}},"id":"17336","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17368"},"selection_policy":{"id":"17369"}},"id":"17343","type":"ColumnDataSource"},{"attributes":{},"id":"17368","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17322","type":"BoxAnnotation"},{"attributes":{},"id":"17320","type":"SaveTool"},{"attributes":{"axis":{"id":"17306"},"ticker":null},"id":"17309","type":"Grid"},{"attributes":{},"id":"17315","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17335","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17349","type":"Circle"},{"attributes":{"children":[{"id":"17377"},{"id":"17375"}]},"id":"17378","type":"Column"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17353","type":"Span"},{"attributes":{"callback":null},"id":"17321","type":"HoverTool"},{"attributes":{"toolbar":{"id":"17376"},"toolbar_location":"above"},"id":"17377","type":"ToolbarBox"},{"attributes":{"click_policy":"hide","items":[{"id":"17355"},{"id":"17356"}],"location":"center_right","orientation":"horizontal"},"id":"17354","type":"Legend"},{"attributes":{},"id":"17370","type":"Selection"},{"attributes":{"children":[[{"id":"17297"},0,0]]},"id":"17375","type":"GridBox"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17336"},{"id":"17341"}]},"id":"17355","type":"LegendItem"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17344","type":"Line"},{"attributes":{},"id":"17300","type":"DataRange1d"},{"attributes":{},"id":"17314","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17334","type":"Circle"},{"attributes":{"data_source":{"id":"17338"},"glyph":{"id":"17339"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17340"},"selection_glyph":null,"view":{"id":"17342"}},"id":"17341","type":"GlyphRenderer"},{"attributes":{"text":"b"},"id":"17357","type":"Title"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17339","type":"Line"},{"attributes":{"source":{"id":"17343"}},"id":"17347","type":"CDSView"},{"attributes":{},"id":"17311","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17340","type":"Line"}],"root_ids":["17378"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"0605e373-967d-4cce-a239-3eb668e19e2d","root_ids":["17378"],"roots":{"17378":"7eac53ae-4cbd-4e40-9009-2790ee72a93d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();