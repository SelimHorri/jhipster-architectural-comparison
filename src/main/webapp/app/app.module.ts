import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JHipsterDemoAppSharedModule } from 'app/shared/shared.module';
import { JHipsterDemoAppCoreModule } from 'app/core/core.module';
import { JHipsterDemoAppAppRoutingModule } from './app-routing.module';
import { JHipsterDemoAppHomeModule } from './home/home.module';
import { JHipsterDemoAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JHipsterDemoAppSharedModule,
    JHipsterDemoAppCoreModule,
    JHipsterDemoAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JHipsterDemoAppEntityModule,
    JHipsterDemoAppAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JHipsterDemoAppAppModule {}
