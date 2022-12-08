declare namespace HmWearableProgram {
  namespace DeviceSide {
    namespace Timer {
      interface IHmTimerFunction {
        createTimer(delay: number, repeat: number, callback: (option: any) => void, option: any): number
        stopTimer(timerId: number): void
      }
    }
  }
}
declare let timer: HmWearableProgram.DeviceSide.Timer.IHmTimerFunction
