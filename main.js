const LinkedList = require('./LinkedList');

const mylist = new LinkedList();

mylist.push(1);
mylist.push(2);
mylist.push(3);

console.log('push:', mylist);

mylist.pop();
console.log('pop:', mylist);

mylist.shift();
console.log('shift:', mylist);mylist

mylist.unshift(0);
console.log('unshift:', mylist);

console.log('Get index 1:', mylist.get(1));

mylist.set(1, 25);
console.log('After set index 1 to 25:', mylist);

mylist.insert(1, 15);
console.log('After insert 15 at index 1:', mylist);

mylist.remove(1);
console.log('After remove index 1:', mylist);



