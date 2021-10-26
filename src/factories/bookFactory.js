const faker = require('faker');
const fs = require('fs')

const generateBooks = () => {

  let books = []

  for (let id=1; id <= 10; id++) {

    let image = faker.image.image();
    let title = faker.name.title();
    let author = faker.name.firstName() + faker.name.lastName();
    let price = faker.commerce.price();

    books.push({
        // "id": id,
        "image": image,
        "title": title,
        "author": author,
        "price": price,
    });
  }

  return { "items": books }
}

let dataObj = generateBooks();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

//console.log(dataObj.data);

export default generateBooks;