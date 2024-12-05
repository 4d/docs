"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33315"],{879068:function(t,e,r){r.d(e,{A:function(){return o}});var a=r(974146),o=class{constructor(t){this.init=t,this.records=this.init()}static{(0,a.eW)(this,"ImperativeState")}reset(){this.records=this.init()}}},518010:function(t,e,r){function a(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}r.d(e,{A:function(){return a}}),(0,r(974146).eW)(a,"populateCommonDb")},617321:function(t,e,r){r.d(e,{diagram:function(){return tb}});var a=r(518010),o=r(879068),i=r(468394),c=r(974146),n=r(703194),s=r(727818),h={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},d=c.vZ.gitGraph,l=(0,c.eW)(()=>(0,i.Rb)({...d,...(0,c.iE)().gitGraph}),"getConfig"),$=new o.A(()=>{let t=l(),e=t.mainBranchName,r=t.mainBranchOrder;return{mainBranchName:e,commits:new Map,head:null,branchConfig:new Map([[e,{name:e,order:r}]]),branches:new Map([[e,null]]),currBranch:e,direction:"LR",seq:0,options:{}}});function m(){return(0,i.MX)({length:7})}function g(t,e){let r=Object.create(null);return t.reduce((t,a)=>{let o=e(a);return!r[o]&&(r[o]=!0,t.push(a)),t},[])}(0,c.eW)(m,"getID"),(0,c.eW)(g,"uniqBy");var y=(0,c.eW)(function(t){$.records.direction=t},"setDirection"),p=(0,c.eW)(function(t){c.cM.debug("options str",t),t=(t=t?.trim())||"{}";try{$.records.options=JSON.parse(t)}catch(t){c.cM.error("error while parsing gitGraph options",t.message)}},"setOptions"),f=(0,c.eW)(function(){return $.records.options},"getOptions"),x=(0,c.eW)(function(t){let e=t.msg,r=t.id,a=t.type,o=t.tags;c.cM.info("commit",e,r,a,o),c.cM.debug("Entering commit:",e,r,a,o);let i=l();r=c.SY.sanitizeText(r,i),e=c.SY.sanitizeText(e,i),o=o?.map(t=>c.SY.sanitizeText(t,i));let n={id:r||$.records.seq+"-"+m(),message:e,seq:$.records.seq++,type:a??h.NORMAL,tags:o??[],parents:null==$.records.head?[]:[$.records.head.id],branch:$.records.currBranch};$.records.head=n,c.cM.info("main branch",i.mainBranchName),$.records.commits.set(n.id,n),$.records.branches.set($.records.currBranch,n.id),c.cM.debug("in pushCommit "+n.id)},"commit"),u=(0,c.eW)(function(t){let e=t.name,r=t.order;if(e=c.SY.sanitizeText(e,l()),$.records.branches.has(e))throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${e}")`);$.records.branches.set(e,null!=$.records.head?$.records.head.id:null),$.records.branchConfig.set(e,{name:e,order:r}),B(e),c.cM.debug("in createBranch")},"branch"),b=(0,c.eW)(t=>{let e=t.branch,r=t.id,a=t.type,o=t.tags,i=l();e=c.SY.sanitizeText(e,i),r&&(r=c.SY.sanitizeText(r,i));let n=$.records.branches.get($.records.currBranch),s=$.records.branches.get(e),d=n?$.records.commits.get(n):void 0,g=s?$.records.commits.get(s):void 0;if(d&&g&&d.branch===e)throw Error(`Cannot merge branch '${e}' into itself.`);if($.records.currBranch===e){let t=Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},t}if(void 0===d||!d){let t=Error(`Incorrect usage of "merge". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["commit"]},t}if(!$.records.branches.has(e)){let t=Error('Incorrect usage of "merge". Branch to be merged ('+e+") does not exist");throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:[`branch ${e}`]},t}if(void 0===g||!g){let t=Error('Incorrect usage of "merge". Branch to be merged ('+e+") has no commits");throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:['"commit"']},t}if(d===g){let t=Error('Incorrect usage of "merge". Both branches have same head');throw t.hash={text:`merge ${e}`,token:`merge ${e}`,expected:["branch abc"]},t}if(r&&$.records.commits.has(r)){let t=Error('Incorrect usage of "merge". Commit with id:'+r+" already exists, use different custom Id");throw t.hash={text:`merge ${e} ${r} ${a} ${o?.join(" ")}`,token:`merge ${e} ${r} ${a} ${o?.join(" ")}`,expected:[`merge ${e} ${r}_UNIQUE ${a} ${o?.join(" ")}`]},t}let y={id:r||`${$.records.seq}-${m()}`,message:`merged branch ${e} into ${$.records.currBranch}`,seq:$.records.seq++,parents:null==$.records.head?[]:[$.records.head.id,s||""],branch:$.records.currBranch,type:h.MERGE,customType:a,customId:!!r,tags:o??[]};$.records.head=y,$.records.commits.set(y.id,y),$.records.branches.set($.records.currBranch,y.id),c.cM.debug($.records.branches),c.cM.debug("in mergeBranch")},"merge"),w=(0,c.eW)(function(t){let e=t.id,r=t.targetId,a=t.tags,o=t.parent;c.cM.debug("Entering cherryPick:",e,r,a);let i=l();if(e=c.SY.sanitizeText(e,i),r=c.SY.sanitizeText(r,i),a=a?.map(t=>c.SY.sanitizeText(t,i)),o=c.SY.sanitizeText(o,i),!e||!$.records.commits.has(e)){let t=Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let n=$.records.commits.get(e);if(void 0===n||!n)throw Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');if(o&&!(Array.isArray(n.parents)&&n.parents.includes(o)))throw Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");let s=n.branch;if(n.type===h.MERGE&&!o)throw Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");if(!r||!$.records.commits.has(r)){if(s===$.records.currBranch){let t=Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let t=$.records.branches.get($.records.currBranch);if(void 0===t||!t){let t=Error(`Incorrect usage of "cherry-pick". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let i=$.records.commits.get(t);if(void 0===i||!i){let t=Error(`Incorrect usage of "cherry-pick". Current branch (${$.records.currBranch})has no commits`);throw t.hash={text:`cherryPick ${e} ${r}`,token:`cherryPick ${e} ${r}`,expected:["cherry-pick abc"]},t}let d={id:$.records.seq+"-"+m(),message:`cherry-picked ${n?.message} into ${$.records.currBranch}`,seq:$.records.seq++,parents:null==$.records.head?[]:[$.records.head.id,n.id],branch:$.records.currBranch,type:h.CHERRY_PICK,tags:a?a.filter(Boolean):[`cherry-pick:${n.id}${n.type===h.MERGE?`|parent:${o}`:""}`]};$.records.head=d,$.records.commits.set(d.id,d),$.records.branches.set($.records.currBranch,d.id),c.cM.debug($.records.branches),c.cM.debug("in cherryPick")}},"cherryPick"),B=(0,c.eW)(function(t){if(t=c.SY.sanitizeText(t,l()),$.records.branches.has(t)){$.records.currBranch=t;let e=$.records.branches.get($.records.currBranch);void 0!==e&&e?$.records.head=$.records.commits.get(e)??null:$.records.head=null}else{let e=Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);throw e.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]},e}},"checkout");function E(t,e,r){let a=t.indexOf(e);-1===a?t.push(r):t.splice(a,1,r)}function k(t){let e=t.reduce((t,e)=>t.seq>e.seq?t:e,t[0]),r="";t.forEach(function(t){t===e?r+="	*":r+="	|"});let a=[r,e.id,e.seq];for(let t in $.records.branches)$.records.branches.get(t)===e.id&&a.push(t);if(c.cM.debug(a.join(" ")),e.parents&&2==e.parents.length&&e.parents[0]&&e.parents[1]){let r=$.records.commits.get(e.parents[0]);E(t,e,r),e.parents[1]&&t.push($.records.commits.get(e.parents[1]))}else if(0==e.parents.length)return;else if(e.parents[0]){let r=$.records.commits.get(e.parents[0]);E(t,e,r)}k(t=g(t,t=>t.id))}(0,c.eW)(E,"upsert"),(0,c.eW)(k,"prettyPrintCommitHistory");var M=(0,c.eW)(function(){c.cM.debug($.records.commits),k([v()[0]])},"prettyPrint"),C=(0,c.eW)(function(){$.reset(),(0,c.ZH)()},"clear"),L=(0,c.eW)(function(){return[...$.records.branchConfig.values()].map((t,e)=>null!==t.order&&void 0!==t.order?t:{...t,order:parseFloat(`0.${e}`)}).sort((t,e)=>(t.order??0)-(e.order??0)).map(({name:t})=>({name:t}))},"getBranchesAsObjArray"),T=(0,c.eW)(function(){return $.records.branches},"getBranches"),W=(0,c.eW)(function(){return $.records.commits},"getCommits"),v=(0,c.eW)(function(){let t=[...$.records.commits.values()];return t.forEach(function(t){c.cM.debug(t.id)}),t.sort((t,e)=>t.seq-e.seq),t},"getCommitsArray"),R=(0,c.eW)(function(){return $.records.currBranch},"getCurrentBranch"),P=(0,c.eW)(function(){return $.records.direction},"getDirection"),A={commitType:h,getConfig:l,setDirection:y,setOptions:p,getOptions:f,commit:x,branch:u,merge:b,cherryPick:w,checkout:B,prettyPrint:M,clear:C,getBranchesAsObjArray:L,getBranches:T,getCommits:W,getCommitsArray:v,getCurrentBranch:R,getDirection:P,getHead:(0,c.eW)(function(){return $.records.head},"getHead"),setAccTitle:c.GN,getAccTitle:c.eu,getAccDescription:c.Mx,setAccDescription:c.U$,setDiagramTitle:c.g2,getDiagramTitle:c.Kr},I=(0,c.eW)((t,e)=>{for(let r of((0,a.A)(t,e),t.dir&&e.setDirection(t.dir),t.statements))G(r,e)},"populate"),G=(0,c.eW)((t,e)=>{let r={Commit:(0,c.eW)(t=>e.commit(S(t)),"Commit"),Branch:(0,c.eW)(t=>e.branch(O(t)),"Branch"),Merge:(0,c.eW)(t=>e.merge(q(t)),"Merge"),Checkout:(0,c.eW)(t=>e.checkout(H(t)),"Checkout"),CherryPicking:(0,c.eW)(t=>e.cherryPick(z(t)),"CherryPicking")}[t.$type];r?r(t):c.cM.error(`Unknown statement type: ${t.$type}`)},"parseStatement"),S=(0,c.eW)(t=>({id:t.id,msg:t.message??"",type:void 0!==t.type?h[t.type]:h.NORMAL,tags:t.tags??void 0}),"parseCommit"),O=(0,c.eW)(t=>({name:t.name,order:t.order??0}),"parseBranch"),q=(0,c.eW)(t=>({branch:t.branch,id:t.id??"",type:void 0!==t.type?h[t.type]:void 0,tags:t.tags??void 0}),"parseMerge"),H=(0,c.eW)(t=>t.branch,"parseCheckout"),z=(0,c.eW)(t=>({id:t.id,targetId:"",tags:t.tags?.length===0?void 0:t.tags,parent:t.parent}),"parseCherryPicking"),Y={parse:(0,c.eW)(async t=>{let e=await (0,n.Qc)("gitGraph",t);c.cM.debug(e),I(e,A)},"parse")},D=(0,c.nV)(),N=D?.gitGraph,j=new Map,K=new Map,F=new Map,_=[],U=0,V="LR",Q=(0,c.eW)(()=>{j.clear(),K.clear(),F.clear(),U=0,_=[],V="LR"},"clear"),X=(0,c.eW)(t=>{let e=document.createElementNS("http://www.w3.org/2000/svg","text");return("string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach(t=>{let r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),r.setAttribute("class","row"),r.textContent=t.trim(),e.appendChild(r)}),e},"drawText"),Z=(0,c.eW)(t=>{let e,r,a;return"BT"===V?(r=(0,c.eW)((t,e)=>t<=e,"comparisonFunc"),a=1/0):(r=(0,c.eW)((t,e)=>t>=e,"comparisonFunc"),a=0),t.forEach(t=>{let o="TB"===V||"BT"==V?K.get(t)?.y:K.get(t)?.x;void 0!==o&&r(o,a)&&(e=t,a=o)}),e},"findClosestParent"),J=(0,c.eW)(t=>{let e="",r=1/0;return t.forEach(t=>{let a=K.get(t).y;a<=r&&(e=t,r=a)}),e||void 0},"findClosestParentBT"),tt=(0,c.eW)((t,e,r)=>{let a=r,o=r,i=[];t.forEach(t=>{let r=e.get(t);if(!r)throw Error(`Commit not found for key ${t}`);r.parents.length?o=Math.max(a=tr(r),o):i.push(r),ta(r,a)}),a=o,i.forEach(t=>{to(t,a,r)}),t.forEach(t=>{let r=e.get(t);if(r?.parents.length){let t=J(r.parents);(a=K.get(t).y-40)<=o&&(o=a);let e=j.get(r.branch).pos,i=a-10;K.set(r.id,{x:e,y:i})}})},"setParallelBTPos"),te=(0,c.eW)(t=>{let e=Z(t.parents.filter(t=>null!==t));if(!e)throw Error(`Closest parent not found for commit ${t.id}`);let r=K.get(e)?.y;if(void 0===r)throw Error(`Closest parent position not found for commit ${t.id}`);return r},"findClosestParentPos"),tr=(0,c.eW)(t=>te(t)+40,"calculateCommitPosition"),ta=(0,c.eW)((t,e)=>{let r=j.get(t.branch);if(!r)throw Error(`Branch not found for commit ${t.id}`);let a=r.pos,o=e+10;return K.set(t.id,{x:a,y:o}),{x:a,y:o}},"setCommitPosition"),to=(0,c.eW)((t,e,r)=>{let a=j.get(t.branch);if(!a)throw Error(`Branch not found for commit ${t.id}`);let o=a.pos;K.set(t.id,{x:o,y:e+r})},"setRootPosition"),ti=(0,c.eW)((t,e,r,a,o,i)=>{if(i===h.HIGHLIGHT)t.append("rect").attr("x",r.x-10).attr("y",r.y-10).attr("width",20).attr("height",20).attr("class",`commit ${e.id} commit-highlight${o%8} ${a}-outer`),t.append("rect").attr("x",r.x-6).attr("y",r.y-6).attr("width",12).attr("height",12).attr("class",`commit ${e.id} commit${o%8} ${a}-inner`);else if(i===h.CHERRY_PICK)t.append("circle").attr("cx",r.x).attr("cy",r.y).attr("r",10).attr("class",`commit ${e.id} ${a}`),t.append("circle").attr("cx",r.x-3).attr("cy",r.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${a}`),t.append("circle").attr("cx",r.x+3).attr("cy",r.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${e.id} ${a}`),t.append("line").attr("x1",r.x+3).attr("y1",r.y+1).attr("x2",r.x).attr("y2",r.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${a}`),t.append("line").attr("x1",r.x-3).attr("y1",r.y+1).attr("x2",r.x).attr("y2",r.y-5).attr("stroke","#fff").attr("class",`commit ${e.id} ${a}`);else{let c=t.append("circle");if(c.attr("cx",r.x),c.attr("cy",r.y),c.attr("r",e.type===h.MERGE?9:10),c.attr("class",`commit ${e.id} commit${o%8}`),i===h.MERGE){let i=t.append("circle");i.attr("cx",r.x),i.attr("cy",r.y),i.attr("r",6),i.attr("class",`commit ${a} ${e.id} commit${o%8}`)}i===h.REVERSE&&t.append("path").attr("d",`M ${r.x-5},${r.y-5}L${r.x+5},${r.y+5}M${r.x-5},${r.y+5}L${r.x+5},${r.y-5}`).attr("class",`commit ${a} ${e.id} commit${o%8}`)}},"drawCommitBullet"),tc=(0,c.eW)((t,e,r,a)=>{if(e.type!==h.CHERRY_PICK&&(e.customId&&e.type===h.MERGE||e.type!==h.MERGE)&&N?.showCommitLabel){let o=t.append("g"),i=o.insert("rect").attr("class","commit-label-bkg"),c=o.append("text").attr("x",a).attr("y",r.y+25).attr("class","commit-label").text(e.id),n=c.node()?.getBBox();if(n&&(i.attr("x",r.posWithOffset-n.width/2-2).attr("y",r.y+13.5).attr("width",n.width+4).attr("height",n.height+4),"TB"===V||"BT"===V?(i.attr("x",r.x-(n.width+16+5)).attr("y",r.y-12),c.attr("x",r.x-(n.width+16)).attr("y",r.y+n.height-12)):c.attr("x",r.posWithOffset-n.width/2),N.rotateCommitLabel)){if("TB"===V||"BT"===V)c.attr("transform","rotate(-45, "+r.x+", "+r.y+")"),i.attr("transform","rotate(-45, "+r.x+", "+r.y+")");else{let t=-7.5-(n.width+10)/25*9.5,e=10+n.width/25*8.5;o.attr("transform","translate("+t+", "+e+") rotate(-45, "+a+", "+r.y+")")}}}},"drawCommitLabel"),tn=(0,c.eW)((t,e,r,a)=>{if(e.tags.length>0){let o=0,i=0,c=0,n=[];for(let a of e.tags.reverse()){let e=t.insert("polygon"),s=t.append("circle"),h=t.append("text").attr("y",r.y-16-o).attr("class","tag-label").text(a),d=h.node()?.getBBox();if(!d)throw Error("Tag bbox not found");i=Math.max(i,d.width),c=Math.max(c,d.height),h.attr("x",r.posWithOffset-d.width/2),n.push({tag:h,hole:s,rect:e,yOffset:o}),o+=20}for(let{tag:t,hole:e,rect:o,yOffset:s}of n){let n=c/2,h=r.y-19.2-s;if(o.attr("class","tag-label-bkg").attr("points",`
      ${a-i/2-2},${h+2}  
      ${a-i/2-2},${h-2}
      ${r.posWithOffset-i/2-4},${h-n-2}
      ${r.posWithOffset+i/2+4},${h-n-2}
      ${r.posWithOffset+i/2+4},${h+n+2}
      ${r.posWithOffset-i/2-4},${h+n+2}`),e.attr("cy",h).attr("cx",a-i/2+2).attr("r",1.5).attr("class","tag-hole"),"TB"===V||"BT"===V){let c=a+s;o.attr("class","tag-label-bkg").attr("points",`
        ${r.x},${c+2}
        ${r.x},${c-2}
        ${r.x+10},${c-n-2}
        ${r.x+10+i+4},${c-n-2}
        ${r.x+10+i+4},${c+n+2}
        ${r.x+10},${c+n+2}`).attr("transform","translate(12,12) rotate(45, "+r.x+","+a+")"),e.attr("cx",r.x+2).attr("cy",c).attr("transform","translate(12,12) rotate(45, "+r.x+","+a+")"),t.attr("x",r.x+5).attr("y",c+3).attr("transform","translate(14,14) rotate(45, "+r.x+","+a+")")}}}},"drawCommitTags"),ts=(0,c.eW)(t=>{switch(t.customType??t.type){case h.NORMAL:return"commit-normal";case h.REVERSE:return"commit-reverse";case h.HIGHLIGHT:return"commit-highlight";case h.MERGE:return"commit-merge";case h.CHERRY_PICK:return"commit-cherry-pick";default:return"commit-normal"}},"getCommitClassType"),th=(0,c.eW)((t,e,r,a)=>{let o={x:0,y:0};if(t.parents.length>0){let r=Z(t.parents);if(r){let i=a.get(r)??o;return"TB"===e?i.y+40:"BT"===e?(a.get(t.id)??o).y-40:i.x+40}}else{if("TB"===e)return 30;if("BT"===e)return(a.get(t.id)??o).y-40}return 0},"calculatePosition"),td=(0,c.eW)((t,e,r)=>{let a="BT"===V&&r?e:e+10,o="TB"===V||"BT"===V?a:j.get(t.branch)?.pos,i="TB"===V||"BT"===V?j.get(t.branch)?.pos:a;if(void 0===i||void 0===o)throw Error(`Position were undefined for commit ${t.id}`);return{x:i,y:o,posWithOffset:a}},"getCommitPosition"),tl=(0,c.eW)((t,e,r)=>{if(!N)throw Error("GitGraph config not found");let a=t.append("g").attr("class","commit-bullets"),o=t.append("g").attr("class","commit-labels"),i="TB"===V||"BT"===V?30:0,n=[...e.keys()],s=N?.parallelCommits??!1,h=n.sort((0,c.eW)((t,r)=>{let a=e.get(t)?.seq,o=e.get(r)?.seq;return void 0!==a&&void 0!==o?a-o:0},"sortKeys"));"BT"===V&&(s&&tt(h,e,i),h=h.reverse()),h.forEach(t=>{let c=e.get(t);if(!c)throw Error(`Commit not found for key ${t}`);s&&(i=th(c,V,i,K));let n=td(c,i,s);if(r){let t=ts(c),e=c.customType??c.type,r=j.get(c.branch)?.index??0;ti(a,c,n,t,r,e),tc(o,c,n,i),tn(o,c,n,i)}"TB"===V||"BT"===V?K.set(c.id,{x:n.x,y:n.posWithOffset}):K.set(c.id,{x:n.posWithOffset,y:n.y}),(i="BT"===V&&s?i+40:i+40+10)>U&&(U=i)})},"drawCommits"),t$=(0,c.eW)((t,e,r,a,o)=>{let i=("TB"===V||"BT"===V?r.x<a.x:r.y<a.y)?e.branch:t.branch,n=(0,c.eW)(t=>t.branch===i,"isOnBranchToGetCurve"),s=(0,c.eW)(r=>r.seq>t.seq&&r.seq<e.seq,"isBetweenCommits");return[...o.values()].some(t=>s(t)&&n(t))},"shouldRerouteArrow"),tm=(0,c.eW)((t,e,r=0)=>{let a=t+Math.abs(t-e)/2;if(r>5)return a;if(_.every(t=>Math.abs(t-a)>=10))return _.push(a),a;let o=Math.abs(t-e);return tm(t,e-o/5,r+1)},"findLane"),tg=(0,c.eW)((t,e,r,a)=>{let o;let i=K.get(e.id),c=K.get(r.id);if(void 0===i||void 0===c)throw Error(`Commit positions not found for commits ${e.id} and ${r.id}`);let n=t$(e,r,i,c,a),s="",d="",l=0,$=0,m=j.get(r.branch)?.index;if(r.type===h.MERGE&&e.id!==r.parents[0]&&(m=j.get(e.branch)?.index),n){s="A 10 10, 0, 0, 0,",d="A 10 10, 0, 0, 1,",l=10,$=10;let t=i.y<c.y?tm(i.y,c.y):tm(c.y,i.y),r=i.x<c.x?tm(i.x,c.x):tm(c.x,i.x);"TB"===V?i.x<c.x?o=`M ${i.x} ${i.y} L ${r-l} ${i.y} ${d} ${r} ${i.y+$} L ${r} ${c.y-l} ${s} ${r+$} ${c.y} L ${c.x} ${c.y}`:(m=j.get(e.branch)?.index,o=`M ${i.x} ${i.y} L ${r+l} ${i.y} ${s} ${r} ${i.y+$} L ${r} ${c.y-l} ${d} ${r-$} ${c.y} L ${c.x} ${c.y}`):"BT"===V?i.x<c.x?o=`M ${i.x} ${i.y} L ${r-l} ${i.y} ${s} ${r} ${i.y-$} L ${r} ${c.y+l} ${d} ${r+$} ${c.y} L ${c.x} ${c.y}`:(m=j.get(e.branch)?.index,o=`M ${i.x} ${i.y} L ${r+l} ${i.y} ${d} ${r} ${i.y-$} L ${r} ${c.y+l} ${s} ${r-$} ${c.y} L ${c.x} ${c.y}`):i.y<c.y?o=`M ${i.x} ${i.y} L ${i.x} ${t-l} ${s} ${i.x+$} ${t} L ${c.x-l} ${t} ${d} ${c.x} ${t+$} L ${c.x} ${c.y}`:(m=j.get(e.branch)?.index,o=`M ${i.x} ${i.y} L ${i.x} ${t+l} ${d} ${i.x+$} ${t} L ${c.x-l} ${t} ${s} ${c.x} ${t-$} L ${c.x} ${c.y}`)}else s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",l=20,$=20,"TB"===V?(i.x<c.x&&(o=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${i.x} ${i.y} L ${i.x} ${c.y-l} ${s} ${i.x+$} ${c.y} L ${c.x} ${c.y}`:`M ${i.x} ${i.y} L ${c.x-l} ${i.y} ${d} ${c.x} ${i.y+$} L ${c.x} ${c.y}`),i.x>c.x&&(s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",l=20,$=20,o=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${i.x} ${i.y} L ${i.x} ${c.y-l} ${d} ${i.x-$} ${c.y} L ${c.x} ${c.y}`:`M ${i.x} ${i.y} L ${c.x+l} ${i.y} ${s} ${c.x} ${i.y+$} L ${c.x} ${c.y}`),i.x===c.x&&(o=`M ${i.x} ${i.y} L ${c.x} ${c.y}`)):"BT"===V?(i.x<c.x&&(o=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${i.x} ${i.y} L ${i.x} ${c.y+l} ${d} ${i.x+$} ${c.y} L ${c.x} ${c.y}`:`M ${i.x} ${i.y} L ${c.x-l} ${i.y} ${s} ${c.x} ${i.y-$} L ${c.x} ${c.y}`),i.x>c.x&&(s="A 20 20, 0, 0, 0,",d="A 20 20, 0, 0, 1,",l=20,$=20,o=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${i.x} ${i.y} L ${i.x} ${c.y+l} ${s} ${i.x-$} ${c.y} L ${c.x} ${c.y}`:`M ${i.x} ${i.y} L ${c.x-l} ${i.y} ${s} ${c.x} ${i.y-$} L ${c.x} ${c.y}`),i.x===c.x&&(o=`M ${i.x} ${i.y} L ${c.x} ${c.y}`)):(i.y<c.y&&(o=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${i.x} ${i.y} L ${c.x-l} ${i.y} ${d} ${c.x} ${i.y+$} L ${c.x} ${c.y}`:`M ${i.x} ${i.y} L ${i.x} ${c.y-l} ${s} ${i.x+$} ${c.y} L ${c.x} ${c.y}`),i.y>c.y&&(o=r.type===h.MERGE&&e.id!==r.parents[0]?`M ${i.x} ${i.y} L ${c.x-l} ${i.y} ${s} ${c.x} ${i.y-$} L ${c.x} ${c.y}`:`M ${i.x} ${i.y} L ${i.x} ${c.y+l} ${d} ${i.x+$} ${c.y} L ${c.x} ${c.y}`),i.y===c.y&&(o=`M ${i.x} ${i.y} L ${c.x} ${c.y}`));if(void 0===o)throw Error("Line definition not found");t.append("path").attr("d",o).attr("class","arrow arrow"+m%8)},"drawArrow"),ty=(0,c.eW)((t,e)=>{let r=t.append("g").attr("class","commit-arrows");[...e.keys()].forEach(t=>{let a=e.get(t);a.parents&&a.parents.length>0&&a.parents.forEach(t=>{tg(r,e.get(t),a,e)})})},"drawArrows"),tp=(0,c.eW)((t,e)=>{let r=t.append("g");e.forEach((t,e)=>{let a=e%8,o=j.get(t.name)?.pos;if(void 0===o)throw Error(`Position not found for branch ${t.name}`);let i=r.append("line");i.attr("x1",0),i.attr("y1",o),i.attr("x2",U),i.attr("y2",o),i.attr("class","branch branch"+a),"TB"===V?(i.attr("y1",30),i.attr("x1",o),i.attr("y2",U),i.attr("x2",o)):"BT"===V&&(i.attr("y1",U),i.attr("x1",o),i.attr("y2",30),i.attr("x2",o)),_.push(o);let c=X(t.name),n=r.insert("rect"),s=r.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+a);s.node().appendChild(c);let h=c.getBBox();n.attr("class","branchLabelBkg label"+a).attr("rx",4).attr("ry",4).attr("x",-h.width-4-(N?.rotateCommitLabel===!0?30:0)).attr("y",-h.height/2+8).attr("width",h.width+18).attr("height",h.height+4),s.attr("transform","translate("+(-h.width-14-(N?.rotateCommitLabel===!0?30:0))+", "+(o-h.height/2-1)+")"),"TB"===V?(n.attr("x",o-h.width/2-10).attr("y",0),s.attr("transform","translate("+(o-h.width/2-5)+", 0)")):"BT"===V?(n.attr("x",o-h.width/2-10).attr("y",U),s.attr("transform","translate("+(o-h.width/2-5)+", "+U+")")):n.attr("transform","translate(-19, "+(o-h.height/2)+")")})},"drawBranches"),tf=(0,c.eW)(function(t,e,r,a,o){return j.set(t,{pos:e,index:r}),e+=50+(o?40:0)+("TB"===V||"BT"===V?a.width/2:0)},"setBranchPosition"),tx=(0,c.eW)(function(t,e,r,a){if(Q(),c.cM.debug("in gitgraph renderer",t+"\n","id:",e,r),!N)throw Error("GitGraph config not found");let o=N.rotateCommitLabel??!1,n=a.db;F=n.getCommits();let h=n.getBranchesAsObjArray();V=n.getDirection();let d=(0,s.Ys)(`[id="${e}"]`),l=0;h.forEach((t,e)=>{let r=X(t.name),a=d.append("g"),i=a.insert("g").attr("class","branchLabel"),c=i.insert("g").attr("class","label branch-label");c.node()?.appendChild(r);let n=r.getBBox();l=tf(t.name,l,e,n,o),c.remove(),i.remove(),a.remove()}),tl(d,F,!1),N.showBranches&&tp(d,h),ty(d,F),tl(d,F,!0),i.w8.insertTitle(d,"gitTitleText",N.titleTopMargin??0,n.getDiagramTitle()),(0,c.Rw)(void 0,d,N.diagramPadding,N.useMaxWidth)},"draw"),tu=(0,c.eW)(t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(e=>`
        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }
        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }
        .label${e}  { fill: ${t["git"+e]}; }
        .arrow${e} { stroke: ${t["git"+e]}; }
        `).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,"getStyles"),tb={parser:Y,db:A,renderer:{draw:tx},styles:tu}}}]);