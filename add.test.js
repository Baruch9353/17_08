import { describe, test } from 'node:test';
import assert from 'node:assert';

import { add } from './add.js';

describe('add function tests', () => {
    test('should return the sum of two positive numbers', () => {
        assert.strictEqual(add(2, 3), 5);
    });

    test('should return the sum of two negative numbers', () => {
        assert.strictEqual(add(-2, -3), -5);
    });

    test('should return zero when adding zero to zero', () => {
        assert.strictEqual(add(0, 0), 0);
    });

    test('should handle adding zero to a number', () => {
        assert.strictEqual(add(5, 0), 5);
        assert.strictEqual(add(0, -5), -5);
    });
});

describe('add with string number', () => {
    test('should convert string numbers to integers and return their sum', () => {
        assert.strictEqual(add('2', '3'), 5);
        assert.strictEqual(add('0', '0'), 0);
    });

    test('should handle mixed types', () => {
        assert.strictEqual(add(2, '3'), 5);
    });
})