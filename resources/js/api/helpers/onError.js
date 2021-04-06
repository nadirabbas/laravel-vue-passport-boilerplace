import { forEach } from "lodash-es";
import store from "@/store";

export default err => {
  return new Promise((_, reject) => {
    console.error(err.response ? err.response.data : err);

    if (err.response.data.errors) {
      forEach(err.response.data.errors, errors =>
        errors.forEach(err => window.$vm.$toast.error(window.$vm.$t(err)))
      );
    } else {
      window.$vm.$toast.error(window.$vm.errorRes(err));
    }

    // Logout if error is unauthenticated
    if (store.state.auth.user && err.response.status === 401) {
      store.dispatch("auth/logout");
      window.location.reload();
    }
    reject(err);
  });
};
