var wrapper=document.getElementsByClassName("wrapper");
var next=document.getElementsByClassName("next");
var prev=document.getElementsByClassName("prev");
next=next[0];
prev=prev[0];
var end=10;
var start=0;

for(var i=10;i<wrapper.length;i++)
    {
    wrapper[i].classList.add('hide');
    }

function hide(){
    for(var i=0;i<wrapper.length;i++)
    {
    wrapper[i].classList.add('hide');
    }
}
next.addEventListener('click',()=>{ 
  if(end>=wrapper.length){
    return;
  }
  hide();
  start=end;
  end+=10;
    for(var i=start;i<Math.min(end,wrapper.length);i++)
   {
     wrapper[i].classList.remove('hide');
   }
})
prev.addEventListener('click',()=>{
  if(start<=0)
  {
    return;
  }
  hide();
  end=start;
  start-=10;
    for(var i=Math.max(start,0);i<end;i++)
   {
  wrapper[i].classList.remove('hide');
   }
})


const typewriter = () => {
  const aText = [
    "This is Facts - Website, You can Read New and Unique Fact. This Website Provides you a Inspiring, Fun, Motivational, New, and many more types of Facts.",
    "If You are Developer or You Want Contribute then click on Contribute button and solve issues or add Unique Facts.",
    "If you are Normal User then do not Click on Contribute Button you can only Read Facts.",
  ];
  const speed = 100;
  let index = 0;
  let arrLength = aText[0].length;
  const scrollAt = 20;
  let textPos = 0;
  let contents = "";
  let row;

  const destination = document.getElementById("typedtext");
  if (!destination) return; // exit function if element is not found

  const typeWriter = () => {
    contents = " ";
    row = Math.max(0, index - scrollAt);

    while (row < index) {
      contents += `${aText[row++]}<br />`;
    }

    destination.innerHTML = `${contents}${aText[index].substring(0, textPos)}_`;

    if (textPos++ === arrLength) {
      textPos = 0;
      index++;

      if (index !== aText.length) {
        arrLength = aText[index].length;
        setTimeout(typeWriter, 500);
      }
    } else {
      setTimeout(typeWriter, speed);
    }
  };

  typeWriter();
};

document.addEventListener("DOMContentLoaded", typewriter);


