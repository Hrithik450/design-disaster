import Image from "next/image";
import Link from "next/link";

const products = [
  {
    _id: "1",
    name: "Running Shoes",
    price: 120,
    slug: "running-shoes",
    category: "shoes",
    imageUrl: "/images/shoe1.webp",
  },
  {
    _id: "2",
    name: "Nike Sneakers",
    price: 150,
    slug: "nike-sneakers",
    category: "shoes",
    imageUrl: "/images/shoe2.jpeg",
  },
  {
    _id: "3",
    name: "Leather Jacket",
    price: 220,
    slug: "leather-jacket",
    category: "fashion",
    imageUrl: "/images/dress1.png",
  },
  {
    _id: "4",
    name: "Smart Watch",
    price: 180,
    slug: "smart-watch",
    category: "electronics",
    imageUrl: "/images/watch.jpg",
  },
  {
    _id: "5",
    name: "Headphones",
    price: 90,
    slug: "headphones",
    category: "electronics",
    imageUrl: "/images/headphone.jpg",
  },
];

const Category = ({ params }: { params: { category: string } }) => {
  return (
    <div className="bg-gray-100 p-2 md:bg-white md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h2 className="text-5xl font-bold text-gray-900 md:text-2xl">
            Random Products for &quot;{params.category}&quot;
          </h2>

          <p className="text-xs text-gray-500 md:text-sm">
            Items availability may vary and prices may change unexpectedly
          </p>
        </div>

        <div className="flex gap-6 overflow-x-scroll pb-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="min-w-[250px] border bg-white p-2 shadow md:min-w-0 md:p-4"
            >
              <div className="h-40 w-full overflow-hidden bg-gray-200 md:h-72">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition group-hover:opacity-75"
                />
              </div>

              <div className="mt-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xs text-gray-700 md:text-sm">
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>

                <p className="text-lg font-bold text-red-500 md:text-sm md:text-gray-900">
                  ${product.price}
                </p>
              </div>

              <p className="mt-1 text-[10px] text-gray-400 md:text-sm">
                Delivery between 1 day – 3 weeks
              </p>

              <button className="mt-2 w-full bg-black py-1 text-[10px] text-white md:text-sm">
                Maybe Buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
