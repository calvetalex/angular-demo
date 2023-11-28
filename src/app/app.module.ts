import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// translate
import {
  TranslateLoader,
  TranslateModule,
  TranslateStore,
} from '@ngx-translate/core';

//ngrx
import { StoreModule } from '@ngrx/store';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/effects';
import { FormsModule } from '@angular/forms';
import { DraggableModalComponent } from './components/draggable-modal/draggable-modal.component';
import { TaskbarComponent } from './container/taskbar/taskbar.container';
import { BodyComponent } from './container/body/body.container';
import { NavigationCarouselComponent } from './components/navigation-carousel/navigation-carousel.component';

// primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

// i18n
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

function translateHttpLoaderFactory(httpBackend: HttpClient) {
  return new TranslateHttpLoader(httpBackend);
}

@NgModule({
  declarations: [
    AppComponent,
    DraggableModalComponent,
    TaskbarComponent,
    BodyComponent,
    NavigationCarouselComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(Effects),
    InputTextModule,
    ButtonModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    DialogModule,
    CarouselModule,
    TagModule,
  ],
  providers: [TranslateStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
