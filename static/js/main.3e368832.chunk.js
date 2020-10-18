(this.webpackJsonpchat_websocket=this.webpackJsonpchat_websocket||[]).push([[0],{116:function(e,t){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),s=n.n(c),i=(n(93),n(13)),o=n(52),l=n(41),u=n(72),m=n.n(u),d={socket:null,createConnection:function(){this.socket=m()("https://chat-websocket-backend.herokuapp.com")},subscribe:function(e,t,n){var a,r,c;null===(a=this.socket)||void 0===a||a.on("init-messages-published",e),null===(r=this.socket)||void 0===r||r.on("new-message-sent",t),null===(c=this.socket)||void 0===c||c.on("user-typing",n)},destroyConnection:function(){var e;null===(e=this.socket)||void 0===e||e.disconnect(),this.socket=null},sendName:function(e){var t;null===(t=this.socket)||void 0===t||t.emit("client-name-sent",e)},sendMessage:function(e){var t;null===(t=this.socket)||void 0===t||t.emit("client-message-sent",e,(function(e){e&&alert(e)}))},typingMessage:function(){var e;null===(e=this.socket)||void 0===e||e.emit("client-typing")}},f={messages:[],typingUsers:[]},g=function(){return function(e){d.typingMessage()}},p=n(16),v=n(159),b=n(160),h=function(){var e=Object(p.b)(),t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(null),l=Object(i.a)(o,2),u=l[0],m=l[1],f=Object(a.useState)(!1),h=Object(i.a)(f,2),y=h[0],j=h[1],E=function(){""!==c.trim()?(e(function(e){return function(t){d.sendName(e)}}(c)),s("")):(m("required to enter your name"),j(!0))};return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,r.a.createElement(v.a,{variant:"outlined",value:c,label:"enter your name",onChange:function(e){return s(e.currentTarget.value)},color:"primary",inputMode:"text",onKeyPress:function(t){e(g()),null!==u&&(m(null),j(!1)),13===t.charCode&&E()},autoFocus:!0,error:!!u,helperText:u})),r.a.createElement("div",{style:{margin:"5px"}},r.a.createElement(b.a,{disabled:y,color:"primary",variant:"contained",onClick:E},"send name")))},y=n(32),j=n.n(y),E=function(e){return r.a.createElement("div",{className:j.a.wrapper},r.a.createElement("div",{className:j.a.cloud},r.a.createElement("div",{className:j.a.cloud},r.a.createElement("div",{className:j.a.name},e.name),r.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",null,e.text,e.children)))))},O=n(51),_=n.n(O),k=n(158),w=n(77),x=n.n(w),M=Object(k.a)((function(e){return{button:{margin:e.spacing(1)}}}));function C(e){var t=M();return r.a.createElement("div",null,r.a.createElement(b.a,{disabled:e.disabled,variant:"contained",color:"primary",className:t.button,endIcon:r.a.createElement(x.a,null),onClick:e.sendMessage},"Send"))}var S=n(79),N=n.n(S),T=n(78),I=n.n(T),U=function(){var e={backgroundImage:"url(".concat(I.a,")")},t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(p.c)((function(e){return e.chat.messages})),l=Object(p.c)((function(e){return e.chat.typingUsers})),u=Object(a.useState)(!0),m=Object(i.a)(u,2),f=m[0],b=m[1],h=Object(a.useState)(0),y=Object(i.a)(h,2),j=y[0],O=y[1],k=Object(a.useRef)(null),w=Object(a.useState)(""),x=Object(i.a)(w,2),M=x[0],S=x[1],T=Object(p.b)();Object(a.useEffect)((function(){return T((function(e){d.createConnection(),d.subscribe((function(t){e(function(e){return{type:"messages-received",messages:e}}(t))}),(function(t){e(function(e){return{type:"new-messages-received",message:e}}(t))}),(function(t){e(function(e){return{type:"typingUserAdded",user:e}}(t))}))})),function(){T((function(e){d.destroyConnection()}))}}),[]),Object(a.useEffect)((function(){var e;f&&(null===(e=k.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[o]);var U=function(){""!==M.trim()?(T(function(e){return function(t){d.sendMessage(e)}}(M)),S("")):s("required to enter a message")};return r.a.createElement("div",null,r.a.createElement("div",{style:e,className:_.a.Chat,onScroll:function(e){var t=e.currentTarget,n=t.scrollHeight-t.clientHeight,a=Math.abs(n-t.scrollTop)<10;e.currentTarget.scrollTop>j&&a?b(!0):b(!1),O(e.currentTarget.scrollTop)}},o.map((function(e){return r.a.createElement(E,{key:e.id,text:e.message,name:e.user.name})})),l.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("div",null,r.a.createElement(E,{key:e.id,text:"......",name:e.name},r.a.createElement(N.a,null))))})),r.a.createElement("div",{ref:k})),r.a.createElement("div",{className:_.a.Message},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement(v.a,{style:{borderColor:"white"},value:M,variant:"outlined",error:!!c,inputMode:"text",label:"enter your message",onChange:function(e){return S(e.currentTarget.value)},helperText:c,onKeyPress:function(e){T(g()),null!==c&&s(null),13===e.charCode&&U()}}),r.a.createElement(C,{sendMessage:U},"Send Message"))))},A=n(80),H=n.n(A),D=n(81),K=n.n(D);var W=function(){var e={backgroundImage:"url(".concat(K.a,")")};return r.a.createElement("div",{style:e,className:H.a.App},r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(25),B=n(82),J=Object(q.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"messages-received":return Object(l.a)({},e,{messages:t.messages});case"new-messages-received":return Object(l.a)({},e,{messages:[].concat(Object(o.a)(e.messages),[t.message]),typingUsers:e.typingUsers.filter((function(e){return e.id!==t.message.user.id}))});case"typingUserAdded":return Object(l.a)({},e,{typingUsers:[].concat(Object(o.a)(e.typingUsers.filter((function(e){return e.id!==t.user.id}))),[t.user])});default:return e}}}),L=Object(q.d)(J,Object(q.a)(B.a));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,{store:L},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports={cloud:"Message_cloud__2XHLC",wrapper:"Message_wrapper__24nb1",before:"Message_before__f6bjM",name:"Message_name__2MOYi",text:"Message_text__2mWN5",time:"Message_time__33AfH"}},51:function(e,t,n){e.exports={Chat:"Chat_Chat__LIjdK",Message:"Chat_Message__2SoSG"}},78:function(e,t,n){e.exports=n.p+"static/media/chat.0af77419.jpg"},80:function(e,t,n){e.exports={App:"App_App__lTcle"}},81:function(e,t,n){e.exports=n.p+"static/media/wall.1b810d41.jpg"},88:function(e,t,n){e.exports=n(124)},93:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.3e368832.chunk.js.map