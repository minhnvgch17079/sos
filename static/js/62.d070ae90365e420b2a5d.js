webpackJsonp([62],{"9WXz":function(t,e){},rwck:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("RUzx"),s=i.n(a),l=i("YmGg"),n=i("QKlT"),d=i.n(n),o=i("qaB4"),r=i("4s2B"),c=i("PJh5"),v=i.n(c),h=i("HveU"),p=[{name:"Tất cả",code:0},{name:"Tài xế liên tỉnh",code:49},{name:"Tài xế nội tỉnh",code:56}],u={name:"driver-data-work-manager",metaInfo:{title:"Driver Data Work"},components:{Multiselect:s.a,salaryService:l.a,flatPickr:d.a,LaddaBtn:o.a,SelectStations:r.a,moment:v.a,SweetModal:h.a,SweetModalTab:h.b},data:function(){return{selectedStation:"",selectedDriverId:"",listDriverId:[],listDriverFollowPosition:[],listPositionJobs:p,selectedPositionJob:p[0],selectedRangeTime:"",typedCodAlias:"",typedUserName:"",typedDriverId:"",disabledCol1:!1,disabledCol2:[!1,!1,!1],loadingButton:!1,rangeConfig:{mode:"range",altInput:!0,dateFormat:"Y-m-d",altFormat:"Y-m-d"},infoDriver:{},forceToStop:!1,loadingButtonSave:!1,titleModalShowBag:"",listBags:"",readyToShow:!0,tabIndex:0,dataAllDate:[],dataAllDateBackup:[],dataSendUpdate:{}}},computed:{aliasState:function(){return!(!/(T|t)([0-9]+)/.test(this.typedCodAlias)&&""!==this.typedCodAlias)},idState:function(){return!(this.typedDriverId>1e6)},usernameState:function(){return!0},totalItems:function(){return this.articlesData.length},totalPages:function(){return Math.ceil(this.totalItems/this.perPage)}},methods:{setSelectedPositionJob:function(){0!==this.listDriverFollowPosition.length&&(0!==this.selectedPositionJob.code&&this.selectedPositionJob||(this.listDriverId=this.listDriverFollowPosition[49].concat(this.listDriverId=this.listDriverFollowPosition[65])),49===this.selectedPositionJob.code&&(this.listDriverId=this.listDriverFollowPosition[49]),56===this.selectedPositionJob.code&&(this.listDriverId=this.listDriverFollowPosition[65]),""===this.selectedPositionJob.code&&(this.listDriverId=this.listDriverFollowPosition[65]))},setSelectedStation:function(t){var e=this;t&&(this.selectedStation=t,this.listDriverId=[],l.a.apiGetAllDriversFromStation({stationId:t}).then(function(t){t.data.hasOwnProperty("success")&&e.$notify({group:"notifications-default",type:t.data.success?"":"bg-danger text-white",title:t.data.success?"Thành công":"Lỗi",text:t.data.message}),t.data.hasOwnProperty("data")&&(e.listDriverFollowPosition=t.data.data,e.setSelectedPositionJob())}).catch(function(){e.$notify({group:"notifications-default",type:"bg-danger text-white",title:"Lỗi",text:"Đã có lỗi xảy ra."})}).then(function(){}))},setSelectedDriver:function(){this.selectedDriverId?this.disabledCol2=[!0,!0,!0]:this.disabledCol2=[!1,!1,!1]},typingCol2:function(t){this.disabledCol2=[!0,!0,!0],this.disabledCol2[t]=!1,""===this.typedUserName&&""===this.typedDriverId&&""===this.typedCodAlias?(this.disabledCol1=!1,this.disabledCol2=[!1,!1,!1]):this.disabledCol1=!0},resetAllFields:function(){this.selectedStation="",this.selectedDriverId="",this.selectedPositionJob=p[0],this.selectedRangeTime="",this.typedCodAlias="",this.typedUserName="",this.typedDriverId="",this.disabledCol1=!1,this.disabledCol2=[!1,!1,!1],this.loadingButton=!1,this.titleModalShowBag="",this.listBags="",this.readyToShow=!0,this.tabIndex=0,this.dataAllDate=[],this.dataAllDateBackup=[],this.forceToStop=!0},linkClass:function(t){return this.tabIndex===t?["bg-primary","text-white"]:["bg-light","text-default"]},runProcess:function(){var t=this;if(""===this.selectedRangeTime)return!1;if(!(this.selectedDriverId||this.typedCodAlias||this.typedDriverId||this.typedUserName))return!1;var e=this.selectedRangeTime.split(" to ");this.loadingButton=!0,this.dataAllDate=[],l.a.apiGetInfoDriver({codAlias:this.typedCodAlias,userName:this.typedUserName,driverId:this.typedDriverId?this.typedDriverId:this.selectedDriverId.code,fromDate:e[0],toDate:e[1]}).then(function(e){if(e.data.hasOwnProperty("success")){if(t.$notify({group:"notifications-default",type:e.data.success?"":"bg-danger text-white",title:e.data.success?"Thành công":"Lỗi",text:e.data.message?e.data.message:"Lấy thông tin tài xế thành công"}),!e.data.success)return t.readyToShow=!1,0;t.infoDriver=e.data.data}}).catch(function(){t.$notify({group:"notifications-default",type:"bg-danger text-white",title:"Lỗi",text:"Đã có lỗi xảy ra."})}).then(function(){if(void 0===t.infoDriver.driver_id)return t.loadingButton=!1,0;t.forceToStop=!1;var e=t.selectedRangeTime.split(" to ");t.getDataDateByDate(t.infoDriver.driver_id,e[0],e[1])})},getDataDateByDate:function(t,e,i){var a=this,s={driverId:t,date:e};l.a.apiGetDataWorkDriverInRangeTime(s).then(function(t){if(t.data.hasOwnProperty("success")&&(a.$notify({group:"notifications-default",type:t.data.success?"":"bg-danger text-white",title:t.data.success?"Thành công":"Lỗi",text:t.data.message}),t.data.success&&t.data.hasOwnProperty("data"))){if(a.forceToStop)return;a.dataAllDate.push({date:e,data:t.data.data,reportData:t.data.reportData})}}).catch(function(){return a.$notify({group:"notifications-default",type:"bg-danger text-white",title:"Lỗi",text:"Đã có lỗi xảy ra khi lấy dữ liệu ngày "+new Date(e).toLocaleDateString()}),a.loadingButton=!1,0}).then(function(){if(!a.forceToStop)if(v()(new Date(e)).format("YYYY-MM-DD")!==v()(new Date(i)).format("YYYY-MM-DD")){var s=v()(new Date(e)).add(1,"days").format("YYYY-MM-DD");a.getDataDateByDate(t,s,i)}else a.loadingButton=!1})},showBags:function(t){this.titleModalShowBag=t.bags.length+" bao",this.listBags=t.bags.toString(),this.listBags=this.listBags.replace(/,/g,", "),this.$refs.modalShowBag.open()},deletePoint:function(t,e){void 0===this.dataAllDateBackup[t]&&(this.dataAllDateBackup[t]=[]),this.dataAllDateBackup[t].push(this.dataAllDate[t].data.slice(0)),this.dataAllDate[t].data.splice(e,1);var i=void 0;for(i=0;i<this.dataAllDate[t].data.length&&void 0!==this.dataAllDate[t].data[i+1];i++)this.dataAllDate[t].data[i].point_id===this.dataAllDate[t].data[i+1].point_id&&(this.dataAllDate[t].data[i].list_his_truck=this.dataAllDate[t].data[i].list_his_truck.concat(this.dataAllDate[t].data[i+1].list_his_truck),this.dataAllDate[t].data.splice(i+1,1))},rollbackDeletePoint:function(t){void 0===this.dataAllDateBackup[t]||this.dataAllDateBackup[t].length<1||(this.dataAllDate[t].data=this.dataAllDateBackup[t].pop())},showLogReport:function(t,e){e&&(t=e);var i=void 0,a="",s=1;for(i=0;i<t.length;i++)"approved"===t[i].status&&(a=a+'<p class="text-success">'+s+++". "+t[i].point_name,void 0!==t[i].info.reason&&"first_point"===t[i].info.reason?a+=": Điểm xuất phát</p>":a=a+": "+parseInt(t[i].info.distance)/1e3+" Km</p>"),"reject"===t[i].status&&"duplicated"!==t[i].reason&&(a=a+'<p class="text-danger">'+s+++". "+t[i].point_name,"fast_speed"===t[i].reason&&(a=a+": Tốc độ tạm tính quá lớn ("+Math.round(100*t[i].info.speed)/100+" Km/h)</p>"),"to_not_lat_lng"===t[i].reason&&(a+=": Chưa config tọa độ điểm</p>"));return a},saveDataChange:function(){var t=this;console.log(this.dataSendUpdate),this.dataSendUpdate&&(this.$refs.modalConfirmUpdate.hide(),this.loadingButtonSave=!0,l.a.apiUpdateDriverReportDataManually(this.dataSendUpdate).then(function(e){e.data.hasOwnProperty("success")&&(t.$notify({group:"notifications-default",type:e.data.success?"":"bg-danger text-white",title:e.data.success?"Thành công":"Lỗi",text:e.data.message}),e.data.success&&e.data.hasOwnProperty("data"))}).catch(function(){return t.$notify({group:"notifications-default",type:"bg-danger text-white",title:"Lỗi",text:"Đã có lỗi xảy ra khi lấy dữ liệu ngày "}),t.loadingButton=!1,0}).then(function(){t.loadingButtonSave=!1}))},clickButtonUpdate:function(t,e){this.dataSendUpdate={date:t,driver_id:this.infoDriver.driver_id,position_job:this.infoDriver.position_job,data:e},this.$refs.modalConfirmUpdate.show()}},mounted:function(){},created:function(){},updated:function(){}},g=i("XyMi");var b=function(t){i("OEkN"),i("u2bN"),i("9WXz")},m=Object(g.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("b-card",{attrs:{"no-body":""}},[i("b-card-body",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4 border-left border-success",staticStyle:{background:"#ebf5fb"}},[i("div",{staticStyle:{padding:"10px 5px 0 5px"}},[i("b-form-group",{attrs:{label:"Chọn kho"}},[i("select-stations",{attrs:{multiple:!1,disabled:t.disabledCol1},on:{selected:t.setSelectedStation}})],1)],1),t._v(" "),i("div",{staticStyle:{padding:"10px 5px 0 5px"}},[i("b-form-group",{attrs:{label:"Chọn loại tài xế"}},[i("multiselect",{attrs:{label:"name","track-by":"code",options:t.listPositionJobs,taggable:!0,placeholder:"Chọn",disabled:t.disabledCol1},on:{input:t.setSelectedPositionJob},model:{value:t.selectedPositionJob,callback:function(e){t.selectedPositionJob=e},expression:"selectedPositionJob"}})],1)],1),t._v(" "),i("div",{staticStyle:{padding:"10px 5px 0 5px"}},[i("b-form-group",{attrs:{label:"Chọn tài xế"}},[i("multiselect",{attrs:{label:"name","track-by":"code",options:t.listDriverId,taggable:!0,placeholder:"Chọn",disabled:t.disabledCol1},on:{input:t.setSelectedDriver},model:{value:t.selectedDriverId,callback:function(e){t.selectedDriverId=e},expression:"selectedDriverId"}})],1)],1)]),t._v(" "),i("div",{staticClass:"col-md-auto"}),t._v(" "),i("div",{staticClass:"col-md-3"},[i("div",{staticStyle:{"margin-bottom":"10px",width:"100%"}},[i("div",{staticClass:"border-left border-danger center-input"},[i("label",{staticClass:"form-label"},[t._v("Mã nhân viên")]),t._v(" "),i("b-form-input",{attrs:{id:"inputLive",disabled:t.disabledCol2[0],type:"text",state:t.aliasState,"aria-describedby":"inputLiveFeedback",placeholder:"Nhập alias"},on:{input:function(e){return t.typingCol2(0)}},model:{value:t.typedCodAlias,callback:function(e){t.typedCodAlias="string"==typeof e?e.trim():e},expression:"typedCodAlias"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[t._v("\n                  Vui lòng kiểm tra lại alias\n                ")])],1)]),t._v(" "),i("div",{staticStyle:{"margin-bottom":"10px"}},[i("div",{staticClass:"border-left border-danger center-input"},[i("label",{staticClass:"form-label"},[t._v("Tên đăng nhập")]),t._v(" "),i("b-form-input",{attrs:{id:"inputLive",disabled:t.disabledCol2[1],type:"text",state:t.usernameState,"aria-describedby":"inputLiveFeedback",placeholder:"Nhập username"},on:{input:function(e){return t.typingCol2(1)}},model:{value:t.typedUserName,callback:function(e){t.typedUserName="string"==typeof e?e.trim():e},expression:"typedUserName"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[t._v("\n                  Vui lòng kiểm tra lại username\n                ")])],1)]),t._v(" "),i("div",[i("div",{staticClass:"border-left border-danger center-input"},[i("label",{staticClass:"form-label"},[t._v("ID nhân viên")]),t._v(" "),i("b-form-input",{attrs:{id:"inputLive",disabled:t.disabledCol2[2],type:"number",state:t.idState,"aria-describedby":"inputLiveFeedback",placeholder:"Nhập id"},on:{input:function(e){return t.typingCol2(2)}},model:{value:t.typedDriverId,callback:function(e){t.typedDriverId="string"==typeof e?e.trim():e},expression:"typedDriverId"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[t._v("\n                  Vui lòng kiểm tra lại ID\n                ")])],1)])]),t._v(" "),i("div",{staticClass:"col-md-auto"}),t._v(" "),void 0!==t.infoDriver.driver_id?i("div",{staticClass:"col-md-4",staticStyle:{"text-align":"center","background-color":"#FAFAFA","margin-right":"40px"}},[i("div",{staticClass:"media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto"},[i("img",{staticClass:"d-block ui-w-100 rounded",attrs:{src:t.baseUrl+"/static/img/noimage.png",alt:"",width:"300",height:"300"}}),t._v(" "),i("div",{staticClass:"media-body ml-5"},[i("h5",{staticClass:"font-weight-bold mb-4"},[t._v(t._s(t.infoDriver.fullname)+" - "+t._s(t.infoDriver.driver_id))]),t._v(" "),i("div",{staticClass:"text-muted mb-4"},[i("p",[i("strong",[t._v("Kho: ")]),t._v(t._s(t.infoDriver.station_name)+" - "+t._s(t.infoDriver.station_id))]),t._v(" "),"49"===t.infoDriver.position_job?i("p",[i("strong",[t._v("Vị trí: Tài xế liên tỉnh")])]):t._e(),"65"===t.infoDriver.position_job?i("p",[i("strong",[t._v("Vị trí: Tài xế nội tỉnh")])]):t._e()])])])]):i("div",{staticClass:"col-md-4",staticStyle:{"text-align":"center","background-color":"#FAFAFA","margin-right":"40px"}},[i("div",{staticClass:"media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto"},[i("img",{staticClass:"d-block ui-w-100 rounded",attrs:{src:t.baseUrl+"/static/img/noimage.png",alt:"",width:"300",height:"300"}}),t._v(" "),i("div",{staticClass:"media-body ml-5"},[i("h5",{staticClass:"font-weight-bold mb-4"},[t._v("...................")]),t._v(" "),i("div",{staticClass:"text-muted mb-4"},[i("p",[i("strong",[t._v("Kho: ")]),t._v(".......................")]),t._v(" "),i("p",[i("strong",[t._v("Vị trí: ")]),t._v("......................")])])])])])]),t._v(" "),i("div",{staticClass:"row",staticStyle:{"margin-bottom":"-30px","padding-bottom":"-20px"}},[i("div",{staticClass:"col-md-4",staticStyle:{padding:"10px"}},[i("b-form-group",{attrs:{label:"Khoảng thời gian"}},[i("flat-pickr",{attrs:{config:t.rangeConfig,placeholder:"Chọn khoảng thời gian"},model:{value:t.selectedRangeTime,callback:function(e){t.selectedRangeTime=e},expression:"selectedRangeTime"}}),t._v(" "),""!==t.selectedRangeTime?i("p",{staticStyle:{"font-size":"13px","line-height":"30px"}},[i("i",[t._v(" (*) ứng với\n                dữ liệu từ "),i("span",{staticStyle:{color:"red"}},[t._v(t._s(t.selectedRangeTime.split(" to ")[0])+" 00:00:00")]),t._v(" đến "),i("span",{staticStyle:{color:"red"}},[t._v(t._s(t.selectedRangeTime.split(" to ")[1])+" 23:59:59")])])]):t._e()],1)],1),t._v(" "),i("div",{staticClass:"col-md-4",staticStyle:{padding:"10px"}},[i("label",{staticClass:"form-label d-none d-md-block"},[t._v(" ")]),t._v(" "),i("ladda-btn",{staticClass:"btn btn-primary",staticStyle:{width:"40%"},attrs:{loading:t.loadingButton,"data-style":"expand-right"},nativeOn:{click:function(e){return t.runProcess(e)}}},[t._v("\n              Chạy\n            ")])],1),t._v(" "),i("div",{staticClass:"col-md-1 offset-md-3",staticStyle:{padding:"10px"}},[i("label",{staticClass:"form-label d-none d-md-block"},[t._v(" ")]),t._v(" "),i("b-btn",{attrs:{size:"sm",variant:"outline-danger"},on:{click:t.resetAllFields}},[i("i",{staticClass:"ion ion-md-refresh"}),t._v(" Reset\n            ")])],1),t._v(" "),i("div",{staticClass:"d-inline-block"})]),t._v(" "),i("br")])],1),t._v(" "),i("sweet-modal",{ref:"modalShowBag",attrs:{title:t.titleModalShowBag}},[i("div",{staticStyle:{"text-align":"justify"}},[i("b",[i("i",[t._v("Mã bao:")])]),t._v(" "+t._s(t.listBags)+"\n      ")])]),t._v(" "),i("b-modal",{ref:"modalConfirmUpdate",attrs:{"hide-footer":"",static:""}},[i("div",{staticClass:"d-block text-center"},[i("h4",[t._v("Bạn có chắc chắn muốn cập nhật dữ liệu làm việc cho tài xế này không?")])]),t._v(" "),i("b-btn",{staticClass:"mt-3",attrs:{variant:"outline-success",block:""},on:{click:t.saveDataChange}},[t._v("Xác nhận")])],1),t._v(" "),i("br"),t._v(" "),i("b-card",{attrs:{"no-body":""}},[i("b-card-body",[i("div",{staticClass:"row"},[i("b-tabs",{staticClass:"nav-tabs-top mb-4",staticStyle:{width:"100%"},attrs:{"nav-wrapper-class":"w-200"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},t._l(t.dataAllDate,function(e,a){return i("b-tab",{key:a,attrs:{title:e.date,"title-link-class":t.linkClass(a)}},[i("div",{staticClass:"card-body col-md-12",staticStyle:{width:"100%"}},[i("h5",[t._v("● Log xuất nhập:")]),t._v(" "),0===e.data.length&&(void 0===t.dataAllDateBackup[a]||t.dataAllDateBackup[a].length<1)?i("div",{staticClass:"p-3 mb-2 bg-danger text-white"},[t._v("\n                  Không có dữ liệu lên xuống tải\n                ")]):t._e(),t._v(" "),i("div",{staticClass:"table-result"},[0!==e.data.length?i("div",{staticClass:"table-responsive mb-4"},[i("table",{staticClass:"table mb-0 table-bordered",staticStyle:{"text-align":"center","vertical-align":"middle"}},[i("thead",{},[i("tr",[i("th",{staticStyle:{width:"5%","vertical-align":"middle"},attrs:{rowspan:"2"}},[t._v("STT")]),t._v(" "),i("th",{staticStyle:{width:"10%","vertical-align":"middle"},attrs:{rowspan:"2"}},[t._v("ID điểm dừng")]),t._v(" "),i("th",{staticStyle:{width:"15%","vertical-align":"middle"},attrs:{rowspan:"2"}},[t._v("Tên điểm dừng")]),t._v(" "),i("th",{staticStyle:{width:"5%","vertical-align":"middle"},attrs:{rowspan:"2"}},[t._v("Tọa độ")]),t._v(" "),i("th",{attrs:{colspan:"4"}},[t._v("Log lên xuống tải")]),t._v(" "),i("th",{staticStyle:{width:"5%","vertical-align":"middle"},attrs:{rowspan:"2"}},[t._v("Actions")])]),t._v(" "),i("tr",[i("th",[t._v("Loại")]),t._v(" "),i("th",[t._v("Số bao")]),t._v(" "),i("th",[t._v("Điều phối thao tác")]),t._v(" "),i("th",[t._v("Thời gian")])])]),t._v(" "),i("tbody",t._l(e.data,function(e,a){return i("tr",[i("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(a+1))]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.point_id))]),t._v(" "),i("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.point_name))]),t._v(" "),e.lat_lng?i("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(e.lat_lng))]):i("td",{staticStyle:{"vertical-align":"middle"}},[t._v("Không tìm thấy, vui lòng cập nhật")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},t._l(e.list_his_truck,function(e,a){return i("div",{class:a%2==0?"p-1 bg-light text-dark mb-0":"p-1 bg-white text-dark mb-0"},["down"===e.type?i("i",{staticClass:"ion ion-md-arrow-down",staticStyle:{color:"red",display:"inline-block"}},[i("b",[t._v(" Xuống tải")])]):t._e(),t._v(" "),"up"===e.type?i("i",{staticClass:"ion ion-md-arrow-up",staticStyle:{color:"green",display:"inline-block"}},[i("b",[t._v(" Lên tải")])]):t._e()])}),0),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},t._l(e.list_his_truck,function(e,a){return i("div",{class:a%2==0?"bg-light text-dark mb-0":"bg-white text-dark mb-0"},[i("b-button",{staticStyle:{padding:"2px 10px 3px"},attrs:{variant:"link"},on:{click:function(i){return t.showBags(e)}}},[t._v("\n                              "+t._s(e.bags.length)+" bao\n                            ")])],1)}),0),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},t._l(e.list_his_truck,function(e,a){return i("div",{class:a%2==0?"p-1 bg-light text-dark mb-0":"p-1 bg-white text-dark mb-0"},[t._v("\n                            "+t._s(e.operator)+"\n                          ")])}),0),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},t._l(e.list_his_truck,function(e,a){return i("div",{class:a%2==0?"p-1 bg-light text-dark mb-0":"p-1 bg-white text-dark mb-0"},[t._v("\n                            "+t._s(e.created)+"\n                          ")])}),0)])}),0)])]):t._e()])])])}),1)],1)]),t._v(" "),i("hr",{staticClass:"border-light m-0"}),t._v(" "),i("div",{staticClass:"table-responsive"}),t._v(" "),i("b-card-body",{staticClass:"pt-0 pb-3"})],1),t._v(" "),i("notifications",{attrs:{group:"notifications-default"}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{staticClass:"d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4"},[e("div",[this._v("Quản lý dữ liệu công việc tài xế")])])}],!1,b,"data-v-6a6fca50",null);e.default=m.exports}});