import { Reader, WebServiceClient } from "@maxmind/geoip2-node";
import ReaderModel from "@maxmind/geoip2-node/dist/src/readerModel";
import { DynamicModule, Global, Module } from "@nestjs/common";

@Global()
@Module({})
export class GeoIP2Module {
  public static registerWebServiceClient(
    ...args: ConstructorParameters<typeof WebServiceClient>
  ): DynamicModule {
    const providers = [
      {
        provide: WebServiceClient,
        useFactory: (): WebServiceClient => new WebServiceClient(...args)
      }
    ];

    return {
      module: GeoIP2Module,
      providers,
      exports: providers
    };
  }

  public static registerReader(
    ...args: Parameters<typeof Reader.open>
  ): DynamicModule {
    const providers = [
      {
        provide: ReaderModel,
        useFactory: (): Promise<ReaderModel> => Reader.open(...args)
      }
    ];

    return {
      module: GeoIP2Module,
      providers,
      exports: providers
    };
  }
}
