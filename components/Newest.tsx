import Image from "next/image";
import Link from "next/link";

const products = [
  {
    _id: "1",
    name: "Running Shoes",
    price: 120,
    slug: "running-shoes",
    imageUrl: "/images/shoe.jpg",
  },
  {
    _id: "2",
    name: "Smart Watch",
    price: 220,
    slug: "smart-watch",
    imageUrl: "/images/watch.jpg",
  },
  {
    _id: "3",
    name: "Leather Bag",
    price: 180,
    slug: "leather-bag",
    imageUrl: "/images/bag.jpg",
  },
  {
    _id: "4",
    name: "Headphones",
    price: 90,
    slug: "headphones",
    imageUrl: "/images/headphone.jpg",
  },
];

const Newest = () => {
  return (
    <div className="bg-gray-200 p-2 md:p-12">
      <h2 className="mb-6 text-5xl font-bold md:text-3xl">
        Random Stuff You Might Like Or Not
      </h2>

      <div className="flex gap-10 overflow-x-scroll md:grid md:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="min-w-[280px] border bg-white p-2 shadow-md md:min-w-0 md:p-4"
          >
            <Image
              src={product.imageUrl}
              width={600}
              height={300}
              alt={product.name}
              className="h-[250px] w-full object-cover"
            />

            <h3 className="mt-2 text-xs md:text-lg">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>

            <p className="text-[10px] text-gray-400 md:text-sm">
              Price may change after payment or checkout confirmation
            </p>

            <div className="mt-2 flex flex-col gap-1">
              <p className="text-lg font-bold text-red-500 md:text-base">
                ${product.price}
              </p>

              <p className="text-[10px] text-gray-500">
                Delivery between 1 day – 3 weeks
              </p>
            </div>

            <button className="mt-3 w-full bg-black py-1 text-xs text-white hover:bg-gray-800 md:text-sm">
              Maybe Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newest;
