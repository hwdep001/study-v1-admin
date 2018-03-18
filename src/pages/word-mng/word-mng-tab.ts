import { Component } from '@angular/core';

import { WordExcelPage } from './excel/word-excel';
import { WordInsertPage } from './insert/word-insert';

@Component({
  selector: 'page-wordMngTab',
  templateUrl: 'word-mng-tab.html',
})
export class WordMngTabPage {

  tab1Root: any = WordExcelPage;
  tab2Root: any = WordInsertPage;

  constructor() {

  }

}
