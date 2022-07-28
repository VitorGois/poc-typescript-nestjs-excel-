import { AppEnvironment, AppModule, ConfigModule, LogSeverity } from '@gorila-bot/nestjs-core';

const nodeEnv: AppEnvironment = ConfigModule.get('NODE_ENV');

const isCloud = [
  AppEnvironment.DEVELOPMENT,
  AppEnvironment.STAGING,
  AppEnvironment.PRODUCTION,
].includes(nodeEnv);

/**
 * // TODO: Configure variables
 * - appName: Application name
 * - appPath: Path prefix used at cluster
 * - appTitle: Title at generated documentation
 * - appDescription: Description at generated documentation.
 */
export const app = AppModule.boot({
  job: '{{appName}}',
  proxyPrefix: /* istanbul ignore next */ isCloud ? '{{appPath}}/v1' : '',
  logs: {
    filterRequestBody: isCloud,
    filterResponseBody: isCloud,
  },
  console: {
    severity: /* istanbul ignore next */ isCloud ? LogSeverity.HTTP : LogSeverity.TRACE,
  },
  docs: {
    title: '{{appTitle}}',
    description: '{{appDescription}}',
  },
});
