import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp" ,"routes/help.tsx"),
  route("/more-info", "routes/more-info.tsx"),
  route("/om-oss", "routes/about-us.tsx"),
  route("/vårt-formål", "routes/our-goals.tsx"),
] satisfies RouteConfig;
