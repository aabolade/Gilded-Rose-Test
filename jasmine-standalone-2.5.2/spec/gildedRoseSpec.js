describe("Gilded Rose", function() {

  var items;

  beforeEach(function() {
    items = [new Item("item1", 10, 10), new Item("item2", 5, 3)]
  })



  describe("quality value", function() {
    it("decreases after each day", function() {
      update_quality(items)
      expect(items[0].quality).toEqual(9)
      expect(items[1].quality).toEqual(2)
    })

    it("is never negative", function() {
      for(count = 0;count<4;count++) {
        update_quality(items)
      }

      expect(items[1].quality).not.toBeLessThan(0)
    })
  })

  describe("sell in value", function() {
    it("decreases after each day", function() {
      update_quality(items)
      expect(items[1].sell_in).toEqual(4)
      expect(items[0].sell_in).toEqual(9)
    })
  })

  describe("Sell by date is passed", function() {
    beforeEach(function() {
      items = [new Item("item", 0, 10)]
    })

    it("quality degrades twice as fast", function() {
      update_quality(items)
      expect(items[0].quality).toEqual(8)
    })
  })

});
