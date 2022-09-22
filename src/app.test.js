const { dayOfTheWeek } = require('./app');

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('9/22/2022') );
    expect( day ).toBe('Thursday');
});