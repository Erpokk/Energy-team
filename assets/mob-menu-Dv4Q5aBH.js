var q=e=>{throw TypeError(e)};var L=(e,t,r)=>t.has(e)||q("Cannot "+r);var c=(e,t,r)=>(L(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>t.has(e)?q("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),_=(e,t,r,o)=>(L(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r),g=(e,t,r)=>(L(e,t,"access private method"),r);import{a as I,i as F}from"./vendor-BT7OT44q.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const p="/Energy-team/assets/icons-CcYtBW7D.svg";var f,n,m,M,k;class Y{constructor(){h(this,m);h(this,f,"favorites_exercises_ls_key");h(this,n,[]);_(this,n,g(this,m,M).call(this))}get favoritesExercises(){return c(this,n)}isFavoriteExercise(t){return c(this,n).some(({_id:r})=>r===t)}addFavoriteExercise(t){this.isFavoriteExercise(t._id)||(c(this,n).push(t),g(this,m,k).call(this))}removeFavoriteExercise(t){_(this,n,c(this,n).filter(({_id:r})=>r!==t)),g(this,m,k).call(this)}}f=new WeakMap,n=new WeakMap,m=new WeakSet,M=function(){try{const t=localStorage.getItem(c(this,f));if(t){const r=JSON.parse(t);return Array.isArray(r)?r:[]}return[]}catch{return localStorage.removeItem(c(this,f)),[]}},k=function(){localStorage.setItem(c(this,f),JSON.stringify(c(this,n)))};const b=new Y;async function V(e){try{return I.defaults.baseURL="https://your-energy.b.goit.study/api",(await I.get(`/exercises/${e}`)).data}catch(t){F.show({title:"Error",message:t.message,position:"center",color:"red"})}}const l=document.querySelector(".exercise-modal-backdrop"),x=l.querySelector(".exercise-modal__content"),A=l.querySelector(".exercise-modal__close-btn");window.addEventListener("popstate",G);function G(){B=document.querySelector(".exr-list")}const B=document.querySelector(".exr-list"),N="exercise-modal-backdrop--is-hidden";let d=null;B.addEventListener("click",e=>{var s;const{target:t}=e;let r=t.dataset.modalOpen;if(r){O({exerciseId:r});return}const o=t.closest("button[data-modal-open]");if(r=(s=o==null?void 0:o.dataset)==null?void 0:s.modalOpen,r){O({exerciseId:r});return}});async function O({exerciseId:e}){try{const t=await V(e);d=t,x.innerHTML=ee(t),X()}catch{F.error({message:"Something went wrong, please try again later.",position:"topRight"})}}function X(){P(),A.addEventListener("click",E),l.addEventListener("click",R),document.addEventListener("keydown",j),l.classList.remove(N)}function Z(){H(),A.removeEventListener("click",E),l.removeEventListener("click",R),document.removeEventListener("keydown",j)}function E(){l.classList.add(N),setTimeout(()=>{Z(),d=null,x.innerHTML=""},500)}function j(e){e.code==="Escape"&&E()}function R(e){e.target===l&&E()}function ee({_id:e,bodyPart:t,equipment:r,gifUrl:o,name:s,target:i,description:a,rating:v,burnedCalories:y,popularity:w}){const $=s.charAt(0).toUpperCase()+s.slice(1);return`
      <div class="exercise-modal__thumb">
        <img class="exercise-modal__img" src="${o}" alt="${$}" />
      </div>

      <div>
        <h3 class="exercise-modal__title">${$}</h3>

        ${te({rating:v})}

        ${oe({bodyPart:t,equipment:r,target:i,burnedCalories:y,popularity:w})}

        <p class="exercise-modal__desc">${a}</p>

        <div class="js-action-bar-wrapper">
            ${T({exerciseId:e})}
        </div>
      </div>
  `}function te({rating:e}){return`
        <div class="exercise-modal__rating">
          <p class="exercise-modal__rating-value">${Number.isInteger(e)?`${e}.0`:e.toFixed(2)}</p>

          ${[1,2,3,4,5].map(r=>re({isActive:r<=Math.round(e)})).join("")}
        </div>
    `}function re({isActive:e}){return`
        <svg class="exercise-modal__rating-star ${e?"exercise-modal__rating-star--accent":""}">
            <use href="${p}#rating-star"></use>
        </svg>
    `}const se=[["target","Target"],["bodyPart","Body Part"],["equipment","Equipment"],["popularity","Popular"],["burnedCalories","Burned Calories"]];function oe(e){return`
        <ul class="exercise-modal__info">
          ${se.map(([t,r])=>{const o=e[t],s=isNaN(o)?o.charAt(0).toUpperCase()+o.slice(1):o;return s?`
                <li>
                    <h4 class="exercise-modal__info-title">${r}</h4>
                    <p class="exercise-modal__info-desc">${s}</p>
                </li>
            `:""}).join("")}
        </ul>
    `}function T({exerciseId:e}){const t=b.isFavoriteExercise(e);return`
        <div class="exercise-modal__action-bar ${t?"exercise-modal__action-bar--wrap":""}">
          ${C({type:"primary",className:t?"js-favorite-remove-btn":"js-favorite-add-btn",children:t?`
                Remove from favorites
                <svg>
                  <use href="${p}#icon-trash"></use>
                </svg>
              `:`
                Add to favorites
                <svg>
                  <use href="${p}#heart"></use>
                </svg>
              `})}
          ${C({type:"secondary",className:`js-rating-btn ${t?"exercise-modal__btn--large":""}`,children:`
             Give a rating
           `})}
        </div>
    `}function D(){const e=x.querySelector(".js-action-bar-wrapper");H(),e.innerHTML=T({exerciseId:d._id}),P()}function P(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:r}=J();e==null||e.addEventListener("click",W),t==null||t.addEventListener("click",U),r==null||r.addEventListener("click",K)}function H(){const{favoriteAddButtonRef:e,favoriteRemoveButtonRef:t,ratingButtonRef:r}=J();e==null||e.removeEventListener("click",W),t==null||t.removeEventListener("click",U),r==null||r.removeEventListener("click",K)}function C({type:e="",className:t="",children:r=""}){return`
        <button
            aria-label="start-trainig"
            class="exercise-modal__btn exercise-modal__btn--${e} ${t}"
            type="button"
          >
            ${r}
        </button>
    `}function J(){const e=x.querySelector(".exercise-modal__action-bar");return{favoriteAddButtonRef:e.querySelector(".js-favorite-add-btn"),favoriteRemoveButtonRef:e.querySelector(".js-favorite-remove-btn"),ratingButtonRef:e.querySelector(".js-rating-btn")}}function W(){b.addFavoriteExercise(d),D()}function U(){b.removeFavoriteExercise(d==null?void 0:d._id),D()}function K(){}function S(e){return e.charAt(0).toUpperCase()+e.slice(1)}function z(){const e=JSON.parse(localStorage.getItem("favorites_exercises_ls_key"))||[];if(e.length===0){const o=document.getElementById("wrapper-secnd");o.innerHTML=`<li class="text-exer"><p>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p></li>`;return}const t=e.map(({_id:o,name:s,bodyPart:i,target:a,rating:v,burnedCalories:y,time:w})=>`
        <li class="exr-card fav-exr-card">
          <div class="workout-title">
            <div class="workout-title-left fav-workout-title-left">
              <p class="workout-title-name">WORKOUT</p>
              <svg data-modal="${o}" class="trash-icon" width="16" height="16">
                  <use href="${p}#icon-trash"></use>
              </svg>
            </div>
         <div class="workout-title-right">
          <button aria-label="start-trainig" class="workout-start" data-modal-open="${o}">Start
          <svg class="workout-arw" width="16" height="16">
            <use href="${p}#arw-top"></use>
          </svg>
          </button>
        </div>
          </div>
          <div class="workout-details">
            <p class="workout-run-man-wrapper">
              <svg class="workout-run-man" width="16" height="16">
                <use href="${p}#runn-man"></use>
              </svg>
            </p>
            <p class="workout-details-disc">${S(s)}</p>
          </div>
          <div class="workout-stats">
            <p class="workout-stats-cal"><span class="workout-stats-title">Burned calories: </span>${y} / ${w}</p>
            <p class="workout-stats-part"><span class="workout-stats-title">Body part: </span>${S(i)}</p>
            <p class="workout-stats-target"><span class="workout-stats-title">Target: </span>${S(a)}</p>
          </div>
        </li>`).join(""),r=document.getElementById("wrapper-secnd");r&&(r.innerHTML=t)}function ie(e,t){t.classList.add("animate-remove"),t.addEventListener("animationend",()=>{const o=(JSON.parse(localStorage.getItem("favorites_exercises_ls_key"))||[]).filter(s=>s._id!==e);localStorage.setItem("favorites_exercises_ls_key",JSON.stringify(o)),z()},{once:!0})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("wrapper-secnd"),t=document.querySelector(".quote"),r=document.querySelector(".quote-author"),o=localStorage.getItem("dailyQuote");if(o){const s=JSON.parse(o);t.textContent=s.quote,r.textContent=s.author}e&&(e.addEventListener("click",s=>{const i=s.target.closest("[data-modal]");if(i){const a=i.getAttribute("data-modal"),v=i.closest(".fav-exr-card");ie(a,v)}}),z())});const u=document.querySelector("#js-header"),Q=document.querySelector("#js-menu"),ne=document.querySelector("#js-header-pages");document.addEventListener("DOMContentLoaded",function(){Q.addEventListener("click",function(){u.classList.toggle("open"),u.classList.contains("open")?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow="auto"})});Q.addEventListener("click",e=>{e._isClickWithInMenu=!0});ne.addEventListener("click",e=>{u.classList.remove("open"),document.documentElement.style.overflow="auto"});document.body.addEventListener("click",e=>{e._isClickWithInMenu||(u.classList.remove("open"),document.documentElement.style.overflow="auto")});window.addEventListener("resize",()=>{window.innerWidth>=768&&(u.classList.remove("open"),document.documentElement.style.overflow="auto")});document.addEventListener("DOMContentLoaded",function(){function e(){if(window.innerWidth>=768){const t=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".header-pages-item").forEach(r=>{const o=r.querySelector("a");o&&o.getAttribute("href").split("/").pop()===t?r.classList.add("active"):r.classList.remove("active")})}}e()});function ae(){window.scrollY>50?u.classList.add("shadow"):u.classList.remove("shadow")}window.addEventListener("scroll",ae);export{z as c,p as i};
//# sourceMappingURL=mob-menu-Dv4Q5aBH.js.map
