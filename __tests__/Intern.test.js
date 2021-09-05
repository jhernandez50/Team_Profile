
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Jorge', 80, 'jorge.hernandez@gmail', 'FIME');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Jorge', 80, 'jorge.hernandez@gmail', 'FIME');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Jorge', 80, 'jorge.hernandez@gmail.com', 'FIME');

    expect(intern.getRole()).toEqual("Intern");
}); 