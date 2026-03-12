"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/app/lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag(props: any) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: props.name,
    price: props.price,
    currency: props.currency,
    image: urlFor(props.image).url(),
    price_id: props.price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        alert("Item added maybe?");
        handleCartClick();
      }}
    >
      Add
    </Button>
  );
}

// export default function AddToBag({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }: ProductCart) {
//   const { addItem, handleCartClick } = useShoppingCart();

//   const product = {
//     name: name,
//     description: description,
//     price: price,
//     currency: currency,
//     image: urlFor(image).url(),
//     price_id: price_id,
//   };
//   return (
//     <Button
//       onClick={() => {
//         addItem(product), handleCartClick();
//       }}
//     >
//       Add To Cart
//     </Button>
//   );
// }
