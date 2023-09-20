// import { NextResponse } from "next/server";

// export async function GET(): Promise<NextResponse> {
//   const response = await fetch(
//     "https://api.open-meteo.com/v1/forecast?latitude=37.3541&longitude=-121.9552&hourly=temperature_2m,apparent_temperature,rain&daily=sunrise,sunset,uv_index_max&current_weather=true&windspeed_unit=mph&timezone=America%2FLos_Angeles&forecast_days=1",
//     { cache: "no-store" }
//   );

//   if (response.status !== 200) {
//     // console.error("Error fetching weather data");
//     return new NextResponse(
//       JSON.stringify({ error: "Error fetching weather data" })
//     );
//   } else {
//     const data = await response.json();
//     console.log(data);
//     return new NextResponse(JSON.stringify(data));
//   }
// }
