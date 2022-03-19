var oe=Object.defineProperty,se=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var K=(o,e,r)=>e in o?oe(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,O=(o,e)=>{for(var r in e||(e={}))ne.call(e,r)&&K(o,r,e[r]);if(W)for(var r of W(e))ae.call(e,r)&&K(o,r,e[r]);return o},X=(o,e)=>se(o,re(e));import{j as B,r as s,d as w,o as ie,p as le,c as de,b as ce,m as pe,F as R,f as Q,t as ue,M as ge,a as me,e as he,S as fe,L as ye,N as be,G as xe,g as ve,h as we,i as Se,R as Ce,k as ke}from"./vendor.a68821ac.js";const Ne=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};Ne();const t=B.exports.jsx,c=B.exports.jsxs,S=B.exports.Fragment,ee=()=>{const[o,e]=s.exports.useState(!1);s.exports.useEffect(()=>{e(w.exports.isLoggedIn())},[]);const r=s.exports.useCallback(()=>{(async()=>(await w.exports.login({mode:"popup",clientId:"q9sRK4UuNqv3_HLE8E7m2-wUAKS3XJSFWb9apehpAqE",scopes:["read_prefs","write_api","write_notes"],redirectUrl:window.location.href.replace(window.location.hash,"")}),e(w.exports.isLoggedIn()),window.location.reload()))()},[]),i=s.exports.useCallback(()=>{(async()=>(w.exports.logout(),e(!1)))()},[]);return t(S,{children:o?t("button",{style:{height:"44px"},className:"button py-1 px-1 border-transparent border-4 bg-gray-300 text-gray-900 hover:text-gray-500",onClick:i,children:"logout"}):t("button",{style:{height:"44px"},className:"button py-1 px-1 border-transparent border-4 bg-gray-300 text-gray-900 hover:text-gray-500",onClick:r,children:"login"})})},Fe=()=>{const[o,e]=s.exports.useState(!1),[r,i]=s.exports.useState(void 0);return s.exports.useEffect(()=>{e(w.exports.isLoggedIn())},[]),s.exports.useEffect(()=>{!o||(async()=>{const n=await w.exports.getUser("me");i(n)})()},[o]),t(S,{children:r?t("img",{style:{width:"44px",height:"44px"},src:r.img.href,alt:r.display_name,title:r.display_name}):t("img",{})})},Ie=()=>{const[o,e]=s.exports.useState(!1),[r,i]=s.exports.useState(void 0);return s.exports.useEffect(()=>{e(w.exports.isLoggedIn())},[]),s.exports.useEffect(()=>{!o||(async()=>{const n=await w.exports.getUser("me");i(n)})()},[o]),c("div",{style:{zIndex:100,position:"relative",top:0,left:0,height:"44px",display:"flex",flexDirection:"row",backgroundColor:"rgba(0, 255, 255, 0.9)"},children:[c("div",{children:[t("h1",{className:"text-4xl font-bold",style:{display:"inline",margin:"0px"},children:"OSM address editor"}),r?c("span",{style:{marginLeft:"10px"},children:["Hi ",r==null?void 0:r.display_name,", You have"," ",r==null?void 0:r.changesets.count," changesets."]}):t("span",{style:{marginLeft:"10px"},children:"Please logged in as OSM user."})]}),c("div",{style:{display:"flex",flex:1,justifyContent:"end"},children:[t("div",{children:t(Fe,{})}),t("div",{children:t(ee,{})})]})]})},U={type:"FeatureCollection",features:[]},Ee=()=>{const[o,e]=s.exports.useState(!1);return{fetchOverpass:s.exports.useCallback(async(i,n,a)=>{var k,A;if(console.log(a),a<16)return U;let p=300;if(a>17&&(p=200),a>18&&(p=100),a>19&&(p=50),o)return U;e(!0),console.log("overpass: loading...");let y="[out:json]";y+=`[timeout:25];
`,y+='way["building"]',y+=`(around:${p},${i},${n});
`,y+="out meta geom;",console.log(y);const f=await fetch(`https://lz4.overpass-api.de/api/interpreter?data=${encodeURIComponent(y)}`,{});if(f.status!==200)return e(!1),U;const m=await f.json();console.log("overpass json elements: ",m.elements);const g=ie(m);console.log("overpass osmtogeojson raw: ",g);for await(const h of g.features){if(!h.properties)continue;h.id=h.properties.id.split("/")[1];const N=(k=m.elements.filter(x=>h.id?typeof h.id=="number"?x.id===h.id:x.id===parseInt(h.id):!1))==null?void 0:k[0];if(N&&(h.properties.tags=N.tags,h.properties.nodes=N.nodes),h.geometry.type==="Polygon"){const x=le(h.geometry.coordinates);var L=de(x);h.properties.center=L.geometry.coordinates}const C=h.properties.uid;if(C){let x=localStorage.getItem(C+"-icon");if(x===null){const F=await w.exports.getUser(C);((A=F.img)==null?void 0:A.href)?(x=F.img.href,localStorage.setItem(C+"-icon",F.img.href)):localStorage.setItem(C+"-icon","")}h.properties.userIconHref=x||""}}return console.log("overpass osmtogeojson converted: ",g),console.log("overpass: loaded."),e(!1),g},[]),loadingOverpass:o}},te=({feature:o})=>{var r;const e=JSON.parse((r=o.properties)==null?void 0:r.center);return c(S,{children:[c("span",{className:"longitude",children:["Longitude: ",Math.round(e[0]*1e4)/1e4]}),", ",c("span",{className:"latitude",children:["Latitude: ",Math.round(e[1]*1e4)/1e4," "]})]})},Y={JPN:{defaultComment:"\u4F4F\u6240\u3092\u66F4\u65B0",postcodeField:{key:"addr:postcode",displayName:"\u90F5\u4FBF\u756A\u53F7",placeholder:"101-0021"},mainFields:[{key:"addr:province",displayName:"\u90FD\u9053\u5E9C\u770C",placeholder:"\u6771\u4EAC\u90FD"},{key:"addr:city",displayName:"\u5E02\u533A\u753A\u6751",placeholder:"\u5343\u4EE3\u7530\u533A"},{key:"addr:quarter",displayName:"\u5730\u540D",placeholder:"\u5916\u795E\u7530"}],detailFields:[{key:"addr:neighbourhood",displayName:"\u4E01\u76EE",placeholder:"1\u4E01\u76EE"},{key:"addr:block_number",displayName:"\u756A\u5730",placeholder:"17"},{key:"addr:housenumber",displayName:"\u53F7",placeholder:"6",prefix:"-"}]},CHN:{defaultComment:"\u66F4\u65B0\u5730\u5740",postcodeField:{key:"addr:postcode",displayName:"Postcode",placeholder:""},mainFields:[{key:"addr:province",displayName:"Province/Municipality/AR/SAR",placeholder:""},{key:"addr:city",displayName:"City/Prefecture/League",placeholder:""},{key:"addr:district",displayName:"District/County/Banner",placeholder:""}],detailFields:[{key:"addr:street",displayName:"Street",placeholder:""},{key:"addr:housenumber",displayName:"House number",placeholder:""}]}},Le=()=>{const[o,e]=s.exports.useState(!1);return{detectCountry:s.exports.useCallback(async(i,n)=>{e(!0);const p=await(await fetch("https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson")).json();for(const y of p.features)if(ce([i,n],y.geometry))return console.log("country: ",y.properties),e(!1),y;e(!1)},[]),loadingCountry:o}},D=({feature:o,fieldName:e,label:r,placeholder:i,onChange:n})=>{var f;const[a,p]=s.exports.useState((f=o.properties)==null?void 0:f[e]);s.exports.useEffect(()=>{var m;p((m=o.properties)==null?void 0:m[e])},[o]);const y=s.exports.useCallback(m=>{p(m.currentTarget.value),n&&n(m)},[]);return c("div",{className:"w-full md:w-1/6 py-1 px-2 mb-6 md:mb-0",children:[t("label",{className:"block tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:e,children:r||e}),t("input",{className:"appearance-none block w-full leading-tight rounded py-2 px-1 border border-gray-300 bg-gray-100 text-black placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500",id:e,name:e,type:"text",placeholder:i,value:a,onChange:y})]})},Ae=({feature:o,fields:e})=>o.properties?c(S,{children:[e.postcodeField&&t("span",{children:o.properties[e.postcodeField.key]})," ",e.mainFields&&e.mainFields.map(r=>{var i;return c(S,{children:[t("span",{children:(i=o.properties)==null?void 0:i[r.key]})," "]})}),e.detailFields&&e.detailFields.map(r=>{var i;return c(S,{children:[t("span",{children:(i=o.properties)==null?void 0:i[r.key]})," "]})})]}):null,Oe=({placeholder:o,defaultValue:e})=>{const[r,i]=s.exports.useState(e);s.exports.useEffect(()=>{i(e)},[e]);const n=s.exports.useCallback(a=>{i(a.currentTarget.value)},[]);return c("div",{className:"w-full md:w-1/3 py-1 px-2 mb-6 md:mb-0",children:[t("label",{className:"block tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:"comment",children:"Comment for changeset (required)"}),t("input",{className:"appearance-none block w-full leading-tight rounded py-2 px-1 border border-gray-300 bg-gray-100 text-black placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500",id:"comment",name:"comment",type:"text",placeholder:o,value:r,required:!0,onChange:n})]})},Z={host:"https://yuiseki.github.io/osm-address-editor-vite/",created_by:"osm-address-editor-vite",locale:navigator.language,comment:"Update Address"},Me=({feature:o,onCancel:e,onSubmit:r})=>{var l,u,b,I;const{detectCountry:i,loadingCountry:n}=Le(),a=JSON.parse((l=o.properties)==null?void 0:l.center),[p,y]=s.exports.useState(void 0),[f,m]=s.exports.useState(),[g,L]=s.exports.useState(o),[k,A]=s.exports.useState(!1),[h,N]=s.exports.useState(!1),[C,x]=s.exports.useState(!1),[F,z]=s.exports.useState();s.exports.useEffect(()=>{A(w.exports.isLoggedIn())},[]),s.exports.useEffect(()=>{(async()=>{var v,E;const d=await i(a[0],a[1]);if(y(d),((v=d==null?void 0:d.properties)==null?void 0:v.ISO_A3)&&Y[d.properties.ISO_A3]){const j=Y[d.properties.ISO_A3];m(j);const P=j.defaultComment+" "+((E=o.properties)==null?void 0:E.id);z(P)}})()},[o]),s.exports.useEffect(()=>{console.log(g.properties)},[g]);const T=s.exports.useCallback(async()=>{console.info("openReverseGeocoder",[a[0],a[1]]);const d=await pe.openReverseGeocoder([a[0],a[1]]);console.info("openReverseGeocoder",d),L(v=>{const E={properties:O({"addr:province":d.prefecture,"addr:city":d.city},v.properties)};return O(O({},v),E)})},[]),M=s.exports.useCallback(async d=>{var H,J,V;x(!0),d.preventDefault();const v=new FormData(d.currentTarget),E=JSON.parse((H=o.properties)==null?void 0:H.tags);v.forEach((q,$)=>{typeof q=="string"&&q.length>0&&$!=="comment"&&(E[$]=q)});const j={type:"way",id:o.id,version:(J=o.properties)==null?void 0:J.version,tags:E,nodes:JSON.parse((V=o.properties)==null?void 0:V.nodes)};console.info(JSON.stringify(j,null,2));const P={create:[],modify:[j],delete:[]},G=v.get("comment");G&&(Z.comment=G.toString()),await w.exports.uploadChangeset(Z,P),x(!1),window.alert(`Successfully updated OpenStreetMap!!!
 Wait a minutes to apply to the map...`),r()},[o]),_=s.exports.useCallback(()=>{N(!0)},[]);return g.properties?c("div",{children:[c("div",{children:["OSM:"," ",t("a",{className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",href:"https://www.openstreetmap.org/"+g.properties.id,target:"_blank",children:g.properties.id})," | ",t(te,{feature:g}),f&&c("span",{children:[" | ","Address:"," ",t(Ae,{feature:g,fields:f})]})]}),n?t(R,{icon:Q,spin:!0}):t(S,{children:f?c("form",{onSubmit:M,children:[t("div",{className:"flex flex-wrap",children:t(D,{feature:g,fieldName:f.postcodeField.key,label:f.postcodeField.displayName,placeholder:f.postcodeField.placeholder,onChange:_})}),t("div",{className:"flex flex-wrap",children:f.mainFields.map(d=>t(D,{feature:g,fieldName:d.key,label:d.displayName,placeholder:d.placeholder,onChange:_},d.key))}),t("div",{className:"flex flex-wrap",children:f.detailFields.map(d=>t(D,{feature:g,fieldName:d.key,label:d.displayName,placeholder:d.placeholder,onChange:_},d.key))}),t("div",{className:"flex flex-wrap",children:t(Oe,{defaultValue:F})}),t("div",{className:"flex flex-wrap",children:c("div",{className:"w-full py-2 px-2 mb-6 md:mb-0",children:[t("button",{type:"button",onClick:e,className:"button rounded mr-4 py-2 px-3  bg-gray-200 text-red-600 hover:text-red-800",children:"Cancel"}),((u=p==null?void 0:p.properties)==null?void 0:u.ISO_A3)==="JPN"&&t("button",{type:"button",onClick:T,className:"button rounded mr-4 py-2 px-3 bg-green-300 text-gray-800 hover:text-white",children:"Load address from coordinates"}),t("button",{disabled:!k||C||!h,className:"button rounded mr-2 py-2 px-3 bg-blue-300 text-gray-800 disabled:bg-blue-100 disabled:text-gray-400 hover:text-white",children:"Submit to OpenStreetMap!"}),!k&&c(S,{children:[t("span",{className:"mr-2 underline text-red-600",children:"Require logged in before you submit data to OpenStreetMap"}),t(ee,{})]})]})})]}):t("div",{className:"flex flex-wrap",children:c("div",{className:"w-full mb-6 md:mb-0",children:[c("div",{className:"py-2",children:[c("p",{children:["Sorry, Address editor in this country"," ",(b=p==null?void 0:p.properties)==null?void 0:b.NAME," (ISO code:",(I=p==null?void 0:p.properties)==null?void 0:I.ISO_A3,") does not support yet."]}),t("p",{children:t("a",{href:"https://github.com/yuiseki/osm-address-editor-vite",target:"_blank",className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",children:"Pull requests are welcome!"})})]}),t("button",{type:"button",onClick:e,className:"button rounded mr-4 py-2 px-3  bg-gray-200 text-red-600 hover:text-red-800",children:"Cancel"})]})})})]}):null};function _e(o,e){const[r,i]=s.exports.useState(o);return s.exports.useEffect(()=>{const n=setTimeout(()=>{i(o)},e);return()=>{clearTimeout(n)}},[o,e]),r}const je=({feature:o})=>t(S,{children:o.properties&&Object.keys(o.properties).map(e=>{var r;if(e.startsWith("addr"))return c("div",{className:e,children:[t("span",{className:"underline",children:e})," = ",t("span",{children:(r=o.properties)==null?void 0:r[e]})]})})}),Re=({feature:o,size:e})=>o.properties===null?null:t(S,{children:o.properties.userIconHref.length>0?t("img",{src:o.properties.userIconHref,style:{width:e+"px",height:e+"px"}}):t("span",{dangerouslySetInnerHTML:{__html:ue(o.properties.user||"noname",e)}})}),ze=({feature:o})=>{var e;return((e=o.properties)==null?void 0:e.uid)?c("span",{children:["Last edited by: ",o.properties.user]}):null},Te=()=>t("a",{className:"twitter-share-button","data-size":"large",href:`https://twitter.com/intent/tweet?url=${window.location.href}`,children:"Tweet"}),Pe={version:8,sources:{"raster-tiles":{type:"raster",tiles:["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png","https://b.tile.openstreetmap.org/{z}/{x}/{y}.png","https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"],tileSize:256,attribution:"\xA9 OpenStreetMap contributors"}},layers:[{id:"osm-tiles",type:"raster",source:"raster-tiles",minzoom:0,maxzoom:20}]},qe={id:"buildings-layer-fill",type:"fill",source:"buildings-source",paint:{"fill-color":["case",["boolean",["feature-state","select"],!1],"green",["all",["boolean",["has","addr:postcode"],!1],["boolean",["has","addr:province"],!1],["boolean",["has","addr:city"],!1],["boolean",["has","addr:quarter"],!1],["boolean",["has","addr:neighbourhood"],!1],["boolean",["has","addr:block_number"],!1],["boolean",["has","addr:housenumber"],!1]],"blue",["any",["boolean",["has","addr:postcode"],!1],["boolean",["has","addr:province"],!1],["boolean",["has","addr:city"],!1],["boolean",["has","addr:quarter"],!1],["boolean",["has","addr:neighbourhood"],!1],["boolean",["has","addr:block_number"],!1],["boolean",["has","addr:housenumber"],!1]],"yellow","red"],"fill-opacity":["case",["boolean",["feature-state","select"],!1],.8,["boolean",["feature-state","hover"],!1],.8,.4]},filter:["==","$type","Polygon"]};function Ue(){const o=s.exports.useRef(null),[e,r]=s.exports.useState(),i=_e(e,1e3),n=s.exports.useRef(null),[a,p]=s.exports.useState({type:"FeatureCollection",features:[]}),[y,f]=s.exports.useState("auto"),[m,g]=s.exports.useState(),[L,k]=s.exports.useState([]),{fetchOverpass:A,loadingOverpass:h}=Ee();s.exports.useEffect(()=>{setTimeout(()=>{var l;console.log(window.location.hash),!!window.location.hash.endsWith("/0/0")&&(console.log("geolocateControlRef trigger"),(l=n.current)==null||l.trigger())},500)},[]);const N=s.exports.useCallback(l=>{const u=l.target.getCenter(),b=l.target.getZoom();r({zoom:b,latitude:u.lat,longitude:u.lng,bearing:0,pitch:0,padding:{top:0,bottom:0,left:0,right:0}})},[]),C=s.exports.useCallback(l=>{r(l.viewState)},[]),x=s.exports.useCallback(l=>{r(l.viewState)},[]);s.exports.useEffect(()=>{(async()=>{if(!i)return;const l=i,u=await A(l.latitude,l.longitude,l.zoom);p(u)})()},[i]);const F=s.exports.useCallback(l=>{var v;f("pointer");const{features:u,point:{x:b,y:I}}=l,d=u&&u[0];d?((v=o.current)==null||v.setFeatureState({source:"buildings-source",id:d.id},{hover:!0}),g({feature:d,x:b,y:I})):g(void 0)},[]),z=s.exports.useCallback(l=>{var u;f("auto"),(u=o.current)==null||u.querySourceFeatures("buildings-source").map(b=>{var I;(I=o.current)==null||I.setFeatureState({source:"buildings-source",id:b.id},{hover:!1})}),g(void 0)},[]),T=s.exports.useCallback(l=>{var b;M();const u=l.features&&l.features[0];!u||((b=o.current)==null||b.setFeatureState({source:"buildings-source",id:u.id},{select:!0}),k([u]))},[]),M=s.exports.useCallback(()=>{var l;(l=o.current)==null||l.querySourceFeatures("buildings-source").map(u=>{var b;(b=o.current)==null||b.setFeatureState({source:"buildings-source",id:u.id},{select:!1})}),k([])},[]),_=s.exports.useMemo(()=>{let l=20;return e&&(l=e.zoom<18?15:e.zoom<19?20:30),a.features.map((u,b)=>u.properties?t(ge,{style:{cursor:"pointer"},longitude:u.properties.center[0],latitude:u.properties.center[1],anchor:"center",children:t(Re,{feature:u,size:l})},`marker-${b}`):null)},[a,e]);return c("div",{children:[t(Ie,{}),t("div",{style:{zIndex:300,position:"absolute",bottom:10,left:10},children:t(Te,{})}),c("div",{style:{zIndex:1,position:"absolute",top:0,left:0,height:"100vh",width:"100vw",display:"flex",flexDirection:"column"},children:[L.length>0&&t("div",{style:{zIndex:200,position:"absolute",top:"44px",left:0,width:"100vw",backgroundColor:"rgba(255, 255, 255, 0.9)"},children:t("div",{style:{padding:"10px"},children:L.map(l=>t(Me,{feature:l,onCancel:M,onSubmit:M},l.id))})}),c(me,X(O({ref:o},e),{onMove:C,onMoveEnd:x,onLoad:N,interactiveLayerIds:["buildings-layer-fill"],onClick:T,onMouseEnter:F,onMouseLeave:z,dragRotate:!1,boxZoom:!1,hash:!0,cursor:y,mapLib:he,style:{width:"100%",height:"100%"},mapStyle:Pe,children:[t(fe,{id:"buildings-source",type:"geojson",data:a,children:t(ye,O({},qe))}),t(be,{position:"top-left",style:{marginTop:"55px"},showCompass:!1}),t(xe,{ref:n,position:"top-left",showUserLocation:!0,showAccuracyCircle:!1,trackUserLocation:!1,positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{zoom:17}}),t("div",{className:"fa-2xl",style:{zIndex:100,display:"flex",position:"absolute",top:"50%",left:"50%",textAlign:"center",verticalAlign:"middle"},children:!e||(e==null?void 0:e.zoom)&&e.zoom<16?t(R,{size:"2x",icon:ve}):h?t(R,{size:"2x",icon:Q,spin:!0}):t(R,{size:"2x",icon:we})}),_,m&&c("div",{className:"tooltip",style:{zIndex:10,background:"rgba(255, 255, 255, 0.7)",padding:"5px",width:"250px",position:"absolute",left:m.x+5,top:m.y+5},children:[t(te,{feature:m.feature}),t("br",{}),t(ze,{feature:m.feature}),t(je,{feature:m.feature})]})]}))]})]})}window.Buffer=Se.Buffer;Ce.render(t(ke.StrictMode,{children:t(Ue,{})}),document.getElementById("root"));
