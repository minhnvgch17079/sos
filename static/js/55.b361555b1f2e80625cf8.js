webpackJsonp([55],{"3WOp":function(t,e){},cwk9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("fZjL"),i=a.n(n),r=a("woOf"),s=a.n(r),o=a("PikB"),c=a("4WGu"),l=function(t){return o.a.get("/ref-reward/getList",{params:t})},u=function(t){return o.a.get("/ref-reward/getRole",{params:t})},d=function(t){return o.a.post("/ref-reward/confirm",t)},h=function(t){return o.a.post("ref-reward/abort",t)},f=function(t){return o.a.get("/AdReferenceRewards/exportRefReward",{params:t})},g=function(t){return c.a.baseApiUrl+"AdReferenceRewards/downloadExportFile?file="+t},m=a("F/2K"),b=a("a/7L"),v=a("YlZe"),p=a("5vjp"),_=a("TyzE"),y=a("l48y"),x=a("HveU"),w={name:"modal-confirm-reward",components:{SweetModal:x.a,SweetModalTab:x.b},props:["id","trigger","status","role","action"],data:function(){return{comment:""}},created:function(){},watch:{trigger:function(t,e){this.$refs.curModal.show()}},methods:{confirm:function(){var t=this,e={id:this.id,comment:this.comment};d(e).then(function(e){e.data.success&&(t.hideModal(),t.showSuccessModal(),t.$emit("updateStatus",{id:t.id,status:e.data.newStatus,comment:e.data.comment}))})},abort:function(){var t=this;h({id:this.id}).then(function(e){e.data.success&&(t.hideModal(),t.showSuccessModal(),t.$emit("updateStatus",{id:t.id,status:e.data.newStatus}))})},hideModal:function(){this.comment="",this.$refs.curModal.hide()},showSuccessModal:function(){var t=this;this.$refs.successModal.open(),setTimeout(function(){t.$refs.successModal.close()},1200)}}},k=a("XyMi");var C=function(t){a("u2bN")},P=Object(k.a)(w,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{ref:"curModal",attrs:{title:("confirm"===t.action?"Xác nhận":"Từ chối")+" thưởng giới thiệu",centered:"","hide-footer":""}},[a("div",{staticClass:"text-center mt-2"},[a("h5",[t._v(t._s("confirm"===t.action?"Xác nhận":"Từ chối")+" thưởng giới thiệu")])]),t._v(" "),"pending"==t.status&&"confirm"==t.action&&"OP"==t.role?a("b-form-group",{attrs:{label:"Đánh giá ứng viên"}},[a("b-form-textarea",{attrs:{rows:"2"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1):t._e(),t._v(" "),a("hr"),t._v(" "),a("b-row",[a("b-col",{staticClass:"text-right"},[a("b-btn",{attrs:{variant:"default"},on:{click:t.hideModal}},[t._v(" Hủy bỏ ")]),t._v(" "),"confirm"==t.action?a("b-btn",{attrs:{variant:"primary"},on:{click:t.confirm}},[t._v("Xác nhận")]):t._e(),t._v(" "),"abort"==t.action?a("b-btn",{attrs:{variant:"danger"},on:{click:t.abort}},[t._v("Từ chối")]):t._e()],1)],1)],1),t._v(" "),a("sweet-modal",{ref:"successModal",attrs:{icon:"success"}},[a("b",[t._v(t._s("confirm"===t.action?"Xác nhận":"Từ chối")+" thành công")])])],1)},[],!1,C,null,null).exports,S=a("Bo22"),M=a.n(S),T=a("RUzx"),E=a.n(T),I=a("PJh5"),$=a.n(I),R=a("qaB4"),Y={name:"manager-hrteam",components:{SingleSelectProvince:m.a,SingleSelectStation:b.a,SingleSelectPosition:v.a,SingleSelectModule:p.a,MultiSelectProvince:_.a,SingleSelectProfileRegion:y.a,ModalConfirm:P,VueMonthlyPicker:M.a,Multiselect:E.a,LaddaBtn:R.a},data:function(){return{role:null,isProcessingExport:!1,fileExcel:"",curPage:1,perPage:10,total:0,filter:{provinceId:"",stationId:"",region:"",month:null,status:null},range_time:null,rangeConfig:{mode:"range",altInput:!0,dateFormat:"d-m-Y",altFormat:"d-m-Y"},tblFilter:{provinceId:"",stationId:"",month:"",status:""},tblBusy:!1,tableFields:[{label:"STT",key:"index",tdClass:"font-weight-bold text-center"},{key:"referrer.station_name",label:"Kho"},{key:"referrer.name",label:"Họ tên",tdClass:"font-weight-bold"},{key:"referrer.username",label:"Tài khoản"},{key:"referrer.status",label:"Trạng thái MP"},{key:"referrer.staff_code",label:"Mã NV"},{key:"referrer.position_name",label:"Vị trí"},{key:"candidate.station_name",label:"Kho"},{key:"candidate.name",label:"Họ tên",tdClass:"font-weight-bold"},{key:"candidate.username",label:"Tài khoản"},{key:"candidate.status",label:"Trạng thái MP"},{key:"candidate.staff_code",label:"Mã NV"},{key:"candidate.cod_module",label:"Cod Module"},{key:"join_date",label:"Ngày vào",thStyle:{width:"100px"}},{key:"days_worked",label:"Số ngày đã làm việc",tdClass:"text-center"},{key:"reward",label:"Mức thưởng",tdClass:"font-weight-bold text-danger text-right"},{key:"status",label:"Trạng thái"},{key:"comment",label:"Đánh giá từ người quản lý"},{key:"actions",label:"Duyệt",thClass:"text-center",tdClass:"text-right"}],statusLocale:{pending:"Chờ duyệt",op_confirm:"Trưởng kho đã duyệt",hr_confirm:"Nhân sự đã duyệt",rewarded:"Đã thưởng",abort:"Đã từ chối"},statusVariant:{pending:"info",op_confirm:"warning",hr_confirm:"primary",rewarded:"success",abort:"danger"},status:[{name:"Chờ duyệt",value:"pending"},{name:"Trưởng kho đã duyệt",value:"op_confirm"},{name:"Nhân sự đã duyệt",value:"hr_confirm"},{name:"Đã thưởng",value:"rewarded"},{name:"Đã từ chối",value:"abort"}],statusCount:{pending:0,op_confirm:0,hr_confirm:0,rewarded:0,abort:0},toggleConfirmModal:!1,curId:null,curStatus:null,action:null}},created:function(){this.getRole(),this.initData()},computed:{totalPages:function(){return Math.ceil(this.totalItems/this.perPage)}},watch:{},methods:{exportExcel:function(){var t=this;if(!this.isProcessingExport){var e={filter:this.tblFilter,sortBy:this.sortBy,sortDesc:this.sortDesc,perPage:this.perPage,currentPage:this.currentPage,apiUri:this.apiUri};this.isProcessingExport=!0,this.$startLoading(),f(e).then(function(e){e.data.success?(t.fileExcel=e.data.data,t.isProcessingExport=!1,t.$notify({group:"default",type:"bg-success text-dark",title:"Thông báo",text:e.data.message})):(t.isProcessingExport=!1,t.$notify({group:"default",type:"bg-warning text-dark",title:"Thông báo",text:e.data.message}))}).catch(function(e){t.isProcessingExport=!1,t.$notify({group:"default",type:"bg-warning text-dark",title:"Thông báo",text:"Có lỗi xảy ra trong quá trình xuất excel"})}).then(function(){t.$stopLoading()})}},getDownloadExcelLink:function(){return g(this.fileExcel)},moment:function(t){return $()(t)},initData:function(){this.filter.month=$()(new Date)},applyFilter:function(){var t={},e=this.filter.month;t.month=e.format("MM"),t.year=e.format("YYYY"),t.stationId=this.filter.stationId,t.provinceId=this.filter.provinceId,t.region=this.filter.region,this.filter.status&&(t.status=this.filter.status.value),this.tblFilter=s()({},t),this.$refs.curTable.refresh()},tblItemsProvider:function(t){var e=this;return l(t).then(function(t){if(t.data.success)return e.total=t.data.total,i()(e.statusCount).forEach(function(a){e.statusCount[a]=t.data.statusCount[a]?t.data.statusCount[a]:0}),e.assignIndex(t.data.data)})},getRole:function(){var t=this;u().then(function(e){e.data.success&&(t.role=e.data.data)})},getData:function(){var t=this;l().then(function(e){e.data.success&&(t.tableData=e.data.data,t.assignIndex())})},assignIndex:function(t){var e=this,a=1;return t.forEach(function(t){t.index=(e.curPage-1)*e.perPage+a++}),t},canConfirm:function(t){switch(this.role){case"HR":return["op_confirm","hr_confirm"].includes(t);case"OP":return"pending"===t}return!1},canAbort:function(t){switch(this.role){case"HR":return!["rewarded","abort"].includes(t);case"OP":return"pending"===t}return!1},doAction:function(t,e,a){this.toggleConfirmModal=!this.toggleConfirmModal,this.curId=t,this.curStatus=e,this.action=a},updateStatus:function(t){this.$refs.curTable.refresh()},handleSelectedRegion:function(t){this.filter.region=t?t.id:""},handleSelectedProvince:function(t){this.filter.provinceId=t?t.id:""},handleSelectedStation:function(t){this.filter.stationId=t?t.id:""},handleSelectedPosition:function(t){this.positionId=t?t.id:""}}};var F=function(t){a("3WOp"),a("OEkN")},D=Object(k.a)(Y,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ui-block"},[a("b-row",[a("b-col",[a("h4",{staticClass:"ui-block-heading"},[t._v("Danh sách thưởng giới thiệu")])]),t._v(" "),a("ladda-btn",{staticClass:"btn btn-success",attrs:{loading:t.isProcessingExport},nativeOn:{click:function(e){return t.exportExcel()}}},[a("i",{staticClass:"sidenav-icon ion ion-md-document"}),t._v(" Xuất excel\n      ")]),t._v(" "),!t.isProcessingExport&&this.fileExcel.length>0?a("b-btn",{attrs:{type:"button",variant:"outline-danger btn-download",href:t.getDownloadExcelLink()}},[a("i",{staticClass:"ion d-block ion-ios-cloud-download"})]):t._e(),t._v(" "),a("b-col",{staticClass:"input-month"},[a("vue-monthly-picker",{attrs:{alignment:"center","date-format":"MM/YYYY"},on:{selected:t.applyFilter},model:{value:t.filter.month,callback:function(e){t.$set(t.filter,"month",e)},expression:"filter.month"}})],1)],1),t._v(" "),a("hr"),t._v(" "),a("b-row",{staticClass:"limit-height-55"},[a("b-col",{attrs:{md:"2"}},[a("single-select-profile-region",{on:{handleSelectedRegion:t.handleSelectedRegion}})],1),t._v(" "),a("b-col",{attrs:{md:"2"}},[a("single-select-province",{attrs:{"region-name":t.filter.region},on:{handleSelectedProvince:t.handleSelectedProvince}})],1),t._v(" "),a("b-col",{attrs:{md:"2"}},[a("single-select-station",{attrs:{"province-id":t.filter.provinceId},on:{handleSelectedStation:t.handleSelectedStation}})],1),t._v(" "),a("b-col",{attrs:{md:"2"}},[a("multiselect",{attrs:{options:t.status,placeholder:"Chọn trạng thái",label:"name","track-by":"name",selectedLabel:"Đã chọn",deselectLabel:"Bỏ chọn",selectLabel:"Chọn"},model:{value:t.filter.status,callback:function(e){t.$set(t.filter,"status",e)},expression:"filter.status"}})],1),t._v(" "),a("b-col",[a("b-col",{staticClass:"text-right",attrs:{md:"12"}},[a("b-btn",{attrs:{type:"button",variant:"primary"},on:{click:function(e){t.currentPage=1,t.applyFilter()}}},[a("i",{staticClass:"sidenav-icon ion ion-md-search"}),t._v(" Tìm kiếm")])],1)],1)],1),t._v(" "),a("b-row",{staticClass:"mb-3 justify-content-between"},t._l(t.status,function(e,n){return a("b-col",{key:n,attrs:{md:"2"}},[a("b-row",{staticClass:"justify-content-between pl-2 pr-2"},[a("b-col",[t._v(t._s(e.name))]),t._v(" "),a("b-col",{staticClass:"text-right"},[a("b",[t._v(t._s(t.statusCount[e.value]))])])],1),t._v(" "),a("b-progress",{attrs:{max:t.total-0}},[a("b-progress-bar",{attrs:{value:t.statusCount[e.value]-0,variant:t.statusVariant[e.value],label:(t.statusCount[e.value]/t.total*100).toFixed(2)+"%"}})],1)],1)}),1),t._v(" "),a("div",{staticClass:"mb-3"},[a("b-card",{staticClass:"mt-0",attrs:{"no-body":""}},[a("b-table",{ref:"curTable",attrs:{busy:t.tblBusy,items:t.tblItemsProvider,fields:t.tableFields,"per-page":t.perPage,"current-page":t.curPage,filter:t.tblFilter,hover:"",striped:"","table-variant":"light"},on:{"update:busy":function(e){t.tblBusy=e}},scopedSlots:t._u([{key:"thead-top",fn:function(){return[a("b-tr",[a("b-th",{attrs:{variant:"secondary"}}),t._v(" "),a("b-th",{staticClass:"text-center",attrs:{colspan:"6",variant:"danger"}},[t._v("Người giới thiệu")]),t._v(" "),a("b-th",{staticClass:"text-center",attrs:{colspan:"6",variant:"primary"}},[t._v("Người được giới thiệu")]),t._v(" "),a("b-th",{attrs:{colspan:"6",variant:"secondary"}})],1)]},proxy:!0},{key:"cell(status)",fn:function(e){return[a("b-badge",{staticClass:"status-badge",attrs:{variant:t.statusVariant[e.item.status]}},[t._v(t._s(t.statusLocale[e.item.status]))])]}},{key:"cell(join_date)",fn:function(e){return[t._v("\n          "+t._s(t.moment(e.item.candidate.join_date).format("DD/MM/YYYY"))+"\n        ")]}},{key:"cell(actions)",fn:function(e){return[a("b-btn",{staticClass:"action-button",attrs:{disabled:!t.canConfirm(e.item.status),variant:t.canConfirm(e.item.status)?"outline-primary":"default"},on:{click:function(a){return t.doAction(e.item.id,e.item.status,"confirm")}}},[t._v("\n            Xác nhận\n          ")]),t._v(" "),a("b-btn",{staticClass:"action-button",attrs:{disabled:!t.canAbort(e.item.status),variant:t.canAbort(e.item.status)?"outline-danger":"default"},on:{click:function(a){return t.doAction(e.item.id,e.item.status,"abort")}}},[t._v("\n            Từ chối\n          ")])]}}])},[t._v(" "),t._v(" "),t._v(" "),t._v(" "),a("template",{slot:"table-caption"},[t.tblBusy?a("div",[a("b-row",[a("b-col",{staticClass:"text-center"},[t._v("Đang tải dữ liệu...")])],1)],1):a("div",[t.total>0?a("b-row",[a("b-col",{staticClass:"text-center"},[a("b-pagination",{attrs:{"per-page":t.perPage,"total-rows":t.total,align:"center"},model:{value:t.curPage,callback:function(e){t.curPage=e},expression:"curPage"}}),t._v(" "),a("span",[t._v("Số "+t._s(t.perPage*(t.curPage-1)+1)+" - "+t._s(Math.min(t.perPage*t.curPage,t.total))+" trên "+t._s(t.total))])],1)],1):a("b-row",[a("b-col",{staticClass:"text-center"},[t._v("Không tồn tại")])],1)],1)])],2)],1)],1)],1),t._v(" "),a("modal-confirm",{attrs:{id:t.curId,role:t.role,action:t.action,status:t.curStatus,trigger:t.toggleConfirmModal},on:{updateStatus:t.updateStatus}})],1)},[],!1,F,"data-v-a1138b46",null);e.default=D.exports}});