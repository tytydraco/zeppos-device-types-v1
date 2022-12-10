declare namespace HmWearableProgram {
  namespace DeviceSide {
    namespace FS {
      interface IHmFsFlagType {
        O_RDONLY: number
        O_WRONLY: number
        O_RDWR: number
        O_APPEND: number
        O_CREAT: number
        O_EXCL: number
        O_TRUNC: number
        SEEK_SET: number
      }

      interface IHmFsStat {
        size: number
        mtime: number
      }

      interface IHmFsFunction {
        stat_asset(path: string): [IHmFsStat, number]
        stat(path: string): [IHmFsStat, number]
        open_asset(path: string, flag: number): number
        open: (name: string, flag: number) => number
        close: (fd: number) => number
        seek: (fd: number, pos: number, whence: number) => void
        read: (fd: number, pos: number, buff: ArrayBuffer, len: number | undefined) => number
        write: (fd: number, pos: number, buff: ArrayBuffer, len: number | undefined) => number
        remove: (name: string) => number
        rename: (name: string, new_name: string) => number

        SysProSetBool(key: string, val: boolean): number
        SysProGetBool(key: string): boolean
        SysProSetInt(key: string, val: number): number
        SysProGetInt(key: string): number
        SysProSetInt64(key: string, val: number): number
        SysProGetInt64(key: string): number
        SysProSetDouble(key: string, val: number): number
        SysProGetDouble(key: string): number
        SysProSetChars(key: string, val: string): number
        SysProGetChars(key: string): string

        /* --- Undocumented --- */
        mkdir: (name: string) => number
        readdir: (name: string) => [IHmFsStat, number]
      }

      interface IHmFs extends IHmFsFlagType, IHmFsFunction { }
    }
  }
}
declare let hmFS: HmWearableProgram.DeviceSide.FS.IHmFs
