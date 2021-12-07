# RTK `createReducer` Circular Dependencies

See `master` for a demonstration of the issue.

An error is thrown on startup:

```
  builderCallback(builder)
  ^
TypeError: Cannot read property 'fulfilled' of undefined
    at /src/features/users/slices/user.reducer.ts:13:24
    at executeReducerBuilderCallback (/node_modules/.pnpm/@reduxjs+toolkit@1.7.0-rc.0/node_modules/@reduxjs/toolkit/src/mapBuilders.ts:194:3)
    at createReducer (/node_modules/.pnpm/@reduxjs+toolkit@1.7.0-rc.0/node_modules/@reduxjs/toolkit/src/createReducer.ts:220:9)
    at Object.<anonymous> (/src/features/users/slices/user.reducer.ts:6:42)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Module.m._compile (/node_modules/.pnpm/ts-node@10.4.0_d1ba71cee4528a43e185cc3d6fa907dc/node_modules/ts-node/src/index.ts:1371:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Object.require.extensions.<computed> [as .ts] (/node_modules/.pnpm/ts-node@10.4.0_d1ba71cee4528a43e185cc3d6fa907dc/node_modules/ts-node/src/index.ts:1374:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
 ELIFECYCLE  Command failed with exit code 1.
```

Switch to the `slice-fix` branch and compile and run again and notice that the issue is fixed (thanks RTK `1.7.0-beta.1`!).

Ideally, the original form would work just as well.

# Run

Install Node:

```bash
curl -L https://git.io/n-install | bash
n auto
```

Install pnpm:

```bash
npm i -g pnpm
```

Install dependencies:

```bash
pnpm i
```

Compile and run:

```bash
pnpm start
```
