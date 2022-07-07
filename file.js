for(i=0;i<=30;i++){
    fs.WriteFile(`./backup/text-${i}.html`,quote2,(err)=>{
        console.log("Writing Completed")
    })
}