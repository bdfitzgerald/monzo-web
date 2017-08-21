// Angular Imports
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { FlexLayoutModule, } from '@angular/flex-layout';

// Covalent Imports
import {
  CovalentMediaModule, CovalentLoadingModule, CovalentLayoutModule,
  CovalentMenuModule, CovalentPagingModule, CovalentSearchModule,
  CovalentCommonModule, CovalentDialogsModule,
} from '@covalent/core';

// Material Imports
import {
  MdButtonModule, MdCardModule, MdIconModule,
  MdListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdInputModule, MdCheckboxModule,
  MdToolbarModule, MdSnackBarModule, MdSidenavModule,
  MdTabsModule, MdSelectModule, MdPaginatorModule
} from '@angular/material';

// Chart Imports
import { NgxChartsModule, } from '@swimlane/ngx-charts';

// Flex Modules
const FLEX_LAYOUT_MODULES: any[] = [
  FlexLayoutModule,
];

// Angular Modules
const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule,
];

// Material Modules
const MATERIAL_MODULES: any[] = [
  MdButtonModule, MdCardModule, MdIconModule,
  MdListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdInputModule, MdCheckboxModule,
  MdToolbarModule, MdSnackBarModule, MdSidenavModule,
  MdTabsModule, MdSelectModule, MdPaginatorModule
];

// Covalent Modules
const COVALENT_MODULES: any[] = [
  CovalentDialogsModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentLayoutModule, CovalentMenuModule, CovalentPagingModule,
  CovalentSearchModule, CovalentCommonModule
];

// Chart Module
const CHART_MODULES: any[] = [
  NgxChartsModule,
];

@NgModule({
  imports: [
    CommonModule,
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  declarations: [

  ],
  exports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    CHART_MODULES,
    FLEX_LAYOUT_MODULES,
  ]
})
export class SharedModule { }
