const faker = require("faker");

const generateBooks = () => {
  let books = [];

  for (let i = 1; i <= 10; i++) {
    let id = faker.random.alphaNumeric();
    let image = faker.image.image();
    let title = faker.name.title();
    let author = faker.name.firstName() + faker.name.lastName();
    let price = faker.commerce.price();

    books.push({
      id: id,
      image: image,
      title: title,
      author: author,
      price: price,
    });
  }

  return { items: books };
};

export default generateBooks;
