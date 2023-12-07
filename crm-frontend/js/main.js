!function(){const t=300,e="visible",a="http://localhost:3000/api/clients",n={columnOfSort:"id",stateOfSort:{id:!0,fullname:!1,createdAt:!1,updatedAt:!1},clients:[]},c=["Телефон","Facebook","VK","Email","Другое"],s={type:"new",headTitle:function(){let t=null;switch(this.type){case"delete":t="Удалить клиента";break;case"new":t="Новый клиент";break;case"change":t="Изменить данные"}return t},buttonSubmit:function(){return"delete"===this.type?"Удалить":"Сохранить"},button:function(){return"change"===this.type?"Удалить клиента":"Отмена"}};function d({columnOfSort:t,stateOfSort:e,clients:a}){const n=document.querySelector("tbody"),{id:c,fullname:d,createdAt:u,updatedAt:m}=e;let p=[];switch(t){case"fullname":p=function(t,e){if(e)return t.sort((function(t,e){return t.surname.trim().toLowerCase()+t.name.trim().toLowerCase()+t.lastName.trim().toLowerCase()<e.surname.trim().toLowerCase()+e.name.trim().toLowerCase()+e.lastName.trim().toLowerCase()?1:-1}));return t.sort((function(t,e){return t.surname.trim().toLowerCase()+t.name.trim().toLowerCase()+t.lastName.trim().toLowerCase()>e.surname.trim().toLowerCase()+e.name.trim().toLowerCase()+e.lastName.trim().toLowerCase()?1:-1}))}(a,d);break;case"createdAt":p=i(a,t,u);break;case"updatedAt":p=i(a,t,m);break;default:p=function(t,e){if(e)return t.sort((function(t,e){return t.id>e.id?1:-1}));return t.sort((function(t,e){return t.id<e.id?1:-1}))}(a,c)}n.innerHTML="",function(t,e){document.querySelectorAll(".table__column_sort").forEach((function(a){a.id===t?a.childNodes[0].classList.add("color_light-slate-blue"):a.childNodes[0].classList.remove("color_light-slate-blue"),e[a.id]?(a.childNodes[1].classList.remove("rotate_180"),"fullname"===a.id&&(a.childNodes[2].innerText="Я-А")):(a.childNodes[1].classList.add("rotate_180"),"fullname"===a.id&&(a.childNodes[2].innerText="А-Я"))}))}(t,e),p.forEach((function(t){n.append(function(t){const e=document.createElement("tr"),a=document.createElement("td"),n=document.createElement("td"),c=document.createElement("td"),s=document.createElement("div"),d=document.createElement("span"),i=document.createElement("span"),r=document.createElement("td"),u=document.createElement("div"),m=document.createElement("span"),p=document.createElement("span"),_=document.createElement("td"),b=function(t){const e=document.createElement("ul");e.classList.add("contacts__list");const a=t.length;let n=!0;return t.forEach((function(t,c){if(4===c&&a>5){const t=document.createElement("li"),s=document.createElement("span");t.classList.add("contacts__item"),s.classList.add("contacts__icon_ring"),t.setAttribute("id","comb"),s.setAttribute("data-value","Развернуть"),s.innerText="+"+(a-1-c),t.append(s),e.append(t),n=!1}e.append(function(t,e){const a=document.createElement("li"),n=document.createElement("img");a.classList.add("contacts__item"),e||a.classList.add("blocked");n.classList.add("contacts__icon"),"Другое"===t.type?n.setAttribute("data-type",""):n.setAttribute("data-type",t.type+":");switch(n.setAttribute("data-value",t.value),t.type){case"Телефон":n.setAttribute("src","./img/phone.svg"),n.setAttribute("alt","Телефон");break;case"Facebook":n.setAttribute("src","./img/fb.svg"),n.setAttribute("alt","Фэйсбук");break;case"VK":n.setAttribute("src","./img/vk.svg"),n.setAttribute("alt","В контактах");break;case"Email":n.setAttribute("src","./img/mail.svg"),n.setAttribute("alt","Имэйл");break;default:n.setAttribute("src","./img/other.svg"),n.setAttribute("alt","Другое")}return a.append(n),a}(t,n))})),e}(t.contacts),f=document.createElement("td"),L=document.createElement("div"),E=document.createElement("button"),h=document.createElement("span"),y=document.createElement("span"),v=document.createElement("button"),w=document.createElement("span"),A=document.createElement("span");return e.classList.add("table__row"),a.classList.add("row__cells","body-cells_id"),n.classList.add("row__cells","body-cells_fullname"),c.classList.add("row__cells"),s.classList.add("cell-create__wrapper"),d.classList.add("cell-create__date"),i.classList.add("cell-create__time"),r.classList.add("row__cells"),u.classList.add("cell-update__wrapper"),m.classList.add("cell-update__date"),p.classList.add("cell-update__time"),_.classList.add("row__cells"),f.classList.add("row__cells"),L.classList.add("actions__wrapper"),E.classList.add("edit-btn","btn"),h.classList.add("actions-btn__icon","edit-btn__icon"),y.classList.add("edit-btn__text"),v.classList.add("delete-btn","btn"),w.classList.add("actions-btn__icon","delete-btn__icon"),A.classList.add("delete-btn__text"),e.setAttribute("id",t.id),E.setAttribute("data-id",t.id),v.setAttribute("data-id",t.id),a.innerText=t.id.slice(-6),n.innerText=`${t.surname.trim()} ${t.name.trim()} ${t.lastName.trim()}`,d.innerText=o(t.createdAt),i.innerText=l(t.createdAt),m.innerText=o(t.updatedAt),p.innerText=l(t.updatedAt),y.innerText="Изменить",A.innerText="Удалить",s.append(d),s.append(i),c.append(s),u.append(m),u.append(p),r.append(u),_.append(b),E.append(h),E.append(y),v.append(w),v.append(A),L.append(E),L.append(v),f.append(L),e.append(a),e.append(n),e.append(c),e.append(r),e.append(_),e.append(f),e}(t))})),function(t){const e=t.querySelectorAll("#comb");e.forEach((function(t){t.addEventListener("click",(function(){t.parentNode.querySelectorAll(".contacts__item").forEach((function(t){t.id?t.classList.add("blocked"):t.classList.remove("blocked")}))}))}))}(n);n.querySelectorAll(".delete-btn").forEach((function(t){t.addEventListener("click",(async function(){this.dataset.id;s.type="delete";r(await S(this.dataset.id),s)}))}));n.querySelectorAll(".edit-btn").forEach((function(t){t.addEventListener("click",(async function(){const e=this.dataset.id,a=t.querySelector(".edit-btn__icon");s.type="change",a.classList.add("load__icon");const n=await S(e);a.classList.remove("load__icon"),r(n,s),document.location.hash="id_"+e}))}))}function o(t){return t.slice(8,10)+"."+t.slice(5,7)+"."+t.slice(0,4)}function l(t){return t.slice(11,16)}function i(t,e,a){return a?t.sort((function(t,a){return new Date(t[e]).getTime()>new Date(a[e]).getTime()?1:-1})):t.sort((function(t,a){return new Date(t[e]).getTime()<new Date(a[e]).getTime()?1:-1}))}function r(n,c){const{id:s,surname:d,name:o,lastName:l,contacts:i}=n,{type:r,buttonSubmit:f,button:S}=c,g=document.createElement("div"),x=document.createElement("div"),k=document.createElement("span");g.classList.add("modal"),x.classList.add("modal__wrapper"),k.classList.add("modal__close"),k.setAttribute("data-btn","close"),x.append(k);let q=null;"change"===r&&(q=s);const T=function(t,e){const a=document.createElement("div"),n=document.createElement("h2");if(a.classList.add("modal__header","modal__container"),n.classList.add("modal-header__heading"),n.textContent=t,a.append(n),e){const t=document.createElement("span");t.classList.add("modal-header__id"),t.innerText=`ID: ${e.slice(-6)}`,a.append(t)}return{header:a,headerTitle:n}}(c.headTitle(),q);x.append(T.header);const C=document.createElement("form");C.classList.add("modal__form"),C.setAttribute("action","#");const N=function(){const t=document.createElement("div"),e=document.createElement("span");return t.classList.add("modal-error","blocked"),e.classList.add("modal-error__text"),t.classList.remove("blocked"),t.append(e),{wrapperError:t,spanError:e}}();if("delete"!==r){const t=function(t,e,a){const n=document.createElement("fieldset"),c=document.createElement("div"),s=document.createElement("div"),d=document.createElement("input"),o=document.createElement("lable"),l=document.createElement("span"),i=document.createElement("div"),r=document.createElement("input"),u=document.createElement("lable"),p=document.createElement("span"),_=document.createElement("div"),b=document.createElement("input"),f=document.createElement("lable");n.classList.add("fieldset_reset","modal-fullname"),c.classList.add("modal__container","modal-contaiter_position_flex"),s.classList.add("inputs__wrap"),d.classList.add("input","modal__intup"),o.classList.add("modal__lable"),l.classList.add("lable_asterix"),i.classList.add("inputs__wrap"),r.classList.add("input","modal__intup"),u.classList.add("modal__lable"),p.classList.add("lable_asterix"),_.classList.add("inputs__wrap"),b.classList.add("input","modal__intup"),f.classList.add("modal__lable"),d.setAttribute("id","surname"),d.setAttribute("data-input","surname"),d.setAttribute("type","text"),d.setAttribute("name","surname"),o.setAttribute("for","surname"),r.setAttribute("id","name"),r.setAttribute("data-input","name"),r.setAttribute("type","text"),r.setAttribute("name","name"),u.setAttribute("for","name"),b.setAttribute("id","lastname"),b.setAttribute("data-input","lastname"),b.setAttribute("type","text"),b.setAttribute("name","lastname"),f.setAttribute("for","lastname"),o.textContent="Фамилия",l.textContent="*",u.textContent="Имя",p.textContent="*",f.textContent="Отчество",t&&(o.classList.add("modal__lable_up"),d.value=t);e&&(u.classList.add("modal__lable_up"),r.value=e);a&&(f.classList.add("modal__lable_up"),b.value=a);return o.append(l),u.append(p),s.append(o),s.append(d),i.append(u),i.append(r),_.append(f),_.append(b),c.append(s),c.append(i),c.append(_),n.append(c),d.addEventListener("input",(function(){d.parentNode.classList.remove("border-color_burnt-sienna")})),r.addEventListener("input",(function(){r.parentNode.classList.remove("border-color_burnt-sienna")})),function(t){t.querySelectorAll(".inputs__wrap").forEach(m)}(c),n}(d,o,l);C.append(t);const{fieldsetContacts:a,buttonAddContactElement:n,wrapperContacts:c}=function(t){const a=document.createElement("fieldset"),n=document.createElement("div"),c=document.createElement("ul");a.classList.add("modal-contacts","fieldset_reset"),n.classList.add("modal__container"),c.classList.add("modal-contacts__list"),n.append(c),t&&t.forEach((function(t){const e=p(t);c.append(e)}));setTimeout(u,300);const s=function(){const t=document.createElement("button"),a=document.createElement("span"),n=document.createElement("span");return t.classList.add("modal-addcontact__btn","btn",e),a.classList.add("modal-addcontact__icon"),n.classList.add("modal-addcontact__title"),t.setAttribute("data-btn","contact-add"),n.textContent="Добавить контакт",t.append(a),t.append(n),t}();return a.append(n),a.append(s),{fieldsetContacts:a,buttonAddContactElement:s,wrapperContacts:n}}(i);C.append(a),x.append(C),_(n,a),function(t,e){const a=e.querySelector(".modal-contacts__list");t.addEventListener("click",(function(n){n.preventDefault(),n.stopPropagation();const c=p("");a.append(c),u(),b(c),L(c),E(c,t,e),_(t,e)}))}(n,c),function(t,e){const a=e.querySelectorAll(".modal-contacts__item");a.forEach((function(a){E(a,t,e)}))}(n,c),function(t){const e=t.querySelectorAll(".modal-contacts__item");e.forEach((function(t){L(t)}))}(c),x.append(N.wrapperError)}else x.append(N.wrapperError),N.wrapperError.classList.remove("blocked"),N.spanError.textContent="Вы действительно хотите удалить данного клиента?",N.spanError.classList.add("modal-error__text-style"),T.header.classList.add("align-center","modal-header-margin-bottom"),T.headerTitle.classList.add("modal-header__heading-padding-top");const $=function(t,e){const a=document.createElement("div"),n=document.createElement("button"),c=document.createElement("span"),s=document.createElement("span"),d=document.createElement("button");return a.classList.add("modal-btns"),n.classList.add("submit-btn","btn"),c.classList.add("submit-btn__icon"),s.classList.add("submit-btn__title"),d.classList.add("modal-delete-btn","btn"),n.setAttribute("data-btn","submit"),d.setAttribute("data-btn","small"),s.textContent=t,d.textContent=e,n.append(c),n.append(s),a.append(n),a.append(d),{wrapperButtons:a,buttonSubmit:n,buttonSmall:d}}(c.buttonSubmit(),c.button());x.append($.wrapperButtons),g.append(x),document.body.append(g),document.addEventListener("keydown",(function(t){"Escape"==t.code&&y(g)})),k.addEventListener("click",(function(){y(g)})),g.addEventListener("click",(function(t){t.target.classList.contains("modal")&&y(g)})),$.buttonSubmit.addEventListener("click",(async function(){if("delete"==r)v(s,g);else{const e=function(t){let e="";const a=t.querySelector("#surname"),n=a.value.trim();n||(a.parentNode.classList.add("border-color_burnt-sienna"),e="Введите фамилию клиента");const c=t.querySelector("#name"),s=c.value.trim();s||(c.parentNode.classList.add("border-color_burnt-sienna"),e&&(e+="<br>"),e+="Введите имя клиента");const d=t.querySelector("#lastname"),o=d.value.trim(),l=[],i=t.querySelectorAll(".modal-contacts__item");return i.forEach((function(t){const a=t.querySelector(".contact-type__button"),n=a.innerText;"Тип контакта"===n&&(a.classList.add("border-color_burnt-sienna"),e&&(e+="<br>"),e+="Установите тип контакта");const c=t.querySelector(".contact-value"),s=c.value.trim();s||(c.classList.add("border-color_burnt-sienna"),e&&(e+="<br>"),e+="Введите данные контакта");const d={type:n,value:s};l.push(d)})),{name:s,surname:n,lastName:o,contacts:l,textError:e}}(g);if(e.textError)N.wrapperError.classList.remove("blocked"),N.spanError.innerHTML=e.textError;else{const n=$.buttonSubmit.querySelector(".submit-btn__icon");n.classList.add("upload_visible"),h(g,!0),"new"==r?await async function(e,n){const c=await async function(e){await A(t);const n=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return n}(e);w(c,n)}(e,g):"change"==r&&await async function(e,n,c){w(await async function(e,n){await A(t);const c=await fetch(`${a}/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return c}(e,n),c)}(e,q,g),n.classList.remove("upload_visible"),h(g,!1)}}})),$.buttonSmall.addEventListener("click",(function(){"change"!==r?y(g):v(s,g)})),g.querySelectorAll(".contacts-type").forEach((function(t){b(t)}));setTimeout((function(){g.classList.add(e),x.classList.add(e)}),100);return g}function u(){const t=document.querySelector(".modal-contacts");if(t){t.querySelectorAll(".modal-contacts__item").length?t.classList.add("modal-contacts_padding"):t.classList.remove("modal-contacts_padding")}}function m(t){const e=t.querySelector(".modal__intup"),a=t.querySelector(".modal__lable");e.addEventListener("focus",(function(){a.classList.add("modal__lable_up")})),e.addEventListener("blur",(function(){e.value||a.classList.remove("modal__lable_up")}))}function p(t){const e=document.createElement("li"),a=document.createElement("div"),n=document.createElement("button"),s=document.createElement("ul"),d=document.createElement("input"),o=document.createElement("button"),l=document.createElement("span");return e.classList.add("modal-contacts__item"),a.classList.add("contacts-type"),n.classList.add("contact-type__button","btn"),s.classList.add("contact-type__list"),d.classList.add("input","contact-value","contact-value_border-right"),d.setAttribute("type","text"),d.setAttribute("placeholder","Введите данные контакта"),o.classList.add("delete-contact__btn","btn","blocked"),l.classList.add("delete-contact__icon"),n.textContent="Тип контакта",c.forEach((function(t){const e=document.createElement("li");e.classList.add("contact-type__item"),e.textContent=t,s.append(e)})),t&&(n.textContent=t.type,d.value=t.value,o.classList.remove("blocked")),o.append(l),a.append(n),a.append(s),e.append(a),e.append(d),e.append(o),d.addEventListener("input",(function(){d.classList.remove("border-color_burnt-sienna")})),e}function _(t,a){a.querySelectorAll(".modal-contacts__item").length>=10?t.classList.remove(e):t.classList.add(e)}function b(t){const e=t.querySelector(".contact-type__button"),a=t.querySelector(".contact-type__list"),n=a.querySelectorAll(".contact-type__item");e.addEventListener("click",(function(t){t.preventDefault(),a.classList.toggle("contact-type__list_visible"),e.classList.toggle("contact-type__button_rotate")})),n.forEach((function(t){t.addEventListener("click",(function(t){t.stopPropagation(),e.classList.remove("border-color_burnt-sienna"),e.textContent=this.innerText,e.focus(),f(a,e)}))})),document.addEventListener("click",(function(t){t.target!==e&&f(a,e)})),document.addEventListener("keydown",(function(t){"Tab"!==t.key&&"Escape"!==t.key||f(a,e)}))}function f(t,e){t.classList.remove("contact-type__list_visible"),e.classList.remove("contact-type__button_rotate")}function L(t){const e=t.querySelector(".delete-contact__btn"),a=t.querySelector(".contact-value");t.addEventListener("input",(function(t){t.stopPropagation(),a.value?e.classList.remove("blocked"):e.classList.add("blocked")}))}function E(t,e,a){t.querySelector(".delete-contact__btn").addEventListener("click",(function(){t.remove(),_(e,a),u()}))}function h(t,e){const a=t.querySelectorAll(".modal__intup"),n=t.querySelectorAll(".modal-contacts__item"),c=t.querySelector(".modal-addcontact__btn"),s=t.querySelector(".submit-btn"),d=t.querySelector(".modal-delete-btn");e?(a.forEach((function(t){t.disabled=!0})),n.forEach((function(t){const e=t.querySelector(".contact-type__button"),a=t.querySelector(".contact-value"),n=t.querySelector(".delete-contact__btn");e.disabled=!0,a.disabled=!0,n.disabled=!0})),c.disabled=!0,s.disabled=!0,d.disabled=!0):(a.forEach((function(t){t.disabled=!1})),n.forEach((function(t){const e=t.querySelector(".contact-type__button"),a=t.querySelector(".contact-value"),n=t.querySelector(".delete-contact__btn");e.disabled=!1,a.disabled=!1,n.disabled=!1})),c.disabled=!1,s.disabled=!1,d.disabled=!1)}function y(a){const n=a.querySelector(".modal__wrapper");a.classList.remove(e),n.classList.remove(e);setTimeout((function(){a.remove()}),t);document.location.hash=""}async function v(t,e){w(await async function(t){const e=await fetch(`${a}/${t}`,{method:"DELETE"});return e}(t),e)}async function w(t,e){let a;const n=e.querySelector(".modal-error"),c=n.querySelector(".modal-error__text");if(200===t.status||201===t.status)await g(),y(e);else if("delete"!==s.type){if(500===t.status)a=`Данные не сохранены. Ответ сервера - ${t.status}. Ошибка работы сервера.`;else switch(t.status){case 404:a="Данные не сохранены. Ответ сервера - 404. Не удалось найти запрашиваемую страницую.";break;case 422:(await t.json()).errors.forEach((function(t){a=a?a+" <br> "+t.message:t.message}));break;default:a='"Что-то пошло не так..."'}n.classList.remove("blocked"),c.innerHTML=a}}const A=t=>new Promise((e=>setTimeout((()=>e()),t)));async function S(e){await A(t);const n=await fetch(`${a}/${e}`);return await n.json()}async function g(){const e=document.querySelector(".search-form__input");e.disabled=!0;const c=document.querySelector(".table-body__overlay");c.classList.remove("blocked"),n.clients=await async function(){await A(t);const e=await fetch(a);return await e.json()}(),d(n),c.classList.add("blocked"),e.disabled=!1}function x(t,e){return t>e.length-1&&(t=0),t<0&&(t=e.length-1),function(t){t.forEach((function(t){t.classList.remove("search__items_focused")}))}(e),e[t].classList.add("search__items_focused"),t}function k(t){const e=document.getElementById(t);e.classList.add("outline_medium-slate-blue"),e.scrollIntoView({behavior:"smooth",block:"start"})}function q(t){t.classList.add("blocked"),t.innerHTML=""}document.addEventListener("DOMContentLoaded",(function(){!async function(){const e=document.getElementById("crm-app"),c=function(){const t=document.createElement("header"),e=document.createElement("a"),a=document.createElement("img"),n=document.createElement("form"),c=document.createElement("input");return t.classList.add("header","header__container"),e.classList.add("logo"),n.classList.add("search-form"),c.classList.add("input","search-form__input"),a.setAttribute("src","./img/logo.svg"),a.setAttribute("alt","Логотип Эс Кей Би"),n.setAttribute("action","#"),c.setAttribute("type","text"),c.setAttribute("placeholder","Введите запрос"),e.append(a),n.append(c),t.append(e),t.append(n),{header:t,form:n,input:c}}(),o=function(){const t=document.createElement("main"),e=document.createElement("h1"),a=document.createElement("div"),n=document.createElement("table"),c=document.createElement("thead"),s=document.createElement("tr"),d=document.createElement("th"),o=document.createElement("span"),l=document.createElement("span"),i=document.createElement("th"),r=document.createElement("span"),u=document.createElement("span"),m=document.createElement("span"),p=document.createElement("th"),_=document.createElement("span"),b=document.createElement("span"),f=document.createElement("th"),L=document.createElement("span"),E=document.createElement("span"),h=document.createElement("th"),y=document.createElement("th");return t.classList.add("container"),e.classList.add("main__title"),a.classList.add("table__box"),n.classList.add("table"),s.classList.add("table-head__row"),d.classList.add("table-head__cells","table-head_id","table__column_sort"),o.classList.add("head-id__title"),l.classList.add("table-head__icon"),i.classList.add("table-head__cells","table-head_fullname","table__column_sort"),r.classList.add("head-fullname__title"),u.classList.add("table-head__icon","rotate_180"),m.classList.add("head-fullname__descr"),p.classList.add("table-head__cells","table-head_createdate","table__column_sort"),_.classList.add("head-createdate__title"),b.classList.add("table-head__icon","rotate_180"),f.classList.add("table-head__cells","table-head_updatedate","table__column_sort"),L.classList.add("head-updatedate__title"),E.classList.add("table-head__icon","rotate_180"),h.classList.add("table-head__cells"),y.classList.add("table-head__cells","table-head_actions"),e.innerText="Клиенты",d.setAttribute("id","id"),o.innerText="ID",i.setAttribute("id","fullname"),r.innerText="Фамилия Имя Отчество",m.innerText="А-Я",p.setAttribute("id","createdAt"),_.innerText="Дата и время создания",f.setAttribute("id","updatedAt"),L.innerText="Последние изменения",h.setAttribute("id","contacts"),h.innerText="Контакты",y.setAttribute("id","actions"),y.innerText="Действия",d.append(o),d.append(l),i.append(r),i.append(u),i.append(m),p.append(_),p.append(b),f.append(L),f.append(E),s.append(d),s.append(i),s.append(p),s.append(p),s.append(f),s.append(h),s.append(y),c.append(s),n.append(c),a.append(n),t.append(e),t.append(a),{main:t,tableBox:a,tr:s}}(),l=function(){const t=document.createElement("div"),e=document.createElement("div"),a=document.createElement("div"),n=document.createElement("table"),c=document.createElement("tbody");return t.classList.add("table-body"),e.classList.add("table-body__overlay","blocked"),a.classList.add("table-body__ring"),n.classList.add("table","data-table"),e.append(a),n.append(c),t.append(e),t.append(n),{tableBody:t,overlay:e}}(),i=function(){const t=document.createElement("div"),e=document.createElement("button"),a=document.createElement("span"),n=document.createElement("span");return t.classList.add("add-client"),e.classList.add("add-client__btn","btn"),n.classList.add("add-client__icon"),a.innerText="Добавить клиента",e.append(n),e.append(a),t.append(e),{wrapper:t,button:e}}();e.append(c.header),e.append(o.main),o.tableBox.append(l.tableBody),o.main.append(i.wrapper),await g(),function(){let t,e,a;document.addEventListener("mouseover",(function(n){let c=n.target,s=c.dataset.type,d=c.dataset.value;if(!s&&!d)return;t=document.createElement("div"),a=document.createElement("span"),t.classList.add("tooltip"),a.classList.add("tooltip__value"),s&&(e=document.createElement("span"),e.classList.add("tooltip__title"),e.innerText=s,t.append(e),a.classList.add("color_light-slate-blue")),a.innerText=d,t.append(a),document.body.append(t);let o=c.getBoundingClientRect(),l=o.left+(c.offsetWidth-t.offsetWidth)/2;l<0&&(l=0);let i=o.top-t.offsetHeight-10;i<0&&(i=o.top+c.offsetHeight+10),t.style.left=l+"px",t.style.top=i+"px",t.style.opacity=1})),document.addEventListener("mouseout",(function(){t&&(t.remove(),t=null)}))}();const u=document.createElement("ul");u.classList.add("search__list","blocked"),c.form.append(u);let m=null,p=null,_=-1;if(c.input.addEventListener("input",(function(){l.tableBody.querySelectorAll(".table__row").forEach((function(t){t.classList.remove("outline_medium-slate-blue")})),clearTimeout(m),m=setTimeout((function(){!async function(){const e=c.input.value.trim();if(q(u),e){const c=await async function(e){await A(t);const n=`${a}?search=${e}`,c=await fetch(n);return await c.json()}(e);p=c.length?(n=c,s=u,l.tableBody,n.forEach((function(t){const e=document.createElement("li");e.classList.add("search__items"),e.setAttribute("data-id",t.id),e.textContent=t.name+" "+t.surname,s.append(e),e.addEventListener("click",(function(){k(this.dataset.id),q(s)}))})),s.classList.remove("blocked"),s).querySelectorAll(".search__items"):null}else p=null;var n,s}()}),t)})),document.addEventListener("keydown",(function(t){if(p)switch(t.key){case"Enter":t.preventDefault(),k(p[_].dataset.id),q(u);break;case"ArrowDown":_++,_=x(_,p);break;case"ArrowUp":_--,_=x(_,p);break;case"Escape":q(u)}})),function(t,e){e.querySelectorAll(".table__column_sort").forEach((function(e){e.addEventListener("click",(function(){t.columnOfSort=e.id,t.stateOfSort[e.id]?t.stateOfSort[e.id]=!1:t.stateOfSort[e.id]=!0,d(t)}))}))}(n,o.tr),i.button.addEventListener("click",(function(){s.type="new",r("",s)})),document.location.hash){const t=document.location.hash.split("_")[1];s.type="change";r(await S(t),s)}}()}))}();