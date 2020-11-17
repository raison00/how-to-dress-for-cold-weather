import DefaultClass from '../src/how-to-dress-for-cold-weather';

describe('how-to-dress-for-cold-weather', () => {
  let data;

  beforeEach(() => {
    loadFixtures('main.html'); // fixtures/html/main.html becomes your DOM
    data = getJSONFixture('how-to-dress-for-cold-weather.json');
  });

  it('should have tests', () => {
    expect(data).toEqual({ foo: 'bar', abc: 'xyz' });
  });

  it('might have async tests', (done) => {
    Promise.resolve('foobar').then((result) => {
      expect(result).toBe('foobar');
      done();
    });
  });

  it('should test constructor', () => {
    const foo = new DefaultClass();
    expect(foo.example).toEqual('example');
  });
  it('should test init', () => {
    const foo = new DefaultClass();
    expect(foo.example).toEqual('example');
    foo.init();
    expect(foo.example).toEqual('initialized');
  });
});
