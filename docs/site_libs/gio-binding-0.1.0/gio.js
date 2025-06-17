HTMLWidgets.widget({

  name: 'gio',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var controller

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        // el.innerText = x.message;
        // var container = document.getElementById("globe");
        // long to wide
        // x.data = HTMLWidgets.dataframeToD3(x.data);
        controller = new GIO.Controller(el);
        controller.addData(x.data);
        controller.setStyle(x.style); // set style

        // gio.js
        if(x.stats)
          controller.enableStats();

        controller.init();

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size
        controller.resizeUpdate();

      }

    };
  }
});
