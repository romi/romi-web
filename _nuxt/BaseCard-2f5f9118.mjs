import _ from"./BaseButton-fa792891.mjs";import{_ as f,o as s,c as o,r as a,e as m,g as b,f as n,h as p,n as g,i as r,t as i,F as v,j as y,a as h,w as k}from"./entry-70c4c344.mjs";const B={__name:"BaseCard",props:{title:{type:String,default:null},description:{type:String,default:null},buttons:{type:Array,default:null}},setup(t,{expose:d}){d();const l={props:t};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}},S={class:g(["grid content-start","bg-white rounded-xl","overflow-hidden isolate"])},w={key:0,class:"grid gap-2 content-start p-8"},C={key:0,class:"flex items-baseline"},N={class:"grid gap-2"},$={key:0},x={key:1,class:"flex flex-wrap gap-2 mt-2"};function P(t,d,e,l,V,j){const c=_;return s(),o("div",S,[a(t.$slots,"media"),e.title||t.$slots.title||e.description||t.$slots.default||e.buttons||t.$slots.buttons?(s(),o("div",w,[e.title||t.$slots.title?(s(),o("div",C,[a(t.$slots,"title",m(b({className:"text-xl font-bold"})),()=>[r(i(e.title),1)])])):n("",!0),p("div",N,[e.description||t.$slots.default?(s(),o("div",$,[a(t.$slots,"default",{},()=>[r(i(e.description),1)])])):n("",!0),e.buttons||t.$slots.buttons?(s(),o("div",x,[a(t.$slots,"buttons",{},()=>[(s(!0),o(v,null,y(e.buttons,(z,u)=>(s(),h(c,{key:u,to:e.buttons.link,variant:u===0?"primary":"secondary"},{default:k(()=>[r(i(e.buttons.label),1)]),_:2},1032,["to","variant"]))),128))])])):n("",!0)])])):n("",!0)])}var D=f(B,[["render",P]]);export{D as default};
