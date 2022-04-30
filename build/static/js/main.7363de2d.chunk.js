(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(21),s=n.n(r),o=(n(27),n(10)),i=n(4),l=n(5),u=n.n(l),j=(n(29),n(11)),b=n.n(j),d={cpp:'#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout<<"Hello world";\n\treturn 0;\n}\n',c:'#include <stdio.h>\n\nint main() {\n\tprintf("Hello world");\n\treturn 0;\n}\n',py:'print("Hello world")'},p=d,h=(n(48),n(49),n(50),n(51),n(52),n(53),n(55),n(56),n(20),n(57),n(58),n(22)),O=n(0);var x=function(e){var t=e.language,n=e.value,c=e.onChange;switch(t){case"py":t="text/x-python";break;case"c":t="text/x-csrc";break;case"cpp":t="text/x-c++src";break;default:t=""}return Object(O.jsx)("div",{children:Object(O.jsx)(h.Controlled,{value:n,onBeforeChange:function(e,t,n){c(n),e.showHint({completeSingle:!1})},options:{tabSize:4,lineWrapping:!0,lint:!0,mode:t,theme:"monokai",fixedGutter:!0,foldGutter:!0,lineNumbers:!0,autoCloseTags:!0,autoCloseBrackets:!0,matchBrackets:!0,smartIndent:!0,extraKeys:{"Ctrl-Space":"autocomplete"},autoRefresh:!0}})})},f=n(8),g=n.n(f);var m=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("cpp"),s=Object(i.a)(r,2),l=s[0],j=s[1],d=Object(c.useState)(""),h=Object(i.a)(d,2),f=h[0],m=h[1],v=Object(c.useState)(""),w=Object(i.a)(v,2),S=w[0],k=w[1],C=Object(c.useState)(""),y=Object(i.a)(C,2),I=y[0],N=y[1],E=Object(c.useState)(""),A=Object(i.a)(E,2),B=A[0],H=A[1],J=Object(c.useState)(null),G=Object(i.a)(J,2),L=G[0],P=G[1];Object(c.useEffect)((function(){var e=localStorage.getItem("defaultLanguage")||"cpp";j(e)}),[]),Object(c.useEffect)((function(){a(p[l])}),[l]);var R=function(){var e=Object(o.a)(u.a.mark((function e(){var t,c,a,r,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={language:l,code:n,input:S},e.prev=1,H(""),N(""),m(""),e.next=7,b.a.post("http://3.110.132.235/run",t);case 7:c=e.sent,a=c.data,console.log(a),H(a.jobId),r=setInterval(Object(o.a)(u.a.mark((function e(){var t,n,c,s,o,i,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://3.110.132.235/status",{params:{id:a.jobId}});case 2:if(t=e.sent,n=t.data,c=n.success,s=n.job,o=n.error,!c){e.next=15;break}if(i=s.status,l=s.output,N(i),P(s),"pending"!==i){e.next=11;break}return e.abrupt("return");case 11:m(l),clearInterval(r),e.next=19;break;case 15:N("Error: Please retry"),console.log(o),m(o),clearInterval(r);case 19:case"end":return e.stop()}}),e)}))),1e3),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),(s=e.t0.response)?(i=s.data,m(i)):m("Error Connecting to server");case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("h1",{children:"Online Code Compiler"}),Object(O.jsxs)("div",{className:"language",children:[Object(O.jsx)("i",{children:"Language:"}),Object(O.jsxs)("select",{className:"custom-select",style:{width:"80px"},value:l,onChange:function(e){window.confirm("Are you sure you want to change language? WARNING: Your current code will be lost.")&&j(e.target.value)},children:[Object(O.jsx)("option",{value:"cpp",children:"C++"}),Object(O.jsx)("option",{value:"c",children:"C"}),Object(O.jsx)("option",{value:"py",children:"Python"})]}),Object(O.jsx)("button",{className:"btn btn-set",onClick:function(){localStorage.setItem("defaultLanguage",l)},children:"Set Default"})]}),Object(O.jsx)("div",{className:"codeEditor",children:Object(O.jsx)(x,{language:l,value:n,onChange:a})}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"inout",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Input"}),Object(O.jsx)("textarea",{rows:"8",cols:"25",value:S,onChange:function(e){k(e.target.value)}})]}),Object(O.jsxs)("div",{children:[f&&Object(O.jsx)("h3",{children:"Output"}),Object(O.jsx)("p",{children:f}),Object(O.jsx)("p",{children:B&&"Job Id ".concat(B)}),Object(O.jsx)("p",{children:function(){if(!L)return"";var e=L.submittedAt,t=L.startedAt,n=L.completedAt,c="";if(e=g()(e).toString(),c+="Job Submitted At: ".concat(e,"  "),!t||!n)return c;var a=g()(t),r=g()(n).diff(a,"seconds",!0);return c+="Execution Time: ".concat(r,"s")}()}),Object(O.jsx)("p",{children:I})]})]}),Object(O.jsx)("div",{className:"submit",children:Object(O.jsx)("button",{className:"btn btn-primary",onClick:R,children:"Submit"})})]})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.7363de2d.chunk.js.map