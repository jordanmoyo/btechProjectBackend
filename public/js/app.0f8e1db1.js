(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={app:0},i={app:0},s=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-066e76a5":"0691f9a9","chunk-1ac81b02":"c5c488bf","chunk-5379e1ad":"515a7f8c","chunk-7b8f27b9":"a2ee370e","chunk-7c6fe884":"f6038e47","chunk-099e9280":"6bfb81fe","chunk-2d217357":"fcf9ff79","chunk-472535ac":"5528ca76","chunk-49f7ff0c":"62e92a2d","chunk-4ad10cfa":"780d5dd4","chunk-4b2ea613":"a674d4b3","chunk-50995300":"038a4ab1","chunk-7fb9e9f9":"7c980810","chunk-bb7e169a":"b54e7937"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-066e76a5":1,"chunk-1ac81b02":1,"chunk-5379e1ad":1,"chunk-7b8f27b9":1,"chunk-7c6fe884":1,"chunk-099e9280":1,"chunk-472535ac":1,"chunk-49f7ff0c":1,"chunk-4ad10cfa":1,"chunk-4b2ea613":1,"chunk-7fb9e9f9":1,"chunk-bb7e169a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-066e76a5":"35350a86","chunk-1ac81b02":"053cc695","chunk-5379e1ad":"1e5624f8","chunk-7b8f27b9":"5b52b3b4","chunk-7c6fe884":"750da13d","chunk-099e9280":"de3efaac","chunk-2d217357":"31d6cfe0","chunk-472535ac":"eb663afc","chunk-49f7ff0c":"d4c4e2ef","chunk-4ad10cfa":"1bb36599","chunk-4b2ea613":"67610319","chunk-50995300":"31d6cfe0","chunk-7fb9e9f9":"4a3d0793","chunk-bb7e169a":"43ca46e6"}[e]+".css",i=l.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===a||u===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],m.parentNode.removeChild(m),n(s)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d60":function(e,t,n){},"1a40":function(e,t,n){"use strict";var a=n("de21"),r=n.n(a);r.a},"1b7f":function(e,t,n){},"4ad7":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("d4ec"),r=function e(t,n,r){Object(a["a"])(this,e),this.billName=t,this.userId=n,this.bill_line_items=r}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("d165"),i=n.n(r),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("loginToolbar"),n("v-content",[n("router-view")],1),n("Appfooter")],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{height:"90",dense:"",dark:"",flat:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"}},[e.currentUser?a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.permanent=!e.permanent}}}):e._e(),e._v(" "),a("v-icon",[e._v("mdi-dehaze")]),e._v(" "),e.currentUser?a("span",{staticClass:"menu"}):e._e(),a("img",{staticClass:"img",attrs:{height:"50",src:n("dae4")}}),a("v-spacer"),e.currentUser?e._e():a("div",{staticClass:"login-form-icons "},[a("router-link",{staticClass:"username item-hover",attrs:{to:"/login"}},[a("v-icon",{staticClass:"icons"},[e._v("mdi-account-key")]),a("span",{staticClass:"menu username",staticStyle:{"margin-left":"10px"}},[e._v(" LogIn ")])],1),a("router-link",{staticClass:"username item-hover",attrs:{to:"/register"}},[a("v-icon",{staticClass:"icons"},[e._v("mdi-account-edit")]),a("span",{staticClass:"menu username",staticStyle:{margin:"0, 10px"}},[e._v(" SignUp ")])],1)],1)],1),a("v-card",[e.currentUser?a("v-navigation-drawer",{attrs:{app:"","mini-variant":e.mini,color:e.color,left:"",fixed:"",permanent:e.permanent,src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg",dark:""},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},scopedSlots:e._u([{key:"append",fn:function(){return[a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"320"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticStyle:{"background-color":"#FB236A","font-size":"12px"},attrs:{block:"",dark:""}},"v-btn",r,!1),n),[e._v(" Logout ")])]}}],null,!1,494335964),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("LOGOUT")]),a("v-card-text",[e._v("Do you want to logout?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#10195D",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("CANCEL")]),a("v-btn",{attrs:{color:"#FB236A",text:""},on:{click:e.logOut}},[e._v("YES LOGOUT")])],1)],1)],1)],1)]},proxy:!0}],null,!1,628781224),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{"three-line":"","px-2":""}},[a("img",{staticClass:"img",attrs:{height:"50",src:n("dae4")}}),a("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[a("v-icon",[e._v("mdi-chevron-left")])],1)],1),a("v-divider"),e.currentUser?a("router-link",{staticClass:"username",attrs:{to:"/profile"}},[a("v-list-item",{attrs:{link:""}},[e.currentUser?a("avatar",{staticStyle:{withd:"20px",height:"30px","font-size":"14px"},attrs:{username:e.currentUser.username,"background-color":"#FB236A",color:"#fff","margin-right":"10px"}}):e._e(),a("v-list-item-content",{staticStyle:{margin:"20px"}},[a("v-list-item-title",[a("span",[e._v(e._s(e.currentUser.username))])])],1)],1)],1):e._e(),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-view-dashboard")])],1),a("v-list-item-content",[e.showLanceBoard?a("div",[a("router-link",{staticClass:"username",attrs:{to:"/lance"}},[a("v-toolbar-title",[a("span",{staticClass:"username"},[e._v("Lance Board")])])],1)],1):e._e(),e.showEnterpriseBoard?a("div",[a("router-link",{staticClass:"username",attrs:{to:"/enterprise"}},[a("v-toolbar-title",[a("span",{staticClass:"username"},[e._v("Enterprise Board")])])],1)],1):e._e()])],1),e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:"",router:"",to:t.route}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1):e._e()],1)],1)},c=[],u=(n("caad"),n("2532"),n("4a89")),d=n.n(u),m={name:"loginToolBar",components:{Avatar:d.a},data:function(){return{dialog:!1,drawer:!1,mini:!0,items:[{title:"Bills",icon:"mdi-card-text",route:"/allBill"},{title:"New Bill",icon:"mdi-card-plus",route:"/newBill"},{title:"Tips",icon:"mdi-arrow-right-drop-circle",route:"/tips"},{title:"About",icon:"mdi-help-box",route:"/about"}],color:"#10195D",colors:["primary","blue","success","red","teal","#10195D"],permanent:!1}},computed:{currentUser:function(){return this.$store.state.auth.user},showLanceBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("LANCE")},showEnterpriseBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ENTERPRISE")}},methods:{logOut:function(){this.$store.dispatch("logout"),this.$router.push("/login")}}},f=m,p=(n("5abf"),n("2877")),v=n("6544"),h=n.n(v),b=n("40dc"),g=n("5bc1"),_=n("8336"),k=n("b0af"),w=n("99d9"),y=n("169a"),x=n("ce7e"),C=n("132d"),V=n("8860"),I=n("da13"),S=n("5d23"),T=n("34c3"),L=n("f774"),P=n("0fd9"),j=n("2fa4"),B=n("2a7f"),E=Object(p["a"])(f,l,c,!1,null,null,null),O=E.exports;h()(E,{VAppBar:b["a"],VAppBarNavIcon:g["a"],VBtn:_["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VDialog:y["a"],VDivider:x["a"],VIcon:C["a"],VList:V["a"],VListItem:I["a"],VListItemContent:S["a"],VListItemIcon:T["a"],VListItemTitle:S["c"],VNavigationDrawer:L["a"],VRow:P["a"],VSpacer:j["a"],VToolbarTitle:B["b"]});var A={name:"App",components:{loginToolbar:O},data:function(){return{}}},$=A,N=n("7496"),U=n("a75b"),D=Object(p["a"])($,s,o,!1,null,null,null),q=D.exports;h()(D,{VApp:N["a"],VContent:U["a"]});n("d3b7");var F=n("8c4f"),R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card card-container"},[n("v-card",{attrs:{flat:""}},[n("v-card",{staticClass:"v-card-title",attrs:{flat:""}},[n("v-card-title",[e._v(" AUTHENTICATION ")])],1),n("v-form",{ref:"form",attrs:{name:"form"},model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"text",counter:12,rules:e.username_rules,name:"username",label:"Username","append-icon":"mdi-account-edit",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"password",rules:e.password_rules,name:"password",label:"Password","append-icon":"mdi-account-key",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),n("v-card",{staticClass:"errors",attrs:{flat:""}},[n("span",{staticStyle:{color:"#FB236A"}},[e._v(e._s(e.message))])]),n("v-btn",{staticClass:"log-btn",attrs:{block:"","x-large":"",loading:e.loading,color:"#10195D",name:"login",disabled:!e.isValid},on:{click:e.handleLogin}},[e._v(" Login ")])],1)],1)],1)])},G=[],Q=(n("25f0"),n("d4ec")),z=function e(t,n,a,r){Object(Q["a"])(this,e),this.username=t,this.email=n,this.password=a,this.roles=r},M={name:"Login",data:function(){return{user:new z("",""),loading:!1,message:"",isValid:!0,username_rules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length>=4||"Username must be greater than 3 characters"}],password_rules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=6||"Password must be greater than 5 characters"}]}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{validate:function(){this.$refs.form.validate()},handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){if(t){if(e.user.username&&e.user.password){var n=e.$store.dispatch("login",e.user);n.then((function(t){"ENTERPRISE"===t.roles[0]?e.$router.push("/enterprise"):"LANCE"===t.roles[0]?e.$router.push("/lance"):e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.response&&t.response.data.message||t.message||t.toString()}))}}else e.loading=!1}))}}},Y=M,H=(n("1a40"),n("4bd4")),J=n("8654"),K=Object(p["a"])(Y,R,G,!1,null,"26f6905c",null),W=K.exports;h()(K,{VBtn:_["a"],VCard:k["a"],VCardTitle:w["d"],VForm:H["a"],VTextField:J["a"]});var X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card card-container"},[n("v-card",{attrs:{flat:""}},[n("v-card",{staticClass:"v-card-title",attrs:{flat:""}},[n("v-card-title",[e._v(" REGISTRATION ")])],1),n("v-form",{ref:"form",attrs:{name:"form"},model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"text",counter:12,rules:e.username_rules,name:"username",label:"Username","append-icon":"mdi-account-edit",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"email",rules:e.email_rules,name:"emila",label:"E-mail","append-icon":"mdi-email",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"password",rules:e.password_rules,name:"password",label:"Password","append-icon":"mdi-account-key",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"password",rules:e.verifyPass,name:"Vpassword",label:"Verify Password","append-icon":"mdi-account-key",required:""},model:{value:e.Vpassword,callback:function(t){e.Vpassword=t},expression:"Vpassword"}}),n("v-select",{attrs:{items:e.items,rules:e.roles_Rules,name:"roles",id:"roles",label:"I am a/an",outlined:""},model:{value:e.user.roles,callback:function(t){e.$set(e.user,"roles",t)},expression:"user.roles"}}),e.message?n("v-card",{class:e.successful?"Success":"errors",attrs:{flat:""}},[e.message?n("span",{class:e.successful?"Success":"errors"},[e._v(e._s(e.message))]):e._e()]):e._e(),n("v-btn",{staticClass:"log-btn",attrs:{block:"","x-large":"",loading:e.loading,color:"#10195D",name:"login",disabled:!e.isValid},on:{click:e.handleRegister}},[e._v(" Create Accout ")])],1)],1)],1)])},Z=[],ee={name:"Register",data:function(){var e=this;return{user:new z("","","",""),items:["Lance","Enterprise"],submitted:!1,successful:!1,message:"",Vpassword:"",isValid:!0,loading:!1,username_rules:[function(e){return!!e||"Username is required"},function(e){return e&&e.length>=4||"Username must be greater than 3 characters"}],password_rules:[function(e){return!!e||"Password is required"},function(e){return e&&e.length>=6||"Password must be greater than 5 characters"}],verifyPass:[function(t){return!!t&&t===e.user.password||"The passwords don't match"}],email_rules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],roles_Rules:[function(e){return!!e||"Please select a Role to continue"}]}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("register",e.user).then((function(t){e.message=t.message,e.successful=!0,e.$router.push("/RegistrationSuccess")}),(function(t){e.message=t.response&&t.response.data.message||t.message||t.toString(),e.successful=!1}))}))}}},te=ee,ne=(n("b609"),n("b974")),ae=Object(p["a"])(te,X,Z,!1,null,"847b6564",null),re=ae.exports;h()(ae,{VBtn:_["a"],VCard:k["a"],VCardTitle:w["d"],VForm:H["a"],VSelect:ne["a"],VTextField:J["a"]}),a["a"].use(F["a"]);var ie=new F["a"]({mode:"history",routes:[{path:"/login",name:"Login",component:W},{path:"/register",component:re},{path:"/profile",name:"profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/enterprise",name:"enterprise",component:function(){return n.e("chunk-472535ac").then(n.bind(null,"2eaf"))}},{path:"/lance",name:"lance",component:function(){return n.e("chunk-7fb9e9f9").then(n.bind(null,"4c9f"))}},{path:"/RegistrationSuccess",name:"RegistrationSuccess",component:function(){return n.e("chunk-4b2ea613").then(n.bind(null,"b3f3"))}},{path:"/newBill",name:"createNewBill",component:function(){return n.e("chunk-4ad10cfa").then(n.bind(null,"dc62"))}},{path:"/newQuota",name:"createNewQuota",component:function(){return n.e("chunk-099e9280").then(n.bind(null,"0f29"))}},{path:"/tips",name:"tips",component:function(){return n.e("chunk-49f7ff0c").then(n.bind(null,"a1bd"))}},{path:"/billList",name:"billList",component:function(){return Promise.all([n.e("chunk-066e76a5"),n.e("chunk-1ac81b02")]).then(n.bind(null,"6517"))}},{path:"/allBill",name:"allBills",component:function(){return Promise.all([n.e("chunk-066e76a5"),n.e("chunk-5379e1ad"),n.e("chunk-7c6fe884")]).then(n.bind(null,"e6e7"))}},{path:"/allQuota",name:"allQuota",component:function(){return Promise.all([n.e("chunk-066e76a5"),n.e("chunk-5379e1ad"),n.e("chunk-7b8f27b9")]).then(n.bind(null,"7b7c"))}},{path:"/pdf",name:"pdf",component:function(){return n.e("chunk-50995300").then(n.bind(null,"9bba"))}},{path:"/editBill",name:"editBill",component:function(){return n.e("chunk-bb7e169a").then(n.bind(null,"b081"))}}]});ie.beforeEach((function(e,t,n){var a=["/login","/register","/RegistrationSuccess"],r=!a.includes(e.path),i=localStorage.getItem("user");r&&!i?n("/login"):n()}));var se=n("2f62"),oe=n("bee2"),le=n("bc3a"),ce=n.n(le),ue=n("fce9"),de=ue["a"]+"auth/",me=function(){function e(){Object(Q["a"])(this,e)}return Object(oe["a"])(e,[{key:"login",value:function(e){return ce.a.post(de+"signin",{username:e.username,password:e.password}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return ce.a.post(de+"signup",{username:e.username,email:e.email,password:e.password,roles:[e.roles]})}}]),e}(),fe=new me,pe=JSON.parse(localStorage.getItem("user")),ve=pe?{status:{loggedIn:!0},user:pe}:{status:{loggedIn:!1},user:null},he={namespace:!0,state:ve,actions:{login:function(e,t){var n=e.commit;return fe.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e),e}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;fe.logout(),t("logout")},register:function(e,t){var n=e.commit;return fe.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};a["a"].use(se["a"]);var be=new se["a"].Store({modules:{auth:he}}),ge=n("7bb1"),_e=n("f309");n("5363");a["a"].use(_e["a"]);var ke=new _e["a"]({icons:{iconfont:"mdiSvg",iconfonts:"mdiSvg"}}),we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-footer",{attrs:{color:"#24324A",flat:""}},[a("v-card",{staticClass:" lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%",color:"#24324A"}},[a("v-card-text",[a("img",{attrs:{height:"50",src:n("dae4")}})]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("kmerFreelance")])])],1)],1)],1)},ye=[],xe={name:"Appfooter"},Ce=xe,Ve=n("553a"),Ie=Object(p["a"])(Ce,we,ye,!1,null,null,null),Se=Ie.exports;h()(Ie,{VCard:k["a"],VCardText:w["c"],VDivider:x["a"],VFooter:Ve["a"]});var Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-switch",{staticClass:"ma-2",staticStyle:{display:"non"},attrs:{label:"Menu"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-card",{staticClass:"overflow-hidden",attrs:{height:"500"}},[n("v-navigation-drawer",{attrs:{color:e.color,"expand-on-hover":e.expandOnHover,"mini-variant":e.miniVariant,right:e.right,permanent:e.permanent,src:e.bg,absolute:"",dark:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[n("v-list-item",{class:e.miniVariant&&"px-0",attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),n("v-list-item-content",[n("v-list-item-title",[e._v("Application")]),n("v-list-item-subtitle",[e._v("Subtext")])],1)],1),n("v-divider"),e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1)],1)],1)},Le=[],Pe={name:"sideBar",data:function(){return{drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}],color:"#10195D",colors:["primary","blue","success","red","teal","#10195D"],right:!1,permanent:!1,miniVariant:!1,expandOnHover:!1,background:!1}},computed:{bg:function(){return this.background?"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg":void 0}}},je=Pe,Be=n("a523"),Ee=n("8270"),Oe=n("b73d"),Ae=Object(p["a"])(je,Te,Le,!1,null,null,null),$e=Ae.exports;h()(Ae,{VCard:k["a"],VContainer:Be["a"],VDivider:x["a"],VIcon:C["a"],VList:V["a"],VListItem:I["a"],VListItemAvatar:Ee["a"],VListItemContent:S["a"],VListItemIcon:T["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VNavigationDrawer:L["a"],VSwitch:Oe["a"]});var Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.bill_line_items,(function(t,a){return n("v-row",{key:a,attrs:{justify:"center"}},[n("v-col",{staticClass:" col-3 .col-md-4"},[n("v-autocomplete",{attrs:{chips:"",items:e.billItemsNames,"item-text":"bill_item_name",outlined:"",rules:e.verifyItemName,color:"white",height:"2",name:"bill_item_name",label:"Item Name",required:""},on:{change:e.GetItemPrice},model:{value:t.bill_item_name,callback:function(n){e.$set(t,"bill_item_name",n)},expression:"bill_line_item.bill_item_name"}})],1),n("v-col",{staticClass:" col-2 .col-md-4"},[n("v-text-field",{directives:[{name:"cloneya-input",rawName:"v-cloneya-input",value:"quantity",expression:"'quantity'"}],staticClass:"error-combobox",attrs:{outlined:"",type:"number",name:"quantity",rules:e.verifyQuantity,label:"Quantity","append-icon":"mdi-numeric-1-box-multiple",required:""},model:{value:t.quantity,callback:function(n){e.$set(t,"quantity",n)},expression:"bill_line_item.quantity"}})],1),n("v-col",{staticClass:" col-2 .col-md-4"},[n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",disabled:"","v-model":e.price,value:e.price,type:"number",name:"Unit Price",label:"Unit Price","append-icon":"mdi-currency-eur",required:""}})],1),n("v-col",{staticClass:" col-3 .col-md-4"},[n("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"text",name:"Total",disabled:"",label:"Total","append-icon":"mdi-calculator-variant",required:""}})],1),n("v-col",{staticClass:" col-1 .col-md-4"},[n("v-avatar",{attrs:{color:"primary","x-large":""},on:{click:e.addLine}},[n("v-icon",{staticClass:"mdi-108px mdi-light"},[e._v("mdi-playlist-plus")])],1)],1),n("v-col",{staticClass:" col-1 .col-md-4"},[a+1===e.bill_line_items.length?n("v-avatar",{attrs:{color:"error","x-large":""},on:{click:function(t){return e.removeLine(a)}}},[n("v-icon",{attrs:{dark:""}},[e._v("mdi-minus")])],1):e._e()],1)],1)})),1)},Ue=[],De=(n("4de4"),n("a434"),n("4ad7")),qe=n("6468"),Fe={name:"bill-input-group",data:function(){return{blockRemoval:!0,price:null,inputGroup:0,loading:!1,billName:null,billItems:null,billItemsNames:[],error:null,bill:new De["a"]("","",""),bill_line_items:[],verifyItemName:[function(e){return!!e||"Please make a valid selection"}],verifyQuantity:[function(e){return!!e||"Please add a valid value"}]}},mounted:function(){this.addLine()},created:function(){this.fetchData()},watch:{$route:"fetchData",bill_line_items:function(){this.blockRemoval=this.bill_line_items.length<=1}},methods:{addLine:function(){var e=this.bill_line_items.filter((function(e){return null===e.bill_item_name}));e.length>=1&&this.bill_line_items.length>0||this.bill_line_items.push({bill_item_name:null,quantity:null})},removeLine:function(e){this.blockRemoval||this.bill_line_items.splice(e,1)},fetchData:function(){var e=this;this.error=this.billItems=null,this.loading=!0,qe["a"].getBillItems().then((function(t){e.loading=!1,e.billItems=t.data;for(var n=0;n<t.data.length;n++)e.billItemsNames.push(t.data[n].bill_item_name)})).catch((function(e){return{message:e||"An error ocurred while fetching the bill components please verify your internet conection and try again letter"}}))},GetItemPrice:function(e){for(var t=0;t<this.billItems.length;t++)this.billItems[t].bill_item_name===e&&(this.price=this.billItems[t].bill_item_price)}},computed:{currentUser:function(){return this.$store.state.auth.user},getUserID:function(){return this.$store.state.auth.user.id}},useUserId:function(){this.getUserID&&(this.bill.userId=this.getUserID())}},Re=Fe,Ge=(n("c888"),n("c6a6")),Qe=n("8212"),ze=n("62ad"),Me=Object(p["a"])(Re,Ne,Ue,!1,null,"5da7fe13",null),Ye=Me.exports;h()(Me,{VAutocomplete:Ge["a"],VAvatar:Qe["a"],VCol:ze["a"],VIcon:C["a"],VRow:P["a"],VTextField:J["a"]});var He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{width:"800px",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"primary",dark:""}},"v-btn",r,!1),n),[e._v(" Open Dialog ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("div",{attrs:{id:"pdfToBeGenerated"}},[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("BIll Name:......")])]),a("v-card-text",[a("v-row",[a("v-col",{staticClass:" col- .col-md-4"}),a("v-col",{staticClass:" col-2 .col-md-4"},[a("img",{staticClass:"img",attrs:{height:"30",src:n("dae4")}})])],1),[a("v-simple-table",{attrs:{height:"300px"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Name")]),a("th",{staticClass:"text-left"},[e._v("Calories")])])]),a("tbody",e._l(e.desserts,(function(t){return a("tr",{key:t.name},[a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.calories))])])})),0)]},proxy:!0}])})],e._v(" pulvinar habitasse turpis. ")],2)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"warning"},on:{click:e.downloadpdf}},[e._v("Download PDF "),a("v-icon",{staticClass:"mdi-light",attrs:{small:""}},[e._v("mdi-download")])],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("Edit "),a("v-icon",{staticClass:"mdi-light",attrs:{small:""}},[e._v("mdi-pencil")])],1),a("v-btn",{attrs:{color:"error"},on:{click:function(t){e.dialog=!1}}},[e._v("cancel "),a("v-icon",{staticClass:"mdi-light",attrs:{small:""}},[e._v("mdi-plex")])],1)],1)],1)],1)],1)},Je=[],Ke=n("d67e"),We={name:"pdf-view",data:function(){return{dialog:!1,billName:"bill name",desserts:[{name:"Frozen Yogurt",calories:159},{name:"Frozen Yogurt",calories:159},{name:"Frozen Yogurt",calories:159}]}},methods:{downloadpdf:function(){var e={filename:this.billName,image:{type:"jpeg"},html2canvas:{},jsPDF:{orientation:"landscape"},margin:[20,20]},t=document.getElementById("pdfToBeGenerated");Ke().from(t).set(e).save()}}},Xe=We,Ze=n("1f4f"),et=Object(p["a"])(Xe,He,Je,!1,null,null,null),tt=et.exports;h()(et,{VBtn:_["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VCol:ze["a"],VDialog:y["a"],VIcon:C["a"],VRow:P["a"],VSimpleTable:Ze["a"],VSpacer:j["a"]}),a["a"].config.productionTip=!1,a["a"].use(ge["a"]),a["a"].use(ke),a["a"].use(i.a),a["a"].component("loginToolBar",O),a["a"].component("Appfooter",Se),a["a"].component("sideBar",$e),a["a"].component("bill-input-group",Ye),a["a"].component("pdf-view",tt),new a["a"]({vuetify:ke,router:ie,store:be,render:function(e){return e(q)}}).$mount("#app")},"5abf":function(e,t,n){"use strict";var a=n("0d60"),r=n.n(a);r.a},6468:function(e,t,n){"use strict";var a=n("d4ec"),r=n("bee2"),i=n("bc3a"),s=n.n(i),o=n("fce9"),l=o["a"]+"bill_items/",c=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getBillItems",value:function(){return s.a.get(l)}}]),e}();t["a"]=new c},b609:function(e,t,n){"use strict";var a=n("1b7f"),r=n.n(a);r.a},c888:function(e,t,n){"use strict";var a=n("c920"),r=n.n(a);r.a},c920:function(e,t,n){},dae4:function(e,t,n){e.exports=n.p+"img/kmerfreelance.7e23293b.png"},de21:function(e,t,n){},fce9:function(e,t,n){"use strict";var a="api/";t["a"]=a}});
//# sourceMappingURL=app.0f8e1db1.js.map