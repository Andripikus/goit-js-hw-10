import"./assets/styles-77ecf156.js";import{f,i as h}from"./assets/vendor-77e16229.js";const a=document.querySelector("#datetime-picker"),o=document.querySelector(".js-start-btn");let i;o.disabled=!0;function y(e){h.error({title:"Error",message:e,position:"topCenter",timeout:5e3,transitionIn:"fadeInDown",transitionOut:"fadeOutUp"})}const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=new Date?(y("Please choose a date in the future"),o.disabled=!0):o.disabled=!1}};f("#datetime-picker",p);o.addEventListener("click",()=>{const e=new Date(a.value);o.disabled=!0,a.disabled=!0,i=setInterval(()=>{const n=e-new Date;if(n<=0){clearInterval(i),c(0,0,0,0),a.disabled=!1;return}const t=D(n);c(t.days,t.hours,t.minutes,t.seconds)},1e3)});function D(e){const u=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:m}}function s(e){return String(e).padStart(2,"0")}function c(e,r,n,t){document.querySelector(".js-days").textContent=s(e),document.querySelector(".js-hours").textContent=s(r),document.querySelector(".js-minutes").textContent=s(n),document.querySelector(".js-seconds").textContent=s(t)}
//# sourceMappingURL=commonHelpers.js.map
