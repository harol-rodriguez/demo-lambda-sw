var O=Object.create;var m=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var _=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),J=(r,e)=>{for(var n in e)m(r,n,{get:e[n],enumerable:!0})},S=(r,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let f of D(e))!G.call(r,f)&&f!==n&&m(r,f,{get:()=>e[f],enumerable:!(a=T(e,f))||a.enumerable});return r};var j=(r,e,n)=>(n=r!=null?O(E(r)):{},S(e||!r||!r.__esModule?m(n,"default",{value:r,enumerable:!0}):n,r)),L=r=>S(m({},"__esModule",{value:!0}),r);var A=_((V,k)=>{var U=require("crypto").randomBytes;k.exports=function(){return U(16)}});var I=_((X,H)=>{var B=A(),h=[],P={};for(d=0;d<256;d++)h[d]=(d+256).toString(16).substr(1),P[h[d]]=d;var d;function W(r,e,n){var a=e&&n||0,f=0;for(e=e||[],r.toLowerCase().replace(/[0-9a-f]{2}/g,function(s){f<16&&(e[a+f++]=P[s])});f<16;)e[a+f++]=0;return e}function q(r,e){var n=e||0,a=h;return a[r[n++]]+a[r[n++]]+a[r[n++]]+a[r[n++]]+"-"+a[r[n++]]+a[r[n++]]+"-"+a[r[n++]]+a[r[n++]]+"-"+a[r[n++]]+a[r[n++]]+"-"+a[r[n++]]+a[r[n++]]+a[r[n++]]+a[r[n++]]+a[r[n++]]+a[r[n++]]}var c=B(),z=[c[0]|1,c[1],c[2],c[3],c[4],c[5]],u=(c[6]<<8|c[7])&16383,i=0,g=0;function F(r,e,n){var a=e&&n||0,f=e||[];r=r||{};var s=r.clockseq!==void 0?r.clockseq:u,t=r.msecs!==void 0?r.msecs:new Date().getTime(),x=r.nsecs!==void 0?r.nsecs:g+1,w=t-i+(x-g)/1e4;if(w<0&&r.clockseq===void 0&&(s=s+1&16383),(w<0||t>i)&&r.nsecs===void 0&&(x=0),x>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=t,g=x,u=s,t+=122192928e5;var l=((t&268435455)*1e4+x)%4294967296;f[a++]=l>>>24&255,f[a++]=l>>>16&255,f[a++]=l>>>8&255,f[a++]=l&255;var y=t/4294967296*1e4&268435455;f[a++]=y>>>8&255,f[a++]=y&255,f[a++]=y>>>24&15|16,f[a++]=y>>>16&255,f[a++]=s>>>8|128,f[a++]=s&255;for(var N=r.node||z,o=0;o<6;o++)f[a+o]=N[o];return e||q(f)}function C(r,e,n){var a=e&&n||0;typeof r=="string"&&(e=r=="binary"?new Array(16):null,r=null),r=r||{};var f=r.random||(r.rng||B)();if(f[6]=f[6]&15|64,f[8]=f[8]&63|128,e)for(var s=0;s<16;s++)e[a+s]=f[s];return e||q(f)}var v=C;v.v1=F;v.v4=C;v.parse=W;v.unparse=q;H.exports=v});var Q={};J(Q,{handler:()=>K});module.exports=L(Q);var M=j(I()),K=async r=>{let e=JSON.parse(r.body);console.log(r);let n={...e,id:(0,M.v4)()};return{statusCode:200,body:JSON.stringify({hello:"SW DEMO! AUA!",e:r})}};0&&(module.exports={handler});
