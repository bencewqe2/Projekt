
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
 * Model felhasznalok
 * 
 */
export type felhasznalok = $Result.DefaultSelection<Prisma.$felhasznalokPayload>
/**
 * Model idopont
 * 
 */
export type idopont = $Result.DefaultSelection<Prisma.$idopontPayload>
/**
 * Model borbelyok
 * 
 */
export type borbelyok = $Result.DefaultSelection<Prisma.$borbelyokPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Felhasznaloks
 * const felhasznaloks = await prisma.felhasznalok.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Felhasznaloks
   * const felhasznaloks = await prisma.felhasznalok.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.felhasznalok`: Exposes CRUD operations for the **felhasznalok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Felhasznaloks
    * const felhasznaloks = await prisma.felhasznalok.findMany()
    * ```
    */
  get felhasznalok(): Prisma.felhasznalokDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idopont`: Exposes CRUD operations for the **idopont** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idoponts
    * const idoponts = await prisma.idopont.findMany()
    * ```
    */
  get idopont(): Prisma.idopontDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.borbelyok`: Exposes CRUD operations for the **borbelyok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Borbelyoks
    * const borbelyoks = await prisma.borbelyok.findMany()
    * ```
    */
  get borbelyok(): Prisma.borbelyokDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    felhasznalok: 'felhasznalok',
    idopont: 'idopont',
    borbelyok: 'borbelyok'
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
      modelProps: "felhasznalok" | "idopont" | "borbelyok"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      felhasznalok: {
        payload: Prisma.$felhasznalokPayload<ExtArgs>
        fields: Prisma.felhasznalokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.felhasznalokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.felhasznalokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload>
          }
          findFirst: {
            args: Prisma.felhasznalokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.felhasznalokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload>
          }
          findMany: {
            args: Prisma.felhasznalokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload>[]
          }
          create: {
            args: Prisma.felhasznalokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload>
          }
          createMany: {
            args: Prisma.felhasznalokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.felhasznalokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload>
          }
          update: {
            args: Prisma.felhasznalokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload>
          }
          deleteMany: {
            args: Prisma.felhasznalokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.felhasznalokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.felhasznalokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$felhasznalokPayload>
          }
          aggregate: {
            args: Prisma.FelhasznalokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFelhasznalok>
          }
          groupBy: {
            args: Prisma.felhasznalokGroupByArgs<ExtArgs>
            result: $Utils.Optional<FelhasznalokGroupByOutputType>[]
          }
          count: {
            args: Prisma.felhasznalokCountArgs<ExtArgs>
            result: $Utils.Optional<FelhasznalokCountAggregateOutputType> | number
          }
        }
      }
      idopont: {
        payload: Prisma.$idopontPayload<ExtArgs>
        fields: Prisma.idopontFieldRefs
        operations: {
          findUnique: {
            args: Prisma.idopontFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.idopontFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload>
          }
          findFirst: {
            args: Prisma.idopontFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.idopontFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload>
          }
          findMany: {
            args: Prisma.idopontFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload>[]
          }
          create: {
            args: Prisma.idopontCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload>
          }
          createMany: {
            args: Prisma.idopontCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.idopontDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload>
          }
          update: {
            args: Prisma.idopontUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload>
          }
          deleteMany: {
            args: Prisma.idopontDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.idopontUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.idopontUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$idopontPayload>
          }
          aggregate: {
            args: Prisma.IdopontAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdopont>
          }
          groupBy: {
            args: Prisma.idopontGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdopontGroupByOutputType>[]
          }
          count: {
            args: Prisma.idopontCountArgs<ExtArgs>
            result: $Utils.Optional<IdopontCountAggregateOutputType> | number
          }
        }
      }
      borbelyok: {
        payload: Prisma.$borbelyokPayload<ExtArgs>
        fields: Prisma.borbelyokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.borbelyokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.borbelyokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload>
          }
          findFirst: {
            args: Prisma.borbelyokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.borbelyokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload>
          }
          findMany: {
            args: Prisma.borbelyokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload>[]
          }
          create: {
            args: Prisma.borbelyokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload>
          }
          createMany: {
            args: Prisma.borbelyokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.borbelyokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload>
          }
          update: {
            args: Prisma.borbelyokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload>
          }
          deleteMany: {
            args: Prisma.borbelyokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.borbelyokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.borbelyokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borbelyokPayload>
          }
          aggregate: {
            args: Prisma.BorbelyokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorbelyok>
          }
          groupBy: {
            args: Prisma.borbelyokGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorbelyokGroupByOutputType>[]
          }
          count: {
            args: Prisma.borbelyokCountArgs<ExtArgs>
            result: $Utils.Optional<BorbelyokCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    felhasznalok?: felhasznalokOmit
    idopont?: idopontOmit
    borbelyok?: borbelyokOmit
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
   * Models
   */

  /**
   * Model felhasznalok
   */

  export type AggregateFelhasznalok = {
    _count: FelhasznalokCountAggregateOutputType | null
    _avg: FelhasznalokAvgAggregateOutputType | null
    _sum: FelhasznalokSumAggregateOutputType | null
    _min: FelhasznalokMinAggregateOutputType | null
    _max: FelhasznalokMaxAggregateOutputType | null
  }

  export type FelhasznalokAvgAggregateOutputType = {
    id: number | null
  }

  export type FelhasznalokSumAggregateOutputType = {
    id: number | null
  }

  export type FelhasznalokMinAggregateOutputType = {
    id: number | null
    felhnev: string | null
    email: string | null
    hash: string | null
    telefonszam: string | null
  }

  export type FelhasznalokMaxAggregateOutputType = {
    id: number | null
    felhnev: string | null
    email: string | null
    hash: string | null
    telefonszam: string | null
  }

  export type FelhasznalokCountAggregateOutputType = {
    id: number
    felhnev: number
    email: number
    hash: number
    telefonszam: number
    _all: number
  }


  export type FelhasznalokAvgAggregateInputType = {
    id?: true
  }

  export type FelhasznalokSumAggregateInputType = {
    id?: true
  }

  export type FelhasznalokMinAggregateInputType = {
    id?: true
    felhnev?: true
    email?: true
    hash?: true
    telefonszam?: true
  }

  export type FelhasznalokMaxAggregateInputType = {
    id?: true
    felhnev?: true
    email?: true
    hash?: true
    telefonszam?: true
  }

  export type FelhasznalokCountAggregateInputType = {
    id?: true
    felhnev?: true
    email?: true
    hash?: true
    telefonszam?: true
    _all?: true
  }

  export type FelhasznalokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which felhasznalok to aggregate.
     */
    where?: felhasznalokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of felhasznaloks to fetch.
     */
    orderBy?: felhasznalokOrderByWithRelationInput | felhasznalokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: felhasznalokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` felhasznaloks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` felhasznaloks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned felhasznaloks
    **/
    _count?: true | FelhasznalokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FelhasznalokAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FelhasznalokSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FelhasznalokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FelhasznalokMaxAggregateInputType
  }

  export type GetFelhasznalokAggregateType<T extends FelhasznalokAggregateArgs> = {
        [P in keyof T & keyof AggregateFelhasznalok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFelhasznalok[P]>
      : GetScalarType<T[P], AggregateFelhasznalok[P]>
  }




  export type felhasznalokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: felhasznalokWhereInput
    orderBy?: felhasznalokOrderByWithAggregationInput | felhasznalokOrderByWithAggregationInput[]
    by: FelhasznalokScalarFieldEnum[] | FelhasznalokScalarFieldEnum
    having?: felhasznalokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FelhasznalokCountAggregateInputType | true
    _avg?: FelhasznalokAvgAggregateInputType
    _sum?: FelhasznalokSumAggregateInputType
    _min?: FelhasznalokMinAggregateInputType
    _max?: FelhasznalokMaxAggregateInputType
  }

  export type FelhasznalokGroupByOutputType = {
    id: number
    felhnev: string
    email: string
    hash: string
    telefonszam: string
    _count: FelhasznalokCountAggregateOutputType | null
    _avg: FelhasznalokAvgAggregateOutputType | null
    _sum: FelhasznalokSumAggregateOutputType | null
    _min: FelhasznalokMinAggregateOutputType | null
    _max: FelhasznalokMaxAggregateOutputType | null
  }

  type GetFelhasznalokGroupByPayload<T extends felhasznalokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FelhasznalokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FelhasznalokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FelhasznalokGroupByOutputType[P]>
            : GetScalarType<T[P], FelhasznalokGroupByOutputType[P]>
        }
      >
    >


  export type felhasznalokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    felhnev?: boolean
    email?: boolean
    hash?: boolean
    telefonszam?: boolean
  }, ExtArgs["result"]["felhasznalok"]>



  export type felhasznalokSelectScalar = {
    id?: boolean
    felhnev?: boolean
    email?: boolean
    hash?: boolean
    telefonszam?: boolean
  }

  export type felhasznalokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "felhnev" | "email" | "hash" | "telefonszam", ExtArgs["result"]["felhasznalok"]>

  export type $felhasznalokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "felhasznalok"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      felhnev: string
      email: string
      hash: string
      telefonszam: string
    }, ExtArgs["result"]["felhasznalok"]>
    composites: {}
  }

  type felhasznalokGetPayload<S extends boolean | null | undefined | felhasznalokDefaultArgs> = $Result.GetResult<Prisma.$felhasznalokPayload, S>

  type felhasznalokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<felhasznalokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FelhasznalokCountAggregateInputType | true
    }

  export interface felhasznalokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['felhasznalok'], meta: { name: 'felhasznalok' } }
    /**
     * Find zero or one Felhasznalok that matches the filter.
     * @param {felhasznalokFindUniqueArgs} args - Arguments to find a Felhasznalok
     * @example
     * // Get one Felhasznalok
     * const felhasznalok = await prisma.felhasznalok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends felhasznalokFindUniqueArgs>(args: SelectSubset<T, felhasznalokFindUniqueArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Felhasznalok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {felhasznalokFindUniqueOrThrowArgs} args - Arguments to find a Felhasznalok
     * @example
     * // Get one Felhasznalok
     * const felhasznalok = await prisma.felhasznalok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends felhasznalokFindUniqueOrThrowArgs>(args: SelectSubset<T, felhasznalokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Felhasznalok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {felhasznalokFindFirstArgs} args - Arguments to find a Felhasznalok
     * @example
     * // Get one Felhasznalok
     * const felhasznalok = await prisma.felhasznalok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends felhasznalokFindFirstArgs>(args?: SelectSubset<T, felhasznalokFindFirstArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Felhasznalok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {felhasznalokFindFirstOrThrowArgs} args - Arguments to find a Felhasznalok
     * @example
     * // Get one Felhasznalok
     * const felhasznalok = await prisma.felhasznalok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends felhasznalokFindFirstOrThrowArgs>(args?: SelectSubset<T, felhasznalokFindFirstOrThrowArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Felhasznaloks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {felhasznalokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Felhasznaloks
     * const felhasznaloks = await prisma.felhasznalok.findMany()
     * 
     * // Get first 10 Felhasznaloks
     * const felhasznaloks = await prisma.felhasznalok.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const felhasznalokWithIdOnly = await prisma.felhasznalok.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends felhasznalokFindManyArgs>(args?: SelectSubset<T, felhasznalokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Felhasznalok.
     * @param {felhasznalokCreateArgs} args - Arguments to create a Felhasznalok.
     * @example
     * // Create one Felhasznalok
     * const Felhasznalok = await prisma.felhasznalok.create({
     *   data: {
     *     // ... data to create a Felhasznalok
     *   }
     * })
     * 
     */
    create<T extends felhasznalokCreateArgs>(args: SelectSubset<T, felhasznalokCreateArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Felhasznaloks.
     * @param {felhasznalokCreateManyArgs} args - Arguments to create many Felhasznaloks.
     * @example
     * // Create many Felhasznaloks
     * const felhasznalok = await prisma.felhasznalok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends felhasznalokCreateManyArgs>(args?: SelectSubset<T, felhasznalokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Felhasznalok.
     * @param {felhasznalokDeleteArgs} args - Arguments to delete one Felhasznalok.
     * @example
     * // Delete one Felhasznalok
     * const Felhasznalok = await prisma.felhasznalok.delete({
     *   where: {
     *     // ... filter to delete one Felhasznalok
     *   }
     * })
     * 
     */
    delete<T extends felhasznalokDeleteArgs>(args: SelectSubset<T, felhasznalokDeleteArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Felhasznalok.
     * @param {felhasznalokUpdateArgs} args - Arguments to update one Felhasznalok.
     * @example
     * // Update one Felhasznalok
     * const felhasznalok = await prisma.felhasznalok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends felhasznalokUpdateArgs>(args: SelectSubset<T, felhasznalokUpdateArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Felhasznaloks.
     * @param {felhasznalokDeleteManyArgs} args - Arguments to filter Felhasznaloks to delete.
     * @example
     * // Delete a few Felhasznaloks
     * const { count } = await prisma.felhasznalok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends felhasznalokDeleteManyArgs>(args?: SelectSubset<T, felhasznalokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Felhasznaloks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {felhasznalokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Felhasznaloks
     * const felhasznalok = await prisma.felhasznalok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends felhasznalokUpdateManyArgs>(args: SelectSubset<T, felhasznalokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Felhasznalok.
     * @param {felhasznalokUpsertArgs} args - Arguments to update or create a Felhasznalok.
     * @example
     * // Update or create a Felhasznalok
     * const felhasznalok = await prisma.felhasznalok.upsert({
     *   create: {
     *     // ... data to create a Felhasznalok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Felhasznalok we want to update
     *   }
     * })
     */
    upsert<T extends felhasznalokUpsertArgs>(args: SelectSubset<T, felhasznalokUpsertArgs<ExtArgs>>): Prisma__felhasznalokClient<$Result.GetResult<Prisma.$felhasznalokPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Felhasznaloks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {felhasznalokCountArgs} args - Arguments to filter Felhasznaloks to count.
     * @example
     * // Count the number of Felhasznaloks
     * const count = await prisma.felhasznalok.count({
     *   where: {
     *     // ... the filter for the Felhasznaloks we want to count
     *   }
     * })
    **/
    count<T extends felhasznalokCountArgs>(
      args?: Subset<T, felhasznalokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FelhasznalokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Felhasznalok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FelhasznalokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FelhasznalokAggregateArgs>(args: Subset<T, FelhasznalokAggregateArgs>): Prisma.PrismaPromise<GetFelhasznalokAggregateType<T>>

    /**
     * Group by Felhasznalok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {felhasznalokGroupByArgs} args - Group by arguments.
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
      T extends felhasznalokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: felhasznalokGroupByArgs['orderBy'] }
        : { orderBy?: felhasznalokGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, felhasznalokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFelhasznalokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the felhasznalok model
   */
  readonly fields: felhasznalokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for felhasznalok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__felhasznalokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the felhasznalok model
   */
  interface felhasznalokFieldRefs {
    readonly id: FieldRef<"felhasznalok", 'Int'>
    readonly felhnev: FieldRef<"felhasznalok", 'String'>
    readonly email: FieldRef<"felhasznalok", 'String'>
    readonly hash: FieldRef<"felhasznalok", 'String'>
    readonly telefonszam: FieldRef<"felhasznalok", 'String'>
  }
    

  // Custom InputTypes
  /**
   * felhasznalok findUnique
   */
  export type felhasznalokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * Filter, which felhasznalok to fetch.
     */
    where: felhasznalokWhereUniqueInput
  }

  /**
   * felhasznalok findUniqueOrThrow
   */
  export type felhasznalokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * Filter, which felhasznalok to fetch.
     */
    where: felhasznalokWhereUniqueInput
  }

  /**
   * felhasznalok findFirst
   */
  export type felhasznalokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * Filter, which felhasznalok to fetch.
     */
    where?: felhasznalokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of felhasznaloks to fetch.
     */
    orderBy?: felhasznalokOrderByWithRelationInput | felhasznalokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for felhasznaloks.
     */
    cursor?: felhasznalokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` felhasznaloks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` felhasznaloks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of felhasznaloks.
     */
    distinct?: FelhasznalokScalarFieldEnum | FelhasznalokScalarFieldEnum[]
  }

  /**
   * felhasznalok findFirstOrThrow
   */
  export type felhasznalokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * Filter, which felhasznalok to fetch.
     */
    where?: felhasznalokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of felhasznaloks to fetch.
     */
    orderBy?: felhasznalokOrderByWithRelationInput | felhasznalokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for felhasznaloks.
     */
    cursor?: felhasznalokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` felhasznaloks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` felhasznaloks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of felhasznaloks.
     */
    distinct?: FelhasznalokScalarFieldEnum | FelhasznalokScalarFieldEnum[]
  }

  /**
   * felhasznalok findMany
   */
  export type felhasznalokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * Filter, which felhasznaloks to fetch.
     */
    where?: felhasznalokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of felhasznaloks to fetch.
     */
    orderBy?: felhasznalokOrderByWithRelationInput | felhasznalokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing felhasznaloks.
     */
    cursor?: felhasznalokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` felhasznaloks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` felhasznaloks.
     */
    skip?: number
    distinct?: FelhasznalokScalarFieldEnum | FelhasznalokScalarFieldEnum[]
  }

  /**
   * felhasznalok create
   */
  export type felhasznalokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * The data needed to create a felhasznalok.
     */
    data?: XOR<felhasznalokCreateInput, felhasznalokUncheckedCreateInput>
  }

  /**
   * felhasznalok createMany
   */
  export type felhasznalokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many felhasznaloks.
     */
    data: felhasznalokCreateManyInput | felhasznalokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * felhasznalok update
   */
  export type felhasznalokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * The data needed to update a felhasznalok.
     */
    data: XOR<felhasznalokUpdateInput, felhasznalokUncheckedUpdateInput>
    /**
     * Choose, which felhasznalok to update.
     */
    where: felhasznalokWhereUniqueInput
  }

  /**
   * felhasznalok updateMany
   */
  export type felhasznalokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update felhasznaloks.
     */
    data: XOR<felhasznalokUpdateManyMutationInput, felhasznalokUncheckedUpdateManyInput>
    /**
     * Filter which felhasznaloks to update
     */
    where?: felhasznalokWhereInput
    /**
     * Limit how many felhasznaloks to update.
     */
    limit?: number
  }

  /**
   * felhasznalok upsert
   */
  export type felhasznalokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * The filter to search for the felhasznalok to update in case it exists.
     */
    where: felhasznalokWhereUniqueInput
    /**
     * In case the felhasznalok found by the `where` argument doesn't exist, create a new felhasznalok with this data.
     */
    create: XOR<felhasznalokCreateInput, felhasznalokUncheckedCreateInput>
    /**
     * In case the felhasznalok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<felhasznalokUpdateInput, felhasznalokUncheckedUpdateInput>
  }

  /**
   * felhasznalok delete
   */
  export type felhasznalokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
    /**
     * Filter which felhasznalok to delete.
     */
    where: felhasznalokWhereUniqueInput
  }

  /**
   * felhasznalok deleteMany
   */
  export type felhasznalokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which felhasznaloks to delete
     */
    where?: felhasznalokWhereInput
    /**
     * Limit how many felhasznaloks to delete.
     */
    limit?: number
  }

  /**
   * felhasznalok without action
   */
  export type felhasznalokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the felhasznalok
     */
    select?: felhasznalokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the felhasznalok
     */
    omit?: felhasznalokOmit<ExtArgs> | null
  }


  /**
   * Model idopont
   */

  export type AggregateIdopont = {
    _count: IdopontCountAggregateOutputType | null
    _avg: IdopontAvgAggregateOutputType | null
    _sum: IdopontSumAggregateOutputType | null
    _min: IdopontMinAggregateOutputType | null
    _max: IdopontMaxAggregateOutputType | null
  }

  export type IdopontAvgAggregateOutputType = {
    id: number | null
    felhaszid: number | null
  }

  export type IdopontSumAggregateOutputType = {
    id: number | null
    felhaszid: number | null
  }

  export type IdopontMinAggregateOutputType = {
    id: number | null
    felhaszid: number | null
    idopont: Date | null
  }

  export type IdopontMaxAggregateOutputType = {
    id: number | null
    felhaszid: number | null
    idopont: Date | null
  }

  export type IdopontCountAggregateOutputType = {
    id: number
    felhaszid: number
    idopont: number
    _all: number
  }


  export type IdopontAvgAggregateInputType = {
    id?: true
    felhaszid?: true
  }

  export type IdopontSumAggregateInputType = {
    id?: true
    felhaszid?: true
  }

  export type IdopontMinAggregateInputType = {
    id?: true
    felhaszid?: true
    idopont?: true
  }

  export type IdopontMaxAggregateInputType = {
    id?: true
    felhaszid?: true
    idopont?: true
  }

  export type IdopontCountAggregateInputType = {
    id?: true
    felhaszid?: true
    idopont?: true
    _all?: true
  }

  export type IdopontAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idopont to aggregate.
     */
    where?: idopontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idoponts to fetch.
     */
    orderBy?: idopontOrderByWithRelationInput | idopontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: idopontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idoponts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idoponts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned idoponts
    **/
    _count?: true | IdopontCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdopontAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdopontSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdopontMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdopontMaxAggregateInputType
  }

  export type GetIdopontAggregateType<T extends IdopontAggregateArgs> = {
        [P in keyof T & keyof AggregateIdopont]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdopont[P]>
      : GetScalarType<T[P], AggregateIdopont[P]>
  }




  export type idopontGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: idopontWhereInput
    orderBy?: idopontOrderByWithAggregationInput | idopontOrderByWithAggregationInput[]
    by: IdopontScalarFieldEnum[] | IdopontScalarFieldEnum
    having?: idopontScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdopontCountAggregateInputType | true
    _avg?: IdopontAvgAggregateInputType
    _sum?: IdopontSumAggregateInputType
    _min?: IdopontMinAggregateInputType
    _max?: IdopontMaxAggregateInputType
  }

  export type IdopontGroupByOutputType = {
    id: number
    felhaszid: number
    idopont: Date
    _count: IdopontCountAggregateOutputType | null
    _avg: IdopontAvgAggregateOutputType | null
    _sum: IdopontSumAggregateOutputType | null
    _min: IdopontMinAggregateOutputType | null
    _max: IdopontMaxAggregateOutputType | null
  }

  type GetIdopontGroupByPayload<T extends idopontGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdopontGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdopontGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdopontGroupByOutputType[P]>
            : GetScalarType<T[P], IdopontGroupByOutputType[P]>
        }
      >
    >


  export type idopontSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    felhaszid?: boolean
    idopont?: boolean
  }, ExtArgs["result"]["idopont"]>



  export type idopontSelectScalar = {
    id?: boolean
    felhaszid?: boolean
    idopont?: boolean
  }

  export type idopontOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "felhaszid" | "idopont", ExtArgs["result"]["idopont"]>

  export type $idopontPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "idopont"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      felhaszid: number
      idopont: Date
    }, ExtArgs["result"]["idopont"]>
    composites: {}
  }

  type idopontGetPayload<S extends boolean | null | undefined | idopontDefaultArgs> = $Result.GetResult<Prisma.$idopontPayload, S>

  type idopontCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<idopontFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdopontCountAggregateInputType | true
    }

  export interface idopontDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['idopont'], meta: { name: 'idopont' } }
    /**
     * Find zero or one Idopont that matches the filter.
     * @param {idopontFindUniqueArgs} args - Arguments to find a Idopont
     * @example
     * // Get one Idopont
     * const idopont = await prisma.idopont.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends idopontFindUniqueArgs>(args: SelectSubset<T, idopontFindUniqueArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Idopont that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {idopontFindUniqueOrThrowArgs} args - Arguments to find a Idopont
     * @example
     * // Get one Idopont
     * const idopont = await prisma.idopont.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends idopontFindUniqueOrThrowArgs>(args: SelectSubset<T, idopontFindUniqueOrThrowArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idopont that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idopontFindFirstArgs} args - Arguments to find a Idopont
     * @example
     * // Get one Idopont
     * const idopont = await prisma.idopont.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends idopontFindFirstArgs>(args?: SelectSubset<T, idopontFindFirstArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Idopont that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idopontFindFirstOrThrowArgs} args - Arguments to find a Idopont
     * @example
     * // Get one Idopont
     * const idopont = await prisma.idopont.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends idopontFindFirstOrThrowArgs>(args?: SelectSubset<T, idopontFindFirstOrThrowArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Idoponts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idopontFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idoponts
     * const idoponts = await prisma.idopont.findMany()
     * 
     * // Get first 10 Idoponts
     * const idoponts = await prisma.idopont.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idopontWithIdOnly = await prisma.idopont.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends idopontFindManyArgs>(args?: SelectSubset<T, idopontFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Idopont.
     * @param {idopontCreateArgs} args - Arguments to create a Idopont.
     * @example
     * // Create one Idopont
     * const Idopont = await prisma.idopont.create({
     *   data: {
     *     // ... data to create a Idopont
     *   }
     * })
     * 
     */
    create<T extends idopontCreateArgs>(args: SelectSubset<T, idopontCreateArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Idoponts.
     * @param {idopontCreateManyArgs} args - Arguments to create many Idoponts.
     * @example
     * // Create many Idoponts
     * const idopont = await prisma.idopont.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends idopontCreateManyArgs>(args?: SelectSubset<T, idopontCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Idopont.
     * @param {idopontDeleteArgs} args - Arguments to delete one Idopont.
     * @example
     * // Delete one Idopont
     * const Idopont = await prisma.idopont.delete({
     *   where: {
     *     // ... filter to delete one Idopont
     *   }
     * })
     * 
     */
    delete<T extends idopontDeleteArgs>(args: SelectSubset<T, idopontDeleteArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Idopont.
     * @param {idopontUpdateArgs} args - Arguments to update one Idopont.
     * @example
     * // Update one Idopont
     * const idopont = await prisma.idopont.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends idopontUpdateArgs>(args: SelectSubset<T, idopontUpdateArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Idoponts.
     * @param {idopontDeleteManyArgs} args - Arguments to filter Idoponts to delete.
     * @example
     * // Delete a few Idoponts
     * const { count } = await prisma.idopont.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends idopontDeleteManyArgs>(args?: SelectSubset<T, idopontDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idoponts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idopontUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idoponts
     * const idopont = await prisma.idopont.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends idopontUpdateManyArgs>(args: SelectSubset<T, idopontUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Idopont.
     * @param {idopontUpsertArgs} args - Arguments to update or create a Idopont.
     * @example
     * // Update or create a Idopont
     * const idopont = await prisma.idopont.upsert({
     *   create: {
     *     // ... data to create a Idopont
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idopont we want to update
     *   }
     * })
     */
    upsert<T extends idopontUpsertArgs>(args: SelectSubset<T, idopontUpsertArgs<ExtArgs>>): Prisma__idopontClient<$Result.GetResult<Prisma.$idopontPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Idoponts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idopontCountArgs} args - Arguments to filter Idoponts to count.
     * @example
     * // Count the number of Idoponts
     * const count = await prisma.idopont.count({
     *   where: {
     *     // ... the filter for the Idoponts we want to count
     *   }
     * })
    **/
    count<T extends idopontCountArgs>(
      args?: Subset<T, idopontCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdopontCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idopont.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdopontAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdopontAggregateArgs>(args: Subset<T, IdopontAggregateArgs>): Prisma.PrismaPromise<GetIdopontAggregateType<T>>

    /**
     * Group by Idopont.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {idopontGroupByArgs} args - Group by arguments.
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
      T extends idopontGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: idopontGroupByArgs['orderBy'] }
        : { orderBy?: idopontGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, idopontGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdopontGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the idopont model
   */
  readonly fields: idopontFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for idopont.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__idopontClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the idopont model
   */
  interface idopontFieldRefs {
    readonly id: FieldRef<"idopont", 'Int'>
    readonly felhaszid: FieldRef<"idopont", 'Int'>
    readonly idopont: FieldRef<"idopont", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * idopont findUnique
   */
  export type idopontFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * Filter, which idopont to fetch.
     */
    where: idopontWhereUniqueInput
  }

  /**
   * idopont findUniqueOrThrow
   */
  export type idopontFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * Filter, which idopont to fetch.
     */
    where: idopontWhereUniqueInput
  }

  /**
   * idopont findFirst
   */
  export type idopontFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * Filter, which idopont to fetch.
     */
    where?: idopontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idoponts to fetch.
     */
    orderBy?: idopontOrderByWithRelationInput | idopontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idoponts.
     */
    cursor?: idopontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idoponts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idoponts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idoponts.
     */
    distinct?: IdopontScalarFieldEnum | IdopontScalarFieldEnum[]
  }

  /**
   * idopont findFirstOrThrow
   */
  export type idopontFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * Filter, which idopont to fetch.
     */
    where?: idopontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idoponts to fetch.
     */
    orderBy?: idopontOrderByWithRelationInput | idopontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for idoponts.
     */
    cursor?: idopontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idoponts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idoponts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of idoponts.
     */
    distinct?: IdopontScalarFieldEnum | IdopontScalarFieldEnum[]
  }

  /**
   * idopont findMany
   */
  export type idopontFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * Filter, which idoponts to fetch.
     */
    where?: idopontWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of idoponts to fetch.
     */
    orderBy?: idopontOrderByWithRelationInput | idopontOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing idoponts.
     */
    cursor?: idopontWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` idoponts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` idoponts.
     */
    skip?: number
    distinct?: IdopontScalarFieldEnum | IdopontScalarFieldEnum[]
  }

  /**
   * idopont create
   */
  export type idopontCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * The data needed to create a idopont.
     */
    data: XOR<idopontCreateInput, idopontUncheckedCreateInput>
  }

  /**
   * idopont createMany
   */
  export type idopontCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many idoponts.
     */
    data: idopontCreateManyInput | idopontCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * idopont update
   */
  export type idopontUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * The data needed to update a idopont.
     */
    data: XOR<idopontUpdateInput, idopontUncheckedUpdateInput>
    /**
     * Choose, which idopont to update.
     */
    where: idopontWhereUniqueInput
  }

  /**
   * idopont updateMany
   */
  export type idopontUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update idoponts.
     */
    data: XOR<idopontUpdateManyMutationInput, idopontUncheckedUpdateManyInput>
    /**
     * Filter which idoponts to update
     */
    where?: idopontWhereInput
    /**
     * Limit how many idoponts to update.
     */
    limit?: number
  }

  /**
   * idopont upsert
   */
  export type idopontUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * The filter to search for the idopont to update in case it exists.
     */
    where: idopontWhereUniqueInput
    /**
     * In case the idopont found by the `where` argument doesn't exist, create a new idopont with this data.
     */
    create: XOR<idopontCreateInput, idopontUncheckedCreateInput>
    /**
     * In case the idopont was found with the provided `where` argument, update it with this data.
     */
    update: XOR<idopontUpdateInput, idopontUncheckedUpdateInput>
  }

  /**
   * idopont delete
   */
  export type idopontDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
    /**
     * Filter which idopont to delete.
     */
    where: idopontWhereUniqueInput
  }

  /**
   * idopont deleteMany
   */
  export type idopontDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which idoponts to delete
     */
    where?: idopontWhereInput
    /**
     * Limit how many idoponts to delete.
     */
    limit?: number
  }

  /**
   * idopont without action
   */
  export type idopontDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the idopont
     */
    select?: idopontSelect<ExtArgs> | null
    /**
     * Omit specific fields from the idopont
     */
    omit?: idopontOmit<ExtArgs> | null
  }


  /**
   * Model borbelyok
   */

  export type AggregateBorbelyok = {
    _count: BorbelyokCountAggregateOutputType | null
    _avg: BorbelyokAvgAggregateOutputType | null
    _sum: BorbelyokSumAggregateOutputType | null
    _min: BorbelyokMinAggregateOutputType | null
    _max: BorbelyokMaxAggregateOutputType | null
  }

  export type BorbelyokAvgAggregateOutputType = {
    id: number | null
    teleszam: number | null
  }

  export type BorbelyokSumAggregateOutputType = {
    id: number | null
    teleszam: number | null
  }

  export type BorbelyokMinAggregateOutputType = {
    id: number | null
    Nev: string | null
    email: string | null
    teleszam: number | null
  }

  export type BorbelyokMaxAggregateOutputType = {
    id: number | null
    Nev: string | null
    email: string | null
    teleszam: number | null
  }

  export type BorbelyokCountAggregateOutputType = {
    id: number
    Nev: number
    email: number
    teleszam: number
    _all: number
  }


  export type BorbelyokAvgAggregateInputType = {
    id?: true
    teleszam?: true
  }

  export type BorbelyokSumAggregateInputType = {
    id?: true
    teleszam?: true
  }

  export type BorbelyokMinAggregateInputType = {
    id?: true
    Nev?: true
    email?: true
    teleszam?: true
  }

  export type BorbelyokMaxAggregateInputType = {
    id?: true
    Nev?: true
    email?: true
    teleszam?: true
  }

  export type BorbelyokCountAggregateInputType = {
    id?: true
    Nev?: true
    email?: true
    teleszam?: true
    _all?: true
  }

  export type BorbelyokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borbelyok to aggregate.
     */
    where?: borbelyokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borbelyoks to fetch.
     */
    orderBy?: borbelyokOrderByWithRelationInput | borbelyokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: borbelyokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borbelyoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borbelyoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned borbelyoks
    **/
    _count?: true | BorbelyokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorbelyokAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorbelyokSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorbelyokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorbelyokMaxAggregateInputType
  }

  export type GetBorbelyokAggregateType<T extends BorbelyokAggregateArgs> = {
        [P in keyof T & keyof AggregateBorbelyok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorbelyok[P]>
      : GetScalarType<T[P], AggregateBorbelyok[P]>
  }




  export type borbelyokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borbelyokWhereInput
    orderBy?: borbelyokOrderByWithAggregationInput | borbelyokOrderByWithAggregationInput[]
    by: BorbelyokScalarFieldEnum[] | BorbelyokScalarFieldEnum
    having?: borbelyokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorbelyokCountAggregateInputType | true
    _avg?: BorbelyokAvgAggregateInputType
    _sum?: BorbelyokSumAggregateInputType
    _min?: BorbelyokMinAggregateInputType
    _max?: BorbelyokMaxAggregateInputType
  }

  export type BorbelyokGroupByOutputType = {
    id: number
    Nev: string
    email: string
    teleszam: number | null
    _count: BorbelyokCountAggregateOutputType | null
    _avg: BorbelyokAvgAggregateOutputType | null
    _sum: BorbelyokSumAggregateOutputType | null
    _min: BorbelyokMinAggregateOutputType | null
    _max: BorbelyokMaxAggregateOutputType | null
  }

  type GetBorbelyokGroupByPayload<T extends borbelyokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorbelyokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorbelyokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorbelyokGroupByOutputType[P]>
            : GetScalarType<T[P], BorbelyokGroupByOutputType[P]>
        }
      >
    >


  export type borbelyokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nev?: boolean
    email?: boolean
    teleszam?: boolean
  }, ExtArgs["result"]["borbelyok"]>



  export type borbelyokSelectScalar = {
    id?: boolean
    Nev?: boolean
    email?: boolean
    teleszam?: boolean
  }

  export type borbelyokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nev" | "email" | "teleszam", ExtArgs["result"]["borbelyok"]>

  export type $borbelyokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "borbelyok"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nev: string
      email: string
      teleszam: number | null
    }, ExtArgs["result"]["borbelyok"]>
    composites: {}
  }

  type borbelyokGetPayload<S extends boolean | null | undefined | borbelyokDefaultArgs> = $Result.GetResult<Prisma.$borbelyokPayload, S>

  type borbelyokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<borbelyokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BorbelyokCountAggregateInputType | true
    }

  export interface borbelyokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['borbelyok'], meta: { name: 'borbelyok' } }
    /**
     * Find zero or one Borbelyok that matches the filter.
     * @param {borbelyokFindUniqueArgs} args - Arguments to find a Borbelyok
     * @example
     * // Get one Borbelyok
     * const borbelyok = await prisma.borbelyok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends borbelyokFindUniqueArgs>(args: SelectSubset<T, borbelyokFindUniqueArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Borbelyok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {borbelyokFindUniqueOrThrowArgs} args - Arguments to find a Borbelyok
     * @example
     * // Get one Borbelyok
     * const borbelyok = await prisma.borbelyok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends borbelyokFindUniqueOrThrowArgs>(args: SelectSubset<T, borbelyokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borbelyok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borbelyokFindFirstArgs} args - Arguments to find a Borbelyok
     * @example
     * // Get one Borbelyok
     * const borbelyok = await prisma.borbelyok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends borbelyokFindFirstArgs>(args?: SelectSubset<T, borbelyokFindFirstArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Borbelyok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borbelyokFindFirstOrThrowArgs} args - Arguments to find a Borbelyok
     * @example
     * // Get one Borbelyok
     * const borbelyok = await prisma.borbelyok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends borbelyokFindFirstOrThrowArgs>(args?: SelectSubset<T, borbelyokFindFirstOrThrowArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Borbelyoks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borbelyokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Borbelyoks
     * const borbelyoks = await prisma.borbelyok.findMany()
     * 
     * // Get first 10 Borbelyoks
     * const borbelyoks = await prisma.borbelyok.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borbelyokWithIdOnly = await prisma.borbelyok.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends borbelyokFindManyArgs>(args?: SelectSubset<T, borbelyokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Borbelyok.
     * @param {borbelyokCreateArgs} args - Arguments to create a Borbelyok.
     * @example
     * // Create one Borbelyok
     * const Borbelyok = await prisma.borbelyok.create({
     *   data: {
     *     // ... data to create a Borbelyok
     *   }
     * })
     * 
     */
    create<T extends borbelyokCreateArgs>(args: SelectSubset<T, borbelyokCreateArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Borbelyoks.
     * @param {borbelyokCreateManyArgs} args - Arguments to create many Borbelyoks.
     * @example
     * // Create many Borbelyoks
     * const borbelyok = await prisma.borbelyok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends borbelyokCreateManyArgs>(args?: SelectSubset<T, borbelyokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Borbelyok.
     * @param {borbelyokDeleteArgs} args - Arguments to delete one Borbelyok.
     * @example
     * // Delete one Borbelyok
     * const Borbelyok = await prisma.borbelyok.delete({
     *   where: {
     *     // ... filter to delete one Borbelyok
     *   }
     * })
     * 
     */
    delete<T extends borbelyokDeleteArgs>(args: SelectSubset<T, borbelyokDeleteArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Borbelyok.
     * @param {borbelyokUpdateArgs} args - Arguments to update one Borbelyok.
     * @example
     * // Update one Borbelyok
     * const borbelyok = await prisma.borbelyok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends borbelyokUpdateArgs>(args: SelectSubset<T, borbelyokUpdateArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Borbelyoks.
     * @param {borbelyokDeleteManyArgs} args - Arguments to filter Borbelyoks to delete.
     * @example
     * // Delete a few Borbelyoks
     * const { count } = await prisma.borbelyok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends borbelyokDeleteManyArgs>(args?: SelectSubset<T, borbelyokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Borbelyoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borbelyokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Borbelyoks
     * const borbelyok = await prisma.borbelyok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends borbelyokUpdateManyArgs>(args: SelectSubset<T, borbelyokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Borbelyok.
     * @param {borbelyokUpsertArgs} args - Arguments to update or create a Borbelyok.
     * @example
     * // Update or create a Borbelyok
     * const borbelyok = await prisma.borbelyok.upsert({
     *   create: {
     *     // ... data to create a Borbelyok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Borbelyok we want to update
     *   }
     * })
     */
    upsert<T extends borbelyokUpsertArgs>(args: SelectSubset<T, borbelyokUpsertArgs<ExtArgs>>): Prisma__borbelyokClient<$Result.GetResult<Prisma.$borbelyokPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Borbelyoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borbelyokCountArgs} args - Arguments to filter Borbelyoks to count.
     * @example
     * // Count the number of Borbelyoks
     * const count = await prisma.borbelyok.count({
     *   where: {
     *     // ... the filter for the Borbelyoks we want to count
     *   }
     * })
    **/
    count<T extends borbelyokCountArgs>(
      args?: Subset<T, borbelyokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorbelyokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Borbelyok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorbelyokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BorbelyokAggregateArgs>(args: Subset<T, BorbelyokAggregateArgs>): Prisma.PrismaPromise<GetBorbelyokAggregateType<T>>

    /**
     * Group by Borbelyok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borbelyokGroupByArgs} args - Group by arguments.
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
      T extends borbelyokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: borbelyokGroupByArgs['orderBy'] }
        : { orderBy?: borbelyokGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, borbelyokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorbelyokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the borbelyok model
   */
  readonly fields: borbelyokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for borbelyok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__borbelyokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the borbelyok model
   */
  interface borbelyokFieldRefs {
    readonly id: FieldRef<"borbelyok", 'Int'>
    readonly Nev: FieldRef<"borbelyok", 'String'>
    readonly email: FieldRef<"borbelyok", 'String'>
    readonly teleszam: FieldRef<"borbelyok", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * borbelyok findUnique
   */
  export type borbelyokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * Filter, which borbelyok to fetch.
     */
    where: borbelyokWhereUniqueInput
  }

  /**
   * borbelyok findUniqueOrThrow
   */
  export type borbelyokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * Filter, which borbelyok to fetch.
     */
    where: borbelyokWhereUniqueInput
  }

  /**
   * borbelyok findFirst
   */
  export type borbelyokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * Filter, which borbelyok to fetch.
     */
    where?: borbelyokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borbelyoks to fetch.
     */
    orderBy?: borbelyokOrderByWithRelationInput | borbelyokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borbelyoks.
     */
    cursor?: borbelyokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borbelyoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borbelyoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borbelyoks.
     */
    distinct?: BorbelyokScalarFieldEnum | BorbelyokScalarFieldEnum[]
  }

  /**
   * borbelyok findFirstOrThrow
   */
  export type borbelyokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * Filter, which borbelyok to fetch.
     */
    where?: borbelyokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borbelyoks to fetch.
     */
    orderBy?: borbelyokOrderByWithRelationInput | borbelyokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borbelyoks.
     */
    cursor?: borbelyokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borbelyoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borbelyoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borbelyoks.
     */
    distinct?: BorbelyokScalarFieldEnum | BorbelyokScalarFieldEnum[]
  }

  /**
   * borbelyok findMany
   */
  export type borbelyokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * Filter, which borbelyoks to fetch.
     */
    where?: borbelyokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borbelyoks to fetch.
     */
    orderBy?: borbelyokOrderByWithRelationInput | borbelyokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing borbelyoks.
     */
    cursor?: borbelyokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borbelyoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borbelyoks.
     */
    skip?: number
    distinct?: BorbelyokScalarFieldEnum | BorbelyokScalarFieldEnum[]
  }

  /**
   * borbelyok create
   */
  export type borbelyokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * The data needed to create a borbelyok.
     */
    data?: XOR<borbelyokCreateInput, borbelyokUncheckedCreateInput>
  }

  /**
   * borbelyok createMany
   */
  export type borbelyokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many borbelyoks.
     */
    data: borbelyokCreateManyInput | borbelyokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * borbelyok update
   */
  export type borbelyokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * The data needed to update a borbelyok.
     */
    data: XOR<borbelyokUpdateInput, borbelyokUncheckedUpdateInput>
    /**
     * Choose, which borbelyok to update.
     */
    where: borbelyokWhereUniqueInput
  }

  /**
   * borbelyok updateMany
   */
  export type borbelyokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update borbelyoks.
     */
    data: XOR<borbelyokUpdateManyMutationInput, borbelyokUncheckedUpdateManyInput>
    /**
     * Filter which borbelyoks to update
     */
    where?: borbelyokWhereInput
    /**
     * Limit how many borbelyoks to update.
     */
    limit?: number
  }

  /**
   * borbelyok upsert
   */
  export type borbelyokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * The filter to search for the borbelyok to update in case it exists.
     */
    where: borbelyokWhereUniqueInput
    /**
     * In case the borbelyok found by the `where` argument doesn't exist, create a new borbelyok with this data.
     */
    create: XOR<borbelyokCreateInput, borbelyokUncheckedCreateInput>
    /**
     * In case the borbelyok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<borbelyokUpdateInput, borbelyokUncheckedUpdateInput>
  }

  /**
   * borbelyok delete
   */
  export type borbelyokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
    /**
     * Filter which borbelyok to delete.
     */
    where: borbelyokWhereUniqueInput
  }

  /**
   * borbelyok deleteMany
   */
  export type borbelyokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borbelyoks to delete
     */
    where?: borbelyokWhereInput
    /**
     * Limit how many borbelyoks to delete.
     */
    limit?: number
  }

  /**
   * borbelyok without action
   */
  export type borbelyokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borbelyok
     */
    select?: borbelyokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the borbelyok
     */
    omit?: borbelyokOmit<ExtArgs> | null
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


  export const FelhasznalokScalarFieldEnum: {
    id: 'id',
    felhnev: 'felhnev',
    email: 'email',
    hash: 'hash',
    telefonszam: 'telefonszam'
  };

  export type FelhasznalokScalarFieldEnum = (typeof FelhasznalokScalarFieldEnum)[keyof typeof FelhasznalokScalarFieldEnum]


  export const IdopontScalarFieldEnum: {
    id: 'id',
    felhaszid: 'felhaszid',
    idopont: 'idopont'
  };

  export type IdopontScalarFieldEnum = (typeof IdopontScalarFieldEnum)[keyof typeof IdopontScalarFieldEnum]


  export const BorbelyokScalarFieldEnum: {
    id: 'id',
    Nev: 'Nev',
    email: 'email',
    teleszam: 'teleszam'
  };

  export type BorbelyokScalarFieldEnum = (typeof BorbelyokScalarFieldEnum)[keyof typeof BorbelyokScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const felhasznalokOrderByRelevanceFieldEnum: {
    felhnev: 'felhnev',
    email: 'email',
    hash: 'hash',
    telefonszam: 'telefonszam'
  };

  export type felhasznalokOrderByRelevanceFieldEnum = (typeof felhasznalokOrderByRelevanceFieldEnum)[keyof typeof felhasznalokOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const borbelyokOrderByRelevanceFieldEnum: {
    Nev: 'Nev',
    email: 'email'
  };

  export type borbelyokOrderByRelevanceFieldEnum = (typeof borbelyokOrderByRelevanceFieldEnum)[keyof typeof borbelyokOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type felhasznalokWhereInput = {
    AND?: felhasznalokWhereInput | felhasznalokWhereInput[]
    OR?: felhasznalokWhereInput[]
    NOT?: felhasznalokWhereInput | felhasznalokWhereInput[]
    id?: IntFilter<"felhasznalok"> | number
    felhnev?: StringFilter<"felhasznalok"> | string
    email?: StringFilter<"felhasznalok"> | string
    hash?: StringFilter<"felhasznalok"> | string
    telefonszam?: StringFilter<"felhasznalok"> | string
  }

  export type felhasznalokOrderByWithRelationInput = {
    id?: SortOrder
    felhnev?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    telefonszam?: SortOrder
    _relevance?: felhasznalokOrderByRelevanceInput
  }

  export type felhasznalokWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: felhasznalokWhereInput | felhasznalokWhereInput[]
    OR?: felhasznalokWhereInput[]
    NOT?: felhasznalokWhereInput | felhasznalokWhereInput[]
    felhnev?: StringFilter<"felhasznalok"> | string
    email?: StringFilter<"felhasznalok"> | string
    hash?: StringFilter<"felhasznalok"> | string
    telefonszam?: StringFilter<"felhasznalok"> | string
  }, "id">

  export type felhasznalokOrderByWithAggregationInput = {
    id?: SortOrder
    felhnev?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    telefonszam?: SortOrder
    _count?: felhasznalokCountOrderByAggregateInput
    _avg?: felhasznalokAvgOrderByAggregateInput
    _max?: felhasznalokMaxOrderByAggregateInput
    _min?: felhasznalokMinOrderByAggregateInput
    _sum?: felhasznalokSumOrderByAggregateInput
  }

  export type felhasznalokScalarWhereWithAggregatesInput = {
    AND?: felhasznalokScalarWhereWithAggregatesInput | felhasznalokScalarWhereWithAggregatesInput[]
    OR?: felhasznalokScalarWhereWithAggregatesInput[]
    NOT?: felhasznalokScalarWhereWithAggregatesInput | felhasznalokScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"felhasznalok"> | number
    felhnev?: StringWithAggregatesFilter<"felhasznalok"> | string
    email?: StringWithAggregatesFilter<"felhasznalok"> | string
    hash?: StringWithAggregatesFilter<"felhasznalok"> | string
    telefonszam?: StringWithAggregatesFilter<"felhasznalok"> | string
  }

  export type idopontWhereInput = {
    AND?: idopontWhereInput | idopontWhereInput[]
    OR?: idopontWhereInput[]
    NOT?: idopontWhereInput | idopontWhereInput[]
    id?: IntFilter<"idopont"> | number
    felhaszid?: IntFilter<"idopont"> | number
    idopont?: DateTimeFilter<"idopont"> | Date | string
  }

  export type idopontOrderByWithRelationInput = {
    id?: SortOrder
    felhaszid?: SortOrder
    idopont?: SortOrder
  }

  export type idopontWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: idopontWhereInput | idopontWhereInput[]
    OR?: idopontWhereInput[]
    NOT?: idopontWhereInput | idopontWhereInput[]
    felhaszid?: IntFilter<"idopont"> | number
    idopont?: DateTimeFilter<"idopont"> | Date | string
  }, "id">

  export type idopontOrderByWithAggregationInput = {
    id?: SortOrder
    felhaszid?: SortOrder
    idopont?: SortOrder
    _count?: idopontCountOrderByAggregateInput
    _avg?: idopontAvgOrderByAggregateInput
    _max?: idopontMaxOrderByAggregateInput
    _min?: idopontMinOrderByAggregateInput
    _sum?: idopontSumOrderByAggregateInput
  }

  export type idopontScalarWhereWithAggregatesInput = {
    AND?: idopontScalarWhereWithAggregatesInput | idopontScalarWhereWithAggregatesInput[]
    OR?: idopontScalarWhereWithAggregatesInput[]
    NOT?: idopontScalarWhereWithAggregatesInput | idopontScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"idopont"> | number
    felhaszid?: IntWithAggregatesFilter<"idopont"> | number
    idopont?: DateTimeWithAggregatesFilter<"idopont"> | Date | string
  }

  export type borbelyokWhereInput = {
    AND?: borbelyokWhereInput | borbelyokWhereInput[]
    OR?: borbelyokWhereInput[]
    NOT?: borbelyokWhereInput | borbelyokWhereInput[]
    id?: IntFilter<"borbelyok"> | number
    Nev?: StringFilter<"borbelyok"> | string
    email?: StringFilter<"borbelyok"> | string
    teleszam?: IntNullableFilter<"borbelyok"> | number | null
  }

  export type borbelyokOrderByWithRelationInput = {
    id?: SortOrder
    Nev?: SortOrder
    email?: SortOrder
    teleszam?: SortOrderInput | SortOrder
    _relevance?: borbelyokOrderByRelevanceInput
  }

  export type borbelyokWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: borbelyokWhereInput | borbelyokWhereInput[]
    OR?: borbelyokWhereInput[]
    NOT?: borbelyokWhereInput | borbelyokWhereInput[]
    Nev?: StringFilter<"borbelyok"> | string
    email?: StringFilter<"borbelyok"> | string
    teleszam?: IntNullableFilter<"borbelyok"> | number | null
  }, "id">

  export type borbelyokOrderByWithAggregationInput = {
    id?: SortOrder
    Nev?: SortOrder
    email?: SortOrder
    teleszam?: SortOrderInput | SortOrder
    _count?: borbelyokCountOrderByAggregateInput
    _avg?: borbelyokAvgOrderByAggregateInput
    _max?: borbelyokMaxOrderByAggregateInput
    _min?: borbelyokMinOrderByAggregateInput
    _sum?: borbelyokSumOrderByAggregateInput
  }

  export type borbelyokScalarWhereWithAggregatesInput = {
    AND?: borbelyokScalarWhereWithAggregatesInput | borbelyokScalarWhereWithAggregatesInput[]
    OR?: borbelyokScalarWhereWithAggregatesInput[]
    NOT?: borbelyokScalarWhereWithAggregatesInput | borbelyokScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"borbelyok"> | number
    Nev?: StringWithAggregatesFilter<"borbelyok"> | string
    email?: StringWithAggregatesFilter<"borbelyok"> | string
    teleszam?: IntNullableWithAggregatesFilter<"borbelyok"> | number | null
  }

  export type felhasznalokCreateInput = {
    felhnev?: string
    email?: string
    hash?: string
    telefonszam?: string
  }

  export type felhasznalokUncheckedCreateInput = {
    id?: number
    felhnev?: string
    email?: string
    hash?: string
    telefonszam?: string
  }

  export type felhasznalokUpdateInput = {
    felhnev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    telefonszam?: StringFieldUpdateOperationsInput | string
  }

  export type felhasznalokUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    felhnev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    telefonszam?: StringFieldUpdateOperationsInput | string
  }

  export type felhasznalokCreateManyInput = {
    id?: number
    felhnev?: string
    email?: string
    hash?: string
    telefonszam?: string
  }

  export type felhasznalokUpdateManyMutationInput = {
    felhnev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    telefonszam?: StringFieldUpdateOperationsInput | string
  }

  export type felhasznalokUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    felhnev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    telefonszam?: StringFieldUpdateOperationsInput | string
  }

  export type idopontCreateInput = {
    felhaszid: number
    idopont: Date | string
  }

  export type idopontUncheckedCreateInput = {
    id?: number
    felhaszid: number
    idopont: Date | string
  }

  export type idopontUpdateInput = {
    felhaszid?: IntFieldUpdateOperationsInput | number
    idopont?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idopontUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    felhaszid?: IntFieldUpdateOperationsInput | number
    idopont?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idopontCreateManyInput = {
    id?: number
    felhaszid: number
    idopont: Date | string
  }

  export type idopontUpdateManyMutationInput = {
    felhaszid?: IntFieldUpdateOperationsInput | number
    idopont?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type idopontUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    felhaszid?: IntFieldUpdateOperationsInput | number
    idopont?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type borbelyokCreateInput = {
    Nev?: string
    email?: string
    teleszam?: number | null
  }

  export type borbelyokUncheckedCreateInput = {
    id?: number
    Nev?: string
    email?: string
    teleszam?: number | null
  }

  export type borbelyokUpdateInput = {
    Nev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teleszam?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type borbelyokUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teleszam?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type borbelyokCreateManyInput = {
    id?: number
    Nev?: string
    email?: string
    teleszam?: number | null
  }

  export type borbelyokUpdateManyMutationInput = {
    Nev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teleszam?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type borbelyokUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nev?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teleszam?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type felhasznalokOrderByRelevanceInput = {
    fields: felhasznalokOrderByRelevanceFieldEnum | felhasznalokOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type felhasznalokCountOrderByAggregateInput = {
    id?: SortOrder
    felhnev?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    telefonszam?: SortOrder
  }

  export type felhasznalokAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type felhasznalokMaxOrderByAggregateInput = {
    id?: SortOrder
    felhnev?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    telefonszam?: SortOrder
  }

  export type felhasznalokMinOrderByAggregateInput = {
    id?: SortOrder
    felhnev?: SortOrder
    email?: SortOrder
    hash?: SortOrder
    telefonszam?: SortOrder
  }

  export type felhasznalokSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type idopontCountOrderByAggregateInput = {
    id?: SortOrder
    felhaszid?: SortOrder
    idopont?: SortOrder
  }

  export type idopontAvgOrderByAggregateInput = {
    id?: SortOrder
    felhaszid?: SortOrder
  }

  export type idopontMaxOrderByAggregateInput = {
    id?: SortOrder
    felhaszid?: SortOrder
    idopont?: SortOrder
  }

  export type idopontMinOrderByAggregateInput = {
    id?: SortOrder
    felhaszid?: SortOrder
    idopont?: SortOrder
  }

  export type idopontSumOrderByAggregateInput = {
    id?: SortOrder
    felhaszid?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type borbelyokOrderByRelevanceInput = {
    fields: borbelyokOrderByRelevanceFieldEnum | borbelyokOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type borbelyokCountOrderByAggregateInput = {
    id?: SortOrder
    Nev?: SortOrder
    email?: SortOrder
    teleszam?: SortOrder
  }

  export type borbelyokAvgOrderByAggregateInput = {
    id?: SortOrder
    teleszam?: SortOrder
  }

  export type borbelyokMaxOrderByAggregateInput = {
    id?: SortOrder
    Nev?: SortOrder
    email?: SortOrder
    teleszam?: SortOrder
  }

  export type borbelyokMinOrderByAggregateInput = {
    id?: SortOrder
    Nev?: SortOrder
    email?: SortOrder
    teleszam?: SortOrder
  }

  export type borbelyokSumOrderByAggregateInput = {
    id?: SortOrder
    teleszam?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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