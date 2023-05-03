(this["webpackJsonpmarvel-comics"]=this["webpackJsonpmarvel-comics"]||[]).push([[0],{66:function(e,t,c){},68:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var a,n=c(1),s=c(17),r=c.n(s),i=c(4),o=c(12),l=c.n(o),m=c(15),j=c(14),d=c(34),u=c.n(d),b=c(35),O=c.n(b),p="e883c24991effce0cb276c786130f93d",x=function(){var e=Object(m.a)(l.a.mark((function e(t,c){var a,n,s,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Date.now(),n=u()("".concat(a).concat("94a3b6b046653bf712d46331d14072e9db58e6f7").concat(p)),s=Object(j.a)({ts:a,apikey:p,hash:n},c),r="".concat("https://gateway.marvel.com:443/v1/public","/").concat(t),e.prev=4,e.next=7,O.a.get(r,{params:s});case 7:return i=e.sent,e.abrupt("return",i);case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,c){return e.apply(this,arguments)}}(),h=c(11),_=Object(h.b)("lastComics/fetchLastComics",Object(m.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("comics",{orderBy:"modified",format:"comic"});case 2:return t=e.sent,c=t.data.data.results,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))),f=Object(h.c)({name:"shoppingCart",initialState:{comicsInCart:[],totalComicsInCart:0},reducers:{addComicToCart:function(e,t){var c=t.payload,a=c.id,n=e.comicsInCart.findIndex((function(e){return e.id===a}));-1!==n?e.comicsInCart[n].quantity++:e.comicsInCart.push(Object(j.a)(Object(j.a)({},c),{},{quantity:1})),e.totalComicsInCart++},deleteComicFromCart:function(e,t){var c=t.payload;e.comicsInCart=e.comicsInCart.filter((function(e){return e.id!==c}))},addOneComic:function(e,t){var c=t.payload,a=e.comicsInCart.findIndex((function(e){return e.id===c}));e.comicsInCart[a].quantity++},subtractOneComic:function(e,t){var c=t.payload,a=e.comicsInCart.findIndex((function(e){return e.id===c})),n=e.comicsInCart[a].quantity;e.comicsInCart[a].quantity=1!==n?n-1:1},clearCart:function(e){e.comicsInCart=[]}}}),v=c(16),N=Object(h.c)({name:"lastComics",initialState:{comics:[],loading:!1,error:!1},extraReducers:(a={},Object(v.a)(a,_.pending,(function(e){e.loading=!0})),Object(v.a)(a,_.fulfilled,(function(e,t){e.loading=!1,e.error=!1;var c=function(e){return e.map((function(e){var t=e.id,c=e.title,a=e.thumbnail,n=e.creators,s=e.prices,r=a.extension,i=a.path;return{id:t,title:c,creatorName:n.available>0?n.items[0].name:"Author not available",coverURL:"".concat(i,".").concat(r),price:Array.isArray(s)&&!s.length?"0":s[0].price}}))}(t.payload);e.comics=c})),Object(v.a)(a,_.rejected,(function(e){e.loading=!1,e.error=!0})),a)}),C=Object(h.c)({name:"buyerInformation",initialState:{buyerData:{name:"",phone:"",country:"",address:"",additionalInformation:"",city:"",state:"",zipCode:""}},reducers:{addClientInformation:function(e,t){var c=t.payload;e.buyerData=Object(j.a)({},c)}}}),y=Object(h.a)({reducer:{lastComics:N.reducer,shoppingCart:f.reducer,buyer:C.reducer}}),I=(c(66),c(0));function g(e){var t=e.id,c=e.coverURL,a=e.title,n=e.creatorName,s=e.price,r=Object(i.b)(),o=f.actions.addComicToCart;return Object(I.jsxs)("div",{className:"LastComics__Item",children:[Object(I.jsx)("img",{src:c,alt:"",className:"LastComics__Cover"}),Object(I.jsxs)("button",{type:"button",className:"AddToCartButton",onClick:function(){r(o({id:t,coverURL:c,title:a,creatorName:n,price:s}))},children:[Object(I.jsx)("img",{src:"".concat("/marvel-comics-v2","/ShoppingcartInButton.svg"),alt:"",className:"AddToCartButton__CartIcon"}),Object(I.jsx)("span",{children:" ADD TO CART "})]}),Object(I.jsx)("p",{className:"LastComics__Title",children:a}),Object(I.jsx)("p",{className:"LastComics__Author",children:n}),Object(I.jsxs)("p",{className:"LastComics__Price",children:[s,"  "]})]},t)}var F=c(10);c(68);function T(){var e=Object(i.c)((function(e){return e.shoppingCart.comicsInCart})).reduce((function(e,t){return e+t.quantity}),0);return Object(I.jsxs)("div",{className:"Header__Container",children:[Object(I.jsx)(F.b,{to:"/",children:Object(I.jsx)("img",{src:"".concat("/marvel-comics-v2","/MarvelLogo.svg"),alt:"",className:"Header__Logo"})}),Object(I.jsx)("p",{className:"Header__Link",children:" CHARACTERS "}),Object(I.jsx)("p",{className:"Header__Link",children:" CREATORS "}),Object(I.jsx)("p",{className:"Header__Link",children:" EVENTS "}),Object(I.jsxs)("div",{className:"Header__Button Header__Actions",children:[Object(I.jsx)("img",{src:"".concat("/marvel-comics-v2","/SearchIcon.svg"),alt:"",className:"Header__Icon"}),Object(I.jsx)("span",{children:" Search comic "})]}),Object(I.jsx)(F.b,{className:"Header__Button",to:"/checkout",children:Object(I.jsxs)("div",{children:[Object(I.jsx)("img",{src:"".concat("/marvel-comics-v2","/ShoppingCart.svg"),alt:"",className:"Header__Icon"}),Object(I.jsx)("span",{className:"Header__text",children:" Shopping cart "}),Object(I.jsxs)("span",{className:"Header__Counter",children:[e," "]})]})})]})}c(71);var k=function(){return Object(I.jsx)("div",{className:"lds-hourglass"})};function L(e){var t=e.children;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(T,{}),t]})}function B(e){var t=e.comic,c=t.id,a=t.coverURL,n=t.title,s=t.creatorName,r=t.price,o=t.quantity,l=Object(i.b)();return Object(I.jsxs)("div",{className:"Item",children:[Object(I.jsx)("img",{src:a,alt:"",className:"Item__Image"}),Object(I.jsxs)("div",{className:"Item__Description",children:[Object(I.jsxs)("p",{className:"Item__Title",children:[n," "]}),Object(I.jsx)("p",{className:"Item__Author",children:s})]}),Object(I.jsxs)("div",{className:"Item__QuantityModification",children:[Object(I.jsx)("button",{className:"Item__QuantityButton",onClick:function(){l(f.actions.subtractOneComic(c))},children:"-"}),Object(I.jsx)("span",{className:"Item__Quantity",children:o}),Object(I.jsx)("button",{className:"Item__QuantityButton",onClick:function(){l(f.actions.addOneComic(c))},children:"+"})]}),Object(I.jsx)("p",{className:"Item__Price",children:(Math.round(r*o*100)/100).toFixed(2)}),Object(I.jsx)("img",{src:"".concat("/marvel-comics-v2","/DeleteIcon.svg"),alt:"",className:"Item__DeleteIcon",onClick:function(){l(f.actions.deleteComicFromCart(c))}})]})}function S(e){var t=e.total,c=e.totalItems;return Object(I.jsxs)("div",{className:"Summary",children:[Object(I.jsxs)(F.b,{className:"BackToHome",to:"/",children:[Object(I.jsx)("img",{src:"".concat("/marvel-comics-v2","/ArrowBack.svg"),alt:""}),Object(I.jsx)("span",{className:"BackToHome__Text",children:"Back to store"})]}),Object(I.jsxs)("div",{className:"Summary__Container",children:[Object(I.jsxs)("div",{className:"Summary__ContainerTotal",children:[Object(I.jsx)("div",{className:"Summary__Text",children:"Total"}),Object(I.jsx)("div",{className:"Summary__Total",children:(Math.round(100*t,2)/100).toFixed(2)})]}),Object(I.jsxs)("div",{className:"Summary__ItemsCount",children:[c," items"]})]})]})}c(72);function A(){var e=Object(i.c)((function(e){return e.lastComics.comics})),t=Object(i.c)((function(e){return e.lastComics.error})),c=Object(i.c)((function(e){return e.lastComics.loading})),a=Object(i.b)();return Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(_());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),Object(I.jsxs)("div",{className:"LastComics",children:[!t&&!c&&e.map((function(e){return Object(I.jsx)(g,{id:e.id,coverURL:e.coverURL,title:e.title,creatorName:e.creatorName,price:e.price})})),c&&Object(I.jsx)(k,{})]})}var D=c(3);c(73);function P(){var e=Object(i.c)((function(e){return e.shoppingCart.comicsInCart})),t=e.reduce((function(e,t){return e+t.quantity}),0),c=e.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(I.jsxs)("div",{className:"Checkout",children:[Object(I.jsx)("h1",{className:"Checkout__Title",children:"My cart"}),Object(I.jsxs)("div",{className:"Cart",children:[e.map((function(e){return Object(I.jsx)(B,{comic:e},e.id)})),Object(I.jsx)(S,{total:c,totalItems:t}),Object(I.jsx)("div",{className:"ContinueOrder",children:Object(I.jsx)(F.b,{to:"/payment",children:Object(I.jsx)("button",{className:"ContinueOrder__Button",children:"CONTINUE ORDER"})})})]})]})}c(74);function H(){var e=Object(n.useRef)(null),t=Object(i.b)();return Object(I.jsxs)("div",{className:"Payment",children:[Object(I.jsx)("h1",{className:"Payment__Title",children:"Payment"}),Object(I.jsxs)("div",{className:"Payment__Section",children:[Object(I.jsx)("h2",{className:"Payment__SubTitle",children:"Delivery Details"}),Object(I.jsxs)("form",{action:"#",ref:e,children:[Object(I.jsx)("h3",{className:"Form__Title",children:"Contact information"}),Object(I.jsxs)("div",{className:"Form__Section",children:[Object(I.jsxs)("label",{htmlFor:"name",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"Name and last name"}),Object(I.jsx)("input",{type:"text",name:"name",id:"name",className:"Form__Input"})]}),Object(I.jsxs)("label",{htmlFor:"phone",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"Phone Number"}),Object(I.jsx)("input",{type:"tel",name:"phone",id:"phone",className:"Form__Input",pattern:"[0-9]*"})]})]}),Object(I.jsx)("h3",{className:"Form__Title",children:"Delivery information"}),Object(I.jsxs)("div",{className:"Form__Section",children:[Object(I.jsxs)("label",{htmlFor:"country",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"Country"}),Object(I.jsx)("input",{type:"text",name:"country",id:"country",className:"Form__Input"})]}),Object(I.jsxs)("label",{htmlFor:"address",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"Address"}),Object(I.jsx)("input",{type:"text",name:"address",className:"Form__Input",id:"address"})]}),Object(I.jsxs)("label",{htmlFor:"additionalInformation",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"Additional information"}),Object(I.jsx)("input",{type:"text",name:"additionalInformation",className:"Form__Input",id:"additionalInformation"})]}),Object(I.jsxs)("label",{htmlFor:"city",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"City"}),Object(I.jsx)("input",{type:"text",name:"city",className:"Form__Input",id:"city"})]}),Object(I.jsxs)("label",{htmlFor:"state",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"State"}),Object(I.jsx)("input",{type:"text",name:"state",className:"Form__Input",id:"state"})]}),Object(I.jsxs)("label",{htmlFor:"zipCode",className:"Form__Label",children:[Object(I.jsx)("span",{className:"Form__Text",children:"Zip Code"}),Object(I.jsx)("input",{type:"text",name:"zipCode",className:"Form__Input",pattern:"[0-9]*",id:"zipCode"})]})]})]})]}),Object(I.jsxs)("div",{className:"NavigationButtons",children:[Object(I.jsxs)(F.b,{className:"BackToHome",to:"/checkout",children:[Object(I.jsx)("img",{src:"".concat("/marvel-comics-v2","/ArrowBack.svg"),alt:""}),Object(I.jsx)("span",{className:"BackToHome__Text",children:"Back to shopping cart"})]}),Object(I.jsx)(F.b,{to:"/summary",children:Object(I.jsx)("button",{className:"ContinueOrder__Button",onClick:function(){var c=new FormData(e.current),a={name:c.get("name"),phone:c.get("phone"),country:c.get("country"),address:c.get("address"),additionalInformation:c.get("additionalInformation"),city:c.get("city"),state:c.get("state"),zipCode:c.get("zipCode")};t(C.actions.addClientInformation(a))},children:"GO TO PAY"})})]})]})}var R=c(37);c(75);function E(){var e=Object(i.c)((function(e){return e.shoppingCart.comicsInCart})),t=e.reduce((function(e,t){return e+t.price*t.quantity}),0),c=e.reduce((function(e,t){return e+t.quantity}),0),a=Object(i.b)(),n=Object(D.f)();return Object(I.jsxs)("div",{className:"Content",children:[Object(I.jsx)(S,{total:t,totalItems:c}),Object(I.jsx)("div",{className:"PaypalContainer",children:Object(I.jsx)(R.PayPalButton,{paypalOptions:{clientId:"AdVD_NyJTMuT8XuVn4J02zGQNrB_xFZx89EKPQ9zOGydv8EaB3TD2juk5hOHn1AMQZn1BvRpw3QDmtTg",intent:"capture",currency:"USD"},style:{layout:"vertical",label:"pay",shape:"pill",size:"responsive"},amount:t,onSuccess:function(e){"COMPLETED"===e.status&&(a(f.actions.clearCart()),n.push("/payment/success"))},onError:function(e){return console.log(e)},onCancel:function(e){return console.log(e)}})})]})}c(76);function w(){return Object(I.jsxs)("div",{className:"Payment",children:[Object(I.jsx)("img",{className:"Payment__CheckIcon",src:"".concat("/marvel-comics-v2","/CheckIcon.svg"),alt:""}),Object(I.jsx)("p",{className:"Payment__Callout",children:"PAYMENT DONE"}),Object(I.jsx)("p",{className:"Payment__Text",children:"Come back soon"})]})}var q=function(){return Object(I.jsx)(i.a,{store:y,children:Object(I.jsx)(F.a,{basename:"/",children:Object(I.jsx)(L,{children:Object(I.jsxs)(D.c,{children:[Object(I.jsx)(D.a,{exact:!0,path:"/",component:A}),Object(I.jsx)(D.a,{exact:!0,path:"/checkout",component:P}),Object(I.jsx)(D.a,{exact:!0,path:"/payment",component:H}),Object(I.jsx)(D.a,{exact:!0,path:"/summary",component:E}),Object(I.jsx)(D.a,{exact:!0,path:"/payment/success",component:w})]})})})})};c(77);r.a.render(Object(I.jsx)(q,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.91b9d255.chunk.js.map