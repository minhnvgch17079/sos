webpackJsonp([43],{ZL3I:function(t,e){},bS9d:function(t,e,n){"use strict";var a=n("JJbb");e.a={getAll:function(t){return a.a.get("/ErpEmpCoupon/getListCouponSalary",{params:t})},get:function(t){return a.a.get("/ErpEmpCoupon/getCouponSalaryById",{params:t})},add:function(t){return a.a.post("/ErpEmpCoupon/addCouponSalary",t)},update:function(t){return a.a.post("/ErpEmpCoupon/updateCouponSalary",t)},remove:function(t){return a.a.post("/ErpEmpCoupon/removeCouponSalary",t)},exportSalaryByCouponId:function(t){return a.a.get("/ErpEmpCoupon/exportSalaryByCouponId",{param:t})}}},pRB0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("bS9d"),o=n("F/2K"),i=n("a/7L"),r=n("YlZe"),s=n("csCE"),l=n("5vjp"),c=n("TyzE"),d=n("3BrW"),u=n("DbLI"),p=n("QKlT"),m=n.n(p),h=n("PJh5"),v=n.n(h),g=n("hC/b"),_={name:"coupon-manage",components:{SingleSelectProvince:o.a,SingleSelectStation:i.a,SingleSelectPosition:r.a,SingleSelectDepartment:s.a,SingleSelectModule:l.a,MultiSelectProvince:c.a,MultiSelectStation:d.a,MultiSelectPosition:u.a,flatPickr:m.a},data:function(){return{rangeConfig:{mode:"range",altInput:!0,altFormat:"d-m-Y",dateFormat:"d-m-Y"},provinceId:"",stationId:"",departmentId:"",positionId:"",currentPage:1,totalItems:0,perPage:5,coupons:[],couponName:"",startDate:null,endDate:null,rawTime:null}},created:function(){this.search()},computed:{totalPages:function(){return Math.ceil(this.totalItems/this.perPage)}},watch:{rawTime:function(t,e){if(null!==t){var n=t.split("to").map(function(t){return t.trim()});if(2===n.length)return this.startDate=v()(n[0],"DD-MM-YYYY").format("YYYY-MM-DD"),void(this.endDate=v()(n[1],"DD-MM-YYYY").format("YYYY-MM-DD"))}this.startDate=null,this.endDate=null}},methods:{moment:function(t){return v()(t)},handleSelectedModule:function(t){this.moduleId=t?t.id:null},search:function(){var t=this;this.appLoading=!0;var e={name:this.couponName,province_id:this.provinceId,station_id:this.stationId,module_id:this.moduleId,department:this.departmentId,position_id:this.positionId,start_date:this.startDate,end_date:this.endDate,page:this.currentPage,limit:this.perPage};a.a.getAll(e).then(function(e){e.data.success&&(t.coupons=e.data.data,t.totalItems=e.data.total,0===t.totalItems&&(t.coupons=[]))}).catch(function(t){console.log(t)}).then(function(){t.appLoading=!1}),this.firstTime=!1},handleSelectedProvince:function(t){this.provinceId=t?t.id:""},handleSelectedStation:function(t){this.stationId=t?t.id:""},handleSelectedDepartment:function(t){this.departmentId=t?t.id:""},handleSelectedPosition:function(t){this.positionId=t?t.id:""},deleteCoupon:function(t){var e=this;confirm("Bạn có chắc chắn muốn xóa coupon "+t.name+" ?")&&(this.$startLoading(),a.a.remove({id:t.id}).then(function(t){t.data.success?(e.$notify({group:"default",type:"bg-success text-white",title:"Thông báo",text:"Xóa coupon thành công!"}),e.search()):e.$notify({group:"default",type:"bg-warning text-dark",title:"Thông báo",text:t.data.message})}).catch(function(t){console.log(t),e.$notify({group:"default",type:"bg-warning text-dark",title:"Thông báo",text:"Có lỗi xảy ra trong quá trình xóa nhóm."})}).then(function(){e.appLoading=!1,e.$stopLoading()}))},exportSalaryByCouponId:function(t){t||(t=0),a.a.exportSalaryByCouponId({id:t}).then(function(t){if(t.data.success){var e=t.data.data.fileUrl;window.location.href=e}else g.a.showMessage("Có lỗi xảy ra trong quá trình xuất file","failed")})}}},b=n("XyMi");var f=function(t){n("ZL3I"),n("OEkN")},C=Object(b.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ui-block"},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("h4",{staticClass:"ui-block-heading"},[t._v("Quản lý coupon")])]),t._v(" "),n("b-col",{attrs:{md:"6"}},[n("div",{staticClass:"text-right w-100"},[n("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.exportSalaryByCouponId()}}},[n("i",{staticClass:"ion ion-md-print"}),t._v(" Xuất bảng lương ")])],1)])],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"mb-3"},[n("b-row",[n("b-col",{attrs:{md:"2"}},[n("b-input",{attrs:{type:"text",placeholder:"Tên coupon"},model:{value:t.couponName,callback:function(e){t.couponName=e},expression:"couponName"}})],1),t._v(" "),n("b-col",{attrs:{md:"2"}},[n("single-select-province",{on:{handleSelectedProvince:t.handleSelectedProvince}})],1),t._v(" "),n("b-col",{attrs:{md:"2"}},[n("single-select-station",{attrs:{"province-id":t.provinceId},on:{handleSelectedStation:t.handleSelectedStation}})],1),t._v(" "),n("b-col",{attrs:{md:"2"}},[n("single-select-module",{attrs:{"station-id":t.stationId},on:{handleSelectedModule:t.handleSelectedModule}})],1),t._v(" "),n("b-col",{attrs:{md:"2"}},[n("single-select-department",{on:{handleSelectedDepartment:t.handleSelectedDepartment}})],1),t._v(" "),n("b-col",{attrs:{md:"2"}},[n("single-select-position",{attrs:{"department-id":t.departmentId},on:{handleSelectedPosition:t.handleSelectedPosition}})],1)],1),t._v(" "),n("b-row",[n("b-col",{attrs:{md:"2"}},[n("flat-pickr",{staticClass:"mb-4",attrs:{config:t.rangeConfig,placeholder:"Chọn khoảng thời gian"},model:{value:t.rawTime,callback:function(e){t.rawTime=e},expression:"rawTime"}})],1),t._v(" "),n("b-col",{staticClass:"text-right",attrs:{md:"10"}},[n("b-btn",{attrs:{type:"button",variant:"primary"},on:{click:function(e){t.currentPage=1,t.search()}}},[n("i",{staticClass:"sidenav-icon ion ion-md-search"}),t._v(" Tìm kiếm")]),t._v(" "),n("router-link",{staticClass:"btn btn-md btn-outline-info ml-1",attrs:{to:{name:"coupon-add"}}},[n("i",{staticClass:"ion ion-md-add"}),t._v(" Thêm coupon")])],1)],1)],1),t._v(" "),n("div",{staticClass:"mb-3"},[n("div",[n("b-card",{attrs:{"no-body":""}},[n("table",{staticClass:"table mb-0 table-hover table-bordered"},[n("thead",[n("tr",[n("th",[t._v("STT")]),t._v(" "),n("th",[t._v("Tên coupon")]),t._v(" "),n("th",[t._v("Tỉnh")]),t._v(" "),n("th",[t._v("Kho")]),t._v(" "),n("th",[t._v("Vị trí")]),t._v(" "),n("th",[t._v("Ngày bắt đầu")]),t._v(" "),n("th",[t._v("Ngày kết thúc")]),t._v(" "),n("th",[t._v("Thưởng (%)")]),t._v(" "),n("th",[t._v("Action")]),t._v(" "),n("th",[t._v("Xuất dữ liệu")])])]),t._v(" "),n("tbody",t._l(t.coupons,function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s((t.currentPage-1)*t.perPage+a+1))]),t._v(" "),n("td",[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),n("td",[n("multi-select-province",{staticClass:"limit-width",attrs:{"province-ids":e.province_id,"limit-prop":7}})],1),t._v(" "),n("td",[n("multi-select-station",{staticClass:"limit-width",attrs:{"province-ids":e.province_id,"station-ids":e.station_id,"limit-prop":7}})],1),t._v(" "),n("td",[n("multi-select-position",{attrs:{"department-ids":e.department_ids,"position-ids":e.position_id}})],1),t._v(" "),n("td",[t._v(t._s(t.moment(e.start_date).format("DD-MM-YYYY")))]),t._v(" "),n("td",[t._v(t._s(t.moment(e.end_date).format("DD-MM-YYYY")))]),t._v(" "),n("td",[t._v(t._s(e.bonus))]),t._v(" "),n("td",{staticStyle:{"min-width":"120px"}},[n("div",{staticClass:"text-center w-100"},[n("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:{name:"coupon-edit",params:{id:e.id}}}},[n("i",{staticClass:"ion ion-md-create"})]),t._v(" "),n("b-btn",{staticClass:"btn btn-md btn-outline-danger",on:{click:function(n){return t.deleteCoupon(e)}}},[n("i",{staticClass:"ion ion-md-trash"})])],1)]),t._v(" "),n("td",[n("div",{staticClass:"text-center w-100"},[n("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.exportSalaryByCouponId(e.id)}}},[n("i",{staticClass:"ion ion-md-print"})])],1)])])}),0)]),t._v(" "),t.totalPages>1?n("div",{staticClass:"mt-3"},[n("b-row",[n("b-col",[n("b-pagination",{attrs:{"total-rows":t.totalItems,"per-page":t.perPage,align:"center"},on:{input:t.search},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1):t._e()])],1)])],1)])},[],!1,f,"data-v-07c82586",null);e.default=C.exports}});