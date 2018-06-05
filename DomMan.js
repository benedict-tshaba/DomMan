var DomManipulate = function($=document) {
	/*If a function does not return anything (has no content
	to return, then return null.)*/
	fn = function(el) {
		var elm = el; //this should be an array

		return {

			attr: function(attr) {
				return elm[0].getAttribute(attr);
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
					return;
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
				
				if(!value) {
					elm.forEach(el => el.value = null);
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

				if(typeof config === 'object') {
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

		return fn(this.elements);
	}; 
};