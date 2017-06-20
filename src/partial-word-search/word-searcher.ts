export class WordSearcher {
    constructor() {

    }

    search(words: string[], searchTerm: string): string[] {
        var results: string[] = [];

        for (const word of words) {
            if (word.indexOf(searchTerm) >= 0) {
                results.push(word);
            }
        }

        return results;
    }
}