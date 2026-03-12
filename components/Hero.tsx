import Image from "next/image";

const Hero = () => {
  const data = {
    heroImage1: "/hero/hero1.webp",
    heroImage2: "/hero/hero2.webp",
  };

  return (
    <section className="mx-auto w-full bg-gray-900 p-2 text-white md:p-10">
      <div className="flex flex-col gap-2 md:flex-row md:gap-20">
        <div className="space-y-2 md:w-1/2">
          <h1 className="text-6xl font-bold leading-tight md:text-7xl">
            🔥 BUY NOW BEFORE PRICE INCREASES!!!
          </h1>

          <p className="text-xl text-gray-300 md:text-lg">
            Our fashion products might arrive tomorrow… or next week. Delivery
            depends on weather, warehouse delays, courier availability, and
            other unpredictable events that we cannot really control.
          </p>

          <p className="text-lg text-red-400 md:text-sm">
            ⚠ Only 2 items left in stock (maybe).
          </p>

          <p className="text-lg text-yellow-400 md:text-sm">
            Estimated delivery: 2 days – 20 days
          </p>

          <button className="w-full bg-red-500 px-10 py-6 text-2xl font-bold transition hover:bg-red-600 md:w-auto md:px-6 md:py-3 md:text-base">
            BUY SOMETHING
          </button>
        </div>

        <div className="flex gap-3 overflow-x-scroll md:grid md:w-1/2 md:grid-cols-2 md:gap-6">
          <Image
            src={data.heroImage1}
            width={600}
            height={600}
            alt="Hero product 1"
            className="min-w-[300px] rounded-lg object-cover md:min-w-0"
          />

          <Image
            src={data.heroImage2}
            width={600}
            height={600}
            alt="Hero product 2"
            className="min-w-[300px] rounded-lg object-cover md:min-w-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
