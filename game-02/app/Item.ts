/**
 * Represents an item in the GildedRose inventory.
 * Each item has a name, sell-in value, and quality value.
 */
export class Item {
    /**
     * The name of the item (e.g., "Aged Brie", "Sulfuras, Hand of Ragnaros").
     * @type {string}
     */
    name: string;
  
    /**
     * The number of days left to sell the item.
     * After this period, the item may experience a change in quality.
     * @type {number}
     */
    sellIn: number;
  
    /**
     * The quality of the item, which is a value between 0 and 50.
     * This value changes over time based on the item's type and sell-in value.
     * @type {number}
     */
    quality: number;
  
    /**
     * Creates an instance of the Item class.
     * @param {string} name - The name of the item.
     * @param {number} sellIn - The number of days remaining to sell the item.
     * @param {number} quality - The initial quality of the item.
     */
    constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  