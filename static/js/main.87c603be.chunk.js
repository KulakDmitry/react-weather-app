(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(5),s=a.n(i),c=(a(14),a(6)),r=a(7),l=a(9),o=a(8),h=(a(15),a(3)),d=a.n(h),p=a(0),u=function(){return Object(p.jsx)("div",{className:d.a.spinWrapper,children:Object(p.jsx)("div",{className:d.a.spinner})})},j=function(e){var t=e.value,a=e.isLoading,n=e.searchingCity,i=e.startSearch,s=e.clearInput;return Object(p.jsxs)("div",{className:"search-panel",children:[Object(p.jsx)("input",{type:"text",value:t,onChange:n,onKeyDown:i,placeholder:"Enter the city",disabled:a}),Object(p.jsx)("button",{onClick:s,children:"clear"}),a?Object(p.jsx)(u,{}):null]})},m=a(4),b=function(e){var t=e.weather,a="".concat(t.weather[0].main,"-icon");return Object(p.jsxs)("div",{className:"info ".concat(a),children:[Object(p.jsxs)("div",{className:"city",children:[t.name,", ",t.sys.country]}),Object(p.jsxs)("div",{className:"temperature",children:[Object(p.jsxs)("p",{className:"temp_feels-like",children:["Feels like: ",Math.round(t.main.feels_like),"\xb0"]}),Object(p.jsxs)("p",{className:"temp_max",children:["Max: ",Math.round(t.main.temp_max),"\xb0"]}),Object(p.jsxs)("p",{className:"temp_min",children:["Min: ",Math.round(t.main.temp_min),"\xb0"]})]}),Object(p.jsxs)("p",{className:"temp_now",children:[Math.round(t.main.temp),"\xb0C"]}),Object(p.jsx)("div",{className:"date",children:m.DateTime.fromSeconds(t.dt).toLocaleString(m.DateTime.DATE_HUGE)}),Object(p.jsx)("p",{className:"general_description",children:t.weather[0].main}),Object(p.jsxs)("div",{className:"description",children:[Object(p.jsxs)("p",{className:"visibility",children:["Visibility: ",t.visibility," m"]}),Object(p.jsxs)("p",{className:"humidity",children:["Humidity: ",t.main.humidity,"%"]})]})]})},x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).searchingCity=function(e){n.setState({value:e.target.value})},n.url="https://api.openweathermap.org/data/2.5/",n.key="33178d46dea4c98a92d98aa6ea4ebc24",n.getData=function(){fetch("".concat(n.url,"weather?q=").concat(n.state.value,"&appid=").concat(n.key,"&units=metric")).then((function(e){return e.json()})).then((function(e){return n.setState({weather:e,isLoading:!1})}))},n.startSearch=function(e){"Enter"===e.key&&n.setState({isLoading:!0,weather:null},n.getData)},n.clearInput=function(){n.setState({value:"",weather:null})},n.state={value:"",weather:null,isLoading:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.weather,a=e.value,n=e.isLoading;return Object(p.jsxs)("div",{className:t&&t.weather?"App ".concat(t.weather[0].main," "):"App",children:[Object(p.jsx)("header",{children:Object(p.jsx)("h1",{children:"Weather now"})}),Object(p.jsx)(j,{isLoading:n,value:a,searchingCity:this.searchingCity,startSearch:this.startSearch,clearInput:this.clearInput}),t?Object(p.jsx)("div",{className:"display",children:"404"===t.cod?Object(p.jsx)("p",{className:"not-found",children:"Not found"}):Object(p.jsx)(b,{weather:t})}):null]})}}]),a}(n.Component);s.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))},3:function(e,t,a){e.exports={"spin-wrapper":"Loader_spin-wrapper__23K6i",spinner:"Loader_spinner__1oBcK",spin:"Loader_spin__3E4o4"}}},[[17,1,2]]]);
//# sourceMappingURL=main.87c603be.chunk.js.map