const browserLang = navigator.language || navigator.userLanguage;
const zhLangs = ["zh-CN", "zh-TW", "zh-HK", "zh"];
let isZH = zhLangs.some((lang) => browserLang.startsWith(lang));

var bootMessageLines_en = [
  "System loading...<br>",
  new Date().toString() + "<br>",
  "&nbsp;_______&nbsp;&nbsp;&nbsp;______&nbsp;<br>|__&nbsp;&nbsp;&nbsp;__|&nbsp;|&nbsp;&nbsp;____|<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|__&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;__|&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>",
  "Terminal Faker version " + version + "<br>",
  "By Sherri Wheeler (SyntaxSeed.com)<br>",
  "Ready. Type 'help' to get started.<br><br>",
  "topic:<br>",
  "There is a docs.md file in the current directory. Please print it as a verification for joining the group.<br><br>",
];


var bootMessageLines_zh = [
  "System loading...<br>",
  new Date().toString() + "<br>",
  "&nbsp;_______&nbsp;&nbsp;&nbsp;______&nbsp;<br>|__&nbsp;&nbsp;&nbsp;__|&nbsp;|&nbsp;&nbsp;____|<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|__&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;__|&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>",
  "Terminal Faker version " + version + "<br>",
  "By Sherri Wheeler (SyntaxSeed.com)<br>",
  "Ready. Type 'help' to get started.<br><br>",
  "题目:<br>",
  "在当前目录下有一个docs.md文件,请你打印他作为入群验证<br><br>",
  "terminalfaker内置命令(可键入help查看) : base64dec  base64enc  cat  cd  clear  cow  decrypt  echo  encrypt  hello  help  history  ls  pwd  reboot  rm  touch  version <br><br>",
];

let bootMessageLines = isZH ? bootMessageLines_zh : bootMessageLines_en;
