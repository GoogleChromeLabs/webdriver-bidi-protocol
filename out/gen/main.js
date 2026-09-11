'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.Input =
  exports.Log =
  exports.Script =
  exports.Network =
  exports.Emulation =
  exports.BrowsingContext =
  exports.Session =
  exports.ErrorCode =
    void 0;
exports.ErrorCode = {
  InvalidArgument: 'invalid argument',
  InvalidSelector: 'invalid selector',
  InvalidSessionId: 'invalid session id',
  InvalidWebExtension: 'invalid web extension',
  MoveTargetOutOfBounds: 'move target out of bounds',
  NoSuchAlert: 'no such alert',
  NoSuchNetworkCollector: 'no such network collector',
  NoSuchElement: 'no such element',
  NoSuchFrame: 'no such frame',
  NoSuchHandle: 'no such handle',
  NoSuchHistoryEntry: 'no such history entry',
  NoSuchIntercept: 'no such intercept',
  NoSuchNetworkData: 'no such network data',
  NoSuchNode: 'no such node',
  NoSuchRequest: 'no such request',
  NoSuchScreencast: 'no such screencast',
  NoSuchScript: 'no such script',
  NoSuchStoragePartition: 'no such storage partition',
  NoSuchUserContext: 'no such user context',
  NoSuchWebExtension: 'no such web extension',
  SessionNotCreated: 'session not created',
  UnableToCaptureScreen: 'unable to capture screen',
  UnableToCloseBrowser: 'unable to close browser',
  UnableToSetCookie: 'unable to set cookie',
  UnableToSetFileInput: 'unable to set file input',
  UnavailableNetworkData: 'unavailable network data',
  UnderspecifiedStoragePartition: 'underspecified storage partition',
  UnknownCommand: 'unknown command',
  UnknownError: 'unknown error',
  UnsupportedOperation: 'unsupported operation',
};
var Session;
(function (Session) {
  Session.UserPromptHandlerType = {
    Accept: 'accept',
    Dismiss: 'dismiss',
    Ignore: 'ignore',
  };
})(Session || (exports.Session = Session = {}));
var BrowsingContext;
(function (BrowsingContext) {
  BrowsingContext.ReadinessState = {
    None: 'none',
    Interactive: 'interactive',
    Complete: 'complete',
  };
})(BrowsingContext || (exports.BrowsingContext = BrowsingContext = {}));
(function (BrowsingContext) {
  BrowsingContext.UserPromptType = {
    Alert: 'alert',
    Beforeunload: 'beforeunload',
    Confirm: 'confirm',
    Prompt: 'prompt',
  };
})(BrowsingContext || (exports.BrowsingContext = BrowsingContext = {}));
(function (BrowsingContext) {
  BrowsingContext.CreateType = {Tab: 'tab', Window: 'window'};
})(BrowsingContext || (exports.BrowsingContext = BrowsingContext = {}));
var Emulation;
(function (Emulation) {
  Emulation.ForcedColorsModeTheme = {Light: 'light', Dark: 'dark'};
})(Emulation || (exports.Emulation = Emulation = {}));
(function (Emulation) {
  Emulation.ScreenOrientationNatural = {
    Portrait: 'portrait',
    Landscape: 'landscape',
  };
})(Emulation || (exports.Emulation = Emulation = {}));
(function (Emulation) {
  Emulation.ScreenOrientationType = {
    PortraitPrimary: 'portrait-primary',
    PortraitSecondary: 'portrait-secondary',
    LandscapePrimary: 'landscape-primary',
    LandscapeSecondary: 'landscape-secondary',
  };
})(Emulation || (exports.Emulation = Emulation = {}));
var Network;
(function (Network) {
  Network.SameSite = {
    Strict: 'strict',
    Lax: 'lax',
    None: 'none',
    Default: 'default',
  };
})(Network || (exports.Network = Network = {}));
(function (Network) {
  Network.DataType = {Request: 'request', Response: 'response'};
})(Network || (exports.Network = Network = {}));
(function (Network) {
  Network.InterceptPhase = {
    BeforeRequestSent: 'beforeRequestSent',
    ResponseStarted: 'responseStarted',
    AuthRequired: 'authRequired',
  };
})(Network || (exports.Network = Network = {}));
var Script;
(function (Script) {
  Script.RealmType = {
    Window: 'window',
    DedicatedWorker: 'dedicated-worker',
    SharedWorker: 'shared-worker',
    ServiceWorker: 'service-worker',
    Worker: 'worker',
    PaintWorklet: 'paint-worklet',
    AudioWorklet: 'audio-worklet',
    Worklet: 'worklet',
  };
})(Script || (exports.Script = Script = {}));
(function (Script) {
  Script.ResultOwnership = {Root: 'root', None: 'none'};
})(Script || (exports.Script = Script = {}));
var Log;
(function (Log) {
  Log.Level = {Debug: 'debug', Info: 'info', Warn: 'warn', Error: 'error'};
})(Log || (exports.Log = Log = {}));
var Input;
(function (Input) {
  Input.PointerType = {Mouse: 'mouse', Pen: 'pen', Touch: 'touch'};
})(Input || (exports.Input = Input = {}));
