(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,,,,function(e,t,a){e.exports={makerWheat:"wheat",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerBlack:"black",makerWhite:"white",makerShadow:"rgba(217,217,217,1)",card:"card_card__29_yT",dark:"card_dark__12VlE",light:"card_light__2XF_g",colorful:"card_colorful__2hkmX",avatar:"card_avatar__2UUzp",info:"card_info__2_Jwl",name:"card_name__3XRZG",company:"card_company__3J6Pu",title:"card_title__n6uOZ",email:"card_email__Q4sUw",message:"card_message__WxoYJ"}},,function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__tuPGm",input:"card_add_form_input__3F_OA",textarea:"card_add_form_textarea__U9-UB",select:"card_add_form_select__3dfYm",button:"card_add_form_button__4hCIi",fileInput:"card_add_form_fileInput__uOP2-"}},function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__21knb",input:"card_edit_form_input__14w6r",textarea:"card_edit_form_textarea__10G39",select:"card_edit_form_select__Kehi2",button:"card_edit_form_button__3d2AX",fileInput:"card_edit_form_fileInput__30tip"}},function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__1K8Lz",list:"login_list__3xv11",item:"login_item__X-SC8",button:"login_button__1DvB_"}},function(e,t,a){e.exports={makerLightPink:"#ffeae8",makerPink:"pink",makerLightGrey:"#e8e7e6",container:"image_file_input_container__2wiiF",input:"image_file_input_input__2P_fN",button:"image_file_input_button__3BC6N",grey:"image_file_input_grey__3vNBU",pink:"image_file_input_pink__2zNvC",loading:"image_file_input_loading__3TBrC",spin:"image_file_input_spin__3FtIK"}},,,,,function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",header:"header_header__2LqPp",logo:"header_logo__3rl6J",title:"header_title__cyLYK",logout:"header_logout__3Ljsm"}},,,,,function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__2K8I2",title:"preview_title__TzDDz",cards:"preview_cards__3u_bS"}},,,,,function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",footer:"footer_footer__2F_SR",title:"footer_title__25LmC"}},,function(e,t,a){e.exports={makerGreen:"#385461",makerLightGray:"undefined",editor:"editor_editor__1wkpQ",title:"editor_title__2P4Hw"}},function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1wqKg",container:"maker_container__2ztBo"}},,,,,function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__2kTiN"}},function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__3CJxt"}},,,,,function(e,t,a){e.exports={makerWhite:"white"}},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(1),c=a.n(r),i=a(32),o=a.n(i),l=(a(39),a(2)),s=a(33),u=a.n(s),d=a(25),m=a.n(d),j=a(0),_=Object(r.memo)((function(){return Object(j.jsx)("footer",{className:m.a.footer,children:Object(j.jsx)("p",{className:m.a.title,children:"Code your dream"})})})),f=a(15),p=a.n(f),b=Object(r.memo)((function(e){var t=e.onLogout;return Object(j.jsxs)("header",{className:p.a.header,children:[t&&Object(j.jsx)("button",{className:p.a.logout,onClick:t,children:"Logout"}),Object(j.jsx)("img",{className:p.a.logo,src:"/card-maker/images/logo.png",alt:"logo"}),Object(j.jsx)("h1",{className:p.a.title,children:"Business Card Maker"})]})})),h=a(9),O=a.n(h),x=function(e){var t=e.authService,a=Object(l.f)(),n=function(e){a({pathname:"/maker",state:{id:e}})},c=function(e){t.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.id)}))})),Object(j.jsxs)("section",{className:O.a.login,children:[Object(j.jsx)(b,{}),Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("ul",{className:O.a.list,children:[Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,onClick:c,children:"Google"})}),Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,onClick:c,children:"Github"})})]})]}),Object(j.jsx)(_,{})]})},g=a(3),k=a(26),v=a(34),N=a.n(v),y=Object(r.memo)((function(e){var t=e.name,a=e.onClick;return Object(j.jsx)("button",{className:N.a.button,onClick:a,children:t})})),C=a(7),w=a.n(C),I=Object(r.memo)((function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),s=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useState)({fileName:null,fileURL:null}),m=Object(g.a)(d,2),_=m[0],f=m[1];return Object(j.jsxs)("form",{ref:n,className:w.a.form,children:[Object(j.jsx)("input",{ref:c,className:w.a.input,type:"text",name:"name",placeholder:"Name"}),Object(j.jsx)("input",{ref:i,className:w.a.input,type:"text",name:"company",placeholder:"Company"}),Object(j.jsxs)("select",{ref:o,className:w.a.select,name:"theme",placeholder:"Theme",children:[Object(j.jsx)("option",{placeholder:"light",children:"light"}),Object(j.jsx)("option",{placeholder:"dark",children:"dark"}),Object(j.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(j.jsx)("input",{ref:l,className:w.a.input,type:"text",name:"title",placeholder:"Title"}),Object(j.jsx)("input",{ref:s,className:w.a.input,type:"text",name:"email",placeholder:"Email"}),Object(j.jsx)("textarea",{ref:u,className:w.a.textarea,name:"message",placeholder:"Message"}),Object(j.jsx)("div",{className:w.a.fileInput,children:Object(j.jsx)(t,{name:_.fileName,onFileChange:function(e){console.log(e),f({fileName:e.name,fileURL:e.url})}})}),Object(j.jsx)(y,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:o.current.value,title:l.current.value||"",email:s.current.value||"",message:u.current.value||"",fileName:_.fileName||"",fileURL:_.fileURL||""};n.current.reset(),console.log(t),f({fileName:null,fileURL:null}),a(t)}})]})})),R=a(17),L=a(8),F=a.n(L),G=function(e){var t=e.FileInput,a=e.card,r=e.updateCard,c=e.deleteCard,i=a.name,o=a.company,l=a.title,s=a.email,u=a.message,d=a.theme,m=a.fileName,_=function(e){null!=e.currentTarget&&(e.preventDefault(),r(Object(n.a)(Object(n.a)({},a),{},Object(R.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(j.jsxs)("form",{className:F.a.form,children:[Object(j.jsx)("input",{className:F.a.input,type:"text",name:"name",value:i,onChange:_}),Object(j.jsx)("input",{className:F.a.input,type:"text",name:"company",value:o,onChange:_}),Object(j.jsxs)("select",{className:F.a.select,name:"theme",value:d,onChange:_,children:[Object(j.jsx)("option",{value:"light",children:"light"}),Object(j.jsx)("option",{value:"dark",children:"dark"}),Object(j.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(j.jsx)("input",{className:F.a.input,type:"text",name:"title",value:l,onChange:_}),Object(j.jsx)("input",{className:F.a.input,type:"text",name:"email",value:s,onChange:_}),Object(j.jsx)("textarea",{className:F.a.textarea,name:"message",value:u,onChange:_}),Object(j.jsx)("div",{className:F.a.fileInput,children:Object(j.jsx)(t,{name:m,onFileChange:function(e){r(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(j.jsx)(y,{name:"Delete",onClick:function(){c(a)}})]})},S=a(27),P=a.n(S),U=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(j.jsxs)("section",{className:P.a.editor,children:[Object(j.jsx)("h1",{className:P.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(j.jsx)(G,{FileInput:t,card:a[e],updateCard:r,deleteCard:c},e)})),Object(j.jsx)(I,{FileInput:t,onAdd:n})]})},A=a(5),B=a.n(A);function W(e){switch(e){case"dark":return B.a.dark;case"light":return B.a.light;case"colorful":return B.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var T=Object(r.memo)((function(e){var t=e.card,a=t.name,n=t.company,r=t.title,c=t.email,i=t.message,o=t.theme,l=t.fileURL||"/images/default_logo.png";return Object(j.jsxs)("li",{className:"".concat(B.a.card," ").concat(W(o)),children:[Object(j.jsx)("img",{className:B.a.avatar,src:l,alt:"profile"}),Object(j.jsxs)("div",{className:B.a.info,children:[Object(j.jsx)("h1",{className:B.a.name,children:a}),Object(j.jsx)("p",{className:B.a.company,children:n}),Object(j.jsx)("p",{className:B.a.title,children:r}),Object(j.jsx)("p",{className:B.a.email,children:c}),Object(j.jsx)("p",{className:B.a.message,children:i})]})]})})),D=a(20),z=a.n(D),E=function(e){var t=e.cards;return Object(j.jsxs)("section",{className:z.a.preview,children:[Object(j.jsx)("h1",{className:z.a.title,children:"Card Preview"}),Object(j.jsx)("ul",{className:z.a.cards,children:Object.keys(t).map((function(e){return Object(j.jsx)(T,{card:t[e]},e)}))})]})},J=a(28),K=a.n(J),X=function(e){var t=e.FileInput,a=e.authService,c=e.cardRepository,i=Object(l.f)(),o=i.state,s=Object(r.useState)({}),u=Object(g.a)(s,2),d=u[0],m=u[1],f=Object(r.useState)(o&&o.id),p=Object(g.a)(f,2),h=p[0],O=p[1],x=Object(r.useCallback)((function(){a.logout()}),[a]);Object(k.useEffect)((function(){if(h){var e=c.syncCards(h,(function(e){m(e)}));return function(){return e()}}}),[h,c]),Object(k.useEffect)((function(){a.onAuthChange((function(e){e?O(e.uid):i("/")}))}),[a,h,i]);var v=function(e){m((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),c.saveCard(h,e)};return Object(j.jsxs)("section",{className:K.a.maker,children:[Object(j.jsx)(b,{onLogout:x}),Object(j.jsxs)("div",{className:K.a.container,children:[Object(j.jsx)(U,{FileInput:t,cards:d,addCard:v,updateCard:v,deleteCard:function(e){m((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),c.removeCard(h,e)}}),Object(j.jsx)(E,{cards:d})]}),Object(j.jsx)(_,{})]})};var M=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(j.jsx)("div",{className:u.a.app,children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",axact:!0,element:Object(j.jsx)(x,{authService:a})}),Object(j.jsx)(l.a,{path:"/maker",axact:!0,element:Object(j.jsx)(X,{FileInput:t,authService:a,cardRepository:n})})]})})},q=a(11),Q=a(12),V=a(21),Y=a.n(V),Z=(a(41),a(43),Y.a.initializeApp({apiKey:"AIzaSyC1T2kIIopton_B9VyWiXyRwrg0ZaztwVo",authDomain:"business-card-maker-1c877.firebaseapp.com",databaseURL:"https://business-card-maker-1c877-default-rtdb.firebaseio.com",projectId:"business-card-maker-1c877"})),H=Z.auth(),$=Z.database(),ee=new Y.a.auth.GoogleAuthProvider,te=new Y.a.auth.GithubAuthProvider,ae=function(){function e(){Object(q.a)(this,e)}return Object(Q.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return H.signInWithPopup(t)}},{key:"logout",value:function(){H.signOut()}},{key:"onAuthChange",value:function(e){H.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return ee;case"Github":return te;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),ne=a(13),re=a.n(ne),ce=a(18),ie=function(){function e(){Object(q.a)(this,e)}return Object(Q.a)(e,[{key:"upload",value:function(){var e=Object(ce.a)(re.a.mark((function e(t){var a,n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","u1en9wlq"),e.next=5,fetch("https://api.cloudinary.com/v1_1/dplbenbty/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),oe=a(10),le=a.n(oe),se=Object(r.memo)((function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,c=Object(r.useState)(!1),i=Object(g.a)(c,2),o=i[0],l=i[1],s=Object(r.useRef)(),u=function(){var e=Object(ce.a)(re.a.mark((function e(a){var r;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,l(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:le.a.container,children:[Object(j.jsx)("input",{ref:s,className:le.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!o&&Object(j.jsx)("button",{className:"".concat(le.a.button," ").concat(a?le.a.pink:le.a.grey),onClick:function(e){e.preventDefault(),s.current.click()},children:a||"No file"}),o&&Object(j.jsx)("div",{className:le.a.loading})]})})),ue=function(){function e(){Object(q.a)(this,e)}return Object(Q.a)(e,[{key:"syncCards",value:function(e,t){var a=$.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){$.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){$.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),de=a(14),me=new ae,je=new ie,_e=new ue,fe=Object(r.memo)((function(e){return Object(j.jsx)(se,Object(n.a)(Object(n.a)({},e),{},{imageUploader:je}))}));o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(de.a,{basename:"/card-maker",children:Object(j.jsx)(M,{authService:me,FileInput:fe,cardRepository:_e})})}),document.getElementById("root"))}],[[47,1,2]]]);
//# sourceMappingURL=main.a4f15d48.chunk.js.map