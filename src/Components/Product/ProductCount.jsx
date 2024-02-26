import React from 'react'
import { Link } from 'react-router-dom';
import staticIcon from '../../Helper/images';

function ProductCount() {
    const [count, setCount] = React.useState(1);

    return (
        <>
            <div
                style={{
                    position: "sticky",
                    bottom: 0,
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 20px",
                    borderTop: "1px solid #ccc",
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', color: "rgb(159 32 137)", gap: '0.5rem', fontSize: "2rem" }}>
                    <p style={{ cursor: "pointer" }} onClick={() => setCount(count - 1)}>-</p>
                    <p style={{ border: "1px solid rgb(159 32 137)", fontSize: '18px', borderRadius: "6px", padding: '6px 25px' }}>{count}</p>
                    <p style={{ cursor: "pointer" }} onClick={() => setCount(count + 1)}>+</p>
                </div>
                <Link to="/checkout/address">

                    <button
                        style={{
                            padding: '1rem 2.5rem',
                            fontSize: "1rem",
                            border: "none",
                            borderRadius: "12px",
                            backgroundColor: 'rgb(159 32 137)',
                            color: 'white',
                            display: "flex",
                            alignItems: "center",
                            gap: '0.3rem'
                        }}
                    >
                        <img
                            src={staticIcon.ArrowIcon}
                            loading="lazy"
                            alt={"arrow"}
                        /> Buy Now
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ProductCount
