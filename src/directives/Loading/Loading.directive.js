import "./Loading.scss";

function addClass(el) {
  el.classList.add("is-loading");
  el.setAttribute("disabled", "disabled");
}

function removeClass(el) {
  el.classList.remove("is-loading");
  el.removeAttribute("disabled");
}

export default {
  bind(el, binding) {
    binding.value && addClass(el);
  },

  update(el, binding) {
    binding.value ? addClass(el) : removeClass(el);
  },
};
