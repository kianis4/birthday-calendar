// src/app/calendar/page.tsx

"use client";

import '@fontsource/playfair-display';
import { useState, Suspense } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
MDXProviderComponents
// @ts-ignore
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { diaryEntries } from "../../Diary/diaryEntries";

const LoadingFallback = () => <p>Loading...</p>;

/**
 * mdxComponents overrides default HTML tags in your MDX files.
 * - p: Adds margin-bottom and relaxed line-height so paragraphs aren't squished.
 * - time (or h4, or blockquote, etc.): Applies a bigger font-size, margins, and bold styling.
 *
 * That way, you don't have to edit each .mdx; any existing <p> or <time> in them
 * will inherit these styles automatically.
 */

const mdxComponents:  MDXProviderComponents = {
  // @ts-ignore
  h1: (props) => (
    <h1 
      {...props} 
      className="
        text-xl sm:text-2xl 
        font-semibold 
        text-gray-700 
        mb-2 
        mt-4
      "
    />
  ),
  // @ts-ignore
  h2: (props) => (
    <h2
      {...props}
      className="
        text-2xl sm:text-3xl 
        font-extrabold 
        text-primary
        mb-3
      "
    />
  ),
  // Keep or extend other overrides for <p> / <time> / etc.
  // @ts-ignore
  p: (props) => (
    <p {...props} className="mb-4 leading-relaxed" />
  ),
};

export default function CalendarPage() {
  const [SelectedEntryComponent, setSelectedEntryComponent] = useState<React.FC | null>(null);

  const handleDateClick = async (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    // @ts-ignore – ignoring index signature error for quick fix
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
    <main className="font-romantic flex flex-col items-center justify-center p-4 sm:p-8 bg-blue-50 min-h-screen">
      <div className="max-w-xl w-full text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
          Welcome to Mariam’s Birthday Calendar ❤️
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Inside these <strong>48 entries</strong> lies a story—our story. Each date you select
          reveals another moment I spent thinking of you, missing you, or thanking Allah for
          bringing you into my life. Within these notes, you’ll find laughter, doubts, confessions,
          and every crazy way I’ve come to love you.
        </p>
        <p className="text-gray-700 mt-3">
          So go ahead—pick a day, read an entry, and step into my head for a moment (I recommend
          starting with January 8). Know that this entire calendar is proof that you’re never off
          my mind. No matter which date you tap, you’ll find me there—loving you, praying for you,
          and dreaming about our future.
        </p>
        <p className="text-gray-700 mt-3">
          <em>Thank you for being the reason behind every page, every word, and every prayer.</em>
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg">
        <Calendar
          onClickDay={handleDateClick}
          minDate={new Date(2024, 10, 22)} // November 22, 2024
          maxDate={new Date(2025, 0, 8)}  // January 8, 2025
          className="react-calendar w-full bg-black text-white p-4 rounded-lg shadow-lg mb-6"
        />
        <div className="bg-white text-black p-4 rounded-lg w-full shadow-lg">
          {/* Provide custom styles for all MDX tags here */}
          <MDXProvider components={mdxComponents}>
            <Suspense fallback={<LoadingFallback />}>
              {SelectedEntryComponent ? (
                <SelectedEntryComponent />
              ) : (
                <p className="text-gray-700 italic">
                  Pick a day and see exactly what we were going through...
                </p>
              )}
            </Suspense>
          </MDXProvider>
        </div>
      </div>
    </main>
  );
}

// "use client";

// import '@fontsource/playfair-display';
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
//     // @ts-ignore
//     if (diaryEntries[formattedDate]) {
//       try {
//         // @ts-ignore
//         const entryModule = await diaryEntries[formattedDate]();
//         const Component = entryModule.default;
//         if (typeof Component === "function" || typeof Component === "object") {
//           setSelectedEntryComponent(() => Component);
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
//     <main className="font-romantic flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-xl w-full text-center mb-8">
//         <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Welcome to Mariam’s Birthday Calendar ❤️</h1>
//         <p className="text-gray-700 leading-relaxed">
//           Inside these <strong>48 entries</strong> lies a story—our story. Each date you select reveals another moment I spent 
//           thinking of you, missing you, or thanking Allah for bringing you into my life. Within these notes, 
//           you’ll find laughter, doubts, confessions, and every crazy way I’ve come to love you.
//         </p>
//         <p className="text-gray-700 mt-3">
//           So go ahead—pick a day, read an entry, and step into my head for a moment (I recommend starting with January 8). 
//           Know that this entire calendar is proof that you’re never off my mind. 
//           No matter which date you tap, you’ll find me there—loving you, praying for you, and dreaming about our future.
//         </p>
//         <p className="text-gray-700 mt-3">
//           <em>Thank you for being the reason behind every page, every word, and every prayer.</em>
//         </p>
//       </div>

//       <div className="flex flex-col items-center w-full max-w-lg">
//         <Calendar
//           onClickDay={handleDateClick}
//           minDate={new Date(2024, 10, 22)} // November 22, 2024
//           maxDate={new Date(2025, 0, 8)} // January 8, 2025
//           className="react-calendar w-full bg-black text-white p-4 rounded-lg shadow-lg mb-6"
//         />
//         <div className="bg-white text-black p-4 rounded-lg w-full shadow-lg">
//           <MDXProvider>
//             <Suspense fallback={<LoadingFallback />}>
//               {SelectedEntryComponent ? (
//                 <SelectedEntryComponent />
//               ) : (
//                 <p className="text-gray-700 italic">Pick a day and see exactly what we were going through...</p>
//               )}
//             </Suspense>
//           </MDXProvider>
//         </div>
//       </div>
//     </main>
//   );
// }