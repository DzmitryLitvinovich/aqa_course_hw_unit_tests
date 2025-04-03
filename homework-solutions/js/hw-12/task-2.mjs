/* Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
    Преобразуйте респонс из JSON в объект
    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
    Функция должна возвращать полученный объект из респонса
    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/

async function createTodo(toDo) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDo),
    });

    if (response.status !== 201) {
      throw new Error(`Error ${response.status}`);
    }

    const data = await response.json();

    for (const key in toDo) {
      if (toDo[key] !== data[key]) {
        throw new Error(`Error: "${key}" value in created entity is incorrect`);
      }
    }

    return data;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    console.log('Работа функции завершена');
  }
}

async function run() {
  const todo = await createTodo({
    title: 'ToDo',
    userId: 10,
    completed: false,
  });

  console.log(todo);
}

run();
