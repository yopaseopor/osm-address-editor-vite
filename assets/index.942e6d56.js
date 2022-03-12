var K=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var T=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,F=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&T(e,r,t[r]);if(q)for(var r of q(t))Y.call(t,r)&&T(e,r,t[r]);return e},H=(e,t)=>W(e,X(t));import{j as z,r as n,d as x,o as Q,p as ee,c as te,m as oe,M as se,t as re,a as ne,b as ae,F as J,f as ie,e as le,S as ce,L as de,G as pe,g as ue,R as ge,h as fe}from"./vendor.a6bf9e15.js";const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}};he();const o=z.exports.jsx,u=z.exports.jsxs,M=z.exports.Fragment,V=()=>{const[e,t]=n.exports.useState(!1);n.exports.useEffect(()=>{t(x.exports.isLoggedIn())},[]);const r=n.exports.useCallback(()=>{(async()=>(await x.exports.login({mode:"popup",clientId:"q9sRK4UuNqv3_HLE8E7m2-wUAKS3XJSFWb9apehpAqE",scopes:["read_prefs","write_api","write_notes"],redirectUrl:window.location.href.replace(window.location.hash,"")}),t(x.exports.isLoggedIn()),window.location.reload()))()},[]),a=n.exports.useCallback(()=>{(async()=>(x.exports.logout(),t(!1)))()},[]);return o(M,{children:e?o("button",{style:{height:"44px"},className:"button py-1 px-1 border-transparent border-4 bg-gray-300 text-gray-900 hover:text-gray-500",onClick:a,children:"logout"}):o("button",{style:{height:"44px"},className:"button py-1 px-1 border-transparent border-4 bg-gray-300 text-gray-900 hover:text-gray-500",onClick:r,children:"login"})})},me=()=>{const[e,t]=n.exports.useState(!1),[r,a]=n.exports.useState(void 0);return n.exports.useEffect(()=>{t(x.exports.isLoggedIn())},[]),n.exports.useEffect(()=>{!e||(async()=>{const s=await x.exports.getUser("me");a(s)})()},[e]),o(M,{children:r?o("img",{style:{width:"44px",height:"44px"},src:r.img.href,alt:r.display_name,title:r.display_name}):o("img",{})})},ye=()=>{const[e,t]=n.exports.useState(!1),[r,a]=n.exports.useState(void 0);return n.exports.useEffect(()=>{t(x.exports.isLoggedIn())},[]),n.exports.useEffect(()=>{!e||(async()=>{const s=await x.exports.getUser("me");a(s)})()},[e]),u("div",{style:{zIndex:100,position:"relative",top:0,left:0,height:"44px",display:"flex",flexDirection:"row",backgroundColor:"rgba(0, 255, 255, 0.9)"},children:[u("div",{children:[o("h1",{className:"text-4xl font-bold",style:{display:"inline",margin:"0px"},children:"OSM address editor"}),r?u("span",{style:{marginLeft:"10px"},children:["Hi ",r==null?void 0:r.display_name,", You have"," ",r==null?void 0:r.changesets.count," changesets."]}):o("span",{style:{marginLeft:"10px"},children:"Please logged in as OSM user."})]}),u("div",{style:{display:"flex",flex:1,justifyContent:"end"},children:[o("div",{children:o(me,{})}),o("div",{children:o(V,{})})]})]})},P={type:"FeatureCollection",features:[]},be=()=>{const[e,t]=n.exports.useState(!1);return{fetchOverpass:n.exports.useCallback(async(a,s,l)=>{var S,d;let g=300;if(g=l<18?300:l<19?150:80,e)return P;t(!0),console.log("overpass: loading...");let f="[out:json]";f+=`[timeout:25];
`,f+='way["building"]',f+=`(around:${g},${a},${s});
`,f+="out meta geom;",console.log(f);const h=await fetch(`https://lz4.overpass-api.de/api/interpreter?data=${encodeURIComponent(f)}`,{});if(h.status!==200)return P;const b=await h.json();console.log("overpass json elements: ",b.elements);const v=Q(b);console.log("overpass osmtogeojson raw: ",v);for await(const p of v.features){if(!p.properties)continue;p.id=p.properties.id.split("/")[1];const w=(S=b.elements.filter(y=>p.id?typeof p.id=="number"?y.id===p.id:y.id===parseInt(p.id):!1))==null?void 0:S[0];if(w&&(p.properties.tags=w.tags,p.properties.nodes=w.nodes),p.geometry.type==="Polygon"){const y=ee(p.geometry.coordinates);var I=te(y);p.properties.center=I.geometry.coordinates}const k=p.properties.uid;if(k){let y=localStorage.getItem(k+"-icon");if(y===null){const N=await x.exports.getUser(k);((d=N.img)==null?void 0:d.href)?(y=N.img.href,localStorage.setItem(k+"-icon",N.img.href)):localStorage.setItem(k+"-icon","")}p.properties.userIconHref=y||""}}return console.log("overpass osmtogeojson converted: ",v),console.log("overpass: loaded."),t(!1),v},[]),loadingOverpass:e}},B=({feature:e})=>{var r;const t=JSON.parse((r=e.properties)==null?void 0:r.center);return u(M,{children:[u("span",{className:"longitude",children:["Longitude: ",Math.round(t[0]*1e4)/1e4]}),", ",u("span",{className:"latitude",children:["Latitude: ",Math.round(t[1]*1e4)/1e4," "]})]})},L={key:"addr:postcode",displayName:"\u90F5\u4FBF\u756A\u53F7",placeholder:"101-0021"},D=[{key:"addr:province",displayName:"\u90FD\u9053\u5E9C\u770C",placeholder:"\u6771\u4EAC\u90FD"},{key:"addr:city",displayName:"\u5E02\u533A\u753A\u6751",placeholder:"\u5343\u4EE3\u7530\u533A"},{key:"addr:quarter",displayName:"\u5730\u540D",placeholder:"\u5916\u795E\u7530"}],G=[{key:"addr:neighbourhood",displayName:"\u4E01\u76EE",placeholder:"1\u4E01\u76EE"},{key:"addr:block_number",displayName:"\u756A\u5730",placeholder:"17"},{key:"addr:housenumber",displayName:"\u53F7",placeholder:"6",prefix:"-"}];[L.key,...D.map(e=>e.key),...G.map(e=>e.key)];const $=({feature:e})=>{var t,r;return u(M,{children:[((t=e.properties)==null?void 0:t[L.key])&&o("span",{className:"addr:postcode",children:(r=e.properties)==null?void 0:r[L.key]})," ",D.map(a=>{var s,l;return((s=e.properties)==null?void 0:s[a.key])?o("span",{className:a.key,children:(l=e.properties)==null?void 0:l[a.key]},a.key):null})," ",G.map(a=>{var s,l,g;return((s=e.properties)==null?void 0:s[a.key])?u("span",{className:a.key,children:[(l=a.prefix)!=null?l:a.prefix,(g=e.properties)==null?void 0:g[a.key]]},a.key):null})]})},xe={attribution:"https://yuiseki.github.io/osm-address-editor-vite/",host:"https://yuiseki.github.io/osm-address-editor-vite/",created_by:"osm-address-editor-vite",locale:navigator.language,comment:"Update address"},_=({feature:e,fieldName:t,label:r,placeholder:a})=>{var f;const[s,l]=n.exports.useState((f=e.properties)==null?void 0:f[t]);n.exports.useEffect(()=>{var h;l((h=e.properties)==null?void 0:h[t])},[e]);const g=n.exports.useCallback(h=>{l(h.currentTarget.value)},[]);return u("div",{className:"w-full md:w-1/6 py-1 px-2 mb-6 md:mb-0",children:[o("label",{className:"block tracking-wide text-gray-700 text-xs font-bold mb-2",htmlFor:t,children:r||t}),o("input",{className:"appearance-none block w-full leading-tight rounded py-2 px-1 border border-gray-300 bg-gray-100 text-black placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:bg-white focus:border-gray-500",id:t,name:t,type:"text",placeholder:a,value:s,onChange:g})]})},ve=({feature:e,onCancel:t,onSubmit:r})=>{var S;const a=JSON.parse((S=e.properties)==null?void 0:S.center),[s,l]=n.exports.useState(e),[g,f]=n.exports.useState(!1),[h,b]=n.exports.useState(!1);n.exports.useEffect(()=>{b(x.exports.isLoggedIn())},[]),n.exports.useEffect(()=>{console.log(s.properties)},[s]);const v=n.exports.useCallback(async()=>{console.info("openReverseGeocoder",[a[0],a[1]]);const d=await oe.openReverseGeocoder([a[0],a[1]]);console.info("openReverseGeocoder",d),l(p=>{const w={properties:F({"addr:province":d.prefecture,"addr:city":d.city},p.properties)};return F(F({},p),w)})},[]),I=n.exports.useCallback(async d=>{var N,O,A;f(!0),d.preventDefault();const p=new FormData(d.currentTarget),w=JSON.parse((N=e.properties)==null?void 0:N.tags);p.forEach((C,j)=>{typeof C=="string"&&C.length>0&&(w[j]=C)});const k={type:"way",id:e.id,version:(O=e.properties)==null?void 0:O.version,tags:w,nodes:JSON.parse((A=e.properties)==null?void 0:A.nodes)};console.info(JSON.stringify(k,null,2));const y={create:[],modify:[k],delete:[]};await x.exports.uploadChangeset(xe,y),f(!1),window.alert(`Successfully updated OpenStreetMap!!!
 Wait a minutes to apply to the map...`),r()},[e]);return o("div",{children:s.properties&&u(M,{children:[u("div",{children:["OSM:"," ",o("a",{className:"underline text-blue-600 hover:text-blue-800 visited:text-purple-600",href:"https://www.openstreetmap.org/"+s.properties.id,target:"_blank",children:s.properties.id})," | ",o(B,{feature:s})," | ",u("span",{children:["Address:"," ",o("span",{className:"underline",children:o($,{feature:s})})]})]}),u("form",{onSubmit:I,children:[u("div",{className:"flex flex-wrap",children:[o(_,{feature:s,fieldName:L.key,label:L.displayName,placeholder:L.placeholder}),D.map(d=>o(_,{feature:s,fieldName:d.key,label:d.displayName,placeholder:d.placeholder},d.key))]}),o("div",{className:"flex flex-wrap",children:G.map(d=>o(_,{feature:s,fieldName:d.key,label:d.displayName,placeholder:d.placeholder},d.key))}),o("div",{className:"flex flex-wrap",children:u("div",{className:"w-full py-2 px-2 mb-6 md:mb-0",children:[o("button",{type:"button",onClick:t,className:"button rounded mr-4 py-2 px-3  bg-gray-200 text-red-600 hover:text-red-800",children:"Cancel"}),o("button",{type:"button",onClick:v,className:"button rounded mr-4 py-2 px-3 bg-green-300 text-gray-800 hover:text-white",children:"Load address from coordinates"}),o("button",{disabled:!h||g,className:"button rounded mr-2 py-2 px-3 bg-blue-300 text-gray-800 disabled:bg-blue-100 disabled:text-gray-400 hover:text-white",children:"Submit to OpenStreetMap!"}),!h&&u(M,{children:[o("span",{className:"mr-2 underline text-red-600",children:"Require logged in before you submit data to OpenStreetMap"}),o(V,{})]})]})})]})]})})};function we(e,t){const[r,a]=n.exports.useState(e);return n.exports.useEffect(()=>{const s=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(s)}},[e,t]),r}const ke={id:"buildings-layer-fill",type:"fill",source:"buildings-source",paint:{"fill-color":["case",["boolean",["feature-state","select"],!1],"green",["all",["boolean",["has","addr:postcode"],!1],["boolean",["has","addr:province"],!1],["boolean",["has","addr:city"],!1],["boolean",["has","addr:quarter"],!1],["boolean",["has","addr:neighbourhood"],!1],["boolean",["has","addr:block_number"],!1],["boolean",["has","addr:housenumber"],!1]],"blue",["any",["boolean",["has","addr:postcode"],!1],["boolean",["has","addr:province"],!1],["boolean",["has","addr:city"],!1],["boolean",["has","addr:quarter"],!1],["boolean",["has","addr:neighbourhood"],!1],["boolean",["has","addr:block_number"],!1],["boolean",["has","addr:housenumber"],!1]],"yellow","pink"],"fill-opacity":["case",["boolean",["feature-state","select"],!1],.8,["boolean",["feature-state","hover"],!1],.8,.4]},filter:["==","$type","Polygon"]};function Se(){const e=n.exports.useRef(null),[t,r]=n.exports.useState(),a=we(t,1e3),s=n.exports.useRef(null),[l,g]=n.exports.useState({type:"FeatureCollection",features:[]}),[f,h]=n.exports.useState("auto"),[b,v]=n.exports.useState(),[I,S]=n.exports.useState([]),{fetchOverpass:d,loadingOverpass:p}=be();n.exports.useEffect(()=>{setTimeout(()=>{var i;console.log(window.location.hash),!!window.location.hash.endsWith("/0/0")&&(console.log("geolocateControlRef trigger"),(i=s.current)==null||i.trigger())},500)},[]);const w=n.exports.useCallback(async i=>{const c=i.target.getCenter(),m=i.target.getZoom(),E=await d(c.lat,c.lng,m);g(E)},[]),k=n.exports.useCallback(i=>{r(i.viewState)},[]),y=n.exports.useCallback(i=>{r(i.viewState)},[]);n.exports.useEffect(()=>{(async()=>{if(!a)return;const i=a,c=await d(i.latitude,i.longitude,i.zoom);g(c)})()},[a]);const N=n.exports.useCallback(i=>{var U;h("pointer");const{features:c,point:{x:m,y:E}}=i,R=c&&c[0];R?((U=e.current)==null||U.setFeatureState({source:"buildings-source",id:R.id},{hover:!0}),v({feature:R,x:m,y:E})):v(void 0)},[]),O=n.exports.useCallback(i=>{var c;h("auto"),(c=e.current)==null||c.querySourceFeatures("buildings-source").map(m=>{var E;(E=e.current)==null||E.setFeatureState({source:"buildings-source",id:m.id},{hover:!1})}),v(void 0)},[]),A=n.exports.useCallback(i=>{var m;C();const c=i.features&&i.features[0];!c||((m=e.current)==null||m.setFeatureState({source:"buildings-source",id:c.id},{select:!0}),S([c]))},[]),C=n.exports.useCallback(()=>{var i;(i=e.current)==null||i.querySourceFeatures("buildings-source").map(c=>{var m;(m=e.current)==null||m.setFeatureState({source:"buildings-source",id:c.id},{select:!1})}),S([])},[]),j=n.exports.useMemo(()=>{let i=30;return t&&(console.log(t.zoom),i=t.zoom<18?15:30),l.features.map((c,m)=>c.properties?o(se,{style:{cursor:"pointer"},longitude:c.properties.center[0],latitude:c.properties.center[1],anchor:"center",children:c.properties.userIconHref.length>0?o("img",{src:c.properties.userIconHref,style:{width:i+"px",height:i+"px"}}):o("span",{dangerouslySetInnerHTML:{__html:re(c.properties.user||"noname",i)}})},`marker-${m}`):null)},[l,t]);return u("div",{children:[o(ye,{}),u("div",{style:{zIndex:1,position:"absolute",top:0,left:0,height:"100vh",width:"100vw",display:"flex",flexDirection:"column"},children:[I.length>0&&o("div",{style:{zIndex:200,position:"absolute",top:"44px",left:0,height:"250px",width:"100vw",backgroundColor:"rgba(255, 255, 255, 0.9)"},children:o("div",{style:{padding:"10px"},children:I.map(i=>o(ve,{feature:i,onCancel:C,onSubmit:C},i.id))})}),u(ne,H(F({ref:e},t),{onMove:k,onMoveEnd:y,onLoad:w,interactiveLayerIds:["buildings-layer-fill"],onClick:A,onMouseEnter:N,onMouseLeave:O,dragRotate:!1,boxZoom:!1,hash:!0,cursor:f,mapLib:ae,style:{width:"100%",height:"100%"},mapStyle:"https://raw.githubusercontent.com/geoloniamaps/basic/gh-pages/style.json",children:[o("div",{className:"fa-2xl",style:{zIndex:100,display:"flex",position:"absolute",top:"50%",left:"50%",textAlign:"center",verticalAlign:"middle"},children:p?o(J,{size:"2x",spin:!0,icon:ie}):o(J,{size:"2x",icon:le})}),o(ce,{id:"buildings-source",type:"geojson",data:l,children:o(de,F({},ke))}),j,b&&u("div",{className:"tooltip",style:{zIndex:10,background:"rgba(255, 255, 255, 0.7)",padding:"5px",width:"250px",position:"absolute",left:b.x+5,top:b.y+5},children:[o(B,{feature:b.feature}),o("br",{}),o($,{feature:b.feature})]}),o(pe,{ref:s,position:"top-left",style:{marginTop:"55px"},showUserLocation:!0,showAccuracyCircle:!1,trackUserLocation:!1,positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{zoom:17}})]}))]})]})}window.Buffer=ue.Buffer;ge.render(o(fe.StrictMode,{children:o(Se,{})}),document.getElementById("root"));
