import store from "@/store";

export default config => {
  // Add authorization
  const token = store.getters["auth/token"];
  if (token) {
    const company = store.getters["companies/selected"];
    config.headers.Authorization = "Bearer " + token;
    if (company) {
      !company || (config.headers["X-Company-Id"] = company.id);
    }
  }

  return config;
};
