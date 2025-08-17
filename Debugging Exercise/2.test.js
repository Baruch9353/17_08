import { describe, test } from 'node:test';
import assert from 'node:assert';

import { maxOrNull } from './2.js';


describe('maxOrNull function tests', () => {
    test('should return the maximum number from an array', () => {
        assert.strictEqual(maxOrNull([1, 2, 3]), 3);
        assert.strictEqual(maxOrNull([1, -4, 2]), 2);
        assert.strictEqual(maxOrNull([-5, -2]), -2);
    });

    test('should return null for an empty array', () => {
        assert.strictEqual(maxOrNull([]), null);
    });
});
