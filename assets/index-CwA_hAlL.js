var b=t=>{throw TypeError(t)};var S=(t,e,r)=>e.has(t)||b("Cannot "+r);var g=(t,e,r)=>(S(t,e,"read from private field"),r?r.call(t):e.get(t)),h=(t,e,r)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),w=(t,e,r,a)=>(S(t,e,"write to private field"),a?a.call(t,r):e.set(t,r),r),v=(t,e,r)=>(S(t,e,"access private method"),r);import{i as x}from"./mob-menu-Dv4Q5aBH.js";import{a as f,i as y}from"./vendor-BT7OT44q.js";const D=document.querySelector(".exr-category");document.querySelector(".exr-category-card");const M=D.querySelector(".exr-category-item.active"),n=document.querySelector(".exr-list"),F=document.querySelector(".exr-category-card"),H=document.querySelector(".selected-category"),A=document.querySelector(".selected-category-slash"),l=document.getElementById("exr-pagination"),N=document.getElementById("quote-text"),W=document.getElementById("quote-author"),P=document.getElementById("search-form"),L=document.getElementById("search-input"),j=document.querySelector(".search-btn"),I={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};var m,i,u,O,E;class z{constructor(){h(this,u);h(this,m,"filter_settings");h(this,i,{});w(this,i,v(this,u,O).call(this))}get filter(){return g(this,i)}updateFilter(e){w(this,i,{...g(this,i),...e}),v(this,u,E).call(this)}clearFilter(){w(this,i,{}),v(this,u,E).call(this)}}m=new WeakMap,i=new WeakMap,u=new WeakSet,O=function(){try{const e=localStorage.getItem(g(this,m));return e?JSON.parse(e):{}}catch(e){return console.error("Error reading from localStorage:",e),{}}},E=function(){localStorage.setItem(g(this,m),JSON.stringify(g(this,i)))};const C=new z;function J(){if(!F)return;const t=F.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}function U(t){for(const e in I)if(I[e].toLowerCase()===t.toLowerCase())return e;return null}function p(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function R(t){return t.toFixed(1)}function K(t,e,r){l.innerHTML="";for(let a=1;a<=t;a++){const s=document.createElement("li");s.classList.add("page-button"),s.textContent=a,s.addEventListener("click",async()=>{document.querySelectorAll(".page-button").forEach(c=>c.classList.remove("active")),s.classList.add("active"),e.page=a,await r(e),J()}),l.appendChild(s)}l.firstChild.classList.add("active")}function _(){return window.innerWidth>=768?12:9}function Z(){return window.innerWidth>=768?10:8}async function Y({filter:t,page:e=1,limit:r=12}){try{const a={};return t&&(a.filter=t),a.page=e,a.limit=r,(await f.get("/filters",{params:a})).data}catch(a){y.show({title:"Error",message:a.message,position:"center",color:"red"})}}function G(t){return t.map(({imgURL:e,name:r,filter:a})=>`
         <li class="exr-category-card" data-category="${a}" data-category-name="${r}">
        <img
          class="exr-category-card-img"
          src="${e}"
          alt="${r}"
          width="265"
          height="255"
          loading="lazy"
        />
       <div class="exr-category-card-text">
           <div class="exr-category-card-title">${p(r)}</div>
           <div class="exr-category-card-name">${a}</div>
      </div>`).join("")}function Q(t){return t.map(({_id:e,name:r,bodyPart:a,target:s,rating:c,burnedCalories:o,time:T})=>`
          <li class="exr-card">
      <div class="workout-title">
        <div class="workout-title-left">
          <p class="workout-title-name">WORKOUT</p>
          <p class="workout-rating">${R(c)}
            <svg class="workout-star" width="18" height="18">
              <use href="${x}#rating-star"></use>
            </svg>
          </p>
        </div>
        <div class="workout-title-right">
          <button aria-label="start-trainig" class="workout-start" data-modal-open="${e}">Start
          <svg class="workout-arw" width="16" height="16">
            <use href="${x}#arw-top"></use>
          </svg>
          </button>
        </div>
      </div>
      <div class="workout-details">
        <p class="workout-run-man-wrapper">
        <svg class="workout-run-man" width="16" height="16">
          <use href="${x}#runn-man"></use>
        </svg>
        </p>
        <p class="workout-details-disc">${p(r)}</p>
      </div>
       <div class="workout-stats">
        <p class="workout-stats-cal"><span class="workout-stats-title">Burned calories: </span>${o+" / "+T}</p>
        <p class="workout-stats-part"><span class="workout-stats-title">Body part: </span>${p(a)}</p>
        <p class="workout-stats-target"><span class="workout-stats-title">Target: </span>${p(s)}</p>
      </div>
    </li>`).join("")}async function V({bodypart:t,muscles:e,equipment:r,keyword:a,page:s=1,limit:c=10}){try{const o={};return t&&(o.bodypart=t),e&&(o.muscles=e),r&&(o.equipment=r),a&&(o.keyword=a),o.page=s,o.limit=c,(await f.get("/exercises",{params:o})).data}catch(o){y.show({title:"Error",message:o.message,position:"center",color:"red"})}}async function X(){try{return(await f.get("/quote")).data}catch(t){y.show({title:"Error",message:t.message,position:"center",color:"red"})}}class tt{constructor(){this.quoteKey="dailyQuote",this.dateKey="quoteDate"}getTodayDate(){return new Date().toISOString().split("T")[0]}saveQuote(e){localStorage.setItem(this.quoteKey,JSON.stringify(e)),localStorage.setItem(this.dateKey,this.getTodayDate())}getQuoteIfToday(){const e=localStorage.getItem(this.dateKey),r=this.getTodayDate();if(e===r){const a=localStorage.getItem(this.quoteKey);return a?JSON.parse(a):null}return null}}const $=new tt;async function B(t){const e=await Y(t);if(e.totalPages===null){n.innerHTML="Sorry, there are no category";return}n.innerHTML="";const r=G(e.results);return n.insertAdjacentHTML("beforeend",r),e}async function k(t){const e=await V(t);if(e.totalPages===null){n.innerHTML="Sorry, there are no exercises";return}n.innerHTML="";const r=Q(e.results);return n.insertAdjacentHTML("beforeend",r),e}async function et(){let t=$.getQuoteIfToday();return t||(t=await X(),t&&$.saveQuote(t)),N.textContent=(t==null?void 0:t.quote)??"No quote available",W.textContent=(t==null?void 0:t.author)??"Unknown",t}D.addEventListener("click",at);n&&n.addEventListener("click",st);function rt(){M&&M.click()}window.addEventListener("DOMContentLoaded",()=>{rt()});async function at(t){if(t.target.classList.contains("exr-category-item")){L.value="",H.textContent="",A.classList.add("hidden"),P.classList.add("visually-hidden"),document.querySelectorAll(".exr-category-item").forEach(s=>s.classList.remove("active")),t.target.classList.add("active");const r={filter:t.target.textContent,page:1,limit:_()};C.updateFilter(r);const a=await B(r);a&&K(a.totalPages,r,B)}}async function st(t){L.value="",l.innerHTML="";const e=t.target.closest(".exr-category-card");if(e){const r=e.getAttribute("data-category"),a=e.getAttribute("data-category-name"),s={[U(r)]:a,page:1,limit:Z()},c=await k(s);c&&(A.classList.remove("hidden"),H.textContent=p(a),K(c.totalPages,s,k),P.classList.remove("visually-hidden"),C.updateFilter(s))}}document.addEventListener("DOMContentLoaded",et);let d=1;async function q(t){l.innerHTML="";const e={...C.filter};e.keyword=L.value.trim(),e.page=t,delete e.bodypart,delete e.equipment;const r=await k(e);if(r&&r.results){n.innerHTML="",l.innerHTML="";const a=Q(r.results);n.insertAdjacentHTML("beforeend",a),ot(r.totalPages)}else n.innerHTML="No results found"}function ot(t){l.innerHTML="";for(let e=1;e<=t;e++){const r=document.createElement("li");r.textContent=e,r.classList.add("page-button"),e===d&&r.classList.add("active"),r.addEventListener("click",async()=>{document.querySelectorAll(".page-button").forEach(a=>a.classList.remove("active")),r.classList.add("active"),d=e,await q(d)}),l.appendChild(r)}}j.addEventListener("click",async t=>{t.preventDefault(),d=1,await q(d)});L.addEventListener("keypress",async t=>{t.key==="Enter"&&(t.preventDefault(),d=1,await q(d))});f.defaults.baseURL="https://your-energy.b.goit.study/api";async function nt(t){console.log(t);try{const e=await f.post("/subscription",{email:t});return e&&y.show({title:"Congrats",message:e.data.message,position:"center",color:"green"}),e.data}catch(e){y.show({title:"Error",message:e.message,position:"center",color:"red"})}}const it=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".newsletter-form"),e=t.querySelector(".newsletter-input");t.addEventListener("submit",r=>{r.preventDefault();const a=e.value;it.test(a)?(nt(a),e.value=""):y.show({title:"Error",message:"Please enter a valid email address.",position:"center",color:"red"})})});
//# sourceMappingURL=index-CwA_hAlL.js.map
