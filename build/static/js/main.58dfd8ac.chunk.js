(window["webpackJsonpreact-antd-layout"]=window["webpackJsonpreact-antd-layout"]||[]).push([[0],{295:function(e,t,a){e.exports=a(592)},300:function(e,t,a){},301:function(e,t,a){},579:function(e,t,a){},592:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(300),a(27)),s=a(28),l=a(30),u=a(29),m=a(31),d=(a(301),a(596)),h=a(105),p=a(11),f=a(603),g=a(42),E=a(23),b=a(600),y=a(290),v=a(67),k=a(106),O=a.n(k),j=a(145),C=a(275),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={userInput:"",defaultMapSize:{lat:-33.797,lng:151.1},windowSize:10,emask_data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev").then((function(e){return e.json()})).then((function(t){e.setState({emask_data:t}),O.a.setApiKey("AIzaSyAOOgr6Eg-N_Pi3Ic5mNo1EybmjAH3w1D0"),O.a.setLanguage("en"),O.a.setRegion("aus"),O.a.enableDebug();for(var a=function(){var a=t[n].address;O.a.fromAddress(a).then((function(n){for(var o=n.results[0].geometry.location,r=o.lat,c=o.lng,i=0;i<t.length;i++)if(t[i].address===a){t[i].location={lat:r,lng:c},e.setState({emask_data:t});break}}),(function(e){console.error(e)}))},n=0;n<t.length;n++)a()}))}},{key:"onOpen",value:function(e){var t=Object(y.a)(this.state.emask_data);t[e].isMapOpen=!t[e].isMapOpen,this.setState({emask:t})}},{key:"getIndexPerson",value:function(){for(var e=0;e<this.state.emask_data.length;e++)if(this.state.emask_data[e].name===this.props.clickedInput.replace(/\s/g,""))return e}},{key:"getLocation",value:function(e){for(var t=[],a=0;a<this.state.emask_data.length;a++)if(Object(C.getDistance)(this.state.emask_data[a].location,e.location)<1e3&&e.address!==this.state.emask_data[a].address){var n=this.state.emask_data[a].location;n.name=this.state.emask_data[a].name,n.address=this.state.emask_data[a].address,console.log(e.address+" "+e.name),console.log(this.state.emask_data[a].name+" "+this.state.emask_data[a].address),t.push(n)}return t}},{key:"centerChange",value:function(){if(!0===this.props.clickable){var e=this.getIndexPerson();this.setState({defaultMapSize:this.state.emask_data[e].location})}}},{key:"render",value:function(){var e=this;return console.log(this.state.emask_data),o.a.createElement(v.GoogleMap,{zoom:this.props.windowSize,onCenterChanged:function(){e.centerChange()},onZoomChanged:function(){e.zoomChange()},center:this.state.defaultMapSize},this.state.emask_data.map((function(t,a){if(!0===e.props.clickable&&e.state.emask_data[a].name==e.props.clickedInput.replace(/\s/g,"")){var r=e.getLocation(t);return o.a.createElement("div",null,r.map((function(t,a){return o.a.createElement(v.Marker,{position:{lat:parseFloat(t.lat),lng:parseFloat(t.lng)},key:a,onClick:function(){return e.onOpen(a)}},e.state.emask_data[a].isMapOpen&&o.a.createElement(n.Fragment,null,o.a.createElement(v.InfoWindow,{onCloseClick:function(){return e.onOpen(a)}},o.a.createElement("div",null,o.a.createElement("h3",null,"Name: ",t.name),o.a.createElement("h3",null,"Address: ",t.address)))))})),o.a.createElement(v.Marker,{position:{lat:parseFloat(t.location.lat),lng:parseFloat(t.location.lng)},key:a,onClick:function(){return e.onOpen(a)}},e.state.emask_data[a].isMapOpen&&o.a.createElement(n.Fragment,null,o.a.createElement(v.InfoWindow,{onCloseClick:function(){return e.onOpen(a)}},o.a.createElement("div",null,o.a.createElement("h3",{style:{color:"red"}},o.a.createElement("b",null," Name: ",e.state.emask_data[a].name)),o.a.createElement("h3",{style:{color:"red"}},o.a.createElement("b",null," Address: ",e.state.emask_data[a].address)))),o.a.createElement(v.Circle,{radius:1e3,center:{lat:parseFloat(t.location.lat),lng:parseFloat(t.location.lng)}}))))}})))}}]),t}(n.Component),w=Object(j.compose)(v.withScriptjs,v.withGoogleMap)(S),Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=a.state.emask_data,n=e.currentTarget.value;console.log(t);var o=t.filter((function(e){return e.name.toLowerCase().indexOf(n.toLowerCase())>-1})),r=e.currentTarget.value.split("-")[0];a.setState({activeSuggestion:0,filteredSuggestions:o,showSuggestions:!0,userInput:r,clickedInput:""})},a.onClick=function(e){a.setState({activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:e.currentTarget.innerText.split("-")[0],clickedInput:e.currentTarget.innerText.split("-")[0],clickable:!0,windowSize:15}),console.log("Onclick")},a.onKeyDown=function(e){var t=a.state,n=t.activeSuggestion,o=t.filteredSuggestions;if(13===e.keyCode)a.setState({activeSuggestion:0,showSuggestions:!1,userInput:o[n]});else if(38===e.keyCode){if(0===n)return;a.setState({activeSuggestion:n-1})}else if(40===e.keyCode){if(n-1===o.length)return;a.setState({activeSuggestion:n+1})}},a.state={activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:"",clickable:!1,windowSize:10,emask_data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev").then((function(e){return e.json()})).then((function(t){return e.setState({emask_data:t})}))}},{key:"render",value:function(){var e,t=this;return 1==this.state.showSuggestions&&""!=this.state.userInput&&(e=this.state.filteredSuggestions.length?o.a.createElement("div",null,this.state.filteredSuggestions.map((function(e,a){var n;return a===t.state.activeSuggestion&&(n="suggestion-active"),o.a.createElement("div",{className:n,key:e.name,onClick:t.onClick},o.a.createElement(p.a,{type:"search"})," "+e.name+"-"+e.type)}))):o.a.createElement("div",{className:"no-suggestions"},o.a.createElement("em",null,"Not Found"))),o.a.createElement(n.Fragment,null,o.a.createElement(b.a,{type:"text",onChange:this.onChange,onKeyDown:this.onKeyDown,value:this.state.userInput,placeholder:"Search person"}),e,o.a.createElement(w,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAOOgr6Eg-N_Pi3Ic5mNo1EybmjAH3w1D0&v=3.exp&libraries=geometry,drawing,places",loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"400px"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),clickedInput:this.state.clickedInput,clickable:this.state.clickable,windowSize:this.state.windowSize}))}}]),t}(n.Component),x=Object(E.f)(Y),M=a(10),D=a.n(M),_=a(602),I=a(57),A=a(595),z=_.a.Meta,N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={emask_data:[],count_:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("count_data")&&this.setState({count:localStorage.setItem}),localStorage.setItem("count_data",0),fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev").then((function(e){return e.json()})).then((function(t){return e.setState({emask_data:t})}))}},{key:"sortData",value:function(){return this.state.emask_data.sort((function(e,t){return D()(e.date).isBefore(t.date)?1:D()(e.date).isAfter(t.date)?-1:0}))}},{key:"listDate",value:function(){for(var e=this.sortData(),t=[],a=0;a<e.length;a++)0===a?t.push(D()(e[a].date).format("YYYY-MM-DD")):D()(e[a].date).format("YYYY-MM-DD")!==D()(e[a-1].date).format("YYYY-MM-DD")&&t.push(D()(e[a].date).format("YYYY-MM-DD"));return t}},{key:"render",value:function(){var e=this.sortData(),t=this.listDate();return console.log("list date"),console.log(t),o.a.createElement("div",null,t.map((function(t,a){return o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement("b",null,D()(t).format("DD-MMMM-YYYY")," ")),o.a.createElement("hr",null),e.map((function(e,a){if(D()(e.date).format("YYYY-MM-DD")===t)return o.a.createElement(_.a,null,o.a.createElement(I.a,{lg:10,md:12,sm:24},o.a.createElement(z,{avatar:o.a.createElement(A.a,{size:20,icon:"ALERTED"===e.status?"alert":"check",style:{backgroundColor:"green"}}),title:e.name})),o.a.createElement(I.a,{lg:10,md:12,sm:24}," ",D()(e.date).format("LT")))})))})))}}]),t}(n.Component),T=a(116),F=a(599),P=a(119),L=a(87),R=a(152),H=a.n(R),W=F.a.Item,B=P.a.Option,K={labelCol:{span:8},wrapperCol:{span:16}},V={wrapperCol:{offset:8,span:16}},q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t=a.state.item;t.type=e,a.setState({item:t})},a.onNameChange=function(e){var t=a.state.item;t.name=e.currentTarget.value,t.key=(a.state.emask_data.length+1).toString(),a.setState({item:t})},a.onAddressChange=function(e){var t=a.state.item;t.address=e.currentTarget.value,a.setState({item:t})},a.onPhoneChange=function(e){var t=a.state.item;t.phone=e.currentTarget.value,a.setState({item:t})},a.onEmailChange=function(e){var t=a.state.item;t.email=e.currentTarget.value,a.setState({item:t})},a.state={item:{date:D()().format("YYYY-MM-DD hh:mm:ss"),address:"",email:"",isMapOpen:!0,key:"",name:"",phone:"",status:"ALERTED",type:"",emask_data:[]}},a.onChange=a.onChange.bind(Object(T.a)(a)),a.onClick=a.onClick.bind(Object(T.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev").then((function(e){return e.json()})).then((function(t){return e.setState({emask_data:t})}))}},{key:"onClick",value:function(){this.props.history.push("/camera",this.state.item),window.location.reload(!1)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return o.a.createElement(F.a,Object.assign({},K,{name:"basic"}),o.a.createElement(W,{label:"Name",name:"name"},e("userName",{initialValue:this.state.item.name,rules:[{required:!0,message:"Please input your name!"}]})(o.a.createElement(b.a,{onChange:this.onNameChange}))),o.a.createElement(W,{label:"Address",name:"Address"},e("address",{initialValue:this.state.item.address,rules:[{required:!0,message:"Please input your address!"}]})(o.a.createElement(b.a,{onChange:this.onAddressChange})),"  "),o.a.createElement(W,{label:"Phone number",name:"Phone number"},e("phone",{initialValue:this.state.item.phone,rules:[{required:!0,message:"Please input your phone number!"}]})(o.a.createElement(b.a,{onChange:this.onPhoneChange}))),o.a.createElement(W,{label:"Email",name:"email"},e("email",{initialValue:this.state.item.email,rules:[{required:!0,message:"Please input your email!"}]})(o.a.createElement(b.a,{onChange:this.onEmailChange}))),o.a.createElement(W,{label:"status",name:"type",rules:[{required:!0,message:"Please input your name!"}]},o.a.createElement(P.a,{value:this.state.item.type,onChange:this.onChange},o.a.createElement(B,{value:"Employee"},"Employee"),o.a.createElement(B,{value:"Non-Employee"},"Non-Employee"))),o.a.createElement(W,V,o.a.createElement(L.a,{type:"primary",htmlType:"submit",onClick:this.onClick},"Submit")))}}]),t}(n.Component),G=F.a.create({name:"normal_login"})(Object(E.f)(q)),U=a(601),Z=a(199),J=a(291),$=a(598),Q=a(597),X=(a(579),d.a.Content),ee=Z.a.TabPane,te=[{title:"Name",dataIndex:"name",key:"name",sorted:function(e,t){return e.name.length-t.name.length},sortDirections:["descend","ascend"]},{title:"Email",dataIndex:"email",key:"email",sorted:function(e,t){return e.email.length-t.email.length},sortDirections:["descend","ascend"]},{title:"Phone",dataIndex:"phone",key:"phone",sorted:function(e,t){return e.phone-t.phone},sortDirections:["descend","ascend"]},{title:"Status",dataIndex:"status",key:"status",render:function(e){var t="red";return"CONFIRMED"===e?t="green":"ALERTED"===e&&(t="red"),o.a.createElement("div",null,o.a.createElement(J.a,{color:t},e))}},{title:"Date",dataIndex:"date",key:"date",sorted:function(e,t){return D()(e.date).isAfter(t.date)},sortDirections:["descend","ascend"]}],ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedOption:"1",pickeddate:D()("2020/06/09","YYYY/MM/DD"),emask_data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.setItem("route",this.props.location.pathname),fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev").then((function(e){return e.json()})).then((function(t){return e.setState({emask_data:t})}))}},{key:"render",value:function(){var e=this,t=this.state.emask_data.filter((function(t){return console.log(e.state.pickeddate),"1"==e.state.selectedOption?(console.log("hello"),console.log(D()(t.date,"YYYY/MM/DD")),"Employee"===t.type&&D()(t.date).format("YYYY-MM-DD")===D()(e.state.pickeddate).format("YYYY-MM-DD")):"3"===e.state.selectedOption?"Employee"===t.type&&D()(t.date,"YYYY/MM/DD").month()===e.state.pickeddate.month()&&D()(t.date,"YYYY/MM/DD").year()===e.state.pickeddate.year():"2"===e.state.selectedOption?"Employee"===t.type&&D()(t.date,"YYYY/MM/DD").month()===e.state.pickeddate.month()&&D()(t.date,"YYYY/MM/DD").year()===e.state.pickeddate.year()&&D()(t.date,"YYYY/MM/DD").isoWeek()===e.state.pickeddate.isoWeek():void 0})),a=this.state.emask_data.filter((function(e){return"Non-Employee"===e.type})),n=o.a.createElement(h.a,{mode:"horizontal",defaultSelectedKeys:["1"]},o.a.createElement(h.a.Item,{key:"1",onClick:function(){e.setState({selectedOption:"1"})}},"All day"),o.a.createElement(h.a.Item,{key:"2",onClick:function(){e.setState({selectedOption:"2"})}},"All week"),o.a.createElement(h.a.Item,{key:"3",onClick:function(){e.setState({selectedOption:"3"})}},"All month"));return o.a.createElement(X,null,o.a.createElement(Z.a,{defaultActiveKey:"1"},o.a.createElement(ee,{key:"1",tab:"Employees"},o.a.createElement("div",{id:"datepicker"},o.a.createElement($.a,{defaultValue:D()("2020/06/09","YYYY/MM/DD"),format:"YYYY/MM/DD",onChange:function(t){e.setState({pickeddate:t})}})),o.a.createElement("div",{id:"dateoption"},n),o.a.createElement(Q.a,{dataSource:t,columns:te,scroll:{x:"calc(700px + 50%)",y:240}})),o.a.createElement(ee,{key:"2",tab:"Non-Enployees"},o.a.createElement("div",{id:"datepicker"},o.a.createElement($.a,{defaultValue:D()("2020/06/09","YYYY/MM/DD"),format:"YYYY/MM/DD",onChange:function(t){e.setState({pickeddate:t})}})),o.a.createElement("div",{id:"dateoption"},n),o.a.createElement(Q.a,{dataSource:a,columns:te,scroll:{x:"calc(700px + 50%)",y:240}}))))}}]),t}(n.Component),ne=Object(E.f)(ae),oe=a(107),re=(_.a.Grid,_.a.Meta),ce=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("hr",null),o.a.createElement(oe.a,null,o.a.createElement(I.a,{span:18,push:6},o.a.createElement("div",{style:{paddingLeft:100}},o.a.createElement(re,{avatar:o.a.createElement(A.a,{size:100,icon:"user"})}))),o.a.createElement(I.a,{span:6,pull:18},o.a.createElement("div",null," 1. "),o.a.createElement("h2",null," Frank"),o.a.createElement("h2",null,o.a.createElement("b",null," 23")))))}}]),t}(n.Component),ie=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(oe.a,{gutter:18},o.a.createElement(I.a,{lg:10,md:12,sm:24},o.a.createElement(_.a,{bordered:!1,title:"Most Alerted (month)"},o.a.createElement(ce,null))),o.a.createElement(I.a,{lg:10,md:12,sm:24},o.a.createElement(_.a,{bordered:!1,title:"Daily Alerted"},o.a.createElement("hr",null),o.a.createElement("h2",null,"5")))))}}]),t}(n.Component),se=a(88),le=d.a.Content,ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={emask_data:[],month_data:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev").then((function(e){return e.json()})).then((function(t){return e.setState({emask_data:t})}))}},{key:"extract_month",value:function(){for(var e=[{month:"Jan",count:0},{month:"Feb",count:0},{month:"Mar",count:0},{month:"Apr",count:0},{month:"May",count:0},{month:"Jun",count:0},{month:"jul",count:0},{month:"Aug",count:0},{month:"Sep",count:0},{month:"Oct",count:0},{month:"Nov",count:0},{month:"Dec",count:0}],t=0;t<this.state.emask_data.length;t++)for(var a=0;a<e.length;a++){var n=a+1;if("ALERTED"===this.state.emask_data[t].status&&parseInt(D()(this.state.emask_data[t].date).format("MM"))==n){e[a].count=e[a].count+1;break}}return e}},{key:"render",value:function(){var e=this.extract_month();return o.a.createElement(le,null,o.a.createElement(_.a,null,o.a.createElement("h2",{style:{textAlign:"center"}}," The number of unweared masks by month "),o.a.createElement(se.Chart,{data:e,height:200,forceFit:!0},o.a.createElement(se.Legend,null),o.a.createElement(se.Axis,{name:"month",label:{textStyle:{fill:"red",textBaseline:"top"}}}),o.a.createElement(se.Axis,{name:"count"}),o.a.createElement(se.Tooltip,{crosshairs:{type:"y"}}),o.a.createElement(se.Geom,{type:"interval",position:"month*count",style:{cursor:"pointer"},active:[!0,{style:{fill:"black",shadowColor:"red",shadowBlur:1,opacity:0}}],tooltip:["month*count",function(e,t){return{name:"the number of alerted",value:t}}],adjust:[{type:"dodge",marginRatio:1/32}]}))))}}]),t}(n.Component),me=d.a.Content,de=(U.a.BreadcrumbItem,function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(me,null,o.a.createElement("h3",null,"Customer"),o.a.createElement(ie,null),o.a.createElement(ue,null),o.a.createElement(ne,null)))}}]),t}(n.Component)),he=Object(E.f)(de),pe=a(40),fe=a(286),ge=a(146),Ee=a.n(ge),be=a(287);var ye=a(61),ve=a(62);function ke(){var e=Object(ye.a)(["\n  width: 75%;\n  min-width: 100px;\n  max-width: 250px;\n  margin-top: 24px;\n  padding: 12px 24px;\n  background: silver;\n"]);return ke=function(){return e},e}function Oe(){var e=Object(ye.a)(["\n        animation: "," 750ms ease-out;\n      "]);return Oe=function(){return e},e}function je(){var e=Object(ye.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  background-color: #ffffff;\n\n  ","\n"]);return je=function(){return e},e}function Ce(){var e=Object(ye.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  bottom: 20px;\n  left: 20px;\n  box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.6);\n  border: 1px solid #ffffff;\n  border-radius: 10px;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(ye.a)(["\n  position: absolute;\n\n  &::-webkit-media-controls-play-button {\n    display: none !important;\n    -webkit-appearance: none;\n  }\n"]);return Se=function(){return e},e}function we(){var e=Object(ye.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);return we=function(){return e},e}function Ye(){var e=Object(ye.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  max-width: ",";\n  max-height: ",";\n"]);return Ye=function(){return e},e}function xe(){var e=Object(ye.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width: 100%;\n"]);return xe=function(){return e},e}function Me(){var e=Object(ye.a)(["\n  from {\n    opacity: 0.75;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);return Me=function(){return e},e}var De=Object(ve.c)(Me()),_e=ve.b.div(xe()),Ie=ve.b.div(Ye(),(function(e){var t=e.maxWidth;return t&&"".concat(t,"px")}),(function(e){var t=e.maxHeight;return t&&"".concat(t,"px")})),Ae=ve.b.canvas(we()),ze=ve.b.video(Se()),Ne=ve.b.div(Ce()),Te=ve.b.div(je(),(function(e){if(e.flash)return Object(ve.a)(Oe(),De)})),Fe=ve.b.button(ke()),Pe={audio:!1,video:{facingMode:"environment"}};var Le=Object(E.f)((function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),r=Object(n.useState)({width:0,height:0}),c=Object(pe.a)(r,2),i=c[0],s=c[1],l=Object(n.useState)(!1),u=Object(pe.a)(l,2),m=u[0],d=u[1],h=Object(n.useState)(!0),p=Object(pe.a)(h,2),f=p[0],g=p[1],E=Object(n.useState)(!1),b=Object(pe.a)(E,2),y=b[0],v=b[1],k=Object(n.useState)(""),O=Object(pe.a)(k,2),j=O[0],C=O[1],S=Object(n.useState)([]),w=Object(pe.a)(S,2),Y=(w[0],w[1],function(e){var t=Object(n.useState)(null),a=Object(pe.a)(t,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(be.a)(Ee.a.mark((function t(){var a;return Ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia(e);case 3:a=t.sent,r(a),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}if(o)return function(){o.getTracks().forEach((function(e){e.stop()}))};!function(){t.apply(this,arguments)}()}),[o,e]),o}(Pe)),x=function(e){var t=Object(n.useState)(e),a=Object(pe.a)(t,2),o=a[0],r=a[1];return[o,Object(n.useCallback)((function(e,t){e&&t&&r(e<=t?t/e:e/t)}),[])]}(1.586),M=Object(pe.a)(x,2),D=M[0],_=M[1],I=function(e,t,a,o){var r=Object(n.useState)({x:0,y:0}),c=Object(pe.a)(r,2),i=c[0],s=c[1];return Object(n.useEffect)((function(){if(e&&t&&a&&o){var n=e>a?Math.round((e-a)/2):0,r=t>o?Math.round((t-o)/2):0;s({x:n,y:r})}}),[e,t,a,o]),i}(a.current&&a.current.videoWidth,a.current&&a.current.videoHeight,i.width,i.height);function A(){_(a.current.videoHeight,a.current.videoWidth),d(!0),a.current.play()}function z(){if(localStorage.getItem("count_data")){var t=parseInt(localStorage.getItem("count_data"));localStorage.setItem("count_data",t+1)}else localStorage.setItem("count_data",1);console.log(e.history.location.state.status),console.log(e.history.location.state.phone),"ALERTED"===e.history.location.state.status&&H.a.post("https://f0mrzhjnf1.execute-api.ap-southeast-2.amazonaws.com/stage",{message:"U should wear the meask immediately",phoneNumber:"".concat(e.history.location.state.phone)}),e.history.push("/")}return Y&&a.current&&!a.current.srcObject&&(a.current.srcObject=Y),Object(n.useEffect)((function(){setTimeout((function(){m&&f&&(!function(){t.current.getContext("2d").drawImage(a.current,I.x,I.y,i.width,i.height,0,0,i.width,i.height);var e=document.createElement("a");e.download="image.png",t.current.toBlob((function(t){e.href=URL.createObjectURL(t),console.log(t),C(e.href),console.log(e.href)}),"image/png",1),g(!1),v(!0)}(),t.current.getContext("2d").clearRect(0,0,t.current.width,t.current.height),g(!1),H.a.post("https://fhrs5atn73.execute-api.ap-southeast-2.amazonaws.com/dev",{key5:"".concat(e.history.location.state.date),key2:"".concat(e.history.location.state.address),key3:"".concat(e.history.location.state.email),key4:"".concat(e.history.location.state.isMapOpen),key1:"".concat(e.history.location.state.key),key6:"".concat(e.history.location.state.name),key7:"".concat(e.history.location.state.phone),key8:"".concat(e.history.location.state.status),key9:"".concat(e.history.location.state.type)}).then((function(e){console.log(e)})))}),2e3)})),Y?o.a.createElement(n.Fragment,null,o.a.createElement(fe.a,{bounds:!0,onResize:function(e){s({width:e.bounds.width,height:Math.round(e.bounds.width/D)})}},(function(e){var r=e.measureRef;return o.a.createElement(_e,null,o.a.createElement(Ie,{ref:r,maxHeight:a.current&&a.current.videoHeight,maxWidth:a.current&&a.current.videoWidth,style:{height:"".concat(i.height,"px")}},o.a.createElement(ze,{ref:a,hidden:!m,onCanPlay:A,autoPlay:!0,playsInline:!0,muted:!0,style:{top:"-".concat(I.y,"px"),left:"-".concat(I.x,"px")}}),o.a.createElement(Ne,{hidden:!m}),o.a.createElement(Ae,{ref:t,width:i.width,height:i.height}),o.a.createElement(Te,{flash:y,onAnimationEnd:function(){return v(!1)}})),!f&&o.a.createElement(n.Fragment,null,o.a.createElement("div",null,o.a.createElement("h2",{style:{textAlign:"center"}},"Preview"),o.a.createElement("img",{src:j})),o.a.createElement(Fe,{onClick:z}," Go Back ")))}))):null})),Re=d.a.Header,He=d.a.Footer,We=d.a.Sider,Be=d.a.Content,Ke=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.state={collapsed:"true",count:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("count_data")&&this.setState({count:localStorage.getItem("count_data")})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d.a,null,o.a.createElement(d.a,null,o.a.createElement(We,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},o.a.createElement(h.a,{mode:"inline",theme:"dark"},o.a.createElement(h.a.Item,{key:"/"},o.a.createElement(g.b,{to:"/"},o.a.createElement(p.a,{type:"home"}),o.a.createElement("span",null,"Home "))),o.a.createElement(h.a.Item,{key:"/customer"},o.a.createElement(g.b,{to:"/customer"},o.a.createElement(p.a,{type:"user"}),o.a.createElement("span",null,"Customer "))),o.a.createElement(h.a.Item,{key:"/history"},o.a.createElement(f.a,{count:this.state.count,offset:[10,10]},o.a.createElement(g.b,{to:"/history"},o.a.createElement(p.a,{type:"history"}),o.a.createElement("span",null,"History ")))),o.a.createElement(h.a.Item,{key:"/scan"},o.a.createElement(g.b,{to:"/scan"},o.a.createElement(p.a,{type:"scan"}),o.a.createElement("span",null,"Scan "))))),o.a.createElement(d.a,null,o.a.createElement(Re,{style:{paddingLeft:10,backgroundColor:"white"}},o.a.createElement(p.a,{type:this.state.collapsed?"right-circle":"left-circle",onClick:this.toggle})),o.a.createElement(Be,{style:{padding:"0 50px",minHeight:400,backgroundColor:"white"}},o.a.createElement(E.c,null,o.a.createElement(E.a,{exact:!0,path:"/",component:x}),o.a.createElement(E.a,{path:"/customer",component:he}),o.a.createElement(E.a,{path:"/history"},o.a.createElement(N,{count:this.state.count,onCountChange:this.onCountChange,setCountZero:this.setCountZero})),o.a.createElement(E.a,{path:"/scan"},o.a.createElement(G,{count:this.state.count,onCountChange:this.onCountChange,setCountZero:this.setCountZero})),o.a.createElement(E.a,{path:"/camera",component:Le}))),o.a.createElement(He,{style:{textAlign:"center"}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g.a,null,o.a.createElement(Ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[295,1,2]]]);
//# sourceMappingURL=main.58dfd8ac.chunk.js.map