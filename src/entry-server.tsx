import { renderToString } from "react-dom/server";
// StaticRouter comes from react-router (main), which in v7 is the same
// shared instance as react-router-dom (they're deduplicated to 7.14.1).
import { StaticRouter } from "react-router";
import AppShell from "./app/AppShell.tsx";

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
