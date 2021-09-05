const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('Jorge', 80, 'jorge.hernandez@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Jorge', 80, 'jorge.hernandez@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 