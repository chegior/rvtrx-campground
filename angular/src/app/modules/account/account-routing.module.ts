import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

const routes: Routes = [{ component: AccountComponent, path: '' }];

@NgModule({
  declarations: [AccountComponent],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountRoutingModule {}
