(this["webpackJsonpdelorean-chronometer"]=this["webpackJsonpdelorean-chronometer"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(13),r=n.n(i),s=(n(18),n(2)),o=n(3),j=n(5),l=n(4),u=(n(19),n(8)),d=n(9),b=n(0),O=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("button",{className:"start",children:[Object(b.jsx)("p",{children:"1.21"}),Object(b.jsx)("p",{children:"GIGAWATTS"})]})}}]),n}(c.a.Component),h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.value;return Object(b.jsxs)("div",{className:t,children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("input",{type:"text",placeholder:n})]})}}]),n}(c.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.value;return Object(b.jsxs)("div",{className:t,children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("div",{children:n})]})}}]),n}(c.a.Component),p=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.day,n=e.month,a=e.hour,c=e.min,i=e.sec,r=e.id;return Object(b.jsxs)("div",{className:"timeframe",children:[Object(b.jsxs)("div",{className:"date",children:[Object(b.jsx)(m,{id:"day",value:t}),Object(b.jsx)(m,{id:"month",value:n}),"destination-time"===r?Object(b.jsx)(h,{id:"hour",value:a}):Object(b.jsx)(m,{id:"hour",value:a}),"destination-time"===r?Object(b.jsx)(h,{id:"min",value:c}):Object(b.jsx)(m,{id:"min",value:c}),"destination-time"===r?Object(b.jsx)(O,{}):Object(b.jsx)(m,{id:"sec",value:i})]}),Object(b.jsx)("div",{className:"legend",children:Object(b.jsx)("p",{children:this.props.legend})})]})}}]),n}(c.a.Component),v={day:Object(u.a)(new Date,"dd",{locale:d.a}),month:Object(u.a)(new Date,"MMM",{locale:d.a}),hour:Object(u.a)(new Date,"HH",{locale:d.a}),min:Object(u.a)(new Date,"mm",{locale:d.a}),sec:Object(u.a)(new Date,"ss",{locale:d.a})},x=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state=v,e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({day:Object(u.a)(new Date,"dd",{locale:d.a}),month:Object(u.a)(new Date,"MMM",{locale:d.a}),hour:Object(u.a)(new Date,"HH",{locale:d.a}),min:Object(u.a)(new Date,"mm",{locale:d.a}),sec:Object(u.a)(new Date,"ss",{locale:d.a})})}),1)}},{key:"render",value:function(){var e=this.state,t=e.day,n=e.month,a=e.hour,c=e.min,i=e.sec;return Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)(p,{legend:"Present Time",id:"present-time",day:t,month:n,hour:a,min:c,sec:i}),Object(b.jsx)(p,{legend:"Destination Time",id:"destination-time",day:t,month:n,hour:a,min:c,sec:i}),Object(b.jsx)(p,{legend:"Countdown",id:"countdown",day:t,month:n,hour:a,min:c,sec:i})]})}}]),n}(c.a.Component),f=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"background",children:Object(b.jsx)(x,{})})}}]),n}(c.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),y()}},[[21,1,2]]]);
//# sourceMappingURL=main.cf13d14c.chunk.js.map