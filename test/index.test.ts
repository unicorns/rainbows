import {expect, test} from '@oclif/test';

import cmd = require('../src')

describe('rainbows', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs without arguments', ctx => {
    expect(ctx.stdout).to.contain('🌈');
  });

  test
  .stdout()
  .do(() => cmd.run(['528']))
  .it('runs with arguments', ctx => {
    expect(ctx.stdout).to.contain('Here are 528 rainbows for you!\n' + '🌈'.repeat(528) + '\n');
  });

  test
  .stdout()
  .do(() => cmd.run(['1']))
  .it('1 rainbow', ctx => {
    expect(ctx.stdout).to.contain('Here is 1 rainbow for you!\n🌈');
  });
});
