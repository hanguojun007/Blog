HTMLWidgets.widget({

  name: 'gio',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
        // el.innerText = x.message;
        // var container = document.getElementById("globe");
        // long to wide
        // x.data = HTMLWidgets.dataframeToD3(x.data);
        var controller = new GIO.Controller(el);
        controller.addData(x.data);
        controller.setStyle(x.style); // set style
        controller.init();

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
