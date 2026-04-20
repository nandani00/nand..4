
function logo(){
let subj= document.getElementById("subj").value;
let num=document.getElementById("num").value;
let unit=document.getElementById("unit").value

document.getElementById("log").innerHTML+="<p>" +subj+"="+num+""+unit+"</p>"
}
// function logo()
// 
//     const subj = document.getElementById("subj").value.trim();
//     const num = document.getElementById("num").value;
    //     const unit = document.getElementById("unit").value;
    
//     if (subj === "" || num === "") return;
  
//     const entry = `<div class="entry">${subj} = ${num} ${unit}</div>`;
//     document.getElementById("log").innerHTML += entry;
  
//     // Save updated log
//     localStorage.setItem("studyLog", document.getElementById("log").innerHTML);
  
//     // Clear input
//     document.getElementById("subj").value = "";
//     document.getElementById("num").value = "";
//   }
  
//   function clearLog() {
//     document.getElementById("log").innerHTML = "";
//     localStorage.removeItem("studyLog");
//   }
  
//   window.onload = () => {
//     const saved = localStorage.getItem("studyLog");
//     if (saved) {
//       document.getElementById("log").innerHTML = saved;
//     }
//   };
  