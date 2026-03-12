import AddToCart from "@/components/AddToCart";
import BuyNow from "@/components/BuyNow";
import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";

const products = [
  {
    _id: "1",
    slug: "running-shoes",
    name: "Running Shoes",
    price: 120,
    description: "Comfortable running shoes for everyday training.",
    category: "shoes",
    price_id: "price_1",
    images: ["/images/shoe3.webp", "/images/shoe4.webp"],
  },
  {
    _id: "2",
    slug: "leather-jacket",
    name: "Leather Jacket",
    price: 220,
    description: "Premium leather jacket with modern fit.",
    category: "fashion",
    price_id: "price_2",
    images: ["/images/dress3.jpg", "/images/dress4.jpeg"],
  },
];

const Product = ({ params }: { params: { slug: string } }) => {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Gallery */}
          <ImageGallery images={product.images} />

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>

            <p className="text-gray-500">{product.description}</p>

            <Link href={`/${product.category}`}>
              <p className="font-bold text-gray-500">
                Category: {product.category}
              </p>
            </Link>

            <p className="font-bold text-gray-500">Price: ${product.price}</p>

            <div className="flex gap-5">
              <BuyNow
                currency="$"
                description={product.description}
                image={product.images[0]}
                name={product.name}
                price={product.price}
                price_id={product.price_id}
                key={product._id}
              />

              <AddToCart
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.images[0]}
                currency="$"
                price_id={product.price_id}
                key={product._id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
