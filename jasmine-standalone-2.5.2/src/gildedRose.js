
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function update_quality(items) {


  items.forEach(function(element) {

    element.sell_in -= 1;
    element.quality -= 1;
  })

}
