(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),o=c(1),i=(c(10),c(11),c(3)),d=c.n(i),r=c(0),j=function(e){var t=e.todo,c=e.showTodo,s=e.selectedTodo,a=t.id,n=t.completed,l=t.title,o=s&&s.id===a;return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":o}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:a}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!n,"has-text-success":n}),children:l})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(t)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far",{"fa-eye-slash":o,"fa-eye":!o})})})})})]})},b=function(e){var t=e.todos,c=e.showTodo,s=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(j,{todo:e,showTodo:c,selectedTodo:s},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var h=function(e){var t=e.filterOption,c=e.setFilterOption,a=e.setQuery,n=e.query;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{value:t,onChange:function(e){c(e.target.value)},"data-cy":"statusSelect",children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",children:n&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var O=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.selectedTodo,c=t.id,s=t.title,a=t.userId,n=t.completed,i=e.closeModal,d=Object(o.useState)(null),j=Object(l.a)(d,2),b=j[0],h=j[1],m=Object(o.useState)(!1),x=Object(l.a)(m,2),f=x[0],p=x[1];return Object(o.useEffect)((function(){p(!0),function(e){return u("/users/".concat(e))}(a).then((function(e){h(e),p(!1)})).catch((function(){throw new Error("User not found")}))}),[a]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),f?Object(r.jsx)(O,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",c]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:i})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:s}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[n?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",b&&Object(r.jsx)("a",{href:"mailto:".concat(b.email),children:b.name})]})]})]})]})},x=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(null),i=Object(l.a)(n,2),d=i[0],j=i[1],x=Object(o.useState)(s.All),f=Object(l.a)(x,2),p=f[0],N=f[1],v=Object(o.useState)(!1),y=Object(l.a)(v,2),g=y[0],w=y[1],T=Object(o.useState)(""),k=Object(l.a)(T,2),C=k[0],S=k[1];Object(o.useEffect)((function(){w(!0),u("/todos").then((function(e){a(e),w(!1)})).catch((function(){throw new Error("Todos loading is failed")}))}),[]);var A=Object(o.useMemo)((function(){return c.filter((function(e){var t=e.title,c=e.completed,a=t.toLowerCase().includes(C.trim().toLowerCase());switch(p){case s.Active:return!c&&a;case s.Completed:return c&&a;default:return a}}))}),[c,p,C]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(h,{filterOption:p,setFilterOption:N,setQuery:S,query:C})}),Object(r.jsx)("div",{className:"block",children:g?Object(r.jsx)(O,{}):Object(r.jsx)(b,{todos:A,selectedTodo:d,showTodo:function(e){j(e)}})})]})})}),!!d&&Object(r.jsx)(m,{selectedTodo:d,closeModal:function(){j(null)}})]})};n.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1f167b22.chunk.js.map