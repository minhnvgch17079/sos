webpackJsonp([6],{"6YUT":function(t,e){},"jib+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("agCp"),l=s("RUzx"),i=s.n(l),n=s("28+M"),o=s.n(n),r=s("IENG"),c=s("YrBS"),u=s("4s2B"),d=s("mCOD"),p=s("QKlT"),_=s.n(p),m=s("Bo22"),h=s.n(m),g=s("DAYN"),v=s.n(g),f={name:"staffsearch",components:{SelectStations:u.a,SelectDepartmentAndPositionJob:c.a,SelectUserGroup:r.a,LoadingMiniBottom:d.a,Multiselect:i.a,flatPickr:_.a,VueMonthlyPicker:h.a,InputTag:o.a,draggable:v.a},data:function(){return{success:!0,appLoading:!1,selectedMonth:"",user:{fullname:"",username:"",email:"",staff_code:"",national_id:"",work_status:""},listUsers:[],selected:{null_default:null,stations:[],department:[],group:[],position_job:[],user_status:null,cod_status_id:null,province_group:null,range_time_filter:null,range_time:null},user_status_options:[{value:null,text:"Trạng thái user"},{value:"1",text:"Bị khóa"},{value:"2",text:"Chưa kích hoạt"},{value:"3",text:"Đã kích hoạt"}],cod_status_options:[{value:null,text:"Trạng thái cod"},{value:"1",text:"Đang thử việc"},{value:"2",text:"Đang làm việc"},{value:"3",text:"Đã nghỉ"},{value:"4",text:"Cộng tác viên"}],province_group_options:[{value:null,text:"Chọn khu vực"},{value:"hn_group",text:"Hà nội"},{value:"dn_group",text:"Đà nẵng"},{value:"hcm_group",text:"HCM"},{value:"mb_group",text:"Miền bắc"},{value:"mt_group",text:"Miền trung"},{value:"mn_group",text:"Miền nam"}],range_time_filter_options:[{value:null,text:"Options áp dụng time"},{value:"created_time",text:"Ngày tạo user"},{value:"join_date",text:"Ngày vào"},{value:"trial_date",text:"Ngày thử việc"},{value:"start_date_day",text:"Ngày chính thức"},{value:"resignation",text:"Ngày nghỉ việc"},{value:"ins_time",text:"Thời gian đóng bảo hiểm"}],rangeConfig:{mode:"range",altInput:!0,dateFormat:"Y-m-d",altFormat:"Y-m-d"},pageData:{currentPage:1,totalPages:0,totalItems:0,perPage:10,sortBy:"id",sortDesc:!1},export_file:!1,listColumnsExport:[],expandExport:!0,allowExport:!1}},methods:{getListColumnsExport:function(){var t=this;a.a.getListColumnsExport().then(function(e){e.data.success&&(t.listColumnsExport=e.data.listcolums)}).catch(function(t){console.log(t)})},pageChanged:function(t){this.searchUsers(t),this.pageData.currentPage=t},searchUsers:function(t,e,s){var l=this,i=null;null!=this.selected.range_time&&(i=this.selected.range_time.split("to"));var n={full_name:this.user.fullname,staff_code:this.user.staff_code,username:this.user.username,national_id:this.user.national_id,tel:this.user.tel,email:this.user.email,department:this.selected.department,position_job:this.selected.position_job,group_id:this.selected.group,stations:this.selected.stations,province_group:this.selected.province_group,user_status:this.selected.user_status,cod_status_id:this.selected.cod_status_id,range_time_filter:this.selected.range_time_filter,range_time:i,page:t,coloums_export:this.listColumnsExport};e&&(this.pageData.currentPage=1,n.page=1),null!==this.selected.department&&(n.department=this.selected.department,null!==this.selected.position_job&&(n.position_job=this.selected.position_job)),this.$startLoading(),s?a.a.exportExcel(n).then(function(t){t.data.success?window.open(t.data.path_file,"_blank"):l.success=!1}).then(function(){l.$stopLoading()}):a.a.searchStaff(n).then(function(t){t.data.success?(l.pageData.totalItems=t.data.pagination.total,l.pageData.perPage=t.data.pagination.per_page,l.pageData.totalPages=t.data.pagination.total_page,l.listUsers=t.data.data,l.allowExport=t.data.permissions.export):l.success=!1}).then(function(){l.$stopLoading()})},showOptionsExp:function(){this.$refs.expandExport.show()},removeColums:function(t){this.listColumnsExport.splice(t,1)},resetForm:function(){this.user.fullname=null,this.user.national_id=null,this.user.staff_code=null,this.user.username=null,this.user.tel=null,this.user.email=null,this.selected.stations=[],this.selected.department=null,this.selected.position_job=null,this.selected.province_group=null,this.selected.user_status=null,this.selected.cod_status_id=null,this.selected.range_time_filter=null,this.selected.range_time=null,this.$refs.select_stations.reset(),this.$refs.select_groups.reset(),this.$refs.select_position_jobs.reset()},showDate:function(t){this.selected.date=t}},created:function(){this.searchUsers(this.pageData.currentPage),this.getListColumnsExport()},computed:{totalItems:function(){return this.listUsers.length},totalPages:function(){return Math.ceil(this.totalItems/this.perPage)}},metaInfo:{title:"Tìm kiếm nhân viên"}},b=s("XyMi");var x=function(t){s("OEkN"),s("6YUT")},C=Object(b.a)(f,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"ui-block"},[s("h4",{staticClass:"ui-block-heading"},[t._v("Tìm kiếm nhân viên")]),t._v(" "),s("div",{staticClass:"search-form"},[s("form",[s("b-form-row",[s("b-form-group",{staticClass:"col-md-2",attrs:{label:"Họ tên"}},[s("b-input",{attrs:{type:"text",placeholder:"Nhập họ tên"},model:{value:t.user.fullname,callback:function(e){t.$set(t.user,"fullname",e)},expression:"user.fullname"}})],1),t._v(" "),s("b-form-group",{staticClass:"col-md-2",attrs:{label:"Chứng minh thư hoặc hộ chiếu"}},[s("b-input",{attrs:{placeholder:"Nhập chứng minh thư hoặc hộ chiếu"},model:{value:t.user.national_id,callback:function(e){t.$set(t.user,"national_id",e)},expression:"user.national_id"}})],1),t._v(" "),s("b-form-group",{staticClass:"col-md-2",attrs:{label:"Mã nhân viên"}},[s("b-input",{attrs:{type:"text",placeholder:"Nhập mã nhân viên"},model:{value:t.user.staff_code,callback:function(e){t.$set(t.user,"staff_code",e)},expression:"user.staff_code"}})],1),t._v(" "),s("b-form-group",{staticClass:"col-md-2",attrs:{label:"Tên đăng nhập"}},[s("b-input",{attrs:{type:"text",placeholder:"Nhập tên đăng nhập"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),t._v(" "),s("b-form-group",{staticClass:"col-md-2",attrs:{label:"Số điện thoại"}},[s("b-input",{attrs:{type:"text",placeholder:"Nhập số điện thoại"},model:{value:t.user.tel,callback:function(e){t.$set(t.user,"tel",e)},expression:"user.tel"}})],1),t._v(" "),s("b-form-group",{staticClass:"col-md-2",attrs:{label:"Email ghtk"}},[s("b-input",{attrs:{type:"email",placeholder:"Email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)],1),t._v(" "),s("b-form-row",[s("div",{staticClass:"col-md-2"},[s("b-form-group",{attrs:{label:"Chọn kho"}},[s("select-stations",{ref:"select_stations",attrs:{placehoder:"Nhập kho cần tìm kiếm"},on:{selected:function(e){t.selected.stations=e}}})],1)],1),t._v(" "),s("div",{staticClass:"col-md-2"},[s("b-form-group",{attrs:{label:"Nhóm tài khoản"}},[s("select-user-group",{ref:"select_groups",attrs:{multiple:!1},on:{selected:function(e){t.selected.group=e}}})],1)],1),t._v(" "),s("div",{staticClass:"col-md-4"},[s("select-department-and-position-job",{ref:"select_position_jobs",on:{getPositionJobName:function(e){t.selected.position_job=e},getDepartment:function(e){t.selected.department=e}}})],1),t._v(" "),s("div",{staticClass:"col-md-2"},[s("b-form-group",{attrs:{label:"Trạng thái tài khoản(User)"}},[s("b-form-select",{attrs:{options:t.user_status_options},model:{value:t.selected.user_status,callback:function(e){t.$set(t.selected,"user_status",e)},expression:"selected.user_status"}})],1)],1),t._v(" "),s("div",{staticClass:"col-md-2"},[s("b-form-group",{attrs:{label:"Trạng thái COD"}},[s("b-form-select",{attrs:{options:t.cod_status_options},model:{value:t.selected.cod_status_id,callback:function(e){t.$set(t.selected,"cod_status_id",e)},expression:"selected.cod_status_id"}})],1)],1)]),t._v(" "),s("b-form-row",[s("div",{staticClass:"col-md-2"},[s("b-form-group",{attrs:{label:"Khu vực"}},[s("b-form-select",{attrs:{options:t.province_group_options},model:{value:t.selected.province_group,callback:function(e){t.$set(t.selected,"province_group",e)},expression:"selected.province_group"}})],1)],1),t._v(" "),s("div",[s("b-form-group",{attrs:{label:"Lọc thời gian với options"}},[s("b-form-select",{attrs:{options:t.range_time_filter_options},model:{value:t.selected.range_time_filter,callback:function(e){t.$set(t.selected,"range_time_filter",e)},expression:"selected.range_time_filter"}})],1)],1),t._v(" "),s("div",{staticClass:"col-md mb-4"},[s("b-form-group",{attrs:{label:"Lọc thời gian với options"}},[s("flat-pickr",{attrs:{config:t.rangeConfig,placeholder:"Chọn khoảng thời gian"},model:{value:t.selected.range_time,callback:function(e){t.$set(t.selected,"range_time",e)},expression:"selected.range_time"}})],1)],1),t._v(" "),s("div",{staticClass:"col-md-4"},[s("b-form-group",{attrs:{label:"&nbsp"}},[s("div",{staticClass:"align-content-center center"},[s("b-btn",{attrs:{type:"reset"},on:{click:t.resetForm}},[t._v("Nhập lại")]),t._v(" "),t.allowExport?s("b-btn",{attrs:{type:"reset"},on:{click:t.showOptionsExp}},[t._v("Tùy chọn xuất excel")]):t._e(),t._v(" "),s("b-btn",{attrs:{type:"button",variant:"primary"},on:{click:function(e){return t.searchUsers(t.pageData.currentPage,!0,!1)}}},[s("i",{staticClass:"sidenav-icon ion ion-md-search"}),t._v(" Tìm kiếm")])],1)])],1)]),t._v(" "),s("b-modal",{ref:"expandExport",attrs:{"modal-class":"modal-slide","hide-footer":"",static:""}},[s("div",{attrs:{slot:"modal-title"},slot:"modal-title"},[s("p",{staticClass:"text-center text-big mb-4"},[t._v("Columns file Excel")])]),t._v(" "),s("div",{staticClass:"drag"},[s("draggable",{staticClass:"dragArea",staticStyle:{background:"#92d9ff","min-height":"30px"},attrs:{options:{group:"colums"}},model:{value:t.listColumnsExport,callback:function(e){t.listColumnsExport=e},expression:"listColumnsExport"}},t._l(t.listColumnsExport,function(e){return s("div",{staticStyle:{"line-height":"0.7"}},[s("li",{staticClass:"list-group-item"},[s("span",[t._v(t._s(e.name))]),t._v(" "),s("button",{staticStyle:{float:"right"},attrs:{type:"reset"},on:{click:function(e){return t.removeColums(t.index)}}},[t._v("X")])])])}),0)],1),t._v(" "),s("div",{staticClass:"align-content-center center"},[s("b-btn",{attrs:{type:"button",variant:"primary"},on:{click:function(e){return t.searchUsers(t.pageData.currentPage,!0,!0)}}},[s("i",{staticClass:"sidenav-icon ion ion-ios-document"}),t._v(" Xuất file")])],1)])],1)]),t._v(" "),s("div",{staticClass:"result",attrs:{id:"results"}},[s("br"),t._v(" "),t.listUsers?s("b-card",{attrs:{"no-body":""}},[s("div",{staticClass:"table-result"},[s("div",{staticClass:"table-responsive mb-4"},[s("table",{staticClass:"table mb-0 table-bordered"},[s("thead",{staticStyle:{width:"100%"}},[s("tr",[s("th",[t._v("Mã NV")]),t._v(" "),s("th",[t._v("Họ tên")]),t._v(" "),s("th",[t._v("Tên đăng nhập")]),t._v(" "),s("th",[t._v("Email")]),t._v(" "),s("th",[t._v("Bộ phận")]),t._v(" "),s("th",[t._v("Vị trí")]),t._v(" "),s("th",[t._v("Kho")])])]),t._v(" "),s("tbody",t._l(t.listUsers,function(e){return s("tr",[s("th",{attrs:{scope:"row","data-user-id":e.id}},[t._v(t._s(e.staff_code))]),t._v(" "),s("td",[t._v(t._s(e.fullname))]),t._v(" "),s("td",[t._v(t._s(e.username))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.group))]),t._v(" "),s("td",[t._v(t._s(e.position))]),t._v(" "),s("td",[t._v(t._s(e.station))])])}),0)])]),t._v(" "),s("b-card-body",{staticClass:"pt-0 pb-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm pt-3"},[s("b-pagination",{attrs:{"total-rows":t.pageData.totalItems,"per-page":t.pageData.perPage},on:{change:t.pageChanged},model:{value:t.pageData.currentPage,callback:function(e){t.$set(t.pageData,"currentPage",e)},expression:"pageData.currentPage"}})],1),t._v(" "),s("div",{staticClass:"col-sm text-sm-left text-center pt-3"},[t.pageData.totalItems?s("span",{staticClass:"text-muted"},[t._v("Trang "+t._s(t.pageData.currentPage)+" trên "+t._s(t.pageData.totalPages))]):t._e()])])])],1)]):t._e(),t._v(" "),t.listUsers?t._e():s("div",{staticClass:"no-data"},[t._v("\n                    Không có dữ liệu phù hợp, vui lòng thử lại với điều kiện tìm kiếm khác.\n                ")]),t._v(" "),s("loading-mini-bottom",{attrs:{enable:t.appLoading}})],1)])])},[],!1,x,"data-v-dac82a06",null);e.default=C.exports}});