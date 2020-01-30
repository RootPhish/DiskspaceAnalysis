import { Injectable } from '@angular/core';
import { AppContextService, HttpService } from '@microsoft/windows-admin-center-sdk/angular';
import { Cim, Http, PowerShell, PowerShellSession } from '@microsoft/windows-admin-center-sdk/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PowerShellScripts } from '../../generated/powershell-scripts';
import { Strings } from '../../generated/strings';

@Injectable()
export class DiskService {
    public static psKey = 'sme.seed';
    private psSession: PowerShellSession;

    constructor(private appContextService: AppContextService, private http: HttpService) {

    }

    public getDisks(session: PowerShellSession): Observable<any[]> {
        const command = PowerShell.createScript(PowerShellScripts.Get_Disks.script);
        return this.appContextService.powerShell.run(session, command)
            .pipe(map((response: any) => {
                const items: any[] = [];
                for (const item of response.results) {
                    const container = {
                        deviceID: item.deviceID,
                        capacityGB: item.capacityGB,
                        freeSpaceGB: item.freeSpaceGB
                    };
                    items.push(container);
                }
                return items;
            }));
    }

}
