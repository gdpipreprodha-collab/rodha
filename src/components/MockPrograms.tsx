import { Check } from "lucide-react";
import Programs from "../assets/images/programs/Programs.png";

type Program = {
  name: string;
  price: string;
  oldPrice?: string;
  features: string[];
  href: string;
  recommended?: boolean;
  mini?: boolean;
};

const miniPackagesUrl =
  "https://exam.rodha.co.in/packages/RodhaMiniPackages/MTgyNQ==";

const programs: Program[] = [
  {
    name: "Rodha CAT Mocks And OMETs Package Test",
    oldPrice: "₹6,999",
    price: "₹6,299/-",
    features: [
      "30 Full-length CAT Mocks",
      "10 XAT, 25 SNAP, And 15 NMAT Mocks",
      "105 Sectional Tests",
      "40+ Topic-wise Practice Modules",
      "Comprehensive Video Solutions",
      "Strategy-based Mock Analysis Sessions",
      "Percentile Tracking Tool",
    ],
    href: "https://exam.rodha.co.in/packages/RodhaCATMocksandOMETSPackage/MTYwNQ==",
    recommended: true,
  },
  {
    name: "Rodha CAT Mocks & Sectional Tests",
    oldPrice: "₹5,999",
    price: "₹5,399/-",
    features: [
      "30 Full-length CAT Mocks",
      "105 Sectional Tests",
      "40+ Topic-wise Practice Modules",
      "Comprehensive Video Solutions",
      "Strategy-based Mock Analysis Sessions",
      "Percentile Tracking Tool",
    ],
    href: "https://exam.rodha.co.in/packages/RodhaCATMocksandSectionalTests/MTYwNA==",
  },
  {
    name: "Rodha CAT Mocks",
    oldPrice: "₹3,499",
    price: "₹3,149/-",
    features: [
      "30 Full-length CAT Mocks",
      "Comprehensive Video Solutions",
      "Strategy-based Mock Analysis Sessions",
      "Percentile Tracking Tool",
    ],
    href: "https://exam.rodha.co.in/packages/RodhaCATMocks/MTYwMw==",
  },
  {
    name: "Rodha Sectional Tests",
    oldPrice: "₹3,499",
    price: "₹3,149/-",
    features: [
      "105 Sectional Tests",
      "40+ Topic-wise Practice Modules",
      "Comprehensive Video Solutions",
      "Strategy-based Mock Analysis Sessions",
      "Percentile Tracking Tool",
    ],
    href: "https://exam.rodha.co.in/packages/RodhaSectionalTests/MTYwMg==",
  },
  {
    name: "Mini Mocks",
    oldPrice: "₹4,000",
    price: "₹2,999/-",
    features: [
      "15 CAT Mocks",
      "Detailed Video Solutions",
      "Mock Analysis",
      "Percentile Tracking",
    ],
    href: miniPackagesUrl,
    mini: true,
  },
  {
    name: "Mini Sectionals",
    oldPrice: "₹2,500",
    price: "₹1,999/-",
    features: [
      "20 VARC Sectionals",
      "20 LRDI Sectionals",
      "20 Quant Sectionals",
      "Detailed Video Solutions",
    ],
    href: miniPackagesUrl,
    mini: true,
  },
  {
    name: "Mini Combo",
    oldPrice: "₹3,500",
    price: "₹2,499/-",
    features: [
      "10 CAT Mocks",
      "30 Sectional Tests (10 Each)",
      "Video Solutions",
      "Percentile Tracking",
    ],
    href: miniPackagesUrl,
    mini: true,
  },
  {
    name: "Individual Sectionals",
    oldPrice: "₹2,500",
    price: "₹1,499/-",
    features: [
      "35 Sectionals of any one subject (VARC/LRDI/Quants)",
      "Detailed Video Solutions",
    ],
    href: miniPackagesUrl,
    mini: true,
  },
];

export default function MockPrograms() {
  return (
    <section
      id="package"
      className="min-h-screen bg-[#f3f4f6] px-4 py-12 font-sans text-black dark:bg-[#121212] dark:text-white"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-2 text-3xl font-semibold md:text-4xl">
          Our <span className="font-bold text-[#FF6B00]">CAT Mocks</span> Programs
        </h2>
        <p className="mb-10 text-gray-700 dark:text-gray-300">
          Choose from our high quality test packages designed to suit your preparation needs.
        </p>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:snap-none lg:grid-cols-3">
          {programs.map((program) => {
            const darkCard = program.mini;

            return (
              <article
                key={program.name}
                className={`group relative flex min-w-[85%] snap-start flex-col rounded-xl border-2 p-6 text-left transition duration-300 sm:min-w-0 ${
                  darkCard
                    ? "border-[#454545] bg-[#171717] text-white"
                    : "border-gray-200 bg-white hover:bg-gradient-to-r hover:from-[#1c1c1c] hover:to-[#454546] hover:text-white dark:border-[#7c7c7c] dark:bg-[#1C1C1C]"
                }`}
              >
                {program.recommended && (
                  <div className="absolute -top-4 left-4 rounded-full bg-[#FF6B00] px-3 py-1 text-xs font-semibold text-white">
                    Most Recommended
                  </div>
                )}
                {program.mini && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B00]">
                    Rodha Mini Mock Series
                  </p>
                )}
                <h3 className="mb-2 cursor-default text-3xl font-semibold">
                  {program.name}
                </h3>
                <div className="mb-4 flex flex-wrap items-baseline gap-2">
                  {program.oldPrice && (
                    <span className="text-lg text-gray-500 line-through dark:text-gray-400">
                      {program.oldPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-[#FF6B00]">
                    {program.price}
                  </span>
                </div>
                <ul
                  className={`flex-1 space-y-2 pt-4 text-sm font-bold ${
                    darkCard
                      ? "text-gray-200"
                      : "text-gray-700 group-hover:text-white dark:text-gray-300"
                  }`}
                >
                  {program.features.map((feature) => (
                    <li key={feature} className="flex cursor-default items-start gap-2">
                      <span className="mt-1 inline-flex size-3 shrink-0 items-center justify-center rounded-full bg-white text-black">
                        <Check className="size-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={program.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-fit rounded-full bg-[#FF6B00] px-10 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B00]/40"
                >
                  {program.mini ? "BUY NOW" : "Buy Now"}
                </a>
              </article>
            );
          })}

          <div
            style={{
              backgroundImage: `url(${Programs})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="group min-w-[85%] snap-start rounded-xl border border-gray-300 bg-gray-200 p-8 text-left transition duration-300 sm:min-w-0 dark:border-[#2C2C2C] dark:bg-[#2A2A2A]"
          >
            <p className="mb-4 text-3xl font-semibold text-white">
              Check out our <br /> Full Comprehensive <br /> Preparation <br /> Programs
            </p>
            <a
              href="https://www.rodha.co.in/s/store"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full border border-white px-16 py-4 text-xl font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Check Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
