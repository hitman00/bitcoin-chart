(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{260:function(t,e,l){var content=l(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(101).default)("26253aa6",content,!0,{sourceMap:!1})},261:function(t,e,l){var content=l(417);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(101).default)("0ced4a65",content,!0,{sourceMap:!1})},400:function(t,e,l){"use strict";var n=l(260),o=l.n(n);l.d(e,"default",(function(){return o.a}))},401:function(t,e,l){var n=l(100)(!1);n.push([t.i,".price_main_3zy5R{display:flex;flex-wrap:wrap}.item_3qQ0Q{padding:0 4%;border-left:1px solid #1b1f23}.item_3qQ0Q,.title_1lDE3{margin-bottom:3%}.title_1lDE3{color:hsla(0,0%,88.2%,.78039);font-weight:300}.value_1oxRL h1{font-weight:500;font-size:30px;display:inline;line-height:1.2}.value_1oxRL span{font-size:18px;font-weight:300}.value2_vGzzY,.value_1oxRL span{color:hsla(0,0%,88.2%,.78039)}.value2_vGzzY{display:inline}.rank_2cp9I{background:#155ebb;border-radius:10px;margin:20% -30% 0;text-align:center}.red_chart_3GrVG{width:18%}.red_chart_3GrVG canvas{width:100%!important;height:40px!important}.lose_1cgx0{color:rgba(238,0,0,.973);display:inline}@media(max-width:500px){.price_main_3zy5R{flex-direction:column}.value_1oxRL h1{font-size:20px;line-height:1.8}.rank_2cp9I{margin:4% 78% 0 0}.item_3qQ0Q{margin:3% 0;padding:0}.title_1lDE3{font-size:14px;margin:0}.red_chart_3GrVG{width:90%;margin:0 auto}.red_chart_3GrVG canvas{height:75px!important}}",""]),n.locals={price_main:"price_main_3zy5R",item:"item_3qQ0Q",title:"title_1lDE3",value:"value_1oxRL",value2:"value2_vGzzY",rank:"rank_2cp9I",red_chart:"red_chart_3GrVG",lose:"lose_1cgx0"},t.exports=n},404:function(t,e,l){var content=l(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(101).default)("1ab24863",content,!0,{sourceMap:!1})},405:function(t,e,l){"use strict";l.r(e);var n=l(9),o=(l(57),{name:"Price",data:function(){return{prices:"",loaded:!1,volume:"",market_cap:"",chartData:{labels:[10,11,12,13,14,15,16,17,9,10],datasets:[{data:[15,10,14,11,15,4,15,14,10,14],borderColor:"#ba1d1d",backgroundColor:"#5f2225",tension:0,borderWidth:2}]},chartOptions:{responsive:!0,maintainAspectRatio:!1,elements:{point:{radius:0}},legend:{display:!1},scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1}}]}}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/price/");case 2:data=e.sent,t.prices=data.data[0].price.substr(0,9),t.market_cap=data.data[0].market_cap,t.volume=data.data[0]["1d"].volume,t.loaded=!0;case 7:case"end":return e.stop()}}),e)})))()}}),r=l(400),c=l(45);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.loaded?l("div",{class:t.$style.price_main},[l("div",{class:t.$style.item},[l("div",{class:t.$style.title},[t._v("Price")]),t._v(" "),l("div",{class:t.$style.value},[l("h1",[t._v("$ "+t._s(t.prices)+" "),l("span",[t._v("USD")])])]),t._v(" "),l("div",{class:t.$style.value2},[t._v("$ 1.00000000 BTC")]),t._v(" "),l("div",{class:t.$style.lose},[t._v("-1.12%")])]),t._v(" "),l("div",{class:t.$style.item},[l("div",{class:t.$style.title},[t._v("Rank")]),t._v(" "),l("div",{class:t.$style.rank},[t._v("Rank 1")])]),t._v(" "),l("div",{class:t.$style.item},[l("div",{class:t.$style.title},[t._v("Health")]),t._v("\n    Attractive\n  ")]),t._v(" "),l("div",{class:t.$style.item},[l("div",{class:t.$style.title},[t._v("Sentiment")]),t._v("\n    Attractive\n  ")]),t._v(" "),l("div",{class:t.$style.item},[l("div",{class:t.$style.title},[t._v("Market Cap")]),t._v(" "),l("div",{class:t.$style.value},[t._v("$ "+t._s(t.market_cap)+" USD")]),t._v(" "),l("div",{class:t.$style.value2},[t._v("$ 1600000 BTC")])]),t._v(" "),l("div",{class:t.$style.item},[l("div",{class:t.$style.title},[t._v("Volume")]),t._v(" "),l("div",{class:t.$style.value},[t._v("$ "+t._s(t.volume)+" USD")]),t._v(" "),l("div",{class:t.$style.value2},[t._v("$ 1600000 BTC")])]),t._v(" "),l("div",{class:t.$style.item},[l("div",{class:t.$style.title},[t._v("Last 7 Days")]),t._v(" "),l("div",{class:t.$style.lose},[t._v("-2%")])]),t._v(" "),l("div",{class:t.$style.red_chart},[l("LineChart",{attrs:{chartdata:t.chartData,options:t.chartOptions}})],1)]):t._e()}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports;installComponents(component,{LineChart:l(399).default})},407:function(t,e,l){t.exports=l.p+"img/logo.095aff5.png"},408:function(t,e,l){t.exports=l.p+"img/star.03c54be.png"},409:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAIAQMAAAD6NPz1AAAABlBMVEUAAAAVXrvHAcKKAAAAAXRSTlMAQObYZgAAABtJREFUCNdjYGNgYGdgYG5g+H8AiIAMIBcoCAA3TwSfjEALRgAAAABJRU5ErkJggg=="},410:function(t,e,l){t.exports=l.p+"img/menu.edaf52e.png"},411:function(t,e,l){t.exports=l.p+"img/website.3d5c75c.png"},412:function(t,e,l){t.exports=l.p+"img/search.c52e9ca.png"},413:function(t,e,l){t.exports=l.p+"img/message1.1612f3b.png"},414:function(t,e,l){t.exports=l.p+"img/sorce.041f8e4.png"},415:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAkFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+WABnwAAAAL3RSTlMA0yy7Qv4GoJlNA+4K58WL+fXZIN/MfkcvJBKlkDsW8se2nWY/NM+sdV5WG4VvKPKpoLAAAAJtSURBVHja3NjJjoJAFIXh44BCUSoIIpOggO1svf/bdaLG3Fr2Qtvjv9ON+aInFoX/TGu8OHfwrsZ4aRPztmYaL6xn3ldywjNqiDnnCo+4IeEgxSNuiAk2fdwjhxiz2eIWPcTs7hJ+iCkyAPgCSFBUAL4AYuoiB1ghyUB+J82JFlKt1kZURqyQIbaxJaloIcgC8dopeSFI5Unbn/FC4C2k5KxpIfCm8gSZ5LQQrOZyJ/ucFmIv3t/zQtCXi48vvBAsf8Tb85YXYi8+PmhaiL34yUHTQpAFjvh1HRUtRGVi8c7iSAuxF+9MPV6Ivfi1p2gh6HpSshzRQpCFYvGDTtFCVOTLi7stLQQYis8OdykvxFq8s0t5IejkuatIFS0EV18svrkqWoi1+NCtaCFAJ06QvpvzQqzF1+WJF4KlvFuZRbwQ9OXik4oXoqJaXhKNaCH2M+MkIYbAWwvJXvNCrMXXl5wXgnTiPAtazQux/uP9lgiiRlbQrpDE7adCNrNbpfusGVs1xTSUV5CHD4X8ufg4+g7IL/tzcAIgDABBEAQfgZiPBl/WcP13ZxvLsdPB5BqzI3I+oyOS7FESyXpLIlnf7Ihk3yWR8yiJxAiNERojNEZojNAYoTFCY4TGCI0RGiM0RmiM0BihMUJjhMYIjREaIzRGaIzQGPnbn4MBAAAABkL+1hMYQI/LIE0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RTRFNEU0RzYsMjOL0+5L/1HUAAAAASUVORK5CYII="},416:function(t,e,l){"use strict";var n=l(261),o=l.n(n);l.d(e,"default",(function(){return o.a}))},417:function(t,e,l){var n=l(100)(!1);n.push([t.i,'.header_box_U2znz{display:flex;padding:3% 5%;background:#1e2429;border-bottom-right-radius:10px;border-bottom-left-radius:10px}.title_1CXRm{width:30%}.number_2OO2k{width:70%}.logo_3qITJ{display:flex;align-items:center}.logo_img_RGleO{position:relative;width:15%;transition:all .6s ease}.logo_img_RGleO.active_2yyQ-{transform:rotate(45deg)}.logo_img_RGleO:before{content:"";display:block;padding-bottom:100%}.logo_img_RGleO img{position:absolute;top:0;left:0;right:0;bottom:0;width:100%}.links_icon_1tRKM{display:none;width:50%;justify-content:end}.links_icon_1tRKM .logo_img_RGleO{cursor:pointer}.logo_title_1qQzs{font-weight:500;font-size:30px;margin:0 4%}.logo_title_1qQzs span{display:block;font-size:19px;font-weight:300}.star_tWiQr{width:7%;display:block;margin-top:-8%}.links_12Wim{padding:5%;position:relative}.links_12Wim .link_fix_2d-5W li{display:flex;align-items:center;margin-bottom:4%;cursor:pointer;transition:all .3s ease}.links_12Wim .link_fix_2d-5W li:hover{color:#f79413}.img_icon_3Ngoj{display:block;width:7%;margin-right:3%;opacity:.8}.arrow_1Dmue{margin-left:3%}.open_links_1nbfi{background:#155ebb;position:absolute;top:70%;right:12%;padding:3%;border-radius:5px;-webkit-animation:menu_2PubK .4s ease-in-out;animation:menu_2PubK .4s ease-in-out}.open_links_1nbfi ul li{padding:3% 0;transition:all .3s ease;font-size:14px;cursor:pointer}.open_links_1nbfi ul li:hover{color:#f79413}@-webkit-keyframes menu_2PubK{0%{opacity:0;right:0}to{opacity:1;right:12%}}@keyframes menu_2PubK{0%{opacity:0;right:0}to{opacity:1;right:12%}}@media(max-width:1030px){.links_12Wim .link_fix_2d-5W li{font-size:13px}}@media(max-width:850px){.header_box_U2znz{flex-direction:column}.links_12Wim,.links_icon_1tRKM{display:flex}.links_12Wim{width:50%;justify-content:end}.links_12Wim .link_fix_2d-5W{display:none}.title_1CXRm{width:100%;display:flex}.logo_3qITJ{width:50%}.number_2OO2k{width:100%}}@media(max-width:580px){.title_1CXRm{margin-bottom:5%}.logo_title_1qQzs{font-size:20px}.logo_title_1qQzs span{font-size:15px}.logo_img_RGleO{width:20%}}@media(max-width:370px){.logo_img_RGleO{width:27%}.open_links_1nbfi ul li{font-size:9px}}',""]),n.locals={header_box:"header_box_U2znz",title:"title_1CXRm",number:"number_2OO2k",logo:"logo_3qITJ",logo_img:"logo_img_RGleO",active:"active_2yyQ-",links_icon:"links_icon_1tRKM",logo_title:"logo_title_1qQzs",star:"star_tWiQr",links:"links_12Wim",link_fix:"link_fix_2d-5W",img_icon:"img_icon_3Ngoj",arrow:"arrow_1Dmue",open_links:"open_links_1nbfi",menu:"menu_2PubK"},t.exports=n},426:function(t,e,l){"use strict";l.r(e);var n={name:"Header",components:{Price:l(405).default},data:function(){return{show:!1,items:[{page:"Website",icon:l(411)},{page:"Explore",icon:l(412)},{page:"Message Board",icon:l(413)},{page:"Source Code",icon:l(414)},{page:"Technical Documentation",icon:l(415)}]}}},o=l(416),r=l(45);var component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.header_box},[n("div",{class:t.$style.title},[n("div",{class:t.$style.logo},[n("div",{class:t.$style.logo_img},[n("img",{attrs:{src:l(407)}})]),t._v(" "),n("div",{class:t.$style.logo_title},[t._v("Bitcoin"),n("span",[t._v("(BTC)")])]),t._v(" "),n("img",{class:t.$style.star,attrs:{src:l(408)}})]),t._v(" "),n("div",{class:t.$style.links},[n("ul",{class:t.$style.link_fix},t._l(t.items,(function(e){return n("li",{key:e.id},[n("img",{class:t.$style.img_icon,attrs:{src:e.icon}}),t._v("\n          "+t._s(e.page)+"\n          "),n("img",{class:t.$style.arrow,attrs:{src:l(409)}})])})),0),t._v(" "),n("div",{class:t.$style.links_icon,on:{click:function(e){t.show=!t.show}}},[n("div",{class:[t.$style.logo_img,t.show?t.$style.active:""]},[n("img",{attrs:{src:l(410)}})]),t._v(" "),t.show?n("div",{class:t.$style.open_links},[t._m(0)]):t._e()])])]),t._v(" "),n("div",{class:t.$style.number},[n("Price")],1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",[l("li",[t._v("Website")]),t._v(" "),l("li",[t._v("Explore")]),t._v(" "),l("li",[t._v("Message Board")]),t._v(" "),l("li",[t._v("Source Code")]),t._v(" "),l("li",[t._v("Technical Documentation")])])}],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports},433:function(t,e,l){"use strict";var n=l(404),o=l.n(n);l.d(e,"default",(function(){return o.a}))},434:function(t,e,l){var n=l(100)(!1);n.push([t.i,".main_H_u0y{max-width:1230px;margin:0 auto}",""]),n.locals={main:"main_H_u0y"},t.exports=n},436:function(t,e,l){"use strict";l.r(e);var n=l(426),o=l(435),r={components:{Header:n.default,Chart:o.default}},c=l(433),_=l(45);var component=Object(_.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:t.$style.main},[l("Header"),t._v(" "),l("Chart")],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports;installComponents(component,{Header:l(426).default})}}]);