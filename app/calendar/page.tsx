export const metadata = {
  title: "IAFLMUN | Calendar",
  description:
    "View the complete schedule for IAFLMUN 2025 conference in Istanbul.",
};

interface ScheduleItem {
  time: string;
  day1: string;
  day2: string;
  day3: string;
}

const schedule: ScheduleItem[] = [
  {
    time: "08.30-09.30",
    day1: "-",
    day2: "Breakfast",
    day3: "Breakfast",
  },
  {
    time: "09:00 - 10:30",
    day1: "-",
    day2: "Session IV",
    day3: "Session IX",
  },
  {
    time: "10:30 - 11:00",
    day1: "Registration",
    day2: "Coffee Break",
    day3: "Coffee Break",
  },
  {
    time: "11:00 - 12:30",
    day1: "Opening Ceremony",
    day2: "Session V",
    day3: "Session X",
  },
  {
    time: "12:30 - 14:00",
    day1: "Lunch",
    day2: "Lunch",
    day3: "Lunch",
  },
  {
    time: "14:00 - 15:30",
    day1: "Session I",
    day2: "Session VI",
    day3: "Session XI",
  },
  {
    time: "15:30 - 16:00",
    day1: "Coffee Break",
    day2: "Coffee Break",
    day3: "Coffee Break",
  },
  {
    time: "16:00 - 17:30",
    day1: "Session II",
    day2: "Session VII",
    day3: "Session XII",
  },
  {
    time: "17:30 - 18:00",
    day1: "Coffee Break",
    day2: "Coffee Break",
    day3: "Coffee Break",
  },
  {
    time: "18:00 - 19:30",
    day1: "Session III",
    day2: "Session VIII",
    day3: "Closing Ceremony",
  },
];

export default function CalendarPage() {
  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="text-center space-y-4">
          <h1 className="section-title">CALENDAR</h1>
          <p className="section-subtitle text-base md:text-lg max-w-3xl mx-auto">
            IAFLMUN 2025 schedule overview
          </p>
        </section>

        <section className="space-y-8">
          {/* Schedule Table */}
          <div className="surface-card p-6 md:p-8 overflow-x-auto">
            <div className="min-w-full">
              {/* Desktop Table */}
              <div className="hidden md:block">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#3a0000]/20">
                      <th className="text-left py-4 px-4 font-semibold text-[#3a0000]">
                        Time
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-[#3a0000]">
                        Day 1
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-[#3a0000]">
                        Day 2
                      </th>
                      <th className="text-left py-4 px-4 font-semibold text-[#3a0000]">
                        Day 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-[#3a0000]/10 hover:bg-[#3a0000]/5 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium text-[#3a0000]">
                          {item.time}
                        </td>
                        <td className="py-4 px-4 text-[#2a0505]">
                          {item.day1 || "-"}
                        </td>
                        <td className="py-4 px-4 text-[#2a0505]">
                          {item.day2 || "-"}
                        </td>
                        <td className="py-4 px-4 text-[#2a0505]">
                          {item.day3 || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                {/* Day 1 */}
                <div className="rounded-2xl bg-gradient-to-br from-[#3a0000] to-[#5a1a1a] text-[#f5eadd] p-5 space-y-4">
                  <h3 className="font-semibold text-xl border-b border-[#f5eadd]/20 pb-2">
                    Day 1
                  </h3>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      item.day1 && (
                        <div key={index} className="border-b border-[#f5eadd]/10 pb-3 last:border-0 last:pb-0">
                          <div className="text-[#f5eadd]/70 text-xs mb-1">{item.time}</div>
                          <div className="text-sm font-medium">{item.day1}</div>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Day 2 */}
                <div className="rounded-2xl bg-gradient-to-br from-[#3a0000] via-[#4a0a1a] to-[#2a0a2a] text-[#f5eadd] p-5 space-y-4">
                  <h3 className="font-semibold text-xl border-b border-[#f5eadd]/20 pb-2">
                    Day 2
                  </h3>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      item.day2 && (
                        <div key={index} className="border-b border-[#f5eadd]/10 pb-3 last:border-0 last:pb-0">
                          <div className="text-[#f5eadd]/70 text-xs mb-1">{item.time}</div>
                          <div className="text-sm font-medium">{item.day2}</div>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Day 3 */}
                <div className="rounded-2xl bg-gradient-to-br from-[#3a0000] to-[#1a0a2a] text-[#f5eadd] p-5 space-y-4">
                  <h3 className="font-semibold text-xl border-b border-[#f5eadd]/20 pb-2">
                    Day 3
                  </h3>
                  <div className="space-y-3">
                    {schedule.map((item, index) => (
                      item.day3 && (
                        <div key={index} className="border-b border-[#f5eadd]/10 pb-3 last:border-0 last:pb-0">
                          <div className="text-[#f5eadd]/70 text-xs mb-1">{item.time}</div>
                          <div className="text-sm font-medium">{item.day3}</div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="rounded-[40px] bg-gradient-to-br from-[#3a0000] to-[#1a0a2a] text-[#f5eadd] p-8 md:p-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Conference Overview
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              IAFLMUN is a 3-day event that will host 200+ participants and 50+ 
              staff members. The conference features committee sessions, opening and 
              closing ceremonies, meals, and networking opportunities throughout the event.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

