// src/app/calendar/page.tsx
"use client";

import { useState, Suspense } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MDXProvider } from "@mdx-js/react";
import { diaryEntries } from "../../Diary/diaryEntries";

const LoadingFallback = () => <p>Loading...</p>;

export default function CalendarPage() {
  const [SelectedEntryComponent, setSelectedEntryComponent] = useState<React.FC | null>(null);

  const handleDateClick = async (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    // @ts-ignore
    if (diaryEntries[formattedDate]) {
      try {
        // @ts-ignore
        const entryModule = await diaryEntries[formattedDate]();
        const Component = entryModule.default;
        if (typeof Component === "function" || typeof Component === "object") {
          setSelectedEntryComponent(() => Component);
        } else {
          throw new Error("Invalid MDX content");
        }
      } catch (error) {
        console.error("Error loading MDX file:", error);
        setSelectedEntryComponent(() => () => <p>Error loading entry for {formattedDate}</p>);
      }
    } else {
      setSelectedEntryComponent(() => () => <p>No entry for this date.</p>);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-xl w-full text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Welcome to Mariam’s Birthday Calendar ❤️</h1>
        <p className="text-gray-700 leading-relaxed">
          Inside these <strong>48 entries</strong> lies a story—our story. Each date you select reveals another moment I spent 
          thinking of you, missing you, or thanking Allah for bringing you into my life. Within these notes, 
          you’ll find laughter, doubts, confessions, and every crazy way I’ve come to love you.
        </p>
        <p className="text-gray-700 mt-3">
          So go ahead—pick a day, read an entry, and step into my head for a moment. 
          Know that this entire calendar is proof that you’re never off my mind. 
          No matter which date you tap, you’ll find me there—loving you, praying for you, and dreaming about our future.
        </p>
        <p className="text-gray-700 mt-3">
          <em>Thank you for being the reason behind every page, every word, and every prayer.</em>
          <em>P.S. I think you should start with January 8th but it's up too you</em>
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg">
        <Calendar
          onClickDay={handleDateClick}
          minDate={new Date(2024, 10, 22)} // November 22, 2024
          maxDate={new Date(2025, 0, 8)} // January 8, 2025
          className="react-calendar w-full bg-black text-white p-4 rounded-lg shadow-lg mb-6"
        />
        <div className="bg-white text-black p-4 rounded-lg w-full shadow-lg">
          <MDXProvider>
            <Suspense fallback={<LoadingFallback />}>
              {SelectedEntryComponent ? (
                <SelectedEntryComponent />
              ) : (
                <p className="text-gray-700 italic">Pick a day and see exactly what we were going through...</p>
              )}
            </Suspense>
          </MDXProvider>
        </div>
      </div>
    </main>
  );
}

// "use client";

// import { useState, Suspense } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { MDXProvider } from "@mdx-js/react";
// import { diaryEntries } from "../../Diary/diaryEntries";

// const LoadingFallback = () => <p>Loading...</p>;

// export default function CalendarPage() {
//   const [SelectedEntryComponent, setSelectedEntryComponent] = useState<React.FC | null>(null);

//   const handleDateClick = async (date: Date) => {
//     const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

//     if (diaryEntries[formattedDate]) {
//       try {
//         const entryModule = await diaryEntries[formattedDate]();
//         const Component = entryModule.default;
//         if (typeof Component === "function" || typeof Component === "object") {
//           setSelectedEntryComponent(() => Component); // Store the MDX component
//         } else {
//           throw new Error("Invalid MDX content");
//         }
//       } catch (error) {
//         console.error("Error loading MDX file:", error);
//         setSelectedEntryComponent(() => () => <p>Error loading entry for {formattedDate}</p>);
//       }
//     } else {
//       setSelectedEntryComponent(() => () => <p>No entry for this date.</p>);
//     }
//   };

//   return (
//     <main className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4 text-primary text-center">
//         Everytime I thought about you
//       </h1>
//       <Calendar
//         onClickDay={handleDateClick}
//         minDate={new Date(2024, 10, 22)} // November 22, 2024
//         maxDate={new Date(2025, 0, 8)} // January 8, 2025
//         className="w-full max-w-lg bg-black p-4 rounded-lg shadow-lg"
//       />
//       <div className="mt-6 bg-primary text-black p-4 rounded-lg w-full max-w-lg">
//         <MDXProvider>
//           <Suspense fallback={<LoadingFallback />}>
//             {SelectedEntryComponent ? <SelectedEntryComponent /> : <p>Pick a day and see exactly what we were going through...</p>}
//           </Suspense>
//         </MDXProvider>
//       </div>
//     </main>
//   );
// }





// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { MDXProvider } from "@mdx-js/react";

// export default function CalendarPage() {
//   const [selectedEntry, setSelectedEntry] = useState<React.ReactNode>("");

//   const handleDateClick = async (date: Date) => {
//     const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
//     const mdxFileName = formattedDate.replace(/-/g, "-"); // Convert to MM-DD-YYYY format
//     try {
//       const entryModule = await import(`../../Diary/${mdxFileName}.mdx`);
//       setSelectedEntry(entryModule.default);
//     } catch (error) {
//       setSelectedEntry("No entry for this date.");
//     }
//   };

//   return (
//     <main className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4 text-primary text-center">
//         Everytime I thought about you
//       </h1>
//       <Calendar
//         onClickDay={handleDateClick}
//         minDate={new Date(2024, 10, 22)} // November 22, 2024
//         maxDate={new Date(2025, 0, 8)} // January 8, 2025
//         className="w-full max-w-lg bg-black p-4 rounded-lg shadow-lg"
//       />
//       <div className="mt-6 text-center bg-primary text-black p-4 rounded-lg w-full max-w-lg">
//         <MDXProvider>
//           {selectedEntry}
//         </MDXProvider>
//       </div>
//     </main>
//   );
// }




