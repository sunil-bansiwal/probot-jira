import { Context } from 'probot';
import * as t from 'io-ts';
import { RepoRef } from './model/pullrequest';
export declare const Config: t.ExactC<t.TypeC<{
    issueKeyRegex: t.StringC;
    fixVersionRegex: t.StringC;
    postMergeStatus: t.ArrayC<t.StringC>;
}>>;
export declare type IConfig = t.TypeOf<typeof Config>;
export declare const DefaultConfig: IConfig;
export declare function getConfig(bot: Context, repo: RepoRef, ref: string): Promise<IConfig>;