  console.log('app rend');
  

  const user = {
  name: 'Ivan',
  age: 25
};

// Твой код здесь:
const updatedUser = {...user, age: 26, isOnline: true}
// console.log(updatedUser);

// console.log(user);


// ====================

const todos = [
  { id: 1, text: 'Learn JS', completed: false },
  { id: 2, text: 'Learn React', completed: false },
];

// Твой код здесь:
const updatedTodos = todos.map(t => t.id === 2? {...t, completed: true}: t);
// console.log(updatedTodos);

// ===========================

const employee = {
  id: 1,
  info: {
    address: {
      city: 'Moscow',
      street: 'Lenina'
    }
  }
};

// Твой код здесь:
const newEmployee = {
  ...employee,
  info: {address: {...employee.info.address,city: 'Minsk'}}
}
// console.log(newEmployee);

// ====================

const items = [
  { id: 1, title: 'Phone' },
  { id: 2, title: 'Laptop' },
  { id: 3, title: 'Watch' }
];

// Твой код здесь:
const remainingItems = items.filter(i => i.id !== 1)

// console.log(remainingItems);


// ====================

const shopState = {
  user: 'Ivan',
  cart: [
    { id: 1, title: 'Apple', quantity: 1 },
    { id: 2, title: 'Banana', quantity: 3 }
  ]
};

// ЗАДАЧА: Создай копию shopState, где у Banana (id: 2) quantity станет 4.
const updatedState = {
  ...shopState,
  cart: shopState.cart.map(k => k.id === 2? {...k, quantity: 4}: k)
}

console.log(updatedState);
console.log(shopState);

const updatedState2 = {
  ...shopState,
  cart: [...shopState.cart, {id: 3, title: 'orange,', quantity: 5}]
}
