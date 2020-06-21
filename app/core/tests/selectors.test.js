import { selectRepositories } from '../selectors';

describe('selectRepositories', () => {
  it('should select repositories from the state', () => {
    const fixture = {
      repositories: {
        repositories: [{ test: 1 }],
      },
    };

    expect(selectRepositories(fixture)).toEqual(
      fixture.repositories.repositories,
    );
  });
});
