
const { spawn } = require( 'child_process' );
module.exports = (pluginContext) => {
    return (value, env = {}) => {
        const child = spawn(env.cmd, [value], {
            detached: true
        });
        child.unref();
        return new Promise();
    }
  }