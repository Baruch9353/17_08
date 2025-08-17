import { describe, test } from 'node:test';
import assert from 'node:assert';

import { sumTo } from './1.js';

describe('sumTo function tests', () => {
    test('should return the sum of numbers from 1 to n', () => {
        assert.strictEqual(sumTo(4), 10);
        assert.strictEqual(sumTo(0), 0);
    });
    test('should return 0 for n if negative', () => {
        assert.strictEqual(sumTo(-1), 0);
    });

});