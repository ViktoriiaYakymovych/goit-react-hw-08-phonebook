"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[980],{1294:function(n,e,r){r.d(e,{$:function(){return o}});var t=r(3329),o=function(n){var e=n.title,r=n.children;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:e}),r]})}},8980:function(n,e,r){r.r(e),r.d(e,{default:function(){return Y}});var t,o,i,c,a,l,u,d,s=r(2791),p=r(4420),x=r(4270),m=r(3634),f=r(5218),h=r(5705),b=r(8007),j=r(3553),Z=function(n){return n.contacts.contacts},v=(0,j.P1)([Z,function(n){return n.filter}],(function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),g=r(168),k=r(5867),P=(0,k.ZP)(h.l0)(t||(t=(0,g.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 16px;\npadding: 16px;\n"]))),y=k.ZP.label(o||(o=(0,g.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 4px;\n"]))),w=(0,k.ZP)(h.gN)(i||(i=(0,g.Z)(["\npadding: 4px;\n"]))),C=(0,k.ZP)(h.Bc)(c||(c=(0,g.Z)(["\ncolor: red;\n"]))),q=k.ZP.button(a||(a=(0,g.Z)(["\npadding: 4px;\nborder: 1px solid black;\nbackground-color: transparent;\n&:hover, &:focus {\n    border-color: green;\n}\n"]))),N=r(3329),_=b.Ry().shape({name:b.Z_().required("Name is required field").trim(),number:b.Rx().typeError("Must be a number").required("Number is a required field")}),L=function(){var n=(0,p.v9)(Z),e=(0,p.I0)();return(0,N.jsx)(h.J9,{initialValues:{name:"",number:""},validationSchema:_,onSubmit:function(r,t){!function(r){if(n.find((function(n){return n.name.toLowerCase()===r.name.toLowerCase()||n.number===r.number})))return f.ZP.error("".concat(r.name," or ").concat(r.number," is already added to Your contact's list"));e((0,m.uK)(r))}(r),t.resetForm()},children:(0,N.jsxs)(P,{children:[(0,N.jsxs)(y,{children:["Name",(0,N.jsx)(w,{name:"name",type:"text",placeholder:"Name..."}),(0,N.jsx)(C,{component:"div",name:"name"})]}),(0,N.jsxs)(y,{children:["Phone",(0,N.jsx)(w,{name:"number",type:"tel",placeholder:"Phone..."}),(0,N.jsx)(C,{component:"div",name:"number"})]}),(0,N.jsx)(q,{type:"submit",children:"Add new Contact"})]})})},I=k.ZP.div(l||(l=(0,g.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 8px;\njustify-content: center;\nalign-items: center;\npadding: 4px;\nborder: 1px solid black;\n"]))),E=k.ZP.button(u||(u=(0,g.Z)(["\n  padding: 4px;\n  border: 1px solid black;\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    border-color: green;\n  }\n"]))),F=function(n){var e=n.contact,r=e.id,t=e.name,o=e.number,i=(0,p.I0)();return(0,N.jsxs)(I,{children:[(0,N.jsx)("p",{children:t}),(0,N.jsx)("p",{children:o}),(0,N.jsx)(E,{type:"button",onClick:function(){return i((0,m.GK)(r))},children:"Delete"})]})},K=k.ZP.ul(d||(d=(0,g.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: column;\ngap: 8px;\n"]))),R=function(){var n=(0,p.v9)(v);return(0,N.jsx)(K,{children:n.map((function(n){return(0,N.jsx)("li",{children:(0,N.jsx)(F,{contact:n})},n.id)}))})},S=r(1294),Y=function(){var n=(0,p.I0)();return(0,s.useEffect)((function(){n((0,m.yF)())}),[n]),(0,N.jsxs)(S.$,{title:"Phonebook",children:[(0,N.jsx)(x.q,{title:"Phonebook",children:(0,N.jsx)("title",{children:"Your contacts"})}),(0,N.jsx)(L,{}),(0,N.jsx)(R,{})]})}}}]);
//# sourceMappingURL=980.1b38104d.chunk.js.map