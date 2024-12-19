import { Item } from './Item';
import { GildedRose } from './GildedRose';

// Create an array of items to be sold in the Gilded Rose store
const items = [
  new Item('Aged Brie', 2, 0), // Aged Brie with sellIn of 2 and quality of 0
  new Item('Sulfuras, Hand of Ragnaros', 0, 80), // Sulfuras, which does not change
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20), // Backstage passes with a sellIn of 15 and quality of 20
  new Item('Conjured', 3, 6), // Conjured item with a sellIn of 3 and quality of 6
  new Item('Normal Item', 5, 7), // Normal item with sellIn of 5 and quality of 7
];

// Create an instance of the GildedRose store with the items array
const gildedRose = new GildedRose(items);

// Log the state of items before updating their quality
console.log('Before update:', gildedRose.items);

// Update the quality of each item in the GildedRose store
gildedRose.updateQuality();

// Log the state of items after updating their quality
console.log('After update:', gildedRose.items);
