(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{199:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}));var a=function(e){if(console.log(e),!e)return"Field is required"},n=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e)}}},200:function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return m}));var a=r(211),n=r(0),o=r.n(n),c=r(201),l=r.n(c),u=function(e){var t=e.input,r=e.meta,n=Object(a.a)(e,["input","meta"]),c=r.touched&&r.error;return o.a.createElement("div",{className:"".concat(l.a.formControl," ").concat(c&&l.a.error)},o.a.createElement("textarea",Object.assign({},t,n)),c&&o.a.createElement("span",null,r.error))},i=function(e){var t=e.input,r=e.meta,n=Object(a.a)(e,["input","meta"]),c=r.touched&&r.error;return console.log(r.error),o.a.createElement("div",{className:"".concat(l.a.formControl," ").concat(c&&l.a.error)},o.a.createElement("input",Object.assign({},t,n)),c&&o.a.createElement("div",null,r.error))},m=function(e){return o.a.createElement("div",{className:l.a.errorData},o.a.createElement("span",null,e.errorMessage))}},201:function(e,t,r){e.exports={formControl:"formControl_formControl__1H8zP",error:"formControl_error__ePzui",errorData:"formControl_errorData__3RfHI"}},281:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(283),c=r(282),l=r(199),u=r(200),i=r(19),m=r(16),s=r(4),p=Object(c.a)({form:"login"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(o.a,{component:u.b,validate:[l.b],name:"Email",type:"text",placeholder:"login"})),n.a.createElement("div",null,n.a.createElement(o.a,{component:u.b,validate:[l.b],name:"Password",type:"password",placeholder:"password"})),n.a.createElement("div",null,n.a.createElement(o.a,{component:"input",type:"checkbox",name:"RememberMe"}),"remember me"),n.a.createElement("div",null,n.a.createElement(u.a,{errorMessage:e.err})),e.captcha?n.a.createElement("div",null,n.a.createElement("img",{src:e.captcha}),n.a.createElement(o.a,{component:"input",type:"text",name:"captcha",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"})):"",n.a.createElement("button",{className:"btn-default"},"Login"))}));t.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,logInName:e.auth.login,captcha:e.auth.captcha,err:e.auth.err}}),{login:m.c,stop_submit:m.g})((function(e){return e.isAuth?n.a.createElement(s.a,{to:"/profile/overview"}):n.a.createElement(n.a.Fragment,null,n.a.createElement("h3",null,"LOGIN"),n.a.createElement(p,{err:e.err,captcha:e.captcha,onSubmit:function(t){e.err&&e.stop_submit(null),e.login(t.Email,t.Password,t.RememberMe,t.captcha)}}))}))}}]);
//# sourceMappingURL=7.0bc23823.chunk.js.map