import { Component } from '@angular/core';

import { CommonProvider } from './../../../providers/common-provider';
import { WordMngProvider } from './../../../providers/word-mng-provider';

import { RoleSubCat } from './../../../models/RoleSubCat';

@Component({
    selector: 'page-defaultWord',
    templateUrl: 'default-word.html'
})
export class DefaultWordPage {

    rscs: Array<RoleSubCat>;

    constructor(
        private _cmn: CommonProvider,
        private _wordMng: WordMngProvider
    ) {
        this.initData();
    }

    initData(): void {
        this.getDefaultWordList();
    }

    getDefaultWordList(): Promise<any> {
        return this._wordMng.getDefaultWordList()
            .then(rscs => {
                this.rscs = rscs;
            });
    }

    //   createCatLec(subId: string): void {
    //     this._cmn.Alert.confirm("새로 생성하면 기존 단어는 모두 삭제 됩니다. 계속하시겠습니까?", "Warning").then(yes => {

    //         const loader = this._cmn.getLoader(null, null);
    //         loader.present();

    //         this._word.insertDefaultWord(subId)
    //             .then(() => {
    //                 this._cmn.Toast.present("top", "생성되었습니다.", "toast-success");
    //                 loader.dismiss();
    //             })
    //             .catch(err => {
    //                 loader.dismiss();
    //                 console.log(err);
    //                 alert(err);
    //             });
    //     }).catch(() => null);
    //   }
}
