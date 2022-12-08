declare namespace HmWearableProgram {
  namespace DeviceSide {
    namespace HmSensor {
      interface IHmSensorType {
        TIME: number
        BATTERY: number
        STEP: number
        CALORIE: number
        HEART: number
        PAI: number
        DISTANCE: number
        STAND: number
        WEATHER: number
        FAT_BURRING: number
        SPO2: number
        BODY_TEMP: number
        STRESS: number
        VIBRATE: number
        WEAR: number
        WORLD_CLOCK: number
        SLEEP: number
        MUSIC: number

        /* --- Undocumented --- */
        ACTIVITY: number
        SUN: number
        WIND: number
        PRESSURE: number
      }

      interface IHmSensorEventType {
        UPDATE: number
        CHANGE: number
      }

      type HmSensorEventType = number

      interface IHmSensorOptions {
        [k: string]: any
        frequency?: number
        current?: number
        target?: number
      }

      interface HmSensorCallback {
        (args: any): void
      }

      interface IHmSensorWidget {
        name: string
        addEventListener(type: HmSensorEventType, callback: HmSensorCallback): void
        removeEventListener(type: HmSensorEventType, callback: HmSensorCallback): void
        start(): void
        stop(): void

        /* Allow any function call */
        [x: string]: any
      }

      type HmSensorWidgetType = number

      interface IHmSensorFunction {
        createSensor(id: HmSensorWidgetType): IHmSensorWidget

        /* --- Undocumented --- */
        createSensor(id: HmSensorWidgetType, options: IHmSensorOptions): IHmSensorWidget
        deleteSensor(sensor: IHmSensorWidget): void

        /* --- Undocumented --- */
        appContext: DeviceSide.AppContext.HmAppContext
        moduleContext: DeviceSide.AppContext.HmAppModule
      }

      interface IHmSensor extends IHmSensorFunction {
        id: IHmSensorType
        event: IHmSensorEventType
      }
    }
  }
}

declare let hmSensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensor
