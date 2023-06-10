(()=>{"use strict";var e,t={707:(e,t,l)=>{var n=l(294),a=l(745);class o extends n.Component{render(){return n.createElement("div",null,"This is a placeholder for the employee filter.")}}class r extends n.Component{constructor(){super(),this.handleSubmit=this.handleSubmit.bind(this)}handleSubmit(e){e.preventDefault();const t=document.forms.employeeAdd,l={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(l),t.name.value="",t.ext.value="",t.email.value="",t.title.value=""}render(){return n.createElement("form",{name:"employeeAdd",onSubmit:this.handleSubmit},"Name: ",n.createElement("input",{type:"text",name:"name"}),n.createElement("br",null),"Extension: ",n.createElement("input",{type:"text",name:"ext",maxLength:4}),n.createElement("br",null),"Email: ",n.createElement("input",{type:"text",name:"email"}),n.createElement("br",null),"Title: ",n.createElement("input",{type:"text",name:"title"}),n.createElement("br",null),n.createElement("button",null,"Add"))}}function m(e){let{employees:t,deleteEmployee:l}=e;const a=t.map((e=>n.createElement(c,{key:e._id,employee:e,deleteEmployee:l})));return n.createElement("table",{className:"bordered-table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,"Name"),n.createElement("th",null,"Extension"),n.createElement("th",null,"Email"),n.createElement("th",null,"Title"),n.createElement("th",null,"Date Hired"),n.createElement("th",null,"Currently Employed?"),n.createElement("th",null))),n.createElement("tbody",null,a))}function c(e){let{deleteEmployee:t,employee:l}=e;return n.createElement("tr",null,n.createElement("td",null,l.name),n.createElement("td",null,l.extension),n.createElement("td",null,l.email),n.createElement("td",null,l.title),n.createElement("td",null,l.dateHired.toDateString()),n.createElement("td",null,l.currentlyEmployed?"Yes":"No"),n.createElement("td",null,n.createElement("button",{onClick:function(){t(l._id)}},"DELETE EMP")))}class i extends n.Component{constructor(){super(),this.state={employees:[]},this.createEmployee=this.createEmployee.bind(this),this.deleteEmployee=this.deleteEmployee.bind(this)}componentDidMount(){this.loadData()}loadData(){fetch("/api/employees").then((e=>e.json())).then((e=>{console.log("Total count of employees:",e.count),e.employees.forEach((e=>{e.dateHired=new Date(e.dateHired)})),this.setState({employees:e.employees})})).catch((e=>{console.log(e)}))}createEmployee(e){fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{e.employee.dateHired=new Date(e.employee.dateHired);const t=this.state.employees.concat(e.employee);this.setState({employees:t}),console.log("Total count of employees:",t.length)})).catch((e=>{console.log(e)}))}deleteEmployee(e){fetch(`/api/employees/${e}`,{method:"DELETE"}).then((e=>{e.ok?this.loadData():console.log("Failed to delete employee.")}))}render(){return n.createElement(n.Fragment,null,n.createElement("h1",null,"Employee Management Application"),n.createElement(o,null),n.createElement("hr",null),n.createElement(m,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}),n.createElement("hr",null),n.createElement(r,{createEmployee:this.createEmployee}))}}(0,a.s)(document.getElementById("content")).render(n.createElement(n.StrictMode,null,n.createElement(i,null)))}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,l,a,o)=>{if(!l){var r=1/0;for(s=0;s<e.length;s++){for(var[l,a,o]=e[s],m=!0,c=0;c<l.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](l[c])))?l.splice(c--,1):(m=!1,o<r&&(r=o));if(m){e.splice(s--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[l,a,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={624:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var a,o,[r,m,c]=l,i=0;if(r.some((t=>0!==e[t]))){for(a in m)n.o(m,a)&&(n.m[a]=m[a]);if(c)var s=c(n)}for(t&&t(l);i<r.length;i++)o=r[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},l=self.webpackChunkmodule01=self.webpackChunkmodule01||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=n.O(void 0,[736],(()=>n(707)));a=n.O(a)})();
//# sourceMappingURL=employees.bundle.js.map