import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3374e089ea6a44c495b5e10138372f0e@o4504258403958784.ingest.sentry.io/4505571928506368",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
