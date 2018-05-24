import { WordUtil } from './../../../utils/word-util';
import { Word } from './../../../models/Word';
import { Component } from '@angular/core';

import { FileProvider } from './../../../providers/file-provider';

@Component({
    selector: 'page-wordEtc',
    templateUrl: 'word-etc.html'
})
export class WordEtcPage {

    constructor(
        private _file: FileProvider
    ) {

    }


    ///////////////////////////////////////////////////////////////////////////////////
    /// SP
    ///////////////////////////////////////////////////////////////////////////////////

    async splitFileBySp(evt: any) {

        const subId = "sp";
        const catName = "2018 선재국어";
        let lecName = "맞춤법 DAY #";
        const ext = ".xlsx";

        const dt: DataTransfer = <DataTransfer>(evt.target);
        let words = new Array<Array<Word>>();

        if (dt.files.length == 1) {
            const upData = await this._file.uploadJson(dt.files[0]);
            let aa; // [][]
            let beforeLec = 0;

            for (let i = 0; i < upData.length; i++) {
                const a = upData[i];  // []
                const currLec = a['day'];

                if (beforeLec != currLec) {
                    if (i > 0) {
                        words.push(this.excelData2WordOfSpSlLw(aa));
                    }
                    aa = new Array<Array<any>>();
                    beforeLec = currLec;
                }

                aa.push(a);
                if (i == upData.length - 1) {
                    words.push(this.excelData2WordOfSpSlLw(aa));
                }
            }

            for (let i = 0; i < words.length; i++) {
                const fileName = catName + "_" + lecName.replace("#", (i + 1) + "") + ext;
                this.download(subId, fileName, words[i]);
            }
        }
    }

    private excelData2WordOfSpSlLw(datas: Array<Array<any>>): Array<Word> {
        let words = new Array<Word>();
        let word: Word;

        datas.forEach(data => {
            word = WordUtil.getNullWord();
            word.col01 = this.convertData(data['question']);
            word.col02 = this.convertData(data['choice1']);
            word.col03 = this.convertData(data['choice2']);
            word.col04 = this.convertData(data['answer']);
            word.col05 = this.convertData(data['answer_num']);
            if (word.col01 != null) {
                words.push(word);
            }
        });

        return words;
    }



    ///////////////////////////////////////////////////////////////////////////////////
    /// SL
    ///////////////////////////////////////////////////////////////////////////////////

    async splitFileBySl(evt: any) {

        const subId = "sl";
        const catName = "2018 선재국어";
        let lecName = "표준어 DAY #";
        const ext = ".xlsx";

        const dt: DataTransfer = <DataTransfer>(evt.target);
        let words = new Array<Array<Word>>();

        if (dt.files.length == 1) {
            const upData = await this._file.uploadJson(dt.files[0]);
            let aa; // [][]
            let beforeLec = 0;

            for (let i = 0; i < upData.length; i++) {
                const a = upData[i];  // []
                const currLec = a['day'];

                if (beforeLec != currLec) {
                    if (i > 0) {
                        words.push(this.excelData2WordOfSpSlLw(aa));
                    }
                    aa = new Array<Array<any>>();
                    beforeLec = currLec;
                }

                aa.push(a);
                if (i == upData.length - 1) {
                    words.push(this.excelData2WordOfSpSlLw(aa));
                }
            }

            for (let i = 0; i < words.length; i++) {
                const fileName = catName + "_" + lecName.replace("#", (i + 1) + "") + ext;
                this.download(subId, fileName, words[i]);
            }
        }
    }



    ///////////////////////////////////////////////////////////////////////////////////
    /// LW
    ///////////////////////////////////////////////////////////////////////////////////

    async splitFileByLw(evt: any) {

        const subId = "lw";
        const catName = "2018 선재국어";
        let lecName = "외래어 DAY #";
        const ext = ".xlsx";

        const dt: DataTransfer = <DataTransfer>(evt.target);
        let words = new Array<Array<Word>>();

        if (dt.files.length == 1) {
            const upData = await this._file.uploadJson(dt.files[0]);
            let aa; // [][]
            let beforeLec = 0;

            for (let i = 0; i < upData.length; i++) {
                const a = upData[i];  // []
                const currLec = a['day'];

                if (beforeLec != currLec) {
                    if (i > 0) {
                        words.push(this.excelData2WordOfSpSlLw(aa));
                    }
                    aa = new Array<Array<any>>();
                    beforeLec = currLec;
                }

                aa.push(a);
                if (i == upData.length - 1) {
                    words.push(this.excelData2WordOfSpSlLw(aa));
                }
            }

            for (let i = 0; i < words.length; i++) {
                const fileName = catName + "_" + lecName.replace("#", (i + 1) + "") + ext;
                this.download(subId, fileName, words[i]);
            }
        }
    }



    ///////////////////////////////////////////////////////////////////////////////////
    /// KW
    ///////////////////////////////////////////////////////////////////////////////////

    async splitFileByKw(evt: any) {

        const subId = "kw";
        const catName = "2018 선재국어";
        let lecName = "어휘 DAY #";
        const ext = ".xlsx";

        const dt: DataTransfer = <DataTransfer>(evt.target);
        let words = new Array<Array<Word>>();

        if (dt.files.length == 1) {
            const upData = await this._file.uploadJson(dt.files[0]);
            let aa; // [][]
            let beforeLec = 0;

            for (let i = 0; i < upData.length; i++) {
                const a = upData[i];  // []
                const currLec = a['day'];

                if (beforeLec != currLec) {
                    if (i > 0) {
                        words.push(this.excelData2WordOfKw(aa));
                    }
                    aa = new Array<Array<any>>();
                    beforeLec = currLec;
                }

                aa.push(a);
                if (i == upData.length - 1) {
                    words.push(this.excelData2WordOfKw(aa));
                }
            }

            for (let i = 0; i < words.length; i++) {
                const fileName = catName + "_" + lecName.replace("#", (i + 1) + "") + ext;
                this.download(subId, fileName, words[i]);
            }
        }
    }

    private excelData2WordOfKw(datas: Array<Array<any>>): Array<Word> {
        let words = new Array<Word>();
        let word: Word;

        datas.forEach(data => {
            word = WordUtil.getNullWord();
            word.col01 = this.convertData(data['meaning1']);
            word.col02 = this.convertData(data['meaning2']);
            word.col03 = this.convertData(data['meaning3']);
            word.col04 = this.convertData(data['meaning4']);
            word.col05 = this.convertData(data['meaning5']);
            word.col06 = this.convertData(data['meaning6']);
            word.col07 = this.convertData(data['meaning7']);
            word.col08 = this.convertData(data['word']);
            word.col09 = this.convertData(data['example1']);
            word.col10 = this.convertData(data['example2']);
            word.col11 = this.convertData(data['example3']);
            word.col12 = this.convertData(data['example4']);
            word.col13 = this.convertData(data['example5']);
            word.col14 = this.convertData(data['example6']);
            if (word.col08 != null) {
                words.push(word);
            }
        });

        return words;
    }



    ///////////////////////////////////////////////////////////////////////////////////
    /// CC
    ///////////////////////////////////////////////////////////////////////////////////

    async splitFileByCc(evt: any) {

        const subId = "cc";
        const catName = "2018 선재국어";
        let lecName = "한자 DAY #";
        const ext = ".xlsx";

        const dt: DataTransfer = <DataTransfer>(evt.target);
        let words = new Array<Array<Word>>();

        if (dt.files.length == 1) {
            const upData = await this._file.uploadJson(dt.files[0]);
            let aa; // [][]
            let beforeLec = 0;

            for (let i = 0; i < upData.length; i++) {
                const a = upData[i];  // []
                const currLec = a['day'];

                if (beforeLec != currLec) {
                    if (i > 0) {
                        words.push(this.excelData2WordOfCc(aa));
                    }
                    aa = new Array<Array<any>>();
                    beforeLec = currLec;
                }

                aa.push(a);
                if (i == upData.length - 1) {
                    words.push(this.excelData2WordOfCc(aa));
                }
            }

            for (let i = 0; i < words.length; i++) {
                const fileName = catName + "_" + lecName.replace("#", (i + 1) + "") + ext;
                this.download(subId, fileName, words[i]);
            }
        }
    }

    private excelData2WordOfCc(datas: Array<Array<any>>): Array<Word> {
        let words = new Array<Word>();
        let word: Word;

        datas.forEach(data => {
            word = WordUtil.getNullWord();
            word.col01 = this.convertData(data['word']);
            word.col02 = this.convertData(data['content']);
            word.col03 = this.convertData(data['content1']);
            word.col04 = this.convertData(data['content2']);
            word.col05 = this.convertData(data['content3']);
            word.col06 = this.convertData(data['content4']);
            word.col07 = this.convertData(data['meaning1']);
            word.col08 = this.convertData(data['meaning2']);
            word.col09 = this.convertData(data['meaning3']);
            word.col10 = this.convertData(data['meaning4']);
            word.col11 = this.convertData(data['example1']);
            word.col12 = this.convertData(data['example2']);
            word.col13 = this.convertData(data['example3']);
            word.col14 = this.convertData(data['example4']);
            word.col15 = this.convertData(data['synonym']);
            word.col16 = this.convertData(data['antonym']);
            if (word.col01 != null) {
                words.push(word);
            }
        });

        return words;
    }

    

    ///////////////////////////////////////////////////////////////////////////////////
    /// C4
    ///////////////////////////////////////////////////////////////////////////////////

    async splitFileByC4(evt: any) {

        const subId = "c4";
        const catName = "2018 선재국어";
        let lecName = "한자성어 DAY #";
        const ext = ".xlsx";

        const dt: DataTransfer = <DataTransfer>(evt.target);
        let words = new Array<Array<Word>>();

        if (dt.files.length == 1) {
            const upData = await this._file.uploadJson(dt.files[0]);
            let aa; // [][]
            let beforeLec = 0;

            for (let i = 0; i < upData.length; i++) {
                const a = upData[i];  // []
                const currLec = a['day'];

                if (beforeLec != currLec) {
                    if (i > 0) {
                        words.push(this.excelData2WordOfC4(aa));
                    }
                    aa = new Array<Array<any>>();
                    beforeLec = currLec;
                }

                aa.push(a);
                if (i == upData.length - 1) {
                    words.push(this.excelData2WordOfC4(aa));
                }
            }

            for (let i = 0; i < words.length; i++) {
                const fileName = catName + "_" + lecName.replace("#", (i + 1) + "") + ext;
                this.download(subId, fileName, words[i]);
            }
        }
    }

    private excelData2WordOfC4(datas: Array<Array<any>>): Array<Word> {
        let words = new Array<Word>();
        let word: Word;

        datas.forEach(data => {
            word = WordUtil.getNullWord();
            word.col01 = this.convertData(data['chengyu']);
            word.col02 = this.convertData(data['content']);
            word.col03 = this.convertData(data['content1']);
            word.col04 = this.convertData(data['content2']);
            word.col05 = this.convertData(data['content3']);
            word.col06 = this.convertData(data['content4']);
            word.col07 = this.convertData(data['content5']);
            word.col08 = this.convertData(data['content6']);
            word.col09 = this.convertData(data['description']);
            word.col10 = this.convertData(data['description_synonym']);
            word.col11 = this.convertData(data['description_antonym']);
            if (word.col01 != null) {
                words.push(word);
            }
        });

        return words;
    }

    

    ///////////////////////////////////////////////////////////////////////////////////
    /// EW
    ///////////////////////////////////////////////////////////////////////////////////

    async splitFileByEw(evt: any) {

        const subId = "ew";
        const catName = "2018 기적의 영단어";
        let lecName = "DAY #";
        const ext = ".xlsx";

        const dt: DataTransfer = <DataTransfer>(evt.target);
        let words = new Array<Array<Word>>();

        if (dt.files.length == 1) {
            const upData = await this._file.uploadJson(dt.files[0]);
            let aa; // [][]
            let beforeLec = 0;

            for (let i = 0; i < upData.length; i++) {
                const a = upData[i];  // []
                const currLec = a['day'];

                if (beforeLec != currLec) {
                    if (i > 0) {
                        words.push(this.excelData2WordOfEw(aa));
                    }
                    aa = new Array<Array<any>>();
                    beforeLec = currLec;
                }

                aa.push(a);
                if (i == upData.length - 1) {
                    words.push(this.excelData2WordOfEw(aa));
                }
            }

            for (let i = 0; i < words.length; i++) {
                const fileName = catName + "_" + lecName.replace("#", (i + 1) + "") + ext;
                this.download(subId, fileName, words[i]);
            }
        }
    }

    private excelData2WordOfEw(datas: Array<Array<any>>): Array<Word> {
        let words = new Array<Word>();
        let word: Word;

        datas.forEach(data => {
            word = WordUtil.getNullWord();
            word.col01 = this.convertData(data['word']);
            word.col02 = this.convertData(data['meaning_type1']);
            word.col03 = this.convertData(data['meaning_value1']);
            word.col04 = this.convertData(data['meaning_type2']);
            word.col05 = this.convertData(data['meaning_value2']);
            word.col06 = this.convertData(data['example_phrase']);
            word.col07 = this.convertData(data['example_meaning']);
            if (word.col01 != null) {
                words.push(word);
            }
        });

        return words;
    }

    ///////////////////////////////////////////////////////////////////////////////////

    download(subId: string, fileName: string, words: Array<Word>): void {
        let datas = WordUtil.word2ExcelData(subId, words);
        this._file.export(fileName, datas);
    }

    private convertData(data): string {
        let result: string = data;

        if (data == null || data == undefined) {
            result = null;
        } else if (result.isEmpty()) {
            result = result.trim();
        } else if (result.startsWith("-")
            || result.startsWith("+")
            || result.startsWith("=")) {
            result = " " + result;
        }

        return result;
    }

}
