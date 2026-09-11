import { useState } from "react";
import { motion } from "framer-motion";
import storyBackground from "../assets/images/stories/black-carbon-texture.jpg";

type Exam = "CAT" | "XAT" | "SNAP";

const orderedUrls = (modules: Record<string, unknown>) =>
  Object.entries(modules)
    .sort(([first], [second]) =>
      first.localeCompare(second, undefined, { numeric: true }),
    )
    .map(([, url]) => url as string);

const catImages = orderedUrls(
  import.meta.glob("../assets/images/stories/cat-2025/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);
const xatImages = orderedUrls(
  import.meta.glob("../assets/images/stories/xat-2025/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);
const snapImages = orderedUrls(
  import.meta.glob("../assets/images/stories/snap-2025/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  }),
);

const examData: Record<
  Exam,
  { title: string; mainStat: string; highlights: string[]; images: string[] }
> = {
  CAT: {
    title: "CAT 2025 Toppers",
    mainStat: "10+ Scored 99.90+ %ile",
    highlights: [
      "60+ students with 99.50+ %ile in CAT 2025",
      "150+ students with 99+ %ile in CAT 2025",
      "210+ BLACKI Converts",
      "3000+ Top B-School Converts Till Now",
    ],
    images: catImages,
  },
  XAT: {
    title: "XAT 2025 Toppers",
    mainStat: "25+ XLRI Conversions",
    highlights: [],
    images: xatImages,
  },
  SNAP: {
    title: "SNAP 2025 Toppers",
    mainStat: "68+ SNAP Conversions",
    highlights: [],
    images: snapImages,
  },
};

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState<Exam>("CAT");

  return (
    <motion.section
      id="success-stories"
      className="mx-auto w-full max-w-7xl px-4 py-10 md:px-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-10 text-center text-2xl font-semibold md:text-4xl">
        Rodha <span className="text-[#FD6A02]">Success Stories</span>
      </h2>

      <div className="flex flex-col gap-4 md:flex-row">
        {(Object.keys(examData) as Exam[]).map((exam) => {
          const data = examData[exam];
          const isActive = activeTab === exam;

          return (
            <motion.button
              key={exam}
              type="button"
              onClick={() => setActiveTab(exam)}
              aria-expanded={isActive}
              className={`relative overflow-hidden rounded-lg bg-cover bg-center p-5 text-left text-white shadow-lg transition-all duration-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FD6A02]/50 ${
                isActive
                  ? "min-h-[600px] flex-1 md:min-h-[520px]"
                  : "min-h-[120px] w-full cursor-pointer md:min-h-[520px] md:w-36"
              }`}
              style={{ backgroundImage: `url(${storyBackground})` }}
              whileHover={{ scale: isActive ? 1 : 1.02 }}
            >
              {isActive ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex h-full flex-col"
                >
                  <div>
                    <h3 className="text-3xl font-bold md:text-5xl">
                      <span className="text-[#FD6A02]">{exam} 2025</span> Toppers
                    </h3>
                    <p className="mt-3 text-2xl font-bold text-[#FD6A02] md:text-4xl">
                      {data.mainStat}
                    </p>
                  </div>

                  <div className="mt-7 grid flex-1 items-center gap-7 lg:grid-cols-[minmax(240px,0.8fr)_1.2fr]">
                    <div>
                      {data.highlights.length > 0 ? (
                        <ul className="space-y-4 text-base font-semibold md:text-xl">
                          {data.highlights.map((highlight) => (
                            <li key={highlight} className="leading-snug">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-lg text-gray-300 md:text-xl">
                          Celebrating our outstanding {data.title}.
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-6 gap-2 sm:gap-3">
                      {data.images.map((image, index) => (
                        <img
                          key={image}
                          src={image}
                          alt={`${data.title} student ${index + 1}`}
                          loading="lazy"
                          className="aspect-square w-full rounded-full border-2 border-[#FD6A02]/70 object-cover shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-4 text-2xl" aria-hidden="true">
                    ❮
                  </span>
                </motion.div>
              ) : (
                <div className="flex h-full items-center justify-between gap-4 md:flex-col md:justify-center">
                  <div className="md:[writing-mode:vertical-rl] md:rotate-180">
                    <h3 className="text-xl font-bold md:text-2xl">{data.title}</h3>
                    <p className="mt-2 font-semibold text-[#FD6A02] md:mt-4">
                      {data.mainStat}
                    </p>
                  </div>
                  <span className="text-2xl" aria-hidden="true">❯</span>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.section>
  );
}
