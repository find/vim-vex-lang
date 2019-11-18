const jsdom = require('jsdom')
const {JSDOM} = jsdom;

JSDOM.fromURL('https://www.sidefx.com/docs/houdini/vex/functions/index.html').then(dom => {
    var all = dom.window.document.querySelectorAll('.content .label>.label-text');
    var names = {};
    for (var i in all) {
        var name = all[i].text;
        if (!name)
            continue;
        names[name]=true;
    }
    console.log(Object.keys(names).join(' '));
})