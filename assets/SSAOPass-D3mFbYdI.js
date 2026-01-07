import{M as we,a as Ee,a4 as ze,a5 as Ie,a6 as Oe,$ as Re,q as be,a1 as ie,a7 as F,a2 as se,a8 as Le,a9 as Ne,aa as ke,ab as _e,ac as qe,C as Ke,ad as We,ae as Ge,V as Qe,af as Xe,ag as Ye,ah as Be,x as je,b as He}from"./three-D29c9MRG.js";import{P as $e,F as Je}from"./Pass-DIKeR8G_.js";import{C as Se}from"./CopyShader-B0dke3by.js";class et{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,a){return e[0]*t+e[1]*i+e[2]*a}dot4(e,t,i,a,s){return e[0]*t+e[1]*i+e[2]*a+e[3]*s}noise(e,t){let i,a,s;const n=.5*(Math.sqrt(3)-1),r=(e+t)*n,N=Math.floor(e+r),o=Math.floor(t+r),T=(3-Math.sqrt(3))/6,S=(N+o)*T,b=N-S,f=o-S,g=e-b,P=t-f;let C,w;g>P?(C=1,w=0):(C=0,w=1);const p=g-C+T,d=P-w+T,m=g-1+2*T,M=P-1+2*T,x=N&255,D=o&255,y=this.perm[x+this.perm[D]]%12,l=this.perm[x+C+this.perm[D+w]]%12,c=this.perm[x+1+this.perm[D+1]]%12;let h=.5-g*g-P*P;h<0?i=0:(h*=h,i=h*h*this.dot(this.grad3[y],g,P));let u=.5-p*p-d*d;u<0?a=0:(u*=u,a=u*u*this.dot(this.grad3[l],p,d));let R=.5-m*m-M*M;return R<0?s=0:(R*=R,s=R*R*this.dot(this.grad3[c],m,M)),70*(i+a+s)}noise3d(e,t,i){let a,s,n,r;const o=(e+t+i)*.3333333333333333,T=Math.floor(e+o),S=Math.floor(t+o),b=Math.floor(i+o),f=1/6,g=(T+S+b)*f,P=T-g,C=S-g,w=b-g,p=e-P,d=t-C,m=i-w;let M,x,D,y,l,c;p>=d?d>=m?(M=1,x=0,D=0,y=1,l=1,c=0):p>=m?(M=1,x=0,D=0,y=1,l=0,c=1):(M=0,x=0,D=1,y=1,l=0,c=1):d<m?(M=0,x=0,D=1,y=0,l=1,c=1):p<m?(M=0,x=1,D=0,y=0,l=1,c=1):(M=0,x=1,D=0,y=1,l=1,c=0);const h=p-M+f,u=d-x+f,R=m-D+f,I=p-y+2*f,O=d-l+2*f,L=m-c+2*f,_=p-1+3*f,q=d-1+3*f,v=m-1+3*f,V=T&255,A=S&255,z=b&255,J=this.perm[V+this.perm[A+this.perm[z]]]%12,ee=this.perm[V+M+this.perm[A+x+this.perm[z+D]]]%12,te=this.perm[V+y+this.perm[A+l+this.perm[z+c]]]%12,ae=this.perm[V+1+this.perm[A+1+this.perm[z+1]]]%12;let k=.6-p*p-d*d-m*m;k<0?a=0:(k*=k,a=k*k*this.dot3(this.grad3[J],p,d,m));let j=.6-h*h-u*u-R*R;j<0?s=0:(j*=j,s=j*j*this.dot3(this.grad3[ee],h,u,R));let E=.6-I*I-O*O-L*L;E<0?n=0:(E*=E,n=E*E*this.dot3(this.grad3[te],I,O,L));let U=.6-_*_-q*q-v*v;return U<0?r=0:(U*=U,r=U*U*this.dot3(this.grad3[ae],_,q,v)),32*(a+s+n+r)}noise4d(e,t,i,a){const s=this.grad4,n=this.simplex,r=this.perm,N=(Math.sqrt(5)-1)/4,o=(5-Math.sqrt(5))/20;let T,S,b,f,g;const P=(e+t+i+a)*N,C=Math.floor(e+P),w=Math.floor(t+P),p=Math.floor(i+P),d=Math.floor(a+P),m=(C+w+p+d)*o,M=C-m,x=w-m,D=p-m,y=d-m,l=e-M,c=t-x,h=i-D,u=a-y,R=l>c?32:0,I=l>h?16:0,O=c>h?8:0,L=l>u?4:0,_=c>u?2:0,q=h>u?1:0,v=R+I+O+L+_+q,V=n[v][0]>=3?1:0,A=n[v][1]>=3?1:0,z=n[v][2]>=3?1:0,J=n[v][3]>=3?1:0,ee=n[v][0]>=2?1:0,te=n[v][1]>=2?1:0,ae=n[v][2]>=2?1:0,k=n[v][3]>=2?1:0,j=n[v][0]>=1?1:0,E=n[v][1]>=1?1:0,U=n[v][2]>=1?1:0,Ce=n[v][3]>=1?1:0,le=l-V+o,ce=c-A+o,he=h-z+o,ue=u-J+o,me=l-ee+2*o,pe=c-te+2*o,de=h-ae+2*o,fe=u-k+2*o,ve=l-j+3*o,ge=c-E+3*o,Me=h-U+3*o,xe=u-Ce+3*o,De=l-1+4*o,Te=c-1+4*o,Pe=h-1+4*o,ye=u-1+4*o,K=C&255,W=w&255,G=p&255,Q=d&255,Ue=r[K+r[W+r[G+r[Q]]]]%32,Fe=r[K+V+r[W+A+r[G+z+r[Q+J]]]]%32,Ze=r[K+ee+r[W+te+r[G+ae+r[Q+k]]]]%32,Ve=r[K+j+r[W+E+r[G+U+r[Q+Ce]]]]%32,Ae=r[K+1+r[W+1+r[G+1+r[Q+1]]]]%32;let X=.6-l*l-c*c-h*h-u*u;X<0?T=0:(X*=X,T=X*X*this.dot4(s[Ue],l,c,h,u));let Y=.6-le*le-ce*ce-he*he-ue*ue;Y<0?S=0:(Y*=Y,S=Y*Y*this.dot4(s[Fe],le,ce,he,ue));let B=.6-me*me-pe*pe-de*de-fe*fe;B<0?b=0:(B*=B,b=B*B*this.dot4(s[Ze],me,pe,de,fe));let H=.6-ve*ve-ge*ge-Me*Me-xe*xe;H<0?f=0:(H*=H,f=H*H*this.dot4(s[Ve],ve,ge,Me,xe));let $=.6-De*De-Te*Te-Pe*Pe-ye*ye;return $<0?g=0:($*=$,g=$*$*this.dot4(s[Ae],De,Te,Pe,ye)),27*(T+S+b+f+g)}}const re={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Ee},cameraProjectionMatrix:{value:new we},cameraInverseProjectionMatrix:{value:new we},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );

			vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
			vec3 viewNormal = getViewNormal( vUv );

			vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
			vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

			// compute matrix used to reorient a kernel vector

			vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
			vec3 bitangent = cross( viewNormal, tangent );
			mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

		 float occlusion = 0.0;

		 for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

				vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
				vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

				vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
				samplePointNDC /= samplePointNDC.w;

				vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

				float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
				float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
				float delta = sampleDepth - realDepth;

				if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

					occlusion += 1.0;

				}

			}

			occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

			gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

		}`},oe={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ne={uniforms:{tDiffuse:{value:null},resolution:{value:new Ee}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class Z extends $e{constructor(e,t,i,a){super(),this.width=i!==void 0?i:512,this.height=a!==void 0?a:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernelSize=32,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(),this.generateRandomKernelRotations();const s=new ze;s.format=Ie,s.type=Oe,this.beautyRenderTarget=new Re(this.width,this.height),this.normalRenderTarget=new Re(this.width,this.height,{minFilter:be,magFilter:be,depthTexture:s}),this.ssaoRenderTarget=new Re(this.width,this.height),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new ie({defines:Object.assign({},re.defines),uniforms:se.clone(re.uniforms),vertexShader:re.vertexShader,fragmentShader:re.fragmentShader,blending:F}),this.ssaoMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Le,this.normalMaterial.blending=F,this.blurMaterial=new ie({defines:Object.assign({},ne.defines),uniforms:se.clone(ne.uniforms),vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ie({defines:Object.assign({},oe.defines),uniforms:se.clone(oe.uniforms),vertexShader:oe.vertexShader,fragmentShader:oe.fragmentShader,blending:F}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ie({uniforms:se.clone(Se.uniforms),vertexShader:Se.vertexShader,fragmentShader:Se.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:qe,blendDst:ke,blendEquation:Ne,blendSrcAlpha:_e,blendDstAlpha:ke,blendEquationAlpha:Ne}),this.fsQuad=new Je(null),this.originalClearColor=new Ke}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.capabilities.isWebGL2===!1&&(this.noiseTexture.format=We),e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case Z.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=F,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Z.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=F,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Z.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=F,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Z.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Z.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=F,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Z.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=F,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Ge,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,i,a,s){e.getClearColor(this.originalClearColor);const n=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,a!=null&&(e.setClearColor(a),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(n)}renderOverride(e,t,i,a,s){e.getClearColor(this.originalClearColor);const n=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,a=t.clearColor||a,s=t.clearAlpha||s,a!=null&&(e.setClearColor(a),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=r,e.setClearColor(this.originalClearColor),e.setClearAlpha(n)}setSize(e,t){this.width=e,this.height=t,this.beautyRenderTarget.setSize(e,t),this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(){const e=this.kernelSize,t=this.kernel;for(let i=0;i<e;i++){const a=new Qe;a.x=Math.random()*2-1,a.y=Math.random()*2-1,a.z=Math.random(),a.normalize();let s=i/e;s=He.lerp(.1,1,s*s),a.multiplyScalar(s),t.push(a)}}generateRandomKernelRotations(){const i=new et,a=16,s=new Float32Array(a);for(let n=0;n<a;n++){const r=Math.random()*2-1,N=Math.random()*2-1,o=0;s[n]=i.noise3d(r,N,o)}this.noiseTexture=new Xe(s,4,4,Ye,Be),this.noiseTexture.wrapS=je,this.noiseTexture.wrapT=je,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){t.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(i){const a=t.get(i);i.visible=a}),t.clear()}}Z.OUTPUT={Default:0,SSAO:1,Blur:2,Beauty:3,Depth:4,Normal:5};export{Z as SSAOPass};
