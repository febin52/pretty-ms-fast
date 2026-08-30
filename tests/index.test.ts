import { describe, it, expect } from 'vitest';
import { prettyMs } from '../src/index';

describe('pretty-ms-fast', () => {
  it('formats milliseconds to human readable strings', () => {
    expect(prettyMs(90000)).toBe('1m 30s');
    expect(prettyMs(90000, { compact: true })).toBe('1m');
    expect(prettyMs(90000, { verbose: true })).toBe('1 minutes 30 seconds');
  });
});
