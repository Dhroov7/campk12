(this["webpackJsonpcampk12-project"]=this["webpackJsonpcampk12-project"]||[]).push([[1],{188:function(e,t,a){e.exports=a.p+"static/media/profile.d346f6b8.jpg"},211:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAdBJREFUKBVdUstu2zAQHL4kWUrcFDB66F/klJs/yxcfkgLNJT+S//AtTYF8Qi5NEKCpW1uyJFJ8dOiiRVACCy2F2Z3ZWQq8Oc6583ZwKx/TMiEtJPAahdiURt68b5qHv1CRk5SS7vpx3blpHUI0iAnaKGglMY4TpJSTUvL6w9nJZyFE0LmoG92aDFc+ReQuSgkUSoEASOYhJhO8v3rZdhn+SWRJv/rxzrpoiMN8VqEw+liQETFGWDehs47FYiq1vtA+pJWbKIkU82YG/kSS7B5iroFhA8luiaxtb83k/UraGJYhAXWhUBHwvD3gy/0j9mNAawPuvz5iuxtQsJnRCmy1lBx6QStQlSWkkDQFCD5BkE3wThXwlEgiKJ0nTgux7/qnn739OK8LnDU1xilg6N3RtSyvqgzqpswWY3cY4Hx8lkaJDQ3CYD27BkpUmJ9WePn2g7HFO+alzowTfAiglo1wKZ3v2+5uHL0pC43TWQlN7YfWZiLUJwVG57kWS3PS1NTmQhZCPDRlda3ZbSAT7cee4SVnYezy/U9BNuL638vIL+Iw2MvXXevaw5C4l+Qmf4ycb9vefd8dLonjJv87edHO+9sQwhP3ZBn8hts8wlvob15UJDz7DARGAAAAAElFTkSuQmCC"},226:function(e,t,a){e.exports=a.p+"static/media/shape.105f0e6e.svg"},228:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAGVJREFUCB1j/P//PxMDA0MsEPMBMSsQswDxLAagRC4QywI5ILYxEG8FYi6wBEgQBIAC7FCanxHK4QYKvGdkBHH/8wDZYSBVxUDcDsQgUWYgrgZiQRAnAqjiJxDLADHIIauBOp8BABmeP885DEZPAAAAAElFTkSuQmCC"},229:function(e,t,a){e.exports=a.p+"static/media/plus.c7806b0f.svg"},233:function(e,t,a){e.exports=a(424)},242:function(e,t,a){},396:function(e,t,a){},397:function(e,t,a){},398:function(e,t,a){},399:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},424:function(e,t,a){"use strict";a.r(t);var n=a(183),s=a(231),c=a(12),r=a.n(c),l=a(185),o=a.n(l),i=a(186),m=a(201),u=a(113),d=a(114),p=a(117),h=a(116),b=(a(242),a(226)),f=a.n(b),v=a(188),g=a.n(v),E=a(501),A=a(502),N=a(503),y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{fluid:!0,className:"removePadding"},r.a.createElement(A.a,{style:{marginTop:"14px"}},r.a.createElement(N.a,{sm:2,style:{marginLeft:"2%"}},r.a.createElement("div",{className:"AI-playground"},"AI playground")),r.a.createElement(N.a,{sm:6,className:" noPadding"}),r.a.createElement(N.a,{className:"noPadding"},r.a.createElement("div",{className:"Learn-AI"},"Learn AI")),r.a.createElement(N.a,{sm:!0,className:"noPadding"},r.a.createElement("div",{className:"Docs"},"Docs")),r.a.createElement(N.a,{sm:2,className:"noPadding",style:{marginRight:"25px"}},r.a.createElement("div",{className:"Mask"},r.a.createElement("img",{className:"userPhoto",alt:"User",src:g.a})),r.a.createElement("div",{className:"Account"},"Account"),r.a.createElement("img",{className:"Shape",src:f.a,alt:"down arrow"}))))}}]),a}(c.Component),x=a(100),O=a.n(x),T=a(137),S=a(187),w=a(210),C=a.n(w),k=(a(396),a(228)),j=a.n(k),B=a(159),D=a(229),U=a.n(D),L=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).editorDidMount=function(e,t){e.focus()},n.onChange=function(e,t){n.codeString=e},n.changeTabName=function(e,t){"Enter"===e.key&&(n.props.dispatch({type:"changeTabName",payload:{id:t,name:n.state.tabTitle}}),n.tabState={id:null,state:"title"})},n.handleFocusOut=function(e,t){n.tabState={id:t,state:"title"}},n.handleTabName=function(e){n.tabState={id:e,state:"input"},console.log("here")},n.tabTitle=function(e,t){return"input"===n.tabState.state&&n.tabState.id===t?r.a.createElement("input",{className:"tabTitle inputBox",onKeyDown:function(e){return n.changeTabName(e,t)},onChange:function(e){return n.setState({tabTitle:e.target.value})},onBlur:function(e){return n.handleFocusOut(e,t)}}):r.a.createElement("p",{className:"tabTitle",style:{paddingRight:"3px"},onDoubleClick:function(){return n.handleTabName(t)}},e)},n.saveCodeChanges=Object(T.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===+(t=n.state.activeTab)?n.props.saveCode(n.codeString):n.props.dispatch({type:"changeTabCode",payload:{code:n.codeString,id:t}});case 2:case"end":return e.stop()}}),e)}))),n.addTab=Object(T.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.dispatch({type:"addTab"});case 1:case"end":return e.stop()}}),e)}))),n.closeTab=function(){var e=Object(T.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.dispatch({type:"removeTab",payload:{id:t.target.id}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleTabSelect=function(){var e=Object(T.a)(O.a.mark((function e(t,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({activeTab:t});case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.codeString=e.code,n.tabState={id:null,state:"title"},n.state={activeTab:0,tabTitle:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.code,a={scrollbar:{useShadows:!1,verticalScrollbarSize:0,vertical:"hidden",horizontal:"hidden"},minimap:{enabled:!1},parameterHints:{enabled:!0},scrollBeyondLastLine:!1,renderLineHighlight:"none"},n=[],s=[];return this.props.tabs.map((function(t){n.push(r.a.createElement(B.c,{key:t.id},r.a.createElement(C.a,{width:"450",height:"581",language:"javascript",theme:"vs-dark",value:t.code,options:a,onChange:e.onChange,editorDidMount:e.editorDidMount,id:t.id}))),s.push(r.a.createElement(B.a,{className:"tabTitleBox",key:t.id,onClick:function(a){return e.handleTabSelect(t.id,a)}},e.tabTitle(t.name,t.id),r.a.createElement("button",{className:"closeBtn",onClick:e.closeTab,id:t.id},"x")))})),r.a.createElement("div",{className:"code-editor"},r.a.createElement("div",{className:"monacoEditor"},r.a.createElement(B.d,null,r.a.createElement(E.a,{fluid:!0,className:"removePadding"},r.a.createElement(A.a,null,r.a.createElement(N.a,{sm:8},r.a.createElement(B.b,{className:"tabList ml-3"},r.a.createElement(B.a,{className:"tabTitleBox",onClick:function(t){return e.handleTabSelect("0",t)},id:"0"},r.a.createElement("p",{className:"tabTitle"},"script.js")),s,r.a.createElement("button",{onClick:this.addTab,className:"plusBtn"},r.a.createElement("img",{src:U.a,alt:"plusButton"})))),r.a.createElement(N.a,{sm:2},r.a.createElement("button",{className:"saveChangesBtn",onClick:this.saveCodeChanges,style:{backgroundColor:"#1f1f1f"}},r.a.createElement("img",{src:j.a,className:"refresh",alt:"refreshButton"}),r.a.createElement("div",{className:"btnText"},"Apply Changes"))))),r.a.createElement("hr",{className:"hl"}),r.a.createElement(B.c,null,r.a.createElement(C.a,{width:"450",height:"581",language:"javascript",theme:"vs-dark",value:t,options:a,onChange:this.onChange,editorDidMount:this.editorDidMount})),n,";")))}}]),a}(c.Component),R=Object(m.b)((function(e){return{tabs:e.tabs}}))(L),Q=(a(397),a(398),a(211)),J=a.n(Q),M=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).messageType=function(){return"bot"===e.props.sender?"..."===e.props.value?r.a.createElement("li",{className:"messageOuterBox"},r.a.createElement("div",{className:"listBox",style:{right:"20px"}},r.a.createElement("div",{className:"message"},r.a.createElement("div",{id:"wave"},r.a.createElement("span",{className:"dot"},"."),r.a.createElement("span",{className:"dot"},"."),r.a.createElement("span",{className:"dot"},"."))),r.a.createElement("img",{className:"bot",src:J.a,style:{marginLeft:"10px"},alt:"chatbot"}))):r.a.createElement("li",{className:"messageOuterBox"},r.a.createElement("div",{className:"listBox",style:{right:"20px"}},r.a.createElement("div",{className:"message"},r.a.createElement("p",{className:"messageText"},e.props.value)),r.a.createElement("img",{className:"bot",src:J.a,style:{marginLeft:"10px"},alt:"chatbot"}))):r.a.createElement("li",{className:"messageOuterBox"},r.a.createElement("div",{className:"listBox",style:{left:"20px"}},r.a.createElement("img",{className:"bot",src:g.a,style:{marginRight:"10px"},alt:"chatbot"}),r.a.createElement("div",{className:"message"},r.a.createElement("p",{className:"messageText"},e.props.value))))},e}return Object(d.a)(a,[{key:"render",value:function(){return this.messageType()}}]),a}(c.Component),F=(a(399),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).scrollToBottom=function(){e.messagesEnd.scrollIntoView({behavior:"smooth"})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"chat"},this.props.chat.map((function(e,t){return r.a.createElement(M,{value:e.value,sender:e.sender,key:t})})),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),a}(c.Component)),I=a(230),P=a.n(I),Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={userMessage:"",chat:[],chatBotResponse:""},e.handleSubmit=function(){var t=Object(T.a)(O.a.mark((function t(a){var n,s,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==a.key){t.next=17;break}if(!e.state.userMessage){t.next=17;break}return a.preventDefault(),t.next=5,e.setState({chat:e.state.chat.concat({sender:"user",value:e.state.userMessage}),userMessage:""});case 5:return n=e.createFunctionExpression(e.props.code,e.state.chat[e.state.chat.length-1].value),t.next=8,e.setState({chat:e.state.chat.concat({sender:"bot",value:"..."})});case 8:return t.next=10,P.a.post("https://shrouded-oasis-94153.herokuapp.com/",{code:n});case 10:return s=t.sent,(c=e.state.chat).pop(),t.next=15,e.setState({chat:c});case 15:return t.next=17,e.setState({chat:e.state.chat.concat({sender:"bot",value:s.data?s.data:"Sorry, but i don't know the answer."})});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.createFunctionExpression=function(e,t){String.prototype.splice=function(e,t,a){return this.slice(0,e)+a+this.slice(e+Math.abs(t))};var a=e.indexOf("function"),n=(e=e.splice(a,0,"(")).lastIndexOf("}");return e=e.splice(n+1,0,")('".concat(t,"')"))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state.chat;return r.a.createElement("div",{className:"chatBot"},r.a.createElement("div",{className:"chatBotContainer mb-3"},r.a.createElement(F,{chat:t})),r.a.createElement("div",null,r.a.createElement("input",{className:"textBox",name:"userMessage",value:this.state.userMessage,type:"text",placeholder:"Type message here...",onChange:function(t){e.setState({userMessage:t.target.value})},onKeyDown:this.handleSubmit})))}}]),a}(c.Component),H=(a(416),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).saveCode=function(){var t=Object(T.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({code:a});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={code:"function name (param) {return param;}"},e.saveCode=e.saveCode.bind(Object(S.a)(e)),e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{fluid:!0,className:"removePadding h-100"},r.a.createElement(A.a,{className:"h-100"},r.a.createElement(N.a,{sm:5,style:{paddingRight:"0px"},className:"mt-1"},r.a.createElement(R,{saveCode:this.saveCode,code:this.state.code})),r.a.createElement(N.a,{sm:1,className:"removePadding"},r.a.createElement("div",{className:"vl"})),r.a.createElement(N.a,{sm:5,style:{marginTop:"10%"}},r.a.createElement(Y,{code:this.state.code}))))}}]),a}(c.Component)),K=(a(417),function(){return r.a.createElement("div",{className:"App h-100"},r.a.createElement(E.a,{fluid:!0,className:"removePadding h-100"},r.a.createElement(A.a,null,r.a.createElement(N.a,{sm:12},r.a.createElement(y,null))),r.a.createElement(A.a,{style:{marginBottom:"0px"}},r.a.createElement(N.a,{sm:12},r.a.createElement("hr",{className:"Line-2",style:{marginBottom:"0px"}}))),r.a.createElement(A.a,{className:"h-100"},r.a.createElement(N.a,{sm:12},r.a.createElement(H,null)))))}),W=(a(418),a(419),0),G=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tabs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addTab":return{tabs:[].concat(Object(s.a)(e.tabs),[{id:++W,name:"newtab"+W+".js",code:"/* This is an empty tab.*/"}])};case"removeTab":return{tabs:e.tabs.filter((function(e){return e.id!==+t.payload.id}))};case"changeTabName":return{tabs:e.tabs.map((function(e){return e.id!==+t.payload.id?e:Object(n.a)(Object(n.a)({},e),{},{name:t.payload.name})}))};case"changeTabCode":return{tabs:e.tabs.map((function(e){return e.id!==+t.payload.id?e:Object(n.a)(Object(n.a)({},e),{},{code:t.payload.code})}))};default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(m.a,{store:G},r.a.createElement(K,null)),document.getElementById("root"))}},[[233,2,3]]]);
//# sourceMappingURL=main.cfbdc201.chunk.js.map