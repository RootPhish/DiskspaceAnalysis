import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionsModule, DataTableModule, ToolHeaderModule } from '@microsoft/windows-admin-center-sdk/angular';
import { DefaultComponent } from './default.component';
import { Routing } from './default.routing';
import { DiskService } from './default.service';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    DataTableModule,
    ActionsModule,
    ToolHeaderModule
  ],
  providers: [
    DiskService
  ],
  declarations: [DefaultComponent]
})
export class DefaultModule { }
