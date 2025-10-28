const fs = require('fs');
(async () => {
  try {
    // Best-effort cleanup; Testcontainers auto-cleans on exit as well.
    if (fs.existsSync('.test-db.env')) fs.unlinkSync('.test-db.env');
    if (fs.existsSync('.test-db.cid')) fs.unlinkSync('.test-db.cid');
  } catch {}
})();
