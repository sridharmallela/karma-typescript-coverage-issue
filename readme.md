# KARMA TYPESCRIPT COVERAGE ISSUE

## How to reproduce the issue

* Clone or Download this project and then install dependencies `npm install`, this might take few minutes.

* Run `npm test`, will not throw coverage error

```log
  > karma start "./karma.conf.ts"


  START:
  12 05 2020 19:34:55.075:INFO [compiler.karma-typescript]: Compiling project using Typescript 3.9.2
  12 05 2020 19:34:55.588:INFO [compiler.karma-typescript]: Compiled 2 files in 504 ms.
  12 05 2020 19:34:56.199:INFO [bundler.karma-typescript]: Bundled imports for 2 file(s) in 110 ms.
  12 05 2020 19:34:56.228:INFO [karma-server]: Karma v4.3.0 server started at http://0.0.0.0:9876/
  12 05 2020 19:34:56.228:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
  12 05 2020 19:34:56.231:INFO [launcher]: Starting browser ChromeHeadless
  12 05 2020 19:34:56.670:INFO [HeadlessChrome 81.0.4044 (Mac OS X 10.15.4)]: Connected on socket UWK-6WVOsE8twSQEAAAA with id 705797
    Multiplication Tests ---
      ✔ Remainder of two numbers
      ✔ Multiplying two numbers
      ✔ Divide two numbers
      ✔ Subtracting two numbers
      ✔ Adding two numbers
  SUMMARY:
  ✔ 5 tests completed
  12 05 2020 19:30:06.743:ERROR [threshold.karma-typescript]: Chrome Headless 81.0.4044.138 (Mac OS 10.15.4): Expected 100% coverage for functions, got 83.33% (global)
  12 05 2020 19:30:06.743:ERROR [threshold.karma-typescript]: Chrome Headless 81.0.4044.138 (Mac OS 10.15.4): Expected 100% coverage for lines, got 66.67% (global)
  12 05 2020 19:30:06.743:ERROR [threshold.karma-typescript]: Chrome Headless 81.0.4044.138 (Mac OS 10.15.4): Expected 100% coverage for statements, got 66.67% (global)
  ---------------|---------|----------|---------|---------|-------------------
  File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
  ---------------|---------|----------|---------|---------|-------------------
  All files      |   66.67 |      100 |   83.33 |   66.67 |
   calculator.ts |   66.67 |      100 |   83.33 |   66.67 | 25-27
  ---------------|---------|----------|---------|---------|-------------------
```

* Run `npm i --no-save karma-typescript@4.1.1`  and then run `npm test` which will throw error

```log
  > karma start "./karma.conf.ts"


  START:
  12 05 2020 19:34:55.075:INFO [compiler.karma-typescript]: Compiling project using Typescript 3.9.2
  12 05 2020 19:34:55.588:INFO [compiler.karma-typescript]: Compiled 2 files in 504 ms.
  12 05 2020 19:34:56.199:INFO [bundler.karma-typescript]: Bundled imports for 2 file(s) in 110 ms.
  12 05 2020 19:34:56.228:INFO [karma-server]: Karma v4.3.0 server started at http://0.0.0.0:9876/
  12 05 2020 19:34:56.228:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
  12 05 2020 19:34:56.231:INFO [launcher]: Starting browser ChromeHeadless
  12 05 2020 19:34:56.670:INFO [HeadlessChrome 81.0.4044 (Mac OS X 10.15.4)]: Connected on socket UWK-6WVOsE8twSQEAAAA with id 705797
    Multiplication Tests ---
      ✔ Remainder of two numbers
      ✔ Multiplying two numbers
      ✔ Divide two numbers
      ✔ Subtracting two numbers
      ✔ Adding two numbers
  12 05 2020 19:34:56.801:ERROR [threshold.karma-typescript]: HeadlessChrome 81.0.4044 (Mac OS X 10.15.4): Expected 100% coverage for functions, got 83.33% (global)
  12 05 2020 19:34:56.801:ERROR [threshold.karma-typescript]: HeadlessChrome 81.0.4044 (Mac OS X 10.15.4): Expected 100% coverage for lines, got 66.67% (global)
  12 05 2020 19:34:56.801:ERROR [threshold.karma-typescript]: HeadlessChrome 81.0.4044 (Mac OS X 10.15.4): Expected 100% coverage for statements, got 66.67% (global)
  ----------------|----------|----------|----------|----------|----------------|
  File            |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
  ----------------|----------|----------|----------|----------|----------------|
   client/        |    66.67 |      100 |    83.33 |    66.67 |                |
    calculator.ts |    66.67 |      100 |    83.33 |    66.67 |       25,26,27 |
  ----------------|----------|----------|----------|----------|----------------|
  All files       |    66.67 |      100 |    83.33 |    66.67 |                |
  ----------------|----------|----------|----------|----------|----------------|


  Finished in 0.003 secs / 0.003 secs @ 19:34:56 GMT-0500 (Central Daylight Time)

  SUMMARY:
  ✔ 5 tests completed
  npm ERR! code ELIFECYCLE
  npm ERR! errno 1
  npm ERR! karma-typescript-coverage-issue@1.0.0 test-unit: `karma start "./karma.conf.ts"`
  npm ERR! Exit status 1
  npm ERR!
  npm ERR! Failed at the karma-typescript-coverage-issue@1.0.0 test-unit script.
  npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```
