import Image from "next/image";

export default function Letter() {
  return (
    <section
      id="letter"
      className="w-full bg-[#5a0000] pb-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Kağıt zemin */}
        <div
          className="relative bg-no-repeat bg-cover bg-center rounded-md px-6 sm:px-10 py-10 sm:py-12 shadow-xl"
          style={{ backgroundImage: "url('/images/letter-paper.jpg')" }}
        >
          <h2 className="section-title section-title--dark">
            Letter from the SG
          </h2>

          <p className="section-subtitle section-subtitle--dark">
            It all started with an idea.
          </p>

          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              Not a grand plan. Just a simple thought: What if we built
              something different? And slowly, through long nights, honest
              conversations, and a shared purpose, IAFLMUN became real.
            </p>

            <p>
              This isn’t just our first edition — it’s our first step. We didn’t
              want to repeat what had already been done. We wanted to create a
              space where people, not roles, come first. Where ideas matter more
              than formality. Where young minds meet not just to argue, but to
              understand.
            </p>

            <p>
              Here, we value thoughtful questions over perfect answers. Here, we
              believe diplomacy begins with empathy. Here, your voice isn’t one
              among many — it is part of something new.
            </p>

            <p>
              So, as you raise your placards and take the floor, remember that
              you are part of a story that didn’t exist until you walked into
              it.
            </p>

            <p>We’re honored to write this first chapter with you.</p>
          </div>

          <p className="mt-8 font-semibold">Melek Mamar</p>
        </div>

      
      </div>
    </section>
  );
}
