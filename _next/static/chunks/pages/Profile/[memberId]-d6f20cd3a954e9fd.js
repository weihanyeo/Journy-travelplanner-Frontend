(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{4312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Profile/[memberId]",function(){return s(2692)}])},5134:function(e,t,s){"use strict";var r=s(5893),a=s(7294),o=s(9603),l=s(9417),n=s(1163),i=s(3097);t.Z=e=>{let{postDetails:t}=e,s=(0,n.useRouter)(),{postId:c="",title:d="Title goes here",description:m="Description goes here",budget:u=99,locations:h=[],likeCount:x=10,comments:j=[]}=t,[p,g]=(0,a.useState)(!1),[b,f]=(0,a.useState)(x),w=async()=>{try{let e=p?"/posts/".concat(c,"/unlike"):"/posts/".concat(c,"/like");p?(await i.Z.delete(e),f(b-1)):(await i.Z.post(e),f(b+1)),g(!p)}catch(e){console.error("Error:",e)}},[_,N]=(0,a.useState)(!1),[v,y]=(0,a.useState)(-1);console.log(t.creator);let I=j?j.map(e=>({username:e.commenter.username,text:e.commentDetails})):[],k=e=>{y(e===v?-1:e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"card mx-auto shadow mw-90",style:{maxWidth:"720px",borderRadius:"15px",backgroundColor:"#f8f0ca",marginBottom:"20px",border:"none"},children:[(0,r.jsxs)("div",{onClick:()=>{t.creator&&t.creator.memberId?s.push("/Profile/".concat(t.creator.memberId)):console.error("Creator data is missing or incomplete")},style:{cursor:"pointer"},className:"card-header d-flex align-items-center mw-90",children:[(0,r.jsx)("img",{src:t&&t.creator&&t.creator.profilePictureURL?t.creator.profilePictureURL:"/defaultImg.png",className:"rounded-circle mr-2",alt:"User",style:{width:"40px",height:"40px",objectFit:"cover"}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{className:"mb-0",style:{color:"#141451"},children:t&&t.creator?t.creator.username:""}),h.map(e=>(0,r.jsxs)("small",{className:"text-muted",children:[e,", "]}))]})]}),(0,r.jsx)("div",{style:{width:"100%",height:"720px",overflow:"hidden",position:"relative"},children:(0,r.jsx)("img",{src:"/paris.jpg",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",backgroundColor:"#196f5d",border:"2px dotted #94746c"},alt:d})}),(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{className:"card-title",style:{color:"#141451"},children:d}),(0,r.jsx)("p",{className:"card-text",children:m})]}),(0,r.jsx)("div",{className:"heart-icon",onClick:w,children:(0,r.jsx)(o.G,{icon:l.m6i,className:p?"text-danger mr-2":"text-muted mr-2"})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.G,{icon:l.egO,className:"mr-1"}),(0,r.jsx)(o.G,{icon:l.egO,className:"mr-1"}),(0,r.jsxs)("span",{children:["Budget: ",u]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(o.G,{icon:l.m6i,className:"mr-1"}),b," likes"]})]}),(0,r.jsx)("div",{className:"card-footer",children:(0,r.jsxs)("div",{className:"post-comments",children:[I.slice(0,3).map((e,t)=>(0,r.jsxs)("div",{className:"post-comment",children:[(0,r.jsx)("strong",{children:e.username}),":"," ",v===t?e.text:e.text.length>50?"".concat(e.text.substring(0,50),"..."):e.text,e.text.length>50&&(0,r.jsx)("button",{className:"btn btn-link p-0",onClick:()=>k(t),children:v===t?"View Less":"View More"})]},t)),(0,r.jsx)("div",{className:"d-flex justify-content-center",children:(0,r.jsx)("button",{className:"btn btn-link",style:{color:"#141451"},onClick:()=>s.push("/Post/".concat(c)),children:"View Post Details"})})]})})]})]})}},2692:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var r=s(5893),a=s(7294),o=s(1163),l=s(9603),n=s(9417),i=e=>{let{onUploadSuccess:t}=e,[s,o]=(0,a.useState)(""),[l,n]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e=()=>{n(window.cloudinary.createUploadWidget({cloudName:"dfvagzrna",uploadPreset:"mrvy5y2r",cropping:!0,croppingAspectRatio:1,clientAllowedFormats:["png","jpeg","jpg"],theme:"white"},(e,s)=>{"success"===s.event&&t(s.info.secure_url)}))};(()=>{if(window.cloudinary)e();else{let t=document.createElement("script");t.src="https://widget.cloudinary.com/v2.0/global/all.js",t.async=!0,t.onload=()=>e(),document.body.appendChild(t)}})()},[]),(0,r.jsxs)("div",{style:{textAlign:"center",padding:"20px"},children:[s&&(0,r.jsx)("img",{src:s,alt:"Profile",style:{width:"350px",height:"350px",borderRadius:"50%",objectFit:"cover",marginBottom:"10px"}}),(0,r.jsx)("button",{onClick:()=>{l?l.open():console.error("The Cloudinary widget is not initialized yet.")},style:{backgroundColor:"#007bff",color:"white",padding:"10px 15px",border:"none",borderRadius:"5px",cursor:"pointer",marginTop:"10px"},children:"Upload Image"})]})},c=s(6770),d=s.n(c),m=s(3097),u=e=>{let{targetMemberId:t,followingMembers:s}=e,[o,i]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(s&&s.length>0){let e=s.some(e=>e.memberId.toString()===t);e?i(e):i(!1)}},[s,t]);let c=async()=>{try{o?(await m.Z.delete("/members/unfollow/".concat(t),{},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}),i(!1),console.log("Following member: ".concat(t))):(await m.Z.post("/members/follow/".concat(t),{},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}),i(!0)),window.location.reload()}catch(e){console.error("Error following/unfollowing user:",e)}};return(0,r.jsx)("button",{className:"".concat(d().followBtn," ").concat(o?d().followed:""),onClick:c,children:o?(0,r.jsxs)(r.Fragment,{children:["Following ",(0,r.jsx)(l.G,{icon:n.LEp})]}):(0,r.jsxs)(r.Fragment,{children:["Follow ",(0,r.jsx)(l.G,{icon:n.r8p})]})})},h=s(4937),x=e=>{let{show:t,onHide:s,type:a,currentUserId:l,listData:n}=e,i=(0,o.useRouter)(),c=e=>{s(),i.push("/Profile/".concat(e))};return(0,r.jsxs)(h.Z,{show:t,onHide:s,children:[(0,r.jsx)(h.Z.Header,{closeButton:!0,children:(0,r.jsx)(h.Z.Title,{children:"followers"===a?"Followers":"Following"})}),(0,r.jsx)(h.Z.Body,{children:n.map(e=>(0,r.jsxs)("div",{className:"d-flex justify-content-between align-items-center p-2",children:[(0,r.jsxs)("div",{style:{cursor:"pointer"},onClick:()=>c(e.memberId),children:[(0,r.jsx)("img",{src:e.profilePictureURL||"/defaultImg.png",alt:"Profile Image",width:40,height:40,className:"rounded-circle me-2"}),(0,r.jsx)("strong",{children:e.username})]}),e.memberId===l&&"Me"]},e.memberId))})]})},j=s(5134),p=s(1032),g=s.n(p),b=()=>{let{memberId:e}=(0,o.useRouter)().query,[t,s]=(0,a.useState)(null),[c,d]=(0,a.useState)(null),[h,p]=(0,a.useState)(!1),[b,f]=(0,a.useState)({}),[w,_]=(0,a.useState)("myPosts"),[N,v]=(0,a.useState)(!1),[y,I]=(0,a.useState)(null),[k,P]=(0,a.useState)([]),[S,C]=(0,a.useState)(1),[F,B]=(0,a.useState)(0),E=k.slice((S-1)*5,5*S),[G,A]=(0,a.useState)(!1),[M,R]=(0,a.useState)(!1),[U,Z]=(0,a.useState)([]),[T,L]=(0,a.useState)([]),z=e=>{_(e)},V=e=>{C(e)};(0,a.useEffect)(()=>{if(t&&(t.posts||t.likedPosts)){let e="myPosts"===w?t.posts:t.likedPosts;P(e),B(Math.ceil(e.length/5)),C(1)}},[t,w]),(0,a.useEffect)(()=>{(async()=>{try{let t=await m.Z.get("/members/my-profile",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});I(t.data);let r=await m.Z.get("/members/profile/".concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});s(r.data),d(r.data),t.data.username===r.data.username?v(!0):v(!1),P(r.data.posts||[]),B(Math.ceil((r.data.posts||[]).length/5))}catch(e){console.error("Error fetching user data:",e)}})()},[e]);let X=e=>{let{name:t,value:s}=e.target;d(e=>({...e,[t]:s}))},D=async e=>{let t={...e,authorities:void 0};try{let e=await m.Z.put("/members/update-profile",t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});return s(e.data),e.data}catch(e){console.error("Error updating user profile:",e)}},O=async()=>{let e={},t=!1;if(/^\S+@\S+\.\S+$/.test(c.email)||(e.email="Please enter a valid email address.",t=!0),c.name.trim()||(e.name="Name cannot be empty.",t=!0),f(e),t)f(e);else try{await D(c),s({...c}),p(!1),f({})}catch(e){console.error("Error updating user data:",e)}};return(0,r.jsxs)("div",{className:"container my-5",children:[(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-6",children:[h?(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Name:"}),(0,r.jsx)("input",{type:"text",id:"name",value:c.name,onChange:X,name:"name",className:"form-control ".concat(b.name?"is-invalid":""),placeholder:"Enter name"}),b.name&&(0,r.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:b.name})]}):t&&(0,r.jsxs)("h1",{children:[t.name," ",t&&!N?(0,r.jsx)(u,{targetMemberId:e,followingMembers:y.followingMembers}):""]}),(0,r.jsx)("p",{className:g().usernameText,children:t&&(0,r.jsxs)("strong",{children:["@",t.username]})}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Email address: "}),h?(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"email",value:c.email,onChange:X,name:"email",className:"form-control ".concat(b.email?"is-invalid":""),placeholder:"Enter email"}),b.email&&(0,r.jsx)("div",{className:"alert alert-danger mt-2",role:"alert",children:b.email})]}):t&&(0,r.jsx)("p",{children:t.email})]}),(0,r.jsx)("h3",{children:"About Me:"}),h?(0,r.jsx)("textarea",{className:g().textAreaField,value:c.aboutMe,onChange:X,name:"aboutMe"}):t&&(0,r.jsx)("p",{children:t.aboutMe}),h?(0,r.jsxs)("div",{className:g().buttonGroup,children:[(0,r.jsx)("button",{onClick:O,className:"".concat(g().button," ").concat(g().buttonPrimary),type:"button",children:"Save Changes"}),(0,r.jsx)("button",{onClick:()=>{d({...t}),p(!1)},className:"".concat(g().button," ").concat(g().buttonSecondary),type:"button",children:"Cancel"})]}):N?(0,r.jsx)("button",{onClick:()=>p(!0),className:"".concat(g().button," ").concat(g().buttonPrimary," mt-3"),children:"Edit Profile"}):"",(0,r.jsx)("div",{className:"mt-4",children:t&&(0,r.jsxs)("div",{className:"row text-center",children:[(0,r.jsxs)("div",{className:"col",onClick:()=>{Z(t.followersMembers||[]),A(!0)},style:{cursor:"pointer"},children:[(0,r.jsx)(l.G,{icon:n.NdV}),(0,r.jsx)("h4",{className:"mt-2",children:"Followers"}),(0,r.jsx)("p",{children:t.followersMembers?t.followersMembers.length:0})]}),(0,r.jsxs)("div",{className:"col",onClick:()=>{L(t.followingMembers||[]),R(!0)},style:{cursor:"pointer"},children:[(0,r.jsx)(l.G,{icon:n.FKd}),(0,r.jsx)("h4",{className:"mt-2",children:"Following"}),(0,r.jsx)("p",{children:t.followingMembers?t.followingMembers.length:0})]}),(0,r.jsx)(x,{show:G,onHide:()=>A(!1),type:"followers",currentUserId:y.memberId,listData:U}),(0,r.jsx)(x,{show:M,onHide:()=>R(!1),type:"following",currentUserId:y.memberId,listData:T}),(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)(l.G,{icon:n.OGB}),(0,r.jsx)("h4",{className:"mt-2",children:"Posts"}),(0,r.jsx)("p",{children:t.posts?t.posts.length:0})]}),(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)(l.G,{icon:n.m6i}),(0,r.jsx)("h4",{className:"mt-2",children:"Likes Received"}),(0,r.jsx)("p",{children:t.likesReceived?t.likesReceived:0})]})]})})]}),(0,r.jsxs)("div",{className:"col-md-6 d-flex flex-column align-items-center",children:[t&&(0,r.jsx)("img",{src:t.profilePictureURL||"/defaultImg.png",alt:"Profile",className:g().profileImage}),h&&(0,r.jsx)(i,{onUploadSuccess:e=>{d(t=>({...t,profilePictureURL:e}))}})]})]}),(0,r.jsxs)("div",{className:g().buttonContainer,children:[(0,r.jsxs)("button",{className:"".concat(g().toggleButton," ").concat("myPosts"===w?g().active:""),onClick:()=>z("myPosts"),children:[(0,r.jsx)("div",{className:g().iconContainer,children:(0,r.jsx)(l.G,{icon:n.OGB,size:"lg"})}),"Posts"]}),(0,r.jsxs)("button",{className:"".concat(g().toggleButton," ").concat("likedPosts"===w?g().active:""),onClick:()=>z("likedPosts"),children:[(0,r.jsx)("div",{className:g().iconContainer,children:(0,r.jsx)(l.G,{icon:n.m6i,size:"lg"})}),"Liked Posts"]})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("div",{className:"row",children:E.map((e,s)=>(0,r.jsx)("div",{className:"col-12 mb-4",children:(0,r.jsx)(j.Z,{postDetails:{...e,creator:t}})},s))}),(0,r.jsx)("nav",{"aria-label":"Page navigation",children:(0,r.jsx)("ul",{className:"pagination justify-content-center",children:Array.from({length:F},(e,t)=>t+1).map(e=>(0,r.jsx)("li",{className:"page-item ".concat(S===e?"active":""),children:(0,r.jsx)("button",{className:"page-link",onClick:()=>V(e),children:e})},e))})}),S<F&&(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("button",{className:"btn btn-primary",onClick:()=>V(S+1),children:"View More"})})]})]})}},6770:function(e){e.exports={followBtn:"FollowButton_followBtn__6V7Ct",followed:"FollowButton_followed__FioiH"}},1032:function(e){e.exports={textAreaField:"_memberId__textAreaField__HEvjQ",buttonGroup:"_memberId__buttonGroup__D_sUd",button:"_memberId__button__NL_TB",buttonPrimary:"_memberId__buttonPrimary__PXpsG",buttonSecondary:"_memberId__buttonSecondary__gc9XU",profileImage:"_memberId__profileImage__58cP8",inputField:"_memberId__inputField__yhQAY",buttonContainer:"_memberId__buttonContainer__7hSRl",toggleButton:"_memberId__toggleButton__suqpy",usernameText:"_memberId__usernameText__o69jh",active:"_memberId__active__UIekF",tabIcon:"_memberId__tabIcon__KVgBV"}}},function(e){e.O(0,[976,937,888,774,179],function(){return e(e.s=4312)}),_N_E=e.O()}]);