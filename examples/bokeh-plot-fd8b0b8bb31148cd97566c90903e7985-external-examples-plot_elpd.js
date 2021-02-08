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
    
      
      
    
      var element = document.getElementById("00ec9cda-4744-46b2-970b-912d4002b829");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '00ec9cda-4744-46b2-970b-912d4002b829' but no matching script tag was found.")
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
                    
                  var docs_json = '{"8651df65-c215-4f59-8895-21177a7dbe0e":{"roots":{"references":[{"attributes":{},"id":"17077","type":"WheelZoomTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17097","type":"Title"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17102"},"ticker":{"id":"17071"}},"id":"17070","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17093","type":"Cross"},{"attributes":{},"id":"17060","type":"DataRange1d"},{"attributes":{"toolbar":{"id":"17110"},"toolbar_location":"above"},"id":"17111","type":"ToolbarBox"},{"attributes":{},"id":"17064","type":"LinearScale"},{"attributes":{"axis":{"id":"17066"},"ticker":null},"id":"17069","type":"Grid"},{"attributes":{},"id":"17074","type":"ResetTool"},{"attributes":{"children":[{"id":"17111"},{"id":"17109"}]},"id":"17112","type":"Column"},{"attributes":{},"id":"17071","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17074"},{"id":"17075"},{"id":"17076"},{"id":"17077"},{"id":"17078"},{"id":"17079"},{"id":"17080"},{"id":"17081"}]},"id":"17084","type":"Toolbar"},{"attributes":{},"id":"17075","type":"PanTool"},{"attributes":{},"id":"17080","type":"SaveTool"},{"attributes":{},"id":"17062","type":"LinearScale"},{"attributes":{"below":[{"id":"17066"}],"center":[{"id":"17069"},{"id":"17073"}],"left":[{"id":"17070"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"17095"}],"title":{"id":"17097"},"toolbar":{"id":"17084"},"toolbar_location":null,"x_range":{"id":"17058"},"x_scale":{"id":"17062"},"y_range":{"id":"17060"},"y_scale":{"id":"17064"}},"id":"17057","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"17082"}},"id":"17076","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17094"}},"id":"17096","type":"CDSView"},{"attributes":{},"id":"17102","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"17057"},0,0]]},"id":"17109","type":"GridBox"},{"attributes":{"data_source":{"id":"17094"},"glyph":{"id":"17093"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17096"}},"id":"17095","type":"GlyphRenderer"},{"attributes":{},"id":"17058","type":"DataRange1d"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17104"},"selection_policy":{"id":"17105"}},"id":"17094","type":"ColumnDataSource"},{"attributes":{},"id":"17105","type":"UnionRenderers"},{"attributes":{},"id":"17100","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"17084"}],"tools":[{"id":"17074"},{"id":"17075"},{"id":"17076"},{"id":"17077"},{"id":"17078"},{"id":"17079"},{"id":"17080"},{"id":"17081"}]},"id":"17110","type":"ProxyToolbar"},{"attributes":{},"id":"17079","type":"UndoTool"},{"attributes":{"overlay":{"id":"17083"}},"id":"17078","type":"LassoSelectTool"},{"attributes":{},"id":"17104","type":"Selection"},{"attributes":{},"id":"17067","type":"BasicTicker"},{"attributes":{"callback":null},"id":"17081","type":"HoverTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17083","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"17070"},"dimension":1,"ticker":null},"id":"17073","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17082","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"17100"},"ticker":{"id":"17067"}},"id":"17066","type":"LinearAxis"}],"root_ids":["17112"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"8651df65-c215-4f59-8895-21177a7dbe0e","root_ids":["17112"],"roots":{"17112":"00ec9cda-4744-46b2-970b-912d4002b829"}}];
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