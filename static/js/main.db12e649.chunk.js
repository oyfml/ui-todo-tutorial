(this["webpackJsonpui-todo"]=this["webpackJsonpui-todo"]||[]).push([[0],{110:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(73),a(74),a(21)),u=a(41),s=a(5),d=function(t){return{type:"SET_TODOS",data:t}},p=function(t,e){var a=e.type,n=e.data;switch(a){case"SET_TODOS":return Object(s.a)(Object(s.a)({},t),{},{todos:n});case"ADD_TODO":var r=Object(s.a)(Object(s.a)({},t.todos),{},Object(u.a)({},n.id,{description:n.description}));return Object(s.a)(Object(s.a)({},t),{},{todos:r});case"DELETE_TODO":var o=Object(s.a)({},t.todos);return delete o[n],Object(s.a)(Object(s.a)({},t),{},{todos:o});case"UPDATE_TODO":var c=Object(s.a)({},t.todos);return c[n.id].description=n.description,Object(s.a)(Object(s.a)({},t),{},{todos:c});default:return t}},l={todos:{}},f=Object(n.createContext)(l),m=function(t){var e=t.children,a=Object(n.useReducer)(p,l),o=Object(i.a)(a,2),c=o[0],u=o[1];return r.a.createElement(f.Provider,{value:{state:c,dispatch:u}},e)},O=function(){return r.a.createElement("h1",{"data-cy":"header"},"TODO")},b=a(113),v=a(50),h=a(114),j=a(8),y=a.n(j),_=a(27),E=a(48),T=a.n(E);a(76);a(79).config();T.a.initializeApp({apiKey:"AIzaSyCv1KkCNjY49wJ4Q01ul64dtv_u44zAiG8",authDomain:"my-todo-app-ba84c.firebaseapp.com",databaseURL:"https://my-todo-app-ba84c.firebaseio.com",projectId:"my-todo-app-ba84c",storageBucket:"my-todo-app-ba84c.appspot.com",messagingSenderId:"517267782742",appId:"1:517267782742:web:678e60b2c6a192cad70ff7"});var k=T.a.firestore(),w={fetchTodos:function(){var t=Object(_.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.next=3,k.collection("todo-list").get();case 3:return t.sent.docs.forEach((function(t){e[t.id]=t.data()})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),addTodo:function(){var t=Object(_.a)(y.a.mark((function t(e,a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.collection("todo-list").doc(e).set({description:a});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),updateTodo:function(){var t=Object(_.a)(y.a.mark((function t(e,a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.collection("todo-list").doc(e).update({description:a});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),deleteTodo:function(){var t=Object(_.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.collection("todo-list").doc(e).delete();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var t=Object(n.useState)(""),e=Object(i.a)(t,2),a=e[0],o=e[1],c=Object(n.useContext)(f).dispatch;return r.a.createElement("div",{className:"todo-input"},r.a.createElement(b.a,{value:a,onChange:function(t){var e=t.target.value;return o(e)},placeholder:"Add a TODO",size:"large",className:"todo-input__input","data-cy":"todo-input__input"}),r.a.createElement(v.a,{type:"primary",shape:"round",onClick:function(){var t=Object(h.a)();w.addTodo(t,a),c(function(t,e){return{type:"ADD_TODO",data:{id:t,description:e}}}(t,a)),o("")},className:"todo-input__button","data-cy":"todo-input__button"},"Add"))},g=function(t){var e=Object(n.useState)(t.description),a=Object(i.a)(e,2),o=a[0],c=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"todo-task"},!d&&r.a.createElement("div",{className:"todo-task__name","data-cy":"todo-task__name"},t.description),d&&r.a.createElement(b.a,{value:o,onChange:function(t){var e=t.target.value;return c(e)},placeholder:"Update a TODO",size:"large",className:"todo-task__input","data-cy":"todo-task__input"}),r.a.createElement(v.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-update",onClick:function(){return d&&t.update(t.id,o),void p(!d)}},"Update"),r.a.createElement(v.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-delete",onClick:function(){return t.delete(t.id)}},"Delete"))},x=function(){var t=Object(n.useContext)(f),e=t.dispatch,a=t.state;Object(n.useEffect)((function(){(function(){var t=Object(_.a)(y.a.mark((function t(){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.fetchTodos();case 2:a=t.sent,e(d(a));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var o=function(t){w.deleteTodo(t),e(function(t){return{type:"DELETE_TODO",data:t}}(t))},c=function(t,a){w.updateTodo(t,a),e(function(t,e){return{type:"UPDATE_TODO",data:{id:t,description:e}}}(t,a))};return r.a.createElement("div",{className:"todo-list","data-cy":"todo-list"},Object.entries(a.todos).map((function(t){var e=Object(i.a)(t,2),a=e[0],n=e[1];return r.a.createElement(g,{key:a,description:n.description,delete:o,update:c,id:a})})))},N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(O,null),r.a.createElement(m,null,r.a.createElement(D,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},68:function(t,e,a){t.exports=a(110)},73:function(t,e,a){},74:function(t,e,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.db12e649.chunk.js.map