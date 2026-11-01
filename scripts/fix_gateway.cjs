const fs = require('fs');
const file = 'D:/polymarket/CloddsBot/src/gateway/index.ts';
let c = fs.readFileSync(file, 'utf8');

c = c.replace(
  /trading:\s*\{\s*backtest:\s*backtestEngine,\s*bots:\s*botManager\s*\},?/,
  "trading: { backtest: backtestEngine, bots: botManager, builder: strategyBuilder, logger: tradeLogger, safety: safetyManager, tracking: whaleTracker },"
);

fs.writeFileSync(file, c, 'utf8');
console.log('Updated trading context in gateway/index.ts');
