import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AppContextService, DataTableComponent, DataTableCustomSortEvent, DataTableLazyLoadEvent
} from '@microsoft/windows-admin-center-sdk/angular';
import { Net, PowerShellSession } from '@microsoft/windows-admin-center-sdk/core';
import { Subscription } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';
import { DiskService } from './default.service';
@Component({
  selector: 'default-component',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {
  private diskSubscription: Subscription;
  public services: any[];
  public selectedData1: any;
  public customSortColumn: any;
  public errorMessage: string;
  public loading = true;
  private psSession: PowerShellSession;

  constructor(private diskService: DiskService, private appContextService: AppContextService) {
    //
  }

  public ngOnInit() {
    this.psSession = this.appContextService.powerShell.createSession(this.appContextService.activeConnection.nodeName);
    this.getDisks();
  }

  public ngOnDestroy() {
    this.psSession.dispose();
    this.diskSubscription.unsubscribe();
  }

  private getDisks() {
    this.diskSubscription = this.diskService.getDisks(this.psSession).subscribe(
      (results: any[]) => {
        this.loading = false;
        if (results) {
          this.services = results;
        } else {

        }
      },
      (error: AjaxError) => {
        this.errorMessage = Net.getErrorMessage(error);
        this.loading = false;
      }
    );
  }

}
