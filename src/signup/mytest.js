const { UserBuilder, isRegularUser, isTechnician }= require('./user');

const regularUser = new UserBuilder(isRegularUser)
                      .type('user').id('hello').pwd('world').phone('01012341234').build();
const technician = new UserBuilder(isTechnician)
                      .type('tech').id('technician12').pwd('world').phone('01078901234')
                      .skills(['a', 'b']).build();

console.log(regularUser);
console.log(technician);
