import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {TooltipModule} from 'ngx-bootstrap/tooltip'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { DataService } from './data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NbLayoutModule , NbThemeModule , NbInputModule,NbCardModule, NbButtonModule,NbTabsetModule,NbActionsModule,NbButtonGroupModule,NbIconModule, NbFormFieldModule,} from "@nebular/theme";
import { BookmarkComponent } from './bookmark/bookmark.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    MovieDetailsComponent,
    BookmarkComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    NgbModule,
    // NgbPaginationModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbButtonGroupModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

