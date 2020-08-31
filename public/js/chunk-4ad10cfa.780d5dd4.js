(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ad10cfa"],{"143c":function(e,t,l){},5540:function(e,t,l){"use strict";var i=l("143c"),a=l.n(i);a.a},b99a:function(e,t,l){"use strict";var i=l("d4ec"),a=l("bee2"),n=l("bc3a"),s=l.n(n),r=l("fce9"),c=r["a"]+"bills",o=function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"createBill",value:function(e){return s.a.post(c,e)}},{key:"getAllBills",value:function(e){return s.a.get(c+"/"+e)}},{key:"deleteBill",value:function(e,t){return s.a.delete(c+"/"+e+"/"+t)}},{key:"updateBill",value:function(e,t,l){s.a.delete(c+"/"+e+"/"+t),s.a.post(c,l)}}]),e}();t["a"]=new o},dc62:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-form",{model:{value:e.isValid,callback:function(t){e.isValid=t},expression:"isValid"}},[i("v-row",[i("v-col",[i("h3",[e._v("Bill by")]),i("img",{staticClass:"img",attrs:{height:"30",src:l("dae4")}})])],1),i("v-row",[i("v-col",{staticClass:" col- .col-md-4"},[i("v-text-field",{staticClass:"error-combobox",attrs:{outlined:"",type:"text",rules:e.verifyBillName,name:"billName",label:"Bill Name","append-icon":"mdi-card-plus",required:""},model:{value:e.bill.billName,callback:function(t){e.$set(e.bill,"billName",t)},expression:"bill.billName"}})],1)],1),i("v-card",{staticClass:"errors",attrs:{flat:""}},[i("span",{staticStyle:{color:"#FB236A"}},[e._v(e._s(e.message))])]),i("v-row",{attrs:{id:"line_item",justify:"center"}},[i("v-col",{staticClass:" col-3 .col-md-4"},[i("h3",[e._v(" ITEM NAME ")])]),i("v-col",{staticClass:" col-2 .col-md-4"},[i("h3",[e._v(" QUANTITY ")])]),i("v-col",{staticClass:" col-2 .col-md-4"},[i("h3")])],1),e.error?i("v-row",{staticClass:" col-10 .col-md-4",attrs:{justify:"center"}}):e._e(),e._l(e.bill_line_items,(function(t,l){return i("v-row",{key:l,attrs:{justify:"center"}},[i("v-col",{staticClass:" col-5 .col-md-4"},[i("v-autocomplete",{attrs:{chips:"",items:e.billItemsNames,"item-text":"bill_item_name",outlined:"",rules:e.verifyItemName,color:"white",height:"2",name:"bill_item_name",label:"Item Name",required:""},on:{change:e.GetItemPrice},model:{value:t.bill_item_name,callback:function(l){e.$set(t,"bill_item_name",l)},expression:"bill_line_item.bill_item_name"}})],1),i("v-col",{staticClass:" col-5 .col-md-4"},[i("v-text-field",{directives:[{name:"cloneya-input",rawName:"v-cloneya-input",value:"quantity",expression:"'quantity'"}],staticClass:"error-combobox",attrs:{outlined:"",type:"number",name:"quantity",rules:e.verifyQuantity,label:"Quantity","append-icon":"mdi-numeric-1-box-multiple",required:""},model:{value:t.quantity,callback:function(l){e.$set(t,"quantity",l)},expression:"bill_line_item.quantity"}})],1),i("v-col",{staticClass:" col-1 .col-md-4"},[i("v-avatar",{attrs:{color:"primary","x-large":""},on:{click:e.addLine}},[i("v-icon",{staticClass:"mdi-108px mdi-light"},[e._v("mdi-playlist-plus")])],1)],1),i("v-col",{staticClass:" col-1 .col-md-4"},[l+1===e.bill_line_items.length?i("v-avatar",{attrs:{color:"error","x-large":""},on:{click:function(t){return e.removeLine(l)}}},[i("v-icon",{attrs:{dark:""}},[e._v("mdi-delete-forever")])],1):e._e()],1)],1)})),i("v-row",[i("v-col",{staticClass:"col-8 .col-md-4"}),i("v-col",{staticClass:"col-4 .col-md-4"},[i("v-btn",{staticClass:"log-btn",attrs:{block:"","x-large":"",loading:e.loading,disabled:!e.isValid,color:"#10195D",name:"createBill"},on:{click:e.createBill}},[e._v(" create bill ")])],1)],1)],2)],1)},a=[],n=(l("4de4"),l("a434"),l("4ad7")),s=l("6468"),r=l("b99a"),c={name:"createNewBill",data:function(){return{isValid:!0,blockRemoval:!0,price:null,inputGroup:0,loading:!1,billName:null,billItems:null,billItemsNames:[],message:null,bill:new n["a"]("","",""),bill_line_items:[],verifyBillName:[function(e){return!!e||"Bill Name is required"},function(e){return e&&e.length>=4||"Bill Name must be greater than 3 characters"}],verifyBillElement:[function(e){return!!e||"Number of elements required"},function(e){return e&&e>0||"Bill must have atleast one element"}],verifyItemName:[function(e){return!!e||"Please make a valid selection"}],verifyQuantity:[function(e){return!!e||"Please add a valid value"}]}},mounted:function(){this.addLine(),this.useUserId()},created:function(){this.fetchData()},watch:{$route:"fetchData",bill_line_items:function(){this.blockRemoval=this.bill_line_items.length<=1}},methods:{useUserId:function(){this.getUserID&&(this.bill.userId=this.$store.state.auth.user.id)},addLine:function(){var e=this.bill_line_items.filter((function(e){return null===e.bill_item_name}));e.length>=1&&this.bill_line_items.length>0?this.message="Please fill the last line before adding a new one !":this.bill_line_items.push({bill_item_name:null,quantity:null})},removeLine:function(e){this.blockRemoval||this.bill_line_items.splice(e,1)},fetchData:function(){var e=this;this.error=this.billItems=null,this.loading=!0,s["a"].getBillItems().then((function(t){e.loading=!1,e.billItems=t.data;for(var l=0;l<t.data.length;l++)e.billItemsNames.push(t.data[l].bill_item_name)})).catch((function(e){return{message:e||"An error ocurred while fetching the bill components please verify your internet conection and try again letter"}}))},GetItemPrice:function(e){for(var t=0;t<this.billItems.length;t++)this.billItems[t].bill_item_name===e&&(this.bill_line_items.price=this.billItems[t].bill_item_price)},validate:function(){this.$refs.form.validate()},createBill:function(){var e=this;this.loading=!0,this.$validator.validateAll().then((function(t){t?(e.bill.bill_line_items=e.bill_line_items,r["a"].createBill(e.bill).then((function(t){return e.loading=!1,e.$router.push("allBill"),t})).catch((function(e){return e||"Unable to save bill please check your connection and try again"}))):e.loading=!1}))}},computed:{currentUser:function(){return this.$store.state.auth.user},getUserID:function(){return this.$store.state.auth.user.id}}},o=c,u=(l("5540"),l("2877")),m=l("6544"),d=l.n(m),b=l("c6a6"),v=l("8212"),f=l("8336"),h=l("b0af"),_=l("62ad"),p=l("a523"),g=l("4bd4"),y=l("132d"),I=l("0fd9"),k=l("8654"),w=Object(u["a"])(o,i,a,!1,null,"0dcbca25",null);t["default"]=w.exports;d()(w,{VAutocomplete:b["a"],VAvatar:v["a"],VBtn:f["a"],VCard:h["a"],VCol:_["a"],VContainer:p["a"],VForm:g["a"],VIcon:y["a"],VRow:I["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-4ad10cfa.780d5dd4.js.map