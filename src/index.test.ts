import fs from 'fs';
import path from 'path';
import { exec } from './utils';

const cwd = path.resolve(__dirname, '../lib');

function readFileSync(filepath: string) {
  return fs.readFileSync(path.resolve(cwd, filepath), 'utf8');
}

function clean() {
  fs.rmSync(cwd, { force: true, recursive: true });
}

describe('CLI', () => {
  beforeAll(() => {
    clean();
    exec('npm run build');
    exec('git init', { cwd });
    exec('npm init --yes', { cwd });
    exec('node index.js', { cwd });
  });

  afterAll(() => {
    clean();
  });

  it('updates package.json', () => {
    expect(JSON.parse(readFileSync('package.json'))).toMatchSnapshot();
  });

  it('copies .commitlintrc.json', () => {
    expect(JSON.parse(readFileSync('.commitlintrc.json'))).toMatchSnapshot();
  });

  it('copies .github/workflows/release-please.yml', () => {
    expect(
      readFileSync('.github/workflows/release-please.yml'),
    ).toMatchSnapshot();
  });

  it('adds .husky/.commit-msg', () => {
    expect(readFileSync('.husky/commit-msg')).toMatchSnapshot();
  });

  it('commits to git', () => {
    expect(
      exec('git --no-pager log -1', { cwd, stdio: 'pipe' }).toString(),
    ).toContain('chore: set up conventional release');
  });
});
