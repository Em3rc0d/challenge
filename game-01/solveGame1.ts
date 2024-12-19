function findPair(M: number[], N: number): number[] {
    const seen: Set<number> = new Set();  // Set to store the numbers we've already seen
    for (const num of M) {
        const complement = N - num;  // The number we need to find a pair with
        if (seen.has(complement)) {  // If we've already seen the complement, return the pair
            return [complement, num];
        }
        seen.add(num);  // Add the current number to the set
    }
    return [];  // Return empty array if no pair is found
}
