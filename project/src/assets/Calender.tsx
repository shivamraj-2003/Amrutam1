import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { FaRegCalendar } from "react-icons/fa"; 

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null); 
  const [isOpen, setIsOpen] = useState<boolean>(false); 

  return (
    <div className="relative">
      <div
        className="border border-gray-400 rounded-full p-2 mt-2 cursor-pointer hover:scale-105 transition"
        onClick={() => setIsOpen(!isOpen)} 
      >
        <FaRegCalendar />
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-10 bg-white shadow-lg rounded-md">
          <DatePicker
            selected={startDate} 
            onChange={(date: Date | null) => { 
              setStartDate(date); 
              setIsOpen(false); 
            }}
            inline 
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
