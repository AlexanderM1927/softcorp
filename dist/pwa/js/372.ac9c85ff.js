"use strict";(globalThis["webpackChunksoftcorp"]=globalThis["webpackChunksoftcorp"]||[]).push([[372],{3256:(e,n,o)=>{o.d(n,{w:()=>a});o(9665);var s=o(9120),l=o(5918);const a={data(){return{}},created(){},methods:{goTo(e){this.$router.push(e).catch((e=>{e._name}))},alert(e,n){this.$q.notify({message:n,color:e})},activateLoading(e,n=0){const o={message:e};1===n?o.spinner=s.Z:2===n&&(o.spinner=l.Z),this.$q.loading.show(o)},disableLoading(){this.$q.loading.hide()}}}},4586:(e,n,o)=>{o.d(n,{O:()=>s});const s=[{icon:"home",title:"Home",href:"/"},{icon:"folder",title:"Projects",href:"/projects"},{icon:"business",title:"Services",href:"/services"}]},3372:(e,n,o)=>{o.r(n),o.d(n,{default:()=>I});var s=o(9835),l=o(6970);const a=e=>((0,s.dD)("data-v-3e97f56f"),e=e(),(0,s.Cn)(),e),t={class:"second-header"},i={class:"second-header__content"},r={class:"second-header__links only-desktop"},c=["href"],d=a((()=>(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",role:"presentation",class:"icon icon-hamburger",fill:"none",viewBox:"0 0 18 16"},[(0,s._)("path",{d:"M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z",fill:"currentColor"})],-1))),u=[d],h={id:"burger-menu",class:"header__menu--mobile only-mobile"},_={class:"burger-menu__container"},m={class:"burger-menu__header"},g=a((()=>(0,s._)("h2",{class:"text-h5"},"Menu",-1))),f={class:"burger-menu__close"},p=a((()=>(0,s._)("path",{d:"M12.4978 10.4643L20.7384 2.22366C21.2616 1.70044 21.1308 0.78482 20.6076 0.39241C20.0844 0 19.4304 0 18.9071 0.39241L10.6665 8.63302L2.42593 0.39241C1.90272 -0.130803 1.1179 -0.130803 0.594684 0.39241C0.0714707 0.915623 0.0714707 1.70044 0.594684 2.22366L8.70449 10.4643L0.463881 18.7049C-0.0593327 19.2281 -0.190136 20.0129 0.333077 20.5361C0.856291 21.0593 1.64111 21.1901 2.16432 20.6669L2.29513 20.5361L10.5357 12.2955L18.7763 20.5361C19.2996 21.0593 20.2152 20.9285 20.6076 20.4053C21 19.8821 21 19.2281 20.6076 18.7049L12.4978 10.4643Z",fill:"#0F3C4D"},null,-1))),w=[p],v=["href"],b={href:"https://wa.me/573164510766?text=Hi%20Im%20in%20SoftCorp",class:"floating",target:"_blank"};function C(e,n,o,a,d,p){const C=(0,s.up)("q-icon"),k=(0,s.up)("router-view"),L=(0,s.up)("q-page-container"),M=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(M,{view:"lHh Lpr lFf"},{default:(0,s.w5)((()=>[(0,s._)("div",t,[(0,s._)("div",i,[(0,s._)("div",{class:"second-header__title",onClick:n[0]||(n[0]=n=>e.goToHome())}," SoftCorp "),(0,s._)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.links,((e,n)=>((0,s.wg)(),(0,s.iD)("li",{key:n},[(0,s._)("a",{class:"blue-anchor__hover-underline",href:e.href},(0,l.zw)(e.title),9,c)])))),128))]),(0,s._)("div",{onClick:n[1]||(n[1]=(...n)=>e.openMobileMenu&&e.openMobileMenu(...n)),class:"second-header__burger only-mobile"},u),(0,s._)("div",h,[(0,s._)("div",_,[(0,s._)("div",m,[g,(0,s._)("div",f,[((0,s.wg)(),(0,s.iD)("svg",{onClick:n[2]||(n[2]=(...n)=>e.closeMobileMenu&&e.closeMobileMenu(...n)),width:"22",height:"21",viewBox:"0 0 22 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w))])]),(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.links,(e=>((0,s.wg)(),(0,s.iD)("li",{key:e.key},[(0,s._)("a",{href:e.href},[(0,s.Wm)(C,{name:e.icon},null,8,["name"]),(0,s.Uk)((0,l.zw)(e.title),1)],8,v)])))),128))])])])])]),(0,s.Wm)(L,null,{default:(0,s.w5)((()=>[(0,s.Wm)(k),(0,s._)("a",b,[(0,s.Wm)(C,{name:"fa-brands fa-whatsapp"})])])),_:1})])),_:1})}var k=o(4586),L=o(3256);const M=(0,s.aZ)({name:"SecondLayout",mixins:[L.w],setup(){return{links:k.O}},methods:{goToHome(){location.href="/"},openMobileMenu(){document.getElementById("burger-menu").classList.add("open")},closeMobileMenu(){document.getElementById("burger-menu").classList.remove("open")}}});var y=o(1639),H=o(2500),Z=o(2857),x=o(2133),D=o(9984),q=o.n(D);const z=(0,y.Z)(M,[["render",C],["__scopeId","data-v-3e97f56f"]]),I=z;q()(M,"components",{QLayout:H.Z,QIcon:Z.Z,QPageContainer:x.Z})}}]);