(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[462],{1462:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var o=r(5893),n=r(7294),s=r(9597),a=r(8163),i=r.n(a),c=r(5715),l=r(2013),u=r(4867),f=r(7262),p=r(7509);function d(e){let{kmlFile:t}=e,[r,a]=(0,n.useState)(null),[d,m]=(0,n.useState)([1.294385,103.7727545]),[g,h]=(0,n.useState)(0);(0,n.useEffect)(()=>{h(e=>e+1)},[d]),(0,n.useEffect)(()=>{y(t)},[]);let y=e=>{let t=new DOMParser().parseFromString(e,"text/xml"),r=s.kml(t);i()(r,!1),r.features.forEach(e=>{let t=[e.geometry.coordinates[1],e.geometry.coordinates[0]];return{...e,geometry:{type:"Point",coordinates:t}}}),console.log(r),a(r),m([r.features[0].geometry.coordinates[1],r.features[0].geometry.coordinates[0]])},x=new p.Icon({iconUrl:"https://cdn-icons-png.flaticon.com/512/3699/3699561.png",iconSize:[38,38]});return(0,o.jsx)("div",{children:(0,o.jsxs)(c.h,{center:d,zoom:8,scrollWheelZoom:!1,style:{height:"500px",width:"500px",borderRadius:"15px"},children:[(0,o.jsx)(l.I,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r&&(0,o.jsx)(u.Q,{data:r,pointToLayer:(e,t)=>{let o=r.features.indexOf(e)+1;return(0,p.marker)(t,{icon:x}).bindPopup("".concat(o,". ").concat(e.properties.name))}}),r&&(()=>{if(!r||!r.features)return null;let e=[];for(let t=0;t<r.features.length-1;t++){let o=[r.features[t].geometry.coordinates[1],r.features[t].geometry.coordinates[0]],n=[r.features[t+1].geometry.coordinates[1],r.features[t+1].geometry.coordinates[0]];e.push([o,n])}return e})().map((e,t)=>(0,o.jsx)(f.a,{positions:e,color:"red"},t))]},g)})}r(3183),r(4079)},4079:function(e){e.exports={"leaflet-container":"leafletStyles_leaflet-container__liJxZ"}}}]);