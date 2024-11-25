import React, { useState } from "react";

export default function Shop(props) {
    let ShopItems = props.items;

    const [cart, setCart] = useState([]);
    const [amountPaid, setAmountPaid] = useState(null);
    const [showReceipt, setShowReceipt] = useState(false);

    function AddItem(item) {
        setCart((c) => [...c, item]);
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const handleCheckout = (event) => {
        event.preventDefault();
        const total = calculateTotal();
        const enteredAmount = parseFloat(amountPaid);

        if (enteredAmount < total) {
            alert("You have not entered enough money to complete the transaction!");
            return;
        }

        setShowReceipt(true);
    };

    const handleAmountPaidChange = (event) => {
        setAmountPaid(event.target.value);
    };

    const RenderItems = () => {
        return ShopItems.map((item) => (
            <ul key={item.id}>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
                <button onClick={() => AddItem(item)}>Add to Cart!</button>
            </ul>
        ));
    };

    const renderCart = () => {
        return cart.map((item) => (
            <ul key={item.id}>
                <li>{item.name}</li>
                <p>Price per piece: ${item.price}</p>
            </ul>
        ));
    };

    if (props.isLoggdIn === false) {
        return <Login />;
    } else {
        return (
            <>
                <h4>These are the items: </h4>
                <ul>{RenderItems()}</ul>
                <hr />
                <h4>Cart Items: </h4>
                {cart.length > 0 ? (
                    <ul>{renderCart()}</ul>
                ) : (
                    <p>There are no items in the cart!</p>
                )}
                <hr />
                <h4>Checkout:</h4>
                <form onSubmit={handleCheckout}>
                    <label>
                        Enter amount to pay: $&nbsp;
                        <input
                            type="number"
                            value={amountPaid}
                            onChange={handleAmountPaidChange}
                            min="0"
                            step="0.01"
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Checkout</button>
                </form>

                {showReceipt && (
                    <div>
                        <h4>Receipt:</h4>
                        <p>Total price: ${calculateTotal().toFixed(2)}</p>
                        <p>Amount paid: ${parseFloat(amountPaid).toFixed(2)}</p>
                        <p>
                            Change: $
                            {(
                                parseFloat(amountPaid) - calculateTotal()
                            ).toFixed(2)}
                        </p>
                    </div>
                )}
            </>
        );
    }
}
