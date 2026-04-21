import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import type { RootState } from "../../slices";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

type PropsType = {
  year: number;
  month: number;
  nextMonth: () => void;
  prevMonth: () => void;
};

const Calendar = ({ year, month, nextMonth, prevMonth }: PropsType) => {
  // month: 0-11 (0 = январь)
  const firstDay = new Date(year, month, 1);
  let startWeekday = firstDay.getDay(); // 0 = вс
  // Преобразуем в понедельник-первый
  startWeekday = startWeekday === 0 ? 6 : startWeekday - 1;


  const entries = useSelector((state: RootState) => state.diary.entries)
  console.log(entries)
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];
  const navigate = useNavigate();

  // Пустые ячейки
  for (let i = 0; i < startWeekday; i++) {
    calendarDays.push(null);
  }

  // Числа месяца
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Заполняем до 42
  while (calendarDays.length < 42) {
    calendarDays.push(null);
  }

  return (
    <div>
      <div className="text-xl font-bold mb-4 flex justify-center gap-4">
        <Button onClick={prevMonth}>
          <ArrowLeftIcon className="w-5 h-5"/>
        </Button>
        {new Date(year, month).toLocaleString("ru", {
          month: "long",
          year: "numeric",
        })}
        <Button onClick={nextMonth}>
          <ArrowRightIcon className="w-5 h-5"/>
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
        {calendarDays.map((day, i) => {
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const hasEntry = entries.some((entry) => entry.date === dateStr)
          return (
            <button
              key={i}
              className={`text-center p-2 border rounded min-h-10.5 ${hasEntry ? "bg-red-500" : "bg-white"}`}
              onClick={() => navigate(`/addNewDay?date=${dateStr}`)}
              disabled={day === null}
            >
              {day !== null ? day : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
