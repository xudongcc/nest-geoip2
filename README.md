# nest-geoip2

> MaxMind GeoIP2 module for Nest framework

## Install

```javascript
npm i nest-geoip2 @maxmind/geoip2-node
// or
yarn add nest-geoip2 @maxmind/geoip2-node
```

## Usage

```javascript
import { Controller, Get, Ip } from "@nestjs/common";
import { ReaderModel } from "nest-geoip2";

@Controller()
export class AppController {
  public constructor(private readonly readerModel: ReaderModel) {
    return this;
  }

  @Get("geoip")
  public async create(@Ip() ip: string) {
    return this.readerModel.city(ip);
  }
}
```

```javascript
import { Module } from "@nestjs/common";
import { GeoIP2Module } from "nest-geoip2";
import { join } from "path";

@Module({
  imports: [
    GeoIP2Module.registerRender(join(process.cwd(), "GeoLite2-City.mmdb"))
  ],
  controllers: [AppController]
})
export class AppModule {}
```
