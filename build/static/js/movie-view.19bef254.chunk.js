(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"MovieView_card__3ESiw",image:"MovieView_image__YzJxP",description:"MovieView_description__3yD7f",genres:"MovieView_genres__2ICCB",list:"MovieView_list__1qyxz",reviewList:"MovieView_reviewList__1_3Cy"}},44:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return O}));var s=c(36),n=c(1),i=c(0),r=c(2),a=c(8),j=c(37),l=c(41),b=c.n(l),o=Object(i.lazy)((function(){return c.e(4).then(c.bind(null,42))})),h=Object(i.lazy)((function(){return c.e(3).then(c.bind(null,43))}));function O(){var e=Object(r.h)().movieId,t=Object(r.i)(),c=t.url,l=t.path,O=Object(r.g)(),d=Object(r.f)(),u=Object(i.useRef)(null);Object(i.useEffect)((function(){u.current||(u.current=O.state)}),[O.state]);var x=Object(i.useState)(null),v=Object(s.a)(x,2),p=v[0],_=v[1],f=Object(i.useState)(null),m=Object(s.a)(f,2),w=m[0],g=m[1],N=Object(i.useState)(null),y=Object(s.a)(N,2),M=y[0],V=y[1];Object(i.useEffect)((function(){j.c(e).then(_),j.b(e).then(g),j.d(e).then(V)}),[e]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{type:"button",onClick:function(){var e=u.current?"".concat(u.current.params):"/";d.push(e)},children:"\u2190 Go back"}),p&&Object(n.jsxs)("div",{className:b.a.card,children:[Object(n.jsx)("div",{className:b.a.image,children:Object(n.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(p.poster_path),alt:p.title})}),Object(n.jsxs)("div",{className:b.a.description,children:[Object(n.jsx)("h2",{children:"".concat(p.title," (").concat(p.release_date.substr(0,4),")")}),Object(n.jsxs)("p",{children:["User score: ",Number(10*p.vote_average)," %"]}),Object(n.jsx)("h3",{children:"Overview"}),Object(n.jsx)("p",{children:p.overview}),Object(n.jsx)("h4",{children:"Genres"}),Object(n.jsx)("ul",{className:b.a.genres,children:p.genres.map((function(e){return Object(n.jsx)("li",{className:b.a.list,children:e.name},e.name)}))})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Additional information"}),Object(n.jsxs)("ul",{className:b.a.reviewList,children:[Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"".concat(c,"/cast"),children:"Cast"})}),Object(n.jsx)("li",{children:Object(n.jsx)(a.c,{to:"".concat(c,"/reviews"),children:"Reviews"})})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(i.Suspense,{fallback:Object(n.jsx)("h1",{children:"\u0417\u0410\u0413\u0420\u0423\u0416\u0410\u0415\u041c \u041c\u0410\u0420\u0428\u0420\u0423\u0422..."}),children:[Object(n.jsx)(r.a,{path:"".concat(l,"/cast"),children:w&&Object(n.jsx)(h,{casts:w})}),Object(n.jsx)(r.a,{path:"".concat(l,"/reviews"),children:M&&Object(n.jsx)(o,{reviews:M})})]})]})}}}]);
//# sourceMappingURL=movie-view.19bef254.chunk.js.map