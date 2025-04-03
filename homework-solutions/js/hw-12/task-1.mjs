/*1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds */

function delayTwoSeconds(myFunction) {
  setTimeout(() => {
    myFunction();
  }, 2000);
}
delayTwoSeconds(() => {
  console.log('Hello, world');
});

/*2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль */

const promise = new Promise((resolve) => {
  resolve(1);
});

promise.then((val) => console.log(val));

/*3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
  Обработайте промис методом .catch и выведите результат его реджекта в консоль */
const newPromise = new Promise((resolve, reject) => {
  reject('Promise failed');
});

newPromise.catch((reason) => console.log(reason));

/*4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число. */

function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    resolve(number);
  });
}

/*5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
 в консоль результаты работы каждого промиса через .then */

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([promiseNumber1, promiseNumber2, promiseNumber3]) => {
    console.log(promiseNumber1);
    console.log(promiseNumber2);
    console.log(promiseNumber3);
  })
  .catch((error) => {
    console.error(error);
  });

/*6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then */
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log(`Status: ${result.status}, Value: ${result.value}`);
    } else {
      console.log(`Status: ${result.status}, Reason: ${result.reason}`);
    }
  });
});

/* 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch */

async function promiseAll() {
  try {
    const promises = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    promises.forEach((el) => console.log(el));
  } catch (err) {
    console.error('Error in Promise.all:', err);
  }
}

async function settled() {
  try {
    const promises = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    promises.forEach((val) => {
      if (val.status === 'fulfilled') {
        console.log(`status: ${val.status}, result: ${val.value}`);
      } else {
        console.log(`status: ${val.status}, reason: ${val.reason}`);
      }
    });
  } catch (err) {
    console.error('Error in Promise.allSettled:', err);
  }
}

await promiseAll();
await settled();
