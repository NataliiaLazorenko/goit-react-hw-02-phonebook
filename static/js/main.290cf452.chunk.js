(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"Filter_label__30kOf","input-field":"Filter_input-field__14v9j"}},13:function(t,e,n){t.exports={container:"Container_container__3_uj_"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1c8ml","form-label":"ContactForm_form-label__3yMEq","form-input":"ContactForm_form-input__2Aat6",button:"ContactForm_button__2KoMb"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),i=n(15),s=n(4),l=n(5),u=n(7),m=n(6),b=n(10),d=n.n(b),h=n(13),j=n.n(h),f=n(0),p=function(t){var e=t.children;return Object(f.jsx)("div",{className:j.a.container,children:e})},C=n(14),O=n(2),_=n.n(O),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.name&&(t.props.onFormSubmit(t.state),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.form,children:[Object(f.jsxs)("label",{className:_.a["form-label"],children:["Name",Object(f.jsx)("input",{type:"text",placeholder:"Enter name",name:"name",value:e,onChange:this.handleChange,className:_.a["form-input"]})]}),Object(f.jsxs)("label",{className:_.a["form-label"],children:["Phone Number",Object(f.jsx)("input",{type:"tel",placeholder:"Enter phone number",name:"number",value:n,onChange:this.handleChange,className:_.a["form-input"]})]}),Object(f.jsx)("button",{type:"submit",className:_.a.button,disabled:""===e,children:"Add contact"})]})}}]),n}(a.Component),x=n(8),g=n.n(x),y=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(f.jsxs)("li",{className:g.a["list-item"],children:[Object(f.jsxs)("p",{children:[Object(f.jsxs)("span",{className:g.a["contact-name"],children:[n,": "]}),a]}),Object(f.jsx)("button",{type:"button",onClick:function(){return c(e)},className:g.a.button,children:"Delete"})]})},N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsx)(y,{id:e,name:a,number:c,onDeleteContact:n},e)}))})},S=n(11),w=n.n(S),k=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:w.a.label,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n,className:w.a["input-field"]})]})},F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.contactId=d.a.generate(),t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts"));else{var c={id:d.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))}},t.filterContacts=function(e){var n=e.target.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.state.filter.toLowerCase(),n=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(v,{onFormSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(k,{value:t,onChange:this.filterContacts}),Object(f.jsx)(N,{contacts:n,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(29),n(30);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={"list-item":"ContactListItem_list-item__2zoVq","contact-name":"ContactListItem_contact-name__24dbS",button:"ContactListItem_button__2jK8I"}}},[[31,1,2]]]);
//# sourceMappingURL=main.290cf452.chunk.js.map