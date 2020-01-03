import { Reader, WebServiceClient } from "@maxmind/geoip2-node";
import ReaderModel from "@maxmind/geoip2-node/dist/src/readerModel";
import { DynamicModule, Global, Module } from "@nestjs/common";
import { OpenOpts } from "maxmind";

@Global()
@Module({})
export class GeoIP2Module {
  public static registerWebServiceClient(
    accountID: string,
    licenseKey: string,
    timeout?: number
  ): DynamicModule {
    const providers = [
      {
        provide: WebServiceClient,
        useFactory: (): WebServiceClient =>
          new WebServiceClient(accountID, licenseKey, timeout)
      }
    ];

    return {
      module: GeoIP2Module,
      providers,
      exports: providers
    };
  }

  public static registerReader(file: string, opts?: OpenOpts): DynamicModule {
    const providers = [
      {
        provide: ReaderModel,
        useFactory: (): Promise<ReaderModel> => Reader.open(file, opts)
      }
    ];

    return {
      module: GeoIP2Module,
      providers,
      exports: providers
    };
  }
}
