"use strict;"
if (typeof Project == 'undefined') Project = {};
if (typeof Project.Admin == 'undefined') Project.Admin = {};
if (typeof Project.Admin.Frontend == 'undefined') Project.Admin.Frontend = {};
Project.Admin.Frontend.ModuleDescription = function()
{
};
Object.assign(Project.Admin.Frontend.ModuleDescription.prototype,
{
});
Object.assign(Project.Admin.Frontend.ModuleDescription,
{
	getModuleName: function()
	{
		return "Project.Admin.Frontend";
	},
	getModuleVersion: function()
	{
		return "0.0.1";
	},
	requiredModules: function()
	{
		return Runtime.Map.from({"Runtime.Web":"*","Runtime.Widget":"*"});
	},
	entities: function()
	{
		return Runtime.Vector.from([new Runtime.Web.Annotations.Widget("Project.Admin.Frontend.Components.AdminPage.AdminPageModel")]);
	},
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "Project.Admin.Frontend";
	},
	getClassName: function()
	{
		return "Project.Admin.Frontend.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Project.Admin.Frontend.ModuleDescription);
window["Project.Admin.Frontend.ModuleDescription"] = Project.Admin.Frontend.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Project.Admin.Frontend.ModuleDescription;
"use strict;"
/*
 *  CSS
*/
if (typeof Project == 'undefined') Project = {};
if (typeof Project.App == 'undefined') Project.App = {};
if (typeof Project.App.Frontend == 'undefined') Project.App.Frontend = {};
if (typeof Project.App.Frontend.Components == 'undefined') Project.App.Frontend.Components = {};
if (typeof Project.App.Frontend.Components.Blocks == 'undefined') Project.App.Frontend.Components.Blocks = {};
Project.App.Frontend.Components.Blocks.CSS = {
	name: "Project.App.Frontend.Components.Blocks.CSS",
	extends: Runtime.Web.Component,
	methods:
	{
	},
};
Object.assign(Project.App.Frontend.Components.Blocks.CSS,
{
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr("body,html{font-family: var(--widget-font-family);font-size: var(--widget-font-size);line-height: var(--widget-line-height);width: 100%;padding: 0;margin: 0}");
		return res;
	},
	getNamespace: function()
	{
		return "Project.App.Frontend.Components.Blocks";
	},
	getClassName: function()
	{
		return "Project.App.Frontend.Components.Blocks.CSS";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Project.App.Frontend.Components.Blocks.CSS);
window["Project.App.Frontend.Components.Blocks.CSS"] = Project.App.Frontend.Components.Blocks.CSS;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Project.App.Frontend.Components.Blocks.CSS;
"use strict;"
if (typeof Project == 'undefined') Project = {};
if (typeof Project.App == 'undefined') Project.App = {};
if (typeof Project.App.Frontend == 'undefined') Project.App.Frontend = {};
if (typeof Project.App.Frontend.Components == 'undefined') Project.App.Frontend.Components = {};
if (typeof Project.App.Frontend.Components.IndexPage == 'undefined') Project.App.Frontend.Components.IndexPage = {};
Project.App.Frontend.Components.IndexPage.IndexPage = {
	name: "Project.App.Frontend.Components.IndexPage.IndexPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["main_page"])});
			
			/* Component 'Container' */
			let __v1 = this._c(__v0, "Runtime.Widget.Container", {"class":this._class_name(["header"])}, () => {
				let __v = [];
				
				/* Component 'Text' */
				let __v0 = this._c(__v, "Runtime.Widget.Text", {"tag":"h1","content":"Оставьте заявку","class":this._class_name(["page_title page_title"])});
				
				/* Component 'Form' */
				let __v1 = this._c(__v, "Runtime.Widget.Form.Form", {"model":this._model(this.model.main_form),"class":this._class_name(["main_form"])});
				
				return this._flatten(__v);
			});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(Project.App.Frontend.Components.IndexPage.IndexPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Container","Runtime.Widget.Form.Form","Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".header.h-b8f0{padding-top: 10px;padding-bottom: 10px;padding-left: 0px;padding-right: 0px;max-width: 600px;margin-left: auto;margin-right: auto}.page_title.h-b8f0{margin-bottom: 10px;text-align: center}");
		return res;
	},
	getNamespace: function()
	{
		return "Project.App.Frontend.Components.IndexPage";
	},
	getClassName: function()
	{
		return "Project.App.Frontend.Components.IndexPage.IndexPage";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Project.App.Frontend.Components.IndexPage.IndexPage);
window["Project.App.Frontend.Components.IndexPage.IndexPage"] = Project.App.Frontend.Components.IndexPage.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Project.App.Frontend.Components.IndexPage.IndexPage;
"use strict;"
if (typeof Project == 'undefined') Project = {};
if (typeof Project.App == 'undefined') Project.App = {};
if (typeof Project.App.Frontend == 'undefined') Project.App.Frontend = {};
if (typeof Project.App.Frontend.Components == 'undefined') Project.App.Frontend.Components = {};
if (typeof Project.App.Frontend.Components.IndexPage == 'undefined') Project.App.Frontend.Components.IndexPage = {};
Project.App.Frontend.Components.IndexPage.IndexPageModel = function()
{
	Runtime.Web.BasePageModel.apply(this, arguments);
};
Project.App.Frontend.Components.IndexPage.IndexPageModel.prototype = Object.create(Runtime.Web.BasePageModel.prototype);
Project.App.Frontend.Components.IndexPage.IndexPageModel.prototype.constructor = Project.App.Frontend.Components.IndexPage.IndexPageModel;
Object.assign(Project.App.Frontend.Components.IndexPage.IndexPageModel.prototype,
{
	initWidget: function(params)
	{
		Runtime.Web.BasePageModel.prototype.initWidget.call(this, params);
		this.main_form = this.addWidget("Runtime.Widget.Form.FormSubmitModel", Runtime.Map.from({"widget_name":"main_form","storage":new Runtime.Entity.Factory("Runtime.Widget.Form.FormSubmitStorage", Runtime.Map.from({"api_name":"app.form::save"})),"submit_button":Runtime.Map.from({"text":"Отправить заявку"}),"fields":Runtime.Vector.from([Runtime.Map.from({"name":"name","label":"Name","component":"Runtime.Widget.Input"}),Runtime.Map.from({"name":"email","label":"E-mail","component":"Runtime.Widget.Input"}),Runtime.Map.from({"name":"phone","label":"Phone","component":"Runtime.Widget.Input"}),Runtime.Map.from({"name":"question","label":"Question","component":"Runtime.Widget.TextArea","props":Runtime.Map.from({"height":"200px"})})])}));
	},
	buildTitle: function(container)
	{
		this.layout.setPageTitle("Index page");
	},
	_init: function()
	{
		Runtime.Web.BasePageModel.prototype._init.call(this);
		this.component = "Project.App.Frontend.Components.IndexPage.IndexPage";
		this.main_form = null;
	},
});
Object.assign(Project.App.Frontend.Components.IndexPage.IndexPageModel, Runtime.Web.BasePageModel);
Object.assign(Project.App.Frontend.Components.IndexPage.IndexPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "Project.App.Frontend.Components.IndexPage";
	},
	getClassName: function()
	{
		return "Project.App.Frontend.Components.IndexPage.IndexPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.BasePageModel";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Project.App.Frontend.Components.IndexPage.IndexPageModel);
window["Project.App.Frontend.Components.IndexPage.IndexPageModel"] = Project.App.Frontend.Components.IndexPage.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Project.App.Frontend.Components.IndexPage.IndexPageModel;
"use strict;"
if (typeof Project == 'undefined') Project = {};
if (typeof Project.App == 'undefined') Project.App = {};
if (typeof Project.App.Frontend == 'undefined') Project.App.Frontend = {};
if (typeof Project.App.Frontend.Components == 'undefined') Project.App.Frontend.Components = {};
if (typeof Project.App.Frontend.Components.NotFoundPage == 'undefined') Project.App.Frontend.Components.NotFoundPage = {};
Project.App.Frontend.Components.NotFoundPage.NotFoundPage = {
	name: "Project.App.Frontend.Components.NotFoundPage.NotFoundPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["not_found_page"])});
			
			/* Component 'Text' */
			let __v1 = this._c(__v0, "Runtime.Widget.Text", {"content":"Страница не найдена","class":this._class_name(["text_not_found"])});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(Project.App.Frontend.Components.NotFoundPage.NotFoundPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".text_not_found.h-ad22{font-size: 150%;font-weight: bold;text-align: center;padding-top: 20px;padding-bottom: 20px}");
		return res;
	},
	getNamespace: function()
	{
		return "Project.App.Frontend.Components.NotFoundPage";
	},
	getClassName: function()
	{
		return "Project.App.Frontend.Components.NotFoundPage.NotFoundPage";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Project.App.Frontend.Components.NotFoundPage.NotFoundPage);
window["Project.App.Frontend.Components.NotFoundPage.NotFoundPage"] = Project.App.Frontend.Components.NotFoundPage.NotFoundPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Project.App.Frontend.Components.NotFoundPage.NotFoundPage;
"use strict;"
if (typeof Project == 'undefined') Project = {};
if (typeof Project.App == 'undefined') Project.App = {};
if (typeof Project.App.Frontend == 'undefined') Project.App.Frontend = {};
if (typeof Project.App.Frontend.Components == 'undefined') Project.App.Frontend.Components = {};
if (typeof Project.App.Frontend.Components.NotFoundPage == 'undefined') Project.App.Frontend.Components.NotFoundPage = {};
Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel = function()
{
	Runtime.Web.BasePageModel.apply(this, arguments);
};
Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel.prototype = Object.create(Runtime.Web.BasePageModel.prototype);
Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel.prototype.constructor = Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel;
Object.assign(Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel.prototype,
{
	buildTitle: function(container)
	{
		/* Set title */
		this.layout.setPageTitle("Страница не найдена");
		/* Setup 404 response */
		container.response.http_code = 404;
	},
	_init: function()
	{
		Runtime.Web.BasePageModel.prototype._init.call(this);
		this.component = "Project.App.Frontend.Components.NotFoundPage.NotFoundPage";
	},
});
Object.assign(Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel, Runtime.Web.BasePageModel);
Object.assign(Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "Project.App.Frontend.Components.NotFoundPage";
	},
	getClassName: function()
	{
		return "Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.BasePageModel";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel);
window["Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel"] = Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel;
"use strict;"
if (typeof Project == 'undefined') Project = {};
if (typeof Project.App == 'undefined') Project.App = {};
Project.App.ModuleDescription = function()
{
};
Object.assign(Project.App.ModuleDescription.prototype,
{
});
Object.assign(Project.App.ModuleDescription,
{
	getModuleName: function()
	{
		return "Project.App";
	},
	getModuleVersion: function()
	{
		return "0.0.1";
	},
	requiredModules: function()
	{
		return Runtime.Map.from({"Runtime.Web":"*","Runtime.Widget":"*"});
	},
	entities: function()
	{
		return Runtime.Vector.from([new Runtime.Web.Annotations.Components(Runtime.Vector.from(["Project.App.Components.Blocks.CSS"])),new Runtime.Web.Annotations.Widget("Project.App.Frontend.Components.IndexPage.IndexPageModel"),new Runtime.Web.Annotations.Widget("Project.App.Frontend.Components.NotFoundPage.NotFoundPageModel")]);
	},
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "Project.App";
	},
	getClassName: function()
	{
		return "Project.App.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Project.App.ModuleDescription);
window["Project.App.ModuleDescription"] = Project.App.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Project.App.ModuleDescription;
