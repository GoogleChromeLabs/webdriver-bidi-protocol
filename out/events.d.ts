/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Bidi from './gen/main.js';
import * as BidiBluetooth from './gen/web-bluetooth.js';
type ExternalSpecEvent<T> = {
    type: 'event';
} & T & Bidi.Extensible;
export type Event = Bidi.Event | ExternalSpecEvent<BidiBluetooth.BluetoothEvent>;
export {};
