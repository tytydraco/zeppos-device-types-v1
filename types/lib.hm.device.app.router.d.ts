declare namespace HmWearableProgram {
  namespace DeviceSide {
    namespace AppRouter {
      interface IHmAppStartParams {
        appid: number
      }

      interface IHmAppGoToParams {
        file: string
        params: string
      }

      interface IHmAppGestureEvent {
        UP: number
        DOWN: number
        LEFT: number
        RIGHT: number
      }

      interface IHmAppKey {
        BACK: number
        SELECT: number
        HOME: number
        UP: number
        DOWN: number
        SHORTCUT: number
      }
      
      interface IHmAppAction {
        CLICK: number
        LONG_PRESS: number
        DOUBLE_CLICK: number
        RELEASE: number
        PRESS: number
      }

      interface IHmAppPackageInfo {
        appId: number
        appName: string
        appType: string
        version: object
        icon: string
        vender: string
        venderId: string
        cover: Array<string>
        description: string
      }

      interface IHmAppFunction {
        startApp(params: IHmAppStartParams): void
        gotoPage(params: IHmAppGoToParams): void
        reloadPage(option: { url: string, param?: string }): void
        setLayerY(offset: number): void
        getLayerY(): number
        gotoHome(): void
        exit(): void
        goBack(): void
        setScreenKeep(option: boolean): void
        packageInfo(): IHmAppPackageInfo

        registerGestureEvent(callback: (event: number) => boolean): void
        unregisterGestureEvent(): void

        alarmNew(option: { appId: number, url?: string, date?: number, delay?: number, param?: string }): number
        alarmCancel(alarmId: number): void

        registerKeyEvent(callback: (key: number, action: number) => boolean): void
        unregisterKeyEvent(): void

        registerSpinEvent(callback: (key: number, degree: number) => boolean): void
        unregisterSpinEvent(): void

        gesture: IHmAppGestureEvent
        key: IHmAppKey
        action: IHmAppAction
      }

      type Dictionary<T> = { [key: string]: T }
      interface Location {
        path: string
        // query?: Dictionary<string | (string | null)[] | null | undefined>
        params?: Dictionary<string>
      }

      interface IRouter {
        push: (location: Location) => void
        replace: (location: Location) => void
        go: () => void
      }
    }
  }
}

declare let hmApp: HmWearableProgram.DeviceSide.AppRouter.IHmAppFunction
