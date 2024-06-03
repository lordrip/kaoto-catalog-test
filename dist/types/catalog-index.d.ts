/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 3.2.1263 on 2024-06-03 13:18:17.

export interface Index {
    catalogs: { [index: string]: Entry };
    schemas: { [index: string]: Entry };
}

export interface Entry {
    name: string;
    description: string;
    version: string;
    file: string;
}

export type RestResponse<R> = Promise<R>;
