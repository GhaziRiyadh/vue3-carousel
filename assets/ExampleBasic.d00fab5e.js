import{f as Y,g as s,h as N,p as A,i as xe,j as _e,k as be,l as W,w as ve,m as ye,q as h,s as g,_ as Te,r as I,o as fe,u as Me,v as F,b as q,c as Ae,x as ke,F as Ce,a as Oe,t as Be}from"./app.e0cba8ab.js";/**
 * Vue 3 Carousel 0.1.43
 * (c) 2022
 * @license MIT
 */const S={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function Le(t,a){let o;return function(...l){o&&clearTimeout(o),o=setTimeout(()=>{t(...l),o=null},a)}}function Ee(t,a){let o;return function(...l){const c=this;o||(t.apply(c,l),o=!0,setTimeout(()=>o=!1,a))}}function Ne(t){var a,o,l;return t?((o=(a=t[0])===null||a===void 0?void 0:a.type)===null||o===void 0?void 0:o.name)==="CarouselSlide"?t:((l=t[0])===null||l===void 0?void 0:l.children)||[]:[]}function je(t,a){if(t.wrapAround)return a-1;switch(t.snapAlign){case"start":return a-t.itemsToShow;case"end":return a-1;case"center":case"center-odd":return a-Math.ceil(t.itemsToShow/2);case"center-even":return a-Math.ceil(t.itemsToShow/2);default:return 0}}function De(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function me(t,a,o,l){return t.wrapAround?a:Math.min(Math.max(a,l),o)}function Pe({slidesBuffer:t,currentSlide:a,snapAlign:o,itemsToShow:l,wrapAround:c,slidesCount:d}){let u=t.indexOf(a);if(u===-1&&(u=t.indexOf(Math.ceil(a))),o==="center"||o==="center-odd"?u-=(l-1)/2:o==="center-even"?u-=(l-2)/2:o==="end"&&(u-=l-1),!c){const i=d-l,v=0;u=Math.max(Math.min(u,i),v)}return u}var Ve=Y({name:"Carousel",props:{itemsToShow:{default:S.itemsToShow,type:Number},itemsToScroll:{default:S.itemsToScroll,type:Number},wrapAround:{default:S.wrapAround,type:Boolean},snapAlign:{default:S.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:S.transition,type:Number},breakpoints:{default:S.breakpoints,type:Object},autoplay:{default:S.autoplay,type:Number},pauseAutoplayOnHover:{default:S.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:S.mouseDrag,type:Boolean},touchDrag:{default:S.touchDrag,type:Boolean},dir:{default:S.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}},setup(t,{slots:a,emit:o,expose:l}){var c;const d=s(null),u=s([]),i=s([]),v=s(0),r=s(1),_=s(null),k=s(null);let T=s({}),w=Object.assign({},S);const n=N(Object.assign({},w)),p=s((c=n.modelValue)!==null&&c!==void 0?c:0),pe=s(0),J=s(0),O=s(0),B=s(0);A("config",n),A("slidesBuffer",i),A("slidesCount",r),A("currentSlide",p),A("maxSlide",O),A("minSlide",B);function K(){const e=Object.assign(Object.assign({},t),t.settings);T=s(Object.assign({},e.breakpoints)),w=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),Q(w)}function j(){const e=Object.keys(T.value).map(m=>Number(m)).sort((m,x)=>+x-+m);let f=Object.assign({},w);e.some(m=>window.matchMedia(`(min-width: ${m}px)`).matches?(f=Object.assign(Object.assign({},f),T.value[m]),!0):!1),Q(f)}function Q(e){for(let f in e)n[f]=e[f]}const he=Le(()=>{T.value&&(j(),L()),D()},16);function D(){if(!d.value)return;const e=d.value.getBoundingClientRect();v.value=e.width/n.itemsToShow}function L(){r.value=Math.max(u.value.length,1),!(r.value<=0)&&(J.value=Math.ceil((r.value-1)/2),O.value=je(n,r.value),B.value=De(n),p.value=me(n,p.value,O.value,B.value))}function P(){const e=[...Array(r.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=r.value){let x=(n.itemsToShow!==1?Math.round((r.value-n.itemsToShow)/2):0)-p.value;if(n.snapAlign==="end"?x+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&x++,x<0)for(let y=x;y<0;y++)e.push(Number(e.shift()));else for(let y=0;y<x;y++)e.unshift(Number(e.pop()))}i.value=e}xe(()=>{T.value&&(j(),L()),_e(()=>setTimeout(D,16)),n.autoplay&&n.autoplay>0&&ne(),window.addEventListener("resize",he,{passive:!0})}),be(()=>{k.value&&clearTimeout(k.value),ae(!1)});let b=!1;const V={x:0,y:0},$={x:0,y:0},C=N({x:0,y:0}),z=s(!1),Se=()=>{z.value=!0},ge=()=>{z.value=!1};function Z(e){b=e.type==="touchstart",!(!b&&e.button!==0||E.value)&&(V.x=b?e.touches[0].clientX:e.clientX,V.y=b?e.touches[0].clientY:e.clientY,document.addEventListener(b?"touchmove":"mousemove",ee,!0),document.addEventListener(b?"touchend":"mouseup",te,!0))}const ee=Ee(e=>{$.x=b?e.touches[0].clientX:e.clientX,$.y=b?e.touches[0].clientY:e.clientY;const f=$.x-V.x,m=$.y-V.y;C.y=m,C.x=f},16);function te(){const e=n.dir==="rtl"?-1:1,f=Math.sign(C.x)*.4,m=Math.round(C.x/v.value+f)*e;let x=me(n,p.value-m,O.value,B.value);if(m&&!b){const y=U=>{U.stopPropagation(),window.removeEventListener("click",y,!0)};window.addEventListener("click",y,!0)}M(x),C.x=0,C.y=0,document.removeEventListener(b?"touchmove":"mousemove",ee,!0),document.removeEventListener(b?"touchend":"mouseup",te,!0)}function ne(){_.value=setInterval(()=>{n.pauseAutoplayOnHover&&z.value||R()},n.autoplay)}function ae(e=!0){!_.value||(clearInterval(_.value),e&&ne())}const E=s(!1);function M(e,f=!1){if(ae(),p.value===e||E.value)return;const m=r.value-1;if(e>m)return M(e-r.value);if(e<0)return M(e+r.value);E.value=!0,pe.value=p.value,p.value=e,f||o("update:modelValue",p.value),k.value=setTimeout(()=>{n.wrapAround&&P(),E.value=!1},n.transition)}function R(){let e=p.value+n.itemsToScroll;n.wrapAround||(e=Math.min(e,O.value)),M(e)}function oe(){let e=p.value-n.itemsToScroll;n.wrapAround||(e=Math.max(e,B.value)),M(e)}const le={slideTo:M,next:R,prev:oe};A("nav",le);const ie=W(()=>Pe({slidesBuffer:i.value,itemsToShow:n.itemsToShow,snapAlign:n.snapAlign,wrapAround:Boolean(n.wrapAround),currentSlide:p.value,slidesCount:r.value}));A("slidesToScroll",ie);const we=W(()=>{const e=n.dir==="rtl"?-1:1,f=ie.value*v.value*e;return{transform:`translateX(${C.x-f}px)`,transition:`${E.value?n.transition:0}ms`}});function se(){K()}function re(){K(),j(),L(),P(),D()}function ue(){L(),P()}ve(()=>Object.values(t),re),se(),ye(()=>{const e=r.value!==u.value.length;t.modelValue!==void 0&&p.value!==t.modelValue&&M(Number(t.modelValue),!0),e&&ue()});const ce={config:n,slidesBuffer:i,slidesCount:r,slideWidth:v,currentSlide:p,maxSlide:O,minSlide:B,middleSlide:J};l({updateBreakpointsConfigs:j,updateSlidesData:L,updateSlideWidth:D,updateSlidesBuffer:P,initCarousel:se,restartCarousel:re,updateCarousel:ue,slideTo:M,next:R,prev:oe,nav:le,data:ce});const X=a.default||a.slides,H=a.addons,de=N(ce);return()=>{const e=Ne(X==null?void 0:X(de)),f=(H==null?void 0:H(de))||[];u.value=e,e.forEach((y,U)=>y.props.index=U);const m=h("ol",{class:"carousel__track",style:we.value,onMousedown:n.mouseDrag?Z:null,onTouchstart:n.touchDrag?Z:null},e),x=h("div",{class:"carousel__viewport"},m);return h("section",{ref:d,class:{carousel:!0,"carousel--rtl":n.dir==="rtl"},dir:n.dir,"aria-label":"Gallery",onMouseenter:Se,onMouseleave:ge},[x,f])}}});const $e={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},G=t=>{const a=t.name;if(!a||typeof a!="string")return;const o=$e[a],l=h("path",{d:o}),c=t.title||a,d=h("title",c);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:c},[d,l])};G.props={name:String,title:String};const Ie=(t,{slots:a,attrs:o})=>{const{next:l,prev:c}=a,d=g("config",N(Object.assign({},S))),u=g("maxSlide",s(1)),i=g("minSlide",s(1)),v=g("currentSlide",s(1)),r=g("nav",{}),_=d.dir==="rtl",k=h("button",{type:"button",class:["carousel__prev",!d.wrapAround&&v.value<=i.value&&"carousel__prev--in-active",o==null?void 0:o.class],"aria-label":"Navigate to previous slide",onClick:r.prev},(c==null?void 0:c())||h(G,{name:_?"arrowRight":"arrowLeft"})),T=h("button",{type:"button",class:["carousel__next",!d.wrapAround&&v.value>=u.value&&"carousel__next--in-active",o==null?void 0:o.class],"aria-label":"Navigate to next slide",onClick:r.next},(l==null?void 0:l())||h(G,{name:_?"arrowLeft":"arrowRight"}));return[k,T]};var ze=Y({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:a}){const o=g("config",N(Object.assign({},S))),l=g("slidesBuffer",s([])),c=g("currentSlide",s(0)),d=g("slidesToScroll",s(0)),u=s(t.index);o.wrapAround&&(i(),ve(l,i));function i(){u.value=l.value.indexOf(t.index)}const v=W(()=>{const w=o.itemsToShow;return{width:`${1/w*100}%`,order:u.value.toString()}}),r=()=>t.index===c.value,_=()=>{const w=Math.ceil(d.value),n=Math.floor(d.value+o.itemsToShow);return l.value.slice(w,n).includes(t.index)},k=()=>t.index===l.value[Math.ceil(d.value)-1],T=()=>t.index===l.value[Math.floor(d.value+o.itemsToShow)];return()=>{var w;return h("li",{style:v.value,class:{carousel__slide:!0,"carousel__slide--active":r(),"carousel__slide--visible":_(),"carousel__slide--prev":k(),"carousel__slide--next":T()}},(w=a.default)===null||w===void 0?void 0:w.call(a))}}});const Re=()=>{const t=g("maxSlide",s(1)),a=g("minSlide",s(1)),o=g("currentSlide",s(1)),l=g("nav",{});function c(i){l.slideTo(i)}const d=i=>{const v=o.value;return v===i||v>t.value&&i>=t.value||v<a.value&&i<=a.value},u=[];for(let i=a.value;i<t.value+1;i++){const v=h("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":d(i)},"aria-label":`Navigate to slide ${i+1}`,onClick:()=>c(i)}),r=h("li",{class:"carousel__pagination-item",key:i},v);u.push(r)}return h("ol",{class:"carousel__pagination"},u)};const Xe=Y({name:"Basic",components:{Carousel:Ve,Slide:ze,Pagination:Re,Navigation:Ie}}),He={class:"carousel__item"};function Ue(t,a,o,l,c,d){const u=I("Slide"),i=I("Navigation"),v=I("Pagination"),r=I("Carousel");return fe(),Me(r,{dir:"rtl"},{addons:F(()=>[q(i),q(v)]),default:F(()=>[(fe(),Ae(Ce,null,ke(10,_=>q(u,{key:_},{default:F(()=>[Oe("div",He,Be(_),1)]),_:2},1024)),64))]),_:1})}var We=Te(Xe,[["render",Ue]]);export{Ve as C,We as E,Ie as N,Re as P,ze as S};
