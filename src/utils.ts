import child_process from 'child_process';

export const cwd = process.cwd();

const execSyncOptions = {
  cwd,
  stdio: 'inherit',
} as const;

/**
 * Runs command.
 */
export const exec = (
  command: string,
  options?: child_process.ExecSyncOptionsWithBufferEncoding,
) => child_process.execSync(command, { ...execSyncOptions, ...options });
