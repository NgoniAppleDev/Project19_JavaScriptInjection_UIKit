
var Action = function() {};

Action.prototype = {
    run: function(parameters) {
        parameters.completionFunction({ "URL": document.URL, "title": document.title })
    },
    
    finalize: function(paramaters) {
        var customJavaScript = paramaters["customJavaScript"]
        eval(customJavaScript)
    }
    
};

var ExtensionPreprocessingJS = new Action
