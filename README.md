> // TODO: Delete this section

# Gorila - NestJS Template

This template offers a boilerplate to quick start new projects with a set of good practices commonly found in back-end application.

## Features

- Customized [framework](https://bitbucket.org/gorilainvest/nestjs-core/src/master/) based on [NestJS](https://nestjs.com/), adding extended functionalities like improved http, logging, metrics and documentation.
- Static code syntax and styling analysis based on [ESLint](https://eslint.org/) configured with [eslint-config-gorila-ts](https://bitbucket.org/gorilainvest/eslint-config-gorila-ts/src/master/) plugin.
- Testing framework [Jest](https://jestjs.io/) configured for Typescript.
- Git hooks based on [Husky](https://typicode.github.io/husky/#/) to apply [commitlint](https://commitlint.js.org/#/) and [lint-staged](https://www.npmjs.com/package/lint-staged?activeTab=readme).
- Live reload based on [ts-node-dev](https://www.npmjs.com/package/ts-node-dev).
- [Dockerfile](./Dockerfile) template including TypeScript transpilation.


## Usage

These steps will guide you on how to setup a new BitBucket repository based on this template with working CI/CD.

1\. Open [BitBucket Import](https://bitbucket.org/repo/import) tool and fill it according to the following:

**Old Repository**
- URL: https://bitbucket.org/gorilainvest/template-nestjs/src/master/
- Requires Authorization: Yes
- Username: Your BitBucket username
- Password: Your BitBucket password

**New Repository**
- Workspace: GorilaInvest
- Project: Your squad project, preferably configured with default reviewers and branching model
- Repository: Your new repository name

2\. Click **Import Repository**, wait for procedures to complete and navigate to your new repository.

3\. At **Settings** > **Workflow** > **Branching model**, click **Enable inherited settings**.

4\. At **Settings** > **Workflow** > **Branch permissions**, click **Add a branch permission**, and configure as following:

- Select branch: By type > Development, ensure your squad project is correctly configured
- Write access: Nobody
- Merge via pull requests: Everybody
- Merge checks: Select all, and increase **Check for at least 1 approval** to **2**
- Repeat these step for branch type Production

5\. At **Settings** > **Pipelines** > **Settings**, click **Enable Pipelines**.

6\. At **Settings** > **Pipelines** > **Repository variables**, add the following:

- AWS_REGION: us-east-2
- BITBUCKET_USERNAME: gorila_deployer
- BITBUCKET_APP_PASSWORD: [Ask your leader]
- NPM_TOKEN: [Ask your leader]

7\. At **Settings** > **Pipelines** > **Deployments**, erase existing examples and add the following environments:

**test**
- AWS_ACCESS_KEY_ID: AKIA2CTPCBPL2F4JIX7Q
- AWS_SECRET_ACCESS_KEY: [Ask your leader]

**development**
- AWS_ACCESS_KEY_ID: AKIA2CTPCBPL2F4JIX7Q
- AWS_SECRET_ACCESS_KEY: [Ask your leader]

**production**
- AWS_ACCESS_KEY_ID: AKIAWJE4GWFKQA43HGOR
- AWS_SECRET_ACCESS_KEY: [Ask your leader]

Repository related configurations are now done!

To continue with code related adjustments simply search for `TODO` keywords within the new repository for further instructions.

By removing this setup section, further topics of this `README.md` can already be used as your initial template.

---

> // TODO: Add application name and description

# {{applicationName}}

{{applicationDescription}}

## Local Setup

1\. Copy `.env.schema` as `.env` and adjust environment variables according to instructions provided on itself.

2\. Install `pnpm` package manager:

```sh
npm i -g pnpm
```

3\. Install dependencies, Gorila private registry must be authenticated either globally or at `.env`:

**.env**

```sh
NPM_TOKEN='GORILA_NPM_READ_TOKEN'
```

```sh
npm i -g dotenv-cli
dotenv pnpm i
```

**Globally**

```sh
npm config set //registry.npmjs.org/:_authToken=$GORILA_NPM_READ_TOKEN
pnpm i
```

The advantage of using `.env` methodology is being able to locally boot a containerized version of your application without further configurations.

4\. If everything was properly set up, you may run the application either with live reload or containerized:

**Live Reload**

```sh
pnpm dev
```

**Containerized**

```sh
pnpm docker
```

5\. To ensure application is running correctly navigate to API Documentation page:

http://127.0.0.1:8080/docs


## Contributing

Below some guidelines when contributing to this repository.


### Philosophy

Domain organization and code patterns follows the same philosophy of the underlying [NestJS](https://docs.nestjs.com/) framework.

Details regarding wrapper functionalities provided by [@gorila-bot/nestjs-core](https://bitbucket.org/gorilainvest/nestjs-core/src/master/) are available at its [documentation](https://bitbucket.org/gorilainvest/nestjs-core/src/master/), as well at this [video overview](https://gorila.atlassian.net/wiki/spaces/BEC/pages/2418999314/NestJS+Core+-+Overview).

It is strongly recommended to be familiarized with both prior to contributing.


### Testing

Tests are based on [Jest](https://jestjs.io/) framework and its typings for development should be automatically recognized after installing project dependencies. 

Test files are recognized for processing through the `*.spec.ts` pattern. By default they should be created at the same directory of its implementation counterpart.

To run tests execute the built-in script:

```sh
pnpm test
```

### Debugging

Application is configured to expose Node.js debug socket when being boot through live reload.

Which means you may attach a debugger at target port in order to enable code breakpoints.

Configuration is already done fo VSCode users which may simply start debugging by running:

```sh
pnpm dev
[press F5]
```


### Linting

This repository is configured with Gorila linting rules available [eslint-config-gorila-ts](https://bitbucket.org/gorilainvest/eslint-config-gorila-ts/src/master/).

It is recommended to configure your IDE to automatically apply auto-fixes. Details on how to do so for IntelliJ, VSCode, Sublime Text and Atom are available at the following article:

[Even faster code formatting using ESLint](https://medium.com/@netczuk/even-faster-code-formatting-using-eslint-22b80d061461)

You may use a built-in NPM script to run a full lint check and print execution report:

```sh
pnpm lint
```


### Committing

Commit messages follows conventions of [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional), which in short accepts one of its `types` followed by a scope (optional) and a description.

**Types**

```sh
build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
```

**Examples**

```sh
feat(user): add user manipulation
fix: JSON parsing exception
chore(auth): change member accessibility
ci: fix wrong build definition
```
