webpackJsonp([14],{"1alW":function(t,e,a){var n=a("kM2E");n(n.S,"Number",{isInteger:a("AKgy")})},"7etK":function(t,e,a){var n;n=function(){return function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(1);Object.defineProperty(e,"createAutoCorrectedDatePipe",{enumerable:!0,get:function(){return n(s).default}});var r=a(2);Object.defineProperty(e,"createNumberMask",{enumerable:!0,get:function(){return n(r).default}});var i=a(3);Object.defineProperty(e,"emailMask",{enumerable:!0,get:function(){return n(i).default}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm dd yyyy";return function(e){var a=[],n=t.split(/[^dmyHMS]+/),s={dd:31,mm:12,yy:99,yyyy:9999,HH:23,MM:59,SS:59},r={dd:1,mm:1,yy:0,yyyy:1,HH:0,MM:0,SS:0},i=e.split("");return n.forEach(function(e){var n=t.indexOf(e),r=parseInt(s[e].toString().substr(0,1),10);parseInt(i[n],10)>r&&(i[n+1]=i[n],i[n]=0,a.push(n))}),!n.some(function(a){var n=t.indexOf(a),i=a.length,o=e.substr(n,i).replace(/\D/g,""),l=parseInt(o,10);return l>s[a]||o.length===i&&l<r[a]})&&{value:i.join(""),indexesOfPipedChars:a}}}},function(t,e){"use strict";function a(t){return t.split(r).map(function(t){return p.test(t)?p:t})}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(){function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=t.length;if(t===r||t[0]===h[0]&&1===e)return h.split(r).concat([p]).concat(y.split(r));if(t===k&&w)return h.split(r).concat(["0",k,p]).concat(y.split(r));var s=t[0]===l&&E;s&&(t=t.toString().substr(1));var i=t.lastIndexOf(k),o=-1!==i,m=void 0,f=void 0,_=void 0;if(t.slice(-1*B)===y&&(t=t.slice(0,-1*B)),o&&(w||D)?(m=t.slice(t.slice(0,q)===h?q:0,i),f=a((f=t.slice(i+1,e)).replace(u,r))):m=t.slice(0,q)===h?t.slice(q):t,A&&(void 0===A?"undefined":n(A))===d){var C="."===g?"[.]":""+g,x=(m.match(new RegExp(C,"g"))||[]).length;m=m.slice(0,A+x*$)}return m=m.replace(u,r),j||(m=m.replace(/^0+(0$|[^0])/,"$1")),_=a(m=b?function(t,e){return t.replace(/\B(?=(\d{3})+(?!\d))/g,e)}(m,g):m),(o&&w||!0===D)&&(t[i-1]!==k&&_.push(v),_.push(k,v),f&&((void 0===T?"undefined":n(T))===d&&(f=f.slice(0,T)),_=_.concat(f)),!0===D&&t[i-1]===k&&_.push(p)),q>0&&(_=h.split(r).concat(_)),s&&(_.length===q&&_.push(p),_=[c].concat(_)),y.length>0&&(_=_.concat(y.split(r))),_}var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},m=e.prefix,h=void 0===m?s:m,f=e.suffix,y=void 0===f?r:f,_=e.includeThousandsSeparator,b=void 0===_||_,C=e.thousandsSeparatorSymbol,g=void 0===C?i:C,x=e.allowDecimal,w=void 0!==x&&x,P=e.decimalSymbol,k=void 0===P?o:P,S=e.decimalLimit,T=void 0===S?2:S,O=e.requireDecimal,D=void 0!==O&&O,M=e.allowNegative,E=void 0!==M&&M,N=e.allowLeadingZeroes,j=void 0!==N&&N,I=e.integerLimit,A=void 0===I?null:I,q=h&&h.length||0,B=y&&y.length||0,$=g&&g.length||0;return t.instanceOf="createNumberMask",t};var s="$",r="",i=",",o=".",l="-",c=/-/,u=/\D+/g,d="number",p=/\d/,v="[]"},function(t,e,a){"use strict";function n(t,e,a){var n=[];return t[e]===a?n.push(a):n.push(p,a),n.push(p),n}function s(t,e,a,n){var s=u;return-1!==e&&(s=-1===a?t.slice(e+1,t.length):t.slice(e+1,a)),(s=s.replace(new RegExp("[\\s"+n+"]",m),u))===d?l:s.length<1?v:s[s.length-1]===c?s.slice(0,s.length-1):s}function r(t,e,a,n){var s=u;return-1!==e&&(s=t.slice(e+1,t.length)),0===(s=s.replace(new RegExp("[\\s"+a+".]",m),u)).length?t[e-1]===c&&n!==t.length?l:u:s}function i(t,e){return t.split(u).map(function(t){return t===v?t:e?f:h})}Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(a(4)),l="*",c=".",u="",d="@",p="[]",v=" ",m="g",h=/[^\s]/,f=/[^.\s]/,y=/\s/g;e.default={mask:function(t,e){t=t.replace(y,u);var a=e.placeholderChar,o=e.currentCaretPosition,l=t.indexOf(d),p=t.lastIndexOf(c),v=p<l?-1:p,m=n(t,l+1,d),h=n(t,v-1,c),f=function(t,e){return-1===e?t:t.slice(0,e)}(t,l),_=s(t,l,v,a),b=r(t,v,a,o);return f=i(f),_=i(_),b=i(b,!0),f.concat(m).concat(_).concat(h).concat(b)},pipe:o.default}},function(t,e){"use strict";function a(t){var e=0;return t.replace(s,function(){return 1===++e?n:r})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var s=e.currentCaretPosition,d=e.rawValue,p=e.previousConformedValue,v=e.placeholderChar,m=t,h=(m=a(m)).indexOf(i);if(null===d.match(new RegExp("[^@\\s."+v+"]")))return r;if(-1!==m.indexOf(l)||-1!==h&&s!==h+1||-1===d.indexOf(n)&&p!==r&&-1!==d.indexOf(o))return!1;var f=m.indexOf(n);return(m.slice(f+1,m.length).match(u)||c).length>1&&m.substr(-1)===o&&s!==d.length&&(m=m.slice(0,m.length-1)),m};var n="@",s=/@/g,r="",i="@.",o=".",l="..",c=[],u=/\./g}])},t.exports=n()},"8flC":function(t,e,a){"use strict";var n=a("woOf"),s=a.n(n),r=a("Zx67"),i=a.n(r),o=a("Zrlr"),l=a.n(o),c=a("zwoO"),u=a.n(c),d=a("Pf15"),p=a.n(d),v=function(t){function e(){return l()(this,e),u()(this,(e.__proto__||i()(e)).apply(this,arguments))}return p()(e,t),e}(a("MUME").a),m=a("hC/b");e.a=function(t){var e=t;e.other_allowances&&m.a.isJsonString(e.other_allowances)?e.other_allowances=JSON.parse(e.other_allowances):e.other_allowances=[{amount:"",description:""}],e.deductions&&m.a.isJsonString(e.deductions)?e.deductions=JSON.parse(e.deductions):e.deductions=[{type:"",amount:"",description:""}],e.adjustments&&m.a.isJsonString(e.adjustments)?e.adjustments=JSON.parse(e.adjustments):e.adjustments=[{type:"",amount:"",description:""}];var a=s()({},e);return new v(a)}},AKgy:function(t,e,a){var n=a("EqjI"),s=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&s(t)===t}},DTZR:function(t,e){},"RRo+":function(t,e,a){t.exports={default:a("c45H"),__esModule:!0}},UXUL:function(t,e,a){"use strict";var n=a("PikB"),s=a("4WGu");e.a={getList:function(t){return n.a.get("/AdPartnershipPayslip/getList",{params:t})},getDetail:function(t){return n.a.get("/AdPartnershipPayslip/getDetail",{params:t})},update:function(t){return n.a.post("/AdPartnershipPayslip/update",t)},delete:function(t){var e={id:t};return n.a.post("/AdPartnershipPayslip/delete",e)},deleteByConditions:function(t){return n.a.post("/AdPartnershipPayslip/deleteByConditions",t)},requestExportFile:function(t){return n.a.get("/AdPartnershipPayslip/exportExcel",{params:t})},checkExportFileComplete:function(t){return n.a.get("/AdPartnershipPayslip/checkExportFileComplete",{params:t})},getDownloadExcelLink:function(t){return s.a.baseApiUrl+"AdPartnershipPayslip/downloadExportFile?file="+t},checkBeforeCreatePayslip:function(t){return n.a.get("/AdPartnershipPayslip/countUserByFilter",{params:t})},createPayslipByFilter:function(t){return n.a.get("/AdPartnershipPayslip/createPayslipByFilter",{params:t})},uploadExcelPayslip:function(){return n.a.get("/AdPartnershipPayslip/uploadExcelPayslip")}}},c45H:function(t,e,a){a("1alW"),t.exports=a("FeBl").Number.isInteger},hYLc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),s=a.n(n),r=a("RRo+"),i=a.n(r),o=a("hC/b"),l=a("UXUL"),c=a("8flC"),u=a("yekR"),d=a.n(u),p=a("7etK"),v=a("oVsO"),m={name:"ecom-payslip-detail",components:{MaskedInput:d.a,EcomPayslipDetailInfo:v.a},data:function(){return{numberMask:p.createNumberMask({prefix:""}),statusOptions:[{text:"Đã duyệt",value:"approved"},{text:"Đang chờ duyệt",value:"pending"}],listDeductions:[{value:"",text:"Chọn loại"},{value:"vi_pham",text:"Vi phạm"},{value:"boi_hoan",text:"Bồi hoàn"},{value:"ky_quy",text:"Ký quỹ"},{value:"tam_ung",text:"Tạm ứng"},{value:"khac",text:"Khác"}],listAdjustments:[{value:"",text:"Chọn loại"},{value:"luong",text:"Lương"},{value:"thue",text:"Thuế"},{value:"bao_hiem",text:"Bảo hiểm"},{value:"doan_phi",text:"Đoàn phí"},{value:"khac",text:"Khác"}],payslipData:{deductions:[],adjustments:[]},profile:{},workType:{},contract:{},hasDataLoaded:!1}},computed:{kpiSalary:function(){return parseInt(this.payslipData.kpi_salary)},proRewardSalary:function(){return parseInt(this.payslipData.pro_reward_salary)},qualitySalary:function(){return parseInt(this.payslipData.quality_salary)},minSalary:function(){return parseInt(this.payslipData.min_salary)},vat:function(){return.03*this.payslipData.kpi_salary},personalIncomeTax:function(){var t=this.qualitySalary>=2e6?.1*this.qualitySalary:0;return.015*this.proRewardSalary+.015*this.minSalary+.01*this.qualitySalary+t},netSalary:function(){var t=this.payslipData.deductions.reduce(function(t,e){return t+(i()(parseFloat(e.amount))?parseFloat(e.amount):0)},0);return this.kpiSalary+this.proRewardSalary+this.qualitySalary+this.minSalary-this.vat-this.personalIncomeTax+t}},beforeCreate:function(){var t=this;this.$startLoading();var e={id:this.$route.params.id};l.a.getDetail(e).then(function(e){e.data.success&&(t.payslipData=Object(c.a)(e.data.payslip),t.profile=e.data.profile,t.workType=e.data.work_type,t.contract=e.data.contract),o.a.isEmpty(t.profile)?t.$router.push({name:"error-404"}):t.hasDataLoaded=!0}).catch(function(t){console.log(t)}).then(function(){t.$stopLoading()})},methods:{addDeduction:function(){o.a.isEmpty(this.payslipData.deductions)&&(this.payslipData.deductions=[]),this.payslipData.deductions.push({type:"",amount:"",description:""})},removeDeduction:function(t){this.payslipData.deductions.splice(t,1)},saveData:function(){var t=this;this.$startLoading();var e={id:this.$route.params.id,status:this.payslipData.status,quality_salary:this.payslipData.quality_salary,deductions:s()(this.payslipData.deductions)};l.a.update(e).then(function(e){e.data.success?t.$notify({group:"default",type:"bg-success text-white",title:"Thông báo",text:"Update thành công!"}):t.$notify({group:"default",type:"bg-warning text-dark",title:"Thông báo",text:"Có lỗi xảy ra trong quá trình update"})}).catch(function(e){console.log(e),t.$notify({group:"default",type:"bg-warning text-dark",title:"Thông báo",text:"Có lỗi xảy ra trong quá trình update"})}).then(function(){t.$stopLoading()})},clickCancel:function(){this.$router.push({name:"partnership-payslip-manager"})}}},h=a("XyMi");var f=function(t){a("DTZR")},y=Object(h.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.hasDataLoaded?a("div",{staticClass:"payslip-page"},[a("h4",{staticClass:"d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4"},[a("div",[t._v("Chi tiết bảng lương: "+t._s(t.profile.fullname)+" - Tháng "+t._s(t.payslipData.month)+"/"+t._s(t.payslipData.year))]),t._v(" "),a("b-btn",{staticClass:"d-block",attrs:{variant:"primary btn-round"},on:{click:function(e){return t.saveData()}}},[a("span",{staticClass:"ion ion-md-save"}),t._v(" Save changes")])],1),t._v(" "),a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-11"},[a("b-radio-group",{attrs:{options:t.statusOptions},model:{value:t.payslipData.status,callback:function(e){t.$set(t.payslipData,"status",e)},expression:"payslipData.status"}})],1)]),t._v(" "),a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h5"}},[t._v("Thông tin cá nhân")]),t._v(" "),a("b-card-body",[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Họ và tên:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.fullname)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("username:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.username)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Bộ phân:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.department)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Vị trí:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.position_name)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Kiểu nhân viên:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.workType.work_type_description)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Kho:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.station_name)}})])])],1),t._v(" "),a("b-card",{staticClass:"mb-4",attrs:{header:"Dữ liệu lương","header-tag":"h5"}},[a("b-form-row",[a("b-form-group",{staticClass:"col-md-3",attrs:{label:"Doanh thu phân chia"}},[a("b-input",{attrs:{type:"number",readonly:""},model:{value:t.payslipData.kpi_salary,callback:function(e){t.$set(t.payslipData,"kpi_salary",e)},expression:"payslipData.kpi_salary"}})],1),t._v(" "),a("b-form-group",{staticClass:"col-md-3",attrs:{label:"Thưởng doanh thu"}},[a("b-input",{attrs:{type:"number",readonly:""},model:{value:t.payslipData.pro_reward_salary,callback:function(e){t.$set(t.payslipData,"pro_reward_salary",e)},expression:"payslipData.pro_reward_salary"}})],1),t._v(" "),a("b-form-group",{staticClass:"col-md-3",attrs:{label:"Thưởng chất lượng"}},[a("b-input",{attrs:{type:"number"},model:{value:t.payslipData.quality_salary,callback:function(e){t.$set(t.payslipData,"quality_salary",e)},expression:"payslipData.quality_salary"}})],1),t._v(" "),a("b-form-group",{staticClass:"col-md-3",attrs:{label:"Thưởng đảm bảo"}},[a("b-input",{attrs:{type:"number",readonly:""},model:{value:t.payslipData.min_salary,callback:function(e){t.$set(t.payslipData,"min_salary",e)},expression:"payslipData.min_salary"}})],1)],1)],1),t._v(" "),a("b-card",{staticClass:"mb-4",attrs:{header:"Các khoản trừ","header-tag":"h5"}},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table is_align_middle"},[a("tbody",t._l(t.payslipData.deductions,function(e,n){return a("tr",[a("td",[a("b-select",{attrs:{options:t.listDeductions},model:{value:e.type,callback:function(a){t.$set(e,"type",a)},expression:"deduction.type"}})],1),t._v(" "),a("td",[a("b-input",{attrs:{type:"number",placeholder:"Số tiền"},model:{value:e.amount,callback:function(a){t.$set(e,"amount",a)},expression:"deduction.amount"}})],1),t._v(" "),a("td",[a("b-input",{attrs:{type:"text",placeholder:"Diễn giải"},model:{value:e.description,callback:function(a){t.$set(e,"description",a)},expression:"deduction.description"}})],1),t._v(" "),a("td",[a("b-btn",{attrs:{variant:"default md-btn-flat icon-btn",size:"sm"},on:{click:function(e){return t.removeDeduction(n)}}},[a("i",{staticClass:"ion ion-md-close"})])],1)])}),0)])]),t._v(" "),a("b-btn",{staticClass:"btn-sm",attrs:{variant:"outline-primary"},on:{click:function(e){return t.addDeduction()}}},[a("i",{staticClass:"ion ion-md-add"}),t._v("  Thêm khoản trừ\n    ")]),t._v(" "),a("div",{staticClass:"total-net-salary"},[t._v("Tổng thu nhập NET: "),a("b",[a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(t.netSalary)}})])])],1),t._v(" "),a("div",{staticClass:"text-right mt-3"},[a("b-btn",{attrs:{variant:"primary"},on:{click:function(e){return t.saveData()}}},[t._v("Save changes")]),t._v(" \n    "),a("b-btn",{attrs:{variant:"default"},on:{click:function(e){return t.clickCancel()}}},[t._v("Cancel")])],1)],1):t._e()},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-1"},[e("h5",[this._v("Trạng thái")])])}],!1,f,"data-v-6a211aa8",null);e.default=y.exports},oVsO:function(t,e,a){"use strict";var n=a("fZjL"),s=a.n(n),r={name:"ecom-payslip-detail-info",props:{profile:{type:Object,required:!0},workType:{type:Object,required:!0},contract:{type:Object,required:!0},contractSalary:{type:Object,required:!0},payslip:{type:Object,required:!0}},data:function(){return{taxAllowances:[],noTaxAllowances:[]}},computed:{totalInsuranceByEmployee:function(){return parseInt(this.payslip.bhxh_employee)+parseInt(this.payslip.bhyt_employee)+parseInt(this.payslip.bhtn_employee)},totalInsuranceByCompany:function(){return parseInt(this.payslip.bhxh_company)+parseInt(this.payslip.bhyt_company)+parseInt(this.payslip.bhtn_company)}},created:function(){var t=this,e={resp_allowance:"Phụ cấp trách nhiệm",trans_allowance:"Xăng xe, ăn đêm",meal_allowance:"Cơm trưa",mobile_allowance:"Điện thoại",biztrip_allowance:"Khoản công tác"};s()(e).forEach(function(a){if(t.contractSalary[a]){var n=t.contractSalary[a];n.name=e[a],"1"===n.has_tax?t.taxAllowances.push(n):t.noTaxAllowances.push(n)}})}},i=a("XyMi"),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui-block"},[a("div",{staticClass:"row d-flex top-detail"},[a("div",{staticClass:"col-sm-6 col-xl-3"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h5"}},[t._v("Thông tin cá nhân")]),t._v(" "),a("b-card-body",[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Họ và tên:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.fullname)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("username:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.username)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Bộ phân:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.department)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Vị trí:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.position_name)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Kiểu nhân viên:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.workType.work_type_description)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Kho:")]),t._v(" "),a("div",{staticClass:"col-md-8",domProps:{textContent:t._s(t.profile.station_name)}})])])],1)],1),t._v(" "),a("div",{staticClass:"col-sm-6 col-xl-3"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h5"}},[t._v("Lương hợp đồng")]),t._v(" "),a("b-card-body",[a("h6",[t._v("Lương cơ bản")]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Thử việc:")]),t._v(" "),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.contractSalary.trial_salary)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Chính thức:")]),t._v(" "),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.contractSalary.salary)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Mức lương tính ngoài giờ thử việc: ")]),a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(t.contractSalary.trial_ot_salary)}})])]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Mức lương tính ngoài giờ chính thức: ")]),a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(t.contractSalary.ot_salary)}})])]),t._v(" "),a("h6",[t._v("Phụ cấp chịu thuế TNCN")]),t._v(" "),t._l(t.taxAllowances,function(e){return a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v(t._s(e.name)+": ")]),a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(e.value)}},[t._v("0")])])])}),t._v(" "),a("h6",[t._v("Phụ cấp không chịu thuế TNCN")]),t._v(" "),t._l(t.noTaxAllowances,function(e){return a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v(t._s(e.name)+": ")]),a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(e.value)}},[t._v("0")])])])})],2)],1)],1),t._v(" "),a("div",{staticClass:"col-sm-6 col-xl-3"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h5"}},[t._v("Thông tin BHXH")]),t._v(" "),a("b-card-body",[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Lương tính BHXH: ")]),a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(t.payslip.bhxh_salary)}})])]),t._v(" "),a("h6",[t._v("Các khoản người lao động đóng")]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("BHXH:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.payslip.bhxh_employee)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("BHYT:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.payslip.bhyt_employee)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("BHTN:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.payslip.bhtn_employee)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Cộng:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.totalInsuranceByEmployee)}})]),t._v(" "),a("h6",[t._v("Các khoản công ty phải trả")]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("BHXH:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.payslip.bhxh_company)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("BHYT:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.payslip.bhyt_company)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("BHTN:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.payslip.bhtn_company)}})]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-4 text-muted"},[t._v("Cộng:")]),a("div",{directives:[{name:"numeral",rawName:"v-numeral"}],staticClass:"col-md-8",domProps:{textContent:t._s(t.totalInsuranceByCompany)}})])])],1)],1),t._v(" "),a("div",{staticClass:"col-sm-6 col-xl-3"},[a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h5"}},[t._v("Công đoàn phí")]),t._v(" "),a("b-card-body",[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Đoàn phí người lao động đóng: ")]),a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(t.payslip.union_dues_employee)}})])]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Đoàn phí công ty đóng: ")]),a("span",{directives:[{name:"numeral",rawName:"v-numeral"}],domProps:{textContent:t._s(t.payslip.union_dues_company)}})])])])],1),t._v(" "),a("b-card",{staticClass:"mb-4",attrs:{"no-body":""}},[a("b-card-header",{attrs:{"header-tag":"h5"}},[t._v("Thông tin thuế TNCN")]),t._v(" "),a("b-card-body",[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Mã số thuế: ")]),a("span",{domProps:{textContent:t._s(t.profile.tax_iden_number)}})])]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Bản thân: ")]),a("span",[t._v("9,000,000")])])]),t._v(" "),a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-md-12"},[a("span",{staticClass:"text-muted"},[t._v("Phụ thuộc: ")]),a("span",[t._v("3,600,000 x "+t._s(t.profile.no_of_dependants?t.profile.no_of_dependants:0)+" người")])])])])],1)],1)])])},[],!1,null,null,null);e.a=o.exports},yekR:function(t,e,a){var n;n=function(){return function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.conformToMask=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=a(2);Object.defineProperty(e,"conformToMask",{enumerable:!0,get:function(){return n(r).default}});var i=n(a(5));e.default={render:function(t){var e=this;return t("input",{ref:"input",domProps:{value:this.value},on:{input:function(t){return e.updateValue(t.target.value)},focus:function(t){return e.emitEvent(t)},blur:function(t){return e.emitEvent(t)},keypress:function(t){return e.emitEvent(t)},click:function(t){return e.emitEvent(t)}}})},name:"masked-input",props:{value:{type:String,required:!1,default:""},mask:{type:[Array,Function,Boolean,Object],required:!0},guide:{type:Boolean,required:!1},placeholderChar:{type:String,required:!1},keepCharPositions:{type:Boolean,required:!1},pipe:{type:Function,required:!1},showMask:{type:Boolean,required:!1}},mounted:function(){this.initMask()},methods:{createTextMaskInputElement:i.default,setTextMaskInputElement:function(){this.textMaskInputElement=this.createTextMaskInputElement(s({inputElement:this.$refs.input},this.$options.propsData))},initMask:function(){this.setTextMaskInputElement(),this.textMaskInputElement.update(this.value)},bind:function(){this.setTextMaskInputElement(),this.updateValue(this.value)},updateValue:function(t){this.textMaskInputElement.update(t),this.$emit("input",this.$refs.input.value)},emitEvent:function(t){this.$emit(t.type,t)}},watch:{mask:function(t,e){this.mask!==e&&this.bind()},guide:function(){this.bind()},placeholderChar:function(){this.bind()},keepCharPositions:function(){this.bind()},pipe:function(){this.bind()},showMask:function(){this.bind()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.placeholderChar="_",e.strFunction="function"},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,s.isArray)(e)){if((void 0===e?"undefined":n(e))!==r.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");e=e(t,a),e=(0,s.processCaretTraps)(e).maskWithoutCaretTraps}var l=a.guide,c=void 0===l||l,u=a.previousConformedValue,d=void 0===u?o:u,p=a.placeholderChar,v=void 0===p?r.placeholderChar:p,m=a.placeholder,h=void 0===m?(0,s.convertMaskToPlaceholder)(e,v):m,f=a.currentCaretPosition,y=a.keepCharPositions,_=!1===c&&void 0!==d,b=t.length,C=d.length,g=h.length,x=e.length,w=b-C,P=w>0,k=f+(P?-w:0),S=k+Math.abs(w);if(!0===y&&!P){for(var T=o,O=k;O<S;O++)h[O]===v&&(T+=v);t=t.slice(0,k)+T+t.slice(k,b)}for(var D=t.split(o).map(function(t,e){return{char:t,isNew:e>=k&&e<S}}),M=b-1;M>=0;M--){var E=D[M].char;E!==v&&E===h[M>=k&&C===x?M-w:M]&&D.splice(M,1)}var N=o,j=!1;t:for(var I=0;I<g;I++){var A=h[I];if(A===v){if(D.length>0)for(;D.length>0;){var q=D.shift(),B=q.char,$=q.isNew;if(B===v&&!0!==_){N+=v;continue t}if(e[I].test(B)){if(!0===y&&!1!==$&&d!==o&&!1!==c&&P){for(var V=D.length,L=null,H=0;H<V;H++){var F=D[H];if(F.char!==v&&!1===F.isNew)break;if(F.char===v){L=H;break}}null!==L?(N+=B,D.splice(L,1)):I--}else N+=B;continue t}j=!0}!1===_&&(N+=h.substr(I,g));break}N+=A}if(_&&!1===P){for(var R=null,K=0;K<N.length;K++)h[K]===v&&(R=K);N=null!==R?N.substr(0,R+1):o}return{conformedValue:N,meta:{someCharsRejected:j}}};var s=a(3),r=a(1),i=[],o=""},function(t,e,a){"use strict";function n(t){return Array.isArray&&Array.isArray(t)||t instanceof Array}Object.defineProperty(e,"__esModule",{value:!0}),e.convertMaskToPlaceholder=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!n(t))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==t.indexOf(e))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(e)+"\n\nThe mask that was received is: "+JSON.stringify(t));return t.map(function(t){return t instanceof RegExp?e:t}).join("")},e.isArray=n,e.isString=function(t){return"string"==typeof t||t instanceof String},e.isNumber=function(t){return"number"==typeof t&&void 0===t.length&&!isNaN(t)},e.processCaretTraps=function(t){for(var e=[],a=void 0;-1!==(a=t.indexOf(i));)e.push(a),t.splice(a,1);return{maskWithoutCaretTraps:t,indexes:e}};var s=a(1),r=[],i="[]"},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.previousConformedValue,s=void 0===e?n:e,r=t.previousPlaceholder,i=void 0===r?n:r,o=t.currentCaretPosition,l=void 0===o?0:o,c=t.conformedValue,u=t.rawValue,d=t.placeholderChar,p=t.placeholder,v=t.indexesOfPipedChars,m=void 0===v?a:v,h=t.caretTrapIndexes,f=void 0===h?a:h;if(0===l||!u.length)return 0;var y=u.length,_=s.length,b=p.length,C=c.length,g=y-_,x=g>0;if(g>1&&!x&&0!==_)return l;var w=0,P=void 0,k=void 0;if(!x||s!==c&&c!==p){var S=c.toLowerCase(),T=u.toLowerCase().substr(0,l).split(n).filter(function(t){return-1!==S.indexOf(t)});k=T[T.length-1];var O=i.substr(0,T.length).split(n).filter(function(t){return t!==d}).length,D=p.substr(0,T.length).split(n).filter(function(t){return t!==d}).length!==O,M=void 0!==i[T.length-1]&&void 0!==p[T.length-2]&&i[T.length-1]!==d&&i[T.length-1]!==p[T.length-1]&&i[T.length-1]===p[T.length-2];!x&&(D||M)&&O>0&&p.indexOf(k)>-1&&void 0!==u[l]&&(P=!0,k=u[l]);for(var E=m.map(function(t){return S[t]}).filter(function(t){return t===k}).length,N=T.filter(function(t){return t===k}).length,j=p.substr(0,p.indexOf(d)).split(n).filter(function(t,e){return t===k&&u[e]!==t}).length+N+E+(P?1:0),I=0,A=0;A<C&&(w=A+1,S[A]===k&&I++,!(I>=j));A++);}else w=l-g;if(x){for(var q=w,B=w;B<=b;B++)if(p[B]===d&&(q=B),p[B]===d||-1!==f.indexOf(B)||B===b)return q}else if(P){for(var $=w-1;$>=0;$--)if(c[$]===k||-1!==f.indexOf($)||0===$)return $}else for(var V=w;V>=0;V--)if(p[V-1]===d||-1!==f.indexOf(V)||0===V)return V};var a=[],n=""},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){document.activeElement===t&&(m?h(function(){return t.setSelectionRange(e,e,p)},0):t.setSelectionRange(e,e,p))}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=function(t){var e={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:e,update:function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,p=n.inputElement,m=n.mask,h=n.guide,f=n.pipe,y=n.placeholderChar,_=void 0===y?u.placeholderChar:y,b=n.keepCharPositions,C=void 0!==b&&b,g=n.showMask,x=void 0!==g&&g;if(void 0===a&&(a=p.value),a!==e.previousConformedValue){(void 0===m?"undefined":i(m))===v&&void 0!==m.pipe&&void 0!==m.mask&&(f=m.pipe,m=m.mask);var w=void 0,P=void 0;if(m instanceof Array&&(w=(0,c.convertMaskToPlaceholder)(m,_)),!1!==m){var k=function(t){if((0,c.isString)(t))return t;if((0,c.isNumber)(t))return String(t);if(void 0===t||null===t)return d;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(t))}(a),S=p.selectionEnd,T=e.previousConformedValue,O=e.previousPlaceholder,D=void 0;if((void 0===m?"undefined":i(m))===u.strFunction){if(!1===(P=m(k,{currentCaretPosition:S,previousConformedValue:T,placeholderChar:_})))return;var M=(0,c.processCaretTraps)(P);P=M.maskWithoutCaretTraps,D=M.indexes,w=(0,c.convertMaskToPlaceholder)(P,_)}else P=m;var E={previousConformedValue:T,guide:h,placeholderChar:_,pipe:f,placeholder:w,currentCaretPosition:S,keepCharPositions:C},N=(0,l.default)(k,P,E).conformedValue,j=(void 0===f?"undefined":i(f))===u.strFunction,I={};j&&(!1===(I=f(N,r({rawValue:k},E)))?I={value:T,rejected:!0}:(0,c.isString)(I)&&(I={value:I}));var A=j?I.value:N,q=(0,o.default)({previousConformedValue:T,previousPlaceholder:O,conformedValue:A,placeholder:w,rawValue:k,currentCaretPosition:S,placeholderChar:_,indexesOfPipedChars:I.indexesOfPipedChars,caretTrapIndexes:D}),B=A===w&&0===q?x?w:d:A;e.previousConformedValue=B,e.previousPlaceholder=w,p.value!==B&&(p.value=B,s(p,q))}}}}};var o=n(a(4)),l=n(a(2)),c=a(3),u=a(1),d="",p="none",v="object",m="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),h="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])},t.exports=n()}});