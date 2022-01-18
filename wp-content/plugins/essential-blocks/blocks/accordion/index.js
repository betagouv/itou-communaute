(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};((e,t,n)=>{var o={};n.r(o),n.d(o,{typoPrefix_content:()=>r,typoPrefix_title:()=>a});const a="typTl_",r="typCn_",c="icnZ_",l="acGp_",i="wrpMrg_",s="wrpPad_",d="icnMrg_",b="icnPad_",p="tabMrg_",m="tabPad_",g="conMrg_",y="conPad_",u="WrpBg_",k="icnBg_",v="tabBg_",R="conBg_",$="wrpBdSd_",E="icnBdSd_",f="tabBdSd_",h="conBdSd_",w=({icon:e})=>React.createElement("span",{className:"eb-accordion-icon-wrapper"},React.createElement("span",{className:`${e} eb-accordion-icon`})),{__:S}=wp.i18n,C=[{label:S("Accordion","essential-blocks"),value:"accordion"},{label:S("Toggle","essential-blocks"),value:"toggle"}],T=(S("Material","essential-blocks"),S("Gradient","essential-blocks"),S("Dark","essential-blocks"),S("Royal","essential-blocks"),S("Custom","essential-blocks"),S("Fill","essential-blocks"),S("Gradient","essential-blocks"),S("Image","essential-blocks"),S("Fill","essential-blocks"),S("Gradient","essential-blocks"),S("Border Box","essential-blocks"),S("Padding Box","essential-blocks"),S("Content Box","essential-blocks"),S("Material","essential-blocks"),S("Ghost","essential-blocks"),S("Rounded","essential-blocks"),S("Custom","essential-blocks"),S("Auto","essential-blocks"),S("Cover","essential-blocks"),S("Container","essential-blocks"),S("Initial","essential-blocks"),S("No Repeat","essential-blocks"),S("Repeat","essential-blocks"),S("Repeat X","essential-blocks"),S("Repeat Y","essential-blocks"),S("Space","essential-blocks"),S("Round","essential-blocks"),S("Initial","essential-blocks"),S("Scroll","essential-blocks"),S("Fixed","essential-blocks"),S("Local","essential-blocks"),S("Dashed","essential-blocks"),S("Solid","essential-blocks"),S("Dotted","essential-blocks"),S("Double","essential-blocks"),S("Groove","essential-blocks"),S("Inset","essential-blocks"),S("Outset","essential-blocks"),S("Ridge","essential-blocks"),S("H1","essential-blocks"),S("H2","essential-blocks"),S("H3","essential-blocks"),S("H4","essential-blocks"),S("H5","essential-blocks"),S("H6","essential-blocks"),[{label:S("Left","essential-blocks"),value:"left"},{label:S("Right","essential-blocks"),value:"right"}]),N=(S("Liner","essential-blocks"),S("Ease","essential-blocks"),S("Ease In","essential-blocks"),S("Ease Out","essential-blocks"),S("Ease In Out","essential-blocks"),[{label:S("Left","essential-blocks"),value:"left"},{label:S("Center","essential-blocks"),value:"center"},{label:S("Right","essential-blocks"),value:"right"}]),P=[{label:S("Left","essential-blocks"),value:"left"},{label:S("Center","essential-blocks"),value:"center"},{label:S("Right","essential-blocks"),value:"right"}],{SortableContainer:B,SortableElement:x,SortableHandle:O}=(S("Fill","essential-blocks"),S("Gradient","essential-blocks"),S("None","essential-blocks"),S("Lowercase","essential-blocks"),S("Capitalize","essential-blocks"),S("Uppercase","essential-blocks"),S("Lighter","essential-blocks"),S("Normal","essential-blocks"),S("Bold","essential-blocks"),S("Bolder","essential-blocks"),S("Initial","essential-blocks"),S("Overline","essential-blocks"),S("Line Through","essential-blocks"),S("Underline","essential-blocks"),S("Underline Oveline","essential-blocks"),eb_controls),M={fontSize:14,borderLeft:"1px solid #b4b4cb",lineHeight:"2.5em",flex:2,textAlign:"center",display:"flex",justifyContent:"center"},A=O((()=>React.createElement("span",{className:"drag-handle"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 512 512",version:"1.1",viewBox:"0 0 512 512",xmlSpace:"preserve",style:{height:14}},React.createElement("path",{d:"M512 256L402.6 146.6 402.6 210.3 301 210.3 301 109.4 365.4 109.4 256 0 146.6 109.4 211 109.4 211 210.3 109.4 210.3 109.4 146.6 0 256 109.4 365.4 109.4 300.3 211 300.3 211 402.6 146.6 402.6 256 512 365.4 402.6 301 402.6 301 300.3 402.6 300.3 402.6 365.4z",style:{fill:"#a9a9a9"}}))))),D=({position:e,onDeleteAccordion:t})=>React.createElement("span",{className:"eb-social-delete-icon",style:M,onClick:()=>t(e)},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",enableBackground:"new 0 0 512 512",version:"1.1",viewBox:"0 0 512 512",xmlSpace:"preserve",style:{width:14}},React.createElement("path",{d:"M423.3 86.6H89c-16.8.1-32.2 9.3-40.1 24.1-7.9 14.8-7.1 32.7 2.2 46.8l37.2 55.6V456c0 30.9 25.1 56 56 56h223.9c30.9 0 56-25.1 56-56V213.1l37.2-56c9.1-14 9.8-31.8 1.9-46.5-8.1-14.7-23.4-23.9-40-24zm-198 347c0 13.9-11.3 25.2-25.2 25.2-13.9 0-25.2-11.3-25.2-25.2V220.9c0-13.9 11.3-25.2 25.2-25.2 13.9 0 25.2 11.3 25.2 25.2v212.7zm112 0c0 13.9-11.3 25.2-25.2 25.2-13.9 0-25.2-11.3-25.2-25.2V220.9c0-13.9 11.3-25.2 25.2-25.2 13.9 0 25.2 11.3 25.2 25.2v212.7zM325.8 19.4C309.9 7.1 290.2 0 269.3 0h-26.4c-20.9 0-40.6 7.1-56.5 19.4-11.2 8.7-20.5 20.1-26.9 33.4h193.1c-6.3-13.3-15.6-24.7-26.8-33.4z",style:{fill:"#FF6464"}}))),_=x((({accordion:e,position:t,onDeleteAccordion:n})=>React.createElement("li",{className:"drag-helper"},React.createElement("span",{className:"eb-accordion-sortable-item"},React.createElement("span",{className:"eb-accordion-sortable-title"},(e.title||"").replace(/\<br ?\/?\>/gi," ")),React.createElement(A,null),React.createElement(D,{position:t,onDeleteAccordion:n}))))),I=B((({accordions:e,onDeleteAccordion:t})=>React.createElement("ul",{className:"eb-sortable-accordion-list"},e.map(((e,n)=>React.createElement(_,{key:`item-${n}`,index:n,position:n,accordion:e,onDeleteAccordion:t})))))),L=({accordions:e,onDeleteAccordion:t,onSortEnd:n})=>React.createElement(I,{accordions:e,onDeleteAccordion:t,onSortEnd:n,useDragHandle:!0});var F=Object.defineProperty,j=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&G(e,n,t[n]);if(j)for(var n of j(t))H.call(t,n)&&G(e,n,t[n]);return e};const{generateDimensionsAttributes:U,generateTypographyAttributes:Z,generateBackgroundAttributes:V,generateBorderShadowAttributes:J,generateResponsiveRangeAttributes:W}=eb_controls,X=z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z(z({resOption:{type:"string",default:"Desktop"},blockId:{type:"string"},blockRoot:{type:"string",default:"essential_block"},blockMeta:{type:"object"},accordionType:{type:"string",source:"attribute",selector:".eb-accordion-container",attribute:"data-accordion-type",default:"accordion"},accordions:{type:"array",selector:".eb-accordion-wrapper",source:"query",default:[],query:{title:{type:"string",selector:".eb-accordion-title",source:"html"},content:{type:"string",selector:".eb-accordion-content",source:"html"}}},selectedTab:{type:"string",default:""},expandedTabs:{type:"array",default:[]},displayIcon:{type:"boolean",default:!0},tabIcon:{type:"string",default:"fas fa-angle-right"},expandedIcon:{type:"string",default:"fas fa-angle-down"},transitionDuration:{type:"number",default:.5},contentAlign:{type:"string",default:"left"},titleAlignment:{type:"string",default:"left"},titleColor:{type:"string"},contentColor:{type:"string"},iconColor:{type:"string"},iconPosition:{type:"string",default:"right"},hoverTitleColor:{type:"string"},activeBgColor:{type:"string"},activeTitleColor:{type:"string"}},Z(Object.values(o))),W(c,{noUnits:!0,defaultRange:20})),W(l,{noUnits:!0,defaultRange:15})),V(u,{defaultBgGradient:"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)"})),V(k,{defaultBgGradient:"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",noOverlay:!0,noMainBgi:!0})),V(v,{isBgDefaultGradient:!0,noMainBgi:!0,defaultBgGradient:"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",noOverlay:!0,noMainBgi:!0})),V(R,{noMainBgi:!0,defaultBgGradient:"linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",noOverlay:!0,noMainBgi:!0})),J($)),J(E)),J(f)),J(h)),U(i)),U(s)),U(d)),U(b)),U(p)),U(m,{top:15,bottom:15,left:20,right:20,isLinked:!1})),U(g)),U(y,{top:10,bottom:10,left:15,right:15})),{__:K}=wp.i18n,{InspectorControls:Q}=wp.blockEditor,{useEffect:Y}=wp.element,{select:ee}=wp.data,{PanelBody:te,BaseControl:ne,ButtonGroup:oe,Button:ae,ToggleControl:re,RangeControl:ce,TabPanel:le}=wp.components,{FontIconPicker:ie,faIcons:se,ColorControl:de,TypographyDropdown:be,ResponsiveDimensionsControl:pe,ResponsiveRangeController:me,BorderShadowControl:ge,BackgroundControl:ye,mimmikCssForResBtns:ue,mimmikCssOnPreviewBtnClickWhileBlockSelected:ke}=eb_controls,ve=({attributes:e,setAttributes:t,addAccordion:n,onDeleteAccordion:o,onSortEnd:w})=>{const{resOption:S,accordionType:B,displayIcon:x,transitionDuration:O,accordions:M,tabIcon:A,expandedIcon:D,titleColor:_,contentAlign:I,contentColor:F,iconColor:j,iconPosition:q,titleAlignment:H,hoverTitleColor:G,activeBgColor:z,activeTitleColor:U}=e;Y((()=>{t({resOption:ee("core/edit-post").__experimentalGetPreviewDeviceType()})}),[]),Y((()=>{ue({domObj:document,resOption:S})}),[S]),Y((()=>{const e=ke({domObj:document,select:ee,setAttributes:t});return()=>{e()}}),[]);const Z={setAttributes:t,resOption:S,attributes:e,objAttributes:X};return React.createElement(Q,{key:"controls"},React.createElement("div",{className:"eb-panel-control"},React.createElement(le,{className:"eb-parent-tab-panel",activeClass:"active-tab",tabs:[{name:"general",title:"General",className:"eb-tab general"},{name:"styles",title:"Style",className:"eb-tab styles"},{name:"advance",title:"Advanced",className:"eb-tab advance"}]},(e=>React.createElement("div",{className:"eb-tab-controls"+e.name},"general"===e.name&&React.createElement(React.Fragment,null,React.createElement(te,null,React.createElement(ne,{label:K("Accordion Types","essential-blocks"),id:"eb-accordion-type"},React.createElement(oe,{id:"eb-accordion-type-btgrp"},C.map((e=>React.createElement(ae,{isLarge:!0,isSecondary:B!==e.value,isPrimary:B===e.value,onClick:()=>t({accordionType:e.value})},e.label))))),React.createElement(ne,{id:"eb-accordion-sortable",className:"eb-accordion-sortable-base",label:K("Accordion List","essential-blocks")},React.createElement(L,{accordions:M,onDeleteAccordion:o,onSortEnd:w})),React.createElement("div",{className:"eb-accordion-add-button"},React.createElement(ae,{className:"is-default",label:K("Add Accordion Item","essential-blocks"),icon:"plus-alt",onClick:n},React.createElement("span",{className:"eb-accordion-add-button-label"},"Add Accordion Item"))),React.createElement(ce,{label:K("Toggle Speed","essential-blocks"),value:O,onChange:e=>t({transitionDuration:e}),min:0,max:5,step:.1}),React.createElement(me,{noUnits:!0,baseLabel:K("Accordions Gap","essential-blocks"),controlName:l,resRequiredProps:Z,min:1,max:100,step:1}))),"styles"===e.name&&React.createElement(React.Fragment,null,React.createElement(te,{title:K("Icon","essential-blocks")},React.createElement(re,{label:K("Display Icon","essential-blocks"),checked:x,onChange:()=>t({displayIcon:!x})}),x&&React.createElement(React.Fragment,null,React.createElement(ne,{label:K("Tab Icon","essential-blocks")},React.createElement(ie,{icons:se,value:A,onChange:e=>t({tabIcon:e}),appendTo:"body"})),React.createElement(ne,{label:K("Expanded Icon","essential-blocks")},React.createElement(ie,{icons:se,value:D,onChange:e=>t({expandedIcon:e}),appendTo:"body"})),React.createElement(ne,{label:K("Icon Position","essential-blocks")},React.createElement(oe,{id:"eb-icon-pos-btgrp"},T.map((e=>React.createElement(ae,{isLarge:!0,isSecondary:q!==e.value,isPrimary:q===e.value,onClick:()=>t({iconPosition:e.value})},e.label))))),React.createElement(me,{noUnits:!0,baseLabel:K("Icon Size","essential-blocks"),controlName:c,resRequiredProps:Z,min:1,max:200,step:1}),React.createElement(de,{label:K("Icon Color","essential-blocks"),color:j,onChange:e=>t({iconColor:e})}),React.createElement(te,{title:K("Margin & Padding")},React.createElement(pe,{resRequiredProps:Z,controlName:d,baseLabel:"Margin"}),React.createElement(pe,{resRequiredProps:Z,controlName:b,baseLabel:"Padding"})),React.createElement(te,{title:K("Background ","essential-blocks")},React.createElement(ye,{controlName:k,resRequiredProps:Z,noOverlay:!0,noMainBgi:!0})),React.createElement(te,{title:K("Border & Shadow")},React.createElement(ge,{controlName:E,resRequiredProps:Z})))),React.createElement(te,{title:K("Tab","essential-blocks"),initialOpen:!1},React.createElement(ne,{label:K("Title Align ","essential-blocks"),id:"eb-accoridon-title-align"},React.createElement(oe,null,N.map((e=>React.createElement(ae,{isSecondary:H!==e.value,isPrimary:H===e.value,onClick:()=>t({titleAlignment:e.value})},e.label))))),React.createElement(be,{baseLabel:"Title Typography",typographyPrefixConstant:a,resRequiredProps:Z}),React.createElement(de,{label:K("Title Color","essential-blocks"),color:_,onChange:e=>t({titleColor:e})}),React.createElement(de,{label:K("Title hover Color","essential-blocks"),color:G,onChange:e=>t({hoverTitleColor:e})}),React.createElement(te,{title:K("Margin & Padding")},React.createElement(pe,{resRequiredProps:Z,controlName:p,baseLabel:"Margin"}),React.createElement(pe,{resRequiredProps:Z,controlName:m,baseLabel:"Padding"})),React.createElement(te,{title:K("Background ","essential-blocks")},React.createElement(ye,{controlName:v,resRequiredProps:Z,noMainBgi:!0,noOverlay:!0})),React.createElement(te,{title:K("Expanded Tab Colors","essential-blocks")},React.createElement(de,{label:K("Background Color","essential-blocks"),color:z,onChange:e=>t({activeBgColor:e})}),React.createElement(de,{label:K("Title Color","essential-blocks"),color:U,onChange:e=>t({activeTitleColor:e})})),React.createElement(te,{title:K("Border & Shadow")},React.createElement(ge,{controlName:f,resRequiredProps:Z}))),React.createElement(te,{title:K("Content ","essential-blocks"),initialOpen:!1},React.createElement(ne,{label:K("Align","essential-blocks")},React.createElement(oe,null,P.map((e=>React.createElement(ae,{isLarge:!0,isSecondary:I!==e.value,isPrimary:I===e.value,onClick:()=>t({contentAlign:e.value})},e.label))))),React.createElement(be,{baseLabel:"Content Typography",typographyPrefixConstant:r,resRequiredProps:Z}),React.createElement(de,{label:K("Content Color","essential-blocks"),color:F,onChange:e=>t({contentColor:e})}),React.createElement(te,{title:K("Margin & Padding")},React.createElement(pe,{resRequiredProps:Z,controlName:g,baseLabel:"Margin"}),React.createElement(pe,{resRequiredProps:Z,controlName:y,baseLabel:"Padding"})),React.createElement(te,{title:K("Background ","essential-blocks")},React.createElement(ye,{controlName:R,resRequiredProps:Z,noOverlay:!0,noMainBgi:!0})),React.createElement(te,{title:K("Border & Shadow")},React.createElement(ge,{controlName:h,resRequiredProps:Z})))),"advance"===e.name&&React.createElement(React.Fragment,null,React.createElement(te,{title:K("Margin & Padding")},React.createElement(pe,{resRequiredProps:Z,controlName:i,baseLabel:"Margin"}),React.createElement(pe,{resRequiredProps:Z,controlName:s,baseLabel:"Padding"})),React.createElement(te,{title:K("Background ","essential-blocks"),initialOpen:!1},React.createElement(ye,{controlName:u,resRequiredProps:Z})),React.createElement(te,{title:K("Border & Shadow"),initialOpen:!1},React.createElement(ge,{controlName:$,resRequiredProps:Z}))))))))};var Re=Object.defineProperty,$e=Object.defineProperties,Ee=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,Se=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&Se(e,n,t[n]);if(fe)for(var n of fe(t))we.call(t,n)&&Se(e,n,t[n]);return e};const{__:Te}=wp.i18n,{useEffect:Ne}=wp.element,{RichText:Pe,useBlockProps:Be}=wp.blockEditor,{Button:xe}=wp.components,{select:Oe}=wp.data,{softMinifyCssStrings:Me,generateBackgroundControlStyles:Ae,generateDimensionsControlStyles:De,generateTypographyStyles:_e,generateBorderShadowStyles:Ie,generateResponsiveRangeStyles:Le,mimmikCssForPreviewBtnClick:Fe,duplicateBlockIdFix:je,arrayMove:qe}=eb_controls;var He=Object.defineProperty,Ge=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,Ze=(e,t,n)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const{useBlockProps:Ve,RichText:Je}=wp.blockEditor,We=JSON.parse('{"title":"Accordion block","apiVersion":2,"name":"essential-blocks/accordion","category":"essential-blocks","description":"Display your FAQs & improve user experience with Accordion/Toggle block","textdomain":"essential-blocks","supports":{"align":["wide","full"]}}');var Xe=Object.defineProperty,Ke=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,et=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const{__:tt}=wp.i18n,{registerBlockType:nt}=wp.blocks,{name:ot,category:at}=We;nt(((e,t)=>{for(var n in t||(t={}))Qe.call(t,n)&&et(e,n,t[n]);if(Ke)for(var n of Ke(t))Ye.call(t,n)&&et(e,n,t[n]);return e})({name:ot},We),{icon:()=>React.createElement("svg",{width:"256",height:"256",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg"},React.createElement("defs",null,React.createElement("linearGradient",{x1:"50%",y1:"-8.333%",x2:"50%",y2:"108.44%",id:"linearGradient-1"},React.createElement("stop",{stopColor:"#6DC7FF",offset:"0%"}),React.createElement("stop",{stopColor:"#E6ABFF",offset:"100%"})),React.createElement("linearGradient",{x1:"50%",y1:"-.962%",x2:"50%",y2:"102.035%",id:"linearGradient-2"},React.createElement("stop",{stopColor:"#1A6DFF",offset:"0%"}),React.createElement("stop",{stopColor:"#C822FF",offset:"100%"}))),React.createElement("g",{id:"Page-1",fill:"none",fillRule:"evenodd"},React.createElement("g",{id:"eb-icon-accordion"},React.createElement("path",{d:"M128,0 C91.9749264,0 59.4418701,14.8956537 36.1835498,38.8488312 L203.514459,38.8488312 L203.514459,119.749264 L0.277056277,119.749264 C0.103064935,122.478823 0,125.227221 0,128 C0,130.065732 0.0664935065,132.11484 0.164017316,134.15619 L203.514459,134.15619 L203.514459,215.056623 L34.1732294,215.056623 C57.5468052,240.239931 90.9309784,256 128,256 C198.692571,256 256,198.692571 256,128 C256,57.3074286 198.692571,0 128,0 Z",id:"Path",fill:"url(#linearGradient-1)"}),React.createElement("polygon",{id:"Path",fill:"url(#linearGradient-2)",fillRule:"nonzero",points:"186.891082 74.2621645 171.979913 74.2621645 171.979913 59.3509957 160.797922 59.3509957 160.797922 74.2621645 145.886753 74.2621645 145.886753 85.4441558 160.797922 85.4441558 160.797922 100.355325 171.979913 100.355325 171.979913 85.4441558 186.891082 85.4441558"}),React.createElement("rect",{id:"Rectangle",fill:"url(#linearGradient-2)",fillRule:"nonzero",x:"145.887",y:"169.015",width:"41.004",height:"11.183"}),React.createElement("path",{d:"M128.155152,67.662684 L15.0929177,67.662684 C10.9747532,75.3537662 7.62015584,83.5147359 5.12775758,92.0436364 L128.155152,92.0436364 L128.155152,67.662684 Z",id:"Path",fill:"#E5E5E5"}),React.createElement("path",{d:"M128.155152,162.415931 L4.68668398,162.415931 C7.05939394,170.933749 10.2887619,179.09361 14.2805887,186.796883 L128.155152,186.796883 L128.155152,162.415931 Z",id:"Path",fill:"#E5E5E5"})))),attributes:X,keywords:[tt("accordion","essential-blocks"),tt("toggle","essential-blocks"),tt("eb essential","essential-blocks")],edit:e=>{const{attributes:t,setAttributes:n,isSelected:o,clientId:S}=e,{resOption:C,blockId:T,blockMeta:N,accordionType:P,displayIcon:B,transitionDuration:x,accordions:O,expandedTabs:M,selectedTab:A,tabIcon:D,expandedIcon:_,titleColor:I="#fff",contentColor:L="#555",contentAlign:F="left",iconColor:j="#4a5059",iconPosition:q,titleAlignment:H,hoverTitleColor:G,activeBgColor:z,activeTitleColor:U,icnZ_Range:Z,TABicnZ_Range:V,MOBicnZ_Range:J}=t;Ne((()=>{n({resOption:Oe("core/edit-post").__experimentalGetPreviewDeviceType()})}),[]),Ne((()=>{je({BLOCK_PREFIX:"eb-accordion",blockId:T,setAttributes:n,select:Oe,clientId:S})}),[]),Ne((()=>{Fe({domObj:document,select:Oe})}),[]);const W=Be({className:"eb-guten-block-main-parent-wrapper"});Ne((()=>{O.length>0||n({accordions:[{title:"Accordion Tab Title 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Accordion Tab Title 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Accordion Tab Title 3",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]})}),[]);const X=()=>{let e=O.length+1,t=[...O,{title:`Accordion Tab Title ${e}`,content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];n({accordions:t})},K=e=>"accordion"===P?A===e:"toggle"===P?M.includes(e):void 0,Q=e=>K(e)?_:D,Y=(e,t,o)=>{let a=[...O];a[t][o]=e,n({accordions:a})},{typoStylesDesktop:ee,typoStylesTab:te,typoStylesMobile:ne}=_e({attributes:t,prefixConstant:a,defaultFontSize:18}),{typoStylesDesktop:oe,typoStylesTab:ae,typoStylesMobile:re}=_e({attributes:t,prefixConstant:r,defaultFontSize:14}),{backgroundStylesDesktop:ce,hoverBackgroundStylesDesktop:le,backgroundStylesTab:ie,hoverBackgroundStylesTab:se,backgroundStylesMobile:de,hoverBackgroundStylesMobile:be,overlayStylesDesktop:pe,hoverOverlayStylesDesktop:me,overlayStylesTab:ge,hoverOverlayStylesTab:ye,overlayStylesMobile:ue,hoverOverlayStylesMobile:ke,bgTransitionStyle:Re,ovlTransitionStyle:fe}=Ae({attributes:t,controlName:u}),{backgroundStylesDesktop:he,hoverBackgroundStylesDesktop:we,bgTransitionStyle:Se}=Ae({attributes:t,controlName:k,noOverlay:!0,noMainBgi:!0}),{backgroundStylesDesktop:He,hoverBackgroundStylesDesktop:Ge,bgTransitionStyle:ze}=Ae({attributes:t,controlName:v,noOverlay:!0,noMainBgi:!0}),{backgroundStylesDesktop:Ue,hoverBackgroundStylesDesktop:Ze,bgTransitionStyle:Ve}=Ae({attributes:t,controlName:R,noOverlay:!0,noMainBgi:!0}),{dimensionStylesDesktop:Je,dimensionStylesTab:We,dimensionStylesMobile:Xe}=De({attributes:t,controlName:i,styleFor:"margin"}),{dimensionStylesDesktop:Ke,dimensionStylesTab:Qe,dimensionStylesMobile:Ye}=De({attributes:t,controlName:s,styleFor:"padding"}),{dimensionStylesDesktop:et,dimensionStylesTab:tt,dimensionStylesMobile:nt}=De({attributes:t,controlName:d,styleFor:"margin"}),{dimensionStylesDesktop:ot,dimensionStylesTab:at,dimensionStylesMobile:rt}=De({attributes:t,controlName:b,styleFor:"padding"}),{dimensionStylesDesktop:ct,dimensionStylesTab:lt,dimensionStylesMobile:it}=De({attributes:t,controlName:p,styleFor:"margin"}),{dimensionStylesDesktop:st,dimensionStylesTab:dt,dimensionStylesMobile:bt}=De({attributes:t,controlName:m,styleFor:"padding"}),{dimensionStylesDesktop:pt,dimensionStylesTab:mt,dimensionStylesMobile:gt}=De({attributes:t,controlName:g,styleFor:"margin"}),{dimensionStylesDesktop:yt,dimensionStylesTab:ut,dimensionStylesMobile:kt}=De({attributes:t,controlName:y,styleFor:"padding"}),{styesDesktop:vt,styesTab:Rt,styesMobile:$t,stylesHoverDesktop:Et,stylesHoverTab:ft,stylesHoverMobile:ht,transitionStyle:wt}=Ie({controlName:$,attributes:t}),{styesDesktop:St,styesTab:Ct,styesMobile:Tt,stylesHoverDesktop:Nt,stylesHoverTab:Pt,stylesHoverMobile:Bt,transitionStyle:xt}=Ie({controlName:E,attributes:t}),{styesDesktop:Ot,styesTab:Mt,styesMobile:At,stylesHoverDesktop:Dt,stylesHoverTab:_t,stylesHoverMobile:It,transitionStyle:Lt}=Ie({controlName:f,attributes:t}),{styesDesktop:Ft,styesTab:jt,styesMobile:qt,stylesHoverDesktop:Ht,stylesHoverTab:Gt,stylesHoverMobile:zt,transitionStyle:Ut}=Ie({controlName:h,attributes:t}),{rangeStylesDesktop:Zt,rangeStylesTab:Vt,rangeStylesMobile:Jt}=Le({controlName:c,customUnit:"px",property:"font-size",attributes:t}),{rangeStylesDesktop:Wt,rangeStylesTab:Xt,rangeStylesMobile:Kt}=Le({controlName:l,customUnit:"px",property:"padding-top",attributes:t}),Qt=`\n\n\t.${T}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{\n\t\t${Xt}\n\t}\n\t\n\n\t.${T}.eb-accordion-container{\n\t\t${We}\n\t\t${Qe}\n\t\t${ie}\n\t\t${Rt}\n\t}\n\t\n\t.${T}.eb-accordion-container:hover{\n\t\t${se}\n\t\t${ft}\n\t}\n\t\n\t.${T}.eb-accordion-container:before{\n\t\t${ge}\n\t}\n\n\t.${T}.eb-accordion-container:hover:before{\n\t\t${ye}\n\t}\n\n\n\n${B?`\n\t\t.${T}.eb-accordion-container .eb-accordion-icon-wrapper{\n\t\t\t${tt}\n\t\t\t${at}\n\t\t\t${Ct}\n\t\t}\n\n\n\t\t.${T}.eb-accordion-container .eb-accordion-icon-wrapper:hover{\n\t\t\t${Pt}\n\t\t}\n\t\t\n\t\t.${T}.eb-accordion-container .eb-accordion-icon{\n\t\t\t${Vt}\n\t\t\t${V?`width:${V}px;`:""}\n\t\t}\n\t\t\n\t\t`:""}\n\n\n\n\t.${T}.eb-accordion-container .eb-accordion-title-wrapper {\n\t\t${lt}\n\t\t${dt}\n\t\t${Mt}\n\t}\n\n\n\t.${T}.eb-accordion-container .eb-accordion-title-wrapper:hover{\n\t\t${_t}\n\t} \n\n\t.${T}.eb-accordion-container .eb-accordion-title{\n\t\t${te}\n\t}\n\n\n\t\n\t.${T}.eb-accordion-container .eb-accordion-content-wrapper p{\n\t\t${ae}\n\t\t${mt}\n\t\t${ut}\n\t\t${jt}\n\t}\n\t\n\t.${T}.eb-accordion-container .eb-accordion-content-wrapper:hover P{\n\t\t${Gt}\n\t}\n\n\n\n\t`,Yt=`\n\t\n\t.${T}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{\n\t\t${Kt}\n\t}\n\t\n\t.${T}.eb-accordion-container{\n\t\t${Xe}\n\t\t${Ye}\n\t\t${de}\n\t\t${$t}\n\t}\n\t\n\t.${T}.eb-accordion-container:hover{\n\t\t${be}\n\t\t${ht}\n\t}\n\t\n\t.${T}.eb-accordion-container:before{\n\t\t${ue}\n\t}\n\n\t.${T}.eb-accordion-container:hover:before{\n\t\t${ke}\n\t}\n\n\n\n\t${B?`\n\t\t\t.${T}.eb-accordion-container .eb-accordion-icon-wrapper{\n\t\t\t\t${nt}\n\t\t\t\t${rt}\n\t\t\t\t${Tt}\n\t\t\t}\n\t\n\t\t\t.${T}.eb-accordion-container .eb-accordion-icon-wrapper:hover{\n\t\t\t\t${Bt}\n\t\t\t}\n\t\t\t\n\t\t\t.${T}.eb-accordion-container .eb-accordion-icon{\n\t\t\t\t${Jt}\n\t\t\t\t${J?`width:${J}px;`:""}\n\t\t\t}\n\t\t\t\n\t\t\t`:""}\n\t\n\t\n\t.${T}.eb-accordion-container .eb-accordion-title-wrapper {\n\t\t${it}\n\t\t${bt}\n\t\t${At}\n\t}\n\n\n\t.${T}.eb-accordion-container .eb-accordion-title-wrapper:hover{\n\t\t${It}\n\t} \n\n\t.${T}.eb-accordion-container .eb-accordion-title{\n\t\t${ne}\n\t}\n\t\n\t.${T}.eb-accordion-container .eb-accordion-content-wrapper p{\n\t\t${re}\n\t\t${gt}\n\t\t${kt}\n\t\t${qt} \n\t}\n\t\n\t.${T}.eb-accordion-container .eb-accordion-content-wrapper:hover P{\n\t\t${zt}\n\t}\n\n\n\t`,en=Me(`\t\t\n\t\t\n\t\n\t.eb-accordion-container .eb-accordion-content-wrapper p{\n\t\tborder:1px solid #aaa;\n\t}\n\t\n\t.eb-accordion-container.eb_accdn_loaded .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{\n\t\tvisibility:visible;\n\t\tposition:static;\n\t}\n\n\t.eb-accordion-container .eb-accordion-wrapper:not(.for_edit_page) .eb-accordion-content-wrapper{\n\t\tvisibility:hidden;\n\t\tposition:absolute;\n\t}\n\n\t.${T}.eb-accordion-container .eb-accordion-inner{\n\t\tposition:relative;\n\t}\n\n\t.${T}.eb-accordion-container .eb-accordion-wrapper h3,\n\t.${T}.eb-accordion-container .eb-accordion-wrapper p{\n\t\tmargin:0;\n\t\tpadding:0;\n\t}\n\t\n\t\n\t.${T}.eb-accordion-container .eb-accordion-wrapper + .eb-accordion-wrapper{\n\t\t${Wt}\n\t}\n\t\n\t\n\t.${T}.eb-accordion-container{\n\t\t${Je}\n\t\t${Ke}\n\t\t${ce}\n\t\t${vt}\n\t\ttransition:${Re}, ${wt};\n\t\toverflow:hidden;\n\t}\n\t\n\t.${T}.eb-accordion-container:hover{\n\t\t${le}\n\t\t${Et}\n\t}\n\t\n\t.${T}.eb-accordion-container:before{\n\t\t${pe}\n\t\ttransition:${fe};\n\t}\n\n\t.${T}.eb-accordion-container:hover:before{\n\t\t${me}\n\t}\n\n\n${B?`\n\t\t.${T}.eb-accordion-container .eb-accordion-icon-wrapper{\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\t${et}\n\t\t\t${ot}\n\t\t\t${he}\n\t\t\t${St}\n\t\t\ttransition:${Se}, ${xt};\n\t\t}\n\n\n\t\t.${T}.eb-accordion-container .eb-accordion-icon-wrapper:hover{\n\t\t\t${we}\n\t\t\t${Nt}\n\t\t}\n\t\t\n\t\t.${T}.eb-accordion-container .eb-accordion-icon{\n\t\t\ttext-align:center;\n\t\t\tcolor: ${j};\n\t\t\t${Zt}\n\t\t\t${Z?`width:${Z}px;`:""}\n\t\t}\n\t\t\n\t\t`:""}\n\n\t.${T}.eb-accordion-container .eb-accordion-title-wrapper {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tflex-direction: ${"right"===q&&B?"row-reverse":"row"};\n\t\t${He}\n\t\t${ct}\n\t\t${st}\n\t\t${Ot}\n\t\ttransition:${ze}, ${Lt};\n\t}\n\n\n\t.${T}.eb-accordion-container .eb-accordion-title-wrapper:hover{\n\t\t${Ge}\n\t\t${Dt}\n\t} \n\t\n\t\n\t.${T}.eb-accordion-container .eb-accordion-title{\n\t\ttext-align:${H||"left"};\n\t\tflex:1;\n\t\tcolor:${I};\n\t\t${ee}\n\t}\n\n${U?`\n\t.${T}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) h3.eb-accordion-title,\n\t.${T}.eb-accordion-container .eb-accordion-wrapper.expanded_tab h3.eb-accordion-title{\n\t\t${U?`color: ${U} !important;`:""}\n\t}\n\t`:""}\n\n${z?`\n\t.${T}.eb-accordion-container .eb-accordion-wrapper:not(.eb-accordion-hidden,.for_edit_page) .eb-accordion-title-wrapper,\n\t.${T}.eb-accordion-container .eb-accordion-wrapper.expanded_tab .eb-accordion-title-wrapper{\n\t\t${z?`background-color: ${z} !important;`:""}\n\t}\n\t`:""}\n\t\n\t${G?`\n\t\t\t.${T}.eb-accordion-container .eb-accordion-title-wrapper:hover .eb-accordion-title{\n\t\t\t\tcolor:${G};\n\t\t\t}\n\t\t\t`:""}\n\t\n\t.${T}.eb-accordion-container .eb-accordion-content-wrapper{\n\t\toverflow: hidden !important;\n\t\ttransition: all ${x||0}s;\n\t}\n\t\n\t.${T}.eb-accordion-container .eb-accordion-content-wrapper p{\n\t\tcolor:${L};\n\t\ttext-align:${F};\n\t\t${Ue}\n\t\t${oe}\n\t\t${pt}\n\t\t${yt}\n\t\t${Ft}\n\t\ttransition:${Ut}, ${Ve};\n\t}\n\t\n\t.${T}.eb-accordion-container .eb-accordion-content-wrapper:hover p{\n\t\t${Ze}\n\t\t${Ht}\n\t}\n\n\t\n\n\n\t`),tn=Me(`\n\t\t${Qt}\n\n\n\t`),nn=Me(`\n\t\t${Yt}\n\n\n\t`);return Ne((()=>{const e={desktop:en,tab:tn,mobile:nn};JSON.stringify(N)!=JSON.stringify(e)&&n({blockMeta:e})}),[t]),[o&&React.createElement(ve,(on=Ce({},e),an={addAccordion:X,onDeleteAccordion:e=>{let t=[...O];t.splice(e,1),n({accordions:t})},onSortEnd:({oldIndex:e,newIndex:t})=>{n({accordions:qe([...O],e,t)})}},$e(on,Ee(an)))),React.createElement("div",Ce({},W),React.createElement("style",null,`\n\n\n\t\t\t\t${en}\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t${"Tablet"===C?tn:" "}\n\t\t\t\t${"Mobile"===C?tn+nn:" "}\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t${Me(tn)}\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t${Me(nn)}\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t`),React.createElement("div",{className:`${T} eb-accordion-container`},React.createElement("div",{className:"eb-accordion-inner"},O.map(((e,t)=>React.createElement("div",{className:`eb-accordion-wrapper ${K(t)?"expanded_tab":" "} for_edit_page`,key:t},React.createElement("div",{className:"eb-accordion-title-wrapper",onClick:()=>(e=>{"accordion"===P&&(e=>{n({selectedTab:A===e?void 0:e})})(e),"toggle"===P&&(e=>{let t=[...M];t=t.includes(e)?t.filter((t=>t!==e)):[...t,e],n({expandedTabs:t})})(e)})(t)},B&&React.createElement(w,{icon:Q(t)}),React.createElement(Pe,{tagName:"h3",className:"eb-accordion-title",allowedFormats:[],placeholder:"Add Title Here",value:e.title,onChange:e=>Y(e,t,"title")})),React.createElement("div",{className:"eb-accordion-content-wrapper",style:{maxHeight:K(t)?2e3:0,opacity:K(t)?1:0,overflow:K(t)?"visible":"hidden"}},React.createElement(Pe,{tagName:"p",className:"eb-accordion-content",placeholder:"Add Content Here",allowedFormats:["bold","italic","strikethrough"],value:e.content,onChange:e=>Y(e,t,"content")}))))))),React.createElement("div",{className:"eb-accordion-add-button"},React.createElement(xe,{className:"is-default",label:Te("Add Accordion Item","essential-blocks"),icon:"plus-alt",onClick:X},React.createElement("span",{className:"eb-accordion-add-button-label"},"Add Accordion Item"))))];var on,an},save:({attributes:e})=>{const{blockId:t,accordionType:n,displayIcon:o,accordions:a,tabIcon:r,expandedIcon:c}=e;return React.createElement("div",((e,t)=>{for(var n in t||(t={}))ze.call(t,n)&&Ze(e,n,t[n]);if(Ge)for(var n of Ge(t))Ue.call(t,n)&&Ze(e,n,t[n]);return e})({},Ve.save()),React.createElement("div",{className:`eb-accordion-container ${t}`,"data-accordion-type":n||"toggle","data-tab-icon":o?r:"","data-expanded-icon":o?c:""},React.createElement("div",{className:"eb-accordion-inner"},a.map(((e,t)=>React.createElement("div",{className:"eb-accordion-wrapper eb-accordion-hidden",key:t},React.createElement("div",{className:"eb-accordion-title-wrapper"},o&&React.createElement(w,{icon:r}),React.createElement(Je.Content,{tagName:"h3",className:"eb-accordion-title",value:e.title})),React.createElement("div",{className:"eb-accordion-content-wrapper"},React.createElement(Je.Content,{tagName:"p",className:"eb-accordion-content",value:e.content}))))))))},example:{attributes:{accordions:[{title:"Accordion Tab Title 1",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{title:"Accordion Tab Title 2",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],displayIcon:!0,tabIcon:"fas fa-angle-right"}}})})(0,0,e)})();