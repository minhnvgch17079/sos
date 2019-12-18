webpackJsonp([54],{KDQB:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("vxzc"),i=s("PJh5"),l=s.n(i),n=s("hC/b"),c=s("RUzx"),o=s.n(c),r={name:"show-sale-salary",components:{Moment:l.a,commonHelper:n.a,saleService:a.a,Multiselect:o.a},data:function(){return{triggerShow:!1,isLeader:!1,isLoadTable:!0,isBusy:!1,team:{teamID:null,teamName:null,members:[]},allSale:[],filter:null,paginConfig:{per_page:5,current_page:1,total_row:0},teams:null,fields:[{key:"id",label:"ID",sortable:!0,thStyle:"width: 5%"},{key:"name",label:"Tên team",thStyle:"width: 20%"},{key:"members",label:"Thành viên",sortable:!0,thStyle:"width: 25%"},{key:"shops",label:"Shop",sortable:!0,thStyle:"width: 30%"},{key:"actions",label:"Chỉnh sửa",sortable:!0,thStyle:"width: 20%"}]}},created:function(){this.isLeaderProcessTeam(),this.getAllUsers()},mounted:function(){},watch:{triggerShow:function(e,t){this.$refs["modal-pteam"].show()}},computed:{},methods:{isLeaderProcessTeam:function(){var e=this;a.a.isLeaderProcessTeam().then(function(t){t.data.success?e.isLeader=t.data.success:n.a.showMessage(t.data.message,"warning")})},openModal:function(){this.triggerShow=!this.triggerShow},onFiltered:function(e){this.paginConfig.total_row=e.length,this.paginConfig.current_page=1},getAllUsers:function(){var e=this;a.a.getAllSalesForTeamProcess().then(function(t){t.data.success&&(e.allSale=t.data.data,e.getTeamProcess())})},getTeamProcess:function(){var e=this;a.a.getTeamProcess().then(function(t){t.data.success?(n.a.showMessage(t.data.message,"success"),e.teams=t.data.data,e.teams.forEach(function(t){t.members=e.convertMember(t.member_ids)}),e.paginConfig.total_row=e.teams.length,e.isLoadTable=!1):(n.a.showMessage(t.data.message,"warning"),e.isLoadTable=!1)})},customRecordMember:function(e){var t=e.ErpUser,s=e.ErpStation,a=e.ErpAddress;return t.fullname+" ("+t.username+" - "+s.name+" - "+a.name+")"},customRecordShop:function(e){return e.code+" - "+e.name},convertMember:function(e){return e.length>0&&this.allSale.length>0?this.allSale.filter(function(t){return e.includes(t.ErpUser.id)}):[]},ok:function(e){var t=this;if(e.preventDefault(),null==this.team.teamName)n.a.showMessage("Hãy nhập tên team!","warning");else{this.isBusy=!0;var s=null;this.team.members.length>0&&(s=this.team.members.map(function(e){return e.ErpUser.id}));var i={type:4,team_id:this.team.teamID,team_name:this.team.teamName,member_ids:s};a.a.createTeamProcess(i).then(function(e){e.data.success?(n.a.showMessage(e.data.message,"success"),t.$refs["modal-pteam"].hide(),t.getTeamProcess()):n.a.showMessage(e.data.message,"warning"),t.isBusy=!1})}},clearData:function(){this.team.teamID=null,this.team.teamName=null,this.team.members=[]},close:function(){this.clearData()},cancel:function(){this.clearData()},editTeam:function(e){this.openModal(),this.team.teamID=e.id,this.team.teamName=e.name,this.team.members=this.convertMember(e.member_ids)},deleteTeam:function(e){var t=this;this.$bvModal.msgBoxConfirm("Bạn có chắc chắn muốn xóa team "+e.name+" không ?",{title:"Xin hãy xác nhận:",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"Xác nhận",cancelTitle:"Hủy bỏ",footerClass:"p-2",hideHeaderClose:!1,noCloseOnBackdrop:!0,centered:!0}).then(function(s){s&&a.a.deleteTeamProcess(e.id).then(function(e){e.data.success?(n.a.showMessage(e.data.message,"success"),t.getTeamProcess()):n.a.showMessage(e.data.message,"warning")})}).catch(function(e){console.log(e)})}}},m=s("XyMi");var d=function(e){s("OEkN"),s("z0y5")},h=Object(m.a)(r,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",[s("h3",[e._v("Danh sách Team Process:")]),e._v(" "),s("hr"),e._v(" "),s("b-row",[s("b-col",[s("b-form-input",{staticClass:"search-size",attrs:{size:"sm",placeholder:"Tìm kiếm ..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1),e._v(" "),s("b-col",{staticClass:"text-right"},[s("b-button",{staticClass:"pt-1 pb-1",attrs:{disabled:!1,variant:"outline-primary"},on:{click:e.openModal}},[s("i",{staticClass:"ion ion-md-add"}),e._v(" Tạo Team")])],1)],1),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"table-responsive"},[s("b-table",{ref:"dataTable",staticClass:"card-table",staticStyle:{"text-align":"center"},attrs:{id:"data-shop-city",items:e.teams,fields:e.fields,striped:!1,bordered:!0,outlined:!0,hover:!0,"per-page":e.paginConfig.per_page,"current-page":e.paginConfig.current_page,filter:e.filter},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(members)",fn:function(t){return[s("div",{staticClass:"text-right text-show"},[0!=t.item.member_ids.length?s("span",[s("b",[e._v(e._s(t.item.member_ids.length))]),e._v(" thành viên")]):e._e()]),e._v(" "),s("div",{staticClass:"non-blur custom-multiselect"},[s("multiselect",{staticClass:"multiselect-primary",attrs:{options:e.allSale,placeholder:"Không có thành viên",selectedLabel:"Đã chọn",deselectLabel:"Bỏ chọn",selectLabel:"Chọn","track-by":"ErpUser",label:"ErpUser",disabled:!0,searchable:!0,multiple:!0,"hide-selected":!0,"allow-empty":!0,"custom-label":e.customRecordMember},model:{value:t.item.members,callback:function(s){e.$set(t.item,"members",s)},expression:"row.item.members"}},[s("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v("Rất tiếc, không tìm thấy!")])])],1)]}},{key:"cell(shops)",fn:function(t){return[s("div",{staticClass:"text-right text-show"},[0!=t.item.shops.length?s("span",[s("b",[e._v(e._s(t.item.shops.length))]),e._v(" shop")]):e._e()]),e._v(" "),s("div",{staticClass:"non-blur custom-multiselect"},[s("multiselect",{staticClass:"multiselect-primary",attrs:{options:e.allSale,placeholder:"Không có shop",selectedLabel:"Đã chọn",deselectLabel:"Bỏ chọn",selectLabel:"Chọn",disabled:!0,searchable:!0,multiple:!0,"hide-selected":!0,"allow-empty":!0,"custom-label":e.customRecordShop},model:{value:t.item.shops,callback:function(s){e.$set(t.item,"shops",s)},expression:"row.item.shops"}},[s("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v("Rất tiếc, không tìm thấy!")])])],1)]}},{key:"cell(actions)",fn:function(t){return[s("div",{staticClass:"pl-3"},[s("b-button",{staticClass:"pt-1 pb-1 mt-1 w-button",attrs:{disabled:!e.isLeader,variant:"outline-info"},on:{click:function(s){return e.editTeam(t.item)}}},[s("i",{staticClass:"ion ion-md-create"}),e._v(" Chỉnh sửa")]),e._v(" "),s("b-button",{staticClass:"pt-1 pb-1 mt-1 w-button",attrs:{disabled:!e.isLeader,variant:"outline-danger"},on:{click:function(s){return e.deleteTeam(t.item)}}},[s("i",{staticClass:"ion ion-md-trash"}),e._v(" Xóa team")])],1)]}}])}),e._v(" "),e.isLoadTable?s("div",{staticClass:"sk-folding-cube sk-primary"},[s("div",{staticClass:"sk-cube1 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube2 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube4 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube3 sk-cube"})]):e._e(),e._v(" "),e.paginConfig.total_row>0?s("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":e.paginConfig.total_row,"per-page":e.paginConfig.per_page,align:"center",size:"sm"},model:{value:e.paginConfig.current_page,callback:function(t){e.$set(e.paginConfig,"current_page",t)},expression:"paginConfig.current_page"}}):e._e()],1),e._v(" "),s("b-modal",{ref:"modal-pteam",attrs:{"no-close-on-backdrop":"",size:"lg",title:"Tạo Team Process","cancel-title":"Hủy bỏ",static:""},on:{ok:e.ok,cancel:e.cancel,close:e.close}},[s("b-row",[s("b-col",{attrs:{md:"2"}},[s("h5",{staticClass:"mt-2"},[e._v("Tên team: "),s("span",{staticClass:"red"},[e._v("(*)")])])]),e._v(" "),s("b-col",[s("b-form-input",{attrs:{placeholder:"Nhập tên team"},model:{value:e.team.teamName,callback:function(t){e.$set(e.team,"teamName",t)},expression:"team.teamName"}})],1)],1),e._v(" "),s("br"),e._v(" "),s("div",{staticClass:"mt-2"},[s("b-row",[s("b-col",[s("h5",[e._v("Chọn thành viên:")])]),e._v(" "),s("b-col",{staticClass:"text-right"},[e._v(e._s(e.team.members.length)+" thành viên")])],1),e._v(" "),s("multiselect",{staticClass:"multiselect-primary",attrs:{options:e.allSale,placeholder:"Chọn thành viên",selectedLabel:"Đã chọn",deselectLabel:"Bỏ chọn",selectLabel:"Chọn","track-by":"ErpUser",label:"ErpUser",searchable:!0,multiple:!0,"hide-selected":!0,"allow-empty":!0,"custom-label":e.customRecordMember},model:{value:e.team.members,callback:function(t){e.$set(e.team,"members",t)},expression:"team.members"}},[s("span",{attrs:{slot:"noResult"},slot:"noResult"},[e._v("Rất tiếc, không tìm thấy!")])])],1),e._v(" "),s("br"),e._v(" "),e.isBusy?s("div",{staticClass:"sk-folding-cube sk-primary"},[s("div",{staticClass:"sk-cube1 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube2 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube4 sk-cube"}),e._v(" "),s("div",{staticClass:"sk-cube3 sk-cube"})]):e._e()],1)],1)],1)],1)},[],!1,d,"data-v-b4c1d50c",null);t.default=h.exports},z0y5:function(e,t){}});