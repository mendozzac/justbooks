const MyCart = () => {
  return (
    <>
      <div className="cart-card">
        <img
          className="cart-card__img"
          src="http://books.google.com/books/content?id=PP6SDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          alt="loacting the voice in the film"
          width="100"
          height="150"
        ></img>
        <div className="cart-card__details">
          <div className="cart-card__data">
            <h3 className="cart-card__title">Title of book</h3>
            <p className="cart-card__author"> Author </p>
            <p className="price"> Price </p>
          </div>
          <div className="cart-card__buttons">
            <label htmlFor="quantity">Quantity</label>
            <select className="selectQuantity" id="quantity">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
            <button className="remove-button">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
