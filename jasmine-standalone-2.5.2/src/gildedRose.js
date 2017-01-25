
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const depreciationConstant = -1;
const afterSellInDateDepreciationConstant = -2;
const appreciationConstant = 1;

function update_quality(items) {

  items.forEach(function(element) {
    checkForAgedBrie(element);
  })
}

function depreciateQuality(item, factor) {
  item.quality += factor;
  checkIfQualityIsWithBounds(item);
  item.sell_in -= 1;
}

function checkForSellInDate(element) {
  var constant
  (element.sell_in <= 0) ? constant = afterSellInDateDepreciationConstant : constant = depreciationConstant;
  (element.name == "Conjured")? constant*=2: constant*=1
  depreciateQuality(element, constant)
}

function checkIfQualityIsWithBounds(item) {
  if(item.quality < 0) {
    item.quality = 0;
  }

  if (item.quality > 50) {
    item.quality = 50;
  }
}

function checkForAgedBrie(item) {
  (item.name === "Aged Brie")? adjustBackStageItem(item) : checkForSellInDate(item);
}


function adjustBackStageItem(item) {
  if (item.sell_in === 0) {
    item.quality = 0;
  } else {
    depreciateQuality(item, appreciationConstant * backstageConstant(item))

  }
}

function backstageConstant(item) {

  if (item.sell_in <= 5) {
    return 3
  } else if (item.sell_in <= 10) {
    return 2
  } else {
    return 1
  }
}
