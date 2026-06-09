import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

const [major, minor] = process.versions.node.split(".").map(Number);
const isTooOld =
  major < 20 || (major === 20 && minor < 19);

if (isTooOld) {
  console.error(
    [
      "This project requires Node 20.19.0 or newer.",
      `Current version: ${process.versions.node}`,
      "",
      "Use one of the locally installed versions, for example:",
      "  nvm use 20.20.2",
      "or",
      "  nvm use 22.12.0",
    ].join("\n")
  );
  process.exit(1);
}

process.env.WRANGLER_LOG_PATH ??= path.join(
  process.cwd(),
  ".wrangler",
  "logs"
);

const viteBin = path.resolve("node_modules", "vite", "bin", "vite.js");
const [command = "dev", ...args] = process.argv.slice(2);
const child = spawn(process.execPath, [viteBin, command, ...args], {
  env: process.env,
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});
