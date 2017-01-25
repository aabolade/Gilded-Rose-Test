# Gilded Rose - Javascript

[Technical Challenge](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/) requiring refactoring.

Specifications
==============

* All items have a Sellin value which denotes the number of days they to be sold.
* All items have a Quality value which denotes how valuable the item is.
* At the end of the day both these values are lowered.
* Once the sell by date has passed, quality degrades twice as fast.
* The quality of an item is never negative.
* "Aged Brie" atually increases in Quality the older it gets.
* "Sulfuras", being a legendary item, never has be sold or decreases in quality.
* "Backstage passes", like agd brie, increases in quality as it's Sellin value approaches; Quality increase by 2 when there are 10 days or less and by 3 when there are 5 days or less but quality drops to 0 after the concert.
* "Conjured items degrade in Quality twice as fast as normal items"

Technologies Used
=================

* Code written in Javascript
* Tests written using Jasmine

Instructions and Installation
=============================

1. Fork and clone this repository
2. Copy the full path of the Specrunner.html file into a browser to run the tests.

You can choose another language to complete this challenge from the following [legacy code](https://github.com/emilybache/GildedRose-Refactoring-Kata)
