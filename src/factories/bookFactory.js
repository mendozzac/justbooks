const faker = require("faker");

const generateBooks = () => {
  let books = [];

  for (let id = 1; id <= 10; id++) {
    let image = faker.image.image();
    let title = faker.name.title();
    let author = faker.name.firstName() + faker.name.lastName();
    let price = faker.commerce.price();

    books.push({
      image: image,
      title: title,
      author: author,
      price: price,
    });
  }

  return { items: books };
};


export default generateBooks;
