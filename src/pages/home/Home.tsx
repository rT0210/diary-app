import { useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import Container from "../../components/container/Container";

const Home = () => {
  const [month, setMounth] = useState(3);
  const [year, setYear] = useState(2026);

  const prevMonth = () => {
    if (month !== 0) {
      setMounth((prev) => prev - 1);
    } else {
      setMounth(11);
      setYear((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (month !== 11) {
      setMounth((prev) => prev + 1);
    } else {
      setMounth(0);
      setYear((prev) => prev + 1);
    }
  };

  return (
    <section className="bg-cyan-200 p-4 h-full">
      <Container direction="flex-col" height="h-full">
        <Calendar
          year={year}
          month={month}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
        />
      </Container>
    </section>
  );
};
export default Home;
