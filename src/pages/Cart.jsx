import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripeLoadedPromise = loadStripe(
  "pk_test_51HsqkCGuhXEITAut89vmc4jtjYd7XPs8hWfo2XPef15MFqI8rCFc8NqQU9WutlUBsd8kmNqHBeEmSrdMMpeEEyfT00KzeVdate"
);

export default function Cart({ cart }) {
  const [email, setEmail] = useState("");

  const lineItemsCart = cart.map((cartItem) => {
    return { price: cartItem.price_id, quantity: cartItem.quantity };
  });

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    stripeLoadedPromise.then((stripe) => {
      stripe.redirectToCheckout({
        lineItems: lineItemsCart,
        mode: "payment",
        successUrl: "https://react-tutorial.app/app.html",
        cancelUrl: "https://react-tutorial.app/app.html",
        customerEmail: email,
      });
    });
  };

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form onSubmit={handleSubmit} className="pay-form">
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
              </p>
              <Input
                value={email}
                onChange={handleChange}
                email={email}
                autoComplete="email"
                placeholder="Email"
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
