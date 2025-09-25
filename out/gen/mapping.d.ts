import type * as Bidi from './main.js';
import type * as BidiPermissions from './permissions.js';
import type * as BidiBluetooth from './web-bluetooth.js';
export interface Commands {
  'bluetooth.disableSimulation': {
    params: BidiBluetooth.Bluetooth.DisableSimulationParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.handleRequestDevicePrompt': {
    params: BidiBluetooth.Bluetooth.HandleRequestDevicePromptParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateAdapter': {
    params: BidiBluetooth.Bluetooth.SimulateAdapterParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateAdvertisement': {
    params: BidiBluetooth.Bluetooth.SimulateAdvertisementParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateCharacteristic': {
    params: BidiBluetooth.Bluetooth.SimulateCharacteristicParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateCharacteristicResponse': {
    params: BidiBluetooth.Bluetooth.SimulateCharacteristicResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateDescriptor': {
    params: BidiBluetooth.Bluetooth.SimulateDescriptorParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateDescriptorResponse': {
    params: BidiBluetooth.Bluetooth.SimulateDescriptorResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateGattConnectionResponse': {
    params: BidiBluetooth.Bluetooth.SimulateGattConnectionResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateGattDisconnection': {
    params: BidiBluetooth.Bluetooth.SimulateGattDisconnectionParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulatePreconnectedPeripheral': {
    params: BidiBluetooth.Bluetooth.SimulatePreconnectedPeripheralParameters;
    returnType: Bidi.EmptyResult;
  };
  'bluetooth.simulateService': {
    params: BidiBluetooth.Bluetooth.SimulateServiceParameters;
    returnType: Bidi.EmptyResult;
  };
  'browser.close': {
    params: Bidi.Extensible;
    returnType: Bidi.EmptyResult;
  };
  'browser.createUserContext': {
    params: Bidi.Browser.CreateUserContextParameters;
    returnType: Bidi.Browser.CreateUserContextResult;
  };
  'browser.getClientWindows': {
    params: Bidi.Extensible;
    returnType: Bidi.Browser.GetClientWindowsResult;
  };
  'browser.getUserContexts': {
    params: Bidi.Extensible;
    returnType: Bidi.Browser.GetUserContextsResult;
  };
  'browser.removeUserContext': {
    params: Bidi.Browser.RemoveUserContextParameters;
    returnType: Bidi.EmptyResult;
  };
  'browser.setClientWindowState': {
    params: Bidi.Browser.SetClientWindowStateParameters;
    returnType: Bidi.EmptyResult;
  };
  'browser.setDownloadBehavior': {
    params: Bidi.Browser.SetDownloadBehaviorParameters;
    returnType: Bidi.EmptyResult;
  };
  'browsingContext.activate': {
    params: Bidi.BrowsingContext.ActivateParameters;
    returnType: Bidi.EmptyResult;
  };
  'browsingContext.captureScreenshot': {
    params: Bidi.BrowsingContext.CaptureScreenshotParameters;
    returnType: Bidi.BrowsingContext.CaptureScreenshotResult;
  };
  'browsingContext.close': {
    params: Bidi.BrowsingContext.CloseParameters;
    returnType: Bidi.EmptyResult;
  };
  'browsingContext.create': {
    params: Bidi.BrowsingContext.CreateParameters;
    returnType: Bidi.BrowsingContext.CreateResult;
  };
  'browsingContext.getTree': {
    params: Bidi.BrowsingContext.GetTreeParameters;
    returnType: Bidi.BrowsingContext.GetTreeResult;
  };
  'browsingContext.handleUserPrompt': {
    params: Bidi.BrowsingContext.HandleUserPromptParameters;
    returnType: Bidi.EmptyResult;
  };
  'browsingContext.locateNodes': {
    params: Bidi.BrowsingContext.LocateNodesParameters;
    returnType: Bidi.BrowsingContext.LocateNodesResult;
  };
  'browsingContext.navigate': {
    params: Bidi.BrowsingContext.NavigateParameters;
    returnType: Bidi.BrowsingContext.NavigateResult;
  };
  'browsingContext.print': {
    params: Bidi.BrowsingContext.PrintParameters;
    returnType: Bidi.BrowsingContext.PrintResult;
  };
  'browsingContext.reload': {
    params: Bidi.BrowsingContext.ReloadParameters;
    returnType: Bidi.EmptyResult;
  };
  'browsingContext.setViewport': {
    params: Bidi.BrowsingContext.SetViewportParameters;
    returnType: Bidi.EmptyResult;
  };
  'browsingContext.traverseHistory': {
    params: Bidi.BrowsingContext.TraverseHistoryParameters;
    returnType: Bidi.BrowsingContext.TraverseHistoryResult;
  };
  'emulation.setForcedColorsModeThemeOverride': {
    params: Bidi.Emulation.SetForcedColorsModeThemeOverrideParameters;
    returnType: Bidi.EmptyResult;
  };
  'emulation.setGeolocationOverride': {
    params: Bidi.Emulation.SetGeolocationOverrideParameters;
    returnType: Bidi.EmptyResult;
  };
  'emulation.setLocaleOverride': {
    params: Bidi.Emulation.SetLocaleOverrideParameters;
    returnType: Bidi.EmptyResult;
  };
  'emulation.setScreenOrientationOverride': {
    params: Bidi.Emulation.SetScreenOrientationOverrideParameters;
    returnType: Bidi.EmptyResult;
  };
  'emulation.setScriptingEnabled': {
    params: Bidi.Emulation.SetScriptingEnabledParameters;
    returnType: Bidi.EmptyResult;
  };
  'emulation.setTimezoneOverride': {
    params: Bidi.Emulation.SetTimezoneOverrideParameters;
    returnType: Bidi.EmptyResult;
  };
  'emulation.setUserAgentOverride': {
    params: Bidi.Emulation.SetUserAgentOverrideParameters;
    returnType: Bidi.EmptyResult;
  };
  'input.performActions': {
    params: Bidi.Input.PerformActionsParameters;
    returnType: Bidi.EmptyResult;
  };
  'input.releaseActions': {
    params: Bidi.Input.ReleaseActionsParameters;
    returnType: Bidi.EmptyResult;
  };
  'input.setFiles': {
    params: Bidi.Input.SetFilesParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.addDataCollector': {
    params: Bidi.Network.AddDataCollectorParameters;
    returnType: Bidi.Network.AddDataCollectorResult;
  };
  'network.addIntercept': {
    params: Bidi.Network.AddInterceptParameters;
    returnType: Bidi.Network.AddInterceptResult;
  };
  'network.continueRequest': {
    params: Bidi.Network.ContinueRequestParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.continueResponse': {
    params: Bidi.Network.ContinueResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.continueWithAuth': {
    params: Bidi.Network.ContinueWithAuthParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.disownData': {
    params: Bidi.Network.DisownDataParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.failRequest': {
    params: Bidi.Network.FailRequestParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.getData': {
    params: Bidi.Network.GetDataParameters;
    returnType: Bidi.Network.GetDataResult;
  };
  'network.provideResponse': {
    params: Bidi.Network.ProvideResponseParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.removeDataCollector': {
    params: Bidi.Network.RemoveDataCollectorParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.removeIntercept': {
    params: Bidi.Network.RemoveInterceptParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.setCacheBehavior': {
    params: Bidi.Network.SetCacheBehaviorParameters;
    returnType: Bidi.EmptyResult;
  };
  'network.setExtraHeaders': {
    params: Bidi.Network.SetExtraHeadersParameters;
    returnType: Bidi.EmptyResult;
  };
  'permissions.setPermission': {
    params: BidiPermissions.Permissions.SetPermissionParameters;
    returnType: Bidi.EmptyResult;
  };
  'script.addPreloadScript': {
    params: Bidi.Script.AddPreloadScriptParameters;
    returnType: Bidi.Script.AddPreloadScriptResult;
  };
  'script.callFunction': {
    params: Bidi.Script.CallFunctionParameters;
    returnType: Bidi.Script.CallFunctionResult;
  };
  'script.disown': {
    params: Bidi.Script.DisownParameters;
    returnType: Bidi.EmptyResult;
  };
  'script.evaluate': {
    params: Bidi.Script.EvaluateParameters;
    returnType: Bidi.Script.EvaluateResult;
  };
  'script.getRealms': {
    params: Bidi.Script.GetRealmsParameters;
    returnType: Bidi.Script.GetRealmsResult;
  };
  'script.removePreloadScript': {
    params: Bidi.Script.RemovePreloadScriptParameters;
    returnType: Bidi.EmptyResult;
  };
  'session.end': {
    params: Bidi.Extensible;
    returnType: Bidi.EmptyResult;
  };
  'session.new': {
    params: Bidi.Session.NewParameters;
    returnType: Bidi.Session.NewResult;
  };
  'session.status': {
    params: Bidi.Extensible;
    returnType: Bidi.Session.StatusResult;
  };
  'session.subscribe': {
    params: Bidi.Session.SubscriptionRequest;
    returnType: Bidi.Session.SubscriptionRequest;
  };
  'session.unsubscribe': {
    params: Bidi.Session.UnsubscribeParameters;
    returnType: Bidi.EmptyResult;
  };
  'storage.deleteCookies': {
    params: Bidi.Storage.DeleteCookiesParameters;
    returnType: Bidi.Storage.DeleteCookiesResult;
  };
  'storage.getCookies': {
    params: Bidi.Storage.GetCookiesParameters;
    returnType: Bidi.Storage.GetCookiesResult;
  };
  'storage.setCookie': {
    params: Bidi.Storage.SetCookieParameters;
    returnType: Bidi.Storage.SetCookieResult;
  };
  'webExtension.install': {
    params: Bidi.WebExtension.InstallParameters;
    returnType: Bidi.WebExtension.InstallResult;
  };
  'webExtension.uninstall': {
    params: Bidi.WebExtension.UninstallParameters;
    returnType: Bidi.EmptyResult;
  };
}
