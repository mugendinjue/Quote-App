import { VoteCountPipe } from './vote-count.pipe';

describe('VoteCountPipe', () => {
  it('create an instance', () => {
    const pipe = new VoteCountPipe();
    expect(pipe).toBeTruthy();
  });
});
