
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
 * Model Delegation
 * 
 */
export type Delegation = $Result.DefaultSelection<Prisma.$DelegationPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model ActivityDelegation
 * 
 */
export type ActivityDelegation = $Result.DefaultSelection<Prisma.$ActivityDelegationPayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model HotelRecommend
 * 
 */
export type HotelRecommend = $Result.DefaultSelection<Prisma.$HotelRecommendPayload>
/**
 * Model HotelImage
 * 
 */
export type HotelImage = $Result.DefaultSelection<Prisma.$HotelImagePayload>
/**
 * Model TravelRecommend
 * 
 */
export type TravelRecommend = $Result.DefaultSelection<Prisma.$TravelRecommendPayload>
/**
 * Model TravelImage
 * 
 */
export type TravelImage = $Result.DefaultSelection<Prisma.$TravelImagePayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model SiteVisit
 * 
 */
export type SiteVisit = $Result.DefaultSelection<Prisma.$SiteVisitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  DELEGATION: 'DELEGATION'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Visibility: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]


export const ActivityStatus: {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type ActivityStatus = (typeof ActivityStatus)[keyof typeof ActivityStatus]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]


export const Weekday: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type Weekday = (typeof Weekday)[keyof typeof Weekday]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

export type ActivityStatus = $Enums.ActivityStatus

export const ActivityStatus: typeof $Enums.ActivityStatus

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

export type Weekday = $Enums.Weekday

export const Weekday: typeof $Enums.Weekday

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Delegations
 * const delegations = await prisma.delegation.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Delegations
   * const delegations = await prisma.delegation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.delegation`: Exposes CRUD operations for the **Delegation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Delegations
    * const delegations = await prisma.delegation.findMany()
    * ```
    */
  get delegation(): Prisma.DelegationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityDelegation`: Exposes CRUD operations for the **ActivityDelegation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityDelegations
    * const activityDelegations = await prisma.activityDelegation.findMany()
    * ```
    */
  get activityDelegation(): Prisma.ActivityDelegationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelRecommend`: Exposes CRUD operations for the **HotelRecommend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelRecommends
    * const hotelRecommends = await prisma.hotelRecommend.findMany()
    * ```
    */
  get hotelRecommend(): Prisma.HotelRecommendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelImage`: Exposes CRUD operations for the **HotelImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelImages
    * const hotelImages = await prisma.hotelImage.findMany()
    * ```
    */
  get hotelImage(): Prisma.HotelImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelRecommend`: Exposes CRUD operations for the **TravelRecommend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelRecommends
    * const travelRecommends = await prisma.travelRecommend.findMany()
    * ```
    */
  get travelRecommend(): Prisma.TravelRecommendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travelImage`: Exposes CRUD operations for the **TravelImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TravelImages
    * const travelImages = await prisma.travelImage.findMany()
    * ```
    */
  get travelImage(): Prisma.TravelImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteVisit`: Exposes CRUD operations for the **SiteVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteVisits
    * const siteVisits = await prisma.siteVisit.findMany()
    * ```
    */
  get siteVisit(): Prisma.SiteVisitDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Delegation: 'Delegation',
    Room: 'Room',
    Activity: 'Activity',
    ActivityDelegation: 'ActivityDelegation',
    Gallery: 'Gallery',
    HotelRecommend: 'HotelRecommend',
    HotelImage: 'HotelImage',
    TravelRecommend: 'TravelRecommend',
    TravelImage: 'TravelImage',
    Country: 'Country',
    Organization: 'Organization',
    SiteVisit: 'SiteVisit'
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
      modelProps: "delegation" | "room" | "activity" | "activityDelegation" | "gallery" | "hotelRecommend" | "hotelImage" | "travelRecommend" | "travelImage" | "country" | "organization" | "siteVisit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Delegation: {
        payload: Prisma.$DelegationPayload<ExtArgs>
        fields: Prisma.DelegationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DelegationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DelegationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>
          }
          findFirst: {
            args: Prisma.DelegationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DelegationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>
          }
          findMany: {
            args: Prisma.DelegationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>[]
          }
          create: {
            args: Prisma.DelegationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>
          }
          createMany: {
            args: Prisma.DelegationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DelegationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>[]
          }
          delete: {
            args: Prisma.DelegationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>
          }
          update: {
            args: Prisma.DelegationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>
          }
          deleteMany: {
            args: Prisma.DelegationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DelegationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DelegationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>[]
          }
          upsert: {
            args: Prisma.DelegationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegationPayload>
          }
          aggregate: {
            args: Prisma.DelegationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelegation>
          }
          groupBy: {
            args: Prisma.DelegationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DelegationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DelegationCountArgs<ExtArgs>
            result: $Utils.Optional<DelegationCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      ActivityDelegation: {
        payload: Prisma.$ActivityDelegationPayload<ExtArgs>
        fields: Prisma.ActivityDelegationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityDelegationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityDelegationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>
          }
          findFirst: {
            args: Prisma.ActivityDelegationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityDelegationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>
          }
          findMany: {
            args: Prisma.ActivityDelegationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>[]
          }
          create: {
            args: Prisma.ActivityDelegationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>
          }
          createMany: {
            args: Prisma.ActivityDelegationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityDelegationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>[]
          }
          delete: {
            args: Prisma.ActivityDelegationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>
          }
          update: {
            args: Prisma.ActivityDelegationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDelegationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityDelegationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityDelegationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>[]
          }
          upsert: {
            args: Prisma.ActivityDelegationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityDelegationPayload>
          }
          aggregate: {
            args: Prisma.ActivityDelegationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityDelegation>
          }
          groupBy: {
            args: Prisma.ActivityDelegationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityDelegationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityDelegationCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityDelegationCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      HotelRecommend: {
        payload: Prisma.$HotelRecommendPayload<ExtArgs>
        fields: Prisma.HotelRecommendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelRecommendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelRecommendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>
          }
          findFirst: {
            args: Prisma.HotelRecommendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelRecommendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>
          }
          findMany: {
            args: Prisma.HotelRecommendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>[]
          }
          create: {
            args: Prisma.HotelRecommendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>
          }
          createMany: {
            args: Prisma.HotelRecommendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelRecommendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>[]
          }
          delete: {
            args: Prisma.HotelRecommendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>
          }
          update: {
            args: Prisma.HotelRecommendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>
          }
          deleteMany: {
            args: Prisma.HotelRecommendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelRecommendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelRecommendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>[]
          }
          upsert: {
            args: Prisma.HotelRecommendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelRecommendPayload>
          }
          aggregate: {
            args: Prisma.HotelRecommendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelRecommend>
          }
          groupBy: {
            args: Prisma.HotelRecommendGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelRecommendGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelRecommendCountArgs<ExtArgs>
            result: $Utils.Optional<HotelRecommendCountAggregateOutputType> | number
          }
        }
      }
      HotelImage: {
        payload: Prisma.$HotelImagePayload<ExtArgs>
        fields: Prisma.HotelImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          findFirst: {
            args: Prisma.HotelImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          findMany: {
            args: Prisma.HotelImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          create: {
            args: Prisma.HotelImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          createMany: {
            args: Prisma.HotelImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          delete: {
            args: Prisma.HotelImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          update: {
            args: Prisma.HotelImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          deleteMany: {
            args: Prisma.HotelImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>[]
          }
          upsert: {
            args: Prisma.HotelImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelImagePayload>
          }
          aggregate: {
            args: Prisma.HotelImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelImage>
          }
          groupBy: {
            args: Prisma.HotelImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelImageCountArgs<ExtArgs>
            result: $Utils.Optional<HotelImageCountAggregateOutputType> | number
          }
        }
      }
      TravelRecommend: {
        payload: Prisma.$TravelRecommendPayload<ExtArgs>
        fields: Prisma.TravelRecommendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelRecommendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelRecommendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>
          }
          findFirst: {
            args: Prisma.TravelRecommendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelRecommendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>
          }
          findMany: {
            args: Prisma.TravelRecommendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>[]
          }
          create: {
            args: Prisma.TravelRecommendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>
          }
          createMany: {
            args: Prisma.TravelRecommendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelRecommendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>[]
          }
          delete: {
            args: Prisma.TravelRecommendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>
          }
          update: {
            args: Prisma.TravelRecommendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>
          }
          deleteMany: {
            args: Prisma.TravelRecommendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelRecommendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelRecommendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>[]
          }
          upsert: {
            args: Prisma.TravelRecommendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelRecommendPayload>
          }
          aggregate: {
            args: Prisma.TravelRecommendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelRecommend>
          }
          groupBy: {
            args: Prisma.TravelRecommendGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelRecommendGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelRecommendCountArgs<ExtArgs>
            result: $Utils.Optional<TravelRecommendCountAggregateOutputType> | number
          }
        }
      }
      TravelImage: {
        payload: Prisma.$TravelImagePayload<ExtArgs>
        fields: Prisma.TravelImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          findFirst: {
            args: Prisma.TravelImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          findMany: {
            args: Prisma.TravelImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>[]
          }
          create: {
            args: Prisma.TravelImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          createMany: {
            args: Prisma.TravelImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>[]
          }
          delete: {
            args: Prisma.TravelImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          update: {
            args: Prisma.TravelImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          deleteMany: {
            args: Prisma.TravelImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>[]
          }
          upsert: {
            args: Prisma.TravelImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelImagePayload>
          }
          aggregate: {
            args: Prisma.TravelImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravelImage>
          }
          groupBy: {
            args: Prisma.TravelImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelImageCountArgs<ExtArgs>
            result: $Utils.Optional<TravelImageCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      SiteVisit: {
        payload: Prisma.$SiteVisitPayload<ExtArgs>
        fields: Prisma.SiteVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          findFirst: {
            args: Prisma.SiteVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          findMany: {
            args: Prisma.SiteVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>[]
          }
          create: {
            args: Prisma.SiteVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          createMany: {
            args: Prisma.SiteVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>[]
          }
          delete: {
            args: Prisma.SiteVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          update: {
            args: Prisma.SiteVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          deleteMany: {
            args: Prisma.SiteVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>[]
          }
          upsert: {
            args: Prisma.SiteVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteVisitPayload>
          }
          aggregate: {
            args: Prisma.SiteVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteVisit>
          }
          groupBy: {
            args: Prisma.SiteVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteVisitCountArgs<ExtArgs>
            result: $Utils.Optional<SiteVisitCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    delegation?: DelegationOmit
    room?: RoomOmit
    activity?: ActivityOmit
    activityDelegation?: ActivityDelegationOmit
    gallery?: GalleryOmit
    hotelRecommend?: HotelRecommendOmit
    hotelImage?: HotelImageOmit
    travelRecommend?: TravelRecommendOmit
    travelImage?: TravelImageOmit
    country?: CountryOmit
    organization?: OrganizationOmit
    siteVisit?: SiteVisitOmit
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
   * Count Type DelegationCountOutputType
   */

  export type DelegationCountOutputType = {
    activities: number
  }

  export type DelegationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | DelegationCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * DelegationCountOutputType without action
   */
  export type DelegationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegationCountOutputType
     */
    select?: DelegationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DelegationCountOutputType without action
   */
  export type DelegationCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDelegationWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    activities: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | RoomCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    delegations: number
    galleries: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegations?: boolean | ActivityCountOutputTypeCountDelegationsArgs
    galleries?: boolean | ActivityCountOutputTypeCountGalleriesArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountDelegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDelegationWhereInput
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountGalleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
  }


  /**
   * Count Type HotelRecommendCountOutputType
   */

  export type HotelRecommendCountOutputType = {
    images: number
  }

  export type HotelRecommendCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | HotelRecommendCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * HotelRecommendCountOutputType without action
   */
  export type HotelRecommendCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommendCountOutputType
     */
    select?: HotelRecommendCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotelRecommendCountOutputType without action
   */
  export type HotelRecommendCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelImageWhereInput
  }


  /**
   * Count Type TravelRecommendCountOutputType
   */

  export type TravelRecommendCountOutputType = {
    images: number
  }

  export type TravelRecommendCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | TravelRecommendCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * TravelRecommendCountOutputType without action
   */
  export type TravelRecommendCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommendCountOutputType
     */
    select?: TravelRecommendCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TravelRecommendCountOutputType without action
   */
  export type TravelRecommendCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelImageWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    delegations: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegations?: boolean | CountryCountOutputTypeCountDelegationsArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountDelegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegationWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    delegations: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegations?: boolean | OrganizationCountOutputTypeCountDelegationsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountDelegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Delegation
   */

  export type AggregateDelegation = {
    _count: DelegationCountAggregateOutputType | null
    _min: DelegationMinAggregateOutputType | null
    _max: DelegationMaxAggregateOutputType | null
  }

  export type DelegationMinAggregateOutputType = {
    id: string | null
    title: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    position: string | null
    delegationCode: string | null
    role: $Enums.Role | null
    organizationId: string | null
    countryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DelegationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    position: string | null
    delegationCode: string | null
    role: $Enums.Role | null
    organizationId: string | null
    countryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DelegationCountAggregateOutputType = {
    id: number
    title: number
    firstName: number
    lastName: number
    email: number
    password: number
    phoneNumber: number
    position: number
    delegationCode: number
    role: number
    organizationId: number
    countryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DelegationMinAggregateInputType = {
    id?: true
    title?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    position?: true
    delegationCode?: true
    role?: true
    organizationId?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DelegationMaxAggregateInputType = {
    id?: true
    title?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    position?: true
    delegationCode?: true
    role?: true
    organizationId?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DelegationCountAggregateInputType = {
    id?: true
    title?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phoneNumber?: true
    position?: true
    delegationCode?: true
    role?: true
    organizationId?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DelegationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegation to aggregate.
     */
    where?: DelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegations to fetch.
     */
    orderBy?: DelegationOrderByWithRelationInput | DelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Delegations
    **/
    _count?: true | DelegationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DelegationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DelegationMaxAggregateInputType
  }

  export type GetDelegationAggregateType<T extends DelegationAggregateArgs> = {
        [P in keyof T & keyof AggregateDelegation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelegation[P]>
      : GetScalarType<T[P], AggregateDelegation[P]>
  }




  export type DelegationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegationWhereInput
    orderBy?: DelegationOrderByWithAggregationInput | DelegationOrderByWithAggregationInput[]
    by: DelegationScalarFieldEnum[] | DelegationScalarFieldEnum
    having?: DelegationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DelegationCountAggregateInputType | true
    _min?: DelegationMinAggregateInputType
    _max?: DelegationMaxAggregateInputType
  }

  export type DelegationGroupByOutputType = {
    id: string
    title: string | null
    firstName: string
    lastName: string
    email: string
    password: string | null
    phoneNumber: string | null
    position: string | null
    delegationCode: string | null
    role: $Enums.Role
    organizationId: string | null
    countryId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DelegationCountAggregateOutputType | null
    _min: DelegationMinAggregateOutputType | null
    _max: DelegationMaxAggregateOutputType | null
  }

  type GetDelegationGroupByPayload<T extends DelegationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DelegationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DelegationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DelegationGroupByOutputType[P]>
            : GetScalarType<T[P], DelegationGroupByOutputType[P]>
        }
      >
    >


  export type DelegationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    position?: boolean
    delegationCode?: boolean
    role?: boolean
    organizationId?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Delegation$organizationArgs<ExtArgs>
    country?: boolean | Delegation$countryArgs<ExtArgs>
    activities?: boolean | Delegation$activitiesArgs<ExtArgs>
    _count?: boolean | DelegationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegation"]>

  export type DelegationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    position?: boolean
    delegationCode?: boolean
    role?: boolean
    organizationId?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Delegation$organizationArgs<ExtArgs>
    country?: boolean | Delegation$countryArgs<ExtArgs>
  }, ExtArgs["result"]["delegation"]>

  export type DelegationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    position?: boolean
    delegationCode?: boolean
    role?: boolean
    organizationId?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | Delegation$organizationArgs<ExtArgs>
    country?: boolean | Delegation$countryArgs<ExtArgs>
  }, ExtArgs["result"]["delegation"]>

  export type DelegationSelectScalar = {
    id?: boolean
    title?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    position?: boolean
    delegationCode?: boolean
    role?: boolean
    organizationId?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DelegationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "firstName" | "lastName" | "email" | "password" | "phoneNumber" | "position" | "delegationCode" | "role" | "organizationId" | "countryId" | "createdAt" | "updatedAt", ExtArgs["result"]["delegation"]>
  export type DelegationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Delegation$organizationArgs<ExtArgs>
    country?: boolean | Delegation$countryArgs<ExtArgs>
    activities?: boolean | Delegation$activitiesArgs<ExtArgs>
    _count?: boolean | DelegationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DelegationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Delegation$organizationArgs<ExtArgs>
    country?: boolean | Delegation$countryArgs<ExtArgs>
  }
  export type DelegationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | Delegation$organizationArgs<ExtArgs>
    country?: boolean | Delegation$countryArgs<ExtArgs>
  }

  export type $DelegationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delegation"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      country: Prisma.$CountryPayload<ExtArgs> | null
      activities: Prisma.$ActivityDelegationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      firstName: string
      lastName: string
      email: string
      password: string | null
      phoneNumber: string | null
      position: string | null
      delegationCode: string | null
      role: $Enums.Role
      organizationId: string | null
      countryId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["delegation"]>
    composites: {}
  }

  type DelegationGetPayload<S extends boolean | null | undefined | DelegationDefaultArgs> = $Result.GetResult<Prisma.$DelegationPayload, S>

  type DelegationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DelegationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DelegationCountAggregateInputType | true
    }

  export interface DelegationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delegation'], meta: { name: 'Delegation' } }
    /**
     * Find zero or one Delegation that matches the filter.
     * @param {DelegationFindUniqueArgs} args - Arguments to find a Delegation
     * @example
     * // Get one Delegation
     * const delegation = await prisma.delegation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DelegationFindUniqueArgs>(args: SelectSubset<T, DelegationFindUniqueArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delegation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DelegationFindUniqueOrThrowArgs} args - Arguments to find a Delegation
     * @example
     * // Get one Delegation
     * const delegation = await prisma.delegation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DelegationFindUniqueOrThrowArgs>(args: SelectSubset<T, DelegationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegationFindFirstArgs} args - Arguments to find a Delegation
     * @example
     * // Get one Delegation
     * const delegation = await prisma.delegation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DelegationFindFirstArgs>(args?: SelectSubset<T, DelegationFindFirstArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegationFindFirstOrThrowArgs} args - Arguments to find a Delegation
     * @example
     * // Get one Delegation
     * const delegation = await prisma.delegation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DelegationFindFirstOrThrowArgs>(args?: SelectSubset<T, DelegationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Delegations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Delegations
     * const delegations = await prisma.delegation.findMany()
     * 
     * // Get first 10 Delegations
     * const delegations = await prisma.delegation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const delegationWithIdOnly = await prisma.delegation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DelegationFindManyArgs>(args?: SelectSubset<T, DelegationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delegation.
     * @param {DelegationCreateArgs} args - Arguments to create a Delegation.
     * @example
     * // Create one Delegation
     * const Delegation = await prisma.delegation.create({
     *   data: {
     *     // ... data to create a Delegation
     *   }
     * })
     * 
     */
    create<T extends DelegationCreateArgs>(args: SelectSubset<T, DelegationCreateArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Delegations.
     * @param {DelegationCreateManyArgs} args - Arguments to create many Delegations.
     * @example
     * // Create many Delegations
     * const delegation = await prisma.delegation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DelegationCreateManyArgs>(args?: SelectSubset<T, DelegationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Delegations and returns the data saved in the database.
     * @param {DelegationCreateManyAndReturnArgs} args - Arguments to create many Delegations.
     * @example
     * // Create many Delegations
     * const delegation = await prisma.delegation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Delegations and only return the `id`
     * const delegationWithIdOnly = await prisma.delegation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DelegationCreateManyAndReturnArgs>(args?: SelectSubset<T, DelegationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delegation.
     * @param {DelegationDeleteArgs} args - Arguments to delete one Delegation.
     * @example
     * // Delete one Delegation
     * const Delegation = await prisma.delegation.delete({
     *   where: {
     *     // ... filter to delete one Delegation
     *   }
     * })
     * 
     */
    delete<T extends DelegationDeleteArgs>(args: SelectSubset<T, DelegationDeleteArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delegation.
     * @param {DelegationUpdateArgs} args - Arguments to update one Delegation.
     * @example
     * // Update one Delegation
     * const delegation = await prisma.delegation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DelegationUpdateArgs>(args: SelectSubset<T, DelegationUpdateArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Delegations.
     * @param {DelegationDeleteManyArgs} args - Arguments to filter Delegations to delete.
     * @example
     * // Delete a few Delegations
     * const { count } = await prisma.delegation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DelegationDeleteManyArgs>(args?: SelectSubset<T, DelegationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Delegations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Delegations
     * const delegation = await prisma.delegation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DelegationUpdateManyArgs>(args: SelectSubset<T, DelegationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Delegations and returns the data updated in the database.
     * @param {DelegationUpdateManyAndReturnArgs} args - Arguments to update many Delegations.
     * @example
     * // Update many Delegations
     * const delegation = await prisma.delegation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Delegations and only return the `id`
     * const delegationWithIdOnly = await prisma.delegation.updateManyAndReturn({
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
    updateManyAndReturn<T extends DelegationUpdateManyAndReturnArgs>(args: SelectSubset<T, DelegationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delegation.
     * @param {DelegationUpsertArgs} args - Arguments to update or create a Delegation.
     * @example
     * // Update or create a Delegation
     * const delegation = await prisma.delegation.upsert({
     *   create: {
     *     // ... data to create a Delegation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delegation we want to update
     *   }
     * })
     */
    upsert<T extends DelegationUpsertArgs>(args: SelectSubset<T, DelegationUpsertArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Delegations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegationCountArgs} args - Arguments to filter Delegations to count.
     * @example
     * // Count the number of Delegations
     * const count = await prisma.delegation.count({
     *   where: {
     *     // ... the filter for the Delegations we want to count
     *   }
     * })
    **/
    count<T extends DelegationCountArgs>(
      args?: Subset<T, DelegationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DelegationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delegation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DelegationAggregateArgs>(args: Subset<T, DelegationAggregateArgs>): Prisma.PrismaPromise<GetDelegationAggregateType<T>>

    /**
     * Group by Delegation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegationGroupByArgs} args - Group by arguments.
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
      T extends DelegationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DelegationGroupByArgs['orderBy'] }
        : { orderBy?: DelegationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DelegationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelegationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delegation model
   */
  readonly fields: DelegationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delegation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DelegationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends Delegation$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Delegation$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    country<T extends Delegation$countryArgs<ExtArgs> = {}>(args?: Subset<T, Delegation$countryArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    activities<T extends Delegation$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Delegation$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Delegation model
   */
  interface DelegationFieldRefs {
    readonly id: FieldRef<"Delegation", 'String'>
    readonly title: FieldRef<"Delegation", 'String'>
    readonly firstName: FieldRef<"Delegation", 'String'>
    readonly lastName: FieldRef<"Delegation", 'String'>
    readonly email: FieldRef<"Delegation", 'String'>
    readonly password: FieldRef<"Delegation", 'String'>
    readonly phoneNumber: FieldRef<"Delegation", 'String'>
    readonly position: FieldRef<"Delegation", 'String'>
    readonly delegationCode: FieldRef<"Delegation", 'String'>
    readonly role: FieldRef<"Delegation", 'Role'>
    readonly organizationId: FieldRef<"Delegation", 'String'>
    readonly countryId: FieldRef<"Delegation", 'String'>
    readonly createdAt: FieldRef<"Delegation", 'DateTime'>
    readonly updatedAt: FieldRef<"Delegation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Delegation findUnique
   */
  export type DelegationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * Filter, which Delegation to fetch.
     */
    where: DelegationWhereUniqueInput
  }

  /**
   * Delegation findUniqueOrThrow
   */
  export type DelegationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * Filter, which Delegation to fetch.
     */
    where: DelegationWhereUniqueInput
  }

  /**
   * Delegation findFirst
   */
  export type DelegationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * Filter, which Delegation to fetch.
     */
    where?: DelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegations to fetch.
     */
    orderBy?: DelegationOrderByWithRelationInput | DelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegations.
     */
    cursor?: DelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegations.
     */
    distinct?: DelegationScalarFieldEnum | DelegationScalarFieldEnum[]
  }

  /**
   * Delegation findFirstOrThrow
   */
  export type DelegationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * Filter, which Delegation to fetch.
     */
    where?: DelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegations to fetch.
     */
    orderBy?: DelegationOrderByWithRelationInput | DelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegations.
     */
    cursor?: DelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegations.
     */
    distinct?: DelegationScalarFieldEnum | DelegationScalarFieldEnum[]
  }

  /**
   * Delegation findMany
   */
  export type DelegationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * Filter, which Delegations to fetch.
     */
    where?: DelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegations to fetch.
     */
    orderBy?: DelegationOrderByWithRelationInput | DelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Delegations.
     */
    cursor?: DelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegations.
     */
    distinct?: DelegationScalarFieldEnum | DelegationScalarFieldEnum[]
  }

  /**
   * Delegation create
   */
  export type DelegationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * The data needed to create a Delegation.
     */
    data: XOR<DelegationCreateInput, DelegationUncheckedCreateInput>
  }

  /**
   * Delegation createMany
   */
  export type DelegationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Delegations.
     */
    data: DelegationCreateManyInput | DelegationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delegation createManyAndReturn
   */
  export type DelegationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * The data used to create many Delegations.
     */
    data: DelegationCreateManyInput | DelegationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delegation update
   */
  export type DelegationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * The data needed to update a Delegation.
     */
    data: XOR<DelegationUpdateInput, DelegationUncheckedUpdateInput>
    /**
     * Choose, which Delegation to update.
     */
    where: DelegationWhereUniqueInput
  }

  /**
   * Delegation updateMany
   */
  export type DelegationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Delegations.
     */
    data: XOR<DelegationUpdateManyMutationInput, DelegationUncheckedUpdateManyInput>
    /**
     * Filter which Delegations to update
     */
    where?: DelegationWhereInput
    /**
     * Limit how many Delegations to update.
     */
    limit?: number
  }

  /**
   * Delegation updateManyAndReturn
   */
  export type DelegationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * The data used to update Delegations.
     */
    data: XOR<DelegationUpdateManyMutationInput, DelegationUncheckedUpdateManyInput>
    /**
     * Filter which Delegations to update
     */
    where?: DelegationWhereInput
    /**
     * Limit how many Delegations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delegation upsert
   */
  export type DelegationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * The filter to search for the Delegation to update in case it exists.
     */
    where: DelegationWhereUniqueInput
    /**
     * In case the Delegation found by the `where` argument doesn't exist, create a new Delegation with this data.
     */
    create: XOR<DelegationCreateInput, DelegationUncheckedCreateInput>
    /**
     * In case the Delegation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DelegationUpdateInput, DelegationUncheckedUpdateInput>
  }

  /**
   * Delegation delete
   */
  export type DelegationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    /**
     * Filter which Delegation to delete.
     */
    where: DelegationWhereUniqueInput
  }

  /**
   * Delegation deleteMany
   */
  export type DelegationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegations to delete
     */
    where?: DelegationWhereInput
    /**
     * Limit how many Delegations to delete.
     */
    limit?: number
  }

  /**
   * Delegation.organization
   */
  export type Delegation$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Delegation.country
   */
  export type Delegation$countryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    where?: CountryWhereInput
  }

  /**
   * Delegation.activities
   */
  export type Delegation$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    where?: ActivityDelegationWhereInput
    orderBy?: ActivityDelegationOrderByWithRelationInput | ActivityDelegationOrderByWithRelationInput[]
    cursor?: ActivityDelegationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDelegationScalarFieldEnum | ActivityDelegationScalarFieldEnum[]
  }

  /**
   * Delegation without action
   */
  export type DelegationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    capacity: number | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    location: number
    capacity: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    capacity?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    location: string | null
    capacity: number
    description: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    activities?: boolean | Room$activitiesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    capacity?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "capacity" | "description" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | Room$activitiesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      activities: Prisma.$ActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string | null
      capacity: number
      description: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activities<T extends Room$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Room$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly location: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly description: FieldRef<"Room", 'String'>
    readonly imageUrl: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.activities
   */
  export type Room$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    qrCode: string | null
    docURL: string | null
    allImageURL: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.ActivityStatus | null
    registrationDeadline: Date | null
    roomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    qrCode: string | null
    docURL: string | null
    allImageURL: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.ActivityStatus | null
    registrationDeadline: Date | null
    roomId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    qrCode: number
    docURL: number
    allImageURL: number
    date: number
    startTime: number
    endTime: number
    status: number
    registrationDeadline: number
    roomId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    qrCode?: true
    docURL?: true
    allImageURL?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    registrationDeadline?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    qrCode?: true
    docURL?: true
    allImageURL?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    registrationDeadline?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    qrCode?: true
    docURL?: true
    allImageURL?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    registrationDeadline?: true
    roomId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    name: string
    description: string | null
    qrCode: string | null
    docURL: string | null
    allImageURL: string | null
    date: Date
    startTime: Date
    endTime: Date
    status: $Enums.ActivityStatus
    registrationDeadline: Date | null
    roomId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    qrCode?: boolean
    docURL?: boolean
    allImageURL?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    registrationDeadline?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | Activity$roomArgs<ExtArgs>
    delegations?: boolean | Activity$delegationsArgs<ExtArgs>
    galleries?: boolean | Activity$galleriesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    qrCode?: boolean
    docURL?: boolean
    allImageURL?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    registrationDeadline?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | Activity$roomArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    qrCode?: boolean
    docURL?: boolean
    allImageURL?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    registrationDeadline?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | Activity$roomArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    qrCode?: boolean
    docURL?: boolean
    allImageURL?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    registrationDeadline?: boolean
    roomId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "qrCode" | "docURL" | "allImageURL" | "date" | "startTime" | "endTime" | "status" | "registrationDeadline" | "roomId" | "createdAt" | "updatedAt", ExtArgs["result"]["activity"]>
  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | Activity$roomArgs<ExtArgs>
    delegations?: boolean | Activity$delegationsArgs<ExtArgs>
    galleries?: boolean | Activity$galleriesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | Activity$roomArgs<ExtArgs>
  }
  export type ActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | Activity$roomArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs> | null
      delegations: Prisma.$ActivityDelegationPayload<ExtArgs>[]
      galleries: Prisma.$GalleryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      qrCode: string | null
      docURL: string | null
      allImageURL: string | null
      date: Date
      startTime: Date
      endTime: Date
      status: $Enums.ActivityStatus
      registrationDeadline: Date | null
      roomId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {ActivityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
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
    updateManyAndReturn<T extends ActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
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
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends Activity$roomArgs<ExtArgs> = {}>(args?: Subset<T, Activity$roomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    delegations<T extends Activity$delegationsArgs<ExtArgs> = {}>(args?: Subset<T, Activity$delegationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galleries<T extends Activity$galleriesArgs<ExtArgs> = {}>(args?: Subset<T, Activity$galleriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Activity model
   */
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly name: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly qrCode: FieldRef<"Activity", 'String'>
    readonly docURL: FieldRef<"Activity", 'String'>
    readonly allImageURL: FieldRef<"Activity", 'String'>
    readonly date: FieldRef<"Activity", 'DateTime'>
    readonly startTime: FieldRef<"Activity", 'DateTime'>
    readonly endTime: FieldRef<"Activity", 'DateTime'>
    readonly status: FieldRef<"Activity", 'ActivityStatus'>
    readonly registrationDeadline: FieldRef<"Activity", 'DateTime'>
    readonly roomId: FieldRef<"Activity", 'String'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
    readonly updatedAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
  }

  /**
   * Activity updateManyAndReturn
   */
  export type ActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
    /**
     * Limit how many Activities to delete.
     */
    limit?: number
  }

  /**
   * Activity.room
   */
  export type Activity$roomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * Activity.delegations
   */
  export type Activity$delegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    where?: ActivityDelegationWhereInput
    orderBy?: ActivityDelegationOrderByWithRelationInput | ActivityDelegationOrderByWithRelationInput[]
    cursor?: ActivityDelegationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityDelegationScalarFieldEnum | ActivityDelegationScalarFieldEnum[]
  }

  /**
   * Activity.galleries
   */
  export type Activity$galleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    cursor?: GalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activity
     */
    omit?: ActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model ActivityDelegation
   */

  export type AggregateActivityDelegation = {
    _count: ActivityDelegationCountAggregateOutputType | null
    _min: ActivityDelegationMinAggregateOutputType | null
    _max: ActivityDelegationMaxAggregateOutputType | null
  }

  export type ActivityDelegationMinAggregateOutputType = {
    activityId: string | null
    delegationId: string | null
    registeredAt: Date | null
  }

  export type ActivityDelegationMaxAggregateOutputType = {
    activityId: string | null
    delegationId: string | null
    registeredAt: Date | null
  }

  export type ActivityDelegationCountAggregateOutputType = {
    activityId: number
    delegationId: number
    registeredAt: number
    _all: number
  }


  export type ActivityDelegationMinAggregateInputType = {
    activityId?: true
    delegationId?: true
    registeredAt?: true
  }

  export type ActivityDelegationMaxAggregateInputType = {
    activityId?: true
    delegationId?: true
    registeredAt?: true
  }

  export type ActivityDelegationCountAggregateInputType = {
    activityId?: true
    delegationId?: true
    registeredAt?: true
    _all?: true
  }

  export type ActivityDelegationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityDelegation to aggregate.
     */
    where?: ActivityDelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDelegations to fetch.
     */
    orderBy?: ActivityDelegationOrderByWithRelationInput | ActivityDelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityDelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDelegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDelegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityDelegations
    **/
    _count?: true | ActivityDelegationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityDelegationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityDelegationMaxAggregateInputType
  }

  export type GetActivityDelegationAggregateType<T extends ActivityDelegationAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityDelegation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityDelegation[P]>
      : GetScalarType<T[P], AggregateActivityDelegation[P]>
  }




  export type ActivityDelegationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityDelegationWhereInput
    orderBy?: ActivityDelegationOrderByWithAggregationInput | ActivityDelegationOrderByWithAggregationInput[]
    by: ActivityDelegationScalarFieldEnum[] | ActivityDelegationScalarFieldEnum
    having?: ActivityDelegationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityDelegationCountAggregateInputType | true
    _min?: ActivityDelegationMinAggregateInputType
    _max?: ActivityDelegationMaxAggregateInputType
  }

  export type ActivityDelegationGroupByOutputType = {
    activityId: string
    delegationId: string
    registeredAt: Date
    _count: ActivityDelegationCountAggregateOutputType | null
    _min: ActivityDelegationMinAggregateOutputType | null
    _max: ActivityDelegationMaxAggregateOutputType | null
  }

  type GetActivityDelegationGroupByPayload<T extends ActivityDelegationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityDelegationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityDelegationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityDelegationGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityDelegationGroupByOutputType[P]>
        }
      >
    >


  export type ActivityDelegationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activityId?: boolean
    delegationId?: boolean
    registeredAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    delegation?: boolean | DelegationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDelegation"]>

  export type ActivityDelegationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activityId?: boolean
    delegationId?: boolean
    registeredAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    delegation?: boolean | DelegationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDelegation"]>

  export type ActivityDelegationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activityId?: boolean
    delegationId?: boolean
    registeredAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    delegation?: boolean | DelegationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityDelegation"]>

  export type ActivityDelegationSelectScalar = {
    activityId?: boolean
    delegationId?: boolean
    registeredAt?: boolean
  }

  export type ActivityDelegationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"activityId" | "delegationId" | "registeredAt", ExtArgs["result"]["activityDelegation"]>
  export type ActivityDelegationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    delegation?: boolean | DelegationDefaultArgs<ExtArgs>
  }
  export type ActivityDelegationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    delegation?: boolean | DelegationDefaultArgs<ExtArgs>
  }
  export type ActivityDelegationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
    delegation?: boolean | DelegationDefaultArgs<ExtArgs>
  }

  export type $ActivityDelegationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityDelegation"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
      delegation: Prisma.$DelegationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      activityId: string
      delegationId: string
      registeredAt: Date
    }, ExtArgs["result"]["activityDelegation"]>
    composites: {}
  }

  type ActivityDelegationGetPayload<S extends boolean | null | undefined | ActivityDelegationDefaultArgs> = $Result.GetResult<Prisma.$ActivityDelegationPayload, S>

  type ActivityDelegationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityDelegationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityDelegationCountAggregateInputType | true
    }

  export interface ActivityDelegationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityDelegation'], meta: { name: 'ActivityDelegation' } }
    /**
     * Find zero or one ActivityDelegation that matches the filter.
     * @param {ActivityDelegationFindUniqueArgs} args - Arguments to find a ActivityDelegation
     * @example
     * // Get one ActivityDelegation
     * const activityDelegation = await prisma.activityDelegation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityDelegationFindUniqueArgs>(args: SelectSubset<T, ActivityDelegationFindUniqueArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityDelegation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityDelegationFindUniqueOrThrowArgs} args - Arguments to find a ActivityDelegation
     * @example
     * // Get one ActivityDelegation
     * const activityDelegation = await prisma.activityDelegation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityDelegationFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityDelegationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityDelegation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDelegationFindFirstArgs} args - Arguments to find a ActivityDelegation
     * @example
     * // Get one ActivityDelegation
     * const activityDelegation = await prisma.activityDelegation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityDelegationFindFirstArgs>(args?: SelectSubset<T, ActivityDelegationFindFirstArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityDelegation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDelegationFindFirstOrThrowArgs} args - Arguments to find a ActivityDelegation
     * @example
     * // Get one ActivityDelegation
     * const activityDelegation = await prisma.activityDelegation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityDelegationFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityDelegationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityDelegations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDelegationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityDelegations
     * const activityDelegations = await prisma.activityDelegation.findMany()
     * 
     * // Get first 10 ActivityDelegations
     * const activityDelegations = await prisma.activityDelegation.findMany({ take: 10 })
     * 
     * // Only select the `activityId`
     * const activityDelegationWithActivityIdOnly = await prisma.activityDelegation.findMany({ select: { activityId: true } })
     * 
     */
    findMany<T extends ActivityDelegationFindManyArgs>(args?: SelectSubset<T, ActivityDelegationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityDelegation.
     * @param {ActivityDelegationCreateArgs} args - Arguments to create a ActivityDelegation.
     * @example
     * // Create one ActivityDelegation
     * const ActivityDelegation = await prisma.activityDelegation.create({
     *   data: {
     *     // ... data to create a ActivityDelegation
     *   }
     * })
     * 
     */
    create<T extends ActivityDelegationCreateArgs>(args: SelectSubset<T, ActivityDelegationCreateArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityDelegations.
     * @param {ActivityDelegationCreateManyArgs} args - Arguments to create many ActivityDelegations.
     * @example
     * // Create many ActivityDelegations
     * const activityDelegation = await prisma.activityDelegation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityDelegationCreateManyArgs>(args?: SelectSubset<T, ActivityDelegationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityDelegations and returns the data saved in the database.
     * @param {ActivityDelegationCreateManyAndReturnArgs} args - Arguments to create many ActivityDelegations.
     * @example
     * // Create many ActivityDelegations
     * const activityDelegation = await prisma.activityDelegation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityDelegations and only return the `activityId`
     * const activityDelegationWithActivityIdOnly = await prisma.activityDelegation.createManyAndReturn({
     *   select: { activityId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityDelegationCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityDelegationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityDelegation.
     * @param {ActivityDelegationDeleteArgs} args - Arguments to delete one ActivityDelegation.
     * @example
     * // Delete one ActivityDelegation
     * const ActivityDelegation = await prisma.activityDelegation.delete({
     *   where: {
     *     // ... filter to delete one ActivityDelegation
     *   }
     * })
     * 
     */
    delete<T extends ActivityDelegationDeleteArgs>(args: SelectSubset<T, ActivityDelegationDeleteArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityDelegation.
     * @param {ActivityDelegationUpdateArgs} args - Arguments to update one ActivityDelegation.
     * @example
     * // Update one ActivityDelegation
     * const activityDelegation = await prisma.activityDelegation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityDelegationUpdateArgs>(args: SelectSubset<T, ActivityDelegationUpdateArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityDelegations.
     * @param {ActivityDelegationDeleteManyArgs} args - Arguments to filter ActivityDelegations to delete.
     * @example
     * // Delete a few ActivityDelegations
     * const { count } = await prisma.activityDelegation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDelegationDeleteManyArgs>(args?: SelectSubset<T, ActivityDelegationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityDelegations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDelegationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityDelegations
     * const activityDelegation = await prisma.activityDelegation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityDelegationUpdateManyArgs>(args: SelectSubset<T, ActivityDelegationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityDelegations and returns the data updated in the database.
     * @param {ActivityDelegationUpdateManyAndReturnArgs} args - Arguments to update many ActivityDelegations.
     * @example
     * // Update many ActivityDelegations
     * const activityDelegation = await prisma.activityDelegation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityDelegations and only return the `activityId`
     * const activityDelegationWithActivityIdOnly = await prisma.activityDelegation.updateManyAndReturn({
     *   select: { activityId: true },
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
    updateManyAndReturn<T extends ActivityDelegationUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityDelegationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityDelegation.
     * @param {ActivityDelegationUpsertArgs} args - Arguments to update or create a ActivityDelegation.
     * @example
     * // Update or create a ActivityDelegation
     * const activityDelegation = await prisma.activityDelegation.upsert({
     *   create: {
     *     // ... data to create a ActivityDelegation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityDelegation we want to update
     *   }
     * })
     */
    upsert<T extends ActivityDelegationUpsertArgs>(args: SelectSubset<T, ActivityDelegationUpsertArgs<ExtArgs>>): Prisma__ActivityDelegationClient<$Result.GetResult<Prisma.$ActivityDelegationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityDelegations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDelegationCountArgs} args - Arguments to filter ActivityDelegations to count.
     * @example
     * // Count the number of ActivityDelegations
     * const count = await prisma.activityDelegation.count({
     *   where: {
     *     // ... the filter for the ActivityDelegations we want to count
     *   }
     * })
    **/
    count<T extends ActivityDelegationCountArgs>(
      args?: Subset<T, ActivityDelegationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityDelegationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityDelegation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDelegationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityDelegationAggregateArgs>(args: Subset<T, ActivityDelegationAggregateArgs>): Prisma.PrismaPromise<GetActivityDelegationAggregateType<T>>

    /**
     * Group by ActivityDelegation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityDelegationGroupByArgs} args - Group by arguments.
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
      T extends ActivityDelegationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityDelegationGroupByArgs['orderBy'] }
        : { orderBy?: ActivityDelegationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityDelegationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityDelegationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityDelegation model
   */
  readonly fields: ActivityDelegationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityDelegation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityDelegationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    delegation<T extends DelegationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DelegationDefaultArgs<ExtArgs>>): Prisma__DelegationClient<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityDelegation model
   */
  interface ActivityDelegationFieldRefs {
    readonly activityId: FieldRef<"ActivityDelegation", 'String'>
    readonly delegationId: FieldRef<"ActivityDelegation", 'String'>
    readonly registeredAt: FieldRef<"ActivityDelegation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityDelegation findUnique
   */
  export type ActivityDelegationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDelegation to fetch.
     */
    where: ActivityDelegationWhereUniqueInput
  }

  /**
   * ActivityDelegation findUniqueOrThrow
   */
  export type ActivityDelegationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDelegation to fetch.
     */
    where: ActivityDelegationWhereUniqueInput
  }

  /**
   * ActivityDelegation findFirst
   */
  export type ActivityDelegationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDelegation to fetch.
     */
    where?: ActivityDelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDelegations to fetch.
     */
    orderBy?: ActivityDelegationOrderByWithRelationInput | ActivityDelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityDelegations.
     */
    cursor?: ActivityDelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDelegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDelegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityDelegations.
     */
    distinct?: ActivityDelegationScalarFieldEnum | ActivityDelegationScalarFieldEnum[]
  }

  /**
   * ActivityDelegation findFirstOrThrow
   */
  export type ActivityDelegationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDelegation to fetch.
     */
    where?: ActivityDelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDelegations to fetch.
     */
    orderBy?: ActivityDelegationOrderByWithRelationInput | ActivityDelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityDelegations.
     */
    cursor?: ActivityDelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDelegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDelegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityDelegations.
     */
    distinct?: ActivityDelegationScalarFieldEnum | ActivityDelegationScalarFieldEnum[]
  }

  /**
   * ActivityDelegation findMany
   */
  export type ActivityDelegationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * Filter, which ActivityDelegations to fetch.
     */
    where?: ActivityDelegationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityDelegations to fetch.
     */
    orderBy?: ActivityDelegationOrderByWithRelationInput | ActivityDelegationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityDelegations.
     */
    cursor?: ActivityDelegationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityDelegations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityDelegations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityDelegations.
     */
    distinct?: ActivityDelegationScalarFieldEnum | ActivityDelegationScalarFieldEnum[]
  }

  /**
   * ActivityDelegation create
   */
  export type ActivityDelegationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityDelegation.
     */
    data: XOR<ActivityDelegationCreateInput, ActivityDelegationUncheckedCreateInput>
  }

  /**
   * ActivityDelegation createMany
   */
  export type ActivityDelegationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityDelegations.
     */
    data: ActivityDelegationCreateManyInput | ActivityDelegationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityDelegation createManyAndReturn
   */
  export type ActivityDelegationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityDelegations.
     */
    data: ActivityDelegationCreateManyInput | ActivityDelegationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityDelegation update
   */
  export type ActivityDelegationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityDelegation.
     */
    data: XOR<ActivityDelegationUpdateInput, ActivityDelegationUncheckedUpdateInput>
    /**
     * Choose, which ActivityDelegation to update.
     */
    where: ActivityDelegationWhereUniqueInput
  }

  /**
   * ActivityDelegation updateMany
   */
  export type ActivityDelegationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityDelegations.
     */
    data: XOR<ActivityDelegationUpdateManyMutationInput, ActivityDelegationUncheckedUpdateManyInput>
    /**
     * Filter which ActivityDelegations to update
     */
    where?: ActivityDelegationWhereInput
    /**
     * Limit how many ActivityDelegations to update.
     */
    limit?: number
  }

  /**
   * ActivityDelegation updateManyAndReturn
   */
  export type ActivityDelegationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * The data used to update ActivityDelegations.
     */
    data: XOR<ActivityDelegationUpdateManyMutationInput, ActivityDelegationUncheckedUpdateManyInput>
    /**
     * Filter which ActivityDelegations to update
     */
    where?: ActivityDelegationWhereInput
    /**
     * Limit how many ActivityDelegations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityDelegation upsert
   */
  export type ActivityDelegationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityDelegation to update in case it exists.
     */
    where: ActivityDelegationWhereUniqueInput
    /**
     * In case the ActivityDelegation found by the `where` argument doesn't exist, create a new ActivityDelegation with this data.
     */
    create: XOR<ActivityDelegationCreateInput, ActivityDelegationUncheckedCreateInput>
    /**
     * In case the ActivityDelegation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityDelegationUpdateInput, ActivityDelegationUncheckedUpdateInput>
  }

  /**
   * ActivityDelegation delete
   */
  export type ActivityDelegationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
    /**
     * Filter which ActivityDelegation to delete.
     */
    where: ActivityDelegationWhereUniqueInput
  }

  /**
   * ActivityDelegation deleteMany
   */
  export type ActivityDelegationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityDelegations to delete
     */
    where?: ActivityDelegationWhereInput
    /**
     * Limit how many ActivityDelegations to delete.
     */
    limit?: number
  }

  /**
   * ActivityDelegation without action
   */
  export type ActivityDelegationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityDelegation
     */
    select?: ActivityDelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityDelegation
     */
    omit?: ActivityDelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityDelegationInclude<ExtArgs> | null
  }


  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryMinAggregateOutputType = {
    id: string | null
    title: string | null
    mediaUrl: string | null
    mediaType: $Enums.MediaType | null
    visibility: $Enums.Visibility | null
    description: string | null
    activityId: string | null
    createdAt: Date | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    mediaUrl: string | null
    mediaType: $Enums.MediaType | null
    visibility: $Enums.Visibility | null
    description: string | null
    activityId: string | null
    createdAt: Date | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    title: number
    mediaUrl: number
    mediaType: number
    visibility: number
    description: number
    activityId: number
    createdAt: number
    _all: number
  }


  export type GalleryMinAggregateInputType = {
    id?: true
    title?: true
    mediaUrl?: true
    mediaType?: true
    visibility?: true
    description?: true
    activityId?: true
    createdAt?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    title?: true
    mediaUrl?: true
    mediaType?: true
    visibility?: true
    description?: true
    activityId?: true
    createdAt?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    title?: true
    mediaUrl?: true
    mediaType?: true
    visibility?: true
    description?: true
    activityId?: true
    createdAt?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    id: string
    title: string | null
    mediaUrl: string
    mediaType: $Enums.MediaType
    visibility: $Enums.Visibility
    description: string | null
    activityId: string
    createdAt: Date
    _count: GalleryCountAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    visibility?: boolean
    description?: boolean
    activityId?: boolean
    createdAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    visibility?: boolean
    description?: boolean
    activityId?: boolean
    createdAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    visibility?: boolean
    description?: boolean
    activityId?: boolean
    createdAt?: boolean
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>

  export type GallerySelectScalar = {
    id?: boolean
    title?: boolean
    mediaUrl?: boolean
    mediaType?: boolean
    visibility?: boolean
    description?: boolean
    activityId?: boolean
    createdAt?: boolean
  }

  export type GalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "mediaUrl" | "mediaType" | "visibility" | "description" | "activityId" | "createdAt", ExtArgs["result"]["gallery"]>
  export type GalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type GalleryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }
  export type GalleryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityDefaultArgs<ExtArgs>
  }

  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {
      activity: Prisma.$ActivityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      mediaUrl: string
      mediaType: $Enums.MediaType
      visibility: $Enums.Visibility
      description: string | null
      activityId: string
      createdAt: Date
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }

  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryFindUniqueArgs>(args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryFindFirstArgs>(args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryFindManyArgs>(args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
     */
    create<T extends GalleryCreateArgs>(args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galleries.
     * @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryCreateManyArgs>(args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galleries and returns the data saved in the database.
     * @param {GalleryCreateManyAndReturnArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
     */
    delete<T extends GalleryDeleteArgs>(args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryUpdateArgs>(args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryDeleteManyArgs>(args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryUpdateManyArgs>(args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries and returns the data updated in the database.
     * @param {GalleryUpdateManyAndReturnArgs} args - Arguments to update many Galleries.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends GalleryUpsertArgs>(args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
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
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends ActivityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityDefaultArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Gallery model
   */
  interface GalleryFieldRefs {
    readonly id: FieldRef<"Gallery", 'String'>
    readonly title: FieldRef<"Gallery", 'String'>
    readonly mediaUrl: FieldRef<"Gallery", 'String'>
    readonly mediaType: FieldRef<"Gallery", 'MediaType'>
    readonly visibility: FieldRef<"Gallery", 'Visibility'>
    readonly description: FieldRef<"Gallery", 'String'>
    readonly activityId: FieldRef<"Gallery", 'String'>
    readonly createdAt: FieldRef<"Gallery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }

  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery createManyAndReturn
   */
  export type GalleryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery updateManyAndReturn
   */
  export type GalleryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }

  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to delete.
     */
    limit?: number
  }

  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
  }


  /**
   * Model HotelRecommend
   */

  export type AggregateHotelRecommend = {
    _count: HotelRecommendCountAggregateOutputType | null
    _avg: HotelRecommendAvgAggregateOutputType | null
    _sum: HotelRecommendSumAggregateOutputType | null
    _min: HotelRecommendMinAggregateOutputType | null
    _max: HotelRecommendMaxAggregateOutputType | null
  }

  export type HotelRecommendAvgAggregateOutputType = {
    starRating: number | null
  }

  export type HotelRecommendSumAggregateOutputType = {
    starRating: number | null
  }

  export type HotelRecommendMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    address: string | null
    starRating: number | null
    contactInfo: string | null
    coverImage: string | null
    websiteUrl: string | null
    mapUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelRecommendMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    address: string | null
    starRating: number | null
    contactInfo: string | null
    coverImage: string | null
    websiteUrl: string | null
    mapUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelRecommendCountAggregateOutputType = {
    id: number
    name: number
    description: number
    address: number
    starRating: number
    contactInfo: number
    coverImage: number
    websiteUrl: number
    mapUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelRecommendAvgAggregateInputType = {
    starRating?: true
  }

  export type HotelRecommendSumAggregateInputType = {
    starRating?: true
  }

  export type HotelRecommendMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    starRating?: true
    contactInfo?: true
    coverImage?: true
    websiteUrl?: true
    mapUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelRecommendMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    starRating?: true
    contactInfo?: true
    coverImage?: true
    websiteUrl?: true
    mapUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelRecommendCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    starRating?: true
    contactInfo?: true
    coverImage?: true
    websiteUrl?: true
    mapUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelRecommendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelRecommend to aggregate.
     */
    where?: HotelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelRecommends to fetch.
     */
    orderBy?: HotelRecommendOrderByWithRelationInput | HotelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelRecommends
    **/
    _count?: true | HotelRecommendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelRecommendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelRecommendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelRecommendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelRecommendMaxAggregateInputType
  }

  export type GetHotelRecommendAggregateType<T extends HotelRecommendAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelRecommend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelRecommend[P]>
      : GetScalarType<T[P], AggregateHotelRecommend[P]>
  }




  export type HotelRecommendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelRecommendWhereInput
    orderBy?: HotelRecommendOrderByWithAggregationInput | HotelRecommendOrderByWithAggregationInput[]
    by: HotelRecommendScalarFieldEnum[] | HotelRecommendScalarFieldEnum
    having?: HotelRecommendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelRecommendCountAggregateInputType | true
    _avg?: HotelRecommendAvgAggregateInputType
    _sum?: HotelRecommendSumAggregateInputType
    _min?: HotelRecommendMinAggregateInputType
    _max?: HotelRecommendMaxAggregateInputType
  }

  export type HotelRecommendGroupByOutputType = {
    id: string
    name: string
    description: string | null
    address: string
    starRating: number | null
    contactInfo: string | null
    coverImage: string | null
    websiteUrl: string | null
    mapUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: HotelRecommendCountAggregateOutputType | null
    _avg: HotelRecommendAvgAggregateOutputType | null
    _sum: HotelRecommendSumAggregateOutputType | null
    _min: HotelRecommendMinAggregateOutputType | null
    _max: HotelRecommendMaxAggregateOutputType | null
  }

  type GetHotelRecommendGroupByPayload<T extends HotelRecommendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelRecommendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelRecommendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelRecommendGroupByOutputType[P]>
            : GetScalarType<T[P], HotelRecommendGroupByOutputType[P]>
        }
      >
    >


  export type HotelRecommendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    starRating?: boolean
    contactInfo?: boolean
    coverImage?: boolean
    websiteUrl?: boolean
    mapUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | HotelRecommend$imagesArgs<ExtArgs>
    _count?: boolean | HotelRecommendCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelRecommend"]>

  export type HotelRecommendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    starRating?: boolean
    contactInfo?: boolean
    coverImage?: boolean
    websiteUrl?: boolean
    mapUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotelRecommend"]>

  export type HotelRecommendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    starRating?: boolean
    contactInfo?: boolean
    coverImage?: boolean
    websiteUrl?: boolean
    mapUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotelRecommend"]>

  export type HotelRecommendSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    starRating?: boolean
    contactInfo?: boolean
    coverImage?: boolean
    websiteUrl?: boolean
    mapUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelRecommendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "address" | "starRating" | "contactInfo" | "coverImage" | "websiteUrl" | "mapUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["hotelRecommend"]>
  export type HotelRecommendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | HotelRecommend$imagesArgs<ExtArgs>
    _count?: boolean | HotelRecommendCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotelRecommendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HotelRecommendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotelRecommendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelRecommend"
    objects: {
      images: Prisma.$HotelImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      address: string
      starRating: number | null
      contactInfo: string | null
      coverImage: string | null
      websiteUrl: string | null
      mapUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotelRecommend"]>
    composites: {}
  }

  type HotelRecommendGetPayload<S extends boolean | null | undefined | HotelRecommendDefaultArgs> = $Result.GetResult<Prisma.$HotelRecommendPayload, S>

  type HotelRecommendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelRecommendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelRecommendCountAggregateInputType | true
    }

  export interface HotelRecommendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelRecommend'], meta: { name: 'HotelRecommend' } }
    /**
     * Find zero or one HotelRecommend that matches the filter.
     * @param {HotelRecommendFindUniqueArgs} args - Arguments to find a HotelRecommend
     * @example
     * // Get one HotelRecommend
     * const hotelRecommend = await prisma.hotelRecommend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelRecommendFindUniqueArgs>(args: SelectSubset<T, HotelRecommendFindUniqueArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelRecommend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelRecommendFindUniqueOrThrowArgs} args - Arguments to find a HotelRecommend
     * @example
     * // Get one HotelRecommend
     * const hotelRecommend = await prisma.hotelRecommend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelRecommendFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelRecommendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelRecommend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelRecommendFindFirstArgs} args - Arguments to find a HotelRecommend
     * @example
     * // Get one HotelRecommend
     * const hotelRecommend = await prisma.hotelRecommend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelRecommendFindFirstArgs>(args?: SelectSubset<T, HotelRecommendFindFirstArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelRecommend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelRecommendFindFirstOrThrowArgs} args - Arguments to find a HotelRecommend
     * @example
     * // Get one HotelRecommend
     * const hotelRecommend = await prisma.hotelRecommend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelRecommendFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelRecommendFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelRecommends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelRecommendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelRecommends
     * const hotelRecommends = await prisma.hotelRecommend.findMany()
     * 
     * // Get first 10 HotelRecommends
     * const hotelRecommends = await prisma.hotelRecommend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelRecommendWithIdOnly = await prisma.hotelRecommend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelRecommendFindManyArgs>(args?: SelectSubset<T, HotelRecommendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelRecommend.
     * @param {HotelRecommendCreateArgs} args - Arguments to create a HotelRecommend.
     * @example
     * // Create one HotelRecommend
     * const HotelRecommend = await prisma.hotelRecommend.create({
     *   data: {
     *     // ... data to create a HotelRecommend
     *   }
     * })
     * 
     */
    create<T extends HotelRecommendCreateArgs>(args: SelectSubset<T, HotelRecommendCreateArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelRecommends.
     * @param {HotelRecommendCreateManyArgs} args - Arguments to create many HotelRecommends.
     * @example
     * // Create many HotelRecommends
     * const hotelRecommend = await prisma.hotelRecommend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelRecommendCreateManyArgs>(args?: SelectSubset<T, HotelRecommendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HotelRecommends and returns the data saved in the database.
     * @param {HotelRecommendCreateManyAndReturnArgs} args - Arguments to create many HotelRecommends.
     * @example
     * // Create many HotelRecommends
     * const hotelRecommend = await prisma.hotelRecommend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HotelRecommends and only return the `id`
     * const hotelRecommendWithIdOnly = await prisma.hotelRecommend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelRecommendCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelRecommendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HotelRecommend.
     * @param {HotelRecommendDeleteArgs} args - Arguments to delete one HotelRecommend.
     * @example
     * // Delete one HotelRecommend
     * const HotelRecommend = await prisma.hotelRecommend.delete({
     *   where: {
     *     // ... filter to delete one HotelRecommend
     *   }
     * })
     * 
     */
    delete<T extends HotelRecommendDeleteArgs>(args: SelectSubset<T, HotelRecommendDeleteArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelRecommend.
     * @param {HotelRecommendUpdateArgs} args - Arguments to update one HotelRecommend.
     * @example
     * // Update one HotelRecommend
     * const hotelRecommend = await prisma.hotelRecommend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelRecommendUpdateArgs>(args: SelectSubset<T, HotelRecommendUpdateArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelRecommends.
     * @param {HotelRecommendDeleteManyArgs} args - Arguments to filter HotelRecommends to delete.
     * @example
     * // Delete a few HotelRecommends
     * const { count } = await prisma.hotelRecommend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelRecommendDeleteManyArgs>(args?: SelectSubset<T, HotelRecommendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelRecommends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelRecommendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelRecommends
     * const hotelRecommend = await prisma.hotelRecommend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelRecommendUpdateManyArgs>(args: SelectSubset<T, HotelRecommendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelRecommends and returns the data updated in the database.
     * @param {HotelRecommendUpdateManyAndReturnArgs} args - Arguments to update many HotelRecommends.
     * @example
     * // Update many HotelRecommends
     * const hotelRecommend = await prisma.hotelRecommend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HotelRecommends and only return the `id`
     * const hotelRecommendWithIdOnly = await prisma.hotelRecommend.updateManyAndReturn({
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
    updateManyAndReturn<T extends HotelRecommendUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelRecommendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HotelRecommend.
     * @param {HotelRecommendUpsertArgs} args - Arguments to update or create a HotelRecommend.
     * @example
     * // Update or create a HotelRecommend
     * const hotelRecommend = await prisma.hotelRecommend.upsert({
     *   create: {
     *     // ... data to create a HotelRecommend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelRecommend we want to update
     *   }
     * })
     */
    upsert<T extends HotelRecommendUpsertArgs>(args: SelectSubset<T, HotelRecommendUpsertArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelRecommends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelRecommendCountArgs} args - Arguments to filter HotelRecommends to count.
     * @example
     * // Count the number of HotelRecommends
     * const count = await prisma.hotelRecommend.count({
     *   where: {
     *     // ... the filter for the HotelRecommends we want to count
     *   }
     * })
    **/
    count<T extends HotelRecommendCountArgs>(
      args?: Subset<T, HotelRecommendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelRecommendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelRecommend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelRecommendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelRecommendAggregateArgs>(args: Subset<T, HotelRecommendAggregateArgs>): Prisma.PrismaPromise<GetHotelRecommendAggregateType<T>>

    /**
     * Group by HotelRecommend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelRecommendGroupByArgs} args - Group by arguments.
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
      T extends HotelRecommendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelRecommendGroupByArgs['orderBy'] }
        : { orderBy?: HotelRecommendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelRecommendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelRecommendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelRecommend model
   */
  readonly fields: HotelRecommendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelRecommend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelRecommendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends HotelRecommend$imagesArgs<ExtArgs> = {}>(args?: Subset<T, HotelRecommend$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HotelRecommend model
   */
  interface HotelRecommendFieldRefs {
    readonly id: FieldRef<"HotelRecommend", 'String'>
    readonly name: FieldRef<"HotelRecommend", 'String'>
    readonly description: FieldRef<"HotelRecommend", 'String'>
    readonly address: FieldRef<"HotelRecommend", 'String'>
    readonly starRating: FieldRef<"HotelRecommend", 'Int'>
    readonly contactInfo: FieldRef<"HotelRecommend", 'String'>
    readonly coverImage: FieldRef<"HotelRecommend", 'String'>
    readonly websiteUrl: FieldRef<"HotelRecommend", 'String'>
    readonly mapUrl: FieldRef<"HotelRecommend", 'String'>
    readonly createdAt: FieldRef<"HotelRecommend", 'DateTime'>
    readonly updatedAt: FieldRef<"HotelRecommend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HotelRecommend findUnique
   */
  export type HotelRecommendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which HotelRecommend to fetch.
     */
    where: HotelRecommendWhereUniqueInput
  }

  /**
   * HotelRecommend findUniqueOrThrow
   */
  export type HotelRecommendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which HotelRecommend to fetch.
     */
    where: HotelRecommendWhereUniqueInput
  }

  /**
   * HotelRecommend findFirst
   */
  export type HotelRecommendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which HotelRecommend to fetch.
     */
    where?: HotelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelRecommends to fetch.
     */
    orderBy?: HotelRecommendOrderByWithRelationInput | HotelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelRecommends.
     */
    cursor?: HotelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelRecommends.
     */
    distinct?: HotelRecommendScalarFieldEnum | HotelRecommendScalarFieldEnum[]
  }

  /**
   * HotelRecommend findFirstOrThrow
   */
  export type HotelRecommendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which HotelRecommend to fetch.
     */
    where?: HotelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelRecommends to fetch.
     */
    orderBy?: HotelRecommendOrderByWithRelationInput | HotelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelRecommends.
     */
    cursor?: HotelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelRecommends.
     */
    distinct?: HotelRecommendScalarFieldEnum | HotelRecommendScalarFieldEnum[]
  }

  /**
   * HotelRecommend findMany
   */
  export type HotelRecommendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which HotelRecommends to fetch.
     */
    where?: HotelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelRecommends to fetch.
     */
    orderBy?: HotelRecommendOrderByWithRelationInput | HotelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelRecommends.
     */
    cursor?: HotelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelRecommends.
     */
    distinct?: HotelRecommendScalarFieldEnum | HotelRecommendScalarFieldEnum[]
  }

  /**
   * HotelRecommend create
   */
  export type HotelRecommendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelRecommend.
     */
    data: XOR<HotelRecommendCreateInput, HotelRecommendUncheckedCreateInput>
  }

  /**
   * HotelRecommend createMany
   */
  export type HotelRecommendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelRecommends.
     */
    data: HotelRecommendCreateManyInput | HotelRecommendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelRecommend createManyAndReturn
   */
  export type HotelRecommendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * The data used to create many HotelRecommends.
     */
    data: HotelRecommendCreateManyInput | HotelRecommendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelRecommend update
   */
  export type HotelRecommendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelRecommend.
     */
    data: XOR<HotelRecommendUpdateInput, HotelRecommendUncheckedUpdateInput>
    /**
     * Choose, which HotelRecommend to update.
     */
    where: HotelRecommendWhereUniqueInput
  }

  /**
   * HotelRecommend updateMany
   */
  export type HotelRecommendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelRecommends.
     */
    data: XOR<HotelRecommendUpdateManyMutationInput, HotelRecommendUncheckedUpdateManyInput>
    /**
     * Filter which HotelRecommends to update
     */
    where?: HotelRecommendWhereInput
    /**
     * Limit how many HotelRecommends to update.
     */
    limit?: number
  }

  /**
   * HotelRecommend updateManyAndReturn
   */
  export type HotelRecommendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * The data used to update HotelRecommends.
     */
    data: XOR<HotelRecommendUpdateManyMutationInput, HotelRecommendUncheckedUpdateManyInput>
    /**
     * Filter which HotelRecommends to update
     */
    where?: HotelRecommendWhereInput
    /**
     * Limit how many HotelRecommends to update.
     */
    limit?: number
  }

  /**
   * HotelRecommend upsert
   */
  export type HotelRecommendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelRecommend to update in case it exists.
     */
    where: HotelRecommendWhereUniqueInput
    /**
     * In case the HotelRecommend found by the `where` argument doesn't exist, create a new HotelRecommend with this data.
     */
    create: XOR<HotelRecommendCreateInput, HotelRecommendUncheckedCreateInput>
    /**
     * In case the HotelRecommend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelRecommendUpdateInput, HotelRecommendUncheckedUpdateInput>
  }

  /**
   * HotelRecommend delete
   */
  export type HotelRecommendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
    /**
     * Filter which HotelRecommend to delete.
     */
    where: HotelRecommendWhereUniqueInput
  }

  /**
   * HotelRecommend deleteMany
   */
  export type HotelRecommendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelRecommends to delete
     */
    where?: HotelRecommendWhereInput
    /**
     * Limit how many HotelRecommends to delete.
     */
    limit?: number
  }

  /**
   * HotelRecommend.images
   */
  export type HotelRecommend$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    where?: HotelImageWhereInput
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    cursor?: HotelImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelRecommend without action
   */
  export type HotelRecommendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelRecommend
     */
    select?: HotelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelRecommend
     */
    omit?: HotelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelRecommendInclude<ExtArgs> | null
  }


  /**
   * Model HotelImage
   */

  export type AggregateHotelImage = {
    _count: HotelImageCountAggregateOutputType | null
    _avg: HotelImageAvgAggregateOutputType | null
    _sum: HotelImageSumAggregateOutputType | null
    _min: HotelImageMinAggregateOutputType | null
    _max: HotelImageMaxAggregateOutputType | null
  }

  export type HotelImageAvgAggregateOutputType = {
    order: number | null
  }

  export type HotelImageSumAggregateOutputType = {
    order: number | null
  }

  export type HotelImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    order: number | null
    hotelId: string | null
    createdAt: Date | null
  }

  export type HotelImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    order: number | null
    hotelId: string | null
    createdAt: Date | null
  }

  export type HotelImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    order: number
    hotelId: number
    createdAt: number
    _all: number
  }


  export type HotelImageAvgAggregateInputType = {
    order?: true
  }

  export type HotelImageSumAggregateInputType = {
    order?: true
  }

  export type HotelImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    hotelId?: true
    createdAt?: true
  }

  export type HotelImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    hotelId?: true
    createdAt?: true
  }

  export type HotelImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    hotelId?: true
    createdAt?: true
    _all?: true
  }

  export type HotelImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImage to aggregate.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelImages
    **/
    _count?: true | HotelImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelImageMaxAggregateInputType
  }

  export type GetHotelImageAggregateType<T extends HotelImageAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelImage[P]>
      : GetScalarType<T[P], AggregateHotelImage[P]>
  }




  export type HotelImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelImageWhereInput
    orderBy?: HotelImageOrderByWithAggregationInput | HotelImageOrderByWithAggregationInput[]
    by: HotelImageScalarFieldEnum[] | HotelImageScalarFieldEnum
    having?: HotelImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelImageCountAggregateInputType | true
    _avg?: HotelImageAvgAggregateInputType
    _sum?: HotelImageSumAggregateInputType
    _min?: HotelImageMinAggregateInputType
    _max?: HotelImageMaxAggregateInputType
  }

  export type HotelImageGroupByOutputType = {
    id: string
    imageUrl: string
    order: number | null
    hotelId: string
    createdAt: Date
    _count: HotelImageCountAggregateOutputType | null
    _avg: HotelImageAvgAggregateOutputType | null
    _sum: HotelImageSumAggregateOutputType | null
    _min: HotelImageMinAggregateOutputType | null
    _max: HotelImageMaxAggregateOutputType | null
  }

  type GetHotelImageGroupByPayload<T extends HotelImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelImageGroupByOutputType[P]>
            : GetScalarType<T[P], HotelImageGroupByOutputType[P]>
        }
      >
    >


  export type HotelImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    hotelId?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelRecommendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    hotelId?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelRecommendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    hotelId?: boolean
    createdAt?: boolean
    hotel?: boolean | HotelRecommendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelImage"]>

  export type HotelImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    hotelId?: boolean
    createdAt?: boolean
  }

  export type HotelImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "order" | "hotelId" | "createdAt", ExtArgs["result"]["hotelImage"]>
  export type HotelImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelRecommendDefaultArgs<ExtArgs>
  }
  export type HotelImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelRecommendDefaultArgs<ExtArgs>
  }
  export type HotelImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotel?: boolean | HotelRecommendDefaultArgs<ExtArgs>
  }

  export type $HotelImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelImage"
    objects: {
      hotel: Prisma.$HotelRecommendPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      order: number | null
      hotelId: string
      createdAt: Date
    }, ExtArgs["result"]["hotelImage"]>
    composites: {}
  }

  type HotelImageGetPayload<S extends boolean | null | undefined | HotelImageDefaultArgs> = $Result.GetResult<Prisma.$HotelImagePayload, S>

  type HotelImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelImageCountAggregateInputType | true
    }

  export interface HotelImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelImage'], meta: { name: 'HotelImage' } }
    /**
     * Find zero or one HotelImage that matches the filter.
     * @param {HotelImageFindUniqueArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelImageFindUniqueArgs>(args: SelectSubset<T, HotelImageFindUniqueArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelImageFindUniqueOrThrowArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelImageFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindFirstArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelImageFindFirstArgs>(args?: SelectSubset<T, HotelImageFindFirstArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindFirstOrThrowArgs} args - Arguments to find a HotelImage
     * @example
     * // Get one HotelImage
     * const hotelImage = await prisma.hotelImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelImageFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelImages
     * const hotelImages = await prisma.hotelImage.findMany()
     * 
     * // Get first 10 HotelImages
     * const hotelImages = await prisma.hotelImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelImageFindManyArgs>(args?: SelectSubset<T, HotelImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelImage.
     * @param {HotelImageCreateArgs} args - Arguments to create a HotelImage.
     * @example
     * // Create one HotelImage
     * const HotelImage = await prisma.hotelImage.create({
     *   data: {
     *     // ... data to create a HotelImage
     *   }
     * })
     * 
     */
    create<T extends HotelImageCreateArgs>(args: SelectSubset<T, HotelImageCreateArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelImages.
     * @param {HotelImageCreateManyArgs} args - Arguments to create many HotelImages.
     * @example
     * // Create many HotelImages
     * const hotelImage = await prisma.hotelImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelImageCreateManyArgs>(args?: SelectSubset<T, HotelImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HotelImages and returns the data saved in the database.
     * @param {HotelImageCreateManyAndReturnArgs} args - Arguments to create many HotelImages.
     * @example
     * // Create many HotelImages
     * const hotelImage = await prisma.hotelImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HotelImages and only return the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelImageCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HotelImage.
     * @param {HotelImageDeleteArgs} args - Arguments to delete one HotelImage.
     * @example
     * // Delete one HotelImage
     * const HotelImage = await prisma.hotelImage.delete({
     *   where: {
     *     // ... filter to delete one HotelImage
     *   }
     * })
     * 
     */
    delete<T extends HotelImageDeleteArgs>(args: SelectSubset<T, HotelImageDeleteArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelImage.
     * @param {HotelImageUpdateArgs} args - Arguments to update one HotelImage.
     * @example
     * // Update one HotelImage
     * const hotelImage = await prisma.hotelImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelImageUpdateArgs>(args: SelectSubset<T, HotelImageUpdateArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelImages.
     * @param {HotelImageDeleteManyArgs} args - Arguments to filter HotelImages to delete.
     * @example
     * // Delete a few HotelImages
     * const { count } = await prisma.hotelImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelImageDeleteManyArgs>(args?: SelectSubset<T, HotelImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelImages
     * const hotelImage = await prisma.hotelImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelImageUpdateManyArgs>(args: SelectSubset<T, HotelImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelImages and returns the data updated in the database.
     * @param {HotelImageUpdateManyAndReturnArgs} args - Arguments to update many HotelImages.
     * @example
     * // Update many HotelImages
     * const hotelImage = await prisma.hotelImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HotelImages and only return the `id`
     * const hotelImageWithIdOnly = await prisma.hotelImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends HotelImageUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HotelImage.
     * @param {HotelImageUpsertArgs} args - Arguments to update or create a HotelImage.
     * @example
     * // Update or create a HotelImage
     * const hotelImage = await prisma.hotelImage.upsert({
     *   create: {
     *     // ... data to create a HotelImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelImage we want to update
     *   }
     * })
     */
    upsert<T extends HotelImageUpsertArgs>(args: SelectSubset<T, HotelImageUpsertArgs<ExtArgs>>): Prisma__HotelImageClient<$Result.GetResult<Prisma.$HotelImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageCountArgs} args - Arguments to filter HotelImages to count.
     * @example
     * // Count the number of HotelImages
     * const count = await prisma.hotelImage.count({
     *   where: {
     *     // ... the filter for the HotelImages we want to count
     *   }
     * })
    **/
    count<T extends HotelImageCountArgs>(
      args?: Subset<T, HotelImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotelImageAggregateArgs>(args: Subset<T, HotelImageAggregateArgs>): Prisma.PrismaPromise<GetHotelImageAggregateType<T>>

    /**
     * Group by HotelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelImageGroupByArgs} args - Group by arguments.
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
      T extends HotelImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelImageGroupByArgs['orderBy'] }
        : { orderBy?: HotelImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotelImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelImage model
   */
  readonly fields: HotelImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotel<T extends HotelRecommendDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HotelRecommendDefaultArgs<ExtArgs>>): Prisma__HotelRecommendClient<$Result.GetResult<Prisma.$HotelRecommendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HotelImage model
   */
  interface HotelImageFieldRefs {
    readonly id: FieldRef<"HotelImage", 'String'>
    readonly imageUrl: FieldRef<"HotelImage", 'String'>
    readonly order: FieldRef<"HotelImage", 'Int'>
    readonly hotelId: FieldRef<"HotelImage", 'String'>
    readonly createdAt: FieldRef<"HotelImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HotelImage findUnique
   */
  export type HotelImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage findUniqueOrThrow
   */
  export type HotelImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage findFirst
   */
  export type HotelImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage findFirstOrThrow
   */
  export type HotelImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImage to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage findMany
   */
  export type HotelImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter, which HotelImages to fetch.
     */
    where?: HotelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelImages to fetch.
     */
    orderBy?: HotelImageOrderByWithRelationInput | HotelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelImages.
     */
    cursor?: HotelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelImages.
     */
    distinct?: HotelImageScalarFieldEnum | HotelImageScalarFieldEnum[]
  }

  /**
   * HotelImage create
   */
  export type HotelImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelImage.
     */
    data: XOR<HotelImageCreateInput, HotelImageUncheckedCreateInput>
  }

  /**
   * HotelImage createMany
   */
  export type HotelImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelImages.
     */
    data: HotelImageCreateManyInput | HotelImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelImage createManyAndReturn
   */
  export type HotelImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * The data used to create many HotelImages.
     */
    data: HotelImageCreateManyInput | HotelImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelImage update
   */
  export type HotelImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelImage.
     */
    data: XOR<HotelImageUpdateInput, HotelImageUncheckedUpdateInput>
    /**
     * Choose, which HotelImage to update.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage updateMany
   */
  export type HotelImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelImages.
     */
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyInput>
    /**
     * Filter which HotelImages to update
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to update.
     */
    limit?: number
  }

  /**
   * HotelImage updateManyAndReturn
   */
  export type HotelImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * The data used to update HotelImages.
     */
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyInput>
    /**
     * Filter which HotelImages to update
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HotelImage upsert
   */
  export type HotelImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelImage to update in case it exists.
     */
    where: HotelImageWhereUniqueInput
    /**
     * In case the HotelImage found by the `where` argument doesn't exist, create a new HotelImage with this data.
     */
    create: XOR<HotelImageCreateInput, HotelImageUncheckedCreateInput>
    /**
     * In case the HotelImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelImageUpdateInput, HotelImageUncheckedUpdateInput>
  }

  /**
   * HotelImage delete
   */
  export type HotelImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
    /**
     * Filter which HotelImage to delete.
     */
    where: HotelImageWhereUniqueInput
  }

  /**
   * HotelImage deleteMany
   */
  export type HotelImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelImages to delete
     */
    where?: HotelImageWhereInput
    /**
     * Limit how many HotelImages to delete.
     */
    limit?: number
  }

  /**
   * HotelImage without action
   */
  export type HotelImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelImage
     */
    select?: HotelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelImage
     */
    omit?: HotelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelImageInclude<ExtArgs> | null
  }


  /**
   * Model TravelRecommend
   */

  export type AggregateTravelRecommend = {
    _count: TravelRecommendCountAggregateOutputType | null
    _min: TravelRecommendMinAggregateOutputType | null
    _max: TravelRecommendMaxAggregateOutputType | null
  }

  export type TravelRecommendMinAggregateOutputType = {
    id: string | null
    placeName: string | null
    description: string | null
    location: string | null
    openTime: Date | null
    closeTime: Date | null
    mapUrl: string | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelRecommendMaxAggregateOutputType = {
    id: string | null
    placeName: string | null
    description: string | null
    location: string | null
    openTime: Date | null
    closeTime: Date | null
    mapUrl: string | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TravelRecommendCountAggregateOutputType = {
    id: number
    placeName: number
    description: number
    location: number
    openTime: number
    closeTime: number
    openDays: number
    mapUrl: number
    coverImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TravelRecommendMinAggregateInputType = {
    id?: true
    placeName?: true
    description?: true
    location?: true
    openTime?: true
    closeTime?: true
    mapUrl?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelRecommendMaxAggregateInputType = {
    id?: true
    placeName?: true
    description?: true
    location?: true
    openTime?: true
    closeTime?: true
    mapUrl?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TravelRecommendCountAggregateInputType = {
    id?: true
    placeName?: true
    description?: true
    location?: true
    openTime?: true
    closeTime?: true
    openDays?: true
    mapUrl?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TravelRecommendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelRecommend to aggregate.
     */
    where?: TravelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRecommends to fetch.
     */
    orderBy?: TravelRecommendOrderByWithRelationInput | TravelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelRecommends
    **/
    _count?: true | TravelRecommendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelRecommendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelRecommendMaxAggregateInputType
  }

  export type GetTravelRecommendAggregateType<T extends TravelRecommendAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelRecommend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelRecommend[P]>
      : GetScalarType<T[P], AggregateTravelRecommend[P]>
  }




  export type TravelRecommendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelRecommendWhereInput
    orderBy?: TravelRecommendOrderByWithAggregationInput | TravelRecommendOrderByWithAggregationInput[]
    by: TravelRecommendScalarFieldEnum[] | TravelRecommendScalarFieldEnum
    having?: TravelRecommendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelRecommendCountAggregateInputType | true
    _min?: TravelRecommendMinAggregateInputType
    _max?: TravelRecommendMaxAggregateInputType
  }

  export type TravelRecommendGroupByOutputType = {
    id: string
    placeName: string
    description: string | null
    location: string
    openTime: Date | null
    closeTime: Date | null
    openDays: $Enums.Weekday[]
    mapUrl: string | null
    coverImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: TravelRecommendCountAggregateOutputType | null
    _min: TravelRecommendMinAggregateOutputType | null
    _max: TravelRecommendMaxAggregateOutputType | null
  }

  type GetTravelRecommendGroupByPayload<T extends TravelRecommendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelRecommendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelRecommendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelRecommendGroupByOutputType[P]>
            : GetScalarType<T[P], TravelRecommendGroupByOutputType[P]>
        }
      >
    >


  export type TravelRecommendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeName?: boolean
    description?: boolean
    location?: boolean
    openTime?: boolean
    closeTime?: boolean
    openDays?: boolean
    mapUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | TravelRecommend$imagesArgs<ExtArgs>
    _count?: boolean | TravelRecommendCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelRecommend"]>

  export type TravelRecommendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeName?: boolean
    description?: boolean
    location?: boolean
    openTime?: boolean
    closeTime?: boolean
    openDays?: boolean
    mapUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["travelRecommend"]>

  export type TravelRecommendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placeName?: boolean
    description?: boolean
    location?: boolean
    openTime?: boolean
    closeTime?: boolean
    openDays?: boolean
    mapUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["travelRecommend"]>

  export type TravelRecommendSelectScalar = {
    id?: boolean
    placeName?: boolean
    description?: boolean
    location?: boolean
    openTime?: boolean
    closeTime?: boolean
    openDays?: boolean
    mapUrl?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TravelRecommendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placeName" | "description" | "location" | "openTime" | "closeTime" | "openDays" | "mapUrl" | "coverImage" | "createdAt" | "updatedAt", ExtArgs["result"]["travelRecommend"]>
  export type TravelRecommendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | TravelRecommend$imagesArgs<ExtArgs>
    _count?: boolean | TravelRecommendCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TravelRecommendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TravelRecommendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TravelRecommendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelRecommend"
    objects: {
      images: Prisma.$TravelImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      placeName: string
      description: string | null
      location: string
      openTime: Date | null
      closeTime: Date | null
      openDays: $Enums.Weekday[]
      mapUrl: string | null
      coverImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["travelRecommend"]>
    composites: {}
  }

  type TravelRecommendGetPayload<S extends boolean | null | undefined | TravelRecommendDefaultArgs> = $Result.GetResult<Prisma.$TravelRecommendPayload, S>

  type TravelRecommendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelRecommendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelRecommendCountAggregateInputType | true
    }

  export interface TravelRecommendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelRecommend'], meta: { name: 'TravelRecommend' } }
    /**
     * Find zero or one TravelRecommend that matches the filter.
     * @param {TravelRecommendFindUniqueArgs} args - Arguments to find a TravelRecommend
     * @example
     * // Get one TravelRecommend
     * const travelRecommend = await prisma.travelRecommend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelRecommendFindUniqueArgs>(args: SelectSubset<T, TravelRecommendFindUniqueArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelRecommend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelRecommendFindUniqueOrThrowArgs} args - Arguments to find a TravelRecommend
     * @example
     * // Get one TravelRecommend
     * const travelRecommend = await prisma.travelRecommend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelRecommendFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelRecommendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelRecommend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRecommendFindFirstArgs} args - Arguments to find a TravelRecommend
     * @example
     * // Get one TravelRecommend
     * const travelRecommend = await prisma.travelRecommend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelRecommendFindFirstArgs>(args?: SelectSubset<T, TravelRecommendFindFirstArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelRecommend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRecommendFindFirstOrThrowArgs} args - Arguments to find a TravelRecommend
     * @example
     * // Get one TravelRecommend
     * const travelRecommend = await prisma.travelRecommend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelRecommendFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelRecommendFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelRecommends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRecommendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelRecommends
     * const travelRecommends = await prisma.travelRecommend.findMany()
     * 
     * // Get first 10 TravelRecommends
     * const travelRecommends = await prisma.travelRecommend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelRecommendWithIdOnly = await prisma.travelRecommend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelRecommendFindManyArgs>(args?: SelectSubset<T, TravelRecommendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelRecommend.
     * @param {TravelRecommendCreateArgs} args - Arguments to create a TravelRecommend.
     * @example
     * // Create one TravelRecommend
     * const TravelRecommend = await prisma.travelRecommend.create({
     *   data: {
     *     // ... data to create a TravelRecommend
     *   }
     * })
     * 
     */
    create<T extends TravelRecommendCreateArgs>(args: SelectSubset<T, TravelRecommendCreateArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelRecommends.
     * @param {TravelRecommendCreateManyArgs} args - Arguments to create many TravelRecommends.
     * @example
     * // Create many TravelRecommends
     * const travelRecommend = await prisma.travelRecommend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelRecommendCreateManyArgs>(args?: SelectSubset<T, TravelRecommendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelRecommends and returns the data saved in the database.
     * @param {TravelRecommendCreateManyAndReturnArgs} args - Arguments to create many TravelRecommends.
     * @example
     * // Create many TravelRecommends
     * const travelRecommend = await prisma.travelRecommend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelRecommends and only return the `id`
     * const travelRecommendWithIdOnly = await prisma.travelRecommend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelRecommendCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelRecommendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelRecommend.
     * @param {TravelRecommendDeleteArgs} args - Arguments to delete one TravelRecommend.
     * @example
     * // Delete one TravelRecommend
     * const TravelRecommend = await prisma.travelRecommend.delete({
     *   where: {
     *     // ... filter to delete one TravelRecommend
     *   }
     * })
     * 
     */
    delete<T extends TravelRecommendDeleteArgs>(args: SelectSubset<T, TravelRecommendDeleteArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelRecommend.
     * @param {TravelRecommendUpdateArgs} args - Arguments to update one TravelRecommend.
     * @example
     * // Update one TravelRecommend
     * const travelRecommend = await prisma.travelRecommend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelRecommendUpdateArgs>(args: SelectSubset<T, TravelRecommendUpdateArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelRecommends.
     * @param {TravelRecommendDeleteManyArgs} args - Arguments to filter TravelRecommends to delete.
     * @example
     * // Delete a few TravelRecommends
     * const { count } = await prisma.travelRecommend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelRecommendDeleteManyArgs>(args?: SelectSubset<T, TravelRecommendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelRecommends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRecommendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelRecommends
     * const travelRecommend = await prisma.travelRecommend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelRecommendUpdateManyArgs>(args: SelectSubset<T, TravelRecommendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelRecommends and returns the data updated in the database.
     * @param {TravelRecommendUpdateManyAndReturnArgs} args - Arguments to update many TravelRecommends.
     * @example
     * // Update many TravelRecommends
     * const travelRecommend = await prisma.travelRecommend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelRecommends and only return the `id`
     * const travelRecommendWithIdOnly = await prisma.travelRecommend.updateManyAndReturn({
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
    updateManyAndReturn<T extends TravelRecommendUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelRecommendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelRecommend.
     * @param {TravelRecommendUpsertArgs} args - Arguments to update or create a TravelRecommend.
     * @example
     * // Update or create a TravelRecommend
     * const travelRecommend = await prisma.travelRecommend.upsert({
     *   create: {
     *     // ... data to create a TravelRecommend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelRecommend we want to update
     *   }
     * })
     */
    upsert<T extends TravelRecommendUpsertArgs>(args: SelectSubset<T, TravelRecommendUpsertArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelRecommends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRecommendCountArgs} args - Arguments to filter TravelRecommends to count.
     * @example
     * // Count the number of TravelRecommends
     * const count = await prisma.travelRecommend.count({
     *   where: {
     *     // ... the filter for the TravelRecommends we want to count
     *   }
     * })
    **/
    count<T extends TravelRecommendCountArgs>(
      args?: Subset<T, TravelRecommendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelRecommendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelRecommend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRecommendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TravelRecommendAggregateArgs>(args: Subset<T, TravelRecommendAggregateArgs>): Prisma.PrismaPromise<GetTravelRecommendAggregateType<T>>

    /**
     * Group by TravelRecommend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelRecommendGroupByArgs} args - Group by arguments.
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
      T extends TravelRecommendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelRecommendGroupByArgs['orderBy'] }
        : { orderBy?: TravelRecommendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TravelRecommendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelRecommendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelRecommend model
   */
  readonly fields: TravelRecommendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelRecommend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelRecommendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends TravelRecommend$imagesArgs<ExtArgs> = {}>(args?: Subset<T, TravelRecommend$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TravelRecommend model
   */
  interface TravelRecommendFieldRefs {
    readonly id: FieldRef<"TravelRecommend", 'String'>
    readonly placeName: FieldRef<"TravelRecommend", 'String'>
    readonly description: FieldRef<"TravelRecommend", 'String'>
    readonly location: FieldRef<"TravelRecommend", 'String'>
    readonly openTime: FieldRef<"TravelRecommend", 'DateTime'>
    readonly closeTime: FieldRef<"TravelRecommend", 'DateTime'>
    readonly openDays: FieldRef<"TravelRecommend", 'Weekday[]'>
    readonly mapUrl: FieldRef<"TravelRecommend", 'String'>
    readonly coverImage: FieldRef<"TravelRecommend", 'String'>
    readonly createdAt: FieldRef<"TravelRecommend", 'DateTime'>
    readonly updatedAt: FieldRef<"TravelRecommend", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelRecommend findUnique
   */
  export type TravelRecommendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which TravelRecommend to fetch.
     */
    where: TravelRecommendWhereUniqueInput
  }

  /**
   * TravelRecommend findUniqueOrThrow
   */
  export type TravelRecommendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which TravelRecommend to fetch.
     */
    where: TravelRecommendWhereUniqueInput
  }

  /**
   * TravelRecommend findFirst
   */
  export type TravelRecommendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which TravelRecommend to fetch.
     */
    where?: TravelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRecommends to fetch.
     */
    orderBy?: TravelRecommendOrderByWithRelationInput | TravelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelRecommends.
     */
    cursor?: TravelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelRecommends.
     */
    distinct?: TravelRecommendScalarFieldEnum | TravelRecommendScalarFieldEnum[]
  }

  /**
   * TravelRecommend findFirstOrThrow
   */
  export type TravelRecommendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which TravelRecommend to fetch.
     */
    where?: TravelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRecommends to fetch.
     */
    orderBy?: TravelRecommendOrderByWithRelationInput | TravelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelRecommends.
     */
    cursor?: TravelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelRecommends.
     */
    distinct?: TravelRecommendScalarFieldEnum | TravelRecommendScalarFieldEnum[]
  }

  /**
   * TravelRecommend findMany
   */
  export type TravelRecommendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * Filter, which TravelRecommends to fetch.
     */
    where?: TravelRecommendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelRecommends to fetch.
     */
    orderBy?: TravelRecommendOrderByWithRelationInput | TravelRecommendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelRecommends.
     */
    cursor?: TravelRecommendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelRecommends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelRecommends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelRecommends.
     */
    distinct?: TravelRecommendScalarFieldEnum | TravelRecommendScalarFieldEnum[]
  }

  /**
   * TravelRecommend create
   */
  export type TravelRecommendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelRecommend.
     */
    data: XOR<TravelRecommendCreateInput, TravelRecommendUncheckedCreateInput>
  }

  /**
   * TravelRecommend createMany
   */
  export type TravelRecommendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelRecommends.
     */
    data: TravelRecommendCreateManyInput | TravelRecommendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelRecommend createManyAndReturn
   */
  export type TravelRecommendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * The data used to create many TravelRecommends.
     */
    data: TravelRecommendCreateManyInput | TravelRecommendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelRecommend update
   */
  export type TravelRecommendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelRecommend.
     */
    data: XOR<TravelRecommendUpdateInput, TravelRecommendUncheckedUpdateInput>
    /**
     * Choose, which TravelRecommend to update.
     */
    where: TravelRecommendWhereUniqueInput
  }

  /**
   * TravelRecommend updateMany
   */
  export type TravelRecommendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelRecommends.
     */
    data: XOR<TravelRecommendUpdateManyMutationInput, TravelRecommendUncheckedUpdateManyInput>
    /**
     * Filter which TravelRecommends to update
     */
    where?: TravelRecommendWhereInput
    /**
     * Limit how many TravelRecommends to update.
     */
    limit?: number
  }

  /**
   * TravelRecommend updateManyAndReturn
   */
  export type TravelRecommendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * The data used to update TravelRecommends.
     */
    data: XOR<TravelRecommendUpdateManyMutationInput, TravelRecommendUncheckedUpdateManyInput>
    /**
     * Filter which TravelRecommends to update
     */
    where?: TravelRecommendWhereInput
    /**
     * Limit how many TravelRecommends to update.
     */
    limit?: number
  }

  /**
   * TravelRecommend upsert
   */
  export type TravelRecommendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelRecommend to update in case it exists.
     */
    where: TravelRecommendWhereUniqueInput
    /**
     * In case the TravelRecommend found by the `where` argument doesn't exist, create a new TravelRecommend with this data.
     */
    create: XOR<TravelRecommendCreateInput, TravelRecommendUncheckedCreateInput>
    /**
     * In case the TravelRecommend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelRecommendUpdateInput, TravelRecommendUncheckedUpdateInput>
  }

  /**
   * TravelRecommend delete
   */
  export type TravelRecommendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
    /**
     * Filter which TravelRecommend to delete.
     */
    where: TravelRecommendWhereUniqueInput
  }

  /**
   * TravelRecommend deleteMany
   */
  export type TravelRecommendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelRecommends to delete
     */
    where?: TravelRecommendWhereInput
    /**
     * Limit how many TravelRecommends to delete.
     */
    limit?: number
  }

  /**
   * TravelRecommend.images
   */
  export type TravelRecommend$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    where?: TravelImageWhereInput
    orderBy?: TravelImageOrderByWithRelationInput | TravelImageOrderByWithRelationInput[]
    cursor?: TravelImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelImageScalarFieldEnum | TravelImageScalarFieldEnum[]
  }

  /**
   * TravelRecommend without action
   */
  export type TravelRecommendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelRecommend
     */
    select?: TravelRecommendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelRecommend
     */
    omit?: TravelRecommendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelRecommendInclude<ExtArgs> | null
  }


  /**
   * Model TravelImage
   */

  export type AggregateTravelImage = {
    _count: TravelImageCountAggregateOutputType | null
    _avg: TravelImageAvgAggregateOutputType | null
    _sum: TravelImageSumAggregateOutputType | null
    _min: TravelImageMinAggregateOutputType | null
    _max: TravelImageMaxAggregateOutputType | null
  }

  export type TravelImageAvgAggregateOutputType = {
    order: number | null
  }

  export type TravelImageSumAggregateOutputType = {
    order: number | null
  }

  export type TravelImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    order: number | null
    travelId: string | null
    createdAt: Date | null
  }

  export type TravelImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    order: number | null
    travelId: string | null
    createdAt: Date | null
  }

  export type TravelImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    order: number
    travelId: number
    createdAt: number
    _all: number
  }


  export type TravelImageAvgAggregateInputType = {
    order?: true
  }

  export type TravelImageSumAggregateInputType = {
    order?: true
  }

  export type TravelImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    travelId?: true
    createdAt?: true
  }

  export type TravelImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    travelId?: true
    createdAt?: true
  }

  export type TravelImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    order?: true
    travelId?: true
    createdAt?: true
    _all?: true
  }

  export type TravelImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelImage to aggregate.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationInput | TravelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TravelImages
    **/
    _count?: true | TravelImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelImageMaxAggregateInputType
  }

  export type GetTravelImageAggregateType<T extends TravelImageAggregateArgs> = {
        [P in keyof T & keyof AggregateTravelImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravelImage[P]>
      : GetScalarType<T[P], AggregateTravelImage[P]>
  }




  export type TravelImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelImageWhereInput
    orderBy?: TravelImageOrderByWithAggregationInput | TravelImageOrderByWithAggregationInput[]
    by: TravelImageScalarFieldEnum[] | TravelImageScalarFieldEnum
    having?: TravelImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelImageCountAggregateInputType | true
    _avg?: TravelImageAvgAggregateInputType
    _sum?: TravelImageSumAggregateInputType
    _min?: TravelImageMinAggregateInputType
    _max?: TravelImageMaxAggregateInputType
  }

  export type TravelImageGroupByOutputType = {
    id: string
    imageUrl: string
    order: number | null
    travelId: string
    createdAt: Date
    _count: TravelImageCountAggregateOutputType | null
    _avg: TravelImageAvgAggregateOutputType | null
    _sum: TravelImageSumAggregateOutputType | null
    _min: TravelImageMinAggregateOutputType | null
    _max: TravelImageMaxAggregateOutputType | null
  }

  type GetTravelImageGroupByPayload<T extends TravelImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelImageGroupByOutputType[P]>
            : GetScalarType<T[P], TravelImageGroupByOutputType[P]>
        }
      >
    >


  export type TravelImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    travelId?: boolean
    createdAt?: boolean
    travel?: boolean | TravelRecommendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelImage"]>

  export type TravelImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    travelId?: boolean
    createdAt?: boolean
    travel?: boolean | TravelRecommendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelImage"]>

  export type TravelImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    travelId?: boolean
    createdAt?: boolean
    travel?: boolean | TravelRecommendDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travelImage"]>

  export type TravelImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    order?: boolean
    travelId?: boolean
    createdAt?: boolean
  }

  export type TravelImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "order" | "travelId" | "createdAt", ExtArgs["result"]["travelImage"]>
  export type TravelImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelRecommendDefaultArgs<ExtArgs>
  }
  export type TravelImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelRecommendDefaultArgs<ExtArgs>
  }
  export type TravelImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travel?: boolean | TravelRecommendDefaultArgs<ExtArgs>
  }

  export type $TravelImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TravelImage"
    objects: {
      travel: Prisma.$TravelRecommendPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      order: number | null
      travelId: string
      createdAt: Date
    }, ExtArgs["result"]["travelImage"]>
    composites: {}
  }

  type TravelImageGetPayload<S extends boolean | null | undefined | TravelImageDefaultArgs> = $Result.GetResult<Prisma.$TravelImagePayload, S>

  type TravelImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelImageCountAggregateInputType | true
    }

  export interface TravelImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TravelImage'], meta: { name: 'TravelImage' } }
    /**
     * Find zero or one TravelImage that matches the filter.
     * @param {TravelImageFindUniqueArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelImageFindUniqueArgs>(args: SelectSubset<T, TravelImageFindUniqueArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TravelImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelImageFindUniqueOrThrowArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelImageFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageFindFirstArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelImageFindFirstArgs>(args?: SelectSubset<T, TravelImageFindFirstArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TravelImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageFindFirstOrThrowArgs} args - Arguments to find a TravelImage
     * @example
     * // Get one TravelImage
     * const travelImage = await prisma.travelImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelImageFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TravelImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TravelImages
     * const travelImages = await prisma.travelImage.findMany()
     * 
     * // Get first 10 TravelImages
     * const travelImages = await prisma.travelImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelImageWithIdOnly = await prisma.travelImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelImageFindManyArgs>(args?: SelectSubset<T, TravelImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TravelImage.
     * @param {TravelImageCreateArgs} args - Arguments to create a TravelImage.
     * @example
     * // Create one TravelImage
     * const TravelImage = await prisma.travelImage.create({
     *   data: {
     *     // ... data to create a TravelImage
     *   }
     * })
     * 
     */
    create<T extends TravelImageCreateArgs>(args: SelectSubset<T, TravelImageCreateArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TravelImages.
     * @param {TravelImageCreateManyArgs} args - Arguments to create many TravelImages.
     * @example
     * // Create many TravelImages
     * const travelImage = await prisma.travelImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelImageCreateManyArgs>(args?: SelectSubset<T, TravelImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TravelImages and returns the data saved in the database.
     * @param {TravelImageCreateManyAndReturnArgs} args - Arguments to create many TravelImages.
     * @example
     * // Create many TravelImages
     * const travelImage = await prisma.travelImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TravelImages and only return the `id`
     * const travelImageWithIdOnly = await prisma.travelImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelImageCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TravelImage.
     * @param {TravelImageDeleteArgs} args - Arguments to delete one TravelImage.
     * @example
     * // Delete one TravelImage
     * const TravelImage = await prisma.travelImage.delete({
     *   where: {
     *     // ... filter to delete one TravelImage
     *   }
     * })
     * 
     */
    delete<T extends TravelImageDeleteArgs>(args: SelectSubset<T, TravelImageDeleteArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TravelImage.
     * @param {TravelImageUpdateArgs} args - Arguments to update one TravelImage.
     * @example
     * // Update one TravelImage
     * const travelImage = await prisma.travelImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelImageUpdateArgs>(args: SelectSubset<T, TravelImageUpdateArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TravelImages.
     * @param {TravelImageDeleteManyArgs} args - Arguments to filter TravelImages to delete.
     * @example
     * // Delete a few TravelImages
     * const { count } = await prisma.travelImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelImageDeleteManyArgs>(args?: SelectSubset<T, TravelImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TravelImages
     * const travelImage = await prisma.travelImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelImageUpdateManyArgs>(args: SelectSubset<T, TravelImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TravelImages and returns the data updated in the database.
     * @param {TravelImageUpdateManyAndReturnArgs} args - Arguments to update many TravelImages.
     * @example
     * // Update many TravelImages
     * const travelImage = await prisma.travelImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TravelImages and only return the `id`
     * const travelImageWithIdOnly = await prisma.travelImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends TravelImageUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TravelImage.
     * @param {TravelImageUpsertArgs} args - Arguments to update or create a TravelImage.
     * @example
     * // Update or create a TravelImage
     * const travelImage = await prisma.travelImage.upsert({
     *   create: {
     *     // ... data to create a TravelImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TravelImage we want to update
     *   }
     * })
     */
    upsert<T extends TravelImageUpsertArgs>(args: SelectSubset<T, TravelImageUpsertArgs<ExtArgs>>): Prisma__TravelImageClient<$Result.GetResult<Prisma.$TravelImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TravelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageCountArgs} args - Arguments to filter TravelImages to count.
     * @example
     * // Count the number of TravelImages
     * const count = await prisma.travelImage.count({
     *   where: {
     *     // ... the filter for the TravelImages we want to count
     *   }
     * })
    **/
    count<T extends TravelImageCountArgs>(
      args?: Subset<T, TravelImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TravelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TravelImageAggregateArgs>(args: Subset<T, TravelImageAggregateArgs>): Prisma.PrismaPromise<GetTravelImageAggregateType<T>>

    /**
     * Group by TravelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelImageGroupByArgs} args - Group by arguments.
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
      T extends TravelImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelImageGroupByArgs['orderBy'] }
        : { orderBy?: TravelImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TravelImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TravelImage model
   */
  readonly fields: TravelImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TravelImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    travel<T extends TravelRecommendDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TravelRecommendDefaultArgs<ExtArgs>>): Prisma__TravelRecommendClient<$Result.GetResult<Prisma.$TravelRecommendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TravelImage model
   */
  interface TravelImageFieldRefs {
    readonly id: FieldRef<"TravelImage", 'String'>
    readonly imageUrl: FieldRef<"TravelImage", 'String'>
    readonly order: FieldRef<"TravelImage", 'Int'>
    readonly travelId: FieldRef<"TravelImage", 'String'>
    readonly createdAt: FieldRef<"TravelImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TravelImage findUnique
   */
  export type TravelImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where: TravelImageWhereUniqueInput
  }

  /**
   * TravelImage findUniqueOrThrow
   */
  export type TravelImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where: TravelImageWhereUniqueInput
  }

  /**
   * TravelImage findFirst
   */
  export type TravelImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationInput | TravelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelImages.
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelImages.
     */
    distinct?: TravelImageScalarFieldEnum | TravelImageScalarFieldEnum[]
  }

  /**
   * TravelImage findFirstOrThrow
   */
  export type TravelImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImage to fetch.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationInput | TravelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TravelImages.
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelImages.
     */
    distinct?: TravelImageScalarFieldEnum | TravelImageScalarFieldEnum[]
  }

  /**
   * TravelImage findMany
   */
  export type TravelImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter, which TravelImages to fetch.
     */
    where?: TravelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TravelImages to fetch.
     */
    orderBy?: TravelImageOrderByWithRelationInput | TravelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TravelImages.
     */
    cursor?: TravelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TravelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TravelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TravelImages.
     */
    distinct?: TravelImageScalarFieldEnum | TravelImageScalarFieldEnum[]
  }

  /**
   * TravelImage create
   */
  export type TravelImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * The data needed to create a TravelImage.
     */
    data: XOR<TravelImageCreateInput, TravelImageUncheckedCreateInput>
  }

  /**
   * TravelImage createMany
   */
  export type TravelImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TravelImages.
     */
    data: TravelImageCreateManyInput | TravelImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TravelImage createManyAndReturn
   */
  export type TravelImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * The data used to create many TravelImages.
     */
    data: TravelImageCreateManyInput | TravelImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelImage update
   */
  export type TravelImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * The data needed to update a TravelImage.
     */
    data: XOR<TravelImageUpdateInput, TravelImageUncheckedUpdateInput>
    /**
     * Choose, which TravelImage to update.
     */
    where: TravelImageWhereUniqueInput
  }

  /**
   * TravelImage updateMany
   */
  export type TravelImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TravelImages.
     */
    data: XOR<TravelImageUpdateManyMutationInput, TravelImageUncheckedUpdateManyInput>
    /**
     * Filter which TravelImages to update
     */
    where?: TravelImageWhereInput
    /**
     * Limit how many TravelImages to update.
     */
    limit?: number
  }

  /**
   * TravelImage updateManyAndReturn
   */
  export type TravelImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * The data used to update TravelImages.
     */
    data: XOR<TravelImageUpdateManyMutationInput, TravelImageUncheckedUpdateManyInput>
    /**
     * Filter which TravelImages to update
     */
    where?: TravelImageWhereInput
    /**
     * Limit how many TravelImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TravelImage upsert
   */
  export type TravelImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * The filter to search for the TravelImage to update in case it exists.
     */
    where: TravelImageWhereUniqueInput
    /**
     * In case the TravelImage found by the `where` argument doesn't exist, create a new TravelImage with this data.
     */
    create: XOR<TravelImageCreateInput, TravelImageUncheckedCreateInput>
    /**
     * In case the TravelImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelImageUpdateInput, TravelImageUncheckedUpdateInput>
  }

  /**
   * TravelImage delete
   */
  export type TravelImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
    /**
     * Filter which TravelImage to delete.
     */
    where: TravelImageWhereUniqueInput
  }

  /**
   * TravelImage deleteMany
   */
  export type TravelImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TravelImages to delete
     */
    where?: TravelImageWhereInput
    /**
     * Limit how many TravelImages to delete.
     */
    limit?: number
  }

  /**
   * TravelImage without action
   */
  export type TravelImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TravelImage
     */
    select?: TravelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TravelImage
     */
    omit?: TravelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelImageInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    name: string
    code: string | null
    createdAt: Date
    updatedAt: Date
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delegations?: boolean | Country$delegationsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegations?: boolean | Country$delegationsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      delegations: Prisma.$DelegationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
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
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delegations<T extends Country$delegationsArgs<ExtArgs> = {}>(args?: Subset<T, Country$delegationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly code: FieldRef<"Country", 'String'>
    readonly createdAt: FieldRef<"Country", 'DateTime'>
    readonly updatedAt: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.delegations
   */
  export type Country$delegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    where?: DelegationWhereInput
    orderBy?: DelegationOrderByWithRelationInput | DelegationOrderByWithRelationInput[]
    cursor?: DelegationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DelegationScalarFieldEnum | DelegationScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    shortName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    shortName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    shortName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    shortName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    shortName: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delegations?: boolean | Organization$delegationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    shortName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    shortName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "shortName" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegations?: boolean | Organization$delegationsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      delegations: Prisma.$DelegationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      shortName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delegations<T extends Organization$delegationsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$delegationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly shortName: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.delegations
   */
  export type Organization$delegationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegation
     */
    select?: DelegationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegation
     */
    omit?: DelegationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegationInclude<ExtArgs> | null
    where?: DelegationWhereInput
    orderBy?: DelegationOrderByWithRelationInput | DelegationOrderByWithRelationInput[]
    cursor?: DelegationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DelegationScalarFieldEnum | DelegationScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model SiteVisit
   */

  export type AggregateSiteVisit = {
    _count: SiteVisitCountAggregateOutputType | null
    _min: SiteVisitMinAggregateOutputType | null
    _max: SiteVisitMaxAggregateOutputType | null
  }

  export type SiteVisitMinAggregateOutputType = {
    id: string | null
    ipHash: string | null
    userAgent: string | null
    path: string | null
    createdAt: Date | null
  }

  export type SiteVisitMaxAggregateOutputType = {
    id: string | null
    ipHash: string | null
    userAgent: string | null
    path: string | null
    createdAt: Date | null
  }

  export type SiteVisitCountAggregateOutputType = {
    id: number
    ipHash: number
    userAgent: number
    path: number
    createdAt: number
    _all: number
  }


  export type SiteVisitMinAggregateInputType = {
    id?: true
    ipHash?: true
    userAgent?: true
    path?: true
    createdAt?: true
  }

  export type SiteVisitMaxAggregateInputType = {
    id?: true
    ipHash?: true
    userAgent?: true
    path?: true
    createdAt?: true
  }

  export type SiteVisitCountAggregateInputType = {
    id?: true
    ipHash?: true
    userAgent?: true
    path?: true
    createdAt?: true
    _all?: true
  }

  export type SiteVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteVisit to aggregate.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteVisits
    **/
    _count?: true | SiteVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteVisitMaxAggregateInputType
  }

  export type GetSiteVisitAggregateType<T extends SiteVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteVisit[P]>
      : GetScalarType<T[P], AggregateSiteVisit[P]>
  }




  export type SiteVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteVisitWhereInput
    orderBy?: SiteVisitOrderByWithAggregationInput | SiteVisitOrderByWithAggregationInput[]
    by: SiteVisitScalarFieldEnum[] | SiteVisitScalarFieldEnum
    having?: SiteVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteVisitCountAggregateInputType | true
    _min?: SiteVisitMinAggregateInputType
    _max?: SiteVisitMaxAggregateInputType
  }

  export type SiteVisitGroupByOutputType = {
    id: string
    ipHash: string | null
    userAgent: string | null
    path: string | null
    createdAt: Date
    _count: SiteVisitCountAggregateOutputType | null
    _min: SiteVisitMinAggregateOutputType | null
    _max: SiteVisitMaxAggregateOutputType | null
  }

  type GetSiteVisitGroupByPayload<T extends SiteVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteVisitGroupByOutputType[P]>
            : GetScalarType<T[P], SiteVisitGroupByOutputType[P]>
        }
      >
    >


  export type SiteVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipHash?: boolean
    userAgent?: boolean
    path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteVisit"]>

  export type SiteVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipHash?: boolean
    userAgent?: boolean
    path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteVisit"]>

  export type SiteVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipHash?: boolean
    userAgent?: boolean
    path?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["siteVisit"]>

  export type SiteVisitSelectScalar = {
    id?: boolean
    ipHash?: boolean
    userAgent?: boolean
    path?: boolean
    createdAt?: boolean
  }

  export type SiteVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ipHash" | "userAgent" | "path" | "createdAt", ExtArgs["result"]["siteVisit"]>

  export type $SiteVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteVisit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ipHash: string | null
      userAgent: string | null
      path: string | null
      createdAt: Date
    }, ExtArgs["result"]["siteVisit"]>
    composites: {}
  }

  type SiteVisitGetPayload<S extends boolean | null | undefined | SiteVisitDefaultArgs> = $Result.GetResult<Prisma.$SiteVisitPayload, S>

  type SiteVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteVisitCountAggregateInputType | true
    }

  export interface SiteVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteVisit'], meta: { name: 'SiteVisit' } }
    /**
     * Find zero or one SiteVisit that matches the filter.
     * @param {SiteVisitFindUniqueArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteVisitFindUniqueArgs>(args: SelectSubset<T, SiteVisitFindUniqueArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteVisitFindUniqueOrThrowArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitFindFirstArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteVisitFindFirstArgs>(args?: SelectSubset<T, SiteVisitFindFirstArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitFindFirstOrThrowArgs} args - Arguments to find a SiteVisit
     * @example
     * // Get one SiteVisit
     * const siteVisit = await prisma.siteVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteVisits
     * const siteVisits = await prisma.siteVisit.findMany()
     * 
     * // Get first 10 SiteVisits
     * const siteVisits = await prisma.siteVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteVisitWithIdOnly = await prisma.siteVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteVisitFindManyArgs>(args?: SelectSubset<T, SiteVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteVisit.
     * @param {SiteVisitCreateArgs} args - Arguments to create a SiteVisit.
     * @example
     * // Create one SiteVisit
     * const SiteVisit = await prisma.siteVisit.create({
     *   data: {
     *     // ... data to create a SiteVisit
     *   }
     * })
     * 
     */
    create<T extends SiteVisitCreateArgs>(args: SelectSubset<T, SiteVisitCreateArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteVisits.
     * @param {SiteVisitCreateManyArgs} args - Arguments to create many SiteVisits.
     * @example
     * // Create many SiteVisits
     * const siteVisit = await prisma.siteVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteVisitCreateManyArgs>(args?: SelectSubset<T, SiteVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteVisits and returns the data saved in the database.
     * @param {SiteVisitCreateManyAndReturnArgs} args - Arguments to create many SiteVisits.
     * @example
     * // Create many SiteVisits
     * const siteVisit = await prisma.siteVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteVisits and only return the `id`
     * const siteVisitWithIdOnly = await prisma.siteVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteVisit.
     * @param {SiteVisitDeleteArgs} args - Arguments to delete one SiteVisit.
     * @example
     * // Delete one SiteVisit
     * const SiteVisit = await prisma.siteVisit.delete({
     *   where: {
     *     // ... filter to delete one SiteVisit
     *   }
     * })
     * 
     */
    delete<T extends SiteVisitDeleteArgs>(args: SelectSubset<T, SiteVisitDeleteArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteVisit.
     * @param {SiteVisitUpdateArgs} args - Arguments to update one SiteVisit.
     * @example
     * // Update one SiteVisit
     * const siteVisit = await prisma.siteVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteVisitUpdateArgs>(args: SelectSubset<T, SiteVisitUpdateArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteVisits.
     * @param {SiteVisitDeleteManyArgs} args - Arguments to filter SiteVisits to delete.
     * @example
     * // Delete a few SiteVisits
     * const { count } = await prisma.siteVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteVisitDeleteManyArgs>(args?: SelectSubset<T, SiteVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteVisits
     * const siteVisit = await prisma.siteVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteVisitUpdateManyArgs>(args: SelectSubset<T, SiteVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteVisits and returns the data updated in the database.
     * @param {SiteVisitUpdateManyAndReturnArgs} args - Arguments to update many SiteVisits.
     * @example
     * // Update many SiteVisits
     * const siteVisit = await prisma.siteVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteVisits and only return the `id`
     * const siteVisitWithIdOnly = await prisma.siteVisit.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteVisit.
     * @param {SiteVisitUpsertArgs} args - Arguments to update or create a SiteVisit.
     * @example
     * // Update or create a SiteVisit
     * const siteVisit = await prisma.siteVisit.upsert({
     *   create: {
     *     // ... data to create a SiteVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteVisit we want to update
     *   }
     * })
     */
    upsert<T extends SiteVisitUpsertArgs>(args: SelectSubset<T, SiteVisitUpsertArgs<ExtArgs>>): Prisma__SiteVisitClient<$Result.GetResult<Prisma.$SiteVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitCountArgs} args - Arguments to filter SiteVisits to count.
     * @example
     * // Count the number of SiteVisits
     * const count = await prisma.siteVisit.count({
     *   where: {
     *     // ... the filter for the SiteVisits we want to count
     *   }
     * })
    **/
    count<T extends SiteVisitCountArgs>(
      args?: Subset<T, SiteVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteVisitAggregateArgs>(args: Subset<T, SiteVisitAggregateArgs>): Prisma.PrismaPromise<GetSiteVisitAggregateType<T>>

    /**
     * Group by SiteVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteVisitGroupByArgs} args - Group by arguments.
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
      T extends SiteVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteVisitGroupByArgs['orderBy'] }
        : { orderBy?: SiteVisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteVisit model
   */
  readonly fields: SiteVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SiteVisit model
   */
  interface SiteVisitFieldRefs {
    readonly id: FieldRef<"SiteVisit", 'String'>
    readonly ipHash: FieldRef<"SiteVisit", 'String'>
    readonly userAgent: FieldRef<"SiteVisit", 'String'>
    readonly path: FieldRef<"SiteVisit", 'String'>
    readonly createdAt: FieldRef<"SiteVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteVisit findUnique
   */
  export type SiteVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit findUniqueOrThrow
   */
  export type SiteVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit findFirst
   */
  export type SiteVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteVisits.
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteVisits.
     */
    distinct?: SiteVisitScalarFieldEnum | SiteVisitScalarFieldEnum[]
  }

  /**
   * SiteVisit findFirstOrThrow
   */
  export type SiteVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * Filter, which SiteVisit to fetch.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteVisits.
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteVisits.
     */
    distinct?: SiteVisitScalarFieldEnum | SiteVisitScalarFieldEnum[]
  }

  /**
   * SiteVisit findMany
   */
  export type SiteVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * Filter, which SiteVisits to fetch.
     */
    where?: SiteVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteVisits to fetch.
     */
    orderBy?: SiteVisitOrderByWithRelationInput | SiteVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteVisits.
     */
    cursor?: SiteVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteVisits.
     */
    distinct?: SiteVisitScalarFieldEnum | SiteVisitScalarFieldEnum[]
  }

  /**
   * SiteVisit create
   */
  export type SiteVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * The data needed to create a SiteVisit.
     */
    data?: XOR<SiteVisitCreateInput, SiteVisitUncheckedCreateInput>
  }

  /**
   * SiteVisit createMany
   */
  export type SiteVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteVisits.
     */
    data: SiteVisitCreateManyInput | SiteVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteVisit createManyAndReturn
   */
  export type SiteVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * The data used to create many SiteVisits.
     */
    data: SiteVisitCreateManyInput | SiteVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteVisit update
   */
  export type SiteVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * The data needed to update a SiteVisit.
     */
    data: XOR<SiteVisitUpdateInput, SiteVisitUncheckedUpdateInput>
    /**
     * Choose, which SiteVisit to update.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit updateMany
   */
  export type SiteVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteVisits.
     */
    data: XOR<SiteVisitUpdateManyMutationInput, SiteVisitUncheckedUpdateManyInput>
    /**
     * Filter which SiteVisits to update
     */
    where?: SiteVisitWhereInput
    /**
     * Limit how many SiteVisits to update.
     */
    limit?: number
  }

  /**
   * SiteVisit updateManyAndReturn
   */
  export type SiteVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * The data used to update SiteVisits.
     */
    data: XOR<SiteVisitUpdateManyMutationInput, SiteVisitUncheckedUpdateManyInput>
    /**
     * Filter which SiteVisits to update
     */
    where?: SiteVisitWhereInput
    /**
     * Limit how many SiteVisits to update.
     */
    limit?: number
  }

  /**
   * SiteVisit upsert
   */
  export type SiteVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * The filter to search for the SiteVisit to update in case it exists.
     */
    where: SiteVisitWhereUniqueInput
    /**
     * In case the SiteVisit found by the `where` argument doesn't exist, create a new SiteVisit with this data.
     */
    create: XOR<SiteVisitCreateInput, SiteVisitUncheckedCreateInput>
    /**
     * In case the SiteVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteVisitUpdateInput, SiteVisitUncheckedUpdateInput>
  }

  /**
   * SiteVisit delete
   */
  export type SiteVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
    /**
     * Filter which SiteVisit to delete.
     */
    where: SiteVisitWhereUniqueInput
  }

  /**
   * SiteVisit deleteMany
   */
  export type SiteVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteVisits to delete
     */
    where?: SiteVisitWhereInput
    /**
     * Limit how many SiteVisits to delete.
     */
    limit?: number
  }

  /**
   * SiteVisit without action
   */
  export type SiteVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteVisit
     */
    select?: SiteVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteVisit
     */
    omit?: SiteVisitOmit<ExtArgs> | null
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


  export const DelegationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    position: 'position',
    delegationCode: 'delegationCode',
    role: 'role',
    organizationId: 'organizationId',
    countryId: 'countryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DelegationScalarFieldEnum = (typeof DelegationScalarFieldEnum)[keyof typeof DelegationScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    capacity: 'capacity',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    qrCode: 'qrCode',
    docURL: 'docURL',
    allImageURL: 'allImageURL',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    registrationDeadline: 'registrationDeadline',
    roomId: 'roomId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const ActivityDelegationScalarFieldEnum: {
    activityId: 'activityId',
    delegationId: 'delegationId',
    registeredAt: 'registeredAt'
  };

  export type ActivityDelegationScalarFieldEnum = (typeof ActivityDelegationScalarFieldEnum)[keyof typeof ActivityDelegationScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    mediaUrl: 'mediaUrl',
    mediaType: 'mediaType',
    visibility: 'visibility',
    description: 'description',
    activityId: 'activityId',
    createdAt: 'createdAt'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const HotelRecommendScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    address: 'address',
    starRating: 'starRating',
    contactInfo: 'contactInfo',
    coverImage: 'coverImage',
    websiteUrl: 'websiteUrl',
    mapUrl: 'mapUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelRecommendScalarFieldEnum = (typeof HotelRecommendScalarFieldEnum)[keyof typeof HotelRecommendScalarFieldEnum]


  export const HotelImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    order: 'order',
    hotelId: 'hotelId',
    createdAt: 'createdAt'
  };

  export type HotelImageScalarFieldEnum = (typeof HotelImageScalarFieldEnum)[keyof typeof HotelImageScalarFieldEnum]


  export const TravelRecommendScalarFieldEnum: {
    id: 'id',
    placeName: 'placeName',
    description: 'description',
    location: 'location',
    openTime: 'openTime',
    closeTime: 'closeTime',
    openDays: 'openDays',
    mapUrl: 'mapUrl',
    coverImage: 'coverImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TravelRecommendScalarFieldEnum = (typeof TravelRecommendScalarFieldEnum)[keyof typeof TravelRecommendScalarFieldEnum]


  export const TravelImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    order: 'order',
    travelId: 'travelId',
    createdAt: 'createdAt'
  };

  export type TravelImageScalarFieldEnum = (typeof TravelImageScalarFieldEnum)[keyof typeof TravelImageScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    shortName: 'shortName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const SiteVisitScalarFieldEnum: {
    id: 'id',
    ipHash: 'ipHash',
    userAgent: 'userAgent',
    path: 'path',
    createdAt: 'createdAt'
  };

  export type SiteVisitScalarFieldEnum = (typeof SiteVisitScalarFieldEnum)[keyof typeof SiteVisitScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ActivityStatus'
   */
  export type EnumActivityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityStatus'>
    


  /**
   * Reference to a field of type 'ActivityStatus[]'
   */
  export type ListEnumActivityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityStatus[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'Weekday[]'
   */
  export type ListEnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday[]'>
    


  /**
   * Reference to a field of type 'Weekday'
   */
  export type EnumWeekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weekday'>
    


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


  export type DelegationWhereInput = {
    AND?: DelegationWhereInput | DelegationWhereInput[]
    OR?: DelegationWhereInput[]
    NOT?: DelegationWhereInput | DelegationWhereInput[]
    id?: StringFilter<"Delegation"> | string
    title?: StringNullableFilter<"Delegation"> | string | null
    firstName?: StringFilter<"Delegation"> | string
    lastName?: StringFilter<"Delegation"> | string
    email?: StringFilter<"Delegation"> | string
    password?: StringNullableFilter<"Delegation"> | string | null
    phoneNumber?: StringNullableFilter<"Delegation"> | string | null
    position?: StringNullableFilter<"Delegation"> | string | null
    delegationCode?: StringNullableFilter<"Delegation"> | string | null
    role?: EnumRoleFilter<"Delegation"> | $Enums.Role
    organizationId?: StringNullableFilter<"Delegation"> | string | null
    countryId?: StringNullableFilter<"Delegation"> | string | null
    createdAt?: DateTimeFilter<"Delegation"> | Date | string
    updatedAt?: DateTimeFilter<"Delegation"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    activities?: ActivityDelegationListRelationFilter
  }

  export type DelegationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    delegationCode?: SortOrderInput | SortOrder
    role?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
    activities?: ActivityDelegationOrderByRelationAggregateInput
  }

  export type DelegationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    delegationCode?: string
    AND?: DelegationWhereInput | DelegationWhereInput[]
    OR?: DelegationWhereInput[]
    NOT?: DelegationWhereInput | DelegationWhereInput[]
    title?: StringNullableFilter<"Delegation"> | string | null
    firstName?: StringFilter<"Delegation"> | string
    lastName?: StringFilter<"Delegation"> | string
    password?: StringNullableFilter<"Delegation"> | string | null
    phoneNumber?: StringNullableFilter<"Delegation"> | string | null
    position?: StringNullableFilter<"Delegation"> | string | null
    role?: EnumRoleFilter<"Delegation"> | $Enums.Role
    organizationId?: StringNullableFilter<"Delegation"> | string | null
    countryId?: StringNullableFilter<"Delegation"> | string | null
    createdAt?: DateTimeFilter<"Delegation"> | Date | string
    updatedAt?: DateTimeFilter<"Delegation"> | Date | string
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    country?: XOR<CountryNullableScalarRelationFilter, CountryWhereInput> | null
    activities?: ActivityDelegationListRelationFilter
  }, "id" | "email" | "delegationCode">

  export type DelegationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    delegationCode?: SortOrderInput | SortOrder
    role?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    countryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DelegationCountOrderByAggregateInput
    _max?: DelegationMaxOrderByAggregateInput
    _min?: DelegationMinOrderByAggregateInput
  }

  export type DelegationScalarWhereWithAggregatesInput = {
    AND?: DelegationScalarWhereWithAggregatesInput | DelegationScalarWhereWithAggregatesInput[]
    OR?: DelegationScalarWhereWithAggregatesInput[]
    NOT?: DelegationScalarWhereWithAggregatesInput | DelegationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delegation"> | string
    title?: StringNullableWithAggregatesFilter<"Delegation"> | string | null
    firstName?: StringWithAggregatesFilter<"Delegation"> | string
    lastName?: StringWithAggregatesFilter<"Delegation"> | string
    email?: StringWithAggregatesFilter<"Delegation"> | string
    password?: StringNullableWithAggregatesFilter<"Delegation"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Delegation"> | string | null
    position?: StringNullableWithAggregatesFilter<"Delegation"> | string | null
    delegationCode?: StringNullableWithAggregatesFilter<"Delegation"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Delegation"> | $Enums.Role
    organizationId?: StringNullableWithAggregatesFilter<"Delegation"> | string | null
    countryId?: StringNullableWithAggregatesFilter<"Delegation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Delegation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Delegation"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    location?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    description?: StringNullableFilter<"Room"> | string | null
    imageUrl?: StringNullableFilter<"Room"> | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    activities?: ActivityListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    activities?: ActivityOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    location?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    description?: StringNullableFilter<"Room"> | string | null
    imageUrl?: StringNullableFilter<"Room"> | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    activities?: ActivityListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    location?: StringNullableWithAggregatesFilter<"Room"> | string | null
    capacity?: IntWithAggregatesFilter<"Room"> | number
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Room"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    name?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    qrCode?: StringNullableFilter<"Activity"> | string | null
    docURL?: StringNullableFilter<"Activity"> | string | null
    allImageURL?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    startTime?: DateTimeFilter<"Activity"> | Date | string
    endTime?: DateTimeFilter<"Activity"> | Date | string
    status?: EnumActivityStatusFilter<"Activity"> | $Enums.ActivityStatus
    registrationDeadline?: DateTimeNullableFilter<"Activity"> | Date | string | null
    roomId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    delegations?: ActivityDelegationListRelationFilter
    galleries?: GalleryListRelationFilter
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    docURL?: SortOrderInput | SortOrder
    allImageURL?: SortOrderInput | SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    registrationDeadline?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    delegations?: ActivityDelegationOrderByRelationAggregateInput
    galleries?: GalleryOrderByRelationAggregateInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qrCode?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    name?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    docURL?: StringNullableFilter<"Activity"> | string | null
    allImageURL?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    startTime?: DateTimeFilter<"Activity"> | Date | string
    endTime?: DateTimeFilter<"Activity"> | Date | string
    status?: EnumActivityStatusFilter<"Activity"> | $Enums.ActivityStatus
    registrationDeadline?: DateTimeNullableFilter<"Activity"> | Date | string | null
    roomId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
    room?: XOR<RoomNullableScalarRelationFilter, RoomWhereInput> | null
    delegations?: ActivityDelegationListRelationFilter
    galleries?: GalleryListRelationFilter
  }, "id" | "qrCode">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    qrCode?: SortOrderInput | SortOrder
    docURL?: SortOrderInput | SortOrder
    allImageURL?: SortOrderInput | SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    registrationDeadline?: SortOrderInput | SortOrder
    roomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    name?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    qrCode?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    docURL?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    allImageURL?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    date?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    status?: EnumActivityStatusWithAggregatesFilter<"Activity"> | $Enums.ActivityStatus
    registrationDeadline?: DateTimeNullableWithAggregatesFilter<"Activity"> | Date | string | null
    roomId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type ActivityDelegationWhereInput = {
    AND?: ActivityDelegationWhereInput | ActivityDelegationWhereInput[]
    OR?: ActivityDelegationWhereInput[]
    NOT?: ActivityDelegationWhereInput | ActivityDelegationWhereInput[]
    activityId?: StringFilter<"ActivityDelegation"> | string
    delegationId?: StringFilter<"ActivityDelegation"> | string
    registeredAt?: DateTimeFilter<"ActivityDelegation"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    delegation?: XOR<DelegationScalarRelationFilter, DelegationWhereInput>
  }

  export type ActivityDelegationOrderByWithRelationInput = {
    activityId?: SortOrder
    delegationId?: SortOrder
    registeredAt?: SortOrder
    activity?: ActivityOrderByWithRelationInput
    delegation?: DelegationOrderByWithRelationInput
  }

  export type ActivityDelegationWhereUniqueInput = Prisma.AtLeast<{
    activityId_delegationId?: ActivityDelegationActivityIdDelegationIdCompoundUniqueInput
    AND?: ActivityDelegationWhereInput | ActivityDelegationWhereInput[]
    OR?: ActivityDelegationWhereInput[]
    NOT?: ActivityDelegationWhereInput | ActivityDelegationWhereInput[]
    activityId?: StringFilter<"ActivityDelegation"> | string
    delegationId?: StringFilter<"ActivityDelegation"> | string
    registeredAt?: DateTimeFilter<"ActivityDelegation"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
    delegation?: XOR<DelegationScalarRelationFilter, DelegationWhereInput>
  }, "activityId_delegationId">

  export type ActivityDelegationOrderByWithAggregationInput = {
    activityId?: SortOrder
    delegationId?: SortOrder
    registeredAt?: SortOrder
    _count?: ActivityDelegationCountOrderByAggregateInput
    _max?: ActivityDelegationMaxOrderByAggregateInput
    _min?: ActivityDelegationMinOrderByAggregateInput
  }

  export type ActivityDelegationScalarWhereWithAggregatesInput = {
    AND?: ActivityDelegationScalarWhereWithAggregatesInput | ActivityDelegationScalarWhereWithAggregatesInput[]
    OR?: ActivityDelegationScalarWhereWithAggregatesInput[]
    NOT?: ActivityDelegationScalarWhereWithAggregatesInput | ActivityDelegationScalarWhereWithAggregatesInput[]
    activityId?: StringWithAggregatesFilter<"ActivityDelegation"> | string
    delegationId?: StringWithAggregatesFilter<"ActivityDelegation"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"ActivityDelegation"> | Date | string
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: StringFilter<"Gallery"> | string
    title?: StringNullableFilter<"Gallery"> | string | null
    mediaUrl?: StringFilter<"Gallery"> | string
    mediaType?: EnumMediaTypeFilter<"Gallery"> | $Enums.MediaType
    visibility?: EnumVisibilityFilter<"Gallery"> | $Enums.Visibility
    description?: StringNullableFilter<"Gallery"> | string | null
    activityId?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    description?: SortOrderInput | SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
    activity?: ActivityOrderByWithRelationInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    title?: StringNullableFilter<"Gallery"> | string | null
    mediaUrl?: StringFilter<"Gallery"> | string
    mediaType?: EnumMediaTypeFilter<"Gallery"> | $Enums.MediaType
    visibility?: EnumVisibilityFilter<"Gallery"> | $Enums.Visibility
    description?: StringNullableFilter<"Gallery"> | string | null
    activityId?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, ActivityWhereInput>
  }, "id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    description?: SortOrderInput | SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gallery"> | string
    title?: StringNullableWithAggregatesFilter<"Gallery"> | string | null
    mediaUrl?: StringWithAggregatesFilter<"Gallery"> | string
    mediaType?: EnumMediaTypeWithAggregatesFilter<"Gallery"> | $Enums.MediaType
    visibility?: EnumVisibilityWithAggregatesFilter<"Gallery"> | $Enums.Visibility
    description?: StringNullableWithAggregatesFilter<"Gallery"> | string | null
    activityId?: StringWithAggregatesFilter<"Gallery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Gallery"> | Date | string
  }

  export type HotelRecommendWhereInput = {
    AND?: HotelRecommendWhereInput | HotelRecommendWhereInput[]
    OR?: HotelRecommendWhereInput[]
    NOT?: HotelRecommendWhereInput | HotelRecommendWhereInput[]
    id?: StringFilter<"HotelRecommend"> | string
    name?: StringFilter<"HotelRecommend"> | string
    description?: StringNullableFilter<"HotelRecommend"> | string | null
    address?: StringFilter<"HotelRecommend"> | string
    starRating?: IntNullableFilter<"HotelRecommend"> | number | null
    contactInfo?: StringNullableFilter<"HotelRecommend"> | string | null
    coverImage?: StringNullableFilter<"HotelRecommend"> | string | null
    websiteUrl?: StringNullableFilter<"HotelRecommend"> | string | null
    mapUrl?: StringNullableFilter<"HotelRecommend"> | string | null
    createdAt?: DateTimeFilter<"HotelRecommend"> | Date | string
    updatedAt?: DateTimeFilter<"HotelRecommend"> | Date | string
    images?: HotelImageListRelationFilter
  }

  export type HotelRecommendOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    starRating?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    mapUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: HotelImageOrderByRelationAggregateInput
  }

  export type HotelRecommendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelRecommendWhereInput | HotelRecommendWhereInput[]
    OR?: HotelRecommendWhereInput[]
    NOT?: HotelRecommendWhereInput | HotelRecommendWhereInput[]
    name?: StringFilter<"HotelRecommend"> | string
    description?: StringNullableFilter<"HotelRecommend"> | string | null
    address?: StringFilter<"HotelRecommend"> | string
    starRating?: IntNullableFilter<"HotelRecommend"> | number | null
    contactInfo?: StringNullableFilter<"HotelRecommend"> | string | null
    coverImage?: StringNullableFilter<"HotelRecommend"> | string | null
    websiteUrl?: StringNullableFilter<"HotelRecommend"> | string | null
    mapUrl?: StringNullableFilter<"HotelRecommend"> | string | null
    createdAt?: DateTimeFilter<"HotelRecommend"> | Date | string
    updatedAt?: DateTimeFilter<"HotelRecommend"> | Date | string
    images?: HotelImageListRelationFilter
  }, "id">

  export type HotelRecommendOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    starRating?: SortOrderInput | SortOrder
    contactInfo?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    mapUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelRecommendCountOrderByAggregateInput
    _avg?: HotelRecommendAvgOrderByAggregateInput
    _max?: HotelRecommendMaxOrderByAggregateInput
    _min?: HotelRecommendMinOrderByAggregateInput
    _sum?: HotelRecommendSumOrderByAggregateInput
  }

  export type HotelRecommendScalarWhereWithAggregatesInput = {
    AND?: HotelRecommendScalarWhereWithAggregatesInput | HotelRecommendScalarWhereWithAggregatesInput[]
    OR?: HotelRecommendScalarWhereWithAggregatesInput[]
    NOT?: HotelRecommendScalarWhereWithAggregatesInput | HotelRecommendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HotelRecommend"> | string
    name?: StringWithAggregatesFilter<"HotelRecommend"> | string
    description?: StringNullableWithAggregatesFilter<"HotelRecommend"> | string | null
    address?: StringWithAggregatesFilter<"HotelRecommend"> | string
    starRating?: IntNullableWithAggregatesFilter<"HotelRecommend"> | number | null
    contactInfo?: StringNullableWithAggregatesFilter<"HotelRecommend"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"HotelRecommend"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"HotelRecommend"> | string | null
    mapUrl?: StringNullableWithAggregatesFilter<"HotelRecommend"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HotelRecommend"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HotelRecommend"> | Date | string
  }

  export type HotelImageWhereInput = {
    AND?: HotelImageWhereInput | HotelImageWhereInput[]
    OR?: HotelImageWhereInput[]
    NOT?: HotelImageWhereInput | HotelImageWhereInput[]
    id?: StringFilter<"HotelImage"> | string
    imageUrl?: StringFilter<"HotelImage"> | string
    order?: IntNullableFilter<"HotelImage"> | number | null
    hotelId?: StringFilter<"HotelImage"> | string
    createdAt?: DateTimeFilter<"HotelImage"> | Date | string
    hotel?: XOR<HotelRecommendScalarRelationFilter, HotelRecommendWhereInput>
  }

  export type HotelImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrderInput | SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    hotel?: HotelRecommendOrderByWithRelationInput
  }

  export type HotelImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotelImageWhereInput | HotelImageWhereInput[]
    OR?: HotelImageWhereInput[]
    NOT?: HotelImageWhereInput | HotelImageWhereInput[]
    imageUrl?: StringFilter<"HotelImage"> | string
    order?: IntNullableFilter<"HotelImage"> | number | null
    hotelId?: StringFilter<"HotelImage"> | string
    createdAt?: DateTimeFilter<"HotelImage"> | Date | string
    hotel?: XOR<HotelRecommendScalarRelationFilter, HotelRecommendWhereInput>
  }, "id">

  export type HotelImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrderInput | SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
    _count?: HotelImageCountOrderByAggregateInput
    _avg?: HotelImageAvgOrderByAggregateInput
    _max?: HotelImageMaxOrderByAggregateInput
    _min?: HotelImageMinOrderByAggregateInput
    _sum?: HotelImageSumOrderByAggregateInput
  }

  export type HotelImageScalarWhereWithAggregatesInput = {
    AND?: HotelImageScalarWhereWithAggregatesInput | HotelImageScalarWhereWithAggregatesInput[]
    OR?: HotelImageScalarWhereWithAggregatesInput[]
    NOT?: HotelImageScalarWhereWithAggregatesInput | HotelImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HotelImage"> | string
    imageUrl?: StringWithAggregatesFilter<"HotelImage"> | string
    order?: IntNullableWithAggregatesFilter<"HotelImage"> | number | null
    hotelId?: StringWithAggregatesFilter<"HotelImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HotelImage"> | Date | string
  }

  export type TravelRecommendWhereInput = {
    AND?: TravelRecommendWhereInput | TravelRecommendWhereInput[]
    OR?: TravelRecommendWhereInput[]
    NOT?: TravelRecommendWhereInput | TravelRecommendWhereInput[]
    id?: StringFilter<"TravelRecommend"> | string
    placeName?: StringFilter<"TravelRecommend"> | string
    description?: StringNullableFilter<"TravelRecommend"> | string | null
    location?: StringFilter<"TravelRecommend"> | string
    openTime?: DateTimeNullableFilter<"TravelRecommend"> | Date | string | null
    closeTime?: DateTimeNullableFilter<"TravelRecommend"> | Date | string | null
    openDays?: EnumWeekdayNullableListFilter<"TravelRecommend">
    mapUrl?: StringNullableFilter<"TravelRecommend"> | string | null
    coverImage?: StringNullableFilter<"TravelRecommend"> | string | null
    createdAt?: DateTimeFilter<"TravelRecommend"> | Date | string
    updatedAt?: DateTimeFilter<"TravelRecommend"> | Date | string
    images?: TravelImageListRelationFilter
  }

  export type TravelRecommendOrderByWithRelationInput = {
    id?: SortOrder
    placeName?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    openDays?: SortOrder
    mapUrl?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: TravelImageOrderByRelationAggregateInput
  }

  export type TravelRecommendWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelRecommendWhereInput | TravelRecommendWhereInput[]
    OR?: TravelRecommendWhereInput[]
    NOT?: TravelRecommendWhereInput | TravelRecommendWhereInput[]
    placeName?: StringFilter<"TravelRecommend"> | string
    description?: StringNullableFilter<"TravelRecommend"> | string | null
    location?: StringFilter<"TravelRecommend"> | string
    openTime?: DateTimeNullableFilter<"TravelRecommend"> | Date | string | null
    closeTime?: DateTimeNullableFilter<"TravelRecommend"> | Date | string | null
    openDays?: EnumWeekdayNullableListFilter<"TravelRecommend">
    mapUrl?: StringNullableFilter<"TravelRecommend"> | string | null
    coverImage?: StringNullableFilter<"TravelRecommend"> | string | null
    createdAt?: DateTimeFilter<"TravelRecommend"> | Date | string
    updatedAt?: DateTimeFilter<"TravelRecommend"> | Date | string
    images?: TravelImageListRelationFilter
  }, "id">

  export type TravelRecommendOrderByWithAggregationInput = {
    id?: SortOrder
    placeName?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrder
    openTime?: SortOrderInput | SortOrder
    closeTime?: SortOrderInput | SortOrder
    openDays?: SortOrder
    mapUrl?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TravelRecommendCountOrderByAggregateInput
    _max?: TravelRecommendMaxOrderByAggregateInput
    _min?: TravelRecommendMinOrderByAggregateInput
  }

  export type TravelRecommendScalarWhereWithAggregatesInput = {
    AND?: TravelRecommendScalarWhereWithAggregatesInput | TravelRecommendScalarWhereWithAggregatesInput[]
    OR?: TravelRecommendScalarWhereWithAggregatesInput[]
    NOT?: TravelRecommendScalarWhereWithAggregatesInput | TravelRecommendScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelRecommend"> | string
    placeName?: StringWithAggregatesFilter<"TravelRecommend"> | string
    description?: StringNullableWithAggregatesFilter<"TravelRecommend"> | string | null
    location?: StringWithAggregatesFilter<"TravelRecommend"> | string
    openTime?: DateTimeNullableWithAggregatesFilter<"TravelRecommend"> | Date | string | null
    closeTime?: DateTimeNullableWithAggregatesFilter<"TravelRecommend"> | Date | string | null
    openDays?: EnumWeekdayNullableListFilter<"TravelRecommend">
    mapUrl?: StringNullableWithAggregatesFilter<"TravelRecommend"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"TravelRecommend"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TravelRecommend"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TravelRecommend"> | Date | string
  }

  export type TravelImageWhereInput = {
    AND?: TravelImageWhereInput | TravelImageWhereInput[]
    OR?: TravelImageWhereInput[]
    NOT?: TravelImageWhereInput | TravelImageWhereInput[]
    id?: StringFilter<"TravelImage"> | string
    imageUrl?: StringFilter<"TravelImage"> | string
    order?: IntNullableFilter<"TravelImage"> | number | null
    travelId?: StringFilter<"TravelImage"> | string
    createdAt?: DateTimeFilter<"TravelImage"> | Date | string
    travel?: XOR<TravelRecommendScalarRelationFilter, TravelRecommendWhereInput>
  }

  export type TravelImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrderInput | SortOrder
    travelId?: SortOrder
    createdAt?: SortOrder
    travel?: TravelRecommendOrderByWithRelationInput
  }

  export type TravelImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TravelImageWhereInput | TravelImageWhereInput[]
    OR?: TravelImageWhereInput[]
    NOT?: TravelImageWhereInput | TravelImageWhereInput[]
    imageUrl?: StringFilter<"TravelImage"> | string
    order?: IntNullableFilter<"TravelImage"> | number | null
    travelId?: StringFilter<"TravelImage"> | string
    createdAt?: DateTimeFilter<"TravelImage"> | Date | string
    travel?: XOR<TravelRecommendScalarRelationFilter, TravelRecommendWhereInput>
  }, "id">

  export type TravelImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrderInput | SortOrder
    travelId?: SortOrder
    createdAt?: SortOrder
    _count?: TravelImageCountOrderByAggregateInput
    _avg?: TravelImageAvgOrderByAggregateInput
    _max?: TravelImageMaxOrderByAggregateInput
    _min?: TravelImageMinOrderByAggregateInput
    _sum?: TravelImageSumOrderByAggregateInput
  }

  export type TravelImageScalarWhereWithAggregatesInput = {
    AND?: TravelImageScalarWhereWithAggregatesInput | TravelImageScalarWhereWithAggregatesInput[]
    OR?: TravelImageScalarWhereWithAggregatesInput[]
    NOT?: TravelImageScalarWhereWithAggregatesInput | TravelImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TravelImage"> | string
    imageUrl?: StringWithAggregatesFilter<"TravelImage"> | string
    order?: IntNullableWithAggregatesFilter<"TravelImage"> | number | null
    travelId?: StringWithAggregatesFilter<"TravelImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TravelImage"> | Date | string
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    code?: StringNullableFilter<"Country"> | string | null
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    delegations?: DelegationListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delegations?: DelegationOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    delegations?: DelegationListRelationFilter
  }, "id" | "name" | "code">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    code?: StringNullableWithAggregatesFilter<"Country"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    shortName?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    delegations?: DelegationListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delegations?: DelegationOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    shortName?: StringNullableFilter<"Organization"> | string | null
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    delegations?: DelegationListRelationFilter
  }, "id" | "name">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    shortName?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type SiteVisitWhereInput = {
    AND?: SiteVisitWhereInput | SiteVisitWhereInput[]
    OR?: SiteVisitWhereInput[]
    NOT?: SiteVisitWhereInput | SiteVisitWhereInput[]
    id?: StringFilter<"SiteVisit"> | string
    ipHash?: StringNullableFilter<"SiteVisit"> | string | null
    userAgent?: StringNullableFilter<"SiteVisit"> | string | null
    path?: StringNullableFilter<"SiteVisit"> | string | null
    createdAt?: DateTimeFilter<"SiteVisit"> | Date | string
  }

  export type SiteVisitOrderByWithRelationInput = {
    id?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SiteVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteVisitWhereInput | SiteVisitWhereInput[]
    OR?: SiteVisitWhereInput[]
    NOT?: SiteVisitWhereInput | SiteVisitWhereInput[]
    ipHash?: StringNullableFilter<"SiteVisit"> | string | null
    userAgent?: StringNullableFilter<"SiteVisit"> | string | null
    path?: StringNullableFilter<"SiteVisit"> | string | null
    createdAt?: DateTimeFilter<"SiteVisit"> | Date | string
  }, "id">

  export type SiteVisitOrderByWithAggregationInput = {
    id?: SortOrder
    ipHash?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SiteVisitCountOrderByAggregateInput
    _max?: SiteVisitMaxOrderByAggregateInput
    _min?: SiteVisitMinOrderByAggregateInput
  }

  export type SiteVisitScalarWhereWithAggregatesInput = {
    AND?: SiteVisitScalarWhereWithAggregatesInput | SiteVisitScalarWhereWithAggregatesInput[]
    OR?: SiteVisitScalarWhereWithAggregatesInput[]
    NOT?: SiteVisitScalarWhereWithAggregatesInput | SiteVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteVisit"> | string
    ipHash?: StringNullableWithAggregatesFilter<"SiteVisit"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"SiteVisit"> | string | null
    path?: StringNullableWithAggregatesFilter<"SiteVisit"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SiteVisit"> | Date | string
  }

  export type DelegationCreateInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutDelegationsInput
    country?: CountryCreateNestedOneWithoutDelegationsInput
    activities?: ActivityDelegationCreateNestedManyWithoutDelegationInput
  }

  export type DelegationUncheckedCreateInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    organizationId?: string | null
    countryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityDelegationUncheckedCreateNestedManyWithoutDelegationInput
  }

  export type DelegationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutDelegationsNestedInput
    country?: CountryUpdateOneWithoutDelegationsNestedInput
    activities?: ActivityDelegationUpdateManyWithoutDelegationNestedInput
  }

  export type DelegationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityDelegationUncheckedUpdateManyWithoutDelegationNestedInput
  }

  export type DelegationCreateManyInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    organizationId?: string | null
    countryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DelegationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    location?: string | null
    capacity: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    location?: string | null
    capacity: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    location?: string | null
    capacity: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomCreateNestedOneWithoutActivitiesInput
    delegations?: ActivityDelegationCreateNestedManyWithoutActivityInput
    galleries?: GalleryCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: ActivityDelegationUncheckedCreateNestedManyWithoutActivityInput
    galleries?: GalleryUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutActivitiesNestedInput
    delegations?: ActivityDelegationUpdateManyWithoutActivityNestedInput
    galleries?: GalleryUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: ActivityDelegationUncheckedUpdateManyWithoutActivityNestedInput
    galleries?: GalleryUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationCreateInput = {
    registeredAt?: Date | string
    activity: ActivityCreateNestedOneWithoutDelegationsInput
    delegation: DelegationCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityDelegationUncheckedCreateInput = {
    activityId: string
    delegationId: string
    registeredAt?: Date | string
  }

  export type ActivityDelegationUpdateInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutDelegationsNestedInput
    delegation?: DelegationUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityDelegationUncheckedUpdateInput = {
    activityId?: StringFieldUpdateOperationsInput | string
    delegationId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationCreateManyInput = {
    activityId: string
    delegationId: string
    registeredAt?: Date | string
  }

  export type ActivityDelegationUpdateManyMutationInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationUncheckedUpdateManyInput = {
    activityId?: StringFieldUpdateOperationsInput | string
    delegationId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryCreateInput = {
    id?: string
    title?: string | null
    mediaUrl: string
    mediaType?: $Enums.MediaType
    visibility?: $Enums.Visibility
    description?: string | null
    createdAt?: Date | string
    activity: ActivityCreateNestedOneWithoutGalleriesInput
  }

  export type GalleryUncheckedCreateInput = {
    id?: string
    title?: string | null
    mediaUrl: string
    mediaType?: $Enums.MediaType
    visibility?: $Enums.Visibility
    description?: string | null
    activityId: string
    createdAt?: Date | string
  }

  export type GalleryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutGalleriesNestedInput
  }

  export type GalleryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryCreateManyInput = {
    id?: string
    title?: string | null
    mediaUrl: string
    mediaType?: $Enums.MediaType
    visibility?: $Enums.Visibility
    description?: string | null
    activityId: string
    createdAt?: Date | string
  }

  export type GalleryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    description?: NullableStringFieldUpdateOperationsInput | string | null
    activityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelRecommendCreateInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    starRating?: number | null
    contactInfo?: string | null
    coverImage?: string | null
    websiteUrl?: string | null
    mapUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HotelImageCreateNestedManyWithoutHotelInput
  }

  export type HotelRecommendUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    starRating?: number | null
    contactInfo?: string | null
    coverImage?: string | null
    websiteUrl?: string | null
    mapUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: HotelImageUncheckedCreateNestedManyWithoutHotelInput
  }

  export type HotelRecommendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HotelImageUpdateManyWithoutHotelNestedInput
  }

  export type HotelRecommendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: HotelImageUncheckedUpdateManyWithoutHotelNestedInput
  }

  export type HotelRecommendCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    starRating?: number | null
    contactInfo?: string | null
    coverImage?: string | null
    websiteUrl?: string | null
    mapUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelRecommendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelRecommendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageCreateInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
    hotel: HotelRecommendCreateNestedOneWithoutImagesInput
  }

  export type HotelImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    order?: number | null
    hotelId: string
    createdAt?: Date | string
  }

  export type HotelImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel?: HotelRecommendUpdateOneRequiredWithoutImagesNestedInput
  }

  export type HotelImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageCreateManyInput = {
    id?: string
    imageUrl: string
    order?: number | null
    hotelId: string
    createdAt?: Date | string
  }

  export type HotelImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hotelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelRecommendCreateInput = {
    id?: string
    placeName: string
    description?: string | null
    location: string
    openTime?: Date | string | null
    closeTime?: Date | string | null
    openDays?: TravelRecommendCreateopenDaysInput | $Enums.Weekday[]
    mapUrl?: string | null
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: TravelImageCreateNestedManyWithoutTravelInput
  }

  export type TravelRecommendUncheckedCreateInput = {
    id?: string
    placeName: string
    description?: string | null
    location: string
    openTime?: Date | string | null
    closeTime?: Date | string | null
    openDays?: TravelRecommendCreateopenDaysInput | $Enums.Weekday[]
    mapUrl?: string | null
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: TravelImageUncheckedCreateNestedManyWithoutTravelInput
  }

  export type TravelRecommendUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openDays?: TravelRecommendUpdateopenDaysInput | $Enums.Weekday[]
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TravelImageUpdateManyWithoutTravelNestedInput
  }

  export type TravelRecommendUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openDays?: TravelRecommendUpdateopenDaysInput | $Enums.Weekday[]
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: TravelImageUncheckedUpdateManyWithoutTravelNestedInput
  }

  export type TravelRecommendCreateManyInput = {
    id?: string
    placeName: string
    description?: string | null
    location: string
    openTime?: Date | string | null
    closeTime?: Date | string | null
    openDays?: TravelRecommendCreateopenDaysInput | $Enums.Weekday[]
    mapUrl?: string | null
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelRecommendUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openDays?: TravelRecommendUpdateopenDaysInput | $Enums.Weekday[]
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelRecommendUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openDays?: TravelRecommendUpdateopenDaysInput | $Enums.Weekday[]
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelImageCreateInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
    travel: TravelRecommendCreateNestedOneWithoutImagesInput
  }

  export type TravelImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    order?: number | null
    travelId: string
    createdAt?: Date | string
  }

  export type TravelImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travel?: TravelRecommendUpdateOneRequiredWithoutImagesNestedInput
  }

  export type TravelImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    travelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelImageCreateManyInput = {
    id?: string
    imageUrl: string
    order?: number | null
    travelId: string
    createdAt?: Date | string
  }

  export type TravelImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    travelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: DelegationCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: DelegationUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: DelegationUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: DelegationUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    shortName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: DelegationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    shortName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: DelegationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: DelegationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: DelegationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    shortName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitCreateInput = {
    id?: string
    ipHash?: string | null
    userAgent?: string | null
    path?: string | null
    createdAt?: Date | string
  }

  export type SiteVisitUncheckedCreateInput = {
    id?: string
    ipHash?: string | null
    userAgent?: string | null
    path?: string | null
    createdAt?: Date | string
  }

  export type SiteVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitCreateManyInput = {
    id?: string
    ipHash?: string | null
    userAgent?: string | null
    path?: string | null
    createdAt?: Date | string
  }

  export type SiteVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipHash?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type CountryNullableScalarRelationFilter = {
    is?: CountryWhereInput | null
    isNot?: CountryWhereInput | null
  }

  export type ActivityDelegationListRelationFilter = {
    every?: ActivityDelegationWhereInput
    some?: ActivityDelegationWhereInput
    none?: ActivityDelegationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ActivityDelegationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DelegationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    position?: SortOrder
    delegationCode?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DelegationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    position?: SortOrder
    delegationCode?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DelegationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    position?: SortOrder
    delegationCode?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    countryId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
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

  export type EnumActivityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityStatusFilter<$PrismaModel> | $Enums.ActivityStatus
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

  export type RoomNullableScalarRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type GalleryListRelationFilter = {
    every?: GalleryWhereInput
    some?: GalleryWhereInput
    none?: GalleryWhereInput
  }

  export type GalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    qrCode?: SortOrder
    docURL?: SortOrder
    allImageURL?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    registrationDeadline?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    qrCode?: SortOrder
    docURL?: SortOrder
    allImageURL?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    registrationDeadline?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    qrCode?: SortOrder
    docURL?: SortOrder
    allImageURL?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    registrationDeadline?: SortOrder
    roomId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumActivityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActivityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityStatusFilter<$PrismaModel>
    _max?: NestedEnumActivityStatusFilter<$PrismaModel>
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

  export type ActivityScalarRelationFilter = {
    is?: ActivityWhereInput
    isNot?: ActivityWhereInput
  }

  export type DelegationScalarRelationFilter = {
    is?: DelegationWhereInput
    isNot?: DelegationWhereInput
  }

  export type ActivityDelegationActivityIdDelegationIdCompoundUniqueInput = {
    activityId: string
    delegationId: string
  }

  export type ActivityDelegationCountOrderByAggregateInput = {
    activityId?: SortOrder
    delegationId?: SortOrder
    registeredAt?: SortOrder
  }

  export type ActivityDelegationMaxOrderByAggregateInput = {
    activityId?: SortOrder
    delegationId?: SortOrder
    registeredAt?: SortOrder
  }

  export type ActivityDelegationMinOrderByAggregateInput = {
    activityId?: SortOrder
    delegationId?: SortOrder
    registeredAt?: SortOrder
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    description?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    description?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    mediaUrl?: SortOrder
    mediaType?: SortOrder
    visibility?: SortOrder
    description?: SortOrder
    activityId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
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

  export type HotelImageListRelationFilter = {
    every?: HotelImageWhereInput
    some?: HotelImageWhereInput
    none?: HotelImageWhereInput
  }

  export type HotelImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelRecommendCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    starRating?: SortOrder
    contactInfo?: SortOrder
    coverImage?: SortOrder
    websiteUrl?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelRecommendAvgOrderByAggregateInput = {
    starRating?: SortOrder
  }

  export type HotelRecommendMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    starRating?: SortOrder
    contactInfo?: SortOrder
    coverImage?: SortOrder
    websiteUrl?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelRecommendMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    starRating?: SortOrder
    contactInfo?: SortOrder
    coverImage?: SortOrder
    websiteUrl?: SortOrder
    mapUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelRecommendSumOrderByAggregateInput = {
    starRating?: SortOrder
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

  export type HotelRecommendScalarRelationFilter = {
    is?: HotelRecommendWhereInput
    isNot?: HotelRecommendWhereInput
  }

  export type HotelImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type HotelImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    hotelId?: SortOrder
    createdAt?: SortOrder
  }

  export type HotelImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumWeekdayNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel> | null
    has?: $Enums.Weekday | EnumWeekdayFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Weekday[] | ListEnumWeekdayFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TravelImageListRelationFilter = {
    every?: TravelImageWhereInput
    some?: TravelImageWhereInput
    none?: TravelImageWhereInput
  }

  export type TravelImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TravelRecommendCountOrderByAggregateInput = {
    id?: SortOrder
    placeName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    openDays?: SortOrder
    mapUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelRecommendMaxOrderByAggregateInput = {
    id?: SortOrder
    placeName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    mapUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelRecommendMinOrderByAggregateInput = {
    id?: SortOrder
    placeName?: SortOrder
    description?: SortOrder
    location?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    mapUrl?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TravelRecommendScalarRelationFilter = {
    is?: TravelRecommendWhereInput
    isNot?: TravelRecommendWhereInput
  }

  export type TravelImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    travelId?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelImageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TravelImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    travelId?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    order?: SortOrder
    travelId?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelImageSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type DelegationListRelationFilter = {
    every?: DelegationWhereInput
    some?: DelegationWhereInput
    none?: DelegationWhereInput
  }

  export type DelegationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    shortName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteVisitCountOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    userAgent?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    userAgent?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type SiteVisitMinOrderByAggregateInput = {
    id?: SortOrder
    ipHash?: SortOrder
    userAgent?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutDelegationsInput = {
    create?: XOR<OrganizationCreateWithoutDelegationsInput, OrganizationUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDelegationsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutDelegationsInput = {
    create?: XOR<CountryCreateWithoutDelegationsInput, CountryUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutDelegationsInput
    connect?: CountryWhereUniqueInput
  }

  export type ActivityDelegationCreateNestedManyWithoutDelegationInput = {
    create?: XOR<ActivityDelegationCreateWithoutDelegationInput, ActivityDelegationUncheckedCreateWithoutDelegationInput> | ActivityDelegationCreateWithoutDelegationInput[] | ActivityDelegationUncheckedCreateWithoutDelegationInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutDelegationInput | ActivityDelegationCreateOrConnectWithoutDelegationInput[]
    createMany?: ActivityDelegationCreateManyDelegationInputEnvelope
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
  }

  export type ActivityDelegationUncheckedCreateNestedManyWithoutDelegationInput = {
    create?: XOR<ActivityDelegationCreateWithoutDelegationInput, ActivityDelegationUncheckedCreateWithoutDelegationInput> | ActivityDelegationCreateWithoutDelegationInput[] | ActivityDelegationUncheckedCreateWithoutDelegationInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutDelegationInput | ActivityDelegationCreateOrConnectWithoutDelegationInput[]
    createMany?: ActivityDelegationCreateManyDelegationInputEnvelope
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateOneWithoutDelegationsNestedInput = {
    create?: XOR<OrganizationCreateWithoutDelegationsInput, OrganizationUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutDelegationsInput
    upsert?: OrganizationUpsertWithoutDelegationsInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutDelegationsInput, OrganizationUpdateWithoutDelegationsInput>, OrganizationUncheckedUpdateWithoutDelegationsInput>
  }

  export type CountryUpdateOneWithoutDelegationsNestedInput = {
    create?: XOR<CountryCreateWithoutDelegationsInput, CountryUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutDelegationsInput
    upsert?: CountryUpsertWithoutDelegationsInput
    disconnect?: CountryWhereInput | boolean
    delete?: CountryWhereInput | boolean
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutDelegationsInput, CountryUpdateWithoutDelegationsInput>, CountryUncheckedUpdateWithoutDelegationsInput>
  }

  export type ActivityDelegationUpdateManyWithoutDelegationNestedInput = {
    create?: XOR<ActivityDelegationCreateWithoutDelegationInput, ActivityDelegationUncheckedCreateWithoutDelegationInput> | ActivityDelegationCreateWithoutDelegationInput[] | ActivityDelegationUncheckedCreateWithoutDelegationInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutDelegationInput | ActivityDelegationCreateOrConnectWithoutDelegationInput[]
    upsert?: ActivityDelegationUpsertWithWhereUniqueWithoutDelegationInput | ActivityDelegationUpsertWithWhereUniqueWithoutDelegationInput[]
    createMany?: ActivityDelegationCreateManyDelegationInputEnvelope
    set?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    disconnect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    delete?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    update?: ActivityDelegationUpdateWithWhereUniqueWithoutDelegationInput | ActivityDelegationUpdateWithWhereUniqueWithoutDelegationInput[]
    updateMany?: ActivityDelegationUpdateManyWithWhereWithoutDelegationInput | ActivityDelegationUpdateManyWithWhereWithoutDelegationInput[]
    deleteMany?: ActivityDelegationScalarWhereInput | ActivityDelegationScalarWhereInput[]
  }

  export type ActivityDelegationUncheckedUpdateManyWithoutDelegationNestedInput = {
    create?: XOR<ActivityDelegationCreateWithoutDelegationInput, ActivityDelegationUncheckedCreateWithoutDelegationInput> | ActivityDelegationCreateWithoutDelegationInput[] | ActivityDelegationUncheckedCreateWithoutDelegationInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutDelegationInput | ActivityDelegationCreateOrConnectWithoutDelegationInput[]
    upsert?: ActivityDelegationUpsertWithWhereUniqueWithoutDelegationInput | ActivityDelegationUpsertWithWhereUniqueWithoutDelegationInput[]
    createMany?: ActivityDelegationCreateManyDelegationInputEnvelope
    set?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    disconnect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    delete?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    update?: ActivityDelegationUpdateWithWhereUniqueWithoutDelegationInput | ActivityDelegationUpdateWithWhereUniqueWithoutDelegationInput[]
    updateMany?: ActivityDelegationUpdateManyWithWhereWithoutDelegationInput | ActivityDelegationUpdateManyWithWhereWithoutDelegationInput[]
    deleteMany?: ActivityDelegationScalarWhereInput | ActivityDelegationScalarWhereInput[]
  }

  export type ActivityCreateNestedManyWithoutRoomInput = {
    create?: XOR<ActivityCreateWithoutRoomInput, ActivityUncheckedCreateWithoutRoomInput> | ActivityCreateWithoutRoomInput[] | ActivityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRoomInput | ActivityCreateOrConnectWithoutRoomInput[]
    createMany?: ActivityCreateManyRoomInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ActivityCreateWithoutRoomInput, ActivityUncheckedCreateWithoutRoomInput> | ActivityCreateWithoutRoomInput[] | ActivityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRoomInput | ActivityCreateOrConnectWithoutRoomInput[]
    createMany?: ActivityCreateManyRoomInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActivityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ActivityCreateWithoutRoomInput, ActivityUncheckedCreateWithoutRoomInput> | ActivityCreateWithoutRoomInput[] | ActivityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRoomInput | ActivityCreateOrConnectWithoutRoomInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutRoomInput | ActivityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ActivityCreateManyRoomInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutRoomInput | ActivityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutRoomInput | ActivityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ActivityCreateWithoutRoomInput, ActivityUncheckedCreateWithoutRoomInput> | ActivityCreateWithoutRoomInput[] | ActivityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutRoomInput | ActivityCreateOrConnectWithoutRoomInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutRoomInput | ActivityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ActivityCreateManyRoomInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutRoomInput | ActivityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutRoomInput | ActivityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<RoomCreateWithoutActivitiesInput, RoomUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutActivitiesInput
    connect?: RoomWhereUniqueInput
  }

  export type ActivityDelegationCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDelegationCreateWithoutActivityInput, ActivityDelegationUncheckedCreateWithoutActivityInput> | ActivityDelegationCreateWithoutActivityInput[] | ActivityDelegationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutActivityInput | ActivityDelegationCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDelegationCreateManyActivityInputEnvelope
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
  }

  export type GalleryCreateNestedManyWithoutActivityInput = {
    create?: XOR<GalleryCreateWithoutActivityInput, GalleryUncheckedCreateWithoutActivityInput> | GalleryCreateWithoutActivityInput[] | GalleryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutActivityInput | GalleryCreateOrConnectWithoutActivityInput[]
    createMany?: GalleryCreateManyActivityInputEnvelope
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type ActivityDelegationUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ActivityDelegationCreateWithoutActivityInput, ActivityDelegationUncheckedCreateWithoutActivityInput> | ActivityDelegationCreateWithoutActivityInput[] | ActivityDelegationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutActivityInput | ActivityDelegationCreateOrConnectWithoutActivityInput[]
    createMany?: ActivityDelegationCreateManyActivityInputEnvelope
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
  }

  export type GalleryUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<GalleryCreateWithoutActivityInput, GalleryUncheckedCreateWithoutActivityInput> | GalleryCreateWithoutActivityInput[] | GalleryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutActivityInput | GalleryCreateOrConnectWithoutActivityInput[]
    createMany?: GalleryCreateManyActivityInputEnvelope
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type EnumActivityStatusFieldUpdateOperationsInput = {
    set?: $Enums.ActivityStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoomUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<RoomCreateWithoutActivitiesInput, RoomUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutActivitiesInput
    upsert?: RoomUpsertWithoutActivitiesInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutActivitiesInput, RoomUpdateWithoutActivitiesInput>, RoomUncheckedUpdateWithoutActivitiesInput>
  }

  export type ActivityDelegationUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDelegationCreateWithoutActivityInput, ActivityDelegationUncheckedCreateWithoutActivityInput> | ActivityDelegationCreateWithoutActivityInput[] | ActivityDelegationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutActivityInput | ActivityDelegationCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDelegationUpsertWithWhereUniqueWithoutActivityInput | ActivityDelegationUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDelegationCreateManyActivityInputEnvelope
    set?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    disconnect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    delete?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    update?: ActivityDelegationUpdateWithWhereUniqueWithoutActivityInput | ActivityDelegationUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDelegationUpdateManyWithWhereWithoutActivityInput | ActivityDelegationUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDelegationScalarWhereInput | ActivityDelegationScalarWhereInput[]
  }

  export type GalleryUpdateManyWithoutActivityNestedInput = {
    create?: XOR<GalleryCreateWithoutActivityInput, GalleryUncheckedCreateWithoutActivityInput> | GalleryCreateWithoutActivityInput[] | GalleryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutActivityInput | GalleryCreateOrConnectWithoutActivityInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutActivityInput | GalleryUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: GalleryCreateManyActivityInputEnvelope
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutActivityInput | GalleryUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutActivityInput | GalleryUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type ActivityDelegationUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ActivityDelegationCreateWithoutActivityInput, ActivityDelegationUncheckedCreateWithoutActivityInput> | ActivityDelegationCreateWithoutActivityInput[] | ActivityDelegationUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ActivityDelegationCreateOrConnectWithoutActivityInput | ActivityDelegationCreateOrConnectWithoutActivityInput[]
    upsert?: ActivityDelegationUpsertWithWhereUniqueWithoutActivityInput | ActivityDelegationUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ActivityDelegationCreateManyActivityInputEnvelope
    set?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    disconnect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    delete?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    connect?: ActivityDelegationWhereUniqueInput | ActivityDelegationWhereUniqueInput[]
    update?: ActivityDelegationUpdateWithWhereUniqueWithoutActivityInput | ActivityDelegationUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ActivityDelegationUpdateManyWithWhereWithoutActivityInput | ActivityDelegationUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ActivityDelegationScalarWhereInput | ActivityDelegationScalarWhereInput[]
  }

  export type GalleryUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<GalleryCreateWithoutActivityInput, GalleryUncheckedCreateWithoutActivityInput> | GalleryCreateWithoutActivityInput[] | GalleryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutActivityInput | GalleryCreateOrConnectWithoutActivityInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutActivityInput | GalleryUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: GalleryCreateManyActivityInputEnvelope
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutActivityInput | GalleryUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutActivityInput | GalleryUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type ActivityCreateNestedOneWithoutDelegationsInput = {
    create?: XOR<ActivityCreateWithoutDelegationsInput, ActivityUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutDelegationsInput
    connect?: ActivityWhereUniqueInput
  }

  export type DelegationCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<DelegationCreateWithoutActivitiesInput, DelegationUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DelegationCreateOrConnectWithoutActivitiesInput
    connect?: DelegationWhereUniqueInput
  }

  export type ActivityUpdateOneRequiredWithoutDelegationsNestedInput = {
    create?: XOR<ActivityCreateWithoutDelegationsInput, ActivityUncheckedCreateWithoutDelegationsInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutDelegationsInput
    upsert?: ActivityUpsertWithoutDelegationsInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutDelegationsInput, ActivityUpdateWithoutDelegationsInput>, ActivityUncheckedUpdateWithoutDelegationsInput>
  }

  export type DelegationUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<DelegationCreateWithoutActivitiesInput, DelegationUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DelegationCreateOrConnectWithoutActivitiesInput
    upsert?: DelegationUpsertWithoutActivitiesInput
    connect?: DelegationWhereUniqueInput
    update?: XOR<XOR<DelegationUpdateToOneWithWhereWithoutActivitiesInput, DelegationUpdateWithoutActivitiesInput>, DelegationUncheckedUpdateWithoutActivitiesInput>
  }

  export type ActivityCreateNestedOneWithoutGalleriesInput = {
    create?: XOR<ActivityCreateWithoutGalleriesInput, ActivityUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutGalleriesInput
    connect?: ActivityWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type ActivityUpdateOneRequiredWithoutGalleriesNestedInput = {
    create?: XOR<ActivityCreateWithoutGalleriesInput, ActivityUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: ActivityCreateOrConnectWithoutGalleriesInput
    upsert?: ActivityUpsertWithoutGalleriesInput
    connect?: ActivityWhereUniqueInput
    update?: XOR<XOR<ActivityUpdateToOneWithWhereWithoutGalleriesInput, ActivityUpdateWithoutGalleriesInput>, ActivityUncheckedUpdateWithoutGalleriesInput>
  }

  export type HotelImageCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
  }

  export type HotelImageUncheckedCreateNestedManyWithoutHotelInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HotelImageUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    upsert?: HotelImageUpsertWithWhereUniqueWithoutHotelInput | HotelImageUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    set?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    disconnect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    delete?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    update?: HotelImageUpdateWithWhereUniqueWithoutHotelInput | HotelImageUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelImageUpdateManyWithWhereWithoutHotelInput | HotelImageUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
  }

  export type HotelImageUncheckedUpdateManyWithoutHotelNestedInput = {
    create?: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput> | HotelImageCreateWithoutHotelInput[] | HotelImageUncheckedCreateWithoutHotelInput[]
    connectOrCreate?: HotelImageCreateOrConnectWithoutHotelInput | HotelImageCreateOrConnectWithoutHotelInput[]
    upsert?: HotelImageUpsertWithWhereUniqueWithoutHotelInput | HotelImageUpsertWithWhereUniqueWithoutHotelInput[]
    createMany?: HotelImageCreateManyHotelInputEnvelope
    set?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    disconnect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    delete?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    connect?: HotelImageWhereUniqueInput | HotelImageWhereUniqueInput[]
    update?: HotelImageUpdateWithWhereUniqueWithoutHotelInput | HotelImageUpdateWithWhereUniqueWithoutHotelInput[]
    updateMany?: HotelImageUpdateManyWithWhereWithoutHotelInput | HotelImageUpdateManyWithWhereWithoutHotelInput[]
    deleteMany?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
  }

  export type HotelRecommendCreateNestedOneWithoutImagesInput = {
    create?: XOR<HotelRecommendCreateWithoutImagesInput, HotelRecommendUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HotelRecommendCreateOrConnectWithoutImagesInput
    connect?: HotelRecommendWhereUniqueInput
  }

  export type HotelRecommendUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<HotelRecommendCreateWithoutImagesInput, HotelRecommendUncheckedCreateWithoutImagesInput>
    connectOrCreate?: HotelRecommendCreateOrConnectWithoutImagesInput
    upsert?: HotelRecommendUpsertWithoutImagesInput
    connect?: HotelRecommendWhereUniqueInput
    update?: XOR<XOR<HotelRecommendUpdateToOneWithWhereWithoutImagesInput, HotelRecommendUpdateWithoutImagesInput>, HotelRecommendUncheckedUpdateWithoutImagesInput>
  }

  export type TravelRecommendCreateopenDaysInput = {
    set: $Enums.Weekday[]
  }

  export type TravelImageCreateNestedManyWithoutTravelInput = {
    create?: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput> | TravelImageCreateWithoutTravelInput[] | TravelImageUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: TravelImageCreateOrConnectWithoutTravelInput | TravelImageCreateOrConnectWithoutTravelInput[]
    createMany?: TravelImageCreateManyTravelInputEnvelope
    connect?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
  }

  export type TravelImageUncheckedCreateNestedManyWithoutTravelInput = {
    create?: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput> | TravelImageCreateWithoutTravelInput[] | TravelImageUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: TravelImageCreateOrConnectWithoutTravelInput | TravelImageCreateOrConnectWithoutTravelInput[]
    createMany?: TravelImageCreateManyTravelInputEnvelope
    connect?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
  }

  export type TravelRecommendUpdateopenDaysInput = {
    set?: $Enums.Weekday[]
    push?: $Enums.Weekday | $Enums.Weekday[]
  }

  export type TravelImageUpdateManyWithoutTravelNestedInput = {
    create?: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput> | TravelImageCreateWithoutTravelInput[] | TravelImageUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: TravelImageCreateOrConnectWithoutTravelInput | TravelImageCreateOrConnectWithoutTravelInput[]
    upsert?: TravelImageUpsertWithWhereUniqueWithoutTravelInput | TravelImageUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: TravelImageCreateManyTravelInputEnvelope
    set?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    disconnect?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    delete?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    connect?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    update?: TravelImageUpdateWithWhereUniqueWithoutTravelInput | TravelImageUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: TravelImageUpdateManyWithWhereWithoutTravelInput | TravelImageUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: TravelImageScalarWhereInput | TravelImageScalarWhereInput[]
  }

  export type TravelImageUncheckedUpdateManyWithoutTravelNestedInput = {
    create?: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput> | TravelImageCreateWithoutTravelInput[] | TravelImageUncheckedCreateWithoutTravelInput[]
    connectOrCreate?: TravelImageCreateOrConnectWithoutTravelInput | TravelImageCreateOrConnectWithoutTravelInput[]
    upsert?: TravelImageUpsertWithWhereUniqueWithoutTravelInput | TravelImageUpsertWithWhereUniqueWithoutTravelInput[]
    createMany?: TravelImageCreateManyTravelInputEnvelope
    set?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    disconnect?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    delete?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    connect?: TravelImageWhereUniqueInput | TravelImageWhereUniqueInput[]
    update?: TravelImageUpdateWithWhereUniqueWithoutTravelInput | TravelImageUpdateWithWhereUniqueWithoutTravelInput[]
    updateMany?: TravelImageUpdateManyWithWhereWithoutTravelInput | TravelImageUpdateManyWithWhereWithoutTravelInput[]
    deleteMany?: TravelImageScalarWhereInput | TravelImageScalarWhereInput[]
  }

  export type TravelRecommendCreateNestedOneWithoutImagesInput = {
    create?: XOR<TravelRecommendCreateWithoutImagesInput, TravelRecommendUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TravelRecommendCreateOrConnectWithoutImagesInput
    connect?: TravelRecommendWhereUniqueInput
  }

  export type TravelRecommendUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<TravelRecommendCreateWithoutImagesInput, TravelRecommendUncheckedCreateWithoutImagesInput>
    connectOrCreate?: TravelRecommendCreateOrConnectWithoutImagesInput
    upsert?: TravelRecommendUpsertWithoutImagesInput
    connect?: TravelRecommendWhereUniqueInput
    update?: XOR<XOR<TravelRecommendUpdateToOneWithWhereWithoutImagesInput, TravelRecommendUpdateWithoutImagesInput>, TravelRecommendUncheckedUpdateWithoutImagesInput>
  }

  export type DelegationCreateNestedManyWithoutCountryInput = {
    create?: XOR<DelegationCreateWithoutCountryInput, DelegationUncheckedCreateWithoutCountryInput> | DelegationCreateWithoutCountryInput[] | DelegationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutCountryInput | DelegationCreateOrConnectWithoutCountryInput[]
    createMany?: DelegationCreateManyCountryInputEnvelope
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
  }

  export type DelegationUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<DelegationCreateWithoutCountryInput, DelegationUncheckedCreateWithoutCountryInput> | DelegationCreateWithoutCountryInput[] | DelegationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutCountryInput | DelegationCreateOrConnectWithoutCountryInput[]
    createMany?: DelegationCreateManyCountryInputEnvelope
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
  }

  export type DelegationUpdateManyWithoutCountryNestedInput = {
    create?: XOR<DelegationCreateWithoutCountryInput, DelegationUncheckedCreateWithoutCountryInput> | DelegationCreateWithoutCountryInput[] | DelegationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutCountryInput | DelegationCreateOrConnectWithoutCountryInput[]
    upsert?: DelegationUpsertWithWhereUniqueWithoutCountryInput | DelegationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: DelegationCreateManyCountryInputEnvelope
    set?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    disconnect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    delete?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    update?: DelegationUpdateWithWhereUniqueWithoutCountryInput | DelegationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: DelegationUpdateManyWithWhereWithoutCountryInput | DelegationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: DelegationScalarWhereInput | DelegationScalarWhereInput[]
  }

  export type DelegationUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<DelegationCreateWithoutCountryInput, DelegationUncheckedCreateWithoutCountryInput> | DelegationCreateWithoutCountryInput[] | DelegationUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutCountryInput | DelegationCreateOrConnectWithoutCountryInput[]
    upsert?: DelegationUpsertWithWhereUniqueWithoutCountryInput | DelegationUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: DelegationCreateManyCountryInputEnvelope
    set?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    disconnect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    delete?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    update?: DelegationUpdateWithWhereUniqueWithoutCountryInput | DelegationUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: DelegationUpdateManyWithWhereWithoutCountryInput | DelegationUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: DelegationScalarWhereInput | DelegationScalarWhereInput[]
  }

  export type DelegationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DelegationCreateWithoutOrganizationInput, DelegationUncheckedCreateWithoutOrganizationInput> | DelegationCreateWithoutOrganizationInput[] | DelegationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutOrganizationInput | DelegationCreateOrConnectWithoutOrganizationInput[]
    createMany?: DelegationCreateManyOrganizationInputEnvelope
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
  }

  export type DelegationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<DelegationCreateWithoutOrganizationInput, DelegationUncheckedCreateWithoutOrganizationInput> | DelegationCreateWithoutOrganizationInput[] | DelegationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutOrganizationInput | DelegationCreateOrConnectWithoutOrganizationInput[]
    createMany?: DelegationCreateManyOrganizationInputEnvelope
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
  }

  export type DelegationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DelegationCreateWithoutOrganizationInput, DelegationUncheckedCreateWithoutOrganizationInput> | DelegationCreateWithoutOrganizationInput[] | DelegationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutOrganizationInput | DelegationCreateOrConnectWithoutOrganizationInput[]
    upsert?: DelegationUpsertWithWhereUniqueWithoutOrganizationInput | DelegationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DelegationCreateManyOrganizationInputEnvelope
    set?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    disconnect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    delete?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    update?: DelegationUpdateWithWhereUniqueWithoutOrganizationInput | DelegationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DelegationUpdateManyWithWhereWithoutOrganizationInput | DelegationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DelegationScalarWhereInput | DelegationScalarWhereInput[]
  }

  export type DelegationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<DelegationCreateWithoutOrganizationInput, DelegationUncheckedCreateWithoutOrganizationInput> | DelegationCreateWithoutOrganizationInput[] | DelegationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: DelegationCreateOrConnectWithoutOrganizationInput | DelegationCreateOrConnectWithoutOrganizationInput[]
    upsert?: DelegationUpsertWithWhereUniqueWithoutOrganizationInput | DelegationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: DelegationCreateManyOrganizationInputEnvelope
    set?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    disconnect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    delete?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    connect?: DelegationWhereUniqueInput | DelegationWhereUniqueInput[]
    update?: DelegationUpdateWithWhereUniqueWithoutOrganizationInput | DelegationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: DelegationUpdateManyWithWhereWithoutOrganizationInput | DelegationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: DelegationScalarWhereInput | DelegationScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumActivityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityStatusFilter<$PrismaModel> | $Enums.ActivityStatus
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

  export type NestedEnumActivityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityStatus | EnumActivityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityStatus[] | ListEnumActivityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActivityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityStatusFilter<$PrismaModel>
    _max?: NestedEnumActivityStatusFilter<$PrismaModel>
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

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
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

  export type OrganizationCreateWithoutDelegationsInput = {
    id?: string
    name: string
    shortName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutDelegationsInput = {
    id?: string
    name: string
    shortName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutDelegationsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutDelegationsInput, OrganizationUncheckedCreateWithoutDelegationsInput>
  }

  export type CountryCreateWithoutDelegationsInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUncheckedCreateWithoutDelegationsInput = {
    id?: string
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryCreateOrConnectWithoutDelegationsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutDelegationsInput, CountryUncheckedCreateWithoutDelegationsInput>
  }

  export type ActivityDelegationCreateWithoutDelegationInput = {
    registeredAt?: Date | string
    activity: ActivityCreateNestedOneWithoutDelegationsInput
  }

  export type ActivityDelegationUncheckedCreateWithoutDelegationInput = {
    activityId: string
    registeredAt?: Date | string
  }

  export type ActivityDelegationCreateOrConnectWithoutDelegationInput = {
    where: ActivityDelegationWhereUniqueInput
    create: XOR<ActivityDelegationCreateWithoutDelegationInput, ActivityDelegationUncheckedCreateWithoutDelegationInput>
  }

  export type ActivityDelegationCreateManyDelegationInputEnvelope = {
    data: ActivityDelegationCreateManyDelegationInput | ActivityDelegationCreateManyDelegationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutDelegationsInput = {
    update: XOR<OrganizationUpdateWithoutDelegationsInput, OrganizationUncheckedUpdateWithoutDelegationsInput>
    create: XOR<OrganizationCreateWithoutDelegationsInput, OrganizationUncheckedCreateWithoutDelegationsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutDelegationsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutDelegationsInput, OrganizationUncheckedUpdateWithoutDelegationsInput>
  }

  export type OrganizationUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shortName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUpsertWithoutDelegationsInput = {
    update: XOR<CountryUpdateWithoutDelegationsInput, CountryUncheckedUpdateWithoutDelegationsInput>
    create: XOR<CountryCreateWithoutDelegationsInput, CountryUncheckedCreateWithoutDelegationsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutDelegationsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutDelegationsInput, CountryUncheckedUpdateWithoutDelegationsInput>
  }

  export type CountryUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationUpsertWithWhereUniqueWithoutDelegationInput = {
    where: ActivityDelegationWhereUniqueInput
    update: XOR<ActivityDelegationUpdateWithoutDelegationInput, ActivityDelegationUncheckedUpdateWithoutDelegationInput>
    create: XOR<ActivityDelegationCreateWithoutDelegationInput, ActivityDelegationUncheckedCreateWithoutDelegationInput>
  }

  export type ActivityDelegationUpdateWithWhereUniqueWithoutDelegationInput = {
    where: ActivityDelegationWhereUniqueInput
    data: XOR<ActivityDelegationUpdateWithoutDelegationInput, ActivityDelegationUncheckedUpdateWithoutDelegationInput>
  }

  export type ActivityDelegationUpdateManyWithWhereWithoutDelegationInput = {
    where: ActivityDelegationScalarWhereInput
    data: XOR<ActivityDelegationUpdateManyMutationInput, ActivityDelegationUncheckedUpdateManyWithoutDelegationInput>
  }

  export type ActivityDelegationScalarWhereInput = {
    AND?: ActivityDelegationScalarWhereInput | ActivityDelegationScalarWhereInput[]
    OR?: ActivityDelegationScalarWhereInput[]
    NOT?: ActivityDelegationScalarWhereInput | ActivityDelegationScalarWhereInput[]
    activityId?: StringFilter<"ActivityDelegation"> | string
    delegationId?: StringFilter<"ActivityDelegation"> | string
    registeredAt?: DateTimeFilter<"ActivityDelegation"> | Date | string
  }

  export type ActivityCreateWithoutRoomInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: ActivityDelegationCreateNestedManyWithoutActivityInput
    galleries?: GalleryCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: ActivityDelegationUncheckedCreateNestedManyWithoutActivityInput
    galleries?: GalleryUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutRoomInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutRoomInput, ActivityUncheckedCreateWithoutRoomInput>
  }

  export type ActivityCreateManyRoomInputEnvelope = {
    data: ActivityCreateManyRoomInput | ActivityCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ActivityUpsertWithWhereUniqueWithoutRoomInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutRoomInput, ActivityUncheckedUpdateWithoutRoomInput>
    create: XOR<ActivityCreateWithoutRoomInput, ActivityUncheckedCreateWithoutRoomInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutRoomInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutRoomInput, ActivityUncheckedUpdateWithoutRoomInput>
  }

  export type ActivityUpdateManyWithWhereWithoutRoomInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutRoomInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    name?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    qrCode?: StringNullableFilter<"Activity"> | string | null
    docURL?: StringNullableFilter<"Activity"> | string | null
    allImageURL?: StringNullableFilter<"Activity"> | string | null
    date?: DateTimeFilter<"Activity"> | Date | string
    startTime?: DateTimeFilter<"Activity"> | Date | string
    endTime?: DateTimeFilter<"Activity"> | Date | string
    status?: EnumActivityStatusFilter<"Activity"> | $Enums.ActivityStatus
    registrationDeadline?: DateTimeNullableFilter<"Activity"> | Date | string | null
    roomId?: StringNullableFilter<"Activity"> | string | null
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    updatedAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type RoomCreateWithoutActivitiesInput = {
    id?: string
    name: string
    location?: string | null
    capacity: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    location?: string | null
    capacity: number
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutActivitiesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutActivitiesInput, RoomUncheckedCreateWithoutActivitiesInput>
  }

  export type ActivityDelegationCreateWithoutActivityInput = {
    registeredAt?: Date | string
    delegation: DelegationCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityDelegationUncheckedCreateWithoutActivityInput = {
    delegationId: string
    registeredAt?: Date | string
  }

  export type ActivityDelegationCreateOrConnectWithoutActivityInput = {
    where: ActivityDelegationWhereUniqueInput
    create: XOR<ActivityDelegationCreateWithoutActivityInput, ActivityDelegationUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDelegationCreateManyActivityInputEnvelope = {
    data: ActivityDelegationCreateManyActivityInput | ActivityDelegationCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type GalleryCreateWithoutActivityInput = {
    id?: string
    title?: string | null
    mediaUrl: string
    mediaType?: $Enums.MediaType
    visibility?: $Enums.Visibility
    description?: string | null
    createdAt?: Date | string
  }

  export type GalleryUncheckedCreateWithoutActivityInput = {
    id?: string
    title?: string | null
    mediaUrl: string
    mediaType?: $Enums.MediaType
    visibility?: $Enums.Visibility
    description?: string | null
    createdAt?: Date | string
  }

  export type GalleryCreateOrConnectWithoutActivityInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutActivityInput, GalleryUncheckedCreateWithoutActivityInput>
  }

  export type GalleryCreateManyActivityInputEnvelope = {
    data: GalleryCreateManyActivityInput | GalleryCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutActivitiesInput = {
    update: XOR<RoomUpdateWithoutActivitiesInput, RoomUncheckedUpdateWithoutActivitiesInput>
    create: XOR<RoomCreateWithoutActivitiesInput, RoomUncheckedCreateWithoutActivitiesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutActivitiesInput, RoomUncheckedUpdateWithoutActivitiesInput>
  }

  export type RoomUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationUpsertWithWhereUniqueWithoutActivityInput = {
    where: ActivityDelegationWhereUniqueInput
    update: XOR<ActivityDelegationUpdateWithoutActivityInput, ActivityDelegationUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityDelegationCreateWithoutActivityInput, ActivityDelegationUncheckedCreateWithoutActivityInput>
  }

  export type ActivityDelegationUpdateWithWhereUniqueWithoutActivityInput = {
    where: ActivityDelegationWhereUniqueInput
    data: XOR<ActivityDelegationUpdateWithoutActivityInput, ActivityDelegationUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityDelegationUpdateManyWithWhereWithoutActivityInput = {
    where: ActivityDelegationScalarWhereInput
    data: XOR<ActivityDelegationUpdateManyMutationInput, ActivityDelegationUncheckedUpdateManyWithoutActivityInput>
  }

  export type GalleryUpsertWithWhereUniqueWithoutActivityInput = {
    where: GalleryWhereUniqueInput
    update: XOR<GalleryUpdateWithoutActivityInput, GalleryUncheckedUpdateWithoutActivityInput>
    create: XOR<GalleryCreateWithoutActivityInput, GalleryUncheckedCreateWithoutActivityInput>
  }

  export type GalleryUpdateWithWhereUniqueWithoutActivityInput = {
    where: GalleryWhereUniqueInput
    data: XOR<GalleryUpdateWithoutActivityInput, GalleryUncheckedUpdateWithoutActivityInput>
  }

  export type GalleryUpdateManyWithWhereWithoutActivityInput = {
    where: GalleryScalarWhereInput
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyWithoutActivityInput>
  }

  export type GalleryScalarWhereInput = {
    AND?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    OR?: GalleryScalarWhereInput[]
    NOT?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    id?: StringFilter<"Gallery"> | string
    title?: StringNullableFilter<"Gallery"> | string | null
    mediaUrl?: StringFilter<"Gallery"> | string
    mediaType?: EnumMediaTypeFilter<"Gallery"> | $Enums.MediaType
    visibility?: EnumVisibilityFilter<"Gallery"> | $Enums.Visibility
    description?: StringNullableFilter<"Gallery"> | string | null
    activityId?: StringFilter<"Gallery"> | string
    createdAt?: DateTimeFilter<"Gallery"> | Date | string
  }

  export type ActivityCreateWithoutDelegationsInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomCreateNestedOneWithoutActivitiesInput
    galleries?: GalleryCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutDelegationsInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    galleries?: GalleryUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutDelegationsInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutDelegationsInput, ActivityUncheckedCreateWithoutDelegationsInput>
  }

  export type DelegationCreateWithoutActivitiesInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutDelegationsInput
    country?: CountryCreateNestedOneWithoutDelegationsInput
  }

  export type DelegationUncheckedCreateWithoutActivitiesInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    organizationId?: string | null
    countryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DelegationCreateOrConnectWithoutActivitiesInput = {
    where: DelegationWhereUniqueInput
    create: XOR<DelegationCreateWithoutActivitiesInput, DelegationUncheckedCreateWithoutActivitiesInput>
  }

  export type ActivityUpsertWithoutDelegationsInput = {
    update: XOR<ActivityUpdateWithoutDelegationsInput, ActivityUncheckedUpdateWithoutDelegationsInput>
    create: XOR<ActivityCreateWithoutDelegationsInput, ActivityUncheckedCreateWithoutDelegationsInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutDelegationsInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutDelegationsInput, ActivityUncheckedUpdateWithoutDelegationsInput>
  }

  export type ActivityUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutActivitiesNestedInput
    galleries?: GalleryUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutDelegationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    galleries?: GalleryUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type DelegationUpsertWithoutActivitiesInput = {
    update: XOR<DelegationUpdateWithoutActivitiesInput, DelegationUncheckedUpdateWithoutActivitiesInput>
    create: XOR<DelegationCreateWithoutActivitiesInput, DelegationUncheckedCreateWithoutActivitiesInput>
    where?: DelegationWhereInput
  }

  export type DelegationUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: DelegationWhereInput
    data: XOR<DelegationUpdateWithoutActivitiesInput, DelegationUncheckedUpdateWithoutActivitiesInput>
  }

  export type DelegationUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutDelegationsNestedInput
    country?: CountryUpdateOneWithoutDelegationsNestedInput
  }

  export type DelegationUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateWithoutGalleriesInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room?: RoomCreateNestedOneWithoutActivitiesInput
    delegations?: ActivityDelegationCreateNestedManyWithoutActivityInput
  }

  export type ActivityUncheckedCreateWithoutGalleriesInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    roomId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    delegations?: ActivityDelegationUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivityCreateOrConnectWithoutGalleriesInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutGalleriesInput, ActivityUncheckedCreateWithoutGalleriesInput>
  }

  export type ActivityUpsertWithoutGalleriesInput = {
    update: XOR<ActivityUpdateWithoutGalleriesInput, ActivityUncheckedUpdateWithoutGalleriesInput>
    create: XOR<ActivityCreateWithoutGalleriesInput, ActivityUncheckedCreateWithoutGalleriesInput>
    where?: ActivityWhereInput
  }

  export type ActivityUpdateToOneWithWhereWithoutGalleriesInput = {
    where?: ActivityWhereInput
    data: XOR<ActivityUpdateWithoutGalleriesInput, ActivityUncheckedUpdateWithoutGalleriesInput>
  }

  export type ActivityUpdateWithoutGalleriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneWithoutActivitiesNestedInput
    delegations?: ActivityDelegationUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutGalleriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: ActivityDelegationUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type HotelImageCreateWithoutHotelInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
  }

  export type HotelImageUncheckedCreateWithoutHotelInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
  }

  export type HotelImageCreateOrConnectWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    create: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput>
  }

  export type HotelImageCreateManyHotelInputEnvelope = {
    data: HotelImageCreateManyHotelInput | HotelImageCreateManyHotelInput[]
    skipDuplicates?: boolean
  }

  export type HotelImageUpsertWithWhereUniqueWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    update: XOR<HotelImageUpdateWithoutHotelInput, HotelImageUncheckedUpdateWithoutHotelInput>
    create: XOR<HotelImageCreateWithoutHotelInput, HotelImageUncheckedCreateWithoutHotelInput>
  }

  export type HotelImageUpdateWithWhereUniqueWithoutHotelInput = {
    where: HotelImageWhereUniqueInput
    data: XOR<HotelImageUpdateWithoutHotelInput, HotelImageUncheckedUpdateWithoutHotelInput>
  }

  export type HotelImageUpdateManyWithWhereWithoutHotelInput = {
    where: HotelImageScalarWhereInput
    data: XOR<HotelImageUpdateManyMutationInput, HotelImageUncheckedUpdateManyWithoutHotelInput>
  }

  export type HotelImageScalarWhereInput = {
    AND?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
    OR?: HotelImageScalarWhereInput[]
    NOT?: HotelImageScalarWhereInput | HotelImageScalarWhereInput[]
    id?: StringFilter<"HotelImage"> | string
    imageUrl?: StringFilter<"HotelImage"> | string
    order?: IntNullableFilter<"HotelImage"> | number | null
    hotelId?: StringFilter<"HotelImage"> | string
    createdAt?: DateTimeFilter<"HotelImage"> | Date | string
  }

  export type HotelRecommendCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    starRating?: number | null
    contactInfo?: string | null
    coverImage?: string | null
    websiteUrl?: string | null
    mapUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelRecommendUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    starRating?: number | null
    contactInfo?: string | null
    coverImage?: string | null
    websiteUrl?: string | null
    mapUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelRecommendCreateOrConnectWithoutImagesInput = {
    where: HotelRecommendWhereUniqueInput
    create: XOR<HotelRecommendCreateWithoutImagesInput, HotelRecommendUncheckedCreateWithoutImagesInput>
  }

  export type HotelRecommendUpsertWithoutImagesInput = {
    update: XOR<HotelRecommendUpdateWithoutImagesInput, HotelRecommendUncheckedUpdateWithoutImagesInput>
    create: XOR<HotelRecommendCreateWithoutImagesInput, HotelRecommendUncheckedCreateWithoutImagesInput>
    where?: HotelRecommendWhereInput
  }

  export type HotelRecommendUpdateToOneWithWhereWithoutImagesInput = {
    where?: HotelRecommendWhereInput
    data: XOR<HotelRecommendUpdateWithoutImagesInput, HotelRecommendUncheckedUpdateWithoutImagesInput>
  }

  export type HotelRecommendUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelRecommendUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    starRating?: NullableIntFieldUpdateOperationsInput | number | null
    contactInfo?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelImageCreateWithoutTravelInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
  }

  export type TravelImageUncheckedCreateWithoutTravelInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
  }

  export type TravelImageCreateOrConnectWithoutTravelInput = {
    where: TravelImageWhereUniqueInput
    create: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput>
  }

  export type TravelImageCreateManyTravelInputEnvelope = {
    data: TravelImageCreateManyTravelInput | TravelImageCreateManyTravelInput[]
    skipDuplicates?: boolean
  }

  export type TravelImageUpsertWithWhereUniqueWithoutTravelInput = {
    where: TravelImageWhereUniqueInput
    update: XOR<TravelImageUpdateWithoutTravelInput, TravelImageUncheckedUpdateWithoutTravelInput>
    create: XOR<TravelImageCreateWithoutTravelInput, TravelImageUncheckedCreateWithoutTravelInput>
  }

  export type TravelImageUpdateWithWhereUniqueWithoutTravelInput = {
    where: TravelImageWhereUniqueInput
    data: XOR<TravelImageUpdateWithoutTravelInput, TravelImageUncheckedUpdateWithoutTravelInput>
  }

  export type TravelImageUpdateManyWithWhereWithoutTravelInput = {
    where: TravelImageScalarWhereInput
    data: XOR<TravelImageUpdateManyMutationInput, TravelImageUncheckedUpdateManyWithoutTravelInput>
  }

  export type TravelImageScalarWhereInput = {
    AND?: TravelImageScalarWhereInput | TravelImageScalarWhereInput[]
    OR?: TravelImageScalarWhereInput[]
    NOT?: TravelImageScalarWhereInput | TravelImageScalarWhereInput[]
    id?: StringFilter<"TravelImage"> | string
    imageUrl?: StringFilter<"TravelImage"> | string
    order?: IntNullableFilter<"TravelImage"> | number | null
    travelId?: StringFilter<"TravelImage"> | string
    createdAt?: DateTimeFilter<"TravelImage"> | Date | string
  }

  export type TravelRecommendCreateWithoutImagesInput = {
    id?: string
    placeName: string
    description?: string | null
    location: string
    openTime?: Date | string | null
    closeTime?: Date | string | null
    openDays?: TravelRecommendCreateopenDaysInput | $Enums.Weekday[]
    mapUrl?: string | null
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelRecommendUncheckedCreateWithoutImagesInput = {
    id?: string
    placeName: string
    description?: string | null
    location: string
    openTime?: Date | string | null
    closeTime?: Date | string | null
    openDays?: TravelRecommendCreateopenDaysInput | $Enums.Weekday[]
    mapUrl?: string | null
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TravelRecommendCreateOrConnectWithoutImagesInput = {
    where: TravelRecommendWhereUniqueInput
    create: XOR<TravelRecommendCreateWithoutImagesInput, TravelRecommendUncheckedCreateWithoutImagesInput>
  }

  export type TravelRecommendUpsertWithoutImagesInput = {
    update: XOR<TravelRecommendUpdateWithoutImagesInput, TravelRecommendUncheckedUpdateWithoutImagesInput>
    create: XOR<TravelRecommendCreateWithoutImagesInput, TravelRecommendUncheckedCreateWithoutImagesInput>
    where?: TravelRecommendWhereInput
  }

  export type TravelRecommendUpdateToOneWithWhereWithoutImagesInput = {
    where?: TravelRecommendWhereInput
    data: XOR<TravelRecommendUpdateWithoutImagesInput, TravelRecommendUncheckedUpdateWithoutImagesInput>
  }

  export type TravelRecommendUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openDays?: TravelRecommendUpdateopenDaysInput | $Enums.Weekday[]
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelRecommendUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    openTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closeTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openDays?: TravelRecommendUpdateopenDaysInput | $Enums.Weekday[]
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegationCreateWithoutCountryInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutDelegationsInput
    activities?: ActivityDelegationCreateNestedManyWithoutDelegationInput
  }

  export type DelegationUncheckedCreateWithoutCountryInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityDelegationUncheckedCreateNestedManyWithoutDelegationInput
  }

  export type DelegationCreateOrConnectWithoutCountryInput = {
    where: DelegationWhereUniqueInput
    create: XOR<DelegationCreateWithoutCountryInput, DelegationUncheckedCreateWithoutCountryInput>
  }

  export type DelegationCreateManyCountryInputEnvelope = {
    data: DelegationCreateManyCountryInput | DelegationCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type DelegationUpsertWithWhereUniqueWithoutCountryInput = {
    where: DelegationWhereUniqueInput
    update: XOR<DelegationUpdateWithoutCountryInput, DelegationUncheckedUpdateWithoutCountryInput>
    create: XOR<DelegationCreateWithoutCountryInput, DelegationUncheckedCreateWithoutCountryInput>
  }

  export type DelegationUpdateWithWhereUniqueWithoutCountryInput = {
    where: DelegationWhereUniqueInput
    data: XOR<DelegationUpdateWithoutCountryInput, DelegationUncheckedUpdateWithoutCountryInput>
  }

  export type DelegationUpdateManyWithWhereWithoutCountryInput = {
    where: DelegationScalarWhereInput
    data: XOR<DelegationUpdateManyMutationInput, DelegationUncheckedUpdateManyWithoutCountryInput>
  }

  export type DelegationScalarWhereInput = {
    AND?: DelegationScalarWhereInput | DelegationScalarWhereInput[]
    OR?: DelegationScalarWhereInput[]
    NOT?: DelegationScalarWhereInput | DelegationScalarWhereInput[]
    id?: StringFilter<"Delegation"> | string
    title?: StringNullableFilter<"Delegation"> | string | null
    firstName?: StringFilter<"Delegation"> | string
    lastName?: StringFilter<"Delegation"> | string
    email?: StringFilter<"Delegation"> | string
    password?: StringNullableFilter<"Delegation"> | string | null
    phoneNumber?: StringNullableFilter<"Delegation"> | string | null
    position?: StringNullableFilter<"Delegation"> | string | null
    delegationCode?: StringNullableFilter<"Delegation"> | string | null
    role?: EnumRoleFilter<"Delegation"> | $Enums.Role
    organizationId?: StringNullableFilter<"Delegation"> | string | null
    countryId?: StringNullableFilter<"Delegation"> | string | null
    createdAt?: DateTimeFilter<"Delegation"> | Date | string
    updatedAt?: DateTimeFilter<"Delegation"> | Date | string
  }

  export type DelegationCreateWithoutOrganizationInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: CountryCreateNestedOneWithoutDelegationsInput
    activities?: ActivityDelegationCreateNestedManyWithoutDelegationInput
  }

  export type DelegationUncheckedCreateWithoutOrganizationInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    countryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityDelegationUncheckedCreateNestedManyWithoutDelegationInput
  }

  export type DelegationCreateOrConnectWithoutOrganizationInput = {
    where: DelegationWhereUniqueInput
    create: XOR<DelegationCreateWithoutOrganizationInput, DelegationUncheckedCreateWithoutOrganizationInput>
  }

  export type DelegationCreateManyOrganizationInputEnvelope = {
    data: DelegationCreateManyOrganizationInput | DelegationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type DelegationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: DelegationWhereUniqueInput
    update: XOR<DelegationUpdateWithoutOrganizationInput, DelegationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<DelegationCreateWithoutOrganizationInput, DelegationUncheckedCreateWithoutOrganizationInput>
  }

  export type DelegationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: DelegationWhereUniqueInput
    data: XOR<DelegationUpdateWithoutOrganizationInput, DelegationUncheckedUpdateWithoutOrganizationInput>
  }

  export type DelegationUpdateManyWithWhereWithoutOrganizationInput = {
    where: DelegationScalarWhereInput
    data: XOR<DelegationUpdateManyMutationInput, DelegationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ActivityDelegationCreateManyDelegationInput = {
    activityId: string
    registeredAt?: Date | string
  }

  export type ActivityDelegationUpdateWithoutDelegationInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ActivityUpdateOneRequiredWithoutDelegationsNestedInput
  }

  export type ActivityDelegationUncheckedUpdateWithoutDelegationInput = {
    activityId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationUncheckedUpdateManyWithoutDelegationInput = {
    activityId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyRoomInput = {
    id?: string
    name: string
    description?: string | null
    qrCode?: string | null
    docURL?: string | null
    allImageURL?: string | null
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.ActivityStatus
    registrationDeadline?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: ActivityDelegationUpdateManyWithoutActivityNestedInput
    galleries?: GalleryUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegations?: ActivityDelegationUncheckedUpdateManyWithoutActivityNestedInput
    galleries?: GalleryUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    docURL?: NullableStringFieldUpdateOperationsInput | string | null
    allImageURL?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumActivityStatusFieldUpdateOperationsInput | $Enums.ActivityStatus
    registrationDeadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationCreateManyActivityInput = {
    delegationId: string
    registeredAt?: Date | string
  }

  export type GalleryCreateManyActivityInput = {
    id?: string
    title?: string | null
    mediaUrl: string
    mediaType?: $Enums.MediaType
    visibility?: $Enums.Visibility
    description?: string | null
    createdAt?: Date | string
  }

  export type ActivityDelegationUpdateWithoutActivityInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegation?: DelegationUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityDelegationUncheckedUpdateWithoutActivityInput = {
    delegationId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityDelegationUncheckedUpdateManyWithoutActivityInput = {
    delegationId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageCreateManyHotelInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
  }

  export type HotelImageUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageUncheckedUpdateWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelImageUncheckedUpdateManyWithoutHotelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelImageCreateManyTravelInput = {
    id?: string
    imageUrl: string
    order?: number | null
    createdAt?: Date | string
  }

  export type TravelImageUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelImageUncheckedUpdateWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelImageUncheckedUpdateManyWithoutTravelInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    order?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegationCreateManyCountryInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    organizationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DelegationUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutDelegationsNestedInput
    activities?: ActivityDelegationUpdateManyWithoutDelegationNestedInput
  }

  export type DelegationUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityDelegationUncheckedUpdateManyWithoutDelegationNestedInput
  }

  export type DelegationUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegationCreateManyOrganizationInput = {
    id?: string
    title?: string | null
    firstName: string
    lastName: string
    email: string
    password?: string | null
    phoneNumber?: string | null
    position?: string | null
    delegationCode?: string | null
    role?: $Enums.Role
    countryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DelegationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneWithoutDelegationsNestedInput
    activities?: ActivityDelegationUpdateManyWithoutDelegationNestedInput
  }

  export type DelegationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityDelegationUncheckedUpdateManyWithoutDelegationNestedInput
  }

  export type DelegationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    delegationCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    countryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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