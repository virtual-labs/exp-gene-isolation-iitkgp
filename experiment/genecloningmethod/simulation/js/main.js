function restartexp() {
    location.reload();
  }

function scissorjsclick(){
    document.getElementById("steps").innerHTML="DNA is cut into pieces by restriction enzyme. Consider this scissors as restriction enzyme";
    document.getElementById("scissorscss").style.top=38+"%";
    document.getElementById("scissorscss").style.left=5+"%";
    document.getElementById("scissorscss").setAttribute("onclick", "scissorcutclick()" );
    
}

function scissorcutclick(){
    document.getElementById("dnacutcss").style.display="block";
    document.getElementById("scissorscss").style.display="none";
    document.getElementById("dnacss").style.display="none";
    document.getElementById("scissorscss").style.top=2+"%";
    document.getElementById("scissorscss").style.left=37+"%";
    document.getElementById("bactpetridish").style.display="block";
    document.getElementById("petridish").style.display="block";
    document.getElementById("pluscss").style.display="block";
    document.getElementById("pluscss").setAttribute("onclick", "plusclick()" );
    document.getElementById("steps").innerHTML="Cut DNA and Petri Dish containing cut Bacterial Plasmid";
}

function plusclick()
{
    document.getElementById("steps").innerHTML="Test tube containing recombinant DNA";
    document.getElementById("dnacutcss").style.display="none";
    document.getElementById("dnacss").style.display="none";
    document.getElementById("testtube").style.display="block";
    document.getElementById("scissorscss").style.display="none";
    document.getElementById("bactpetridish").style.display="none";
    document.getElementById("petridish").style.display="none";
    document.getElementById("pluscss").style.display="none";
    document.getElementById("testtube").setAttribute("onclick", "testtubeclick()" );
}

function testtubeclick(){
    document.getElementById("steps").innerHTML="Recombinant DNA is transferred back into bacteria";
    document.getElementById("picture5").style.display="block";
    document.getElementById("testtube").style.display="none";
    document.getElementById("picture5").setAttribute("onclick", "picture5click()" );
}

function picture5click(){
    document.getElementById("steps").innerHTML="Bacteria is plated out and allowed to grow into colonies. These colonies are called gene library.";
    document.getElementById("picture5").style.display="none";
    document.getElementById("petridish1").style.display="block";
    document.getElementById("bactpict6").style.display="block";
    document.getElementById("bactpict6a").style.display="block";
    document.getElementById("bactpict6b").style.display="block";
    document.getElementById("bactpict6c").style.display="block";
    document.getElementById("bactpict6d").style.display="block";
    document.getElementById("bactpict6").setAttribute("onclick", "clickbactpic()" );
    document.getElementById("bactpict6a").setAttribute("onclick", "clickbactpic()" );
    document.getElementById("bactpict6b").setAttribute("onclick", "clickbactpic()" );
    document.getElementById("bactpict6c").setAttribute("onclick", "clickbactpic()" );
    document.getElementById("bactpict6d").setAttribute("onclick", "clickbactpic()" );
}

function clickbactpic() {
    document.getElementById("magniglass").style.display="block";
    document.getElementById("magniglass").setAttribute("onclick", "clickmagniglass()" );
  }
    


function clickmagniglass(){
    document.getElementById("stepsa").style.display="block";
    document.getElementById("steps").style.display="none";
}