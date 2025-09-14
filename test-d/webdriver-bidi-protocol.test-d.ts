/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {Event, Command, CommandMapping} from '..';

function sendCommand(command: Command) {}
function handleEvent(event: Event) {}
function sendCommandMultipleArgs<T extends keyof CommandMapping>(
  method: T,
  params: CommandMapping[T]['params'],
): {result: CommandMapping[T]['returnType']} {
  throw new Error('Not implemented');
}

sendCommand({
  id: 1,
  method: 'browser.close',
  params: {},
});

sendCommandMultipleArgs('browser.close', {});

sendCommand({
  id: 1,
  method: 'browsingContext.print',
  params: {
    context: '',
  },
});

sendCommandMultipleArgs('browsingContext.print', {context: ''});

handleEvent({
  type: 'event',
  method: 'browsingContext.contextCreated',
  params: {
    children: [],
    context: '',
    url: '',
    userContext: '',
    originalOpener: null,
    clientWindow: '',
  },
});

sendCommandMultipleArgs('bluetooth.simulateAdapter', {
  context: '',
  state: 'powered-on',
});

handleEvent({
  type: 'event',
  method: 'bluetooth.requestDevicePromptUpdated',
  params: {
    context: '',
    prompt: '',
    devices: [],
  },
});
