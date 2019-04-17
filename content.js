/*
====================================================================================================================================================
 .----------------.  .----------------.  .----------------.  .----------------.                                         
| .--------------. || .--------------. || .--------------. || .--------------. |                                        
| |    ______    | || |  _________   | || |  _________   | || |  ___  ____   | |                                        
| |  .' ___  |   | || | |_   ___  |  | || | |_   ___  |  | || | |_  ||_  _|  | |                                        
| | / .'   \_|   | || |   | |_  \_|  | || |   | |_  \_|  | || |   | |_/ /    | |                                        
| | | |    ____  | || |   |  _|  _   | || |   |  _|  _   | || |   |  __'.    | |                                        
| | \ `.___]  _| | || |  _| |___/ |  | || |  _| |___/ |  | || |  _| |  \ \_  | |                                        
| |  `._____.'   | || | |_________|  | || | |_________|  | || | |____||____| | |                                        
| |              | || |              | || |              | || |              | |                                        
| '--------------' || '--------------' || '--------------' || '--------------' |                                        
 '----------------'  '----------------'  '----------------'  '----------------'                                         
 .----------------.  .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| | _____  _____ | || |     _____    | || |    _______   | || |  ________    | || |     ____     | || | ____    ____ | |
| ||_   _||_   _|| || |    |_   _|   | || |   /  ___  |  | || | |_   ___ `.  | || |   .'    `.   | || ||_   \  /   _|| |
| |  | | /\ | |  | || |      | |     | || |  |  (__ \_|  | || |   | |   `. \ | || |  /  .--.  \  | || |  |   \/   |  | |
| |  | |/  \| |  | || |      | |     | || |   '.___`-.   | || |   | |    | | | || |  | |    | |  | || |  | |\  /| |  | |
| |  |   /\   |  | || |     _| |_    | || |  |`\____) |  | || |  _| |___.' / | || |  \  `--'  /  | || | _| |_\/_| |_ | |
| |  |__/  \__|  | || |    |_____|   | || |  |_______.'  | || | |________.'  | || |   `.____.'   | || ||_____||_____|| |
| |              | || |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 

http://patorjk.com/software/taag/#p=display&h=0&v=0&f=Blocks&t=Geek%0AWisdom

Really !, you want to cheat and look at the code ?

Really ???

#GeekWisdom
=====================================================================================================================================================
*/

var key="secret password"; 
var frequency="93.1"; 
var sitename="geekwisdom.org"; //take this from site name (full url?)
var messagecenter="geekwisdom.org/utils/messagecenter.php";

function hexEncode(text)
{
    var hex, i;

    var result = "";
    for (i=0; i<text.length; i++) {
        hex = text.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
}
    return result;
}



function hexDecode(text)
{
var j;
    var hexes = text.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;

}


function xorConvert (text, key) {
    var kL = key.length;

    var enc=Array.prototype
        .slice.call(text)
        .map(function (c, index) {
            return String.fromCharCode(c.charCodeAt(0) ^ key[index % kL].charCodeAt(0));
        }).join('');
   return hexEncode(enc);
}

function decode_it(el)
{
el.removeAttribute("onclick");
var text2=el.textContent;
alert (text2);
var d=hexDecode(text2);
var enc=xorConvert(d,key);
var final=hexDecode(enc);
scrolltext(el.id,final);
//el.textContent=final;

}

function do_decode(el)
{
 decode_it(el);
 el.className="gw_decoded";
}

function dodecode()
{
//walk through all ements on page and decode them

var obj=document.getElementsByClassName("gw_decoder");
{
for (var i=obj.length-1;i>=0;i--)
  {
  var el=obj[i];
  decode_it(el);
  obj[i].className="gw_decoded";

  }
}
}

function randomstring(len)
{
//return a random string of length len
var ar=makearray();
var retval="";
for (var i=0;i<len;i++) retval = retval + ar[i];
return retval;
}

function makearray()
{
var retval=[];
for(var i=32;i<127;++i) retval[i]=String.fromCharCode(i);

shuffle(retval);
return retval;
}

function shuffle(array) {
  array.sort(function(a,b) { return Math.random() - 0.5});

}


function scrolltext(elId,themessage)
{
var el=document.getElementById(elId);
var ar1=makearray();
//scrolling through text of "x" big untli each aracter arrives at
//the message. STop when el.text content = the message
var checkmsg=el.textContent.substring(0,themessage.length);
if (checkmsg == themessage) 
{
	el.textContent = themessage;


	return;
}
//for each item in el.txtcontent taht is NOT the same as the messae, scroll to 
//the next letter
var newmsg=el.textContent;
var fmsg="";
var j=0;
for (var i=0;i<newmsg.length;i++)
 {
  var matches=0;
  var newmsg_char=newmsg.substring(i,i+1);
  var themessage_char=themessage.substring(i,i+1);
  if (newmsg_char != themessage_char)
  	{
 	fmsg=fmsg+ar1[j];
	j++;
	if (j > ar1.length) 
		{
		ar1=makearray();
		j=0;
		}
	}
  else
	{
	fmsg=fmsg+themessage_char;
	matches++;
	}
 }
el.textContent=fmsg.substring(0,themessage.length);
if (matches > 70) matches=70;
setTimeout(scrolltext,75-matches,elId,themessage);
}

function pre_launch()
{
//walk though each div and enable onhover event that chagnes mouse
//and an onclick even that decoes it

var obj=document.getElementsByClassName("gw_decoder");
{
for (var i=obj.length-1;i>=0;i--)
  {
  var el=obj[i];
  el.className="gw_decoded";

  el.setAttribute('onclick','do_decode(this);');
  }
}

function setstyle(el)
{
el.style.cursor="crosshair";
}

}
//pre_launch();

function encrypt_msg()
{
var m = document.getElementById("secret_message_input");
m.parentNode.style.display="none";
var text=strip(newTrim(m.value));
var enc_msg=xorConvert(text,key);
var stationid=xorConvert(sitename,frequency);
var msg_src="https://" + messagecenter + "?action=add&stationid=" + stationid + "&msg="+enc_msg;
//tempaory only later send message write out <script src=+
var t=document.getElementById("testme");
t.textContent=msg_src;
createDiv("mymessage1",enc_msg);
//document.getElementById("secret1").value=enc_msg;
//temp only
pre_launch();
}

function createInputDiv()
{
//create the secret message input div that encrypts and sends the 
//message to the message center
var textareabox=document.createElement("textarea");
var p=document.createElement("div");
textareabox.id="secret_message_input";
textareabox.placeholder = "Enter your secret message here"
textareabox.cols=40;
textareabox.rows=5;

var GObutton=document.createElement("button");
GObutton.setAttribute('onclick','encrypt_msg();');
var t = document.createTextNode("Encrypt Message");
GObutton.appendChild(t);
var divbox=document.createElement("div");
divbox.appendChild(textareabox);
p.appendChild(GObutton);
divbox.appendChild(p);
document.body.appendChild(divbox);
return divbox;
}

function createDiv(id,enc,x,y)
{
//create the secret message input div that encrypts and sends the 
//message to the message center
var textareabox=document.createElement("textarea");
textareabox.readOnly=true;
textareabox.className="gw_decoder";
var p=document.createElement("div");
textareabox.id=id;
textareabox.textContent = enc;
textareabox.cols=40;
textareabox.rows=5;
var divbox=document.createElement("div");
//div.id=theid
divbox.style.position = "absolute";
divbox.style.left=x + "px";
divbox.style.top=y + "px";
divbox.style.width = "5px";
divbox.style.height = "5px";
divbox.style.background = "red";
divbox.style.color = "white";
divbox.style.display = "block;"
divbox.addEventListener("click", showmsg);
divbox.appendChild(textareabox);
document.body.appendChild(divbox);
return divbox;
}




function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html.replace(/<(?:.|\n)*?>/gm, '');

   return tmp.textContent || tmp.innerText || "";
}

function newTrim(x) {
  var tmp=x.replace(new RegExp("\n",'g'),"{CRLF}");
  var tmp2=tmp.replace(/^\s+|\s+$/gm,'');
  var tmp3=tmp2.replace(new RegExp("{CRLF}","g"),"\n");
 return tmp3;
}


function loadSecrets(secretDataJSON)
{


var secretData=JSON.parse(secretDataJSON);
for (i=0;i<secretData.length;i++)
 {
  
  var d=secretData[i];
  var x=d["x"];
  var y=d["y"];
  var msg=d["message"];
  var el=createDiv("secret"+i,msg,x,y);
 }
pre_launch();
}

function showCoords(event) {
  var cX = event.clientX;
  var sX = event.screenX;
  var cY = event.clientY;
  var sY = event.screenY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
//alert (coords1 + " " + coords2);

msg.style.display="block";
msg.style.position = "absolute";
msg.style.left=cX + "px";
msg.style.top=cY + "px";
}

function createDiv2(theid,text,x,y)
{

var div = document.createElement("div");
div.id=theid
div.style.position = "absolute";
div.style.left=x + "px";
div.style.top=y + "px";
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.style.display = "block;"
div.textContent=text;
div.addEventListener("click", showmsg);
document.body.appendChild(div);
return div;
}

function showmsg()
{
var el=event.target;
el.style.width="450px";
el.style.height="75px";
el.style.display="block";
}



function get_settings(items)
{
key=items.encKey;
frequency=items.Frequency;
chrome.runtime.sendMessage(
    {contentScriptQuery: 'fetchMessages',
     id: '1'},loadSecrets);

}


var style = document.createElement('style');
var textNode = document.createTextNode('.gw_decoder { visibility: hidden; } .gw_decoded { font-family:"Courier New", Courier, monospace; display: block; }');
style.appendChild(textNode);
document.head.appendChild(style);


chrome.runtime.sendMessage(
    {contentScriptQuery: 'loadSettings',
     id: '1'},get_settings);

