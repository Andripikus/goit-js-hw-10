import"./assets/styles-007ed776.js";import{i as s}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",function(){const t={form:document.querySelector(".js-form"),delayInput:document.querySelector(".js-delay"),fulfilledRadio:document.querySelector(".js-fulfilled"),rejectedRadio:document.querySelector(".js-rejected"),submitBtn:document.querySelector(".js-submit-btn")};t.form.addEventListener("submit",function(i){i.preventDefault();const o=parseInt(t.delayInput.value),r=t.fulfilledRadio.checked?"fulfilled":"rejected";new Promise((e,n)=>{setTimeout(()=>{r==="fulfilled"?e(o):n(o)},o)}).then(e=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topCenter"})}).catch(e=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topCenter"})})})});
//# sourceMappingURL=commonHelpers2.js.map
