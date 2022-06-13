(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{6546:function(e,t,n){"use strict";var a=n(67294),r=n(41120),o=n(95477),i=a.createElement,l=(0,r.Z)((function(e){return{container:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.2)",zIndex:10},spinnerContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},spinner:{color:"#fff"}}}));t.Z=function(){var e=l();return i("div",{className:e.container},i("div",{className:e.spinnerContainer},i(o.Z,{className:e.spinner})))}},46350:function(e,t,n){"use strict";n.d(t,{Gw:function(){return a},fc:function(){return r}});var a=function(e){return!0},r=function(e){return!!e&&e.trim().length>0}},14973:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var a=n(67294),r=n(22318),o=n(11528),i=n(26265),l=n(809),c=n.n(l),s=n(92447),u=n(46350),m=n(41120),f=n(8286),p=n(282),d=n(2949),g=n(22122),h=n(86010),v=n(59693),b=n(52543),w=n(79895),y=n(25209),C=(0,y.Z)(a.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),N=(0,y.Z)(a.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),Z=(0,y.Z)(a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),E=(0,y.Z)(a.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),O=(0,y.Z)(a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),S=n(17812),x=n(93871),z={success:a.createElement(C,{fontSize:"inherit"}),warning:a.createElement(N,{fontSize:"inherit"}),error:a.createElement(Z,{fontSize:"inherit"}),info:a.createElement(E,{fontSize:"inherit"})},M=a.createElement(O,{fontSize:"small"}),k=a.forwardRef((function(e,t){var n=e.action,r=e.children,o=e.classes,i=e.className,l=e.closeText,c=void 0===l?"Close":l,s=e.color,u=e.icon,m=e.iconMapping,f=void 0===m?z:m,p=e.onClose,v=e.role,b=void 0===v?"alert":v,y=e.severity,C=void 0===y?"success":y,N=e.variant,Z=void 0===N?"standard":N,E=(0,d.Z)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return a.createElement(w.Z,(0,g.Z)({role:b,square:!0,elevation:0,className:(0,h.Z)(o.root,o["".concat(Z).concat((0,x.Z)(s||C))],i),ref:t},E),!1!==u?a.createElement("div",{className:o.icon},u||f[C]||z[C]):null,a.createElement("div",{className:o.message},r),null!=n?a.createElement("div",{className:o.action},n):null,null==n&&p?a.createElement("div",{className:o.action},a.createElement(S.Z,{size:"small","aria-label":c,title:c,color:"inherit",onClick:p},M)):null)})),L=(0,b.Z)((function(e){var t="light"===e.palette.type?v._j:v.$n,n="light"===e.palette.type?v.$n:v._j;return{root:(0,g.Z)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:n(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:n(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:n(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:n(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(k),W=n(6546),_=a.createElement;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var A=(0,m.Z)((function(e){return{header:{fontFamily:"Nunito, sans-serif",fontSize:24,fontWeight:600}}})),I=(0,m.Z)((function(e){return{row:{marginBottom:20}}})),P=(0,m.Z)((function(e){return{root:{width:"100%"}}})),$=(0,m.Z)((function(e){return{root:{width:"100%"}}}));var T=function(){var e=(0,a.useState)(""),t=e[0],n=e[1],o=(0,a.useState)(""),l=o[0],m=o[1],d=(0,a.useState)(""),g=d[0],h=d[1],v=(0,a.useState)(!1),b=v[0],w=v[1],y=(0,a.useState)(!1),C=y[0],N=y[1],Z=(0,a.useState)({name:!0,email:!0,message:!0}),E=Z[0],O=Z[1],S=(0,a.useState)(!0),x=S[0],z=S[1],M=function(){var e=(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(!0);try{N(!0)}catch(E){}w(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e,n=(0,u.fc)(t),a=(0,u.Gw)(l),r=(0,u.fc)(g),o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},E);o.name=!n,o.email=!a,o.message=!r,e=!(n&&a&&r),O(o),z(e)},T=A(),R=I(),H=P(),V=$();return(0,a.useEffect)((function(){k()}),[t,l,g]),_("div",{style:{position:"relative"}},_("form",{className:"form"},_(r.Z,{className:T.header,gutterBottom:!0},"Contattaci"),_("div",{className:"input-group ".concat(R.row)},_(f.Z,{name:"name",fullWidth:!0,label:"Il tuo nome",variant:"outlined",defaultValue:t,onChange:function(e){return n(e.target.value)},helperText:"Campo richiesto"})),_("div",{className:"input-group ".concat(R.row)},_(f.Z,{name:"email",fullWidth:!0,label:"La tua email",variant:"outlined",onChange:function(e){return m(e.target.value)},helperText:"Inserisci un indirizzo email valido"})),_("div",{className:"input-group ".concat(R.row)},_(f.Z,{name:"message",fullWidth:!0,label:"Il tuo messaggio",variant:"outlined",helperText:"Campo richiesto",multiline:!0,rowsMax:4,onChange:function(e){return h(e.target.value)}})),_("div",{className:"input-group ".concat(R.row)},_(p.Z,{classes:H,variant:"outlined",disabled:x,onClick:function(){return M()}},"INVIA")),_("div",{className:"input-group ".concat(R.row)},C?_(L,{classes:V,severity:"success"},"Il messaggio \xe8 stato inviato correttamente"):null)),b?_(W.Z,null):null)},R=a.createElement;var H=function(e){var t=e.page,n=void 0===t?{}:t;return R(o.Z,null,R("div",{className:"container"},R("div",{className:"row"},R("div",{className:"col-6"},R("div",{className:"row"},R("div",{className:"col-12"},R(r.Z,{variant:"h3"},n.title))),R("div",{className:"row"},R("div",{className:"col-12"},n.content))),R("div",{className:"col-6"},R(T,null)))))}},97508:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(14973)}])}},function(e){e.O(0,[139,770,557,182,286,3,80,888,774,179],(function(){return t=97508,e(e.s=t);var t}));var t=e.O();_N_E=t}]);