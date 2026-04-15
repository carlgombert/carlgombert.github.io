import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import AppShell from "./app/AppShell.tsx";

export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
