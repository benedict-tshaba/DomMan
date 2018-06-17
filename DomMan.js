/*
*  DomMan is a simple, minimal and very lightweight JavaScript DOM 
*  manipulation library designed to be fast and easily adaptable.
*  
*  Author: Tshaba Phomolo Benedict
*  License: TPB - (Once I am confident enough that the code is
*                  perfect I will change this to GPLv3.0 or something)
*/

var DomManipulate = function($=document) {
	/* If a function does not return anything (has no content
	to return, then return null.)
	*  Also some methods are not available for an array of 
	*  elements e.g. attr methods, so in the case that multiple
	*  elements have been selected such methods will only work
	*  on the first element in the array. 
	*/
	fn = function(el) {
		var elm = el; //this should be an array

		return {
			element: elm[0],

			attr: function(attr, newSet) {
				if(attr && !newSet) {
					return elm[0].getAttribute(attr);
				} else if(attr && newSet) {
					elm[0].setAttribute(attr, newSet);
				} else {
					return null;
				}
			},

			text: function(text) {
				if(text) {
					elm.forEach(el => el.innerText = text);
				} else {
					return elm[0].innerText;
				}
			},

			html: function(html) {
				if (html) {
					elm.forEach(el => el.innerHTML = html);
				} else {
					return elm[0].innerHTML;
				}
			},

			click: function(fn) {

				if(typeof fn !== 'function') {
					return null;
				}
				elm.forEach(el => el.onclick = fn);
				return null;

			},

			css: function(style) {
				elm.forEach(el => {
					Object.assign(el.style, style);
				});
				return null;
			},

			val: function(value) {
				
				if(value) {
					elm.forEach(el => el.value = value);
				} else {
					return elm[0].value;
				}

			},

			append: function(element) {
				elm.forEach(el => el.appendChild(element));
				return null;
			},

			addClass: function(cls) {
				elm.forEach(el => el.classList.add(cls));
				return null;
			},

			removeClass: function(cls) {
				elm.forEach(el => el.classList.remove(cls));
				return null;
			},

			on: function(type, fn, config) {

				if(config !== undefined) {
					elm.forEach(el => {
						el.addEventListener(type, fn, config);
					});
				} else {
					elm.forEach(el => {
						el.addEventListener(type, fn);
					});
				}

				return null;

			}
		};
	};

	//if($.readyState === "complete") { //this was a dumb idea
	return function get(el) {
		this.elements = null; //clear this.elements with every call

		if (!el) {
			return null;
		}

		//the result of this is not live - less perfomant
		this.elements = $.querySelectorAll(el);
		//next time use something like:
		//getElementsByTagName, etc...
		this.elements = Array.from(this.elements);

		return fn(this.elements); //only when the dom is ready
	};
};

module.exports = DomManipulate();
