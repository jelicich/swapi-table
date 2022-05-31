import "./Loading.scss";

export default {
  update(el, binding) {
    if (binding.value) {
      el.classList.add("is-loading");
      el.setAttribute("disabled", "disabled");
    } else {
      el.classList.remove("is-loading");
      el.removeAttribute("disabled");
    }
  },
};
