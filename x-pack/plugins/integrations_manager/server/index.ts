/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { ServerPluginInitializerContext } from '../common/types';
import { Plugin } from './plugin';

export function plugin(initializerContext: ServerPluginInitializerContext) {
  return new Plugin(initializerContext);
}
