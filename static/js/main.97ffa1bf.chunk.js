(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),l=a.n(i),c=(a(58),a(106)),o=a(108),s=a(107),u=a(33),m=a.n(u),p=function(e){return r.a.createElement("button",{type:e.type,onClick:e.onclick,className:m.a.btn},e.children)},h=a(11),d=a(12),f=a.n(d),E=a(105),_=a(17),g=a.n(_),v=function(e){return r.a.createElement(E.a,{to:e.href,className:f()(g.a.link,Object(h.a)({},g.a.blackLink,e.className))},e.children)},b=a(18),k=a.n(b),C=function(){return r.a.createElement("header",{className:k.a.header},r.a.createElement("nav",{className:k.a.menu},r.a.createElement(v,{href:"/"},"Home"),r.a.createElement(v,{href:"/info"},"About")),r.a.createElement(p,{type:"submit"},"LOGOUT"))},O=a(34),w=a.n(O),L=function(){return r.a.createElement("footer",{className:w.a.footer})},j=a(35),y=a.n(j),N=function(e){return r.a.createElement("aside",{className:y.a.leftMenu},e.leftMenuContent.map(function(e){return r.a.createElement(v,Object.assign({className:"blackLink"},e),e.label)}))},S=a(36),x=a(19),M=a.n(x),P=function(e){var t=e.children;return r.a.createElement("div",{className:M.a.template},r.a.createElement(C,null),r.a.createElement("div",{className:M.a.rowContainer},r.a.createElement(N,{leftMenuContent:S}),t),r.a.createElement(L,null))},R=a(6),A=a(7),T=a(9),I=a(8),F=a(10),D=a(20),G=a.n(D),U=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={isShown:!1},a.handleClick=function(){a.setState(function(e){return{isShown:!e.isShown}})},a}return Object(F.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:G.a.card},r.a.createElement("div",{className:G.a.head},r.a.createElement("h4",null,this.props.title),r.a.createElement(p,{onclick:this.handleClick,type:"button"},!1===this.state.isShown?"open":"close")),this.state.isShown&&r.a.createElement("p",null,this.props.text))}}]),t}(n.Component),V=a(37),q=a.n(V),z=function(e){var t=e.children;return r.a.createElement("title",{className:q.a.title},t)},B=a(38),Q=a.n(B),H=function(e){var t=e.children;return r.a.createElement("div",{className:Q.a.cardList},r.a.createElement(z,null,"ARTICLES"),t.map(function(e){return r.a.createElement(U,e)}))},K=a(39),J=function(){return r.a.createElement(P,null,r.a.createElement(H,null,K))},Y=a(40),Z=a.n(Y),W=function(e){var t=e.children;return r.a.createElement("section",{className:Z.a.contentSection},t)},X=function(){return r.a.createElement(P,null,r.a.createElement(W,null,r.a.createElement(z,null,"home"),r.a.createElement("p",null,"https://ReginaGimazova.github.io/FS_project")))},$=function(){return r.a.createElement(P,null,r.a.createElement(W,null,r.a.createElement(z,null,"info")))},ee=function(){return r.a.createElement(P,null,r.a.createElement(W,null,r.a.createElement(z,null,"Profile")))},te=a(41),ae=a.n(te),ne=function(){return r.a.createElement("section",{className:ae.a.errorSection},r.a.createElement("h1",null,"404 ERROR"),r.a.createElement("h2",null,"PAGE NOT FOUND"))},re=function(e){function t(){return Object(R.a)(this,t),Object(T.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement("p",null,"login page")}}]),t}(n.Component),ie=a(51),le=a(13),ce=a.n(le),oe=a(21),se=a.n(oe),ue=a(42),me=a.n(ue),pe=function(e){var t=e.children;return r.a.createElement("div",{key:t.id,className:me.a.marvelCard},r.a.createElement("img",{alt:"",src:"".concat(t.thumbnail.path,"/portrait_xlarge.").concat(t.thumbnail.extension)}),r.a.createElement(v,{href:"/marvel/".concat(t.id),className:"leftMenuLink"},t.name))},he=a(43),de=a.n(he),fe=function(e){var t=e.children;return r.a.createElement("div",{className:de.a.mrvGallery},t.map(function(e){return r.a.createElement(pe,null,e)}))},Ee=a(44),_e=a.n(Ee),ge=function(e){return r.a.createElement("ul",{className:_e.a.pagination},e.children.map(function(e){return r.a.createElement("li",null,e)}))},ve=a(45),be=a.n(ve),ke=function(e){return r.a.createElement("div",{className:be.a.pageLink},r.a.createElement(E.a,{to:e.href},e.children))},Ce=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:!1,data:[],total:0},a.fetch=function(){a.setState({loading:!0,error:!1}),ce.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"https://ReginaGimazova.github.io/FS_project"}).REACT_APP_MARVEL_PATH,"/v1/public/characters"),{params:{apikey:Object({NODE_ENV:"production",PUBLIC_URL:"https://ReginaGimazova.github.io/FS_project"}).REACT_APP_MARVEL_API_KEY,limit:20,offset:20*(a.returnPage()-1)}}).then(function(e){a.setState({loading:!1,data:Object(ie.a)(e.data.data.results),total:e.data.data.total})}).catch(function(){a.setState({loading:!1,error:!0})})},a}return Object(F.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(e,t){e.location.search!==this.props.location.search?this.fetch():console.log("not update")}},{key:"countOfPages",value:function(){return Math.ceil(this.state.total/20)}},{key:"returnPage",value:function(){return se.a.parse(this.props.location.search)["?page"]}},{key:"returnQueryString",value:function(e){return se.a.stringify({page:e},{addQueryPrefix:!0})}},{key:"render",value:function(){this.countOfPages();return r.a.createElement(P,null,r.a.createElement(W,null,r.a.createElement(z,null,"Marvel Characters"),r.a.createElement(fe,null,this.state.data),this.state.loading&&"Loading...",!this.state.loading&&!this.state.error&&0===this.state.data.length&&"Empty",this.state.error&&r.a.createElement("div",null,r.a.createElement("p",null,"Loading error"),r.a.createElement("button",{type:"button",onClick:this.fetch},"reload")),!this.state.loading&&!this.state.error&&r.a.createElement(ge,null,r.a.createElement(ke,{href:"/marvel/characters?page=1"},"1"),r.a.createElement(ke,{href:"/marvel/characters?page=2"},"2"),r.a.createElement(ke,{href:"/marvel/characters?page=3"},"3"))))}}]),t}(n.Component),Oe=function(){return r.a.createElement(P,null,r.a.createElement(W,null,r.a.createElement(v,{href:"/marvel/characters",className:"blackLink"},"Marvel characters"),r.a.createElement(v,{href:"/marvel/creators",className:"blackLink"},"Marvel creators"),r.a.createElement(v,{href:"/marvel/stories",className:"blackLink"},"Marvel stories"),r.a.createElement(v,{href:"/marvel/comics",className:"blackLink"},"Marvel comics"),r.a.createElement(v,{href:"/marvel/events",className:"blackLink"},"Marvel events")))},we=a(46),Le=a.n(we),je=function(e){var t=e.children;return r.a.createElement("div",{className:Le.a.formTemplate},t)},ye=a(52),Ne=a(22),Se=a.n(Ne),xe=function(e){var t=e.error,a=Object(ye.a)(e,["error"]);return r.a.createElement("input",Object.assign({className:f()(Se.a.input,Object(h.a)({},Se.a.error,t))},a))};xe.defaultProps={error:!1};var Me=xe,Pe=a(47),Re=a.n(Pe),Ae=function(e){return r.a.createElement("label",Object.assign({className:Re.a.label},e),e.children)},Te=a(48),Ie=a.n(Te),Fe=function(e){var t=e.children;return r.a.createElement("div",{className:Ie.a.formControl},t)},De=a(49),Ge=a.n(De),Ue=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).initialState={email:"",password:"",passwordRepeat:""},a.state=a.initialState,a.handleChange=function(e){a.setState(Object(h.a)({},e.target.name,e.target.value))},a.handlerPasswordChange=function(e){var t=e.target.value.replace(/[^0-9]/,"");a.setState(Object(h.a)({},e.target.name,t))},a.handleSubmit=function(e){e.preventDefault(),a.setState(a.initialState),console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0444\u043e\u0440\u043c\u044b")},a.validateEmail=function(){var e=a.state.email;return 0!==e.length&&!/^.*@.*\..+$/.test(e)},a}return Object(F.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){return r.a.createElement(je,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:Ge.a.form},r.a.createElement(z,null,"Registration"),r.a.createElement(Fe,null,r.a.createElement(Ae,{htmlFor:"email"},"email"),r.a.createElement(Me,{type:"email",value:this.state.email,id:"email",name:"email",error:this.validateEmail,onChange:this.handleChange})),r.a.createElement(Fe,null,r.a.createElement(Ae,{htmlFor:"password"},"password"),r.a.createElement(Me,{type:"password",id:"password",name:"password",value:this.state.password,onChange:this.handlerPasswordChange})),r.a.createElement(Fe,null,r.a.createElement(Ae,{htmlFor:"repeatPassword"},"repeat password"),r.a.createElement(Me,{type:"password",id:"repeatPassword",name:"passwordRepeat",value:this.state.passwordRepeat,onChange:this.handlerPasswordChange})),r.a.createElement(p,{type:"submit"},"Send"),r.a.createElement(v,{href:"/login",className:"leftMenuLink"}," Are you registered? log in")))}}]),t}(n.Component),Ve=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(T.a)(this,(e=Object(I.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,error:!1,data:null},a.id=a.props.match.params.id,a.fetch=function(){a.setState({loading:!0,error:!1,data:null}),ce.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"https://ReginaGimazova.github.io/FS_project"}).REACT_APP_MARVEL_PATH,"/v1/public/characters/").concat(a.id),{params:{apikey:Object({NODE_ENV:"production",PUBLIC_URL:"https://ReginaGimazova.github.io/FS_project"}).REACT_APP_MARVEL_API_KEY}}).then(function(e){a.setState({loading:!1,error:!1,data:e.data.data.results[0]})}).catch(function(){a.setState({loading:!1,error:!0})})},a}return Object(F.a)(t,e),Object(A.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.fetch()},1e3)}},{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(W,null,r.a.createElement(z,null,"Marvel character"),this.state.loading&&"loading",!this.state.loading&&!this.state.error&&null===this.state.data&&"Empty",this.state.error&&r.a.createElement("div",null,r.a.createElement("p",null,"error"),r.a.createElement("button",{type:"button",onClick:this.fetch},"reload")),null!==this.state.data&&r.a.createElement("div",{key:this.state.data.id},r.a.createElement(z,null,this.state.data.name),r.a.createElement("p",null,this.state.data.description))))}}]),t}(n.Component),qe=function(){return r.a.createElement(c.a,{basename:"https://ReginaGimazova.github.io/FS_project"},r.a.createElement(o.a,null,r.a.createElement(s.a,{path:"/",component:X,exact:!0}),r.a.createElement(s.a,{path:"/news",component:J,exact:!0}),r.a.createElement(s.a,{path:"/info",component:$,exact:!0}),r.a.createElement(s.a,{path:"/profile",component:ee,exact:!0}),r.a.createElement(s.a,{path:"/registration",component:Ue,exact:!0}),r.a.createElement(s.a,{path:"/marvel",component:Oe,exact:!0}),r.a.createElement(s.a,{path:"/marvel/characters",component:Ce}),r.a.createElement(s.a,{path:"/marvel/characters/:id",component:Ve,exact:!0}),r.a.createElement(s.a,{path:"/authentication",component:re}),r.a.createElement(s.a,{component:ne,exact:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,a){e.exports={link:"MenuLink_link__3wos_",blackLink:"MenuLink_blackLink__3D2EF",centralizedLink:"MenuLink_centralizedLink__pCkUX"}},18:function(e,t,a){e.exports={header:"Header_header__3Zr4P",menu:"Header_menu__2IMQ3"}},19:function(e,t,a){e.exports={template:"MainTemplate_template__3QHOC",rowContainer:"MainTemplate_rowContainer__2XVQj",colContainer:"MainTemplate_colContainer__3PkcU"}},20:function(e,t,a){e.exports={card:"Card_card__1-mlK",head:"Card_head__2d8wN",btn:"Card_btn__18q7C"}},22:function(e,t,a){e.exports={input:"Input_input__1bG3O",error:"Input_error__1G6x9"}},33:function(e,t,a){e.exports={btn:"Button_btn__24n5a"}},34:function(e,t,a){e.exports={footer:"Footer_footer__u_1bJ"}},35:function(e,t,a){e.exports={leftMenu:"LeftMenu_leftMenu__2SK6D"}},36:function(e){e.exports=[{label:"Profile",href:"/profile"},{label:"News",href:"/news"},{label:"Marvel",href:"/marvel"}]},37:function(e,t,a){e.exports={title:"Title_title__-KRKR"}},38:function(e,t,a){e.exports={cardList:"CardList_cardList__xgEhx"}},39:function(e){e.exports=[{title:"ARTICLE1",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tristique turpis, id bibendum urna. Mauris dolor urna, feugiat vitae faucibus non, porttitor at augue. Sed finibus efficitur purus elementum fringilla. Duis suscipit diam eget urna facilisis ornare. Sed felis nunc, fringilla molestie enim semper, interdum varius tellus. Maecenas sit amet justo nec nisl mattis iaculis. Integer ultricies laoreet mattis. Integer vitae tortor nunc."},{title:"ARTICLE2",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tristique turpis, id bibendum urna. Mauris dolor urna, feugiat vitae faucibus non, porttitor at augue. Sed finibus efficitur purus elementum fringilla. Duis suscipit diam eget urna facilisis ornare. Sed felis nunc, fringilla molestie enim semper, interdum varius tellus. Maecenas sit amet justo nec nisl mattis iaculis. Integer ultricies laoreet mattis. Integer vitae tortor nunc."},{title:"ARTICLE3",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis tristique turpis, id bibendum urna. Mauris dolor urna, feugiat vitae faucibus non, porttitor at augue. Sed finibus efficitur purus elementum fringilla. Duis suscipit diam eget urna facilisis ornare. Sed felis nunc, fringilla molestie enim semper, interdum varius tellus. Maecenas sit amet justo nec nisl mattis iaculis. Integer ultricies laoreet mattis. Integer vitae tortor nunc."}]},40:function(e,t,a){e.exports={contentSection:"CommonContent_contentSection__1QbqP"}},41:function(e,t,a){e.exports={errorSection:"ErrorPage_errorSection__2-ZvP"}},42:function(e,t,a){e.exports={marvelCard:"MarvelCard_marvelCard__3qs1T"}},43:function(e,t,a){e.exports={mrvGallery:"MarvelGallery_mrvGallery__3Fa1Y"}},44:function(e,t,a){e.exports={pagination:"PaginationComponent_pagination__1lwiz"}},45:function(e,t,a){e.exports={pageLink:"PaginationLink_pageLink__28qZP"}},46:function(e,t,a){e.exports={formTemplate:"FormTemplate_formTemplate__2CVww"}},47:function(e,t,a){e.exports={label:"Label_label__1vseT"}},48:function(e,t,a){e.exports={formControl:"FormControl_formControl__32TVm"}},49:function(e,t,a){e.exports={form:"Registration_form__CLQsk"}},53:function(e,t,a){e.exports=a(104)},58:function(e,t,a){}},[[53,2,1]]]);
//# sourceMappingURL=main.97ffa1bf.chunk.js.map