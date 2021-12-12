(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(5),i=a.n(s),c=(a(14),a(6)),r=a(7),l=a(9),h=a(8),o=(a(15),a(3)),d=a.n(o),u=a(0),p=function(){return Object(u.jsx)("div",{className:d.a.spinWrapper,children:Object(u.jsx)("div",{className:d.a.spinner})})},j=function(e){var t=e.value,a=e.isLoading,n=e.searchingCity,s=e.startSearch,i=e.clearInput;return Object(u.jsxs)("div",{className:"search-panel",children:[Object(u.jsx)("input",{type:"text",value:t,onChange:n,onKeyDown:s,placeholder:"Enter the city",disabled:a}),Object(u.jsx)("button",{onClick:i,children:"clear"}),a?Object(u.jsx)(p,{}):null]})},m=a(4),b=function(e){var t=e.weather,a="".concat(t.weather[0].main,"-icon");return Object(u.jsxs)("div",{className:"info ".concat(a),children:[Object(u.jsxs)("div",{className:"city",children:[t.name,", ",t.sys.country]}),Object(u.jsxs)("div",{className:"temperature",children:[Object(u.jsxs)("p",{className:"temp_feels-like",children:["Feels like: ",Math.round(t.main.feels_like),"\xb0"]}),Object(u.jsxs)("p",{className:"temp_max",children:["Max: ",Math.round(t.main.temp_max),"\xb0"]}),Object(u.jsxs)("p",{className:"temp_min",children:["Min: ",Math.round(t.main.temp_min),"\xb0"]})]}),Object(u.jsxs)("p",{className:"temp_now",children:[Math.round(t.main.temp),"\xb0C"]}),Object(u.jsx)("div",{className:"date",children:m.DateTime.fromSeconds(t.dt).toLocaleString(m.DateTime.DATE_HUGE)}),Object(u.jsx)("p",{className:"general_description",children:t.weather[0].main}),Object(u.jsxs)("div",{className:"description",children:[Object(u.jsxs)("p",{className:"visibility",children:["Visibility: ",t.visibility," m"]}),Object(u.jsxs)("p",{className:"humidity",children:["Humidity: ",t.main.humidity,"%"]})]})]})},x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).searchingCity=function(e){n.setState({value:e.target.value,weather:null})},n.url="https://api.openweathermap.org/data/2.5/",n.key="33178d46dea4c98a92d98aa6ea4ebc24",n.getData=function(){var e=n.state;e.weather,e.value;fetch("".concat(n.url,"weather?q=").concat(n.state.value,"&appid=").concat(n.key,"&units=metric")).then((function(e){return e.json()})).then((function(e){return n.setState({weather:e,isLoading:!1})}))},n.startSearch=function(e){"Enter"===e.key&&n.setState({isLoading:!0,weather:null},n.getData)},n.clearInput=function(){n.setState({value:"",weather:null})},n.state={value:"",weather:null,isLoading:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.weather,a=e.value,n=e.isLoading;e.existMessage;return Object(u.jsxs)("div",{className:t&&t.name===a&&t.weather[0].main?"App ".concat(t.weather[0].main," "):"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)("h1",{children:"Weather now"})}),Object(u.jsx)(j,{isLoading:n,value:a,searchingCity:this.searchingCity,startSearch:this.startSearch,clearInput:this.clearInput}),t?Object(u.jsx)("div",{className:"display",children:t.message?Object(u.jsx)("p",{className:"not-found",children:"Not found"}):Object(u.jsx)(b,{weather:t})}):null]})}}]),a}(n.Component);i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))},3:function(e,t,a){e.exports={"spin-wrapper":"Loader_spin-wrapper__23K6i",spinner:"Loader_spinner__1oBcK",spin:"Loader_spin__3E4o4"}}},[[17,1,2]]]);
//# sourceMappingURL=main.9ef01e53.chunk.js.map