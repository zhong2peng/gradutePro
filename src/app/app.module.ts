import { MultiUseButtonComponent } from './input/multi-use-button/multi-use-button.component';
import { SelectbuttonDnComponent } from './input/selectbutton-dn/selectbutton-dn.component';
import { SpinnerDnComponent } from './input/spinner-dn/spinner-dn.component';
import { SliderDnComponent } from './input/slider-dn/slider-dn.component';
import { RatingDnComponent } from './input/rating-dn/rating-dn.component';
import { RadiobuttonDnComponent } from './input/radiobutton-dn/radiobutton-dn.component';
import { PasswordDnComponent } from './input/password-dn/password-dn.component';
import { MultiselectDnComponent } from './input/multiselect-dn/multiselect-dn.component';
import { InputmaskDnComponent } from './input/inputmask-dn/inputmask-dn.component';
import { ListboxDnComponent } from './input/listbox-dn/listbox-dn.component';
import { InputtextAreaDnComponent } from './input/inputtext-area-dn/inputtext-area-dn.component';
import { InputtextDnComponent } from './input/inputtext-dn/inputtext-dn.component';
import { InputSwitchDnComponent } from './input/input-switch-dn/input-switch-dn.component';
import { EditorDnComponent } from './input/editor-dn/editor-dn.component';
import { DropdownDnComponent } from './input/dropdown-dn/dropdown-dn.component';
import { ColorpickerDnComponent } from './input/colorpicker-dn/colorpicker-dn.component';
import { ChipsComponent } from './input/chips/chips.component';
import { CheckboxDnComponent } from './input/checkbox-dn/checkbox-dn.component';
import { routes } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import { CalendarDnComponent } from './input/calendar-dn/calendar-dn.component';
import { AutocompleteDnComponent } from './input/autocomplete-dn/autocomplete-dn.component';
import { InputGroupDnComponent } from './input/input-group-dn/input-group-dn.component';
import { TieredMenuDnComponent } from './menu/tiered-menu-dn/tiered-menu-dn.component';
import { TabmenuDnComponent } from './menu/tabmenu-dn/tabmenu-dn.component';
import { StepsDnComponent } from './menu/steps-dn/steps-dn.component';
import { SlideMenuDnComponent } from './menu/slide-menu-dn/slide-menu-dn.component';
import { PanelMenuDnComponent } from './menu/panel-menu-dn/panel-menu-dn.component';
import { MenubarDnComponent } from './menu/menubar-dn/menubar-dn.component';
import { MenuDnComponent } from './menu/menu-dn/menu-dn.component';
import { MegaMenuDnComponent } from './menu/mega-menu-dn/mega-menu-dn.component';
import { ContextMenuDnComponent } from './menu/context-menu-dn/context-menu-dn.component';
import { BreadcrumbDnComponent } from './menu/breadcrumb-dn/breadcrumb-dn.component';
import { GrowlDnComponent } from './messages/growl-dn/growl-dn.component';
import { MessagesDnComponent } from './messages/messages-dn/messages-dn.component';
import { ButtonComponent } from './button/button/button.component';
import {
  MenuModule, ButtonModule, SplitButtonModule,
  GrowlModule, MessageModule, MessagesModule,
  BreadcrumbModule, ContextMenuModule, MegaMenuModule,
  MenubarModule, PanelMenuModule, SlideMenuModule,
  StepsModule, TabMenuModule, TieredMenuModule,
  CheckboxModule, RadioButtonModule, AutoCompleteModule, 
  CalendarModule, ChipsModule, ColorPickerModule, 
  DropdownModule, EditorModule, InputSwitchModule, 
  InputTextModule, InputTextareaModule, ListboxModule, 
  InputMaskModule, MultiSelectModule, PasswordModule, RatingModule, SliderModule, SpinnerModule, SelectButtonModule, ToggleButtonModule, TriStateCheckboxModule
} from 'primeng/primeng';
import { MenuModuleComponent } from './menu/menu-module/menu-module.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuModuleComponent,
    ButtonComponent,
    MessagesDnComponent,
    GrowlDnComponent,
    BreadcrumbDnComponent,
    ContextMenuDnComponent,
    MegaMenuDnComponent,
    MenuDnComponent,
    MenubarDnComponent,
    PanelMenuDnComponent,
    SlideMenuDnComponent,
    StepsDnComponent,
    TabmenuDnComponent,
    TieredMenuDnComponent,
    InputGroupDnComponent,
    AutocompleteDnComponent,
    CalendarDnComponent,
    CheckboxDnComponent,
    ChipsComponent,
    ColorpickerDnComponent,
    DropdownDnComponent,
    EditorDnComponent,
    InputSwitchDnComponent,
    InputtextDnComponent,
    InputtextAreaDnComponent,
    ListboxDnComponent,
    InputmaskDnComponent,
    MultiselectDnComponent,
    PasswordDnComponent,
    RadiobuttonDnComponent,
    RatingDnComponent,
    SliderDnComponent,
    SpinnerDnComponent,
    SelectbuttonDnComponent,
    MultiUseButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    SplitButtonModule,
    GrowlModule,
    MessageModule,
    MessagesModule,
    BreadcrumbModule,
    ContextMenuModule,
    MegaMenuModule,
    MenubarModule,
    PanelMenuModule,
    SlideMenuModule,
    StepsModule,
    TabMenuModule,
    TieredMenuModule,
    CheckboxModule,
    RadioButtonModule,
    AutoCompleteModule,
    CalendarModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    InputMaskModule,
    MultiSelectModule,
    PasswordModule,
    RatingModule,
    SliderModule,
    SpinnerModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
