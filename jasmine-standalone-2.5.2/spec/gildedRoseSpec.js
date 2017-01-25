describe("Gilded Rose", function() {

  var items;

  beforeEach(function() {
    items = [new Item("item1", 10, 10), new Item("item2", 5, 3), new Item("Aged Brie", 10, 10)]
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

    it("never exceeds 50", function() {

      for(count = 0; count<50; count++) {
        update_quality(items)
      }

      expect(items[2].quality).not.toBeGreaterThan(50)
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

  describe("Aged Brie", function() {

    beforeEach(function() {
      items = [new Item("Aged Brie", 12, 5), new Item("Aged Brie", 9, 5), new Item("Aged Brie", 3,5), new Item("Aged Brie", 0, 10)]
      update_quality(items)
    })
    it("quality increases with time", function() {
      expect(items[0].quality).toEqual(6)
    })

    it("quality increases by 2 when there are ten days or less left", function() {
      expect(items[1].quality).toEqual(7)
    })

    it("quality increases by 3 when there are five days or less left", function() {
      expect(items[2].quality).toEqual(8)
    })

    it("quality decreases to zero after the concert", function() {
      console.log(items[3].sell_in)
      expect(items[3].quality).toEqual(0)
    })
  })

  describe("Conjured Items", function() {
    beforeEach(function() {
      items = [new Item("Conjured", 10, 10)]
    })

    it("decays twice as fast as normal items", function() {
      update_quality(items)
      expect(items[0].quality).toEqual(8)
    })
  })

});
