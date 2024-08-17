/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Config } from './Config';
export type CreateUserDto = {
    id: number;
    name: string;
    gender: 'F' | 'M';
    age?: number;
    accountConfig: Config;
};

