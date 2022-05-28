function convertLetterJs(myStr) {
    let newStr = myStr.split('').map(letter => {
        letter = letter.toLowerCase();
        letter = letter.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        letter = letter.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        letter = letter.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        letter = letter.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        letter = letter.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        letter = letter.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        letter = letter.replace(/đ/g, "d");
        //str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");  
        /* tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự - */
        //str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-  
        letter = letter.replace(/^\-+|\-+$/g, "");
        return letter;
    });
    // myStr = myStr.toLowerCase();
    // myStr = myStr.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    // myStr = myStr.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    // myStr = myStr.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    // myStr = myStr.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    // myStr = myStr.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    // myStr = myStr.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    // myStr = myStr.replace(/đ/g, "d");
    // myStr = myStr.replace(/^\-+|\-+$/g, "");
    return newStr.join('');
}

export default convertLetterJs;