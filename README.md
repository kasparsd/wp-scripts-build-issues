# Examples of `@wordpress/scripts` Build Issues

Demo of issues with using `@wordpress/scripts` with a `src` directory containing multiple JS files and blocks:

```
src
├── blocks
│   └── src-entrypoints-bug
│       ├── block.json
│       ├── edit.js
│       └── index.js
├── custom.js
└── index.js
```

## Issues

1. Default `wp-scripts build` doesn't pick up any `src/*.js` (including `src/index.js`) if there is at least one `src/blocks/*/block.json` present. Notice how the [build](build) directory doesn't contain `index.js` or `custom.js`:

        $ wp-scripts build

        build/
        └── blocks
            └── src-entrypoints-bug
                ├── block.json
                ├── index.asset.php
                └── index.js

2. Specifying custom entry points breaks the `block/*/block.json` scanner and building of blocks. Notice how [build-with-entrypoints/blocks/src-entrypoints-bug](build-with-entrypoints/blocks/src-entrypoints-bug) contains only `block.json` with any of block files.

        $ npx wp-scripts build src/custom.js src/index.js --output-path=build-with-entrypoints

        build-with-entrypoints
        ├── blocks
        │   └── src-entrypoints-bug
        │       └── block.json
        ├── custom.asset.php
        ├── custom.js
        ├── index.asset.php
        └── index.js

## Setup

Run the following commands to replicate the `./build*` directories:

1. Run `npm install` to setup dependencies.
2. Run `npm run build` to build the samples.
