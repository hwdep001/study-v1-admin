import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// environments
import { environment } from './../environments/environment';

// providers
import { CommonProvider } from './../providers/common-provider';
import { FileProvider } from './../providers/file-provider';
import { AuthProvider } from './../providers/auth-provider';
import { UserProvider } from './../providers/user-provider';
import { SubProvider } from './../providers/sub-provider';
import { CatProvider } from './../providers/cat-provider';
import { LecProvider } from './../providers/lec-provider';
import { WordProvider } from './../providers/word-provider';

// pages
import { BackgroundPage } from './../pages/background/background';
import { SignInPage } from './../pages/sing-in/sign-in';
import { HomePage } from './../pages/home/home';
import { CatListPage } from './../pages/cat-list/cat-list';
import { LecListPage } from './../pages/lec-list/lec-list';
import { SpsllwListPage } from './../pages/word-list/spsllw-list/spsllw-list';
import { KwListPage } from './../pages/word-list/kw-list/kw-list';
import { CcListPage } from './../pages/word-list/cc-list/cc-list';
import { C4ListPage } from './../pages/word-list/c4-list/c4-list';
import { EwListPage } from './../pages/word-list/ew-list/ew-list';
import { UserListPage } from './../pages/user-mng/list/user-list';
import { UserPhotoPage } from './../pages/user-mng/photo/user-photo';
import { UserDetailPage } from './../pages/user-mng/detail/user-detail';
import { UserRolePage } from './../pages/user-mng/role/user-role';
import { UserStatPage } from './../pages/user-mng/stat/user-stat';
import { WordMngTabPage } from './../pages/word-mng/word-mng-tab';
import { WordExcelPage } from './../pages/word-mng/excel/word-excel';
import { WordInsertPage } from './../pages/word-mng/insert/word-insert';
import { MyInfoPage } from './../pages/my-info/my-info';

@NgModule({
  declarations: [
    MyApp,
    BackgroundPage,
    SignInPage,
    HomePage,
    CatListPage,
    LecListPage,
    SpsllwListPage,
    KwListPage,
    CcListPage,
    C4ListPage,
    EwListPage,
    UserListPage,
    UserPhotoPage,
    UserDetailPage,
    UserRolePage,
    UserStatPage,
    WordMngTabPage,
    WordExcelPage,
    WordInsertPage,
    MyInfoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BackgroundPage,
    SignInPage,
    HomePage,
    CatListPage,
    LecListPage,
    SpsllwListPage,
    KwListPage,
    CcListPage,
    C4ListPage,
    EwListPage,
    UserListPage,
    UserPhotoPage,
    UserDetailPage,
    UserRolePage,
    UserStatPage,
    WordMngTabPage,
    WordExcelPage,
    WordInsertPage,
    MyInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider,
    FileProvider,
    AuthProvider,
    UserProvider,
    SubProvider,
    CatProvider,
    LecProvider,
    WordProvider
  ]
})
export class AppModule {}
