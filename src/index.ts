import {Command, flags} from '@oclif/command';

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// The maximum is exclusive and the minimum is inclusive
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const MAX_NUM_RAINBOWS = 1000;

class Rainbows extends Command {
  static description = 'Outputs rainbows'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'numRainbows'}]

  async run() {
    const {args} = this.parse(Rainbows);

    const numRainbows = Math.min(Number(args.numRainbows) || getRandomInt(1, MAX_NUM_RAINBOWS + 1), MAX_NUM_RAINBOWS);
    this.log(`Here ${numRainbows > 1 ? 'are' : 'is'} ${numRainbows} rainbow${numRainbows > 1 ? 's' : ''} for you!`);
    this.log('🦄'.repeat(numRainbows));
  }
}

export = Rainbows
