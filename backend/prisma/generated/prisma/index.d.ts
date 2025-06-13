
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Idea
 * 
 */
export type Idea = $Result.DefaultSelection<Prisma.$IdeaPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Analytics
 * 
 */
export type Analytics = $Result.DefaultSelection<Prisma.$AnalyticsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ideas
 * const ideas = await prisma.idea.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Ideas
   * const ideas = await prisma.idea.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.idea`: Exposes CRUD operations for the **Idea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ideas
    * const ideas = await prisma.idea.findMany()
    * ```
    */
  get idea(): Prisma.IdeaDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.analytics`: Exposes CRUD operations for the **Analytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analytics
    * const analytics = await prisma.analytics.findMany()
    * ```
    */
  get analytics(): Prisma.AnalyticsDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Idea: 'Idea',
    User: 'User',
    Analytics: 'Analytics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "idea" | "user" | "analytics"
      txIsolationLevel: never
    }
    model: {
      Idea: {
        payload: Prisma.$IdeaPayload<ExtArgs>
        fields: Prisma.IdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdeaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdeaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findFirst: {
            args: Prisma.IdeaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdeaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          findMany: {
            args: Prisma.IdeaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>[]
          }
          create: {
            args: Prisma.IdeaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          createMany: {
            args: Prisma.IdeaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IdeaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          update: {
            args: Prisma.IdeaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          deleteMany: {
            args: Prisma.IdeaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdeaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IdeaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdeaPayload>
          }
          aggregate: {
            args: Prisma.IdeaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdea>
          }
          groupBy: {
            args: Prisma.IdeaGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdeaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.IdeaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.IdeaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.IdeaCountArgs<ExtArgs>
            result: $Utils.Optional<IdeaCountAggregateOutputType> | number
          }
        }
      }
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Analytics: {
        payload: Prisma.$AnalyticsPayload<ExtArgs>
        fields: Prisma.AnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findFirst: {
            args: Prisma.AnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          findMany: {
            args: Prisma.AnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>[]
          }
          create: {
            args: Prisma.AnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          createMany: {
            args: Prisma.AnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          update: {
            args: Prisma.AnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalyticsPayload>
          }
          aggregate: {
            args: Prisma.AnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalytics>
          }
          groupBy: {
            args: Prisma.AnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AnalyticsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AnalyticsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<AnalyticsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    }
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
  }
  export type GlobalOmitConfig = {
    idea?: IdeaOmit
    user?: UserOmit
    analytics?: AnalyticsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    ideas: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ideas?: boolean | UserCountOutputTypeCountIdeasArgs
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
  export type UserCountOutputTypeCountIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Idea
   */

  export type AggregateIdea = {
    _count: IdeaCountAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  export type IdeaMinAggregateOutputType = {
    id: string | null
    topic: string | null
    niche: string | null
    reelIdea: string | null
    caption: string | null
    hook: string | null
    isFetched: boolean | null
    isFailed: boolean | null
    createdAt: Date | null
    uploadedAt: Date | null
    userId: string | null
  }

  export type IdeaMaxAggregateOutputType = {
    id: string | null
    topic: string | null
    niche: string | null
    reelIdea: string | null
    caption: string | null
    hook: string | null
    isFetched: boolean | null
    isFailed: boolean | null
    createdAt: Date | null
    uploadedAt: Date | null
    userId: string | null
  }

  export type IdeaCountAggregateOutputType = {
    id: number
    topic: number
    niche: number
    reelIdea: number
    caption: number
    hashtags: number
    hook: number
    isFetched: number
    isFailed: number
    createdAt: number
    uploadedAt: number
    userId: number
    _all: number
  }


  export type IdeaMinAggregateInputType = {
    id?: true
    topic?: true
    niche?: true
    reelIdea?: true
    caption?: true
    hook?: true
    isFetched?: true
    isFailed?: true
    createdAt?: true
    uploadedAt?: true
    userId?: true
  }

  export type IdeaMaxAggregateInputType = {
    id?: true
    topic?: true
    niche?: true
    reelIdea?: true
    caption?: true
    hook?: true
    isFetched?: true
    isFailed?: true
    createdAt?: true
    uploadedAt?: true
    userId?: true
  }

  export type IdeaCountAggregateInputType = {
    id?: true
    topic?: true
    niche?: true
    reelIdea?: true
    caption?: true
    hashtags?: true
    hook?: true
    isFetched?: true
    isFailed?: true
    createdAt?: true
    uploadedAt?: true
    userId?: true
    _all?: true
  }

  export type IdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idea to aggregate.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ideas
    **/
    _count?: true | IdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdeaMaxAggregateInputType
  }

  export type GetIdeaAggregateType<T extends IdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdea[P]>
      : GetScalarType<T[P], AggregateIdea[P]>
  }




  export type IdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdeaWhereInput
    orderBy?: IdeaOrderByWithAggregationInput | IdeaOrderByWithAggregationInput[]
    by: IdeaScalarFieldEnum[] | IdeaScalarFieldEnum
    having?: IdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdeaCountAggregateInputType | true
    _min?: IdeaMinAggregateInputType
    _max?: IdeaMaxAggregateInputType
  }

  export type IdeaGroupByOutputType = {
    id: string
    topic: string
    niche: string
    reelIdea: string
    caption: string
    hashtags: string[]
    hook: string
    isFetched: boolean
    isFailed: boolean
    createdAt: Date
    uploadedAt: Date
    userId: string | null
    _count: IdeaCountAggregateOutputType | null
    _min: IdeaMinAggregateOutputType | null
    _max: IdeaMaxAggregateOutputType | null
  }

  type GetIdeaGroupByPayload<T extends IdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdeaGroupByOutputType[P]>
            : GetScalarType<T[P], IdeaGroupByOutputType[P]>
        }
      >
    >


  export type IdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic?: boolean
    niche?: boolean
    reelIdea?: boolean
    caption?: boolean
    hashtags?: boolean
    hook?: boolean
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: boolean
    uploadedAt?: boolean
    userId?: boolean
    User?: boolean | Idea$UserArgs<ExtArgs>
  }, ExtArgs["result"]["idea"]>



  export type IdeaSelectScalar = {
    id?: boolean
    topic?: boolean
    niche?: boolean
    reelIdea?: boolean
    caption?: boolean
    hashtags?: boolean
    hook?: boolean
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: boolean
    uploadedAt?: boolean
    userId?: boolean
  }

  export type IdeaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topic" | "niche" | "reelIdea" | "caption" | "hashtags" | "hook" | "isFetched" | "isFailed" | "createdAt" | "uploadedAt" | "userId", ExtArgs["result"]["idea"]>
  export type IdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Idea$UserArgs<ExtArgs>
  }

  export type $IdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Idea"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      topic: string
      niche: string
      reelIdea: string
      caption: string
      hashtags: string[]
      hook: string
      isFetched: boolean
      isFailed: boolean
      createdAt: Date
      uploadedAt: Date
      userId: string | null
    }, ExtArgs["result"]["idea"]>
    composites: {}
  }

  type IdeaGetPayload<S extends boolean | null | undefined | IdeaDefaultArgs> = $Result.GetResult<Prisma.$IdeaPayload, S>

  type IdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdeaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdeaCountAggregateInputType | true
    }

  export interface IdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Idea'], meta: { name: 'Idea' } }
    /**
     * Find zero or one Idea that matches the filter.
     * @param {IdeaFindUniqueArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdeaFindUniqueArgs>(args: SelectSubset<T, IdeaFindUniqueArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdeaFindUniqueOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdeaFindUniqueOrThrowArgs>(args: SelectSubset<T, IdeaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdeaFindFirstArgs>(args?: SelectSubset<T, IdeaFindFirstArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindFirstOrThrowArgs} args - Arguments to find a Idea
     * @example
     * // Get one Idea
     * const idea = await prisma.idea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdeaFindFirstOrThrowArgs>(args?: SelectSubset<T, IdeaFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ideas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ideas
     * const ideas = await prisma.idea.findMany()
     * 
     * // Get first 10 Ideas
     * const ideas = await prisma.idea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ideaWithIdOnly = await prisma.idea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdeaFindManyArgs>(args?: SelectSubset<T, IdeaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idea.
     * @param {IdeaCreateArgs} args - Arguments to create a Idea.
     * @example
     * // Create one Idea
     * const Idea = await prisma.idea.create({
     *   data: {
     *     // ... data to create a Idea
     *   }
     * })
     * 
     */
    create<T extends IdeaCreateArgs>(args: SelectSubset<T, IdeaCreateArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ideas.
     * @param {IdeaCreateManyArgs} args - Arguments to create many Ideas.
     * @example
     * // Create many Ideas
     * const idea = await prisma.idea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdeaCreateManyArgs>(args?: SelectSubset<T, IdeaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Idea.
     * @param {IdeaDeleteArgs} args - Arguments to delete one Idea.
     * @example
     * // Delete one Idea
     * const Idea = await prisma.idea.delete({
     *   where: {
     *     // ... filter to delete one Idea
     *   }
     * })
     * 
     */
    delete<T extends IdeaDeleteArgs>(args: SelectSubset<T, IdeaDeleteArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idea.
     * @param {IdeaUpdateArgs} args - Arguments to update one Idea.
     * @example
     * // Update one Idea
     * const idea = await prisma.idea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdeaUpdateArgs>(args: SelectSubset<T, IdeaUpdateArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ideas.
     * @param {IdeaDeleteManyArgs} args - Arguments to filter Ideas to delete.
     * @example
     * // Delete a few Ideas
     * const { count } = await prisma.idea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdeaDeleteManyArgs>(args?: SelectSubset<T, IdeaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ideas
     * const idea = await prisma.idea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdeaUpdateManyArgs>(args: SelectSubset<T, IdeaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Idea.
     * @param {IdeaUpsertArgs} args - Arguments to update or create a Idea.
     * @example
     * // Update or create a Idea
     * const idea = await prisma.idea.upsert({
     *   create: {
     *     // ... data to create a Idea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idea we want to update
     *   }
     * })
     */
    upsert<T extends IdeaUpsertArgs>(args: SelectSubset<T, IdeaUpsertArgs<ExtArgs>>): Prisma__IdeaClient<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ideas that matches the filter.
     * @param {IdeaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const idea = await prisma.idea.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: IdeaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Idea.
     * @param {IdeaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const idea = await prisma.idea.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: IdeaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Ideas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaCountArgs} args - Arguments to filter Ideas to count.
     * @example
     * // Count the number of Ideas
     * const count = await prisma.idea.count({
     *   where: {
     *     // ... the filter for the Ideas we want to count
     *   }
     * })
    **/
    count<T extends IdeaCountArgs>(
      args?: Subset<T, IdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdeaAggregateArgs>(args: Subset<T, IdeaAggregateArgs>): Prisma.PrismaPromise<GetIdeaAggregateType<T>>

    /**
     * Group by Idea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdeaGroupByArgs} args - Group by arguments.
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
      T extends IdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdeaGroupByArgs['orderBy'] }
        : { orderBy?: IdeaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Idea model
   */
  readonly fields: IdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Idea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Idea$UserArgs<ExtArgs> = {}>(args?: Subset<T, Idea$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Idea model
   */
  interface IdeaFieldRefs {
    readonly id: FieldRef<"Idea", 'String'>
    readonly topic: FieldRef<"Idea", 'String'>
    readonly niche: FieldRef<"Idea", 'String'>
    readonly reelIdea: FieldRef<"Idea", 'String'>
    readonly caption: FieldRef<"Idea", 'String'>
    readonly hashtags: FieldRef<"Idea", 'String[]'>
    readonly hook: FieldRef<"Idea", 'String'>
    readonly isFetched: FieldRef<"Idea", 'Boolean'>
    readonly isFailed: FieldRef<"Idea", 'Boolean'>
    readonly createdAt: FieldRef<"Idea", 'DateTime'>
    readonly uploadedAt: FieldRef<"Idea", 'DateTime'>
    readonly userId: FieldRef<"Idea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Idea findUnique
   */
  export type IdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findUniqueOrThrow
   */
  export type IdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea findFirst
   */
  export type IdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findFirstOrThrow
   */
  export type IdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Idea to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ideas.
     */
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea findMany
   */
  export type IdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter, which Ideas to fetch.
     */
    where?: IdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ideas to fetch.
     */
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ideas.
     */
    cursor?: IdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ideas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ideas.
     */
    skip?: number
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
  }

  /**
   * Idea create
   */
  export type IdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a Idea.
     */
    data: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
  }

  /**
   * Idea createMany
   */
  export type IdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ideas.
     */
    data: IdeaCreateManyInput | IdeaCreateManyInput[]
  }

  /**
   * Idea update
   */
  export type IdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a Idea.
     */
    data: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
    /**
     * Choose, which Idea to update.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea updateMany
   */
  export type IdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ideas.
     */
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyInput>
    /**
     * Filter which Ideas to update
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to update.
     */
    limit?: number
  }

  /**
   * Idea upsert
   */
  export type IdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the Idea to update in case it exists.
     */
    where: IdeaWhereUniqueInput
    /**
     * In case the Idea found by the `where` argument doesn't exist, create a new Idea with this data.
     */
    create: XOR<IdeaCreateInput, IdeaUncheckedCreateInput>
    /**
     * In case the Idea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdeaUpdateInput, IdeaUncheckedUpdateInput>
  }

  /**
   * Idea delete
   */
  export type IdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    /**
     * Filter which Idea to delete.
     */
    where: IdeaWhereUniqueInput
  }

  /**
   * Idea deleteMany
   */
  export type IdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ideas to delete
     */
    where?: IdeaWhereInput
    /**
     * Limit how many Ideas to delete.
     */
    limit?: number
  }

  /**
   * Idea findRaw
   */
  export type IdeaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Idea aggregateRaw
   */
  export type IdeaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Idea.User
   */
  export type Idea$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Idea without action
   */
  export type IdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
  }


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
    name: string | null
    salt: string | null
    createdAt: Date | null
    uploadedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    salt: string | null
    createdAt: Date | null
    uploadedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    salt: number
    createdAt: number
    uploadedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    salt?: true
    createdAt?: true
    uploadedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    salt?: true
    createdAt?: true
    uploadedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    salt?: true
    createdAt?: true
    uploadedAt?: true
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
    name: string
    salt: string
    createdAt: Date
    uploadedAt: Date
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
    name?: boolean
    salt?: boolean
    createdAt?: boolean
    uploadedAt?: boolean
    ideas?: boolean | User$ideasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    salt?: boolean
    createdAt?: boolean
    uploadedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "salt" | "createdAt" | "uploadedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ideas?: boolean | User$ideasArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ideas: Prisma.$IdeaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      salt: string
      createdAt: Date
      uploadedAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    ideas<T extends User$ideasArgs<ExtArgs> = {}>(args?: Subset<T, User$ideasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdeaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly uploadedAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.ideas
   */
  export type User$ideasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idea
     */
    select?: IdeaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idea
     */
    omit?: IdeaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdeaInclude<ExtArgs> | null
    where?: IdeaWhereInput
    orderBy?: IdeaOrderByWithRelationInput | IdeaOrderByWithRelationInput[]
    cursor?: IdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdeaScalarFieldEnum | IdeaScalarFieldEnum[]
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
   * Model Analytics
   */

  export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  export type AnalyticsAvgAggregateOutputType = {
    followerData: number | null
  }

  export type AnalyticsSumAggregateOutputType = {
    followerData: number[]
  }

  export type AnalyticsMinAggregateOutputType = {
    id: string | null
    bestPostTime: string | null
    createdAt: Date | null
    uploadedAt: Date | null
  }

  export type AnalyticsMaxAggregateOutputType = {
    id: string | null
    bestPostTime: string | null
    createdAt: Date | null
    uploadedAt: Date | null
  }

  export type AnalyticsCountAggregateOutputType = {
    id: number
    followerData: number
    engagement: number
    bestPostTime: number
    createdAt: number
    uploadedAt: number
    _all: number
  }


  export type AnalyticsAvgAggregateInputType = {
    followerData?: true
  }

  export type AnalyticsSumAggregateInputType = {
    followerData?: true
  }

  export type AnalyticsMinAggregateInputType = {
    id?: true
    bestPostTime?: true
    createdAt?: true
    uploadedAt?: true
  }

  export type AnalyticsMaxAggregateInputType = {
    id?: true
    bestPostTime?: true
    createdAt?: true
    uploadedAt?: true
  }

  export type AnalyticsCountAggregateInputType = {
    id?: true
    followerData?: true
    engagement?: true
    bestPostTime?: true
    createdAt?: true
    uploadedAt?: true
    _all?: true
  }

  export type AnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to aggregate.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analytics
    **/
    _count?: true | AnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalyticsMaxAggregateInputType
  }

  export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalytics[P]>
      : GetScalarType<T[P], AggregateAnalytics[P]>
  }




  export type AnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalyticsWhereInput
    orderBy?: AnalyticsOrderByWithAggregationInput | AnalyticsOrderByWithAggregationInput[]
    by: AnalyticsScalarFieldEnum[] | AnalyticsScalarFieldEnum
    having?: AnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalyticsCountAggregateInputType | true
    _avg?: AnalyticsAvgAggregateInputType
    _sum?: AnalyticsSumAggregateInputType
    _min?: AnalyticsMinAggregateInputType
    _max?: AnalyticsMaxAggregateInputType
  }

  export type AnalyticsGroupByOutputType = {
    id: string
    followerData: number[]
    engagement: JsonValue
    bestPostTime: string
    createdAt: Date
    uploadedAt: Date
    _count: AnalyticsCountAggregateOutputType | null
    _avg: AnalyticsAvgAggregateOutputType | null
    _sum: AnalyticsSumAggregateOutputType | null
    _min: AnalyticsMinAggregateOutputType | null
    _max: AnalyticsMaxAggregateOutputType | null
  }

  type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], AnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type AnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    followerData?: boolean
    engagement?: boolean
    bestPostTime?: boolean
    createdAt?: boolean
    uploadedAt?: boolean
  }, ExtArgs["result"]["analytics"]>



  export type AnalyticsSelectScalar = {
    id?: boolean
    followerData?: boolean
    engagement?: boolean
    bestPostTime?: boolean
    createdAt?: boolean
    uploadedAt?: boolean
  }

  export type AnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "followerData" | "engagement" | "bestPostTime" | "createdAt" | "uploadedAt", ExtArgs["result"]["analytics"]>

  export type $AnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analytics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      followerData: number[]
      engagement: Prisma.JsonValue
      bestPostTime: string
      createdAt: Date
      uploadedAt: Date
    }, ExtArgs["result"]["analytics"]>
    composites: {}
  }

  type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = $Result.GetResult<Prisma.$AnalyticsPayload, S>

  type AnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalyticsCountAggregateInputType | true
    }

  export interface AnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analytics'], meta: { name: 'Analytics' } }
    /**
     * Find zero or one Analytics that matches the filter.
     * @param {AnalyticsFindUniqueArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalyticsFindUniqueArgs>(args: SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Analytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalyticsFindUniqueOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalyticsFindFirstArgs>(args?: SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Analytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindFirstOrThrowArgs} args - Arguments to find a Analytics
     * @example
     * // Get one Analytics
     * const analytics = await prisma.analytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analytics
     * const analytics = await prisma.analytics.findMany()
     * 
     * // Get first 10 Analytics
     * const analytics = await prisma.analytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analyticsWithIdOnly = await prisma.analytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalyticsFindManyArgs>(args?: SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Analytics.
     * @param {AnalyticsCreateArgs} args - Arguments to create a Analytics.
     * @example
     * // Create one Analytics
     * const Analytics = await prisma.analytics.create({
     *   data: {
     *     // ... data to create a Analytics
     *   }
     * })
     * 
     */
    create<T extends AnalyticsCreateArgs>(args: SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Analytics.
     * @param {AnalyticsCreateManyArgs} args - Arguments to create many Analytics.
     * @example
     * // Create many Analytics
     * const analytics = await prisma.analytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalyticsCreateManyArgs>(args?: SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Analytics.
     * @param {AnalyticsDeleteArgs} args - Arguments to delete one Analytics.
     * @example
     * // Delete one Analytics
     * const Analytics = await prisma.analytics.delete({
     *   where: {
     *     // ... filter to delete one Analytics
     *   }
     * })
     * 
     */
    delete<T extends AnalyticsDeleteArgs>(args: SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Analytics.
     * @param {AnalyticsUpdateArgs} args - Arguments to update one Analytics.
     * @example
     * // Update one Analytics
     * const analytics = await prisma.analytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalyticsUpdateArgs>(args: SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Analytics.
     * @param {AnalyticsDeleteManyArgs} args - Arguments to filter Analytics to delete.
     * @example
     * // Delete a few Analytics
     * const { count } = await prisma.analytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analytics
     * const analytics = await prisma.analytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalyticsUpdateManyArgs>(args: SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Analytics.
     * @param {AnalyticsUpsertArgs} args - Arguments to update or create a Analytics.
     * @example
     * // Update or create a Analytics
     * const analytics = await prisma.analytics.upsert({
     *   create: {
     *     // ... data to create a Analytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analytics we want to update
     *   }
     * })
     */
    upsert<T extends AnalyticsUpsertArgs>(args: SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma__AnalyticsClient<$Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Analytics that matches the filter.
     * @param {AnalyticsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const analytics = await prisma.analytics.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AnalyticsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Analytics.
     * @param {AnalyticsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const analytics = await prisma.analytics.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AnalyticsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsCountArgs} args - Arguments to filter Analytics to count.
     * @example
     * // Count the number of Analytics
     * const count = await prisma.analytics.count({
     *   where: {
     *     // ... the filter for the Analytics we want to count
     *   }
     * })
    **/
    count<T extends AnalyticsCountArgs>(
      args?: Subset<T, AnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalyticsAggregateArgs>(args: Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>

    /**
     * Group by Analytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalyticsGroupByArgs} args - Group by arguments.
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
      T extends AnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: AnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analytics model
   */
  readonly fields: AnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Analytics model
   */
  interface AnalyticsFieldRefs {
    readonly id: FieldRef<"Analytics", 'String'>
    readonly followerData: FieldRef<"Analytics", 'Int[]'>
    readonly engagement: FieldRef<"Analytics", 'Json'>
    readonly bestPostTime: FieldRef<"Analytics", 'String'>
    readonly createdAt: FieldRef<"Analytics", 'DateTime'>
    readonly uploadedAt: FieldRef<"Analytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analytics findUnique
   */
  export type AnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findUniqueOrThrow
   */
  export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics findFirst
   */
  export type AnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findFirstOrThrow
   */
  export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analytics.
     */
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics findMany
   */
  export type AnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter, which Analytics to fetch.
     */
    where?: AnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analytics to fetch.
     */
    orderBy?: AnalyticsOrderByWithRelationInput | AnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analytics.
     */
    cursor?: AnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analytics.
     */
    skip?: number
    distinct?: AnalyticsScalarFieldEnum | AnalyticsScalarFieldEnum[]
  }

  /**
   * Analytics create
   */
  export type AnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to create a Analytics.
     */
    data: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
  }

  /**
   * Analytics createMany
   */
  export type AnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analytics.
     */
    data: AnalyticsCreateManyInput | AnalyticsCreateManyInput[]
  }

  /**
   * Analytics update
   */
  export type AnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The data needed to update a Analytics.
     */
    data: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
    /**
     * Choose, which Analytics to update.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics updateMany
   */
  export type AnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analytics.
     */
    data: XOR<AnalyticsUpdateManyMutationInput, AnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which Analytics to update
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to update.
     */
    limit?: number
  }

  /**
   * Analytics upsert
   */
  export type AnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * The filter to search for the Analytics to update in case it exists.
     */
    where: AnalyticsWhereUniqueInput
    /**
     * In case the Analytics found by the `where` argument doesn't exist, create a new Analytics with this data.
     */
    create: XOR<AnalyticsCreateInput, AnalyticsUncheckedCreateInput>
    /**
     * In case the Analytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalyticsUpdateInput, AnalyticsUncheckedUpdateInput>
  }

  /**
   * Analytics delete
   */
  export type AnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
    /**
     * Filter which Analytics to delete.
     */
    where: AnalyticsWhereUniqueInput
  }

  /**
   * Analytics deleteMany
   */
  export type AnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analytics to delete
     */
    where?: AnalyticsWhereInput
    /**
     * Limit how many Analytics to delete.
     */
    limit?: number
  }

  /**
   * Analytics findRaw
   */
  export type AnalyticsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Analytics aggregateRaw
   */
  export type AnalyticsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Analytics without action
   */
  export type AnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analytics
     */
    select?: AnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Analytics
     */
    omit?: AnalyticsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const IdeaScalarFieldEnum: {
    id: 'id',
    topic: 'topic',
    niche: 'niche',
    reelIdea: 'reelIdea',
    caption: 'caption',
    hashtags: 'hashtags',
    hook: 'hook',
    isFetched: 'isFetched',
    isFailed: 'isFailed',
    createdAt: 'createdAt',
    uploadedAt: 'uploadedAt',
    userId: 'userId'
  };

  export type IdeaScalarFieldEnum = (typeof IdeaScalarFieldEnum)[keyof typeof IdeaScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    salt: 'salt',
    createdAt: 'createdAt',
    uploadedAt: 'uploadedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnalyticsScalarFieldEnum: {
    id: 'id',
    followerData: 'followerData',
    engagement: 'engagement',
    bestPostTime: 'bestPostTime',
    createdAt: 'createdAt',
    uploadedAt: 'uploadedAt'
  };

  export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type IdeaWhereInput = {
    AND?: IdeaWhereInput | IdeaWhereInput[]
    OR?: IdeaWhereInput[]
    NOT?: IdeaWhereInput | IdeaWhereInput[]
    id?: StringFilter<"Idea"> | string
    topic?: StringFilter<"Idea"> | string
    niche?: StringFilter<"Idea"> | string
    reelIdea?: StringFilter<"Idea"> | string
    caption?: StringFilter<"Idea"> | string
    hashtags?: StringNullableListFilter<"Idea">
    hook?: StringFilter<"Idea"> | string
    isFetched?: BoolFilter<"Idea"> | boolean
    isFailed?: BoolFilter<"Idea"> | boolean
    createdAt?: DateTimeFilter<"Idea"> | Date | string
    uploadedAt?: DateTimeFilter<"Idea"> | Date | string
    userId?: StringNullableFilter<"Idea"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IdeaOrderByWithRelationInput = {
    id?: SortOrder
    topic?: SortOrder
    niche?: SortOrder
    reelIdea?: SortOrder
    caption?: SortOrder
    hashtags?: SortOrder
    hook?: SortOrder
    isFetched?: SortOrder
    isFailed?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type IdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IdeaWhereInput | IdeaWhereInput[]
    OR?: IdeaWhereInput[]
    NOT?: IdeaWhereInput | IdeaWhereInput[]
    topic?: StringFilter<"Idea"> | string
    niche?: StringFilter<"Idea"> | string
    reelIdea?: StringFilter<"Idea"> | string
    caption?: StringFilter<"Idea"> | string
    hashtags?: StringNullableListFilter<"Idea">
    hook?: StringFilter<"Idea"> | string
    isFetched?: BoolFilter<"Idea"> | boolean
    isFailed?: BoolFilter<"Idea"> | boolean
    createdAt?: DateTimeFilter<"Idea"> | Date | string
    uploadedAt?: DateTimeFilter<"Idea"> | Date | string
    userId?: StringNullableFilter<"Idea"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type IdeaOrderByWithAggregationInput = {
    id?: SortOrder
    topic?: SortOrder
    niche?: SortOrder
    reelIdea?: SortOrder
    caption?: SortOrder
    hashtags?: SortOrder
    hook?: SortOrder
    isFetched?: SortOrder
    isFailed?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
    _count?: IdeaCountOrderByAggregateInput
    _max?: IdeaMaxOrderByAggregateInput
    _min?: IdeaMinOrderByAggregateInput
  }

  export type IdeaScalarWhereWithAggregatesInput = {
    AND?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    OR?: IdeaScalarWhereWithAggregatesInput[]
    NOT?: IdeaScalarWhereWithAggregatesInput | IdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Idea"> | string
    topic?: StringWithAggregatesFilter<"Idea"> | string
    niche?: StringWithAggregatesFilter<"Idea"> | string
    reelIdea?: StringWithAggregatesFilter<"Idea"> | string
    caption?: StringWithAggregatesFilter<"Idea"> | string
    hashtags?: StringNullableListFilter<"Idea">
    hook?: StringWithAggregatesFilter<"Idea"> | string
    isFetched?: BoolWithAggregatesFilter<"Idea"> | boolean
    isFailed?: BoolWithAggregatesFilter<"Idea"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Idea"> | Date | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Idea"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Idea"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    uploadedAt?: DateTimeFilter<"User"> | Date | string
    ideas?: IdeaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
    ideas?: IdeaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    uploadedAt?: DateTimeFilter<"User"> | Date | string
    ideas?: IdeaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    uploadedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnalyticsWhereInput = {
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    id?: StringFilter<"Analytics"> | string
    followerData?: IntNullableListFilter<"Analytics">
    engagement?: JsonFilter<"Analytics">
    bestPostTime?: StringFilter<"Analytics"> | string
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    uploadedAt?: DateTimeFilter<"Analytics"> | Date | string
  }

  export type AnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    followerData?: SortOrder
    engagement?: SortOrder
    bestPostTime?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
  }

  export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalyticsWhereInput | AnalyticsWhereInput[]
    OR?: AnalyticsWhereInput[]
    NOT?: AnalyticsWhereInput | AnalyticsWhereInput[]
    followerData?: IntNullableListFilter<"Analytics">
    engagement?: JsonFilter<"Analytics">
    bestPostTime?: StringFilter<"Analytics"> | string
    createdAt?: DateTimeFilter<"Analytics"> | Date | string
    uploadedAt?: DateTimeFilter<"Analytics"> | Date | string
  }, "id">

  export type AnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    followerData?: SortOrder
    engagement?: SortOrder
    bestPostTime?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
    _count?: AnalyticsCountOrderByAggregateInput
    _avg?: AnalyticsAvgOrderByAggregateInput
    _max?: AnalyticsMaxOrderByAggregateInput
    _min?: AnalyticsMinOrderByAggregateInput
    _sum?: AnalyticsSumOrderByAggregateInput
  }

  export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    OR?: AnalyticsScalarWhereWithAggregatesInput[]
    NOT?: AnalyticsScalarWhereWithAggregatesInput | AnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analytics"> | string
    followerData?: IntNullableListFilter<"Analytics">
    engagement?: JsonWithAggregatesFilter<"Analytics">
    bestPostTime?: StringWithAggregatesFilter<"Analytics"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
    uploadedAt?: DateTimeWithAggregatesFilter<"Analytics"> | Date | string
  }

  export type IdeaCreateInput = {
    id?: string
    topic: string
    niche: string
    reelIdea: string
    caption: string
    hashtags?: IdeaCreatehashtagsInput | string[]
    hook: string
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: Date | string
    uploadedAt?: Date | string
    User?: UserCreateNestedOneWithoutIdeasInput
  }

  export type IdeaUncheckedCreateInput = {
    id?: string
    topic: string
    niche: string
    reelIdea: string
    caption: string
    hashtags?: IdeaCreatehashtagsInput | string[]
    hook: string
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: Date | string
    uploadedAt?: Date | string
    userId?: string | null
  }

  export type IdeaUpdateInput = {
    topic?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    reelIdea?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    hashtags?: IdeaUpdatehashtagsInput | string[]
    hook?: StringFieldUpdateOperationsInput | string
    isFetched?: BoolFieldUpdateOperationsInput | boolean
    isFailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutIdeasNestedInput
  }

  export type IdeaUncheckedUpdateInput = {
    topic?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    reelIdea?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    hashtags?: IdeaUpdatehashtagsInput | string[]
    hook?: StringFieldUpdateOperationsInput | string
    isFetched?: BoolFieldUpdateOperationsInput | boolean
    isFailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IdeaCreateManyInput = {
    id?: string
    topic: string
    niche: string
    reelIdea: string
    caption: string
    hashtags?: IdeaCreatehashtagsInput | string[]
    hook: string
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: Date | string
    uploadedAt?: Date | string
    userId?: string | null
  }

  export type IdeaUpdateManyMutationInput = {
    topic?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    reelIdea?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    hashtags?: IdeaUpdatehashtagsInput | string[]
    hook?: StringFieldUpdateOperationsInput | string
    isFetched?: BoolFieldUpdateOperationsInput | boolean
    isFailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaUncheckedUpdateManyInput = {
    topic?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    reelIdea?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    hashtags?: IdeaUpdatehashtagsInput | string[]
    hook?: StringFieldUpdateOperationsInput | string
    isFetched?: BoolFieldUpdateOperationsInput | boolean
    isFailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    salt: string
    createdAt?: Date | string
    uploadedAt?: Date | string
    ideas?: IdeaCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    salt: string
    createdAt?: Date | string
    uploadedAt?: Date | string
    ideas?: IdeaUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideas?: IdeaUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ideas?: IdeaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    salt: string
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateInput = {
    id?: string
    followerData?: AnalyticsCreatefollowerDataInput | number[]
    engagement: InputJsonValue
    bestPostTime: string
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type AnalyticsUncheckedCreateInput = {
    id?: string
    followerData?: AnalyticsCreatefollowerDataInput | number[]
    engagement: InputJsonValue
    bestPostTime: string
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type AnalyticsUpdateInput = {
    followerData?: AnalyticsUpdatefollowerDataInput | number[]
    engagement?: InputJsonValue | InputJsonValue
    bestPostTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateInput = {
    followerData?: AnalyticsUpdatefollowerDataInput | number[]
    engagement?: InputJsonValue | InputJsonValue
    bestPostTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsCreateManyInput = {
    id?: string
    followerData?: AnalyticsCreatefollowerDataInput | number[]
    engagement: InputJsonValue
    bestPostTime: string
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type AnalyticsUpdateManyMutationInput = {
    followerData?: AnalyticsUpdatefollowerDataInput | number[]
    engagement?: InputJsonValue | InputJsonValue
    bestPostTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalyticsUncheckedUpdateManyInput = {
    followerData?: AnalyticsUpdatefollowerDataInput | number[]
    engagement?: InputJsonValue | InputJsonValue
    bestPostTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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
    isSet?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IdeaCountOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    niche?: SortOrder
    reelIdea?: SortOrder
    caption?: SortOrder
    hashtags?: SortOrder
    hook?: SortOrder
    isFetched?: SortOrder
    isFailed?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type IdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    niche?: SortOrder
    reelIdea?: SortOrder
    caption?: SortOrder
    hook?: SortOrder
    isFetched?: SortOrder
    isFailed?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
  }

  export type IdeaMinOrderByAggregateInput = {
    id?: SortOrder
    topic?: SortOrder
    niche?: SortOrder
    reelIdea?: SortOrder
    caption?: SortOrder
    hook?: SortOrder
    isFetched?: SortOrder
    isFailed?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
    userId?: SortOrder
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
    isSet?: boolean
  }

  export type IdeaListRelationFilter = {
    every?: IdeaWhereInput
    some?: IdeaWhereInput
    none?: IdeaWhereInput
  }

  export type IdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    salt?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type AnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    followerData?: SortOrder
    engagement?: SortOrder
    bestPostTime?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
  }

  export type AnalyticsAvgOrderByAggregateInput = {
    followerData?: SortOrder
  }

  export type AnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    bestPostTime?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
  }

  export type AnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    bestPostTime?: SortOrder
    createdAt?: SortOrder
    uploadedAt?: SortOrder
  }

  export type AnalyticsSumOrderByAggregateInput = {
    followerData?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IdeaCreatehashtagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutIdeasInput = {
    create?: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IdeaUpdatehashtagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutIdeasNestedInput = {
    create?: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdeasInput
    upsert?: UserUpsertWithoutIdeasInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIdeasInput, UserUpdateWithoutIdeasInput>, UserUncheckedUpdateWithoutIdeasInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IdeaCreateNestedManyWithoutUserInput = {
    create?: XOR<IdeaCreateWithoutUserInput, IdeaUncheckedCreateWithoutUserInput> | IdeaCreateWithoutUserInput[] | IdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutUserInput | IdeaCreateOrConnectWithoutUserInput[]
    createMany?: IdeaCreateManyUserInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type IdeaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IdeaCreateWithoutUserInput, IdeaUncheckedCreateWithoutUserInput> | IdeaCreateWithoutUserInput[] | IdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutUserInput | IdeaCreateOrConnectWithoutUserInput[]
    createMany?: IdeaCreateManyUserInputEnvelope
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
  }

  export type IdeaUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdeaCreateWithoutUserInput, IdeaUncheckedCreateWithoutUserInput> | IdeaCreateWithoutUserInput[] | IdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutUserInput | IdeaCreateOrConnectWithoutUserInput[]
    upsert?: IdeaUpsertWithWhereUniqueWithoutUserInput | IdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaCreateManyUserInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?: IdeaUpdateWithWhereUniqueWithoutUserInput | IdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdeaUpdateManyWithWhereWithoutUserInput | IdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type IdeaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdeaCreateWithoutUserInput, IdeaUncheckedCreateWithoutUserInput> | IdeaCreateWithoutUserInput[] | IdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdeaCreateOrConnectWithoutUserInput | IdeaCreateOrConnectWithoutUserInput[]
    upsert?: IdeaUpsertWithWhereUniqueWithoutUserInput | IdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdeaCreateManyUserInputEnvelope
    set?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    disconnect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    delete?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    connect?: IdeaWhereUniqueInput | IdeaWhereUniqueInput[]
    update?: IdeaUpdateWithWhereUniqueWithoutUserInput | IdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdeaUpdateManyWithWhereWithoutUserInput | IdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
  }

  export type AnalyticsCreatefollowerDataInput = {
    set: number[]
  }

  export type AnalyticsUpdatefollowerDataInput = {
    set?: number[]
    push?: number | number[]
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type UserCreateWithoutIdeasInput = {
    id?: string
    email: string
    password: string
    name: string
    salt: string
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutIdeasInput = {
    id?: string
    email: string
    password: string
    name: string
    salt: string
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutIdeasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
  }

  export type UserUpsertWithoutIdeasInput = {
    update: XOR<UserUpdateWithoutIdeasInput, UserUncheckedUpdateWithoutIdeasInput>
    create: XOR<UserCreateWithoutIdeasInput, UserUncheckedCreateWithoutIdeasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdeasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdeasInput, UserUncheckedUpdateWithoutIdeasInput>
  }

  export type UserUpdateWithoutIdeasInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutIdeasInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaCreateWithoutUserInput = {
    id?: string
    topic: string
    niche: string
    reelIdea: string
    caption: string
    hashtags?: IdeaCreatehashtagsInput | string[]
    hook: string
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type IdeaUncheckedCreateWithoutUserInput = {
    id?: string
    topic: string
    niche: string
    reelIdea: string
    caption: string
    hashtags?: IdeaCreatehashtagsInput | string[]
    hook: string
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type IdeaCreateOrConnectWithoutUserInput = {
    where: IdeaWhereUniqueInput
    create: XOR<IdeaCreateWithoutUserInput, IdeaUncheckedCreateWithoutUserInput>
  }

  export type IdeaCreateManyUserInputEnvelope = {
    data: IdeaCreateManyUserInput | IdeaCreateManyUserInput[]
  }

  export type IdeaUpsertWithWhereUniqueWithoutUserInput = {
    where: IdeaWhereUniqueInput
    update: XOR<IdeaUpdateWithoutUserInput, IdeaUncheckedUpdateWithoutUserInput>
    create: XOR<IdeaCreateWithoutUserInput, IdeaUncheckedCreateWithoutUserInput>
  }

  export type IdeaUpdateWithWhereUniqueWithoutUserInput = {
    where: IdeaWhereUniqueInput
    data: XOR<IdeaUpdateWithoutUserInput, IdeaUncheckedUpdateWithoutUserInput>
  }

  export type IdeaUpdateManyWithWhereWithoutUserInput = {
    where: IdeaScalarWhereInput
    data: XOR<IdeaUpdateManyMutationInput, IdeaUncheckedUpdateManyWithoutUserInput>
  }

  export type IdeaScalarWhereInput = {
    AND?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    OR?: IdeaScalarWhereInput[]
    NOT?: IdeaScalarWhereInput | IdeaScalarWhereInput[]
    id?: StringFilter<"Idea"> | string
    topic?: StringFilter<"Idea"> | string
    niche?: StringFilter<"Idea"> | string
    reelIdea?: StringFilter<"Idea"> | string
    caption?: StringFilter<"Idea"> | string
    hashtags?: StringNullableListFilter<"Idea">
    hook?: StringFilter<"Idea"> | string
    isFetched?: BoolFilter<"Idea"> | boolean
    isFailed?: BoolFilter<"Idea"> | boolean
    createdAt?: DateTimeFilter<"Idea"> | Date | string
    uploadedAt?: DateTimeFilter<"Idea"> | Date | string
    userId?: StringNullableFilter<"Idea"> | string | null
  }

  export type IdeaCreateManyUserInput = {
    id?: string
    topic: string
    niche: string
    reelIdea: string
    caption: string
    hashtags?: IdeaCreatehashtagsInput | string[]
    hook: string
    isFetched?: boolean
    isFailed?: boolean
    createdAt?: Date | string
    uploadedAt?: Date | string
  }

  export type IdeaUpdateWithoutUserInput = {
    topic?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    reelIdea?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    hashtags?: IdeaUpdatehashtagsInput | string[]
    hook?: StringFieldUpdateOperationsInput | string
    isFetched?: BoolFieldUpdateOperationsInput | boolean
    isFailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaUncheckedUpdateWithoutUserInput = {
    topic?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    reelIdea?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    hashtags?: IdeaUpdatehashtagsInput | string[]
    hook?: StringFieldUpdateOperationsInput | string
    isFetched?: BoolFieldUpdateOperationsInput | boolean
    isFailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdeaUncheckedUpdateManyWithoutUserInput = {
    topic?: StringFieldUpdateOperationsInput | string
    niche?: StringFieldUpdateOperationsInput | string
    reelIdea?: StringFieldUpdateOperationsInput | string
    caption?: StringFieldUpdateOperationsInput | string
    hashtags?: IdeaUpdatehashtagsInput | string[]
    hook?: StringFieldUpdateOperationsInput | string
    isFetched?: BoolFieldUpdateOperationsInput | boolean
    isFailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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