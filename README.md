# nest-geoip2

[![Build Status](https://img.shields.io/github/workflow/status/xudongdev/nest-geoip2/Node.js%20CI)](https://github.com/xudongdev/nest-geoip2/actions?query=workflow%3A%22Node.js+CI%22)
[![Coverage Status](https://img.shields.io/codecov/c/github/xudongdev/nest-geoip2)](https://codecov.io/github/xudongdev/nest-geoip2)
[![License](https://img.shields.io/npm/l/nest-geoip2)](https://www.npmjs.com/package/nest-geoip2)
[![Version](https://img.shields.io/npm/v/nest-geoip2)](https://www.npmjs.com/package/nest-geoip2)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

MaxMind GeoIP2 module for Nest framework.

## Install

```javascript
npm i nest-geoip2 @maxmind/geoip2-node
// or
yarn add nest-geoip2 @maxmind/geoip2-node
```

## Usage

```typescript
// app.module.ts
import { Module } from "@nestjs/common";
import { GeoIP2Module } from "nest-geoip2";
import { join } from "path";

import { AppController } from "./app.controller.ts";

@Module({
  imports: [
    GeoIP2Module.registerRender(join(process.cwd(), "GeoLite2-City.mmdb")),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

```typescript
// app.controller.ts
import { Controller, Get, Ip } from "@nestjs/common";
import { ReaderModel } from "nest-geoip2";

@Controller()
export class AppController {
  public constructor(private readonly readerModel: ReaderModel) {
    return this;
  }

  @Get("ip")
  public async ip(@Ip() ip: string) {
    return this.readerModel.city(ip);
  }
}
```

## Other

How to get GeoIP2/GeoLite2 database?  
[https://dev.maxmind.com/geoip/geoipupdate/#Direct_Downloads](https://dev.maxmind.com/geoip/geoipupdate/#Direct_Downloads)  
[https://www.maxmind.com/en/accounts/current/geoip/downloads](https://www.maxmind.com/en/accounts/current/geoip/downloads)
