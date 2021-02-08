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
    
      
      
    
      var element = document.getElementById("b8436e52-375b-4cfc-afcd-4c1c77fbc5f8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b8436e52-375b-4cfc-afcd-4c1c77fbc5f8' but no matching script tag was found.")
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
                    
                  var docs_json = '{"1687b7a6-bc2a-4a44-ba76-d203237f8f85":{"roots":{"references":[{"attributes":{},"id":"14940","type":"Selection"},{"attributes":{"overlay":{"id":"14897"}},"id":"14892","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14911","type":"Triangle"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14915","type":"MultiLine"},{"attributes":{},"id":"14948","type":"Selection"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"14934","type":"Span"},{"attributes":{"source":{"id":"14924"}},"id":"14928","type":"CDSView"},{"attributes":{},"id":"14947","type":"UnionRenderers"},{"attributes":{},"id":"14946","type":"Selection"},{"attributes":{"callback":null},"id":"14895","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14931","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14926","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14916","type":"MultiLine"},{"attributes":{"children":[{"id":"14955"},{"id":"14953"}]},"id":"14956","type":"Column"},{"attributes":{},"id":"14939","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"14896","type":"BoxAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"14948"},"selection_policy":{"id":"14949"}},"id":"14929","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"14896"}},"id":"14890","type":"BoxZoomTool"},{"attributes":{},"id":"14893","type":"UndoTool"},{"attributes":{"data_source":{"id":"14909"},"glyph":{"id":"14910"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14911"},"selection_glyph":null,"view":{"id":"14913"}},"id":"14912","type":"GlyphRenderer"},{"attributes":{},"id":"14942","type":"Selection"},{"attributes":{"source":{"id":"14919"}},"id":"14923","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"14897","type":"PolyAnnotation"},{"attributes":{},"id":"14941","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14929"},"glyph":{"id":"14930"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14931"},"selection_glyph":null,"view":{"id":"14933"}},"id":"14932","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"14880"},"ticker":null},"id":"14883","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14921","type":"Circle"},{"attributes":{},"id":"14888","type":"ResetTool"},{"attributes":{},"id":"14881","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"14940"},"selection_policy":{"id":"14941"}},"id":"14909","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"14944"},"selection_policy":{"id":"14945"}},"id":"14919","type":"ColumnDataSource"},{"attributes":{"axis_label":"Log","formatter":{"id":"14937"},"ticker":{"id":"14881"}},"id":"14880","type":"LinearAxis"},{"attributes":{},"id":"14889","type":"PanTool"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"14925","type":"MultiLine"},{"attributes":{},"id":"14944","type":"Selection"},{"attributes":{"formatter":{"id":"14939"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"14907"}},"id":"14884","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14910","type":"Triangle"},{"attributes":{"toolbars":[{"id":"14898"}],"tools":[{"id":"14888"},{"id":"14889"},{"id":"14890"},{"id":"14891"},{"id":"14892"},{"id":"14893"},{"id":"14894"},{"id":"14895"}]},"id":"14954","type":"ProxyToolbar"},{"attributes":{},"id":"14943","type":"UnionRenderers"},{"attributes":{"axis":{"id":"14884"},"dimension":1,"ticker":null},"id":"14887","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14920","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"14888"},{"id":"14889"},{"id":"14890"},{"id":"14891"},{"id":"14892"},{"id":"14893"},{"id":"14894"},{"id":"14895"}]},"id":"14898","type":"Toolbar"},{"attributes":{},"id":"14891","type":"WheelZoomTool"},{"attributes":{"text":""},"id":"14935","type":"Title"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"14942"},"selection_policy":{"id":"14943"}},"id":"14914","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"14880"}],"center":[{"id":"14883"},{"id":"14887"}],"left":[{"id":"14884"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"14912"},{"id":"14917"},{"id":"14922"},{"id":"14927"},{"id":"14932"},{"id":"14934"}],"title":{"id":"14935"},"toolbar":{"id":"14898"},"toolbar_location":null,"x_range":{"id":"14872"},"x_scale":{"id":"14876"},"y_range":{"id":"14874"},"y_scale":{"id":"14878"}},"id":"14871","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"14914"}},"id":"14918","type":"CDSView"},{"attributes":{},"id":"14894","type":"SaveTool"},{"attributes":{},"id":"14876","type":"LinearScale"},{"attributes":{"data_source":{"id":"14914"},"glyph":{"id":"14915"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14916"},"selection_glyph":null,"view":{"id":"14918"}},"id":"14917","type":"GlyphRenderer"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14907","type":"FixedTicker"},{"attributes":{},"id":"14949","type":"UnionRenderers"},{"attributes":{},"id":"14872","type":"DataRange1d"},{"attributes":{},"id":"14945","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"14924"},"glyph":{"id":"14925"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14926"},"selection_glyph":null,"view":{"id":"14928"}},"id":"14927","type":"GlyphRenderer"},{"attributes":{"source":{"id":"14909"}},"id":"14913","type":"CDSView"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"14946"},"selection_policy":{"id":"14947"}},"id":"14924","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14930","type":"Circle"},{"attributes":{"toolbar":{"id":"14954"},"toolbar_location":"above"},"id":"14955","type":"ToolbarBox"},{"attributes":{},"id":"14878","type":"LinearScale"},{"attributes":{"source":{"id":"14929"}},"id":"14933","type":"CDSView"},{"attributes":{"data_source":{"id":"14919"},"glyph":{"id":"14920"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14921"},"selection_glyph":null,"view":{"id":"14923"}},"id":"14922","type":"GlyphRenderer"},{"attributes":{},"id":"14937","type":"BasicTickFormatter"},{"attributes":{"end":0.5,"start":-1.5},"id":"14874","type":"DataRange1d"},{"attributes":{"children":[[{"id":"14871"},0,0]]},"id":"14953","type":"GridBox"}],"root_ids":["14956"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"1687b7a6-bc2a-4a44-ba76-d203237f8f85","root_ids":["14956"],"roots":{"14956":"b8436e52-375b-4cfc-afcd-4c1c77fbc5f8"}}];
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