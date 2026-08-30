# ⏱️ @febin52/pretty-ms-fast

> Lightning-fast, zero-dependency human-readable millisecond duration formatter for TypeScript and JavaScript.

[![npm version](https://img.shields.io/npm/v/@febin52/pretty-ms-fast.svg)](https://www.npmjs.com/package/@febin52/pretty-ms-fast)
[![license](https://img.shields.io/npm/l/@febin52/pretty-ms-fast.svg)](https://github.com/febin52/pretty-ms-fast/blob/main/LICENSE)

Convert milliseconds like `90000` into readable time representations like `1m 30s` or `1 minutes 30 seconds`. Ideal for execution logs, benchmark timers, and UI uptime indicators.

---

## 🚀 Features

- ⚡ **High Performance**: Optimized for fast string generation in high-frequency loops.
- 📦 **Zero Dependencies**: Tiny, tree-shakeable footprint.
- 🎛️ **Flexible Formatting**: Supports compact mode (`1m`) and verbose mode (`1 minutes 30 seconds`).
- 🛡️ **TypeScript Ready**: Ships with native declaration files.

---

## 📦 Installation

```bash
npm install @febin52/pretty-ms-fast
# or
yarn add @febin52/pretty-ms-fast
# or
pnpm add @febin52/pretty-ms-fast
```

---

## 💡 Usage

```typescript
import { prettyMs } from '@febin52/pretty-ms-fast';

// Default Output
prettyMs(90000); // '1m 30s'
prettyMs(3600000); // '1h'
prettyMs(86400000 + 3600000 + 120000 + 5000); // '1d 1h 2m 5s'

// Compact Output (first unit only)
prettyMs(90000, { compact: true }); // '1m'

// Verbose Output
prettyMs(90000, { verbose: true }); // '1 minutes 30 seconds'
```

---

## 🔗 Links

- **NPM Package**: https://www.npmjs.com/package/@febin52/pretty-ms-fast
- **GitHub Repository**: https://github.com/febin52/pretty-ms-fast
- **Issue Tracker**: https://github.com/febin52/pretty-ms-fast/issues

---

## 📄 License

MIT © [Febin Francis](https://github.com/febin52)
