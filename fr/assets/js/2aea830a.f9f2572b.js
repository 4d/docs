/*! For license information please see 2aea830a.f9f2572b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34136],{504298:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=s(474848),o=s(28453);const t={id:"real-time-monitor",title:"Real Time Monitor Page"},i=void 0,a={id:"ServerWindow/real-time-monitor",title:"Real Time Monitor Page",description:'La page Moniteur temps r\xe9el permet de surveiller en temps r\xe9el le d\xe9roulement des op\xe9rations "longues" effectu\xe9es par l\u2019application. Ces op\xe9rations sont par exemple les recherches s\xe9quentielles, l\u2019ex\xe9cution de formules, etc.',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/ServerWindow/real-time-monitor.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/real-time-monitor",permalink:"/docs/fr/20-R4/ServerWindow/real-time-monitor",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Freal-time-monitor.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"real-time-monitor",title:"Real Time Monitor Page"},sidebar:"docs",previous:{title:"HTTP Server Page",permalink:"/docs/fr/20-R4/ServerWindow/http-server"},next:{title:"Administration from Remote Machines",permalink:"/docs/fr/20-R4/ServerWindow/remote-admin"}},l={},d=[{value:"Mode avanc\xe9",id:"Mode-avanc\xe9",level:2},{value:"Bouton Instantan\xe9",id:"Bouton-Instantan\xe9",level:2},{value:"Afficher op\xe9rations au moins 5 secondes",id:"Afficher-op\xe9rations-au-moins-5-secondes",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'La page Moniteur temps r\xe9el permet de surveiller en temps r\xe9el le d\xe9roulement des op\xe9rations "longues" effectu\xe9es par l\u2019application. Ces op\xe9rations sont par exemple les recherches s\xe9quentielles, l\u2019ex\xe9cution de formules, etc.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(685080).A+"",width:"700",height:"472"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Cette page est disponible dans la fen\xeatre d\u2019administration du poste serveur et \xe9galement depuis un poste 4D distant. Dans le cas d\u2019un poste distant, la page affiche les donn\xe9es des op\xe9rations effectu\xe9es sur le poste serveur."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Chaque op\xe9ration longue sur les donn\xe9es entra\xeene l\u2019ajout d\u2019une ligne. La ligne dispara\xeet automatiquement lorsque l\u2019op\xe9ration est termin\xe9e (l'option ",(0,r.jsx)(n.strong,{children:"Afficher op\xe9rations au moins 5 secondes"})," permet de conserver \xe0 l'\xe9cran les op\xe9rations ex\xe9cut\xe9es rapidement, cf. ci-dessous)."]}),"\n",(0,r.jsx)(n.p,{children:"Les informations suivantes sont fournies pour chaque ligne :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Heure d\xe9but"}),' : heure de d\xe9marrage de l\u2019op\xe9ration au format "jj/mm/aaaa - hh:mm:ss"']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dur\xe9e"})," (ms) : dur\xe9e en cours de l\u2019op\xe9ration en millisecondes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Informations"})," : libell\xe9 de l\u2019op\xe9ration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"D\xe9tails"})," : cette zone affiche un ensemble d'informations d\xe9taill\xe9es dont le contenu varie en fonction du type d'op\xe9ration s\xe9lectionn\xe9. En particulier :\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cr\xe9\xe9e sur"})," : indique si l'op\xe9ration r\xe9sulte d'une action d'un client (Cr\xe9\xe9e sur client) ou si elle a \xe9t\xe9 d\xe9marr\xe9e explicitement sur le serveur via une proc\xe9dure stock\xe9e ou l'option \"Ex\xe9cuter sur serveur\" (Cr\xe9\xe9e sur serveur)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"D\xe9tails de l'op\xe9ration"})," : d\xe9crit le type d'op\xe9ration ainsi que (pour les op\xe9rations de recherche) le plan de recherche."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Sous-op\xe9rations"})," (le cas \xe9ch\xe9ant) : affiche les op\xe9rations d\xe9pendantes de l'op\xe9ration s\xe9lectionn\xe9e (par exemple, suppression des enregistrements li\xe9s avant suppression de l'enregistrement parent)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"D\xe9tails du process"})," : fournit des informations suppl\xe9mentaires concernant la table, le champ, le process ou le client, en fonction du type d'op\xe9ration"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["La page d\u2019observation en temps r\xe9el utilise en interne la commande ",(0,r.jsx)(n.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1277.html",children:(0,r.jsx)(n.code,{children:"LIRE APERCU ACTIVITE"})}),". More information can be found in this command description."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"La page est active et mise \xe0 jour en permanence d\xe8s qu\u2019elle est affich\xe9e. Il est \xe0 noter que son fonctionnement peut ralentir sensiblement l\u2019ex\xe9cution de l\u2019application. Il est possible de suspendre la mise \xe0 jour de la page d\u2019une des mani\xe8res suivantes :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["en cliquant sur le bouton ",(0,r.jsx)(n.strong,{children:"Pause"}),","]}),"\n",(0,r.jsx)(n.li,{children:"en cliquant dans la liste,"}),"\n",(0,r.jsx)(n.li,{children:"en appuyant sur la barre d\u2019espace."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['Lorsque la page est en pause, le message "SUSPENDU" est affich\xe9 et le libell\xe9 du bouton devient ',(0,r.jsx)(n.strong,{children:"Reprendre"}),". Il est possible de reprendre l\u2019observation des op\xe9rations en effectuant la m\xeame action que pour la mise en pause."]}),"\n",(0,r.jsx)(n.h2,{id:"Mode-avanc\xe9",children:"Mode avanc\xe9"}),"\n",(0,r.jsx)(n.p,{children:"La page MTR peut afficher des informations suppl\xe9mentaires, si n\xe9cessaire, pour chaque op\xe9ration list\xe9e."}),"\n",(0,r.jsxs)(n.p,{children:["Pour acc\xe9der au mode avanc\xe9 pour une op\xe9ration, appuyez sur la touche ",(0,r.jsx)(n.strong,{children:"Maj"})," et s\xe9lectionnez l'op\xe9ration. Toutes les informations disponibles sont alors affich\xe9es dans la zone \"D\xe9tails du process\" sans aucun filtre (\xe0 l'instar de ce qui est retourn\xe9 par la commande ",(0,r.jsx)(n.code,{children:"LIRE APERCU ACTIVITE"}),"). Les informations disponibles d\xe9pendent de l'op\xe9ration s\xe9lectionn\xe9e."]}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple d'information affich\xe9e en mode standard :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(564049).A+"",width:"998",height:"293"})}),"\n",(0,r.jsxs)(n.p,{children:["En mode avanc\xe9 (",(0,r.jsx)(n.strong,{children:"Maj+Clic"})," sur la ligne de l'op\xe9ration), des informations suppl\xe9mentaires sont affich\xe9es :"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(142938).A+"",width:"999",height:"288"})}),"\n",(0,r.jsx)(n.h2,{id:"Bouton-Instantan\xe9",children:"Bouton Instantan\xe9"}),"\n",(0,r.jsxs)(n.p,{children:["Le bouton ",(0,r.jsx)(n.strong,{children:"Instantan\xe9"})," vous permet de copier dans le presse-papiers toutes les op\xe9rations affich\xe9es dans le panneau du MTR, ainsi que les d\xe9tails associ\xe9s (informations sur les process et les sous-op\xe9rations) :"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(40897).A+"",width:"140",height:"40"})}),"\n",(0,r.jsx)(n.h2,{id:"Afficher-op\xe9rations-au-moins-5-secondes",children:"Afficher op\xe9rations au moins 5 secondes"}),"\n",(0,r.jsxs)(n.p,{children:["Si vous cochez l'option ",(0,r.jsx)(n.strong,{children:"Afficher op\xe9rations au moins 5 secondes"}),", toutes les op\xe9rations list\xe9es seront affich\xe9es dans la page pendant au moins cinq secondes, m\xeame apr\xe8s que l'ex\xe9cution de l'op\xe9ration soit termin\xe9e. Les op\xe9rations termin\xe9es restant affich\xe9es sont gris\xe9es dans la liste. Cette fonction est utile lorsque vous voulez observer des op\xe9rations dont l'ex\xe9cution est tr\xe8s rapide."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var r=s(296540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var r,t={},d=null,c=null;for(r in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(t[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===t[r]&&(t[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:c,props:t,_owner:a.current}}n.Fragment=t,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},564049:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/server-admin-monitor-adv1-245fbcdba652cbfee2f046d54326bd71.png"},142938:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/server-admin-monitor-adv2-8252febb014e028685127a890471c913.png"},685080:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/server-admin-monitor-page-8ffd13ff2756e987d786f0718515a4e5.png"},40897:(e,n,s)=>{s.d(n,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(296540);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);