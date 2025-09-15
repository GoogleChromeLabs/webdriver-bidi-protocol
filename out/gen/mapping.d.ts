import type * as Bidi from './main.ts';
import type * as BidiPermissions from './permissions.ts';
import type * as BidiBluetooth from './web-bluetooth.ts';
export interface CommandMapping {
  'bluetooth.disableSimulation': {
    params: BidiBluetooth.Bluetooth.DisableSimulationParameters;
    returnType: BidiBluetooth.Bluetooth.DisableSimulationParameters;
  };
  'bluetooth.handleRequestDevicePrompt': {
    params: BidiBluetooth.Bluetooth.HandleRequestDevicePromptParameters;
    returnType: BidiBluetooth.Bluetooth.HandleRequestDevicePromptParameters;
  };
  'bluetooth.simulateAdapter': {
    params: BidiBluetooth.Bluetooth.SimulateAdapterParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateAdapterParameters;
  };
  'bluetooth.simulateAdvertisement': {
    params: BidiBluetooth.Bluetooth.SimulateAdvertisementParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateAdvertisementParameters;
  };
  'bluetooth.simulateCharacteristic': {
    params: BidiBluetooth.Bluetooth.SimulateCharacteristicParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateCharacteristicParameters;
  };
  'bluetooth.simulateCharacteristicResponse': {
    params: BidiBluetooth.Bluetooth.SimulateCharacteristicResponseParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateCharacteristicResponseParameters;
  };
  'bluetooth.simulateDescriptor': {
    params: BidiBluetooth.Bluetooth.SimulateDescriptorParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateDescriptorParameters;
  };
  'bluetooth.simulateDescriptorResponse': {
    params: BidiBluetooth.Bluetooth.SimulateDescriptorResponseParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateDescriptorResponseParameters;
  };
  'bluetooth.simulateGattConnectionResponse': {
    params: BidiBluetooth.Bluetooth.SimulateGattConnectionResponseParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateGattConnectionResponseParameters;
  };
  'bluetooth.simulateGattDisconnection': {
    params: BidiBluetooth.Bluetooth.SimulateGattDisconnectionParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateGattDisconnectionParameters;
  };
  'bluetooth.simulatePreconnectedPeripheral': {
    params: BidiBluetooth.Bluetooth.SimulatePreconnectedPeripheralParameters;
    returnType: BidiBluetooth.Bluetooth.SimulatePreconnectedPeripheralParameters;
  };
  'bluetooth.simulateService': {
    params: BidiBluetooth.Bluetooth.SimulateServiceParameters;
    returnType: BidiBluetooth.Bluetooth.SimulateServiceParameters;
  };
  'browser.close': {
    params: Bidi.Extensible;
    returnType: Bidi.Extensible;
  };
  'browser.createUserContext': {
    params: Bidi.Browser.CreateUserContextParameters;
    returnType: Bidi.Browser.CreateUserContextParameters;
  };
  'browser.getClientWindows': {
    params: Bidi.Extensible;
    returnType: Bidi.Extensible;
  };
  'browser.getUserContexts': {
    params: Bidi.Extensible;
    returnType: Bidi.Extensible;
  };
  'browser.removeUserContext': {
    params: Bidi.Browser.RemoveUserContextParameters;
    returnType: Bidi.Browser.RemoveUserContextParameters;
  };
  'browser.setClientWindowState': {
    params: Bidi.Browser.SetClientWindowStateParameters;
    returnType: Bidi.Browser.SetClientWindowStateParameters;
  };
  'browsingContext.activate': {
    params: Bidi.BrowsingContext.ActivateParameters;
    returnType: Bidi.BrowsingContext.ActivateParameters;
  };
  'browsingContext.captureScreenshot': {
    params: Bidi.BrowsingContext.CaptureScreenshotParameters;
    returnType: Bidi.BrowsingContext.CaptureScreenshotParameters;
  };
  'browsingContext.close': {
    params: Bidi.BrowsingContext.CloseParameters;
    returnType: Bidi.BrowsingContext.CloseParameters;
  };
  'browsingContext.create': {
    params: Bidi.BrowsingContext.CreateParameters;
    returnType: Bidi.BrowsingContext.CreateParameters;
  };
  'browsingContext.getTree': {
    params: Bidi.BrowsingContext.GetTreeParameters;
    returnType: Bidi.BrowsingContext.GetTreeParameters;
  };
  'browsingContext.handleUserPrompt': {
    params: Bidi.BrowsingContext.HandleUserPromptParameters;
    returnType: Bidi.BrowsingContext.HandleUserPromptParameters;
  };
  'browsingContext.locateNodes': {
    params: Bidi.BrowsingContext.LocateNodesParameters;
    returnType: Bidi.BrowsingContext.LocateNodesParameters;
  };
  'browsingContext.navigate': {
    params: Bidi.BrowsingContext.NavigateParameters;
    returnType: Bidi.BrowsingContext.NavigateParameters;
  };
  'browsingContext.print': {
    params: Bidi.BrowsingContext.PrintParameters;
    returnType: Bidi.BrowsingContext.PrintParameters;
  };
  'browsingContext.reload': {
    params: Bidi.BrowsingContext.ReloadParameters;
    returnType: Bidi.BrowsingContext.ReloadParameters;
  };
  'browsingContext.setViewport': {
    params: Bidi.BrowsingContext.SetViewportParameters;
    returnType: Bidi.BrowsingContext.SetViewportParameters;
  };
  'browsingContext.traverseHistory': {
    params: Bidi.BrowsingContext.TraverseHistoryParameters;
    returnType: Bidi.BrowsingContext.TraverseHistoryParameters;
  };
  'emulation.setForcedColorsModeThemeOverride': {
    params: Bidi.Emulation.SetForcedColorsModeThemeOverrideParameters;
    returnType: Bidi.Emulation.SetForcedColorsModeThemeOverrideParameters;
  };
  'emulation.setGeolocationOverride': {
    params: Bidi.Emulation.SetGeolocationOverrideParameters;
    returnType: Bidi.Emulation.SetGeolocationOverrideParameters;
  };
  'emulation.setLocaleOverride': {
    params: Bidi.Emulation.SetLocaleOverrideParameters;
    returnType: Bidi.Emulation.SetLocaleOverrideParameters;
  };
  'emulation.setScreenOrientationOverride': {
    params: Bidi.Emulation.SetScreenOrientationOverrideParameters;
    returnType: Bidi.Emulation.SetScreenOrientationOverrideParameters;
  };
  'emulation.setScriptingEnabled': {
    params: Bidi.Emulation.SetScriptingEnabledParameters;
    returnType: Bidi.Emulation.SetScriptingEnabledParameters;
  };
  'emulation.setTimezoneOverride': {
    params: Bidi.Emulation.SetTimezoneOverrideParameters;
    returnType: Bidi.Emulation.SetTimezoneOverrideParameters;
  };
  'emulation.setUserAgentOverride': {
    params: Bidi.Emulation.SetUserAgentOverrideParameters;
    returnType: Bidi.Emulation.SetUserAgentOverrideParameters;
  };
  'input.performActions': {
    params: Bidi.Input.PerformActionsParameters;
    returnType: Bidi.Input.PerformActionsParameters;
  };
  'input.releaseActions': {
    params: Bidi.Input.ReleaseActionsParameters;
    returnType: Bidi.Input.ReleaseActionsParameters;
  };
  'input.setFiles': {
    params: Bidi.Input.SetFilesParameters;
    returnType: Bidi.Input.SetFilesParameters;
  };
  'network.addDataCollector': {
    params: Bidi.Network.AddDataCollectorParameters;
    returnType: Bidi.Network.AddDataCollectorParameters;
  };
  'network.addIntercept': {
    params: Bidi.Network.AddInterceptParameters;
    returnType: Bidi.Network.AddInterceptParameters;
  };
  'network.continueRequest': {
    params: Bidi.Network.ContinueRequestParameters;
    returnType: Bidi.Network.ContinueRequestParameters;
  };
  'network.continueResponse': {
    params: Bidi.Network.ContinueResponseParameters;
    returnType: Bidi.Network.ContinueResponseParameters;
  };
  'network.continueWithAuth': {
    params: Bidi.Network.ContinueWithAuthParameters;
    returnType: Bidi.Network.ContinueWithAuthParameters;
  };
  'network.disownData': {
    params: Bidi.Network.DisownDataParameters;
    returnType: Bidi.Network.DisownDataParameters;
  };
  'network.failRequest': {
    params: Bidi.Network.FailRequestParameters;
    returnType: Bidi.Network.FailRequestParameters;
  };
  'network.getData': {
    params: Bidi.Network.GetDataParameters;
    returnType: Bidi.Network.GetDataParameters;
  };
  'network.provideResponse': {
    params: Bidi.Network.ProvideResponseParameters;
    returnType: Bidi.Network.ProvideResponseParameters;
  };
  'network.removeDataCollector': {
    params: Bidi.Network.RemoveDataCollectorParameters;
    returnType: Bidi.Network.RemoveDataCollectorParameters;
  };
  'network.removeIntercept': {
    params: Bidi.Network.RemoveInterceptParameters;
    returnType: Bidi.Network.RemoveInterceptParameters;
  };
  'network.setCacheBehavior': {
    params: Bidi.Network.SetCacheBehaviorParameters;
    returnType: Bidi.Network.SetCacheBehaviorParameters;
  };
  'network.setExtraHeaders': {
    params: Bidi.Network.SetExtraHeadersParameters;
    returnType: Bidi.Network.SetExtraHeadersParameters;
  };
  'permissions.setPermission': {
    params: BidiPermissions.Permissions.SetPermissionParameters;
    returnType: BidiPermissions.Permissions.SetPermissionParameters;
  };
  'script.addPreloadScript': {
    params: Bidi.Script.AddPreloadScriptParameters;
    returnType: Bidi.Script.AddPreloadScriptParameters;
  };
  'script.callFunction': {
    params: Bidi.Script.CallFunctionParameters;
    returnType: Bidi.Script.CallFunctionParameters;
  };
  'script.disown': {
    params: Bidi.Script.DisownParameters;
    returnType: Bidi.Script.DisownParameters;
  };
  'script.evaluate': {
    params: Bidi.Script.EvaluateParameters;
    returnType: Bidi.Script.EvaluateParameters;
  };
  'script.getRealms': {
    params: Bidi.Script.GetRealmsParameters;
    returnType: Bidi.Script.GetRealmsParameters;
  };
  'script.removePreloadScript': {
    params: Bidi.Script.RemovePreloadScriptParameters;
    returnType: Bidi.Script.RemovePreloadScriptParameters;
  };
  'session.end': {
    params: Bidi.Extensible;
    returnType: Bidi.Extensible;
  };
  'session.new': {
    params: Bidi.Session.NewParameters;
    returnType: Bidi.Session.NewParameters;
  };
  'session.status': {
    params: Bidi.Extensible;
    returnType: Bidi.Extensible;
  };
  'session.subscribe': {
    params: Bidi.Session.SubscriptionRequest;
    returnType: Bidi.Session.SubscriptionRequest;
  };
  'session.unsubscribe': {
    params: Bidi.Session.UnsubscribeParameters;
    returnType: Bidi.Session.UnsubscribeParameters;
  };
  'storage.deleteCookies': {
    params: Bidi.Storage.DeleteCookiesParameters;
    returnType: Bidi.Storage.DeleteCookiesParameters;
  };
  'storage.getCookies': {
    params: Bidi.Storage.GetCookiesParameters;
    returnType: Bidi.Storage.GetCookiesParameters;
  };
  'storage.setCookie': {
    params: Bidi.Storage.SetCookieParameters;
    returnType: Bidi.Storage.SetCookieParameters;
  };
  'webExtension.install': {
    params: Bidi.WebExtension.InstallParameters;
    returnType: Bidi.WebExtension.InstallParameters;
  };
  'webExtension.uninstall': {
    params: Bidi.WebExtension.UninstallParameters;
    returnType: Bidi.WebExtension.UninstallParameters;
  };
}
