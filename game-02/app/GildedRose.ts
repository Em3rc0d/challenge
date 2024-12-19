import { Item } from './Item';
import { ItemHandler } from './ItemHandler';
import {
  NormalItemHandler,
  AgedBrieHandler,
  SulfurasHandler,
  BackstagePassHandler,
  ConjuredHandler,
} from './Handlers';

/**
 * Represents the Gilded Rose store, where items are sold with varying quality and sell-in values.
 * This class is responsible for updating the items' quality based on their type and status.
 */
export class GildedRose {
  // An array of items currently in the store
  items: Array<Item>;

  /**
   * Initializes the GildedRose store with a list of items.
   * @param items - The list of items in the store.
   */
  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  /**
   * Returns an appropriate handler for each item based on its name.
   * The handler is responsible for updating the item's quality and sell-in value.
   * @param item - The item for which the handler is needed.
   * @returns The item handler that will update the item.
   */
  private getItemHandler(item: Item): ItemHandler {
    switch (item.name) {
      case 'Aged Brie':
        return new AgedBrieHandler(item); // Special handling for Aged Brie
      case 'Sulfuras, Hand of Ragnaros':
        return new SulfurasHandler(item); // Sulfuras does not change
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstagePassHandler(item); // Special handling for Backstage passes
      case 'Conjured':
        return new ConjuredHandler(item); // Special handling for Conjured items
      default:
        return new NormalItemHandler(item); // Default handler for normal items
    }
  }

  /**
   * Updates the quality and sell-in value for each item in the store.
   * This method calls the appropriate handler for each item to update its values.
   * @returns The updated array of items after applying the changes.
   */
  updateQuality(): Array<Item> {
    // Iterate through all items and update them using the respective handler
    for (const item of this.items) {
      const handler = this.getItemHandler(item); // Get the handler for the item
      handler.update(); // Update the item based on its handler
    }
    return this.items; // Return the updated list of items
  }
}
