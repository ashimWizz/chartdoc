import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FullCalendarModule } from '@fullcalendar/angular';
import { RoleComponent } from './role.component';
import { ShellModule } from 'src/app/shell/shell.module';
import { RoleRoutingModule } from './role-routing.module';
import { CreateNewRoleComponent } from './create-new-role/create-new-role.component';
import{RoleMasterService} from './../../services/role-master.service';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
  declarations: [RoleComponent, CreateNewRoleComponent],
  imports: [
    CommonModule,
    ShellModule,
    FormsModule,
  
    ReactiveFormsModule,
    RoleRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CoreModule
  ],
  providers:[RoleMasterService],
  exports: [RoleComponent]
})
export class RoleModule { }
