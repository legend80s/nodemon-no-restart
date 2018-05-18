# nodemon-no-restart
Minimal codebase for testing an http application not restarting with nodemon@x.x.x and alinode@4.1.0. I install the latest nodemon 1.17.4, but the version makes no difference.

It works when replaced with node@10.1.0. To make it happen, you can replace `"install-alinode": "4.1.0"` with `"install-node": "10.1.0"` in package.json.

Platform: macOS Sierra version 10.12.0 i386

## Reproduce

### Case#1 alinode@4.1.0 not working

Not restart with alinode@4.1.0.

1. rm -rf node_modules # if it exists
2. "install-alinode": "4.1.0"
3. tnpm install
3. npm run watch
4. modify `res.end('helloworld');` to `res.end('hello world');`

#### Console

> \> nodemon-no-restart@1.0.0 watch /Users/chuanzong.lcz/Documents/learning/programming/node.js/nodemon-no-restart
>
> \> nodemon bin/server.js
>
> [nodemon] 1.17.4
> [nodemon] to restart at any time, enter `rs`
> [nodemon] watching: *.*
> [nodemon] starting `node bin/server.js`
> Server listening on port 6008
> [nodemon] restarting due to changes...
> shmget error, please try later.: No such file or directory

As what you see, nodemon failed to restart my App 😕. And the `rs` commad failed to work, too!

#### Page

Open http://localhost:6008/ which shows "helloworld". After change, refresh the browser page, it shows "helloworld" again but not "hello world" I expected!

### Case#2 node@10.1.0 works

It does restart with node@10.1.0.

1. rm -rf node_modules # if it exists
2. "install-node": "10.1.0"
3. tnpm install
4. npm run watch
5. modify `res.end('helloworld');` to `res.end('hell world');`

#### Console

> \> nodemon-no-restart@1.0.0 watch /Users/chuanzong.lcz/Documents/learning/programming/node.js/nodemon-no-restart
>
> \> nodemon bin/server.js
>
> [nodemon] 1.17.4
> [nodemon] to restart at any time, enter `rs`
> [nodemon] watching: *.*
> [nodemon] starting `node bin/server.js`
> Server listening on port 6008
> [nodemon] restarting due to changes...
> [nodemon] starting `node bin/server.js`
> Server listening on port 6008

As what you see, nodemon restart my little App successfully 🎉.

#### Page

Open http://localhost:6008/ which shows "helloworld". After change, refresh the browser page, it shows "hello world" which is what I expected exactly!
