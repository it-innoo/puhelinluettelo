(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(47)},25:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(17),c=t.n(r),o=(t(25),t(19)),l=t(7),i=function(e){var n=e.person,t=e.onClickHandler;return u.a.createElement("li",null,n.name," ",n.number,u.a.createElement("button",{onClick:t(n.id)},"Poista"))},m=function(e){var n=e.persons,t=e.showNames,a=e.onClickHandler;return u.a.createElement("div",null,u.a.createElement("ul",null,n.filter(function(e){return e.name.toLowerCase().startsWith(t)}).map(function(e){return u.a.createElement(i,{key:e.name,person:e,onClickHandler:a})})))},s=function(e){return u.a.createElement("form",{onSubmit:e.submitHandler},u.a.createElement("div",null,"Nimi:",u.a.createElement("input",{value:e.name,onChange:e.onNameChange})),u.a.createElement("div",null,"numero:",u.a.createElement("input",{value:e.number,onChange:e.onNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},f=t(49),d=t(51),h=t(50),v=function(e){return u.a.createElement(f.a,null,u.a.createElement(d.a,{addonType:"prepend"},"Rajaa n\xe4ytett\xe4vi\xe4"),u.a.createElement(h.a,{type:"text",value:e.namesToShow,onChange:e.onChangeHandler}))},b=function(e){var n=e.message;if(null===n)return null;return u.a.createElement("div",{className:"note"},n)},p=function(e){var n=e.message;if(null===n)return null;return u.a.createElement("div",{className:"error"},n)},E=t(8),g=t.n(E),j="/api/persons",C=function(){return g.a.get(j).then(function(e){return e.data})},w=function(e){return g.a.get("".concat(j,"/").concat(e)).then(function(e){return e.data})},O=function(e){return g.a.post(j,e).then(function(e){return e.data})},k=function(e){return g.a.delete("".concat(j,"/").concat(e)).then(function(e){return e.data})},N=function(e,n){return g.a.put("".concat(j,"/").concat(e),n).then(function(e){return e.data})},H=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),f=i[0],d=i[1],h=Object(a.useState)(""),E=Object(l.a)(h,2),g=E[0],j=E[1],H=Object(a.useState)(""),y=Object(l.a)(H,2),S=y[0],T=y[1],L=Object(a.useState)(null),P=Object(l.a)(L,2),x=P[0],J=P[1],B=Object(a.useState)(null),D=Object(l.a)(B,2),I=D[0],M=D[1];Object(a.useEffect)(function(){C().then(function(e){r(e)})},[]);return u.a.createElement("div",{className:"app"},u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(b,{message:x}),u.a.createElement(p,{message:I}),u.a.createElement(v,{value:S,onChangeHandler:function(e){T(e.target.value)}}),u.a.createElement("h3",null,"Lis\xe4\xe4 uusi"),u.a.createElement(s,{name:f,onNameChange:function(e){d(e.target.value)},number:g,onNumberChange:function(e){j(e.target.value)},submitHandler:function(e){e.preventDefault();var n={name:f,number:g},a=t.find(function(e){return e.name===n.name});if(void 0!==a){if(window.confirm("".concat(a.name," on jo luettelossa, korvataanko vanha numero uudella?"))){var u=Object(o.a)({},a,{number:g});N(a.id,u).then(function(e){r(t.map(function(n){return n.id!==a.id?n:e})),J("Muokattiin ".concat(a.name)),setTimeout(function(){J(null)},5e3),d(""),j("")}).catch(function(e){M("Henkil\xf6 '".concat(a.name,"' on jo valitettavasti poistettu palvelimelta")),r(t.filter(function(e){return e.id!==a.id})),setTimeout(function(){M(null)},5e3),d(""),j("")})}}else O(n).then(function(e){r(t.concat(e)),J("Lis\xe4ttiin ".concat(e.name)),setTimeout(function(){J(null)},5e3),d(""),j("")})}}),u.a.createElement("h3",null,"Numerot"),u.a.createElement(m,{persons:t,showNames:S,onClickHandler:function(e){return function(n){w(e).then(function(n){window.confirm("Poistetaanko ".concat(n.name))&&(k(e),J("".concat(n.name," yhteystieto poistettu")),r(t.filter(function(n){return n.id!==e})),setTimeout(function(){J(null)},5e3))})}}}))};c.a.render(u.a.createElement(H,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ec882537.chunk.js.map