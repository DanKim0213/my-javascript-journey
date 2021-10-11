
console.log('hi----------------------------------')
const regularUser = new UserBuilder(isRegularUser)
                      .type('user').id('hello').pwd('world').phone('01012341234').build();
const technician = new UserBuilder(isTechnician)
                      .type('tech').id('technician12').pwd('world').phone('01078901234')
                      .skills(['a', 'b']).build();

console.log('my regular user', regularUser);
console.log('my technician', technician);