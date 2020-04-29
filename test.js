const nodejieba = require('nodejieba')
nodejieba.load({
  // dict: 主词典，带权重和词性标签，建议使用默认词典。
  // hmmDict: 隐式马尔科夫模型，建议使用默认词典。
  // userDict: 用户词典，建议自己根据需要定制。
  // idfDict: 关键词抽取所需的idf信息。
  // stopWordDict: 关键词抽取所需的停用词列表。
  // stopWordDict: "./stopWordDict.utf8"
})

var sentence = "我是拖拉机学院手扶拖拉机专业的。不用多久，我就会升职加薪，当上CEO，走上人生巅峰。";

var result;

// 没有主动调用nodejieba.load载入词典的时候，
// 会在第一次调用cut或者其他需要词典的函数时，自动载入默认词典。
// 词典只会被加载一次。
result = nodejieba.cut(sentence);
console.log(result);

result = nodejieba.cut(sentence, true);
console.log(result);

result = nodejieba.cutHMM(sentence);
console.log(result);

result = nodejieba.cutAll(sentence);
console.log(result);

result = nodejieba.cutForSearch(sentence);
console.log(result);

result = nodejieba.tag(sentence);
console.log(result);

var topN = 5;
result = nodejieba.extract(sentence, topN);
console.log(result);

result = nodejieba.cut("男默女泪");
console.log(result);
nodejieba.insertWord("男默女泪");
result = nodejieba.cut("男默女泪");
console.log(result);

result = nodejieba.cutSmall("南京市长江大桥", 3);
console.log(result);
result = nodejieba.cut("为(什么)事故");
console.log(result);

/*
node -v 10.13.0
npm -v 6.4.1
npm install --python=python2.7
npm config set python python2.7
npm install --global --production windows-build-tools
********
Now configuring the Visual Studio Build Tools and Python...
All done!
成功
*******
npm install -g node-gyp
npm install nodejieba
*/
