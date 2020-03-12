var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    content:
      "<strong>Dinosaurs</strong> are a diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period.",
    items: [{ text: "foo" }, { text: "baz" }, { text: "bar" }]
  },
  methods: {
    addItem: function() {
      var input = document.getElementById("itemForm");
      if (input.value !== "") {
        this.items.push({
          text: input.value
        });
        input.value = "";
      }
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    }
  }
});
