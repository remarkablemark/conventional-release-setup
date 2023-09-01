import child_process from 'child_process';

export const cwd = process.cwd();

const execSyncOptions = {
  cwd,
  stdio: 'inherit',
} as const;

/**
 * Runs command.
 */
export const exec = (command: string) =>
  child_process.execSync(command, execSyncOptions);
