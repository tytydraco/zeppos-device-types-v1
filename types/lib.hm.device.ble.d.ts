declare namespace HmWearableProgram {
  namespace DeviceSide {
    namespace IHmBle {
      interface IHmBleFunction {
        createConnect(callback: (index?: number, data?: object, size?: number) => void): void
        disConnect(): void
        send(data?: object, size?: number): void
        connectStatus(): boolean
        addListener(callback: (status: boolean) => void): void
        removeListener(): void
      }
    }
  }
}

declare let hmBle: HmWearableProgram.DeviceSide.IHmBle.IHmBleFunction
