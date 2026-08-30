export interface PrettyMsOptions {
  compact?: boolean;
  verbose?: boolean;
}

export function prettyMs(ms: number, options: PrettyMsOptions = {}): string {
  if (!Number.isFinite(ms)) return '0ms';
  const abs = Math.abs(ms);
  const seconds = Math.floor((abs / 1000) % 60);
  const minutes = Math.floor((abs / (1000 * 60)) % 60);
  const hours = Math.floor((abs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(abs / (1000 * 60 * 60 * 24));

  const parts: string[] = [];
  if (days) parts.push(`${days}${options.verbose ? ' days' : 'd'}`);
  if (hours) parts.push(`${hours}${options.verbose ? ' hours' : 'h'}`);
  if (minutes) parts.push(`${minutes}${options.verbose ? ' minutes' : 'm'}`);
  if (seconds || parts.length === 0) parts.push(`${seconds}${options.verbose ? ' seconds' : 's'}`);

  return (ms < 0 ? '-' : '') + (options.compact ? parts[0] : parts.join(' '));
}
