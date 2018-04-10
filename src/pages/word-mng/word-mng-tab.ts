import { Component } from '@angular/core';

import { DefaultWordPage } from './default-word/default-word';
import { WordExcelPage } from './excel/word-excel';

@Component({
  selector: 'page-wordMngTab',
  templateUrl: 'word-mng-tab.html',
})
export class WordMngTabPage {

  tab1Root: any = DefaultWordPage;
  tab2Root: any = WordExcelPage;

  constructor() {

  }

}
