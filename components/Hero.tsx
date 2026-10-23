
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="overflow-hidden rounded-xl bg-[#15181e]">
      <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-12">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="font-display text-4xl font-bold uppercase leading-tight md:text-6xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400">
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into today&apos;s plan,
            and watch the week&apos;s work add up.
          </p>

          <Link
            href="/#library"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-black transition hover:bg-lime-300"
          >
            Browse Workouts
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-[260px] md:h-[400px]">

          <Image
            src="/images/hero.png"
            alt="Athlete training in the gym"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;
