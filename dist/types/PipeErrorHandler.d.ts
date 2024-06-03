/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Camel K Pipe ErrorHandler. See https://camel.apache.org/camel-k/latest/pipe-step.html#_error_handler for more details.
 */
export type PipeErrorHandler = {
  none?: unknown;
  log?: unknown;
  sink?: unknown;
} & (NoPipeErrorHandler | LogPipeErrorHandler | SinkPipeErrorHandler);

export interface NoPipeErrorHandler {
  none: {
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface LogPipeErrorHandler {
  log: {
    parameters?: {
      /**
       * Sets the maximum redeliveries x = redeliver at most x times 0 = no redeliveries -1 = redeliver forever
       */
      maximumRedeliveries?: number;
      /**
       * Sets the maximum delay between redelivery
       */
      redeliveryDelay?: number;
      [k: string]: string;
    };
  };
  [k: string]: unknown;
}
export interface SinkPipeErrorHandler {
  sink: {
    endpoint?: {
      ref?: {
        kind: string;
        apiVersion: string;
        name: string;
      };
      properties?: {
        message?: string;
        additionalProperties?: string;
        [k: string]: unknown;
      };
    };
    parameters?: {
      /**
       * Sets the maximum redeliveries x = redeliver at most x times 0 = no redeliveries -1 = redeliver forever
       */
      maximumRedeliveries?: number;
      /**
       * Sets the maximum delay between redelivery
       */
      redeliveryDelay?: number;
      [k: string]: string;
    };
  };
  [k: string]: unknown;
}
