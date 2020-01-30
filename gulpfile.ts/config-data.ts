
import { Config } from './common/config';

function gulpConfig(): Config {
    return {
        resjson: {
            resourceName: 'Wouter_SonneveldtDiskspace',
            localeOffset: 0,
            localePath: 'loc'
        },
        powershell: {
            name: 'wouter_sonneveldt.diskspace',
            guid: 'ed041b5a-225a-4149-8c8d-12418dd0659a',
            list: [
                'src',
                'node_modules/@microsoft/windows-admin-center-sdk'
            ],
            enablePester: false,
            skipCim: true
        },
        test: {
            skip: true
        }
    };
}

exports.gulpConfig = gulpConfig;
