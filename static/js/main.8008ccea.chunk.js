(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={backdrop:"Modal_backdrop__2u-6V",content:"Modal_content__3YYct",closeIcon:"Modal_closeIcon__1OM8F"}},17:function(e,t,a){e.exports={item:"ImageGalleryItem_item__1I6cM",image:"ImageGalleryItem_image__fgvc3"}},20:function(e,t,a){e.exports={container:"Container_container__CP-wE"}},22:function(e,t,a){e.exports={btn:"Button_btn__1K7KT"}},25:function(e,t,a){e.exports={image:"ImageGalleryView_image__2NpP0"}},27:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__2apN4"}},33:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(1),c=a.n(r),i=a(3),s=a.n(i),o=(a(33),a(4)),l=a(5),u=a(7),h=a(6),d=a(8),g=(a(34),a(20)),p=a.n(g);function m(e){var t=e.children;return Object(n.jsx)("div",{className:p.a.container,children:t})}var b=a(21),f=a(0),j=a(9),v=a.n(j),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleInput=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault();var t=n.state.value.toLowerCase().trim();if(""===t)return d.b.error("Please enter a query"),void n.btn.current.blur();n.props.getSearchQuery(t),n.setState({value:""}),n.btn.current.blur()},n.btn=c.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:v.a.searchbar,children:Object(n.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:v.a.btn,ref:this.btn,children:Object(n.jsx)(f.b.Provider,{value:{size:"16px"},children:Object(n.jsx)(b.a,{})})}),Object(n.jsx)("input",{className:v.a.input,type:"text",value:this.state.value,placeholder:"Search images and photos",onChange:this.handleInput})]})})}}]),a}(r.Component),O=a(22),I=a.n(O);var x=function(e){var t=e.updateSearchPage;return Object(n.jsx)("button",{className:I.a.btn,onClick:t,children:"Load more"})},S=a(23),_=a(18),w=a(15),M=a(24),k=a.n(M),P=a(12),C=a.n(P),N=a(25),A=a.n(N),B=a(10),Q=a.n(B),L=a(16),E="18962627-3cde470dd8252503102b1f7f8",R="https://pixabay.com/api/";function F(){return(F=Object(L.a)(Q.a.mark((function e(t,a){var n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(R,"?image_type=photo&orientation=horizontal&q=").concat(t,"&page=").concat(a,"&per_page=12&key=").concat(E),e.abrupt("return",G(n).then((function(e){return e})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return q.apply(this,arguments)}function q(){return(q=Object(L.a)(Q.a.mark((function e(t){var a,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T={fetchImages:function(e,t){return F.apply(this,arguments)}},U=a.p+"static/media/initialScreenPlaceholder.7edde63a.jpg",z=a.p+"static/media/errorPlaceholder.c80120ff.jpg",D=a(26),H=a(13),J=a.n(H),K=document.querySelector("#modal-root"),V=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleModalClosureOnEsc=function(t){"Escape"===t.code&&e.props.toggleModal()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.toggleModal()},e.handleBtnClick=function(){e.props.toggleModal()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleModalClosureOnEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleModalClosureOnEsc)}},{key:"render",value:function(){return Object(i.createPortal)(Object(n.jsx)("div",{className:J.a.backdrop,onClick:this.handleBackdropClick,children:Object(n.jsxs)("div",{className:J.a.content,children:[Object(n.jsx)("button",{className:J.a.closeIcon,onClick:this.handleBtnClick,children:Object(n.jsx)(f.b.Provider,{value:{size:"36px"},children:Object(n.jsx)(D.a,{})})}),this.props.children]})}),K)}}]),a}(r.Component),Y=a(27),W=a.n(Y),X=a(17),Z=a.n(X);var $=function(e){var t=e.image,a=e.showBigImageInModal;return Object(n.jsx)("li",{className:Z.a.item,children:Object(n.jsx)(C.a,{src:t.webformatURL,placeholder:t.previewURL,children:function(e,r){return Object(n.jsx)("img",{style:{opacity:r?.5:1},src:e,alt:t.tags,"data-image":t.largeImageURL,className:Z.a.image,onClick:a})}})})};var ee=function(e){var t=e.images,a=e.showBigImageInModal;return Object(n.jsx)("ul",{className:W.a.gallery,children:t&&t.map((function(e){return Object(n.jsx)($,{image:e,showBigImageInModal:a},e.id)}))})};function te(){var e=Object(S.a)(["\n            margin-top: 80px;\n          "]);return te=function(){return e},e}var ae="idle",ne="pending",re="resolved",ce="rejected",ie=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:null,totalSearchResults:null,error:null,status:ae,modalIsOpen:!1,imageInModal:"",activeImage:""},e.updateImageAvialability=function(){if(e.state.images){var t=e.state.totalSearchResults>e.state.images.length;e.props.updateImageAvialability(t)}else e.props.updateImageAvialability(!1)},e.renderNewSearchQuery=function(t,a){e.props.resetSearchPage(),e.setState({images:null,status:ne}),e.props.updateImageAvialability(!1),T.fetchImages(t,a).then((function(a){return console.log(a),0===a.totalHits?(d.b.error("No images for ".concat(t,". Please try another query.")),void e.setState({status:ce})):0===a.hits.length?(d.b.error("Oops! Pixabay failed us and forgot to send images. Please refresh page & try again."),void e.setState({status:ce})):void e.setState({images:a.hits,totalSearchResults:a.totalHits,status:re})})).catch((function(t){return e.setState({error:t,status:ce})})).finally((function(t){e.updateImageAvialability()}))},e.renderMorePages=function(t,a){e.props.updateImageAvialability(!1),T.fetchImages(t,a).then((function(t){e.setState((function(e){return{images:[].concat(Object(_.a)(e.images),Object(_.a)(t.hits))}}))})).catch((function(t){return e.setState({error:t,status:ce})})).finally((function(t){window.scrollTo({top:document.documentElement.scrollHeight-1300,behavior:"smooth"}),e.updateImageAvialability()}))},e.toggleModal=function(){e.setState((function(e){return{modalIsOpen:!e.modalIsOpen,imageInModal:""}}))},e.showBigImageInModal=function(t){e.toggleModal(),e.setState((function(e){return{imageInModal:e.imageInModal?"":t.target.dataset.image,activeImage:e.activeImage?"":t.target.src}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){var t=e.searchQuery,a=this.props.searchQuery,n=e.page,r=this.props.page;t!==a&&this.renderNewSearchQuery(a,r),n!==r&&n<r&&this.renderMorePages(a,r)}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.modalIsOpen,r=e.imageInModal,c=e.activeImage,i=e.images;return t===ae?Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:U,alt:"please enter a query"})}):t===ne?Object(n.jsx)(k.a,{css:Object(w.css)(te()),size:250,color:"orange",loading:!0}):t===ce?Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:z,alt:"error"})}):t===re?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ee,{images:i,showBigImageInModal:this.showBigImageInModal}),a&&Object(n.jsx)(V,{toggleModal:this.toggleModal,children:Object(n.jsx)(C.a,{src:r,placeholder:c,children:function(e,t){return Object(n.jsx)("img",{style:{opacity:t?.5:1},src:e,alt:"",className:A.a.image})}})})]}):void 0}}]),a}(r.Component),se=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",searchPage:1,moreImagesAvailable:!1},e.getSearchQuery=function(t){e.setState({searchQuery:t})},e.updateSearchPage=function(){e.setState((function(e){return{searchPage:e.searchPage+1}}))},e.resetSearchPage=function(){e.setState({searchPage:1})},e.updateImageAvialability=function(t){e.setState({moreImagesAvailable:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.searchPage,r=e.moreImagesAvailable;return Object(n.jsxs)(m,{children:[Object(n.jsx)(y,{getSearchQuery:this.getSearchQuery}),Object(n.jsx)(ie,{searchQuery:t,page:a,resetSearchPage:this.resetSearchPage,resetSearchQuery:this.resetSearchQuery,updateImageAvialability:this.updateImageAvialability}),r&&Object(n.jsx)(x,{updateSearchPage:this.updateSearchPage}),Object(n.jsx)(d.a,{autoClose:3e3})]})}}]),a}(r.Component),oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(se,{})}),document.getElementById("root")),oe()},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__21A6G",form:"Searchbar_form__2w9_J",input:"Searchbar_input__1SBLO",btn:"Searchbar_btn__1Gn4t","react-icons":"Searchbar_react-icons__3I4Xk"}}},[[43,1,2]]]);
//# sourceMappingURL=main.8008ccea.chunk.js.map