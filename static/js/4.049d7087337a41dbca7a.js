webpackJsonp([4],{"/b0+":function(t,e,n){"use strict";var i=n("RUzx"),o=n.n(i),s=n("xF2Z"),a={name:"multi-select-department",props:["departmentNames","departmentIds","autoClose","hideSelected"],components:{Multiselect:o.a},data:function(){return{autoClosed:!0,hideSelect:!1,departmentOption:null,departmentOptions:[]}},created:function(){this.getAllDepartment(),void 0!==this.autoClose&&null!==this.autoClosed&&(this.autoClosed=this.autoClose),void 0!==this.hideSelected&&null!==this.hideSelected&&(this.hideSelect=this.hideSelected)},watch:{hideSelected:function(t,e){this.hideSelect=this.hideSelected},autoClose:function(t,e){this.autoClosed=this.autoClose},departmentNames:function(t,e){void 0!==this.departmentOptions&&this.departmentOptions.length>0&&this.setList()},departmentIds:function(t,e){void 0!==this.departmentOptions&&this.departmentOptions.length>0&&this.setList()},departmentOption:function(t,e){this.$emit("handleDepartmentSelected",t)}},methods:{setList:function(){var t=this;this.departmentNames&&(this.departmentOption=[],this.departmentNames.split(",").forEach(function(e){t.departmentOption.push(t.departmentOptions.find(function(t){return""+t.name===e}))})),this.departmentIds&&(this.departmentOption=[],this.departmentIds.split(",").forEach(function(e){t.departmentOption.push(t.departmentOptions.find(function(t){return parseInt(t.id)===parseInt(e)}))}))},getAllDepartment:function(){var t=this;s.a.getDepartmentList().then(function(e){e.data.success&&(t.departmentOptions=e.data.data,t.setList())}).catch(function(t){console.log(t)})}}},l=n("XyMi"),d=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("multiselect",{staticClass:"multiselect-primary",attrs:{options:t.departmentOptions,multiple:!0,placeholder:"Chọn Bộ Phận",label:"name","track-by":"name",selectedLabel:"Đã chọn",deselectLabel:"Nhấn để bỏ chọn bộ phận",selectLabel:"Nhấn enter để chọn","hide-selected":t.hideSelect,"close-on-select":t.autoClosed},model:{value:t.departmentOption,callback:function(e){t.departmentOption=e},expression:"departmentOption"}},[n("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v("Rất tiếc. Không tìm thấy.")])])],1)},[],!1,null,null,null);e.a=d.exports},InrP:function(t,e,n){"use strict";var i=n("RUzx"),o=n.n(i),s=n("mG5u"),a={name:"multi-select-module",components:{Multiselect:o.a},props:["stationIds","moduleIds","autoClose","hideSelected"],data:function(){return{autoClosed:!0,hideSelect:!1,option:null,options:[]}},created:function(){void 0!==this.autoClose&&null!=this.autoClose&&(this.autoClosed=this.autoClose),void 0!==this.hideSelected&&null!==this.hideSelected&&(this.hideSelect=this.hideSelected)},watch:{hideSelected:function(t,e){this.hideSelect=this.hideSelected},autoClose:function(t,e){this.autoClosed=this.autoClose},option:function(t,e){this.$emit("handleModuleSelected",t)},stationIds:function(t,e){t&&(this.getList(t),this.option=null)},moduleIds:function(t,e){void 0!==this.options&&this.options.length>0&&this.setList()}},methods:{setList:function(){var t=this;this.moduleIds&&(this.option=[],this.moduleIds.split(",").forEach(function(e){t.options.forEach(function(n){""+n.id===e&&t.option.push(n)})}))},getList:function(t){var e=this,n={stationIds:t};s.a.getAllModuleByStationIds(n).then(function(t){t.data.success&&(e.options=t.data.data,e.setList())}).catch(function(t){console.log(t)})}}},l=n("XyMi"),d=Object(l.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("multiselect",{staticClass:"multiselect-primary",attrs:{options:t.options,multiple:!0,placeholder:"Chọn module",label:"alias","track-by":"alias",selectedLabel:"Đã chọn",deselectLabel:"Bỏ chọn",selectLabel:"Chọn","close-on-select":t.autoClosed,"hide-selected":t.hideSelect},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}},[n("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v("Rất tiếc. Không tìm thấy.")])])],1)},[],!1,null,null,null);e.a=d.exports},bS9d:function(t,e,n){"use strict";var i=n("JJbb");e.a={getAll:function(t){return i.a.get("/ErpEmpCoupon/getListCouponSalary",{params:t})},get:function(t){return i.a.get("/ErpEmpCoupon/getCouponSalaryById",{params:t})},add:function(t){return i.a.post("/ErpEmpCoupon/addCouponSalary",t)},update:function(t){return i.a.post("/ErpEmpCoupon/updateCouponSalary",t)},remove:function(t){return i.a.post("/ErpEmpCoupon/removeCouponSalary",t)},exportSalaryByCouponId:function(t){return i.a.get("/ErpEmpCoupon/exportSalaryByCouponId",{param:t})}}},mQBx:function(t,e){},ykjj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("bS9d"),o=n("RUzx"),s=n.n(o),a=n("7+uW"),l=n("sUu7"),d=n("TyzE"),c=n("3BrW"),r=n("InrP"),u=n("/b0+"),p=n("DbLI"),h=n("QKlT"),m=n.n(h),f=n("PJh5"),v=n.n(f);a.default.use(l.a);var b={name:"coupon-edit",components:{Notification:Notification,Multiselect:s.a,MultiSelectProvince:d.a,MultiSelectStation:c.a,MultiSelectModule:r.a,MultiSelectDepartment:u.a,MultiSelectPosition:p.a,flatPickr:m.a},data:function(){return{rangeConfig:{mode:"range",altInput:!0,altFormat:"d-m-Y",dateFormat:"d-m-Y"},toggleLog:!1,isLoading:!1,notify:{message:"",class:"",title:""},rawTime:null,couponName:"",provinceIds:null,stationIds:null,moduleIds:null,departmentIds:null,positionIds:null,startData:null,endDate:null,bonus:null}},computed:{isEdit:function(){return this.$route.params.id>0}},created:function(){this.$route.params.id&&this.getCoupon()},watch:{rawTime:function(t,e){if(null!==t){var n=t.split("to").map(function(t){return t.trim()});if(2===n.length)return this.startDate=v()(n[0],"DD-MM-YYYY").format("YYYY-MM-DD"),void(this.endDate=v()(n[1],"DD-MM-YYYY").format("YYYY-MM-DD"))}this.startDate=null,this.endDate=null}},methods:{handlePositionSelected:function(t){this.positionIds=t?t.map(function(t){return t.id}).toString():""},handleDepartmentSelected:function(t){this.departmentIds=t?t.map(function(t){return t.id}).toString():""},handleProvinceSelected:function(t){this.provinceIds=t?t.map(function(t){return t.id}).toString():""},handleStationSelected:function(t){this.stationIds=t?t.map(function(t){return t.id}).toString():""},handleModuleSelected:function(t){this.moduleIds=t?t.map(function(t){return t.id}).toString():""},getCoupon:function(){var t=this;this.$startLoading();var e={id:this.$route.params.id};i.a.get(e).then(function(e){e.data.success&&t.setData(e.data.data)}).then(function(){t.$stopLoading()})},setData:function(t){this.couponId=t.id,this.couponName=t.name,this.provinceIds=t.province_id,this.stationIds=t.station_id,this.moduleIds=t.module_id,this.departmentIds=t.department_ids,this.positionIds=t.position_id,this.bonus=t.bonus,this.rawTime=v()(t.start_date).format("DD-MM-YYYY")+" to "+v()(t.end_date).format("DD-MM-YYYY")},showNotification:function(t){var e="bg-success text-white";t||(e="bg-warning text-dark"),this.$notify({group:"add-emp",title:this.notify.title,text:this.notify.message,type:e})},addCoupon:function(){var t=this,e={name:this.couponName,province_id:this.provinceIds,station_id:this.stationIds,module_id:this.moduleIds,department_ids:this.departmentIds,position_id:this.positionIds,bonus:this.bonus,start_date:this.startDate,end_date:this.endDate};i.a.add(e).then(function(e){e.data.success?(t.notify={title:"Thành công",message:"Tạo coupon thành công"},t.showNotification(!0)):(t.notify={title:"Tạo coupon thất bại",message:e.data.message?e.data.message:"Tạo coupon thất bại"},t.showNotification(!1))})},updateCoupon:function(){var t=this,e={id:this.couponId,name:this.couponName,province_id:this.provinceIds,station_id:this.stationIds,module_id:this.moduleIds,department_ids:this.departmentIds,position_id:this.positionIds,bonus:this.bonus,start_date:this.startDate,end_date:this.endDate};i.a.update(e).then(function(e){console.log(e),e.data.success?(t.notify={title:"Thành công",message:"Cập nhật coupon thành công"},t.showNotification(!0)):(t.notify={title:"Lỗi",message:e.data.message?e.data.message:"Cập nhật coupon thất bại"},t.showNotification(!1))})}}},g=n("XyMi");var C=function(t){n("OEkN"),n("6aA6"),n("mQBx")},S=Object(g.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"update-master"},[n("div",{staticClass:"top-title"},[t.isEdit?n("h2",[t._v("Cập nhật coupon")]):n("h2",[t._v("Thêm coupon")]),t._v(" "),n("div",{staticClass:"top-title__right-button"},[this.$route.params.id?n("b-btn",{attrs:{type:"button",variant:"btn btn-info"},on:{click:t.updateCoupon}},[n("i",{staticClass:"icon ion-md-archive"}),t._v(" Cập nhật\n            ")]):n("b-btn",{attrs:{type:"button",variant:"btn btn-primary"},on:{click:t.addCoupon}},[n("i",{staticClass:"ion ion-ios-add"}),t._v(" Thêm coupon\n            ")]),t._v(" "),n("router-link",{staticClass:"btn btn-default",attrs:{to:{name:"coupon-manage"}}},[n("i",{staticClass:"ion ion-ios-return-left"}),t._v(" Quay lại")])],1)]),t._v(" "),n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card mb-4"},[n("div",{staticClass:"row no-gutters row-bordered"},[n("div",{staticClass:"col-md-12 col-lg-12 col-xl-12"},[n("h6",{staticClass:"card-header ttcn-header"},[n("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-ttcn",modifiers:{"accordion-ttcn":!0}}],staticClass:"text-dark",attrs:{href:"javascript:void(0)"}},[t._v(" Thông tin coupon")])]),t._v(" "),n("b-collapse",{attrs:{id:"accordion-ttcn",visible:""}},[n("div",{staticClass:"card-body"},[n("b-form-row",[n("div",{staticClass:"col-md-10 col-lg-10 col-xl-10"},[n("b-form-row",[n("b-form-group",{staticClass:"col-xl-4 col-md-6",attrs:{label:"Tên coupon",id:"group-fullname"}},[n("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-danger":t.errors.has("fullname")},attrs:{name:"name",placeholder:"Tên coupon"},model:{value:t.couponName,callback:function(e){t.couponName=e},expression:"couponName"}})],1),t._v(" "),n("b-form-group",{staticClass:"col-xl-4 col-md-6",attrs:{label:"Thời gian áp dụng"}},[n("flat-pickr",{staticClass:"mb-4",attrs:{config:t.rangeConfig,placeholder:"Chọn khoảng thời gian"},model:{value:t.rawTime,callback:function(e){t.rawTime=e},expression:"rawTime"}})],1),t._v(" "),n("b-form-group",{staticClass:"col-xl-4 col-md-6",attrs:{label:"Tỉ lệ thưởng (%)"}},[n("b-input",{attrs:{type:"number"},model:{value:t.bonus,callback:function(e){t.bonus=e},expression:"bonus"}})],1)],1),t._v(" "),n("b-form-row",[n("b-form-group",{staticClass:"col-md-12",attrs:{label:"Tỉnh áp dụng",id:"input-group-tel"}},[n("multi-select-province",{attrs:{"display-all":!0,"province-ids":t.provinceIds,"limit-prop":99999,"auto-close":!1,"hide-selected":!0},on:{handleProvinceSelected:t.handleProvinceSelected}})],1)],1),t._v(" "),n("b-form-row",[n("b-form-group",{staticClass:"col-md-12",attrs:{label:"Kho áp dụng",id:"input-group-tel"}},[n("multi-select-station",{attrs:{provinceIds:t.provinceIds,"station-ids":t.stationIds,"auto-close":!1,"hide-selected":!0},on:{handleStationSelected:t.handleStationSelected}})],1)],1),t._v(" "),n("b-form-row",{staticClass:"mb-4"},[n("b-form-group",{staticClass:"col-md-12",attrs:{label:"Module áp dụng",id:"input-group-tel"}},[n("multi-select-module",{attrs:{stationIds:t.stationIds,"module-ids":t.moduleIds,"auto-close":!1,"hide-selected":!0},on:{handleModuleSelected:t.handleModuleSelected}})],1)],1),t._v(" "),n("b-form-row",[n("b-form-group",{staticClass:"col-md-12",attrs:{label:"Bộ phận áp dụng",id:"input-group-tel"}},[n("multi-select-department",{attrs:{"department-ids":t.departmentIds,"auto-close":!1,"hide-selected":!0},on:{handleDepartmentSelected:t.handleDepartmentSelected}})],1)],1),t._v(" "),n("b-form-row",[n("b-form-group",{staticClass:"col-md-12",attrs:{label:"Vị trí áp dụng",id:"input-group-tel"}},[n("multi-select-position",{attrs:{"department-ids":t.departmentIds,"position-ids":t.positionIds,"auto-close":!1,"hide-selected":!0},on:{handlePositionSelected:t.handlePositionSelected}})],1)],1)],1)])],1)])],1)])])])]),t._v(" "),n("div",{staticClass:"card-footer border-0 text-center py-3"},[null==this.$route.params.id?n("b-btn",{attrs:{type:"button",variant:"btn btn-primary"},on:{click:t.addCoupon}},[n("i",{staticClass:"ion ion-ios-add"}),t._v(" Thêm coupon\n            ")]):n("div",[n("b-btn",{attrs:{type:"button",variant:"btn btn-info"},on:{click:t.updateCoupon}},[n("i",{staticClass:"icon ion-md-archive"}),t._v(" Cập nhật\n                ")]),t._v(" "),n("router-link",{staticClass:"btn btn-default",attrs:{to:{name:"coupon-manage"}}},[n("i",{staticClass:"ion ion-ios-return-left"}),t._v(" Quay lại")])],1)],1),t._v(" "),n("notifications",{attrs:{group:"add-emp"}})],1)])},[],!1,C,"data-v-3f49d134",null);e.default=S.exports}});