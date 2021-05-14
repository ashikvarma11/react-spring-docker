(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(37),r=c.n(a),s=(c(96),c(2)),o=(c(97),c(134)),l=c(124),j=c(127),d=c(128),b=c(130),h=c(133),O=c(25),u=c(129),x=c(136),m=c(138),p=c(74),f=c(135),g=c(132),y=c(41),S=c(126),E=c(137),v=c(80),C=c(3),k=function(e){var t=e.isEdit,c=e.isAdd,i=e.currEmployee,a=e.callBackFn,r=Object(n.useState)(!1),o=Object(s.a)(r,2),b=o[0],h=o[1],u=Object(n.useState)(!1),x=Object(s.a)(u,2),p=x[0],g=x[1],k=Object(v.a)({defaultValues:i}),A=k.register,T=k.handleSubmit;k.watch,k.formState.errors;return Object(C.jsx)(l.a,{marginTop:10,marginBottom:20,children:t||c?Object(C.jsxs)("form",{children:[Object(C.jsxs)(y.a,{id:"fName",children:[Object(C.jsx)(S.a,{children:"First Name"}),Object(C.jsx)(E.a,Object(O.a)({type:"text"},A("firstName",{required:!0})))]}),Object(C.jsxs)(y.a,{id:"lName",children:[Object(C.jsx)(S.a,{children:"Last Name"}),Object(C.jsx)(E.a,Object(O.a)({type:"text"},A("lastName",{required:!0})))]}),Object(C.jsxs)(y.a,{id:"email",children:[Object(C.jsx)(S.a,{children:"Email"}),Object(C.jsx)(E.a,Object(O.a)({type:"email"},A("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})))]}),Object(C.jsx)(y.a,{id:"submit",marginTop:"30",children:Object(C.jsx)(f.a,{onClick:T((function(e){h(!0);var c=null===i||void 0===i?void 0:i.id,n=t?"http://localhost:8080/api/employees/".concat(c):"http://localhost:8080/api/employees";fetch(n,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"*/*"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){a(),g(!0),setTimeout((function(){g(!1)}),2e3),h(!1)}))})),isLoading:b,loadingText:"Submitting",colorScheme:"teal",variant:"solid",role:"button",w:"100%",children:"Submit"})}),Object(C.jsx)(j.a,{marginTop:"20px",children:p&&"Saved Successfully"})]}):Object(C.jsx)(d.a,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:Object(C.jsx)(j.a,{children:Object(C.jsx)(m.a,{objectFit:"cover",w:"100%",src:"https://bit.ly/dan-abramov"})})})})},A=function(e){var t=e.shouldUpdateList,c=i.a.useState([]),n=Object(s.a)(c,2),a=n[0],r=n[1],o=i.a.useState(),l=Object(s.a)(o,2),h=l[0],y=l[1],S=i.a.useState(),E=Object(s.a)(S,2),v=E[0],A=E[1],T=i.a.useCallback((function(){return A({})}),[]),F=i.a.useState({isEdit:!1,isAdd:!1}),N=Object(s.a)(F,2),w=N[0],B=N[1],z=Object(u.a)(),L=z.isOpen,P=z.onOpen,D=z.onClose;i.a.useEffect((function(){fetch("http://localhost:8080/api/employees").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[v,t]);return Object(C.jsx)(C.Fragment,{children:a.length>0?Object(C.jsxs)(x.a,{minChildWidth:"300px",spacingX:"40px",spacingY:"20px",children:[a.map((function(e,t){return Object(C.jsxs)(d.a,{children:[Object(C.jsx)(j.a,{children:Object(C.jsx)(m.a,{boxSize:"200px",marginBlock:"10px",borderRadius:"full",objectFit:"cover",src:"https://bit.ly/dan-abramov",alt:"Dan Abramov",onClick:function(){y(e),B(Object(O.a)(Object(O.a)({},w),{},{isEdit:!1,isAdd:!1})),P()}})}),Object(C.jsx)(j.a,{children:Object(C.jsxs)(b.a,{w:"100",h:"10",fontSize:"2xl",align:"center",children:[e.firstName," ",Object(C.jsx)("strong",{children:e.lastName})]})}),Object(C.jsx)(j.a,{children:Object(C.jsx)(b.a,{fontSize:"xl",children:e.email})}),Object(C.jsx)(j.a,{children:Object(C.jsxs)(p.a,{marginTop:"30px",children:[Object(C.jsx)(f.a,{color:"black",onClick:function(){y(e),B(Object(O.a)(Object(O.a)({},w),{},{isEdit:!0,isAdd:!1})),P()},children:"Edit"}),Object(C.jsx)(f.a,{color:"black",onClick:function(){return function(e){var t="http://localhost:8080/api/employees/".concat(e.id);fetch(t,{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Accept:"*/*"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e})).then((function(e){T()}))}(e)},children:"Delete"})]})})]},t)})),Object(C.jsxs)(g.a,{isOpen:L,onClose:D,children:[Object(C.jsx)(g.d,{}),Object(C.jsxs)(g.b,{children:[Object(C.jsx)(k,{isEdit:w.isEdit,isAdd:w.isAdd,currEmployee:h,callBackFn:function(){T()}}),Object(C.jsx)(g.c,{children:Object(C.jsx)(f.a,{mr:3,onClick:D,children:"Close"})})]})]})]}):Object(C.jsx)(j.a,{marginTop:"100px",children:Object(C.jsxs)("strong",{children:["No Employees Found. Please Add an Employee"," "]})})})},T=function(){var e=i.a.useState(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],a=i.a.useCallback((function(){return n({})}),[]);return Object(C.jsx)(o.a,{children:Object(C.jsxs)(l.a,{maxW:"container.xl",marginTop:10,marginBottom:20,children:[Object(C.jsx)(j.a,{children:Object(C.jsx)(d.a,{children:Object(C.jsx)(b.a,{fontSize:"3xl",marginBottom:"10",children:"Welcome to Employee Management"})})}),Object(C.jsxs)(h.e,{variant:"soft-rounded",colorScheme:"green",children:[Object(C.jsx)(j.a,{children:Object(C.jsxs)(h.b,{children:[Object(C.jsx)(h.a,{children:"Employee Directory"}),Object(C.jsx)(h.a,{children:"Add Employee"})]})}),Object(C.jsxs)(h.d,{children:[Object(C.jsx)(h.c,{children:Object(C.jsx)(A,{shouldUpdateList:c})}),Object(C.jsx)(h.c,{children:Object(C.jsx)(k,{isEdit:!1,isAdd:!0,callBackFn:function(){a()}})})]})]})]})})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,139)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root")),F()},96:function(e,t,c){},97:function(e,t,c){}},[[108,1,2]]]);
//# sourceMappingURL=main.fb62e524.chunk.js.map