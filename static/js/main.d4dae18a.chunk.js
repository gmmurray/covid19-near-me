(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,a,t){e.exports=t(70)},56:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),s=t.n(c),l=t(12),i=t(9),o=t(1),m=t.n(o),u=t(4),d=t(2),E=t(13),h=t.n(E),v="https://covid19-near-me-backend.herokuapp.com/api",p=function(){var e=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(v,"/states/").concat(a));case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t=void 0;case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(v,"/countries/").concat(a));case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t=void 0;case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(v,"/countries/historical/").concat(a));case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t=void 0;case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(a){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(v,"/world/"));case 3:a=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a=void 0;case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(v,"/countries?sort=cases&take=5"));case 3:a=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a=void 0;case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),y=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],x=(t(56),function(){return r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),S=function(e){var a=e.fluid,t=e.widescreen,n=e.fullhd,c=e.className,s=t&&!n?"is-widescreen":"",l=n&&!t?"is-fullhd":"",i=c||"",o="container ".concat(a?"is-fluid":""," ").concat(s," ").concat(l," ").concat(i).trim();return r.a.createElement("div",{className:o},e.children)},k=function(e){var a=e.currentState,t=a.state,n=a.cases,c=a.todayCases,s=a.deaths,l=a.todayDeaths,i=a.active;return e.networkError?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-3"},"Sorry, we encountered an error while trying to connect. Select a state to try again."))):e.isLoading?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement(x,null))):t?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-1"},t),r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Cases"),r.a.createElement("p",{className:"title"},n))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Cases Today"),r.a.createElement("p",{className:"title"},c))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Deaths"),r.a.createElement("p",{className:"title"},s))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Deaths Today"),r.a.createElement("p",{className:"title"},l))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Active"),r.a.createElement("p",{className:"title"},i)))))):r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-1"},"Select a state")))},C=function(e){var a=e.size,t=a?"is-".concat(a):"",c="select ".concat(t).trim(),s=Object(n.useState)(""),l=Object(d.a)(s,2),i=l[0],o=l[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),E=u[0],h=u[1];return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"has-text-centered"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),i?e.updateCurrentSelection(i):h("Please select an option")}},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:E?"".concat(c," is-danger"):c},r.a.createElement("select",{value:i,onChange:function(e){e.target.value&&h(""),o(e.target.value)}},r.a.createElement("option",{value:""},"Select..."),e.list.map((function(e,a){return r.a.createElement("option",{key:a},e)}))))),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-success",type:"submit",disabled:e.isLoading},"Get Data"))),r.a.createElement("span",{className:"has-text-danger"},E))))},w=function(){var e=Object(n.useState)({}),a=Object(d.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),l=Object(d.a)(s,2),i=l[0],o=l[1],E=Object(n.useState)(!1),h=Object(d.a)(E,2),v=h[0],N=h[1],b=function(){var e=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),N(!1),e.next=4,p(a);case 4:if(t=e.sent){e.next=9;break}return o(!1),N(!0),e.abrupt("return");case 9:c(t.data),o(!1);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement(C,{updateCurrentSelection:b,list:y,size:"fullwidth",isLoading:i}),r.a.createElement(k,{currentState:t,isLoading:i,networkError:v})))},O=function(e){var a=e.currentCountry,t=a.message,n=a.country,c=a.cases,s=a.todayCases,l=a.deaths,i=a.todayDeaths,o=a.recovered,m=a.active,u=a.critical,d=a.casesPerOneMillion,E=a.deathsPerOneMillion,h=a.updated,v=new Date(h);return e.networkError?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-3"},"Sorry, we encountered an error while trying to connect. Select a country to try again."))):e.isLoading?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement(x,null))):t?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-3"},t))):n?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-1"},n),r.a.createElement("h5",{className:"subtitle is-5"},"Last updated ",v.toDateString()),r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Cases"),r.a.createElement("p",{className:"title"},c))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Cases Today"),r.a.createElement("p",{className:"title"},s))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Deaths"),r.a.createElement("p",{className:"title"},l))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Deaths Today"),r.a.createElement("p",{className:"title"},i))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Recovered"),r.a.createElement("p",{className:"title"},o))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Active"),r.a.createElement("p",{className:"title"},m))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Critical"),r.a.createElement("p",{className:"title"},u))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Cases/Million"),r.a.createElement("p",{className:"title"},d))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Deaths/Million"),r.a.createElement("p",{className:"title"},E)))))):r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-1"},"Select a country")))},j=t(31),D=(t(65),function(e){var a=Object(n.useState)({primaryCursorValue:null,secondaryCursorValue:null}),t=Object(d.a)(a,2),c=t[0],s=c.primaryCursorValue,l=c.secondaryCursorValue,i=t[1],o=Object(n.useMemo)((function(){return e.chartData})),m=Object(n.useMemo)((function(){return{type:"bar"}}),[]),u=Object(n.useMemo)((function(){return[{primary:!0,type:"ordinal",position:"bottom"},{position:"left",type:"linear",stacked:!1}]}),[]),E=r.a.useMemo((function(){return{value:s}}),[s]),h=r.a.useMemo((function(){return{value:l}}),[l]),v=Object(n.useCallback)((function(e){i({primaryCursorValue:e?e.primary:null,secondaryCursorValue:e?e.secondary:null})}),[]);return r.a.createElement("div",{style:{width:"100%",height:"500px"}},r.a.createElement(j.Chart,{data:o,axes:u,series:m,tooltip:!0,onFocus:v,primaryCursor:E,secondaryCursor:h}))}),M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"is-size-3"},"7 Day Summary"),r.a.createElement("ul",null,e.data.map((function(e,a){return r.a.createElement("li",{key:a},e.date,r.a.createElement("ul",{key:a},e.cases>0?r.a.createElement("li",{key:"".concat(a,"-cases}")},r.a.createElement("span",{className:"has-text-danger"},"+",e.cases," Cases")):r.a.createElement("li",{key:"".concat(a,"-cases}")},r.a.createElement("span",{className:"has-text-success"},e.cases," Cases")),e.deaths>0?r.a.createElement("li",{key:"".concat(a,"-deaths}")},r.a.createElement("span",{className:"has-text-danger"},"+",e.deaths," Deaths")):r.a.createElement("li",{key:"".concat(a,"-deaths}")},r.a.createElement("span",{className:"has-text-success"},e.deaths," Deaths"))))}))))},I=function(e){var a=e.historicalData.country;return e.networkError?r.a.createElement(r.a.Fragment,null):e.isLoading?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement(x,null))):a?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered is-hidden-touch"},r.a.createElement(D,{chartData:e.historicalData.chartData})),r.a.createElement(S,{className:"has-text-centered is-hidden-desktop"},r.a.createElement(M,{data:e.historicalData.mobileData}))):r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement(r.a.Fragment,null)))},A=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia, Plurinational State of","Bolivia","Bosnia","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, the Democratic Republic of the","Cook Islands","Costa Rica","C\xf4te d'Ivoire","Croatia","Cuba","Curacao","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Channel Islands","Jordan","Kazakhstan","Kenya","Kiribati","N. Korea","S. Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Burma","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","R\xe9union","Romania","Russia","Rwanda","St. Barth","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Martin","Sint Maarten","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","UAE","UK","USA","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","British Virgin Islands","U.S. Virgin Islands","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"],z=function(e){var a=e.country,t=[],n=[];Object.keys(e.timeline.cases).map((function(a){t.push({x:a,y:e.timeline.cases[a]})})),Object.keys(e.timeline.deaths).map((function(a){n.push({x:a,y:e.timeline.deaths[a]})}));for(var r=[],c=[],s=0;s<t.length;s++)(0!==Number.parseInt(t[s].y)||0===r.length)&&(r.push(t[s]),c.push(n[s]));for(var l={cases:t.slice(t.length-8),deaths:n.slice(n.length-8)},i=[],o=0;o<7;o++)i.push({date:l.cases[o+1].x,cases:l.cases[o+1].y-l.cases[o].y,deaths:l.deaths[o+1].y-l.deaths[o].y});return{country:a,chartData:[{label:"Cases",data:r},{label:"Deaths",data:c}],mobileData:i}},L=function(){var e=Object(n.useState)({}),a=Object(d.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)({}),l=Object(d.a)(s,2),i=l[0],o=l[1],E=Object(n.useState)(!1),h=Object(d.a)(E,2),v=h[0],p=h[1],f=Object(n.useState)(!1),g=Object(d.a)(f,2),y=g[0],x=g[1],k=Object(n.useState)(!1),w=Object(d.a)(k,2),j=w[0],D=w[1],M=function(){var e=Object(u.a)(m.a.mark((function e(a){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),x(!0),D(!1),e.next=5,N(a);case 5:return t=e.sent,e.next=8,b(a);case 8:if(n=e.sent,t&&n){e.next=13;break}return p(!1),D(!0),e.abrupt("return");case 13:if(c(t.data),p(!1),!t.data.message){e.next=18;break}return x(!1),e.abrupt("return");case 18:return e.t0=o,e.next=21,z(n.data);case 21:e.t1=e.sent,(0,e.t0)(e.t1),x(!1);case 24:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement(C,{updateCurrentSelection:M,list:A,size:"fullwidth",isLoading:v||y}),r.a.createElement(O,{currentCountry:t,isLoading:v,networkError:j}),r.a.createElement(I,{historicalData:i,isLoading:y,networkError:j})))},B=function(e){var a=e.data,t=a.cases,n=a.deaths,c=a.recovered,s=a.active,l=a.updated,i=new Date(l);return e.networkError?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-3"},"Sorry, we encountered an error while trying to connect. Select a state to try again."))):e.isLoading?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement(x,null))):r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("h1",{className:"is-size-1"},"Worldwide Stats"),r.a.createElement("h5",{className:"subtitle is-5"},"Last updated ",i.toDateString()),r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Cases"),r.a.createElement("p",{className:"title"},t))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Deaths"),r.a.createElement("p",{className:"title"},n))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Active"),r.a.createElement("p",{className:"title"},s))),r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement("p",{className:"heading"},"Recovered"),r.a.createElement("p",{className:"title"},c))))))},P=function(e){var a=e.data;return e.networkError?r.a.createElement(r.a.Fragment,null):e.isLoading?r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement(x,null))):r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered is-hidden-touch"},r.a.createElement("h3",{className:"is-size-3"},"Five countries with the most cases"),r.a.createElement("table",{className:"table is-fullwidth is-hoverable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Cases"),r.a.createElement("th",null,"Deaths"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Active"),r.a.createElement("th",null,"Critical"),r.a.createElement("th",null,"Updated"))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",null,a+1),r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.cases),r.a.createElement("td",null,e.deaths),r.a.createElement("td",null,e.recovered),r.a.createElement("td",null,e.active),r.a.createElement("td",null,e.critical),r.a.createElement("td",null,new Date(e.updated).toDateString()))}))))),r.a.createElement(S,{className:"has-text-centered is-hidden-desktop"},r.a.createElement("h3",{className:"is-size-3"},"Five countries with the most cases"),a.map((function(e,a){return r.a.createElement("div",{className:"card",key:a},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title"},"".concat(a+1,". ").concat(e.country))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"columns is-mobile"},r.a.createElement("div",{className:"column is-one-third"},e.cases," Cases"),r.a.createElement("div",{className:"column is-one-third"},e.deaths," Deaths"),r.a.createElement("div",{className:"column is-one-third"},e.recovered," Recovered")),r.a.createElement("div",{className:"columns is-mobile"},r.a.createElement("div",{className:"column is-half"},e.active," Active"),r.a.createElement("div",{className:"column is-half"},e.critical," Critical"))),r.a.createElement("footer",{className:"card-footer"},r.a.createElement("p",{className:"card-footer-item"},"Updated ",new Date(e.updated).toDateString())))}))))},T=function(){var e=Object(n.useState)({}),a=Object(d.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)([]),l=Object(d.a)(s,2),i=l[0],o=l[1],E=Object(n.useState)(!1),h=Object(d.a)(E,2),v=h[0],p=h[1],N=Object(n.useState)(!1),b=Object(d.a)(N,2),y=b[0],x=b[1],k=Object(n.useState)(!1),C=Object(d.a)(k,2),w=C[0],O=C[1];Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,f();case 3:if(a=e.sent){e.next=8;break}return p(!1),O(!0),e.abrupt("return");case 8:c(a.data),p(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,g();case 3:if(a=e.sent){e.next=8;break}return p(!1),O(!0),e.abrupt("return");case 8:o(a.data),x(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),a()}),[]);var j=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),x(!0),O(!1),e.next=5,f();case 5:return a=e.sent,e.next=8,g();case 8:if(t=e.sent,a&&t){e.next=13;break}return p(!1),O(!0),e.abrupt("return");case 13:c(a.data),p(!1),o(t.data),x(!1);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null,r.a.createElement("section",{className:"section"},r.a.createElement(S,{className:"has-text-centered"},r.a.createElement("button",{onClick:j,className:"button is-success",disabled:v||y},"Refresh Data")))),r.a.createElement(S,null,r.a.createElement(B,{data:t,isLoading:v,networkError:w})),r.a.createElement(S,null,r.a.createElement(P,{data:i,isLoading:y,networkError:w})))},G=function(e){var a=e.title,t=e.subtitle,n=e.color,c=e.size,s=e.gradient,l=n?"is-".concat(n):"",i=c?"is-".concat(c):"",o=s?"is-bold":"",m="hero ".concat(l," ").concat(i," ").concat(o).trim();return r.a.createElement("section",{className:m},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},a),r.a.createElement("h2",{className:"subtitle"},t))))},F=(t(66),function(){var e=Object(n.useState)(!0),a=Object(d.a)(e,2),t=a[0],c=a[1];return r.a.createElement("nav",{className:"navbar is-black",role:"navigation","aria-label":"main navigation"},r.a.createElement(S,null,r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{role:"button",className:"navbar-burger ".concat(t?"":"is-active"),"aria-label":"menu","aria-expanded":"false",onClick:function(){c(!t)}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"":"is-active")},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(l.b,{to:"/states",className:"navbar-item",activeClassName:"active"},"States"),r.a.createElement(l.b,{to:"/countries",className:"navbar-item",activeClassName:"active"},"Countries"),r.a.createElement(l.b,{to:"/world",className:"navbar-item",activeClassName:"active"},"World")),r.a.createElement("div",{className:"navbar-end"}))))}),V=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Frontend and backend built by "),r.a.createElement("a",{href:"https://github.com/gmmurray",target:"_blank",rel:"noopener noreferrer"},"Greg Murray")),r.a.createElement("p",null,r.a.createElement("strong",null,"COVID-19 data acquired via API provided by "),r.a.createElement("a",{href:"https://github.com/NovelCOVID/API",target:"_blank",rel:"noopener noreferrer"},"the NovelCOVID API GitHub Project"))))};var R=function(){return r.a.createElement(l.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/states"},r.a.createElement(G,{title:"Individual U.S. State Data",color:"dark",size:"medium"}),r.a.createElement(F,null),r.a.createElement(w,null)),r.a.createElement(i.b,{path:"/countries"},r.a.createElement(G,{title:"Individual Country Data",color:"dark",size:"medium"}),r.a.createElement(F,null),r.a.createElement(L,null)),r.a.createElement(i.b,{path:"/world"},r.a.createElement(G,{title:"Worldwide Data",color:"dark",size:"medium"}),r.a.createElement(F,null),r.a.createElement(T,null)),r.a.createElement(i.b,{path:"/"},r.a.createElement(i.a,{to:"/states"}))),r.a.createElement(V,null))};t(69);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d4dae18a.chunk.js.map