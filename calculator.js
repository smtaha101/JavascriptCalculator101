
var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("td");
var ScreenValue = "";

for(item of buttons)
{
    item.addEventListener("click",function(e)
    {
        var buttonText = e.target.innerHTML;
        console.log(buttonText);
        if(buttonText == "X")
        {
            buttonText = "*";
            ScreenValue += buttonText;
            screen.value = ScreenValue;
        }
        else if(buttonText == "=")
        {
            screen.value = eval(ScreenValue);
        }
        else if(buttonText == "C")
        {   ScreenValue = "";
            screen.value = "";
        }
        else
        {
            ScreenValue += buttonText;
            screen.value = ScreenValue;
        }
        
    })
}