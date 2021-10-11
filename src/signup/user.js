'use strict'

// Regular user, technician, delivery man
// Builder pattern + Strategy pattern > Class extension 
// because User, not developer, need to check requisite fields manually.
class User {
  _type;
  _id;
  _pwd;
  _phone;
  _isMyPhone = false;
  _skills;
  _places;

  // constructor(type, id, pwd, cpwd, name, email, phone) {
  //   this.type = type;
  //   this.id = id;
  //   this.pwd = pwd;
  //   this.cpwd, cpwd;
  //   this.name = name;
  //   this.email = email;
  //   this.phone = phone;
  // }
  constructor(strategy) { 
    this._strategy = strategy;
  }

  get type() { return this.type; }
  get id() { return this.id; }
  get pwd() { return this.pwd; }
  get cpwd() { return this.cpwd; }
  get name() { return this.name; }
  get email() { return this.email; }
  get phone() { return this.name; }
  get skill() { return this.skill; }
  get places() { return this.places; }

  checkout() {
    return this._strategy(this);
  }
}

class UserBuilder {
  constructor(strategy) {
    this.user = new User(strategy);
  }

  type(type) { 
    this.user._type = type;
    return this;
  }
  id(id) {
    this.user._id = id;
    return this;
  }
  pwd(pwd) {
    this.user._pwd = pwd;
    return this;
  }
  phone(phone) {
    this.user._phone = phone;
    return this;
  }
  skills(skills) {
    this.user._skills = skills;
    return this;
  }
  places(places) {
    this.user._places = places;
    return this;
  }
  build() {
    return this.user;
  }

}

const isRegularUser = (user) => {
  let result = false;
  if (user.id && user.pwd && user.phone) 
    result = true;

  return result;
}

const isTechnician = (user) => {
  let result = false;
  if (user.id && user.pwd && user.phone && user.skills)
    result = true;
  
  return result;
}

const isDelivery = (user) => {
  let result = false;
  if (user.id && user.pwd && user.phone && user.places) 
    result = true;

  return result;
}

module.exports = { UserBuilder, isRegularUser, isTechnician, isDelivery };