HTMLWidgets.widget({

  name: 'gio',

  type: 'output',

  factory: function (el, width, height) {

    // TODO: define shared variables for this instance
    var controller;
    var sel_handle = new crosstalk.SelectionHandle();

    return {

      renderValue: function (x) {

        // TODO: code to render the widget, e.g.
        // el.innerText = x.message;
        // var container = document.getElementById("globe");
        // long to wide
        // x.data = HTMLWidgets.dataframeToD3(x.data);
        controller = new GIO.Controller(el, x.configs);
        controller.addData(x.data);
        controller.setStyle(x.style); // set style

        // gio.js
        if (x.stats)
          controller.enableStats();

        controller.init();

        sel_handle.setGroup(x.crosstalk.group);

        function callback(selectedCountry) {
          sel_handle.set([selectedCountry.ISOCode]);
        }

        controller.onCountryPicked(callback);

        // placed in factory function
        sel_handle.on("change", function (e) {

          // selection comes from another widget
          if (e.sender !== sel_handle) {
            // clear the selection
            // not possible with gio.js
          }
          controller.switchCountry(e.value[0]);
        });

      },

      resize: function (width, height) {

        // TODO: code to re-render the widget with a new size
        controller.resizeUpdate();

      }

    };
  }
});
