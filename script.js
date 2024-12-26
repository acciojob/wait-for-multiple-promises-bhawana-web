//your JS code here. If required.
const output=document.getElementById("output")

output.innerHTML=`
  <tr id="loading">
    <td colspan="2" class="text-center">Loading...</td>
  </tr>
`;


const OverallStartTime = Date.now();
Promise.all([
new Promise((resolve=>{
    const startTime=Date.now()
setTimeout(()=>{
    const duration=Date.now()-startTime
resolve({name:"Promise1",time:duration})


},2000)


})),

new Promise((resolve=>{
    const startTime=Date.now()
setTimeout(()=>{
    const duration=Date.now()-startTime
    resolve({name:"Promise2",time:duration})


},1000)

})),

new Promise((resolve=>{
    const startTime=Date.now()
setTimeout(()=>{
    const duration=Date.now()-startTime
    resolve({name:"Promise3",time:duration})



},3000)

})),




]).then((results)=>{
    const OverAllEndTime=Date.now()-OverallStartTime

    console.log(OverAllEndTime)
    
console.log(results)

output.innerHTML=` `;
results.forEach((result) => {
    output.innerHTML += `
      <tr>
        <td>${result.name}</td>
        <td>${result.time}s</td>
        </tr>
    `;

   
    

    


  });
	
  output.innerHTML+=`
  <tr>
    <td><strong>Total</strong></td>
     <td>${(OverAllEndTime/1000).toFixed(3)}s</td>
  </tr>
`;






}).catch((error)=>{
console.log(error)

})