
const { spawn } = require( 'child_process' );
module.exports = (pluginContext) => {
    return (value, env = {}) => {

        const v = spawn(env.cmd, [value], {
            detached: true,
            stdio: ['ignored', 'ignored', 'ignored']
        })
        return new Promise();
    }
  }