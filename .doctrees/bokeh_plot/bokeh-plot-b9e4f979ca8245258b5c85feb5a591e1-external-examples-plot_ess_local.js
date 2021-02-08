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
    
      
      
    
      var element = document.getElementById("723fb04f-f50f-49f3-9261-2e668d4dbab7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '723fb04f-f50f-49f3-9261-2e668d4dbab7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ef8459b9-3631-4590-85e7-e7e6cc5b024c":{"roots":{"references":[{"attributes":{"callback":null},"id":"17463","type":"HoverTool"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17491"},"ticker":{"id":"17453"}},"id":"17452","type":"LinearAxis"},{"attributes":{"source":{"id":"17481"}},"id":"17483","type":"CDSView"},{"attributes":{},"id":"17449","type":"BasicTicker"},{"attributes":{},"id":"17446","type":"LinearScale"},{"attributes":{"data_source":{"id":"17475"},"glyph":{"id":"17476"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17477"},"selection_glyph":null,"view":{"id":"17479"}},"id":"17478","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"17448"}],"center":[{"id":"17451"},{"id":"17455"}],"left":[{"id":"17452"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"17478"},{"id":"17482"},{"id":"17484"},{"id":"17485"}],"title":{"id":"17486"},"toolbar":{"id":"17466"},"toolbar_location":null,"x_range":{"id":"17440"},"x_scale":{"id":"17444"},"y_range":{"id":"17442"},"y_scale":{"id":"17446"}},"id":"17439","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17491","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17465","type":"PolyAnnotation"},{"attributes":{},"id":"17496","type":"UnionRenderers"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17484","type":"Span"},{"attributes":{},"id":"17462","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17480","type":"Dash"},{"attributes":{},"id":"17493","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17489"},"ticker":{"id":"17449"}},"id":"17448","type":"LinearAxis"},{"attributes":{},"id":"17494","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"17439"},0,0]]},"id":"17500","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17464","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17456"},{"id":"17457"},{"id":"17458"},{"id":"17459"},{"id":"17460"},{"id":"17461"},{"id":"17462"},{"id":"17463"}]},"id":"17466","type":"Toolbar"},{"attributes":{"toolbar":{"id":"17501"},"toolbar_location":"above"},"id":"17502","type":"ToolbarBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17476","type":"Circle"},{"attributes":{"source":{"id":"17475"}},"id":"17479","type":"CDSView"},{"attributes":{},"id":"17495","type":"Selection"},{"attributes":{"children":[{"id":"17502"},{"id":"17500"}]},"id":"17503","type":"Column"},{"attributes":{},"id":"17461","type":"UndoTool"},{"attributes":{},"id":"17442","type":"DataRange1d"},{"attributes":{},"id":"17444","type":"LinearScale"},{"attributes":{},"id":"17456","type":"ResetTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17495"},"selection_policy":{"id":"17496"}},"id":"17481","type":"ColumnDataSource"},{"attributes":{},"id":"17457","type":"PanTool"},{"attributes":{"data_source":{"id":"17481"},"glyph":{"id":"17480"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17483"}},"id":"17482","type":"GlyphRenderer"},{"attributes":{},"id":"17489","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17485","type":"Span"},{"attributes":{},"id":"17459","type":"WheelZoomTool"},{"attributes":{"text":"mu"},"id":"17486","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17493"},"selection_policy":{"id":"17494"}},"id":"17475","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"17452"},"dimension":1,"ticker":null},"id":"17455","type":"Grid"},{"attributes":{},"id":"17453","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17465"}},"id":"17460","type":"LassoSelectTool"},{"attributes":{},"id":"17440","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17477","type":"Circle"},{"attributes":{"overlay":{"id":"17464"}},"id":"17458","type":"BoxZoomTool"},{"attributes":{"toolbars":[{"id":"17466"}],"tools":[{"id":"17456"},{"id":"17457"},{"id":"17458"},{"id":"17459"},{"id":"17460"},{"id":"17461"},{"id":"17462"},{"id":"17463"}]},"id":"17501","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"17448"},"ticker":null},"id":"17451","type":"Grid"}],"root_ids":["17503"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"ef8459b9-3631-4590-85e7-e7e6cc5b024c","root_ids":["17503"],"roots":{"17503":"723fb04f-f50f-49f3-9261-2e668d4dbab7"}}];
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