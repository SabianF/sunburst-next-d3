
import { render } from "react-dom";

import { SunburstChart } from "../components/sunburst-chart";

export default function Home() {
  return (
    <main>
      <h1>Sunburst diagram example app</h1>
      <SunburstChart />
    </main>
  )
}
