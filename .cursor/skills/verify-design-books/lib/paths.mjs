import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const skillRoot = join(fileURLToPath(new URL("..", import.meta.url)));
export const helpersRoot = join(skillRoot, "helpers");
export const repoRoot = join(skillRoot, "../../..");
export const appRoot = join(repoRoot, "apps/design-books");

export const runRoot =
  process.env.VERIFY_DESIGN_BOOKS_RUN_DIR ||
  join("/tmp", "verify-design-books");
export const instancePath = join(runRoot, "instance.json");
export const evidenceRoot = join(runRoot, "evidence");
export const chromeProfileDir = join(runRoot, "chrome-profile");

export function defaultChromePath() {
  return (
    process.env.VERIFY_DESIGN_BOOKS_CHROME ||
    process.env.CHROME_PATH ||
    "/opt/google/chrome/chrome"
  );
}

export function defaultPort() {
  const raw = process.env.VERIFY_DESIGN_BOOKS_PORT;
  if (raw) return Number(raw);
  return 4321;
}
