import { ItemHandler } from './ItemHandler';

/**
 * Handles the update logic for normal items (i.e., items that are not special).
 * Normal items degrade in quality over time, and their sell-in value decreases daily.
 */
export class NormalItemHandler extends ItemHandler {
  /**
   * Updates the item by decreasing the sell-in value and adjusting its quality.
   * If the item is past its sell-by date, its quality degrades faster.
   */
  update(): void {
    this.decreaseSellIn();
    // Decrease quality by 1 before the sell-in date, and by 2 after the sell-in date.
    this.changeQuality(this.item.sellIn < 0 ? -2 : -1);
  }
}

/**
 * Handles the update logic for "Aged Brie".
 * Aged Brie increases in quality over time, and its sell-in value decreases daily.
 */
export class AgedBrieHandler extends ItemHandler {
  /**
   * Updates the item by decreasing the sell-in value and increasing its quality.
   * Aged Brie improves in quality as it gets older.
   */
  update(): void {
    this.decreaseSellIn();
    // Increase quality by 1 before the sell-in date, and by 2 after the sell-in date.
    this.changeQuality(this.item.sellIn < 0 ? 2 : 1);
  }
}

/**
 * Handles the update logic for "Sulfuras, Hand of Ragnaros".
 * Sulfuras does not change in quality or sell-in value, and is therefore a special case.
 */
export class SulfurasHandler extends ItemHandler {
  /**
   * Does not update quality or sell-in value because Sulfuras is a legendary item.
   */
  update(): void {
    // No changes to Sulfuras
  }
}

/**
 * Handles the update logic for "Backstage passes to a TAFKAL80ETC concert".
 * The quality of this item increases as the concert approaches, but it drops to zero after the event.
 */
export class BackstagePassHandler extends ItemHandler {
  /**
   * Updates the item by decreasing the sell-in value and adjusting its quality based on the remaining days.
   * The quality increases as the event date nears, and drops to zero after the event.
   */
  update(): void {
    this.decreaseSellIn();
    if (this.item.sellIn < 0) {
      this.item.quality = 0; // Quality drops to 0 after the event
    } else if (this.item.sellIn < 5) {
      this.changeQuality(3); // Quality increases by 3 when there are less than 5 days left
    } else if (this.item.sellIn < 10) {
      this.changeQuality(2); // Quality increases by 2 when there are less than 10 days left
    } else {
      this.changeQuality(1); // Quality increases by 1 otherwise
    }
  }
}

/**
 * Handles the update logic for "Conjured" items.
 * Conjured items degrade in quality twice as fast as normal items.
 */
export class ConjuredHandler extends ItemHandler {
  /**
   * Updates the item by decreasing the sell-in value and adjusting its quality.
   * Conjured items degrade by 2 before the sell-in date, and by 4 after the sell-in date.
   */
  update(): void {
    this.decreaseSellIn();
    // Conjured items degrade by 2 before the sell-in date, and by 4 after the sell-in date.
    this.changeQuality(this.item.sellIn < 0 ? -4 : -2);
  }
}
