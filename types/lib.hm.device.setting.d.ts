declare namespace HmWearableProgram {
  namespace DeviceSide {
    namespace HmSetting {
      interface IHmSettingDeviceInfo {
        width: number
        height: number
        screenShape: number
        deviceName: string
        keyNumber: number
        deviceSource: number
      }

      interface IHmSettingUserData {
        age: number
        height: number
        weight: number
        gender: number
        nickName: string
        region: string
      }

      interface IHmSettingDiskInfo {
        total: number
        free: number
        app: number
        watchface: number
        music: number
        system: number
      }

      interface IHmSettingScreenType {
        APP: number
        WATCHFACE: number
        SETTINGS: number
        AOD: number
      }

      interface IHmSetting {
        setScreenAutoBright(isAutoBright: boolean): number
        getScreenAutoBright(): boolean
        setBrightness(brightness: number): number
        getBrightness(): number
        setBrightScreen(brightTime: number): number
        setBrightScreenCancel(): number
        setScreenOff(): number
        getUserData(): IHmSettingUserData
        getMileageUnit(): number
        getLanguage(): number
        getDateFormat(): number
        getTimeFormat(): number
        getDiskInfo(): IHmSettingDiskInfo
        getDeviceInfo(): IHmSettingDeviceInfo
        getWeightTarget(): number
        getSleepTarget(): number
        getWeightUnit(): number
        getScreenType(): number

        screen_type: IHmSettingScreenType
      }
    }
  }
}

declare let hmSetting: HmWearableProgram.DeviceSide.HmSetting.IHmSetting
