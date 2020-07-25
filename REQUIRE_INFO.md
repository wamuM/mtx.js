# How to require the module, imp.js or mtx.js?

Both files, ``imp.js`` and ``mtx.js`` have the same Matrix constructor. The difference is that while ``mtx.js`` uses the ``module.export = Matrix`` command to export, ``imp.js`` uses the ``export default Matrix`` one.
So, if you are using **Node** you should require the **mtx.js** file and if you are using **deno** or a **web** engine **imp.js**.<br>
*note: if you know how to improve this systeme, I'll realy apreciate knowing it too*

