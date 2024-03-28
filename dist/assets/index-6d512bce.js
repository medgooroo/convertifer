var su=Object.defineProperty;var au=(n,t,e)=>t in n?su(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Hs=(n,t,e)=>(au(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="152",ou=0,vo=1,lu=2,kc=1,cu=2,Rn=3,Yn=0,Ie=1,ge=2,qn=0,Xi=1,xo=2,Mo=3,So=4,hu=5,Hi=100,uu=101,fu=102,Eo=103,bo=104,du=200,pu=201,mu=202,_u=203,Gc=204,Hc=205,gu=206,vu=207,xu=208,Mu=209,Su=210,Eu=0,bu=1,yu=2,Ua=3,Tu=4,wu=5,Au=6,Ru=7,Qa=0,Cu=1,Pu=2,Pn=0,Lu=1,Du=2,Uu=3,Iu=4,Fu=5,Vc=300,Ki=301,Ji=302,Ia=303,Fa=304,Rs=306,Na=1e3,sn=1001,Oa=1002,Re=1003,yo=1004,Vs=1005,Xe=1006,Nu=1007,Ar=1008,ui=1009,Ou=1010,zu=1011,Wc=1012,Bu=1013,ri=1014,si=1015,Rr=1016,ku=1017,Gu=1018,qi=1020,Hu=1021,an=1023,Vu=1024,Wu=1025,li=1026,Qi=1027,Xu=1028,qu=1029,Zu=1030,Yu=1031,ju=1033,Ws=33776,Xs=33777,qs=33778,Zs=33779,To=35840,wo=35841,Ao=35842,Ro=35843,$u=36196,Co=37492,Po=37496,Lo=37808,Do=37809,Uo=37810,Io=37811,Fo=37812,No=37813,Oo=37814,zo=37815,Bo=37816,ko=37817,Go=37818,Ho=37819,Vo=37820,Wo=37821,Ys=36492,Ku=36283,Xo=36284,qo=36285,Zo=36286,Xc=3e3,ci=3001,Ju=3200,Qu=3201,Cs=0,tf=1,hi="",wt="srgb",vn="srgb-linear",qc="display-p3",js=7680,ef=519,Yo=35044,jo="300 es",za=1035;class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $o=1234567;const xr=Math.PI/180,Cr=180/Math.PI;function er(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function _e(n,t,e){return Math.max(t,Math.min(e,n))}function to(n,t){return(n%t+t)%t}function nf(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function rf(n,t,e){return n!==t?(e-n)/(t-n):0}function Mr(n,t,e){return(1-e)*n+e*t}function sf(n,t,e,i){return Mr(n,t,1-Math.exp(-e*i))}function af(n,t=1){return t-Math.abs(to(n,t*2)-t)}function of(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function lf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function cf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function hf(n,t){return n+Math.random()*(t-n)}function uf(n){return n*(.5-Math.random())}function ff(n){n!==void 0&&($o=n);let t=$o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function df(n){return n*xr}function pf(n){return n*Cr}function Ba(n){return(n&n-1)===0&&n!==0}function mf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Zc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _f(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),h=a(e/2),l=s((t+i)/2),c=a((t+i)/2),d=s((t-i)/2),u=a((t-i)/2),p=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*c,h*d,h*u,o*l);break;case"YZY":n.set(h*u,o*c,h*d,o*l);break;case"ZXZ":n.set(h*d,h*u,o*c,o*l);break;case"XZX":n.set(o*c,h*_,h*p,o*l);break;case"YXY":n.set(h*p,o*c,h*_,o*l);break;case"ZYZ":n.set(h*_,h*p,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mr(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:xr,RAD2DEG:Cr,generateUUID:er,clamp:_e,euclideanModulo:to,mapLinear:nf,inverseLerp:rf,lerp:Mr,damp:sf,pingpong:af,smoothstep:of,smootherstep:lf,randInt:cf,randFloat:hf,randFloatSpread:uf,seededRandom:ff,degToRad:df,radToDeg:pf,isPowerOfTwo:Ba,ceilPowerOfTwo:mf,floorPowerOfTwo:Zc,setQuaternionFromProperEuler:_f,normalize:Le,denormalize:mr};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,r,s,a,o,h,l){const c=this.elements;return c[0]=t,c[1]=r,c[2]=o,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],h=i[6],l=i[1],c=i[4],d=i[7],u=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],E=r[1],x=r[4],y=r[7],S=r[2],M=r[5],R=r[8];return s[0]=a*g+o*E+h*S,s[3]=a*m+o*x+h*M,s[6]=a*f+o*y+h*R,s[1]=l*g+c*E+d*S,s[4]=l*m+c*x+d*M,s[7]=l*f+c*y+d*R,s[2]=u*g+p*E+_*S,s[5]=u*m+p*x+_*M,s[8]=u*f+p*y+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8];return e*a*c-e*o*l-i*s*c+i*o*h+r*s*l-r*a*h}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],d=c*a-o*l,u=o*h-c*s,p=l*s-a*h,_=e*d+i*u+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(r*l-c*i)*g,t[2]=(o*i-r*a)*g,t[3]=u*g,t[4]=(c*e-r*h)*g,t[5]=(r*s-o*e)*g,t[6]=p*g,t[7]=(i*h-l*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*a+l*o)+a+t,-r*l,r*h,-r*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new It;function Yc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Ko={};function Sr(n){n in Ko||(Ko[n]=!0,console.warn(n))}function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const gf=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vf=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function xf(n){return n.convertSRGBToLinear().applyMatrix3(vf)}function Mf(n){return n.applyMatrix3(gf).convertLinearToSRGB()}const Sf={[vn]:n=>n,[wt]:n=>n.convertSRGBToLinear(),[qc]:xf},Ef={[vn]:n=>n,[wt]:n=>n.convertLinearToSRGB(),[qc]:Mf},Ke={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return vn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Sf[t],r=Ef[e];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}};let yi;class jc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=Ts("canvas")),yi.width=t.width,yi.height=t.height;const i=yi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class $c{constructor(t=null){this.isSource=!0,this.uuid=er(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Js(r[a].image)):s.push(Js(r[a]))}else s=Js(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Js(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class ke extends xi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=sn,r=sn,s=Xe,a=Ar,o=an,h=ui,l=ke.DEFAULT_ANISOTROPY,c=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=er(),this.name="",this.source=new $c(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ci?wt:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?ci:Xc}set encoding(t){Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ci?wt:hi}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Vc;ke.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const h=t.elements,l=h[0],c=h[4],d=h[8],u=h[1],p=h[5],_=h[9],g=h[2],m=h[6],f=h[10];if(Math.abs(c-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,y=(p+1)/2,S=(f+1)/2,M=(c+u)/4,R=(d+g)/4,L=(_+m)/4;return x>y&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=M/i,s=R/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=M/r,s=L/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=R/s,r=L/s),this.set(i,r,s,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-c)*(u-c));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-g)/E,this.z=(u-c)/E,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fi extends xi{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ci?wt:hi),this.texture=new ke(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Xe,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $c(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kc extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yf extends ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let h=i[r+0],l=i[r+1],c=i[r+2],d=i[r+3];const u=s[a+0],p=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(d!==g||h!==u||l!==p||c!==_){let m=1-o;const f=h*u+l*p+c*_+d*g,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),M=Math.atan2(S,f*E);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S}const y=o*E;if(h=h*m+u*y,l=l*m+p*y,c=c*m+_*y,d=d*m+g*y,m===1-o){const S=1/Math.sqrt(h*h+l*l+c*c+d*d);h*=S,l*=S,c*=S,d*=S}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],h=i[r+1],l=i[r+2],c=i[r+3],d=s[a],u=s[a+1],p=s[a+2],_=s[a+3];return t[e]=o*_+c*d+h*p-l*u,t[e+1]=h*_+c*u+l*d-o*p,t[e+2]=l*_+c*p+o*u-h*d,t[e+3]=c*_-o*d-h*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(i/2),c=o(r/2),d=o(s/2),u=h(i/2),p=h(r/2),_=h(s/2);switch(a){case"XYZ":this._x=u*c*d+l*p*_,this._y=l*p*d-u*c*_,this._z=l*c*_+u*p*d,this._w=l*c*d-u*p*_;break;case"YXZ":this._x=u*c*d+l*p*_,this._y=l*p*d-u*c*_,this._z=l*c*_-u*p*d,this._w=l*c*d+u*p*_;break;case"ZXY":this._x=u*c*d-l*p*_,this._y=l*p*d+u*c*_,this._z=l*c*_+u*p*d,this._w=l*c*d-u*p*_;break;case"ZYX":this._x=u*c*d-l*p*_,this._y=l*p*d+u*c*_,this._z=l*c*_-u*p*d,this._w=l*c*d+u*p*_;break;case"YZX":this._x=u*c*d+l*p*_,this._y=l*p*d+u*c*_,this._z=l*c*_-u*p*d,this._w=l*c*d-u*p*_;break;case"XZY":this._x=u*c*d-l*p*_,this._y=l*p*d-u*c*_,this._z=l*c*_+u*p*d,this._w=l*c*d+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],h=e[9],l=e[2],c=e[6],d=e[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-h)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(c-h)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(h+c)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(h+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+a*o+r*l-s*h,this._y=r*c+a*h+s*o-i*l,this._z=s*c+a*l+i*h-r*o,this._w=a*c-i*o-r*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const h=1-o*o;if(h<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),c=Math.atan2(l,o),d=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,h=t.w,l=h*e+a*r-o*i,c=h*i+o*e-s*r,d=h*r+s*i-a*e,u=-s*e-a*i-o*r;return this.x=l*h+u*-s+c*-o-d*-a,this.y=c*h+u*-a+d*-s-l*-o,this.z=d*h+u*-o+l*-a-c*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,h=e.z;return this.x=r*h-s*o,this.y=s*a-i*h,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(_e(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new C,Jo=new nr;class ir{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ti.copy(t.boundingBox),Ti.applyMatrix4(t.matrixWorld),this.union(Ti);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Sn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Sn)}else r.boundingBox===null&&r.computeBoundingBox(),Ti.copy(r.boundingBox),Ti.applyMatrix4(t.matrixWorld),this.union(Ti)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Hr.subVectors(this.max,hr),wi.subVectors(t.a,hr),Ai.subVectors(t.b,hr),Ri.subVectors(t.c,hr),In.subVectors(Ai,wi),Fn.subVectors(Ri,Ai),Jn.subVectors(wi,Ri);let e=[0,-In.z,In.y,0,-Fn.z,Fn.y,0,-Jn.z,Jn.y,In.z,0,-In.x,Fn.z,0,-Fn.x,Jn.z,0,-Jn.x,-In.y,In.x,0,-Fn.y,Fn.x,0,-Jn.y,Jn.x,0];return!ta(e,wi,Ai,Ri,Hr)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,wi,Ai,Ri,Hr))?!1:(Vr.crossVectors(In,Fn),e=[Vr.x,Vr.y,Vr.z],ta(e,wi,Ai,Ri,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new C,new C,new C,new C,new C,new C,new C,new C],Sn=new C,Ti=new ir,wi=new C,Ai=new C,Ri=new C,In=new C,Fn=new C,Jn=new C,hr=new C,Hr=new C,Vr=new C,Qn=new C;function ta(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Qn.fromArray(n,s);const o=r.x*Math.abs(Qn.x)+r.y*Math.abs(Qn.y)+r.z*Math.abs(Qn.z),h=t.dot(Qn),l=e.dot(Qn),c=i.dot(Qn);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const Tf=new ir,ur=new C,ea=new C;class rr{constructor(t=new C,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Tf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ur,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(ea)),this.expandByPoint(ur.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new C,na=new C,Wr=new C,Nn=new C,ia=new C,Xr=new C,ra=new C;class Ps{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){na.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(na);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Wr),o=Nn.dot(this.direction),h=-Nn.dot(Wr),l=Nn.lengthSq(),c=Math.abs(1-a*a);let d,u,p,_;if(c>0)if(d=a*h-o,u=a*o-h,_=s*c,d>=0)if(u>=-_)if(u<=_){const g=1/c;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*h)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*h)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*h)+l;else u<=-_?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-h),s),p=-d*d+u*(u+2*h)+l):u<=_?(d=0,u=Math.min(Math.max(-s,-h),s),p=u*(u+2*h)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-h),s),p=-d*d+u*(u+2*h)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(na).addScaledVector(Wr,u),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),r=En.dot(En)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,h;const l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),c>=0?(s=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(s=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-u.z)*d,h=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,h=(t.min.z-u.z)*d),i>h||o>r)||((o>i||i!==i)&&(i=o),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,r,s){ia.subVectors(e,t),Xr.subVectors(i,t),ra.crossVectors(ia,Xr);let a=this.direction.dot(ra),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const h=o*this.direction.dot(Xr.crossVectors(Nn,Xr));if(h<0)return null;const l=o*this.direction.dot(ia.cross(Nn));if(l<0||h+l>a)return null;const c=-o*Nn.dot(ra);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,r,s,a,o,h,l,c,d,u,p,_,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=h,f[2]=l,f[6]=c,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ci.setFromMatrixColumn(t,0).length(),s=1/Ci.setFromMatrixColumn(t,1).length(),a=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(r),l=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*c,p=a*d,_=o*c,g=o*d;e[0]=h*c,e[4]=-h*d,e[8]=l,e[1]=p+_*l,e[5]=u-g*l,e[9]=-o*h,e[2]=g-u*l,e[6]=_+p*l,e[10]=a*h}else if(t.order==="YXZ"){const u=h*c,p=h*d,_=l*c,g=l*d;e[0]=u+g*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*c,e[9]=-o,e[2]=p*o-_,e[6]=g+u*o,e[10]=a*h}else if(t.order==="ZXY"){const u=h*c,p=h*d,_=l*c,g=l*d;e[0]=u-g*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*c,e[9]=g-u*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const u=a*c,p=a*d,_=o*c,g=o*d;e[0]=h*c,e[4]=_*l-p,e[8]=u*l+g,e[1]=h*d,e[5]=g*l+u,e[9]=p*l-_,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const u=a*h,p=a*l,_=o*h,g=o*l;e[0]=h*c,e[4]=g-u*d,e[8]=_*d+p,e[1]=d,e[5]=a*c,e[9]=-o*c,e[2]=-l*c,e[6]=p*d+_,e[10]=u-g*d}else if(t.order==="XZY"){const u=a*h,p=a*l,_=o*h,g=o*l;e[0]=h*c,e[4]=-d,e[8]=l*c,e[1]=u*d+g,e[5]=a*c,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*c,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wf,t,Af)}lookAt(t,e,i){const r=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),On.crossVectors(i,Ne),On.lengthSq()===0&&(Math.abs(i.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),On.crossVectors(i,Ne)),On.normalize(),qr.crossVectors(Ne,On),r[0]=On.x,r[4]=qr.x,r[8]=Ne.x,r[1]=On.y,r[5]=qr.y,r[9]=Ne.y,r[2]=On.z,r[6]=qr.z,r[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],h=i[8],l=i[12],c=i[1],d=i[5],u=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],E=i[3],x=i[7],y=i[11],S=i[15],M=r[0],R=r[4],L=r[8],v=r[12],w=r[1],F=r[5],V=r[9],I=r[13],O=r[2],B=r[6],$=r[10],Z=r[14],q=r[3],tt=r[7],j=r[11],gt=r[15];return s[0]=a*M+o*w+h*O+l*q,s[4]=a*R+o*F+h*B+l*tt,s[8]=a*L+o*V+h*$+l*j,s[12]=a*v+o*I+h*Z+l*gt,s[1]=c*M+d*w+u*O+p*q,s[5]=c*R+d*F+u*B+p*tt,s[9]=c*L+d*V+u*$+p*j,s[13]=c*v+d*I+u*Z+p*gt,s[2]=_*M+g*w+m*O+f*q,s[6]=_*R+g*F+m*B+f*tt,s[10]=_*L+g*V+m*$+f*j,s[14]=_*v+g*I+m*Z+f*gt,s[3]=E*M+x*w+y*O+S*q,s[7]=E*R+x*F+y*B+S*tt,s[11]=E*L+x*V+y*$+S*j,s[15]=E*v+x*I+y*Z+S*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],h=t[9],l=t[13],c=t[2],d=t[6],u=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+s*h*d-r*l*d-s*o*u+i*l*u+r*o*p-i*h*p)+g*(+e*h*p-e*l*u+s*a*u-r*a*p+r*l*c-s*h*c)+m*(+e*l*d-e*o*p-s*a*d+i*a*p+s*o*c-i*l*c)+f*(-r*o*c-e*h*d+e*o*u+r*a*d-i*a*u+i*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],d=t[9],u=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],E=d*m*l-g*u*l+g*h*p-o*m*p-d*h*f+o*u*f,x=_*u*l-c*m*l-_*h*p+a*m*p+c*h*f-a*u*f,y=c*g*l-_*d*l+_*o*p-a*g*p-c*o*f+a*d*f,S=_*d*h-c*g*h-_*o*u+a*g*u+c*o*m-a*d*m,M=e*E+i*x+r*y+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=E*R,t[1]=(g*u*s-d*m*s-g*r*p+i*m*p+d*r*f-i*u*f)*R,t[2]=(o*m*s-g*h*s+g*r*l-i*m*l-o*r*f+i*h*f)*R,t[3]=(d*h*s-o*u*s-d*r*l+i*u*l+o*r*p-i*h*p)*R,t[4]=x*R,t[5]=(c*m*s-_*u*s+_*r*p-e*m*p-c*r*f+e*u*f)*R,t[6]=(_*h*s-a*m*s-_*r*l+e*m*l+a*r*f-e*h*f)*R,t[7]=(a*u*s-c*h*s+c*r*l-e*u*l-a*r*p+e*h*p)*R,t[8]=y*R,t[9]=(_*d*s-c*g*s-_*i*p+e*g*p+c*i*f-e*d*f)*R,t[10]=(a*g*s-_*o*s+_*i*l-e*g*l-a*i*f+e*o*f)*R,t[11]=(c*o*s-a*d*s-c*i*l+e*d*l+a*i*p-e*o*p)*R,t[12]=S*R,t[13]=(c*g*r-_*d*r+_*i*u-e*g*u-c*i*m+e*d*m)*R,t[14]=(_*o*r-a*g*r-_*i*h+e*g*h+a*i*m-e*o*m)*R,t[15]=(a*d*r-c*o*r+c*i*h-e*d*h-a*i*u+e*o*u)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,h=t.z,l=s*a,c=s*o;return this.set(l*a+i,l*o-r*h,l*h+r*o,0,l*o+r*h,c*o+i,c*h-r*a,0,l*h-r*o,c*h+r*a,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,h=e._w,l=s+s,c=a+a,d=o+o,u=s*l,p=s*c,_=s*d,g=a*c,m=a*d,f=o*d,E=h*l,x=h*c,y=h*d,S=i.x,M=i.y,R=i.z;return r[0]=(1-(g+f))*S,r[1]=(p+y)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(p-y)*M,r[5]=(1-(u+f))*M,r[6]=(m+E)*M,r[7]=0,r[8]=(_+x)*R,r[9]=(m-E)*R,r[10]=(1-(u+g))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Je.copy(this);const l=1/s,c=1/a,d=1/o;return Je.elements[0]*=l,Je.elements[1]*=l,Je.elements[2]*=l,Je.elements[4]*=c,Je.elements[5]*=c,Je.elements[6]*=c,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a){const o=this.elements,h=2*s/(e-t),l=2*s/(i-r),c=(e+t)/(e-t),d=(i+r)/(i-r),u=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=h,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,r,s,a){const o=this.elements,h=1/(e-t),l=1/(i-r),c=1/(a-s),d=(e+t)*h,u=(i+r)*l,p=(a+s)*c;return o[0]=2*h,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*c,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ci=new C,Je=new Nt,wf=new C(0,0,0),Af=new C(1,1,1),On=new C,qr=new C,Ne=new C,Qo=new Nt,tl=new nr;class Ls{constructor(t=0,e=0,i=0,r=Ls.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],h=r[1],l=r[5],c=r[9],d=r[2],u=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tl.setFromEuler(this),this.setFromQuaternion(tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ls.DEFAULT_ORDER="XYZ";class eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rf=0;const el=new C,Pi=new nr,bn=new Nt,Zr=new C,fr=new C,Cf=new C,Pf=new nr,nl=new C(1,0,0),il=new C(0,1,0),rl=new C(0,0,1),Lf={type:"added"},sl={type:"removed"};class ye extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new C,e=new Ls,i=new nr,r=new C(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new It}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(t,e){return Pi.setFromAxisAngle(t,e),this.quaternion.premultiply(Pi),this}rotateX(t){return this.rotateOnAxis(nl,t)}rotateY(t){return this.rotateOnAxis(il,t)}rotateZ(t){return this.rotateOnAxis(rl,t)}translateOnAxis(t,e){return el.copy(t).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nl,t)}translateY(t){return this.translateOnAxis(il,t)}translateZ(t){return this.translateOnAxis(rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zr.copy(t):Zr.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(fr,Zr,this.up):bn.lookAt(Zr,fr,this.up),this.quaternion.setFromRotationMatrix(bn),r&&(bn.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(bn),this.quaternion.premultiply(Pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Lf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(sl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(t,e);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const d=h[l];s(t.shapes,d)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(s(t.materials,this.material[h]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];r.animations.push(s(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),c=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ye.DEFAULT_UP=new C(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new C,yn=new C,sa=new C,Tn=new C,Li=new C,Di=new C,al=new C,aa=new C,oa=new C,la=new C;let Yr=!1;class rn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Qe.subVectors(t,e),r.cross(Qe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Qe.subVectors(r,e),yn.subVectors(i,e),sa.subVectors(t,e);const a=Qe.dot(Qe),o=Qe.dot(yn),h=Qe.dot(sa),l=yn.dot(yn),c=yn.dot(sa),d=a*l-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(l*h-o*c)*u,_=(a*c-o*h)*u;return s.set(1-p-_,_,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,i,r,s,a,o,h){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),this.getInterpolation(t,e,i,r,s,a,o,h)}static getInterpolation(t,e,i,r,s,a,o,h){return this.getBarycoord(t,e,i,r,Tn),h.setScalar(0),h.addScaledVector(s,Tn.x),h.addScaledVector(a,Tn.y),h.addScaledVector(o,Tn.z),h}static isFrontFacing(t,e,i,r){return Qe.subVectors(i,e),yn.subVectors(t,e),Qe.cross(yn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qe.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yr=!0),rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Li.subVectors(r,i),Di.subVectors(s,i),aa.subVectors(t,i);const h=Li.dot(aa),l=Di.dot(aa);if(h<=0&&l<=0)return e.copy(i);oa.subVectors(t,r);const c=Li.dot(oa),d=Di.dot(oa);if(c>=0&&d<=c)return e.copy(r);const u=h*d-c*l;if(u<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(i).addScaledVector(Li,a);la.subVectors(t,s);const p=Li.dot(la),_=Di.dot(la);if(_>=0&&p<=_)return e.copy(s);const g=p*l-h*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Di,o);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return al.subVectors(s,r),o=(d-c)/(d-c+(p-_)),e.copy(r).addScaledVector(al,o);const f=1/(m+g+u);return a=g*f,o=u*f,e.copy(i).addScaledVector(Li,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Df=0;class cn extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Xi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const h=s[o];delete h.metadata,a.push(h)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function ca(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ke.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Ke.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ke.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Ke.workingColorSpace){if(t=to(t,1),e=_e(e,0,1),i=_e(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ca(a,s,t+1/3),this.g=ca(a,s,t),this.b=ca(a,s,t-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(t,e=wt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wt){const i=Jc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wt){return Ke.fromWorkingColorSpace(be.copy(this),t),Math.round(_e(be.r*255,0,255))*65536+Math.round(_e(be.g*255,0,255))*256+Math.round(_e(be.b*255,0,255))}getHexString(t=wt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ke.workingColorSpace){Ke.fromWorkingColorSpace(be.copy(this),e);const i=be.r,r=be.g,s=be.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let h,l;const c=(o+a)/2;if(o===a)h=0,l=0;else{const d=a-o;switch(l=c<=.5?d/(a+o):d/(2-a-o),a){case i:h=(r-s)/d+(r<s?6:0);break;case r:h=(s-i)/d+2;break;case s:h=(i-r)/d+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=wt){Ke.fromWorkingColorSpace(be.copy(this),t);const e=be.r,i=be.g,r=be.b;return t!==wt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(tn),tn.h+=t,tn.s+=e,tn.l+=i,this.setHSL(tn.h,tn.s,tn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(tn),t.getHSL(jr);const i=Mr(tn.h,jr.h,e),r=Mr(tn.s,jr.s,e),s=Mr(tn.l,jr.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Lt;Lt.NAMES=Jc;class Qc extends cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const re=new C,$r=new Bt;class Kt{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyMatrix3(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyMatrix4(t),this.setXYZ(e,re.x,re.y,re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.applyNormalMatrix(t),this.setXYZ(e,re.x,re.y,re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)re.fromBufferAttribute(this,e),re.transformDirection(t),this.setXYZ(e,re.x,re.y,re.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),r=Le(r,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class th extends Kt{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class eh extends Kt{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ae extends Kt{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Uf=0;const He=new Nt,ha=new ye,Ui=new C,Oe=new ir,dr=new ir,pe=new C;class jt extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yc(t)?eh:th)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new It().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,i){return He.makeTranslation(t,e,i),this.applyMatrix4(He),this}scale(t,e,i){return He.makeScale(t,e,i),this.applyMatrix4(He),this}lookAt(t){return ha.lookAt(t),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Oe.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(pe.addVectors(Oe.min,dr.min),Oe.expandByPoint(pe),pe.addVectors(Oe.max,dr.max),Oe.expandByPoint(pe)):(Oe.expandByPoint(dr.min),Oe.expandByPoint(dr.max))}Oe.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(pe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)pe.fromBufferAttribute(o,l),h&&(Ui.fromBufferAttribute(t,l),pe.add(Ui)),r=Math.max(r,i.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*o),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let w=0;w<o;w++)l[w]=new C,c[w]=new C;const d=new C,u=new C,p=new C,_=new Bt,g=new Bt,m=new Bt,f=new C,E=new C;function x(w,F,V){d.fromArray(r,w*3),u.fromArray(r,F*3),p.fromArray(r,V*3),_.fromArray(a,w*2),g.fromArray(a,F*2),m.fromArray(a,V*2),u.sub(d),p.sub(d),g.sub(_),m.sub(_);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(I),E.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(I),l[w].add(f),l[F].add(f),l[V].add(f),c[w].add(E),c[F].add(E),c[V].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,F=y.length;w<F;++w){const V=y[w],I=V.start,O=V.count;for(let B=I,$=I+O;B<$;B+=3)x(i[B+0],i[B+1],i[B+2])}const S=new C,M=new C,R=new C,L=new C;function v(w){R.fromArray(s,w*3),L.copy(R);const F=l[w];S.copy(F),S.sub(R.multiplyScalar(R.dot(F))).normalize(),M.crossVectors(L,F);const I=M.dot(c[w])<0?-1:1;h[w*4]=S.x,h[w*4+1]=S.y,h[w*4+2]=S.z,h[w*4+3]=I}for(let w=0,F=y.length;w<F;++w){const V=y[w],I=V.start,O=V.count;for(let B=I,$=I+O;B<$;B+=3)v(i[B+0]),v(i[B+1]),v(i[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new C,s=new C,a=new C,o=new C,h=new C,l=new C,c=new C,d=new C;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(i,_),h.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.add(c),h.add(c),l.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,h.x,h.y,h.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(o,h){const l=o.array,c=o.itemSize,d=o.normalized,u=new l.constructor(h.length*c);let p=0,_=0;for(let g=0,m=h.length;g<m;g++){o.isInterleavedBufferAttribute?p=h[g]*o.data.stride+o.offset:p=h[g]*c;for(let f=0;f<c;f++)u[_++]=l[p++]}return new Kt(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new jt,i=this.index.array,r=this.attributes;for(const o in r){const h=r[o],l=t(h,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const h=[],l=s[o];for(let c=0,d=l.length;c<d;c++){const u=l[c],p=t(u,i);h.push(p)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];c.push(p.toJSON(t.data))}c.length>0&&(r[h]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],d=s[l];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new Nt,fn=new Ps,Kr=new rr,ll=new C,Ii=new C,Fi=new C,Ni=new C,ua=new C,Jr=new C,Qr=new Bt,ts=new Bt,es=new Bt,cl=new C,hl=new C,ul=new C,ns=new C,is=new C;class xe extends ye{constructor(t=new jt,e=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Jr.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const c=o[h],d=s[h];c!==0&&(ua.fromBufferAttribute(d,t),a?Jr.addScaledVector(ua,c):Jr.addScaledVector(ua.sub(e),c))}e.add(Jr)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),fn.copy(t.ray).recast(t.near),!(Kr.containsPoint(fn.origin)===!1&&(fn.intersectSphere(Kr,ll)===null||fn.origin.distanceToSquared(ll)>(t.far-t.near)**2))&&(ol.copy(s).invert(),fn.copy(t.ray).applyMatrix4(ol),!(i.boundingBox!==null&&fn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,c=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=s[g.materialIndex],f=Math.max(g.start,u.start),E=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let x=f,y=E;x<y;x+=3){const S=a.getX(x),M=a.getX(x+1),R=a.getX(x+2);i=rs(this,m,t,fn,h,l,c,S,M,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=p,m=_;g<m;g+=3){const f=a.getX(g),E=a.getX(g+1),x=a.getX(g+2);i=rs(this,s,t,fn,h,l,c,f,E,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=s[g.materialIndex],f=Math.max(g.start,u.start),E=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let x=f,y=E;x<y;x+=3){const S=x,M=x+1,R=x+2;i=rs(this,m,t,fn,h,l,c,S,M,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let g=p,m=_;g<m;g+=3){const f=g,E=g+1,x=g+2;i=rs(this,s,t,fn,h,l,c,f,E,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function If(n,t,e,i,r,s,a,o){let h;if(t.side===Ie?h=i.intersectTriangle(a,s,r,!0,o):h=i.intersectTriangle(r,s,a,t.side===Yn,o),h===null)return null;is.copy(o),is.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(is);return l<e.near||l>e.far?null:{distance:l,point:is.clone(),object:n}}function rs(n,t,e,i,r,s,a,o,h,l){n.getVertexPosition(o,Ii),n.getVertexPosition(h,Fi),n.getVertexPosition(l,Ni);const c=If(n,t,e,i,Ii,Fi,Ni,ns);if(c){r&&(Qr.fromBufferAttribute(r,o),ts.fromBufferAttribute(r,h),es.fromBufferAttribute(r,l),c.uv=rn.getInterpolation(ns,Ii,Fi,Ni,Qr,ts,es,new Bt)),s&&(Qr.fromBufferAttribute(s,o),ts.fromBufferAttribute(s,h),es.fromBufferAttribute(s,l),c.uv1=rn.getInterpolation(ns,Ii,Fi,Ni,Qr,ts,es,new Bt),c.uv2=c.uv1),a&&(cl.fromBufferAttribute(a,o),hl.fromBufferAttribute(a,h),ul.fromBufferAttribute(a,l),c.normal=rn.getInterpolation(ns,Ii,Fi,Ni,cl,hl,ul,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:h,c:l,normal:new C,materialIndex:0};rn.getNormal(Ii,Fi,Ni,d.normal),c.face=d}return c}class Nr extends jt{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const h=[],l=[],c=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(h),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(d,2));function _(g,m,f,E,x,y,S,M,R,L,v){const w=y/R,F=S/L,V=y/2,I=S/2,O=M/2,B=R+1,$=L+1;let Z=0,q=0;const tt=new C;for(let j=0;j<$;j++){const gt=j*F-I;for(let et=0;et<B;et++){const k=et*w-V;tt[g]=k*E,tt[m]=gt*x,tt[f]=O,l.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[f]=M>0?1:-1,c.push(tt.x,tt.y,tt.z),d.push(et/R),d.push(1-j/L),Z+=1}}for(let j=0;j<L;j++)for(let gt=0;gt<R;gt++){const et=u+gt+B*j,k=u+gt+B*(j+1),Y=u+(gt+1)+B*(j+1),rt=u+(gt+1)+B*j;h.push(et,k,rt),h.push(k,Y,rt),q+=6}o.addGroup(p,q,v),p+=q,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ae(n){const t={};for(let e=0;e<n.length;e++){const i=tr(n[e]);for(const r in i)t[r]=i[r]}return t}function Ff(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function nh(n){return n.getRenderTarget()===null?n.outputColorSpace:vn}const Nf={clone:tr,merge:Ae};var Of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Of,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=Ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ih extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qe extends ih{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/h,e-=a.offsetY*i/l,r*=a.width/h,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,zi=1;class Bf extends ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new qe(Oi,zi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new qe(Oi,zi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new qe(Oi,zi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new qe(Oi,zi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const h=new qe(Oi,zi,t,e);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const l=new qe(Oi,zi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,h,l]=this.children,c=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=Pn,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,o),t.setRenderTarget(i,4),t.render(e,h),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(e,l),t.setRenderTarget(c),t.toneMapping=d,t.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class rh extends ke{constructor(t,e,i,r,s,a,o,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,i,r,s,a,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kf extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ci?wt:hi),this.texture=new rh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Xe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nr(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ie,blending:qn});s.uniforms.tEquirect.value=e;const a=new xe(r,s),o=e.minFilter;return e.minFilter===Ar&&(e.minFilter=Xe),new Bf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const fa=new C,Gf=new C,Hf=new It;class ei{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=fa.subVectors(i,e).cross(Gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hf.getNormalMatrix(t),r=this.coplanarPoint(fa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new rr,ss=new C;class sh{constructor(t=new ei,e=new ei,i=new ei,r=new ei,s=new ei,a=new ei){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,r=i[0],s=i[1],a=i[2],o=i[3],h=i[4],l=i[5],c=i[6],d=i[7],u=i[8],p=i[9],_=i[10],g=i[11],m=i[12],f=i[13],E=i[14],x=i[15];return e[0].setComponents(o-r,d-h,g-u,x-m).normalize(),e[1].setComponents(o+r,d+h,g+u,x+m).normalize(),e[2].setComponents(o+s,d+l,g+p,x+f).normalize(),e[3].setComponents(o-s,d-l,g-p,x-f).normalize(),e[4].setComponents(o-a,d-c,g-_,x-E).normalize(),e[5].setComponents(o+a,d+c,g+_,x+E).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ss.x=r.normal.x>0?t.max.x:t.min.x,ss.y=r.normal.y>0?t.max.y:t.min.y,ss.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ah(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Vf(n,t){const e=t.isWebGL2,i=new WeakMap;function r(l,c){const d=l.array,u=l.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,u),l.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,c,d){const u=c.array,p=c.updateRange;n.bindBuffer(d,l),p.count===-1?n.bufferSubData(d,0,u):(e?n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=i.get(l);c&&(n.deleteBuffer(c.buffer),i.delete(l))}function h(l,c){if(l.isGLBufferAttribute){const u=i.get(l);(!u||u.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);d===void 0?i.set(l,r(l,c)):d.version<l.version&&(s(d.buffer,l,c),d.version=l.version)}return{get:a,remove:o,update:h}}class no extends jt{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),h=Math.floor(r),l=o+1,c=h+1,d=t/o,u=e/h,p=[],_=[],g=[],m=[];for(let f=0;f<c;f++){const E=f*u-a;for(let x=0;x<l;x++){const y=x*d-s;_.push(y,-E,0),g.push(0,0,1),m.push(x/o),m.push(1-f/h)}}for(let f=0;f<h;f++)for(let E=0;E<o;E++){const x=E+l*f,y=E+l*(f+1),S=E+1+l*(f+1),M=E+1+l*f;p.push(x,y,M),p.push(y,S,M)}this.setIndex(p),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f="vec3 transformed = vec3( position );",Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ud=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$d=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ep=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Fp=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Np=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Op=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qp=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rt={alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Zf,aomap_fragment:Yf,aomap_pars_fragment:jf,begin_vertex:$f,beginnormal_vertex:Kf,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:td,clipping_planes_fragment:ed,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:rd,color_fragment:sd,color_pars_fragment:ad,color_pars_vertex:od,color_vertex:ld,common:cd,cube_uv_reflection_fragment:hd,defaultnormal_vertex:ud,displacementmap_pars_vertex:fd,displacementmap_vertex:dd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,encodings_fragment:_d,encodings_pars_fragment:gd,envmap_fragment:vd,envmap_common_pars_fragment:xd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Ud,envmap_vertex:Ed,fog_vertex:bd,fog_pars_vertex:yd,fog_fragment:Td,fog_pars_fragment:wd,gradientmap_pars_fragment:Ad,lightmap_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Dd,lights_toon_fragment:Id,lights_toon_pars_fragment:Fd,lights_phong_fragment:Nd,lights_phong_pars_fragment:Od,lights_physical_fragment:zd,lights_physical_pars_fragment:Bd,lights_fragment_begin:kd,lights_fragment_maps:Gd,lights_fragment_end:Hd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:Zd,map_pars_fragment:Yd,map_particle_fragment:jd,map_particle_pars_fragment:$d,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Jd,morphcolor_vertex:Qd,morphnormal_vertex:tp,morphtarget_pars_vertex:ep,morphtarget_vertex:np,normal_fragment_begin:ip,normal_fragment_maps:rp,normal_pars_fragment:sp,normal_pars_vertex:ap,normal_vertex:op,normalmap_pars_fragment:lp,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:up,iridescence_pars_fragment:fp,output_fragment:dp,packing:pp,premultiplied_alpha_fragment:mp,project_vertex:_p,dithering_fragment:gp,dithering_pars_fragment:vp,roughnessmap_fragment:xp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:Ep,shadowmap_vertex:bp,shadowmask_pars_fragment:yp,skinbase_vertex:Tp,skinning_pars_vertex:wp,skinning_vertex:Ap,skinnormal_vertex:Rp,specularmap_fragment:Cp,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Dp,transmission_fragment:Up,transmission_pars_fragment:Ip,uv_pars_fragment:Fp,uv_pars_vertex:Np,uv_vertex:Op,worldpos_vertex:zp,background_vert:Bp,background_frag:kp,backgroundCube_vert:Gp,backgroundCube_frag:Hp,cube_vert:Vp,cube_frag:Wp,depth_vert:Xp,depth_frag:qp,distanceRGBA_vert:Zp,distanceRGBA_frag:Yp,equirect_vert:jp,equirect_frag:$p,linedashed_vert:Kp,linedashed_frag:Jp,meshbasic_vert:Qp,meshbasic_frag:tm,meshlambert_vert:em,meshlambert_frag:nm,meshmatcap_vert:im,meshmatcap_frag:rm,meshnormal_vert:sm,meshnormal_frag:am,meshphong_vert:om,meshphong_frag:lm,meshphysical_vert:cm,meshphysical_frag:hm,meshtoon_vert:um,meshtoon_frag:fm,points_vert:dm,points_frag:pm,shadow_vert:mm,shadow_frag:_m,sprite_vert:gm,sprite_frag:vm},nt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}}},mn={basic:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Ae([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Ae([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Ae([nt.points,nt.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Ae([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Ae([nt.common,nt.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Ae([nt.sprite,nt.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Ae([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Ae([nt.lights,nt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};mn.physical={uniforms:Ae([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const as={r:0,b:0,g:0};function xm(n,t,e,i,r,s,a){const o=new Lt(0);let h=s===!0?0:1,l,c,d=null,u=0,p=null;function _(m,f){let E=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?g(o,h):x&&x.isColor&&(g(x,1),E=!0),n.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),E=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),E=!0;break}(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Rs)?(c===void 0&&(c=new xe(new Nr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:tr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==wt,(d!==x||u!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xe(new no(2,2),new di({name:"BackgroundMaterial",uniforms:tr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=x.colorSpace!==wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){m.getRGB(as,nh(n)),i.buffers.color.setClear(as.r,as.g,as.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),h=f,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:_}}function Mm(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},h=m(null);let l=h,c=!1;function d(O,B,$,Z,q){let tt=!1;if(a){const j=g(Z,$,B);l!==j&&(l=j,p(l.object)),tt=f(O,Z,$,q),tt&&E(O,Z,$,q)}else{const j=B.wireframe===!0;(l.geometry!==Z.id||l.program!==$.id||l.wireframe!==j)&&(l.geometry=Z.id,l.program=$.id,l.wireframe=j,tt=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(tt||c)&&(c=!1,L(O,B,$,Z),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function u(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,B,$){const Z=$.wireframe===!0;let q=o[O.id];q===void 0&&(q={},o[O.id]=q);let tt=q[B.id];tt===void 0&&(tt={},q[B.id]=tt);let j=tt[Z];return j===void 0&&(j=m(u()),tt[Z]=j),j}function m(O){const B=[],$=[],Z=[];for(let q=0;q<r;q++)B[q]=0,$[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:Z,object:O,attributes:{},index:null}}function f(O,B,$,Z){const q=l.attributes,tt=B.attributes;let j=0;const gt=$.getAttributes();for(const et in gt)if(gt[et].location>=0){const Y=q[et];let rt=tt[et];if(rt===void 0&&(et==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),et==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor)),Y===void 0||Y.attribute!==rt||rt&&Y.data!==rt.data)return!0;j++}return l.attributesNum!==j||l.index!==Z}function E(O,B,$,Z){const q={},tt=B.attributes;let j=0;const gt=$.getAttributes();for(const et in gt)if(gt[et].location>=0){let Y=tt[et];Y===void 0&&(et==="instanceMatrix"&&O.instanceMatrix&&(Y=O.instanceMatrix),et==="instanceColor"&&O.instanceColor&&(Y=O.instanceColor));const rt={};rt.attribute=Y,Y&&Y.data&&(rt.data=Y.data),q[et]=rt,j++}l.attributes=q,l.attributesNum=j,l.index=Z}function x(){const O=l.newAttributes;for(let B=0,$=O.length;B<$;B++)O[B]=0}function y(O){S(O,0)}function S(O,B){const $=l.newAttributes,Z=l.enabledAttributes,q=l.attributeDivisors;$[O]=1,Z[O]===0&&(n.enableVertexAttribArray(O),Z[O]=1),q[O]!==B&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),q[O]=B)}function M(){const O=l.newAttributes,B=l.enabledAttributes;for(let $=0,Z=B.length;$<Z;$++)B[$]!==O[$]&&(n.disableVertexAttribArray($),B[$]=0)}function R(O,B,$,Z,q,tt){i.isWebGL2===!0&&($===n.INT||$===n.UNSIGNED_INT)?n.vertexAttribIPointer(O,B,$,q,tt):n.vertexAttribPointer(O,B,$,Z,q,tt)}function L(O,B,$,Z){if(i.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const q=Z.attributes,tt=$.getAttributes(),j=B.defaultAttributeValues;for(const gt in tt){const et=tt[gt];if(et.location>=0){let k=q[gt];if(k===void 0&&(gt==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),gt==="instanceColor"&&O.instanceColor&&(k=O.instanceColor)),k!==void 0){const Y=k.normalized,rt=k.itemSize,at=e.get(k);if(at===void 0)continue;const D=at.buffer,yt=at.type,Et=at.bytesPerElement;if(k.isInterleavedBufferAttribute){const it=k.data,Mt=it.stride,Gt=k.offset;if(it.isInstancedInterleavedBuffer){for(let pt=0;pt<et.locationSize;pt++)S(et.location+pt,it.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let pt=0;pt<et.locationSize;pt++)y(et.location+pt);n.bindBuffer(n.ARRAY_BUFFER,D);for(let pt=0;pt<et.locationSize;pt++)R(et.location+pt,rt/et.locationSize,yt,Y,Mt*Et,(Gt+rt/et.locationSize*pt)*Et)}else{if(k.isInstancedBufferAttribute){for(let it=0;it<et.locationSize;it++)S(et.location+it,k.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let it=0;it<et.locationSize;it++)y(et.location+it);n.bindBuffer(n.ARRAY_BUFFER,D);for(let it=0;it<et.locationSize;it++)R(et.location+it,rt/et.locationSize,yt,Y,rt*Et,rt/et.locationSize*it*Et)}}else if(j!==void 0){const Y=j[gt];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(et.location,Y);break;case 3:n.vertexAttrib3fv(et.location,Y);break;case 4:n.vertexAttrib4fv(et.location,Y);break;default:n.vertexAttrib1fv(et.location,Y)}}}}M()}function v(){V();for(const O in o){const B=o[O];for(const $ in B){const Z=B[$];for(const q in Z)_(Z[q].object),delete Z[q];delete B[$]}delete o[O]}}function w(O){if(o[O.id]===void 0)return;const B=o[O.id];for(const $ in B){const Z=B[$];for(const q in Z)_(Z[q].object),delete Z[q];delete B[$]}delete o[O.id]}function F(O){for(const B in o){const $=o[B];if($[O.id]===void 0)continue;const Z=$[O.id];for(const q in Z)_(Z[q].object),delete Z[q];delete $[O.id]}}function V(){I(),c=!0,l!==h&&(l=h,p(l.object))}function I(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:d,reset:V,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:y,disableUnusedAttributes:M}}function Sm(n,t,e,i){const r=i.isWebGL2;let s;function a(l){s=l}function o(l,c){n.drawArrays(s,l,c),e.update(c,s,1)}function h(l,c,d){if(d===0)return;let u,p;if(r)u=n,p="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,l,c,d),e.update(c,s,d)}this.setMode=a,this.render=o,this.renderInstances=h}function Em(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const h=s(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const l=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,y=a||t.has("OES_texture_float"),S=x&&y,M=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:M}}function bm(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ei,o=new It,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||r;return r=u,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):l();else{const E=s?0:i,x=E*4;let y=f.clippingState||null;h.value=y,y=c(_,u,x,p);for(let S=0;S!==x;++S)y[S]=e[S];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=h.value,_!==!0||m===null){const f=p+g*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)a.copy(d[x]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function ym(n){let t=new WeakMap;function e(a,o){return o===Ia?a.mapping=Ki:o===Fa&&(a.mapping=Ji),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ia||o===Fa)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new kf(h.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Tm extends ih{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,fl=[.125,.215,.35,.446,.526,.582],ii=20,da=new Tm,dl=new Lt;let pa=null;const ni=(1+Math.sqrt(5))/2,Bi=1/ni,pl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ni,Bi),new C(0,ni,-Bi),new C(Bi,0,ni),new C(-Bi,0,ni),new C(ni,Bi,0),new C(-ni,Bi,0)];class ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){pa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa),t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Rr,format:an,colorSpace:vn,depthBuffer:!1},r=_l(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(s)),this._blurMaterial=Am(s,t,e)}return r}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,i,r){const o=new qe(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(dl),c.toneMapping=Pn,c.autoClear=!1;const p=new Qc({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),_=new xe(new Nr,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(dl),g=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,h[f],0),o.lookAt(l[f],0,0)):E===1?(o.up.set(0,0,h[f]),o.lookAt(0,l[f],0)):(o.up.set(0,h[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;os(r,E*x,f>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,o),c.render(t,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Ki||t.mapping===Ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const h=this._cubeSize;os(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(a,da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pl[(r-1)%pl.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new xe(this._lodPlanes[r],l),u=l.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ii-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):ii;m>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const f=[];let E=0;for(let R=0;R<ii;++R){const L=R/g,v=Math.exp(-L*L/2);f.push(v),R===0?E+=v:R<m&&(E+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;const y=this._sizeLods[r],S=3*y*(r>x-Vi?r-x+Vi:0),M=4*(this._cubeSize-y);os(e,S,M,3*y,2*y),h.setRenderTarget(e),h.render(d,da)}}function wm(n){const t=[],e=[],i=[];let r=n;const s=n-Vi+1+fl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let h=1/o;a>n-Vi?h=fl[a-n+Vi-1]:a===0&&(h=0),i.push(h);const l=1/(o-2),c=-l,d=1+l,u=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,f=1,E=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let M=0;M<p;M++){const R=M%3*2/3-1,L=M>2?0:-1,v=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(v,g*_*M),x.set(u,m*_*M);const w=[M,M,M,M,M,M];y.set(w,f*_*M)}const S=new jt;S.setAttribute("position",new Kt(E,g)),S.setAttribute("uv",new Kt(x,m)),S.setAttribute("faceIndex",new Kt(y,f)),t.push(S),r>Vi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function _l(n,t,e){const i=new fi(n,t,e);return i.texture.mapping=Rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Am(n,t,e){const i=new Float32Array(ii),r=new C(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function gl(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function vl(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const h=o.mapping,l=h===Ia||h===Fa,c=h===Ki||h===Ji;if(l||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new ml(n)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||c&&d&&r(d)){e===null&&(e=new ml(n));const u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function r(o){let h=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&h++;return h===l}function s(o){const h=o.target;h.removeEventListener("dispose",s);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Cm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pm(n,t,e,i){const r={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function h(d){const u=d.attributes;for(const _ in u)t.update(u[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)t.update(g[m],n.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let x=0,y=E.length;x<y;x+=3){const S=E[x+0],M=E[x+1],R=E[x+2];u.push(S,M,M,R,R,S)}}else{const E=_.array;g=_.version;for(let x=0,y=E.length/3-1;x<y;x+=3){const S=x+0,M=x+1,R=x+2;u.push(S,M,M,R,R,S)}}const m=new(Yc(u)?eh:th)(u,1);m.version=g;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function c(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:h,getWireframeAttribute:c}}function Lm(n,t,e,i){const r=i.isWebGL2;let s;function a(u){s=u}let o,h;function l(u){o=u.type,h=u.bytesPerElement}function c(u,p){n.drawElements(s,p,o,u*h),e.update(p,s,1)}function d(u,p,_){if(_===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,u*h,_),e.update(p,s,_)}this.setMode=a,this.setIndex=l,this.render=c,this.renderInstances=d}function Dm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Um(n,t){return n[0]-t[0]}function Im(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Fm(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,a=new ve,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function h(l,c,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let B=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),S===!0&&(v=3);let w=c.attributes.position.count*v,F=1;w>t.maxTextureSize&&(F=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const V=new Float32Array(w*F*4*g),I=new Kc(V,w,F,g);I.type=si,I.needsUpdate=!0;const O=v*4;for(let $=0;$<g;$++){const Z=M[$],q=R[$],tt=L[$],j=w*F*4*$;for(let gt=0;gt<Z.count;gt++){const et=gt*O;x===!0&&(a.fromBufferAttribute(Z,gt),V[j+et+0]=a.x,V[j+et+1]=a.y,V[j+et+2]=a.z,V[j+et+3]=0),y===!0&&(a.fromBufferAttribute(q,gt),V[j+et+4]=a.x,V[j+et+5]=a.y,V[j+et+6]=a.z,V[j+et+7]=0),S===!0&&(a.fromBufferAttribute(tt,gt),V[j+et+8]=a.x,V[j+et+9]=a.y,V[j+et+10]=a.z,V[j+et+11]=tt.itemSize===4?a.w:1)}}m={count:g,texture:I,size:new Bt(w,F)},s.set(c,m),c.addEventListener("dispose",B)}let f=0;for(let x=0;x<u.length;x++)f+=u[x];const E=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",u),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=u===void 0?0:u.length;let g=i[c.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<_;y++){const S=g[y];S[0]=y,S[1]=u[y]}g.sort(Im);for(let y=0;y<8;y++)y<_&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Um);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const S=o[y],M=S[0],R=S[1];M!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+y)!==m[M]&&c.setAttribute("morphTarget"+y,m[M]),f&&c.getAttribute("morphNormal"+y)!==f[M]&&c.setAttribute("morphNormal"+y,f[M]),r[y]=R,E+=R):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:h}}function Nm(n,t,e,i){let r=new WeakMap;function s(h){const l=i.render.frame,c=h.geometry,d=t.get(h,c);return r.get(d)!==l&&(t.update(d),r.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER)),d}function a(){r=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const oh=new ke,lh=new Kc,ch=new yf,hh=new rh,xl=[],Ml=[],Sl=new Float32Array(16),El=new Float32Array(9),bl=new Float32Array(4);function sr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=xl[r];if(s===void 0&&(s=new Float32Array(r),xl[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function he(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ds(n,t){let e=Ml[t];e===void 0&&(e=new Int32Array(t),Ml[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Om(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;n.uniform2fv(this.addr,t),he(e,t)}}function Bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;n.uniform3fv(this.addr,t),he(e,t)}}function km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;n.uniform4fv(this.addr,t),he(e,t)}}function Gm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,i))return;bl.set(i),n.uniformMatrix2fv(this.addr,!1,bl),he(e,i)}}function Hm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,i))return;El.set(i),n.uniformMatrix3fv(this.addr,!1,El),he(e,i)}}function Vm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,i))return;Sl.set(i),n.uniformMatrix4fv(this.addr,!1,Sl),he(e,i)}}function Wm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;n.uniform2iv(this.addr,t),he(e,t)}}function qm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;n.uniform3iv(this.addr,t),he(e,t)}}function Zm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;n.uniform4iv(this.addr,t),he(e,t)}}function Ym(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;n.uniform2uiv(this.addr,t),he(e,t)}}function $m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ce(e,t))return;n.uniform3uiv(this.addr,t),he(e,t)}}function Km(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;n.uniform4uiv(this.addr,t),he(e,t)}}function Jm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||oh,r)}function Qm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ch,r)}function t_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||hh,r)}function e_(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||lh,r)}function n_(n){switch(n){case 5126:return Om;case 35664:return zm;case 35665:return Bm;case 35666:return km;case 35674:return Gm;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Zm;case 5125:return Ym;case 36294:return jm;case 36295:return $m;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return t_;case 36289:case 36303:case 36311:case 36292:return e_}}function i_(n,t){n.uniform1fv(this.addr,t)}function r_(n,t){const e=sr(t,this.size,2);n.uniform2fv(this.addr,e)}function s_(n,t){const e=sr(t,this.size,3);n.uniform3fv(this.addr,e)}function a_(n,t){const e=sr(t,this.size,4);n.uniform4fv(this.addr,e)}function o_(n,t){const e=sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function l_(n,t){const e=sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function c_(n,t){const e=sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function h_(n,t){n.uniform1iv(this.addr,t)}function u_(n,t){n.uniform2iv(this.addr,t)}function f_(n,t){n.uniform3iv(this.addr,t)}function d_(n,t){n.uniform4iv(this.addr,t)}function p_(n,t){n.uniform1uiv(this.addr,t)}function m_(n,t){n.uniform2uiv(this.addr,t)}function __(n,t){n.uniform3uiv(this.addr,t)}function g_(n,t){n.uniform4uiv(this.addr,t)}function v_(n,t,e){const i=this.cache,r=t.length,s=Ds(e,r);ce(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||oh,s[a])}function x_(n,t,e){const i=this.cache,r=t.length,s=Ds(e,r);ce(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ch,s[a])}function M_(n,t,e){const i=this.cache,r=t.length,s=Ds(e,r);ce(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||hh,s[a])}function S_(n,t,e){const i=this.cache,r=t.length,s=Ds(e,r);ce(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||lh,s[a])}function E_(n){switch(n){case 5126:return i_;case 35664:return r_;case 35665:return s_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return u_;case 35668:case 35672:return f_;case 35669:case 35673:return d_;case 5125:return p_;case 36294:return m_;case 36295:return __;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}class b_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=n_(e.type)}}class y_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=E_(e.type)}}class T_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const ma=/(\w+)(\])?(\[|\.)?/g;function yl(n,t){n.seq.push(t),n.map[t.id]=t}function w_(n,t,e){const i=n.name,r=i.length;for(ma.lastIndex=0;;){const s=ma.exec(i),a=ma.lastIndex;let o=s[1];const h=s[2]==="]",l=s[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===r){yl(e,l===void 0?new b_(o,n,t):new y_(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new T_(o),yl(e,d)),e=d}}}class gs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);w_(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],h=i[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Tl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let A_=0;function R_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function C_(n){switch(n){case vn:return["Linear","( value )"];case wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function wl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+R_(n.getShaderSource(t),a)}else return r}function P_(n,t){const e=C_(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function L_(n,t){let e;switch(t){case Lu:e="Linear";break;case Du:e="Reinhard";break;case Uu:e="OptimizedCineon";break;case Iu:e="ACESFilmic";break;case Fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function D_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function U_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function I_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function _r(n){return n!==""}function Al(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(n){return n.replace(F_,N_)}function N_(n,t){const e=Rt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ka(e)}const O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(n){return n.replace(O_,z_)}function z_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function k_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case Ji:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function H_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qa:t="ENVMAP_BLENDING_MULTIPLY";break;case Cu:t="ENVMAP_BLENDING_MIX";break;case Pu:t="ENVMAP_BLENDING_ADD";break}return t}function V_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function W_(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=B_(e),l=k_(e),c=G_(e),d=H_(e),u=V_(e),p=e.isWebGL2?"":D_(e),_=U_(s),g=r.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(_r).join(`
`),m.length>0&&(m+=`
`),f=[p,_].filter(_r).join(`
`),f.length>0&&(f+=`
`)):(m=[Pl(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),f=[p,Pl(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Rt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?L_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Rt.encodings_pars_fragment,P_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=ka(a),a=Al(a,e),a=Rl(a,e),o=ka(o),o=Al(o,e),o=Rl(o,e),a=Cl(a),o=Cl(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=E+m+a,y=E+f+o,S=Tl(r,r.VERTEX_SHADER,x),M=Tl(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,S),r.attachShader(g,M),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const v=r.getProgramInfoLog(g).trim(),w=r.getShaderInfoLog(S).trim(),F=r.getShaderInfoLog(M).trim();let V=!0,I=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,S,M);else{const O=wl(r,S,"vertex"),B=wl(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+O+`
`+B)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(w===""||F==="")&&(I=!1);I&&(this.diagnostics={runnable:V,programLog:v,vertexShader:{log:w,prefix:m},fragmentShader:{log:F,prefix:f}})}r.deleteShader(S),r.deleteShader(M);let R;this.getUniforms=function(){return R===void 0&&(R=new gs(r,g)),R};let L;return this.getAttributes=function(){return L===void 0&&(L=I_(r,g)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=A_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=M,this}let X_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Z_(t),e.set(t,i)),i}}class Z_{constructor(t){this.id=X_++,this.code=t,this.usedTimes=0}}function Y_(n,t,e,i,r,s,a){const o=new eo,h=new q_,l=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,w,F,V,I){const O=V.fog,B=I.geometry,$=v.isMeshStandardMaterial?V.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),q=Z&&Z.mapping===Rs?Z.image.height:null,tt=_[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,gt=j!==void 0?j.length:0;let et=0;B.morphAttributes.position!==void 0&&(et=1),B.morphAttributes.normal!==void 0&&(et=2),B.morphAttributes.color!==void 0&&(et=3);let k,Y,rt,at;if(tt){const qt=mn[tt];k=qt.vertexShader,Y=qt.fragmentShader}else k=v.vertexShader,Y=v.fragmentShader,h.update(v),rt=h.getVertexShaderID(v),at=h.getFragmentShaderID(v);const D=n.getRenderTarget(),yt=I.isInstancedMesh===!0,Et=!!v.map,it=!!v.matcap,Mt=!!Z,Gt=!!v.aoMap,pt=!!v.lightMap,Dt=!!v.bumpMap,ue=!!v.normalMap,me=!!v.displacementMap,fe=!!v.emissiveMap,oe=!!v.metalnessMap,Ht=!!v.roughnessMap,Jt=v.clearcoat>0,Pe=v.iridescence>0,A=v.sheen>0,b=v.transmission>0,z=Jt&&!!v.clearcoatMap,J=Jt&&!!v.clearcoatNormalMap,Q=Jt&&!!v.clearcoatRoughnessMap,st=Pe&&!!v.iridescenceMap,St=Pe&&!!v.iridescenceThicknessMap,ct=A&&!!v.sheenColorMap,W=A&&!!v.sheenRoughnessMap,ut=!!v.specularMap,mt=!!v.specularColorMap,vt=!!v.specularIntensityMap,lt=b&&!!v.transmissionMap,ft=b&&!!v.thicknessMap,Ot=!!v.gradientMap,Wt=!!v.alphaMap,te=v.alphaTest>0,P=!!v.extensions,G=!!B.attributes.uv1,K=!!B.attributes.uv2,ot=!!B.attributes.uv3;return{isWebGL2:c,shaderID:tt,shaderName:v.type,vertexShader:k,fragmentShader:Y,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:yt,instancingColor:yt&&I.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:vn,map:Et,matcap:it,envMap:Mt,envMapMode:Mt&&Z.mapping,envMapCubeUVHeight:q,aoMap:Gt,lightMap:pt,bumpMap:Dt,normalMap:ue,displacementMap:u&&me,emissiveMap:fe,normalMapObjectSpace:ue&&v.normalMapType===tf,normalMapTangentSpace:ue&&v.normalMapType===Cs,metalnessMap:oe,roughnessMap:Ht,clearcoat:Jt,clearcoatMap:z,clearcoatNormalMap:J,clearcoatRoughnessMap:Q,iridescence:Pe,iridescenceMap:st,iridescenceThicknessMap:St,sheen:A,sheenColorMap:ct,sheenRoughnessMap:W,specularMap:ut,specularColorMap:mt,specularIntensityMap:vt,transmission:b,transmissionMap:lt,thicknessMap:ft,gradientMap:Ot,opaque:v.transparent===!1&&v.blending===Xi,alphaMap:Wt,alphaTest:te,combine:v.combine,mapUv:Et&&g(v.map.channel),aoMapUv:Gt&&g(v.aoMap.channel),lightMapUv:pt&&g(v.lightMap.channel),bumpMapUv:Dt&&g(v.bumpMap.channel),normalMapUv:ue&&g(v.normalMap.channel),displacementMapUv:me&&g(v.displacementMap.channel),emissiveMapUv:fe&&g(v.emissiveMap.channel),metalnessMapUv:oe&&g(v.metalnessMap.channel),roughnessMapUv:Ht&&g(v.roughnessMap.channel),clearcoatMapUv:z&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:J&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:W&&g(v.sheenRoughnessMap.channel),specularMapUv:ut&&g(v.specularMap.channel),specularColorMapUv:mt&&g(v.specularColorMap.channel),specularIntensityMapUv:vt&&g(v.specularIntensityMap.channel),transmissionMapUv:lt&&g(v.transmissionMap.channel),thicknessMapUv:ft&&g(v.thicknessMap.channel),alphaMapUv:Wt&&g(v.alphaMap.channel),vertexTangents:ue&&!!B.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:G,vertexUv2s:K,vertexUv3s:ot,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Et||Wt),fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:Pn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ge,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:P&&v.extensions.derivatives===!0,extensionFragDepth:P&&v.extensions.fragDepth===!0,extensionDrawBuffers:P&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:P&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)w.push(F),w.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(E(w,v),x(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function E(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),v.push(o.mask)}function y(v){const w=_[v.type];let F;if(w){const V=mn[w];F=Nf.clone(V.uniforms)}else F=v.uniforms;return F}function S(v,w){let F;for(let V=0,I=l.length;V<I;V++){const O=l[V];if(O.cacheKey===w){F=O,++F.usedTimes;break}}return F===void 0&&(F=new W_(n,w,v,s),l.push(F)),F}function M(v){if(--v.usedTimes===0){const w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),v.destroy()}}function R(v){h.remove(v)}function L(){h.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:R,programs:l,dispose:L}}function j_(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function $_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ll(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Dl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d,u,p,_,g,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function o(d,u,p,_,g,m){const f=a(d,u,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):e.push(f)}function h(d,u,p,_,g,m){const f=a(d,u,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||$_),i.length>1&&i.sort(u||Ll),r.length>1&&r.sort(u||Ll)}function c(){for(let d=t,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:h,finish:c,sort:l}}function K_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Dl,n.set(i,[a])):r>=s.length?(a=new Dl,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function J_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Lt};break;case"SpotLight":e={position:new C,direction:new C,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Q_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let tg=0;function eg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ng(n,t){const e=new J_,i=Q_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new C);const s=new C,a=new Nt,o=new Nt;function h(c,d){let u=0,p=0,_=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let g=0,m=0,f=0,E=0,x=0,y=0,S=0,M=0,R=0,L=0;c.sort(eg);const v=d===!0?Math.PI:1;for(let F=0,V=c.length;F<V;F++){const I=c[F],O=I.color,B=I.intensity,$=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=O.r*B*v,p+=O.g*B*v,_+=O.b*B*v;else if(I.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(I.sh.coefficients[q],B);else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){const tt=I.shadow,j=i.get(I);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,r.directionalShadow[g]=j,r.directionalShadowMap[g]=Z,r.directionalShadowMatrix[g]=I.shadow.matrix,y++}r.directional[g]=q,g++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(B*v),q.distance=$,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,r.spot[f]=q;const tt=I.shadow;if(I.map&&(r.spotLightMap[R]=I.map,R++,tt.updateMatrices(I),I.castShadow&&L++),r.spotLightMatrix[f]=tt.matrix,I.castShadow){const j=i.get(I);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,r.spotShadow[f]=j,r.spotShadowMap[f]=Z,M++}f++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(O).multiplyScalar(B),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),r.rectArea[E]=q,E++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*v),q.distance=I.distance,q.decay=I.decay,I.castShadow){const tt=I.shadow,j=i.get(I);j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,j.shadowCameraNear=tt.camera.near,j.shadowCameraFar=tt.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=I.shadow.matrix,S++}r.point[m]=q,m++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(B*v),q.groundColor.copy(I.groundColor).multiplyScalar(B*v),r.hemi[x]=q,x++}}E>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=nt.LTC_FLOAT_1,r.rectAreaLTC2=nt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=nt.LTC_HALF_1,r.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=_;const w=r.hash;(w.directionalLength!==g||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==E||w.hemiLength!==x||w.numDirectionalShadows!==y||w.numPointShadows!==S||w.numSpotShadows!==M||w.numSpotMaps!==R)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=E,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=M+R-L,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=L,w.directionalLength=g,w.pointLength=m,w.spotLength=f,w.rectAreaLength=E,w.hemiLength=x,w.numDirectionalShadows=y,w.numPointShadows=S,w.numSpotShadows=M,w.numSpotMaps=R,r.version=tg++)}function l(c,d){let u=0,p=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let E=0,x=c.length;E<x;E++){const y=c[E];if(y.isDirectionalLight){const S=r.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),u++}else if(y.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:h,setupView:l,state:r}}function Ul(n,t){const e=new ng(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function h(d){e.setup(i,d)}function l(d){e.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:h,setupLightsView:l,pushLight:a,pushShadow:o}}function ig(n,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let h;return o===void 0?(h=new Ul(n,t),e.set(s,[h])):a>=o.length?(h=new Ul(n,t),o.push(h)):h=o[a],h}function r(){e=new WeakMap}return{get:i,dispose:r}}class rg extends cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sg extends cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lg(n,t,e){let i=new sh;const r=new Bt,s=new Bt,a=new ve,o=new rg({depthPacking:Qu}),h=new sg,l={},c=e.maxTextureSize,d={[Yn]:Ie,[Ie]:Yn,[ge]:ge},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:ag,fragmentShader:og}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new jt;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new xe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let f=this.type;this.render=function(S,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),F=n.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=f!==Rn&&this.type===Rn,I=f===Rn&&this.type!==Rn;for(let O=0,B=S.length;O<B;O++){const $=S[O],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const q=Z.getFrameExtents();if(r.multiply(q),s.copy(Z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,Z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,Z.mapSize.y=s.y)),Z.map===null||V===!0||I===!0){const j=this.type!==Rn?{minFilter:Re,magFilter:Re}:{};Z.map!==null&&Z.map.dispose(),Z.map=new fi(r.x,r.y,j),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();const tt=Z.getViewportCount();for(let j=0;j<tt;j++){const gt=Z.getViewport(j);a.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),F.viewport(a),Z.updateMatrices($,j),i=Z.getFrustum(),y(M,R,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Rn&&E(Z,R),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(L,v,w)};function E(S,M){const R=t.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new fi(r.x,r.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(M,null,R,u,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(M,null,R,p,g,null)}function x(S,M,R,L){let v=null;const w=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)v=w;else if(v=R.isPointLight===!0?h:o,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const F=v.uuid,V=M.uuid;let I=l[F];I===void 0&&(I={},l[F]=I);let O=I[V];O===void 0&&(O=v.clone(),I[V]=O),v=O}if(v.visible=M.visible,v.wireframe=M.wireframe,L===Rn?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:d[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=n.properties.get(v);F.light=R}return v}function y(S,M,R,L,v){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Rn)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const V=t.update(S),I=S.material;if(Array.isArray(I)){const O=V.groups;for(let B=0,$=O.length;B<$;B++){const Z=O[B],q=I[Z.materialIndex];if(q&&q.visible){const tt=x(S,q,L,v);n.renderBufferDirect(R,null,V,tt,S,Z)}}}else if(I.visible){const O=x(S,I,L,v);n.renderBufferDirect(R,null,V,O,S,null)}}const F=S.children;for(let V=0,I=F.length;V<I;V++)y(F[V],M,R,L,v)}}function cg(n,t,e){const i=e.isWebGL2;function r(){let P=!1;const G=new ve;let K=null;const ot=new ve(0,0,0,0);return{setMask:function(ht){K!==ht&&!P&&(n.colorMask(ht,ht,ht,ht),K=ht)},setLocked:function(ht){P=ht},setClear:function(ht,qt,Zt,Se,Un){Un===!0&&(ht*=Se,qt*=Se,Zt*=Se),G.set(ht,qt,Zt,Se),ot.equals(G)===!1&&(n.clearColor(ht,qt,Zt,Se),ot.copy(G))},reset:function(){P=!1,K=null,ot.set(-1,0,0,0)}}}function s(){let P=!1,G=null,K=null,ot=null;return{setTest:function(ht){ht?D(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(ht){G!==ht&&!P&&(n.depthMask(ht),G=ht)},setFunc:function(ht){if(K!==ht){switch(ht){case Eu:n.depthFunc(n.NEVER);break;case bu:n.depthFunc(n.ALWAYS);break;case yu:n.depthFunc(n.LESS);break;case Ua:n.depthFunc(n.LEQUAL);break;case Tu:n.depthFunc(n.EQUAL);break;case wu:n.depthFunc(n.GEQUAL);break;case Au:n.depthFunc(n.GREATER);break;case Ru:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=ht}},setLocked:function(ht){P=ht},setClear:function(ht){ot!==ht&&(n.clearDepth(ht),ot=ht)},reset:function(){P=!1,G=null,K=null,ot=null}}}function a(){let P=!1,G=null,K=null,ot=null,ht=null,qt=null,Zt=null,Se=null,Un=null;return{setTest:function(ee){P||(ee?D(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(ee){G!==ee&&!P&&(n.stencilMask(ee),G=ee)},setFunc:function(ee,Ge,un){(K!==ee||ot!==Ge||ht!==un)&&(n.stencilFunc(ee,Ge,un),K=ee,ot=Ge,ht=un)},setOp:function(ee,Ge,un){(qt!==ee||Zt!==Ge||Se!==un)&&(n.stencilOp(ee,Ge,un),qt=ee,Zt=Ge,Se=un)},setLocked:function(ee){P=ee},setClear:function(ee){Un!==ee&&(n.clearStencil(ee),Un=ee)},reset:function(){P=!1,G=null,K=null,ot=null,ht=null,qt=null,Zt=null,Se=null,Un=null}}}const o=new r,h=new s,l=new a,c=new WeakMap,d=new WeakMap;let u={},p={},_=new WeakMap,g=[],m=null,f=!1,E=null,x=null,y=null,S=null,M=null,R=null,L=null,v=!1,w=null,F=null,V=null,I=null,O=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Z=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=Z>=2);let tt=null,j={};const gt=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),k=new ve().fromArray(gt),Y=new ve().fromArray(et);function rt(P,G,K,ot){const ht=new Uint8Array(4),qt=n.createTexture();n.bindTexture(P,qt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<K;Zt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(G,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(G+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return qt}const at={};at[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(at[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),h.setClear(1),l.setClear(0),D(n.DEPTH_TEST),h.setFunc(Ua),me(!1),fe(vo),D(n.CULL_FACE),Dt(qn);function D(P){u[P]!==!0&&(n.enable(P),u[P]=!0)}function yt(P){u[P]!==!1&&(n.disable(P),u[P]=!1)}function Et(P,G){return p[P]!==G?(n.bindFramebuffer(P,G),p[P]=G,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=G),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=G)),!0):!1}function it(P,G){let K=g,ot=!1;if(P)if(K=_.get(G),K===void 0&&(K=[],_.set(G,K)),P.isWebGLMultipleRenderTargets){const ht=P.texture;if(K.length!==ht.length||K[0]!==n.COLOR_ATTACHMENT0){for(let qt=0,Zt=ht.length;qt<Zt;qt++)K[qt]=n.COLOR_ATTACHMENT0+qt;K.length=ht.length,ot=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,ot=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,ot=!0);ot&&(e.isWebGL2?n.drawBuffers(K):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Mt(P){return m!==P?(n.useProgram(P),m=P,!0):!1}const Gt={[Hi]:n.FUNC_ADD,[uu]:n.FUNC_SUBTRACT,[fu]:n.FUNC_REVERSE_SUBTRACT};if(i)Gt[Eo]=n.MIN,Gt[bo]=n.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(Gt[Eo]=P.MIN_EXT,Gt[bo]=P.MAX_EXT)}const pt={[du]:n.ZERO,[pu]:n.ONE,[mu]:n.SRC_COLOR,[Gc]:n.SRC_ALPHA,[Su]:n.SRC_ALPHA_SATURATE,[xu]:n.DST_COLOR,[gu]:n.DST_ALPHA,[_u]:n.ONE_MINUS_SRC_COLOR,[Hc]:n.ONE_MINUS_SRC_ALPHA,[Mu]:n.ONE_MINUS_DST_COLOR,[vu]:n.ONE_MINUS_DST_ALPHA};function Dt(P,G,K,ot,ht,qt,Zt,Se){if(P===qn){f===!0&&(yt(n.BLEND),f=!1);return}if(f===!1&&(D(n.BLEND),f=!0),P!==hu){if(P!==E||Se!==v){if((x!==Hi||M!==Hi)&&(n.blendEquation(n.FUNC_ADD),x=Hi,M=Hi),Se)switch(P){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFunc(n.ONE,n.ONE);break;case Mo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case So:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case So:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,S=null,R=null,L=null,E=P,v=Se}return}ht=ht||G,qt=qt||K,Zt=Zt||ot,(G!==x||ht!==M)&&(n.blendEquationSeparate(Gt[G],Gt[ht]),x=G,M=ht),(K!==y||ot!==S||qt!==R||Zt!==L)&&(n.blendFuncSeparate(pt[K],pt[ot],pt[qt],pt[Zt]),y=K,S=ot,R=qt,L=Zt),E=P,v=!1}function ue(P,G){P.side===ge?yt(n.CULL_FACE):D(n.CULL_FACE);let K=P.side===Ie;G&&(K=!K),me(K),P.blending===Xi&&P.transparent===!1?Dt(qn):Dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),h.setFunc(P.depthFunc),h.setTest(P.depthTest),h.setMask(P.depthWrite),o.setMask(P.colorWrite);const ot=P.stencilWrite;l.setTest(ot),ot&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ht(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(P){w!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),w=P)}function fe(P){P!==ou?(D(n.CULL_FACE),P!==F&&(P===vo?n.cullFace(n.BACK):P===lu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),F=P}function oe(P){P!==V&&($&&n.lineWidth(P),V=P)}function Ht(P,G,K){P?(D(n.POLYGON_OFFSET_FILL),(I!==G||O!==K)&&(n.polygonOffset(G,K),I=G,O=K)):yt(n.POLYGON_OFFSET_FILL)}function Jt(P){P?D(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function Pe(P){P===void 0&&(P=n.TEXTURE0+B-1),tt!==P&&(n.activeTexture(P),tt=P)}function A(P,G,K){K===void 0&&(tt===null?K=n.TEXTURE0+B-1:K=tt);let ot=j[K];ot===void 0&&(ot={type:void 0,texture:void 0},j[K]=ot),(ot.type!==P||ot.texture!==G)&&(tt!==K&&(n.activeTexture(K),tt=K),n.bindTexture(P,G||at[P]),ot.type=P,ot.texture=G)}function b(){const P=j[tt];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function lt(P){k.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),k.copy(P))}function ft(P){Y.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Ot(P,G){let K=d.get(G);K===void 0&&(K=new WeakMap,d.set(G,K));let ot=K.get(P);ot===void 0&&(ot=n.getUniformBlockIndex(G,P.name),K.set(P,ot))}function Wt(P,G){const ot=d.get(G).get(P);c.get(G)!==ot&&(n.uniformBlockBinding(G,ot,P.__bindingPointIndex),c.set(G,ot))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},tt=null,j={},p={},_=new WeakMap,g=[],m=null,f=!1,E=null,x=null,y=null,S=null,M=null,R=null,L=null,v=!1,w=null,F=null,V=null,I=null,O=null,k.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),o.reset(),h.reset(),l.reset()}return{buffers:{color:o,depth:h,stencil:l},enable:D,disable:yt,bindFramebuffer:Et,drawBuffers:it,useProgram:Mt,setBlending:Dt,setMaterial:ue,setFlipSided:me,setCullFace:fe,setLineWidth:oe,setPolygonOffset:Ht,setScissorTest:Jt,activeTexture:Pe,bindTexture:A,unbindTexture:b,compressedTexImage2D:z,compressedTexImage3D:J,texImage2D:mt,texImage3D:vt,updateUBOMapping:Ot,uniformBlockBinding:Wt,texStorage2D:W,texStorage3D:ut,texSubImage2D:Q,texSubImage3D:st,compressedTexSubImage2D:St,compressedTexSubImage3D:ct,scissor:lt,viewport:ft,reset:te}}function hg(n,t,e,i,r,s,a){const o=r.isWebGL2,h=r.maxTextures,l=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,b){return f?new OffscreenCanvas(A,b):Ts("canvas")}function x(A,b,z,J){let Q=1;if((A.width>J||A.height>J)&&(Q=J/Math.max(A.width,A.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const st=b?Zc:Math.floor,St=st(Q*A.width),ct=st(Q*A.height);g===void 0&&(g=E(St,ct));const W=z?E(St,ct):g;return W.width=St,W.height=ct,W.getContext("2d").drawImage(A,0,0,St,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+St+"x"+ct+")."),W}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return Ba(A.width)&&Ba(A.height)}function S(A){return o?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Re&&A.minFilter!==Xe}function M(A,b){return A.generateMipmaps&&b&&A.minFilter!==Re&&A.minFilter!==Xe}function R(A){n.generateMipmap(A)}function L(A,b,z,J,Q=!1){if(o===!1)return b;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=b;return b===n.RED&&(z===n.FLOAT&&(st=n.R32F),z===n.HALF_FLOAT&&(st=n.R16F),z===n.UNSIGNED_BYTE&&(st=n.R8)),b===n.RG&&(z===n.FLOAT&&(st=n.RG32F),z===n.HALF_FLOAT&&(st=n.RG16F),z===n.UNSIGNED_BYTE&&(st=n.RG8)),b===n.RGBA&&(z===n.FLOAT&&(st=n.RGBA32F),z===n.HALF_FLOAT&&(st=n.RGBA16F),z===n.UNSIGNED_BYTE&&(st=J===wt&&Q===!1?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)),(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function v(A,b,z){return M(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==Xe?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){return A===Re||A===yo||A===Vs?n.NEAREST:n.LINEAR}function F(A){const b=A.target;b.removeEventListener("dispose",F),I(b),b.isVideoTexture&&_.delete(b)}function V(A){const b=A.target;b.removeEventListener("dispose",V),B(b)}function I(A){const b=i.get(A);if(b.__webglInit===void 0)return;const z=A.source,J=m.get(z);if(J){const Q=J[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(A),Object.keys(J).length===0&&m.delete(z)}i.remove(A)}function O(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const z=A.source,J=m.get(z);delete J[b.__cacheKey],a.memory.textures--}function B(A){const b=A.texture,z=i.get(A),J=i.get(b);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(z.__webglFramebuffer[Q]),z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Q=0;Q<z.__webglColorRenderbuffer.length;Q++)z.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[Q]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,st=b.length;Q<st;Q++){const St=i.get(b[Q]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),a.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(A)}let $=0;function Z(){$=0}function q(){const A=$;return A>=h&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+h),$+=1,A}function tt(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function j(A,b){const z=i.get(A);if(A.isVideoTexture&&Jt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(z,A,b);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+b)}function gt(A,b){const z=i.get(A);if(A.version>0&&z.__version!==A.version){yt(z,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+b)}function et(A,b){const z=i.get(A);if(A.version>0&&z.__version!==A.version){yt(z,A,b);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+b)}function k(A,b){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Et(z,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+b)}const Y={[Na]:n.REPEAT,[sn]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},rt={[Re]:n.NEAREST,[yo]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Xe]:n.LINEAR,[Nu]:n.LINEAR_MIPMAP_NEAREST,[Ar]:n.LINEAR_MIPMAP_LINEAR};function at(A,b,z){if(z?(n.texParameteri(A,n.TEXTURE_WRAP_S,Y[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Y[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Y[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,rt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,rt[b.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==sn||b.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==Re&&b.minFilter!==Xe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Re||b.minFilter!==Vs&&b.minFilter!==Ar||b.type===si&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Rr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function D(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",F));const J=b.source;let Q=m.get(J);Q===void 0&&(Q={},m.set(J,Q));const st=tt(b);if(st!==A.__cacheKey){Q[st]===void 0&&(Q[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[st].usedTimes++;const St=Q[A.__cacheKey];St!==void 0&&(Q[A.__cacheKey].usedTimes--,St.usedTimes===0&&O(b)),A.__cacheKey=st,A.__webglTexture=Q[st].texture}return z}function yt(A,b,z){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const Q=D(A,b),st=b.source;e.bindTexture(J,A.__webglTexture,n.TEXTURE0+z);const St=i.get(st);if(st.version!==St.__version||Q===!0){e.activeTexture(n.TEXTURE0+z),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ct=S(b)&&y(b.image)===!1;let W=x(b.image,ct,!1,c);W=Pe(b,W);const ut=y(W)||o,mt=s.convert(b.format,b.colorSpace);let vt=s.convert(b.type),lt=L(b.internalFormat,mt,vt,b.colorSpace);at(J,b,ut);let ft;const Ot=b.mipmaps,Wt=o&&b.isVideoTexture!==!0,te=St.__version===void 0||Q===!0,P=v(b,W,ut);if(b.isDepthTexture)lt=n.DEPTH_COMPONENT,o?b.type===si?lt=n.DEPTH_COMPONENT32F:b.type===ri?lt=n.DEPTH_COMPONENT24:b.type===qi?lt=n.DEPTH24_STENCIL8:lt=n.DEPTH_COMPONENT16:b.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===li&&lt===n.DEPTH_COMPONENT&&b.type!==Wc&&b.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ri,vt=s.convert(b.type)),b.format===Qi&&lt===n.DEPTH_COMPONENT&&(lt=n.DEPTH_STENCIL,b.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=qi,vt=s.convert(b.type))),te&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,lt,W.width,W.height):e.texImage2D(n.TEXTURE_2D,0,lt,W.width,W.height,0,mt,vt,null));else if(b.isDataTexture)if(Ot.length>0&&ut){Wt&&te&&e.texStorage2D(n.TEXTURE_2D,P,lt,Ot[0].width,Ot[0].height);for(let G=0,K=Ot.length;G<K;G++)ft=Ot[G],Wt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,ft.width,ft.height,mt,vt,ft.data):e.texImage2D(n.TEXTURE_2D,G,lt,ft.width,ft.height,0,mt,vt,ft.data);b.generateMipmaps=!1}else Wt?(te&&e.texStorage2D(n.TEXTURE_2D,P,lt,W.width,W.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,W.width,W.height,mt,vt,W.data)):e.texImage2D(n.TEXTURE_2D,0,lt,W.width,W.height,0,mt,vt,W.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,P,lt,Ot[0].width,Ot[0].height,W.depth);for(let G=0,K=Ot.length;G<K;G++)ft=Ot[G],b.format!==an?mt!==null?Wt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,W.depth,mt,ft.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,lt,ft.width,ft.height,W.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,ft.width,ft.height,W.depth,mt,vt,ft.data):e.texImage3D(n.TEXTURE_2D_ARRAY,G,lt,ft.width,ft.height,W.depth,0,mt,vt,ft.data)}else{Wt&&te&&e.texStorage2D(n.TEXTURE_2D,P,lt,Ot[0].width,Ot[0].height);for(let G=0,K=Ot.length;G<K;G++)ft=Ot[G],b.format!==an?mt!==null?Wt?e.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,ft.width,ft.height,mt,ft.data):e.compressedTexImage2D(n.TEXTURE_2D,G,lt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,ft.width,ft.height,mt,vt,ft.data):e.texImage2D(n.TEXTURE_2D,G,lt,ft.width,ft.height,0,mt,vt,ft.data)}else if(b.isDataArrayTexture)Wt?(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,P,lt,W.width,W.height,W.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,mt,vt,W.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,lt,W.width,W.height,W.depth,0,mt,vt,W.data);else if(b.isData3DTexture)Wt?(te&&e.texStorage3D(n.TEXTURE_3D,P,lt,W.width,W.height,W.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,mt,vt,W.data)):e.texImage3D(n.TEXTURE_3D,0,lt,W.width,W.height,W.depth,0,mt,vt,W.data);else if(b.isFramebufferTexture){if(te)if(Wt)e.texStorage2D(n.TEXTURE_2D,P,lt,W.width,W.height);else{let G=W.width,K=W.height;for(let ot=0;ot<P;ot++)e.texImage2D(n.TEXTURE_2D,ot,lt,G,K,0,mt,vt,null),G>>=1,K>>=1}}else if(Ot.length>0&&ut){Wt&&te&&e.texStorage2D(n.TEXTURE_2D,P,lt,Ot[0].width,Ot[0].height);for(let G=0,K=Ot.length;G<K;G++)ft=Ot[G],Wt?e.texSubImage2D(n.TEXTURE_2D,G,0,0,mt,vt,ft):e.texImage2D(n.TEXTURE_2D,G,lt,mt,vt,ft);b.generateMipmaps=!1}else Wt?(te&&e.texStorage2D(n.TEXTURE_2D,P,lt,W.width,W.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,vt,W)):e.texImage2D(n.TEXTURE_2D,0,lt,mt,vt,W);M(b,ut)&&R(J),St.__version=st.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Et(A,b,z){if(b.image.length!==6)return;const J=D(A,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const st=i.get(Q);if(Q.version!==st.__version||J===!0){e.activeTexture(n.TEXTURE0+z),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const St=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,W=[];for(let G=0;G<6;G++)!St&&!ct?W[G]=x(b.image[G],!1,!0,l):W[G]=ct?b.image[G].image:b.image[G],W[G]=Pe(b,W[G]);const ut=W[0],mt=y(ut)||o,vt=s.convert(b.format,b.colorSpace),lt=s.convert(b.type),ft=L(b.internalFormat,vt,lt,b.colorSpace),Ot=o&&b.isVideoTexture!==!0,Wt=st.__version===void 0||J===!0;let te=v(b,ut,mt);at(n.TEXTURE_CUBE_MAP,b,mt);let P;if(St){Ot&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,te,ft,ut.width,ut.height);for(let G=0;G<6;G++){P=W[G].mipmaps;for(let K=0;K<P.length;K++){const ot=P[K];b.format!==an?vt!==null?Ot?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K,0,0,ot.width,ot.height,vt,ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K,ft,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K,0,0,ot.width,ot.height,vt,lt,ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K,ft,ot.width,ot.height,0,vt,lt,ot.data)}}}else{P=b.mipmaps,Ot&&Wt&&(P.length>0&&te++,e.texStorage2D(n.TEXTURE_CUBE_MAP,te,ft,W[0].width,W[0].height));for(let G=0;G<6;G++)if(ct){Ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,W[G].width,W[G].height,vt,lt,W[G].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ft,W[G].width,W[G].height,0,vt,lt,W[G].data);for(let K=0;K<P.length;K++){const ht=P[K].image[G].image;Ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K+1,0,0,ht.width,ht.height,vt,lt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K+1,ft,ht.width,ht.height,0,vt,lt,ht.data)}}else{Ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,vt,lt,W[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,ft,vt,lt,W[G]);for(let K=0;K<P.length;K++){const ot=P[K];Ot?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K+1,0,0,vt,lt,ot.image[G]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+G,K+1,ft,vt,lt,ot.image[G])}}}M(b,mt)&&R(n.TEXTURE_CUBE_MAP),st.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function it(A,b,z,J,Q){const st=s.convert(z.format,z.colorSpace),St=s.convert(z.type),ct=L(z.internalFormat,st,St,z.colorSpace);i.get(b).__hasExternalTextures||(Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,0,ct,b.width,b.height,b.depth,0,st,St,null):e.texImage2D(Q,0,ct,b.width,b.height,0,st,St,null)),e.bindFramebuffer(n.FRAMEBUFFER,A),Ht(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,i.get(z).__webglTexture,0,oe(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,i.get(z).__webglTexture,0),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Mt(A,b,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer&&!b.stencilBuffer){let J=n.DEPTH_COMPONENT16;if(z||Ht(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===si?J=n.DEPTH_COMPONENT32F:Q.type===ri&&(J=n.DEPTH_COMPONENT24));const st=oe(b);Ht(b)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,J,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,st,J,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(b.depthBuffer&&b.stencilBuffer){const J=oe(b);z&&Ht(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,b.width,b.height):Ht(b)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const J=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<J.length;Q++){const st=J[Q],St=s.convert(st.format,st.colorSpace),ct=s.convert(st.type),W=L(st.internalFormat,St,ct,st.colorSpace),ut=oe(b);z&&Ht(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ut,W,b.width,b.height):Ht(b)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ut,W,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,W,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const J=i.get(b.depthTexture).__webglTexture,Q=oe(b);if(b.depthTexture.format===li)Ht(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(b.depthTexture.format===Qi)Ht(b)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function pt(A){const b=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Gt(b.__webglFramebuffer,A)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]=n.createRenderbuffer(),Mt(b.__webglDepthbuffer[J],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),Mt(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(A,b,z){const J=i.get(A);b!==void 0&&it(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),z!==void 0&&pt(A)}function ue(A){const b=A.texture,z=i.get(A),J=i.get(b);A.addEventListener("dispose",V),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,a.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,st=A.isWebGLMultipleRenderTargets===!0,St=y(A)||o;if(Q){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)z.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(z.__webglFramebuffer=n.createFramebuffer(),st)if(r.drawBuffers){const ct=A.texture;for(let W=0,ut=ct.length;W<ut;W++){const mt=i.get(ct[W]);mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Ht(A)===!1){const ct=st?b:[b];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let W=0;W<ct.length;W++){const ut=ct[W];z.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[W]);const mt=s.convert(ut.format,ut.colorSpace),vt=s.convert(ut.type),lt=L(ut.internalFormat,mt,vt,ut.colorSpace,A.isXRRenderTarget===!0),ft=oe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,lt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,z.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Mt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),at(n.TEXTURE_CUBE_MAP,b,St);for(let ct=0;ct<6;ct++)it(z.__webglFramebuffer[ct],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct);M(b,St)&&R(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){const ct=A.texture;for(let W=0,ut=ct.length;W<ut;W++){const mt=ct[W],vt=i.get(mt);e.bindTexture(n.TEXTURE_2D,vt.__webglTexture),at(n.TEXTURE_2D,mt,St),it(z.__webglFramebuffer,A,mt,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D),M(mt,St)&&R(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ct=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,J.__webglTexture),at(ct,b,St),it(z.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,ct),M(b,St)&&R(ct),e.unbindTexture()}A.depthBuffer&&pt(A)}function me(A){const b=y(A)||o,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,Q=z.length;J<Q;J++){const st=z[J];if(M(st,b)){const St=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(st).__webglTexture;e.bindTexture(St,ct),R(St),e.unbindTexture()}}}function fe(A){if(o&&A.samples>0&&Ht(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,J=A.height;let Q=n.COLOR_BUFFER_BIT;const st=[],St=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(A),W=A.isWebGLMultipleRenderTargets===!0;if(W)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){st.push(n.COLOR_ATTACHMENT0+ut),A.depthBuffer&&st.push(St);const mt=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(mt===!1&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),W&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]),mt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[St]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[St])),W){const vt=i.get(b[ut]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,vt,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,Q,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const mt=i.get(b[ut]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ut,n.TEXTURE_2D,mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function oe(A){return Math.min(d,A.samples)}function Ht(A){const b=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Jt(A){const b=a.render.frame;_.get(A)!==b&&(_.set(A,b),A.update())}function Pe(A,b){const z=A.colorSpace,J=A.format,Q=A.type;return A.isCompressedTexture===!0||A.format===za||z!==vn&&z!==hi&&(z===wt?o===!1?t.has("EXT_sRGB")===!0&&J===an?(A.format=za,A.minFilter=Xe,A.generateMipmaps=!1):b=jc.sRGBToLinear(b):(J!==an||Q!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=j,this.setTexture2DArray=gt,this.setTexture3D=et,this.setTextureCube=k,this.rebindTextures=Dt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Ht}function ug(n,t,e){const i=e.isWebGL2;function r(s,a=hi){let o;if(s===ui)return n.UNSIGNED_BYTE;if(s===ku)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Gu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Ou)return n.BYTE;if(s===zu)return n.SHORT;if(s===Wc)return n.UNSIGNED_SHORT;if(s===Bu)return n.INT;if(s===ri)return n.UNSIGNED_INT;if(s===si)return n.FLOAT;if(s===Rr)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Hu)return n.ALPHA;if(s===an)return n.RGBA;if(s===Vu)return n.LUMINANCE;if(s===Wu)return n.LUMINANCE_ALPHA;if(s===li)return n.DEPTH_COMPONENT;if(s===Qi)return n.DEPTH_STENCIL;if(s===za)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Xu)return n.RED;if(s===qu)return n.RED_INTEGER;if(s===Zu)return n.RG;if(s===Yu)return n.RG_INTEGER;if(s===ju)return n.RGBA_INTEGER;if(s===Ws||s===Xs||s===qs||s===Zs)if(a===wt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ws)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ws)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===To||s===wo||s===Ao||s===Ro)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===To)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ao)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ro)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$u)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Co||s===Po)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Co)return a===wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Po)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lo||s===Do||s===Uo||s===Io||s===Fo||s===No||s===Oo||s===zo||s===Bo||s===ko||s===Go||s===Ho||s===Vo||s===Wo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Lo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Do)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Io)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===No)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Oo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Bo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ko)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Go)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ho)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wo)return a===wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ys)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ys)return a===wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ku||s===Xo||s===qo||s===Zo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ys)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class fg extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Hn extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=c.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return o!==null&&(o.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class pg extends ke{constructor(t,e,i,r,s,a,o,h,l,c){if(c=c!==void 0?c:li,c!==li&&c!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===li&&(i=ri),i===void 0&&c===Qi&&(i=qi),super(null,r,s,a,o,h,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=h!==void 0?h:Re,this.flipY=!1,this.generateMipmaps=!1}}class mg extends xi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",h=1,l=null,c=null,d=null,u=null,p=null,_=null;const g=e.getContextAttributes();let m=null,f=null;const E=[],x=[],y=new Set,S=new Map,M=new qe;M.layers.enable(1),M.viewport=new ve;const R=new qe;R.layers.enable(2),R.viewport=new ve;const L=[M,R],v=new fg;v.layers.enable(1),v.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=E[k];return Y===void 0&&(Y=new _a,E[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=E[k];return Y===void 0&&(Y=new _a,E[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=E[k];return Y===void 0&&(Y=new _a,E[k]=Y),Y.getHandSpace()};function V(k){const Y=x.indexOf(k.inputSource);if(Y===-1)return;const rt=E[Y];rt!==void 0&&(rt.update(k.inputSource,k.frame,l||a),rt.dispatchEvent({type:k.type,data:k.inputSource}))}function I(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",O);for(let k=0;k<E.length;k++){const Y=x[k];Y!==null&&(x[k]=null,E[k].disconnect(Y))}w=null,F=null,t.setRenderTarget(m),p=null,u=null,d=null,r=null,f=null,et.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",I),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:p}),f=new fi(p.framebufferWidth,p.framebufferHeight,{format:an,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,rt=null,at=null;g.depth&&(at=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=g.stencil?Qi:li,rt=g.stencil?qi:ri);const D={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};d=new XRWebGLBinding(r,e),u=d.createProjectionLayer(D),r.updateRenderState({layers:[u]}),f=new fi(u.textureWidth,u.textureHeight,{format:an,type:ui,depthTexture:new pg(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const yt=t.properties.get(f);yt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(k){for(let Y=0;Y<k.removed.length;Y++){const rt=k.removed[Y],at=x.indexOf(rt);at>=0&&(x[at]=null,E[at].disconnect(rt))}for(let Y=0;Y<k.added.length;Y++){const rt=k.added[Y];let at=x.indexOf(rt);if(at===-1){for(let yt=0;yt<E.length;yt++)if(yt>=x.length){x.push(rt),at=yt;break}else if(x[yt]===null){x[yt]=rt,at=yt;break}if(at===-1)break}const D=E[at];D&&D.connect(rt)}}const B=new C,$=new C;function Z(k,Y,rt){B.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(rt.matrixWorld);const at=B.distanceTo($),D=Y.projectionMatrix.elements,yt=rt.projectionMatrix.elements,Et=D[14]/(D[10]-1),it=D[14]/(D[10]+1),Mt=(D[9]+1)/D[5],Gt=(D[9]-1)/D[5],pt=(D[8]-1)/D[0],Dt=(yt[8]+1)/yt[0],ue=Et*pt,me=Et*Dt,fe=at/(-pt+Dt),oe=fe*-pt;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(oe),k.translateZ(fe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Ht=Et+fe,Jt=it+fe,Pe=ue-oe,A=me+(at-oe),b=Mt*it/Jt*Ht,z=Gt*it/Jt*Ht;k.projectionMatrix.makePerspective(Pe,A,b,z,Ht,Jt),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function q(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;v.near=R.near=M.near=k.near,v.far=R.far=M.far=k.far,(w!==v.near||F!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,F=v.far);const Y=k.parent,rt=v.cameras;q(v,Y);for(let at=0;at<rt.length;at++)q(rt[at],Y);rt.length===2?Z(v,M,R):v.projectionMatrix.copy(M.projectionMatrix),tt(k,v,Y)};function tt(k,Y,rt){rt===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(rt.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0);const at=k.children;for(let D=0,yt=at.length;D<yt;D++)at[D].updateMatrixWorld(!0);k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Cr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return h},this.setFoveation=function(k){h=k,u!==null&&(u.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.getPlanes=function(){return y};let j=null;function gt(k,Y){if(c=Y.getViewerPose(l||a),_=Y,c!==null){const rt=c.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let at=!1;rt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let D=0;D<rt.length;D++){const yt=rt[D];let Et=null;if(p!==null)Et=p.getViewport(yt);else{const Mt=d.getViewSubImage(u,yt);Et=Mt.viewport,D===0&&(t.setRenderTargetTextures(f,Mt.colorTexture,u.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(f))}let it=L[D];it===void 0&&(it=new qe,it.layers.enable(D),it.viewport=new ve,L[D]=it),it.matrix.fromArray(yt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(yt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Et.x,Et.y,Et.width,Et.height),D===0&&(v.matrix.copy(it.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(it)}}for(let rt=0;rt<E.length;rt++){const at=x[rt],D=E[rt];at!==null&&D!==void 0&&D.update(at,Y,l||a)}if(j&&j(k,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let rt=null;for(const at of y)Y.detectedPlanes.has(at)||(rt===null&&(rt=[]),rt.push(at));if(rt!==null)for(const at of rt)y.delete(at),S.delete(at),i.dispatchEvent({type:"planeremoved",data:at});for(const at of Y.detectedPlanes)if(!y.has(at))y.add(at),S.set(at,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:at});else{const D=S.get(at);at.lastChangedTime>D&&(S.set(at,at.lastChangedTime),i.dispatchEvent({type:"planechanged",data:at}))}}_=null}const et=new ah;et.setAnimationLoop(gt),this.setAnimationLoop=function(k){j=k},this.dispose=function(){}}}function _g(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,nh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,E,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?h(m,f,E,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ie&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ie&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function h(m,f,E,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ie&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gg(n,t,e,i){let r={},s={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(E,x){const y=x.program;i.uniformBlockBinding(E,y)}function l(E,x){let y=r[E.id];y===void 0&&(_(E),y=c(E),r[E.id]=y,E.addEventListener("dispose",m));const S=x.program;i.updateUBOMapping(E,S);const M=t.render.frame;s[E.id]!==M&&(u(E),s[E.id]=M)}function c(E){const x=d();E.__bindingPointIndex=x;const y=n.createBuffer(),S=E.__size,M=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const x=r[E.id],y=E.uniforms,S=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let M=0,R=y.length;M<R;M++){const L=y[M];if(p(L,M,S)===!0){const v=L.__offset,w=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let V=0;V<w.length;V++){const I=w[V],O=g(I);typeof I=="number"?(L.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,v+F,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=I.elements[0],L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=I.elements[0],L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=I.elements[0]):(I.toArray(L.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,v,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,x,y){const S=E.value;if(y[x]===void 0){if(typeof S=="number")y[x]=S;else{const M=Array.isArray(S)?S:[S],R=[];for(let L=0;L<M.length;L++)R.push(M[L].clone());y[x]=R}return!0}else if(typeof S=="number"){if(y[x]!==S)return y[x]=S,!0}else{const M=Array.isArray(y[x])?y[x]:[y[x]],R=Array.isArray(S)?S:[S];for(let L=0;L<M.length;L++){const v=M[L];if(v.equals(R[L])===!1)return v.copy(R[L]),!0}}return!1}function _(E){const x=E.uniforms;let y=0;const S=16;let M=0;for(let R=0,L=x.length;R<L;R++){const v=x[R],w={boundary:0,storage:0},F=Array.isArray(v.value)?v.value:[v.value];for(let V=0,I=F.length;V<I;V++){const O=F[V],B=g(O);w.boundary+=B.boundary,w.storage+=B.storage}if(v.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=y,R>0){M=y%S;const V=S-M;M!==0&&V-w.boundary<0&&(y+=S-M,v.__offset=y)}y+=w.storage}return M=y%S,M>0&&(y+=S-M),E.__size=y,E.__cache={},this}function g(E){const x={boundary:0,storage:0};return typeof E=="number"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:h,update:l,dispose:f}}function vg(){const n=Ts("canvas");return n.style.display="block",n}class uh{constructor(t={}){const{canvas:e=vg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=a;let p=null,_=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=wt,this.useLegacyLights=!0,this.toneMapping=Pn,this.toneMappingExposure=1;const f=this;let E=!1,x=0,y=0,S=null,M=-1,R=null;const L=new ve,v=new ve;let w=null,F=e.width,V=e.height,I=1,O=null,B=null;const $=new ve(0,0,F,V),Z=new ve(0,0,F,V);let q=!1;const tt=new sh;let j=!1,gt=!1,et=null;const k=new Nt,Y=new C,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return S===null?I:1}let D=i;function yt(T,N){for(let H=0;H<T.length;H++){const U=T[H],X=e.getContext(U,N);if(X!==null)return X}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ja}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",Wt,!1),D===null){const N=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&N.shift(),D=yt(N,T),D===null)throw yt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Et,it,Mt,Gt,pt,Dt,ue,me,fe,oe,Ht,Jt,Pe,A,b,z,J,Q,st,St,ct,W,ut,mt;function vt(){Et=new Cm(D),it=new Em(D,Et,t),Et.init(it),W=new ug(D,Et,it),Mt=new cg(D,Et,it),Gt=new Dm(D),pt=new j_,Dt=new hg(D,Et,Mt,pt,it,W,Gt),ue=new ym(f),me=new Rm(f),fe=new Vf(D,it),ut=new Mm(D,Et,fe,it),oe=new Pm(D,fe,Gt,ut),Ht=new Nm(D,oe,fe,Gt),st=new Fm(D,it,Dt),z=new bm(pt),Jt=new Y_(f,ue,me,Et,it,ut,z),Pe=new _g(f,pt),A=new K_,b=new ig(Et,it),Q=new xm(f,ue,me,Mt,Ht,u,h),J=new lg(f,Ht,it),mt=new gg(D,Gt,it,Mt),St=new Sm(D,Et,Gt,it),ct=new Lm(D,Et,Gt,it),Gt.programs=Jt.programs,f.capabilities=it,f.extensions=Et,f.properties=pt,f.renderLists=A,f.shadowMap=J,f.state=Mt,f.info=Gt}vt();const lt=new mg(f,D);this.xr=lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(F,V,!1))},this.getSize=function(T){return T.set(F,V)},this.setSize=function(T,N,H=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,V=N,e.width=Math.floor(T*I),e.height=Math.floor(N*I),H===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(F*I,V*I).floor()},this.setDrawingBufferSize=function(T,N,H){F=T,V=N,I=H,e.width=Math.floor(T*H),e.height=Math.floor(N*H),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,N,H,U){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,N,H,U),Mt.viewport(L.copy($).multiplyScalar(I).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,N,H,U){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,N,H,U),Mt.scissor(v.copy(Z).multiplyScalar(I).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){Mt.setScissorTest(q=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){B=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,N=!0,H=!0){let U=0;T&&(U|=D.COLOR_BUFFER_BIT),N&&(U|=D.DEPTH_BUFFER_BIT),H&&(U|=D.STENCIL_BUFFER_BIT),D.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",Wt,!1),A.dispose(),b.dispose(),pt.dispose(),ue.dispose(),me.dispose(),Ht.dispose(),ut.dispose(),mt.dispose(),Jt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ht),lt.removeEventListener("sessionend",qt),et&&(et.dispose(),et=null),Zt.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Gt.autoReset,N=J.enabled,H=J.autoUpdate,U=J.needsUpdate,X=J.type;vt(),Gt.autoReset=T,J.enabled=N,J.autoUpdate=H,J.needsUpdate=U,J.type=X}function Wt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const N=T.target;N.removeEventListener("dispose",te),P(N)}function P(T){G(T),pt.remove(T)}function G(T){const N=pt.get(T).programs;N!==void 0&&(N.forEach(function(H){Jt.releaseProgram(H)}),T.isShaderMaterial&&Jt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,H,U,X,_t){N===null&&(N=rt);const xt=X.isMesh&&X.matrixWorld.determinant()<0,bt=eu(T,N,H,U,X);Mt.setMaterial(U,xt);let At=H.index,Ct=1;U.wireframe===!0&&(At=oe.getWireframeAttribute(H),Ct=2);const Pt=H.drawRange,Ut=H.attributes.position;let Xt=Pt.start*Ct,Te=(Pt.start+Pt.count)*Ct;_t!==null&&(Xt=Math.max(Xt,_t.start*Ct),Te=Math.min(Te,(_t.start+_t.count)*Ct)),At!==null?(Xt=Math.max(Xt,0),Te=Math.min(Te,At.count)):Ut!=null&&(Xt=Math.max(Xt,0),Te=Math.min(Te,Ut.count));const $e=Te-Xt;if($e<0||$e===1/0)return;ut.setup(X,U,bt,H,At);let jn,ie=St;if(At!==null&&(jn=fe.get(At),ie=ct,ie.setIndex(jn)),X.isMesh)U.wireframe===!0?(Mt.setLineWidth(U.wireframeLinewidth*at()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(X.isLine){let zt=U.linewidth;zt===void 0&&(zt=1),Mt.setLineWidth(zt*at()),X.isLineSegments?ie.setMode(D.LINES):X.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else X.isPoints?ie.setMode(D.POINTS):X.isSprite&&ie.setMode(D.TRIANGLES);if(X.isInstancedMesh)ie.renderInstances(Xt,$e,X.count);else if(H.isInstancedBufferGeometry){const zt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,zs=Math.min(H.instanceCount,zt);ie.renderInstances(Xt,$e,zs)}else ie.render(Xt,$e)},this.compile=function(T,N){function H(U,X,_t){U.transparent===!0&&U.side===ge&&U.forceSinglePass===!1?(U.side=Ie,U.needsUpdate=!0,Gr(U,X,_t),U.side=Yn,U.needsUpdate=!0,Gr(U,X,_t),U.side=ge):Gr(U,X,_t)}_=b.get(T),_.init(),m.push(_),T.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(f.useLegacyLights),T.traverse(function(U){const X=U.material;if(X)if(Array.isArray(X))for(let _t=0;_t<X.length;_t++){const xt=X[_t];H(xt,T,U)}else H(X,T,U)}),m.pop(),_=null};let K=null;function ot(T){K&&K(T)}function ht(){Zt.stop()}function qt(){Zt.start()}const Zt=new ah;Zt.setAnimationLoop(ot),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(T){K=T,lt.setAnimationLoop(T),T===null?Zt.stop():Zt.start()},lt.addEventListener("sessionstart",ht),lt.addEventListener("sessionend",qt),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(N),N=lt.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,N,S),_=b.get(T,m.length),_.init(),m.push(_),k.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),tt.setFromProjectionMatrix(k),gt=this.localClippingEnabled,j=z.init(this.clippingPlanes,gt),p=A.get(T,g.length),p.init(),g.push(p),Se(T,N,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(O,B),j===!0&&z.beginShadows();const H=_.state.shadowsArray;if(J.render(H,T,N),j===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(p,T),_.setupLights(f.useLegacyLights),N.isArrayCamera){const U=N.cameras;for(let X=0,_t=U.length;X<_t;X++){const xt=U[X];Un(p,T,xt,xt.viewport)}}else Un(p,T,N);S!==null&&(Dt.updateMultisampleRenderTarget(S),Dt.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(f,T,N),ut.resetDefaultState(),M=-1,R=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function Se(T,N,H,U){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||tt.intersectsSprite(T)){U&&Y.setFromMatrixPosition(T.matrixWorld).applyMatrix4(k);const xt=Ht.update(T),bt=T.material;bt.visible&&p.push(T,xt,bt,H,Y.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||tt.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==Gt.render.frame&&(T.skeleton.update(),T.skeleton.frame=Gt.render.frame);const xt=Ht.update(T),bt=T.material;if(U&&(xt.boundingSphere===null&&xt.computeBoundingSphere(),Y.copy(xt.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(k)),Array.isArray(bt)){const At=xt.groups;for(let Ct=0,Pt=At.length;Ct<Pt;Ct++){const Ut=At[Ct],Xt=bt[Ut.materialIndex];Xt&&Xt.visible&&p.push(T,xt,Xt,H,Y.z,Ut)}}else bt.visible&&p.push(T,xt,bt,H,Y.z,null)}}const _t=T.children;for(let xt=0,bt=_t.length;xt<bt;xt++)Se(_t[xt],N,H,U)}function Un(T,N,H,U){const X=T.opaque,_t=T.transmissive,xt=T.transparent;_.setupLightsView(H),j===!0&&z.setGlobalState(f.clippingPlanes,H),_t.length>0&&ee(X,_t,N,H),U&&Mt.viewport(L.copy(U)),X.length>0&&Ge(X,N,H),_t.length>0&&Ge(_t,N,H),xt.length>0&&Ge(xt,N,H),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ee(T,N,H,U){if(et===null){const bt=it.isWebGL2;et=new fi(1024,1024,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?Rr:ui,minFilter:Ar,samples:bt&&o===!0?4:0})}const X=f.getRenderTarget();f.setRenderTarget(et),f.clear();const _t=f.toneMapping;f.toneMapping=Pn,Ge(T,H,U),Dt.updateMultisampleRenderTarget(et),Dt.updateRenderTargetMipmap(et);let xt=!1;for(let bt=0,At=N.length;bt<At;bt++){const Ct=N[bt],Pt=Ct.object,Ut=Ct.geometry,Xt=Ct.material,Te=Ct.group;if(Xt.side===ge&&Pt.layers.test(U.layers)){const $e=Xt.side;Xt.side=Ie,Xt.needsUpdate=!0,un(Pt,H,U,Ut,Xt,Te),Xt.side=$e,Xt.needsUpdate=!0,xt=!0}}xt===!0&&(Dt.updateMultisampleRenderTarget(et),Dt.updateRenderTargetMipmap(et)),f.setRenderTarget(X),f.toneMapping=_t}function Ge(T,N,H){const U=N.isScene===!0?N.overrideMaterial:null;for(let X=0,_t=T.length;X<_t;X++){const xt=T[X],bt=xt.object,At=xt.geometry,Ct=U===null?xt.material:U,Pt=xt.group;bt.layers.test(H.layers)&&un(bt,N,H,At,Ct,Pt)}}function un(T,N,H,U,X,_t){T.onBeforeRender(f,N,H,U,X,_t),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(f,N,H,U,T,_t),X.transparent===!0&&X.side===ge&&X.forceSinglePass===!1?(X.side=Ie,X.needsUpdate=!0,f.renderBufferDirect(H,N,U,X,T,_t),X.side=Yn,X.needsUpdate=!0,f.renderBufferDirect(H,N,U,X,T,_t),X.side=ge):f.renderBufferDirect(H,N,U,X,T,_t),T.onAfterRender(f,N,H,U,X,_t)}function Gr(T,N,H){N.isScene!==!0&&(N=rt);const U=pt.get(T),X=_.state.lights,_t=_.state.shadowsArray,xt=X.state.version,bt=Jt.getParameters(T,X.state,_t,N,H),At=Jt.getProgramCacheKey(bt);let Ct=U.programs;U.environment=T.isMeshStandardMaterial?N.environment:null,U.fog=N.fog,U.envMap=(T.isMeshStandardMaterial?me:ue).get(T.envMap||U.environment),Ct===void 0&&(T.addEventListener("dispose",te),Ct=new Map,U.programs=Ct);let Pt=Ct.get(At);if(Pt!==void 0){if(U.currentProgram===Pt&&U.lightsStateVersion===xt)return mo(T,bt),Pt}else bt.uniforms=Jt.getUniforms(T),T.onBuild(H,bt,f),T.onBeforeCompile(bt,f),Pt=Jt.acquireProgram(bt,At),Ct.set(At,Pt),U.uniforms=bt.uniforms;const Ut=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=z.uniform),mo(T,bt),U.needsLights=iu(T),U.lightsStateVersion=xt,U.needsLights&&(Ut.ambientLightColor.value=X.state.ambient,Ut.lightProbe.value=X.state.probe,Ut.directionalLights.value=X.state.directional,Ut.directionalLightShadows.value=X.state.directionalShadow,Ut.spotLights.value=X.state.spot,Ut.spotLightShadows.value=X.state.spotShadow,Ut.rectAreaLights.value=X.state.rectArea,Ut.ltc_1.value=X.state.rectAreaLTC1,Ut.ltc_2.value=X.state.rectAreaLTC2,Ut.pointLights.value=X.state.point,Ut.pointLightShadows.value=X.state.pointShadow,Ut.hemisphereLights.value=X.state.hemi,Ut.directionalShadowMap.value=X.state.directionalShadowMap,Ut.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ut.spotShadowMap.value=X.state.spotShadowMap,Ut.spotLightMatrix.value=X.state.spotLightMatrix,Ut.spotLightMap.value=X.state.spotLightMap,Ut.pointShadowMap.value=X.state.pointShadowMap,Ut.pointShadowMatrix.value=X.state.pointShadowMatrix);const Xt=Pt.getUniforms(),Te=gs.seqWithValue(Xt.seq,Ut);return U.currentProgram=Pt,U.uniformsList=Te,Pt}function mo(T,N){const H=pt.get(T);H.outputColorSpace=N.outputColorSpace,H.instancing=N.instancing,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function eu(T,N,H,U,X){N.isScene!==!0&&(N=rt),Dt.resetTextureUnits();const _t=N.fog,xt=U.isMeshStandardMaterial?N.environment:null,bt=S===null?f.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:vn,At=(U.isMeshStandardMaterial?me:ue).get(U.envMap||xt),Ct=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pt=!!U.normalMap&&!!H.attributes.tangent,Ut=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,Te=!!H.morphAttributes.color,$e=U.toneMapped?f.toneMapping:Pn,jn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=jn!==void 0?jn.length:0,zt=pt.get(U),zs=_.state.lights;if(j===!0&&(gt===!0||T!==R)){const Fe=T===R&&U.id===M;z.setState(U,T,Fe)}let de=!1;U.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==zs.state.version||zt.outputColorSpace!==bt||X.isInstancedMesh&&zt.instancing===!1||!X.isInstancedMesh&&zt.instancing===!0||X.isSkinnedMesh&&zt.skinning===!1||!X.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==At||U.fog===!0&&zt.fog!==_t||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==z.numPlanes||zt.numIntersection!==z.numIntersection)||zt.vertexAlphas!==Ct||zt.vertexTangents!==Pt||zt.morphTargets!==Ut||zt.morphNormals!==Xt||zt.morphColors!==Te||zt.toneMapping!==$e||it.isWebGL2===!0&&zt.morphTargetsCount!==ie)&&(de=!0):(de=!0,zt.__version=U.version);let $n=zt.currentProgram;de===!0&&($n=Gr(U,N,X));let _o=!1,cr=!1,Bs=!1;const we=$n.getUniforms(),Kn=zt.uniforms;if(Mt.useProgram($n.program)&&(_o=!0,cr=!0,Bs=!0),U.id!==M&&(M=U.id,cr=!0),_o||R!==T){if(we.setValue(D,"projectionMatrix",T.projectionMatrix),it.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),R!==T&&(R=T,cr=!0,Bs=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Fe=we.map.cameraPosition;Fe!==void 0&&Fe.setValue(D,Y.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&we.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||X.isSkinnedMesh)&&we.setValue(D,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){we.setOptional(D,X,"bindMatrix"),we.setOptional(D,X,"bindMatrixInverse");const Fe=X.skeleton;Fe&&(it.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),we.setValue(D,"boneTexture",Fe.boneTexture,Dt),we.setValue(D,"boneTextureSize",Fe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ks=H.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&it.isWebGL2===!0)&&st.update(X,H,$n),(cr||zt.receiveShadow!==X.receiveShadow)&&(zt.receiveShadow=X.receiveShadow,we.setValue(D,"receiveShadow",X.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Kn.envMap.value=At,Kn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),cr&&(we.setValue(D,"toneMappingExposure",f.toneMappingExposure),zt.needsLights&&nu(Kn,Bs),_t&&U.fog===!0&&Pe.refreshFogUniforms(Kn,_t),Pe.refreshMaterialUniforms(Kn,U,I,V,et),gs.upload(D,zt.uniformsList,Kn,Dt)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(gs.upload(D,zt.uniformsList,Kn,Dt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&we.setValue(D,"center",X.center),we.setValue(D,"modelViewMatrix",X.modelViewMatrix),we.setValue(D,"normalMatrix",X.normalMatrix),we.setValue(D,"modelMatrix",X.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Fe=U.uniformsGroups;for(let Gs=0,ru=Fe.length;Gs<ru;Gs++)if(it.isWebGL2){const go=Fe[Gs];mt.update(go,$n),mt.bind(go,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function nu(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function iu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,N,H){pt.get(T.texture).__webglTexture=N,pt.get(T.depthTexture).__webglTexture=H;const U=pt.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=H===void 0,U.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const H=pt.get(T);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,H=0){S=T,x=N,y=H;let U=!0,X=null,_t=!1,xt=!1;if(T){const At=pt.get(T);At.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(D.FRAMEBUFFER,null),U=!1):At.__webglFramebuffer===void 0?Dt.setupRenderTarget(T):At.__hasExternalTextures&&Dt.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);const Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(xt=!0);const Pt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=Pt[N],_t=!0):it.isWebGL2&&T.samples>0&&Dt.useMultisampledRTT(T)===!1?X=pt.get(T).__webglMultisampledFramebuffer:X=Pt,L.copy(T.viewport),v.copy(T.scissor),w=T.scissorTest}else L.copy($).multiplyScalar(I).floor(),v.copy(Z).multiplyScalar(I).floor(),w=q;if(Mt.bindFramebuffer(D.FRAMEBUFFER,X)&&it.drawBuffers&&U&&Mt.drawBuffers(T,X),Mt.viewport(L),Mt.scissor(v),Mt.setScissorTest(w),_t){const At=pt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,H)}else if(xt){const At=pt.get(T.texture),Ct=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.__webglTexture,H||0,Ct)}M=-1},this.readRenderTargetPixels=function(T,N,H,U,X,_t,xt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){Mt.bindFramebuffer(D.FRAMEBUFFER,bt);try{const At=T.texture,Ct=At.format,Pt=At.type;if(Ct!==an&&W.convert(Ct)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Pt===Rr&&(Et.has("EXT_color_buffer_half_float")||it.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Pt!==ui&&W.convert(Pt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pt===si&&(it.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-U&&H>=0&&H<=T.height-X&&D.readPixels(N,H,U,X,W.convert(Ct),W.convert(Pt),_t)}finally{const At=S!==null?pt.get(S).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,At)}}},this.copyFramebufferToTexture=function(T,N,H=0){const U=Math.pow(2,-H),X=Math.floor(N.image.width*U),_t=Math.floor(N.image.height*U);Dt.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,T.x,T.y,X,_t),Mt.unbindTexture()},this.copyTextureToTexture=function(T,N,H,U=0){const X=N.image.width,_t=N.image.height,xt=W.convert(H.format),bt=W.convert(H.type);Dt.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment),N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,T.x,T.y,X,_t,xt,bt,N.image.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,xt,N.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,U,T.x,T.y,xt,bt,N.image),U===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(T,N,H,U,X=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=T.max.x-T.min.x+1,xt=T.max.y-T.min.y+1,bt=T.max.z-T.min.z+1,At=W.convert(U.format),Ct=W.convert(U.type);let Pt;if(U.isData3DTexture)Dt.setTexture3D(U,0),Pt=D.TEXTURE_3D;else if(U.isDataArrayTexture)Dt.setTexture2DArray(U,0),Pt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),Xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Te=D.getParameter(D.UNPACK_SKIP_PIXELS),$e=D.getParameter(D.UNPACK_SKIP_ROWS),jn=D.getParameter(D.UNPACK_SKIP_IMAGES),ie=H.isCompressedTexture?H.mipmaps[0]:H.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ie.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ie.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,T.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,T.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?D.texSubImage3D(Pt,X,N.x,N.y,N.z,_t,xt,bt,At,Ct,ie.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Pt,X,N.x,N.y,N.z,_t,xt,bt,At,ie.data)):D.texSubImage3D(Pt,X,N.x,N.y,N.z,_t,xt,bt,At,Ct,ie),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,$e),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jn),X===0&&U.generateMipmaps&&D.generateMipmap(Pt),Mt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Dt.setTextureCube(T,0):T.isData3DTexture?Dt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Dt.setTexture2DArray(T,0):Dt.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){x=0,y=0,S=null,Mt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?ci:Xc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ci?wt:vn}}class xg extends uh{}xg.prototype.isWebGL1Renderer=!0;class Mg extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Ln extends cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Il=new C,Fl=new C,Nl=new Nt,ga=new Ps,ls=new rr;class vs extends ye{constructor(t=new jt,e=new Ln){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Il.fromBufferAttribute(e,r-1),Fl.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Il.distanceTo(Fl);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(r),ls.radius+=s,t.ray.intersectsSphere(ls)===!1)return;Nl.copy(r).invert(),ga.copy(t.ray).applyMatrix4(Nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=new C,c=new C,d=new C,u=new C,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const f=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let x=f,y=E-1;x<y;x+=p){const S=_.getX(x),M=_.getX(x+1);if(l.fromBufferAttribute(m,S),c.fromBufferAttribute(m,M),ga.distanceSqToSegment(l,c,u,d)>h)continue;u.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(u);L<t.near||L>t.far||e.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let x=f,y=E-1;x<y;x+=p){if(l.fromBufferAttribute(m,x),c.fromBufferAttribute(m,x+1),ga.distanceSqToSegment(l,c,u,d)>h)continue;u.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(u);M<t.near||M>t.far||e.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ol=new C,zl=new C;class Pr extends vs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Ol.fromBufferAttribute(e,r),zl.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ol.distanceTo(zl);t.setAttribute("lineDistance",new ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gr extends cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bl=new Nt,Ga=new Ps,cs=new rr,hs=new C;class va extends ye{constructor(t=new jt,e=new gr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,t.ray.intersectsSphere(cs)===!1)return;Bl.copy(r).invert(),Ga.copy(t.ray).applyMatrix4(Bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=u,g=p;_<g;_++){const m=l.getX(_);hs.fromBufferAttribute(d,m),kl(hs,m,h,r,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=u,g=p;_<g;_++)hs.fromBufferAttribute(d,_),kl(hs,_,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kl(n,t,e,i,r,s,a){const o=Ga.distanceSqToPoint(n);if(o<e){const h=new C;Ga.closestPointToPoint(n,h),h.applyMatrix4(i);const l=r.ray.origin.distanceTo(h);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:h,index:t,face:null,object:a})}}class Sg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,h=s-1,l;for(;o<=h;)if(r=Math.floor(o+(h-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)h=r-1;else{h=r;break}if(r=h,i[r]===a)return r/(s-1);const c=i[r],u=i[r+1]-c,p=(a-c)/u;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),h=e||(a.isVector2?new Bt:new C);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,r=[],s=[],a=[],o=new C,h=new Nt;for(let p=0;p<=t;p++){const _=p/t;r[p]=this.getTangentAt(_,new C)}s[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);c<=l&&(l=c,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(_e(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(h.makeRotationAxis(o,_))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(_e(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let _=1;_<=t;_++)s[_].applyMatrix4(h.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xs extends Sg{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e){const i=e||new Bt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=h-this.aX,p=l-this.aY;h=u*c-p*d+this.aX,l=u*d+p*c+this.aY}return i.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Eg extends jt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,r=new C,s=new C;if(t.index!==null){const a=t.attributes.position,o=t.index;let h=t.groups;h.length===0&&(h=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,c=h.length;l<c;++l){const d=h[l],u=d.start,p=d.count;for(let _=u,g=u+p;_<g;_+=3)for(let m=0;m<3;m++){const f=o.getX(_+m),E=o.getX(_+(m+1)%3);r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,E),Gl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}}else{const a=t.attributes.position;for(let o=0,h=a.count/3;o<h;o++)for(let l=0;l<3;l++){const c=3*o+l,d=3*o+(l+1)%3;r.fromBufferAttribute(a,c),s.fromBufferAttribute(a,d),Gl(r,s,i)===!0&&(e.push(r.x,r.y,r.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new ae(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Gl(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,r=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(r)===!0?!1:(e.add(i),e.add(r),!0)}class bg extends cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cs,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yg extends cn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Lt(16777215),this.specular=new Lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cs,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mi extends cn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cs,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const Ha={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Tg{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],_=l[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const wg=new Tg;class Us{constructor(t){this.manager=t!==void 0?t:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const wn={};class Ag extends Error{constructor(t,e){super(t),this.response=e}}class ro extends Us{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Ha.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(wn[t]!==void 0){wn[t].push({onLoad:e,onProgress:i,onError:r});return}wn[t]=[],wn[t].push({onLoad:e,onProgress:i,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,h=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=wn[t],d=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=u?parseInt(u):0,_=p!==0;let g=0;const m=new ReadableStream({start(f){E();function E(){d.read().then(({done:x,value:y})=>{if(x)f.close();else{g+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let M=0,R=c.length;M<R;M++){const L=c[M];L.onProgress&&L.onProgress(S)}f.enqueue(y),E()}})}}});return new Response(m)}else throw new Ag(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(h){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Ha.add(t,l);const c=wn[t];delete wn[t];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const c=wn[t];if(c===void 0)throw this.manager.itemError(t),l;delete wn[t];for(let d=0,u=c.length;d<u;d++){const p=c[d];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Rg extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Cg extends Rg{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class fh{constructor(t,e,i=0,r=1/0){this.ray=new Ps(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Va(t,this,i,e),i.sort(Hl),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Va(t[r],this,i,e);return i.sort(Hl),i}}function Hl(n,t){return n.distance-t.distance}function Va(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Va(r[s],t,e,!0)}}class Pg extends Pr{constructor(t=10,e=10,i=4473924,r=8947848){i=new Lt(i),r=new Lt(r);const s=e/2,a=t/e,o=t/2,h=[],l=[];for(let u=0,p=0,_=-o;u<=e;u++,_+=a){h.push(-o,0,_,o,0,_),h.push(_,0,-o,_,0,o);const g=u===s?i:r;g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3}const c=new jt;c.setAttribute("position",new ae(h,3)),c.setAttribute("color",new ae(l,3));const d=new Ln({vertexColors:!0,toneMapped:!1});super(c,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Lg extends Pr{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new jt;r.setAttribute("position",new ae(e,3)),r.setAttribute("color",new ae(i,3));const s=new Ln({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new Lt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);function on(n){return n*Math.PI/180}function Si(n){let t=new Float32Array(n.length),e=0;for(var i=0;i<(n.length+1)/9;i++){let o=new C().fromArray(n,i*9),h=new C().fromArray(n,i*9+3),l=new C().fromArray(n,i*9+6);var r=new C().subVectors(o,h),s=new C().subVectors(o,l);let c=new C().crossVectors(r,s);c.normalize();for(var a=0;a<3;a++)t[e++]=c.x,t[e++]=c.y,t[e++]=c.z}return t}function Vn(n,t,e,i=2){let r=n*t/Math.pow(Math.pow(n,i)*Math.pow(Math.abs(Math.sin(on(e))),i)+Math.pow(t,i)*Math.pow(Math.abs(Math.cos(on(e))),i),1/i),s=r*Math.cos(on(e)),a=r*Math.sin(on(e));return(n==0||t==0)&&(s=0,a=0),{x:s,y:a}}function so(n,t){const e=window.URL.createObjectURL(n),i=document.createElement("a");i.style.display="none",i.href=e,i.setAttribute("download",t),typeof i.download>"u"&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),document.body.removeChild(i),setTimeout(()=>{window.URL.revokeObjectURL(e)},100)}class Dg extends Us{constructor(t){super(t),this.materials=null}load(t,e,i,r){const s=this,a=new ro(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(h){r?r(h):console.error(h),s.manager.itemError(t)}},i,r)}parse(t){const e=new Hn;var i=!1,s=new DOMParser().parseFromString(t,"application/xml").getElementsByTagName("RoomObject");for(let a=0;a<s.length;a++)switch(s[a].getAttribute("Shape")){case"1":i=!0,e.add(Vl(s[a],4));break;case"2":i=!0,e.add(Wl(s[a],!1));break;case"3":i=!0,e.add(Wl(s[a],!0));break;case"4":i=!0,e.add(Ug(s[a]));break;case"5":break;case"6":i=!0,e.add(Vl(s[a],3));break;default:console.log("Unsupported shape type in dbacv file")}if(i==!0)return e}}function Vl(n,t){const e=ao(n);let i=[],r=[];t==4&&(r=[0,1,2,2,3,0]),t==3&&(r=[0,1,2]),t>4&&console.log("Oh. Shits gone pentagonal!"),r.forEach(function(d){let u=n.getElementsByTagName("P"+(d+1));i.push(parseFloat(u[0].getAttribute("x"))),i.push(parseFloat(u[0].getAttribute("y"))),i.push(parseFloat(u[0].getAttribute("z")))});let s=0,a=n.getElementsByTagName("Rotation");a.length>0&&(s=a[0].getAttribute("z"));const o=new Float32Array(i),h=new jt;h.setAttribute("position",new Kt(o,3)),h.setAttribute("normal",new Kt(Si(o),3)),h.rotateZ(on(s)),h.translate(e.x,e.y,e.z);const l=new Mi({side:ge}),c=new xe(h,l);return c.name=n.getAttribute("Name"),c}function Ug(n){const t=ao(n);n.getAttribute("Name");let e=[];[2,1,0,0,3,2,2,6,5,5,1,2,5,6,7,7,4,5,7,3,0,0,4,7,3,7,6,6,2,3,1,5,4,4,0,1].forEach(function(l){let c=n.getElementsByTagName("P"+(l+1));e.push(parseFloat(c[0].getAttribute("x"))),e.push(parseFloat(c[0].getAttribute("y"))),e.push(parseFloat(c[0].getAttribute("z")))});const r=n.getElementsByTagName("Rotation")[0].getAttribute("z"),s=new Float32Array(e),a=new jt;a.setAttribute("position",new Kt(s,3)),a.setAttribute("normal",new Kt(Si(s),3)),a.rotateZ(on(r)),a.translate(t.x,t.y,t.z);const o=new Mi({side:ge}),h=new xe(a,o);return h.name=n.getAttribute("Name"),h}function ao(n){var t=n.getElementsByTagName("Origin");let e=new C(parseFloat(t[0].getAttribute("x")),parseFloat(t[0].getAttribute("y")),parseFloat(t[0].getAttribute("z"))),i=new C(0,0,0),r=n.parentNode.getElementsByTagName("Origin");for(let s=0;s<r.length;s++)r[s].parentNode.getAttribute("ObjectGroup")=="true"&&(i.x=parseFloat(r[s].getAttribute("x")),i.y=parseFloat(r[s].getAttribute("y")),i.z=parseFloat(r[s].getAttribute("z")));return n.parentNode.getAttribute("ObjectGroup")=="true"&&(e.x+=i.x,e.y+=i.y,e.z+=i.z),e}function Wl(n,t){const e=ao(n);var i,r,s,a,o,h;t?(i=parseFloat(n.getAttribute("InnerA")),r=parseFloat(n.getAttribute("OuterA")),s=parseFloat(n.getAttribute("InnerB")),a=parseFloat(n.getAttribute("OuterB")),o=parseFloat(n.getAttribute("InnerN")),h=parseFloat(n.getAttribute("OuterN"))):(i=parseFloat(n.getAttribute("InnerRadiusA")),r=parseFloat(n.getAttribute("OuterRadiusA")),s=parseFloat(n.getAttribute("InnerRadiusB")),a=parseFloat(n.getAttribute("OuterRadiusB")),o=2,h=2);let l=parseFloat(n.getAttribute("StartAngle")),c=parseFloat(n.getAttribute("SpanAngle")),d=parseFloat(n.getAttribute("InnerZ")),u=parseFloat(n.getAttribute("OuterZ")),p=[],_=[],g=Math.floor(l/90),m=Math.floor((l+c)/90);for(let v=g;v<=m;v++){let w=v*90,F=(v+1)*90;v==g&&(w=l),v==m&&(F=l+c);let V=F-w,I=Math.ceil(V/10),O=V/I;for(let B=0;B<I;B++){let $=O*B+w;_.push(Vn(r,a,$,h)),p.push(Vn(i,s,$,o))}}p.push(Vn(i,s,l+c,o)),_.push(Vn(r,a,l+c,h));let f=[];for(var E=0;E<p.length-1;E++)f.push(_[E].x),f.push(_[E].y),f.push(u),f.push(_[E+1].x),f.push(_[E+1].y),f.push(u),f.push(p[E].x),f.push(p[E].y),f.push(d),f.push(_[E+1].x),f.push(_[E+1].y),f.push(u),f.push(p[E+1].x),f.push(p[E+1].y),f.push(d),f.push(p[E].x),f.push(p[E].y),f.push(d);const x=new Float32Array(f);let y=0,S=n.getElementsByTagName("Rotation");S.length>0&&(y=S[0].getAttribute("z"));const M=new jt;M.setAttribute("position",new Kt(x,3)),M.setAttribute("normal",new Kt(Si(x),3)),M.rotateZ(on(y)),M.translate(e.x,e.y,e.z);const R=new Mi({side:ge}),L=new xe(M,R);return L.name=n.getAttribute("Name"),L}const dt={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},Vt={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},Tt={x:0,y:0},ze={camera:new Nt,gizmos:new Nt},Yt={type:"change"},nn={type:"start"},We={type:"end"},Ig=new fh,se=new C,Xl=new Nt,ql=new Nt,en=new C;class Fg extends xi{constructor(t,e,i=null){super(),this.camera=null,this.domElement=e,this.scene=i,this.target=new C,this._currentTarget=new C,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new Bt,this._v3_1=new C,this._v3_2=new C,this._m4_1=new Nt,this._m4_2=new Nt,this._quat=new nr,this._translationMatrix=new Nt,this._rotationMatrix=new Nt,this._scaleMatrix=new Nt,this._rotationAxis=new C,this._cameraMatrixState=new Nt,this._cameraProjectionState=new Nt,this._fovState=1,this._upState=new C,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new Nt,this._up0=new C,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new Nt,this._gizmoMatrixState0=new Nt,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=Vt.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new C,this._startCursorPosition=new C,this._grid=null,this._gridPosition=new C,this._gizmos=new Hn,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new C,this._cursorPosCurr=new C,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.enabled=!0,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=dt.IDLE,this.setCamera(t),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this._onContextMenu=Og.bind(this),this._onWheel=Hg.bind(this),this._onPointerUp=Gg.bind(this),this._onPointerMove=kg.bind(this),this._onPointerDown=Bg.bind(this),this._onPointerCancel=zg.bind(this),this._onWindowResize=Ng.bind(this),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onWheel),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("resize",this._onWindowResize)}onSinglePanStart(t,e){if(this.enabled)switch(this.dispatchEvent(nn),this.setCenter(t.clientX,t.clientY),e){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Yt)),this.updateTbState(dt.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(Yt));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(dt.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Tt.x,Tt.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(Yt);break;case"FOV":if(!this.camera.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Yt)),this.updateTbState(dt.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Yt)),this.updateTbState(dt.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}}onSinglePanMove(t,e){if(this.enabled){const i=e!=this._state;switch(this.setCenter(t.clientX,t.clientY),e){case dt.PAN:this.enablePan&&(i?(this.dispatchEvent(We),this.dispatchEvent(nn),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case dt.ROTATE:if(this.enableRotate)if(i)this.dispatchEvent(We),this.dispatchEvent(nn),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Tt.x,Tt.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,Tt.x,Tt.y,this.domElement,this._tbRadius));const r=this._startCursorPosition.distanceTo(this._currentCursorPosition),s=this._startCursorPosition.angleTo(this._currentCursorPosition),a=Math.max(r/this._tbRadius,s);this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),a)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=a,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case dt.SCALE:if(this.enableZoom)if(i)this.dispatchEvent(We),this.dispatchEvent(nn),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*8):s>0&&(a=Math.pow(this.scaleFactor,s*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(a,this._v3_1))}break;case dt.FOV:if(this.enableZoom&&this.camera.isPerspectiveCamera)if(i)this.dispatchEvent(We),this.dispatchEvent(nn),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*8):s>0&&(a=Math.pow(this.scaleFactor,s*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const o=this._v3_1.distanceTo(this._gizmos.position);let h=o/a;h=Qt.clamp(h,this.minDistance,this.maxDistance);const l=o*Math.tan(Qt.DEG2RAD*this._fovState*.5);let c=Qt.RAD2DEG*(Math.atan(l/h)*2);c=Qt.clamp(c,this.minFov,this.maxFov);const d=l/Math.tan(Qt.DEG2RAD*(c/2));a=o/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(c),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),se.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/o),this._m4_1.makeTranslation(se.x,se.y,se.z)}break}this.dispatchEvent(Yt)}}onSinglePanEnd(){if(this._state==dt.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const e=Math.abs((this._wPrev+this._wCurr)/2),i=this;this._animationId=window.requestAnimationFrame(function(r){i.updateTbState(dt.ANIMATION_ROTATE,!0);const s=i.calculateRotationAxis(i._cursorPosPrev,i._cursorPosCurr);i.onRotationAnim(r,s,Math.min(e,i.wMax))})}else this.updateTbState(dt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Yt);else this.updateTbState(dt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Yt)}else(this._state==dt.PAN||this._state==dt.IDLE)&&(this.updateTbState(dt.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(Yt));this.dispatchEvent(We)}onDoubleTap(t){if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(nn),this.setCenter(t.clientX,t.clientY);const e=this.unprojectOnObj(this.getCursorNDC(Tt.x,Tt.y,this.domElement),this.camera);if(e!=null&&this.enableAnimations){const i=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(r){i.updateTbState(dt.ANIMATION_FOCUS,!0),i.onFocusAnim(r,e,i._cameraMatrixState,i._gizmoMatrixState)})}else e!=null&&!this.enableAnimations&&(this.updateTbState(dt.FOCUS,!0),this.focus(e,this.scaleFactor),this.updateTbState(dt.IDLE,!1),this.dispatchEvent(Yt))}this.dispatchEvent(We)}onDoublePanStart(){this.enabled&&this.enablePan&&(this.dispatchEvent(nn),this.updateTbState(dt.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))}onDoublePanMove(){this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=dt.PAN&&(this.updateTbState(dt.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(Yt))}onDoublePanEnd(){this.updateTbState(dt.IDLE,!1),this.dispatchEvent(We)}onRotateStart(){this.enabled&&this.enableRotate&&(this.dispatchEvent(nn),this.updateTbState(dt.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))}onRotateMove(){if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let t;this._state!=dt.ZROTATE&&(this.updateTbState(dt.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),t=this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):t=new C().setFromMatrixPosition(this._gizmoMatrixState);const e=Qt.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(t,e)),this.dispatchEvent(Yt)}}onRotateEnd(){this.updateTbState(dt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(We)}onPinchStart(){this.enabled&&this.enableZoom&&(this.dispatchEvent(nn),this.updateTbState(dt.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))}onPinchMove(){if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const t=12;this._state!=dt.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(dt.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),t*this._devPxRatio);const e=this._currentFingerDistance/this._startFingerDistance;let i;this.enablePan?this.camera.isOrthographicCamera?i=this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(i=this.unprojectOnTbPlane(this.camera,Tt.x,Tt.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):i=this._gizmos.position,this.applyTransformMatrix(this.scale(e,i)),this.dispatchEvent(Yt)}}onPinchEnd(){this.updateTbState(dt.IDLE,!1),this.dispatchEvent(We)}onTriplePanStart(){if(this.enabled&&this.enableZoom){this.dispatchEvent(nn),this.updateTbState(dt.SCALE,!0);let t=0,e=0;const i=this._touchCurrent.length;for(let r=0;r<i;r++)t+=this._touchCurrent[r].clientX,e+=this._touchCurrent[r].clientY;this.setCenter(t/i,e/i),this._startCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}}onTriplePanMove(){if(this.enabled&&this.enableZoom){let t=0,e=0;const i=this._touchCurrent.length;for(let u=0;u<i;u++)t+=this._touchCurrent[u].clientX,e+=this._touchCurrent[u].clientY;this.setCenter(t/i,e/i);const r=8;this._currentCursorPosition.setY(this.getCursorNDC(Tt.x,Tt.y,this.domElement).y*.5);const s=this._currentCursorPosition.y-this._startCursorPosition.y;let a=1;s<0?a=1/Math.pow(this.scaleFactor,-s*r):s>0&&(a=Math.pow(this.scaleFactor,s*r)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const o=this._v3_1.distanceTo(this._gizmos.position);let h=o/a;h=Qt.clamp(h,this.minDistance,this.maxDistance);const l=o*Math.tan(Qt.DEG2RAD*this._fovState*.5);let c=Qt.RAD2DEG*(Math.atan(l/h)*2);c=Qt.clamp(c,this.minFov,this.maxFov);const d=l/Math.tan(Qt.DEG2RAD*(c/2));a=o/d,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(c),this.applyTransformMatrix(this.scale(a,this._v3_2,!1)),se.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(d/o),this._m4_1.makeTranslation(se.x,se.y,se.z),this.dispatchEvent(Yt)}}onTriplePanEnd(){this.updateTbState(dt.IDLE,!1),this.dispatchEvent(We)}setCenter(t,e){Tt.x=t,Tt.y=e}initializeMouseActions(){this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")}compareMouseAction(t,e){return t.operation==e.operation?t.mouse==e.mouse&&t.key==e.key:!1}setMouseAction(t,e,i=null){const r=["PAN","ROTATE","ZOOM","FOV"],s=[0,1,2,"WHEEL"],a=["CTRL","SHIFT",null];let o;if(!r.includes(t)||!s.includes(e)||!a.includes(i)||e=="WHEEL"&&t!="ZOOM"&&t!="FOV")return!1;switch(t){case"PAN":o=dt.PAN;break;case"ROTATE":o=dt.ROTATE;break;case"ZOOM":o=dt.SCALE;break;case"FOV":o=dt.FOV;break}const h={operation:t,mouse:e,key:i,state:o};for(let l=0;l<this.mouseActions.length;l++)if(this.mouseActions[l].mouse==h.mouse&&this.mouseActions[l].key==h.key)return this.mouseActions.splice(l,1,h),!0;return this.mouseActions.push(h),!0}unsetMouseAction(t,e=null){for(let i=0;i<this.mouseActions.length;i++)if(this.mouseActions[i].mouse==t&&this.mouseActions[i].key==e)return this.mouseActions.splice(i,1),!0;return!1}getOpFromAction(t,e){let i;for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==e)return i.operation;if(e!=null){for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==null)return i.operation}return null}getOpStateFromAction(t,e){let i;for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==e)return i.state;if(e!=null){for(let r=0;r<this.mouseActions.length;r++)if(i=this.mouseActions[r],i.mouse==t&&i.key==null)return i.state}return null}getAngle(t,e){return Math.atan2(e.clientY-t.clientY,e.clientX-t.clientX)*180/Math.PI}updateTouchEvent(t){for(let e=0;e<this._touchCurrent.length;e++)if(this._touchCurrent[e].pointerId==t.pointerId){this._touchCurrent.splice(e,1,t);break}}applyTransformMatrix(t){if(t.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(t.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==dt.ROTATE||this._state==dt.ZROTATE||this._state==dt.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),t.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(t.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==dt.SCALE||this._state==dt.FOCUS||this._state==dt.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){const e=this.camera.position.distanceTo(this._gizmos.position),i=new ir;i.setFromObject(this._gizmos);const r=new rr;i.getBoundingSphere(r);const s=Math.max(this._nearPos0,r.radius+r.center.length()),a=e-this._initialNear,o=Math.min(s,a);this.camera.near=e-o;const h=Math.min(this._farPos0,-r.radius+r.center.length()),l=e-this._initialFar,c=Math.min(h,l);this.camera.far=e-c,this.camera.updateProjectionMatrix()}else{let e=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,e=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,e=!0),e&&this.camera.updateProjectionMatrix()}}calculateAngularSpeed(t,e,i,r){const s=e-t,a=(r-i)/1e3;return a==0?0:s/a}calculatePointersDistance(t,e){return Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2))}calculateRotationAxis(t,e){return this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(t,e).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()}calculateTbRadius(t){const e=t.position.distanceTo(this._gizmos.position);if(t.type=="PerspectiveCamera"){const i=Qt.DEG2RAD*t.fov*.5,r=Math.atan(t.aspect*Math.tan(i));return Math.tan(Math.min(i,r))*e*this.radiusFactor}else if(t.type=="OrthographicCamera")return Math.min(t.top,t.right)*this.radiusFactor}focus(t,e,i=1){se.copy(t).sub(this._gizmos.position).multiplyScalar(i),this._translationMatrix.makeTranslation(se.x,se.y,se.z),Xl.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),ql.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(e,this._gizmos.position)),this._gizmoMatrixState.copy(Xl),this._cameraMatrixState.copy(ql)}drawGrid(){if(this.scene!=null){let i,r,s,a;if(this.camera.isOrthographicCamera){const o=this.camera.right-this.camera.left,h=this.camera.bottom-this.camera.top;s=Math.max(o,h),a=s/20,i=s/this.camera.zoom*3,r=i/a*this.camera.zoom}else if(this.camera.isPerspectiveCamera){const o=this.camera.position.distanceTo(this._gizmos.position),h=Qt.DEG2RAD*this.camera.fov*.5,l=Math.atan(this.camera.aspect*Math.tan(h));s=Math.tan(Math.max(h,l))*o*2,a=s/20,i=s*3,r=i/a}this._grid==null&&(this._grid=new Pg(i,r,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}}dispose(){this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("resize",this._onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()}disposeGrid(){this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)}easeOutCubic(t){return 1-Math.pow(1-t,3)}activateGizmos(t){const e=this._gizmos.children[0],i=this._gizmos.children[1],r=this._gizmos.children[2];t?(e.material.setValues({opacity:1}),i.material.setValues({opacity:1}),r.material.setValues({opacity:1})):(e.material.setValues({opacity:.6}),i.material.setValues({opacity:.6}),r.material.setValues({opacity:.6}))}getCursorNDC(t,e,i){const r=i.getBoundingClientRect();return this._v2_1.setX((t-r.left)/r.width*2-1),this._v2_1.setY((r.bottom-e)/r.height*2-1),this._v2_1.clone()}getCursorPosition(t,e,i){return this._v2_1.copy(this.getCursorNDC(t,e,i)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5,this._v2_1.clone()}setCamera(t){t.lookAt(this.target),t.updateMatrix(),t.type=="PerspectiveCamera"&&(this._fov0=t.fov,this._fovState=t.fov),this._cameraMatrixState0.copy(t.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(t.projectionMatrix),this._zoom0=t.zoom,this._zoomState=this._zoom0,this._initialNear=t.near,this._nearPos0=t.position.distanceTo(this.target)-t.near,this._nearPos=this._initialNear,this._initialFar=t.far,this._farPos0=t.position.distanceTo(this.target)-t.far,this._farPos=this._initialFar,this._up0.copy(t.up),this._upState.copy(t.up),this.camera=t,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(t),this.makeGizmos(this.target,this._tbRadius)}setGizmosVisible(t){this._gizmos.visible=t,this.dispatchEvent(Yt)}setTbRadius(t){this.radiusFactor=t,this._tbRadius=this.calculateTbRadius(this.camera);const i=new xs(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),r=new jt().setFromPoints(i);for(const s in this._gizmos.children)this._gizmos.children[s].geometry=r;this.dispatchEvent(Yt)}makeGizmos(t,e){const r=new xs(0,0,e,e).getPoints(this._curvePts),s=new jt().setFromPoints(r),a=new Ln({color:16744576,fog:!1,transparent:!0,opacity:.6}),o=new Ln({color:8454016,fog:!1,transparent:!0,opacity:.6}),h=new Ln({color:8421631,fog:!1,transparent:!0,opacity:.6}),l=new vs(s,a),c=new vs(s,o),d=new vs(s,h),u=Math.PI*.5;if(l.rotation.x=u,c.rotation.y=u,this._gizmoMatrixState0.identity().setPosition(t),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){const p=1/this.camera.zoom;this._scaleMatrix.makeScale(p,p,p),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(t.x,t.y,t.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(p){p.isLine&&(p.geometry.dispose(),p.material.dispose())}),this._gizmos.clear(),this._gizmos.add(l),this._gizmos.add(c),this._gizmos.add(d)}onFocusAnim(t,e,i,r){if(this._timeStart==-1&&(this._timeStart=t),this._state==dt.ANIMATION_FOCUS){const a=(t-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(r),a>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,this.scaleFactor),this._timeStart=-1,this.updateTbState(dt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Yt);else{const o=this.easeOutCubic(a),h=1-o+this.scaleFactor*o;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,h,o),this.dispatchEvent(Yt);const l=this;this._animationId=window.requestAnimationFrame(function(c){l.onFocusAnim(c,e,i,r.clone())})}}else this._animationId=-1,this._timeStart=-1}onRotationAnim(t,e,i){if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=t),this._state==dt.ANIMATION_ROTATE){const r=(t-this._timeStart)/1e3;if(i+-this.dampingFactor*r>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(r,2)+i*r+0,this.applyTransformMatrix(this.rotate(e,this._angleCurrent)),this.dispatchEvent(Yt);const a=this;this._animationId=window.requestAnimationFrame(function(o){a.onRotationAnim(o,e,i)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(dt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Yt)}else this._animationId=-1,this._timeStart=-1,this._state!=dt.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(Yt))}pan(t,e,i=!1){const r=t.clone().sub(e);if(this.camera.isOrthographicCamera)r.multiplyScalar(1/this.camera.zoom);else if(this.camera.isPerspectiveCamera&&i){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const s=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);r.multiplyScalar(1/s)}return this._v3_1.set(r.x,r.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),ze}reset(){this.camera.zoom=this._zoom0,this.camera.isPerspectiveCamera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this._gizmos.position,this._tbRadius),this.camera.lookAt(this._gizmos.position),this.updateTbState(dt.IDLE,!1),this.dispatchEvent(Yt)}rotate(t,e){const i=this._gizmos.position;return this._translationMatrix.makeTranslation(-i.x,-i.y,-i.z),this._rotationMatrix.makeRotationAxis(t,-e),this._m4_1.makeTranslation(i.x,i.y,i.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),ze}copyState(){let t;this.camera.isOrthographicCamera?t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):this.camera.isPerspectiveCamera&&(t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(t)}pasteState(){const t=this;navigator.clipboard.readText().then(function(i){t.setStateFromJSON(i)})}saveState(){this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),this.camera.isPerspectiveCamera&&(this._fov0=this.camera.fov)}scale(t,e,i=!0){en.copy(e);let r=1/t;if(this.camera.isOrthographicCamera){this.camera.zoom=this._zoomState,this.camera.zoom*=t,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,r=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,r=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(r,r,r),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),en.sub(this._v3_1);const s=en.clone().multiplyScalar(r);return en.sub(s),this._m4_1.makeTranslation(en.x,en.y,en.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),ze}else if(this.camera.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let s=this._v3_1.distanceTo(en),a=s-s*r;const o=s-a;if(o<this.minDistance?(r=this.minDistance/s,a=s-s*r):o>this.maxDistance&&(r=this.maxDistance/s,a=s-s*r),se.copy(en).sub(this._v3_1).normalize().multiplyScalar(a),this._m4_1.makeTranslation(se.x,se.y,se.z),i){const h=this._v3_2;s=h.distanceTo(en),a=s-s*r,se.copy(en).sub(this._v3_2).normalize().multiplyScalar(a),this._translationMatrix.makeTranslation(h.x,h.y,h.z),this._scaleMatrix.makeScale(r,r,r),this._m4_2.makeTranslation(se.x,se.y,se.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-h.x,-h.y,-h.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return ze}}setFov(t){this.camera.isPerspectiveCamera&&(this.camera.fov=Qt.clamp(t,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())}setTransformationMatrices(t=null,e=null){t!=null?ze.camera!=null?ze.camera.copy(t):ze.camera=t.clone():ze.camera=null,e!=null?ze.gizmos!=null?ze.gizmos.copy(e):ze.gizmos=e.clone():ze.gizmos=null}zRotate(t,e){return this._rotationMatrix.makeRotationAxis(this._rotationAxis,e),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._m4_1.makeTranslation(t.x,t.y,t.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(t),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,e),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),ze}getRaycaster(){return Ig}unprojectOnObj(t,e){const i=this.getRaycaster();i.near=e.near,i.far=e.far,i.setFromCamera(t,e);const r=i.intersectObjects(this.scene.children,!0);for(let s=0;s<r.length;s++)if(r[s].object.uuid!=this._gizmos.uuid&&r[s].face!=null)return r[s].point.clone();return null}unprojectOnTbSurface(t,e,i,r,s){if(t.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const a=Math.pow(this._v2_1.x,2),o=Math.pow(this._v2_1.y,2),h=Math.pow(this._tbRadius,2);return a+o<=h*.5?this._v3_1.setZ(Math.sqrt(h-(a+o))):this._v3_1.setZ(h*.5/Math.sqrt(a+o)),this._v3_1}else if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const a=this._v3_1.clone().normalize(),o=t.position.distanceTo(this._gizmos.position),h=Math.pow(s,2),l=this._v3_1.z,c=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(c==0)return a.set(this._v3_1.x,this._v3_1.y,s),a;const d=l/c,u=o;let p=Math.pow(d,2)+1,_=2*d*u,g=Math.pow(u,2)-h,m=Math.pow(_,2)-4*p*g;if(m>=0&&(this._v2_1.setX((-_-Math.sqrt(m))/(2*p)),this._v2_1.setY(d*this._v2_1.x+u),Qt.RAD2DEG*this._v2_1.angle()>=45)){const x=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(x),a.z+=o,a}p=d,_=u,g=-h*.5,m=Math.pow(_,2)-4*p*g,this._v2_1.setX((-_-Math.sqrt(m))/(2*p)),this._v2_1.setY(d*this._v2_1.x+u);const f=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(o-this._v2_1.y,2));return a.multiplyScalar(f),a.z+=o,a}}unprojectOnTbPlane(t,e,i,r,s=!1){if(t.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,i,r)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const a=this._v3_1.clone().normalize(),o=this._v3_1.z,h=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let l;if(s?l=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):l=t.position.distanceTo(this._gizmos.position),h==0)return a.set(0,0,0),a;const c=o/h,d=l,u=-d/c,p=Math.sqrt(Math.pow(d,2)+Math.pow(u,2));return a.multiplyScalar(p),a.z=0,a}}updateMatrixState(){this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.camera.isOrthographicCamera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):this.camera.isPerspectiveCamera&&(this._fovState=this.camera.fov)}updateTbState(t,e){this._state=t,e&&this.updateMatrixState()}update(){if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.camera.isOrthographicCamera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){const e=Qt.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(e/this.camera.zoom,this._gizmos.position,!0))}}else if(this.camera.isPerspectiveCamera){const e=this.camera.position.distanceTo(this._gizmos.position);if(e>this.maxDistance+1e-6||e<this.minDistance-1e-6){const r=Qt.clamp(e,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(r/e,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=Qt.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());const i=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),i<this._tbRadius-1e-6||i>this._tbRadius+1e-6){const r=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,s=this._tbRadius/r,o=new xs(0,0,s,s).getPoints(this._curvePts),h=new jt().setFromPoints(o);for(const l in this._gizmos.children)this._gizmos.children[l].geometry=h}}this.camera.lookAt(this._gizmos.position)}setStateFromJSON(t){const e=JSON.parse(t);if(e.arcballState!=null){this._cameraMatrixState.fromArray(e.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(e.arcballState.cameraUp),this.camera.near=e.arcballState.cameraNear,this.camera.far=e.arcballState.cameraFar,this.camera.zoom=e.arcballState.cameraZoom,this.camera.isPerspectiveCamera&&(this.camera.fov=e.arcballState.cameraFov),this._gizmoMatrixState.fromArray(e.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);const i=new Nt().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(i),this.camera.lookAt(this._gizmos.position),this.updateTbState(dt.IDLE,!1),this.dispatchEvent(Yt)}}}function Ng(){const n=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);const t=this._tbRadius/n,i=new xs(0,0,t,t).getPoints(this._curvePts),r=new jt().setFromPoints(i);for(const s in this._gizmos.children)this._gizmos.children[s].geometry=r;this.dispatchEvent(Yt)}function Og(n){if(this.enabled){for(let t=0;t<this.mouseActions.length;t++)if(this.mouseActions[t].mouse==2){n.preventDefault();break}}}function zg(){this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=Vt.NONE}function Bg(n){if(n.button==0&&n.isPrimary?(this._downValid=!0,this._downEvents.push(n),this._downStart=performance.now()):this._downValid=!1,n.pointerType=="touch"&&this._input!=Vt.CURSOR)switch(this._touchStart.push(n),this._touchCurrent.push(n),this._input){case Vt.NONE:this._input=Vt.ONE_FINGER,this.onSinglePanStart(n,"ROTATE"),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp);break;case Vt.ONE_FINGER:case Vt.ONE_FINGER_SWITCHED:this._input=Vt.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case Vt.TWO_FINGER:this._input=Vt.MULT_FINGER,this.onTriplePanStart(n);break}else if(n.pointerType!="touch"&&this._input==Vt.NONE){let t=null;n.ctrlKey||n.metaKey?t="CTRL":n.shiftKey&&(t="SHIFT"),this._mouseOp=this.getOpFromAction(n.button,t),this._mouseOp!=null&&(window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),this._input=Vt.CURSOR,this._button=n.button,this.onSinglePanStart(n,this._mouseOp))}}function kg(n){if(n.pointerType=="touch"&&this._input!=Vt.CURSOR)switch(this._input){case Vt.ONE_FINGER:this.updateTouchEvent(n),this.onSinglePanMove(n,dt.ROTATE);break;case Vt.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],n)*this._devPxRatio>=this._switchSensibility){this._input=Vt.ONE_FINGER,this.updateTouchEvent(n),this.onSinglePanStart(n,"ROTATE");break}break;case Vt.TWO_FINGER:this.updateTouchEvent(n),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case Vt.MULT_FINGER:this.updateTouchEvent(n),this.onTriplePanMove(n);break}else if(n.pointerType!="touch"&&this._input==Vt.CURSOR){let t=null;n.ctrlKey||n.metaKey?t="CTRL":n.shiftKey&&(t="SHIFT");const e=this.getOpStateFromAction(this._button,t);e!=null&&this.onSinglePanMove(n,e)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],n)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)}function Gg(n){if(n.pointerType=="touch"&&this._input!=Vt.CURSOR){const t=this._touchCurrent.length;for(let e=0;e<t;e++)if(this._touchCurrent[e].pointerId==n.pointerId){this._touchCurrent.splice(e,1),this._touchStart.splice(e,1);break}switch(this._input){case Vt.ONE_FINGER:case Vt.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Vt.NONE,this.onSinglePanEnd();break;case Vt.TWO_FINGER:this.onDoublePanEnd(n),this.onPinchEnd(n),this.onRotateEnd(n),this._input=Vt.ONE_FINGER_SWITCHED;break;case Vt.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Vt.NONE,this.onTriplePanEnd());break}}else n.pointerType!="touch"&&this._input==Vt.CURSOR&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Vt.NONE,this.onSinglePanEnd(),this._button=-1);if(n.isPrimary)if(this._downValid)if(n.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const e=n.timeStamp-this._clickStart,i=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;e<=this._maxInterval&&i<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(n)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)}function Hg(n){if(this.enabled&&this.enableZoom){let t=null;n.ctrlKey||n.metaKey?t="CTRL":n.shiftKey&&(t="SHIFT");const e=this.getOpFromAction("WHEEL",t);if(e!=null){n.preventDefault(),this.dispatchEvent(nn);const i=125;let r=n.deltaY/i,s=1;switch(r>0?s=1/this.scaleFactor:r<0&&(s=this.scaleFactor),e){case"ZOOM":if(this.updateTbState(dt.SCALE,!0),r>0?s=1/Math.pow(this.scaleFactor,r):r<0&&(s=Math.pow(this.scaleFactor,-r)),this.cursorZoom&&this.enablePan){let a;this.camera.isOrthographicCamera?a=this.unprojectOnTbPlane(this.camera,n.clientX,n.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):this.camera.isPerspectiveCamera&&(a=this.unprojectOnTbPlane(this.camera,n.clientX,n.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(s,a))}else this.applyTransformMatrix(this.scale(s,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(dt.IDLE,!1),this.dispatchEvent(Yt),this.dispatchEvent(We);break;case"FOV":if(this.camera.isPerspectiveCamera){this.updateTbState(dt.FOV,!0),n.deltaX!=0&&(r=n.deltaX/i,s=1,r>0?s=1/Math.pow(this.scaleFactor,r):r<0&&(s=Math.pow(this.scaleFactor,-r))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const a=this._v3_1.distanceTo(this._gizmos.position);let o=a/s;o=Qt.clamp(o,this.minDistance,this.maxDistance);const h=a*Math.tan(Qt.DEG2RAD*this.camera.fov*.5);let l=Qt.RAD2DEG*(Math.atan(h/o)*2);l>this.maxFov?l=this.maxFov:l<this.minFov&&(l=this.minFov);const c=h/Math.tan(Qt.DEG2RAD*(l/2));s=a/c,this.setFov(l),this.applyTransformMatrix(this.scale(s,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(dt.IDLE,!1),this.dispatchEvent(Yt),this.dispatchEvent(We);break}}}}var Dn={};(function(n){var t=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function e(s,a){return Object.prototype.hasOwnProperty.call(s,a)}n.assign=function(s){for(var a=Array.prototype.slice.call(arguments,1);a.length;){var o=a.shift();if(o){if(typeof o!="object")throw new TypeError(o+"must be non-object");for(var h in o)e(o,h)&&(s[h]=o[h])}}return s},n.shrinkBuf=function(s,a){return s.length===a?s:s.subarray?s.subarray(0,a):(s.length=a,s)};var i={arraySet:function(s,a,o,h,l){if(a.subarray&&s.subarray){s.set(a.subarray(o,o+h),l);return}for(var c=0;c<h;c++)s[l+c]=a[o+c]},flattenChunks:function(s){var a,o,h,l,c,d;for(h=0,a=0,o=s.length;a<o;a++)h+=s[a].length;for(d=new Uint8Array(h),l=0,a=0,o=s.length;a<o;a++)c=s[a],d.set(c,l),l+=c.length;return d}},r={arraySet:function(s,a,o,h,l){for(var c=0;c<h;c++)s[l+c]=a[o+c]},flattenChunks:function(s){return[].concat.apply([],s)}};n.setTyped=function(s){s?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,r))},n.setTyped(t)})(Dn);var Or={},xn={},ar={},Vg=Dn,Wg=4,Zl=0,Yl=1,Xg=2;function or(n){for(var t=n.length;--t>=0;)n[t]=0}var qg=0,dh=1,Zg=2,Yg=3,jg=258,oo=29,zr=256,Lr=zr+1+oo,Yi=30,lo=19,ph=2*Lr+1,ai=15,xa=16,$g=7,co=256,mh=16,_h=17,gh=18,Wa=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ms=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Kg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],vh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Jg=512,Cn=new Array((Lr+2)*2);or(Cn);var Er=new Array(Yi*2);or(Er);var Dr=new Array(Jg);or(Dr);var Ur=new Array(jg-Yg+1);or(Ur);var ho=new Array(oo);or(ho);var ws=new Array(Yi);or(ws);function Ma(n,t,e,i,r){this.static_tree=n,this.extra_bits=t,this.extra_base=e,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}var xh,Mh,Sh;function Sa(n,t){this.dyn_tree=n,this.max_code=0,this.stat_desc=t}function Eh(n){return n<256?Dr[n]:Dr[256+(n>>>7)]}function Ir(n,t){n.pending_buf[n.pending++]=t&255,n.pending_buf[n.pending++]=t>>>8&255}function Ue(n,t,e){n.bi_valid>xa-e?(n.bi_buf|=t<<n.bi_valid&65535,Ir(n,n.bi_buf),n.bi_buf=t>>xa-n.bi_valid,n.bi_valid+=e-xa):(n.bi_buf|=t<<n.bi_valid&65535,n.bi_valid+=e)}function _n(n,t,e){Ue(n,e[t*2],e[t*2+1])}function bh(n,t){var e=0;do e|=n&1,n>>>=1,e<<=1;while(--t>0);return e>>>1}function Qg(n){n.bi_valid===16?(Ir(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)}function t0(n,t){var e=t.dyn_tree,i=t.max_code,r=t.stat_desc.static_tree,s=t.stat_desc.has_stree,a=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,h=t.stat_desc.max_length,l,c,d,u,p,_,g=0;for(u=0;u<=ai;u++)n.bl_count[u]=0;for(e[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<ph;l++)c=n.heap[l],u=e[e[c*2+1]*2+1]+1,u>h&&(u=h,g++),e[c*2+1]=u,!(c>i)&&(n.bl_count[u]++,p=0,c>=o&&(p=a[c-o]),_=e[c*2],n.opt_len+=_*(u+p),s&&(n.static_len+=_*(r[c*2+1]+p)));if(g!==0){do{for(u=h-1;n.bl_count[u]===0;)u--;n.bl_count[u]--,n.bl_count[u+1]+=2,n.bl_count[h]--,g-=2}while(g>0);for(u=h;u!==0;u--)for(c=n.bl_count[u];c!==0;)d=n.heap[--l],!(d>i)&&(e[d*2+1]!==u&&(n.opt_len+=(u-e[d*2+1])*e[d*2],e[d*2+1]=u),c--)}}function yh(n,t,e){var i=new Array(ai+1),r=0,s,a;for(s=1;s<=ai;s++)i[s]=r=r+e[s-1]<<1;for(a=0;a<=t;a++){var o=n[a*2+1];o!==0&&(n[a*2]=bh(i[o]++,o))}}function e0(){var n,t,e,i,r,s=new Array(ai+1);for(e=0,i=0;i<oo-1;i++)for(ho[i]=e,n=0;n<1<<Wa[i];n++)Ur[e++]=i;for(Ur[e-1]=i,r=0,i=0;i<16;i++)for(ws[i]=r,n=0;n<1<<Ms[i];n++)Dr[r++]=i;for(r>>=7;i<Yi;i++)for(ws[i]=r<<7,n=0;n<1<<Ms[i]-7;n++)Dr[256+r++]=i;for(t=0;t<=ai;t++)s[t]=0;for(n=0;n<=143;)Cn[n*2+1]=8,n++,s[8]++;for(;n<=255;)Cn[n*2+1]=9,n++,s[9]++;for(;n<=279;)Cn[n*2+1]=7,n++,s[7]++;for(;n<=287;)Cn[n*2+1]=8,n++,s[8]++;for(yh(Cn,Lr+1,s),n=0;n<Yi;n++)Er[n*2+1]=5,Er[n*2]=bh(n,5);xh=new Ma(Cn,Wa,zr+1,Lr,ai),Mh=new Ma(Er,Ms,0,Yi,ai),Sh=new Ma(new Array(0),Kg,0,lo,$g)}function Th(n){var t;for(t=0;t<Lr;t++)n.dyn_ltree[t*2]=0;for(t=0;t<Yi;t++)n.dyn_dtree[t*2]=0;for(t=0;t<lo;t++)n.bl_tree[t*2]=0;n.dyn_ltree[co*2]=1,n.opt_len=n.static_len=0,n.last_lit=n.matches=0}function wh(n){n.bi_valid>8?Ir(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0}function n0(n,t,e,i){wh(n),i&&(Ir(n,e),Ir(n,~e)),Vg.arraySet(n.pending_buf,n.window,t,e,n.pending),n.pending+=e}function jl(n,t,e,i){var r=t*2,s=e*2;return n[r]<n[s]||n[r]===n[s]&&i[t]<=i[e]}function Ea(n,t,e){for(var i=n.heap[e],r=e<<1;r<=n.heap_len&&(r<n.heap_len&&jl(t,n.heap[r+1],n.heap[r],n.depth)&&r++,!jl(t,i,n.heap[r],n.depth));)n.heap[e]=n.heap[r],e=r,r<<=1;n.heap[e]=i}function $l(n,t,e){var i,r,s=0,a,o;if(n.last_lit!==0)do i=n.pending_buf[n.d_buf+s*2]<<8|n.pending_buf[n.d_buf+s*2+1],r=n.pending_buf[n.l_buf+s],s++,i===0?_n(n,r,t):(a=Ur[r],_n(n,a+zr+1,t),o=Wa[a],o!==0&&(r-=ho[a],Ue(n,r,o)),i--,a=Eh(i),_n(n,a,e),o=Ms[a],o!==0&&(i-=ws[a],Ue(n,i,o)));while(s<n.last_lit);_n(n,co,t)}function Xa(n,t){var e=t.dyn_tree,i=t.stat_desc.static_tree,r=t.stat_desc.has_stree,s=t.stat_desc.elems,a,o,h=-1,l;for(n.heap_len=0,n.heap_max=ph,a=0;a<s;a++)e[a*2]!==0?(n.heap[++n.heap_len]=h=a,n.depth[a]=0):e[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=h<2?++h:0,e[l*2]=1,n.depth[l]=0,n.opt_len--,r&&(n.static_len-=i[l*2+1]);for(t.max_code=h,a=n.heap_len>>1;a>=1;a--)Ea(n,e,a);l=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],Ea(n,e,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,e[l*2]=e[a*2]+e[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,e[a*2+1]=e[o*2+1]=l,n.heap[1]=l++,Ea(n,e,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],t0(n,t),yh(e,h,n.bl_count)}function Kl(n,t,e){var i,r=-1,s,a=t[0*2+1],o=0,h=7,l=4;for(a===0&&(h=138,l=3),t[(e+1)*2+1]=65535,i=0;i<=e;i++)s=a,a=t[(i+1)*2+1],!(++o<h&&s===a)&&(o<l?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[mh*2]++):o<=10?n.bl_tree[_h*2]++:n.bl_tree[gh*2]++,o=0,r=s,a===0?(h=138,l=3):s===a?(h=6,l=3):(h=7,l=4))}function Jl(n,t,e){var i,r=-1,s,a=t[0*2+1],o=0,h=7,l=4;for(a===0&&(h=138,l=3),i=0;i<=e;i++)if(s=a,a=t[(i+1)*2+1],!(++o<h&&s===a)){if(o<l)do _n(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(_n(n,s,n.bl_tree),o--),_n(n,mh,n.bl_tree),Ue(n,o-3,2)):o<=10?(_n(n,_h,n.bl_tree),Ue(n,o-3,3)):(_n(n,gh,n.bl_tree),Ue(n,o-11,7));o=0,r=s,a===0?(h=138,l=3):s===a?(h=6,l=3):(h=7,l=4)}}function i0(n){var t;for(Kl(n,n.dyn_ltree,n.l_desc.max_code),Kl(n,n.dyn_dtree,n.d_desc.max_code),Xa(n,n.bl_desc),t=lo-1;t>=3&&n.bl_tree[vh[t]*2+1]===0;t--);return n.opt_len+=3*(t+1)+5+5+4,t}function r0(n,t,e,i){var r;for(Ue(n,t-257,5),Ue(n,e-1,5),Ue(n,i-4,4),r=0;r<i;r++)Ue(n,n.bl_tree[vh[r]*2+1],3);Jl(n,n.dyn_ltree,t-1),Jl(n,n.dyn_dtree,e-1)}function s0(n){var t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&n.dyn_ltree[e*2]!==0)return Zl;if(n.dyn_ltree[9*2]!==0||n.dyn_ltree[10*2]!==0||n.dyn_ltree[13*2]!==0)return Yl;for(e=32;e<zr;e++)if(n.dyn_ltree[e*2]!==0)return Yl;return Zl}var Ql=!1;function a0(n){Ql||(e0(),Ql=!0),n.l_desc=new Sa(n.dyn_ltree,xh),n.d_desc=new Sa(n.dyn_dtree,Mh),n.bl_desc=new Sa(n.bl_tree,Sh),n.bi_buf=0,n.bi_valid=0,Th(n)}function Ah(n,t,e,i){Ue(n,(qg<<1)+(i?1:0),3),n0(n,t,e,!0)}function o0(n){Ue(n,dh<<1,3),_n(n,co,Cn),Qg(n)}function l0(n,t,e,i){var r,s,a=0;n.level>0?(n.strm.data_type===Xg&&(n.strm.data_type=s0(n)),Xa(n,n.l_desc),Xa(n,n.d_desc),a=i0(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=e+5,e+4<=r&&t!==-1?Ah(n,t,e,i):n.strategy===Wg||s===r?(Ue(n,(dh<<1)+(i?1:0),3),$l(n,Cn,Er)):(Ue(n,(Zg<<1)+(i?1:0),3),r0(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),$l(n,n.dyn_ltree,n.dyn_dtree)),Th(n),i&&wh(n)}function c0(n,t,e){return n.pending_buf[n.d_buf+n.last_lit*2]=t>>>8&255,n.pending_buf[n.d_buf+n.last_lit*2+1]=t&255,n.pending_buf[n.l_buf+n.last_lit]=e&255,n.last_lit++,t===0?n.dyn_ltree[e*2]++:(n.matches++,t--,n.dyn_ltree[(Ur[e]+zr+1)*2]++,n.dyn_dtree[Eh(t)*2]++),n.last_lit===n.lit_bufsize-1}ar._tr_init=a0;ar._tr_stored_block=Ah;ar._tr_flush_block=l0;ar._tr_tally=c0;ar._tr_align=o0;function h0(n,t,e,i){for(var r=n&65535|0,s=n>>>16&65535|0,a=0;e!==0;){a=e>2e3?2e3:e,e-=a;do r=r+t[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0}var Rh=h0;function u0(){for(var n,t=[],e=0;e<256;e++){n=e;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;t[e]=n}return t}var f0=u0();function d0(n,t,e,i){var r=f0,s=i+e;n^=-1;for(var a=i;a<s;a++)n=n>>>8^r[(n^t[a])&255];return n^-1}var Ch=d0,uo={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ce=Dn,Ze=ar,Ph=Rh,Bn=Ch,p0=uo,Ei=0,m0=1,_0=3,Zn=4,tc=5,gn=0,ec=1,Ye=-2,g0=-3,ba=-5,v0=-1,x0=1,us=2,M0=3,S0=4,E0=0,b0=2,Is=8,y0=9,T0=15,w0=8,A0=29,R0=256,qa=R0+1+A0,C0=30,P0=19,L0=2*qa+1,D0=15,Ft=3,Wn=258,ln=Wn+Ft+1,U0=32,Fs=42,Za=69,Ss=73,Es=91,bs=103,oi=113,vr=666,le=1,Br=2,pi=3,lr=4,I0=3;function Xn(n,t){return n.msg=p0[t],t}function nc(n){return(n<<1)-(n>4?9:0)}function Gn(n){for(var t=n.length;--t>=0;)n[t]=0}function kn(n){var t=n.state,e=t.pending;e>n.avail_out&&(e=n.avail_out),e!==0&&(Ce.arraySet(n.output,t.pending_buf,t.pending_out,e,n.next_out),n.next_out+=e,t.pending_out+=e,n.total_out+=e,n.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))}function Me(n,t){Ze._tr_flush_block(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,t),n.block_start=n.strstart,kn(n.strm)}function kt(n,t){n.pending_buf[n.pending++]=t}function pr(n,t){n.pending_buf[n.pending++]=t>>>8&255,n.pending_buf[n.pending++]=t&255}function F0(n,t,e,i){var r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,Ce.arraySet(t,n.input,n.next_in,r,e),n.state.wrap===1?n.adler=Ph(n.adler,t,r,e):n.state.wrap===2&&(n.adler=Bn(n.adler,t,r,e)),n.next_in+=r,n.total_in+=r,r)}function Lh(n,t){var e=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match,h=n.strstart>n.w_size-ln?n.strstart-(n.w_size-ln):0,l=n.window,c=n.w_mask,d=n.prev,u=n.strstart+Wn,p=l[i+a-1],_=l[i+a];n.prev_length>=n.good_match&&(e>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=t,!(l[r+a]!==_||l[r+a-1]!==p||l[r]!==l[i]||l[++r]!==l[i+1])){i+=2,r++;do;while(l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&l[++i]===l[++r]&&i<u);if(s=Wn-(u-i),i=u-Wn,s>a){if(n.match_start=t,a=s,s>=o)break;p=l[i+a-1],_=l[i+a]}}while((t=d[t&c])>h&&--e!==0);return a<=n.lookahead?a:n.lookahead}function mi(n){var t=n.w_size,e,i,r,s,a;do{if(s=n.window_size-n.lookahead-n.strstart,n.strstart>=t+(t-ln)){Ce.arraySet(n.window,n.window,t,t,0),n.match_start-=t,n.strstart-=t,n.block_start-=t,i=n.hash_size,e=i;do r=n.head[--e],n.head[e]=r>=t?r-t:0;while(--i);i=t,e=i;do r=n.prev[--e],n.prev[e]=r>=t?r-t:0;while(--i);s+=t}if(n.strm.avail_in===0)break;if(i=F0(n.strm,n.window,n.strstart+n.lookahead,s),n.lookahead+=i,n.lookahead+n.insert>=Ft)for(a=n.strstart-n.insert,n.ins_h=n.window[a],n.ins_h=(n.ins_h<<n.hash_shift^n.window[a+1])&n.hash_mask;n.insert&&(n.ins_h=(n.ins_h<<n.hash_shift^n.window[a+Ft-1])&n.hash_mask,n.prev[a&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=a,a++,n.insert--,!(n.lookahead+n.insert<Ft)););}while(n.lookahead<ln&&n.strm.avail_in!==0)}function N0(n,t){var e=65535;for(e>n.pending_buf_size-5&&(e=n.pending_buf_size-5);;){if(n.lookahead<=1){if(mi(n),n.lookahead===0&&t===Ei)return le;if(n.lookahead===0)break}n.strstart+=n.lookahead,n.lookahead=0;var i=n.block_start+e;if((n.strstart===0||n.strstart>=i)&&(n.lookahead=n.strstart-i,n.strstart=i,Me(n,!1),n.strm.avail_out===0)||n.strstart-n.block_start>=n.w_size-ln&&(Me(n,!1),n.strm.avail_out===0))return le}return n.insert=0,t===Zn?(Me(n,!0),n.strm.avail_out===0?pi:lr):(n.strstart>n.block_start&&(Me(n,!1),n.strm.avail_out===0),le)}function ya(n,t){for(var e,i;;){if(n.lookahead<ln){if(mi(n),n.lookahead<ln&&t===Ei)return le;if(n.lookahead===0)break}if(e=0,n.lookahead>=Ft&&(n.ins_h=(n.ins_h<<n.hash_shift^n.window[n.strstart+Ft-1])&n.hash_mask,e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),e!==0&&n.strstart-e<=n.w_size-ln&&(n.match_length=Lh(n,e)),n.match_length>=Ft)if(i=Ze._tr_tally(n,n.strstart-n.match_start,n.match_length-Ft),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Ft){n.match_length--;do n.strstart++,n.ins_h=(n.ins_h<<n.hash_shift^n.window[n.strstart+Ft-1])&n.hash_mask,e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=(n.ins_h<<n.hash_shift^n.window[n.strstart+1])&n.hash_mask;else i=Ze._tr_tally(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(Me(n,!1),n.strm.avail_out===0))return le}return n.insert=n.strstart<Ft-1?n.strstart:Ft-1,t===Zn?(Me(n,!0),n.strm.avail_out===0?pi:lr):n.last_lit&&(Me(n,!1),n.strm.avail_out===0)?le:Br}function ki(n,t){for(var e,i,r;;){if(n.lookahead<ln){if(mi(n),n.lookahead<ln&&t===Ei)return le;if(n.lookahead===0)break}if(e=0,n.lookahead>=Ft&&(n.ins_h=(n.ins_h<<n.hash_shift^n.window[n.strstart+Ft-1])&n.hash_mask,e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Ft-1,e!==0&&n.prev_length<n.max_lazy_match&&n.strstart-e<=n.w_size-ln&&(n.match_length=Lh(n,e),n.match_length<=5&&(n.strategy===x0||n.match_length===Ft&&n.strstart-n.match_start>4096)&&(n.match_length=Ft-1)),n.prev_length>=Ft&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-Ft,i=Ze._tr_tally(n,n.strstart-1-n.prev_match,n.prev_length-Ft),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=(n.ins_h<<n.hash_shift^n.window[n.strstart+Ft-1])&n.hash_mask,e=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Ft-1,n.strstart++,i&&(Me(n,!1),n.strm.avail_out===0))return le}else if(n.match_available){if(i=Ze._tr_tally(n,0,n.window[n.strstart-1]),i&&Me(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return le}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Ze._tr_tally(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Ft-1?n.strstart:Ft-1,t===Zn?(Me(n,!0),n.strm.avail_out===0?pi:lr):n.last_lit&&(Me(n,!1),n.strm.avail_out===0)?le:Br}function O0(n,t){for(var e,i,r,s,a=n.window;;){if(n.lookahead<=Wn){if(mi(n),n.lookahead<=Wn&&t===Ei)return le;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=Ft&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+Wn;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=Wn-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=Ft?(e=Ze._tr_tally(n,1,n.match_length-Ft),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(e=Ze._tr_tally(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),e&&(Me(n,!1),n.strm.avail_out===0))return le}return n.insert=0,t===Zn?(Me(n,!0),n.strm.avail_out===0?pi:lr):n.last_lit&&(Me(n,!1),n.strm.avail_out===0)?le:Br}function z0(n,t){for(var e;;){if(n.lookahead===0&&(mi(n),n.lookahead===0)){if(t===Ei)return le;break}if(n.match_length=0,e=Ze._tr_tally(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,e&&(Me(n,!1),n.strm.avail_out===0))return le}return n.insert=0,t===Zn?(Me(n,!0),n.strm.avail_out===0?pi:lr):n.last_lit&&(Me(n,!1),n.strm.avail_out===0)?le:Br}function dn(n,t,e,i,r){this.good_length=n,this.max_lazy=t,this.nice_length=e,this.max_chain=i,this.func=r}var Wi;Wi=[new dn(0,0,0,0,N0),new dn(4,4,8,4,ya),new dn(4,5,16,8,ya),new dn(4,6,32,32,ya),new dn(4,4,16,16,ki),new dn(8,16,32,32,ki),new dn(8,16,128,128,ki),new dn(8,32,128,256,ki),new dn(32,128,258,1024,ki),new dn(32,258,258,4096,ki)];function B0(n){n.window_size=2*n.w_size,Gn(n.head),n.max_lazy_match=Wi[n.level].max_lazy,n.good_match=Wi[n.level].good_length,n.nice_match=Wi[n.level].nice_length,n.max_chain_length=Wi[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=Ft-1,n.match_available=0,n.ins_h=0}function k0(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Is,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Ce.Buf16(L0*2),this.dyn_dtree=new Ce.Buf16((2*C0+1)*2),this.bl_tree=new Ce.Buf16((2*P0+1)*2),Gn(this.dyn_ltree),Gn(this.dyn_dtree),Gn(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Ce.Buf16(D0+1),this.heap=new Ce.Buf16(2*qa+1),Gn(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Ce.Buf16(2*qa+1),Gn(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Dh(n){var t;return!n||!n.state?Xn(n,Ye):(n.total_in=n.total_out=0,n.data_type=b0,t=n.state,t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?Fs:oi,n.adler=t.wrap===2?0:1,t.last_flush=Ei,Ze._tr_init(t),gn)}function Uh(n){var t=Dh(n);return t===gn&&B0(n.state),t}function G0(n,t){return!n||!n.state||n.state.wrap!==2?Ye:(n.state.gzhead=t,gn)}function Ih(n,t,e,i,r,s){if(!n)return Ye;var a=1;if(t===v0&&(t=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>y0||e!==Is||i<8||i>15||t<0||t>9||s<0||s>S0)return Xn(n,Ye);i===8&&(i=9);var o=new k0;return n.state=o,o.strm=n,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+Ft-1)/Ft),o.window=new Ce.Buf8(o.w_size*2),o.head=new Ce.Buf16(o.hash_size),o.prev=new Ce.Buf16(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Ce.Buf8(o.pending_buf_size),o.d_buf=1*o.lit_bufsize,o.l_buf=(1+2)*o.lit_bufsize,o.level=t,o.strategy=s,o.method=e,Uh(n)}function H0(n,t){return Ih(n,t,Is,T0,w0,E0)}function V0(n,t){var e,i,r,s;if(!n||!n.state||t>tc||t<0)return n?Xn(n,Ye):Ye;if(i=n.state,!n.output||!n.input&&n.avail_in!==0||i.status===vr&&t!==Zn)return Xn(n,n.avail_out===0?ba:Ye);if(i.strm=n,e=i.last_flush,i.last_flush=t,i.status===Fs)if(i.wrap===2)n.adler=0,kt(i,31),kt(i,139),kt(i,8),i.gzhead?(kt(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),kt(i,i.gzhead.time&255),kt(i,i.gzhead.time>>8&255),kt(i,i.gzhead.time>>16&255),kt(i,i.gzhead.time>>24&255),kt(i,i.level===9?2:i.strategy>=us||i.level<2?4:0),kt(i,i.gzhead.os&255),i.gzhead.extra&&i.gzhead.extra.length&&(kt(i,i.gzhead.extra.length&255),kt(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(n.adler=Bn(n.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=Za):(kt(i,0),kt(i,0),kt(i,0),kt(i,0),kt(i,0),kt(i,i.level===9?2:i.strategy>=us||i.level<2?4:0),kt(i,I0),i.status=oi);else{var a=Is+(i.w_bits-8<<4)<<8,o=-1;i.strategy>=us||i.level<2?o=0:i.level<6?o=1:i.level===6?o=2:o=3,a|=o<<6,i.strstart!==0&&(a|=U0),a+=31-a%31,i.status=oi,pr(i,a),i.strstart!==0&&(pr(i,n.adler>>>16),pr(i,n.adler&65535)),n.adler=1}if(i.status===Za)if(i.gzhead.extra){for(r=i.pending;i.gzindex<(i.gzhead.extra.length&65535)&&!(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>r&&(n.adler=Bn(n.adler,i.pending_buf,i.pending-r,r)),kn(n),r=i.pending,i.pending===i.pending_buf_size));)kt(i,i.gzhead.extra[i.gzindex]&255),i.gzindex++;i.gzhead.hcrc&&i.pending>r&&(n.adler=Bn(n.adler,i.pending_buf,i.pending-r,r)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=Ss)}else i.status=Ss;if(i.status===Ss)if(i.gzhead.name){r=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>r&&(n.adler=Bn(n.adler,i.pending_buf,i.pending-r,r)),kn(n),r=i.pending,i.pending===i.pending_buf_size)){s=1;break}i.gzindex<i.gzhead.name.length?s=i.gzhead.name.charCodeAt(i.gzindex++)&255:s=0,kt(i,s)}while(s!==0);i.gzhead.hcrc&&i.pending>r&&(n.adler=Bn(n.adler,i.pending_buf,i.pending-r,r)),s===0&&(i.gzindex=0,i.status=Es)}else i.status=Es;if(i.status===Es)if(i.gzhead.comment){r=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>r&&(n.adler=Bn(n.adler,i.pending_buf,i.pending-r,r)),kn(n),r=i.pending,i.pending===i.pending_buf_size)){s=1;break}i.gzindex<i.gzhead.comment.length?s=i.gzhead.comment.charCodeAt(i.gzindex++)&255:s=0,kt(i,s)}while(s!==0);i.gzhead.hcrc&&i.pending>r&&(n.adler=Bn(n.adler,i.pending_buf,i.pending-r,r)),s===0&&(i.status=bs)}else i.status=bs;if(i.status===bs&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&kn(n),i.pending+2<=i.pending_buf_size&&(kt(i,n.adler&255),kt(i,n.adler>>8&255),n.adler=0,i.status=oi)):i.status=oi),i.pending!==0){if(kn(n),n.avail_out===0)return i.last_flush=-1,gn}else if(n.avail_in===0&&nc(t)<=nc(e)&&t!==Zn)return Xn(n,ba);if(i.status===vr&&n.avail_in!==0)return Xn(n,ba);if(n.avail_in!==0||i.lookahead!==0||t!==Ei&&i.status!==vr){var h=i.strategy===us?z0(i,t):i.strategy===M0?O0(i,t):Wi[i.level].func(i,t);if((h===pi||h===lr)&&(i.status=vr),h===le||h===pi)return n.avail_out===0&&(i.last_flush=-1),gn;if(h===Br&&(t===m0?Ze._tr_align(i):t!==tc&&(Ze._tr_stored_block(i,0,0,!1),t===_0&&(Gn(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),kn(n),n.avail_out===0))return i.last_flush=-1,gn}return t!==Zn?gn:i.wrap<=0?ec:(i.wrap===2?(kt(i,n.adler&255),kt(i,n.adler>>8&255),kt(i,n.adler>>16&255),kt(i,n.adler>>24&255),kt(i,n.total_in&255),kt(i,n.total_in>>8&255),kt(i,n.total_in>>16&255),kt(i,n.total_in>>24&255)):(pr(i,n.adler>>>16),pr(i,n.adler&65535)),kn(n),i.wrap>0&&(i.wrap=-i.wrap),i.pending!==0?gn:ec)}function W0(n){var t;return!n||!n.state?Ye:(t=n.state.status,t!==Fs&&t!==Za&&t!==Ss&&t!==Es&&t!==bs&&t!==oi&&t!==vr?Xn(n,Ye):(n.state=null,t===oi?Xn(n,g0):gn))}function X0(n,t){var e=t.length,i,r,s,a,o,h,l,c;if(!n||!n.state||(i=n.state,a=i.wrap,a===2||a===1&&i.status!==Fs||i.lookahead))return Ye;for(a===1&&(n.adler=Ph(n.adler,t,e,0)),i.wrap=0,e>=i.w_size&&(a===0&&(Gn(i.head),i.strstart=0,i.block_start=0,i.insert=0),c=new Ce.Buf8(i.w_size),Ce.arraySet(c,t,e-i.w_size,i.w_size,0),t=c,e=i.w_size),o=n.avail_in,h=n.next_in,l=n.input,n.avail_in=e,n.next_in=0,n.input=t,mi(i);i.lookahead>=Ft;){r=i.strstart,s=i.lookahead-(Ft-1);do i.ins_h=(i.ins_h<<i.hash_shift^i.window[r+Ft-1])&i.hash_mask,i.prev[r&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=r,r++;while(--s);i.strstart=r,i.lookahead=Ft-1,mi(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Ft-1,i.match_available=0,n.next_in=h,n.input=l,n.avail_in=o,i.wrap=a,gn}xn.deflateInit=H0;xn.deflateInit2=Ih;xn.deflateReset=Uh;xn.deflateResetKeep=Dh;xn.deflateSetHeader=G0;xn.deflate=V0;xn.deflateEnd=W0;xn.deflateSetDictionary=X0;xn.deflateInfo="pako deflate (from Nodeca project)";var bi={},Ns=Dn,Fh=!0,Nh=!0;try{String.fromCharCode.apply(null,[0])}catch{Fh=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Nh=!1}var Fr=new Ns.Buf8(256);for(var zn=0;zn<256;zn++)Fr[zn]=zn>=252?6:zn>=248?5:zn>=240?4:zn>=224?3:zn>=192?2:1;Fr[254]=Fr[254]=1;bi.string2buf=function(n){var t,e,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)e=n.charCodeAt(r),(e&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(e=65536+(e-55296<<10)+(i-56320),r++)),o+=e<128?1:e<2048?2:e<65536?3:4;for(t=new Ns.Buf8(o),s=0,r=0;s<o;r++)e=n.charCodeAt(r),(e&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(e=65536+(e-55296<<10)+(i-56320),r++)),e<128?t[s++]=e:e<2048?(t[s++]=192|e>>>6,t[s++]=128|e&63):e<65536?(t[s++]=224|e>>>12,t[s++]=128|e>>>6&63,t[s++]=128|e&63):(t[s++]=240|e>>>18,t[s++]=128|e>>>12&63,t[s++]=128|e>>>6&63,t[s++]=128|e&63);return t};function Oh(n,t){if(t<65534&&(n.subarray&&Nh||!n.subarray&&Fh))return String.fromCharCode.apply(null,Ns.shrinkBuf(n,t));for(var e="",i=0;i<t;i++)e+=String.fromCharCode(n[i]);return e}bi.buf2binstring=function(n){return Oh(n,n.length)};bi.binstring2buf=function(n){for(var t=new Ns.Buf8(n.length),e=0,i=t.length;e<i;e++)t[e]=n.charCodeAt(e);return t};bi.buf2string=function(n,t){var e,i,r,s,a=t||n.length,o=new Array(a*2);for(i=0,e=0;e<a;){if(r=n[e++],r<128){o[i++]=r;continue}if(s=Fr[r],s>4){o[i++]=65533,e+=s-1;continue}for(r&=s===2?31:s===3?15:7;s>1&&e<a;)r=r<<6|n[e++]&63,s--;if(s>1){o[i++]=65533;continue}r<65536?o[i++]=r:(r-=65536,o[i++]=55296|r>>10&1023,o[i++]=56320|r&1023)}return Oh(o,i)};bi.utf8border=function(n,t){var e;for(t=t||n.length,t>n.length&&(t=n.length),e=t-1;e>=0&&(n[e]&192)===128;)e--;return e<0||e===0?t:e+Fr[n[e]]>t?e:t};function q0(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var zh=q0,br=xn,yr=Dn,Ya=bi,ja=uo,Z0=zh,Bh=Object.prototype.toString,Y0=0,Ta=4,ji=0,ic=1,rc=2,j0=-1,$0=0,K0=8;function _i(n){if(!(this instanceof _i))return new _i(n);this.options=yr.assign({level:j0,method:K0,chunkSize:16384,windowBits:15,memLevel:8,strategy:$0,to:""},n||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Z0,this.strm.avail_out=0;var e=br.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(e!==ji)throw new Error(ja[e]);if(t.header&&br.deflateSetHeader(this.strm,t.header),t.dictionary){var i;if(typeof t.dictionary=="string"?i=Ya.string2buf(t.dictionary):Bh.call(t.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(t.dictionary):i=t.dictionary,e=br.deflateSetDictionary(this.strm,i),e!==ji)throw new Error(ja[e]);this._dict_set=!0}}_i.prototype.push=function(n,t){var e=this.strm,i=this.options.chunkSize,r,s;if(this.ended)return!1;s=t===~~t?t:t===!0?Ta:Y0,typeof n=="string"?e.input=Ya.string2buf(n):Bh.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length;do{if(e.avail_out===0&&(e.output=new yr.Buf8(i),e.next_out=0,e.avail_out=i),r=br.deflate(e,s),r!==ic&&r!==ji)return this.onEnd(r),this.ended=!0,!1;(e.avail_out===0||e.avail_in===0&&(s===Ta||s===rc))&&(this.options.to==="string"?this.onData(Ya.buf2binstring(yr.shrinkBuf(e.output,e.next_out))):this.onData(yr.shrinkBuf(e.output,e.next_out)))}while((e.avail_in>0||e.avail_out===0)&&r!==ic);return s===Ta?(r=br.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===ji):(s===rc&&(this.onEnd(ji),e.avail_out=0),!0)};_i.prototype.onData=function(n){this.chunks.push(n)};_i.prototype.onEnd=function(n){n===ji&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=yr.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function fo(n,t){var e=new _i(t);if(e.push(n,!0),e.err)throw e.msg||ja[e.err];return e.result}function J0(n,t){return t=t||{},t.raw=!0,fo(n,t)}function Q0(n,t){return t=t||{},t.gzip=!0,fo(n,t)}Or.Deflate=_i;Or.deflate=fo;Or.deflateRaw=J0;Or.gzip=Q0;var kr={},hn={},fs=30,tv=12,ev=function(t,e){var i,r,s,a,o,h,l,c,d,u,p,_,g,m,f,E,x,y,S,M,R,L,v,w,F;i=t.state,r=t.next_in,w=t.input,s=r+(t.avail_in-5),a=t.next_out,F=t.output,o=a-(e-t.avail_out),h=a+(t.avail_out-257),l=i.dmax,c=i.wsize,d=i.whave,u=i.wnext,p=i.window,_=i.hold,g=i.bits,m=i.lencode,f=i.distcode,E=(1<<i.lenbits)-1,x=(1<<i.distbits)-1;t:do{g<15&&(_+=w[r++]<<g,g+=8,_+=w[r++]<<g,g+=8),y=m[_&E];e:for(;;){if(S=y>>>24,_>>>=S,g-=S,S=y>>>16&255,S===0)F[a++]=y&65535;else if(S&16){M=y&65535,S&=15,S&&(g<S&&(_+=w[r++]<<g,g+=8),M+=_&(1<<S)-1,_>>>=S,g-=S),g<15&&(_+=w[r++]<<g,g+=8,_+=w[r++]<<g,g+=8),y=f[_&x];n:for(;;){if(S=y>>>24,_>>>=S,g-=S,S=y>>>16&255,S&16){if(R=y&65535,S&=15,g<S&&(_+=w[r++]<<g,g+=8,g<S&&(_+=w[r++]<<g,g+=8)),R+=_&(1<<S)-1,R>l){t.msg="invalid distance too far back",i.mode=fs;break t}if(_>>>=S,g-=S,S=a-o,R>S){if(S=R-S,S>d&&i.sane){t.msg="invalid distance too far back",i.mode=fs;break t}if(L=0,v=p,u===0){if(L+=c-S,S<M){M-=S;do F[a++]=p[L++];while(--S);L=a-R,v=F}}else if(u<S){if(L+=c+u-S,S-=u,S<M){M-=S;do F[a++]=p[L++];while(--S);if(L=0,u<M){S=u,M-=S;do F[a++]=p[L++];while(--S);L=a-R,v=F}}}else if(L+=u-S,S<M){M-=S;do F[a++]=p[L++];while(--S);L=a-R,v=F}for(;M>2;)F[a++]=v[L++],F[a++]=v[L++],F[a++]=v[L++],M-=3;M&&(F[a++]=v[L++],M>1&&(F[a++]=v[L++]))}else{L=a-R;do F[a++]=F[L++],F[a++]=F[L++],F[a++]=F[L++],M-=3;while(M>2);M&&(F[a++]=F[L++],M>1&&(F[a++]=F[L++]))}}else if(S&64){t.msg="invalid distance code",i.mode=fs;break t}else{y=f[(y&65535)+(_&(1<<S)-1)];continue n}break}}else if(S&64)if(S&32){i.mode=tv;break t}else{t.msg="invalid literal/length code",i.mode=fs;break t}else{y=m[(y&65535)+(_&(1<<S)-1)];continue e}break}}while(r<s&&a<h);M=g>>3,r-=M,g-=M<<3,_&=(1<<g)-1,t.next_in=r,t.next_out=a,t.avail_in=r<s?5+(s-r):5-(r-s),t.avail_out=a<h?257+(h-a):257-(a-h),i.hold=_,i.bits=g},sc=Dn,Gi=15,ac=852,oc=592,lc=0,wa=1,cc=2,nv=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],iv=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],rv=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],sv=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],av=function(t,e,i,r,s,a,o,h){var l=h.bits,c=0,d=0,u=0,p=0,_=0,g=0,m=0,f=0,E=0,x=0,y,S,M,R,L,v=null,w=0,F,V=new sc.Buf16(Gi+1),I=new sc.Buf16(Gi+1),O=null,B=0,$,Z,q;for(c=0;c<=Gi;c++)V[c]=0;for(d=0;d<r;d++)V[e[i+d]]++;for(_=l,p=Gi;p>=1&&V[p]===0;p--);if(_>p&&(_=p),p===0)return s[a++]=1<<24|64<<16|0,s[a++]=1<<24|64<<16|0,h.bits=1,0;for(u=1;u<p&&V[u]===0;u++);for(_<u&&(_=u),f=1,c=1;c<=Gi;c++)if(f<<=1,f-=V[c],f<0)return-1;if(f>0&&(t===lc||p!==1))return-1;for(I[1]=0,c=1;c<Gi;c++)I[c+1]=I[c]+V[c];for(d=0;d<r;d++)e[i+d]!==0&&(o[I[e[i+d]]++]=d);if(t===lc?(v=O=o,F=19):t===wa?(v=nv,w-=257,O=iv,B-=257,F=256):(v=rv,O=sv,F=-1),x=0,d=0,c=u,L=a,g=_,m=0,M=-1,E=1<<_,R=E-1,t===wa&&E>ac||t===cc&&E>oc)return 1;for(;;){$=c-m,o[d]<F?(Z=0,q=o[d]):o[d]>F?(Z=O[B+o[d]],q=v[w+o[d]]):(Z=32+64,q=0),y=1<<c-m,S=1<<g,u=S;do S-=y,s[L+(x>>m)+S]=$<<24|Z<<16|q|0;while(S!==0);for(y=1<<c-1;x&y;)y>>=1;if(y!==0?(x&=y-1,x+=y):x=0,d++,--V[c]===0){if(c===p)break;c=e[i+o[d]]}if(c>_&&(x&R)!==M){for(m===0&&(m=_),L+=u,g=c-m,f=1<<g;g+m<p&&(f-=V[g+m],!(f<=0));)g++,f<<=1;if(E+=1<<g,t===wa&&E>ac||t===cc&&E>oc)return 1;M=x&R,s[M]=_<<24|g<<16|L-a|0}}return x!==0&&(s[L+x]=c-m<<24|64<<16|0),h.bits=_,0},Be=Dn,$a=Rh,pn=Ch,ov=ev,Tr=av,lv=0,kh=1,Gh=2,hc=4,cv=5,ds=6,gi=0,hv=1,uv=2,je=-2,Hh=-3,Vh=-4,fv=-5,uc=8,Wh=1,fc=2,dc=3,pc=4,mc=5,_c=6,gc=7,vc=8,xc=9,Mc=10,As=11,An=12,Aa=13,Sc=14,Ra=15,Ec=16,bc=17,yc=18,Tc=19,ps=20,ms=21,wc=22,Ac=23,Rc=24,Cc=25,Pc=26,Ca=27,Lc=28,Dc=29,$t=30,Xh=31,dv=32,pv=852,mv=592,_v=15,gv=_v;function Uc(n){return(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24)}function vv(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Be.Buf16(320),this.work=new Be.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function qh(n){var t;return!n||!n.state?je:(t=n.state,n.total_in=n.total_out=t.total=0,n.msg="",t.wrap&&(n.adler=t.wrap&1),t.mode=Wh,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Be.Buf32(pv),t.distcode=t.distdyn=new Be.Buf32(mv),t.sane=1,t.back=-1,gi)}function Zh(n){var t;return!n||!n.state?je:(t=n.state,t.wsize=0,t.whave=0,t.wnext=0,qh(n))}function Yh(n,t){var e,i;return!n||!n.state||(i=n.state,t<0?(e=0,t=-t):(e=(t>>4)+1,t<48&&(t&=15)),t&&(t<8||t>15))?je:(i.window!==null&&i.wbits!==t&&(i.window=null),i.wrap=e,i.wbits=t,Zh(n))}function jh(n,t){var e,i;return n?(i=new vv,n.state=i,i.window=null,e=Yh(n,t),e!==gi&&(n.state=null),e):je}function xv(n){return jh(n,gv)}var Ic=!0,Pa,La;function Mv(n){if(Ic){var t;for(Pa=new Be.Buf32(512),La=new Be.Buf32(32),t=0;t<144;)n.lens[t++]=8;for(;t<256;)n.lens[t++]=9;for(;t<280;)n.lens[t++]=7;for(;t<288;)n.lens[t++]=8;for(Tr(kh,n.lens,0,288,Pa,0,n.work,{bits:9}),t=0;t<32;)n.lens[t++]=5;Tr(Gh,n.lens,0,32,La,0,n.work,{bits:5}),Ic=!1}n.lencode=Pa,n.lenbits=9,n.distcode=La,n.distbits=5}function $h(n,t,e,i){var r,s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Be.Buf8(s.wsize)),i>=s.wsize?(Be.arraySet(s.window,t,e-s.wsize,s.wsize,0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),Be.arraySet(s.window,t,e-i,r,s.wnext),i-=r,i?(Be.arraySet(s.window,t,e-i,i,0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0}function Sv(n,t){var e,i,r,s,a,o,h,l,c,d,u,p,_,g,m=0,f,E,x,y,S,M,R,L,v=new Be.Buf8(4),w,F,V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!n||!n.state||!n.output||!n.input&&n.avail_in!==0)return je;e=n.state,e.mode===An&&(e.mode=Aa),a=n.next_out,r=n.output,h=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=e.hold,c=e.bits,d=o,u=h,L=gi;t:for(;;)switch(e.mode){case Wh:if(e.wrap===0){e.mode=Aa;break}for(;c<16;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(e.wrap&2&&l===35615){e.check=0,v[0]=l&255,v[1]=l>>>8&255,e.check=pn(e.check,v,2,0),l=0,c=0,e.mode=fc;break}if(e.flags=0,e.head&&(e.head.done=!1),!(e.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",e.mode=$t;break}if((l&15)!==uc){n.msg="unknown compression method",e.mode=$t;break}if(l>>>=4,c-=4,R=(l&15)+8,e.wbits===0)e.wbits=R;else if(R>e.wbits){n.msg="invalid window size",e.mode=$t;break}e.dmax=1<<R,n.adler=e.check=1,e.mode=l&512?Mc:An,l=0,c=0;break;case fc:for(;c<16;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(e.flags=l,(e.flags&255)!==uc){n.msg="unknown compression method",e.mode=$t;break}if(e.flags&57344){n.msg="unknown header flags set",e.mode=$t;break}e.head&&(e.head.text=l>>8&1),e.flags&512&&(v[0]=l&255,v[1]=l>>>8&255,e.check=pn(e.check,v,2,0)),l=0,c=0,e.mode=dc;case dc:for(;c<32;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}e.head&&(e.head.time=l),e.flags&512&&(v[0]=l&255,v[1]=l>>>8&255,v[2]=l>>>16&255,v[3]=l>>>24&255,e.check=pn(e.check,v,4,0)),l=0,c=0,e.mode=pc;case pc:for(;c<16;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}e.head&&(e.head.xflags=l&255,e.head.os=l>>8),e.flags&512&&(v[0]=l&255,v[1]=l>>>8&255,e.check=pn(e.check,v,2,0)),l=0,c=0,e.mode=mc;case mc:if(e.flags&1024){for(;c<16;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}e.length=l,e.head&&(e.head.extra_len=l),e.flags&512&&(v[0]=l&255,v[1]=l>>>8&255,e.check=pn(e.check,v,2,0)),l=0,c=0}else e.head&&(e.head.extra=null);e.mode=_c;case _c:if(e.flags&1024&&(p=e.length,p>o&&(p=o),p&&(e.head&&(R=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Array(e.head.extra_len)),Be.arraySet(e.head.extra,i,s,p,R)),e.flags&512&&(e.check=pn(e.check,i,p,s)),o-=p,s+=p,e.length-=p),e.length))break t;e.length=0,e.mode=gc;case gc:if(e.flags&2048){if(o===0)break t;p=0;do R=i[s+p++],e.head&&R&&e.length<65536&&(e.head.name+=String.fromCharCode(R));while(R&&p<o);if(e.flags&512&&(e.check=pn(e.check,i,p,s)),o-=p,s+=p,R)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=vc;case vc:if(e.flags&4096){if(o===0)break t;p=0;do R=i[s+p++],e.head&&R&&e.length<65536&&(e.head.comment+=String.fromCharCode(R));while(R&&p<o);if(e.flags&512&&(e.check=pn(e.check,i,p,s)),o-=p,s+=p,R)break t}else e.head&&(e.head.comment=null);e.mode=xc;case xc:if(e.flags&512){for(;c<16;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(l!==(e.check&65535)){n.msg="header crc mismatch",e.mode=$t;break}l=0,c=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),n.adler=e.check=0,e.mode=An;break;case Mc:for(;c<32;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}n.adler=e.check=Uc(l),l=0,c=0,e.mode=As;case As:if(e.havedict===0)return n.next_out=a,n.avail_out=h,n.next_in=s,n.avail_in=o,e.hold=l,e.bits=c,uv;n.adler=e.check=1,e.mode=An;case An:if(t===cv||t===ds)break t;case Aa:if(e.last){l>>>=c&7,c-=c&7,e.mode=Ca;break}for(;c<3;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}switch(e.last=l&1,l>>>=1,c-=1,l&3){case 0:e.mode=Sc;break;case 1:if(Mv(e),e.mode=ps,t===ds){l>>>=2,c-=2;break t}break;case 2:e.mode=bc;break;case 3:n.msg="invalid block type",e.mode=$t}l>>>=2,c-=2;break;case Sc:for(l>>>=c&7,c-=c&7;c<32;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",e.mode=$t;break}if(e.length=l&65535,l=0,c=0,e.mode=Ra,t===ds)break t;case Ra:e.mode=Ec;case Ec:if(p=e.length,p){if(p>o&&(p=o),p>h&&(p=h),p===0)break t;Be.arraySet(r,i,s,p,a),o-=p,s+=p,h-=p,a+=p,e.length-=p;break}e.mode=An;break;case bc:for(;c<14;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(e.nlen=(l&31)+257,l>>>=5,c-=5,e.ndist=(l&31)+1,l>>>=5,c-=5,e.ncode=(l&15)+4,l>>>=4,c-=4,e.nlen>286||e.ndist>30){n.msg="too many length or distance symbols",e.mode=$t;break}e.have=0,e.mode=yc;case yc:for(;e.have<e.ncode;){for(;c<3;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}e.lens[V[e.have++]]=l&7,l>>>=3,c-=3}for(;e.have<19;)e.lens[V[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,w={bits:e.lenbits},L=Tr(lv,e.lens,0,19,e.lencode,0,e.work,w),e.lenbits=w.bits,L){n.msg="invalid code lengths set",e.mode=$t;break}e.have=0,e.mode=Tc;case Tc:for(;e.have<e.nlen+e.ndist;){for(;m=e.lencode[l&(1<<e.lenbits)-1],f=m>>>24,E=m>>>16&255,x=m&65535,!(f<=c);){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(x<16)l>>>=f,c-=f,e.lens[e.have++]=x;else{if(x===16){for(F=f+2;c<F;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(l>>>=f,c-=f,e.have===0){n.msg="invalid bit length repeat",e.mode=$t;break}R=e.lens[e.have-1],p=3+(l&3),l>>>=2,c-=2}else if(x===17){for(F=f+3;c<F;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}l>>>=f,c-=f,R=0,p=3+(l&7),l>>>=3,c-=3}else{for(F=f+7;c<F;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}l>>>=f,c-=f,R=0,p=11+(l&127),l>>>=7,c-=7}if(e.have+p>e.nlen+e.ndist){n.msg="invalid bit length repeat",e.mode=$t;break}for(;p--;)e.lens[e.have++]=R}}if(e.mode===$t)break;if(e.lens[256]===0){n.msg="invalid code -- missing end-of-block",e.mode=$t;break}if(e.lenbits=9,w={bits:e.lenbits},L=Tr(kh,e.lens,0,e.nlen,e.lencode,0,e.work,w),e.lenbits=w.bits,L){n.msg="invalid literal/lengths set",e.mode=$t;break}if(e.distbits=6,e.distcode=e.distdyn,w={bits:e.distbits},L=Tr(Gh,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,w),e.distbits=w.bits,L){n.msg="invalid distances set",e.mode=$t;break}if(e.mode=ps,t===ds)break t;case ps:e.mode=ms;case ms:if(o>=6&&h>=258){n.next_out=a,n.avail_out=h,n.next_in=s,n.avail_in=o,e.hold=l,e.bits=c,ov(n,u),a=n.next_out,r=n.output,h=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,l=e.hold,c=e.bits,e.mode===An&&(e.back=-1);break}for(e.back=0;m=e.lencode[l&(1<<e.lenbits)-1],f=m>>>24,E=m>>>16&255,x=m&65535,!(f<=c);){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(E&&!(E&240)){for(y=f,S=E,M=x;m=e.lencode[M+((l&(1<<y+S)-1)>>y)],f=m>>>24,E=m>>>16&255,x=m&65535,!(y+f<=c);){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}l>>>=y,c-=y,e.back+=y}if(l>>>=f,c-=f,e.back+=f,e.length=x,E===0){e.mode=Pc;break}if(E&32){e.back=-1,e.mode=An;break}if(E&64){n.msg="invalid literal/length code",e.mode=$t;break}e.extra=E&15,e.mode=wc;case wc:if(e.extra){for(F=e.extra;c<F;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}e.length+=l&(1<<e.extra)-1,l>>>=e.extra,c-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=Ac;case Ac:for(;m=e.distcode[l&(1<<e.distbits)-1],f=m>>>24,E=m>>>16&255,x=m&65535,!(f<=c);){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(!(E&240)){for(y=f,S=E,M=x;m=e.distcode[M+((l&(1<<y+S)-1)>>y)],f=m>>>24,E=m>>>16&255,x=m&65535,!(y+f<=c);){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}l>>>=y,c-=y,e.back+=y}if(l>>>=f,c-=f,e.back+=f,E&64){n.msg="invalid distance code",e.mode=$t;break}e.offset=x,e.extra=E&15,e.mode=Rc;case Rc:if(e.extra){for(F=e.extra;c<F;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}e.offset+=l&(1<<e.extra)-1,l>>>=e.extra,c-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){n.msg="invalid distance too far back",e.mode=$t;break}e.mode=Cc;case Cc:if(h===0)break t;if(p=u-h,e.offset>p){if(p=e.offset-p,p>e.whave&&e.sane){n.msg="invalid distance too far back",e.mode=$t;break}p>e.wnext?(p-=e.wnext,_=e.wsize-p):_=e.wnext-p,p>e.length&&(p=e.length),g=e.window}else g=r,_=a-e.offset,p=e.length;p>h&&(p=h),h-=p,e.length-=p;do r[a++]=g[_++];while(--p);e.length===0&&(e.mode=ms);break;case Pc:if(h===0)break t;r[a++]=e.length,h--,e.mode=ms;break;case Ca:if(e.wrap){for(;c<32;){if(o===0)break t;o--,l|=i[s++]<<c,c+=8}if(u-=h,n.total_out+=u,e.total+=u,u&&(n.adler=e.check=e.flags?pn(e.check,r,u,a-u):$a(e.check,r,u,a-u)),u=h,(e.flags?l:Uc(l))!==e.check){n.msg="incorrect data check",e.mode=$t;break}l=0,c=0}e.mode=Lc;case Lc:if(e.wrap&&e.flags){for(;c<32;){if(o===0)break t;o--,l+=i[s++]<<c,c+=8}if(l!==(e.total&4294967295)){n.msg="incorrect length check",e.mode=$t;break}l=0,c=0}e.mode=Dc;case Dc:L=hv;break t;case $t:L=Hh;break t;case Xh:return Vh;case dv:default:return je}return n.next_out=a,n.avail_out=h,n.next_in=s,n.avail_in=o,e.hold=l,e.bits=c,(e.wsize||u!==n.avail_out&&e.mode<$t&&(e.mode<Ca||t!==hc))&&$h(n,n.output,n.next_out,u-n.avail_out),d-=n.avail_in,u-=n.avail_out,n.total_in+=d,n.total_out+=u,e.total+=u,e.wrap&&u&&(n.adler=e.check=e.flags?pn(e.check,r,u,n.next_out-u):$a(e.check,r,u,n.next_out-u)),n.data_type=e.bits+(e.last?64:0)+(e.mode===An?128:0)+(e.mode===ps||e.mode===Ra?256:0),(d===0&&u===0||t===hc)&&L===gi&&(L=fv),L}function Ev(n){if(!n||!n.state)return je;var t=n.state;return t.window&&(t.window=null),n.state=null,gi}function bv(n,t){var e;return!n||!n.state||(e=n.state,!(e.wrap&2))?je:(e.head=t,t.done=!1,gi)}function yv(n,t){var e=t.length,i,r,s;return!n||!n.state||(i=n.state,i.wrap!==0&&i.mode!==As)?je:i.mode===As&&(r=1,r=$a(r,t,e,0),r!==i.check)?Hh:(s=$h(n,t,e,e),s?(i.mode=Xh,Vh):(i.havedict=1,gi))}hn.inflateReset=Zh;hn.inflateReset2=Yh;hn.inflateResetKeep=qh;hn.inflateInit=xv;hn.inflateInit2=jh;hn.inflate=Sv;hn.inflateEnd=Ev;hn.inflateGetHeader=bv;hn.inflateSetDictionary=yv;hn.inflateInfo="pako inflate (from Nodeca project)";var Kh={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};function Tv(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var wv=Tv,$i=hn,wr=Dn,ys=bi,ne=Kh,Ka=uo,Av=zh,Rv=wv,Jh=Object.prototype.toString;function vi(n){if(!(this instanceof vi))return new vi(n);this.options=wr.assign({chunkSize:16384,windowBits:0,to:""},n||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(n&&n.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Av,this.strm.avail_out=0;var e=$i.inflateInit2(this.strm,t.windowBits);if(e!==ne.Z_OK)throw new Error(Ka[e]);if(this.header=new Rv,$i.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=ys.string2buf(t.dictionary):Jh.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(e=$i.inflateSetDictionary(this.strm,t.dictionary),e!==ne.Z_OK)))throw new Error(Ka[e])}vi.prototype.push=function(n,t){var e=this.strm,i=this.options.chunkSize,r=this.options.dictionary,s,a,o,h,l,c=!1;if(this.ended)return!1;a=t===~~t?t:t===!0?ne.Z_FINISH:ne.Z_NO_FLUSH,typeof n=="string"?e.input=ys.binstring2buf(n):Jh.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length;do{if(e.avail_out===0&&(e.output=new wr.Buf8(i),e.next_out=0,e.avail_out=i),s=$i.inflate(e,ne.Z_NO_FLUSH),s===ne.Z_NEED_DICT&&r&&(s=$i.inflateSetDictionary(this.strm,r)),s===ne.Z_BUF_ERROR&&c===!0&&(s=ne.Z_OK,c=!1),s!==ne.Z_STREAM_END&&s!==ne.Z_OK)return this.onEnd(s),this.ended=!0,!1;e.next_out&&(e.avail_out===0||s===ne.Z_STREAM_END||e.avail_in===0&&(a===ne.Z_FINISH||a===ne.Z_SYNC_FLUSH))&&(this.options.to==="string"?(o=ys.utf8border(e.output,e.next_out),h=e.next_out-o,l=ys.buf2string(e.output,o),e.next_out=h,e.avail_out=i-h,h&&wr.arraySet(e.output,e.output,o,h,0),this.onData(l)):this.onData(wr.shrinkBuf(e.output,e.next_out))),e.avail_in===0&&e.avail_out===0&&(c=!0)}while((e.avail_in>0||e.avail_out===0)&&s!==ne.Z_STREAM_END);return s===ne.Z_STREAM_END&&(a=ne.Z_FINISH),a===ne.Z_FINISH?(s=$i.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===ne.Z_OK):(a===ne.Z_SYNC_FLUSH&&(this.onEnd(ne.Z_OK),e.avail_out=0),!0)};vi.prototype.onData=function(n){this.chunks.push(n)};vi.prototype.onEnd=function(n){n===ne.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=wr.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function po(n,t){var e=new vi(t);if(e.push(n,!0),e.err)throw e.msg||Ka[e.err];return e.result}function Cv(n,t){return t=t||{},t.raw=!0,po(n,t)}kr.Inflate=vi;kr.inflate=po;kr.inflateRaw=Cv;kr.ungzip=po;var Pv=Dn.assign,Lv=Or,Dv=kr,Uv=Kh,Qh={};Pv(Qh,Lv,Dv,Uv);var Iv=Qh;class Fv extends Us{constructor(t){super(t),this.materials=null}load(t,e,i,r){const s=this,a=new ro(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(h){r?r(h):console.error(h),s.manager.itemError(t)}},i,r)}parse(t){let e=new Uint8Array(t),r=Bv(e,[31,139,8,0,0]),s=Iv.ungzip(e.slice(r),{to:"string"});const a=new DOMParser().parseFromString(s,"application/xml");var o=a.getElementsByTagName("Keys")[0],h=a.getElementsByTagName("Values")[0],l=o.getAttribute("href").slice(1),c=h.getAttribute("href").slice(1),d=[];const u=a.getElementById(l);for(const S of u.children)d.push(S.innerHTML);var p=[];const _=a.getElementById(c);for(const S of _.children)p.push(S.innerHTML);function g(S,M,R){return M.length==1?(S[M[0]]=R,S):(S[M[0]]=S[M[0]]||{},g(S[M[0]],M.slice(1,M.length),R))}for(var m={},f=0,E=d.length;f<E;f++)g(m,d[f].split("."),p[f]);const x=new Hn;let y={x:parseFloat(m.Project.Origin.X),y:parseFloat(m.Project.Origin.Y)};for(const[S,M]of Object.entries(m.Project.AudienceZoneManager))if(S.slice(0,5)=="Zone["){parseFloat(M.X)-y.x,parseFloat(M.Y)-y.y;let R=new Bt(parseFloat(M.X)-y.x,parseFloat(M.Y)-y.y);for(const[L,v]of Object.entries(M))if(L.slice(0,5)=="Area[")switch(M.Type==""&&(M.Width!=null&&(M.Type="Rectangle"),M.Radius!=null&&(M.Type="Arc"),M.FrontEdge!=null&&(M.Type="Trapezoid"),M.RightAngleLeft!=null&&(M.Type="Right Trapezoid")),M.Type){case"Annulus":x.add(Fc(M,v,R));break;case"Arc":x.add(Fc(M,v,R));break;case"Right Trapezoid":x.add(Nv(M,v,R));break;case"Trapezoid":x.add(Ov(M,v,R));break;case"Rectangle":x.add(zv(M,v,R));break}}return x}}function Fc(n,t,e){var i,r,s,a;i=(parseFloat(n.InnerRadius)||0)+parseFloat(t.D1),r=(parseFloat(n.InnerRadius)||0)+parseFloat(t.D2),s=2,a=2;let o=360-n.SweepAngle/2,h=parseFloat(n.SweepAngle),l=parseFloat(t.Z1),c=parseFloat(t.Z2),d=[],u=[],p=Math.floor(o/90),_=Math.floor((o+h)/90);for(let M=p;M<=_;M++){let R=M*90,L=(M+1)*90;M==p&&(R=o),M==_&&(L=o+h);let v=L-R,w=Math.ceil(v/10),F=v/w;for(let V=0;V<w;V++){let I=F*V+R;u.push(Vn(r,r,I,a)),d.push(Vn(i,i,I,s))}}d.push(Vn(i,i,o+h,s)),u.push(Vn(r,r,o+h,a));for(var g=0;g<d.length;g++)d[g].z=l,u[g].z=c;let m=[];for(let M=0;M<d.length-1;M++)m.push(d[M]),m.push(u[M]),m.push(u[M+1]),m.push(u[M+1]),m.push(d[M+1]),m.push(d[M]);var f=new Float32Array(m.length*3),E=0;for(let M=m.length-1;M>=0;M--)f[E*3]=m[M].x,f[E*3+1]=m[M].y,f[E*3+2]=m[M].z,E++;const x=new jt;x.setAttribute("position",new Kt(f,3)),x.setAttribute("normal",new Kt(Si(f),3)),x.rotateZ(on(n.Orientation)),x.translate(e.x,e.y,0);const y=new Mi({side:ge}),S=new xe(x,y);return Os(S,t,n),S}function Nv(n,t,e){let i=n.RightAngleLeft,r=parseFloat(t.D1),s=parseFloat(t.D2),a=parseFloat(n.FrontEdge),o=(n.BackEdge-n.FrontEdge)/n.Depth;console.log("frontedge: "+n.FrontEdge),console.log("backedge: "+n.BackEdge),console.log("widthPerUnit: "+o),console.log("d1: "+r),console.log("d2: "+s);var h={x:-n.Depth/2+ +r,y:0,z:t.Z1},l={x:-n.Depth/2+ +s,y:0,z:t.Z2},c={x:-n.Depth/2+ +s,y:a+s*o,z:t.Z2},d={x:-n.Depth/2+ +r,y:a+r*o,z:t.Z1};let u=[d,c,l,l,h,d];i==0&&(c.y=-c.y,d.y=-d.y,u=[h,l,c,c,d,h]);let p=[];for(var _=0;_<u.length;_++)p.push(u[_].x),p.push(u[_].y),p.push(u[_].z);const g=new Float32Array(p),m=new jt;m.setAttribute("position",new Kt(g,3)),m.setAttribute("normal",new Kt(Si(g),3)),m.rotateZ(on(n.Orientation)),m.translate(e.x,e.y,0);const f=new Mi({side:ge}),E=new xe(m,f);return Os(E,t,n),E}function Ov(n,t,e){let i=[],r=(n.BackEdge-n.FrontEdge)/n.Depth,s=parseFloat(t.D1),a=parseFloat(t.D2),o=parseFloat(n.FrontEdge);i.push(-(n.Depth/2)+a),i.push(a*r/2+o/2),i.push(t.Z2),i.push(-(n.Depth/2)+a),i.push(-a*r/2-o/2),i.push(t.Z2),i.push(-(n.Depth/2)+s),i.push(-s*r/2-o/2),i.push(t.Z1),i.push(-(n.Depth/2)+s),i.push(-s*r/2-o/2),i.push(t.Z1),i.push(-(n.Depth/2)+s),i.push(s*r/2+o/2),i.push(t.Z1),i.push(-(n.Depth/2)+a),i.push(a*r/2+o/2),i.push(t.Z2);const h=new Float32Array(i),l=new jt;l.setAttribute("position",new Kt(h,3)),l.setAttribute("normal",new Kt(Si(h),3)),l.rotateZ(on(n.Orientation)),l.translate(e.x,e.y,0);const c=new Mi({side:ge}),d=new xe(l,c);return Os(d,t,n),d}function Os(n,t,e){n.name=t.Label,n.name.length==0&&(n.name=e.Label),n.name.length==0&&(n.name="<unnamed>")}function zv(n,t,e){let i=[],r=parseFloat(t.D1),s=parseFloat(t.D2);parseFloat(n.FrontEdge),i.push(-(n.Depth/2)+s),i.push(n.Width/2),i.push(t.Z2),i.push(-(n.Depth/2)+s),i.push(-n.Width/2),i.push(t.Z2),i.push(-(n.Depth/2)+r),i.push(-n.Width/2),i.push(t.Z1),i.push(-(n.Depth/2)+r),i.push(-n.Width/2),i.push(t.Z1),i.push(-(n.Depth/2)+r),i.push(n.Width/2),i.push(t.Z1),i.push(-(n.Depth/2)+s),i.push(n.Width/2),i.push(t.Z2);const a=new Float32Array(i),o=new jt;o.setAttribute("position",new Kt(a,3)),o.setAttribute("normal",new Kt(Si(a),3)),o.rotateZ(on(n.Orientation)),o.translate(e.x,e.y,0);const h=new Mi({side:ge}),l=new xe(o,h);return Os(l,t,n),l}function Bv(n,t){return n.findIndex(function(e,i,r){if(i+t.length>r.length)return!1;let s=r.slice(i,i+t.length);for(var a=0;a<s.length;a++){if(s[a]!==t[a])return!1;if(a==s.length-1)return!0}})}class kv{parse(t){const e=[];let i=0;t.traverse(function(c){if(c.isMesh){const d=c.geometry,u=d.index,p=d.getAttribute("position");i+=u!==null?u.count/3:p.count/3,e.push({object3d:c,geometry:d})}});let r=`"; Exported by svExporter"
"; "
";   using Outside is front (white)" 
";   using Name By Layer"
";   using Visible Entities"
";"
";"
";"
"; LengthUnit", "m"
";"
`;const s=new C,a=new C,o=new C;for(let c=0;c<e.length;c++){const d=e[c].object3d,u=e[c].geometry,p=u.index,_=u.getAttribute("position");if(p!==null)for(let g=0;g<p.count;g+=3){const m=p.getX(g+0),f=p.getX(g+1),E=p.getX(g+2);h(E,f,m,_,d)}else for(let g=0;g<_.count;g+=3){const m=g+0,f=g+1,E=g+2;h(E,f,m,_,d)}}return r;function h(c,d,u,p,_){r+='"Label","'+_.name+`"
`,s.fromBufferAttribute(p,c),a.fromBufferAttribute(p,d),o.fromBufferAttribute(p,u),s.applyMatrix4(_.matrixWorld),a.applyMatrix4(_.matrixWorld),o.applyMatrix4(_.matrixWorld),l(s),l(a),l(o),r+=`";"
`}function l(c){r+=c.x+","+c.y+","+c.z+`
`}}}class Gv{parse(t){let e="",i=0,r=0,s=0;const a=new C,o=new Lt,h=new C,l=new Bt,c=[];function d(_){let g=0,m=0,f=0;const E=_.geometry,x=new It,y=E.getAttribute("position"),S=E.getAttribute("normal"),M=E.getAttribute("uv"),R=E.getIndex();if(e+="o "+_.name+`
`,_.material&&_.material.name&&(e+="usemtl "+_.material.name+`
`),y!==void 0)for(let L=0,v=y.count;L<v;L++,g++)a.fromBufferAttribute(y,L),a.applyMatrix4(_.matrixWorld),e+="v "+a.x+" "+a.y+" "+a.z+`
`;if(M!==void 0)for(let L=0,v=M.count;L<v;L++,f++)l.fromBufferAttribute(M,L),e+="vt "+l.x+" "+l.y+`
`;if(S!==void 0){x.getNormalMatrix(_.matrixWorld);for(let L=0,v=S.count;L<v;L++,m++)h.fromBufferAttribute(S,L),h.applyMatrix3(x).normalize(),e+="vn "+h.x+" "+h.y+" "+h.z+`
`}if(R!==null)for(let L=0,v=R.count;L<v;L+=3){for(let w=0;w<3;w++){const F=R.getX(L+w)+1;c[w]=i+F+(S||M?"/"+(M?r+F:"")+(S?"/"+(s+F):""):"")}e+="f "+c.join(" ")+`
`}else for(let L=0,v=y.count;L<v;L+=3){for(let w=0;w<3;w++){const F=L+w+1;c[w]=i+F+(S||M?"/"+(M?r+F:"")+(S?"/"+(s+F):""):"")}e+="f "+c.join(" ")+`
`}i+=g,r+=f,s+=m}function u(_){let g=0;const m=_.geometry,f=_.type,E=m.getAttribute("position");if(e+="o "+_.name+`
`,E!==void 0)for(let x=0,y=E.count;x<y;x++,g++)a.fromBufferAttribute(E,x),a.applyMatrix4(_.matrixWorld),e+="v "+a.x+" "+a.y+" "+a.z+`
`;if(f==="Line"){e+="l ";for(let x=1,y=E.count;x<=y;x++)e+=i+x+" ";e+=`
`}if(f==="LineSegments")for(let x=1,y=x+1,S=E.count;x<S;x+=2,y=x+1)e+="l "+(i+x)+" "+(i+y)+`
`;i+=g}function p(_){let g=0;const m=_.geometry,f=m.getAttribute("position"),E=m.getAttribute("color");if(e+="o "+_.name+`
`,f!==void 0){for(let x=0,y=f.count;x<y;x++,g++)a.fromBufferAttribute(f,x),a.applyMatrix4(_.matrixWorld),e+="v "+a.x+" "+a.y+" "+a.z,E!==void 0&&(o.fromBufferAttribute(E,x).convertLinearToSRGB(),e+=" "+o.r+" "+o.g+" "+o.b),e+=`
`;e+="p ";for(let x=1,y=f.count;x<=y;x++)e+=i+x+" ";e+=`
`}i+=g}return t.traverse(function(_){_.isMesh===!0&&d(_),_.isLine===!0&&u(_),_.isPoints===!0&&p(_)}),e}}class Hv{constructor(){Hs(this,"outputDoc");Hs(this,"nameList",["cat","dog"]);this.outputDoc=document.implementation.createDocument("","",null)}parse(t){const e=[];let i=0;var r=this.outputDoc.createElement("ArrayCalc");r.setAttribute("Version","11.1.1");var s=this.outputDoc.createElement("Project");s.setAttribute("Name","Convertifer3D");var a=this.outputDoc.createElement("Date"),o=new Date;a.textContent=o.toLocaleDateString(),s.appendChild(a),a=this.outputDoc.createElement("Author"),a.textContent="Convertifer 3D",s.appendChild(a),a=this.outputDoc.createElement("Comments"),a.textContent="Imported with Convertifer3D",s.appendChild(a),r.appendChild(s);let h=this.outputDoc.createElement("Venue");h.setAttribute("Version","9"),r.appendChild(h);let l=h;var c=this;t.traverse(function(u){if(u.parent&&!u.parent.isGroup&&(l=h),u.isGroup){var p=c.writeGroup(u);h.appendChild(p),l=p}if(u.isMesh){const _=u.geometry,g=_.index,m=_.getAttribute("position");i+=g!==null?g.count/3:m.count/3,e.push({object3d:u,geometry:_,parent:l})}});for(let u=0;u<e.length;u++){const p=e[u].object3d,_=e[u].geometry,g=_.index,m=_.getAttribute("position");if(g!==null)for(let f=0;f<g.count;f+=3){const E=g.getX(f+0),x=g.getX(f+1),y=g.getX(f+2);l.append(c.writeFace(y,x,E,m,p))}else for(let f=0;f<m.count;f+=3){const E=f+0,x=f+1,y=f+2;l.append(c.writeFace(y,x,E,m,p))}}var d=new XMLSerializer().serializeToString(r);return d="<!DOCTYPE ArrayCalc>"+d,d}writeFace(t,e,i,r,s){var a=this.outputDoc.createElement("RoomObject");a.setAttribute("Name",this.getUniqueName(s.name)),a.setAttribute("Shape","6"),a.setAttribute("Enabled","1"),a.setAttribute("Transparent","1"),a.setAttribute("Locked","0"),a.setAttribute("ListenerHeight","1.2"),a.setAttribute("Color","4294967295"),a.setAttribute("PrintColor","4294945280"),a.setAttribute("ParentVenueObjectId","0"),a.setAttribute("OrderIndex","4"),a.setAttribute("PlaneType","1");const o=new C,h=new C,l=new C;return o.fromBufferAttribute(r,t),h.fromBufferAttribute(r,e),l.fromBufferAttribute(r,i),o.applyMatrix4(s.matrixWorld),h.applyMatrix4(s.matrixWorld),l.applyMatrix4(s.matrixWorld),this.writeVertex(o,1,a),this.writeVertex(h,2,a),this.writeVertex(l,3,a),this.zeroOrigRotScale(a),a}writeVertex(t,e,i){let r=this.outputDoc.createElement("P"+e);r.setAttribute("x",t.x),r.setAttribute("y",t.y),r.setAttribute("z",t.z),i.appendChild(r)}writeGroup(t){var e=this.outputDoc.createElement("RoomObject");return e.setAttribute("ObjectGroup","true"),e.setAttribute("Shape","5"),e.setAttribute("ObjectGroup","true"),e.setAttribute("PlaneType","1"),e.setAttribute("Name",this.getUniqueName(t.name)),e.setAttribute("Enabled","1"),e.setAttribute("Transparent","1"),e.setAttribute("Locked","0"),e.setAttribute("ListenerHeight","1.7"),e.setAttribute("Color","4294967295"),e.setAttribute("PrintColor","4294945280"),e.setAttribute("ParentVenueObjectId","0"),e.setAttribute("OrderIndex","4"),this.zeroOrigRotScale(e),e}zeroOrigRotScale(t){let e=this.outputDoc.createElement("Origin");e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("z",0),t.appendChild(e),e=this.outputDoc.createElement("Rotation"),e.setAttribute("x",0),e.setAttribute("y",0),e.setAttribute("z",0),t.appendChild(e),e=this.outputDoc.createElement("Scaling"),e.setAttribute("x","1"),e.setAttribute("y","1"),e.setAttribute("z","1"),t.appendChild(e)}getUniqueName(t){(t==""||t==null)&&(t="element");function e(r,s){return r.filter(a=>a.includes(s))}let i=e(this.nameList,t);return this.nameList.push(t),i==0?t:t+"#"+i.length}}const Vv=/^[og]\s*(.+)?/,Wv=/^mtllib /,Xv=/^usemtl /,qv=/^usemap /,Nc=/\s+/,Oc=new C,Da=new C,zc=new C,Bc=new C,Ve=new C,_s=new Lt;function Zv(){const n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const l={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){const r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseNormalIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/3)*3},parseUVIndex:function(t,e){const i=parseInt(t,10);return(i>=0?i-1:i+e/2)*2},addVertex:function(t,e,i){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,i){const r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(t,e,i){const r=this.vertices,s=this.object.geometry.normals;Oc.fromArray(r,t),Da.fromArray(r,e),zc.fromArray(r,i),Ve.subVectors(zc,Da),Bc.subVectors(Oc,Da),Ve.cross(Bc),Ve.normalize(),s.push(Ve.x,Ve.y,Ve.z),s.push(Ve.x,Ve.y,Ve.z),s.push(Ve.x,Ve.y,Ve.z)},addColor:function(t,e,i){const r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(t,e,i){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,i,r,s,a,o,h,l){const c=this.vertices.length;let d=this.parseVertexIndex(t,c),u=this.parseVertexIndex(e,c),p=this.parseVertexIndex(i,c);if(this.addVertex(d,u,p),this.addColor(d,u,p),o!==void 0&&o!==""){const _=this.normals.length;d=this.parseNormalIndex(o,_),u=this.parseNormalIndex(h,_),p=this.parseNormalIndex(l,_),this.addNormal(d,u,p)}else this.addFaceNormal(d,u,p);if(r!==void 0&&r!==""){const _=this.uvs.length;d=this.parseUVIndex(r,_),u=this.parseUVIndex(s,_),p=this.parseUVIndex(a,_),this.addUV(d,u,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let i=0,r=t.length;i<r;i++){const s=this.parseVertexIndex(t[i],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const i=this.vertices.length,r=this.uvs.length;for(let s=0,a=t.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(t[s],i));for(let s=0,a=e.length;s<a;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return n.startObject("",!1),n}class Yv extends Us{constructor(t){super(t),this.materials=null}load(t,e,i,r){const s=this,a=new ro(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(h){r?r(h):console.error(h),s.manager.itemError(t)}},i,r)}setMaterials(t){return this.materials=t,this}parse(t){const e=new Zv;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const i=t.split(`
`);let r=[];for(let o=0,h=i.length;o<h;o++){const l=i[o].trimStart();if(l.length===0)continue;const c=l.charAt(0);if(c!=="#")if(c==="v"){const d=l.split(Nc);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(_s.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),e.colors.push(_s.r,_s.g,_s.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(c==="f"){const u=l.slice(1).trim().split(Nc),p=[];for(let g=0,m=u.length;g<m;g++){const f=u[g];if(f.length>0){const E=f.split("/");p.push(E)}}const _=p[0];for(let g=1,m=p.length-1;g<m;g++){const f=p[g],E=p[g+1];e.addFace(_[0],f[0],E[0],_[1],f[1],E[1],_[2],f[2],E[2])}}else if(c==="l"){const d=l.substring(1).trim().split(" ");let u=[];const p=[];if(l.indexOf("/")===-1)u=d;else for(let _=0,g=d.length;_<g;_++){const m=d[_].split("/");m[0]!==""&&u.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(u,p)}else if(c==="p"){const u=l.slice(1).trim().split(" ");e.addPointGeometry(u)}else if((r=Vv.exec(l))!==null){const d=(" "+r[0].slice(1).trim()).slice(1);e.startObject(d)}else if(Xv.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(Wv.test(l))e.materialLibraries.push(l.substring(7).trim());else if(qv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(c==="s"){if(r=l.split(" "),r.length>1){const u=r[1].trim().toLowerCase();e.object.smooth=u!=="0"&&u!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();const s=new Hn;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,h=e.objects.length;o<h;o++){const l=e.objects[o],c=l.geometry,d=l.materials,u=c.type==="Line",p=c.type==="Points";let _=!1;if(c.vertices.length===0)continue;const g=new jt;g.setAttribute("position",new ae(c.vertices,3)),c.normals.length>0&&g.setAttribute("normal",new ae(c.normals,3)),c.colors.length>0&&(_=!0,g.setAttribute("color",new ae(c.colors,3))),c.hasUVIndices===!0&&g.setAttribute("uv",new ae(c.uvs,2));const m=[];for(let E=0,x=d.length;E<x;E++){const y=d[E],S=y.name+"_"+y.smooth+"_"+_;let M=e.materials[S];if(this.materials!==null){if(M=this.materials.create(y.name),u&&M&&!(M instanceof Ln)){const R=new Ln;cn.prototype.copy.call(R,M),R.color.copy(M.color),M=R}else if(p&&M&&!(M instanceof gr)){const R=new gr({size:10,sizeAttenuation:!1});cn.prototype.copy.call(R,M),R.color.copy(M.color),R.map=M.map,M=R}}M===void 0&&(u?M=new Ln:p?M=new gr({size:1,sizeAttenuation:!1}):M=new yg,M.name=y.name,M.flatShading=!y.smooth,M.vertexColors=_,e.materials[S]=M),m.push(M)}let f;if(m.length>1){for(let E=0,x=d.length;E<x;E++){const y=d[E];g.addGroup(y.groupStart,y.groupCount,E)}u?f=new Pr(g,m):p?f=new va(g,m):f=new xe(g,m)}else u?f=new Pr(g,m[0]):p?f=new va(g,m[0]):f=new xe(g,m[0]);f.name=l.name,s.add(f)}else if(e.vertices.length>0){const o=new gr({size:1,sizeAttenuation:!1}),h=new jt;h.setAttribute("position",new ae(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(h.setAttribute("color",new ae(e.colors,3)),o.vertexColors=!0);const l=new va(h,o);s.add(l)}return s}}document.getElementById("drop");const De=new Mg;document.body.addEventListener("dragover",n=>{n.stopPropagation(),n.preventDefault(),n.dataTransfer.dropEffect="copy"});document.getElementById("exportSV").addEventListener("click",function(){const t=new kv().parse(De);let e="Convertifer3d";var i=new Blob([t],{type:"text/plain;charset=utf-8;"});so(i,e+".txt")});document.getElementById("file_upload").addEventListener("change",n=>{tu(n,n.target.files)});document.getElementById("exportOBJ").addEventListener("click",function(){const t=new Gv().parse(De);let e="Convertifer3d";var i=new Blob([t],{type:"text/plain;charset=utf-8;"});so(i,e+".obj")});document.getElementById("exportDBACV").addEventListener("click",function(){const t=new Hv().parse(De);let e="Convertifer3d";var i=new Blob([t],{type:"text/plain;charset=utf-8;"});so(i,e+".dbacv")});document.body.addEventListener("drop",n=>{tu(n)});function tu(n,t=n.dataTransfer.files){n.stopPropagation(),n.preventDefault();let e=t[0].name.split(".")[1];const i=new FileReader;var r;switch(i.addEventListener("load",s=>{jv(s.target.result,r)}),e){case"dbacv":i.readAsDataURL(t[0]),r=new Dg;break;case"fc3":case"fc2":i.readAsDataURL(t[0]),r=new Fv;break;case"obj":i.readAsDataURL(t[0]),r=new Yv;break}}function jv(n,t){const e=new qe(75,window.innerWidth/window.innerHeight,.1,1e3);Ha.enabled=!0;const i=new uh({antialias:!0});i.setSize(window.innerWidth,window.innerHeight),document.getElementById("drop").style.display="none",document.body.appendChild(i.domElement);const r=new Fg(e,i.domElement,De);r.addEventListener("change",function(){e.up=new C(0,0,1),i.render(De,e)}),De.clear(),t.load(n,function(c){let d=[];De.add(c),De.traverse(function(u){u.isMesh&&(u.material=new bg({side:ge,color:39168}),d.push(u.geometry))});for(let u=0;u<d.length;u++){const p=new Eg(d[u]),_=new Pr(p);_.material.depthTest=!0,_.material.opacity=1,_.material.transparent=!1,De.add(_)}},function(c){console.log(c.loaded/c.total*100+"% loaded")},function(c){console.log("kablooie: "+c)}),e.position.set(-30,-30,30),e.lookAt(0,0,0),e.up=new C(0,0,1),r.update();const s=new fh,a=new Bt,o=new Lg(5);De.add(o);const h=new Cg(4210752);De.add(h);function l(){s.setFromCamera(a,e);const c=s.intersectObjects(De.children);for(let d=0;d<c.length;d++);requestAnimationFrame(l),r.update(),i.render(De,e)}i.render(De,e),l()}
