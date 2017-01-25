
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const depreciationConstant = -1;
const afterSellInDateDepreciationConstant = -2;
const backstageConstant = 1;



var items = []

function update_quality(items) {
  items.forEach(function(element) {
    element.sell_in -= 1;
    checkIfQualityIsZero(element);
  })
}

function depreciateQuality(item, factor) {
  item.quality += factor;
}

function checkForSellInDate(element) {
  if (element.sell_in <= 0) {
    depreciateQuality(element, afterSellInDateDepreciationConstant )
  } else {
    depreciateQuality(element, depreciationConstant);
  }
}

function checkIfQualityIsZero(item) {
  if(item.quality !== 0) {
    checkForAgedBrie(item)
  }
}

function checkForAgedBrie(item) {
  if(item.name === "Aged Brie") {
    adjustBackStageItem(item)
  } else {
    checkForSellInDate(item)
  }
}

function adjustBackStageItem(item) {
  depreciateQuality(item, backstageConstant)
}
