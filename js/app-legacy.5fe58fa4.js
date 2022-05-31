(function(){"use strict";var t={4647:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("ModalWindow",{model:{value:t.showGreeting,callback:function(e){t.showGreeting=e},expression:"showGreeting"}},[n("GreetingScreen",{on:{destroy:t.destroyGreeting}})],1),n("ErrorNotification",{model:{value:t.showErrors,callback:function(e){t.showErrors=e},expression:"showErrors"}})],1)},o=[],s=(n(8862),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"ModalWindow"},[n("div",{staticClass:"ModalWindow-overlay",on:{click:function(e){return t.$emit(t.EVENTS.CLOSE,!1)}}}),n("div",{staticClass:"ModalWindow-frame"},[n("button",{staticClass:"ModalWindow-button",on:{click:function(e){return t.$emit(t.EVENTS.CLOSE,!1)}}},[t._v(" X ")]),t._t("default")],2)]):t._e()}),i=[],u={CLOSE:"close",CHANGE:"change",DESTROY:"destroy"},c={name:"ModalWindow",model:{prop:"show",event:u.CLOSE},props:{show:{type:Boolean,required:!1,default:!0}},data:function(){return{EVENTS:u}},mounted:function(){}},l=c,p=n(1001),f=(0,p.Z)(l,s,i,!1,null,"b0669580",null),d=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"GreetingScreen"},[n("h1",[t._v("Star Wars characters database")]),n("p",[t._v(" In this table you can find all the characters from Star Wars and some information related to them and their home planet. ")]),t._m(0),n("p",[n("label",[n("button",{on:{click:function(e){return t.$emit(t.EVENTS.DESTROY)}}},[t._v(" OK, DON'T SHOW THIS AGAIN ")])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" This project was made using "),n("a",{attrs:{href:"https://swapi.dev",target:"_blank"}},[t._v("SWAPI")]),t._v(". Sometimes the API takes longer than expected to provide the data, please be patient. ")])}],v={name:"GreetingScreen",data:function(){return{EVENTS:u}}},g=v,w=(0,p.Z)(g,h,m,!1,null,"b3cc7dd6",null),b=w.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("span",{staticClass:"ErrorNotification"},[t._v(" Error: "+t._s(t.$errors)+" "),n("button",{staticClass:"ErrorNotification-button",on:{click:function(e){return t.$emit(t.EVENTS.CLOSE,!1)}}},[t._v(" X ")])]):t._e()},x=[],Z={name:"ErrorNotification",model:{prop:"show",event:u.CLOSE},props:{show:{type:Boolean,required:!1,default:!0}},data:function(){return{EVENTS:u}}},_=Z,C=(0,p.Z)(_,S,x,!1,null,"5dc8936a",null),y=C.exports,E={ASC:"asc",DESC:"desc",TEAMWORK_FLAG:"teamworkFlag"},k=E.TEAMWORK_FLAG,T={name:"App",components:{ModalWindow:d,GreetingScreen:b,ErrorNotification:y},data:function(){return{showGreeting:!1,showErrors:!1}},watch:{$errors:function(t){this.showErrors=!!t}},created:function(){var t=!localStorage.getItem(k);this.showGreeting=t},methods:{destroyGreeting:function(){this.showGreeting=!1,localStorage.setItem(k,JSON.stringify(!0))}}},I=T,B=(0,p.Z)(I,a,o,!1,null,null,null),N=B.exports,P={update:function(t,e){e.value?(t.classList.add("is-loading"),t.setAttribute("disabled","disabled")):(t.classList.remove("is-loading"),t.removeAttribute("disabled"))}},A=n(2809),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HomePage"},[n("h1",{staticClass:"HomePage-title"},[t._v("Welcome to the Star Wars registry of people")]),n("SortableTable",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],attrs:{headers:t.headers,items:t.people},scopedSlots:t._u([{key:"table-title",fn:function(){return[n("BannerText",[t._v("May the force be with you...")])]},proxy:!0},{key:"column.homeworld_name",fn:function(e){var r=e.content;return[n("a",{attrs:{href:"/planet/"+r},on:{click:function(e){return e.preventDefault(),t.showPlanetInfo(r)}}},[t._v(t._s(r))])]}},{key:"column.created",fn:function(e){var n=e.content;return[t._v(" "+t._s(new Date(n).toUTCString())+" ")]}},{key:"column.edited",fn:function(e){var n=e.content;return[t._v(" "+t._s(new Date(n).toUTCString())+" ")]}}])}),n("ModalWindow",{on:{close:function(e){return t.$router.push({name:"home"})}},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[n("router-view")],1)],1)},$=[],M=n(3796),L=n(7906),G=n(6198),W=(n(1249),n(4479)),H=n(4367),D=(n(2222),n(1539),n(4747),n(1038),n(8783),n(3948),n(6166)),j=n.n(D),q="Some error occurred in our server:",U=10,V=2;function F(t,e,n){return K.apply(this,arguments)}function K(){return K=(0,G.Z)((0,L.Z)().mark((function t(e,n,r){var a,o,s=this;return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Array.from({length:r},(function(t,e){return e+V})),o=a.map(function(){var t=(0,G.Z)((0,L.Z)().mark((function t(r){return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.get(e,(0,H.Z)((0,H.Z)({},n),{},{page:r}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=4,Promise.all(o);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)}))),K.apply(this,arguments)}var R={get:function(t,e){var n=this;return(0,G.Z)((0,L.Z)().mark((function a(){var o,s;return(0,L.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=n.getHeaders(),a.prev=1,a.next=4,j().get("".concat("https://swapi.dev/api","/").concat(t,"/"),{params:e,headers:o});case 4:if(s=a.sent,200!==s.status){a.next=9;break}return a.abrupt("return",s);case 9:throw s.status;case 10:a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](1),r.Z.prototype.$errors="".concat(q," ").concat(a.t0);case 15:case"end":return a.stop()}}),a,null,[[1,12]])})))()},getAll_old:function(t,e){var n=this;return(0,G.Z)((0,L.Z)().mark((function r(){var a,o,s,i;return(0,L.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=!0,o=1,s=[];case 3:if(!a){r.next=10;break}return r.next=6,n.get(t,(0,H.Z)((0,H.Z)({},e),{},{page:o}));case 6:i=r.sent,i?(s=[].concat((0,W.Z)(s),(0,W.Z)(i.data.results)),a=!!i.data.next,o++):a=!1,r.next=3;break;case 10:return r.abrupt("return",s);case 11:case"end":return r.stop()}}),r)})))()},getAll:function(t,e){var n=this;return(0,G.Z)((0,L.Z)().mark((function r(){var a,o,s,i;return(0,L.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.get(t,(0,H.Z)({},e));case 2:if(a=r.sent,o=a.data.results,!(a.data.count>U)){r.next=10;break}return s=Math.ceil(a.data.count/U)-1,r.next=8,F.call(n,t,e,s);case 8:i=r.sent,i.forEach((function(t){o=t?[].concat((0,W.Z)(o),(0,W.Z)(t.data.results)):o}));case 10:return r.abrupt("return",o);case 11:case"end":return r.stop()}}),r)})))()},getUrl:function(t){var e=this;return(0,G.Z)((0,L.Z)().mark((function n(){var a,o;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getHeaders(),n.prev=1,n.next=4,j().get(t,{headers:a});case 4:if(o=n.sent,200!==o.status){n.next=9;break}return n.abrupt("return",o);case 9:throw o.status;case 10:n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](1),r.Z.prototype.$errors="".concat(q," ").concat(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},getHeaders:function(){return{"Content-Type":"application/json"}}},X=R,Y=(n(9826),n(7941),n(8309),null),J=null,z={getAllPlanets:function(){return(0,G.Z)((0,L.Z)().mark((function t(){return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(J){t.next=4;break}return t.next=3,X.getAll("planets");case 3:J=t.sent;case 4:return t.abrupt("return",J);case 5:case"end":return t.stop()}}),t)})))()},getPlanetInfo:function(t){var e=this;return(0,G.Z)((0,L.Z)().mark((function n(){var r,a,o,s;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getPlanetsMap();case 2:if(r=n.sent,a=Object.keys(r).find((function(e){return r[e]===t})),o=null,J){n.next=12;break}return n.next=8,X.getUrl(a);case 8:s=n.sent,o=s.data,n.next=13;break;case 12:o=J.find((function(t){return t.url===a}));case 13:return n.abrupt("return",o);case 14:case"end":return n.stop()}}),n)})))()},getPlanetsMap:function(){var t=this;return(0,G.Z)((0,L.Z)().mark((function e(){var n,r;return(0,L.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Y){e.next=7;break}return e.next=3,t.getAllPlanets();case 3:n=e.sent,r={},n.forEach((function(t){r[t.url]=t.name})),Y=r;case 7:return e.abrupt("return",Y);case 8:case"end":return e.stop()}}),e)})))()}},Q=z;function tt(t){return et.apply(this,arguments)}function et(){return et=(0,G.Z)((0,L.Z)().mark((function t(e){var n;return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Q.getPlanetsMap();case 2:return n=t.sent,t.abrupt("return",e.map((function(t){return t.homeworld_name=n[t.homeworld],t})));case 4:case"end":return t.stop()}}),t)}))),et.apply(this,arguments)}var nt={getAllPeople:function(){return(0,G.Z)((0,L.Z)().mark((function t(){var e,n;return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,X.getAll("people");case 2:return e=t.sent,t.next=5,tt(e);case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()}},rt=nt,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SortableTable"},[n("div",{staticClass:"SortableTable-title"},[n("div",{staticClass:"SortableTable-titleSlot"},[t._t("table-title")],2),n("SearchBox",{staticClass:"SortableTable-searchBox",on:{change:t.searchByName}})],1),n("div",{staticClass:"SortableTable-tableWrapper"},[n("table",{staticClass:"SortableTable-table"},[n("thead",{staticClass:"SortableTable-tableHead"},[n("tr",{staticClass:"SortableTable-row"},t._l(t.headerKeys,(function(e,r){return n("th",{key:r,staticClass:"SortableTable-header"},[n("span",{staticClass:"SortableTable-headerContent"},[t._v(" "+t._s(t.headers[e])+" ")]),n("ToggleButton",{ref:"toggleButtons",refInFor:!0,staticClass:"SortableTable-toggleButton",on:{change:function(n){return t.toggleSort(e,n)}},model:{value:t.sortButtons[e],callback:function(n){t.$set(t.sortButtons,e,n)},expression:"sortButtons[key]"}})],1)})),0)]),n("tbody",{staticClass:"SortableTable-tableBody"},t._l(t.currentItems,(function(e,r){return n("tr",{key:r,staticClass:"SortableTable-row"},t._l(t.headerKeys,(function(r,a){return n("td",{key:a,staticClass:"SortableTable-item"},[t._t("column."+r,(function(){return[t._v(" "+t._s(e[r])+" ")]}),{content:e[r]})],2)})),0)})),0)])])])},ot=[],st=(n(2707),n(7327),n(4603),n(8450),n(4916),n(8386),n(9714),n(4723),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"SearchBox",on:{submit:function(e){return e.preventDefault(),t.$emit(t.EVENTS.CHANGE,t.query)}}},[n("label",{staticClass:"SearchBox-label"},[t._v(" Search: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"SearchBox-input",attrs:{type:"text",placeholder:"Type a name"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),n("button",{staticClass:"SearchBox-button",attrs:{type:"submit"}},[t._v("Go!")])])}),it=[],ut={name:"SearchBox",data:function(){return{EVENTS:u,query:""}}},ct=ut,lt=(0,p.Z)(ct,st,it,!1,null,"5d2092aa",null),pt=lt.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ToggleButton"},[n("button",{staticClass:"ToggleButton-action ToggleButton-action--asc",class:{"ToggleButton-action--active":t.currentState===t.ASC},attrs:{title:"Ascending"},on:{click:function(e){return t.toggleState(t.ASC)}}},[t._v(" ▲ ")]),n("button",{staticClass:"ToggleButton-action ToggleButton-action--desc",class:{"ToggleButton-action--active":t.currentState===t.DESC},attrs:{title:"Descending"},on:{click:function(e){return t.toggleState(t.DESC)}}},[t._v(" ▼ ")])])},dt=[],ht={name:"ToggleButton",model:{prop:"state",event:u.CHANGE},props:{state:{type:String,required:!1,default:null}},watch:{state:function(t){this.currentState=t}},data:function(){return{EVENTS:u,ASC:E.ASC,DESC:E.DESC,currentState:this.state}},methods:{toggleState:function(t){this.currentState=this.currentState===t?null:t,this.$emit(u.CHANGE,this.currentState)}}},mt=ht,vt=(0,p.Z)(mt,ft,dt,!1,null,"48a028d8",null),gt=vt.exports,wt={isNumber:function(t){return"string"==typeof t&&(!isNaN(t)&&!isNaN(parseFloat(t)))}},bt=wt,St=E.ASC,xt={name:"SortableTable",components:{SearchBox:pt,ToggleButton:gt},data:function(){return{currentItems:(0,W.Z)(this.items),currentItemsUnsorted:this.items,sortButtons:{},query:""}},props:{items:{type:Array,required:!0},headers:{type:Object,required:!0}},computed:{headerKeys:function(){return Object.keys(this.headers)}},watch:{items:function(t){this.currentItems=(0,W.Z)(t),this.currentItemsUnsorted=t}},mounted:function(){},methods:{toggleSort:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.resetSortButtons(t),null===e||null===t?this.currentItems=(0,W.Z)(this.currentItemsUnsorted):this.currentItems.sort(this.sortByColumn(t,e))},sortByColumn:function(t,e){return function(n,r){if(bt.isNumber(n[t])&&bt.isNumber(r[t])){var a=+n[t],o=+r[t];return e===St?a-o:o-a}var s=e===St?1:-1,i="string"===typeof n[t]?n[t].toUpperCase():n[t],u="string"===typeof r[t]?r[t].toUpperCase():r[t];return i<u?-1*s:i>u?1*s:0}},searchByName:function(t){this.toggleSort(),t?(this.currentItems=this.items.filter((function(e){var n=new RegExp(t,"i");return null!==e.name.match(n)})),this.currentItemsUnsorted=(0,W.Z)(this.currentItems)):(this.currentItems=(0,W.Z)(this.items),this.currentItemsUnsorted=this.items)},resetSortButtons:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object.keys(this.sortButtons).forEach((function(n){n!==e&&(t.sortButtons[n]=null)}))}}},Zt=xt,_t=(0,p.Z)(Zt,at,ot,!1,null,"1ff1c446",null),Ct=_t.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BannerText"},[n("div",{staticClass:"BannerText-contentWrapper"},[n("span",{staticClass:"BannerText-content"},[t._t("default")],2)]),n("span",{staticClass:"BannerText-placeHolder"},[t._t("default")],2)])},Et=[],kt={name:"BannerText"},Tt=kt,It=(0,p.Z)(Tt,yt,Et,!1,null,"74fae740",null),Bt=It.exports,Nt={name:"HomePage",components:{SortableTable:Ct,ModalWindow:d,BannerText:Bt},watch:(0,M.Z)({},"$route.params.planet",(function(t){var e=this;return(0,G.Z)((0,L.Z)().mark((function n(){return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.showModal=!!t;case 1:case"end":return n.stop()}}),n)})))()})),data:function(){return{isLoading:!1,isPlanetLoading:!1,showModal:!1,people:[],headers:{name:"Name",height:"Height",mass:"Mass",created:"Created",edited:"Edited",homeworld_name:"Planet Name"}}},mounted:function(){var t=this;return(0,G.Z)((0,L.Z)().mark((function e(){return(0,L.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadPeople(),t.$route.params.planet&&(t.showModal=!0);case 2:case"end":return e.stop()}}),e)})))()},methods:{loadPeople:function(){var t=this;return(0,G.Z)((0,L.Z)().mark((function e(){var n;return(0,L.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,rt.getAllPeople();case 3:n=e.sent,t.people=n,t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},showPlanetInfo:function(t){var e=this;return(0,G.Z)((0,L.Z)().mark((function n(){return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.showModal=!0,e.$router.push({name:"planet",params:{planet:t}});case 2:case"end":return n.stop()}}),n)})))()}}},Pt=Nt,At=(0,p.Z)(Pt,O,$,!1,null,"3b6079a2",null),Ot=At.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"PlanetInformation"},[n("h1",{staticClass:"PlanetInformation-title"},[t._v("Planet Information")]),t.planetInfo?n("dl",{staticClass:"PlanetInformation-list"},[n("div",{staticClass:"PlanetInformation-set"},[n("dt",[t._v("Name:")]),n("dd",[t._v(t._s(t.planetInfo.name))])]),n("div",{staticClass:"PlanetInformation-set"},[n("dt",[t._v("Diameter:")]),n("dd",[t._v(t._s(t.planetInfo.diameter))])]),n("div",{staticClass:"PlanetInformation-set"},[n("dt",[t._v("Climate:")]),n("dd",[t._v(t._s(t.planetInfo.climate))])]),n("div",{staticClass:"PlanetInformation-set"},[n("dt",[t._v("Population:")]),n("dd",[t._v(t._s(t.planetInfo.population))])])]):t._e()])},Mt=[],Lt={name:"PlanetInformation",props:{planet:{type:String,required:!0}},data:function(){return{isLoading:!1,planetInfo:null}},mounted:function(){var t=this;return(0,G.Z)((0,L.Z)().mark((function e(){return(0,L.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPlanetInfo();case 2:case"end":return e.stop()}}),e)})))()},methods:{getPlanetInfo:function(){var t=this;return(0,G.Z)((0,L.Z)().mark((function e(){return(0,L.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,Q.getPlanetInfo(t.planet);case 3:t.planetInfo=e.sent,t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},Gt=Lt,Wt=(0,p.Z)(Gt,$t,Mt,!1,null,"4f517444",null),Ht=Wt.exports;r.Z.use(A.Z);var Dt=[{path:"/",name:"home",component:Ot,children:[{path:"planet/:planet",name:"planet",component:Ht,props:!0}]},{path:"*",redirect:"/"}],jt=new A.Z({mode:"history",routes:Dt}),qt=jt;r.Z.config.productionTip=!1,r.Z.directive("loading",P);var Ut=r.Z.observable({errors:{}});Object.defineProperty(r.Z.prototype,"$errors",{get:function(){return Ut.errors},set:function(t){Ut.errors=t}}),new r.Z({router:qt,render:function(t){return t(N)}}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(i=!1,o<s&&(s=o));if(i){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var l=u(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkteamwork"]=self["webpackChunkteamwork"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4647)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.5fe58fa4.js.map