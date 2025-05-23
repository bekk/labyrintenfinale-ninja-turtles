import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp", "routes/help.tsx"),
  route("/more-info", "routes/more-info.tsx"),
  route("/om-oss", "routes/about-us.tsx"),
  route("/vårt-formål", "routes/our-goals.tsx"),
  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),
  route("/register/company", "routes/register/company.tsx"),
  route("/register/personal", "routes/register/personal.tsx"),
  route("/profil", "routes/profile.tsx"),
  route("/company-ads", "routes/company-ads.tsx"),
  route("/ads/:id", "routes/ad.tsx"),
  route("/personal-ads", "routes/personal-ads.tsx"),
  route("/equipment-ads", "routes/equipment-ads.tsx"),
  route("/chat", "routes/chat.tsx"),
] satisfies RouteConfig;
