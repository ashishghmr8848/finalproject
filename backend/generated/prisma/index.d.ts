
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AppointmentType
 * 
 */
export type AppointmentType = $Result.DefaultSelection<Prisma.$AppointmentTypePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model LocationAppointmentType
 * 
 */
export type LocationAppointmentType = $Result.DefaultSelection<Prisma.$LocationAppointmentTypePayload>
/**
 * Model SlotConfiguration
 * 
 */
export type SlotConfiguration = $Result.DefaultSelection<Prisma.$SlotConfigurationPayload>
/**
 * Model SpecialDate
 * 
 */
export type SpecialDate = $Result.DefaultSelection<Prisma.$SpecialDatePayload>
/**
 * Model BlockedSlot
 * 
 */
export type BlockedSlot = $Result.DefaultSelection<Prisma.$BlockedSlotPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Waitlist
 * 
 */
export type Waitlist = $Result.DefaultSelection<Prisma.$WaitlistPayload>
/**
 * Model EmailNotification
 * 
 */
export type EmailNotification = $Result.DefaultSelection<Prisma.$EmailNotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SpecialDateType: {
  HOLIDAY: 'HOLIDAY',
  CLOSURE: 'CLOSURE',
  MODIFIED_HOURS: 'MODIFIED_HOURS'
};

export type SpecialDateType = (typeof SpecialDateType)[keyof typeof SpecialDateType]


export const BookingStatus: {
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  NO_SHOW: 'NO_SHOW'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const CancelledBy: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type CancelledBy = (typeof CancelledBy)[keyof typeof CancelledBy]


export const WaitlistStatus: {
  WAITING: 'WAITING',
  NOTIFIED: 'NOTIFIED',
  BOOKED: 'BOOKED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type WaitlistStatus = (typeof WaitlistStatus)[keyof typeof WaitlistStatus]


export const EmailType: {
  BOOKING_CONFIRMATION: 'BOOKING_CONFIRMATION',
  CANCELLATION_CONFIRMATION: 'CANCELLATION_CONFIRMATION',
  WAITLIST_NOTIFICATION: 'WAITLIST_NOTIFICATION',
  REMINDER: 'REMINDER',
  SLOT_AVAILABLE: 'SLOT_AVAILABLE'
};

export type EmailType = (typeof EmailType)[keyof typeof EmailType]


export const EmailStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED',
  BOUNCED: 'BOUNCED'
};

export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SpecialDateType = $Enums.SpecialDateType

export const SpecialDateType: typeof $Enums.SpecialDateType

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type CancelledBy = $Enums.CancelledBy

export const CancelledBy: typeof $Enums.CancelledBy

export type WaitlistStatus = $Enums.WaitlistStatus

export const WaitlistStatus: typeof $Enums.WaitlistStatus

export type EmailType = $Enums.EmailType

export const EmailType: typeof $Enums.EmailType

export type EmailStatus = $Enums.EmailStatus

export const EmailStatus: typeof $Enums.EmailStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentType`: Exposes CRUD operations for the **AppointmentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentTypes
    * const appointmentTypes = await prisma.appointmentType.findMany()
    * ```
    */
  get appointmentType(): Prisma.AppointmentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locationAppointmentType`: Exposes CRUD operations for the **LocationAppointmentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LocationAppointmentTypes
    * const locationAppointmentTypes = await prisma.locationAppointmentType.findMany()
    * ```
    */
  get locationAppointmentType(): Prisma.LocationAppointmentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slotConfiguration`: Exposes CRUD operations for the **SlotConfiguration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlotConfigurations
    * const slotConfigurations = await prisma.slotConfiguration.findMany()
    * ```
    */
  get slotConfiguration(): Prisma.SlotConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialDate`: Exposes CRUD operations for the **SpecialDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialDates
    * const specialDates = await prisma.specialDate.findMany()
    * ```
    */
  get specialDate(): Prisma.SpecialDateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedSlot`: Exposes CRUD operations for the **BlockedSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedSlots
    * const blockedSlots = await prisma.blockedSlot.findMany()
    * ```
    */
  get blockedSlot(): Prisma.BlockedSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waitlist`: Exposes CRUD operations for the **Waitlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waitlists
    * const waitlists = await prisma.waitlist.findMany()
    * ```
    */
  get waitlist(): Prisma.WaitlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailNotification`: Exposes CRUD operations for the **EmailNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailNotifications
    * const emailNotifications = await prisma.emailNotification.findMany()
    * ```
    */
  get emailNotification(): Prisma.EmailNotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AppointmentType: 'AppointmentType',
    Location: 'Location',
    LocationAppointmentType: 'LocationAppointmentType',
    SlotConfiguration: 'SlotConfiguration',
    SpecialDate: 'SpecialDate',
    BlockedSlot: 'BlockedSlot',
    Booking: 'Booking',
    Waitlist: 'Waitlist',
    EmailNotification: 'EmailNotification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "appointmentType" | "location" | "locationAppointmentType" | "slotConfiguration" | "specialDate" | "blockedSlot" | "booking" | "waitlist" | "emailNotification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AppointmentType: {
        payload: Prisma.$AppointmentTypePayload<ExtArgs>
        fields: Prisma.AppointmentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>
          }
          findFirst: {
            args: Prisma.AppointmentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>
          }
          findMany: {
            args: Prisma.AppointmentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>[]
          }
          create: {
            args: Prisma.AppointmentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>
          }
          createMany: {
            args: Prisma.AppointmentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>[]
          }
          delete: {
            args: Prisma.AppointmentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>
          }
          update: {
            args: Prisma.AppointmentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>
          }
          deleteMany: {
            args: Prisma.AppointmentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>[]
          }
          upsert: {
            args: Prisma.AppointmentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentTypePayload>
          }
          aggregate: {
            args: Prisma.AppointmentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentType>
          }
          groupBy: {
            args: Prisma.AppointmentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentTypeCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      LocationAppointmentType: {
        payload: Prisma.$LocationAppointmentTypePayload<ExtArgs>
        fields: Prisma.LocationAppointmentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationAppointmentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationAppointmentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>
          }
          findFirst: {
            args: Prisma.LocationAppointmentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationAppointmentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>
          }
          findMany: {
            args: Prisma.LocationAppointmentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>[]
          }
          create: {
            args: Prisma.LocationAppointmentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>
          }
          createMany: {
            args: Prisma.LocationAppointmentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationAppointmentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>[]
          }
          delete: {
            args: Prisma.LocationAppointmentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>
          }
          update: {
            args: Prisma.LocationAppointmentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>
          }
          deleteMany: {
            args: Prisma.LocationAppointmentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationAppointmentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationAppointmentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>[]
          }
          upsert: {
            args: Prisma.LocationAppointmentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationAppointmentTypePayload>
          }
          aggregate: {
            args: Prisma.LocationAppointmentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocationAppointmentType>
          }
          groupBy: {
            args: Prisma.LocationAppointmentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationAppointmentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationAppointmentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<LocationAppointmentTypeCountAggregateOutputType> | number
          }
        }
      }
      SlotConfiguration: {
        payload: Prisma.$SlotConfigurationPayload<ExtArgs>
        fields: Prisma.SlotConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>
          }
          findFirst: {
            args: Prisma.SlotConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>
          }
          findMany: {
            args: Prisma.SlotConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>[]
          }
          create: {
            args: Prisma.SlotConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>
          }
          createMany: {
            args: Prisma.SlotConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>[]
          }
          delete: {
            args: Prisma.SlotConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>
          }
          update: {
            args: Prisma.SlotConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.SlotConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlotConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.SlotConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotConfigurationPayload>
          }
          aggregate: {
            args: Prisma.SlotConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlotConfiguration>
          }
          groupBy: {
            args: Prisma.SlotConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<SlotConfigurationCountAggregateOutputType> | number
          }
        }
      }
      SpecialDate: {
        payload: Prisma.$SpecialDatePayload<ExtArgs>
        fields: Prisma.SpecialDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>
          }
          findFirst: {
            args: Prisma.SpecialDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>
          }
          findMany: {
            args: Prisma.SpecialDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>[]
          }
          create: {
            args: Prisma.SpecialDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>
          }
          createMany: {
            args: Prisma.SpecialDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialDateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>[]
          }
          delete: {
            args: Prisma.SpecialDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>
          }
          update: {
            args: Prisma.SpecialDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>
          }
          deleteMany: {
            args: Prisma.SpecialDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialDateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>[]
          }
          upsert: {
            args: Prisma.SpecialDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialDatePayload>
          }
          aggregate: {
            args: Prisma.SpecialDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialDate>
          }
          groupBy: {
            args: Prisma.SpecialDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialDateCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialDateCountAggregateOutputType> | number
          }
        }
      }
      BlockedSlot: {
        payload: Prisma.$BlockedSlotPayload<ExtArgs>
        fields: Prisma.BlockedSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          findFirst: {
            args: Prisma.BlockedSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          findMany: {
            args: Prisma.BlockedSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>[]
          }
          create: {
            args: Prisma.BlockedSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          createMany: {
            args: Prisma.BlockedSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockedSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>[]
          }
          delete: {
            args: Prisma.BlockedSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          update: {
            args: Prisma.BlockedSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          deleteMany: {
            args: Prisma.BlockedSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockedSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>[]
          }
          upsert: {
            args: Prisma.BlockedSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedSlotPayload>
          }
          aggregate: {
            args: Prisma.BlockedSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedSlot>
          }
          groupBy: {
            args: Prisma.BlockedSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedSlotCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedSlotCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Waitlist: {
        payload: Prisma.$WaitlistPayload<ExtArgs>
        fields: Prisma.WaitlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaitlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaitlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          findFirst: {
            args: Prisma.WaitlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaitlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          findMany: {
            args: Prisma.WaitlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>[]
          }
          create: {
            args: Prisma.WaitlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          createMany: {
            args: Prisma.WaitlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaitlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>[]
          }
          delete: {
            args: Prisma.WaitlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          update: {
            args: Prisma.WaitlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          deleteMany: {
            args: Prisma.WaitlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaitlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaitlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>[]
          }
          upsert: {
            args: Prisma.WaitlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistPayload>
          }
          aggregate: {
            args: Prisma.WaitlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitlist>
          }
          groupBy: {
            args: Prisma.WaitlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaitlistCountArgs<ExtArgs>
            result: $Utils.Optional<WaitlistCountAggregateOutputType> | number
          }
        }
      }
      EmailNotification: {
        payload: Prisma.$EmailNotificationPayload<ExtArgs>
        fields: Prisma.EmailNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findFirst: {
            args: Prisma.EmailNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          findMany: {
            args: Prisma.EmailNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          create: {
            args: Prisma.EmailNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          createMany: {
            args: Prisma.EmailNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailNotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          delete: {
            args: Prisma.EmailNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          update: {
            args: Prisma.EmailNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailNotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailNotificationPayload>
          }
          aggregate: {
            args: Prisma.EmailNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailNotification>
          }
          groupBy: {
            args: Prisma.EmailNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailNotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    appointmentType?: AppointmentTypeOmit
    location?: LocationOmit
    locationAppointmentType?: LocationAppointmentTypeOmit
    slotConfiguration?: SlotConfigurationOmit
    specialDate?: SpecialDateOmit
    blockedSlot?: BlockedSlotOmit
    booking?: BookingOmit
    waitlist?: WaitlistOmit
    emailNotification?: EmailNotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    waitlist: number
    emailNotifications: number
    blockedSlots: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    waitlist?: boolean | UserCountOutputTypeCountWaitlistArgs
    emailNotifications?: boolean | UserCountOutputTypeCountEmailNotificationsArgs
    blockedSlots?: boolean | UserCountOutputTypeCountBlockedSlotsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWaitlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedSlotWhereInput
  }


  /**
   * Count Type AppointmentTypeCountOutputType
   */

  export type AppointmentTypeCountOutputType = {
    locationAppointmentTypes: number
    slotConfigurations: number
    bookings: number
    waitlist: number
    specialDates: number
    blockedSlots: number
  }

  export type AppointmentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationAppointmentTypes?: boolean | AppointmentTypeCountOutputTypeCountLocationAppointmentTypesArgs
    slotConfigurations?: boolean | AppointmentTypeCountOutputTypeCountSlotConfigurationsArgs
    bookings?: boolean | AppointmentTypeCountOutputTypeCountBookingsArgs
    waitlist?: boolean | AppointmentTypeCountOutputTypeCountWaitlistArgs
    specialDates?: boolean | AppointmentTypeCountOutputTypeCountSpecialDatesArgs
    blockedSlots?: boolean | AppointmentTypeCountOutputTypeCountBlockedSlotsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentTypeCountOutputType without action
   */
  export type AppointmentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentTypeCountOutputType
     */
    select?: AppointmentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentTypeCountOutputType without action
   */
  export type AppointmentTypeCountOutputTypeCountLocationAppointmentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAppointmentTypeWhereInput
  }

  /**
   * AppointmentTypeCountOutputType without action
   */
  export type AppointmentTypeCountOutputTypeCountSlotConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotConfigurationWhereInput
  }

  /**
   * AppointmentTypeCountOutputType without action
   */
  export type AppointmentTypeCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * AppointmentTypeCountOutputType without action
   */
  export type AppointmentTypeCountOutputTypeCountWaitlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitlistWhereInput
  }

  /**
   * AppointmentTypeCountOutputType without action
   */
  export type AppointmentTypeCountOutputTypeCountSpecialDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialDateWhereInput
  }

  /**
   * AppointmentTypeCountOutputType without action
   */
  export type AppointmentTypeCountOutputTypeCountBlockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedSlotWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    locationAppointmentTypes: number
    slotConfigurations: number
    bookings: number
    waitlist: number
    specialDates: number
    blockedSlots: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationAppointmentTypes?: boolean | LocationCountOutputTypeCountLocationAppointmentTypesArgs
    slotConfigurations?: boolean | LocationCountOutputTypeCountSlotConfigurationsArgs
    bookings?: boolean | LocationCountOutputTypeCountBookingsArgs
    waitlist?: boolean | LocationCountOutputTypeCountWaitlistArgs
    specialDates?: boolean | LocationCountOutputTypeCountSpecialDatesArgs
    blockedSlots?: boolean | LocationCountOutputTypeCountBlockedSlotsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountLocationAppointmentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAppointmentTypeWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountSlotConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotConfigurationWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountWaitlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitlistWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountSpecialDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialDateWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountBlockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedSlotWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    emailNotifications: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailNotifications?: boolean | BookingCountOutputTypeCountEmailNotificationsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountEmailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
  }


  /**
   * Count Type WaitlistCountOutputType
   */

  export type WaitlistCountOutputType = {
    emailNotifications: number
  }

  export type WaitlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailNotifications?: boolean | WaitlistCountOutputTypeCountEmailNotificationsArgs
  }

  // Custom InputTypes
  /**
   * WaitlistCountOutputType without action
   */
  export type WaitlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistCountOutputType
     */
    select?: WaitlistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WaitlistCountOutputType without action
   */
  export type WaitlistCountOutputTypeCountEmailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    dateOfBirth: Date | null
    driverLicenseNumber: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    dateOfBirth: Date | null
    driverLicenseNumber: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phoneNumber: number
    dateOfBirth: number
    driverLicenseNumber: number
    role: number
    isActive: number
    resetPasswordToken: number
    resetPasswordExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    dateOfBirth?: true
    driverLicenseNumber?: true
    role?: true
    isActive?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    dateOfBirth?: true
    driverLicenseNumber?: true
    role?: true
    isActive?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    dateOfBirth?: true
    driverLicenseNumber?: true
    role?: true
    isActive?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber: string | null
    dateOfBirth: Date | null
    driverLicenseNumber: string | null
    role: $Enums.Role
    isActive: boolean
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    driverLicenseNumber?: boolean
    role?: boolean
    isActive?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    waitlist?: boolean | User$waitlistArgs<ExtArgs>
    emailNotifications?: boolean | User$emailNotificationsArgs<ExtArgs>
    blockedSlots?: boolean | User$blockedSlotsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    driverLicenseNumber?: boolean
    role?: boolean
    isActive?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    driverLicenseNumber?: boolean
    role?: boolean
    isActive?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    driverLicenseNumber?: boolean
    role?: boolean
    isActive?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phoneNumber" | "dateOfBirth" | "driverLicenseNumber" | "role" | "isActive" | "resetPasswordToken" | "resetPasswordExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    waitlist?: boolean | User$waitlistArgs<ExtArgs>
    emailNotifications?: boolean | User$emailNotificationsArgs<ExtArgs>
    blockedSlots?: boolean | User$blockedSlotsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      waitlist: Prisma.$WaitlistPayload<ExtArgs>[]
      emailNotifications: Prisma.$EmailNotificationPayload<ExtArgs>[]
      blockedSlots: Prisma.$BlockedSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      phoneNumber: string | null
      dateOfBirth: Date | null
      driverLicenseNumber: string | null
      role: $Enums.Role
      isActive: boolean
      resetPasswordToken: string | null
      resetPasswordExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waitlist<T extends User$waitlistArgs<ExtArgs> = {}>(args?: Subset<T, User$waitlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emailNotifications<T extends User$emailNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedSlots<T extends User$blockedSlotsArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly driverLicenseNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpires: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.waitlist
   */
  export type User$waitlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    where?: WaitlistWhereInput
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    cursor?: WaitlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * User.emailNotifications
   */
  export type User$emailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    cursor?: EmailNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * User.blockedSlots
   */
  export type User$blockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    where?: BlockedSlotWhereInput
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    cursor?: BlockedSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentType
   */

  export type AggregateAppointmentType = {
    _count: AppointmentTypeCountAggregateOutputType | null
    _avg: AppointmentTypeAvgAggregateOutputType | null
    _sum: AppointmentTypeSumAggregateOutputType | null
    _min: AppointmentTypeMinAggregateOutputType | null
    _max: AppointmentTypeMaxAggregateOutputType | null
  }

  export type AppointmentTypeAvgAggregateOutputType = {
    durationMinutes: number | null
  }

  export type AppointmentTypeSumAggregateOutputType = {
    durationMinutes: number | null
  }

  export type AppointmentTypeMinAggregateOutputType = {
    id: string | null
    typeName: string | null
    description: string | null
    durationMinutes: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentTypeMaxAggregateOutputType = {
    id: string | null
    typeName: string | null
    description: string | null
    durationMinutes: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentTypeCountAggregateOutputType = {
    id: number
    typeName: number
    description: number
    durationMinutes: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentTypeAvgAggregateInputType = {
    durationMinutes?: true
  }

  export type AppointmentTypeSumAggregateInputType = {
    durationMinutes?: true
  }

  export type AppointmentTypeMinAggregateInputType = {
    id?: true
    typeName?: true
    description?: true
    durationMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentTypeMaxAggregateInputType = {
    id?: true
    typeName?: true
    description?: true
    durationMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentTypeCountAggregateInputType = {
    id?: true
    typeName?: true
    description?: true
    durationMinutes?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentType to aggregate.
     */
    where?: AppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentTypes to fetch.
     */
    orderBy?: AppointmentTypeOrderByWithRelationInput | AppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentTypes
    **/
    _count?: true | AppointmentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentTypeMaxAggregateInputType
  }

  export type GetAppointmentTypeAggregateType<T extends AppointmentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentType[P]>
      : GetScalarType<T[P], AggregateAppointmentType[P]>
  }




  export type AppointmentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentTypeWhereInput
    orderBy?: AppointmentTypeOrderByWithAggregationInput | AppointmentTypeOrderByWithAggregationInput[]
    by: AppointmentTypeScalarFieldEnum[] | AppointmentTypeScalarFieldEnum
    having?: AppointmentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentTypeCountAggregateInputType | true
    _avg?: AppointmentTypeAvgAggregateInputType
    _sum?: AppointmentTypeSumAggregateInputType
    _min?: AppointmentTypeMinAggregateInputType
    _max?: AppointmentTypeMaxAggregateInputType
  }

  export type AppointmentTypeGroupByOutputType = {
    id: string
    typeName: string
    description: string | null
    durationMinutes: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AppointmentTypeCountAggregateOutputType | null
    _avg: AppointmentTypeAvgAggregateOutputType | null
    _sum: AppointmentTypeSumAggregateOutputType | null
    _min: AppointmentTypeMinAggregateOutputType | null
    _max: AppointmentTypeMaxAggregateOutputType | null
  }

  type GetAppointmentTypeGroupByPayload<T extends AppointmentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentTypeGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
    description?: boolean
    durationMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationAppointmentTypes?: boolean | AppointmentType$locationAppointmentTypesArgs<ExtArgs>
    slotConfigurations?: boolean | AppointmentType$slotConfigurationsArgs<ExtArgs>
    bookings?: boolean | AppointmentType$bookingsArgs<ExtArgs>
    waitlist?: boolean | AppointmentType$waitlistArgs<ExtArgs>
    specialDates?: boolean | AppointmentType$specialDatesArgs<ExtArgs>
    blockedSlots?: boolean | AppointmentType$blockedSlotsArgs<ExtArgs>
    _count?: boolean | AppointmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentType"]>

  export type AppointmentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
    description?: boolean
    durationMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appointmentType"]>

  export type AppointmentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    typeName?: boolean
    description?: boolean
    durationMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appointmentType"]>

  export type AppointmentTypeSelectScalar = {
    id?: boolean
    typeName?: boolean
    description?: boolean
    durationMinutes?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "typeName" | "description" | "durationMinutes" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["appointmentType"]>
  export type AppointmentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationAppointmentTypes?: boolean | AppointmentType$locationAppointmentTypesArgs<ExtArgs>
    slotConfigurations?: boolean | AppointmentType$slotConfigurationsArgs<ExtArgs>
    bookings?: boolean | AppointmentType$bookingsArgs<ExtArgs>
    waitlist?: boolean | AppointmentType$waitlistArgs<ExtArgs>
    specialDates?: boolean | AppointmentType$specialDatesArgs<ExtArgs>
    blockedSlots?: boolean | AppointmentType$blockedSlotsArgs<ExtArgs>
    _count?: boolean | AppointmentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppointmentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppointmentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentType"
    objects: {
      locationAppointmentTypes: Prisma.$LocationAppointmentTypePayload<ExtArgs>[]
      slotConfigurations: Prisma.$SlotConfigurationPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      waitlist: Prisma.$WaitlistPayload<ExtArgs>[]
      specialDates: Prisma.$SpecialDatePayload<ExtArgs>[]
      blockedSlots: Prisma.$BlockedSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      typeName: string
      description: string | null
      durationMinutes: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointmentType"]>
    composites: {}
  }

  type AppointmentTypeGetPayload<S extends boolean | null | undefined | AppointmentTypeDefaultArgs> = $Result.GetResult<Prisma.$AppointmentTypePayload, S>

  type AppointmentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentTypeCountAggregateInputType | true
    }

  export interface AppointmentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentType'], meta: { name: 'AppointmentType' } }
    /**
     * Find zero or one AppointmentType that matches the filter.
     * @param {AppointmentTypeFindUniqueArgs} args - Arguments to find a AppointmentType
     * @example
     * // Get one AppointmentType
     * const appointmentType = await prisma.appointmentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentTypeFindUniqueArgs>(args: SelectSubset<T, AppointmentTypeFindUniqueArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentTypeFindUniqueOrThrowArgs} args - Arguments to find a AppointmentType
     * @example
     * // Get one AppointmentType
     * const appointmentType = await prisma.appointmentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentTypeFindFirstArgs} args - Arguments to find a AppointmentType
     * @example
     * // Get one AppointmentType
     * const appointmentType = await prisma.appointmentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentTypeFindFirstArgs>(args?: SelectSubset<T, AppointmentTypeFindFirstArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentTypeFindFirstOrThrowArgs} args - Arguments to find a AppointmentType
     * @example
     * // Get one AppointmentType
     * const appointmentType = await prisma.appointmentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentTypes
     * const appointmentTypes = await prisma.appointmentType.findMany()
     * 
     * // Get first 10 AppointmentTypes
     * const appointmentTypes = await prisma.appointmentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentTypeWithIdOnly = await prisma.appointmentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentTypeFindManyArgs>(args?: SelectSubset<T, AppointmentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentType.
     * @param {AppointmentTypeCreateArgs} args - Arguments to create a AppointmentType.
     * @example
     * // Create one AppointmentType
     * const AppointmentType = await prisma.appointmentType.create({
     *   data: {
     *     // ... data to create a AppointmentType
     *   }
     * })
     * 
     */
    create<T extends AppointmentTypeCreateArgs>(args: SelectSubset<T, AppointmentTypeCreateArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentTypes.
     * @param {AppointmentTypeCreateManyArgs} args - Arguments to create many AppointmentTypes.
     * @example
     * // Create many AppointmentTypes
     * const appointmentType = await prisma.appointmentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentTypeCreateManyArgs>(args?: SelectSubset<T, AppointmentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppointmentTypes and returns the data saved in the database.
     * @param {AppointmentTypeCreateManyAndReturnArgs} args - Arguments to create many AppointmentTypes.
     * @example
     * // Create many AppointmentTypes
     * const appointmentType = await prisma.appointmentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppointmentTypes and only return the `id`
     * const appointmentTypeWithIdOnly = await prisma.appointmentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppointmentType.
     * @param {AppointmentTypeDeleteArgs} args - Arguments to delete one AppointmentType.
     * @example
     * // Delete one AppointmentType
     * const AppointmentType = await prisma.appointmentType.delete({
     *   where: {
     *     // ... filter to delete one AppointmentType
     *   }
     * })
     * 
     */
    delete<T extends AppointmentTypeDeleteArgs>(args: SelectSubset<T, AppointmentTypeDeleteArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentType.
     * @param {AppointmentTypeUpdateArgs} args - Arguments to update one AppointmentType.
     * @example
     * // Update one AppointmentType
     * const appointmentType = await prisma.appointmentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentTypeUpdateArgs>(args: SelectSubset<T, AppointmentTypeUpdateArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentTypes.
     * @param {AppointmentTypeDeleteManyArgs} args - Arguments to filter AppointmentTypes to delete.
     * @example
     * // Delete a few AppointmentTypes
     * const { count } = await prisma.appointmentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentTypeDeleteManyArgs>(args?: SelectSubset<T, AppointmentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentTypes
     * const appointmentType = await prisma.appointmentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentTypeUpdateManyArgs>(args: SelectSubset<T, AppointmentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentTypes and returns the data updated in the database.
     * @param {AppointmentTypeUpdateManyAndReturnArgs} args - Arguments to update many AppointmentTypes.
     * @example
     * // Update many AppointmentTypes
     * const appointmentType = await prisma.appointmentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppointmentTypes and only return the `id`
     * const appointmentTypeWithIdOnly = await prisma.appointmentType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppointmentType.
     * @param {AppointmentTypeUpsertArgs} args - Arguments to update or create a AppointmentType.
     * @example
     * // Update or create a AppointmentType
     * const appointmentType = await prisma.appointmentType.upsert({
     *   create: {
     *     // ... data to create a AppointmentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentType we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentTypeUpsertArgs>(args: SelectSubset<T, AppointmentTypeUpsertArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentTypeCountArgs} args - Arguments to filter AppointmentTypes to count.
     * @example
     * // Count the number of AppointmentTypes
     * const count = await prisma.appointmentType.count({
     *   where: {
     *     // ... the filter for the AppointmentTypes we want to count
     *   }
     * })
    **/
    count<T extends AppointmentTypeCountArgs>(
      args?: Subset<T, AppointmentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentTypeAggregateArgs>(args: Subset<T, AppointmentTypeAggregateArgs>): Prisma.PrismaPromise<GetAppointmentTypeAggregateType<T>>

    /**
     * Group by AppointmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentTypeGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentType model
   */
  readonly fields: AppointmentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locationAppointmentTypes<T extends AppointmentType$locationAppointmentTypesArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentType$locationAppointmentTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slotConfigurations<T extends AppointmentType$slotConfigurationsArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentType$slotConfigurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends AppointmentType$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentType$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waitlist<T extends AppointmentType$waitlistArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentType$waitlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specialDates<T extends AppointmentType$specialDatesArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentType$specialDatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedSlots<T extends AppointmentType$blockedSlotsArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentType$blockedSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppointmentType model
   */
  interface AppointmentTypeFieldRefs {
    readonly id: FieldRef<"AppointmentType", 'String'>
    readonly typeName: FieldRef<"AppointmentType", 'String'>
    readonly description: FieldRef<"AppointmentType", 'String'>
    readonly durationMinutes: FieldRef<"AppointmentType", 'Int'>
    readonly isActive: FieldRef<"AppointmentType", 'Boolean'>
    readonly createdAt: FieldRef<"AppointmentType", 'DateTime'>
    readonly updatedAt: FieldRef<"AppointmentType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentType findUnique
   */
  export type AppointmentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentType to fetch.
     */
    where: AppointmentTypeWhereUniqueInput
  }

  /**
   * AppointmentType findUniqueOrThrow
   */
  export type AppointmentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentType to fetch.
     */
    where: AppointmentTypeWhereUniqueInput
  }

  /**
   * AppointmentType findFirst
   */
  export type AppointmentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentType to fetch.
     */
    where?: AppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentTypes to fetch.
     */
    orderBy?: AppointmentTypeOrderByWithRelationInput | AppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentTypes.
     */
    cursor?: AppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentTypes.
     */
    distinct?: AppointmentTypeScalarFieldEnum | AppointmentTypeScalarFieldEnum[]
  }

  /**
   * AppointmentType findFirstOrThrow
   */
  export type AppointmentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentType to fetch.
     */
    where?: AppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentTypes to fetch.
     */
    orderBy?: AppointmentTypeOrderByWithRelationInput | AppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentTypes.
     */
    cursor?: AppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentTypes.
     */
    distinct?: AppointmentTypeScalarFieldEnum | AppointmentTypeScalarFieldEnum[]
  }

  /**
   * AppointmentType findMany
   */
  export type AppointmentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentTypes to fetch.
     */
    where?: AppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentTypes to fetch.
     */
    orderBy?: AppointmentTypeOrderByWithRelationInput | AppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentTypes.
     */
    cursor?: AppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentTypes.
     */
    skip?: number
    distinct?: AppointmentTypeScalarFieldEnum | AppointmentTypeScalarFieldEnum[]
  }

  /**
   * AppointmentType create
   */
  export type AppointmentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentType.
     */
    data: XOR<AppointmentTypeCreateInput, AppointmentTypeUncheckedCreateInput>
  }

  /**
   * AppointmentType createMany
   */
  export type AppointmentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentTypes.
     */
    data: AppointmentTypeCreateManyInput | AppointmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentType createManyAndReturn
   */
  export type AppointmentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AppointmentTypes.
     */
    data: AppointmentTypeCreateManyInput | AppointmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentType update
   */
  export type AppointmentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentType.
     */
    data: XOR<AppointmentTypeUpdateInput, AppointmentTypeUncheckedUpdateInput>
    /**
     * Choose, which AppointmentType to update.
     */
    where: AppointmentTypeWhereUniqueInput
  }

  /**
   * AppointmentType updateMany
   */
  export type AppointmentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentTypes.
     */
    data: XOR<AppointmentTypeUpdateManyMutationInput, AppointmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentTypes to update
     */
    where?: AppointmentTypeWhereInput
    /**
     * Limit how many AppointmentTypes to update.
     */
    limit?: number
  }

  /**
   * AppointmentType updateManyAndReturn
   */
  export type AppointmentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * The data used to update AppointmentTypes.
     */
    data: XOR<AppointmentTypeUpdateManyMutationInput, AppointmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentTypes to update
     */
    where?: AppointmentTypeWhereInput
    /**
     * Limit how many AppointmentTypes to update.
     */
    limit?: number
  }

  /**
   * AppointmentType upsert
   */
  export type AppointmentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentType to update in case it exists.
     */
    where: AppointmentTypeWhereUniqueInput
    /**
     * In case the AppointmentType found by the `where` argument doesn't exist, create a new AppointmentType with this data.
     */
    create: XOR<AppointmentTypeCreateInput, AppointmentTypeUncheckedCreateInput>
    /**
     * In case the AppointmentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentTypeUpdateInput, AppointmentTypeUncheckedUpdateInput>
  }

  /**
   * AppointmentType delete
   */
  export type AppointmentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter which AppointmentType to delete.
     */
    where: AppointmentTypeWhereUniqueInput
  }

  /**
   * AppointmentType deleteMany
   */
  export type AppointmentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentTypes to delete
     */
    where?: AppointmentTypeWhereInput
    /**
     * Limit how many AppointmentTypes to delete.
     */
    limit?: number
  }

  /**
   * AppointmentType.locationAppointmentTypes
   */
  export type AppointmentType$locationAppointmentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    where?: LocationAppointmentTypeWhereInput
    orderBy?: LocationAppointmentTypeOrderByWithRelationInput | LocationAppointmentTypeOrderByWithRelationInput[]
    cursor?: LocationAppointmentTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationAppointmentTypeScalarFieldEnum | LocationAppointmentTypeScalarFieldEnum[]
  }

  /**
   * AppointmentType.slotConfigurations
   */
  export type AppointmentType$slotConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    where?: SlotConfigurationWhereInput
    orderBy?: SlotConfigurationOrderByWithRelationInput | SlotConfigurationOrderByWithRelationInput[]
    cursor?: SlotConfigurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotConfigurationScalarFieldEnum | SlotConfigurationScalarFieldEnum[]
  }

  /**
   * AppointmentType.bookings
   */
  export type AppointmentType$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * AppointmentType.waitlist
   */
  export type AppointmentType$waitlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    where?: WaitlistWhereInput
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    cursor?: WaitlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * AppointmentType.specialDates
   */
  export type AppointmentType$specialDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    where?: SpecialDateWhereInput
    orderBy?: SpecialDateOrderByWithRelationInput | SpecialDateOrderByWithRelationInput[]
    cursor?: SpecialDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialDateScalarFieldEnum | SpecialDateScalarFieldEnum[]
  }

  /**
   * AppointmentType.blockedSlots
   */
  export type AppointmentType$blockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    where?: BlockedSlotWhereInput
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    cursor?: BlockedSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * AppointmentType without action
   */
  export type AppointmentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    locationName: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    phoneNumber: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    locationName: string | null
    addressLine1: string | null
    addressLine2: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    phoneNumber: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    locationName: number
    addressLine1: number
    addressLine2: number
    city: number
    state: number
    zipCode: number
    phoneNumber: number
    email: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    locationName?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    phoneNumber?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    locationName?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    phoneNumber?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    locationName?: true
    addressLine1?: true
    addressLine2?: true
    city?: true
    state?: true
    zipCode?: true
    phoneNumber?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    locationName: string
    addressLine1: string
    addressLine2: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber: string | null
    email: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locationAppointmentTypes?: boolean | Location$locationAppointmentTypesArgs<ExtArgs>
    slotConfigurations?: boolean | Location$slotConfigurationsArgs<ExtArgs>
    bookings?: boolean | Location$bookingsArgs<ExtArgs>
    waitlist?: boolean | Location$waitlistArgs<ExtArgs>
    specialDates?: boolean | Location$specialDatesArgs<ExtArgs>
    blockedSlots?: boolean | Location$blockedSlotsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    locationName?: boolean
    addressLine1?: boolean
    addressLine2?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phoneNumber?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationName" | "addressLine1" | "addressLine2" | "city" | "state" | "zipCode" | "phoneNumber" | "email" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locationAppointmentTypes?: boolean | Location$locationAppointmentTypesArgs<ExtArgs>
    slotConfigurations?: boolean | Location$slotConfigurationsArgs<ExtArgs>
    bookings?: boolean | Location$bookingsArgs<ExtArgs>
    waitlist?: boolean | Location$waitlistArgs<ExtArgs>
    specialDates?: boolean | Location$specialDatesArgs<ExtArgs>
    blockedSlots?: boolean | Location$blockedSlotsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      locationAppointmentTypes: Prisma.$LocationAppointmentTypePayload<ExtArgs>[]
      slotConfigurations: Prisma.$SlotConfigurationPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      waitlist: Prisma.$WaitlistPayload<ExtArgs>[]
      specialDates: Prisma.$SpecialDatePayload<ExtArgs>[]
      blockedSlots: Prisma.$BlockedSlotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationName: string
      addressLine1: string
      addressLine2: string | null
      city: string
      state: string
      zipCode: string
      phoneNumber: string | null
      email: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locationAppointmentTypes<T extends Location$locationAppointmentTypesArgs<ExtArgs> = {}>(args?: Subset<T, Location$locationAppointmentTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slotConfigurations<T extends Location$slotConfigurationsArgs<ExtArgs> = {}>(args?: Subset<T, Location$slotConfigurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Location$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Location$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waitlist<T extends Location$waitlistArgs<ExtArgs> = {}>(args?: Subset<T, Location$waitlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    specialDates<T extends Location$specialDatesArgs<ExtArgs> = {}>(args?: Subset<T, Location$specialDatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedSlots<T extends Location$blockedSlotsArgs<ExtArgs> = {}>(args?: Subset<T, Location$blockedSlotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly locationName: FieldRef<"Location", 'String'>
    readonly addressLine1: FieldRef<"Location", 'String'>
    readonly addressLine2: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly zipCode: FieldRef<"Location", 'String'>
    readonly phoneNumber: FieldRef<"Location", 'String'>
    readonly email: FieldRef<"Location", 'String'>
    readonly isActive: FieldRef<"Location", 'Boolean'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.locationAppointmentTypes
   */
  export type Location$locationAppointmentTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    where?: LocationAppointmentTypeWhereInput
    orderBy?: LocationAppointmentTypeOrderByWithRelationInput | LocationAppointmentTypeOrderByWithRelationInput[]
    cursor?: LocationAppointmentTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationAppointmentTypeScalarFieldEnum | LocationAppointmentTypeScalarFieldEnum[]
  }

  /**
   * Location.slotConfigurations
   */
  export type Location$slotConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    where?: SlotConfigurationWhereInput
    orderBy?: SlotConfigurationOrderByWithRelationInput | SlotConfigurationOrderByWithRelationInput[]
    cursor?: SlotConfigurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotConfigurationScalarFieldEnum | SlotConfigurationScalarFieldEnum[]
  }

  /**
   * Location.bookings
   */
  export type Location$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Location.waitlist
   */
  export type Location$waitlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    where?: WaitlistWhereInput
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    cursor?: WaitlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * Location.specialDates
   */
  export type Location$specialDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    where?: SpecialDateWhereInput
    orderBy?: SpecialDateOrderByWithRelationInput | SpecialDateOrderByWithRelationInput[]
    cursor?: SpecialDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialDateScalarFieldEnum | SpecialDateScalarFieldEnum[]
  }

  /**
   * Location.blockedSlots
   */
  export type Location$blockedSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    where?: BlockedSlotWhereInput
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    cursor?: BlockedSlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model LocationAppointmentType
   */

  export type AggregateLocationAppointmentType = {
    _count: LocationAppointmentTypeCountAggregateOutputType | null
    _min: LocationAppointmentTypeMinAggregateOutputType | null
    _max: LocationAppointmentTypeMaxAggregateOutputType | null
  }

  export type LocationAppointmentTypeMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type LocationAppointmentTypeMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type LocationAppointmentTypeCountAggregateOutputType = {
    id: number
    locationId: number
    appointmentTypeId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type LocationAppointmentTypeMinAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    isActive?: true
    createdAt?: true
  }

  export type LocationAppointmentTypeMaxAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    isActive?: true
    createdAt?: true
  }

  export type LocationAppointmentTypeCountAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type LocationAppointmentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAppointmentType to aggregate.
     */
    where?: LocationAppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAppointmentTypes to fetch.
     */
    orderBy?: LocationAppointmentTypeOrderByWithRelationInput | LocationAppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationAppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAppointmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LocationAppointmentTypes
    **/
    _count?: true | LocationAppointmentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationAppointmentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationAppointmentTypeMaxAggregateInputType
  }

  export type GetLocationAppointmentTypeAggregateType<T extends LocationAppointmentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateLocationAppointmentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocationAppointmentType[P]>
      : GetScalarType<T[P], AggregateLocationAppointmentType[P]>
  }




  export type LocationAppointmentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationAppointmentTypeWhereInput
    orderBy?: LocationAppointmentTypeOrderByWithAggregationInput | LocationAppointmentTypeOrderByWithAggregationInput[]
    by: LocationAppointmentTypeScalarFieldEnum[] | LocationAppointmentTypeScalarFieldEnum
    having?: LocationAppointmentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationAppointmentTypeCountAggregateInputType | true
    _min?: LocationAppointmentTypeMinAggregateInputType
    _max?: LocationAppointmentTypeMaxAggregateInputType
  }

  export type LocationAppointmentTypeGroupByOutputType = {
    id: string
    locationId: string
    appointmentTypeId: string
    isActive: boolean
    createdAt: Date
    _count: LocationAppointmentTypeCountAggregateOutputType | null
    _min: LocationAppointmentTypeMinAggregateOutputType | null
    _max: LocationAppointmentTypeMaxAggregateOutputType | null
  }

  type GetLocationAppointmentTypeGroupByPayload<T extends LocationAppointmentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationAppointmentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationAppointmentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationAppointmentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], LocationAppointmentTypeGroupByOutputType[P]>
        }
      >
    >


  export type LocationAppointmentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    isActive?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationAppointmentType"]>

  export type LocationAppointmentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    isActive?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationAppointmentType"]>

  export type LocationAppointmentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    isActive?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locationAppointmentType"]>

  export type LocationAppointmentTypeSelectScalar = {
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type LocationAppointmentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "appointmentTypeId" | "isActive" | "createdAt", ExtArgs["result"]["locationAppointmentType"]>
  export type LocationAppointmentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }
  export type LocationAppointmentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }
  export type LocationAppointmentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }

  export type $LocationAppointmentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LocationAppointmentType"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      appointmentType: Prisma.$AppointmentTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      appointmentTypeId: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["locationAppointmentType"]>
    composites: {}
  }

  type LocationAppointmentTypeGetPayload<S extends boolean | null | undefined | LocationAppointmentTypeDefaultArgs> = $Result.GetResult<Prisma.$LocationAppointmentTypePayload, S>

  type LocationAppointmentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationAppointmentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationAppointmentTypeCountAggregateInputType | true
    }

  export interface LocationAppointmentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LocationAppointmentType'], meta: { name: 'LocationAppointmentType' } }
    /**
     * Find zero or one LocationAppointmentType that matches the filter.
     * @param {LocationAppointmentTypeFindUniqueArgs} args - Arguments to find a LocationAppointmentType
     * @example
     * // Get one LocationAppointmentType
     * const locationAppointmentType = await prisma.locationAppointmentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationAppointmentTypeFindUniqueArgs>(args: SelectSubset<T, LocationAppointmentTypeFindUniqueArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LocationAppointmentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationAppointmentTypeFindUniqueOrThrowArgs} args - Arguments to find a LocationAppointmentType
     * @example
     * // Get one LocationAppointmentType
     * const locationAppointmentType = await prisma.locationAppointmentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationAppointmentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationAppointmentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationAppointmentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAppointmentTypeFindFirstArgs} args - Arguments to find a LocationAppointmentType
     * @example
     * // Get one LocationAppointmentType
     * const locationAppointmentType = await prisma.locationAppointmentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationAppointmentTypeFindFirstArgs>(args?: SelectSubset<T, LocationAppointmentTypeFindFirstArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LocationAppointmentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAppointmentTypeFindFirstOrThrowArgs} args - Arguments to find a LocationAppointmentType
     * @example
     * // Get one LocationAppointmentType
     * const locationAppointmentType = await prisma.locationAppointmentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationAppointmentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationAppointmentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LocationAppointmentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAppointmentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LocationAppointmentTypes
     * const locationAppointmentTypes = await prisma.locationAppointmentType.findMany()
     * 
     * // Get first 10 LocationAppointmentTypes
     * const locationAppointmentTypes = await prisma.locationAppointmentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationAppointmentTypeWithIdOnly = await prisma.locationAppointmentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationAppointmentTypeFindManyArgs>(args?: SelectSubset<T, LocationAppointmentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LocationAppointmentType.
     * @param {LocationAppointmentTypeCreateArgs} args - Arguments to create a LocationAppointmentType.
     * @example
     * // Create one LocationAppointmentType
     * const LocationAppointmentType = await prisma.locationAppointmentType.create({
     *   data: {
     *     // ... data to create a LocationAppointmentType
     *   }
     * })
     * 
     */
    create<T extends LocationAppointmentTypeCreateArgs>(args: SelectSubset<T, LocationAppointmentTypeCreateArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LocationAppointmentTypes.
     * @param {LocationAppointmentTypeCreateManyArgs} args - Arguments to create many LocationAppointmentTypes.
     * @example
     * // Create many LocationAppointmentTypes
     * const locationAppointmentType = await prisma.locationAppointmentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationAppointmentTypeCreateManyArgs>(args?: SelectSubset<T, LocationAppointmentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LocationAppointmentTypes and returns the data saved in the database.
     * @param {LocationAppointmentTypeCreateManyAndReturnArgs} args - Arguments to create many LocationAppointmentTypes.
     * @example
     * // Create many LocationAppointmentTypes
     * const locationAppointmentType = await prisma.locationAppointmentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LocationAppointmentTypes and only return the `id`
     * const locationAppointmentTypeWithIdOnly = await prisma.locationAppointmentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationAppointmentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationAppointmentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LocationAppointmentType.
     * @param {LocationAppointmentTypeDeleteArgs} args - Arguments to delete one LocationAppointmentType.
     * @example
     * // Delete one LocationAppointmentType
     * const LocationAppointmentType = await prisma.locationAppointmentType.delete({
     *   where: {
     *     // ... filter to delete one LocationAppointmentType
     *   }
     * })
     * 
     */
    delete<T extends LocationAppointmentTypeDeleteArgs>(args: SelectSubset<T, LocationAppointmentTypeDeleteArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LocationAppointmentType.
     * @param {LocationAppointmentTypeUpdateArgs} args - Arguments to update one LocationAppointmentType.
     * @example
     * // Update one LocationAppointmentType
     * const locationAppointmentType = await prisma.locationAppointmentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationAppointmentTypeUpdateArgs>(args: SelectSubset<T, LocationAppointmentTypeUpdateArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LocationAppointmentTypes.
     * @param {LocationAppointmentTypeDeleteManyArgs} args - Arguments to filter LocationAppointmentTypes to delete.
     * @example
     * // Delete a few LocationAppointmentTypes
     * const { count } = await prisma.locationAppointmentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationAppointmentTypeDeleteManyArgs>(args?: SelectSubset<T, LocationAppointmentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationAppointmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAppointmentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LocationAppointmentTypes
     * const locationAppointmentType = await prisma.locationAppointmentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationAppointmentTypeUpdateManyArgs>(args: SelectSubset<T, LocationAppointmentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LocationAppointmentTypes and returns the data updated in the database.
     * @param {LocationAppointmentTypeUpdateManyAndReturnArgs} args - Arguments to update many LocationAppointmentTypes.
     * @example
     * // Update many LocationAppointmentTypes
     * const locationAppointmentType = await prisma.locationAppointmentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LocationAppointmentTypes and only return the `id`
     * const locationAppointmentTypeWithIdOnly = await prisma.locationAppointmentType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationAppointmentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationAppointmentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LocationAppointmentType.
     * @param {LocationAppointmentTypeUpsertArgs} args - Arguments to update or create a LocationAppointmentType.
     * @example
     * // Update or create a LocationAppointmentType
     * const locationAppointmentType = await prisma.locationAppointmentType.upsert({
     *   create: {
     *     // ... data to create a LocationAppointmentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LocationAppointmentType we want to update
     *   }
     * })
     */
    upsert<T extends LocationAppointmentTypeUpsertArgs>(args: SelectSubset<T, LocationAppointmentTypeUpsertArgs<ExtArgs>>): Prisma__LocationAppointmentTypeClient<$Result.GetResult<Prisma.$LocationAppointmentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LocationAppointmentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAppointmentTypeCountArgs} args - Arguments to filter LocationAppointmentTypes to count.
     * @example
     * // Count the number of LocationAppointmentTypes
     * const count = await prisma.locationAppointmentType.count({
     *   where: {
     *     // ... the filter for the LocationAppointmentTypes we want to count
     *   }
     * })
    **/
    count<T extends LocationAppointmentTypeCountArgs>(
      args?: Subset<T, LocationAppointmentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationAppointmentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LocationAppointmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAppointmentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAppointmentTypeAggregateArgs>(args: Subset<T, LocationAppointmentTypeAggregateArgs>): Prisma.PrismaPromise<GetLocationAppointmentTypeAggregateType<T>>

    /**
     * Group by LocationAppointmentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAppointmentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationAppointmentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationAppointmentTypeGroupByArgs['orderBy'] }
        : { orderBy?: LocationAppointmentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationAppointmentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationAppointmentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LocationAppointmentType model
   */
  readonly fields: LocationAppointmentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LocationAppointmentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationAppointmentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointmentType<T extends AppointmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentTypeDefaultArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LocationAppointmentType model
   */
  interface LocationAppointmentTypeFieldRefs {
    readonly id: FieldRef<"LocationAppointmentType", 'String'>
    readonly locationId: FieldRef<"LocationAppointmentType", 'String'>
    readonly appointmentTypeId: FieldRef<"LocationAppointmentType", 'String'>
    readonly isActive: FieldRef<"LocationAppointmentType", 'Boolean'>
    readonly createdAt: FieldRef<"LocationAppointmentType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LocationAppointmentType findUnique
   */
  export type LocationAppointmentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAppointmentType to fetch.
     */
    where: LocationAppointmentTypeWhereUniqueInput
  }

  /**
   * LocationAppointmentType findUniqueOrThrow
   */
  export type LocationAppointmentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAppointmentType to fetch.
     */
    where: LocationAppointmentTypeWhereUniqueInput
  }

  /**
   * LocationAppointmentType findFirst
   */
  export type LocationAppointmentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAppointmentType to fetch.
     */
    where?: LocationAppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAppointmentTypes to fetch.
     */
    orderBy?: LocationAppointmentTypeOrderByWithRelationInput | LocationAppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationAppointmentTypes.
     */
    cursor?: LocationAppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAppointmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationAppointmentTypes.
     */
    distinct?: LocationAppointmentTypeScalarFieldEnum | LocationAppointmentTypeScalarFieldEnum[]
  }

  /**
   * LocationAppointmentType findFirstOrThrow
   */
  export type LocationAppointmentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAppointmentType to fetch.
     */
    where?: LocationAppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAppointmentTypes to fetch.
     */
    orderBy?: LocationAppointmentTypeOrderByWithRelationInput | LocationAppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LocationAppointmentTypes.
     */
    cursor?: LocationAppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAppointmentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LocationAppointmentTypes.
     */
    distinct?: LocationAppointmentTypeScalarFieldEnum | LocationAppointmentTypeScalarFieldEnum[]
  }

  /**
   * LocationAppointmentType findMany
   */
  export type LocationAppointmentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter, which LocationAppointmentTypes to fetch.
     */
    where?: LocationAppointmentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LocationAppointmentTypes to fetch.
     */
    orderBy?: LocationAppointmentTypeOrderByWithRelationInput | LocationAppointmentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LocationAppointmentTypes.
     */
    cursor?: LocationAppointmentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LocationAppointmentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LocationAppointmentTypes.
     */
    skip?: number
    distinct?: LocationAppointmentTypeScalarFieldEnum | LocationAppointmentTypeScalarFieldEnum[]
  }

  /**
   * LocationAppointmentType create
   */
  export type LocationAppointmentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a LocationAppointmentType.
     */
    data: XOR<LocationAppointmentTypeCreateInput, LocationAppointmentTypeUncheckedCreateInput>
  }

  /**
   * LocationAppointmentType createMany
   */
  export type LocationAppointmentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LocationAppointmentTypes.
     */
    data: LocationAppointmentTypeCreateManyInput | LocationAppointmentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LocationAppointmentType createManyAndReturn
   */
  export type LocationAppointmentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many LocationAppointmentTypes.
     */
    data: LocationAppointmentTypeCreateManyInput | LocationAppointmentTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationAppointmentType update
   */
  export type LocationAppointmentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a LocationAppointmentType.
     */
    data: XOR<LocationAppointmentTypeUpdateInput, LocationAppointmentTypeUncheckedUpdateInput>
    /**
     * Choose, which LocationAppointmentType to update.
     */
    where: LocationAppointmentTypeWhereUniqueInput
  }

  /**
   * LocationAppointmentType updateMany
   */
  export type LocationAppointmentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LocationAppointmentTypes.
     */
    data: XOR<LocationAppointmentTypeUpdateManyMutationInput, LocationAppointmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which LocationAppointmentTypes to update
     */
    where?: LocationAppointmentTypeWhereInput
    /**
     * Limit how many LocationAppointmentTypes to update.
     */
    limit?: number
  }

  /**
   * LocationAppointmentType updateManyAndReturn
   */
  export type LocationAppointmentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * The data used to update LocationAppointmentTypes.
     */
    data: XOR<LocationAppointmentTypeUpdateManyMutationInput, LocationAppointmentTypeUncheckedUpdateManyInput>
    /**
     * Filter which LocationAppointmentTypes to update
     */
    where?: LocationAppointmentTypeWhereInput
    /**
     * Limit how many LocationAppointmentTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LocationAppointmentType upsert
   */
  export type LocationAppointmentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the LocationAppointmentType to update in case it exists.
     */
    where: LocationAppointmentTypeWhereUniqueInput
    /**
     * In case the LocationAppointmentType found by the `where` argument doesn't exist, create a new LocationAppointmentType with this data.
     */
    create: XOR<LocationAppointmentTypeCreateInput, LocationAppointmentTypeUncheckedCreateInput>
    /**
     * In case the LocationAppointmentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationAppointmentTypeUpdateInput, LocationAppointmentTypeUncheckedUpdateInput>
  }

  /**
   * LocationAppointmentType delete
   */
  export type LocationAppointmentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
    /**
     * Filter which LocationAppointmentType to delete.
     */
    where: LocationAppointmentTypeWhereUniqueInput
  }

  /**
   * LocationAppointmentType deleteMany
   */
  export type LocationAppointmentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LocationAppointmentTypes to delete
     */
    where?: LocationAppointmentTypeWhereInput
    /**
     * Limit how many LocationAppointmentTypes to delete.
     */
    limit?: number
  }

  /**
   * LocationAppointmentType without action
   */
  export type LocationAppointmentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationAppointmentType
     */
    select?: LocationAppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LocationAppointmentType
     */
    omit?: LocationAppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationAppointmentTypeInclude<ExtArgs> | null
  }


  /**
   * Model SlotConfiguration
   */

  export type AggregateSlotConfiguration = {
    _count: SlotConfigurationCountAggregateOutputType | null
    _avg: SlotConfigurationAvgAggregateOutputType | null
    _sum: SlotConfigurationSumAggregateOutputType | null
    _min: SlotConfigurationMinAggregateOutputType | null
    _max: SlotConfigurationMaxAggregateOutputType | null
  }

  export type SlotConfigurationAvgAggregateOutputType = {
    availableDays: number | null
    slotDurationMinutes: number | null
    slotsPerInterval: number | null
    bufferTimeMinutes: number | null
    advanceBookingDays: number | null
    sameDayBookingCutoffHours: number | null
    minAdvanceBookingHours: number | null
  }

  export type SlotConfigurationSumAggregateOutputType = {
    availableDays: number[]
    slotDurationMinutes: number | null
    slotsPerInterval: number | null
    bufferTimeMinutes: number | null
    advanceBookingDays: number | null
    sameDayBookingCutoffHours: number | null
    minAdvanceBookingHours: number | null
  }

  export type SlotConfigurationMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    startTime: string | null
    endTime: string | null
    slotDurationMinutes: number | null
    slotsPerInterval: number | null
    bufferTimeMinutes: number | null
    advanceBookingDays: number | null
    sameDayBookingCutoffHours: number | null
    minAdvanceBookingHours: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlotConfigurationMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    startTime: string | null
    endTime: string | null
    slotDurationMinutes: number | null
    slotsPerInterval: number | null
    bufferTimeMinutes: number | null
    advanceBookingDays: number | null
    sameDayBookingCutoffHours: number | null
    minAdvanceBookingHours: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlotConfigurationCountAggregateOutputType = {
    id: number
    locationId: number
    appointmentTypeId: number
    availableDays: number
    startTime: number
    endTime: number
    slotDurationMinutes: number
    slotsPerInterval: number
    bufferTimeMinutes: number
    advanceBookingDays: number
    sameDayBookingCutoffHours: number
    minAdvanceBookingHours: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlotConfigurationAvgAggregateInputType = {
    availableDays?: true
    slotDurationMinutes?: true
    slotsPerInterval?: true
    bufferTimeMinutes?: true
    advanceBookingDays?: true
    sameDayBookingCutoffHours?: true
    minAdvanceBookingHours?: true
  }

  export type SlotConfigurationSumAggregateInputType = {
    availableDays?: true
    slotDurationMinutes?: true
    slotsPerInterval?: true
    bufferTimeMinutes?: true
    advanceBookingDays?: true
    sameDayBookingCutoffHours?: true
    minAdvanceBookingHours?: true
  }

  export type SlotConfigurationMinAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    startTime?: true
    endTime?: true
    slotDurationMinutes?: true
    slotsPerInterval?: true
    bufferTimeMinutes?: true
    advanceBookingDays?: true
    sameDayBookingCutoffHours?: true
    minAdvanceBookingHours?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlotConfigurationMaxAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    startTime?: true
    endTime?: true
    slotDurationMinutes?: true
    slotsPerInterval?: true
    bufferTimeMinutes?: true
    advanceBookingDays?: true
    sameDayBookingCutoffHours?: true
    minAdvanceBookingHours?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlotConfigurationCountAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    availableDays?: true
    startTime?: true
    endTime?: true
    slotDurationMinutes?: true
    slotsPerInterval?: true
    bufferTimeMinutes?: true
    advanceBookingDays?: true
    sameDayBookingCutoffHours?: true
    minAdvanceBookingHours?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlotConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotConfiguration to aggregate.
     */
    where?: SlotConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotConfigurations to fetch.
     */
    orderBy?: SlotConfigurationOrderByWithRelationInput | SlotConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlotConfigurations
    **/
    _count?: true | SlotConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotConfigurationMaxAggregateInputType
  }

  export type GetSlotConfigurationAggregateType<T extends SlotConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateSlotConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlotConfiguration[P]>
      : GetScalarType<T[P], AggregateSlotConfiguration[P]>
  }




  export type SlotConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotConfigurationWhereInput
    orderBy?: SlotConfigurationOrderByWithAggregationInput | SlotConfigurationOrderByWithAggregationInput[]
    by: SlotConfigurationScalarFieldEnum[] | SlotConfigurationScalarFieldEnum
    having?: SlotConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotConfigurationCountAggregateInputType | true
    _avg?: SlotConfigurationAvgAggregateInputType
    _sum?: SlotConfigurationSumAggregateInputType
    _min?: SlotConfigurationMinAggregateInputType
    _max?: SlotConfigurationMaxAggregateInputType
  }

  export type SlotConfigurationGroupByOutputType = {
    id: string
    locationId: string
    appointmentTypeId: string
    availableDays: number[]
    startTime: string
    endTime: string
    slotDurationMinutes: number
    slotsPerInterval: number
    bufferTimeMinutes: number
    advanceBookingDays: number
    sameDayBookingCutoffHours: number
    minAdvanceBookingHours: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SlotConfigurationCountAggregateOutputType | null
    _avg: SlotConfigurationAvgAggregateOutputType | null
    _sum: SlotConfigurationSumAggregateOutputType | null
    _min: SlotConfigurationMinAggregateOutputType | null
    _max: SlotConfigurationMaxAggregateOutputType | null
  }

  type GetSlotConfigurationGroupByPayload<T extends SlotConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], SlotConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type SlotConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    availableDays?: boolean
    startTime?: boolean
    endTime?: boolean
    slotDurationMinutes?: boolean
    slotsPerInterval?: boolean
    bufferTimeMinutes?: boolean
    advanceBookingDays?: boolean
    sameDayBookingCutoffHours?: boolean
    minAdvanceBookingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotConfiguration"]>

  export type SlotConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    availableDays?: boolean
    startTime?: boolean
    endTime?: boolean
    slotDurationMinutes?: boolean
    slotsPerInterval?: boolean
    bufferTimeMinutes?: boolean
    advanceBookingDays?: boolean
    sameDayBookingCutoffHours?: boolean
    minAdvanceBookingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotConfiguration"]>

  export type SlotConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    availableDays?: boolean
    startTime?: boolean
    endTime?: boolean
    slotDurationMinutes?: boolean
    slotsPerInterval?: boolean
    bufferTimeMinutes?: boolean
    advanceBookingDays?: boolean
    sameDayBookingCutoffHours?: boolean
    minAdvanceBookingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slotConfiguration"]>

  export type SlotConfigurationSelectScalar = {
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    availableDays?: boolean
    startTime?: boolean
    endTime?: boolean
    slotDurationMinutes?: boolean
    slotsPerInterval?: boolean
    bufferTimeMinutes?: boolean
    advanceBookingDays?: boolean
    sameDayBookingCutoffHours?: boolean
    minAdvanceBookingHours?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlotConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "appointmentTypeId" | "availableDays" | "startTime" | "endTime" | "slotDurationMinutes" | "slotsPerInterval" | "bufferTimeMinutes" | "advanceBookingDays" | "sameDayBookingCutoffHours" | "minAdvanceBookingHours" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["slotConfiguration"]>
  export type SlotConfigurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }
  export type SlotConfigurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }
  export type SlotConfigurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
  }

  export type $SlotConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlotConfiguration"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      appointmentType: Prisma.$AppointmentTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      appointmentTypeId: string
      availableDays: number[]
      startTime: string
      endTime: string
      slotDurationMinutes: number
      slotsPerInterval: number
      bufferTimeMinutes: number
      advanceBookingDays: number
      sameDayBookingCutoffHours: number
      minAdvanceBookingHours: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slotConfiguration"]>
    composites: {}
  }

  type SlotConfigurationGetPayload<S extends boolean | null | undefined | SlotConfigurationDefaultArgs> = $Result.GetResult<Prisma.$SlotConfigurationPayload, S>

  type SlotConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlotConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlotConfigurationCountAggregateInputType | true
    }

  export interface SlotConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlotConfiguration'], meta: { name: 'SlotConfiguration' } }
    /**
     * Find zero or one SlotConfiguration that matches the filter.
     * @param {SlotConfigurationFindUniqueArgs} args - Arguments to find a SlotConfiguration
     * @example
     * // Get one SlotConfiguration
     * const slotConfiguration = await prisma.slotConfiguration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotConfigurationFindUniqueArgs>(args: SelectSubset<T, SlotConfigurationFindUniqueArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlotConfiguration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlotConfigurationFindUniqueOrThrowArgs} args - Arguments to find a SlotConfiguration
     * @example
     * // Get one SlotConfiguration
     * const slotConfiguration = await prisma.slotConfiguration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotConfiguration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotConfigurationFindFirstArgs} args - Arguments to find a SlotConfiguration
     * @example
     * // Get one SlotConfiguration
     * const slotConfiguration = await prisma.slotConfiguration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotConfigurationFindFirstArgs>(args?: SelectSubset<T, SlotConfigurationFindFirstArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotConfiguration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotConfigurationFindFirstOrThrowArgs} args - Arguments to find a SlotConfiguration
     * @example
     * // Get one SlotConfiguration
     * const slotConfiguration = await prisma.slotConfiguration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlotConfigurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlotConfigurations
     * const slotConfigurations = await prisma.slotConfiguration.findMany()
     * 
     * // Get first 10 SlotConfigurations
     * const slotConfigurations = await prisma.slotConfiguration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotConfigurationWithIdOnly = await prisma.slotConfiguration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlotConfigurationFindManyArgs>(args?: SelectSubset<T, SlotConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlotConfiguration.
     * @param {SlotConfigurationCreateArgs} args - Arguments to create a SlotConfiguration.
     * @example
     * // Create one SlotConfiguration
     * const SlotConfiguration = await prisma.slotConfiguration.create({
     *   data: {
     *     // ... data to create a SlotConfiguration
     *   }
     * })
     * 
     */
    create<T extends SlotConfigurationCreateArgs>(args: SelectSubset<T, SlotConfigurationCreateArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlotConfigurations.
     * @param {SlotConfigurationCreateManyArgs} args - Arguments to create many SlotConfigurations.
     * @example
     * // Create many SlotConfigurations
     * const slotConfiguration = await prisma.slotConfiguration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotConfigurationCreateManyArgs>(args?: SelectSubset<T, SlotConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlotConfigurations and returns the data saved in the database.
     * @param {SlotConfigurationCreateManyAndReturnArgs} args - Arguments to create many SlotConfigurations.
     * @example
     * // Create many SlotConfigurations
     * const slotConfiguration = await prisma.slotConfiguration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlotConfigurations and only return the `id`
     * const slotConfigurationWithIdOnly = await prisma.slotConfiguration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlotConfiguration.
     * @param {SlotConfigurationDeleteArgs} args - Arguments to delete one SlotConfiguration.
     * @example
     * // Delete one SlotConfiguration
     * const SlotConfiguration = await prisma.slotConfiguration.delete({
     *   where: {
     *     // ... filter to delete one SlotConfiguration
     *   }
     * })
     * 
     */
    delete<T extends SlotConfigurationDeleteArgs>(args: SelectSubset<T, SlotConfigurationDeleteArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlotConfiguration.
     * @param {SlotConfigurationUpdateArgs} args - Arguments to update one SlotConfiguration.
     * @example
     * // Update one SlotConfiguration
     * const slotConfiguration = await prisma.slotConfiguration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotConfigurationUpdateArgs>(args: SelectSubset<T, SlotConfigurationUpdateArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlotConfigurations.
     * @param {SlotConfigurationDeleteManyArgs} args - Arguments to filter SlotConfigurations to delete.
     * @example
     * // Delete a few SlotConfigurations
     * const { count } = await prisma.slotConfiguration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotConfigurationDeleteManyArgs>(args?: SelectSubset<T, SlotConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlotConfigurations
     * const slotConfiguration = await prisma.slotConfiguration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotConfigurationUpdateManyArgs>(args: SelectSubset<T, SlotConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotConfigurations and returns the data updated in the database.
     * @param {SlotConfigurationUpdateManyAndReturnArgs} args - Arguments to update many SlotConfigurations.
     * @example
     * // Update many SlotConfigurations
     * const slotConfiguration = await prisma.slotConfiguration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlotConfigurations and only return the `id`
     * const slotConfigurationWithIdOnly = await prisma.slotConfiguration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlotConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, SlotConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlotConfiguration.
     * @param {SlotConfigurationUpsertArgs} args - Arguments to update or create a SlotConfiguration.
     * @example
     * // Update or create a SlotConfiguration
     * const slotConfiguration = await prisma.slotConfiguration.upsert({
     *   create: {
     *     // ... data to create a SlotConfiguration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlotConfiguration we want to update
     *   }
     * })
     */
    upsert<T extends SlotConfigurationUpsertArgs>(args: SelectSubset<T, SlotConfigurationUpsertArgs<ExtArgs>>): Prisma__SlotConfigurationClient<$Result.GetResult<Prisma.$SlotConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlotConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotConfigurationCountArgs} args - Arguments to filter SlotConfigurations to count.
     * @example
     * // Count the number of SlotConfigurations
     * const count = await prisma.slotConfiguration.count({
     *   where: {
     *     // ... the filter for the SlotConfigurations we want to count
     *   }
     * })
    **/
    count<T extends SlotConfigurationCountArgs>(
      args?: Subset<T, SlotConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlotConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlotConfigurationAggregateArgs>(args: Subset<T, SlotConfigurationAggregateArgs>): Prisma.PrismaPromise<GetSlotConfigurationAggregateType<T>>

    /**
     * Group by SlotConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlotConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: SlotConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlotConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlotConfiguration model
   */
  readonly fields: SlotConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlotConfiguration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointmentType<T extends AppointmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentTypeDefaultArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SlotConfiguration model
   */
  interface SlotConfigurationFieldRefs {
    readonly id: FieldRef<"SlotConfiguration", 'String'>
    readonly locationId: FieldRef<"SlotConfiguration", 'String'>
    readonly appointmentTypeId: FieldRef<"SlotConfiguration", 'String'>
    readonly availableDays: FieldRef<"SlotConfiguration", 'Int[]'>
    readonly startTime: FieldRef<"SlotConfiguration", 'String'>
    readonly endTime: FieldRef<"SlotConfiguration", 'String'>
    readonly slotDurationMinutes: FieldRef<"SlotConfiguration", 'Int'>
    readonly slotsPerInterval: FieldRef<"SlotConfiguration", 'Int'>
    readonly bufferTimeMinutes: FieldRef<"SlotConfiguration", 'Int'>
    readonly advanceBookingDays: FieldRef<"SlotConfiguration", 'Int'>
    readonly sameDayBookingCutoffHours: FieldRef<"SlotConfiguration", 'Int'>
    readonly minAdvanceBookingHours: FieldRef<"SlotConfiguration", 'Int'>
    readonly isActive: FieldRef<"SlotConfiguration", 'Boolean'>
    readonly createdAt: FieldRef<"SlotConfiguration", 'DateTime'>
    readonly updatedAt: FieldRef<"SlotConfiguration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlotConfiguration findUnique
   */
  export type SlotConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which SlotConfiguration to fetch.
     */
    where: SlotConfigurationWhereUniqueInput
  }

  /**
   * SlotConfiguration findUniqueOrThrow
   */
  export type SlotConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which SlotConfiguration to fetch.
     */
    where: SlotConfigurationWhereUniqueInput
  }

  /**
   * SlotConfiguration findFirst
   */
  export type SlotConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which SlotConfiguration to fetch.
     */
    where?: SlotConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotConfigurations to fetch.
     */
    orderBy?: SlotConfigurationOrderByWithRelationInput | SlotConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotConfigurations.
     */
    cursor?: SlotConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotConfigurations.
     */
    distinct?: SlotConfigurationScalarFieldEnum | SlotConfigurationScalarFieldEnum[]
  }

  /**
   * SlotConfiguration findFirstOrThrow
   */
  export type SlotConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which SlotConfiguration to fetch.
     */
    where?: SlotConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotConfigurations to fetch.
     */
    orderBy?: SlotConfigurationOrderByWithRelationInput | SlotConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotConfigurations.
     */
    cursor?: SlotConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotConfigurations.
     */
    distinct?: SlotConfigurationScalarFieldEnum | SlotConfigurationScalarFieldEnum[]
  }

  /**
   * SlotConfiguration findMany
   */
  export type SlotConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which SlotConfigurations to fetch.
     */
    where?: SlotConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotConfigurations to fetch.
     */
    orderBy?: SlotConfigurationOrderByWithRelationInput | SlotConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlotConfigurations.
     */
    cursor?: SlotConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotConfigurations.
     */
    skip?: number
    distinct?: SlotConfigurationScalarFieldEnum | SlotConfigurationScalarFieldEnum[]
  }

  /**
   * SlotConfiguration create
   */
  export type SlotConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to create a SlotConfiguration.
     */
    data: XOR<SlotConfigurationCreateInput, SlotConfigurationUncheckedCreateInput>
  }

  /**
   * SlotConfiguration createMany
   */
  export type SlotConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlotConfigurations.
     */
    data: SlotConfigurationCreateManyInput | SlotConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlotConfiguration createManyAndReturn
   */
  export type SlotConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many SlotConfigurations.
     */
    data: SlotConfigurationCreateManyInput | SlotConfigurationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotConfiguration update
   */
  export type SlotConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to update a SlotConfiguration.
     */
    data: XOR<SlotConfigurationUpdateInput, SlotConfigurationUncheckedUpdateInput>
    /**
     * Choose, which SlotConfiguration to update.
     */
    where: SlotConfigurationWhereUniqueInput
  }

  /**
   * SlotConfiguration updateMany
   */
  export type SlotConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlotConfigurations.
     */
    data: XOR<SlotConfigurationUpdateManyMutationInput, SlotConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which SlotConfigurations to update
     */
    where?: SlotConfigurationWhereInput
    /**
     * Limit how many SlotConfigurations to update.
     */
    limit?: number
  }

  /**
   * SlotConfiguration updateManyAndReturn
   */
  export type SlotConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update SlotConfigurations.
     */
    data: XOR<SlotConfigurationUpdateManyMutationInput, SlotConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which SlotConfigurations to update
     */
    where?: SlotConfigurationWhereInput
    /**
     * Limit how many SlotConfigurations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotConfiguration upsert
   */
  export type SlotConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * The filter to search for the SlotConfiguration to update in case it exists.
     */
    where: SlotConfigurationWhereUniqueInput
    /**
     * In case the SlotConfiguration found by the `where` argument doesn't exist, create a new SlotConfiguration with this data.
     */
    create: XOR<SlotConfigurationCreateInput, SlotConfigurationUncheckedCreateInput>
    /**
     * In case the SlotConfiguration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotConfigurationUpdateInput, SlotConfigurationUncheckedUpdateInput>
  }

  /**
   * SlotConfiguration delete
   */
  export type SlotConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
    /**
     * Filter which SlotConfiguration to delete.
     */
    where: SlotConfigurationWhereUniqueInput
  }

  /**
   * SlotConfiguration deleteMany
   */
  export type SlotConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotConfigurations to delete
     */
    where?: SlotConfigurationWhereInput
    /**
     * Limit how many SlotConfigurations to delete.
     */
    limit?: number
  }

  /**
   * SlotConfiguration without action
   */
  export type SlotConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotConfiguration
     */
    select?: SlotConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotConfiguration
     */
    omit?: SlotConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotConfigurationInclude<ExtArgs> | null
  }


  /**
   * Model SpecialDate
   */

  export type AggregateSpecialDate = {
    _count: SpecialDateCountAggregateOutputType | null
    _min: SpecialDateMinAggregateOutputType | null
    _max: SpecialDateMaxAggregateOutputType | null
  }

  export type SpecialDateMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    date: Date | null
    dateType: $Enums.SpecialDateType | null
    reason: string | null
    isClosed: boolean | null
    modifiedStartTime: string | null
    modifiedEndTime: string | null
    appliesToAllLocations: boolean | null
    appliesToAllAppointmentTypes: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialDateMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    date: Date | null
    dateType: $Enums.SpecialDateType | null
    reason: string | null
    isClosed: boolean | null
    modifiedStartTime: string | null
    modifiedEndTime: string | null
    appliesToAllLocations: boolean | null
    appliesToAllAppointmentTypes: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialDateCountAggregateOutputType = {
    id: number
    locationId: number
    appointmentTypeId: number
    date: number
    dateType: number
    reason: number
    isClosed: number
    modifiedStartTime: number
    modifiedEndTime: number
    appliesToAllLocations: number
    appliesToAllAppointmentTypes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecialDateMinAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    date?: true
    dateType?: true
    reason?: true
    isClosed?: true
    modifiedStartTime?: true
    modifiedEndTime?: true
    appliesToAllLocations?: true
    appliesToAllAppointmentTypes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialDateMaxAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    date?: true
    dateType?: true
    reason?: true
    isClosed?: true
    modifiedStartTime?: true
    modifiedEndTime?: true
    appliesToAllLocations?: true
    appliesToAllAppointmentTypes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialDateCountAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    date?: true
    dateType?: true
    reason?: true
    isClosed?: true
    modifiedStartTime?: true
    modifiedEndTime?: true
    appliesToAllLocations?: true
    appliesToAllAppointmentTypes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecialDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialDate to aggregate.
     */
    where?: SpecialDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDates to fetch.
     */
    orderBy?: SpecialDateOrderByWithRelationInput | SpecialDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialDates
    **/
    _count?: true | SpecialDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialDateMaxAggregateInputType
  }

  export type GetSpecialDateAggregateType<T extends SpecialDateAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialDate[P]>
      : GetScalarType<T[P], AggregateSpecialDate[P]>
  }




  export type SpecialDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialDateWhereInput
    orderBy?: SpecialDateOrderByWithAggregationInput | SpecialDateOrderByWithAggregationInput[]
    by: SpecialDateScalarFieldEnum[] | SpecialDateScalarFieldEnum
    having?: SpecialDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialDateCountAggregateInputType | true
    _min?: SpecialDateMinAggregateInputType
    _max?: SpecialDateMaxAggregateInputType
  }

  export type SpecialDateGroupByOutputType = {
    id: string
    locationId: string | null
    appointmentTypeId: string | null
    date: Date
    dateType: $Enums.SpecialDateType
    reason: string | null
    isClosed: boolean
    modifiedStartTime: string | null
    modifiedEndTime: string | null
    appliesToAllLocations: boolean
    appliesToAllAppointmentTypes: boolean
    createdAt: Date
    updatedAt: Date
    _count: SpecialDateCountAggregateOutputType | null
    _min: SpecialDateMinAggregateOutputType | null
    _max: SpecialDateMaxAggregateOutputType | null
  }

  type GetSpecialDateGroupByPayload<T extends SpecialDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialDateGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialDateGroupByOutputType[P]>
        }
      >
    >


  export type SpecialDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    date?: boolean
    dateType?: boolean
    reason?: boolean
    isClosed?: boolean
    modifiedStartTime?: boolean
    modifiedEndTime?: boolean
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | SpecialDate$locationArgs<ExtArgs>
    appointmentType?: boolean | SpecialDate$appointmentTypeArgs<ExtArgs>
  }, ExtArgs["result"]["specialDate"]>

  export type SpecialDateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    date?: boolean
    dateType?: boolean
    reason?: boolean
    isClosed?: boolean
    modifiedStartTime?: boolean
    modifiedEndTime?: boolean
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | SpecialDate$locationArgs<ExtArgs>
    appointmentType?: boolean | SpecialDate$appointmentTypeArgs<ExtArgs>
  }, ExtArgs["result"]["specialDate"]>

  export type SpecialDateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    date?: boolean
    dateType?: boolean
    reason?: boolean
    isClosed?: boolean
    modifiedStartTime?: boolean
    modifiedEndTime?: boolean
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | SpecialDate$locationArgs<ExtArgs>
    appointmentType?: boolean | SpecialDate$appointmentTypeArgs<ExtArgs>
  }, ExtArgs["result"]["specialDate"]>

  export type SpecialDateSelectScalar = {
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    date?: boolean
    dateType?: boolean
    reason?: boolean
    isClosed?: boolean
    modifiedStartTime?: boolean
    modifiedEndTime?: boolean
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecialDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "appointmentTypeId" | "date" | "dateType" | "reason" | "isClosed" | "modifiedStartTime" | "modifiedEndTime" | "appliesToAllLocations" | "appliesToAllAppointmentTypes" | "createdAt" | "updatedAt", ExtArgs["result"]["specialDate"]>
  export type SpecialDateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | SpecialDate$locationArgs<ExtArgs>
    appointmentType?: boolean | SpecialDate$appointmentTypeArgs<ExtArgs>
  }
  export type SpecialDateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | SpecialDate$locationArgs<ExtArgs>
    appointmentType?: boolean | SpecialDate$appointmentTypeArgs<ExtArgs>
  }
  export type SpecialDateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | SpecialDate$locationArgs<ExtArgs>
    appointmentType?: boolean | SpecialDate$appointmentTypeArgs<ExtArgs>
  }

  export type $SpecialDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialDate"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs> | null
      appointmentType: Prisma.$AppointmentTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string | null
      appointmentTypeId: string | null
      date: Date
      dateType: $Enums.SpecialDateType
      reason: string | null
      isClosed: boolean
      modifiedStartTime: string | null
      modifiedEndTime: string | null
      appliesToAllLocations: boolean
      appliesToAllAppointmentTypes: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialDate"]>
    composites: {}
  }

  type SpecialDateGetPayload<S extends boolean | null | undefined | SpecialDateDefaultArgs> = $Result.GetResult<Prisma.$SpecialDatePayload, S>

  type SpecialDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialDateCountAggregateInputType | true
    }

  export interface SpecialDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialDate'], meta: { name: 'SpecialDate' } }
    /**
     * Find zero or one SpecialDate that matches the filter.
     * @param {SpecialDateFindUniqueArgs} args - Arguments to find a SpecialDate
     * @example
     * // Get one SpecialDate
     * const specialDate = await prisma.specialDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialDateFindUniqueArgs>(args: SelectSubset<T, SpecialDateFindUniqueArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialDateFindUniqueOrThrowArgs} args - Arguments to find a SpecialDate
     * @example
     * // Get one SpecialDate
     * const specialDate = await prisma.specialDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialDateFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDateFindFirstArgs} args - Arguments to find a SpecialDate
     * @example
     * // Get one SpecialDate
     * const specialDate = await prisma.specialDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialDateFindFirstArgs>(args?: SelectSubset<T, SpecialDateFindFirstArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDateFindFirstOrThrowArgs} args - Arguments to find a SpecialDate
     * @example
     * // Get one SpecialDate
     * const specialDate = await prisma.specialDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialDateFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialDates
     * const specialDates = await prisma.specialDate.findMany()
     * 
     * // Get first 10 SpecialDates
     * const specialDates = await prisma.specialDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialDateWithIdOnly = await prisma.specialDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialDateFindManyArgs>(args?: SelectSubset<T, SpecialDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialDate.
     * @param {SpecialDateCreateArgs} args - Arguments to create a SpecialDate.
     * @example
     * // Create one SpecialDate
     * const SpecialDate = await prisma.specialDate.create({
     *   data: {
     *     // ... data to create a SpecialDate
     *   }
     * })
     * 
     */
    create<T extends SpecialDateCreateArgs>(args: SelectSubset<T, SpecialDateCreateArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialDates.
     * @param {SpecialDateCreateManyArgs} args - Arguments to create many SpecialDates.
     * @example
     * // Create many SpecialDates
     * const specialDate = await prisma.specialDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialDateCreateManyArgs>(args?: SelectSubset<T, SpecialDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecialDates and returns the data saved in the database.
     * @param {SpecialDateCreateManyAndReturnArgs} args - Arguments to create many SpecialDates.
     * @example
     * // Create many SpecialDates
     * const specialDate = await prisma.specialDate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecialDates and only return the `id`
     * const specialDateWithIdOnly = await prisma.specialDate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialDateCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialDateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpecialDate.
     * @param {SpecialDateDeleteArgs} args - Arguments to delete one SpecialDate.
     * @example
     * // Delete one SpecialDate
     * const SpecialDate = await prisma.specialDate.delete({
     *   where: {
     *     // ... filter to delete one SpecialDate
     *   }
     * })
     * 
     */
    delete<T extends SpecialDateDeleteArgs>(args: SelectSubset<T, SpecialDateDeleteArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialDate.
     * @param {SpecialDateUpdateArgs} args - Arguments to update one SpecialDate.
     * @example
     * // Update one SpecialDate
     * const specialDate = await prisma.specialDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialDateUpdateArgs>(args: SelectSubset<T, SpecialDateUpdateArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialDates.
     * @param {SpecialDateDeleteManyArgs} args - Arguments to filter SpecialDates to delete.
     * @example
     * // Delete a few SpecialDates
     * const { count } = await prisma.specialDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialDateDeleteManyArgs>(args?: SelectSubset<T, SpecialDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialDates
     * const specialDate = await prisma.specialDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialDateUpdateManyArgs>(args: SelectSubset<T, SpecialDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialDates and returns the data updated in the database.
     * @param {SpecialDateUpdateManyAndReturnArgs} args - Arguments to update many SpecialDates.
     * @example
     * // Update many SpecialDates
     * const specialDate = await prisma.specialDate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpecialDates and only return the `id`
     * const specialDateWithIdOnly = await prisma.specialDate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialDateUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialDateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpecialDate.
     * @param {SpecialDateUpsertArgs} args - Arguments to update or create a SpecialDate.
     * @example
     * // Update or create a SpecialDate
     * const specialDate = await prisma.specialDate.upsert({
     *   create: {
     *     // ... data to create a SpecialDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialDate we want to update
     *   }
     * })
     */
    upsert<T extends SpecialDateUpsertArgs>(args: SelectSubset<T, SpecialDateUpsertArgs<ExtArgs>>): Prisma__SpecialDateClient<$Result.GetResult<Prisma.$SpecialDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDateCountArgs} args - Arguments to filter SpecialDates to count.
     * @example
     * // Count the number of SpecialDates
     * const count = await prisma.specialDate.count({
     *   where: {
     *     // ... the filter for the SpecialDates we want to count
     *   }
     * })
    **/
    count<T extends SpecialDateCountArgs>(
      args?: Subset<T, SpecialDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialDateAggregateArgs>(args: Subset<T, SpecialDateAggregateArgs>): Prisma.PrismaPromise<GetSpecialDateAggregateType<T>>

    /**
     * Group by SpecialDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialDateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialDateGroupByArgs['orderBy'] }
        : { orderBy?: SpecialDateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialDate model
   */
  readonly fields: SpecialDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends SpecialDate$locationArgs<ExtArgs> = {}>(args?: Subset<T, SpecialDate$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointmentType<T extends SpecialDate$appointmentTypeArgs<ExtArgs> = {}>(args?: Subset<T, SpecialDate$appointmentTypeArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecialDate model
   */
  interface SpecialDateFieldRefs {
    readonly id: FieldRef<"SpecialDate", 'String'>
    readonly locationId: FieldRef<"SpecialDate", 'String'>
    readonly appointmentTypeId: FieldRef<"SpecialDate", 'String'>
    readonly date: FieldRef<"SpecialDate", 'DateTime'>
    readonly dateType: FieldRef<"SpecialDate", 'SpecialDateType'>
    readonly reason: FieldRef<"SpecialDate", 'String'>
    readonly isClosed: FieldRef<"SpecialDate", 'Boolean'>
    readonly modifiedStartTime: FieldRef<"SpecialDate", 'String'>
    readonly modifiedEndTime: FieldRef<"SpecialDate", 'String'>
    readonly appliesToAllLocations: FieldRef<"SpecialDate", 'Boolean'>
    readonly appliesToAllAppointmentTypes: FieldRef<"SpecialDate", 'Boolean'>
    readonly createdAt: FieldRef<"SpecialDate", 'DateTime'>
    readonly updatedAt: FieldRef<"SpecialDate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpecialDate findUnique
   */
  export type SpecialDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDate to fetch.
     */
    where: SpecialDateWhereUniqueInput
  }

  /**
   * SpecialDate findUniqueOrThrow
   */
  export type SpecialDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDate to fetch.
     */
    where: SpecialDateWhereUniqueInput
  }

  /**
   * SpecialDate findFirst
   */
  export type SpecialDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDate to fetch.
     */
    where?: SpecialDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDates to fetch.
     */
    orderBy?: SpecialDateOrderByWithRelationInput | SpecialDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialDates.
     */
    cursor?: SpecialDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialDates.
     */
    distinct?: SpecialDateScalarFieldEnum | SpecialDateScalarFieldEnum[]
  }

  /**
   * SpecialDate findFirstOrThrow
   */
  export type SpecialDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDate to fetch.
     */
    where?: SpecialDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDates to fetch.
     */
    orderBy?: SpecialDateOrderByWithRelationInput | SpecialDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialDates.
     */
    cursor?: SpecialDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialDates.
     */
    distinct?: SpecialDateScalarFieldEnum | SpecialDateScalarFieldEnum[]
  }

  /**
   * SpecialDate findMany
   */
  export type SpecialDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * Filter, which SpecialDates to fetch.
     */
    where?: SpecialDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialDates to fetch.
     */
    orderBy?: SpecialDateOrderByWithRelationInput | SpecialDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialDates.
     */
    cursor?: SpecialDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialDates.
     */
    skip?: number
    distinct?: SpecialDateScalarFieldEnum | SpecialDateScalarFieldEnum[]
  }

  /**
   * SpecialDate create
   */
  export type SpecialDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialDate.
     */
    data: XOR<SpecialDateCreateInput, SpecialDateUncheckedCreateInput>
  }

  /**
   * SpecialDate createMany
   */
  export type SpecialDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialDates.
     */
    data: SpecialDateCreateManyInput | SpecialDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialDate createManyAndReturn
   */
  export type SpecialDateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * The data used to create many SpecialDates.
     */
    data: SpecialDateCreateManyInput | SpecialDateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialDate update
   */
  export type SpecialDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialDate.
     */
    data: XOR<SpecialDateUpdateInput, SpecialDateUncheckedUpdateInput>
    /**
     * Choose, which SpecialDate to update.
     */
    where: SpecialDateWhereUniqueInput
  }

  /**
   * SpecialDate updateMany
   */
  export type SpecialDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialDates.
     */
    data: XOR<SpecialDateUpdateManyMutationInput, SpecialDateUncheckedUpdateManyInput>
    /**
     * Filter which SpecialDates to update
     */
    where?: SpecialDateWhereInput
    /**
     * Limit how many SpecialDates to update.
     */
    limit?: number
  }

  /**
   * SpecialDate updateManyAndReturn
   */
  export type SpecialDateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * The data used to update SpecialDates.
     */
    data: XOR<SpecialDateUpdateManyMutationInput, SpecialDateUncheckedUpdateManyInput>
    /**
     * Filter which SpecialDates to update
     */
    where?: SpecialDateWhereInput
    /**
     * Limit how many SpecialDates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SpecialDate upsert
   */
  export type SpecialDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialDate to update in case it exists.
     */
    where: SpecialDateWhereUniqueInput
    /**
     * In case the SpecialDate found by the `where` argument doesn't exist, create a new SpecialDate with this data.
     */
    create: XOR<SpecialDateCreateInput, SpecialDateUncheckedCreateInput>
    /**
     * In case the SpecialDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialDateUpdateInput, SpecialDateUncheckedUpdateInput>
  }

  /**
   * SpecialDate delete
   */
  export type SpecialDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
    /**
     * Filter which SpecialDate to delete.
     */
    where: SpecialDateWhereUniqueInput
  }

  /**
   * SpecialDate deleteMany
   */
  export type SpecialDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialDates to delete
     */
    where?: SpecialDateWhereInput
    /**
     * Limit how many SpecialDates to delete.
     */
    limit?: number
  }

  /**
   * SpecialDate.location
   */
  export type SpecialDate$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * SpecialDate.appointmentType
   */
  export type SpecialDate$appointmentTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    where?: AppointmentTypeWhereInput
  }

  /**
   * SpecialDate without action
   */
  export type SpecialDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialDate
     */
    select?: SpecialDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialDate
     */
    omit?: SpecialDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialDateInclude<ExtArgs> | null
  }


  /**
   * Model BlockedSlot
   */

  export type AggregateBlockedSlot = {
    _count: BlockedSlotCountAggregateOutputType | null
    _min: BlockedSlotMinAggregateOutputType | null
    _max: BlockedSlotMaxAggregateOutputType | null
  }

  export type BlockedSlotMinAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    blockedDate: Date | null
    blockedStartTime: string | null
    blockedEndTime: string | null
    reason: string | null
    appliesToAllAppointmentTypes: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type BlockedSlotMaxAggregateOutputType = {
    id: string | null
    locationId: string | null
    appointmentTypeId: string | null
    blockedDate: Date | null
    blockedStartTime: string | null
    blockedEndTime: string | null
    reason: string | null
    appliesToAllAppointmentTypes: boolean | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type BlockedSlotCountAggregateOutputType = {
    id: number
    locationId: number
    appointmentTypeId: number
    blockedDate: number
    blockedStartTime: number
    blockedEndTime: number
    reason: number
    appliesToAllAppointmentTypes: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type BlockedSlotMinAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    blockedDate?: true
    blockedStartTime?: true
    blockedEndTime?: true
    reason?: true
    appliesToAllAppointmentTypes?: true
    createdBy?: true
    createdAt?: true
  }

  export type BlockedSlotMaxAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    blockedDate?: true
    blockedStartTime?: true
    blockedEndTime?: true
    reason?: true
    appliesToAllAppointmentTypes?: true
    createdBy?: true
    createdAt?: true
  }

  export type BlockedSlotCountAggregateInputType = {
    id?: true
    locationId?: true
    appointmentTypeId?: true
    blockedDate?: true
    blockedStartTime?: true
    blockedEndTime?: true
    reason?: true
    appliesToAllAppointmentTypes?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type BlockedSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedSlot to aggregate.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedSlots
    **/
    _count?: true | BlockedSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedSlotMaxAggregateInputType
  }

  export type GetBlockedSlotAggregateType<T extends BlockedSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedSlot[P]>
      : GetScalarType<T[P], AggregateBlockedSlot[P]>
  }




  export type BlockedSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedSlotWhereInput
    orderBy?: BlockedSlotOrderByWithAggregationInput | BlockedSlotOrderByWithAggregationInput[]
    by: BlockedSlotScalarFieldEnum[] | BlockedSlotScalarFieldEnum
    having?: BlockedSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedSlotCountAggregateInputType | true
    _min?: BlockedSlotMinAggregateInputType
    _max?: BlockedSlotMaxAggregateInputType
  }

  export type BlockedSlotGroupByOutputType = {
    id: string
    locationId: string
    appointmentTypeId: string | null
    blockedDate: Date
    blockedStartTime: string
    blockedEndTime: string
    reason: string | null
    appliesToAllAppointmentTypes: boolean
    createdBy: string | null
    createdAt: Date
    _count: BlockedSlotCountAggregateOutputType | null
    _min: BlockedSlotMinAggregateOutputType | null
    _max: BlockedSlotMaxAggregateOutputType | null
  }

  type GetBlockedSlotGroupByPayload<T extends BlockedSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedSlotGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedSlotGroupByOutputType[P]>
        }
      >
    >


  export type BlockedSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    blockedDate?: boolean
    blockedStartTime?: boolean
    blockedEndTime?: boolean
    reason?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | BlockedSlot$appointmentTypeArgs<ExtArgs>
    user?: boolean | BlockedSlot$userArgs<ExtArgs>
  }, ExtArgs["result"]["blockedSlot"]>

  export type BlockedSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    blockedDate?: boolean
    blockedStartTime?: boolean
    blockedEndTime?: boolean
    reason?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | BlockedSlot$appointmentTypeArgs<ExtArgs>
    user?: boolean | BlockedSlot$userArgs<ExtArgs>
  }, ExtArgs["result"]["blockedSlot"]>

  export type BlockedSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    blockedDate?: boolean
    blockedStartTime?: boolean
    blockedEndTime?: boolean
    reason?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdBy?: boolean
    createdAt?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | BlockedSlot$appointmentTypeArgs<ExtArgs>
    user?: boolean | BlockedSlot$userArgs<ExtArgs>
  }, ExtArgs["result"]["blockedSlot"]>

  export type BlockedSlotSelectScalar = {
    id?: boolean
    locationId?: boolean
    appointmentTypeId?: boolean
    blockedDate?: boolean
    blockedStartTime?: boolean
    blockedEndTime?: boolean
    reason?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type BlockedSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "locationId" | "appointmentTypeId" | "blockedDate" | "blockedStartTime" | "blockedEndTime" | "reason" | "appliesToAllAppointmentTypes" | "createdBy" | "createdAt", ExtArgs["result"]["blockedSlot"]>
  export type BlockedSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | BlockedSlot$appointmentTypeArgs<ExtArgs>
    user?: boolean | BlockedSlot$userArgs<ExtArgs>
  }
  export type BlockedSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | BlockedSlot$appointmentTypeArgs<ExtArgs>
    user?: boolean | BlockedSlot$userArgs<ExtArgs>
  }
  export type BlockedSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    appointmentType?: boolean | BlockedSlot$appointmentTypeArgs<ExtArgs>
    user?: boolean | BlockedSlot$userArgs<ExtArgs>
  }

  export type $BlockedSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedSlot"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      appointmentType: Prisma.$AppointmentTypePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      locationId: string
      appointmentTypeId: string | null
      blockedDate: Date
      blockedStartTime: string
      blockedEndTime: string
      reason: string | null
      appliesToAllAppointmentTypes: boolean
      createdBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["blockedSlot"]>
    composites: {}
  }

  type BlockedSlotGetPayload<S extends boolean | null | undefined | BlockedSlotDefaultArgs> = $Result.GetResult<Prisma.$BlockedSlotPayload, S>

  type BlockedSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedSlotCountAggregateInputType | true
    }

  export interface BlockedSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedSlot'], meta: { name: 'BlockedSlot' } }
    /**
     * Find zero or one BlockedSlot that matches the filter.
     * @param {BlockedSlotFindUniqueArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedSlotFindUniqueArgs>(args: SelectSubset<T, BlockedSlotFindUniqueArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedSlotFindUniqueOrThrowArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotFindFirstArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedSlotFindFirstArgs>(args?: SelectSubset<T, BlockedSlotFindFirstArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotFindFirstOrThrowArgs} args - Arguments to find a BlockedSlot
     * @example
     * // Get one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedSlots
     * const blockedSlots = await prisma.blockedSlot.findMany()
     * 
     * // Get first 10 BlockedSlots
     * const blockedSlots = await prisma.blockedSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedSlotWithIdOnly = await prisma.blockedSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedSlotFindManyArgs>(args?: SelectSubset<T, BlockedSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedSlot.
     * @param {BlockedSlotCreateArgs} args - Arguments to create a BlockedSlot.
     * @example
     * // Create one BlockedSlot
     * const BlockedSlot = await prisma.blockedSlot.create({
     *   data: {
     *     // ... data to create a BlockedSlot
     *   }
     * })
     * 
     */
    create<T extends BlockedSlotCreateArgs>(args: SelectSubset<T, BlockedSlotCreateArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedSlots.
     * @param {BlockedSlotCreateManyArgs} args - Arguments to create many BlockedSlots.
     * @example
     * // Create many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedSlotCreateManyArgs>(args?: SelectSubset<T, BlockedSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockedSlots and returns the data saved in the database.
     * @param {BlockedSlotCreateManyAndReturnArgs} args - Arguments to create many BlockedSlots.
     * @example
     * // Create many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockedSlots and only return the `id`
     * const blockedSlotWithIdOnly = await prisma.blockedSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockedSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockedSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockedSlot.
     * @param {BlockedSlotDeleteArgs} args - Arguments to delete one BlockedSlot.
     * @example
     * // Delete one BlockedSlot
     * const BlockedSlot = await prisma.blockedSlot.delete({
     *   where: {
     *     // ... filter to delete one BlockedSlot
     *   }
     * })
     * 
     */
    delete<T extends BlockedSlotDeleteArgs>(args: SelectSubset<T, BlockedSlotDeleteArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedSlot.
     * @param {BlockedSlotUpdateArgs} args - Arguments to update one BlockedSlot.
     * @example
     * // Update one BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedSlotUpdateArgs>(args: SelectSubset<T, BlockedSlotUpdateArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedSlots.
     * @param {BlockedSlotDeleteManyArgs} args - Arguments to filter BlockedSlots to delete.
     * @example
     * // Delete a few BlockedSlots
     * const { count } = await prisma.blockedSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedSlotDeleteManyArgs>(args?: SelectSubset<T, BlockedSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedSlotUpdateManyArgs>(args: SelectSubset<T, BlockedSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedSlots and returns the data updated in the database.
     * @param {BlockedSlotUpdateManyAndReturnArgs} args - Arguments to update many BlockedSlots.
     * @example
     * // Update many BlockedSlots
     * const blockedSlot = await prisma.blockedSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockedSlots and only return the `id`
     * const blockedSlotWithIdOnly = await prisma.blockedSlot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlockedSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockedSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockedSlot.
     * @param {BlockedSlotUpsertArgs} args - Arguments to update or create a BlockedSlot.
     * @example
     * // Update or create a BlockedSlot
     * const blockedSlot = await prisma.blockedSlot.upsert({
     *   create: {
     *     // ... data to create a BlockedSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedSlot we want to update
     *   }
     * })
     */
    upsert<T extends BlockedSlotUpsertArgs>(args: SelectSubset<T, BlockedSlotUpsertArgs<ExtArgs>>): Prisma__BlockedSlotClient<$Result.GetResult<Prisma.$BlockedSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotCountArgs} args - Arguments to filter BlockedSlots to count.
     * @example
     * // Count the number of BlockedSlots
     * const count = await prisma.blockedSlot.count({
     *   where: {
     *     // ... the filter for the BlockedSlots we want to count
     *   }
     * })
    **/
    count<T extends BlockedSlotCountArgs>(
      args?: Subset<T, BlockedSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockedSlotAggregateArgs>(args: Subset<T, BlockedSlotAggregateArgs>): Prisma.PrismaPromise<GetBlockedSlotAggregateType<T>>

    /**
     * Group by BlockedSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedSlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockedSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedSlotGroupByArgs['orderBy'] }
        : { orderBy?: BlockedSlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockedSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedSlot model
   */
  readonly fields: BlockedSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointmentType<T extends BlockedSlot$appointmentTypeArgs<ExtArgs> = {}>(args?: Subset<T, BlockedSlot$appointmentTypeArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends BlockedSlot$userArgs<ExtArgs> = {}>(args?: Subset<T, BlockedSlot$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockedSlot model
   */
  interface BlockedSlotFieldRefs {
    readonly id: FieldRef<"BlockedSlot", 'String'>
    readonly locationId: FieldRef<"BlockedSlot", 'String'>
    readonly appointmentTypeId: FieldRef<"BlockedSlot", 'String'>
    readonly blockedDate: FieldRef<"BlockedSlot", 'DateTime'>
    readonly blockedStartTime: FieldRef<"BlockedSlot", 'String'>
    readonly blockedEndTime: FieldRef<"BlockedSlot", 'String'>
    readonly reason: FieldRef<"BlockedSlot", 'String'>
    readonly appliesToAllAppointmentTypes: FieldRef<"BlockedSlot", 'Boolean'>
    readonly createdBy: FieldRef<"BlockedSlot", 'String'>
    readonly createdAt: FieldRef<"BlockedSlot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockedSlot findUnique
   */
  export type BlockedSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot findUniqueOrThrow
   */
  export type BlockedSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot findFirst
   */
  export type BlockedSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedSlots.
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedSlots.
     */
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * BlockedSlot findFirstOrThrow
   */
  export type BlockedSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlot to fetch.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedSlots.
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedSlots.
     */
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * BlockedSlot findMany
   */
  export type BlockedSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter, which BlockedSlots to fetch.
     */
    where?: BlockedSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedSlots to fetch.
     */
    orderBy?: BlockedSlotOrderByWithRelationInput | BlockedSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedSlots.
     */
    cursor?: BlockedSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedSlots.
     */
    skip?: number
    distinct?: BlockedSlotScalarFieldEnum | BlockedSlotScalarFieldEnum[]
  }

  /**
   * BlockedSlot create
   */
  export type BlockedSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockedSlot.
     */
    data: XOR<BlockedSlotCreateInput, BlockedSlotUncheckedCreateInput>
  }

  /**
   * BlockedSlot createMany
   */
  export type BlockedSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedSlots.
     */
    data: BlockedSlotCreateManyInput | BlockedSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedSlot createManyAndReturn
   */
  export type BlockedSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * The data used to create many BlockedSlots.
     */
    data: BlockedSlotCreateManyInput | BlockedSlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedSlot update
   */
  export type BlockedSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockedSlot.
     */
    data: XOR<BlockedSlotUpdateInput, BlockedSlotUncheckedUpdateInput>
    /**
     * Choose, which BlockedSlot to update.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot updateMany
   */
  export type BlockedSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedSlots.
     */
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyInput>
    /**
     * Filter which BlockedSlots to update
     */
    where?: BlockedSlotWhereInput
    /**
     * Limit how many BlockedSlots to update.
     */
    limit?: number
  }

  /**
   * BlockedSlot updateManyAndReturn
   */
  export type BlockedSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * The data used to update BlockedSlots.
     */
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyInput>
    /**
     * Filter which BlockedSlots to update
     */
    where?: BlockedSlotWhereInput
    /**
     * Limit how many BlockedSlots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockedSlot upsert
   */
  export type BlockedSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockedSlot to update in case it exists.
     */
    where: BlockedSlotWhereUniqueInput
    /**
     * In case the BlockedSlot found by the `where` argument doesn't exist, create a new BlockedSlot with this data.
     */
    create: XOR<BlockedSlotCreateInput, BlockedSlotUncheckedCreateInput>
    /**
     * In case the BlockedSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedSlotUpdateInput, BlockedSlotUncheckedUpdateInput>
  }

  /**
   * BlockedSlot delete
   */
  export type BlockedSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
    /**
     * Filter which BlockedSlot to delete.
     */
    where: BlockedSlotWhereUniqueInput
  }

  /**
   * BlockedSlot deleteMany
   */
  export type BlockedSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedSlots to delete
     */
    where?: BlockedSlotWhereInput
    /**
     * Limit how many BlockedSlots to delete.
     */
    limit?: number
  }

  /**
   * BlockedSlot.appointmentType
   */
  export type BlockedSlot$appointmentTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentType
     */
    select?: AppointmentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentType
     */
    omit?: AppointmentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentTypeInclude<ExtArgs> | null
    where?: AppointmentTypeWhereInput
  }

  /**
   * BlockedSlot.user
   */
  export type BlockedSlot$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BlockedSlot without action
   */
  export type BlockedSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedSlot
     */
    select?: BlockedSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedSlot
     */
    omit?: BlockedSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedSlotInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    appointmentTypeId: string | null
    locationId: string | null
    bookingReference: string | null
    appointmentDate: Date | null
    appointmentTime: string | null
    status: $Enums.BookingStatus | null
    bookingDate: Date | null
    cancellationDate: Date | null
    cancelledBy: $Enums.CancelledBy | null
    cancellationReason: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    appointmentTypeId: string | null
    locationId: string | null
    bookingReference: string | null
    appointmentDate: Date | null
    appointmentTime: string | null
    status: $Enums.BookingStatus | null
    bookingDate: Date | null
    cancellationDate: Date | null
    cancelledBy: $Enums.CancelledBy | null
    cancellationReason: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    appointmentTypeId: number
    locationId: number
    bookingReference: number
    appointmentDate: number
    appointmentTime: number
    status: number
    bookingDate: number
    cancellationDate: number
    cancelledBy: number
    cancellationReason: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    appointmentTypeId?: true
    locationId?: true
    bookingReference?: true
    appointmentDate?: true
    appointmentTime?: true
    status?: true
    bookingDate?: true
    cancellationDate?: true
    cancelledBy?: true
    cancellationReason?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    appointmentTypeId?: true
    locationId?: true
    bookingReference?: true
    appointmentDate?: true
    appointmentTime?: true
    status?: true
    bookingDate?: true
    cancellationDate?: true
    cancelledBy?: true
    cancellationReason?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    appointmentTypeId?: true
    locationId?: true
    bookingReference?: true
    appointmentDate?: true
    appointmentTime?: true
    status?: true
    bookingDate?: true
    cancellationDate?: true
    cancelledBy?: true
    cancellationReason?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    appointmentTypeId: string
    locationId: string
    bookingReference: string
    appointmentDate: Date
    appointmentTime: string
    status: $Enums.BookingStatus
    bookingDate: Date
    cancellationDate: Date | null
    cancelledBy: $Enums.CancelledBy | null
    cancellationReason: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    bookingReference?: boolean
    appointmentDate?: boolean
    appointmentTime?: boolean
    status?: boolean
    bookingDate?: boolean
    cancellationDate?: boolean
    cancelledBy?: boolean
    cancellationReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    emailNotifications?: boolean | Booking$emailNotificationsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    bookingReference?: boolean
    appointmentDate?: boolean
    appointmentTime?: boolean
    status?: boolean
    bookingDate?: boolean
    cancellationDate?: boolean
    cancelledBy?: boolean
    cancellationReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    bookingReference?: boolean
    appointmentDate?: boolean
    appointmentTime?: boolean
    status?: boolean
    bookingDate?: boolean
    cancellationDate?: boolean
    cancelledBy?: boolean
    cancellationReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    bookingReference?: boolean
    appointmentDate?: boolean
    appointmentTime?: boolean
    status?: boolean
    bookingDate?: boolean
    cancellationDate?: boolean
    cancelledBy?: boolean
    cancellationReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "appointmentTypeId" | "locationId" | "bookingReference" | "appointmentDate" | "appointmentTime" | "status" | "bookingDate" | "cancellationDate" | "cancelledBy" | "cancellationReason" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    emailNotifications?: boolean | Booking$emailNotificationsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointmentType: Prisma.$AppointmentTypePayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      emailNotifications: Prisma.$EmailNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      appointmentTypeId: string
      locationId: string
      bookingReference: string
      appointmentDate: Date
      appointmentTime: string
      status: $Enums.BookingStatus
      bookingDate: Date
      cancellationDate: Date | null
      cancelledBy: $Enums.CancelledBy | null
      cancellationReason: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointmentType<T extends AppointmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentTypeDefaultArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emailNotifications<T extends Booking$emailNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$emailNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly appointmentTypeId: FieldRef<"Booking", 'String'>
    readonly locationId: FieldRef<"Booking", 'String'>
    readonly bookingReference: FieldRef<"Booking", 'String'>
    readonly appointmentDate: FieldRef<"Booking", 'DateTime'>
    readonly appointmentTime: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly bookingDate: FieldRef<"Booking", 'DateTime'>
    readonly cancellationDate: FieldRef<"Booking", 'DateTime'>
    readonly cancelledBy: FieldRef<"Booking", 'CancelledBy'>
    readonly cancellationReason: FieldRef<"Booking", 'String'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.emailNotifications
   */
  export type Booking$emailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    cursor?: EmailNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Waitlist
   */

  export type AggregateWaitlist = {
    _count: WaitlistCountAggregateOutputType | null
    _avg: WaitlistAvgAggregateOutputType | null
    _sum: WaitlistSumAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  export type WaitlistAvgAggregateOutputType = {
    position: number | null
    notificationCount: number | null
  }

  export type WaitlistSumAggregateOutputType = {
    position: number | null
    notificationCount: number | null
  }

  export type WaitlistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    appointmentTypeId: string | null
    locationId: string | null
    preferredDateStart: Date | null
    preferredDateEnd: Date | null
    status: $Enums.WaitlistStatus | null
    position: number | null
    joinedAt: Date | null
    notifiedAt: Date | null
    notificationCount: number | null
    expiresAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaitlistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    appointmentTypeId: string | null
    locationId: string | null
    preferredDateStart: Date | null
    preferredDateEnd: Date | null
    status: $Enums.WaitlistStatus | null
    position: number | null
    joinedAt: Date | null
    notifiedAt: Date | null
    notificationCount: number | null
    expiresAt: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaitlistCountAggregateOutputType = {
    id: number
    userId: number
    appointmentTypeId: number
    locationId: number
    preferredDateStart: number
    preferredDateEnd: number
    status: number
    position: number
    joinedAt: number
    notifiedAt: number
    notificationCount: number
    expiresAt: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaitlistAvgAggregateInputType = {
    position?: true
    notificationCount?: true
  }

  export type WaitlistSumAggregateInputType = {
    position?: true
    notificationCount?: true
  }

  export type WaitlistMinAggregateInputType = {
    id?: true
    userId?: true
    appointmentTypeId?: true
    locationId?: true
    preferredDateStart?: true
    preferredDateEnd?: true
    status?: true
    position?: true
    joinedAt?: true
    notifiedAt?: true
    notificationCount?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaitlistMaxAggregateInputType = {
    id?: true
    userId?: true
    appointmentTypeId?: true
    locationId?: true
    preferredDateStart?: true
    preferredDateEnd?: true
    status?: true
    position?: true
    joinedAt?: true
    notifiedAt?: true
    notificationCount?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaitlistCountAggregateInputType = {
    id?: true
    userId?: true
    appointmentTypeId?: true
    locationId?: true
    preferredDateStart?: true
    preferredDateEnd?: true
    status?: true
    position?: true
    joinedAt?: true
    notifiedAt?: true
    notificationCount?: true
    expiresAt?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaitlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waitlist to aggregate.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Waitlists
    **/
    _count?: true | WaitlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaitlistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaitlistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitlistMaxAggregateInputType
  }

  export type GetWaitlistAggregateType<T extends WaitlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlist[P]>
      : GetScalarType<T[P], AggregateWaitlist[P]>
  }




  export type WaitlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitlistWhereInput
    orderBy?: WaitlistOrderByWithAggregationInput | WaitlistOrderByWithAggregationInput[]
    by: WaitlistScalarFieldEnum[] | WaitlistScalarFieldEnum
    having?: WaitlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitlistCountAggregateInputType | true
    _avg?: WaitlistAvgAggregateInputType
    _sum?: WaitlistSumAggregateInputType
    _min?: WaitlistMinAggregateInputType
    _max?: WaitlistMaxAggregateInputType
  }

  export type WaitlistGroupByOutputType = {
    id: string
    userId: string
    appointmentTypeId: string
    locationId: string
    preferredDateStart: Date | null
    preferredDateEnd: Date | null
    status: $Enums.WaitlistStatus
    position: number | null
    joinedAt: Date
    notifiedAt: Date | null
    notificationCount: number
    expiresAt: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: WaitlistCountAggregateOutputType | null
    _avg: WaitlistAvgAggregateOutputType | null
    _sum: WaitlistSumAggregateOutputType | null
    _min: WaitlistMinAggregateOutputType | null
    _max: WaitlistMaxAggregateOutputType | null
  }

  type GetWaitlistGroupByPayload<T extends WaitlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
            : GetScalarType<T[P], WaitlistGroupByOutputType[P]>
        }
      >
    >


  export type WaitlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    preferredDateStart?: boolean
    preferredDateEnd?: boolean
    status?: boolean
    position?: boolean
    joinedAt?: boolean
    notifiedAt?: boolean
    notificationCount?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    emailNotifications?: boolean | Waitlist$emailNotificationsArgs<ExtArgs>
    _count?: boolean | WaitlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waitlist"]>

  export type WaitlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    preferredDateStart?: boolean
    preferredDateEnd?: boolean
    status?: boolean
    position?: boolean
    joinedAt?: boolean
    notifiedAt?: boolean
    notificationCount?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waitlist"]>

  export type WaitlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    preferredDateStart?: boolean
    preferredDateEnd?: boolean
    status?: boolean
    position?: boolean
    joinedAt?: boolean
    notifiedAt?: boolean
    notificationCount?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waitlist"]>

  export type WaitlistSelectScalar = {
    id?: boolean
    userId?: boolean
    appointmentTypeId?: boolean
    locationId?: boolean
    preferredDateStart?: boolean
    preferredDateEnd?: boolean
    status?: boolean
    position?: boolean
    joinedAt?: boolean
    notifiedAt?: boolean
    notificationCount?: boolean
    expiresAt?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaitlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "appointmentTypeId" | "locationId" | "preferredDateStart" | "preferredDateEnd" | "status" | "position" | "joinedAt" | "notifiedAt" | "notificationCount" | "expiresAt" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["waitlist"]>
  export type WaitlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
    emailNotifications?: boolean | Waitlist$emailNotificationsArgs<ExtArgs>
    _count?: boolean | WaitlistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WaitlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }
  export type WaitlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointmentType?: boolean | AppointmentTypeDefaultArgs<ExtArgs>
    location?: boolean | LocationDefaultArgs<ExtArgs>
  }

  export type $WaitlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Waitlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointmentType: Prisma.$AppointmentTypePayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs>
      emailNotifications: Prisma.$EmailNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      appointmentTypeId: string
      locationId: string
      preferredDateStart: Date | null
      preferredDateEnd: Date | null
      status: $Enums.WaitlistStatus
      position: number | null
      joinedAt: Date
      notifiedAt: Date | null
      notificationCount: number
      expiresAt: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waitlist"]>
    composites: {}
  }

  type WaitlistGetPayload<S extends boolean | null | undefined | WaitlistDefaultArgs> = $Result.GetResult<Prisma.$WaitlistPayload, S>

  type WaitlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaitlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitlistCountAggregateInputType | true
    }

  export interface WaitlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Waitlist'], meta: { name: 'Waitlist' } }
    /**
     * Find zero or one Waitlist that matches the filter.
     * @param {WaitlistFindUniqueArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaitlistFindUniqueArgs>(args: SelectSubset<T, WaitlistFindUniqueArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waitlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaitlistFindUniqueOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaitlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WaitlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistFindFirstArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaitlistFindFirstArgs>(args?: SelectSubset<T, WaitlistFindFirstArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waitlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistFindFirstOrThrowArgs} args - Arguments to find a Waitlist
     * @example
     * // Get one Waitlist
     * const waitlist = await prisma.waitlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaitlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WaitlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waitlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waitlists
     * const waitlists = await prisma.waitlist.findMany()
     * 
     * // Get first 10 Waitlists
     * const waitlists = await prisma.waitlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaitlistFindManyArgs>(args?: SelectSubset<T, WaitlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waitlist.
     * @param {WaitlistCreateArgs} args - Arguments to create a Waitlist.
     * @example
     * // Create one Waitlist
     * const Waitlist = await prisma.waitlist.create({
     *   data: {
     *     // ... data to create a Waitlist
     *   }
     * })
     * 
     */
    create<T extends WaitlistCreateArgs>(args: SelectSubset<T, WaitlistCreateArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waitlists.
     * @param {WaitlistCreateManyArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaitlistCreateManyArgs>(args?: SelectSubset<T, WaitlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waitlists and returns the data saved in the database.
     * @param {WaitlistCreateManyAndReturnArgs} args - Arguments to create many Waitlists.
     * @example
     * // Create many Waitlists
     * const waitlist = await prisma.waitlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waitlists and only return the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaitlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WaitlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waitlist.
     * @param {WaitlistDeleteArgs} args - Arguments to delete one Waitlist.
     * @example
     * // Delete one Waitlist
     * const Waitlist = await prisma.waitlist.delete({
     *   where: {
     *     // ... filter to delete one Waitlist
     *   }
     * })
     * 
     */
    delete<T extends WaitlistDeleteArgs>(args: SelectSubset<T, WaitlistDeleteArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waitlist.
     * @param {WaitlistUpdateArgs} args - Arguments to update one Waitlist.
     * @example
     * // Update one Waitlist
     * const waitlist = await prisma.waitlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaitlistUpdateArgs>(args: SelectSubset<T, WaitlistUpdateArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waitlists.
     * @param {WaitlistDeleteManyArgs} args - Arguments to filter Waitlists to delete.
     * @example
     * // Delete a few Waitlists
     * const { count } = await prisma.waitlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaitlistDeleteManyArgs>(args?: SelectSubset<T, WaitlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaitlistUpdateManyArgs>(args: SelectSubset<T, WaitlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waitlists and returns the data updated in the database.
     * @param {WaitlistUpdateManyAndReturnArgs} args - Arguments to update many Waitlists.
     * @example
     * // Update many Waitlists
     * const waitlist = await prisma.waitlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waitlists and only return the `id`
     * const waitlistWithIdOnly = await prisma.waitlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WaitlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WaitlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waitlist.
     * @param {WaitlistUpsertArgs} args - Arguments to update or create a Waitlist.
     * @example
     * // Update or create a Waitlist
     * const waitlist = await prisma.waitlist.upsert({
     *   create: {
     *     // ... data to create a Waitlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waitlist we want to update
     *   }
     * })
     */
    upsert<T extends WaitlistUpsertArgs>(args: SelectSubset<T, WaitlistUpsertArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waitlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistCountArgs} args - Arguments to filter Waitlists to count.
     * @example
     * // Count the number of Waitlists
     * const count = await prisma.waitlist.count({
     *   where: {
     *     // ... the filter for the Waitlists we want to count
     *   }
     * })
    **/
    count<T extends WaitlistCountArgs>(
      args?: Subset<T, WaitlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WaitlistAggregateArgs>(args: Subset<T, WaitlistAggregateArgs>): Prisma.PrismaPromise<GetWaitlistAggregateType<T>>

    /**
     * Group by Waitlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WaitlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaitlistGroupByArgs['orderBy'] }
        : { orderBy?: WaitlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WaitlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Waitlist model
   */
  readonly fields: WaitlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Waitlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaitlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointmentType<T extends AppointmentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentTypeDefaultArgs<ExtArgs>>): Prisma__AppointmentTypeClient<$Result.GetResult<Prisma.$AppointmentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    emailNotifications<T extends Waitlist$emailNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Waitlist$emailNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Waitlist model
   */
  interface WaitlistFieldRefs {
    readonly id: FieldRef<"Waitlist", 'String'>
    readonly userId: FieldRef<"Waitlist", 'String'>
    readonly appointmentTypeId: FieldRef<"Waitlist", 'String'>
    readonly locationId: FieldRef<"Waitlist", 'String'>
    readonly preferredDateStart: FieldRef<"Waitlist", 'DateTime'>
    readonly preferredDateEnd: FieldRef<"Waitlist", 'DateTime'>
    readonly status: FieldRef<"Waitlist", 'WaitlistStatus'>
    readonly position: FieldRef<"Waitlist", 'Int'>
    readonly joinedAt: FieldRef<"Waitlist", 'DateTime'>
    readonly notifiedAt: FieldRef<"Waitlist", 'DateTime'>
    readonly notificationCount: FieldRef<"Waitlist", 'Int'>
    readonly expiresAt: FieldRef<"Waitlist", 'DateTime'>
    readonly notes: FieldRef<"Waitlist", 'String'>
    readonly createdAt: FieldRef<"Waitlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Waitlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Waitlist findUnique
   */
  export type WaitlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist findUniqueOrThrow
   */
  export type WaitlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist findFirst
   */
  export type WaitlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waitlists.
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * Waitlist findFirstOrThrow
   */
  export type WaitlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * Filter, which Waitlist to fetch.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Waitlists.
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Waitlists.
     */
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * Waitlist findMany
   */
  export type WaitlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * Filter, which Waitlists to fetch.
     */
    where?: WaitlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Waitlists to fetch.
     */
    orderBy?: WaitlistOrderByWithRelationInput | WaitlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Waitlists.
     */
    cursor?: WaitlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Waitlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Waitlists.
     */
    skip?: number
    distinct?: WaitlistScalarFieldEnum | WaitlistScalarFieldEnum[]
  }

  /**
   * Waitlist create
   */
  export type WaitlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Waitlist.
     */
    data: XOR<WaitlistCreateInput, WaitlistUncheckedCreateInput>
  }

  /**
   * Waitlist createMany
   */
  export type WaitlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Waitlists.
     */
    data: WaitlistCreateManyInput | WaitlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Waitlist createManyAndReturn
   */
  export type WaitlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * The data used to create many Waitlists.
     */
    data: WaitlistCreateManyInput | WaitlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waitlist update
   */
  export type WaitlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Waitlist.
     */
    data: XOR<WaitlistUpdateInput, WaitlistUncheckedUpdateInput>
    /**
     * Choose, which Waitlist to update.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist updateMany
   */
  export type WaitlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Waitlists.
     */
    data: XOR<WaitlistUpdateManyMutationInput, WaitlistUncheckedUpdateManyInput>
    /**
     * Filter which Waitlists to update
     */
    where?: WaitlistWhereInput
    /**
     * Limit how many Waitlists to update.
     */
    limit?: number
  }

  /**
   * Waitlist updateManyAndReturn
   */
  export type WaitlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * The data used to update Waitlists.
     */
    data: XOR<WaitlistUpdateManyMutationInput, WaitlistUncheckedUpdateManyInput>
    /**
     * Filter which Waitlists to update
     */
    where?: WaitlistWhereInput
    /**
     * Limit how many Waitlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Waitlist upsert
   */
  export type WaitlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Waitlist to update in case it exists.
     */
    where: WaitlistWhereUniqueInput
    /**
     * In case the Waitlist found by the `where` argument doesn't exist, create a new Waitlist with this data.
     */
    create: XOR<WaitlistCreateInput, WaitlistUncheckedCreateInput>
    /**
     * In case the Waitlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaitlistUpdateInput, WaitlistUncheckedUpdateInput>
  }

  /**
   * Waitlist delete
   */
  export type WaitlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    /**
     * Filter which Waitlist to delete.
     */
    where: WaitlistWhereUniqueInput
  }

  /**
   * Waitlist deleteMany
   */
  export type WaitlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Waitlists to delete
     */
    where?: WaitlistWhereInput
    /**
     * Limit how many Waitlists to delete.
     */
    limit?: number
  }

  /**
   * Waitlist.emailNotifications
   */
  export type Waitlist$emailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    cursor?: EmailNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * Waitlist without action
   */
  export type WaitlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
  }


  /**
   * Model EmailNotification
   */

  export type AggregateEmailNotification = {
    _count: EmailNotificationCountAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  export type EmailNotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    emailType: $Enums.EmailType | null
    recipientEmail: string | null
    subject: string | null
    status: $Enums.EmailStatus | null
    sentAt: Date | null
    bookingId: string | null
    waitlistId: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type EmailNotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    emailType: $Enums.EmailType | null
    recipientEmail: string | null
    subject: string | null
    status: $Enums.EmailStatus | null
    sentAt: Date | null
    bookingId: string | null
    waitlistId: string | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type EmailNotificationCountAggregateOutputType = {
    id: number
    userId: number
    emailType: number
    recipientEmail: number
    subject: number
    status: number
    sentAt: number
    bookingId: number
    waitlistId: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type EmailNotificationMinAggregateInputType = {
    id?: true
    userId?: true
    emailType?: true
    recipientEmail?: true
    subject?: true
    status?: true
    sentAt?: true
    bookingId?: true
    waitlistId?: true
    errorMessage?: true
    createdAt?: true
  }

  export type EmailNotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    emailType?: true
    recipientEmail?: true
    subject?: true
    status?: true
    sentAt?: true
    bookingId?: true
    waitlistId?: true
    errorMessage?: true
    createdAt?: true
  }

  export type EmailNotificationCountAggregateInputType = {
    id?: true
    userId?: true
    emailType?: true
    recipientEmail?: true
    subject?: true
    status?: true
    sentAt?: true
    bookingId?: true
    waitlistId?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type EmailNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotification to aggregate.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailNotifications
    **/
    _count?: true | EmailNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type GetEmailNotificationAggregateType<T extends EmailNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailNotification[P]>
      : GetScalarType<T[P], AggregateEmailNotification[P]>
  }




  export type EmailNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailNotificationWhereInput
    orderBy?: EmailNotificationOrderByWithAggregationInput | EmailNotificationOrderByWithAggregationInput[]
    by: EmailNotificationScalarFieldEnum[] | EmailNotificationScalarFieldEnum
    having?: EmailNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailNotificationCountAggregateInputType | true
    _min?: EmailNotificationMinAggregateInputType
    _max?: EmailNotificationMaxAggregateInputType
  }

  export type EmailNotificationGroupByOutputType = {
    id: string
    userId: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status: $Enums.EmailStatus
    sentAt: Date | null
    bookingId: string | null
    waitlistId: string | null
    errorMessage: string | null
    createdAt: Date
    _count: EmailNotificationCountAggregateOutputType | null
    _min: EmailNotificationMinAggregateOutputType | null
    _max: EmailNotificationMaxAggregateOutputType | null
  }

  type GetEmailNotificationGroupByPayload<T extends EmailNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailNotificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailType?: boolean
    recipientEmail?: boolean
    subject?: boolean
    status?: boolean
    sentAt?: boolean
    bookingId?: boolean
    waitlistId?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | EmailNotification$bookingArgs<ExtArgs>
    waitlist?: boolean | EmailNotification$waitlistArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailType?: boolean
    recipientEmail?: boolean
    subject?: boolean
    status?: boolean
    sentAt?: boolean
    bookingId?: boolean
    waitlistId?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | EmailNotification$bookingArgs<ExtArgs>
    waitlist?: boolean | EmailNotification$waitlistArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    emailType?: boolean
    recipientEmail?: boolean
    subject?: boolean
    status?: boolean
    sentAt?: boolean
    bookingId?: boolean
    waitlistId?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | EmailNotification$bookingArgs<ExtArgs>
    waitlist?: boolean | EmailNotification$waitlistArgs<ExtArgs>
  }, ExtArgs["result"]["emailNotification"]>

  export type EmailNotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    emailType?: boolean
    recipientEmail?: boolean
    subject?: boolean
    status?: boolean
    sentAt?: boolean
    bookingId?: boolean
    waitlistId?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type EmailNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "emailType" | "recipientEmail" | "subject" | "status" | "sentAt" | "bookingId" | "waitlistId" | "errorMessage" | "createdAt", ExtArgs["result"]["emailNotification"]>
  export type EmailNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | EmailNotification$bookingArgs<ExtArgs>
    waitlist?: boolean | EmailNotification$waitlistArgs<ExtArgs>
  }
  export type EmailNotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | EmailNotification$bookingArgs<ExtArgs>
    waitlist?: boolean | EmailNotification$waitlistArgs<ExtArgs>
  }
  export type EmailNotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    booking?: boolean | EmailNotification$bookingArgs<ExtArgs>
    waitlist?: boolean | EmailNotification$waitlistArgs<ExtArgs>
  }

  export type $EmailNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailNotification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
      waitlist: Prisma.$WaitlistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      emailType: $Enums.EmailType
      recipientEmail: string
      subject: string
      status: $Enums.EmailStatus
      sentAt: Date | null
      bookingId: string | null
      waitlistId: string | null
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["emailNotification"]>
    composites: {}
  }

  type EmailNotificationGetPayload<S extends boolean | null | undefined | EmailNotificationDefaultArgs> = $Result.GetResult<Prisma.$EmailNotificationPayload, S>

  type EmailNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailNotificationCountAggregateInputType | true
    }

  export interface EmailNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailNotification'], meta: { name: 'EmailNotification' } }
    /**
     * Find zero or one EmailNotification that matches the filter.
     * @param {EmailNotificationFindUniqueArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailNotificationFindUniqueArgs>(args: SelectSubset<T, EmailNotificationFindUniqueArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailNotificationFindUniqueOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailNotificationFindFirstArgs>(args?: SelectSubset<T, EmailNotificationFindFirstArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindFirstOrThrowArgs} args - Arguments to find a EmailNotification
     * @example
     * // Get one EmailNotification
     * const emailNotification = await prisma.emailNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany()
     * 
     * // Get first 10 EmailNotifications
     * const emailNotifications = await prisma.emailNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailNotificationFindManyArgs>(args?: SelectSubset<T, EmailNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailNotification.
     * @param {EmailNotificationCreateArgs} args - Arguments to create a EmailNotification.
     * @example
     * // Create one EmailNotification
     * const EmailNotification = await prisma.emailNotification.create({
     *   data: {
     *     // ... data to create a EmailNotification
     *   }
     * })
     * 
     */
    create<T extends EmailNotificationCreateArgs>(args: SelectSubset<T, EmailNotificationCreateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailNotifications.
     * @param {EmailNotificationCreateManyArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailNotificationCreateManyArgs>(args?: SelectSubset<T, EmailNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailNotifications and returns the data saved in the database.
     * @param {EmailNotificationCreateManyAndReturnArgs} args - Arguments to create many EmailNotifications.
     * @example
     * // Create many EmailNotifications
     * const emailNotification = await prisma.emailNotification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailNotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailNotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailNotification.
     * @param {EmailNotificationDeleteArgs} args - Arguments to delete one EmailNotification.
     * @example
     * // Delete one EmailNotification
     * const EmailNotification = await prisma.emailNotification.delete({
     *   where: {
     *     // ... filter to delete one EmailNotification
     *   }
     * })
     * 
     */
    delete<T extends EmailNotificationDeleteArgs>(args: SelectSubset<T, EmailNotificationDeleteArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailNotification.
     * @param {EmailNotificationUpdateArgs} args - Arguments to update one EmailNotification.
     * @example
     * // Update one EmailNotification
     * const emailNotification = await prisma.emailNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailNotificationUpdateArgs>(args: SelectSubset<T, EmailNotificationUpdateArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailNotifications.
     * @param {EmailNotificationDeleteManyArgs} args - Arguments to filter EmailNotifications to delete.
     * @example
     * // Delete a few EmailNotifications
     * const { count } = await prisma.emailNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailNotificationDeleteManyArgs>(args?: SelectSubset<T, EmailNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailNotificationUpdateManyArgs>(args: SelectSubset<T, EmailNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailNotifications and returns the data updated in the database.
     * @param {EmailNotificationUpdateManyAndReturnArgs} args - Arguments to update many EmailNotifications.
     * @example
     * // Update many EmailNotifications
     * const emailNotification = await prisma.emailNotification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailNotifications and only return the `id`
     * const emailNotificationWithIdOnly = await prisma.emailNotification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailNotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailNotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailNotification.
     * @param {EmailNotificationUpsertArgs} args - Arguments to update or create a EmailNotification.
     * @example
     * // Update or create a EmailNotification
     * const emailNotification = await prisma.emailNotification.upsert({
     *   create: {
     *     // ... data to create a EmailNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailNotification we want to update
     *   }
     * })
     */
    upsert<T extends EmailNotificationUpsertArgs>(args: SelectSubset<T, EmailNotificationUpsertArgs<ExtArgs>>): Prisma__EmailNotificationClient<$Result.GetResult<Prisma.$EmailNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationCountArgs} args - Arguments to filter EmailNotifications to count.
     * @example
     * // Count the number of EmailNotifications
     * const count = await prisma.emailNotification.count({
     *   where: {
     *     // ... the filter for the EmailNotifications we want to count
     *   }
     * })
    **/
    count<T extends EmailNotificationCountArgs>(
      args?: Subset<T, EmailNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailNotificationAggregateArgs>(args: Subset<T, EmailNotificationAggregateArgs>): Prisma.PrismaPromise<GetEmailNotificationAggregateType<T>>

    /**
     * Group by EmailNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailNotificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailNotification model
   */
  readonly fields: EmailNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends EmailNotification$bookingArgs<ExtArgs> = {}>(args?: Subset<T, EmailNotification$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    waitlist<T extends EmailNotification$waitlistArgs<ExtArgs> = {}>(args?: Subset<T, EmailNotification$waitlistArgs<ExtArgs>>): Prisma__WaitlistClient<$Result.GetResult<Prisma.$WaitlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailNotification model
   */
  interface EmailNotificationFieldRefs {
    readonly id: FieldRef<"EmailNotification", 'String'>
    readonly userId: FieldRef<"EmailNotification", 'String'>
    readonly emailType: FieldRef<"EmailNotification", 'EmailType'>
    readonly recipientEmail: FieldRef<"EmailNotification", 'String'>
    readonly subject: FieldRef<"EmailNotification", 'String'>
    readonly status: FieldRef<"EmailNotification", 'EmailStatus'>
    readonly sentAt: FieldRef<"EmailNotification", 'DateTime'>
    readonly bookingId: FieldRef<"EmailNotification", 'String'>
    readonly waitlistId: FieldRef<"EmailNotification", 'String'>
    readonly errorMessage: FieldRef<"EmailNotification", 'String'>
    readonly createdAt: FieldRef<"EmailNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailNotification findUnique
   */
  export type EmailNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findUniqueOrThrow
   */
  export type EmailNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification findFirst
   */
  export type EmailNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findFirstOrThrow
   */
  export type EmailNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotification to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailNotifications.
     */
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification findMany
   */
  export type EmailNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter, which EmailNotifications to fetch.
     */
    where?: EmailNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailNotifications to fetch.
     */
    orderBy?: EmailNotificationOrderByWithRelationInput | EmailNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailNotifications.
     */
    cursor?: EmailNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailNotifications.
     */
    skip?: number
    distinct?: EmailNotificationScalarFieldEnum | EmailNotificationScalarFieldEnum[]
  }

  /**
   * EmailNotification create
   */
  export type EmailNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailNotification.
     */
    data: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
  }

  /**
   * EmailNotification createMany
   */
  export type EmailNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailNotification createManyAndReturn
   */
  export type EmailNotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailNotifications.
     */
    data: EmailNotificationCreateManyInput | EmailNotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailNotification update
   */
  export type EmailNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailNotification.
     */
    data: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
    /**
     * Choose, which EmailNotification to update.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification updateMany
   */
  export type EmailNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
  }

  /**
   * EmailNotification updateManyAndReturn
   */
  export type EmailNotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailNotifications.
     */
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailNotifications to update
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailNotification upsert
   */
  export type EmailNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailNotification to update in case it exists.
     */
    where: EmailNotificationWhereUniqueInput
    /**
     * In case the EmailNotification found by the `where` argument doesn't exist, create a new EmailNotification with this data.
     */
    create: XOR<EmailNotificationCreateInput, EmailNotificationUncheckedCreateInput>
    /**
     * In case the EmailNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailNotificationUpdateInput, EmailNotificationUncheckedUpdateInput>
  }

  /**
   * EmailNotification delete
   */
  export type EmailNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
    /**
     * Filter which EmailNotification to delete.
     */
    where: EmailNotificationWhereUniqueInput
  }

  /**
   * EmailNotification deleteMany
   */
  export type EmailNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailNotifications to delete
     */
    where?: EmailNotificationWhereInput
    /**
     * Limit how many EmailNotifications to delete.
     */
    limit?: number
  }

  /**
   * EmailNotification.booking
   */
  export type EmailNotification$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * EmailNotification.waitlist
   */
  export type EmailNotification$waitlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Waitlist
     */
    select?: WaitlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Waitlist
     */
    omit?: WaitlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaitlistInclude<ExtArgs> | null
    where?: WaitlistWhereInput
  }

  /**
   * EmailNotification without action
   */
  export type EmailNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailNotification
     */
    select?: EmailNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailNotification
     */
    omit?: EmailNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailNotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    dateOfBirth: 'dateOfBirth',
    driverLicenseNumber: 'driverLicenseNumber',
    role: 'role',
    isActive: 'isActive',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppointmentTypeScalarFieldEnum: {
    id: 'id',
    typeName: 'typeName',
    description: 'description',
    durationMinutes: 'durationMinutes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentTypeScalarFieldEnum = (typeof AppointmentTypeScalarFieldEnum)[keyof typeof AppointmentTypeScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    locationName: 'locationName',
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    phoneNumber: 'phoneNumber',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LocationAppointmentTypeScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    appointmentTypeId: 'appointmentTypeId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type LocationAppointmentTypeScalarFieldEnum = (typeof LocationAppointmentTypeScalarFieldEnum)[keyof typeof LocationAppointmentTypeScalarFieldEnum]


  export const SlotConfigurationScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    appointmentTypeId: 'appointmentTypeId',
    availableDays: 'availableDays',
    startTime: 'startTime',
    endTime: 'endTime',
    slotDurationMinutes: 'slotDurationMinutes',
    slotsPerInterval: 'slotsPerInterval',
    bufferTimeMinutes: 'bufferTimeMinutes',
    advanceBookingDays: 'advanceBookingDays',
    sameDayBookingCutoffHours: 'sameDayBookingCutoffHours',
    minAdvanceBookingHours: 'minAdvanceBookingHours',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlotConfigurationScalarFieldEnum = (typeof SlotConfigurationScalarFieldEnum)[keyof typeof SlotConfigurationScalarFieldEnum]


  export const SpecialDateScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    appointmentTypeId: 'appointmentTypeId',
    date: 'date',
    dateType: 'dateType',
    reason: 'reason',
    isClosed: 'isClosed',
    modifiedStartTime: 'modifiedStartTime',
    modifiedEndTime: 'modifiedEndTime',
    appliesToAllLocations: 'appliesToAllLocations',
    appliesToAllAppointmentTypes: 'appliesToAllAppointmentTypes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecialDateScalarFieldEnum = (typeof SpecialDateScalarFieldEnum)[keyof typeof SpecialDateScalarFieldEnum]


  export const BlockedSlotScalarFieldEnum: {
    id: 'id',
    locationId: 'locationId',
    appointmentTypeId: 'appointmentTypeId',
    blockedDate: 'blockedDate',
    blockedStartTime: 'blockedStartTime',
    blockedEndTime: 'blockedEndTime',
    reason: 'reason',
    appliesToAllAppointmentTypes: 'appliesToAllAppointmentTypes',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type BlockedSlotScalarFieldEnum = (typeof BlockedSlotScalarFieldEnum)[keyof typeof BlockedSlotScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    appointmentTypeId: 'appointmentTypeId',
    locationId: 'locationId',
    bookingReference: 'bookingReference',
    appointmentDate: 'appointmentDate',
    appointmentTime: 'appointmentTime',
    status: 'status',
    bookingDate: 'bookingDate',
    cancellationDate: 'cancellationDate',
    cancelledBy: 'cancelledBy',
    cancellationReason: 'cancellationReason',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const WaitlistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    appointmentTypeId: 'appointmentTypeId',
    locationId: 'locationId',
    preferredDateStart: 'preferredDateStart',
    preferredDateEnd: 'preferredDateEnd',
    status: 'status',
    position: 'position',
    joinedAt: 'joinedAt',
    notifiedAt: 'notifiedAt',
    notificationCount: 'notificationCount',
    expiresAt: 'expiresAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaitlistScalarFieldEnum = (typeof WaitlistScalarFieldEnum)[keyof typeof WaitlistScalarFieldEnum]


  export const EmailNotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    emailType: 'emailType',
    recipientEmail: 'recipientEmail',
    subject: 'subject',
    status: 'status',
    sentAt: 'sentAt',
    bookingId: 'bookingId',
    waitlistId: 'waitlistId',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type EmailNotificationScalarFieldEnum = (typeof EmailNotificationScalarFieldEnum)[keyof typeof EmailNotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SpecialDateType'
   */
  export type EnumSpecialDateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpecialDateType'>
    


  /**
   * Reference to a field of type 'SpecialDateType[]'
   */
  export type ListEnumSpecialDateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SpecialDateType[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'CancelledBy'
   */
  export type EnumCancelledByFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CancelledBy'>
    


  /**
   * Reference to a field of type 'CancelledBy[]'
   */
  export type ListEnumCancelledByFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CancelledBy[]'>
    


  /**
   * Reference to a field of type 'WaitlistStatus'
   */
  export type EnumWaitlistStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaitlistStatus'>
    


  /**
   * Reference to a field of type 'WaitlistStatus[]'
   */
  export type ListEnumWaitlistStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WaitlistStatus[]'>
    


  /**
   * Reference to a field of type 'EmailType'
   */
  export type EnumEmailTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailType'>
    


  /**
   * Reference to a field of type 'EmailType[]'
   */
  export type ListEnumEmailTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailType[]'>
    


  /**
   * Reference to a field of type 'EmailStatus'
   */
  export type EnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus'>
    


  /**
   * Reference to a field of type 'EmailStatus[]'
   */
  export type ListEnumEmailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    driverLicenseNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    waitlist?: WaitlistListRelationFilter
    emailNotifications?: EmailNotificationListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    driverLicenseNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    waitlist?: WaitlistOrderByRelationAggregateInput
    emailNotifications?: EmailNotificationOrderByRelationAggregateInput
    blockedSlots?: BlockedSlotOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    driverLicenseNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bookings?: BookingListRelationFilter
    waitlist?: WaitlistListRelationFilter
    emailNotifications?: EmailNotificationListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    driverLicenseNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    driverLicenseNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AppointmentTypeWhereInput = {
    AND?: AppointmentTypeWhereInput | AppointmentTypeWhereInput[]
    OR?: AppointmentTypeWhereInput[]
    NOT?: AppointmentTypeWhereInput | AppointmentTypeWhereInput[]
    id?: StringFilter<"AppointmentType"> | string
    typeName?: StringFilter<"AppointmentType"> | string
    description?: StringNullableFilter<"AppointmentType"> | string | null
    durationMinutes?: IntFilter<"AppointmentType"> | number
    isActive?: BoolFilter<"AppointmentType"> | boolean
    createdAt?: DateTimeFilter<"AppointmentType"> | Date | string
    updatedAt?: DateTimeFilter<"AppointmentType"> | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeListRelationFilter
    slotConfigurations?: SlotConfigurationListRelationFilter
    bookings?: BookingListRelationFilter
    waitlist?: WaitlistListRelationFilter
    specialDates?: SpecialDateListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
  }

  export type AppointmentTypeOrderByWithRelationInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationAppointmentTypes?: LocationAppointmentTypeOrderByRelationAggregateInput
    slotConfigurations?: SlotConfigurationOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    waitlist?: WaitlistOrderByRelationAggregateInput
    specialDates?: SpecialDateOrderByRelationAggregateInput
    blockedSlots?: BlockedSlotOrderByRelationAggregateInput
  }

  export type AppointmentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    typeName?: string
    AND?: AppointmentTypeWhereInput | AppointmentTypeWhereInput[]
    OR?: AppointmentTypeWhereInput[]
    NOT?: AppointmentTypeWhereInput | AppointmentTypeWhereInput[]
    description?: StringNullableFilter<"AppointmentType"> | string | null
    durationMinutes?: IntFilter<"AppointmentType"> | number
    isActive?: BoolFilter<"AppointmentType"> | boolean
    createdAt?: DateTimeFilter<"AppointmentType"> | Date | string
    updatedAt?: DateTimeFilter<"AppointmentType"> | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeListRelationFilter
    slotConfigurations?: SlotConfigurationListRelationFilter
    bookings?: BookingListRelationFilter
    waitlist?: WaitlistListRelationFilter
    specialDates?: SpecialDateListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
  }, "id" | "typeName">

  export type AppointmentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentTypeCountOrderByAggregateInput
    _avg?: AppointmentTypeAvgOrderByAggregateInput
    _max?: AppointmentTypeMaxOrderByAggregateInput
    _min?: AppointmentTypeMinOrderByAggregateInput
    _sum?: AppointmentTypeSumOrderByAggregateInput
  }

  export type AppointmentTypeScalarWhereWithAggregatesInput = {
    AND?: AppointmentTypeScalarWhereWithAggregatesInput | AppointmentTypeScalarWhereWithAggregatesInput[]
    OR?: AppointmentTypeScalarWhereWithAggregatesInput[]
    NOT?: AppointmentTypeScalarWhereWithAggregatesInput | AppointmentTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointmentType"> | string
    typeName?: StringWithAggregatesFilter<"AppointmentType"> | string
    description?: StringNullableWithAggregatesFilter<"AppointmentType"> | string | null
    durationMinutes?: IntWithAggregatesFilter<"AppointmentType"> | number
    isActive?: BoolWithAggregatesFilter<"AppointmentType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AppointmentType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppointmentType"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    locationName?: StringFilter<"Location"> | string
    addressLine1?: StringFilter<"Location"> | string
    addressLine2?: StringNullableFilter<"Location"> | string | null
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    zipCode?: StringFilter<"Location"> | string
    phoneNumber?: StringNullableFilter<"Location"> | string | null
    email?: StringNullableFilter<"Location"> | string | null
    isActive?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeListRelationFilter
    slotConfigurations?: SlotConfigurationListRelationFilter
    bookings?: BookingListRelationFilter
    waitlist?: WaitlistListRelationFilter
    specialDates?: SpecialDateListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    locationName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locationAppointmentTypes?: LocationAppointmentTypeOrderByRelationAggregateInput
    slotConfigurations?: SlotConfigurationOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    waitlist?: WaitlistOrderByRelationAggregateInput
    specialDates?: SpecialDateOrderByRelationAggregateInput
    blockedSlots?: BlockedSlotOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locationName?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    addressLine1?: StringFilter<"Location"> | string
    addressLine2?: StringNullableFilter<"Location"> | string | null
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    zipCode?: StringFilter<"Location"> | string
    phoneNumber?: StringNullableFilter<"Location"> | string | null
    email?: StringNullableFilter<"Location"> | string | null
    isActive?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeListRelationFilter
    slotConfigurations?: SlotConfigurationListRelationFilter
    bookings?: BookingListRelationFilter
    waitlist?: WaitlistListRelationFilter
    specialDates?: SpecialDateListRelationFilter
    blockedSlots?: BlockedSlotListRelationFilter
  }, "id" | "locationName">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    locationName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    locationName?: StringWithAggregatesFilter<"Location"> | string
    addressLine1?: StringWithAggregatesFilter<"Location"> | string
    addressLine2?: StringNullableWithAggregatesFilter<"Location"> | string | null
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    zipCode?: StringWithAggregatesFilter<"Location"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Location"> | string | null
    email?: StringNullableWithAggregatesFilter<"Location"> | string | null
    isActive?: BoolWithAggregatesFilter<"Location"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type LocationAppointmentTypeWhereInput = {
    AND?: LocationAppointmentTypeWhereInput | LocationAppointmentTypeWhereInput[]
    OR?: LocationAppointmentTypeWhereInput[]
    NOT?: LocationAppointmentTypeWhereInput | LocationAppointmentTypeWhereInput[]
    id?: StringFilter<"LocationAppointmentType"> | string
    locationId?: StringFilter<"LocationAppointmentType"> | string
    appointmentTypeId?: StringFilter<"LocationAppointmentType"> | string
    isActive?: BoolFilter<"LocationAppointmentType"> | boolean
    createdAt?: DateTimeFilter<"LocationAppointmentType"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
  }

  export type LocationAppointmentTypeOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    appointmentType?: AppointmentTypeOrderByWithRelationInput
  }

  export type LocationAppointmentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locationId_appointmentTypeId?: LocationAppointmentTypeLocationIdAppointmentTypeIdCompoundUniqueInput
    AND?: LocationAppointmentTypeWhereInput | LocationAppointmentTypeWhereInput[]
    OR?: LocationAppointmentTypeWhereInput[]
    NOT?: LocationAppointmentTypeWhereInput | LocationAppointmentTypeWhereInput[]
    locationId?: StringFilter<"LocationAppointmentType"> | string
    appointmentTypeId?: StringFilter<"LocationAppointmentType"> | string
    isActive?: BoolFilter<"LocationAppointmentType"> | boolean
    createdAt?: DateTimeFilter<"LocationAppointmentType"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
  }, "id" | "locationId_appointmentTypeId">

  export type LocationAppointmentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: LocationAppointmentTypeCountOrderByAggregateInput
    _max?: LocationAppointmentTypeMaxOrderByAggregateInput
    _min?: LocationAppointmentTypeMinOrderByAggregateInput
  }

  export type LocationAppointmentTypeScalarWhereWithAggregatesInput = {
    AND?: LocationAppointmentTypeScalarWhereWithAggregatesInput | LocationAppointmentTypeScalarWhereWithAggregatesInput[]
    OR?: LocationAppointmentTypeScalarWhereWithAggregatesInput[]
    NOT?: LocationAppointmentTypeScalarWhereWithAggregatesInput | LocationAppointmentTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LocationAppointmentType"> | string
    locationId?: StringWithAggregatesFilter<"LocationAppointmentType"> | string
    appointmentTypeId?: StringWithAggregatesFilter<"LocationAppointmentType"> | string
    isActive?: BoolWithAggregatesFilter<"LocationAppointmentType"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LocationAppointmentType"> | Date | string
  }

  export type SlotConfigurationWhereInput = {
    AND?: SlotConfigurationWhereInput | SlotConfigurationWhereInput[]
    OR?: SlotConfigurationWhereInput[]
    NOT?: SlotConfigurationWhereInput | SlotConfigurationWhereInput[]
    id?: StringFilter<"SlotConfiguration"> | string
    locationId?: StringFilter<"SlotConfiguration"> | string
    appointmentTypeId?: StringFilter<"SlotConfiguration"> | string
    availableDays?: IntNullableListFilter<"SlotConfiguration">
    startTime?: StringFilter<"SlotConfiguration"> | string
    endTime?: StringFilter<"SlotConfiguration"> | string
    slotDurationMinutes?: IntFilter<"SlotConfiguration"> | number
    slotsPerInterval?: IntFilter<"SlotConfiguration"> | number
    bufferTimeMinutes?: IntFilter<"SlotConfiguration"> | number
    advanceBookingDays?: IntFilter<"SlotConfiguration"> | number
    sameDayBookingCutoffHours?: IntFilter<"SlotConfiguration"> | number
    minAdvanceBookingHours?: IntFilter<"SlotConfiguration"> | number
    isActive?: BoolFilter<"SlotConfiguration"> | boolean
    createdAt?: DateTimeFilter<"SlotConfiguration"> | Date | string
    updatedAt?: DateTimeFilter<"SlotConfiguration"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
  }

  export type SlotConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    availableDays?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDurationMinutes?: SortOrder
    slotsPerInterval?: SortOrder
    bufferTimeMinutes?: SortOrder
    advanceBookingDays?: SortOrder
    sameDayBookingCutoffHours?: SortOrder
    minAdvanceBookingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    appointmentType?: AppointmentTypeOrderByWithRelationInput
  }

  export type SlotConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    locationId_appointmentTypeId?: SlotConfigurationLocationIdAppointmentTypeIdCompoundUniqueInput
    AND?: SlotConfigurationWhereInput | SlotConfigurationWhereInput[]
    OR?: SlotConfigurationWhereInput[]
    NOT?: SlotConfigurationWhereInput | SlotConfigurationWhereInput[]
    locationId?: StringFilter<"SlotConfiguration"> | string
    appointmentTypeId?: StringFilter<"SlotConfiguration"> | string
    availableDays?: IntNullableListFilter<"SlotConfiguration">
    startTime?: StringFilter<"SlotConfiguration"> | string
    endTime?: StringFilter<"SlotConfiguration"> | string
    slotDurationMinutes?: IntFilter<"SlotConfiguration"> | number
    slotsPerInterval?: IntFilter<"SlotConfiguration"> | number
    bufferTimeMinutes?: IntFilter<"SlotConfiguration"> | number
    advanceBookingDays?: IntFilter<"SlotConfiguration"> | number
    sameDayBookingCutoffHours?: IntFilter<"SlotConfiguration"> | number
    minAdvanceBookingHours?: IntFilter<"SlotConfiguration"> | number
    isActive?: BoolFilter<"SlotConfiguration"> | boolean
    createdAt?: DateTimeFilter<"SlotConfiguration"> | Date | string
    updatedAt?: DateTimeFilter<"SlotConfiguration"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
  }, "id" | "locationId_appointmentTypeId">

  export type SlotConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    availableDays?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDurationMinutes?: SortOrder
    slotsPerInterval?: SortOrder
    bufferTimeMinutes?: SortOrder
    advanceBookingDays?: SortOrder
    sameDayBookingCutoffHours?: SortOrder
    minAdvanceBookingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlotConfigurationCountOrderByAggregateInput
    _avg?: SlotConfigurationAvgOrderByAggregateInput
    _max?: SlotConfigurationMaxOrderByAggregateInput
    _min?: SlotConfigurationMinOrderByAggregateInput
    _sum?: SlotConfigurationSumOrderByAggregateInput
  }

  export type SlotConfigurationScalarWhereWithAggregatesInput = {
    AND?: SlotConfigurationScalarWhereWithAggregatesInput | SlotConfigurationScalarWhereWithAggregatesInput[]
    OR?: SlotConfigurationScalarWhereWithAggregatesInput[]
    NOT?: SlotConfigurationScalarWhereWithAggregatesInput | SlotConfigurationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlotConfiguration"> | string
    locationId?: StringWithAggregatesFilter<"SlotConfiguration"> | string
    appointmentTypeId?: StringWithAggregatesFilter<"SlotConfiguration"> | string
    availableDays?: IntNullableListFilter<"SlotConfiguration">
    startTime?: StringWithAggregatesFilter<"SlotConfiguration"> | string
    endTime?: StringWithAggregatesFilter<"SlotConfiguration"> | string
    slotDurationMinutes?: IntWithAggregatesFilter<"SlotConfiguration"> | number
    slotsPerInterval?: IntWithAggregatesFilter<"SlotConfiguration"> | number
    bufferTimeMinutes?: IntWithAggregatesFilter<"SlotConfiguration"> | number
    advanceBookingDays?: IntWithAggregatesFilter<"SlotConfiguration"> | number
    sameDayBookingCutoffHours?: IntWithAggregatesFilter<"SlotConfiguration"> | number
    minAdvanceBookingHours?: IntWithAggregatesFilter<"SlotConfiguration"> | number
    isActive?: BoolWithAggregatesFilter<"SlotConfiguration"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SlotConfiguration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SlotConfiguration"> | Date | string
  }

  export type SpecialDateWhereInput = {
    AND?: SpecialDateWhereInput | SpecialDateWhereInput[]
    OR?: SpecialDateWhereInput[]
    NOT?: SpecialDateWhereInput | SpecialDateWhereInput[]
    id?: StringFilter<"SpecialDate"> | string
    locationId?: StringNullableFilter<"SpecialDate"> | string | null
    appointmentTypeId?: StringNullableFilter<"SpecialDate"> | string | null
    date?: DateTimeFilter<"SpecialDate"> | Date | string
    dateType?: EnumSpecialDateTypeFilter<"SpecialDate"> | $Enums.SpecialDateType
    reason?: StringNullableFilter<"SpecialDate"> | string | null
    isClosed?: BoolFilter<"SpecialDate"> | boolean
    modifiedStartTime?: StringNullableFilter<"SpecialDate"> | string | null
    modifiedEndTime?: StringNullableFilter<"SpecialDate"> | string | null
    appliesToAllLocations?: BoolFilter<"SpecialDate"> | boolean
    appliesToAllAppointmentTypes?: BoolFilter<"SpecialDate"> | boolean
    createdAt?: DateTimeFilter<"SpecialDate"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialDate"> | Date | string
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    appointmentType?: XOR<AppointmentTypeNullableScalarRelationFilter, AppointmentTypeWhereInput> | null
  }

  export type SpecialDateOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrderInput | SortOrder
    appointmentTypeId?: SortOrderInput | SortOrder
    date?: SortOrder
    dateType?: SortOrder
    reason?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    modifiedStartTime?: SortOrderInput | SortOrder
    modifiedEndTime?: SortOrderInput | SortOrder
    appliesToAllLocations?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    appointmentType?: AppointmentTypeOrderByWithRelationInput
  }

  export type SpecialDateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpecialDateWhereInput | SpecialDateWhereInput[]
    OR?: SpecialDateWhereInput[]
    NOT?: SpecialDateWhereInput | SpecialDateWhereInput[]
    locationId?: StringNullableFilter<"SpecialDate"> | string | null
    appointmentTypeId?: StringNullableFilter<"SpecialDate"> | string | null
    date?: DateTimeFilter<"SpecialDate"> | Date | string
    dateType?: EnumSpecialDateTypeFilter<"SpecialDate"> | $Enums.SpecialDateType
    reason?: StringNullableFilter<"SpecialDate"> | string | null
    isClosed?: BoolFilter<"SpecialDate"> | boolean
    modifiedStartTime?: StringNullableFilter<"SpecialDate"> | string | null
    modifiedEndTime?: StringNullableFilter<"SpecialDate"> | string | null
    appliesToAllLocations?: BoolFilter<"SpecialDate"> | boolean
    appliesToAllAppointmentTypes?: BoolFilter<"SpecialDate"> | boolean
    createdAt?: DateTimeFilter<"SpecialDate"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialDate"> | Date | string
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    appointmentType?: XOR<AppointmentTypeNullableScalarRelationFilter, AppointmentTypeWhereInput> | null
  }, "id">

  export type SpecialDateOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrderInput | SortOrder
    appointmentTypeId?: SortOrderInput | SortOrder
    date?: SortOrder
    dateType?: SortOrder
    reason?: SortOrderInput | SortOrder
    isClosed?: SortOrder
    modifiedStartTime?: SortOrderInput | SortOrder
    modifiedEndTime?: SortOrderInput | SortOrder
    appliesToAllLocations?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecialDateCountOrderByAggregateInput
    _max?: SpecialDateMaxOrderByAggregateInput
    _min?: SpecialDateMinOrderByAggregateInput
  }

  export type SpecialDateScalarWhereWithAggregatesInput = {
    AND?: SpecialDateScalarWhereWithAggregatesInput | SpecialDateScalarWhereWithAggregatesInput[]
    OR?: SpecialDateScalarWhereWithAggregatesInput[]
    NOT?: SpecialDateScalarWhereWithAggregatesInput | SpecialDateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpecialDate"> | string
    locationId?: StringNullableWithAggregatesFilter<"SpecialDate"> | string | null
    appointmentTypeId?: StringNullableWithAggregatesFilter<"SpecialDate"> | string | null
    date?: DateTimeWithAggregatesFilter<"SpecialDate"> | Date | string
    dateType?: EnumSpecialDateTypeWithAggregatesFilter<"SpecialDate"> | $Enums.SpecialDateType
    reason?: StringNullableWithAggregatesFilter<"SpecialDate"> | string | null
    isClosed?: BoolWithAggregatesFilter<"SpecialDate"> | boolean
    modifiedStartTime?: StringNullableWithAggregatesFilter<"SpecialDate"> | string | null
    modifiedEndTime?: StringNullableWithAggregatesFilter<"SpecialDate"> | string | null
    appliesToAllLocations?: BoolWithAggregatesFilter<"SpecialDate"> | boolean
    appliesToAllAppointmentTypes?: BoolWithAggregatesFilter<"SpecialDate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SpecialDate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpecialDate"> | Date | string
  }

  export type BlockedSlotWhereInput = {
    AND?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    OR?: BlockedSlotWhereInput[]
    NOT?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    id?: StringFilter<"BlockedSlot"> | string
    locationId?: StringFilter<"BlockedSlot"> | string
    appointmentTypeId?: StringNullableFilter<"BlockedSlot"> | string | null
    blockedDate?: DateTimeFilter<"BlockedSlot"> | Date | string
    blockedStartTime?: StringFilter<"BlockedSlot"> | string
    blockedEndTime?: StringFilter<"BlockedSlot"> | string
    reason?: StringNullableFilter<"BlockedSlot"> | string | null
    appliesToAllAppointmentTypes?: BoolFilter<"BlockedSlot"> | boolean
    createdBy?: StringNullableFilter<"BlockedSlot"> | string | null
    createdAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointmentType?: XOR<AppointmentTypeNullableScalarRelationFilter, AppointmentTypeWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BlockedSlotOrderByWithRelationInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrderInput | SortOrder
    blockedDate?: SortOrder
    blockedStartTime?: SortOrder
    blockedEndTime?: SortOrder
    reason?: SortOrderInput | SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    location?: LocationOrderByWithRelationInput
    appointmentType?: AppointmentTypeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BlockedSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    OR?: BlockedSlotWhereInput[]
    NOT?: BlockedSlotWhereInput | BlockedSlotWhereInput[]
    locationId?: StringFilter<"BlockedSlot"> | string
    appointmentTypeId?: StringNullableFilter<"BlockedSlot"> | string | null
    blockedDate?: DateTimeFilter<"BlockedSlot"> | Date | string
    blockedStartTime?: StringFilter<"BlockedSlot"> | string
    blockedEndTime?: StringFilter<"BlockedSlot"> | string
    reason?: StringNullableFilter<"BlockedSlot"> | string | null
    appliesToAllAppointmentTypes?: BoolFilter<"BlockedSlot"> | boolean
    createdBy?: StringNullableFilter<"BlockedSlot"> | string | null
    createdAt?: DateTimeFilter<"BlockedSlot"> | Date | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    appointmentType?: XOR<AppointmentTypeNullableScalarRelationFilter, AppointmentTypeWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type BlockedSlotOrderByWithAggregationInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrderInput | SortOrder
    blockedDate?: SortOrder
    blockedStartTime?: SortOrder
    blockedEndTime?: SortOrder
    reason?: SortOrderInput | SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BlockedSlotCountOrderByAggregateInput
    _max?: BlockedSlotMaxOrderByAggregateInput
    _min?: BlockedSlotMinOrderByAggregateInput
  }

  export type BlockedSlotScalarWhereWithAggregatesInput = {
    AND?: BlockedSlotScalarWhereWithAggregatesInput | BlockedSlotScalarWhereWithAggregatesInput[]
    OR?: BlockedSlotScalarWhereWithAggregatesInput[]
    NOT?: BlockedSlotScalarWhereWithAggregatesInput | BlockedSlotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlockedSlot"> | string
    locationId?: StringWithAggregatesFilter<"BlockedSlot"> | string
    appointmentTypeId?: StringNullableWithAggregatesFilter<"BlockedSlot"> | string | null
    blockedDate?: DateTimeWithAggregatesFilter<"BlockedSlot"> | Date | string
    blockedStartTime?: StringWithAggregatesFilter<"BlockedSlot"> | string
    blockedEndTime?: StringWithAggregatesFilter<"BlockedSlot"> | string
    reason?: StringNullableWithAggregatesFilter<"BlockedSlot"> | string | null
    appliesToAllAppointmentTypes?: BoolWithAggregatesFilter<"BlockedSlot"> | boolean
    createdBy?: StringNullableWithAggregatesFilter<"BlockedSlot"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlockedSlot"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    appointmentTypeId?: StringFilter<"Booking"> | string
    locationId?: StringFilter<"Booking"> | string
    bookingReference?: StringFilter<"Booking"> | string
    appointmentDate?: DateTimeFilter<"Booking"> | Date | string
    appointmentTime?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    cancellationDate?: DateTimeNullableFilter<"Booking"> | Date | string | null
    cancelledBy?: EnumCancelledByNullableFilter<"Booking"> | $Enums.CancelledBy | null
    cancellationReason?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    emailNotifications?: EmailNotificationListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    bookingReference?: SortOrder
    appointmentDate?: SortOrder
    appointmentTime?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    cancellationDate?: SortOrderInput | SortOrder
    cancelledBy?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    appointmentType?: AppointmentTypeOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    emailNotifications?: EmailNotificationOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingReference?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    appointmentTypeId?: StringFilter<"Booking"> | string
    locationId?: StringFilter<"Booking"> | string
    appointmentDate?: DateTimeFilter<"Booking"> | Date | string
    appointmentTime?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    cancellationDate?: DateTimeNullableFilter<"Booking"> | Date | string | null
    cancelledBy?: EnumCancelledByNullableFilter<"Booking"> | $Enums.CancelledBy | null
    cancellationReason?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    emailNotifications?: EmailNotificationListRelationFilter
  }, "id" | "bookingReference">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    bookingReference?: SortOrder
    appointmentDate?: SortOrder
    appointmentTime?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    cancellationDate?: SortOrderInput | SortOrder
    cancelledBy?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    appointmentTypeId?: StringWithAggregatesFilter<"Booking"> | string
    locationId?: StringWithAggregatesFilter<"Booking"> | string
    bookingReference?: StringWithAggregatesFilter<"Booking"> | string
    appointmentDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    appointmentTime?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    bookingDate?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    cancellationDate?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    cancelledBy?: EnumCancelledByNullableWithAggregatesFilter<"Booking"> | $Enums.CancelledBy | null
    cancellationReason?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type WaitlistWhereInput = {
    AND?: WaitlistWhereInput | WaitlistWhereInput[]
    OR?: WaitlistWhereInput[]
    NOT?: WaitlistWhereInput | WaitlistWhereInput[]
    id?: StringFilter<"Waitlist"> | string
    userId?: StringFilter<"Waitlist"> | string
    appointmentTypeId?: StringFilter<"Waitlist"> | string
    locationId?: StringFilter<"Waitlist"> | string
    preferredDateStart?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    preferredDateEnd?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    status?: EnumWaitlistStatusFilter<"Waitlist"> | $Enums.WaitlistStatus
    position?: IntNullableFilter<"Waitlist"> | number | null
    joinedAt?: DateTimeFilter<"Waitlist"> | Date | string
    notifiedAt?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    notificationCount?: IntFilter<"Waitlist"> | number
    expiresAt?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    notes?: StringNullableFilter<"Waitlist"> | string | null
    createdAt?: DateTimeFilter<"Waitlist"> | Date | string
    updatedAt?: DateTimeFilter<"Waitlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    emailNotifications?: EmailNotificationListRelationFilter
  }

  export type WaitlistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    preferredDateStart?: SortOrderInput | SortOrder
    preferredDateEnd?: SortOrderInput | SortOrder
    status?: SortOrder
    position?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    notifiedAt?: SortOrderInput | SortOrder
    notificationCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    appointmentType?: AppointmentTypeOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    emailNotifications?: EmailNotificationOrderByRelationAggregateInput
  }

  export type WaitlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaitlistWhereInput | WaitlistWhereInput[]
    OR?: WaitlistWhereInput[]
    NOT?: WaitlistWhereInput | WaitlistWhereInput[]
    userId?: StringFilter<"Waitlist"> | string
    appointmentTypeId?: StringFilter<"Waitlist"> | string
    locationId?: StringFilter<"Waitlist"> | string
    preferredDateStart?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    preferredDateEnd?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    status?: EnumWaitlistStatusFilter<"Waitlist"> | $Enums.WaitlistStatus
    position?: IntNullableFilter<"Waitlist"> | number | null
    joinedAt?: DateTimeFilter<"Waitlist"> | Date | string
    notifiedAt?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    notificationCount?: IntFilter<"Waitlist"> | number
    expiresAt?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    notes?: StringNullableFilter<"Waitlist"> | string | null
    createdAt?: DateTimeFilter<"Waitlist"> | Date | string
    updatedAt?: DateTimeFilter<"Waitlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointmentType?: XOR<AppointmentTypeScalarRelationFilter, AppointmentTypeWhereInput>
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    emailNotifications?: EmailNotificationListRelationFilter
  }, "id">

  export type WaitlistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    preferredDateStart?: SortOrderInput | SortOrder
    preferredDateEnd?: SortOrderInput | SortOrder
    status?: SortOrder
    position?: SortOrderInput | SortOrder
    joinedAt?: SortOrder
    notifiedAt?: SortOrderInput | SortOrder
    notificationCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaitlistCountOrderByAggregateInput
    _avg?: WaitlistAvgOrderByAggregateInput
    _max?: WaitlistMaxOrderByAggregateInput
    _min?: WaitlistMinOrderByAggregateInput
    _sum?: WaitlistSumOrderByAggregateInput
  }

  export type WaitlistScalarWhereWithAggregatesInput = {
    AND?: WaitlistScalarWhereWithAggregatesInput | WaitlistScalarWhereWithAggregatesInput[]
    OR?: WaitlistScalarWhereWithAggregatesInput[]
    NOT?: WaitlistScalarWhereWithAggregatesInput | WaitlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Waitlist"> | string
    userId?: StringWithAggregatesFilter<"Waitlist"> | string
    appointmentTypeId?: StringWithAggregatesFilter<"Waitlist"> | string
    locationId?: StringWithAggregatesFilter<"Waitlist"> | string
    preferredDateStart?: DateTimeNullableWithAggregatesFilter<"Waitlist"> | Date | string | null
    preferredDateEnd?: DateTimeNullableWithAggregatesFilter<"Waitlist"> | Date | string | null
    status?: EnumWaitlistStatusWithAggregatesFilter<"Waitlist"> | $Enums.WaitlistStatus
    position?: IntNullableWithAggregatesFilter<"Waitlist"> | number | null
    joinedAt?: DateTimeWithAggregatesFilter<"Waitlist"> | Date | string
    notifiedAt?: DateTimeNullableWithAggregatesFilter<"Waitlist"> | Date | string | null
    notificationCount?: IntWithAggregatesFilter<"Waitlist"> | number
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Waitlist"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Waitlist"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Waitlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Waitlist"> | Date | string
  }

  export type EmailNotificationWhereInput = {
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    id?: StringFilter<"EmailNotification"> | string
    userId?: StringFilter<"EmailNotification"> | string
    emailType?: EnumEmailTypeFilter<"EmailNotification"> | $Enums.EmailType
    recipientEmail?: StringFilter<"EmailNotification"> | string
    subject?: StringFilter<"EmailNotification"> | string
    status?: EnumEmailStatusFilter<"EmailNotification"> | $Enums.EmailStatus
    sentAt?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    bookingId?: StringNullableFilter<"EmailNotification"> | string | null
    waitlistId?: StringNullableFilter<"EmailNotification"> | string | null
    errorMessage?: StringNullableFilter<"EmailNotification"> | string | null
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    waitlist?: XOR<WaitlistNullableScalarRelationFilter, WaitlistWhereInput> | null
  }

  export type EmailNotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    emailType?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    waitlistId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
    waitlist?: WaitlistOrderByWithRelationInput
  }

  export type EmailNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    OR?: EmailNotificationWhereInput[]
    NOT?: EmailNotificationWhereInput | EmailNotificationWhereInput[]
    userId?: StringFilter<"EmailNotification"> | string
    emailType?: EnumEmailTypeFilter<"EmailNotification"> | $Enums.EmailType
    recipientEmail?: StringFilter<"EmailNotification"> | string
    subject?: StringFilter<"EmailNotification"> | string
    status?: EnumEmailStatusFilter<"EmailNotification"> | $Enums.EmailStatus
    sentAt?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    bookingId?: StringNullableFilter<"EmailNotification"> | string | null
    waitlistId?: StringNullableFilter<"EmailNotification"> | string | null
    errorMessage?: StringNullableFilter<"EmailNotification"> | string | null
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    waitlist?: XOR<WaitlistNullableScalarRelationFilter, WaitlistWhereInput> | null
  }, "id">

  export type EmailNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    emailType?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    waitlistId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EmailNotificationCountOrderByAggregateInput
    _max?: EmailNotificationMaxOrderByAggregateInput
    _min?: EmailNotificationMinOrderByAggregateInput
  }

  export type EmailNotificationScalarWhereWithAggregatesInput = {
    AND?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    OR?: EmailNotificationScalarWhereWithAggregatesInput[]
    NOT?: EmailNotificationScalarWhereWithAggregatesInput | EmailNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailNotification"> | string
    userId?: StringWithAggregatesFilter<"EmailNotification"> | string
    emailType?: EnumEmailTypeWithAggregatesFilter<"EmailNotification"> | $Enums.EmailType
    recipientEmail?: StringWithAggregatesFilter<"EmailNotification"> | string
    subject?: StringWithAggregatesFilter<"EmailNotification"> | string
    status?: EnumEmailStatusWithAggregatesFilter<"EmailNotification"> | $Enums.EmailStatus
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailNotification"> | Date | string | null
    bookingId?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    waitlistId?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"EmailNotification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailNotification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    waitlist?: WaitlistCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    waitlist?: WaitlistUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentTypeCreateInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUncheckedCreateInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingUncheckedCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeCreateManyInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutLocationInput
    bookings?: BookingCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutLocationInput
    bookings?: BookingUncheckedCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutLocationNestedInput
    bookings?: BookingUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutLocationNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAppointmentTypeCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutLocationAppointmentTypesInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutLocationAppointmentTypesInput
  }

  export type LocationAppointmentTypeUncheckedCreateInput = {
    id?: string
    locationId: string
    appointmentTypeId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LocationAppointmentTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutLocationAppointmentTypesNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutLocationAppointmentTypesNestedInput
  }

  export type LocationAppointmentTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAppointmentTypeCreateManyInput = {
    id?: string
    locationId: string
    appointmentTypeId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LocationAppointmentTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAppointmentTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotConfigurationCreateInput = {
    id?: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutSlotConfigurationsInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutSlotConfigurationsInput
  }

  export type SlotConfigurationUncheckedCreateInput = {
    id?: string
    locationId: string
    appointmentTypeId: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotConfigurationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutSlotConfigurationsNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutSlotConfigurationsNestedInput
  }

  export type SlotConfigurationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotConfigurationCreateManyInput = {
    id?: string
    locationId: string
    appointmentTypeId: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotConfigurationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotConfigurationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDateCreateInput = {
    id?: string
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: LocationCreateNestedOneWithoutSpecialDatesInput
    appointmentType?: AppointmentTypeCreateNestedOneWithoutSpecialDatesInput
  }

  export type SpecialDateUncheckedCreateInput = {
    id?: string
    locationId?: string | null
    appointmentTypeId?: string | null
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialDateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneWithoutSpecialDatesNestedInput
    appointmentType?: AppointmentTypeUpdateOneWithoutSpecialDatesNestedInput
  }

  export type SpecialDateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDateCreateManyInput = {
    id?: string
    locationId?: string | null
    appointmentTypeId?: string | null
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialDateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotCreateInput = {
    id?: string
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutBlockedSlotsInput
    appointmentType?: AppointmentTypeCreateNestedOneWithoutBlockedSlotsInput
    user?: UserCreateNestedOneWithoutBlockedSlotsInput
  }

  export type BlockedSlotUncheckedCreateInput = {
    id?: string
    locationId: string
    appointmentTypeId?: string | null
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BlockedSlotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutBlockedSlotsNestedInput
    appointmentType?: AppointmentTypeUpdateOneWithoutBlockedSlotsNestedInput
    user?: UserUpdateOneWithoutBlockedSlotsNestedInput
  }

  export type BlockedSlotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotCreateManyInput = {
    id?: string
    locationId: string
    appointmentTypeId?: string | null
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BlockedSlotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutBookingsInput
    location: LocationCreateNestedOneWithoutBookingsInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    locationId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutBookingsNestedInput
    location?: LocationUpdateOneRequiredWithoutBookingsNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    locationId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistCreateInput = {
    id?: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWaitlistInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutWaitlistInput
    location: LocationCreateNestedOneWithoutWaitlistInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistUncheckedCreateInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    locationId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWaitlistNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutWaitlistNestedInput
    location?: LocationUpdateOneRequiredWithoutWaitlistNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistCreateManyInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    locationId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationCreateInput = {
    id?: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailNotificationsInput
    booking?: BookingCreateNestedOneWithoutEmailNotificationsInput
    waitlist?: WaitlistCreateNestedOneWithoutEmailNotificationsInput
  }

  export type EmailNotificationUncheckedCreateInput = {
    id?: string
    userId: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    bookingId?: string | null
    waitlistId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type EmailNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailNotificationsNestedInput
    booking?: BookingUpdateOneWithoutEmailNotificationsNestedInput
    waitlist?: WaitlistUpdateOneWithoutEmailNotificationsNestedInput
  }

  export type EmailNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    waitlistId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationCreateManyInput = {
    id?: string
    userId: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    bookingId?: string | null
    waitlistId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type EmailNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    waitlistId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type WaitlistListRelationFilter = {
    every?: WaitlistWhereInput
    some?: WaitlistWhereInput
    none?: WaitlistWhereInput
  }

  export type EmailNotificationListRelationFilter = {
    every?: EmailNotificationWhereInput
    some?: EmailNotificationWhereInput
    none?: EmailNotificationWhereInput
  }

  export type BlockedSlotListRelationFilter = {
    every?: BlockedSlotWhereInput
    some?: BlockedSlotWhereInput
    none?: BlockedSlotWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaitlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmailNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockedSlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    driverLicenseNumber?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    driverLicenseNumber?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    driverLicenseNumber?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LocationAppointmentTypeListRelationFilter = {
    every?: LocationAppointmentTypeWhereInput
    some?: LocationAppointmentTypeWhereInput
    none?: LocationAppointmentTypeWhereInput
  }

  export type SlotConfigurationListRelationFilter = {
    every?: SlotConfigurationWhereInput
    some?: SlotConfigurationWhereInput
    none?: SlotConfigurationWhereInput
  }

  export type SpecialDateListRelationFilter = {
    every?: SpecialDateWhereInput
    some?: SpecialDateWhereInput
    none?: SpecialDateWhereInput
  }

  export type LocationAppointmentTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlotConfigurationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentTypeAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type AppointmentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    typeName?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentTypeSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    locationName?: SortOrder
    addressLine1?: SortOrder
    addressLine2?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type AppointmentTypeScalarRelationFilter = {
    is?: AppointmentTypeWhereInput
    isNot?: AppointmentTypeWhereInput
  }

  export type LocationAppointmentTypeLocationIdAppointmentTypeIdCompoundUniqueInput = {
    locationId: string
    appointmentTypeId: string
  }

  export type LocationAppointmentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAppointmentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LocationAppointmentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SlotConfigurationLocationIdAppointmentTypeIdCompoundUniqueInput = {
    locationId: string
    appointmentTypeId: string
  }

  export type SlotConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    availableDays?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDurationMinutes?: SortOrder
    slotsPerInterval?: SortOrder
    bufferTimeMinutes?: SortOrder
    advanceBookingDays?: SortOrder
    sameDayBookingCutoffHours?: SortOrder
    minAdvanceBookingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotConfigurationAvgOrderByAggregateInput = {
    availableDays?: SortOrder
    slotDurationMinutes?: SortOrder
    slotsPerInterval?: SortOrder
    bufferTimeMinutes?: SortOrder
    advanceBookingDays?: SortOrder
    sameDayBookingCutoffHours?: SortOrder
    minAdvanceBookingHours?: SortOrder
  }

  export type SlotConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDurationMinutes?: SortOrder
    slotsPerInterval?: SortOrder
    bufferTimeMinutes?: SortOrder
    advanceBookingDays?: SortOrder
    sameDayBookingCutoffHours?: SortOrder
    minAdvanceBookingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDurationMinutes?: SortOrder
    slotsPerInterval?: SortOrder
    bufferTimeMinutes?: SortOrder
    advanceBookingDays?: SortOrder
    sameDayBookingCutoffHours?: SortOrder
    minAdvanceBookingHours?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotConfigurationSumOrderByAggregateInput = {
    availableDays?: SortOrder
    slotDurationMinutes?: SortOrder
    slotsPerInterval?: SortOrder
    bufferTimeMinutes?: SortOrder
    advanceBookingDays?: SortOrder
    sameDayBookingCutoffHours?: SortOrder
    minAdvanceBookingHours?: SortOrder
  }

  export type EnumSpecialDateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpecialDateType | EnumSpecialDateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpecialDateTypeFilter<$PrismaModel> | $Enums.SpecialDateType
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type AppointmentTypeNullableScalarRelationFilter = {
    is?: AppointmentTypeWhereInput | null
    isNot?: AppointmentTypeWhereInput | null
  }

  export type SpecialDateCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    date?: SortOrder
    dateType?: SortOrder
    reason?: SortOrder
    isClosed?: SortOrder
    modifiedStartTime?: SortOrder
    modifiedEndTime?: SortOrder
    appliesToAllLocations?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialDateMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    date?: SortOrder
    dateType?: SortOrder
    reason?: SortOrder
    isClosed?: SortOrder
    modifiedStartTime?: SortOrder
    modifiedEndTime?: SortOrder
    appliesToAllLocations?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialDateMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    date?: SortOrder
    dateType?: SortOrder
    reason?: SortOrder
    isClosed?: SortOrder
    modifiedStartTime?: SortOrder
    modifiedEndTime?: SortOrder
    appliesToAllLocations?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSpecialDateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpecialDateType | EnumSpecialDateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpecialDateTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpecialDateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpecialDateTypeFilter<$PrismaModel>
    _max?: NestedEnumSpecialDateTypeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BlockedSlotCountOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    blockedDate?: SortOrder
    blockedStartTime?: SortOrder
    blockedEndTime?: SortOrder
    reason?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    blockedDate?: SortOrder
    blockedStartTime?: SortOrder
    blockedEndTime?: SortOrder
    reason?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockedSlotMinOrderByAggregateInput = {
    id?: SortOrder
    locationId?: SortOrder
    appointmentTypeId?: SortOrder
    blockedDate?: SortOrder
    blockedStartTime?: SortOrder
    blockedEndTime?: SortOrder
    reason?: SortOrder
    appliesToAllAppointmentTypes?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumCancelledByNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCancelledByNullableFilter<$PrismaModel> | $Enums.CancelledBy | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    bookingReference?: SortOrder
    appointmentDate?: SortOrder
    appointmentTime?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    cancellationDate?: SortOrder
    cancelledBy?: SortOrder
    cancellationReason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    bookingReference?: SortOrder
    appointmentDate?: SortOrder
    appointmentTime?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    cancellationDate?: SortOrder
    cancelledBy?: SortOrder
    cancellationReason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    bookingReference?: SortOrder
    appointmentDate?: SortOrder
    appointmentTime?: SortOrder
    status?: SortOrder
    bookingDate?: SortOrder
    cancellationDate?: SortOrder
    cancelledBy?: SortOrder
    cancellationReason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumCancelledByNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCancelledByNullableWithAggregatesFilter<$PrismaModel> | $Enums.CancelledBy | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCancelledByNullableFilter<$PrismaModel>
    _max?: NestedEnumCancelledByNullableFilter<$PrismaModel>
  }

  export type EnumWaitlistStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WaitlistStatus | EnumWaitlistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWaitlistStatusFilter<$PrismaModel> | $Enums.WaitlistStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WaitlistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    preferredDateStart?: SortOrder
    preferredDateEnd?: SortOrder
    status?: SortOrder
    position?: SortOrder
    joinedAt?: SortOrder
    notifiedAt?: SortOrder
    notificationCount?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistAvgOrderByAggregateInput = {
    position?: SortOrder
    notificationCount?: SortOrder
  }

  export type WaitlistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    preferredDateStart?: SortOrder
    preferredDateEnd?: SortOrder
    status?: SortOrder
    position?: SortOrder
    joinedAt?: SortOrder
    notifiedAt?: SortOrder
    notificationCount?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    appointmentTypeId?: SortOrder
    locationId?: SortOrder
    preferredDateStart?: SortOrder
    preferredDateEnd?: SortOrder
    status?: SortOrder
    position?: SortOrder
    joinedAt?: SortOrder
    notifiedAt?: SortOrder
    notificationCount?: SortOrder
    expiresAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistSumOrderByAggregateInput = {
    position?: SortOrder
    notificationCount?: SortOrder
  }

  export type EnumWaitlistStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaitlistStatus | EnumWaitlistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWaitlistStatusWithAggregatesFilter<$PrismaModel> | $Enums.WaitlistStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaitlistStatusFilter<$PrismaModel>
    _max?: NestedEnumWaitlistStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumEmailTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeFilter<$PrismaModel> | $Enums.EmailType
  }

  export type EnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type WaitlistNullableScalarRelationFilter = {
    is?: WaitlistWhereInput | null
    isNot?: WaitlistWhereInput | null
  }

  export type EmailNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailType?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    bookingId?: SortOrder
    waitlistId?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailType?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    bookingId?: SortOrder
    waitlistId?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    emailType?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    bookingId?: SortOrder
    waitlistId?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEmailTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailTypeFilter<$PrismaModel>
  }

  export type EnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WaitlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WaitlistCreateWithoutUserInput, WaitlistUncheckedCreateWithoutUserInput> | WaitlistCreateWithoutUserInput[] | WaitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutUserInput | WaitlistCreateOrConnectWithoutUserInput[]
    createMany?: WaitlistCreateManyUserInputEnvelope
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
  }

  export type EmailNotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type BlockedSlotCreateNestedManyWithoutUserInput = {
    create?: XOR<BlockedSlotCreateWithoutUserInput, BlockedSlotUncheckedCreateWithoutUserInput> | BlockedSlotCreateWithoutUserInput[] | BlockedSlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutUserInput | BlockedSlotCreateOrConnectWithoutUserInput[]
    createMany?: BlockedSlotCreateManyUserInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WaitlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WaitlistCreateWithoutUserInput, WaitlistUncheckedCreateWithoutUserInput> | WaitlistCreateWithoutUserInput[] | WaitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutUserInput | WaitlistCreateOrConnectWithoutUserInput[]
    createMany?: WaitlistCreateManyUserInputEnvelope
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
  }

  export type EmailNotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type BlockedSlotUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BlockedSlotCreateWithoutUserInput, BlockedSlotUncheckedCreateWithoutUserInput> | BlockedSlotCreateWithoutUserInput[] | BlockedSlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutUserInput | BlockedSlotCreateOrConnectWithoutUserInput[]
    createMany?: BlockedSlotCreateManyUserInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WaitlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaitlistCreateWithoutUserInput, WaitlistUncheckedCreateWithoutUserInput> | WaitlistCreateWithoutUserInput[] | WaitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutUserInput | WaitlistCreateOrConnectWithoutUserInput[]
    upsert?: WaitlistUpsertWithWhereUniqueWithoutUserInput | WaitlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaitlistCreateManyUserInputEnvelope
    set?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    disconnect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    delete?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    update?: WaitlistUpdateWithWhereUniqueWithoutUserInput | WaitlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaitlistUpdateManyWithWhereWithoutUserInput | WaitlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
  }

  export type EmailNotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutUserInput | EmailNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutUserInput | EmailNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutUserInput | EmailNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type BlockedSlotUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutUserInput, BlockedSlotUncheckedCreateWithoutUserInput> | BlockedSlotCreateWithoutUserInput[] | BlockedSlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutUserInput | BlockedSlotCreateOrConnectWithoutUserInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutUserInput | BlockedSlotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlockedSlotCreateManyUserInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutUserInput | BlockedSlotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutUserInput | BlockedSlotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WaitlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaitlistCreateWithoutUserInput, WaitlistUncheckedCreateWithoutUserInput> | WaitlistCreateWithoutUserInput[] | WaitlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutUserInput | WaitlistCreateOrConnectWithoutUserInput[]
    upsert?: WaitlistUpsertWithWhereUniqueWithoutUserInput | WaitlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaitlistCreateManyUserInputEnvelope
    set?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    disconnect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    delete?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    update?: WaitlistUpdateWithWhereUniqueWithoutUserInput | WaitlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaitlistUpdateManyWithWhereWithoutUserInput | WaitlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
  }

  export type EmailNotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput> | EmailNotificationCreateWithoutUserInput[] | EmailNotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutUserInput | EmailNotificationCreateOrConnectWithoutUserInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutUserInput | EmailNotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailNotificationCreateManyUserInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutUserInput | EmailNotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutUserInput | EmailNotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type BlockedSlotUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutUserInput, BlockedSlotUncheckedCreateWithoutUserInput> | BlockedSlotCreateWithoutUserInput[] | BlockedSlotUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutUserInput | BlockedSlotCreateOrConnectWithoutUserInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutUserInput | BlockedSlotUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BlockedSlotCreateManyUserInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutUserInput | BlockedSlotUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutUserInput | BlockedSlotUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type LocationAppointmentTypeCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput> | LocationAppointmentTypeCreateWithoutAppointmentTypeInput[] | LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput | LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: LocationAppointmentTypeCreateManyAppointmentTypeInputEnvelope
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
  }

  export type SlotConfigurationCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<SlotConfigurationCreateWithoutAppointmentTypeInput, SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput> | SlotConfigurationCreateWithoutAppointmentTypeInput[] | SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput | SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: SlotConfigurationCreateManyAppointmentTypeInputEnvelope
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<BookingCreateWithoutAppointmentTypeInput, BookingUncheckedCreateWithoutAppointmentTypeInput> | BookingCreateWithoutAppointmentTypeInput[] | BookingUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAppointmentTypeInput | BookingCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: BookingCreateManyAppointmentTypeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WaitlistCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<WaitlistCreateWithoutAppointmentTypeInput, WaitlistUncheckedCreateWithoutAppointmentTypeInput> | WaitlistCreateWithoutAppointmentTypeInput[] | WaitlistUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutAppointmentTypeInput | WaitlistCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: WaitlistCreateManyAppointmentTypeInputEnvelope
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
  }

  export type SpecialDateCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<SpecialDateCreateWithoutAppointmentTypeInput, SpecialDateUncheckedCreateWithoutAppointmentTypeInput> | SpecialDateCreateWithoutAppointmentTypeInput[] | SpecialDateUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutAppointmentTypeInput | SpecialDateCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: SpecialDateCreateManyAppointmentTypeInputEnvelope
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
  }

  export type BlockedSlotCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<BlockedSlotCreateWithoutAppointmentTypeInput, BlockedSlotUncheckedCreateWithoutAppointmentTypeInput> | BlockedSlotCreateWithoutAppointmentTypeInput[] | BlockedSlotUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutAppointmentTypeInput | BlockedSlotCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: BlockedSlotCreateManyAppointmentTypeInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type LocationAppointmentTypeUncheckedCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput> | LocationAppointmentTypeCreateWithoutAppointmentTypeInput[] | LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput | LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: LocationAppointmentTypeCreateManyAppointmentTypeInputEnvelope
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
  }

  export type SlotConfigurationUncheckedCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<SlotConfigurationCreateWithoutAppointmentTypeInput, SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput> | SlotConfigurationCreateWithoutAppointmentTypeInput[] | SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput | SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: SlotConfigurationCreateManyAppointmentTypeInputEnvelope
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<BookingCreateWithoutAppointmentTypeInput, BookingUncheckedCreateWithoutAppointmentTypeInput> | BookingCreateWithoutAppointmentTypeInput[] | BookingUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAppointmentTypeInput | BookingCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: BookingCreateManyAppointmentTypeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WaitlistUncheckedCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<WaitlistCreateWithoutAppointmentTypeInput, WaitlistUncheckedCreateWithoutAppointmentTypeInput> | WaitlistCreateWithoutAppointmentTypeInput[] | WaitlistUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutAppointmentTypeInput | WaitlistCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: WaitlistCreateManyAppointmentTypeInputEnvelope
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
  }

  export type SpecialDateUncheckedCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<SpecialDateCreateWithoutAppointmentTypeInput, SpecialDateUncheckedCreateWithoutAppointmentTypeInput> | SpecialDateCreateWithoutAppointmentTypeInput[] | SpecialDateUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutAppointmentTypeInput | SpecialDateCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: SpecialDateCreateManyAppointmentTypeInputEnvelope
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
  }

  export type BlockedSlotUncheckedCreateNestedManyWithoutAppointmentTypeInput = {
    create?: XOR<BlockedSlotCreateWithoutAppointmentTypeInput, BlockedSlotUncheckedCreateWithoutAppointmentTypeInput> | BlockedSlotCreateWithoutAppointmentTypeInput[] | BlockedSlotUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutAppointmentTypeInput | BlockedSlotCreateOrConnectWithoutAppointmentTypeInput[]
    createMany?: BlockedSlotCreateManyAppointmentTypeInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationAppointmentTypeUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput> | LocationAppointmentTypeCreateWithoutAppointmentTypeInput[] | LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput | LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: LocationAppointmentTypeUpsertWithWhereUniqueWithoutAppointmentTypeInput | LocationAppointmentTypeUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: LocationAppointmentTypeCreateManyAppointmentTypeInputEnvelope
    set?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    disconnect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    delete?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    update?: LocationAppointmentTypeUpdateWithWhereUniqueWithoutAppointmentTypeInput | LocationAppointmentTypeUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: LocationAppointmentTypeUpdateManyWithWhereWithoutAppointmentTypeInput | LocationAppointmentTypeUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: LocationAppointmentTypeScalarWhereInput | LocationAppointmentTypeScalarWhereInput[]
  }

  export type SlotConfigurationUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<SlotConfigurationCreateWithoutAppointmentTypeInput, SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput> | SlotConfigurationCreateWithoutAppointmentTypeInput[] | SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput | SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: SlotConfigurationUpsertWithWhereUniqueWithoutAppointmentTypeInput | SlotConfigurationUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: SlotConfigurationCreateManyAppointmentTypeInputEnvelope
    set?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    disconnect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    delete?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    update?: SlotConfigurationUpdateWithWhereUniqueWithoutAppointmentTypeInput | SlotConfigurationUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: SlotConfigurationUpdateManyWithWhereWithoutAppointmentTypeInput | SlotConfigurationUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: SlotConfigurationScalarWhereInput | SlotConfigurationScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<BookingCreateWithoutAppointmentTypeInput, BookingUncheckedCreateWithoutAppointmentTypeInput> | BookingCreateWithoutAppointmentTypeInput[] | BookingUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAppointmentTypeInput | BookingCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAppointmentTypeInput | BookingUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: BookingCreateManyAppointmentTypeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAppointmentTypeInput | BookingUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAppointmentTypeInput | BookingUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WaitlistUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<WaitlistCreateWithoutAppointmentTypeInput, WaitlistUncheckedCreateWithoutAppointmentTypeInput> | WaitlistCreateWithoutAppointmentTypeInput[] | WaitlistUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutAppointmentTypeInput | WaitlistCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: WaitlistUpsertWithWhereUniqueWithoutAppointmentTypeInput | WaitlistUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: WaitlistCreateManyAppointmentTypeInputEnvelope
    set?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    disconnect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    delete?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    update?: WaitlistUpdateWithWhereUniqueWithoutAppointmentTypeInput | WaitlistUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: WaitlistUpdateManyWithWhereWithoutAppointmentTypeInput | WaitlistUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
  }

  export type SpecialDateUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<SpecialDateCreateWithoutAppointmentTypeInput, SpecialDateUncheckedCreateWithoutAppointmentTypeInput> | SpecialDateCreateWithoutAppointmentTypeInput[] | SpecialDateUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutAppointmentTypeInput | SpecialDateCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: SpecialDateUpsertWithWhereUniqueWithoutAppointmentTypeInput | SpecialDateUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: SpecialDateCreateManyAppointmentTypeInputEnvelope
    set?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    disconnect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    delete?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    update?: SpecialDateUpdateWithWhereUniqueWithoutAppointmentTypeInput | SpecialDateUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: SpecialDateUpdateManyWithWhereWithoutAppointmentTypeInput | SpecialDateUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: SpecialDateScalarWhereInput | SpecialDateScalarWhereInput[]
  }

  export type BlockedSlotUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutAppointmentTypeInput, BlockedSlotUncheckedCreateWithoutAppointmentTypeInput> | BlockedSlotCreateWithoutAppointmentTypeInput[] | BlockedSlotUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutAppointmentTypeInput | BlockedSlotCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutAppointmentTypeInput | BlockedSlotUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: BlockedSlotCreateManyAppointmentTypeInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutAppointmentTypeInput | BlockedSlotUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutAppointmentTypeInput | BlockedSlotUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput> | LocationAppointmentTypeCreateWithoutAppointmentTypeInput[] | LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput | LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: LocationAppointmentTypeUpsertWithWhereUniqueWithoutAppointmentTypeInput | LocationAppointmentTypeUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: LocationAppointmentTypeCreateManyAppointmentTypeInputEnvelope
    set?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    disconnect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    delete?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    update?: LocationAppointmentTypeUpdateWithWhereUniqueWithoutAppointmentTypeInput | LocationAppointmentTypeUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: LocationAppointmentTypeUpdateManyWithWhereWithoutAppointmentTypeInput | LocationAppointmentTypeUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: LocationAppointmentTypeScalarWhereInput | LocationAppointmentTypeScalarWhereInput[]
  }

  export type SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<SlotConfigurationCreateWithoutAppointmentTypeInput, SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput> | SlotConfigurationCreateWithoutAppointmentTypeInput[] | SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput | SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: SlotConfigurationUpsertWithWhereUniqueWithoutAppointmentTypeInput | SlotConfigurationUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: SlotConfigurationCreateManyAppointmentTypeInputEnvelope
    set?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    disconnect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    delete?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    update?: SlotConfigurationUpdateWithWhereUniqueWithoutAppointmentTypeInput | SlotConfigurationUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: SlotConfigurationUpdateManyWithWhereWithoutAppointmentTypeInput | SlotConfigurationUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: SlotConfigurationScalarWhereInput | SlotConfigurationScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<BookingCreateWithoutAppointmentTypeInput, BookingUncheckedCreateWithoutAppointmentTypeInput> | BookingCreateWithoutAppointmentTypeInput[] | BookingUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutAppointmentTypeInput | BookingCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutAppointmentTypeInput | BookingUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: BookingCreateManyAppointmentTypeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutAppointmentTypeInput | BookingUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutAppointmentTypeInput | BookingUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WaitlistUncheckedUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<WaitlistCreateWithoutAppointmentTypeInput, WaitlistUncheckedCreateWithoutAppointmentTypeInput> | WaitlistCreateWithoutAppointmentTypeInput[] | WaitlistUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutAppointmentTypeInput | WaitlistCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: WaitlistUpsertWithWhereUniqueWithoutAppointmentTypeInput | WaitlistUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: WaitlistCreateManyAppointmentTypeInputEnvelope
    set?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    disconnect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    delete?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    update?: WaitlistUpdateWithWhereUniqueWithoutAppointmentTypeInput | WaitlistUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: WaitlistUpdateManyWithWhereWithoutAppointmentTypeInput | WaitlistUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
  }

  export type SpecialDateUncheckedUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<SpecialDateCreateWithoutAppointmentTypeInput, SpecialDateUncheckedCreateWithoutAppointmentTypeInput> | SpecialDateCreateWithoutAppointmentTypeInput[] | SpecialDateUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutAppointmentTypeInput | SpecialDateCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: SpecialDateUpsertWithWhereUniqueWithoutAppointmentTypeInput | SpecialDateUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: SpecialDateCreateManyAppointmentTypeInputEnvelope
    set?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    disconnect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    delete?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    update?: SpecialDateUpdateWithWhereUniqueWithoutAppointmentTypeInput | SpecialDateUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: SpecialDateUpdateManyWithWhereWithoutAppointmentTypeInput | SpecialDateUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: SpecialDateScalarWhereInput | SpecialDateScalarWhereInput[]
  }

  export type BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutAppointmentTypeInput, BlockedSlotUncheckedCreateWithoutAppointmentTypeInput> | BlockedSlotCreateWithoutAppointmentTypeInput[] | BlockedSlotUncheckedCreateWithoutAppointmentTypeInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutAppointmentTypeInput | BlockedSlotCreateOrConnectWithoutAppointmentTypeInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutAppointmentTypeInput | BlockedSlotUpsertWithWhereUniqueWithoutAppointmentTypeInput[]
    createMany?: BlockedSlotCreateManyAppointmentTypeInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutAppointmentTypeInput | BlockedSlotUpdateWithWhereUniqueWithoutAppointmentTypeInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutAppointmentTypeInput | BlockedSlotUpdateManyWithWhereWithoutAppointmentTypeInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type LocationAppointmentTypeCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutLocationInput, LocationAppointmentTypeUncheckedCreateWithoutLocationInput> | LocationAppointmentTypeCreateWithoutLocationInput[] | LocationAppointmentTypeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutLocationInput | LocationAppointmentTypeCreateOrConnectWithoutLocationInput[]
    createMany?: LocationAppointmentTypeCreateManyLocationInputEnvelope
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
  }

  export type SlotConfigurationCreateNestedManyWithoutLocationInput = {
    create?: XOR<SlotConfigurationCreateWithoutLocationInput, SlotConfigurationUncheckedCreateWithoutLocationInput> | SlotConfigurationCreateWithoutLocationInput[] | SlotConfigurationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutLocationInput | SlotConfigurationCreateOrConnectWithoutLocationInput[]
    createMany?: SlotConfigurationCreateManyLocationInputEnvelope
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutLocationInput = {
    create?: XOR<BookingCreateWithoutLocationInput, BookingUncheckedCreateWithoutLocationInput> | BookingCreateWithoutLocationInput[] | BookingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLocationInput | BookingCreateOrConnectWithoutLocationInput[]
    createMany?: BookingCreateManyLocationInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WaitlistCreateNestedManyWithoutLocationInput = {
    create?: XOR<WaitlistCreateWithoutLocationInput, WaitlistUncheckedCreateWithoutLocationInput> | WaitlistCreateWithoutLocationInput[] | WaitlistUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutLocationInput | WaitlistCreateOrConnectWithoutLocationInput[]
    createMany?: WaitlistCreateManyLocationInputEnvelope
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
  }

  export type SpecialDateCreateNestedManyWithoutLocationInput = {
    create?: XOR<SpecialDateCreateWithoutLocationInput, SpecialDateUncheckedCreateWithoutLocationInput> | SpecialDateCreateWithoutLocationInput[] | SpecialDateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutLocationInput | SpecialDateCreateOrConnectWithoutLocationInput[]
    createMany?: SpecialDateCreateManyLocationInputEnvelope
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
  }

  export type BlockedSlotCreateNestedManyWithoutLocationInput = {
    create?: XOR<BlockedSlotCreateWithoutLocationInput, BlockedSlotUncheckedCreateWithoutLocationInput> | BlockedSlotCreateWithoutLocationInput[] | BlockedSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutLocationInput | BlockedSlotCreateOrConnectWithoutLocationInput[]
    createMany?: BlockedSlotCreateManyLocationInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type LocationAppointmentTypeUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutLocationInput, LocationAppointmentTypeUncheckedCreateWithoutLocationInput> | LocationAppointmentTypeCreateWithoutLocationInput[] | LocationAppointmentTypeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutLocationInput | LocationAppointmentTypeCreateOrConnectWithoutLocationInput[]
    createMany?: LocationAppointmentTypeCreateManyLocationInputEnvelope
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
  }

  export type SlotConfigurationUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<SlotConfigurationCreateWithoutLocationInput, SlotConfigurationUncheckedCreateWithoutLocationInput> | SlotConfigurationCreateWithoutLocationInput[] | SlotConfigurationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutLocationInput | SlotConfigurationCreateOrConnectWithoutLocationInput[]
    createMany?: SlotConfigurationCreateManyLocationInputEnvelope
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<BookingCreateWithoutLocationInput, BookingUncheckedCreateWithoutLocationInput> | BookingCreateWithoutLocationInput[] | BookingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLocationInput | BookingCreateOrConnectWithoutLocationInput[]
    createMany?: BookingCreateManyLocationInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type WaitlistUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<WaitlistCreateWithoutLocationInput, WaitlistUncheckedCreateWithoutLocationInput> | WaitlistCreateWithoutLocationInput[] | WaitlistUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutLocationInput | WaitlistCreateOrConnectWithoutLocationInput[]
    createMany?: WaitlistCreateManyLocationInputEnvelope
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
  }

  export type SpecialDateUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<SpecialDateCreateWithoutLocationInput, SpecialDateUncheckedCreateWithoutLocationInput> | SpecialDateCreateWithoutLocationInput[] | SpecialDateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutLocationInput | SpecialDateCreateOrConnectWithoutLocationInput[]
    createMany?: SpecialDateCreateManyLocationInputEnvelope
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
  }

  export type BlockedSlotUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<BlockedSlotCreateWithoutLocationInput, BlockedSlotUncheckedCreateWithoutLocationInput> | BlockedSlotCreateWithoutLocationInput[] | BlockedSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutLocationInput | BlockedSlotCreateOrConnectWithoutLocationInput[]
    createMany?: BlockedSlotCreateManyLocationInputEnvelope
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
  }

  export type LocationAppointmentTypeUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutLocationInput, LocationAppointmentTypeUncheckedCreateWithoutLocationInput> | LocationAppointmentTypeCreateWithoutLocationInput[] | LocationAppointmentTypeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutLocationInput | LocationAppointmentTypeCreateOrConnectWithoutLocationInput[]
    upsert?: LocationAppointmentTypeUpsertWithWhereUniqueWithoutLocationInput | LocationAppointmentTypeUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationAppointmentTypeCreateManyLocationInputEnvelope
    set?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    disconnect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    delete?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    update?: LocationAppointmentTypeUpdateWithWhereUniqueWithoutLocationInput | LocationAppointmentTypeUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationAppointmentTypeUpdateManyWithWhereWithoutLocationInput | LocationAppointmentTypeUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationAppointmentTypeScalarWhereInput | LocationAppointmentTypeScalarWhereInput[]
  }

  export type SlotConfigurationUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SlotConfigurationCreateWithoutLocationInput, SlotConfigurationUncheckedCreateWithoutLocationInput> | SlotConfigurationCreateWithoutLocationInput[] | SlotConfigurationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutLocationInput | SlotConfigurationCreateOrConnectWithoutLocationInput[]
    upsert?: SlotConfigurationUpsertWithWhereUniqueWithoutLocationInput | SlotConfigurationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SlotConfigurationCreateManyLocationInputEnvelope
    set?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    disconnect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    delete?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    update?: SlotConfigurationUpdateWithWhereUniqueWithoutLocationInput | SlotConfigurationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SlotConfigurationUpdateManyWithWhereWithoutLocationInput | SlotConfigurationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SlotConfigurationScalarWhereInput | SlotConfigurationScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BookingCreateWithoutLocationInput, BookingUncheckedCreateWithoutLocationInput> | BookingCreateWithoutLocationInput[] | BookingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLocationInput | BookingCreateOrConnectWithoutLocationInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutLocationInput | BookingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BookingCreateManyLocationInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutLocationInput | BookingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutLocationInput | BookingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WaitlistUpdateManyWithoutLocationNestedInput = {
    create?: XOR<WaitlistCreateWithoutLocationInput, WaitlistUncheckedCreateWithoutLocationInput> | WaitlistCreateWithoutLocationInput[] | WaitlistUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutLocationInput | WaitlistCreateOrConnectWithoutLocationInput[]
    upsert?: WaitlistUpsertWithWhereUniqueWithoutLocationInput | WaitlistUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: WaitlistCreateManyLocationInputEnvelope
    set?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    disconnect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    delete?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    update?: WaitlistUpdateWithWhereUniqueWithoutLocationInput | WaitlistUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: WaitlistUpdateManyWithWhereWithoutLocationInput | WaitlistUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
  }

  export type SpecialDateUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SpecialDateCreateWithoutLocationInput, SpecialDateUncheckedCreateWithoutLocationInput> | SpecialDateCreateWithoutLocationInput[] | SpecialDateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutLocationInput | SpecialDateCreateOrConnectWithoutLocationInput[]
    upsert?: SpecialDateUpsertWithWhereUniqueWithoutLocationInput | SpecialDateUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SpecialDateCreateManyLocationInputEnvelope
    set?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    disconnect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    delete?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    update?: SpecialDateUpdateWithWhereUniqueWithoutLocationInput | SpecialDateUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SpecialDateUpdateManyWithWhereWithoutLocationInput | SpecialDateUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SpecialDateScalarWhereInput | SpecialDateScalarWhereInput[]
  }

  export type BlockedSlotUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutLocationInput, BlockedSlotUncheckedCreateWithoutLocationInput> | BlockedSlotCreateWithoutLocationInput[] | BlockedSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutLocationInput | BlockedSlotCreateOrConnectWithoutLocationInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutLocationInput | BlockedSlotUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BlockedSlotCreateManyLocationInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutLocationInput | BlockedSlotUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutLocationInput | BlockedSlotUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type LocationAppointmentTypeUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LocationAppointmentTypeCreateWithoutLocationInput, LocationAppointmentTypeUncheckedCreateWithoutLocationInput> | LocationAppointmentTypeCreateWithoutLocationInput[] | LocationAppointmentTypeUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LocationAppointmentTypeCreateOrConnectWithoutLocationInput | LocationAppointmentTypeCreateOrConnectWithoutLocationInput[]
    upsert?: LocationAppointmentTypeUpsertWithWhereUniqueWithoutLocationInput | LocationAppointmentTypeUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LocationAppointmentTypeCreateManyLocationInputEnvelope
    set?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    disconnect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    delete?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    connect?: LocationAppointmentTypeWhereUniqueInput | LocationAppointmentTypeWhereUniqueInput[]
    update?: LocationAppointmentTypeUpdateWithWhereUniqueWithoutLocationInput | LocationAppointmentTypeUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LocationAppointmentTypeUpdateManyWithWhereWithoutLocationInput | LocationAppointmentTypeUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LocationAppointmentTypeScalarWhereInput | LocationAppointmentTypeScalarWhereInput[]
  }

  export type SlotConfigurationUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SlotConfigurationCreateWithoutLocationInput, SlotConfigurationUncheckedCreateWithoutLocationInput> | SlotConfigurationCreateWithoutLocationInput[] | SlotConfigurationUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotConfigurationCreateOrConnectWithoutLocationInput | SlotConfigurationCreateOrConnectWithoutLocationInput[]
    upsert?: SlotConfigurationUpsertWithWhereUniqueWithoutLocationInput | SlotConfigurationUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SlotConfigurationCreateManyLocationInputEnvelope
    set?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    disconnect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    delete?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    connect?: SlotConfigurationWhereUniqueInput | SlotConfigurationWhereUniqueInput[]
    update?: SlotConfigurationUpdateWithWhereUniqueWithoutLocationInput | SlotConfigurationUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SlotConfigurationUpdateManyWithWhereWithoutLocationInput | SlotConfigurationUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SlotConfigurationScalarWhereInput | SlotConfigurationScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BookingCreateWithoutLocationInput, BookingUncheckedCreateWithoutLocationInput> | BookingCreateWithoutLocationInput[] | BookingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutLocationInput | BookingCreateOrConnectWithoutLocationInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutLocationInput | BookingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BookingCreateManyLocationInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutLocationInput | BookingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutLocationInput | BookingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type WaitlistUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<WaitlistCreateWithoutLocationInput, WaitlistUncheckedCreateWithoutLocationInput> | WaitlistCreateWithoutLocationInput[] | WaitlistUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: WaitlistCreateOrConnectWithoutLocationInput | WaitlistCreateOrConnectWithoutLocationInput[]
    upsert?: WaitlistUpsertWithWhereUniqueWithoutLocationInput | WaitlistUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: WaitlistCreateManyLocationInputEnvelope
    set?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    disconnect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    delete?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    connect?: WaitlistWhereUniqueInput | WaitlistWhereUniqueInput[]
    update?: WaitlistUpdateWithWhereUniqueWithoutLocationInput | WaitlistUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: WaitlistUpdateManyWithWhereWithoutLocationInput | WaitlistUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
  }

  export type SpecialDateUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SpecialDateCreateWithoutLocationInput, SpecialDateUncheckedCreateWithoutLocationInput> | SpecialDateCreateWithoutLocationInput[] | SpecialDateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SpecialDateCreateOrConnectWithoutLocationInput | SpecialDateCreateOrConnectWithoutLocationInput[]
    upsert?: SpecialDateUpsertWithWhereUniqueWithoutLocationInput | SpecialDateUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SpecialDateCreateManyLocationInputEnvelope
    set?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    disconnect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    delete?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    connect?: SpecialDateWhereUniqueInput | SpecialDateWhereUniqueInput[]
    update?: SpecialDateUpdateWithWhereUniqueWithoutLocationInput | SpecialDateUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SpecialDateUpdateManyWithWhereWithoutLocationInput | SpecialDateUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SpecialDateScalarWhereInput | SpecialDateScalarWhereInput[]
  }

  export type BlockedSlotUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<BlockedSlotCreateWithoutLocationInput, BlockedSlotUncheckedCreateWithoutLocationInput> | BlockedSlotCreateWithoutLocationInput[] | BlockedSlotUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: BlockedSlotCreateOrConnectWithoutLocationInput | BlockedSlotCreateOrConnectWithoutLocationInput[]
    upsert?: BlockedSlotUpsertWithWhereUniqueWithoutLocationInput | BlockedSlotUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: BlockedSlotCreateManyLocationInputEnvelope
    set?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    disconnect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    delete?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    connect?: BlockedSlotWhereUniqueInput | BlockedSlotWhereUniqueInput[]
    update?: BlockedSlotUpdateWithWhereUniqueWithoutLocationInput | BlockedSlotUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: BlockedSlotUpdateManyWithWhereWithoutLocationInput | BlockedSlotUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
  }

  export type LocationCreateNestedOneWithoutLocationAppointmentTypesInput = {
    create?: XOR<LocationCreateWithoutLocationAppointmentTypesInput, LocationUncheckedCreateWithoutLocationAppointmentTypesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLocationAppointmentTypesInput
    connect?: LocationWhereUniqueInput
  }

  export type AppointmentTypeCreateNestedOneWithoutLocationAppointmentTypesInput = {
    create?: XOR<AppointmentTypeCreateWithoutLocationAppointmentTypesInput, AppointmentTypeUncheckedCreateWithoutLocationAppointmentTypesInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutLocationAppointmentTypesInput
    connect?: AppointmentTypeWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutLocationAppointmentTypesNestedInput = {
    create?: XOR<LocationCreateWithoutLocationAppointmentTypesInput, LocationUncheckedCreateWithoutLocationAppointmentTypesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLocationAppointmentTypesInput
    upsert?: LocationUpsertWithoutLocationAppointmentTypesInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutLocationAppointmentTypesInput, LocationUpdateWithoutLocationAppointmentTypesInput>, LocationUncheckedUpdateWithoutLocationAppointmentTypesInput>
  }

  export type AppointmentTypeUpdateOneRequiredWithoutLocationAppointmentTypesNestedInput = {
    create?: XOR<AppointmentTypeCreateWithoutLocationAppointmentTypesInput, AppointmentTypeUncheckedCreateWithoutLocationAppointmentTypesInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutLocationAppointmentTypesInput
    upsert?: AppointmentTypeUpsertWithoutLocationAppointmentTypesInput
    connect?: AppointmentTypeWhereUniqueInput
    update?: XOR<XOR<AppointmentTypeUpdateToOneWithWhereWithoutLocationAppointmentTypesInput, AppointmentTypeUpdateWithoutLocationAppointmentTypesInput>, AppointmentTypeUncheckedUpdateWithoutLocationAppointmentTypesInput>
  }

  export type SlotConfigurationCreateavailableDaysInput = {
    set: number[]
  }

  export type LocationCreateNestedOneWithoutSlotConfigurationsInput = {
    create?: XOR<LocationCreateWithoutSlotConfigurationsInput, LocationUncheckedCreateWithoutSlotConfigurationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSlotConfigurationsInput
    connect?: LocationWhereUniqueInput
  }

  export type AppointmentTypeCreateNestedOneWithoutSlotConfigurationsInput = {
    create?: XOR<AppointmentTypeCreateWithoutSlotConfigurationsInput, AppointmentTypeUncheckedCreateWithoutSlotConfigurationsInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutSlotConfigurationsInput
    connect?: AppointmentTypeWhereUniqueInput
  }

  export type SlotConfigurationUpdateavailableDaysInput = {
    set?: number[]
    push?: number | number[]
  }

  export type LocationUpdateOneRequiredWithoutSlotConfigurationsNestedInput = {
    create?: XOR<LocationCreateWithoutSlotConfigurationsInput, LocationUncheckedCreateWithoutSlotConfigurationsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSlotConfigurationsInput
    upsert?: LocationUpsertWithoutSlotConfigurationsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutSlotConfigurationsInput, LocationUpdateWithoutSlotConfigurationsInput>, LocationUncheckedUpdateWithoutSlotConfigurationsInput>
  }

  export type AppointmentTypeUpdateOneRequiredWithoutSlotConfigurationsNestedInput = {
    create?: XOR<AppointmentTypeCreateWithoutSlotConfigurationsInput, AppointmentTypeUncheckedCreateWithoutSlotConfigurationsInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutSlotConfigurationsInput
    upsert?: AppointmentTypeUpsertWithoutSlotConfigurationsInput
    connect?: AppointmentTypeWhereUniqueInput
    update?: XOR<XOR<AppointmentTypeUpdateToOneWithWhereWithoutSlotConfigurationsInput, AppointmentTypeUpdateWithoutSlotConfigurationsInput>, AppointmentTypeUncheckedUpdateWithoutSlotConfigurationsInput>
  }

  export type LocationCreateNestedOneWithoutSpecialDatesInput = {
    create?: XOR<LocationCreateWithoutSpecialDatesInput, LocationUncheckedCreateWithoutSpecialDatesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSpecialDatesInput
    connect?: LocationWhereUniqueInput
  }

  export type AppointmentTypeCreateNestedOneWithoutSpecialDatesInput = {
    create?: XOR<AppointmentTypeCreateWithoutSpecialDatesInput, AppointmentTypeUncheckedCreateWithoutSpecialDatesInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutSpecialDatesInput
    connect?: AppointmentTypeWhereUniqueInput
  }

  export type EnumSpecialDateTypeFieldUpdateOperationsInput = {
    set?: $Enums.SpecialDateType
  }

  export type LocationUpdateOneWithoutSpecialDatesNestedInput = {
    create?: XOR<LocationCreateWithoutSpecialDatesInput, LocationUncheckedCreateWithoutSpecialDatesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSpecialDatesInput
    upsert?: LocationUpsertWithoutSpecialDatesInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutSpecialDatesInput, LocationUpdateWithoutSpecialDatesInput>, LocationUncheckedUpdateWithoutSpecialDatesInput>
  }

  export type AppointmentTypeUpdateOneWithoutSpecialDatesNestedInput = {
    create?: XOR<AppointmentTypeCreateWithoutSpecialDatesInput, AppointmentTypeUncheckedCreateWithoutSpecialDatesInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutSpecialDatesInput
    upsert?: AppointmentTypeUpsertWithoutSpecialDatesInput
    disconnect?: AppointmentTypeWhereInput | boolean
    delete?: AppointmentTypeWhereInput | boolean
    connect?: AppointmentTypeWhereUniqueInput
    update?: XOR<XOR<AppointmentTypeUpdateToOneWithWhereWithoutSpecialDatesInput, AppointmentTypeUpdateWithoutSpecialDatesInput>, AppointmentTypeUncheckedUpdateWithoutSpecialDatesInput>
  }

  export type LocationCreateNestedOneWithoutBlockedSlotsInput = {
    create?: XOR<LocationCreateWithoutBlockedSlotsInput, LocationUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBlockedSlotsInput
    connect?: LocationWhereUniqueInput
  }

  export type AppointmentTypeCreateNestedOneWithoutBlockedSlotsInput = {
    create?: XOR<AppointmentTypeCreateWithoutBlockedSlotsInput, AppointmentTypeUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutBlockedSlotsInput
    connect?: AppointmentTypeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlockedSlotsInput = {
    create?: XOR<UserCreateWithoutBlockedSlotsInput, UserUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedSlotsInput
    connect?: UserWhereUniqueInput
  }

  export type LocationUpdateOneRequiredWithoutBlockedSlotsNestedInput = {
    create?: XOR<LocationCreateWithoutBlockedSlotsInput, LocationUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBlockedSlotsInput
    upsert?: LocationUpsertWithoutBlockedSlotsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutBlockedSlotsInput, LocationUpdateWithoutBlockedSlotsInput>, LocationUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type AppointmentTypeUpdateOneWithoutBlockedSlotsNestedInput = {
    create?: XOR<AppointmentTypeCreateWithoutBlockedSlotsInput, AppointmentTypeUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutBlockedSlotsInput
    upsert?: AppointmentTypeUpsertWithoutBlockedSlotsInput
    disconnect?: AppointmentTypeWhereInput | boolean
    delete?: AppointmentTypeWhereInput | boolean
    connect?: AppointmentTypeWhereUniqueInput
    update?: XOR<XOR<AppointmentTypeUpdateToOneWithWhereWithoutBlockedSlotsInput, AppointmentTypeUpdateWithoutBlockedSlotsInput>, AppointmentTypeUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type UserUpdateOneWithoutBlockedSlotsNestedInput = {
    create?: XOR<UserCreateWithoutBlockedSlotsInput, UserUncheckedCreateWithoutBlockedSlotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedSlotsInput
    upsert?: UserUpsertWithoutBlockedSlotsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedSlotsInput, UserUpdateWithoutBlockedSlotsInput>, UserUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentTypeCreateNestedOneWithoutBookingsInput = {
    create?: XOR<AppointmentTypeCreateWithoutBookingsInput, AppointmentTypeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutBookingsInput
    connect?: AppointmentTypeWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutBookingsInput = {
    create?: XOR<LocationCreateWithoutBookingsInput, LocationUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBookingsInput
    connect?: LocationWhereUniqueInput
  }

  export type EmailNotificationCreateNestedManyWithoutBookingInput = {
    create?: XOR<EmailNotificationCreateWithoutBookingInput, EmailNotificationUncheckedCreateWithoutBookingInput> | EmailNotificationCreateWithoutBookingInput[] | EmailNotificationUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutBookingInput | EmailNotificationCreateOrConnectWithoutBookingInput[]
    createMany?: EmailNotificationCreateManyBookingInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type EmailNotificationUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<EmailNotificationCreateWithoutBookingInput, EmailNotificationUncheckedCreateWithoutBookingInput> | EmailNotificationCreateWithoutBookingInput[] | EmailNotificationUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutBookingInput | EmailNotificationCreateOrConnectWithoutBookingInput[]
    createMany?: EmailNotificationCreateManyBookingInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type NullableEnumCancelledByFieldUpdateOperationsInput = {
    set?: $Enums.CancelledBy | null
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type AppointmentTypeUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<AppointmentTypeCreateWithoutBookingsInput, AppointmentTypeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutBookingsInput
    upsert?: AppointmentTypeUpsertWithoutBookingsInput
    connect?: AppointmentTypeWhereUniqueInput
    update?: XOR<XOR<AppointmentTypeUpdateToOneWithWhereWithoutBookingsInput, AppointmentTypeUpdateWithoutBookingsInput>, AppointmentTypeUncheckedUpdateWithoutBookingsInput>
  }

  export type LocationUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<LocationCreateWithoutBookingsInput, LocationUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutBookingsInput
    upsert?: LocationUpsertWithoutBookingsInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutBookingsInput, LocationUpdateWithoutBookingsInput>, LocationUncheckedUpdateWithoutBookingsInput>
  }

  export type EmailNotificationUpdateManyWithoutBookingNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutBookingInput, EmailNotificationUncheckedCreateWithoutBookingInput> | EmailNotificationCreateWithoutBookingInput[] | EmailNotificationUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutBookingInput | EmailNotificationCreateOrConnectWithoutBookingInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutBookingInput | EmailNotificationUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: EmailNotificationCreateManyBookingInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutBookingInput | EmailNotificationUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutBookingInput | EmailNotificationUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type EmailNotificationUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutBookingInput, EmailNotificationUncheckedCreateWithoutBookingInput> | EmailNotificationCreateWithoutBookingInput[] | EmailNotificationUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutBookingInput | EmailNotificationCreateOrConnectWithoutBookingInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutBookingInput | EmailNotificationUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: EmailNotificationCreateManyBookingInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutBookingInput | EmailNotificationUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutBookingInput | EmailNotificationUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWaitlistInput = {
    create?: XOR<UserCreateWithoutWaitlistInput, UserUncheckedCreateWithoutWaitlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaitlistInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentTypeCreateNestedOneWithoutWaitlistInput = {
    create?: XOR<AppointmentTypeCreateWithoutWaitlistInput, AppointmentTypeUncheckedCreateWithoutWaitlistInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutWaitlistInput
    connect?: AppointmentTypeWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutWaitlistInput = {
    create?: XOR<LocationCreateWithoutWaitlistInput, LocationUncheckedCreateWithoutWaitlistInput>
    connectOrCreate?: LocationCreateOrConnectWithoutWaitlistInput
    connect?: LocationWhereUniqueInput
  }

  export type EmailNotificationCreateNestedManyWithoutWaitlistInput = {
    create?: XOR<EmailNotificationCreateWithoutWaitlistInput, EmailNotificationUncheckedCreateWithoutWaitlistInput> | EmailNotificationCreateWithoutWaitlistInput[] | EmailNotificationUncheckedCreateWithoutWaitlistInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutWaitlistInput | EmailNotificationCreateOrConnectWithoutWaitlistInput[]
    createMany?: EmailNotificationCreateManyWaitlistInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type EmailNotificationUncheckedCreateNestedManyWithoutWaitlistInput = {
    create?: XOR<EmailNotificationCreateWithoutWaitlistInput, EmailNotificationUncheckedCreateWithoutWaitlistInput> | EmailNotificationCreateWithoutWaitlistInput[] | EmailNotificationUncheckedCreateWithoutWaitlistInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutWaitlistInput | EmailNotificationCreateOrConnectWithoutWaitlistInput[]
    createMany?: EmailNotificationCreateManyWaitlistInputEnvelope
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
  }

  export type EnumWaitlistStatusFieldUpdateOperationsInput = {
    set?: $Enums.WaitlistStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWaitlistNestedInput = {
    create?: XOR<UserCreateWithoutWaitlistInput, UserUncheckedCreateWithoutWaitlistInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaitlistInput
    upsert?: UserUpsertWithoutWaitlistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWaitlistInput, UserUpdateWithoutWaitlistInput>, UserUncheckedUpdateWithoutWaitlistInput>
  }

  export type AppointmentTypeUpdateOneRequiredWithoutWaitlistNestedInput = {
    create?: XOR<AppointmentTypeCreateWithoutWaitlistInput, AppointmentTypeUncheckedCreateWithoutWaitlistInput>
    connectOrCreate?: AppointmentTypeCreateOrConnectWithoutWaitlistInput
    upsert?: AppointmentTypeUpsertWithoutWaitlistInput
    connect?: AppointmentTypeWhereUniqueInput
    update?: XOR<XOR<AppointmentTypeUpdateToOneWithWhereWithoutWaitlistInput, AppointmentTypeUpdateWithoutWaitlistInput>, AppointmentTypeUncheckedUpdateWithoutWaitlistInput>
  }

  export type LocationUpdateOneRequiredWithoutWaitlistNestedInput = {
    create?: XOR<LocationCreateWithoutWaitlistInput, LocationUncheckedCreateWithoutWaitlistInput>
    connectOrCreate?: LocationCreateOrConnectWithoutWaitlistInput
    upsert?: LocationUpsertWithoutWaitlistInput
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutWaitlistInput, LocationUpdateWithoutWaitlistInput>, LocationUncheckedUpdateWithoutWaitlistInput>
  }

  export type EmailNotificationUpdateManyWithoutWaitlistNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutWaitlistInput, EmailNotificationUncheckedCreateWithoutWaitlistInput> | EmailNotificationCreateWithoutWaitlistInput[] | EmailNotificationUncheckedCreateWithoutWaitlistInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutWaitlistInput | EmailNotificationCreateOrConnectWithoutWaitlistInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutWaitlistInput | EmailNotificationUpsertWithWhereUniqueWithoutWaitlistInput[]
    createMany?: EmailNotificationCreateManyWaitlistInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutWaitlistInput | EmailNotificationUpdateWithWhereUniqueWithoutWaitlistInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutWaitlistInput | EmailNotificationUpdateManyWithWhereWithoutWaitlistInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type EmailNotificationUncheckedUpdateManyWithoutWaitlistNestedInput = {
    create?: XOR<EmailNotificationCreateWithoutWaitlistInput, EmailNotificationUncheckedCreateWithoutWaitlistInput> | EmailNotificationCreateWithoutWaitlistInput[] | EmailNotificationUncheckedCreateWithoutWaitlistInput[]
    connectOrCreate?: EmailNotificationCreateOrConnectWithoutWaitlistInput | EmailNotificationCreateOrConnectWithoutWaitlistInput[]
    upsert?: EmailNotificationUpsertWithWhereUniqueWithoutWaitlistInput | EmailNotificationUpsertWithWhereUniqueWithoutWaitlistInput[]
    createMany?: EmailNotificationCreateManyWaitlistInputEnvelope
    set?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    disconnect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    delete?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    connect?: EmailNotificationWhereUniqueInput | EmailNotificationWhereUniqueInput[]
    update?: EmailNotificationUpdateWithWhereUniqueWithoutWaitlistInput | EmailNotificationUpdateWithWhereUniqueWithoutWaitlistInput[]
    updateMany?: EmailNotificationUpdateManyWithWhereWithoutWaitlistInput | EmailNotificationUpdateManyWithWhereWithoutWaitlistInput[]
    deleteMany?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailNotificationsInput = {
    create?: XOR<UserCreateWithoutEmailNotificationsInput, UserUncheckedCreateWithoutEmailNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutEmailNotificationsInput = {
    create?: XOR<BookingCreateWithoutEmailNotificationsInput, BookingUncheckedCreateWithoutEmailNotificationsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEmailNotificationsInput
    connect?: BookingWhereUniqueInput
  }

  export type WaitlistCreateNestedOneWithoutEmailNotificationsInput = {
    create?: XOR<WaitlistCreateWithoutEmailNotificationsInput, WaitlistUncheckedCreateWithoutEmailNotificationsInput>
    connectOrCreate?: WaitlistCreateOrConnectWithoutEmailNotificationsInput
    connect?: WaitlistWhereUniqueInput
  }

  export type EnumEmailTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmailType
  }

  export type EnumEmailStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailStatus
  }

  export type UserUpdateOneRequiredWithoutEmailNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutEmailNotificationsInput, UserUncheckedCreateWithoutEmailNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailNotificationsInput
    upsert?: UserUpsertWithoutEmailNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailNotificationsInput, UserUpdateWithoutEmailNotificationsInput>, UserUncheckedUpdateWithoutEmailNotificationsInput>
  }

  export type BookingUpdateOneWithoutEmailNotificationsNestedInput = {
    create?: XOR<BookingCreateWithoutEmailNotificationsInput, BookingUncheckedCreateWithoutEmailNotificationsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutEmailNotificationsInput
    upsert?: BookingUpsertWithoutEmailNotificationsInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutEmailNotificationsInput, BookingUpdateWithoutEmailNotificationsInput>, BookingUncheckedUpdateWithoutEmailNotificationsInput>
  }

  export type WaitlistUpdateOneWithoutEmailNotificationsNestedInput = {
    create?: XOR<WaitlistCreateWithoutEmailNotificationsInput, WaitlistUncheckedCreateWithoutEmailNotificationsInput>
    connectOrCreate?: WaitlistCreateOrConnectWithoutEmailNotificationsInput
    upsert?: WaitlistUpsertWithoutEmailNotificationsInput
    disconnect?: WaitlistWhereInput | boolean
    delete?: WaitlistWhereInput | boolean
    connect?: WaitlistWhereUniqueInput
    update?: XOR<XOR<WaitlistUpdateToOneWithWhereWithoutEmailNotificationsInput, WaitlistUpdateWithoutEmailNotificationsInput>, WaitlistUncheckedUpdateWithoutEmailNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSpecialDateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SpecialDateType | EnumSpecialDateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpecialDateTypeFilter<$PrismaModel> | $Enums.SpecialDateType
  }

  export type NestedEnumSpecialDateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SpecialDateType | EnumSpecialDateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SpecialDateType[] | ListEnumSpecialDateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSpecialDateTypeWithAggregatesFilter<$PrismaModel> | $Enums.SpecialDateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSpecialDateTypeFilter<$PrismaModel>
    _max?: NestedEnumSpecialDateTypeFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumCancelledByNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCancelledByNullableFilter<$PrismaModel> | $Enums.CancelledBy | null
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumCancelledByNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CancelledBy[] | ListEnumCancelledByFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCancelledByNullableWithAggregatesFilter<$PrismaModel> | $Enums.CancelledBy | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCancelledByNullableFilter<$PrismaModel>
    _max?: NestedEnumCancelledByNullableFilter<$PrismaModel>
  }

  export type NestedEnumWaitlistStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WaitlistStatus | EnumWaitlistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWaitlistStatusFilter<$PrismaModel> | $Enums.WaitlistStatus
  }

  export type NestedEnumWaitlistStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WaitlistStatus | EnumWaitlistStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WaitlistStatus[] | ListEnumWaitlistStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWaitlistStatusWithAggregatesFilter<$PrismaModel> | $Enums.WaitlistStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWaitlistStatusFilter<$PrismaModel>
    _max?: NestedEnumWaitlistStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEmailTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeFilter<$PrismaModel> | $Enums.EmailType
  }

  export type NestedEnumEmailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusFilter<$PrismaModel> | $Enums.EmailStatus
  }

  export type NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailType | EnumEmailTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailType[] | ListEnumEmailTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailTypeFilter<$PrismaModel>
  }

  export type NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailStatus | EnumEmailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailStatus[] | ListEnumEmailStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailStatusFilter<$PrismaModel>
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentType: AppointmentTypeCreateNestedOneWithoutBookingsInput
    location: LocationCreateNestedOneWithoutBookingsInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    appointmentTypeId: string
    locationId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WaitlistCreateWithoutUserInput = {
    id?: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentType: AppointmentTypeCreateNestedOneWithoutWaitlistInput
    location: LocationCreateNestedOneWithoutWaitlistInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistUncheckedCreateWithoutUserInput = {
    id?: string
    appointmentTypeId: string
    locationId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistCreateOrConnectWithoutUserInput = {
    where: WaitlistWhereUniqueInput
    create: XOR<WaitlistCreateWithoutUserInput, WaitlistUncheckedCreateWithoutUserInput>
  }

  export type WaitlistCreateManyUserInputEnvelope = {
    data: WaitlistCreateManyUserInput | WaitlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailNotificationCreateWithoutUserInput = {
    id?: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    booking?: BookingCreateNestedOneWithoutEmailNotificationsInput
    waitlist?: WaitlistCreateNestedOneWithoutEmailNotificationsInput
  }

  export type EmailNotificationUncheckedCreateWithoutUserInput = {
    id?: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    bookingId?: string | null
    waitlistId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type EmailNotificationCreateOrConnectWithoutUserInput = {
    where: EmailNotificationWhereUniqueInput
    create: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput>
  }

  export type EmailNotificationCreateManyUserInputEnvelope = {
    data: EmailNotificationCreateManyUserInput | EmailNotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlockedSlotCreateWithoutUserInput = {
    id?: string
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutBlockedSlotsInput
    appointmentType?: AppointmentTypeCreateNestedOneWithoutBlockedSlotsInput
  }

  export type BlockedSlotUncheckedCreateWithoutUserInput = {
    id?: string
    locationId: string
    appointmentTypeId?: string | null
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
  }

  export type BlockedSlotCreateOrConnectWithoutUserInput = {
    where: BlockedSlotWhereUniqueInput
    create: XOR<BlockedSlotCreateWithoutUserInput, BlockedSlotUncheckedCreateWithoutUserInput>
  }

  export type BlockedSlotCreateManyUserInputEnvelope = {
    data: BlockedSlotCreateManyUserInput | BlockedSlotCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    appointmentTypeId?: StringFilter<"Booking"> | string
    locationId?: StringFilter<"Booking"> | string
    bookingReference?: StringFilter<"Booking"> | string
    appointmentDate?: DateTimeFilter<"Booking"> | Date | string
    appointmentTime?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    bookingDate?: DateTimeFilter<"Booking"> | Date | string
    cancellationDate?: DateTimeNullableFilter<"Booking"> | Date | string | null
    cancelledBy?: EnumCancelledByNullableFilter<"Booking"> | $Enums.CancelledBy | null
    cancellationReason?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type WaitlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WaitlistWhereUniqueInput
    update: XOR<WaitlistUpdateWithoutUserInput, WaitlistUncheckedUpdateWithoutUserInput>
    create: XOR<WaitlistCreateWithoutUserInput, WaitlistUncheckedCreateWithoutUserInput>
  }

  export type WaitlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WaitlistWhereUniqueInput
    data: XOR<WaitlistUpdateWithoutUserInput, WaitlistUncheckedUpdateWithoutUserInput>
  }

  export type WaitlistUpdateManyWithWhereWithoutUserInput = {
    where: WaitlistScalarWhereInput
    data: XOR<WaitlistUpdateManyMutationInput, WaitlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WaitlistScalarWhereInput = {
    AND?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
    OR?: WaitlistScalarWhereInput[]
    NOT?: WaitlistScalarWhereInput | WaitlistScalarWhereInput[]
    id?: StringFilter<"Waitlist"> | string
    userId?: StringFilter<"Waitlist"> | string
    appointmentTypeId?: StringFilter<"Waitlist"> | string
    locationId?: StringFilter<"Waitlist"> | string
    preferredDateStart?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    preferredDateEnd?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    status?: EnumWaitlistStatusFilter<"Waitlist"> | $Enums.WaitlistStatus
    position?: IntNullableFilter<"Waitlist"> | number | null
    joinedAt?: DateTimeFilter<"Waitlist"> | Date | string
    notifiedAt?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    notificationCount?: IntFilter<"Waitlist"> | number
    expiresAt?: DateTimeNullableFilter<"Waitlist"> | Date | string | null
    notes?: StringNullableFilter<"Waitlist"> | string | null
    createdAt?: DateTimeFilter<"Waitlist"> | Date | string
    updatedAt?: DateTimeFilter<"Waitlist"> | Date | string
  }

  export type EmailNotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailNotificationWhereUniqueInput
    update: XOR<EmailNotificationUpdateWithoutUserInput, EmailNotificationUncheckedUpdateWithoutUserInput>
    create: XOR<EmailNotificationCreateWithoutUserInput, EmailNotificationUncheckedCreateWithoutUserInput>
  }

  export type EmailNotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailNotificationWhereUniqueInput
    data: XOR<EmailNotificationUpdateWithoutUserInput, EmailNotificationUncheckedUpdateWithoutUserInput>
  }

  export type EmailNotificationUpdateManyWithWhereWithoutUserInput = {
    where: EmailNotificationScalarWhereInput
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailNotificationScalarWhereInput = {
    AND?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
    OR?: EmailNotificationScalarWhereInput[]
    NOT?: EmailNotificationScalarWhereInput | EmailNotificationScalarWhereInput[]
    id?: StringFilter<"EmailNotification"> | string
    userId?: StringFilter<"EmailNotification"> | string
    emailType?: EnumEmailTypeFilter<"EmailNotification"> | $Enums.EmailType
    recipientEmail?: StringFilter<"EmailNotification"> | string
    subject?: StringFilter<"EmailNotification"> | string
    status?: EnumEmailStatusFilter<"EmailNotification"> | $Enums.EmailStatus
    sentAt?: DateTimeNullableFilter<"EmailNotification"> | Date | string | null
    bookingId?: StringNullableFilter<"EmailNotification"> | string | null
    waitlistId?: StringNullableFilter<"EmailNotification"> | string | null
    errorMessage?: StringNullableFilter<"EmailNotification"> | string | null
    createdAt?: DateTimeFilter<"EmailNotification"> | Date | string
  }

  export type BlockedSlotUpsertWithWhereUniqueWithoutUserInput = {
    where: BlockedSlotWhereUniqueInput
    update: XOR<BlockedSlotUpdateWithoutUserInput, BlockedSlotUncheckedUpdateWithoutUserInput>
    create: XOR<BlockedSlotCreateWithoutUserInput, BlockedSlotUncheckedCreateWithoutUserInput>
  }

  export type BlockedSlotUpdateWithWhereUniqueWithoutUserInput = {
    where: BlockedSlotWhereUniqueInput
    data: XOR<BlockedSlotUpdateWithoutUserInput, BlockedSlotUncheckedUpdateWithoutUserInput>
  }

  export type BlockedSlotUpdateManyWithWhereWithoutUserInput = {
    where: BlockedSlotScalarWhereInput
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyWithoutUserInput>
  }

  export type BlockedSlotScalarWhereInput = {
    AND?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
    OR?: BlockedSlotScalarWhereInput[]
    NOT?: BlockedSlotScalarWhereInput | BlockedSlotScalarWhereInput[]
    id?: StringFilter<"BlockedSlot"> | string
    locationId?: StringFilter<"BlockedSlot"> | string
    appointmentTypeId?: StringNullableFilter<"BlockedSlot"> | string | null
    blockedDate?: DateTimeFilter<"BlockedSlot"> | Date | string
    blockedStartTime?: StringFilter<"BlockedSlot"> | string
    blockedEndTime?: StringFilter<"BlockedSlot"> | string
    reason?: StringNullableFilter<"BlockedSlot"> | string | null
    appliesToAllAppointmentTypes?: BoolFilter<"BlockedSlot"> | boolean
    createdBy?: StringNullableFilter<"BlockedSlot"> | string | null
    createdAt?: DateTimeFilter<"BlockedSlot"> | Date | string
  }

  export type LocationAppointmentTypeCreateWithoutAppointmentTypeInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutLocationAppointmentTypesInput
  }

  export type LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput = {
    id?: string
    locationId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LocationAppointmentTypeCreateOrConnectWithoutAppointmentTypeInput = {
    where: LocationAppointmentTypeWhereUniqueInput
    create: XOR<LocationAppointmentTypeCreateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type LocationAppointmentTypeCreateManyAppointmentTypeInputEnvelope = {
    data: LocationAppointmentTypeCreateManyAppointmentTypeInput | LocationAppointmentTypeCreateManyAppointmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type SlotConfigurationCreateWithoutAppointmentTypeInput = {
    id?: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location: LocationCreateNestedOneWithoutSlotConfigurationsInput
  }

  export type SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput = {
    id?: string
    locationId: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotConfigurationCreateOrConnectWithoutAppointmentTypeInput = {
    where: SlotConfigurationWhereUniqueInput
    create: XOR<SlotConfigurationCreateWithoutAppointmentTypeInput, SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type SlotConfigurationCreateManyAppointmentTypeInputEnvelope = {
    data: SlotConfigurationCreateManyAppointmentTypeInput | SlotConfigurationCreateManyAppointmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutAppointmentTypeInput = {
    id?: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    location: LocationCreateNestedOneWithoutBookingsInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutAppointmentTypeInput = {
    id?: string
    userId: string
    locationId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutAppointmentTypeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAppointmentTypeInput, BookingUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type BookingCreateManyAppointmentTypeInputEnvelope = {
    data: BookingCreateManyAppointmentTypeInput | BookingCreateManyAppointmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type WaitlistCreateWithoutAppointmentTypeInput = {
    id?: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWaitlistInput
    location: LocationCreateNestedOneWithoutWaitlistInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistUncheckedCreateWithoutAppointmentTypeInput = {
    id?: string
    userId: string
    locationId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistCreateOrConnectWithoutAppointmentTypeInput = {
    where: WaitlistWhereUniqueInput
    create: XOR<WaitlistCreateWithoutAppointmentTypeInput, WaitlistUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type WaitlistCreateManyAppointmentTypeInputEnvelope = {
    data: WaitlistCreateManyAppointmentTypeInput | WaitlistCreateManyAppointmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type SpecialDateCreateWithoutAppointmentTypeInput = {
    id?: string
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: LocationCreateNestedOneWithoutSpecialDatesInput
  }

  export type SpecialDateUncheckedCreateWithoutAppointmentTypeInput = {
    id?: string
    locationId?: string | null
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialDateCreateOrConnectWithoutAppointmentTypeInput = {
    where: SpecialDateWhereUniqueInput
    create: XOR<SpecialDateCreateWithoutAppointmentTypeInput, SpecialDateUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type SpecialDateCreateManyAppointmentTypeInputEnvelope = {
    data: SpecialDateCreateManyAppointmentTypeInput | SpecialDateCreateManyAppointmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type BlockedSlotCreateWithoutAppointmentTypeInput = {
    id?: string
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    location: LocationCreateNestedOneWithoutBlockedSlotsInput
    user?: UserCreateNestedOneWithoutBlockedSlotsInput
  }

  export type BlockedSlotUncheckedCreateWithoutAppointmentTypeInput = {
    id?: string
    locationId: string
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BlockedSlotCreateOrConnectWithoutAppointmentTypeInput = {
    where: BlockedSlotWhereUniqueInput
    create: XOR<BlockedSlotCreateWithoutAppointmentTypeInput, BlockedSlotUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type BlockedSlotCreateManyAppointmentTypeInputEnvelope = {
    data: BlockedSlotCreateManyAppointmentTypeInput | BlockedSlotCreateManyAppointmentTypeInput[]
    skipDuplicates?: boolean
  }

  export type LocationAppointmentTypeUpsertWithWhereUniqueWithoutAppointmentTypeInput = {
    where: LocationAppointmentTypeWhereUniqueInput
    update: XOR<LocationAppointmentTypeUpdateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedUpdateWithoutAppointmentTypeInput>
    create: XOR<LocationAppointmentTypeCreateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type LocationAppointmentTypeUpdateWithWhereUniqueWithoutAppointmentTypeInput = {
    where: LocationAppointmentTypeWhereUniqueInput
    data: XOR<LocationAppointmentTypeUpdateWithoutAppointmentTypeInput, LocationAppointmentTypeUncheckedUpdateWithoutAppointmentTypeInput>
  }

  export type LocationAppointmentTypeUpdateManyWithWhereWithoutAppointmentTypeInput = {
    where: LocationAppointmentTypeScalarWhereInput
    data: XOR<LocationAppointmentTypeUpdateManyMutationInput, LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeInput>
  }

  export type LocationAppointmentTypeScalarWhereInput = {
    AND?: LocationAppointmentTypeScalarWhereInput | LocationAppointmentTypeScalarWhereInput[]
    OR?: LocationAppointmentTypeScalarWhereInput[]
    NOT?: LocationAppointmentTypeScalarWhereInput | LocationAppointmentTypeScalarWhereInput[]
    id?: StringFilter<"LocationAppointmentType"> | string
    locationId?: StringFilter<"LocationAppointmentType"> | string
    appointmentTypeId?: StringFilter<"LocationAppointmentType"> | string
    isActive?: BoolFilter<"LocationAppointmentType"> | boolean
    createdAt?: DateTimeFilter<"LocationAppointmentType"> | Date | string
  }

  export type SlotConfigurationUpsertWithWhereUniqueWithoutAppointmentTypeInput = {
    where: SlotConfigurationWhereUniqueInput
    update: XOR<SlotConfigurationUpdateWithoutAppointmentTypeInput, SlotConfigurationUncheckedUpdateWithoutAppointmentTypeInput>
    create: XOR<SlotConfigurationCreateWithoutAppointmentTypeInput, SlotConfigurationUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type SlotConfigurationUpdateWithWhereUniqueWithoutAppointmentTypeInput = {
    where: SlotConfigurationWhereUniqueInput
    data: XOR<SlotConfigurationUpdateWithoutAppointmentTypeInput, SlotConfigurationUncheckedUpdateWithoutAppointmentTypeInput>
  }

  export type SlotConfigurationUpdateManyWithWhereWithoutAppointmentTypeInput = {
    where: SlotConfigurationScalarWhereInput
    data: XOR<SlotConfigurationUpdateManyMutationInput, SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeInput>
  }

  export type SlotConfigurationScalarWhereInput = {
    AND?: SlotConfigurationScalarWhereInput | SlotConfigurationScalarWhereInput[]
    OR?: SlotConfigurationScalarWhereInput[]
    NOT?: SlotConfigurationScalarWhereInput | SlotConfigurationScalarWhereInput[]
    id?: StringFilter<"SlotConfiguration"> | string
    locationId?: StringFilter<"SlotConfiguration"> | string
    appointmentTypeId?: StringFilter<"SlotConfiguration"> | string
    availableDays?: IntNullableListFilter<"SlotConfiguration">
    startTime?: StringFilter<"SlotConfiguration"> | string
    endTime?: StringFilter<"SlotConfiguration"> | string
    slotDurationMinutes?: IntFilter<"SlotConfiguration"> | number
    slotsPerInterval?: IntFilter<"SlotConfiguration"> | number
    bufferTimeMinutes?: IntFilter<"SlotConfiguration"> | number
    advanceBookingDays?: IntFilter<"SlotConfiguration"> | number
    sameDayBookingCutoffHours?: IntFilter<"SlotConfiguration"> | number
    minAdvanceBookingHours?: IntFilter<"SlotConfiguration"> | number
    isActive?: BoolFilter<"SlotConfiguration"> | boolean
    createdAt?: DateTimeFilter<"SlotConfiguration"> | Date | string
    updatedAt?: DateTimeFilter<"SlotConfiguration"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutAppointmentTypeInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutAppointmentTypeInput, BookingUncheckedUpdateWithoutAppointmentTypeInput>
    create: XOR<BookingCreateWithoutAppointmentTypeInput, BookingUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutAppointmentTypeInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutAppointmentTypeInput, BookingUncheckedUpdateWithoutAppointmentTypeInput>
  }

  export type BookingUpdateManyWithWhereWithoutAppointmentTypeInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutAppointmentTypeInput>
  }

  export type WaitlistUpsertWithWhereUniqueWithoutAppointmentTypeInput = {
    where: WaitlistWhereUniqueInput
    update: XOR<WaitlistUpdateWithoutAppointmentTypeInput, WaitlistUncheckedUpdateWithoutAppointmentTypeInput>
    create: XOR<WaitlistCreateWithoutAppointmentTypeInput, WaitlistUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type WaitlistUpdateWithWhereUniqueWithoutAppointmentTypeInput = {
    where: WaitlistWhereUniqueInput
    data: XOR<WaitlistUpdateWithoutAppointmentTypeInput, WaitlistUncheckedUpdateWithoutAppointmentTypeInput>
  }

  export type WaitlistUpdateManyWithWhereWithoutAppointmentTypeInput = {
    where: WaitlistScalarWhereInput
    data: XOR<WaitlistUpdateManyMutationInput, WaitlistUncheckedUpdateManyWithoutAppointmentTypeInput>
  }

  export type SpecialDateUpsertWithWhereUniqueWithoutAppointmentTypeInput = {
    where: SpecialDateWhereUniqueInput
    update: XOR<SpecialDateUpdateWithoutAppointmentTypeInput, SpecialDateUncheckedUpdateWithoutAppointmentTypeInput>
    create: XOR<SpecialDateCreateWithoutAppointmentTypeInput, SpecialDateUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type SpecialDateUpdateWithWhereUniqueWithoutAppointmentTypeInput = {
    where: SpecialDateWhereUniqueInput
    data: XOR<SpecialDateUpdateWithoutAppointmentTypeInput, SpecialDateUncheckedUpdateWithoutAppointmentTypeInput>
  }

  export type SpecialDateUpdateManyWithWhereWithoutAppointmentTypeInput = {
    where: SpecialDateScalarWhereInput
    data: XOR<SpecialDateUpdateManyMutationInput, SpecialDateUncheckedUpdateManyWithoutAppointmentTypeInput>
  }

  export type SpecialDateScalarWhereInput = {
    AND?: SpecialDateScalarWhereInput | SpecialDateScalarWhereInput[]
    OR?: SpecialDateScalarWhereInput[]
    NOT?: SpecialDateScalarWhereInput | SpecialDateScalarWhereInput[]
    id?: StringFilter<"SpecialDate"> | string
    locationId?: StringNullableFilter<"SpecialDate"> | string | null
    appointmentTypeId?: StringNullableFilter<"SpecialDate"> | string | null
    date?: DateTimeFilter<"SpecialDate"> | Date | string
    dateType?: EnumSpecialDateTypeFilter<"SpecialDate"> | $Enums.SpecialDateType
    reason?: StringNullableFilter<"SpecialDate"> | string | null
    isClosed?: BoolFilter<"SpecialDate"> | boolean
    modifiedStartTime?: StringNullableFilter<"SpecialDate"> | string | null
    modifiedEndTime?: StringNullableFilter<"SpecialDate"> | string | null
    appliesToAllLocations?: BoolFilter<"SpecialDate"> | boolean
    appliesToAllAppointmentTypes?: BoolFilter<"SpecialDate"> | boolean
    createdAt?: DateTimeFilter<"SpecialDate"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialDate"> | Date | string
  }

  export type BlockedSlotUpsertWithWhereUniqueWithoutAppointmentTypeInput = {
    where: BlockedSlotWhereUniqueInput
    update: XOR<BlockedSlotUpdateWithoutAppointmentTypeInput, BlockedSlotUncheckedUpdateWithoutAppointmentTypeInput>
    create: XOR<BlockedSlotCreateWithoutAppointmentTypeInput, BlockedSlotUncheckedCreateWithoutAppointmentTypeInput>
  }

  export type BlockedSlotUpdateWithWhereUniqueWithoutAppointmentTypeInput = {
    where: BlockedSlotWhereUniqueInput
    data: XOR<BlockedSlotUpdateWithoutAppointmentTypeInput, BlockedSlotUncheckedUpdateWithoutAppointmentTypeInput>
  }

  export type BlockedSlotUpdateManyWithWhereWithoutAppointmentTypeInput = {
    where: BlockedSlotScalarWhereInput
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeInput>
  }

  export type LocationAppointmentTypeCreateWithoutLocationInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    appointmentType: AppointmentTypeCreateNestedOneWithoutLocationAppointmentTypesInput
  }

  export type LocationAppointmentTypeUncheckedCreateWithoutLocationInput = {
    id?: string
    appointmentTypeId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LocationAppointmentTypeCreateOrConnectWithoutLocationInput = {
    where: LocationAppointmentTypeWhereUniqueInput
    create: XOR<LocationAppointmentTypeCreateWithoutLocationInput, LocationAppointmentTypeUncheckedCreateWithoutLocationInput>
  }

  export type LocationAppointmentTypeCreateManyLocationInputEnvelope = {
    data: LocationAppointmentTypeCreateManyLocationInput | LocationAppointmentTypeCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type SlotConfigurationCreateWithoutLocationInput = {
    id?: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentType: AppointmentTypeCreateNestedOneWithoutSlotConfigurationsInput
  }

  export type SlotConfigurationUncheckedCreateWithoutLocationInput = {
    id?: string
    appointmentTypeId: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotConfigurationCreateOrConnectWithoutLocationInput = {
    where: SlotConfigurationWhereUniqueInput
    create: XOR<SlotConfigurationCreateWithoutLocationInput, SlotConfigurationUncheckedCreateWithoutLocationInput>
  }

  export type SlotConfigurationCreateManyLocationInputEnvelope = {
    data: SlotConfigurationCreateManyLocationInput | SlotConfigurationCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutLocationInput = {
    id?: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutBookingsInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutLocationInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutLocationInput, BookingUncheckedCreateWithoutLocationInput>
  }

  export type BookingCreateManyLocationInputEnvelope = {
    data: BookingCreateManyLocationInput | BookingCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type WaitlistCreateWithoutLocationInput = {
    id?: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWaitlistInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutWaitlistInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutWaitlistInput
  }

  export type WaitlistCreateOrConnectWithoutLocationInput = {
    where: WaitlistWhereUniqueInput
    create: XOR<WaitlistCreateWithoutLocationInput, WaitlistUncheckedCreateWithoutLocationInput>
  }

  export type WaitlistCreateManyLocationInputEnvelope = {
    data: WaitlistCreateManyLocationInput | WaitlistCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type SpecialDateCreateWithoutLocationInput = {
    id?: string
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointmentType?: AppointmentTypeCreateNestedOneWithoutSpecialDatesInput
  }

  export type SpecialDateUncheckedCreateWithoutLocationInput = {
    id?: string
    appointmentTypeId?: string | null
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialDateCreateOrConnectWithoutLocationInput = {
    where: SpecialDateWhereUniqueInput
    create: XOR<SpecialDateCreateWithoutLocationInput, SpecialDateUncheckedCreateWithoutLocationInput>
  }

  export type SpecialDateCreateManyLocationInputEnvelope = {
    data: SpecialDateCreateManyLocationInput | SpecialDateCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type BlockedSlotCreateWithoutLocationInput = {
    id?: string
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    appointmentType?: AppointmentTypeCreateNestedOneWithoutBlockedSlotsInput
    user?: UserCreateNestedOneWithoutBlockedSlotsInput
  }

  export type BlockedSlotUncheckedCreateWithoutLocationInput = {
    id?: string
    appointmentTypeId?: string | null
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type BlockedSlotCreateOrConnectWithoutLocationInput = {
    where: BlockedSlotWhereUniqueInput
    create: XOR<BlockedSlotCreateWithoutLocationInput, BlockedSlotUncheckedCreateWithoutLocationInput>
  }

  export type BlockedSlotCreateManyLocationInputEnvelope = {
    data: BlockedSlotCreateManyLocationInput | BlockedSlotCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type LocationAppointmentTypeUpsertWithWhereUniqueWithoutLocationInput = {
    where: LocationAppointmentTypeWhereUniqueInput
    update: XOR<LocationAppointmentTypeUpdateWithoutLocationInput, LocationAppointmentTypeUncheckedUpdateWithoutLocationInput>
    create: XOR<LocationAppointmentTypeCreateWithoutLocationInput, LocationAppointmentTypeUncheckedCreateWithoutLocationInput>
  }

  export type LocationAppointmentTypeUpdateWithWhereUniqueWithoutLocationInput = {
    where: LocationAppointmentTypeWhereUniqueInput
    data: XOR<LocationAppointmentTypeUpdateWithoutLocationInput, LocationAppointmentTypeUncheckedUpdateWithoutLocationInput>
  }

  export type LocationAppointmentTypeUpdateManyWithWhereWithoutLocationInput = {
    where: LocationAppointmentTypeScalarWhereInput
    data: XOR<LocationAppointmentTypeUpdateManyMutationInput, LocationAppointmentTypeUncheckedUpdateManyWithoutLocationInput>
  }

  export type SlotConfigurationUpsertWithWhereUniqueWithoutLocationInput = {
    where: SlotConfigurationWhereUniqueInput
    update: XOR<SlotConfigurationUpdateWithoutLocationInput, SlotConfigurationUncheckedUpdateWithoutLocationInput>
    create: XOR<SlotConfigurationCreateWithoutLocationInput, SlotConfigurationUncheckedCreateWithoutLocationInput>
  }

  export type SlotConfigurationUpdateWithWhereUniqueWithoutLocationInput = {
    where: SlotConfigurationWhereUniqueInput
    data: XOR<SlotConfigurationUpdateWithoutLocationInput, SlotConfigurationUncheckedUpdateWithoutLocationInput>
  }

  export type SlotConfigurationUpdateManyWithWhereWithoutLocationInput = {
    where: SlotConfigurationScalarWhereInput
    data: XOR<SlotConfigurationUpdateManyMutationInput, SlotConfigurationUncheckedUpdateManyWithoutLocationInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutLocationInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutLocationInput, BookingUncheckedUpdateWithoutLocationInput>
    create: XOR<BookingCreateWithoutLocationInput, BookingUncheckedCreateWithoutLocationInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutLocationInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutLocationInput, BookingUncheckedUpdateWithoutLocationInput>
  }

  export type BookingUpdateManyWithWhereWithoutLocationInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutLocationInput>
  }

  export type WaitlistUpsertWithWhereUniqueWithoutLocationInput = {
    where: WaitlistWhereUniqueInput
    update: XOR<WaitlistUpdateWithoutLocationInput, WaitlistUncheckedUpdateWithoutLocationInput>
    create: XOR<WaitlistCreateWithoutLocationInput, WaitlistUncheckedCreateWithoutLocationInput>
  }

  export type WaitlistUpdateWithWhereUniqueWithoutLocationInput = {
    where: WaitlistWhereUniqueInput
    data: XOR<WaitlistUpdateWithoutLocationInput, WaitlistUncheckedUpdateWithoutLocationInput>
  }

  export type WaitlistUpdateManyWithWhereWithoutLocationInput = {
    where: WaitlistScalarWhereInput
    data: XOR<WaitlistUpdateManyMutationInput, WaitlistUncheckedUpdateManyWithoutLocationInput>
  }

  export type SpecialDateUpsertWithWhereUniqueWithoutLocationInput = {
    where: SpecialDateWhereUniqueInput
    update: XOR<SpecialDateUpdateWithoutLocationInput, SpecialDateUncheckedUpdateWithoutLocationInput>
    create: XOR<SpecialDateCreateWithoutLocationInput, SpecialDateUncheckedCreateWithoutLocationInput>
  }

  export type SpecialDateUpdateWithWhereUniqueWithoutLocationInput = {
    where: SpecialDateWhereUniqueInput
    data: XOR<SpecialDateUpdateWithoutLocationInput, SpecialDateUncheckedUpdateWithoutLocationInput>
  }

  export type SpecialDateUpdateManyWithWhereWithoutLocationInput = {
    where: SpecialDateScalarWhereInput
    data: XOR<SpecialDateUpdateManyMutationInput, SpecialDateUncheckedUpdateManyWithoutLocationInput>
  }

  export type BlockedSlotUpsertWithWhereUniqueWithoutLocationInput = {
    where: BlockedSlotWhereUniqueInput
    update: XOR<BlockedSlotUpdateWithoutLocationInput, BlockedSlotUncheckedUpdateWithoutLocationInput>
    create: XOR<BlockedSlotCreateWithoutLocationInput, BlockedSlotUncheckedCreateWithoutLocationInput>
  }

  export type BlockedSlotUpdateWithWhereUniqueWithoutLocationInput = {
    where: BlockedSlotWhereUniqueInput
    data: XOR<BlockedSlotUpdateWithoutLocationInput, BlockedSlotUncheckedUpdateWithoutLocationInput>
  }

  export type BlockedSlotUpdateManyWithWhereWithoutLocationInput = {
    where: BlockedSlotScalarWhereInput
    data: XOR<BlockedSlotUpdateManyMutationInput, BlockedSlotUncheckedUpdateManyWithoutLocationInput>
  }

  export type LocationCreateWithoutLocationAppointmentTypesInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutLocationInput
    bookings?: BookingCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutLocationAppointmentTypesInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutLocationInput
    bookings?: BookingUncheckedCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutLocationAppointmentTypesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutLocationAppointmentTypesInput, LocationUncheckedCreateWithoutLocationAppointmentTypesInput>
  }

  export type AppointmentTypeCreateWithoutLocationAppointmentTypesInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUncheckedCreateWithoutLocationAppointmentTypesInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingUncheckedCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeCreateOrConnectWithoutLocationAppointmentTypesInput = {
    where: AppointmentTypeWhereUniqueInput
    create: XOR<AppointmentTypeCreateWithoutLocationAppointmentTypesInput, AppointmentTypeUncheckedCreateWithoutLocationAppointmentTypesInput>
  }

  export type LocationUpsertWithoutLocationAppointmentTypesInput = {
    update: XOR<LocationUpdateWithoutLocationAppointmentTypesInput, LocationUncheckedUpdateWithoutLocationAppointmentTypesInput>
    create: XOR<LocationCreateWithoutLocationAppointmentTypesInput, LocationUncheckedCreateWithoutLocationAppointmentTypesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutLocationAppointmentTypesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutLocationAppointmentTypesInput, LocationUncheckedUpdateWithoutLocationAppointmentTypesInput>
  }

  export type LocationUpdateWithoutLocationAppointmentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotConfigurations?: SlotConfigurationUpdateManyWithoutLocationNestedInput
    bookings?: BookingUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutLocationAppointmentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutLocationNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type AppointmentTypeUpsertWithoutLocationAppointmentTypesInput = {
    update: XOR<AppointmentTypeUpdateWithoutLocationAppointmentTypesInput, AppointmentTypeUncheckedUpdateWithoutLocationAppointmentTypesInput>
    create: XOR<AppointmentTypeCreateWithoutLocationAppointmentTypesInput, AppointmentTypeUncheckedCreateWithoutLocationAppointmentTypesInput>
    where?: AppointmentTypeWhereInput
  }

  export type AppointmentTypeUpdateToOneWithWhereWithoutLocationAppointmentTypesInput = {
    where?: AppointmentTypeWhereInput
    data: XOR<AppointmentTypeUpdateWithoutLocationAppointmentTypesInput, AppointmentTypeUncheckedUpdateWithoutLocationAppointmentTypesInput>
  }

  export type AppointmentTypeUpdateWithoutLocationAppointmentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotConfigurations?: SlotConfigurationUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeUncheckedUpdateWithoutLocationAppointmentTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type LocationCreateWithoutSlotConfigurationsInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutLocationInput
    bookings?: BookingCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutSlotConfigurationsInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutLocationInput
    bookings?: BookingUncheckedCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutSlotConfigurationsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutSlotConfigurationsInput, LocationUncheckedCreateWithoutSlotConfigurationsInput>
  }

  export type AppointmentTypeCreateWithoutSlotConfigurationsInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUncheckedCreateWithoutSlotConfigurationsInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingUncheckedCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeCreateOrConnectWithoutSlotConfigurationsInput = {
    where: AppointmentTypeWhereUniqueInput
    create: XOR<AppointmentTypeCreateWithoutSlotConfigurationsInput, AppointmentTypeUncheckedCreateWithoutSlotConfigurationsInput>
  }

  export type LocationUpsertWithoutSlotConfigurationsInput = {
    update: XOR<LocationUpdateWithoutSlotConfigurationsInput, LocationUncheckedUpdateWithoutSlotConfigurationsInput>
    create: XOR<LocationCreateWithoutSlotConfigurationsInput, LocationUncheckedCreateWithoutSlotConfigurationsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutSlotConfigurationsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutSlotConfigurationsInput, LocationUncheckedUpdateWithoutSlotConfigurationsInput>
  }

  export type LocationUpdateWithoutSlotConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutLocationNestedInput
    bookings?: BookingUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutSlotConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutLocationNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type AppointmentTypeUpsertWithoutSlotConfigurationsInput = {
    update: XOR<AppointmentTypeUpdateWithoutSlotConfigurationsInput, AppointmentTypeUncheckedUpdateWithoutSlotConfigurationsInput>
    create: XOR<AppointmentTypeCreateWithoutSlotConfigurationsInput, AppointmentTypeUncheckedCreateWithoutSlotConfigurationsInput>
    where?: AppointmentTypeWhereInput
  }

  export type AppointmentTypeUpdateToOneWithWhereWithoutSlotConfigurationsInput = {
    where?: AppointmentTypeWhereInput
    data: XOR<AppointmentTypeUpdateWithoutSlotConfigurationsInput, AppointmentTypeUncheckedUpdateWithoutSlotConfigurationsInput>
  }

  export type AppointmentTypeUpdateWithoutSlotConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeUncheckedUpdateWithoutSlotConfigurationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type LocationCreateWithoutSpecialDatesInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutLocationInput
    bookings?: BookingCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutSpecialDatesInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutLocationInput
    bookings?: BookingUncheckedCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutSpecialDatesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutSpecialDatesInput, LocationUncheckedCreateWithoutSpecialDatesInput>
  }

  export type AppointmentTypeCreateWithoutSpecialDatesInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUncheckedCreateWithoutSpecialDatesInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingUncheckedCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeCreateOrConnectWithoutSpecialDatesInput = {
    where: AppointmentTypeWhereUniqueInput
    create: XOR<AppointmentTypeCreateWithoutSpecialDatesInput, AppointmentTypeUncheckedCreateWithoutSpecialDatesInput>
  }

  export type LocationUpsertWithoutSpecialDatesInput = {
    update: XOR<LocationUpdateWithoutSpecialDatesInput, LocationUncheckedUpdateWithoutSpecialDatesInput>
    create: XOR<LocationCreateWithoutSpecialDatesInput, LocationUncheckedCreateWithoutSpecialDatesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutSpecialDatesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutSpecialDatesInput, LocationUncheckedUpdateWithoutSpecialDatesInput>
  }

  export type LocationUpdateWithoutSpecialDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutLocationNestedInput
    bookings?: BookingUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutSpecialDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutLocationNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type AppointmentTypeUpsertWithoutSpecialDatesInput = {
    update: XOR<AppointmentTypeUpdateWithoutSpecialDatesInput, AppointmentTypeUncheckedUpdateWithoutSpecialDatesInput>
    create: XOR<AppointmentTypeCreateWithoutSpecialDatesInput, AppointmentTypeUncheckedCreateWithoutSpecialDatesInput>
    where?: AppointmentTypeWhereInput
  }

  export type AppointmentTypeUpdateToOneWithWhereWithoutSpecialDatesInput = {
    where?: AppointmentTypeWhereInput
    data: XOR<AppointmentTypeUpdateWithoutSpecialDatesInput, AppointmentTypeUncheckedUpdateWithoutSpecialDatesInput>
  }

  export type AppointmentTypeUpdateWithoutSpecialDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeUncheckedUpdateWithoutSpecialDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type LocationCreateWithoutBlockedSlotsInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutLocationInput
    bookings?: BookingCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutBlockedSlotsInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutLocationInput
    bookings?: BookingUncheckedCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutBlockedSlotsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutBlockedSlotsInput, LocationUncheckedCreateWithoutBlockedSlotsInput>
  }

  export type AppointmentTypeCreateWithoutBlockedSlotsInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUncheckedCreateWithoutBlockedSlotsInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingUncheckedCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeCreateOrConnectWithoutBlockedSlotsInput = {
    where: AppointmentTypeWhereUniqueInput
    create: XOR<AppointmentTypeCreateWithoutBlockedSlotsInput, AppointmentTypeUncheckedCreateWithoutBlockedSlotsInput>
  }

  export type UserCreateWithoutBlockedSlotsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    waitlist?: WaitlistCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedSlotsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedSlotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedSlotsInput, UserUncheckedCreateWithoutBlockedSlotsInput>
  }

  export type LocationUpsertWithoutBlockedSlotsInput = {
    update: XOR<LocationUpdateWithoutBlockedSlotsInput, LocationUncheckedUpdateWithoutBlockedSlotsInput>
    create: XOR<LocationCreateWithoutBlockedSlotsInput, LocationUncheckedCreateWithoutBlockedSlotsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutBlockedSlotsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutBlockedSlotsInput, LocationUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type LocationUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutLocationNestedInput
    bookings?: BookingUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutLocationNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type AppointmentTypeUpsertWithoutBlockedSlotsInput = {
    update: XOR<AppointmentTypeUpdateWithoutBlockedSlotsInput, AppointmentTypeUncheckedUpdateWithoutBlockedSlotsInput>
    create: XOR<AppointmentTypeCreateWithoutBlockedSlotsInput, AppointmentTypeUncheckedCreateWithoutBlockedSlotsInput>
    where?: AppointmentTypeWhereInput
  }

  export type AppointmentTypeUpdateToOneWithWhereWithoutBlockedSlotsInput = {
    where?: AppointmentTypeWhereInput
    data: XOR<AppointmentTypeUpdateWithoutBlockedSlotsInput, AppointmentTypeUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type AppointmentTypeUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeUncheckedUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type UserUpsertWithoutBlockedSlotsInput = {
    update: XOR<UserUpdateWithoutBlockedSlotsInput, UserUncheckedUpdateWithoutBlockedSlotsInput>
    create: XOR<UserCreateWithoutBlockedSlotsInput, UserUncheckedCreateWithoutBlockedSlotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedSlotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedSlotsInput, UserUncheckedUpdateWithoutBlockedSlotsInput>
  }

  export type UserUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    waitlist?: WaitlistUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    waitlist?: WaitlistCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type AppointmentTypeCreateWithoutBookingsInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUncheckedCreateWithoutBookingsInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutAppointmentTypeInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeCreateOrConnectWithoutBookingsInput = {
    where: AppointmentTypeWhereUniqueInput
    create: XOR<AppointmentTypeCreateWithoutBookingsInput, AppointmentTypeUncheckedCreateWithoutBookingsInput>
  }

  export type LocationCreateWithoutBookingsInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutBookingsInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutLocationInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutBookingsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutBookingsInput, LocationUncheckedCreateWithoutBookingsInput>
  }

  export type EmailNotificationCreateWithoutBookingInput = {
    id?: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailNotificationsInput
    waitlist?: WaitlistCreateNestedOneWithoutEmailNotificationsInput
  }

  export type EmailNotificationUncheckedCreateWithoutBookingInput = {
    id?: string
    userId: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    waitlistId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type EmailNotificationCreateOrConnectWithoutBookingInput = {
    where: EmailNotificationWhereUniqueInput
    create: XOR<EmailNotificationCreateWithoutBookingInput, EmailNotificationUncheckedCreateWithoutBookingInput>
  }

  export type EmailNotificationCreateManyBookingInputEnvelope = {
    data: EmailNotificationCreateManyBookingInput | EmailNotificationCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlist?: WaitlistUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    waitlist?: WaitlistUncheckedUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentTypeUpsertWithoutBookingsInput = {
    update: XOR<AppointmentTypeUpdateWithoutBookingsInput, AppointmentTypeUncheckedUpdateWithoutBookingsInput>
    create: XOR<AppointmentTypeCreateWithoutBookingsInput, AppointmentTypeUncheckedCreateWithoutBookingsInput>
    where?: AppointmentTypeWhereInput
  }

  export type AppointmentTypeUpdateToOneWithWhereWithoutBookingsInput = {
    where?: AppointmentTypeWhereInput
    data: XOR<AppointmentTypeUpdateWithoutBookingsInput, AppointmentTypeUncheckedUpdateWithoutBookingsInput>
  }

  export type AppointmentTypeUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type LocationUpsertWithoutBookingsInput = {
    update: XOR<LocationUpdateWithoutBookingsInput, LocationUncheckedUpdateWithoutBookingsInput>
    create: XOR<LocationCreateWithoutBookingsInput, LocationUncheckedCreateWithoutBookingsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutBookingsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutBookingsInput, LocationUncheckedUpdateWithoutBookingsInput>
  }

  export type LocationUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutLocationNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type EmailNotificationUpsertWithWhereUniqueWithoutBookingInput = {
    where: EmailNotificationWhereUniqueInput
    update: XOR<EmailNotificationUpdateWithoutBookingInput, EmailNotificationUncheckedUpdateWithoutBookingInput>
    create: XOR<EmailNotificationCreateWithoutBookingInput, EmailNotificationUncheckedCreateWithoutBookingInput>
  }

  export type EmailNotificationUpdateWithWhereUniqueWithoutBookingInput = {
    where: EmailNotificationWhereUniqueInput
    data: XOR<EmailNotificationUpdateWithoutBookingInput, EmailNotificationUncheckedUpdateWithoutBookingInput>
  }

  export type EmailNotificationUpdateManyWithWhereWithoutBookingInput = {
    where: EmailNotificationScalarWhereInput
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyWithoutBookingInput>
  }

  export type UserCreateWithoutWaitlistInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWaitlistInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    emailNotifications?: EmailNotificationUncheckedCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWaitlistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWaitlistInput, UserUncheckedCreateWithoutWaitlistInput>
  }

  export type AppointmentTypeCreateWithoutWaitlistInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeUncheckedCreateWithoutWaitlistInput = {
    id?: string
    typeName: string
    description?: string | null
    durationMinutes?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutAppointmentTypeInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutAppointmentTypeInput
    bookings?: BookingUncheckedCreateNestedManyWithoutAppointmentTypeInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutAppointmentTypeInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutAppointmentTypeInput
  }

  export type AppointmentTypeCreateOrConnectWithoutWaitlistInput = {
    where: AppointmentTypeWhereUniqueInput
    create: XOR<AppointmentTypeCreateWithoutWaitlistInput, AppointmentTypeUncheckedCreateWithoutWaitlistInput>
  }

  export type LocationCreateWithoutWaitlistInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationCreateNestedManyWithoutLocationInput
    bookings?: BookingCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutWaitlistInput = {
    id?: string
    locationName: string
    addressLine1: string
    addressLine2?: string | null
    city: string
    state: string
    zipCode: string
    phoneNumber?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedCreateNestedManyWithoutLocationInput
    slotConfigurations?: SlotConfigurationUncheckedCreateNestedManyWithoutLocationInput
    bookings?: BookingUncheckedCreateNestedManyWithoutLocationInput
    specialDates?: SpecialDateUncheckedCreateNestedManyWithoutLocationInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutWaitlistInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutWaitlistInput, LocationUncheckedCreateWithoutWaitlistInput>
  }

  export type EmailNotificationCreateWithoutWaitlistInput = {
    id?: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailNotificationsInput
    booking?: BookingCreateNestedOneWithoutEmailNotificationsInput
  }

  export type EmailNotificationUncheckedCreateWithoutWaitlistInput = {
    id?: string
    userId: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    bookingId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type EmailNotificationCreateOrConnectWithoutWaitlistInput = {
    where: EmailNotificationWhereUniqueInput
    create: XOR<EmailNotificationCreateWithoutWaitlistInput, EmailNotificationUncheckedCreateWithoutWaitlistInput>
  }

  export type EmailNotificationCreateManyWaitlistInputEnvelope = {
    data: EmailNotificationCreateManyWaitlistInput | EmailNotificationCreateManyWaitlistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWaitlistInput = {
    update: XOR<UserUpdateWithoutWaitlistInput, UserUncheckedUpdateWithoutWaitlistInput>
    create: XOR<UserCreateWithoutWaitlistInput, UserUncheckedCreateWithoutWaitlistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWaitlistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWaitlistInput, UserUncheckedUpdateWithoutWaitlistInput>
  }

  export type UserUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppointmentTypeUpsertWithoutWaitlistInput = {
    update: XOR<AppointmentTypeUpdateWithoutWaitlistInput, AppointmentTypeUncheckedUpdateWithoutWaitlistInput>
    create: XOR<AppointmentTypeCreateWithoutWaitlistInput, AppointmentTypeUncheckedCreateWithoutWaitlistInput>
    where?: AppointmentTypeWhereInput
  }

  export type AppointmentTypeUpdateToOneWithWhereWithoutWaitlistInput = {
    where?: AppointmentTypeWhereInput
    data: XOR<AppointmentTypeUpdateWithoutWaitlistInput, AppointmentTypeUncheckedUpdateWithoutWaitlistInput>
  }

  export type AppointmentTypeUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type AppointmentTypeUncheckedUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    typeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutAppointmentTypeNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeNestedInput
  }

  export type LocationUpsertWithoutWaitlistInput = {
    update: XOR<LocationUpdateWithoutWaitlistInput, LocationUncheckedUpdateWithoutWaitlistInput>
    create: XOR<LocationCreateWithoutWaitlistInput, LocationUncheckedCreateWithoutWaitlistInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutWaitlistInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutWaitlistInput, LocationUncheckedUpdateWithoutWaitlistInput>
  }

  export type LocationUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUpdateManyWithoutLocationNestedInput
    bookings?: BookingUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationName?: StringFieldUpdateOperationsInput | string
    addressLine1?: StringFieldUpdateOperationsInput | string
    addressLine2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locationAppointmentTypes?: LocationAppointmentTypeUncheckedUpdateManyWithoutLocationNestedInput
    slotConfigurations?: SlotConfigurationUncheckedUpdateManyWithoutLocationNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutLocationNestedInput
    specialDates?: SpecialDateUncheckedUpdateManyWithoutLocationNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type EmailNotificationUpsertWithWhereUniqueWithoutWaitlistInput = {
    where: EmailNotificationWhereUniqueInput
    update: XOR<EmailNotificationUpdateWithoutWaitlistInput, EmailNotificationUncheckedUpdateWithoutWaitlistInput>
    create: XOR<EmailNotificationCreateWithoutWaitlistInput, EmailNotificationUncheckedCreateWithoutWaitlistInput>
  }

  export type EmailNotificationUpdateWithWhereUniqueWithoutWaitlistInput = {
    where: EmailNotificationWhereUniqueInput
    data: XOR<EmailNotificationUpdateWithoutWaitlistInput, EmailNotificationUncheckedUpdateWithoutWaitlistInput>
  }

  export type EmailNotificationUpdateManyWithWhereWithoutWaitlistInput = {
    where: EmailNotificationScalarWhereInput
    data: XOR<EmailNotificationUpdateManyMutationInput, EmailNotificationUncheckedUpdateManyWithoutWaitlistInput>
  }

  export type UserCreateWithoutEmailNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    waitlist?: WaitlistCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailNotificationsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phoneNumber?: string | null
    dateOfBirth?: Date | string | null
    driverLicenseNumber?: string | null
    role?: $Enums.Role
    isActive?: boolean
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    waitlist?: WaitlistUncheckedCreateNestedManyWithoutUserInput
    blockedSlots?: BlockedSlotUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailNotificationsInput, UserUncheckedCreateWithoutEmailNotificationsInput>
  }

  export type BookingCreateWithoutEmailNotificationsInput = {
    id?: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutBookingsInput
    location: LocationCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutEmailNotificationsInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    locationId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutEmailNotificationsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEmailNotificationsInput, BookingUncheckedCreateWithoutEmailNotificationsInput>
  }

  export type WaitlistCreateWithoutEmailNotificationsInput = {
    id?: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWaitlistInput
    appointmentType: AppointmentTypeCreateNestedOneWithoutWaitlistInput
    location: LocationCreateNestedOneWithoutWaitlistInput
  }

  export type WaitlistUncheckedCreateWithoutEmailNotificationsInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    locationId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistCreateOrConnectWithoutEmailNotificationsInput = {
    where: WaitlistWhereUniqueInput
    create: XOR<WaitlistCreateWithoutEmailNotificationsInput, WaitlistUncheckedCreateWithoutEmailNotificationsInput>
  }

  export type UserUpsertWithoutEmailNotificationsInput = {
    update: XOR<UserUpdateWithoutEmailNotificationsInput, UserUncheckedUpdateWithoutEmailNotificationsInput>
    create: XOR<UserCreateWithoutEmailNotificationsInput, UserUncheckedCreateWithoutEmailNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailNotificationsInput, UserUncheckedUpdateWithoutEmailNotificationsInput>
  }

  export type UserUpdateWithoutEmailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    waitlist?: WaitlistUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverLicenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    waitlist?: WaitlistUncheckedUpdateManyWithoutUserNestedInput
    blockedSlots?: BlockedSlotUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithoutEmailNotificationsInput = {
    update: XOR<BookingUpdateWithoutEmailNotificationsInput, BookingUncheckedUpdateWithoutEmailNotificationsInput>
    create: XOR<BookingCreateWithoutEmailNotificationsInput, BookingUncheckedCreateWithoutEmailNotificationsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutEmailNotificationsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutEmailNotificationsInput, BookingUncheckedUpdateWithoutEmailNotificationsInput>
  }

  export type BookingUpdateWithoutEmailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutBookingsNestedInput
    location?: LocationUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutEmailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistUpsertWithoutEmailNotificationsInput = {
    update: XOR<WaitlistUpdateWithoutEmailNotificationsInput, WaitlistUncheckedUpdateWithoutEmailNotificationsInput>
    create: XOR<WaitlistCreateWithoutEmailNotificationsInput, WaitlistUncheckedCreateWithoutEmailNotificationsInput>
    where?: WaitlistWhereInput
  }

  export type WaitlistUpdateToOneWithWhereWithoutEmailNotificationsInput = {
    where?: WaitlistWhereInput
    data: XOR<WaitlistUpdateWithoutEmailNotificationsInput, WaitlistUncheckedUpdateWithoutEmailNotificationsInput>
  }

  export type WaitlistUpdateWithoutEmailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWaitlistNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutWaitlistNestedInput
    location?: LocationUpdateOneRequiredWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateWithoutEmailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: string
    appointmentTypeId: string
    locationId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistCreateManyUserInput = {
    id?: string
    appointmentTypeId: string
    locationId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailNotificationCreateManyUserInput = {
    id?: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    bookingId?: string | null
    waitlistId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type BlockedSlotCreateManyUserInput = {
    id?: string
    locationId: string
    appointmentTypeId?: string | null
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutBookingsNestedInput
    location?: LocationUpdateOneRequiredWithoutBookingsNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutWaitlistNestedInput
    location?: LocationUpdateOneRequiredWithoutWaitlistNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutEmailNotificationsNestedInput
    waitlist?: WaitlistUpdateOneWithoutEmailNotificationsNestedInput
  }

  export type EmailNotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    waitlistId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    waitlistId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutBlockedSlotsNestedInput
    appointmentType?: AppointmentTypeUpdateOneWithoutBlockedSlotsNestedInput
  }

  export type BlockedSlotUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAppointmentTypeCreateManyAppointmentTypeInput = {
    id?: string
    locationId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SlotConfigurationCreateManyAppointmentTypeInput = {
    id?: string
    locationId: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyAppointmentTypeInput = {
    id?: string
    userId: string
    locationId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistCreateManyAppointmentTypeInput = {
    id?: string
    userId: string
    locationId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialDateCreateManyAppointmentTypeInput = {
    id?: string
    locationId?: string | null
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockedSlotCreateManyAppointmentTypeInput = {
    id?: string
    locationId: string
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type LocationAppointmentTypeUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutLocationAppointmentTypesNestedInput
  }

  export type LocationAppointmentTypeUncheckedUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAppointmentTypeUncheckedUpdateManyWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotConfigurationUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutSlotConfigurationsNestedInput
  }

  export type SlotConfigurationUncheckedUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotConfigurationUncheckedUpdateManyWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    location?: LocationUpdateOneRequiredWithoutBookingsNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWaitlistNestedInput
    location?: LocationUpdateOneRequiredWithoutWaitlistNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateManyWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDateUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneWithoutSpecialDatesNestedInput
  }

  export type SpecialDateUncheckedUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDateUncheckedUpdateManyWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneRequiredWithoutBlockedSlotsNestedInput
    user?: UserUpdateOneWithoutBlockedSlotsNestedInput
  }

  export type BlockedSlotUncheckedUpdateWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUncheckedUpdateManyWithoutAppointmentTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: StringFieldUpdateOperationsInput | string
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAppointmentTypeCreateManyLocationInput = {
    id?: string
    appointmentTypeId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SlotConfigurationCreateManyLocationInput = {
    id?: string
    appointmentTypeId: string
    availableDays?: SlotConfigurationCreateavailableDaysInput | number[]
    startTime: string
    endTime: string
    slotDurationMinutes?: number
    slotsPerInterval?: number
    bufferTimeMinutes?: number
    advanceBookingDays?: number
    sameDayBookingCutoffHours?: number
    minAdvanceBookingHours?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyLocationInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    bookingReference?: string
    appointmentDate: Date | string
    appointmentTime: string
    status?: $Enums.BookingStatus
    bookingDate?: Date | string
    cancellationDate?: Date | string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistCreateManyLocationInput = {
    id?: string
    userId: string
    appointmentTypeId: string
    preferredDateStart?: Date | string | null
    preferredDateEnd?: Date | string | null
    status?: $Enums.WaitlistStatus
    position?: number | null
    joinedAt?: Date | string
    notifiedAt?: Date | string | null
    notificationCount?: number
    expiresAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialDateCreateManyLocationInput = {
    id?: string
    appointmentTypeId?: string | null
    date: Date | string
    dateType: $Enums.SpecialDateType
    reason?: string | null
    isClosed?: boolean
    modifiedStartTime?: string | null
    modifiedEndTime?: string | null
    appliesToAllLocations?: boolean
    appliesToAllAppointmentTypes?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockedSlotCreateManyLocationInput = {
    id?: string
    appointmentTypeId?: string | null
    blockedDate: Date | string
    blockedStartTime: string
    blockedEndTime: string
    reason?: string | null
    appliesToAllAppointmentTypes?: boolean
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type LocationAppointmentTypeUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutLocationAppointmentTypesNestedInput
  }

  export type LocationAppointmentTypeUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationAppointmentTypeUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotConfigurationUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutSlotConfigurationsNestedInput
  }

  export type SlotConfigurationUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotConfigurationUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    availableDays?: SlotConfigurationUpdateavailableDaysInput | number[]
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDurationMinutes?: IntFieldUpdateOperationsInput | number
    slotsPerInterval?: IntFieldUpdateOperationsInput | number
    bufferTimeMinutes?: IntFieldUpdateOperationsInput | number
    advanceBookingDays?: IntFieldUpdateOperationsInput | number
    sameDayBookingCutoffHours?: IntFieldUpdateOperationsInput | number
    minAdvanceBookingHours?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutBookingsNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    bookingReference?: StringFieldUpdateOperationsInput | string
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentTime?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    bookingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWaitlistNestedInput
    appointmentType?: AppointmentTypeUpdateOneRequiredWithoutWaitlistNestedInput
    emailNotifications?: EmailNotificationUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotifications?: EmailNotificationUncheckedUpdateManyWithoutWaitlistNestedInput
  }

  export type WaitlistUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: StringFieldUpdateOperationsInput | string
    preferredDateStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preferredDateEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumWaitlistStatusFieldUpdateOperationsInput | $Enums.WaitlistStatus
    position?: NullableIntFieldUpdateOperationsInput | number | null
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notificationCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDateUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentType?: AppointmentTypeUpdateOneWithoutSpecialDatesNestedInput
  }

  export type SpecialDateUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialDateUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dateType?: EnumSpecialDateTypeFieldUpdateOperationsInput | $Enums.SpecialDateType
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    modifiedStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    modifiedEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllLocations?: BoolFieldUpdateOperationsInput | boolean
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentType?: AppointmentTypeUpdateOneWithoutBlockedSlotsNestedInput
    user?: UserUpdateOneWithoutBlockedSlotsNestedInput
  }

  export type BlockedSlotUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedSlotUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    blockedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    blockedStartTime?: StringFieldUpdateOperationsInput | string
    blockedEndTime?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    appliesToAllAppointmentTypes?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationCreateManyBookingInput = {
    id?: string
    userId: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    waitlistId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type EmailNotificationUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailNotificationsNestedInput
    waitlist?: WaitlistUpdateOneWithoutEmailNotificationsNestedInput
  }

  export type EmailNotificationUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waitlistId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    waitlistId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationCreateManyWaitlistInput = {
    id?: string
    userId: string
    emailType: $Enums.EmailType
    recipientEmail: string
    subject: string
    status?: $Enums.EmailStatus
    sentAt?: Date | string | null
    bookingId?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type EmailNotificationUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailNotificationsNestedInput
    booking?: BookingUpdateOneWithoutEmailNotificationsNestedInput
  }

  export type EmailNotificationUncheckedUpdateWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailNotificationUncheckedUpdateManyWithoutWaitlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    emailType?: EnumEmailTypeFieldUpdateOperationsInput | $Enums.EmailType
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    status?: EnumEmailStatusFieldUpdateOperationsInput | $Enums.EmailStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}