# @febin52/pretty-ms-fast

> Lightning-fast human-readable millisecond duration formatter with zero dependencies.

## Installation

```bash
npm install @febin52/pretty-ms-fast
```

## Usage

```typescript
import { prettyMs } from '@febin52/pretty-ms-fast';

prettyMs(90000); // '1m 30s'
prettyMs(90000, { compact: true }); // '1m'
prettyMs(90000, { verbose: true }); // '1 minutes 30 seconds'
```

## License

MIT © Febin Francis
