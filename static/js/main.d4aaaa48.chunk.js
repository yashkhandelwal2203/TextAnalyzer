(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(6),c=t.n(o),r=(t(16),t(3)),s=(t(18),t(4));function i(e){var a=Object(l.useState)("Dark Mode Disabled"),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode,"  bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(s.b,{className:"navbar-brand",to:"\\"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},e.hometext)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(s.b,{className:"nav-link",to:"/about"},"About us"))),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Search"))),n.a.createElement("div",{className:"form-check form-switch mx-3"},n.a.createElement("input",{className:"form-check-input",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",onClick:function(){"dark"===e.mode?c("Dark Mode Disabled"):"light"===e.mode&&c("Dark Mode Enabled")}},o))),n.a.createElement("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end"},n.a.createElement("button",{className:"btn btn-primary ",type:"button"},"blue"),n.a.createElement("button",{className:"btn btn-success",type:"button"},"green"),n.a.createElement("button",{className:"btn btn-danger",type:"button"},"red"),n.a.createElement("button",{className:"btn btn-warning me-md-2",type:"button"},"yellow"))))}function m(e){var a=Object(l.useState)("Write something"),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){c(e.target.value)},id:"exampleFormControlTextarea1",style:{backgroundColor:"light"===e.mode?"white":"#8f90a1",color:"light"===e.mode?"black":"white",fontSize:"25px"},rows:"10"})),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){console.log("uppercase was clicked");var a=o.toUpperCase();c(a),e.showAlert("Converted To Uppercase","success")}},"Convert To Uppercase"),n.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){console.log("uppercase was clicked");var a=o.toLowerCase();c(a),e.showAlert("Converted To Lowercase","success")}},"Convert To LowerCase"),n.a.createElement("button",{className:"btn btn-primary mx",onClick:function(){var a=prompt("Enter The Word To Be Replaced : "),t=new RegExp(a,"g"),l=prompt("Enter The replaced word : "),n=o.replace(t,l);c(n),e.showAlert("word successfully replaced","success")}},"Replace All Occurences"),n.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){c(""),e.showAlert("All text cleared ","success")}},"clear the console"),n.a.createElement("button",{className:"btn btn-primary mx-",onClick:function(){var a=document.getElementById("exampleFormControlTextarea1");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Copied To Clipboard","success")}},"copy text"),n.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){var a=o.split(/[ ]+/);c(a.join(" ")),e.showAlert("extra space removed","success")}},"remove extra space")),n.a.createElement("div",{className:"container my-5",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h1",null,"Your Text Summary "),n.a.createElement("p",null,o.split(" ").length," words and ",o.length," characters and ",o.split(".").length," sentences. and ",o.split("\n").length," paragraphs"),n.a.createElement("p",null,.008*o.split(" ").length," Minutes Read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Enter Something In The The Textbox Above To Preview Here")))}function d(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable dark mode"),s=Object(r.a)(c,2),i=s[0],m=s[1];return n.a.createElement("div",{className:"container",style:t},n.a.createElement("h1",null,"About us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:t},n.a.createElement("div",{className:"accordion-item",style:t},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item",style:t},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item",style:t},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("div",{className:"container"},n.a.createElement("button",{type:"button",onClick:function(){"white"===t.color?(o({color:"black",backgroundColor:"white"}),m("Enable dark mode")):(o({color:"white",backgroundColor:"black",border:"1px solid white"}),m("Enable Light Mode"))},class:"btn btn-primary"},i)))}i.defaultProps={hometext:"Home text",title:"Title Is Here"},m.defaultProps={heading:"This Is My Heading"};var u=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}("success")),": ",e.alert.msg)},h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,null,n.a.createElement(i,{title:"Text Analyzer",mode:t,togglemode:function(){"dark"===t?(o("light"),document.body.style.backgroundColor="white",E("light mode has been enabled","primary")):"light"===t&&(o("dark"),document.body.style.backgroundColor="#2d3063",E("dark mode has been enabled","success"))}}),n.a.createElement(u,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/about",element:n.a.createElement(d,null)}),n.a.createElement(h.a,{exact:!0,path:"/",element:n.a.createElement(m,{showAlert:E,heading:"Enter The Text To Analyze",mode:t})})))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,21)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null))),p()},7:function(e,a,t){e.exports=t(20)}},[[7,3,2]]]);
//# sourceMappingURL=main.d4aaaa48.chunk.js.map