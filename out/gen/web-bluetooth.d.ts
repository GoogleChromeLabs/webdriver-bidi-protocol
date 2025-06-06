export declare namespace Bluetooth {
  type BluetoothUuid = string;
}
export declare namespace Bluetooth {
  type BluetoothManufacturerData = {
    key: number;
    data: string;
  };
}
export declare namespace Bluetooth {
  type CharacteristicProperties = {
    broadcast?: boolean;
    read?: boolean;
    writeWithoutResponse?: boolean;
    write?: boolean;
    notify?: boolean;
    indicate?: boolean;
    authenticatedSignedWrites?: boolean;
    extendedProperties?: boolean;
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
    uuids?: [...Bluetooth.BluetoothUuid[]];
    appearance?: number;
    manufacturerData?: [...Bluetooth.BluetoothManufacturerData[]];
  };
}
export type BluetoothCommand =
  | Bluetooth.HandleRequestDevicePrompt
  | Bluetooth.SimulateAdapter
  | Bluetooth.DisableSimulation
  | Bluetooth.SimulatePreconnectedPeripheral
  | Bluetooth.SimulateAdvertisement
  | Bluetooth.SimulateGattConnectionResponse
  | Bluetooth.SimulateGattDisconnection
  | Bluetooth.SimulateService
  | Bluetooth.SimulateCharacteristic
  | Bluetooth.SimulateCharacteristicResponse
  | Bluetooth.SimulateDescriptor
  | Bluetooth.SimulateDescriptorResponse
  | Record<string, never>;
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
    knownServiceUuids: [...Bluetooth.BluetoothUuid[]];
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
  type SimulateGattConnectionResponse = {
    method: 'bluetooth.simulateGattConnectionResponse';
    params: Bluetooth.SimulateGattConnectionResponseParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateGattConnectionResponseParameters = {
    context: string;
    address: string;
    code: number;
  };
}
export declare namespace Bluetooth {
  type SimulateGattDisconnection = {
    method: 'bluetooth.simulateGattDisconnection';
    params: Bluetooth.SimulateGattDisconnectionParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateGattDisconnectionParameters = {
    context: string;
    address: string;
  };
}
export declare namespace Bluetooth {
  type SimulateService = {
    method: 'bluetooth.simulateService';
    params: Bluetooth.SimulateServiceParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateServiceParameters = {
    context: string;
    address: string;
    uuid: Bluetooth.BluetoothUuid;
    type: 'add' | 'remove';
  };
}
export declare namespace Bluetooth {
  type SimulateCharacteristic = {
    method: 'bluetooth.simulateCharacteristic';
    params: Bluetooth.SimulateCharacteristicParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateCharacteristicParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    characteristicProperties?: Bluetooth.CharacteristicProperties;
    type: 'add' | 'remove';
  };
}
export declare namespace Bluetooth {
  type SimulateCharacteristicResponse = {
    method: 'bluetooth.simulateCharacteristicResponse';
    params: Bluetooth.SimulateCharacteristicResponseParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateCharacteristicResponseParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    type:
      | 'read'
      | 'write'
      | 'subscribe-to-notifications'
      | 'unsubscribe-from-notifications';
    code: number;
    data?: [...number[]];
  };
}
export declare namespace Bluetooth {
  type SimulateDescriptor = {
    method: 'bluetooth.simulateDescriptor';
    params: Bluetooth.SimulateDescriptorParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateDescriptorParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    descriptorUuid: Bluetooth.BluetoothUuid;
    type: 'add' | 'remove';
  };
}
export declare namespace Bluetooth {
  type SimulateDescriptorResponse = {
    method: 'bluetooth.simulateDescriptorResponse';
    params: Bluetooth.SimulateDescriptorResponseParameters;
  };
}
export declare namespace Bluetooth {
  type SimulateDescriptorResponseParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    descriptorUuid: Bluetooth.BluetoothUuid;
    type: 'read' | 'write';
    code: number;
    data?: [...number[]];
  };
}
export type BluetoothEvent =
  | Bluetooth.RequestDevicePromptUpdated
  | Bluetooth.GattConnectionAttempted;
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
export declare namespace Bluetooth {
  type GattConnectionAttempted = {
    method: 'bluetooth.gattConnectionAttempted';
    params: Bluetooth.GattConnectionAttemptedParameters;
  };
}
export declare namespace Bluetooth {
  type GattConnectionAttemptedParameters = {
    context: string;
    address: string;
  };
}
export declare namespace Bluetooth {
  type CharacteristicEventGenerated = {
    method: 'bluetooth.characteristicEventGenerated';
    params: Bluetooth.CharacteristicEventGeneratedParameters;
  };
}
export declare namespace Bluetooth {
  type CharacteristicEventGeneratedParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    type:
      | 'read'
      | 'write-with-response'
      | 'write-without-response'
      | 'subscribe-to-notifications'
      | 'unsubscribe-from-notifications';
    data?: [...number[]];
  };
}
export declare namespace Bluetooth {
  type DescriptorEventGenerated = {
    method: 'bluetooth.descriptorEventGenerated';
    params: Bluetooth.DescriptorEventGeneratedParameters;
  };
}
export declare namespace Bluetooth {
  type DescriptorEventGeneratedParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    descriptorUuid: Bluetooth.BluetoothUuid;
    type: 'read' | 'write';
    data?: [...number[]];
  };
}
