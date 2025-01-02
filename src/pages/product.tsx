import * as React from "react";

const ProductCard = (props: any) => {
    return(
        <>
            <h1> I am product card</h1>
            <p>Product Name:  {props.productName}</p>
        </>
    )
}

export default ProductCard