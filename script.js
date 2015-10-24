(function(ext) {
    // shutdown時に呼ばれる
    ext._shutdown = function() {};

    // statusを返してやる。デバイスとつながってない時とかここで色々返せる。
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.do_domething = function(str) {
    };

    ext.greeting = function(str){
        console.log("Hello");
    };

    ext.changeColor = function(str){
        switch(str){
            case "red":
                console.log("Red");
                break;
            case "blue":
                console.log("blue");
                break;
            case "green":
                console.log("green");
                break;
            default:
                console.log("other color");
                break;
        }
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            [' ', 'do_something %s', 'do_something', 'sample text'],
            [' ', 'Hello,World %s', 'greeting', 'KIRIE'],
            [' ', 'サイリウムの色を赤色にする', 'changeColor', 'red'],
        ]
    };

    // 最後にExtensionを登録する
    ScratchExtensions.register('Simple extension', descriptor, ext);

})({});