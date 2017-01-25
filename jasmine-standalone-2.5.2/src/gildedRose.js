
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const depreciationConstant = 1;
const afterSellInDateDepreciationConstant = 2;


var items = []

function update_quality(items) {

  items.forEach(function(element) {
    element.sell_in -= 1;
    checkForSellInDate(element)
  })
}

function depreciateQuality(item, factor) {
  item.quality -= factor;
}

function checkForSellInDate(element) {
  if (element.sell_in <= 0) {
    depreciateQuality(element, afterSellInDateDepreciationConstant )
  } else {
    depreciateQuality(element, depreciationConstant);
  }
}
