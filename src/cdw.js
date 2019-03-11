const fs = require('fs')
var path = require('path')
module.exports = (pluginContext) => {
    return (query, env = {}) => {

        var dir = env.workspace;
        var files = fs.readdirSync(dir);

        var r = files.filter(f => {
            return fs.statSync(path.join(dir, f)).isDirectory();
        });
        if (query) {
            query = query.replace(/[-_ ]/g, '');
            r = r.filter(f => {
                return f.replace(/[-_]/g, '').indexOf(query) > -1;
            });
        }
        r = r.map(x => {
            var p = path.join(dir, x);
            return {
                "id": x,
                icon: 'fa-hand-spock-o',
                title: x,
                value: p,
                subtitle: p
            }
        })

        return new Promise((resolve, reject) => {
            resolve(r)
        })
    }
}
