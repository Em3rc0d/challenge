import { Item } from './Item';

/**
 * Abstract base class for handling the logic of item updates.
 * Subclasses will implement the `update()` method for specific item types.
 */
export abstract class ItemHandler {
  protected item: Item; // The item that this handler will update.

  /**
   * Constructor for creating a handler instance with an associated item.
   * @param item The item that will be handled by this handler.
   */
  constructor(item: Item) {
    this.item = item;
  }

  /**
   * Abstract method to be implemented by subclasses to define the update logic for different item types.
   */
  abstract update(): void;

  /**
   * Helper method to change the quality of the item. Ensures the quality is between 0 and 50.
   * @param amount The amount to change the quality by (can be positive or negative).
   */
  protected changeQuality(amount: number): void {
    // Ensures quality is not less than 0 or greater than 50
    this.item.quality = Math.max(0, Math.min(50, this.item.quality + amount));
  }

  /**
   * Decreases the sellIn value of the item by 1.
   * This method is shared across different item types that need to reduce sellIn.
   */
  protected decreaseSellIn(): void {
    this.item.sellIn -= 1;
  }
}
