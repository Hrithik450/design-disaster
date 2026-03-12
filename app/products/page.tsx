import Image from "next/image";
import Link from "next/link";

const products = [
  {
    _id: "1",
    name: "Running Shoes",
    price: 120,
    slug: "running-shoes",
    category: "Shoes",
    imageUrl: "/images/shoe1.webp",
  },
  {
    _id: "2",
    name: "Nike Sneakers",
    price: 150,
    slug: "nike-sneakers",
    category: "Shoes",
    imageUrl: "/images/shoe2.jpeg",
  },
  {
    _id: "3",
    name: "Leather Jacket",
    price: 220,
    slug: "leather-jacket",
    category: "Fashion",
    imageUrl: "/images/dress2.webp",
  },
  {
    _id: "4",
    name: "Smart Watch",
    price: 180,
    slug: "smart-watch",
    category: "Electronics",
    imageUrl: "/images/watch.jpg",
  },
];

const Products = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Browse our Products
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product._id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 lg:h-72 xl:h-80">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center transition group-hover:opacity-75"
                />
              </div>

              <div className="mt-4 flex items-center justify-between px-1">
                <h3 className="text-sm text-gray-700">
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>

                <p className="text-sm font-bold text-gray-900">
                  ${product.price}
                </p>
              </div>

              <p className="mt-1 px-1 text-sm text-gray-500">
                {product.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
