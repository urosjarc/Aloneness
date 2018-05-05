/*
   This script and many more are available free online at
   The JavaScript Source!! http://javascript.internet.com
   Created by: Sandeep Gangadharan | http://www.sivamdesign.com/scripts/
*/

if (document.getElementById)
{
  document.write('<style type="text/css">.texter' +
  '{' +
'     display:none; border-left:white 20px solid;' + 
'     color:#404040; font: .9em verdana, arial, helvetica, sans-serif;' +
'     margin-bottom: 12px;}</style>')
}

// Add a list of div IDs to be hidden/shown.
// So if you want 4 headers you should add a1, a2, a3, a4 in the format
// shown enclosed in double quotes

var divNum = new Array("a1","a2","a3");

function openClose(theID)
{
  for(var i=0; i < divNum.length; i++)
  {
    if (divNum[i] == theID)
    {
      if (document.getElementById(divNum[i]).style.display == "block")
      {
        document.getElementById(divNum[i]).style.display = "none"
      }
      else
      {
        document.getElementById(divNum[i]).style.display = "block"
      }
    }
    else
    {
      document.getElementById(divNum[i]).style.display = "none";
    }
  }
}
