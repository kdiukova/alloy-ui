YUI.add("aui-modal-resize",function(e,t){function n(){}n.prototype={initializer:function(){var t=this;t._eventHandles.push(e.after(t._plugResize,t,"_plugDrag"),t.after("resizableChange",t._afterResizableChange),t.after("resize:end",e.bind(t._syncResizeDimensions,t))),t._applyPlugin(t._plugResize)},_afterResizableChange:function(t){var n=this;t.newVal?n._applyPlugin(n._plugResize):n.unplug(e.Plugin.Resize)},_beforeResizeCorrectDimensions:function(){var t=this;if(t.resize.proxy)return new e.Do.Prevent},_plugResize:function(){var t=this,n=t.get("resizable");n&&!t.hasPlugin("resizable")&&(t.plug(e.Plugin.Resize,t._addBubbleTargets(n)),e.before(t._beforeResizeCorrectDimensions,t.resize,"_correctDimensions",t))},_syncResizeDimensions:function(e){var t=this,n=t.get("boundingBox"),r=e.info;t.set("width",r.offsetWidth-parseInt(n.getComputedStyle("borderRightWidth"),10)-parseInt(n.getComputedStyle("borderLeftWidth"),10)),t.set("height",r.offsetHeight-parseInt(n.getComputedStyle("borderTopWidth"),10)-parseInt(n.getComputedStyle("borderBottomWidth"),10))}},n.ATTRS={resizable:{value:{handles:"br"}}},e.Base.mix(e.Modal,[n])},"3.0.3-deprecated.53",{requires:["aui-modal","resize-plugin"]});
