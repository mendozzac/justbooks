import Button from "../../components/Button/Button";

const MyCart = () => {
  return (
    <>
      <div className="cart-card">
        <img
          className="cart-card__img"
          src="http://books.google.com/books/content?id=PP6SDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          alt="loacting the voice in the film"
          width="150"
          height="200"
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
            <Button text="Remove" />
          </div>
        </div>
      </div>
      <div className="checkout">
        <div className="total">
          <span className="totalLabel">Total</span>
          <span className="totalAmount">0.00€</span>
        </div>
        <Button text="Checkout" />
      </div>
    </>
  );
};

export default MyCart;
