// Before you create app
Vue.config.devtools = true;

var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    input: "",
    speciesUpdated: 0,
    dinosUpdated: 0,
    items: [
      { text: "Tyrannosaurus", quantity: 5 },
      { text: "Triceratops", quantity: 3 },
      { text: "Stegosaurus", quantity: 6 }
    ]
  },
  // You can add computed properties to a component to calculate a property on the fly. The benefit of this over invoking a method is that computed properties are cached based on their dependencies.
  computed: {
    totalDinos: function() {
      this.dinosUpdated += 1;
      var sum = 0;
      var items = this.items;

      for (var i in items) {
        sum += items[i].quantity;
      }

      return sum;
    },
    totalSpecies: function() {
      this.speciesUpdated += 1;
      return this.items.length;
    }
  },
  methods: {
    addItem: function(e) {
      e.preventDefault();
      if (!this.input) return;

      this.items.push({ text: this.input, quantity: 1 });
      this.input = "";
    },
    removeItem: function(item) {
      this.items.splice(item, 1);
    }
  }
});

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = card.constructor;
