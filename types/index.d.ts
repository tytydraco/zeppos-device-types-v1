/// <reference path="./lib.hm.device.app.global.d.ts" />

/// <reference path="./lib.hm.device.app.context.d.ts" />
/// <reference path="./lib.hm.device.app.app.d.ts" />
/// <reference path="./lib.hm.device.app.app-widget.d.ts" />
/// <reference path="./lib.hm.device.app.secondary-widget.d.ts" />
/// <reference path="./lib.hm.device.app.page.d.ts" />
/// <reference path="./lib.hm.device.app.router.d.ts" />
/// <reference path="./lib.hm.device.app.watch-face.d.ts" />
/// <reference path="./lib.hm.device.app.watch-widget.d.ts" />

/// <reference path="./lib.hm.device.ui.api.d.ts" />
/// <reference path="./lib.hm.device.ui.event.d.ts" />
/// <reference path="./lib.hm.device.ui.widget.d.ts" />
/// <reference path="./lib.hm.device.ui.selector.d.ts" />
/// <reference path="./lib.hm.device.ui.color.d.ts" />

/// <reference path="./lib.hm.device.ble.d.ts" />
/// <reference path="./lib.hm.device.fs.d.ts" />
/// <reference path="./lib.hm.device.timer.d.ts" />

/// <reference path="./lib.hm.device.sensor.api.d.ts" />
/// <reference path="./lib.hm.device.sensor.widget.d.ts" />

/// <reference path="./lib.hm.device.setting.d.ts" />
declare namespace HmWearableProgram {
  namespace DeviceSide {
    type IAnyObject = Record<string, any>
    type Optional<F> = F extends (arg: infer P) => infer R ? (arg?: P) => R : F
    type OptionalInterface<T> = { [K in keyof T]: Optional<T[K]> }
    type Id<T> = { [K in keyof T]: T[K] }
  }
}
