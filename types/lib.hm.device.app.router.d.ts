declare namespace HmWearableProgram {
  namespace DeviceSide {
    namespace AppRouter {
      interface IHmAppStartParams {
        appid: number
        url: string
        native?: boolean
        param?: string
      }

      interface IHmAppGoToParams {
        url: string
        param?: string
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
        name: string
        type: string
        version: { code: number, name: string }
        icon: string
        appId: number
        description: string
        vender: string
        pages: Array<string>
      }

      interface IHmAppFunction {
        startApp(params: IHmAppStartParams): void
        gotoPage(params: IHmAppGoToParams): void
        reloadPage(option: IHmAppGoToParams): void
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
