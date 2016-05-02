/**
 * clipboard.js 
 * width clipboard.js, you can copy cut and paste clipboard data
 * the main methods ard execCommand for modern browser and clipboardData for ie
 * @author ganzw@gmail.com
 * @url    https://github.com/baixuexiyang/clipBoard.js
 */
;(function(name, fun) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = fun();
    } else if (typeof define === 'function' && define.amd) {
        define(fun);
    } else {
        this[name] = fun();
    }
})('clipBoard', function() {
    "use strict";

    /**
     * tar is the value
     * @date   2016-04-25
     * @param  {[type]}   tar     [description]
     * @param  {[type]}   options [description]
     * @return {[type]}           [description]
     */
    function clipBoard(tar, options) {
        this.options = options || {};
        this.tar = tar[0] || tar;
        // if options contain copy, copy will be applied soon
        if (this.options.copy) {
            this.copyd();
        }
        if(this.options.cut) {
        	this.cut();
        }

        if(this.options.paste) {
        	this.paste();
        }
    }

    /**
     * coping is to set the value to clipboard
     * you can set the value through copy function, and the function be called autoly
     * Also you can set the paramer and it will be set the clipboard
     */
    clipBoard.prototype.copyd = function(value) {
        // before the copy it will be called, you can check the value or modify the value
        if (this.options.beforeCopy) {
            this.options.beforeCopy();
        }
        // if the options set copy function, the value will be set. then get the paramer value.
        // above all, if the value is null, then will be set the tar of value
        value = value || this.tar.value || this.tar.innerText;
        if (this.options.copy) {
            value = this.options.copy();
        }
        // for modern browser
        if (document.execCommand) {
            var element = document.createElement('SPAN');
            element.textContent = value;
            document.body.appendChild(element);
            if (document.selection) {
                var range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                var range = document.createRange();
                range.selectNode(element);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
            document.execCommand('copy');
            element.remove ? element.remove() : element.removeNode(true);
        }
        // for ie
        if (window.clipboardData) {
            window.clipboardData.setData('text', value);
        }
        // after copy
        if (this.options.afterCopy) {
            this.options.afterCopy();
        }
    };
    /**
     * cut the value of input or textarea
     * @date   2016-04-25
     * @return {[type]}   [description]
     */
    clipBoard.prototype.cut = function() {
        if (this.tar.type !== 'text' && this.tar.type !== 'textarea') {
            return;
        }
        if (this.options.beforeCut) {
            this.options.beforeCut();
        }
        if (document.execCommand) {
            var element = this.tar;
            if (document.selection) {
                var range = document.body.createTextRange();
                range.moveToElementText(element);
                range.select();
            } else if (window.getSelection) {
                element.select();
            }
            document.execCommand('cut');
        }
        // for ie
        if (window.clipboardData) {
            window.clipboardData.setData('text', this.tar.value);
            this.tar.value = '';
        }
        // after copy
        if (this.options.afterCut) {
            this.options.afterCut();
        }
    };

    /**
     * paste the clipboard value to input or textarea
     * @date   2016-04-25
     * @return {[type]}   [description]
     */
    clipBoard.prototype.paste = function() {
    	if (this.tar.type !== 'text' && this.tar.type !== 'textarea') {
            return;
        }
        if (this.options.beforePaste) {
            this.options.beforePaste();
        }
        if (document.execCommand) {
            var element = this.tar;
            if(element.setSelectionRange) {
           		element.focus();
           		element.setSelectionRange(element.value.length, element.value.length);
    		} else if (element.createTextRange) {
    			var range = element.createTextRange();
    			range.collapse(true);
    			range.moveEnd('character', element.value.length);
    			range.moveStart('character', element.value.length);
    			range.select();
           	}
            document.execCommand('paste');
        }
        // for ie
        if (!document.execCommand && window.clipboardData) {
            this.tar.value +=  window.clipboardData.getData('text');
        }
        // after Paste
        if (this.options.afterPaste) {
            this.options.afterPaste();
        }
    };

    return clipBoard;
});
