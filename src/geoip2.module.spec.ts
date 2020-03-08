import "reflect-metadata";

import { Test, TestingModule } from "@nestjs/testing";

import { GeoIP2Module, ReaderModel, WebServiceClient } from ".";

describe(GeoIP2Module.name, () => {
  let module: TestingModule;

  describe(GeoIP2Module.registerReader.name, () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [GeoIP2Module.registerReader("GeoIP2-City-Test.mmdb")]
      }).compile();
    });

    it("should inject the reader", () => {
      const reader = module.get(ReaderModel);
      expect(reader).toBeInstanceOf(ReaderModel);
    });
  });

  describe(GeoIP2Module.registerWebServiceClient.name, () => {
    beforeAll(async () => {
      module = await Test.createTestingModule({
        imports: [GeoIP2Module.registerWebServiceClient("1234", "foo")]
      }).compile();
    });

    it("should inject the client", () => {
      const client = module.get(WebServiceClient);
      expect(client).toBeInstanceOf(WebServiceClient);
    });
  });
});
