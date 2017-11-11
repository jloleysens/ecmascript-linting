# What is this?

First attempt at creating a published node module.

# Why?

I like eslint and I, so far like, prettier. So I created this node module designed to be an eslint config extension that can easily be shared between projects.

Please note: the rules are based on my opinion of good JS style, yours may differ but feel free to grab my `.eslintrc.js` file to seed your own versions.

# How to use?

Just add `jloleysens` to the extends key in your `.eslintrc` and make sure to install the peer dependencies.

If you're using a .js file for your eslintrc (highly recommend doing this) it should look like the following:

```js
module.exports = {
  extends: ['jloleysens']
};
```

Peer dependencies are:
```json
{
    "eslint": ">= 4.4.1",
    "eslint-config-prettier": ">= 2.3.0",
    "eslint-plugin-prettier": ">= 2.2.0",
    "prettier": ">= 1.5.3"
}
```