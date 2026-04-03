
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
 * Model Empresa
 * 
 */
export type Empresa = $Result.DefaultSelection<Prisma.$EmpresaPayload>
/**
 * Model Responsavel
 * 
 */
export type Responsavel = $Result.DefaultSelection<Prisma.$ResponsavelPayload>
/**
 * Model Obra
 * 
 */
export type Obra = $Result.DefaultSelection<Prisma.$ObraPayload>
/**
 * Model Registo
 * 
 */
export type Registo = $Result.DefaultSelection<Prisma.$RegistoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Empresas
 * const empresas = await prisma.empresa.findMany()
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
   * // Fetch zero or more Empresas
   * const empresas = await prisma.empresa.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.empresa`: Exposes CRUD operations for the **Empresa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empresas
    * const empresas = await prisma.empresa.findMany()
    * ```
    */
  get empresa(): Prisma.EmpresaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.responsavel`: Exposes CRUD operations for the **Responsavel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Responsavels
    * const responsavels = await prisma.responsavel.findMany()
    * ```
    */
  get responsavel(): Prisma.ResponsavelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obra`: Exposes CRUD operations for the **Obra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obras
    * const obras = await prisma.obra.findMany()
    * ```
    */
  get obra(): Prisma.ObraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registo`: Exposes CRUD operations for the **Registo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registos
    * const registos = await prisma.registo.findMany()
    * ```
    */
  get registo(): Prisma.RegistoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    Empresa: 'Empresa',
    Responsavel: 'Responsavel',
    Obra: 'Obra',
    Registo: 'Registo'
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
      modelProps: "empresa" | "responsavel" | "obra" | "registo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Empresa: {
        payload: Prisma.$EmpresaPayload<ExtArgs>
        fields: Prisma.EmpresaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmpresaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmpresaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findFirst: {
            args: Prisma.EmpresaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmpresaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          findMany: {
            args: Prisma.EmpresaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          create: {
            args: Prisma.EmpresaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          createMany: {
            args: Prisma.EmpresaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmpresaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          delete: {
            args: Prisma.EmpresaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          update: {
            args: Prisma.EmpresaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          deleteMany: {
            args: Prisma.EmpresaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmpresaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmpresaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>[]
          }
          upsert: {
            args: Prisma.EmpresaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmpresaPayload>
          }
          aggregate: {
            args: Prisma.EmpresaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpresa>
          }
          groupBy: {
            args: Prisma.EmpresaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpresaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmpresaCountArgs<ExtArgs>
            result: $Utils.Optional<EmpresaCountAggregateOutputType> | number
          }
        }
      }
      Responsavel: {
        payload: Prisma.$ResponsavelPayload<ExtArgs>
        fields: Prisma.ResponsavelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResponsavelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResponsavelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          findFirst: {
            args: Prisma.ResponsavelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResponsavelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          findMany: {
            args: Prisma.ResponsavelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>[]
          }
          create: {
            args: Prisma.ResponsavelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          createMany: {
            args: Prisma.ResponsavelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResponsavelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>[]
          }
          delete: {
            args: Prisma.ResponsavelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          update: {
            args: Prisma.ResponsavelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          deleteMany: {
            args: Prisma.ResponsavelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResponsavelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResponsavelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>[]
          }
          upsert: {
            args: Prisma.ResponsavelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResponsavelPayload>
          }
          aggregate: {
            args: Prisma.ResponsavelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResponsavel>
          }
          groupBy: {
            args: Prisma.ResponsavelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResponsavelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResponsavelCountArgs<ExtArgs>
            result: $Utils.Optional<ResponsavelCountAggregateOutputType> | number
          }
        }
      }
      Obra: {
        payload: Prisma.$ObraPayload<ExtArgs>
        fields: Prisma.ObraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findFirst: {
            args: Prisma.ObraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          findMany: {
            args: Prisma.ObraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          create: {
            args: Prisma.ObraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          createMany: {
            args: Prisma.ObraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          delete: {
            args: Prisma.ObraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          update: {
            args: Prisma.ObraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          deleteMany: {
            args: Prisma.ObraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>[]
          }
          upsert: {
            args: Prisma.ObraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObraPayload>
          }
          aggregate: {
            args: Prisma.ObraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObra>
          }
          groupBy: {
            args: Prisma.ObraGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObraGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObraCountArgs<ExtArgs>
            result: $Utils.Optional<ObraCountAggregateOutputType> | number
          }
        }
      }
      Registo: {
        payload: Prisma.$RegistoPayload<ExtArgs>
        fields: Prisma.RegistoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>
          }
          findFirst: {
            args: Prisma.RegistoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>
          }
          findMany: {
            args: Prisma.RegistoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>[]
          }
          create: {
            args: Prisma.RegistoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>
          }
          createMany: {
            args: Prisma.RegistoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>[]
          }
          delete: {
            args: Prisma.RegistoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>
          }
          update: {
            args: Prisma.RegistoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>
          }
          deleteMany: {
            args: Prisma.RegistoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>[]
          }
          upsert: {
            args: Prisma.RegistoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistoPayload>
          }
          aggregate: {
            args: Prisma.RegistoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegisto>
          }
          groupBy: {
            args: Prisma.RegistoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistoGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistoCountArgs<ExtArgs>
            result: $Utils.Optional<RegistoCountAggregateOutputType> | number
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
    empresa?: EmpresaOmit
    responsavel?: ResponsavelOmit
    obra?: ObraOmit
    registo?: RegistoOmit
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
   * Count Type EmpresaCountOutputType
   */

  export type EmpresaCountOutputType = {
    responsaveis: number
    obras: number
  }

  export type EmpresaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsaveis?: boolean | EmpresaCountOutputTypeCountResponsaveisArgs
    obras?: boolean | EmpresaCountOutputTypeCountObrasArgs
  }

  // Custom InputTypes
  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpresaCountOutputType
     */
    select?: EmpresaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountResponsaveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponsavelWhereInput
  }

  /**
   * EmpresaCountOutputType without action
   */
  export type EmpresaCountOutputTypeCountObrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
  }


  /**
   * Count Type ResponsavelCountOutputType
   */

  export type ResponsavelCountOutputType = {
    obras: number
  }

  export type ResponsavelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obras?: boolean | ResponsavelCountOutputTypeCountObrasArgs
  }

  // Custom InputTypes
  /**
   * ResponsavelCountOutputType without action
   */
  export type ResponsavelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResponsavelCountOutputType
     */
    select?: ResponsavelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResponsavelCountOutputType without action
   */
  export type ResponsavelCountOutputTypeCountObrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
  }


  /**
   * Count Type ObraCountOutputType
   */

  export type ObraCountOutputType = {
    registos: number
  }

  export type ObraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registos?: boolean | ObraCountOutputTypeCountRegistosArgs
  }

  // Custom InputTypes
  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObraCountOutputType
     */
    select?: ObraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObraCountOutputType without action
   */
  export type ObraCountOutputTypeCountRegistosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Empresa
   */

  export type AggregateEmpresa = {
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  export type EmpresaMinAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type EmpresaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
  }

  export type EmpresaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type EmpresaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type EmpresaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type EmpresaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type EmpresaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresa to aggregate.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Empresas
    **/
    _count?: true | EmpresaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpresaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpresaMaxAggregateInputType
  }

  export type GetEmpresaAggregateType<T extends EmpresaAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpresa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpresa[P]>
      : GetScalarType<T[P], AggregateEmpresa[P]>
  }




  export type EmpresaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmpresaWhereInput
    orderBy?: EmpresaOrderByWithAggregationInput | EmpresaOrderByWithAggregationInput[]
    by: EmpresaScalarFieldEnum[] | EmpresaScalarFieldEnum
    having?: EmpresaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpresaCountAggregateInputType | true
    _min?: EmpresaMinAggregateInputType
    _max?: EmpresaMaxAggregateInputType
  }

  export type EmpresaGroupByOutputType = {
    id: string
    nome: string
    _count: EmpresaCountAggregateOutputType | null
    _min: EmpresaMinAggregateOutputType | null
    _max: EmpresaMaxAggregateOutputType | null
  }

  type GetEmpresaGroupByPayload<T extends EmpresaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpresaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpresaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
            : GetScalarType<T[P], EmpresaGroupByOutputType[P]>
        }
      >
    >


  export type EmpresaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    responsaveis?: boolean | Empresa$responsaveisArgs<ExtArgs>
    obras?: boolean | Empresa$obrasArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["empresa"]>

  export type EmpresaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type EmpresaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["empresa"]>
  export type EmpresaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsaveis?: boolean | Empresa$responsaveisArgs<ExtArgs>
    obras?: boolean | Empresa$obrasArgs<ExtArgs>
    _count?: boolean | EmpresaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmpresaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmpresaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmpresaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Empresa"
    objects: {
      responsaveis: Prisma.$ResponsavelPayload<ExtArgs>[]
      obras: Prisma.$ObraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
    }, ExtArgs["result"]["empresa"]>
    composites: {}
  }

  type EmpresaGetPayload<S extends boolean | null | undefined | EmpresaDefaultArgs> = $Result.GetResult<Prisma.$EmpresaPayload, S>

  type EmpresaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmpresaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmpresaCountAggregateInputType | true
    }

  export interface EmpresaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Empresa'], meta: { name: 'Empresa' } }
    /**
     * Find zero or one Empresa that matches the filter.
     * @param {EmpresaFindUniqueArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmpresaFindUniqueArgs>(args: SelectSubset<T, EmpresaFindUniqueArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Empresa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmpresaFindUniqueOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmpresaFindUniqueOrThrowArgs>(args: SelectSubset<T, EmpresaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmpresaFindFirstArgs>(args?: SelectSubset<T, EmpresaFindFirstArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Empresa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindFirstOrThrowArgs} args - Arguments to find a Empresa
     * @example
     * // Get one Empresa
     * const empresa = await prisma.empresa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmpresaFindFirstOrThrowArgs>(args?: SelectSubset<T, EmpresaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empresas
     * const empresas = await prisma.empresa.findMany()
     * 
     * // Get first 10 Empresas
     * const empresas = await prisma.empresa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const empresaWithIdOnly = await prisma.empresa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmpresaFindManyArgs>(args?: SelectSubset<T, EmpresaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Empresa.
     * @param {EmpresaCreateArgs} args - Arguments to create a Empresa.
     * @example
     * // Create one Empresa
     * const Empresa = await prisma.empresa.create({
     *   data: {
     *     // ... data to create a Empresa
     *   }
     * })
     * 
     */
    create<T extends EmpresaCreateArgs>(args: SelectSubset<T, EmpresaCreateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Empresas.
     * @param {EmpresaCreateManyArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmpresaCreateManyArgs>(args?: SelectSubset<T, EmpresaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Empresas and returns the data saved in the database.
     * @param {EmpresaCreateManyAndReturnArgs} args - Arguments to create many Empresas.
     * @example
     * // Create many Empresas
     * const empresa = await prisma.empresa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmpresaCreateManyAndReturnArgs>(args?: SelectSubset<T, EmpresaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Empresa.
     * @param {EmpresaDeleteArgs} args - Arguments to delete one Empresa.
     * @example
     * // Delete one Empresa
     * const Empresa = await prisma.empresa.delete({
     *   where: {
     *     // ... filter to delete one Empresa
     *   }
     * })
     * 
     */
    delete<T extends EmpresaDeleteArgs>(args: SelectSubset<T, EmpresaDeleteArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Empresa.
     * @param {EmpresaUpdateArgs} args - Arguments to update one Empresa.
     * @example
     * // Update one Empresa
     * const empresa = await prisma.empresa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmpresaUpdateArgs>(args: SelectSubset<T, EmpresaUpdateArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Empresas.
     * @param {EmpresaDeleteManyArgs} args - Arguments to filter Empresas to delete.
     * @example
     * // Delete a few Empresas
     * const { count } = await prisma.empresa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmpresaDeleteManyArgs>(args?: SelectSubset<T, EmpresaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmpresaUpdateManyArgs>(args: SelectSubset<T, EmpresaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empresas and returns the data updated in the database.
     * @param {EmpresaUpdateManyAndReturnArgs} args - Arguments to update many Empresas.
     * @example
     * // Update many Empresas
     * const empresa = await prisma.empresa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Empresas and only return the `id`
     * const empresaWithIdOnly = await prisma.empresa.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmpresaUpdateManyAndReturnArgs>(args: SelectSubset<T, EmpresaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Empresa.
     * @param {EmpresaUpsertArgs} args - Arguments to update or create a Empresa.
     * @example
     * // Update or create a Empresa
     * const empresa = await prisma.empresa.upsert({
     *   create: {
     *     // ... data to create a Empresa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empresa we want to update
     *   }
     * })
     */
    upsert<T extends EmpresaUpsertArgs>(args: SelectSubset<T, EmpresaUpsertArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaCountArgs} args - Arguments to filter Empresas to count.
     * @example
     * // Count the number of Empresas
     * const count = await prisma.empresa.count({
     *   where: {
     *     // ... the filter for the Empresas we want to count
     *   }
     * })
    **/
    count<T extends EmpresaCountArgs>(
      args?: Subset<T, EmpresaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpresaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpresaAggregateArgs>(args: Subset<T, EmpresaAggregateArgs>): Prisma.PrismaPromise<GetEmpresaAggregateType<T>>

    /**
     * Group by Empresa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpresaGroupByArgs} args - Group by arguments.
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
      T extends EmpresaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmpresaGroupByArgs['orderBy'] }
        : { orderBy?: EmpresaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmpresaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpresaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Empresa model
   */
  readonly fields: EmpresaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Empresa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmpresaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsaveis<T extends Empresa$responsaveisArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$responsaveisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    obras<T extends Empresa$obrasArgs<ExtArgs> = {}>(args?: Subset<T, Empresa$obrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Empresa model
   */
  interface EmpresaFieldRefs {
    readonly id: FieldRef<"Empresa", 'String'>
    readonly nome: FieldRef<"Empresa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Empresa findUnique
   */
  export type EmpresaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findUniqueOrThrow
   */
  export type EmpresaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa findFirst
   */
  export type EmpresaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findFirstOrThrow
   */
  export type EmpresaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresa to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa findMany
   */
  export type EmpresaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter, which Empresas to fetch.
     */
    where?: EmpresaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Empresas to fetch.
     */
    orderBy?: EmpresaOrderByWithRelationInput | EmpresaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Empresas.
     */
    cursor?: EmpresaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Empresas.
     */
    distinct?: EmpresaScalarFieldEnum | EmpresaScalarFieldEnum[]
  }

  /**
   * Empresa create
   */
  export type EmpresaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to create a Empresa.
     */
    data: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
  }

  /**
   * Empresa createMany
   */
  export type EmpresaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa createManyAndReturn
   */
  export type EmpresaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to create many Empresas.
     */
    data: EmpresaCreateManyInput | EmpresaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Empresa update
   */
  export type EmpresaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The data needed to update a Empresa.
     */
    data: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
    /**
     * Choose, which Empresa to update.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa updateMany
   */
  export type EmpresaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa updateManyAndReturn
   */
  export type EmpresaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * The data used to update Empresas.
     */
    data: XOR<EmpresaUpdateManyMutationInput, EmpresaUncheckedUpdateManyInput>
    /**
     * Filter which Empresas to update
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to update.
     */
    limit?: number
  }

  /**
   * Empresa upsert
   */
  export type EmpresaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * The filter to search for the Empresa to update in case it exists.
     */
    where: EmpresaWhereUniqueInput
    /**
     * In case the Empresa found by the `where` argument doesn't exist, create a new Empresa with this data.
     */
    create: XOR<EmpresaCreateInput, EmpresaUncheckedCreateInput>
    /**
     * In case the Empresa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmpresaUpdateInput, EmpresaUncheckedUpdateInput>
  }

  /**
   * Empresa delete
   */
  export type EmpresaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
    /**
     * Filter which Empresa to delete.
     */
    where: EmpresaWhereUniqueInput
  }

  /**
   * Empresa deleteMany
   */
  export type EmpresaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Empresas to delete
     */
    where?: EmpresaWhereInput
    /**
     * Limit how many Empresas to delete.
     */
    limit?: number
  }

  /**
   * Empresa.responsaveis
   */
  export type Empresa$responsaveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    where?: ResponsavelWhereInput
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    cursor?: ResponsavelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResponsavelScalarFieldEnum | ResponsavelScalarFieldEnum[]
  }

  /**
   * Empresa.obras
   */
  export type Empresa$obrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    cursor?: ObraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Empresa without action
   */
  export type EmpresaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Empresa
     */
    select?: EmpresaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Empresa
     */
    omit?: EmpresaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmpresaInclude<ExtArgs> | null
  }


  /**
   * Model Responsavel
   */

  export type AggregateResponsavel = {
    _count: ResponsavelCountAggregateOutputType | null
    _avg: ResponsavelAvgAggregateOutputType | null
    _sum: ResponsavelSumAggregateOutputType | null
    _min: ResponsavelMinAggregateOutputType | null
    _max: ResponsavelMaxAggregateOutputType | null
  }

  export type ResponsavelAvgAggregateOutputType = {
    id: number | null
  }

  export type ResponsavelSumAggregateOutputType = {
    id: number | null
  }

  export type ResponsavelMinAggregateOutputType = {
    id: number | null
    nome: string | null
    empresaId: string | null
  }

  export type ResponsavelMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    empresaId: string | null
  }

  export type ResponsavelCountAggregateOutputType = {
    id: number
    nome: number
    empresaId: number
    _all: number
  }


  export type ResponsavelAvgAggregateInputType = {
    id?: true
  }

  export type ResponsavelSumAggregateInputType = {
    id?: true
  }

  export type ResponsavelMinAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
  }

  export type ResponsavelMaxAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
  }

  export type ResponsavelCountAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    _all?: true
  }

  export type ResponsavelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsavel to aggregate.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Responsavels
    **/
    _count?: true | ResponsavelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResponsavelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResponsavelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResponsavelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResponsavelMaxAggregateInputType
  }

  export type GetResponsavelAggregateType<T extends ResponsavelAggregateArgs> = {
        [P in keyof T & keyof AggregateResponsavel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResponsavel[P]>
      : GetScalarType<T[P], AggregateResponsavel[P]>
  }




  export type ResponsavelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResponsavelWhereInput
    orderBy?: ResponsavelOrderByWithAggregationInput | ResponsavelOrderByWithAggregationInput[]
    by: ResponsavelScalarFieldEnum[] | ResponsavelScalarFieldEnum
    having?: ResponsavelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResponsavelCountAggregateInputType | true
    _avg?: ResponsavelAvgAggregateInputType
    _sum?: ResponsavelSumAggregateInputType
    _min?: ResponsavelMinAggregateInputType
    _max?: ResponsavelMaxAggregateInputType
  }

  export type ResponsavelGroupByOutputType = {
    id: number
    nome: string
    empresaId: string
    _count: ResponsavelCountAggregateOutputType | null
    _avg: ResponsavelAvgAggregateOutputType | null
    _sum: ResponsavelSumAggregateOutputType | null
    _min: ResponsavelMinAggregateOutputType | null
    _max: ResponsavelMaxAggregateOutputType | null
  }

  type GetResponsavelGroupByPayload<T extends ResponsavelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResponsavelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResponsavelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResponsavelGroupByOutputType[P]>
            : GetScalarType<T[P], ResponsavelGroupByOutputType[P]>
        }
      >
    >


  export type ResponsavelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    obras?: boolean | Responsavel$obrasArgs<ExtArgs>
    _count?: boolean | ResponsavelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responsavel"]>

  export type ResponsavelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responsavel"]>

  export type ResponsavelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["responsavel"]>

  export type ResponsavelSelectScalar = {
    id?: boolean
    nome?: boolean
    empresaId?: boolean
  }

  export type ResponsavelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "empresaId", ExtArgs["result"]["responsavel"]>
  export type ResponsavelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    obras?: boolean | Responsavel$obrasArgs<ExtArgs>
    _count?: boolean | ResponsavelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResponsavelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }
  export type ResponsavelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
  }

  export type $ResponsavelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Responsavel"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      obras: Prisma.$ObraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      empresaId: string
    }, ExtArgs["result"]["responsavel"]>
    composites: {}
  }

  type ResponsavelGetPayload<S extends boolean | null | undefined | ResponsavelDefaultArgs> = $Result.GetResult<Prisma.$ResponsavelPayload, S>

  type ResponsavelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResponsavelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResponsavelCountAggregateInputType | true
    }

  export interface ResponsavelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Responsavel'], meta: { name: 'Responsavel' } }
    /**
     * Find zero or one Responsavel that matches the filter.
     * @param {ResponsavelFindUniqueArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResponsavelFindUniqueArgs>(args: SelectSubset<T, ResponsavelFindUniqueArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Responsavel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResponsavelFindUniqueOrThrowArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResponsavelFindUniqueOrThrowArgs>(args: SelectSubset<T, ResponsavelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responsavel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelFindFirstArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResponsavelFindFirstArgs>(args?: SelectSubset<T, ResponsavelFindFirstArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Responsavel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelFindFirstOrThrowArgs} args - Arguments to find a Responsavel
     * @example
     * // Get one Responsavel
     * const responsavel = await prisma.responsavel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResponsavelFindFirstOrThrowArgs>(args?: SelectSubset<T, ResponsavelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Responsavels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Responsavels
     * const responsavels = await prisma.responsavel.findMany()
     * 
     * // Get first 10 Responsavels
     * const responsavels = await prisma.responsavel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const responsavelWithIdOnly = await prisma.responsavel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResponsavelFindManyArgs>(args?: SelectSubset<T, ResponsavelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Responsavel.
     * @param {ResponsavelCreateArgs} args - Arguments to create a Responsavel.
     * @example
     * // Create one Responsavel
     * const Responsavel = await prisma.responsavel.create({
     *   data: {
     *     // ... data to create a Responsavel
     *   }
     * })
     * 
     */
    create<T extends ResponsavelCreateArgs>(args: SelectSubset<T, ResponsavelCreateArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Responsavels.
     * @param {ResponsavelCreateManyArgs} args - Arguments to create many Responsavels.
     * @example
     * // Create many Responsavels
     * const responsavel = await prisma.responsavel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResponsavelCreateManyArgs>(args?: SelectSubset<T, ResponsavelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Responsavels and returns the data saved in the database.
     * @param {ResponsavelCreateManyAndReturnArgs} args - Arguments to create many Responsavels.
     * @example
     * // Create many Responsavels
     * const responsavel = await prisma.responsavel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Responsavels and only return the `id`
     * const responsavelWithIdOnly = await prisma.responsavel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResponsavelCreateManyAndReturnArgs>(args?: SelectSubset<T, ResponsavelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Responsavel.
     * @param {ResponsavelDeleteArgs} args - Arguments to delete one Responsavel.
     * @example
     * // Delete one Responsavel
     * const Responsavel = await prisma.responsavel.delete({
     *   where: {
     *     // ... filter to delete one Responsavel
     *   }
     * })
     * 
     */
    delete<T extends ResponsavelDeleteArgs>(args: SelectSubset<T, ResponsavelDeleteArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Responsavel.
     * @param {ResponsavelUpdateArgs} args - Arguments to update one Responsavel.
     * @example
     * // Update one Responsavel
     * const responsavel = await prisma.responsavel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResponsavelUpdateArgs>(args: SelectSubset<T, ResponsavelUpdateArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Responsavels.
     * @param {ResponsavelDeleteManyArgs} args - Arguments to filter Responsavels to delete.
     * @example
     * // Delete a few Responsavels
     * const { count } = await prisma.responsavel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResponsavelDeleteManyArgs>(args?: SelectSubset<T, ResponsavelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responsavels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Responsavels
     * const responsavel = await prisma.responsavel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResponsavelUpdateManyArgs>(args: SelectSubset<T, ResponsavelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Responsavels and returns the data updated in the database.
     * @param {ResponsavelUpdateManyAndReturnArgs} args - Arguments to update many Responsavels.
     * @example
     * // Update many Responsavels
     * const responsavel = await prisma.responsavel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Responsavels and only return the `id`
     * const responsavelWithIdOnly = await prisma.responsavel.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResponsavelUpdateManyAndReturnArgs>(args: SelectSubset<T, ResponsavelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Responsavel.
     * @param {ResponsavelUpsertArgs} args - Arguments to update or create a Responsavel.
     * @example
     * // Update or create a Responsavel
     * const responsavel = await prisma.responsavel.upsert({
     *   create: {
     *     // ... data to create a Responsavel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Responsavel we want to update
     *   }
     * })
     */
    upsert<T extends ResponsavelUpsertArgs>(args: SelectSubset<T, ResponsavelUpsertArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Responsavels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelCountArgs} args - Arguments to filter Responsavels to count.
     * @example
     * // Count the number of Responsavels
     * const count = await prisma.responsavel.count({
     *   where: {
     *     // ... the filter for the Responsavels we want to count
     *   }
     * })
    **/
    count<T extends ResponsavelCountArgs>(
      args?: Subset<T, ResponsavelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResponsavelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Responsavel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResponsavelAggregateArgs>(args: Subset<T, ResponsavelAggregateArgs>): Prisma.PrismaPromise<GetResponsavelAggregateType<T>>

    /**
     * Group by Responsavel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResponsavelGroupByArgs} args - Group by arguments.
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
      T extends ResponsavelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResponsavelGroupByArgs['orderBy'] }
        : { orderBy?: ResponsavelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResponsavelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResponsavelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Responsavel model
   */
  readonly fields: ResponsavelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Responsavel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResponsavelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    obras<T extends Responsavel$obrasArgs<ExtArgs> = {}>(args?: Subset<T, Responsavel$obrasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Responsavel model
   */
  interface ResponsavelFieldRefs {
    readonly id: FieldRef<"Responsavel", 'Int'>
    readonly nome: FieldRef<"Responsavel", 'String'>
    readonly empresaId: FieldRef<"Responsavel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Responsavel findUnique
   */
  export type ResponsavelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel findUniqueOrThrow
   */
  export type ResponsavelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel findFirst
   */
  export type ResponsavelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsavels.
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsavels.
     */
    distinct?: ResponsavelScalarFieldEnum | ResponsavelScalarFieldEnum[]
  }

  /**
   * Responsavel findFirstOrThrow
   */
  export type ResponsavelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavel to fetch.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Responsavels.
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsavels.
     */
    distinct?: ResponsavelScalarFieldEnum | ResponsavelScalarFieldEnum[]
  }

  /**
   * Responsavel findMany
   */
  export type ResponsavelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter, which Responsavels to fetch.
     */
    where?: ResponsavelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Responsavels to fetch.
     */
    orderBy?: ResponsavelOrderByWithRelationInput | ResponsavelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Responsavels.
     */
    cursor?: ResponsavelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Responsavels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Responsavels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Responsavels.
     */
    distinct?: ResponsavelScalarFieldEnum | ResponsavelScalarFieldEnum[]
  }

  /**
   * Responsavel create
   */
  export type ResponsavelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * The data needed to create a Responsavel.
     */
    data: XOR<ResponsavelCreateInput, ResponsavelUncheckedCreateInput>
  }

  /**
   * Responsavel createMany
   */
  export type ResponsavelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Responsavels.
     */
    data: ResponsavelCreateManyInput | ResponsavelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Responsavel createManyAndReturn
   */
  export type ResponsavelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * The data used to create many Responsavels.
     */
    data: ResponsavelCreateManyInput | ResponsavelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Responsavel update
   */
  export type ResponsavelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * The data needed to update a Responsavel.
     */
    data: XOR<ResponsavelUpdateInput, ResponsavelUncheckedUpdateInput>
    /**
     * Choose, which Responsavel to update.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel updateMany
   */
  export type ResponsavelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Responsavels.
     */
    data: XOR<ResponsavelUpdateManyMutationInput, ResponsavelUncheckedUpdateManyInput>
    /**
     * Filter which Responsavels to update
     */
    where?: ResponsavelWhereInput
    /**
     * Limit how many Responsavels to update.
     */
    limit?: number
  }

  /**
   * Responsavel updateManyAndReturn
   */
  export type ResponsavelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * The data used to update Responsavels.
     */
    data: XOR<ResponsavelUpdateManyMutationInput, ResponsavelUncheckedUpdateManyInput>
    /**
     * Filter which Responsavels to update
     */
    where?: ResponsavelWhereInput
    /**
     * Limit how many Responsavels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Responsavel upsert
   */
  export type ResponsavelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * The filter to search for the Responsavel to update in case it exists.
     */
    where: ResponsavelWhereUniqueInput
    /**
     * In case the Responsavel found by the `where` argument doesn't exist, create a new Responsavel with this data.
     */
    create: XOR<ResponsavelCreateInput, ResponsavelUncheckedCreateInput>
    /**
     * In case the Responsavel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResponsavelUpdateInput, ResponsavelUncheckedUpdateInput>
  }

  /**
   * Responsavel delete
   */
  export type ResponsavelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    /**
     * Filter which Responsavel to delete.
     */
    where: ResponsavelWhereUniqueInput
  }

  /**
   * Responsavel deleteMany
   */
  export type ResponsavelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Responsavels to delete
     */
    where?: ResponsavelWhereInput
    /**
     * Limit how many Responsavels to delete.
     */
    limit?: number
  }

  /**
   * Responsavel.obras
   */
  export type Responsavel$obrasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    cursor?: ObraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Responsavel without action
   */
  export type ResponsavelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
  }


  /**
   * Model Obra
   */

  export type AggregateObra = {
    _count: ObraCountAggregateOutputType | null
    _avg: ObraAvgAggregateOutputType | null
    _sum: ObraSumAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  export type ObraAvgAggregateOutputType = {
    responsavelId: number | null
  }

  export type ObraSumAggregateOutputType = {
    responsavelId: number | null
  }

  export type ObraMinAggregateOutputType = {
    id: string | null
    nome: string | null
    empresaId: string | null
    responsavelId: number | null
  }

  export type ObraMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    empresaId: string | null
    responsavelId: number | null
  }

  export type ObraCountAggregateOutputType = {
    id: number
    nome: number
    empresaId: number
    responsavelId: number
    _all: number
  }


  export type ObraAvgAggregateInputType = {
    responsavelId?: true
  }

  export type ObraSumAggregateInputType = {
    responsavelId?: true
  }

  export type ObraMinAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    responsavelId?: true
  }

  export type ObraMaxAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    responsavelId?: true
  }

  export type ObraCountAggregateInputType = {
    id?: true
    nome?: true
    empresaId?: true
    responsavelId?: true
    _all?: true
  }

  export type ObraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obra to aggregate.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obras
    **/
    _count?: true | ObraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObraMaxAggregateInputType
  }

  export type GetObraAggregateType<T extends ObraAggregateArgs> = {
        [P in keyof T & keyof AggregateObra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObra[P]>
      : GetScalarType<T[P], AggregateObra[P]>
  }




  export type ObraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObraWhereInput
    orderBy?: ObraOrderByWithAggregationInput | ObraOrderByWithAggregationInput[]
    by: ObraScalarFieldEnum[] | ObraScalarFieldEnum
    having?: ObraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObraCountAggregateInputType | true
    _avg?: ObraAvgAggregateInputType
    _sum?: ObraSumAggregateInputType
    _min?: ObraMinAggregateInputType
    _max?: ObraMaxAggregateInputType
  }

  export type ObraGroupByOutputType = {
    id: string
    nome: string
    empresaId: string
    responsavelId: number | null
    _count: ObraCountAggregateOutputType | null
    _avg: ObraAvgAggregateOutputType | null
    _sum: ObraSumAggregateOutputType | null
    _min: ObraMinAggregateOutputType | null
    _max: ObraMaxAggregateOutputType | null
  }

  type GetObraGroupByPayload<T extends ObraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObraGroupByOutputType[P]>
            : GetScalarType<T[P], ObraGroupByOutputType[P]>
        }
      >
    >


  export type ObraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    responsavelId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    responsavel?: boolean | Obra$responsavelArgs<ExtArgs>
    registos?: boolean | Obra$registosArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    responsavelId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    responsavel?: boolean | Obra$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    responsavelId?: boolean
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    responsavel?: boolean | Obra$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["obra"]>

  export type ObraSelectScalar = {
    id?: boolean
    nome?: boolean
    empresaId?: boolean
    responsavelId?: boolean
  }

  export type ObraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "empresaId" | "responsavelId", ExtArgs["result"]["obra"]>
  export type ObraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    responsavel?: boolean | Obra$responsavelArgs<ExtArgs>
    registos?: boolean | Obra$registosArgs<ExtArgs>
    _count?: boolean | ObraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    responsavel?: boolean | Obra$responsavelArgs<ExtArgs>
  }
  export type ObraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresa?: boolean | EmpresaDefaultArgs<ExtArgs>
    responsavel?: boolean | Obra$responsavelArgs<ExtArgs>
  }

  export type $ObraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obra"
    objects: {
      empresa: Prisma.$EmpresaPayload<ExtArgs>
      responsavel: Prisma.$ResponsavelPayload<ExtArgs> | null
      registos: Prisma.$RegistoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      empresaId: string
      responsavelId: number | null
    }, ExtArgs["result"]["obra"]>
    composites: {}
  }

  type ObraGetPayload<S extends boolean | null | undefined | ObraDefaultArgs> = $Result.GetResult<Prisma.$ObraPayload, S>

  type ObraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObraCountAggregateInputType | true
    }

  export interface ObraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obra'], meta: { name: 'Obra' } }
    /**
     * Find zero or one Obra that matches the filter.
     * @param {ObraFindUniqueArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObraFindUniqueArgs>(args: SelectSubset<T, ObraFindUniqueArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObraFindUniqueOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObraFindUniqueOrThrowArgs>(args: SelectSubset<T, ObraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObraFindFirstArgs>(args?: SelectSubset<T, ObraFindFirstArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindFirstOrThrowArgs} args - Arguments to find a Obra
     * @example
     * // Get one Obra
     * const obra = await prisma.obra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObraFindFirstOrThrowArgs>(args?: SelectSubset<T, ObraFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obras
     * const obras = await prisma.obra.findMany()
     * 
     * // Get first 10 Obras
     * const obras = await prisma.obra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obraWithIdOnly = await prisma.obra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObraFindManyArgs>(args?: SelectSubset<T, ObraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obra.
     * @param {ObraCreateArgs} args - Arguments to create a Obra.
     * @example
     * // Create one Obra
     * const Obra = await prisma.obra.create({
     *   data: {
     *     // ... data to create a Obra
     *   }
     * })
     * 
     */
    create<T extends ObraCreateArgs>(args: SelectSubset<T, ObraCreateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obras.
     * @param {ObraCreateManyArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObraCreateManyArgs>(args?: SelectSubset<T, ObraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obras and returns the data saved in the database.
     * @param {ObraCreateManyAndReturnArgs} args - Arguments to create many Obras.
     * @example
     * // Create many Obras
     * const obra = await prisma.obra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObraCreateManyAndReturnArgs>(args?: SelectSubset<T, ObraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obra.
     * @param {ObraDeleteArgs} args - Arguments to delete one Obra.
     * @example
     * // Delete one Obra
     * const Obra = await prisma.obra.delete({
     *   where: {
     *     // ... filter to delete one Obra
     *   }
     * })
     * 
     */
    delete<T extends ObraDeleteArgs>(args: SelectSubset<T, ObraDeleteArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obra.
     * @param {ObraUpdateArgs} args - Arguments to update one Obra.
     * @example
     * // Update one Obra
     * const obra = await prisma.obra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObraUpdateArgs>(args: SelectSubset<T, ObraUpdateArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obras.
     * @param {ObraDeleteManyArgs} args - Arguments to filter Obras to delete.
     * @example
     * // Delete a few Obras
     * const { count } = await prisma.obra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObraDeleteManyArgs>(args?: SelectSubset<T, ObraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObraUpdateManyArgs>(args: SelectSubset<T, ObraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obras and returns the data updated in the database.
     * @param {ObraUpdateManyAndReturnArgs} args - Arguments to update many Obras.
     * @example
     * // Update many Obras
     * const obra = await prisma.obra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obras and only return the `id`
     * const obraWithIdOnly = await prisma.obra.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObraUpdateManyAndReturnArgs>(args: SelectSubset<T, ObraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obra.
     * @param {ObraUpsertArgs} args - Arguments to update or create a Obra.
     * @example
     * // Update or create a Obra
     * const obra = await prisma.obra.upsert({
     *   create: {
     *     // ... data to create a Obra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obra we want to update
     *   }
     * })
     */
    upsert<T extends ObraUpsertArgs>(args: SelectSubset<T, ObraUpsertArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraCountArgs} args - Arguments to filter Obras to count.
     * @example
     * // Count the number of Obras
     * const count = await prisma.obra.count({
     *   where: {
     *     // ... the filter for the Obras we want to count
     *   }
     * })
    **/
    count<T extends ObraCountArgs>(
      args?: Subset<T, ObraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObraAggregateArgs>(args: Subset<T, ObraAggregateArgs>): Prisma.PrismaPromise<GetObraAggregateType<T>>

    /**
     * Group by Obra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObraGroupByArgs} args - Group by arguments.
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
      T extends ObraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObraGroupByArgs['orderBy'] }
        : { orderBy?: ObraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obra model
   */
  readonly fields: ObraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresa<T extends EmpresaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmpresaDefaultArgs<ExtArgs>>): Prisma__EmpresaClient<$Result.GetResult<Prisma.$EmpresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends Obra$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, Obra$responsavelArgs<ExtArgs>>): Prisma__ResponsavelClient<$Result.GetResult<Prisma.$ResponsavelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registos<T extends Obra$registosArgs<ExtArgs> = {}>(args?: Subset<T, Obra$registosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Obra model
   */
  interface ObraFieldRefs {
    readonly id: FieldRef<"Obra", 'String'>
    readonly nome: FieldRef<"Obra", 'String'>
    readonly empresaId: FieldRef<"Obra", 'String'>
    readonly responsavelId: FieldRef<"Obra", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Obra findUnique
   */
  export type ObraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findUniqueOrThrow
   */
  export type ObraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra findFirst
   */
  export type ObraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findFirstOrThrow
   */
  export type ObraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obra to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra findMany
   */
  export type ObraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter, which Obras to fetch.
     */
    where?: ObraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obras to fetch.
     */
    orderBy?: ObraOrderByWithRelationInput | ObraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obras.
     */
    cursor?: ObraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obras.
     */
    distinct?: ObraScalarFieldEnum | ObraScalarFieldEnum[]
  }

  /**
   * Obra create
   */
  export type ObraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to create a Obra.
     */
    data: XOR<ObraCreateInput, ObraUncheckedCreateInput>
  }

  /**
   * Obra createMany
   */
  export type ObraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obra createManyAndReturn
   */
  export type ObraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to create many Obras.
     */
    data: ObraCreateManyInput | ObraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Obra update
   */
  export type ObraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The data needed to update a Obra.
     */
    data: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
    /**
     * Choose, which Obra to update.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra updateMany
   */
  export type ObraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
  }

  /**
   * Obra updateManyAndReturn
   */
  export type ObraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * The data used to update Obras.
     */
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyInput>
    /**
     * Filter which Obras to update
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Obra upsert
   */
  export type ObraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * The filter to search for the Obra to update in case it exists.
     */
    where: ObraWhereUniqueInput
    /**
     * In case the Obra found by the `where` argument doesn't exist, create a new Obra with this data.
     */
    create: XOR<ObraCreateInput, ObraUncheckedCreateInput>
    /**
     * In case the Obra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObraUpdateInput, ObraUncheckedUpdateInput>
  }

  /**
   * Obra delete
   */
  export type ObraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
    /**
     * Filter which Obra to delete.
     */
    where: ObraWhereUniqueInput
  }

  /**
   * Obra deleteMany
   */
  export type ObraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obras to delete
     */
    where?: ObraWhereInput
    /**
     * Limit how many Obras to delete.
     */
    limit?: number
  }

  /**
   * Obra.responsavel
   */
  export type Obra$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Responsavel
     */
    select?: ResponsavelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Responsavel
     */
    omit?: ResponsavelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResponsavelInclude<ExtArgs> | null
    where?: ResponsavelWhereInput
  }

  /**
   * Obra.registos
   */
  export type Obra$registosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    where?: RegistoWhereInput
    orderBy?: RegistoOrderByWithRelationInput | RegistoOrderByWithRelationInput[]
    cursor?: RegistoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistoScalarFieldEnum | RegistoScalarFieldEnum[]
  }

  /**
   * Obra without action
   */
  export type ObraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obra
     */
    select?: ObraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obra
     */
    omit?: ObraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObraInclude<ExtArgs> | null
  }


  /**
   * Model Registo
   */

  export type AggregateRegisto = {
    _count: RegistoCountAggregateOutputType | null
    _avg: RegistoAvgAggregateOutputType | null
    _sum: RegistoSumAggregateOutputType | null
    _min: RegistoMinAggregateOutputType | null
    _max: RegistoMaxAggregateOutputType | null
  }

  export type RegistoAvgAggregateOutputType = {
    horas: Decimal | null
  }

  export type RegistoSumAggregateOutputType = {
    horas: Decimal | null
  }

  export type RegistoMinAggregateOutputType = {
    id: string | null
    colaborador: string | null
    data: Date | null
    horas: Decimal | null
    tempoFormatado: string | null
    obraId: string | null
  }

  export type RegistoMaxAggregateOutputType = {
    id: string | null
    colaborador: string | null
    data: Date | null
    horas: Decimal | null
    tempoFormatado: string | null
    obraId: string | null
  }

  export type RegistoCountAggregateOutputType = {
    id: number
    colaborador: number
    data: number
    horas: number
    tempoFormatado: number
    obraId: number
    _all: number
  }


  export type RegistoAvgAggregateInputType = {
    horas?: true
  }

  export type RegistoSumAggregateInputType = {
    horas?: true
  }

  export type RegistoMinAggregateInputType = {
    id?: true
    colaborador?: true
    data?: true
    horas?: true
    tempoFormatado?: true
    obraId?: true
  }

  export type RegistoMaxAggregateInputType = {
    id?: true
    colaborador?: true
    data?: true
    horas?: true
    tempoFormatado?: true
    obraId?: true
  }

  export type RegistoCountAggregateInputType = {
    id?: true
    colaborador?: true
    data?: true
    horas?: true
    tempoFormatado?: true
    obraId?: true
    _all?: true
  }

  export type RegistoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registo to aggregate.
     */
    where?: RegistoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registos to fetch.
     */
    orderBy?: RegistoOrderByWithRelationInput | RegistoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registos
    **/
    _count?: true | RegistoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistoMaxAggregateInputType
  }

  export type GetRegistoAggregateType<T extends RegistoAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisto[P]>
      : GetScalarType<T[P], AggregateRegisto[P]>
  }




  export type RegistoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistoWhereInput
    orderBy?: RegistoOrderByWithAggregationInput | RegistoOrderByWithAggregationInput[]
    by: RegistoScalarFieldEnum[] | RegistoScalarFieldEnum
    having?: RegistoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistoCountAggregateInputType | true
    _avg?: RegistoAvgAggregateInputType
    _sum?: RegistoSumAggregateInputType
    _min?: RegistoMinAggregateInputType
    _max?: RegistoMaxAggregateInputType
  }

  export type RegistoGroupByOutputType = {
    id: string
    colaborador: string
    data: Date
    horas: Decimal
    tempoFormatado: string
    obraId: string
    _count: RegistoCountAggregateOutputType | null
    _avg: RegistoAvgAggregateOutputType | null
    _sum: RegistoSumAggregateOutputType | null
    _min: RegistoMinAggregateOutputType | null
    _max: RegistoMaxAggregateOutputType | null
  }

  type GetRegistoGroupByPayload<T extends RegistoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistoGroupByOutputType[P]>
            : GetScalarType<T[P], RegistoGroupByOutputType[P]>
        }
      >
    >


  export type RegistoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colaborador?: boolean
    data?: boolean
    horas?: boolean
    tempoFormatado?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registo"]>

  export type RegistoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colaborador?: boolean
    data?: boolean
    horas?: boolean
    tempoFormatado?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registo"]>

  export type RegistoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colaborador?: boolean
    data?: boolean
    horas?: boolean
    tempoFormatado?: boolean
    obraId?: boolean
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registo"]>

  export type RegistoSelectScalar = {
    id?: boolean
    colaborador?: boolean
    data?: boolean
    horas?: boolean
    tempoFormatado?: boolean
    obraId?: boolean
  }

  export type RegistoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "colaborador" | "data" | "horas" | "tempoFormatado" | "obraId", ExtArgs["result"]["registo"]>
  export type RegistoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type RegistoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }
  export type RegistoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obra?: boolean | ObraDefaultArgs<ExtArgs>
  }

  export type $RegistoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registo"
    objects: {
      obra: Prisma.$ObraPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      colaborador: string
      data: Date
      horas: Prisma.Decimal
      tempoFormatado: string
      obraId: string
    }, ExtArgs["result"]["registo"]>
    composites: {}
  }

  type RegistoGetPayload<S extends boolean | null | undefined | RegistoDefaultArgs> = $Result.GetResult<Prisma.$RegistoPayload, S>

  type RegistoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistoCountAggregateInputType | true
    }

  export interface RegistoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registo'], meta: { name: 'Registo' } }
    /**
     * Find zero or one Registo that matches the filter.
     * @param {RegistoFindUniqueArgs} args - Arguments to find a Registo
     * @example
     * // Get one Registo
     * const registo = await prisma.registo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistoFindUniqueArgs>(args: SelectSubset<T, RegistoFindUniqueArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistoFindUniqueOrThrowArgs} args - Arguments to find a Registo
     * @example
     * // Get one Registo
     * const registo = await prisma.registo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistoFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistoFindFirstArgs} args - Arguments to find a Registo
     * @example
     * // Get one Registo
     * const registo = await prisma.registo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistoFindFirstArgs>(args?: SelectSubset<T, RegistoFindFirstArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistoFindFirstOrThrowArgs} args - Arguments to find a Registo
     * @example
     * // Get one Registo
     * const registo = await prisma.registo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistoFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistoFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registos
     * const registos = await prisma.registo.findMany()
     * 
     * // Get first 10 Registos
     * const registos = await prisma.registo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registoWithIdOnly = await prisma.registo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistoFindManyArgs>(args?: SelectSubset<T, RegistoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registo.
     * @param {RegistoCreateArgs} args - Arguments to create a Registo.
     * @example
     * // Create one Registo
     * const Registo = await prisma.registo.create({
     *   data: {
     *     // ... data to create a Registo
     *   }
     * })
     * 
     */
    create<T extends RegistoCreateArgs>(args: SelectSubset<T, RegistoCreateArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registos.
     * @param {RegistoCreateManyArgs} args - Arguments to create many Registos.
     * @example
     * // Create many Registos
     * const registo = await prisma.registo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistoCreateManyArgs>(args?: SelectSubset<T, RegistoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registos and returns the data saved in the database.
     * @param {RegistoCreateManyAndReturnArgs} args - Arguments to create many Registos.
     * @example
     * // Create many Registos
     * const registo = await prisma.registo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registos and only return the `id`
     * const registoWithIdOnly = await prisma.registo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistoCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registo.
     * @param {RegistoDeleteArgs} args - Arguments to delete one Registo.
     * @example
     * // Delete one Registo
     * const Registo = await prisma.registo.delete({
     *   where: {
     *     // ... filter to delete one Registo
     *   }
     * })
     * 
     */
    delete<T extends RegistoDeleteArgs>(args: SelectSubset<T, RegistoDeleteArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registo.
     * @param {RegistoUpdateArgs} args - Arguments to update one Registo.
     * @example
     * // Update one Registo
     * const registo = await prisma.registo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistoUpdateArgs>(args: SelectSubset<T, RegistoUpdateArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registos.
     * @param {RegistoDeleteManyArgs} args - Arguments to filter Registos to delete.
     * @example
     * // Delete a few Registos
     * const { count } = await prisma.registo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistoDeleteManyArgs>(args?: SelectSubset<T, RegistoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registos
     * const registo = await prisma.registo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistoUpdateManyArgs>(args: SelectSubset<T, RegistoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registos and returns the data updated in the database.
     * @param {RegistoUpdateManyAndReturnArgs} args - Arguments to update many Registos.
     * @example
     * // Update many Registos
     * const registo = await prisma.registo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registos and only return the `id`
     * const registoWithIdOnly = await prisma.registo.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistoUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registo.
     * @param {RegistoUpsertArgs} args - Arguments to update or create a Registo.
     * @example
     * // Update or create a Registo
     * const registo = await prisma.registo.upsert({
     *   create: {
     *     // ... data to create a Registo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registo we want to update
     *   }
     * })
     */
    upsert<T extends RegistoUpsertArgs>(args: SelectSubset<T, RegistoUpsertArgs<ExtArgs>>): Prisma__RegistoClient<$Result.GetResult<Prisma.$RegistoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistoCountArgs} args - Arguments to filter Registos to count.
     * @example
     * // Count the number of Registos
     * const count = await prisma.registo.count({
     *   where: {
     *     // ... the filter for the Registos we want to count
     *   }
     * })
    **/
    count<T extends RegistoCountArgs>(
      args?: Subset<T, RegistoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistoAggregateArgs>(args: Subset<T, RegistoAggregateArgs>): Prisma.PrismaPromise<GetRegistoAggregateType<T>>

    /**
     * Group by Registo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistoGroupByArgs} args - Group by arguments.
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
      T extends RegistoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistoGroupByArgs['orderBy'] }
        : { orderBy?: RegistoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registo model
   */
  readonly fields: RegistoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obra<T extends ObraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObraDefaultArgs<ExtArgs>>): Prisma__ObraClient<$Result.GetResult<Prisma.$ObraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Registo model
   */
  interface RegistoFieldRefs {
    readonly id: FieldRef<"Registo", 'String'>
    readonly colaborador: FieldRef<"Registo", 'String'>
    readonly data: FieldRef<"Registo", 'DateTime'>
    readonly horas: FieldRef<"Registo", 'Decimal'>
    readonly tempoFormatado: FieldRef<"Registo", 'String'>
    readonly obraId: FieldRef<"Registo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Registo findUnique
   */
  export type RegistoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * Filter, which Registo to fetch.
     */
    where: RegistoWhereUniqueInput
  }

  /**
   * Registo findUniqueOrThrow
   */
  export type RegistoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * Filter, which Registo to fetch.
     */
    where: RegistoWhereUniqueInput
  }

  /**
   * Registo findFirst
   */
  export type RegistoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * Filter, which Registo to fetch.
     */
    where?: RegistoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registos to fetch.
     */
    orderBy?: RegistoOrderByWithRelationInput | RegistoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registos.
     */
    cursor?: RegistoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registos.
     */
    distinct?: RegistoScalarFieldEnum | RegistoScalarFieldEnum[]
  }

  /**
   * Registo findFirstOrThrow
   */
  export type RegistoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * Filter, which Registo to fetch.
     */
    where?: RegistoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registos to fetch.
     */
    orderBy?: RegistoOrderByWithRelationInput | RegistoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registos.
     */
    cursor?: RegistoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registos.
     */
    distinct?: RegistoScalarFieldEnum | RegistoScalarFieldEnum[]
  }

  /**
   * Registo findMany
   */
  export type RegistoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * Filter, which Registos to fetch.
     */
    where?: RegistoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registos to fetch.
     */
    orderBy?: RegistoOrderByWithRelationInput | RegistoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registos.
     */
    cursor?: RegistoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registos.
     */
    distinct?: RegistoScalarFieldEnum | RegistoScalarFieldEnum[]
  }

  /**
   * Registo create
   */
  export type RegistoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * The data needed to create a Registo.
     */
    data: XOR<RegistoCreateInput, RegistoUncheckedCreateInput>
  }

  /**
   * Registo createMany
   */
  export type RegistoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registos.
     */
    data: RegistoCreateManyInput | RegistoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registo createManyAndReturn
   */
  export type RegistoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * The data used to create many Registos.
     */
    data: RegistoCreateManyInput | RegistoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registo update
   */
  export type RegistoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * The data needed to update a Registo.
     */
    data: XOR<RegistoUpdateInput, RegistoUncheckedUpdateInput>
    /**
     * Choose, which Registo to update.
     */
    where: RegistoWhereUniqueInput
  }

  /**
   * Registo updateMany
   */
  export type RegistoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registos.
     */
    data: XOR<RegistoUpdateManyMutationInput, RegistoUncheckedUpdateManyInput>
    /**
     * Filter which Registos to update
     */
    where?: RegistoWhereInput
    /**
     * Limit how many Registos to update.
     */
    limit?: number
  }

  /**
   * Registo updateManyAndReturn
   */
  export type RegistoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * The data used to update Registos.
     */
    data: XOR<RegistoUpdateManyMutationInput, RegistoUncheckedUpdateManyInput>
    /**
     * Filter which Registos to update
     */
    where?: RegistoWhereInput
    /**
     * Limit how many Registos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registo upsert
   */
  export type RegistoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * The filter to search for the Registo to update in case it exists.
     */
    where: RegistoWhereUniqueInput
    /**
     * In case the Registo found by the `where` argument doesn't exist, create a new Registo with this data.
     */
    create: XOR<RegistoCreateInput, RegistoUncheckedCreateInput>
    /**
     * In case the Registo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistoUpdateInput, RegistoUncheckedUpdateInput>
  }

  /**
   * Registo delete
   */
  export type RegistoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
    /**
     * Filter which Registo to delete.
     */
    where: RegistoWhereUniqueInput
  }

  /**
   * Registo deleteMany
   */
  export type RegistoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registos to delete
     */
    where?: RegistoWhereInput
    /**
     * Limit how many Registos to delete.
     */
    limit?: number
  }

  /**
   * Registo without action
   */
  export type RegistoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registo
     */
    select?: RegistoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registo
     */
    omit?: RegistoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistoInclude<ExtArgs> | null
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


  export const EmpresaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum]


  export const ResponsavelScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    empresaId: 'empresaId'
  };

  export type ResponsavelScalarFieldEnum = (typeof ResponsavelScalarFieldEnum)[keyof typeof ResponsavelScalarFieldEnum]


  export const ObraScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    empresaId: 'empresaId',
    responsavelId: 'responsavelId'
  };

  export type ObraScalarFieldEnum = (typeof ObraScalarFieldEnum)[keyof typeof ObraScalarFieldEnum]


  export const RegistoScalarFieldEnum: {
    id: 'id',
    colaborador: 'colaborador',
    data: 'data',
    horas: 'horas',
    tempoFormatado: 'tempoFormatado',
    obraId: 'obraId'
  };

  export type RegistoScalarFieldEnum = (typeof RegistoScalarFieldEnum)[keyof typeof RegistoScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type EmpresaWhereInput = {
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    id?: StringFilter<"Empresa"> | string
    nome?: StringFilter<"Empresa"> | string
    responsaveis?: ResponsavelListRelationFilter
    obras?: ObraListRelationFilter
  }

  export type EmpresaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    responsaveis?: ResponsavelOrderByRelationAggregateInput
    obras?: ObraOrderByRelationAggregateInput
  }

  export type EmpresaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: EmpresaWhereInput | EmpresaWhereInput[]
    OR?: EmpresaWhereInput[]
    NOT?: EmpresaWhereInput | EmpresaWhereInput[]
    responsaveis?: ResponsavelListRelationFilter
    obras?: ObraListRelationFilter
  }, "id" | "nome">

  export type EmpresaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: EmpresaCountOrderByAggregateInput
    _max?: EmpresaMaxOrderByAggregateInput
    _min?: EmpresaMinOrderByAggregateInput
  }

  export type EmpresaScalarWhereWithAggregatesInput = {
    AND?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    OR?: EmpresaScalarWhereWithAggregatesInput[]
    NOT?: EmpresaScalarWhereWithAggregatesInput | EmpresaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Empresa"> | string
    nome?: StringWithAggregatesFilter<"Empresa"> | string
  }

  export type ResponsavelWhereInput = {
    AND?: ResponsavelWhereInput | ResponsavelWhereInput[]
    OR?: ResponsavelWhereInput[]
    NOT?: ResponsavelWhereInput | ResponsavelWhereInput[]
    id?: IntFilter<"Responsavel"> | number
    nome?: StringFilter<"Responsavel"> | string
    empresaId?: StringFilter<"Responsavel"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    obras?: ObraListRelationFilter
  }

  export type ResponsavelOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    obras?: ObraOrderByRelationAggregateInput
  }

  export type ResponsavelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResponsavelWhereInput | ResponsavelWhereInput[]
    OR?: ResponsavelWhereInput[]
    NOT?: ResponsavelWhereInput | ResponsavelWhereInput[]
    nome?: StringFilter<"Responsavel"> | string
    empresaId?: StringFilter<"Responsavel"> | string
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    obras?: ObraListRelationFilter
  }, "id">

  export type ResponsavelOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    _count?: ResponsavelCountOrderByAggregateInput
    _avg?: ResponsavelAvgOrderByAggregateInput
    _max?: ResponsavelMaxOrderByAggregateInput
    _min?: ResponsavelMinOrderByAggregateInput
    _sum?: ResponsavelSumOrderByAggregateInput
  }

  export type ResponsavelScalarWhereWithAggregatesInput = {
    AND?: ResponsavelScalarWhereWithAggregatesInput | ResponsavelScalarWhereWithAggregatesInput[]
    OR?: ResponsavelScalarWhereWithAggregatesInput[]
    NOT?: ResponsavelScalarWhereWithAggregatesInput | ResponsavelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Responsavel"> | number
    nome?: StringWithAggregatesFilter<"Responsavel"> | string
    empresaId?: StringWithAggregatesFilter<"Responsavel"> | string
  }

  export type ObraWhereInput = {
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    id?: StringFilter<"Obra"> | string
    nome?: StringFilter<"Obra"> | string
    empresaId?: StringFilter<"Obra"> | string
    responsavelId?: IntNullableFilter<"Obra"> | number | null
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    responsavel?: XOR<ResponsavelNullableScalarRelationFilter, ResponsavelWhereInput> | null
    registos?: RegistoListRelationFilter
  }

  export type ObraOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    responsavelId?: SortOrderInput | SortOrder
    empresa?: EmpresaOrderByWithRelationInput
    responsavel?: ResponsavelOrderByWithRelationInput
    registos?: RegistoOrderByRelationAggregateInput
  }

  export type ObraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ObraWhereInput | ObraWhereInput[]
    OR?: ObraWhereInput[]
    NOT?: ObraWhereInput | ObraWhereInput[]
    nome?: StringFilter<"Obra"> | string
    empresaId?: StringFilter<"Obra"> | string
    responsavelId?: IntNullableFilter<"Obra"> | number | null
    empresa?: XOR<EmpresaScalarRelationFilter, EmpresaWhereInput>
    responsavel?: XOR<ResponsavelNullableScalarRelationFilter, ResponsavelWhereInput> | null
    registos?: RegistoListRelationFilter
  }, "id">

  export type ObraOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    responsavelId?: SortOrderInput | SortOrder
    _count?: ObraCountOrderByAggregateInput
    _avg?: ObraAvgOrderByAggregateInput
    _max?: ObraMaxOrderByAggregateInput
    _min?: ObraMinOrderByAggregateInput
    _sum?: ObraSumOrderByAggregateInput
  }

  export type ObraScalarWhereWithAggregatesInput = {
    AND?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    OR?: ObraScalarWhereWithAggregatesInput[]
    NOT?: ObraScalarWhereWithAggregatesInput | ObraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Obra"> | string
    nome?: StringWithAggregatesFilter<"Obra"> | string
    empresaId?: StringWithAggregatesFilter<"Obra"> | string
    responsavelId?: IntNullableWithAggregatesFilter<"Obra"> | number | null
  }

  export type RegistoWhereInput = {
    AND?: RegistoWhereInput | RegistoWhereInput[]
    OR?: RegistoWhereInput[]
    NOT?: RegistoWhereInput | RegistoWhereInput[]
    id?: StringFilter<"Registo"> | string
    colaborador?: StringFilter<"Registo"> | string
    data?: DateTimeFilter<"Registo"> | Date | string
    horas?: DecimalFilter<"Registo"> | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFilter<"Registo"> | string
    obraId?: StringFilter<"Registo"> | string
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }

  export type RegistoOrderByWithRelationInput = {
    id?: SortOrder
    colaborador?: SortOrder
    data?: SortOrder
    horas?: SortOrder
    tempoFormatado?: SortOrder
    obraId?: SortOrder
    obra?: ObraOrderByWithRelationInput
  }

  export type RegistoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistoWhereInput | RegistoWhereInput[]
    OR?: RegistoWhereInput[]
    NOT?: RegistoWhereInput | RegistoWhereInput[]
    colaborador?: StringFilter<"Registo"> | string
    data?: DateTimeFilter<"Registo"> | Date | string
    horas?: DecimalFilter<"Registo"> | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFilter<"Registo"> | string
    obraId?: StringFilter<"Registo"> | string
    obra?: XOR<ObraScalarRelationFilter, ObraWhereInput>
  }, "id">

  export type RegistoOrderByWithAggregationInput = {
    id?: SortOrder
    colaborador?: SortOrder
    data?: SortOrder
    horas?: SortOrder
    tempoFormatado?: SortOrder
    obraId?: SortOrder
    _count?: RegistoCountOrderByAggregateInput
    _avg?: RegistoAvgOrderByAggregateInput
    _max?: RegistoMaxOrderByAggregateInput
    _min?: RegistoMinOrderByAggregateInput
    _sum?: RegistoSumOrderByAggregateInput
  }

  export type RegistoScalarWhereWithAggregatesInput = {
    AND?: RegistoScalarWhereWithAggregatesInput | RegistoScalarWhereWithAggregatesInput[]
    OR?: RegistoScalarWhereWithAggregatesInput[]
    NOT?: RegistoScalarWhereWithAggregatesInput | RegistoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registo"> | string
    colaborador?: StringWithAggregatesFilter<"Registo"> | string
    data?: DateTimeWithAggregatesFilter<"Registo"> | Date | string
    horas?: DecimalWithAggregatesFilter<"Registo"> | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringWithAggregatesFilter<"Registo"> | string
    obraId?: StringWithAggregatesFilter<"Registo"> | string
  }

  export type EmpresaCreateInput = {
    id?: string
    nome: string
    responsaveis?: ResponsavelCreateNestedManyWithoutEmpresaInput
    obras?: ObraCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateInput = {
    id?: string
    nome: string
    responsaveis?: ResponsavelUncheckedCreateNestedManyWithoutEmpresaInput
    obras?: ObraUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    responsaveis?: ResponsavelUpdateManyWithoutEmpresaNestedInput
    obras?: ObraUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    responsaveis?: ResponsavelUncheckedUpdateManyWithoutEmpresaNestedInput
    obras?: ObraUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaCreateManyInput = {
    id?: string
    nome: string
  }

  export type EmpresaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EmpresaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsavelCreateInput = {
    nome: string
    empresa: EmpresaCreateNestedOneWithoutResponsaveisInput
    obras?: ObraCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelUncheckedCreateInput = {
    id?: number
    nome: string
    empresaId: string
    obras?: ObraUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutResponsaveisNestedInput
    obras?: ObraUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    obras?: ObraUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelCreateManyInput = {
    id?: number
    nome: string
    empresaId: string
  }

  export type ResponsavelUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ResponsavelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type ObraCreateInput = {
    id?: string
    nome: string
    empresa: EmpresaCreateNestedOneWithoutObrasInput
    responsavel?: ResponsavelCreateNestedOneWithoutObrasInput
    registos?: RegistoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateInput = {
    id?: string
    nome: string
    empresaId: string
    responsavelId?: number | null
    registos?: RegistoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutObrasNestedInput
    responsavel?: ResponsavelUpdateOneWithoutObrasNestedInput
    registos?: RegistoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
    registos?: RegistoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraCreateManyInput = {
    id?: string
    nome: string
    empresaId: string
    responsavelId?: number | null
  }

  export type ObraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ObraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RegistoCreateInput = {
    id?: string
    colaborador: string
    data: Date | string
    horas: Decimal | DecimalJsLike | number | string
    tempoFormatado: string
    obra: ObraCreateNestedOneWithoutRegistosInput
  }

  export type RegistoUncheckedCreateInput = {
    id?: string
    colaborador: string
    data: Date | string
    horas: Decimal | DecimalJsLike | number | string
    tempoFormatado: string
    obraId: string
  }

  export type RegistoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaborador?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFieldUpdateOperationsInput | string
    obra?: ObraUpdateOneRequiredWithoutRegistosNestedInput
  }

  export type RegistoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaborador?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFieldUpdateOperationsInput | string
    obraId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistoCreateManyInput = {
    id?: string
    colaborador: string
    data: Date | string
    horas: Decimal | DecimalJsLike | number | string
    tempoFormatado: string
    obraId: string
  }

  export type RegistoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaborador?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFieldUpdateOperationsInput | string
  }

  export type RegistoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaborador?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFieldUpdateOperationsInput | string
    obraId?: StringFieldUpdateOperationsInput | string
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

  export type ResponsavelListRelationFilter = {
    every?: ResponsavelWhereInput
    some?: ResponsavelWhereInput
    none?: ResponsavelWhereInput
  }

  export type ObraListRelationFilter = {
    every?: ObraWhereInput
    some?: ObraWhereInput
    none?: ObraWhereInput
  }

  export type ResponsavelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmpresaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EmpresaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type EmpresaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
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

  export type EmpresaScalarRelationFilter = {
    is?: EmpresaWhereInput
    isNot?: EmpresaWhereInput
  }

  export type ResponsavelCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
  }

  export type ResponsavelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResponsavelMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
  }

  export type ResponsavelMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
  }

  export type ResponsavelSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ResponsavelNullableScalarRelationFilter = {
    is?: ResponsavelWhereInput | null
    isNot?: ResponsavelWhereInput | null
  }

  export type RegistoListRelationFilter = {
    every?: RegistoWhereInput
    some?: RegistoWhereInput
    none?: RegistoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RegistoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObraCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    responsavelId?: SortOrder
  }

  export type ObraAvgOrderByAggregateInput = {
    responsavelId?: SortOrder
  }

  export type ObraMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    responsavelId?: SortOrder
  }

  export type ObraMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    empresaId?: SortOrder
    responsavelId?: SortOrder
  }

  export type ObraSumOrderByAggregateInput = {
    responsavelId?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ObraScalarRelationFilter = {
    is?: ObraWhereInput
    isNot?: ObraWhereInput
  }

  export type RegistoCountOrderByAggregateInput = {
    id?: SortOrder
    colaborador?: SortOrder
    data?: SortOrder
    horas?: SortOrder
    tempoFormatado?: SortOrder
    obraId?: SortOrder
  }

  export type RegistoAvgOrderByAggregateInput = {
    horas?: SortOrder
  }

  export type RegistoMaxOrderByAggregateInput = {
    id?: SortOrder
    colaborador?: SortOrder
    data?: SortOrder
    horas?: SortOrder
    tempoFormatado?: SortOrder
    obraId?: SortOrder
  }

  export type RegistoMinOrderByAggregateInput = {
    id?: SortOrder
    colaborador?: SortOrder
    data?: SortOrder
    horas?: SortOrder
    tempoFormatado?: SortOrder
    obraId?: SortOrder
  }

  export type RegistoSumOrderByAggregateInput = {
    horas?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ResponsavelCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ResponsavelCreateWithoutEmpresaInput, ResponsavelUncheckedCreateWithoutEmpresaInput> | ResponsavelCreateWithoutEmpresaInput[] | ResponsavelUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResponsavelCreateOrConnectWithoutEmpresaInput | ResponsavelCreateOrConnectWithoutEmpresaInput[]
    createMany?: ResponsavelCreateManyEmpresaInputEnvelope
    connect?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
  }

  export type ObraCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ObraCreateWithoutEmpresaInput, ObraUncheckedCreateWithoutEmpresaInput> | ObraCreateWithoutEmpresaInput[] | ObraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutEmpresaInput | ObraCreateOrConnectWithoutEmpresaInput[]
    createMany?: ObraCreateManyEmpresaInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type ResponsavelUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ResponsavelCreateWithoutEmpresaInput, ResponsavelUncheckedCreateWithoutEmpresaInput> | ResponsavelCreateWithoutEmpresaInput[] | ResponsavelUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResponsavelCreateOrConnectWithoutEmpresaInput | ResponsavelCreateOrConnectWithoutEmpresaInput[]
    createMany?: ResponsavelCreateManyEmpresaInputEnvelope
    connect?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
  }

  export type ObraUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: XOR<ObraCreateWithoutEmpresaInput, ObraUncheckedCreateWithoutEmpresaInput> | ObraCreateWithoutEmpresaInput[] | ObraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutEmpresaInput | ObraCreateOrConnectWithoutEmpresaInput[]
    createMany?: ObraCreateManyEmpresaInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ResponsavelUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ResponsavelCreateWithoutEmpresaInput, ResponsavelUncheckedCreateWithoutEmpresaInput> | ResponsavelCreateWithoutEmpresaInput[] | ResponsavelUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResponsavelCreateOrConnectWithoutEmpresaInput | ResponsavelCreateOrConnectWithoutEmpresaInput[]
    upsert?: ResponsavelUpsertWithWhereUniqueWithoutEmpresaInput | ResponsavelUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ResponsavelCreateManyEmpresaInputEnvelope
    set?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    disconnect?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    delete?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    connect?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    update?: ResponsavelUpdateWithWhereUniqueWithoutEmpresaInput | ResponsavelUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ResponsavelUpdateManyWithWhereWithoutEmpresaInput | ResponsavelUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ResponsavelScalarWhereInput | ResponsavelScalarWhereInput[]
  }

  export type ObraUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ObraCreateWithoutEmpresaInput, ObraUncheckedCreateWithoutEmpresaInput> | ObraCreateWithoutEmpresaInput[] | ObraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutEmpresaInput | ObraCreateOrConnectWithoutEmpresaInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutEmpresaInput | ObraUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ObraCreateManyEmpresaInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutEmpresaInput | ObraUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutEmpresaInput | ObraUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type ResponsavelUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ResponsavelCreateWithoutEmpresaInput, ResponsavelUncheckedCreateWithoutEmpresaInput> | ResponsavelCreateWithoutEmpresaInput[] | ResponsavelUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ResponsavelCreateOrConnectWithoutEmpresaInput | ResponsavelCreateOrConnectWithoutEmpresaInput[]
    upsert?: ResponsavelUpsertWithWhereUniqueWithoutEmpresaInput | ResponsavelUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ResponsavelCreateManyEmpresaInputEnvelope
    set?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    disconnect?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    delete?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    connect?: ResponsavelWhereUniqueInput | ResponsavelWhereUniqueInput[]
    update?: ResponsavelUpdateWithWhereUniqueWithoutEmpresaInput | ResponsavelUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ResponsavelUpdateManyWithWhereWithoutEmpresaInput | ResponsavelUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ResponsavelScalarWhereInput | ResponsavelScalarWhereInput[]
  }

  export type ObraUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: XOR<ObraCreateWithoutEmpresaInput, ObraUncheckedCreateWithoutEmpresaInput> | ObraCreateWithoutEmpresaInput[] | ObraUncheckedCreateWithoutEmpresaInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutEmpresaInput | ObraCreateOrConnectWithoutEmpresaInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutEmpresaInput | ObraUpsertWithWhereUniqueWithoutEmpresaInput[]
    createMany?: ObraCreateManyEmpresaInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutEmpresaInput | ObraUpdateWithWhereUniqueWithoutEmpresaInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutEmpresaInput | ObraUpdateManyWithWhereWithoutEmpresaInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutResponsaveisInput = {
    create?: XOR<EmpresaCreateWithoutResponsaveisInput, EmpresaUncheckedCreateWithoutResponsaveisInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutResponsaveisInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ObraCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<ObraCreateWithoutResponsavelInput, ObraUncheckedCreateWithoutResponsavelInput> | ObraCreateWithoutResponsavelInput[] | ObraUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutResponsavelInput | ObraCreateOrConnectWithoutResponsavelInput[]
    createMany?: ObraCreateManyResponsavelInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type ObraUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<ObraCreateWithoutResponsavelInput, ObraUncheckedCreateWithoutResponsavelInput> | ObraCreateWithoutResponsavelInput[] | ObraUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutResponsavelInput | ObraCreateOrConnectWithoutResponsavelInput[]
    createMany?: ObraCreateManyResponsavelInputEnvelope
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
  }

  export type EmpresaUpdateOneRequiredWithoutResponsaveisNestedInput = {
    create?: XOR<EmpresaCreateWithoutResponsaveisInput, EmpresaUncheckedCreateWithoutResponsaveisInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutResponsaveisInput
    upsert?: EmpresaUpsertWithoutResponsaveisInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutResponsaveisInput, EmpresaUpdateWithoutResponsaveisInput>, EmpresaUncheckedUpdateWithoutResponsaveisInput>
  }

  export type ObraUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<ObraCreateWithoutResponsavelInput, ObraUncheckedCreateWithoutResponsavelInput> | ObraCreateWithoutResponsavelInput[] | ObraUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutResponsavelInput | ObraCreateOrConnectWithoutResponsavelInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutResponsavelInput | ObraUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: ObraCreateManyResponsavelInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutResponsavelInput | ObraUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutResponsavelInput | ObraUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ObraUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<ObraCreateWithoutResponsavelInput, ObraUncheckedCreateWithoutResponsavelInput> | ObraCreateWithoutResponsavelInput[] | ObraUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: ObraCreateOrConnectWithoutResponsavelInput | ObraCreateOrConnectWithoutResponsavelInput[]
    upsert?: ObraUpsertWithWhereUniqueWithoutResponsavelInput | ObraUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: ObraCreateManyResponsavelInputEnvelope
    set?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    disconnect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    delete?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    connect?: ObraWhereUniqueInput | ObraWhereUniqueInput[]
    update?: ObraUpdateWithWhereUniqueWithoutResponsavelInput | ObraUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: ObraUpdateManyWithWhereWithoutResponsavelInput | ObraUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: ObraScalarWhereInput | ObraScalarWhereInput[]
  }

  export type EmpresaCreateNestedOneWithoutObrasInput = {
    create?: XOR<EmpresaCreateWithoutObrasInput, EmpresaUncheckedCreateWithoutObrasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutObrasInput
    connect?: EmpresaWhereUniqueInput
  }

  export type ResponsavelCreateNestedOneWithoutObrasInput = {
    create?: XOR<ResponsavelCreateWithoutObrasInput, ResponsavelUncheckedCreateWithoutObrasInput>
    connectOrCreate?: ResponsavelCreateOrConnectWithoutObrasInput
    connect?: ResponsavelWhereUniqueInput
  }

  export type RegistoCreateNestedManyWithoutObraInput = {
    create?: XOR<RegistoCreateWithoutObraInput, RegistoUncheckedCreateWithoutObraInput> | RegistoCreateWithoutObraInput[] | RegistoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: RegistoCreateOrConnectWithoutObraInput | RegistoCreateOrConnectWithoutObraInput[]
    createMany?: RegistoCreateManyObraInputEnvelope
    connect?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
  }

  export type RegistoUncheckedCreateNestedManyWithoutObraInput = {
    create?: XOR<RegistoCreateWithoutObraInput, RegistoUncheckedCreateWithoutObraInput> | RegistoCreateWithoutObraInput[] | RegistoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: RegistoCreateOrConnectWithoutObraInput | RegistoCreateOrConnectWithoutObraInput[]
    createMany?: RegistoCreateManyObraInputEnvelope
    connect?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
  }

  export type EmpresaUpdateOneRequiredWithoutObrasNestedInput = {
    create?: XOR<EmpresaCreateWithoutObrasInput, EmpresaUncheckedCreateWithoutObrasInput>
    connectOrCreate?: EmpresaCreateOrConnectWithoutObrasInput
    upsert?: EmpresaUpsertWithoutObrasInput
    connect?: EmpresaWhereUniqueInput
    update?: XOR<XOR<EmpresaUpdateToOneWithWhereWithoutObrasInput, EmpresaUpdateWithoutObrasInput>, EmpresaUncheckedUpdateWithoutObrasInput>
  }

  export type ResponsavelUpdateOneWithoutObrasNestedInput = {
    create?: XOR<ResponsavelCreateWithoutObrasInput, ResponsavelUncheckedCreateWithoutObrasInput>
    connectOrCreate?: ResponsavelCreateOrConnectWithoutObrasInput
    upsert?: ResponsavelUpsertWithoutObrasInput
    disconnect?: ResponsavelWhereInput | boolean
    delete?: ResponsavelWhereInput | boolean
    connect?: ResponsavelWhereUniqueInput
    update?: XOR<XOR<ResponsavelUpdateToOneWithWhereWithoutObrasInput, ResponsavelUpdateWithoutObrasInput>, ResponsavelUncheckedUpdateWithoutObrasInput>
  }

  export type RegistoUpdateManyWithoutObraNestedInput = {
    create?: XOR<RegistoCreateWithoutObraInput, RegistoUncheckedCreateWithoutObraInput> | RegistoCreateWithoutObraInput[] | RegistoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: RegistoCreateOrConnectWithoutObraInput | RegistoCreateOrConnectWithoutObraInput[]
    upsert?: RegistoUpsertWithWhereUniqueWithoutObraInput | RegistoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: RegistoCreateManyObraInputEnvelope
    set?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    disconnect?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    delete?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    connect?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    update?: RegistoUpdateWithWhereUniqueWithoutObraInput | RegistoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: RegistoUpdateManyWithWhereWithoutObraInput | RegistoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: RegistoScalarWhereInput | RegistoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegistoUncheckedUpdateManyWithoutObraNestedInput = {
    create?: XOR<RegistoCreateWithoutObraInput, RegistoUncheckedCreateWithoutObraInput> | RegistoCreateWithoutObraInput[] | RegistoUncheckedCreateWithoutObraInput[]
    connectOrCreate?: RegistoCreateOrConnectWithoutObraInput | RegistoCreateOrConnectWithoutObraInput[]
    upsert?: RegistoUpsertWithWhereUniqueWithoutObraInput | RegistoUpsertWithWhereUniqueWithoutObraInput[]
    createMany?: RegistoCreateManyObraInputEnvelope
    set?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    disconnect?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    delete?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    connect?: RegistoWhereUniqueInput | RegistoWhereUniqueInput[]
    update?: RegistoUpdateWithWhereUniqueWithoutObraInput | RegistoUpdateWithWhereUniqueWithoutObraInput[]
    updateMany?: RegistoUpdateManyWithWhereWithoutObraInput | RegistoUpdateManyWithWhereWithoutObraInput[]
    deleteMany?: RegistoScalarWhereInput | RegistoScalarWhereInput[]
  }

  export type ObraCreateNestedOneWithoutRegistosInput = {
    create?: XOR<ObraCreateWithoutRegistosInput, ObraUncheckedCreateWithoutRegistosInput>
    connectOrCreate?: ObraCreateOrConnectWithoutRegistosInput
    connect?: ObraWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ObraUpdateOneRequiredWithoutRegistosNestedInput = {
    create?: XOR<ObraCreateWithoutRegistosInput, ObraUncheckedCreateWithoutRegistosInput>
    connectOrCreate?: ObraCreateOrConnectWithoutRegistosInput
    upsert?: ObraUpsertWithoutRegistosInput
    connect?: ObraWhereUniqueInput
    update?: XOR<XOR<ObraUpdateToOneWithWhereWithoutRegistosInput, ObraUpdateWithoutRegistosInput>, ObraUncheckedUpdateWithoutRegistosInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ResponsavelCreateWithoutEmpresaInput = {
    nome: string
    obras?: ObraCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelUncheckedCreateWithoutEmpresaInput = {
    id?: number
    nome: string
    obras?: ObraUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type ResponsavelCreateOrConnectWithoutEmpresaInput = {
    where: ResponsavelWhereUniqueInput
    create: XOR<ResponsavelCreateWithoutEmpresaInput, ResponsavelUncheckedCreateWithoutEmpresaInput>
  }

  export type ResponsavelCreateManyEmpresaInputEnvelope = {
    data: ResponsavelCreateManyEmpresaInput | ResponsavelCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type ObraCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    responsavel?: ResponsavelCreateNestedOneWithoutObrasInput
    registos?: RegistoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateWithoutEmpresaInput = {
    id?: string
    nome: string
    responsavelId?: number | null
    registos?: RegistoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraCreateOrConnectWithoutEmpresaInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutEmpresaInput, ObraUncheckedCreateWithoutEmpresaInput>
  }

  export type ObraCreateManyEmpresaInputEnvelope = {
    data: ObraCreateManyEmpresaInput | ObraCreateManyEmpresaInput[]
    skipDuplicates?: boolean
  }

  export type ResponsavelUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ResponsavelWhereUniqueInput
    update: XOR<ResponsavelUpdateWithoutEmpresaInput, ResponsavelUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ResponsavelCreateWithoutEmpresaInput, ResponsavelUncheckedCreateWithoutEmpresaInput>
  }

  export type ResponsavelUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ResponsavelWhereUniqueInput
    data: XOR<ResponsavelUpdateWithoutEmpresaInput, ResponsavelUncheckedUpdateWithoutEmpresaInput>
  }

  export type ResponsavelUpdateManyWithWhereWithoutEmpresaInput = {
    where: ResponsavelScalarWhereInput
    data: XOR<ResponsavelUpdateManyMutationInput, ResponsavelUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ResponsavelScalarWhereInput = {
    AND?: ResponsavelScalarWhereInput | ResponsavelScalarWhereInput[]
    OR?: ResponsavelScalarWhereInput[]
    NOT?: ResponsavelScalarWhereInput | ResponsavelScalarWhereInput[]
    id?: IntFilter<"Responsavel"> | number
    nome?: StringFilter<"Responsavel"> | string
    empresaId?: StringFilter<"Responsavel"> | string
  }

  export type ObraUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: ObraWhereUniqueInput
    update: XOR<ObraUpdateWithoutEmpresaInput, ObraUncheckedUpdateWithoutEmpresaInput>
    create: XOR<ObraCreateWithoutEmpresaInput, ObraUncheckedCreateWithoutEmpresaInput>
  }

  export type ObraUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: ObraWhereUniqueInput
    data: XOR<ObraUpdateWithoutEmpresaInput, ObraUncheckedUpdateWithoutEmpresaInput>
  }

  export type ObraUpdateManyWithWhereWithoutEmpresaInput = {
    where: ObraScalarWhereInput
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyWithoutEmpresaInput>
  }

  export type ObraScalarWhereInput = {
    AND?: ObraScalarWhereInput | ObraScalarWhereInput[]
    OR?: ObraScalarWhereInput[]
    NOT?: ObraScalarWhereInput | ObraScalarWhereInput[]
    id?: StringFilter<"Obra"> | string
    nome?: StringFilter<"Obra"> | string
    empresaId?: StringFilter<"Obra"> | string
    responsavelId?: IntNullableFilter<"Obra"> | number | null
  }

  export type EmpresaCreateWithoutResponsaveisInput = {
    id?: string
    nome: string
    obras?: ObraCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutResponsaveisInput = {
    id?: string
    nome: string
    obras?: ObraUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutResponsaveisInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutResponsaveisInput, EmpresaUncheckedCreateWithoutResponsaveisInput>
  }

  export type ObraCreateWithoutResponsavelInput = {
    id?: string
    nome: string
    empresa: EmpresaCreateNestedOneWithoutObrasInput
    registos?: RegistoCreateNestedManyWithoutObraInput
  }

  export type ObraUncheckedCreateWithoutResponsavelInput = {
    id?: string
    nome: string
    empresaId: string
    registos?: RegistoUncheckedCreateNestedManyWithoutObraInput
  }

  export type ObraCreateOrConnectWithoutResponsavelInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutResponsavelInput, ObraUncheckedCreateWithoutResponsavelInput>
  }

  export type ObraCreateManyResponsavelInputEnvelope = {
    data: ObraCreateManyResponsavelInput | ObraCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutResponsaveisInput = {
    update: XOR<EmpresaUpdateWithoutResponsaveisInput, EmpresaUncheckedUpdateWithoutResponsaveisInput>
    create: XOR<EmpresaCreateWithoutResponsaveisInput, EmpresaUncheckedCreateWithoutResponsaveisInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutResponsaveisInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutResponsaveisInput, EmpresaUncheckedUpdateWithoutResponsaveisInput>
  }

  export type EmpresaUpdateWithoutResponsaveisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    obras?: ObraUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutResponsaveisInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    obras?: ObraUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ObraUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: ObraWhereUniqueInput
    update: XOR<ObraUpdateWithoutResponsavelInput, ObraUncheckedUpdateWithoutResponsavelInput>
    create: XOR<ObraCreateWithoutResponsavelInput, ObraUncheckedCreateWithoutResponsavelInput>
  }

  export type ObraUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: ObraWhereUniqueInput
    data: XOR<ObraUpdateWithoutResponsavelInput, ObraUncheckedUpdateWithoutResponsavelInput>
  }

  export type ObraUpdateManyWithWhereWithoutResponsavelInput = {
    where: ObraScalarWhereInput
    data: XOR<ObraUpdateManyMutationInput, ObraUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type EmpresaCreateWithoutObrasInput = {
    id?: string
    nome: string
    responsaveis?: ResponsavelCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaUncheckedCreateWithoutObrasInput = {
    id?: string
    nome: string
    responsaveis?: ResponsavelUncheckedCreateNestedManyWithoutEmpresaInput
  }

  export type EmpresaCreateOrConnectWithoutObrasInput = {
    where: EmpresaWhereUniqueInput
    create: XOR<EmpresaCreateWithoutObrasInput, EmpresaUncheckedCreateWithoutObrasInput>
  }

  export type ResponsavelCreateWithoutObrasInput = {
    nome: string
    empresa: EmpresaCreateNestedOneWithoutResponsaveisInput
  }

  export type ResponsavelUncheckedCreateWithoutObrasInput = {
    id?: number
    nome: string
    empresaId: string
  }

  export type ResponsavelCreateOrConnectWithoutObrasInput = {
    where: ResponsavelWhereUniqueInput
    create: XOR<ResponsavelCreateWithoutObrasInput, ResponsavelUncheckedCreateWithoutObrasInput>
  }

  export type RegistoCreateWithoutObraInput = {
    id?: string
    colaborador: string
    data: Date | string
    horas: Decimal | DecimalJsLike | number | string
    tempoFormatado: string
  }

  export type RegistoUncheckedCreateWithoutObraInput = {
    id?: string
    colaborador: string
    data: Date | string
    horas: Decimal | DecimalJsLike | number | string
    tempoFormatado: string
  }

  export type RegistoCreateOrConnectWithoutObraInput = {
    where: RegistoWhereUniqueInput
    create: XOR<RegistoCreateWithoutObraInput, RegistoUncheckedCreateWithoutObraInput>
  }

  export type RegistoCreateManyObraInputEnvelope = {
    data: RegistoCreateManyObraInput | RegistoCreateManyObraInput[]
    skipDuplicates?: boolean
  }

  export type EmpresaUpsertWithoutObrasInput = {
    update: XOR<EmpresaUpdateWithoutObrasInput, EmpresaUncheckedUpdateWithoutObrasInput>
    create: XOR<EmpresaCreateWithoutObrasInput, EmpresaUncheckedCreateWithoutObrasInput>
    where?: EmpresaWhereInput
  }

  export type EmpresaUpdateToOneWithWhereWithoutObrasInput = {
    where?: EmpresaWhereInput
    data: XOR<EmpresaUpdateWithoutObrasInput, EmpresaUncheckedUpdateWithoutObrasInput>
  }

  export type EmpresaUpdateWithoutObrasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    responsaveis?: ResponsavelUpdateManyWithoutEmpresaNestedInput
  }

  export type EmpresaUncheckedUpdateWithoutObrasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    responsaveis?: ResponsavelUncheckedUpdateManyWithoutEmpresaNestedInput
  }

  export type ResponsavelUpsertWithoutObrasInput = {
    update: XOR<ResponsavelUpdateWithoutObrasInput, ResponsavelUncheckedUpdateWithoutObrasInput>
    create: XOR<ResponsavelCreateWithoutObrasInput, ResponsavelUncheckedCreateWithoutObrasInput>
    where?: ResponsavelWhereInput
  }

  export type ResponsavelUpdateToOneWithWhereWithoutObrasInput = {
    where?: ResponsavelWhereInput
    data: XOR<ResponsavelUpdateWithoutObrasInput, ResponsavelUncheckedUpdateWithoutObrasInput>
  }

  export type ResponsavelUpdateWithoutObrasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutResponsaveisNestedInput
  }

  export type ResponsavelUncheckedUpdateWithoutObrasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistoUpsertWithWhereUniqueWithoutObraInput = {
    where: RegistoWhereUniqueInput
    update: XOR<RegistoUpdateWithoutObraInput, RegistoUncheckedUpdateWithoutObraInput>
    create: XOR<RegistoCreateWithoutObraInput, RegistoUncheckedCreateWithoutObraInput>
  }

  export type RegistoUpdateWithWhereUniqueWithoutObraInput = {
    where: RegistoWhereUniqueInput
    data: XOR<RegistoUpdateWithoutObraInput, RegistoUncheckedUpdateWithoutObraInput>
  }

  export type RegistoUpdateManyWithWhereWithoutObraInput = {
    where: RegistoScalarWhereInput
    data: XOR<RegistoUpdateManyMutationInput, RegistoUncheckedUpdateManyWithoutObraInput>
  }

  export type RegistoScalarWhereInput = {
    AND?: RegistoScalarWhereInput | RegistoScalarWhereInput[]
    OR?: RegistoScalarWhereInput[]
    NOT?: RegistoScalarWhereInput | RegistoScalarWhereInput[]
    id?: StringFilter<"Registo"> | string
    colaborador?: StringFilter<"Registo"> | string
    data?: DateTimeFilter<"Registo"> | Date | string
    horas?: DecimalFilter<"Registo"> | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFilter<"Registo"> | string
    obraId?: StringFilter<"Registo"> | string
  }

  export type ObraCreateWithoutRegistosInput = {
    id?: string
    nome: string
    empresa: EmpresaCreateNestedOneWithoutObrasInput
    responsavel?: ResponsavelCreateNestedOneWithoutObrasInput
  }

  export type ObraUncheckedCreateWithoutRegistosInput = {
    id?: string
    nome: string
    empresaId: string
    responsavelId?: number | null
  }

  export type ObraCreateOrConnectWithoutRegistosInput = {
    where: ObraWhereUniqueInput
    create: XOR<ObraCreateWithoutRegistosInput, ObraUncheckedCreateWithoutRegistosInput>
  }

  export type ObraUpsertWithoutRegistosInput = {
    update: XOR<ObraUpdateWithoutRegistosInput, ObraUncheckedUpdateWithoutRegistosInput>
    create: XOR<ObraCreateWithoutRegistosInput, ObraUncheckedCreateWithoutRegistosInput>
    where?: ObraWhereInput
  }

  export type ObraUpdateToOneWithWhereWithoutRegistosInput = {
    where?: ObraWhereInput
    data: XOR<ObraUpdateWithoutRegistosInput, ObraUncheckedUpdateWithoutRegistosInput>
  }

  export type ObraUpdateWithoutRegistosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutObrasNestedInput
    responsavel?: ResponsavelUpdateOneWithoutObrasNestedInput
  }

  export type ObraUncheckedUpdateWithoutRegistosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ResponsavelCreateManyEmpresaInput = {
    id?: number
    nome: string
  }

  export type ObraCreateManyEmpresaInput = {
    id?: string
    nome: string
    responsavelId?: number | null
  }

  export type ResponsavelUpdateWithoutEmpresaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    obras?: ObraUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelUncheckedUpdateWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    obras?: ObraUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type ResponsavelUncheckedUpdateManyWithoutEmpresaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type ObraUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    responsavel?: ResponsavelUpdateOneWithoutObrasNestedInput
    registos?: RegistoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
    registos?: RegistoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateManyWithoutEmpresaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    responsavelId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ObraCreateManyResponsavelInput = {
    id?: string
    nome: string
    empresaId: string
  }

  export type ObraUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresa?: EmpresaUpdateOneRequiredWithoutObrasNestedInput
    registos?: RegistoUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
    registos?: RegistoUncheckedUpdateManyWithoutObraNestedInput
  }

  export type ObraUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    empresaId?: StringFieldUpdateOperationsInput | string
  }

  export type RegistoCreateManyObraInput = {
    id?: string
    colaborador: string
    data: Date | string
    horas: Decimal | DecimalJsLike | number | string
    tempoFormatado: string
  }

  export type RegistoUpdateWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaborador?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFieldUpdateOperationsInput | string
  }

  export type RegistoUncheckedUpdateWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaborador?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFieldUpdateOperationsInput | string
  }

  export type RegistoUncheckedUpdateManyWithoutObraInput = {
    id?: StringFieldUpdateOperationsInput | string
    colaborador?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    horas?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempoFormatado?: StringFieldUpdateOperationsInput | string
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