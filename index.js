function myEach(collection, callback) {
  const items = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < items.length; i++) {
      callback(items[i], i, collection);
  }
  return collection;
}

function myMap(collection, callback) {
  const items = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < items.length; i++) {
      result.push(callback(items[i], i, collection));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  const items = Array.isArray(collection) ? collection : Object.values(collection);
  let accumulator = acc !== undefined ? acc : items[0];
  let startIdx = acc !== undefined ? 0 : 1;
  for (let i = startIdx; i < items.length; i++) {
      accumulator = callback(accumulator, items[i], collection);
  }
  return accumulator;
}

function myFind(collection, predicate) {
  const items = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < items.length; i++) {
      if (predicate(items[i])) return items[i];
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const items = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < items.length; i++) {
      if (predicate(items[i])) result.push(items[i]);
  }
  return result;
}

function mySize(collection) {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function mySortBy(array, callback) {
  return [...array].sort((a, b) => {
      let valA = callback(a);
      let valB = callback(b);
      return valA > valB ? 1 : valA < valB ? -1 : 0;
  });
}

function myFlatten(array, shallow = false, result = []) {
  for (let item of array) {
      if (Array.isArray(item)) {
          shallow ? result.push(...item) : myFlatten(item, false, result);
      } else {
          result.push(item);
      }
  }
  return result;
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}