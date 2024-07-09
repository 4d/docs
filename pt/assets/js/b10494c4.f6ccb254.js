/*! For license information please see b10494c4.f6ccb254.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58910],{242434:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var a=o(474848),n=o(28453);const r={id:"paths",title:"Pathnames"},d=void 0,t={id:"Concepts/paths",title:"Pathnames",description:"As fun\xe7\xf5es, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gest\xe3o de arquivos e pastas poderosa e flex\xedvel. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/paths.md",sourceDirName:"Concepts",slug:"/Concepts/paths",permalink:"/docs/pt/20/Concepts/paths",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fpaths.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"paths",title:"Pathnames"},sidebar:"docs",previous:{title:"Identificadores",permalink:"/docs/pt/20/Concepts/identifiers"},next:{title:"ORDA",permalink:"/docs/pt/20/ORDA/overview"}},i={},l=[{value:"Sintaxe POSIX",id:"Sintaxe-POSIX",level:2},{value:"Sintaxe espec\xedfica da plataforma",id:"Sintaxe-espec\xedfica-da-plataforma",level:2},{value:"Windows",id:"Windows",level:3},{value:"Entering Windows pathnames and escape sequences",id:"Entering-Windows-pathnames-and-escape-sequences",level:4},{value:"macOS",id:"macOS",level:3},{value:"Nomes de caminho absolutos e relativos",id:"Nomes-de-caminho-absolutos-e-relativos",level:2},{value:"Construtores <code>File</code> e <code>Folder</code>",id:"Construtores-File-e-Folder",level:3},{value:"<code>.file()</code> and <code>.folder()</code> folder methods",id:"file-and-folder-folder-methods",level:3},{value:"Exemplos",id:"Exemplos",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"As fun\xe7\xf5es, propriedades e comandos de File e Folders permitem tratar arquivos e pastas como objetos. Isto torna a gest\xe3o de arquivos e pastas poderosa e flex\xedvel. Por exemplo, para criar um novo arquivo na pasta Documentos do utilizador atual, pode escrever:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Al\xe9m disso, os objectos de arquivos e pastas suportam ",(0,a.jsx)(s.code,{children:"fileSystems"}),", que fornecem o caminho contextual para as pastas principais da aplica\xe7\xe3o."]}),"\n",(0,a.jsxs)(s.p,{children:["4D aceita v\xe1rios ",(0,a.jsx)(s.code,{children:"filesystem"})," pathnames que designam pastas 4D espec\xedficas com localiza\xe7\xe3o vari\xe1vel em macOS e Windows. A filesystem path is evaluated with regards to the context and is returned as an absolute path."]}),"\n",(0,a.jsx)(s.p,{children:"Os nomes de caminho do sistema de arquivos s\xe3o \xfateis por duas raz\xf5es principais:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Independ\xeancia: Pode mover a sua solu\xe7\xe3o de um local para outro, independentemente do sistema operativo, sem ter de se preocupar com caminhos,"}),"\n",(0,a.jsx)(s.li,{children:"Seguran\xe7a: Nenhum c\xf3digo pode acessar elementos localizados acima da raiz do sistema de arquivos no disco (sandboxing)."}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"S\xe3o compat\xedveis os seguintes nomes de caminho do sistema de arquivos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"filesystem"}),(0,a.jsx)(s.th,{children:"Designa"}),(0,a.jsx)(s.th,{children:"Exemplo"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:'"/DATA"'}),(0,a.jsx)(s.td,{children:"Pasta de dados actual"}),(0,a.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Data\\"'})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:'"/LOGS"'}),(0,a.jsx)(s.td,{children:"Pasta Logs"}),(0,a.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Data\\Logs\\"'})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:'"/PACKAGE"'}),(0,a.jsx)(s.td,{children:"Pasta de raiz do projeto (com ou sem extens\xe3o 4dbase)"}),(0,a.jsx)(s.td,{children:'"C:\\MyApps\\Students\\"'})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:'"/PROJECT"'}),(0,a.jsx)(s.td,{children:"Pasta Project"}),(0,a.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Project\\"'})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:'"/RESOURCES"'}),(0,a.jsx)(s.td,{children:"Pasta de recursos do projeto atual"}),(0,a.jsx)(s.td,{children:'"C:\\MyApps\\Resources\\"'})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:'"/SOURCES"'}),(0,a.jsx)(s.td,{children:"Pasta de fontes do projeto atual"}),(0,a.jsx)(s.td,{children:'"C:\\MyApps\\Students\\Project\\Sources\\"'})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"Sintaxe-POSIX",children:"Sintaxe POSIX"}),"\n",(0,a.jsxs)(s.p,{children:["A sintaxe POSIX \xe9 suportada em todas as plataformas. ",(0,a.jsx)(s.strong,{children:"A sintaxe POSIX \xe9 recomendada"})," por ser a mais flex\xedvel. \xc9 utilizado por predefini\xe7\xe3o (devolvido pelas propriedades ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FileClass#path",children:"file.path"})," e ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FolderClass#path",children:"folder.path"}),")."]}),"\n",(0,a.jsx)(s.p,{children:"Com esta sintaxe:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:'as pastas s\xe3o separadas por "/"'}),"\n",(0,a.jsx)(s.li,{children:'os nomes de caminho absolutos come\xe7am com um "/"'}),"\n",(0,a.jsx)(s.li,{children:'para subir uma pasta num caminho relativo, utilize "../" \xe0 frente do nome do caminho (por seguran\xe7a, n\xe3o pode subir no sistema de arquivos).'}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Na sintaxe POSIX, utiliza-se geralmente ",(0,a.jsx)(s.code,{children:"filesystem"})," pathnames com os comandos ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FileClass#file",children:(0,a.jsx)(s.code,{children:"File"})})," e ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FolderClass#folder",children:(0,a.jsx)(s.code,{children:"Folder"})})," , por exemplo:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'var $pathFile : 4D.File\nvar $pathFolder : 4D.Folder\n\n$pathFile:=File("/DATA/Archives/file 2.txt")\n$pathFolder:=Folder("/RESOURCES/Pictures")\n'})}),"\n",(0,a.jsx)(s.h2,{id:"Sintaxe-espec\xedfica-da-plataforma",children:"Sintaxe espec\xedfica da plataforma"}),"\n",(0,a.jsxs)(s.p,{children:["A sintaxe espec\xedfica da plataforma depende do sistema operativo em que o comando \xe9 executado. Note-se que, ao criar um objeto de ficheiro ou pasta com esta sintaxe, \xe9 necess\xe1rio declar\xe1-lo utilizando como par\xe2metro a constante ",(0,a.jsx)(s.code,{children:"fk platform path"})," ."]}),"\n",(0,a.jsx)(s.h3,{id:"Windows",children:"Windows"}),"\n",(0,a.jsx)(s.p,{children:"S\xe3o suportados os seguintes padr\xf5es:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:'os separadores de pasta s\xe3o ""'}),"\n",(0,a.jsx)(s.li,{children:"the text contains ':' and '' as the second and third character,"}),"\n",(0,a.jsx)(s.li,{children:'o texto come\xe7a por "\\".'}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Exemplos com ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FolderClass#folder",children:(0,a.jsx)(s.code,{children:"Folder"})}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("C:\\\\Monday";fk platform path).create()\n$ok:=Folder("\\\\\\\\svr-internal\\\\tempo";fk platform path).create()\n'})}),"\n",(0,a.jsx)(s.h4,{id:"Entering-Windows-pathnames-and-escape-sequences",children:"Entering Windows pathnames and escape sequences"}),"\n",(0,a.jsxs)(s.p,{children:["A linguagem 4D permite a utiliza\xe7\xe3o das sequ\xeancias de escape ",(0,a.jsx)(s.a,{href:"/docs/pt/20/Concepts/quick-tour#escape-sequences"}),". As sequ\xeancias de fuga come\xe7am com uma barra invertida ",(0,a.jsx)(s.code,{children:"\\"}),", seguida de um car\xe1cter. Por exemplo, ",(0,a.jsx)(s.code,{children:"\\t"})," \xe9 a sequ\xeancia de escape para o car\xe1cter ",(0,a.jsx)(s.code,{children:"Tab"})," ."]}),"\n",(0,a.jsxs)(s.p,{children:["Uma vez que o car\xe1cter ",(0,a.jsx)(s.code,{children:"\\"})," tamb\xe9m \xe9 utilizado como separador nos nomes de caminho no Windows, \xe9 necess\xe1rio introduzir um duplo ",(0,a.jsx)(s.code,{children:"\\\\"})," nos nomes de caminho do Windows."]}),"\n",(0,a.jsx)(s.h3,{id:"macOS",children:"macOS"}),"\n",(0,a.jsx)(s.p,{children:"S\xe3o suportados os seguintes padr\xf5es (sintaxe HFS+):"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:'os separadores de pasta s\xe3o ":"'}),"\n",(0,a.jsx)(s.li,{children:'o caminho n\xe3o deve come\xe7ar com um ":"'}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["Exemplos com ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FolderClass#folder",children:(0,a.jsx)(s.code,{children:"Folder"})}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'$ok:=Folder("macintosh hd:";fk platform path).create()\n$ok:=Folder("Monday:Tuesday";fk platform path).create() //a volume deve ser chamado Monday\n'})}),"\n",(0,a.jsx)(s.h2,{id:"Nomes-de-caminho-absolutos-e-relativos",children:"Nomes de caminho absolutos e relativos"}),"\n",(0,a.jsxs)(s.h3,{id:"Construtores-File-e-Folder",children:["Construtores ",(0,a.jsx)(s.code,{children:"File"})," e ",(0,a.jsx)(s.code,{children:"Folder"})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FileClass#file",children:(0,a.jsx)(s.code,{children:"Os comandos File"})})," e ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FolderClass#folder",children:(0,a.jsx)(s.code,{children:"Folder"})})," s\xf3 aceitam ",(0,a.jsx)(s.strong,{children:"nomes de caminho absolutos"}),". Os nomes de caminho relativos n\xe3o s\xe3o suportados e devolver\xe3o erros. Por exemplo, o seguinte c\xf3digo n\xe3o \xe9 permitido:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'    //ERROR\n$ko:=Folder("myFolder").create() //nome do caminho relativo com construtor\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Se quiser tratar a arquivos pastas em v\xe1rias localiza\xe7\xf5es (pasta do projeto, pastas do sistema, etc.), pode utilizar os  ",(0,a.jsx)(s.code,{children:"filesystems"})," (ver acima). Por exemplo, pode escrever:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'$okFolder:=Folder("/PACKAGE/myFolder").create() //pasta criada ao n\xedvel da estrutura\n$okFile:=File("/DATA/Prefs/tempo.txt").create() //ficheiro criado na pasta de dados\n'})}),"\n",(0,a.jsxs)(s.h3,{id:"file-and-folder-folder-methods",children:[(0,a.jsx)(s.code,{children:".file()"})," and ",(0,a.jsx)(s.code,{children:".folder()"})," folder methods"]}),"\n",(0,a.jsxs)(s.p,{children:["As fun\xe7\xf5es dos objetos pasta, tais como ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FolderClass#file",children:(0,a.jsx)(s.code,{children:"folder.file()"})})," e ",(0,a.jsx)(s.a,{href:"/docs/pt/20/API/FolderClass#folder-1",children:(0,a.jsx)(s.code,{children:"folder.folder()"})})," esperam nomes de caminho POSIX relativos. Por exemplo:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'var $userImages : 4D.Folder\nvar $ok : Boolean\n\n  //to reference a "Picture" folder within the user documents folder\n$userImages:=Folder(fk documents folder).folder("Pictures")\n  //to create a folder on the desktop\n$ok:=Folder(fk desktop folder).folder("myFolder").create()\n'})}),"\n",(0,a.jsx)(s.p,{children:"Os nomes de caminho absolutos n\xe3o s\xe3o suportados e devolver\xe3o erros."}),"\n",(0,a.jsx)(s.h2,{id:"Exemplos",children:"Exemplos"}),"\n",(0,a.jsx)(s.p,{children:"A flexibilidade das fun\xe7\xf5es de arquivos e pastas oferece-lhe v\xe1rias possibilidades de tratamento de arquivos e pastas, como nos exemplos seguintes:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'var $fold : 4D.Folder\nvar $file : 4D.File\n\n$fold:=Folder(fk desktop folder).folder("archive/jan2019")\n$fold:=Folder("/DATA/archive/jan2019")\n$file:=Folder("/DATA/archive/jan2019").file("total.txt")\n$file:=File("/DATA/info.txt")\n$file:=File("c:\\\\archives\\\\local\\\\jan2019.txt";fk platform path)\n$file:=File(fk backup log file)\n'})})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},221020:(e,s,o)=>{var a=o(296540),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,t=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,o){var a,r={},l=null,c=null;for(a in void 0!==o&&(l=""+o),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)d.call(s,a)&&!i.hasOwnProperty(a)&&(r[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===r[a]&&(r[a]=s[a]);return{$$typeof:n,type:e,key:l,ref:c,props:r,_owner:t.current}}s.Fragment=r,s.jsx=l,s.jsxs=l},474848:(e,s,o)=>{e.exports=o(221020)},28453:(e,s,o)=>{o.d(s,{R:()=>d,x:()=>t});var a=o(296540);const n={},r=a.createContext(n);function d(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);