(this.webpackJsonpe_commerce=this.webpackJsonpe_commerce||[]).push([[0],{136:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(12),c=n.n(r),i=n(7),s=n.n(i),o=n(10),u=n(11),d=n(76),l=new(n.n(d).a)("pk_test_2653662f286659a530b0dde2ac88fcc9f5c27fca953a1",!0),j=n(170),p=n(172),b=n(57),m=n(173),h=n(174),x=n(175),O=n(14),f=n(20),g=n.p+"static/media/commerce.457bea4f.png",v=n(16),y=n(167),k=n(18),w=Object(y.a)((function(t){return{appBar:Object(v.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(v.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(v.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(k.c)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.c)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(v.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),C=n(2),_=function(t){var e=t.totalItems,n=w(),a=Object(O.g)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(j.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(p.a,{children:[Object(C.jsxs)(b.a,{component:f.b,to:"/",variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:g,alt:"Citrusshop.js",height:"25px",className:n.image}),"Citrus Shop"]}),Object(C.jsx)("div",{className:n.grow}),"/"===a.pathname&&Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(m.a,{component:f.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(C.jsx)(x.a,{})})})})]})})})},S=n(181),N=n(176),T=n(177),B=n(178),E=n(179),q=n(180),I=Object(y.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),F=function(t){var e=t.product,n=t.onAddToCart,a=I();return Object(C.jsxs)(N.a,{className:a.root,children:[Object(C.jsx)(T.a,{className:a.media,image:e.media.source,title:e.name}),Object(C.jsxs)(B.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(C.jsx)(b.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(C.jsx)(b.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(E.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(m.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(C.jsx)(q.a,{})})})]})},R=Object(y.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),L=function(t){var e=t.products,n=t.onAddToCart,a=R();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(S.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(C.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(F,{product:t,onAddToCart:n})},t.id)}))})]})},A=n(182),P=n(183),U=Object(y.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(v.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),D=Object(y.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),z=function(t){var e=t.item,n=t.onUpdateCartQty,a=t.onRemoveFromCart,r=D();return Object(C.jsxs)(N.a,{children:[Object(C.jsx)(T.a,{image:e.media.source,alt:e.name,className:r.media}),Object(C.jsxs)(B.a,{className:r.cardContent,children:[Object(C.jsx)(b.a,{variant:"h4",children:e.name}),Object(C.jsx)(b.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(C.jsxs)(E.a,{className:r.cardActions,children:[Object(C.jsxs)("div",{className:r.buttons,children:[Object(C.jsx)(A.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(C.jsx)(b.a,{children:e.quantity}),Object(C.jsx)(A.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(C.jsx)(A.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(e.id)},children:"Remove"})]})]})},W=function(t){var e=t.cart,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,r=t.handleEmptyCart,c=U(),i=function(){return Object(C.jsxs)(b.a,{variant:"subtitle1",children:["You have no items in your shopping cart,",Object(C.jsx)(f.b,{to:"/",className:c.link,children:" start adding some"}),"!"]})},s=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(S.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(C.jsx)(S.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(z,{item:t,onUpdateCartQty:n,onRemoveFromCart:a})},t.id)}))}),Object(C.jsxs)("div",{className:c.cardDetails,children:[Object(C.jsxs)(b.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(A.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(C.jsx)(A.a,{component:f.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return e.line_items?Object(C.jsxs)(P.a,{children:[Object(C.jsx)("div",{className:c.toolbar}),Object(C.jsx)(b.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),e.line_items.length?Object(C.jsx)(s,{}):Object(C.jsx)(i,{})]}):"Loading..."},Q=n(189),G=n(190),M=n(191),Z=n(83),$=n(198),H=n(192),J=n(194),X=Object(y.a)((function(t){var e;return{appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:Object(v.a)({marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2)},t.breakpoints.up(600+2*t.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(e={marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2)},Object(v.a)(e,t.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(v.a)(e,t.breakpoints.up(600+2*t.spacing(3)),{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}),e),stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),K=n(50),V=n(197),Y=n(193),tt=n(187),et=n(45),nt=n(195),at=function(t){var e=t.name,n=t.label,a=(t.required,Object(et.d)().control);return Object(C.jsx)(S.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(et.a,{control:a,name:e,render:function(t){t.field;return Object(C.jsx)(nt.a,{fullWidth:!0,label:n,required:!0})}})})},rt=function(t){var e=t.checkoutToken,n=t.next,r=Object(a.useState)([]),c=Object(u.a)(r,2),i=c[0],d=c[1],j=Object(a.useState)(""),p=Object(u.a)(j,2),m=p[0],h=p[1],x=Object(a.useState)([]),O=Object(u.a)(x,2),g=O[0],v=O[1],y=Object(a.useState)(""),k=Object(u.a)(y,2),w=k[0],_=k[1],N=Object(a.useState)([]),T=Object(u.a)(N,2),B=T[0],E=T[1],q=Object(a.useState)(""),I=Object(u.a)(q,2),F=I[0],R=I[1],L=Object(et.c)(),P=Object.entries(i).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),U=Object.entries(g).map((function(t){var e=Object(u.a)(t,2);return{id:e[0],label:e[1]}})),D=B.map((function(t){return{id:t.id,label:"".concat(t.description," - (").concat(t.price.formatted_with_symbol,")")}}));console.log(B);var z=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.services.localeListShippingCountries(e);case 2:n=t.sent,a=n.countries,console.log(a),d(a),h(Object.keys(a)[0]);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.services.localeListSubdivisions(e);case 2:n=t.sent,a=n.subdivisions,v(a),_(Object.keys(a)[0]);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r,c=arguments;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,t.next=3,l.checkout.getShippingOptions(e,{country:n,region:a});case 3:r=t.sent,E(r),R(r[0].id);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){z(e.id)}),[]),Object(a.useEffect)((function(){m&&W(m)}),[m]),Object(a.useEffect)((function(){w&&Q(e.id,m,w)}),[w]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(C.jsx)(et.b,Object(K.a)(Object(K.a)({},L),{},{children:Object(C.jsxs)("form",{onSubmit:L.handleSubmit((function(t){return n(Object(K.a)(Object(K.a)({},t),{},{shippingCountry:m,shippingSubdivision:w,shippingOption:F}))})),children:[Object(C.jsxs)(S.a,{container:!0,spacing:3,children:[Object(C.jsx)(at,{required:!0,name:"firstName",label:"First name"}),Object(C.jsx)(at,{required:!0,name:"lastName",label:"Last name"}),Object(C.jsx)(at,{required:!0,name:"address1",label:"Address"}),Object(C.jsx)(at,{required:!0,name:"email",label:"Email"}),Object(C.jsx)(at,{required:!0,name:"city",label:"City"}),Object(C.jsx)(at,{required:!0,name:"zip",label:"ZIP / Postal code"}),Object(C.jsxs)(S.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(V.a,{children:"Shipping Country"}),Object(C.jsx)(Y.a,{value:m,fullWidth:!0,onChange:function(t){return h(t.target.value)},children:P.map((function(t){return Object(C.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(C.jsxs)(S.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(V.a,{children:"Shipping Subdivision"}),Object(C.jsx)(Y.a,{value:w,fullWidth:!0,onChange:function(t){return _(t.target.value)},children:U.map((function(t){return Object(C.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]}),Object(C.jsxs)(S.a,{item:!0,xs:12,sm:6,children:[Object(C.jsx)(V.a,{children:"Shipping Options"}),Object(C.jsx)(Y.a,{value:F,fullWidth:!0,onChange:function(t){return R(t.target.value)},children:D.map((function(t){return Object(C.jsx)(tt.a,{value:t.id,children:t.label},t.id)}))})]})]}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContext:"space-between"},children:[Object(C.jsx)(A.a,{component:f.b,to:"/cart",variant:"outlined",children:"Back to Cart"}),Object(C.jsx)(A.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},ct=n(51),it=n(81),st=n(186),ot=n(137),ut=n(188),dt=function(t){var e=t.checkoutToken;t.order;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(b.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(C.jsxs)(st.a,{disablePadding:!0,children:[e.live.line_items.map((function(t){return Object(C.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ut.a,{primary:t.name,secondary:"Quantity: ".concat(t.quantity)}),Object(C.jsx)(b.a,{variant:"body2",children:t.line_total.formatted_with_symbol})]},t.name)})),"US"===e.merchant.country?Object(C.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ut.a,{primary:"Shipping: ".concat(e.shipping_methods[0].description),secondary:"Provider: ".concat(e.shipping_methods[0].provider)}),Object(C.jsx)(b.a,{variant:"body2",children:e.shipping_methods[0].price.formatted_with_symbol})]},e.shipping_methods[0].description):Object(C.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ut.a,{primary:"Shipping: ".concat(e.shipping_methods[1].description),secondary:"Provider: ".concat(e.shipping_methods[1].provider)}),Object(C.jsx)(b.a,{variant:"body2",children:e.shipping_methods[1].price.formatted_with_symbol})]},e.shipping_methods[1].description),Object(C.jsxs)(ot.a,{style:{padding:"10px 0"},children:[Object(C.jsx)(ut.a,{primary:"Total"}),Object(C.jsx)(b.a,{variant:"subtitle1",style:{fontWeight:700},children:"US"===e.merchant.country?"$ ".concat(parseInt(e.live.subtotal.formatted)+parseInt(e.shipping_methods[0].price.formatted)):"$ ".concat(parseInt(e.live.subtotal.formatted)+parseInt(e.shipping_methods[1].price.formatted))})]})]})]})},lt=Object(it.a)("pk_test_51JLqDrEFC8BKf5MukET4wE9OSlShOdh8qoiUQXKhVSbp0munjTTGf0Flzr7XMEbT0ZeqT72mm1UXD1AVxCZq2Zq700U76rLqgc"),jt=function(t){var e=t.checkoutToken,n=t.shippingData,a=t.backStep,r=t.onCaptureCheckout,c=t.nextStep,i=t.timeout,u=t.order,d=function(){var t=Object(o.a)(s.a.mark((function t(a,o,u){var d,l,j,p,b;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),u&&o){t.next=3;break}return t.abrupt("return");case 3:return d=o.getElement(ct.CardElement),t.next=6,u.createPaymentMethod({type:"card",card:d});case 6:l=t.sent,j=l.error,p=l.paymentMethod,j?console.log(j):(b={line_items:e.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,country_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:p.id}}},r(e.id,b),i(),c());case 10:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(dt,{checkoutToken:e,order:u}),Object(C.jsx)(Q.a,{}),Object(C.jsx)(b.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment methods"}),Object(C.jsx)(ct.Elements,{stripe:lt,children:Object(C.jsx)(ct.ElementsConsumer,{children:function(t){var n=t.elements,r=t.stripe;return Object(C.jsxs)("form",{onSubmit:function(t){return d(t,n,r)},children:[Object(C.jsx)(ct.CardElement,{}),Object(C.jsx)("br",{})," ",Object(C.jsx)("br",{}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(C.jsx)(A.a,{variant:"outlined",onClick:a,children:"Back"}),Object(C.jsxs)(A.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ","US"===e.merchant.country?"$ ".concat(parseInt(e.live.subtotal.formatted)+parseInt(e.shipping_methods[0].price.formatted)):"$ ".concat(parseInt(e.live.subtotal.formatted)+parseInt(e.shipping_methods[1].price.formatted))]})]})]})}})})]})},pt=["Shipping address","Payment details"],bt=function(t){var e=t.cart,n=t.order,r=t.onCaptureCheckout,c=t.error,i=Object(a.useState)(0),d=Object(u.a)(i,2),j=d[0],p=d[1],m=Object(a.useState)(null),h=Object(u.a)(m,2),x=h[0],g=h[1],v=Object(a.useState)({}),y=Object(u.a)(v,2),k=y[0],w=y[1],_=Object(a.useState)(!1),S=Object(u.a)(_,2),N=S[0],T=S[1],B=X(),E=Object(O.f)();Object(a.useEffect)((function(){(function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.checkout.generateToken(e.id,{type:"cart"});case 3:n=t.sent,console.log(n),g(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),E.pushState("/");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var q=function(){return p((function(t){return t+1}))},I=function(){return p((function(t){return t-1}))},F=function(t){w(t),q()},R=function(){setTimeout((function(){T(!0)}),3e3)},L=function(){return n.customer?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)(b.a,{variant:"h5",children:["Thank you for your purchase, ",n.customer.firstname," ",n.customer.lastname]}),Object(C.jsx)(Q.a,{className:B.divider}),Object(C.jsxs)(b.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(C.jsx)("br",{}),Object(C.jsx)(A.a,{component:f.b,to:"/",variant:"outlined",type:"button",children:"Back to Home"})]}):N?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(b.a,{variant:"h5",children:"Thank you for your purchase! "}),Object(C.jsx)(Q.a,{className:B.divider})]}),Object(C.jsx)("br",{}),Object(C.jsx)(A.a,{component:f.b,to:"/",variant:"outlined",type:"button",children:"Back to Home"})]}):Object(C.jsx)("div",{className:B.spinner,children:Object(C.jsx)(G.a,{})})};c&&(C.Fragment,b.a,A.a,f.b);var P=function(){return 0===j?Object(C.jsx)(rt,{checkoutToken:x,next:F}):Object(C.jsx)(jt,{shippingData:k,checkoutToken:x,nextStep:q,backStep:I,onCaptureCheckout:r,timeout:R,order:n})};return console.log(n),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(M.a,{}),Object(C.jsx)("div",{className:B.toolbar}),Object(C.jsx)("main",{className:B.layout,children:Object(C.jsxs)(Z.a,{className:B.paper,children:[Object(C.jsx)(b.a,{variant:"h4",align:"center",children:"Checkout"}),Object(C.jsx)($.a,{activeStep:j,className:B.stepper,children:pt.map((function(t){return Object(C.jsx)(H.a,{children:Object(C.jsx)(J.a,{children:t})},t)}))}),j===pt.length?Object(C.jsx)(L,{}):x&&Object(C.jsx)(P,{})]})})]})},mt=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({}),i=Object(u.a)(c,2),d=i[0],j=i[1],p=Object(a.useState)({}),b=Object(u.a)(p,2),m=b[0],h=b[1],x=Object(a.useState)(""),g=Object(u.a)(x,2),v=g[0],y=g[1],k=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.products.list();case 2:e=t.sent,n=e.data,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=j,t.next=3,l.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.cart.add(e,n);case 2:a=t.sent,r=a.cart,j(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),N=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.cart.update(e,{quantity:n});case 2:a=t.sent,r=a.cart,j(r);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.cart.remove(e);case 2:n=t.sent,a=n.cart,j(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.cart.empty();case 2:e=t.sent,n=e.cart,j(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(o.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.cart.refresh();case 2:e=t.sent,j(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.checkout.capture(e,n);case 3:a=t.sent,h(a),E(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),y(t.t0.data.error.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){k(),w()}),[]),Object(C.jsx)(f.a,{children:Object(C.jsxs)("div",{children:[Object(C.jsx)(_,{totalItems:d.total_items}),Object(C.jsxs)(O.c,{children:[Object(C.jsx)(O.a,{exact:!0,path:"/",children:Object(C.jsx)(L,{products:n,onAddToCart:S})}),Object(C.jsx)(O.a,{exact:!0,path:"/cart",children:Object(C.jsx)(W,{cart:d,handleUpdateCartQty:N,handleRemoveFromCart:T,handleEmptyCart:B})}),Object(C.jsx)(O.a,{exact:!0,path:"/checkout",children:Object(C.jsx)(bt,{cart:d,order:m,onCaptureCheckout:q,error:v})})]})]})})};c.a.render(Object(C.jsx)(mt,{}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.9229d5af.chunk.js.map