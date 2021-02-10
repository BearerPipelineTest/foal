---
title: Using Another ORM or Query Builder
sidebar_label: Using Another ORM
---

> You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available [here](../upgrade-to-v2/README.md). The old documentation can be found [here](https://github.com/FoalTS/foal/tree/v1.x/docs).

If you want to use another ORM/ODM (Sequelize, Objection.js, etc) or just do not want to use one at all, you can uninstall the `typeorm` and `@foal/typeorm` packages. The framework core is TypeORM-independent.

Using TypeORM has some advantages though:
- Foal offers built-in commands to generate, run and revert migrations with TypeORM.
- The *Groups & Permissions* system can only be used with this library as well as the `foal g rest-api` command.
- `@foal/typeorm` implements the `fetchUser` function required by `UseSessions` and often used with `JWTRequired`. This function, which takes an id and returns a user or undefined, can easily be implemented with another ORM however.
