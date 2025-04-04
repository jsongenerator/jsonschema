// Minimalistyczny uniwersalny loader
(function() {
    // --- Automatycznie wczytaj CSS ---
    var cssLink = 'https://github.com/jsongenerator/jsonschema/blob/main/style.css'; // <<< podmień na swój link
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssLink;
    document.head.appendChild(link);

    // --- Prosty zestaw narzędzi do manipulacji DOM ---
    window.domTools = {
        setText: function(selector, text) {
            var el = document.querySelector(selector);
            if (el) el.textContent = text;
        },
        setHTML: function(selector, html) {
            var el = document.querySelector(selector);
            if (el) el.innerHTML = html;
        },
        addClass: function(selector, className) {
            var el = document.querySelector(selector);
            if (el) el.classList.add(className);
        },
        removeClass: function(selector, className) {
            var el = document.querySelector(selector);
            if (el) el.classList.remove(className);
        },
        setAttr: function(selector, attr, value) {
            var el = document.querySelector(selector);
            if (el) el.setAttribute(attr, value);
        }
    };

})();
