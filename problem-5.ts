{
  // Problem-5: Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

  const getProperty = <X, Y extends keyof X>(property: X, name: Y): X[Y] => {
    // console.log(property[name]);
    return property[name];
  };

//    simple test 
  const person = { name: "Alice", age: 30 };
  getProperty(person, "name");

  //
}
