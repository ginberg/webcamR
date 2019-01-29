!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=window.React},function(e,t,n){e.exports=n(6)()},function(e,t){e.exports=window.reactR},function(e,t,n){(function(e){var r,o,i,a;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=c(i),u=c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}var d=u.default.oneOfType([u.default.string,u.default.arrayOf(u.default.string),u.default.shape({exact:u.default.oneOfType([u.default.string,u.default.arrayOf(u.default.string)])}),u.default.shape({ideal:u.default.oneOfType([u.default.string,u.default.arrayOf(u.default.string)])})]),f=u.default.oneOfType([u.default.shape({exact:u.default.bool}),u.default.shape({ideal:u.default.bool})]),l=u.default.oneOfType([u.default.number,u.default.shape({exact:u.default.number,ideal:u.default.number,min:u.default.number,max:u.default.number})]),p=l,h=u.default.shape({deviceId:d,groupId:d,autoGainControl:f,channelCount:l,latency:p,noiseSuppression:f,sampleRate:l,sampleSize:l,volume:p}),m=u.default.shape({deviceId:d,groupId:d,aspectRatio:p,facingMode:d,frameRate:p,height:l,width:l}),y=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==s(t)&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={hasUserMedia:!1},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+s(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"componentDidMount",value:function(){(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia)&&(t.mountedInstances.push(this),this.state.hasUserMedia||t.userMediaRequested||this.requestUserMedia())}},{key:"componentWillUpdate",value:function(e){JSON.stringify(e.audioConstraints)===JSON.stringify(this.props.audioConstraints)&&JSON.stringify(e.videoConstraints)===JSON.stringify(this.props.videoConstraints)||this.requestUserMedia()}},{key:"componentWillUnmount",value:function(){var e=t.mountedInstances.indexOf(this);t.mountedInstances.splice(e,1),t.userMediaRequested=!1,0===t.mountedInstances.length&&this.state.hasUserMedia&&(this.stream.getVideoTracks&&this.stream.getAudioTracks?(this.stream.getVideoTracks().map(function(e){return e.stop()}),this.stream.getAudioTracks().map(function(e){return e.stop()})):this.stream.stop(),window.URL.revokeObjectURL(this.state.src))}},{key:"getScreenshot",value:function(){if(!this.state.hasUserMedia)return null;var e=this.getCanvas();return e&&e.toDataURL(this.props.screenshotFormat,this.props.screenshotQuality)}},{key:"getCanvas",value:function(){if(!this.state.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var e=document.createElement("canvas"),t=this.video.videoWidth/this.video.videoHeight,n=this.props.minScreenshotWidth||this.video.clientWidth,r=n/t;this.props.minScreenshotHeight&&r<this.props.minScreenshotHeight&&(n=(r=this.props.minScreenshotHeight)*t),e.width=n,e.height=r,this.canvas=e,this.ctx=e.getContext("2d")}var o=this.ctx,i=this.canvas;return o.imageSmoothingEnabled=this.props.imageSmoothing,o.drawImage(this.video,0,0,i.width,i.height),i}},{key:"requestUserMedia",value:function(){var e=this;navigator.getUserMedia=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var n=function(n,r){var o={video:r||!0};e.props.audio&&(o.audio=n||!0),navigator.mediaDevices.getUserMedia(o).then(function(e){t.mountedInstances.forEach(function(t){return t.handleUserMedia(null,e)})}).catch(function(e){t.mountedInstances.forEach(function(t){return t.handleUserMedia(e)})})};if("mediaDevices"in navigator)n(this.props.audioConstraints,this.props.videoConstraints);else{var o=function(e){return{optional:[{sourceId:e}]}},i=function(e){var t=(e||{}).deviceId;return"string"==typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"===(void 0===t?"undefined":r(t))&&t.ideal?t.ideal:null};MediaStreamTrack.getSources(function(t){var r=null,a=null;t.forEach(function(e){"audio"===e.kind?r=e.id:"video"===e.kind&&(a=e.id)});var s=i(e.props.audioConstraints);s&&(r=s);var u=i(e.props.videoConstraints);u&&(a=u),n(o(r),o(a))})}t.userMediaRequested=!0}},{key:"handleUserMedia",value:function(e,t){if(e)return this.setState({hasUserMedia:!1}),void this.props.onUserMediaError(e);this.stream=t;try{this.video.srcObject=t,this.setState({hasUserMedia:!0})}catch(e){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}this.props.onUserMedia()}},{key:"render",value:function(){var e=this;return a.default.createElement("video",{autoPlay:!0,width:this.props.width,height:this.props.height,src:this.state.src,muted:this.props.audio,className:this.props.className,playsInline:!0,style:this.props.style,ref:function(t){e.video=t}})}}]),t}();y.defaultProps={audio:!0,className:"",height:480,imageSmoothing:!0,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",width:640,screenshotQuality:.92},y.propTypes={audio:u.default.bool,onUserMedia:u.default.func,onUserMediaError:u.default.func,height:u.default.oneOfType([u.default.number,u.default.string]),width:u.default.oneOfType([u.default.number,u.default.string]),screenshotFormat:u.default.oneOf(["image/webp","image/png","image/jpeg"]),style:u.default.object,className:u.default.string,screenshotQuality:u.default.number,minScreenshotWidth:u.default.number,minScreenshotHeight:u.default.number,audioConstraints:h,videoConstraints:m,imageSmoothing:u.default.bool},y.mountedInstances=[],y.userMediaRequested=!1,t.default=y,e.exports=t.default}])},"object"===s(t)&&"object"===s(e)?e.exports=a(n(1),n(0)):(o=[n(1),n(0)],void 0===(i="function"==typeof(r=a)?r.apply(t,o):r)||(e.exports=i))}).call(this,n(5)(e))},function(e,t,n){"use strict";n.r(t);var r=n(2),o=(n(0),n(3)),i=n.n(o);Object(r.reactWidget)("webcamR","output",{Webcam:i.a},{})},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";var r=n(7);function o(){}e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);
//# sourceMappingURL=webcamR.js.map