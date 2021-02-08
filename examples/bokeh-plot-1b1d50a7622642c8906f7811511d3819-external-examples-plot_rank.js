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
    
      
      
    
      var element = document.getElementById("3759ec9b-08eb-45fa-8cba-2941907f7a42");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3759ec9b-08eb-45fa-8cba-2941907f7a42' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e1b2b299-5d72-47bc-b561-00dcc5be6cec":{"roots":{"references":[{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40039"},"selection_policy":{"id":"40040"}},"id":"40000","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"39993","type":"Span"},{"attributes":{"ticks":[0,1,2,3]},"id":"39984","type":"FixedTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39907"},{"id":"39908"},{"id":"39909"},{"id":"39910"},{"id":"39911"},{"id":"39912"},{"id":"39913"},{"id":"39914"}]},"id":"39917","type":"Toolbar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40001","type":"VBar"},{"attributes":{"data_source":{"id":"40000"},"glyph":{"id":"40001"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40002"},"selection_glyph":null,"view":{"id":"40004"}},"id":"40003","type":"GlyphRenderer"},{"attributes":{},"id":"40037","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39950","type":"PolyAnnotation"},{"attributes":{},"id":"40019","type":"BasicTickFormatter"},{"attributes":{},"id":"40038","type":"UnionRenderers"},{"attributes":{},"id":"39895","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39915","type":"BoxAnnotation"},{"attributes":{},"id":"39929","type":"LinearScale"},{"attributes":{},"id":"40039","type":"Selection"},{"attributes":{"below":[{"id":"39933"}],"center":[{"id":"39936"},{"id":"39940"},{"id":"39993"},{"id":"39999"},{"id":"40005"},{"id":"40011"}],"left":[{"id":"39937"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"39991"},{"id":"39997"},{"id":"40003"},{"id":"40009"}],"title":{"id":"40014"},"toolbar":{"id":"39951"},"toolbar_location":null,"x_range":{"id":"39891"},"x_scale":{"id":"39929"},"y_range":{"id":"39893"},"y_scale":{"id":"39931"}},"id":"39926","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40019"},"ticker":{"id":"39984"}},"id":"39903","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"39916","type":"PolyAnnotation"},{"attributes":{},"id":"40040","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"39916"}},"id":"39911","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"39899"}],"center":[{"id":"39902"},{"id":"39906"},{"id":"39965"},{"id":"39971"},{"id":"39977"},{"id":"39983"}],"left":[{"id":"39903"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"39963"},{"id":"39969"},{"id":"39975"},{"id":"39981"}],"title":{"id":"39986"},"toolbar":{"id":"39917"},"toolbar_location":null,"x_range":{"id":"39891"},"x_scale":{"id":"39895"},"y_range":{"id":"39893"},"y_scale":{"id":"39897"}},"id":"39890","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"39910","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"39903"},"dimension":1,"ticker":null},"id":"39906","type":"Grid"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40020"},"selection_policy":{"id":"40021"}},"id":"39960","type":"ColumnDataSource"},{"attributes":{},"id":"40041","type":"Selection"},{"attributes":{"children":[[{"id":"39890"},0,0],[{"id":"39926"},0,1]]},"id":"40046","type":"GridBox"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"39971","type":"Span"},{"attributes":{},"id":"39907","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39962","type":"VBar"},{"attributes":{},"id":"40032","type":"BasicTickFormatter"},{"attributes":{},"id":"40042","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"39915"}},"id":"39909","type":"BoxZoomTool"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"39965","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39968","type":"VBar"},{"attributes":{"source":{"id":"39960"}},"id":"39964","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40035"},"selection_policy":{"id":"40036"}},"id":"39988","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"39960"},"glyph":{"id":"39961"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39962"},"selection_glyph":null,"view":{"id":"39964"}},"id":"39963","type":"GlyphRenderer"},{"attributes":{},"id":"39908","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40022"},"selection_policy":{"id":"40023"}},"id":"39966","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39967","type":"VBar"},{"attributes":{"data_source":{"id":"39966"},"glyph":{"id":"39967"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39968"},"selection_glyph":null,"view":{"id":"39970"}},"id":"39969","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"39914","type":"HoverTool"},{"attributes":{},"id":"40020","type":"Selection"},{"attributes":{"source":{"id":"39966"}},"id":"39970","type":"CDSView"},{"attributes":{"axis":{"id":"39899"},"ticker":null},"id":"39902","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39974","type":"VBar"},{"attributes":{"axis":{"id":"39933"},"ticker":null},"id":"39936","type":"Grid"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"39977","type":"Span"},{"attributes":{},"id":"40021","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"39948","type":"HoverTool"},{"attributes":{"data_source":{"id":"39972"},"glyph":{"id":"39973"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39974"},"selection_glyph":null,"view":{"id":"39976"}},"id":"39975","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"39978"},"glyph":{"id":"39979"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39980"},"selection_glyph":null,"view":{"id":"39982"}},"id":"39981","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40034"},"ticker":{"id":"40012"}},"id":"39937","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39973","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40032"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39934"}},"id":"39933","type":"LinearAxis"},{"attributes":{},"id":"40034","type":"BasicTickFormatter"},{"attributes":{},"id":"39934","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40024"},"selection_policy":{"id":"40025"}},"id":"39972","type":"ColumnDataSource"},{"attributes":{"source":{"id":"39972"}},"id":"39976","type":"CDSView"},{"attributes":{},"id":"39912","type":"UndoTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39980","type":"VBar"},{"attributes":{},"id":"39893","type":"DataRange1d"},{"attributes":{"data_source":{"id":"40006"},"glyph":{"id":"40007"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40008"},"selection_glyph":null,"view":{"id":"40010"}},"id":"40009","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"39937"},"dimension":1,"ticker":null},"id":"39940","type":"Grid"},{"attributes":{"source":{"id":"39978"}},"id":"39982","type":"CDSView"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40008","type":"VBar"},{"attributes":{"text":"mu"},"id":"40014","type":"Title"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39979","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39989","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39961","type":"VBar"},{"attributes":{},"id":"40022","type":"Selection"},{"attributes":{"overlay":{"id":"39949"}},"id":"39943","type":"BoxZoomTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40026"},"selection_policy":{"id":"40027"}},"id":"39978","type":"ColumnDataSource"},{"attributes":{},"id":"39942","type":"PanTool"},{"attributes":{},"id":"39941","type":"ResetTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40041"},"selection_policy":{"id":"40042"}},"id":"40006","type":"ColumnDataSource"},{"attributes":{},"id":"40023","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39990","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40007","type":"VBar"},{"attributes":{},"id":"39947","type":"SaveTool"},{"attributes":{"text":"tau"},"id":"39986","type":"Title"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40011","type":"Span"},{"attributes":{},"id":"39944","type":"WheelZoomTool"},{"attributes":{"source":{"id":"40000"}},"id":"40004","type":"CDSView"},{"attributes":{"overlay":{"id":"39950"}},"id":"39945","type":"LassoSelectTool"},{"attributes":{},"id":"39900","type":"BasicTicker"},{"attributes":{"source":{"id":"40006"}},"id":"40010","type":"CDSView"},{"attributes":{},"id":"39946","type":"UndoTool"},{"attributes":{"toolbars":[{"id":"39917"},{"id":"39951"}],"tools":[{"id":"39907"},{"id":"39908"},{"id":"39909"},{"id":"39910"},{"id":"39911"},{"id":"39912"},{"id":"39913"},{"id":"39914"},{"id":"39941"},{"id":"39942"},{"id":"39943"},{"id":"39944"},{"id":"39945"},{"id":"39946"},{"id":"39947"},{"id":"39948"}]},"id":"40047","type":"ProxyToolbar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40017"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"39900"}},"id":"39899","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39941"},{"id":"39942"},{"id":"39943"},{"id":"39944"},{"id":"39945"},{"id":"39946"},{"id":"39947"},{"id":"39948"}]},"id":"39951","type":"Toolbar"},{"attributes":{},"id":"39931","type":"LinearScale"},{"attributes":{"source":{"id":"39994"}},"id":"39998","type":"CDSView"},{"attributes":{"children":[{"id":"40048"},{"id":"40046"}]},"id":"40049","type":"Column"},{"attributes":{"source":{"id":"39988"}},"id":"39992","type":"CDSView"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"39983","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39995","type":"VBar"},{"attributes":{},"id":"39897","type":"LinearScale"},{"attributes":{},"id":"40024","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"39996","type":"VBar"},{"attributes":{},"id":"39891","type":"DataRange1d"},{"attributes":{"data_source":{"id":"39988"},"glyph":{"id":"39989"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39990"},"selection_glyph":null,"view":{"id":"39992"}},"id":"39991","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"39994"},"glyph":{"id":"39995"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"39996"},"selection_glyph":null,"view":{"id":"39998"}},"id":"39997","type":"GlyphRenderer"},{"attributes":{},"id":"40025","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40002","type":"VBar"},{"attributes":{"toolbar":{"id":"40047"},"toolbar_location":"above"},"id":"40048","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40037"},"selection_policy":{"id":"40038"}},"id":"39994","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40005","type":"Span"},{"attributes":{"ticks":[0,1,2,3]},"id":"40012","type":"FixedTicker"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"39999","type":"Span"},{"attributes":{},"id":"40017","type":"BasicTickFormatter"},{"attributes":{},"id":"40035","type":"Selection"},{"attributes":{},"id":"39913","type":"SaveTool"},{"attributes":{},"id":"40026","type":"Selection"},{"attributes":{},"id":"40036","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"39949","type":"BoxAnnotation"},{"attributes":{},"id":"40027","type":"UnionRenderers"}],"root_ids":["40049"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e1b2b299-5d72-47bc-b561-00dcc5be6cec","root_ids":["40049"],"roots":{"40049":"3759ec9b-08eb-45fa-8cba-2941907f7a42"}}];
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