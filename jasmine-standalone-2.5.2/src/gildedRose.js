
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const depreciationConstant = -1;
const afterSellInDateDepreciationConstant = -2;
const backstageConstant = 1;

function update_quality(items) {

  items.forEach(function(element) {
    element.sell_in -= 1;
    checkIfQualityIsWithBounds(element);
  })
}

function depreciateQuality(item, factor) {
  item.quality += factor;
}

function checkForSellInDate(element) {
  var constant
  (element.sell_in <= 0) ? constant = afterSellInDateDepreciationConstant : constant = depreciationConstant;
  (element.name == "Conjured")? constant*=2: constant*=1
  depreciateQuality(element, constant)
}

function checkIfQualityIsWithBounds(item) {
  if(item.quality > 0 && item.quality < 50 ) {
    checkForAgedBrie(item);
  }
}

function checkForAgedBrie(item) {
  (item.name === "Aged Brie")? adjustBackStageItem(item) : checkForSellInDate(item);
}


function adjustBackStageItem(item) {
  depreciateQuality(item, backstageConstant)
}
