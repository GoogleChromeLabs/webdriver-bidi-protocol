export namespace Bluetooth {
  export type BluetoothServiceUuid = string;
}
export namespace Bluetooth {
  export type BluetoothManufacturerData = {
    key: number;
    data: string;
  };
}
export namespace Bluetooth {
  export type RequestDevice = string;
}
export namespace Bluetooth {
  export type RequestDeviceInfo = {
    id: Bluetooth.RequestDevice;
    name: string | null;
  };
}
export namespace Bluetooth {
  export type RequestDevicePrompt = string;
}
export namespace Bluetooth {
  export type ScanRecord = {
    name?: string;
    uuids?: [...Bluetooth.BluetoothServiceUuid[]];
    appearance?: number;
    manufacturerData?: [...Bluetooth.BluetoothManufacturerData[]];
  };
}
export namespace Bluetooth {
  export type HandleRequestDevicePrompt = {
    method: 'bluetooth.handleRequestDevicePrompt';
    params: Bluetooth.HandleRequestDevicePromptParameters;
  };
}
export namespace Bluetooth {
  export type HandleRequestDevicePromptParameters = {
    context: string;
    prompt: Bluetooth.RequestDevicePrompt;
  } & (
    | Bluetooth.HandleRequestDevicePromptAcceptParameters
    | Bluetooth.HandleRequestDevicePromptCancelParameters
  );
}
export namespace Bluetooth {
  export type HandleRequestDevicePromptAcceptParameters = {
    accept: true;
    device: Bluetooth.RequestDevice;
  };
}
export namespace Bluetooth {
  export type HandleRequestDevicePromptCancelParameters = {
    accept: false;
  };
}
export namespace Bluetooth {
  export type SimulateAdapter = {
    method: 'bluetooth.simulateAdapter';
    params: Bluetooth.SimulateAdapterParameters;
  };
}
export namespace Bluetooth {
  export type SimulateAdapterParameters = {
    context: string;
    leSupported?: boolean;
    state: 'absent' | 'powered-off' | 'powered-on';
  };
}
export namespace Bluetooth {
  export type DisableSimulation = {
    method: 'bluetooth.disableSimulation';
    params: Bluetooth.DisableSimulationParameters;
  };
}
export namespace Bluetooth {
  export type DisableSimulationParameters = {
    context: string;
  };
}
export namespace Bluetooth {
  export type SimulatePreconnectedPeripheral = {
    method: 'bluetooth.simulatePreconnectedPeripheral';
    params: Bluetooth.SimulatePreconnectedPeripheralParameters;
  };
}
export namespace Bluetooth {
  export type SimulatePreconnectedPeripheralParameters = {
    context: string;
    address: string;
    name: string;
    manufacturerData: [...Bluetooth.BluetoothManufacturerData[]];
    knownServiceUuids: [...Bluetooth.BluetoothServiceUuid[]];
  };
}
export namespace Bluetooth {
  export type SimulateAdvertisement = {
    method: 'bluetooth.simulateAdvertisement';
    params: Bluetooth.SimulateAdvertisementParameters;
  };
}
export namespace Bluetooth {
  export type SimulateAdvertisementParameters = {
    context: string;
    scanEntry: Bluetooth.SimulateAdvertisementScanEntryParameters;
  };
}
export namespace Bluetooth {
  export type SimulateAdvertisementScanEntryParameters = {
    deviceAddress: string;
    rssi: number;
    scanRecord: Bluetooth.ScanRecord;
  };
}
export namespace Bluetooth {
  export type RequestDevicePromptUpdated = {
    method: 'bluetooth.requestDevicePromptUpdated';
    params: Bluetooth.RequestDevicePromptUpdatedParameters;
  };
}
export namespace Bluetooth {
  export type RequestDevicePromptUpdatedParameters = {
    context: string;
    prompt: Bluetooth.RequestDevicePrompt;
    devices: [...Bluetooth.RequestDeviceInfo[]];
  };
}
