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
    
      
      
    
      var element = document.getElementById("a12ba6fa-1c04-48ec-a1e8-1e02d048699e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a12ba6fa-1c04-48ec-a1e8-1e02d048699e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"53b3d993-df34-4476-9726-1a0c4e55771b":{"roots":{"references":[{"attributes":{},"id":"17659","type":"ResetTool"},{"attributes":{},"id":"17831","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"17807"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"17802"}},"id":"17655","type":"LinearAxis"},{"attributes":{},"id":"17853","type":"UnionRenderers"},{"attributes":{},"id":"17805","type":"BasicTickFormatter"},{"attributes":{},"id":"17660","type":"PanTool"},{"attributes":{},"id":"17834","type":"Selection"},{"attributes":{},"id":"17830","type":"Selection"},{"attributes":{"data_source":{"id":"17768"},"glyph":{"id":"17769"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17770"},"selection_glyph":null,"view":{"id":"17772"}},"id":"17771","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"17780","type":"Circle"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"17779","type":"Circle"},{"attributes":{},"id":"17827","type":"UnionRenderers"},{"attributes":{},"id":"17823","type":"UnionRenderers"},{"attributes":{},"id":"17662","type":"WheelZoomTool"},{"attributes":{},"id":"17855","type":"UnionRenderers"},{"attributes":{},"id":"17850","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"17764","type":"Circle"},{"attributes":{},"id":"17647","type":"LinearScale"},{"attributes":{},"id":"17852","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"17848"},"selection_policy":{"id":"17849"}},"id":"17778","type":"ColumnDataSource"},{"attributes":{},"id":"17828","type":"Selection"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"17808"},"selection_policy":{"id":"17809"}},"id":"17678","type":"ColumnDataSource"},{"attributes":{},"id":"17825","type":"UnionRenderers"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"17844"},"selection_policy":{"id":"17845"}},"id":"17768","type":"ColumnDataSource"},{"attributes":{},"id":"17829","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17667"}},"id":"17661","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"17668"}},"id":"17663","type":"LassoSelectTool"},{"attributes":{},"id":"17822","type":"Selection"},{"attributes":{},"id":"17824","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17769","type":"Line"},{"attributes":{},"id":"17664","type":"UndoTool"},{"attributes":{"data_source":{"id":"17778"},"glyph":{"id":"17779"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17780"},"selection_glyph":null,"view":{"id":"17782"}},"id":"17781","type":"GlyphRenderer"},{"attributes":{},"id":"17652","type":"BasicTicker"},{"attributes":{},"id":"17665","type":"SaveTool"},{"attributes":{},"id":"17832","type":"Selection"},{"attributes":{"axis":{"id":"17651"},"ticker":null},"id":"17654","type":"Grid"},{"attributes":{},"id":"17826","type":"Selection"},{"attributes":{"callback":null},"id":"17666","type":"HoverTool"},{"attributes":{"source":{"id":"17768"}},"id":"17772","type":"CDSView"},{"attributes":{"axis":{"id":"17655"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"17658","type":"Grid"},{"attributes":{},"id":"17807","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"17748"},"glyph":{"id":"17749"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17750"},"selection_glyph":null,"view":{"id":"17752"}},"id":"17751","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17770","type":"Line"},{"attributes":{"formatter":{"id":"17805"},"ticker":{"id":"17652"}},"id":"17651","type":"LinearAxis"},{"attributes":{"data_source":{"id":"17773"},"glyph":{"id":"17774"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17775"},"selection_glyph":null,"view":{"id":"17777"}},"id":"17776","type":"GlyphRenderer"},{"attributes":{},"id":"17854","type":"Selection"},{"attributes":{},"id":"17833","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"17659"},{"id":"17660"},{"id":"17661"},{"id":"17662"},{"id":"17663"},{"id":"17664"},{"id":"17665"},{"id":"17666"}]},"id":"17669","type":"Toolbar"},{"attributes":{},"id":"17649","type":"LinearScale"},{"attributes":{},"id":"17851","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"17846"},"selection_policy":{"id":"17847"}},"id":"17773","type":"ColumnDataSource"},{"attributes":{},"id":"17835","type":"UnionRenderers"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"17822"},"selection_policy":{"id":"17823"}},"id":"17713","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"17734","type":"Circle"},{"attributes":{"source":{"id":"17723"}},"id":"17727","type":"CDSView"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"17749","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17774","type":"Line"},{"attributes":{"toolbar":{"id":"17860"},"toolbar_location":"above"},"id":"17861","type":"ToolbarBox"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17679","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17710","type":"Line"},{"attributes":{"data_source":{"id":"17703"},"glyph":{"id":"17704"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17705"},"selection_glyph":null,"view":{"id":"17707"}},"id":"17706","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17758"},"glyph":{"id":"17759"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17760"},"selection_glyph":null,"view":{"id":"17762"}},"id":"17761","type":"GlyphRenderer"},{"attributes":{},"id":"17848","type":"Selection"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"17840"},"selection_policy":{"id":"17841"}},"id":"17758","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17678"},"glyph":{"id":"17679"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17680"},"selection_glyph":null,"view":{"id":"17682"}},"id":"17681","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17783"},"glyph":{"id":"17784"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17785"},"selection_glyph":null,"view":{"id":"17787"}},"id":"17786","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17693"}},"id":"17697","type":"CDSView"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"17832"},"selection_policy":{"id":"17833"}},"id":"17738","type":"ColumnDataSource"},{"attributes":{},"id":"17843","type":"UnionRenderers"},{"attributes":{},"id":"17846","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17715","type":"Line"},{"attributes":{},"id":"17819","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17733"},"glyph":{"id":"17734"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17735"},"selection_glyph":null,"view":{"id":"17737"}},"id":"17736","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17763"}},"id":"17767","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17680","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17695","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17724","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17785","type":"Line"},{"attributes":{},"id":"17840","type":"Selection"},{"attributes":{"data_source":{"id":"17743"},"glyph":{"id":"17744"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17745"},"selection_glyph":null,"view":{"id":"17747"}},"id":"17746","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"17795","type":"Circle"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"17828"},"selection_policy":{"id":"17829"}},"id":"17728","type":"ColumnDataSource"},{"attributes":{},"id":"17842","type":"Selection"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"17820"},"selection_policy":{"id":"17821"}},"id":"17708","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17753"}},"id":"17757","type":"CDSView"},{"attributes":{"data_source":{"id":"17718"},"glyph":{"id":"17719"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17720"},"selection_glyph":null,"view":{"id":"17722"}},"id":"17721","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17703"}},"id":"17707","type":"CDSView"},{"attributes":{},"id":"17847","type":"UnionRenderers"},{"attributes":{},"id":"17812","type":"Selection"},{"attributes":{"children":[{"id":"17861"},{"id":"17859"}]},"id":"17862","type":"Column"},{"attributes":{"source":{"id":"17698"}},"id":"17702","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"17720","type":"Circle"},{"attributes":{"data_source":{"id":"17713"},"glyph":{"id":"17714"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17715"},"selection_glyph":null,"view":{"id":"17717"}},"id":"17716","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"17794","type":"Circle"},{"attributes":{},"id":"17845","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"17852"},"selection_policy":{"id":"17853"}},"id":"17788","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"17669"}],"tools":[{"id":"17659"},{"id":"17660"},{"id":"17661"},{"id":"17662"},{"id":"17663"},{"id":"17664"},{"id":"17665"},{"id":"17666"}]},"id":"17860","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"17750","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"17705","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17744","type":"Line"},{"attributes":{"data_source":{"id":"17688"},"glyph":{"id":"17689"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17690"},"selection_glyph":null,"view":{"id":"17692"}},"id":"17691","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17758"}},"id":"17762","type":"CDSView"},{"attributes":{"source":{"id":"17743"}},"id":"17747","type":"CDSView"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"17838"},"selection_policy":{"id":"17839"}},"id":"17753","type":"ColumnDataSource"},{"attributes":{},"id":"17808","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17784","type":"Line"},{"attributes":{},"id":"17821","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17728"},"glyph":{"id":"17729"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17730"},"selection_glyph":null,"view":{"id":"17732"}},"id":"17731","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17713"}},"id":"17717","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17714","type":"Line"},{"attributes":{"source":{"id":"17793"}},"id":"17797","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17760","type":"Line"},{"attributes":{},"id":"17811","type":"UnionRenderers"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"17834"},"selection_policy":{"id":"17835"}},"id":"17743","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"17824"},"selection_policy":{"id":"17825"}},"id":"17718","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17730","type":"Line"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"17802","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"17719","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17700","type":"Line"},{"attributes":{},"id":"17814","type":"Selection"},{"attributes":{},"id":"17836","type":"Selection"},{"attributes":{"source":{"id":"17733"}},"id":"17737","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17684","type":"Line"},{"attributes":{"text":"94.0% HDI"},"id":"17798","type":"Title"},{"attributes":{"bounds":"auto","min_interval":1},"id":"17800","type":"DataRange1d"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17789","type":"Line"},{"attributes":{},"id":"17816","type":"Selection"},{"attributes":{"source":{"id":"17788"}},"id":"17792","type":"CDSView"},{"attributes":{"data_source":{"id":"17698"},"glyph":{"id":"17699"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17700"},"selection_glyph":null,"view":{"id":"17702"}},"id":"17701","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17778"}},"id":"17782","type":"CDSView"},{"attributes":{"data_source":{"id":"17738"},"glyph":{"id":"17739"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17740"},"selection_glyph":null,"view":{"id":"17742"}},"id":"17741","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"17812"},"selection_policy":{"id":"17813"}},"id":"17688","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17793"},"glyph":{"id":"17794"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17795"},"selection_glyph":null,"view":{"id":"17797"}},"id":"17796","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"17765","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17740","type":"Line"},{"attributes":{"source":{"id":"17708"}},"id":"17712","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17775","type":"Line"},{"attributes":{},"id":"17841","type":"UnionRenderers"},{"attributes":{"below":[{"id":"17651"}],"center":[{"id":"17654"},{"id":"17658"}],"left":[{"id":"17655"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"17681"},{"id":"17686"},{"id":"17691"},{"id":"17696"},{"id":"17701"},{"id":"17706"},{"id":"17711"},{"id":"17716"},{"id":"17721"},{"id":"17726"},{"id":"17731"},{"id":"17736"},{"id":"17741"},{"id":"17746"},{"id":"17751"},{"id":"17756"},{"id":"17761"},{"id":"17766"},{"id":"17771"},{"id":"17776"},{"id":"17781"},{"id":"17786"},{"id":"17791"},{"id":"17796"}],"title":{"id":"17798"},"toolbar":{"id":"17669"},"toolbar_location":null,"x_range":{"id":"17800"},"x_scale":{"id":"17647"},"y_range":{"id":"17801"},"y_scale":{"id":"17649"}},"id":"17642","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"17814"},"selection_policy":{"id":"17815"}},"id":"17693","type":"ColumnDataSource"},{"attributes":{},"id":"17813","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17690","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17759","type":"Line"},{"attributes":{},"id":"17844","type":"Selection"},{"attributes":{"source":{"id":"17718"}},"id":"17722","type":"CDSView"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"17826"},"selection_policy":{"id":"17827"}},"id":"17723","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"17810"},"selection_policy":{"id":"17811"}},"id":"17683","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17783"}},"id":"17787","type":"CDSView"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"17801","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"17689","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"17818"},"selection_policy":{"id":"17819"}},"id":"17703","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17739","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17694","type":"Line"},{"attributes":{},"id":"17838","type":"Selection"},{"attributes":{},"id":"17810","type":"Selection"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"17816"},"selection_policy":{"id":"17817"}},"id":"17698","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"17830"},"selection_policy":{"id":"17831"}},"id":"17733","type":"ColumnDataSource"},{"attributes":{},"id":"17849","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"17668","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"17788"},"glyph":{"id":"17789"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17790"},"selection_glyph":null,"view":{"id":"17792"}},"id":"17791","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17755","type":"Line"},{"attributes":{"children":[[{"id":"17642"},0,0]]},"id":"17859","type":"GridBox"},{"attributes":{"data_source":{"id":"17693"},"glyph":{"id":"17694"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17695"},"selection_glyph":null,"view":{"id":"17697"}},"id":"17696","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17748"}},"id":"17752","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17685","type":"Line"},{"attributes":{"data_source":{"id":"17753"},"glyph":{"id":"17754"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17755"},"selection_glyph":null,"view":{"id":"17757"}},"id":"17756","type":"GlyphRenderer"},{"attributes":{},"id":"17817","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17729","type":"Line"},{"attributes":{"data":{},"selected":{"id":"17836"},"selection_policy":{"id":"17837"}},"id":"17748","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17773"}},"id":"17777","type":"CDSView"},{"attributes":{},"id":"17818","type":"Selection"},{"attributes":{},"id":"17839","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"17735","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17790","type":"Line"},{"attributes":{"data_source":{"id":"17763"},"glyph":{"id":"17764"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17765"},"selection_glyph":null,"view":{"id":"17767"}},"id":"17766","type":"GlyphRenderer"},{"attributes":{"source":{"id":"17683"}},"id":"17687","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17754","type":"Line"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"17850"},"selection_policy":{"id":"17851"}},"id":"17783","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"17854"},"selection_policy":{"id":"17855"}},"id":"17793","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17683"},"glyph":{"id":"17684"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17685"},"selection_glyph":null,"view":{"id":"17687"}},"id":"17686","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17699","type":"Line"},{"attributes":{"source":{"id":"17738"}},"id":"17742","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"17667","type":"BoxAnnotation"},{"attributes":{"source":{"id":"17688"}},"id":"17692","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"17745","type":"Line"},{"attributes":{"source":{"id":"17678"}},"id":"17682","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"17842"},"selection_policy":{"id":"17843"}},"id":"17763","type":"ColumnDataSource"},{"attributes":{},"id":"17809","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17723"},"glyph":{"id":"17724"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17725"},"selection_glyph":null,"view":{"id":"17727"}},"id":"17726","type":"GlyphRenderer"},{"attributes":{},"id":"17837","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"17708"},"glyph":{"id":"17709"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17710"},"selection_glyph":null,"view":{"id":"17712"}},"id":"17711","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17725","type":"Line"},{"attributes":{"source":{"id":"17728"}},"id":"17732","type":"CDSView"},{"attributes":{},"id":"17820","type":"Selection"},{"attributes":{},"id":"17815","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"17704","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"17709","type":"Line"}],"root_ids":["17862"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"53b3d993-df34-4476-9726-1a0c4e55771b","root_ids":["17862"],"roots":{"17862":"a12ba6fa-1c04-48ec-a1e8-1e02d048699e"}}];
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