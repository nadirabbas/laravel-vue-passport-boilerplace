export default res => {
  const { method } = res.config;

  if (!["get", "options"].includes(method)) {
    window.$vm.$toast.success(window.$vm.successRes(res), "is-success");
  }

  return res;
};
