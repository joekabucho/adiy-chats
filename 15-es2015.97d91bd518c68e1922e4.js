(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{TbC0:function(l,n,u){"use strict";u.r(n);var b=u("8Y7J"),t=u("yZrb");class a{constructor(l,n){this.api=l,this.router=n,this.now=new Date,this.getUsersList()}ngOnInit(){console.log("home user",this.api.user)}logout(){console.log("lgout"),this.api.signOut()}getUsersList(){this.api.db.collection("users").onSnapshot(l=>{this.usersList=[],console.log("userlist query",l),l.forEach(l=>{this.usersList.push(l.data()),console.log("users list data",l.data())})})}openChat(l){this.router.navigate(["/chat-room/"],{queryParams:l,skipLocationChange:!1})}}class e{}var o=u("NcP4"),s=u("t68o"),i=u("xYTU"),c=u("pMnS"),r=u("oBZk"),C=u("ZZ/e"),h=u("SVse"),m=u("iInd"),d=b.rb({encapsulation:0,styles:[[""]],data:{}});function g(l){return b.Lb(0,[(l()(),b.tb(0,0,null,null,14,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var b=!0;return"click"===n&&(b=!1!==l.component.openChat(l.context.$implicit)&&b),b}),r.A,r.k)),b.sb(1,49152,null,0,C.F,[b.h,b.k,b.y],null,null),(l()(),b.tb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,r.r,r.b)),b.sb(3,49152,null,0,C.e,[b.h,b.k,b.y],null,null),(l()(),b.tb(4,0,null,0,0,"img",[["src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="]],null,null,null,null,null)),(l()(),b.tb(5,0,null,0,5,"ion-label",[],null,null,null,r.B,r.l)),b.sb(6,49152,null,0,C.L,[b.h,b.k,b.y],null,null),(l()(),b.tb(7,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),b.Jb(8,null,["",""])),(l()(),b.tb(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),b.Jb(-1,null,["See, my chat"])),(l()(),b.tb(11,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),b.tb(12,0,null,null,2,"p",[["gray-time",""],["no-margin",""]],null,null,null,null,null)),b.sb(13,16384,null,0,C.c,[b.k],null,null),(l()(),b.Jb(14,null,["",""]))],null,(function(l,n){var u=n.component;l(n,8,0,null==n.context.$implicit?null:n.context.$implicit.name),l(n,14,0,u.api.formatAMPM(u.now))}))}function p(l){return b.Lb(0,[(l()(),b.tb(0,0,null,null,13,"ion-item",[],null,null,null,r.A,r.k)),b.sb(1,49152,null,0,C.F,[b.h,b.k,b.y],null,null),(l()(),b.tb(2,0,null,0,3,"ion-avatar",[["slot","start"]],null,null,null,r.r,r.b)),b.sb(3,49152,null,0,C.e,[b.h,b.k,b.y],null,null),(l()(),b.tb(4,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,r.C,r.m)),b.sb(5,49152,null,0,C.nb,[b.h,b.k,b.y],{animated:[0,"animated"]},null),(l()(),b.tb(6,0,null,0,7,"ion-label",[],null,null,null,r.B,r.l)),b.sb(7,49152,null,0,C.L,[b.h,b.k,b.y],null,null),(l()(),b.tb(8,0,null,0,2,"h3",[],null,null,null,null,null)),(l()(),b.tb(9,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%"]],null,null,null,r.C,r.m)),b.sb(10,49152,null,0,C.nb,[b.h,b.k,b.y],{animated:[0,"animated"]},null),(l()(),b.tb(11,0,null,0,2,"p",[],null,null,null,null,null)),(l()(),b.tb(12,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%"]],null,null,null,r.C,r.m)),b.sb(13,49152,null,0,C.nb,[b.h,b.k,b.y],{animated:[0,"animated"]},null)],(function(l,n){l(n,5,0,""),l(n,10,0,""),l(n,13,0,"")}),null)}function A(l){return b.Lb(0,[(l()(),b.tb(0,0,null,null,16,"ion-header",[],null,null,null,r.w,r.g)),b.sb(1,49152,null,0,C.z,[b.h,b.k,b.y],null,null),(l()(),b.tb(2,0,null,0,14,"ion-toolbar",[["_bg-theme-color",""]],null,null,null,r.F,r.p)),b.sb(3,49152,null,0,C.Ab,[b.h,b.k,b.y],null,null),(l()(),b.tb(4,0,null,0,3,"ion-avatar",[["padding",""],["slot","start"]],null,null,null,r.r,r.b)),b.sb(5,49152,null,0,C.e,[b.h,b.k,b.y],null,null),b.sb(6,16384,null,0,C.c,[b.k],null,null),(l()(),b.tb(7,0,null,0,0,"img",[["src","../../../assets/imgs/avatar/avatar9.jpg"]],null,null,null,null,null)),(l()(),b.tb(8,0,null,0,2,"ion-title",[],null,null,null,r.E,r.o)),b.sb(9,49152,null,0,C.yb,[b.h,b.k,b.y],null,null),(l()(),b.Jb(-1,0,["Messenger"])),(l()(),b.tb(11,0,null,0,2,"ion-icon",[["name","text"],["padding",""],["slot","end"]],null,null,null,r.x,r.h)),b.sb(12,49152,null,0,C.A,[b.h,b.k,b.y],{name:[0,"name"]},null),b.sb(13,16384,null,0,C.c,[b.k],null,null),(l()(),b.tb(14,0,null,0,2,"ion-icon",[["name","log-out"],["padding",""],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var b=!0;return"click"===n&&(b=!1!==l.component.logout()&&b),b}),r.x,r.h)),b.sb(15,49152,null,0,C.A,[b.h,b.k,b.y],{name:[0,"name"]},null),b.sb(16,16384,null,0,C.c,[b.k],null,null),(l()(),b.tb(17,0,null,null,5,"ion-content",[],null,null,null,r.u,r.e)),b.sb(18,49152,null,0,C.s,[b.h,b.k,b.y],null,null),(l()(),b.ib(16777216,null,0,1,null,g)),b.sb(20,278528,null,0,h.j,[b.O,b.L,b.r],{ngForOf:[0,"ngForOf"]},null),(l()(),b.ib(16777216,null,0,1,null,p)),b.sb(22,16384,null,0,h.k,[b.O,b.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,12,0,"text"),l(n,15,0,"log-out"),l(n,20,0,u.usersList),l(n,22,0,!u.usersList)}),null)}function k(l){return b.Lb(0,[(l()(),b.tb(0,0,null,null,1,"app-home",[],null,null,null,A,d)),b.sb(1,114688,null,0,a,[t.a,m.m],null,null)],(function(l,n){l(n,1,0)}),null)}var y=b.pb("app-home",a,k,{},{},[]),f=u("s7LF"),L=u("qJ5m"),w=u("Xd0L"),v=u("POq0"),O=u("QQfA"),x=u("IP0z"),q=u("JjoW"),F=u("Mz6y"),J=u("cUpR"),j=u("OIZN"),B=u("7kcP"),H=u("s6ns"),I=u("zQui"),P=u("8rEH"),E=u("zMNK"),M=u("/HVE"),Z=u("Fwaw"),z=u("qJ50"),Q=u("Gi4r"),N=u("HsOI"),S=u("oapL"),T=u("ZwOa"),U=u("hOhj"),V=u("5GAg"),D=u("FVPZ"),G=u("02hT"),$=u("Q+lL"),K=u("BzsH"),R=u("KPQW"),W=u("5Bek"),Y=u("c9fC"),X=u("r0V8"),_=u("dFDH"),ll=u("8212");u.d(n,"HomePageModuleNgFactory",(function(){return nl}));var nl=b.qb(e,[],(function(l){return b.Bb([b.Cb(512,b.j,b.bb,[[8,[o.a,s.a,i.a,i.b,c.a,y]],[3,b.j],b.w]),b.Cb(4608,h.m,h.l,[b.t,[2,h.x]]),b.Cb(4608,f.t,f.t,[]),b.Cb(4608,C.a,C.a,[b.y,b.g]),b.Cb(4608,C.Eb,C.Eb,[C.a,b.j,b.q]),b.Cb(4608,C.Hb,C.Hb,[C.a,b.j,b.q]),b.Cb(5120,L.b,L.a,[[3,L.b]]),b.Cb(4608,w.d,w.d,[]),b.Cb(4608,v.c,v.c,[]),b.Cb(4608,O.a,O.a,[O.g,O.c,b.j,O.f,O.d,b.q,b.y,h.d,x.b,[2,h.g]]),b.Cb(5120,O.h,O.i,[O.a]),b.Cb(5120,q.a,q.b,[O.a]),b.Cb(5120,F.a,F.b,[O.a]),b.Cb(4608,J.e,w.e,[[2,w.i],[2,w.n]]),b.Cb(5120,j.b,j.a,[[3,j.b]]),b.Cb(5120,B.b,B.a,[[3,B.b]]),b.Cb(5120,H.b,H.c,[O.a]),b.Cb(135680,H.d,H.d,[O.a,b.q,[2,h.g],[2,H.a],H.b,[3,H.d],O.c]),b.Cb(1073742336,h.c,h.c,[]),b.Cb(1073742336,f.s,f.s,[]),b.Cb(1073742336,f.i,f.i,[]),b.Cb(1073742336,C.Cb,C.Cb,[]),b.Cb(1073742336,I.o,I.o,[]),b.Cb(1073742336,x.a,x.a,[]),b.Cb(1073742336,w.n,w.n,[[2,w.f],[2,J.f]]),b.Cb(1073742336,P.a,P.a,[]),b.Cb(1073742336,E.f,E.f,[]),b.Cb(1073742336,M.b,M.b,[]),b.Cb(1073742336,w.w,w.w,[]),b.Cb(1073742336,Z.c,Z.c,[]),b.Cb(1073742336,z.e,z.e,[]),b.Cb(1073742336,Q.c,Q.c,[]),b.Cb(1073742336,L.c,L.c,[]),b.Cb(1073742336,v.d,v.d,[]),b.Cb(1073742336,N.e,N.e,[]),b.Cb(1073742336,S.c,S.c,[]),b.Cb(1073742336,T.b,T.b,[]),b.Cb(1073742336,w.u,w.u,[]),b.Cb(1073742336,w.s,w.s,[]),b.Cb(1073742336,U.b,U.b,[]),b.Cb(1073742336,O.e,O.e,[]),b.Cb(1073742336,q.c,q.c,[]),b.Cb(1073742336,V.a,V.a,[]),b.Cb(1073742336,F.c,F.c,[]),b.Cb(1073742336,j.c,j.c,[]),b.Cb(1073742336,B.c,B.c,[]),b.Cb(1073742336,w.o,w.o,[]),b.Cb(1073742336,D.a,D.a,[]),b.Cb(1073742336,G.b,G.b,[]),b.Cb(1073742336,$.c,$.c,[]),b.Cb(1073742336,K.a,K.a,[]),b.Cb(1073742336,R.a,R.a,[]),b.Cb(1073742336,W.c,W.c,[]),b.Cb(1073742336,Y.a,Y.a,[]),b.Cb(1073742336,X.b,X.b,[]),b.Cb(1073742336,X.a,X.a,[]),b.Cb(1073742336,H.g,H.g,[]),b.Cb(1073742336,_.e,_.e,[]),b.Cb(1073742336,ll.a,ll.a,[]),b.Cb(1073742336,m.p,m.p,[[2,m.u],[2,m.m]]),b.Cb(1073742336,e,e,[]),b.Cb(1024,m.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);