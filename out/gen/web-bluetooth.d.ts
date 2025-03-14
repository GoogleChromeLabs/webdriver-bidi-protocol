export declare namespace Bluetooth {
  type BluetoothServiceUuid = string;
}
export declare namespace Bluetooth {
  type BluetoothManufacturerData = {
    key: number;
    data: string;
  };
}
export declare namespace Bluetooth {
  type RequestDevice = string;
}
export declare namespace Bluetooth {
  type RequestDeviceInfo = {
    id: Bluetooth.RequestDevice;
    name: string | null;
  };
}
export declare namespace Bluetooth {
  type RequestDevicePrompt = string;
}
export declare namespace Bluetooth {
  type ScanRecord = {
    name?: string;
    uuids?: [...Bluetooth.BluetoothServiceUuid[]];
    appearance?: number;
    manufacturerData?: [...Bluetooth.BluetoothManufacturerData[]];
  };
}
export declare namespace Bluetooth {
  type HandleRequestDevicePrompt = {
    method: 'bluetooth.handleRequestDevicePrompt';
    params: Bluetooth.HandleRequestDevicePromptParameters;
  };
}
export declare namespace Bluetooth {
  type HandleRequestDevicePromptParameters = {
    context: string;
    prompt: Bluetooth.RequestDevicePrompt;
  } & (
    | Bluetooth.HandleRequestDevicePromptAcceptParameters
    | Bluetooth.HandleRequestDevicePromptCancelParameters
  );
}
export declare namespace Bluetooth {
  type HandleRequestDevicePromptAcceptParameters = {
    accept: true;
    device: Bluetooth.RequestDevice;
  };
}
export declare namespace Bluetooth {
  type HandleRequestDevicePromptCancelParameters = {
    accept: false;
  };
}
export declare namespace Bluetooth {
  type SimulateAdapter = {
    method: 'bluetooth.simulateAdapter';
    params: Bluetooth.SimulateAdapterParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateAdapterParameters = {
    context: string;
    leSupported?: boolean;
    state: 'absent' | 'powered-off' | 'powered-on';
  };
}
export declare namespace Bluetooth {
  type DisableSimulation = {
    method: 'bluetooth.disableSimulation';
    params: Bluetooth.DisableSimulationParameters;
  };
}
export declare namespace Bluetooth {
  type DisableSimulationParameters = {
    context: string;
  };
}
export declare namespace Bluetooth {
  type SimulatePreconnectedPeripheral = {
    method: 'bluetooth.simulatePreconnectedPeripheral';
    params: Bluetooth.SimulatePreconnectedPeripheralParameters;
  };
}
export declare namespace Bluetooth {
  type SimulatePreconnectedPeripheralParameters = {
    context: string;
    address: string;
    name: string;
    manufacturerData: [...Bluetooth.BluetoothManufacturerData[]];
    knownServiceUuids: [...Bluetooth.BluetoothServiceUuid[]];
  };
}
export declare namespace Bluetooth {
  type SimulateAdvertisement = {
    method: 'bluetooth.simulateAdvertisement';
    params: Bluetooth.SimulateAdvertisementParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateAdvertisementParameters = {
    context: string;
    scanEntry: Bluetooth.SimulateAdvertisementScanEntryParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateAdvertisementScanEntryParameters = {
    deviceAddress: string;
    rssi: number;
    scanRecord: Bluetooth.ScanRecord;
  };
}
export declare namespace Bluetooth {
  type RequestDevicePromptUpdated = {
    method: 'bluetooth.requestDevicePromptUpdated';
    params: Bluetooth.RequestDevicePromptUpdatedParameters;
  };
}
export declare namespace Bluetooth {
  type RequestDevicePromptUpdatedParameters = {
    context: string;
    prompt: Bluetooth.RequestDevicePrompt;
    devices: [...Bluetooth.RequestDeviceInfo[]];
  };
}
