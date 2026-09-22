import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, clearCart, removeItem } from "../redux/cartSlice";

const formatPrice = (price) => {
    if (!price) return "Price unavailable";
    return "₹" + (price / 100).toFixed(0);
};

const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const groupedItems = cartItems.reduce((items, item) => {
        const existingItem = items.find((entry) => entry.item.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            items.push({ item, quantity: 1 });
        }

        return items;
    }, []);

    return(
        <main className="cart-page">
            <div className="cart-page-header">
                <div>
                    <p className="cart-eyebrow">Your order</p>
                    <h1>Cart</h1>
                </div>
                <div className="cart-header-actions">
                    <span className="cart-count">{cartItems.length} items</span>
                    <button
                        className="cart-clear-btn"
                        type="button"
                        onClick={() => dispatch(clearCart())}
                    >
                        Clear
                    </button>
                </div>
            </div>

            {cartItems.length === 0 ? (
                <section className="cart-empty" aria-labelledby="empty-cart-title">
                    <div className="cart-empty-icon" aria-hidden="true">🛒</div>
                    <h2 id="empty-cart-title">Your cart is empty</h2>
                    <p>Discover something delicious and add your first item to get started.</p>
                    <Link className="cart-browse-btn" to="/">Browse restaurants</Link>
                </section>
            ) 
            :
            (
                <section className="cart-items-list" aria-label="Items in your cart">
                    {groupedItems.map(({ item, quantity }) => (
                        <article className="cart-item-card" key={item.id || item.name}>
                            <div className="cart-item-image-wrap">
                                {item.imageId ? (
                                    <img
                                        src={CDN_URL + item.imageId}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />
                                ) : (
                                    <span className="cart-item-image-fallback" aria-hidden="true">🍽️</span>
                                )}
                            </div>
                            <div className="cart-item-info">
                                <h2>{item.name}</h2>
                                <p>{formatPrice(item.finalPrice || item.defaultPrice || item.price)}</p>
                            </div>
                            <div className="cart-item-quantity" aria-label={`Quantity of ${item.name}`}>
                                <button
                                    type="button"
                                    aria-label={`Remove one ${item.name}`}
                                    onClick={() => dispatch(removeItem(item))}
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button
                                    type="button"
                                    aria-label={`Add one more ${item.name}`}
                                    onClick={() => dispatch(addItem(item))}
                                >
                                    +
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    )
}

export default Cart;