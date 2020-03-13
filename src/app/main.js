// Before you create app
Vue.config.devtools = true;

var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    content:
      "<strong>Dinosaurs</strong> are a diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period.",
    dinos: [
      {
        text: "Velociraptor",
        weight: "15 kg"
      },
      {
        text: "triceratops",
        weight: "6,000 kg"
      },
      {
        text: "Stegosaurus",
        weight: "2,500 kg"
      }
    ]
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    undercase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toLowerCase();
    },
    url: function(value) {
      if (!value) return "";
      value = value.toString();
      return "https://en.wikipedia.org/wiki/" + value;
    }
  },
  methods: {
    addItem: function() {
      var input = document.getElementById("itemForm");
      if (input.value !== "") {
        this.dinos.push({
          text: input.value
        });
        input.value = "";
      }
    },
    deleteItem: function(index) {
      this.dinos.splice(index, 1);
    }
  }
});

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = card.constructor;
