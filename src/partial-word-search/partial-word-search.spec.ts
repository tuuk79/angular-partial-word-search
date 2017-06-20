/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { WordSearcher } from "partial-word-search/word-searcher";

describe('partial word search', () => {
	it('should instantiate a WordSearcher', () => {
		const wordSearcher = new WordSearcher();
		expect(wordSearcher).not.toBe(null);
	});

	it('should return words that contain the word ne', () => {
		const words = ['one', 'two', 'three'];
		const searchTerm = 'ne';

		const wordSearcher = new WordSearcher();
		const result = wordSearcher.search(words, searchTerm);
		expect(result.length).toBe(1);
	});

	it('should return words that contain ill', () => {
		const words = ['bill', 'will', 'jack'];
		const searchTerm = 'ill';

		const wordSearcher = new WordSearcher();
		const result = wordSearcher.search(words, searchTerm);
		expect(result.length).toBe(2);
	});
});
