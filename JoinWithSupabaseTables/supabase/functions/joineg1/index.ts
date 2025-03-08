import getMultiTableData from "../Repository/JoinsRepo.ts";

Deno.serve(async (req) => {
  if(req.method==='GET')
  {
    const url=new URL(req.url);
    const id=url.searchParams.get('id');

    if(id==null||isNaN(parseInt(id))){
      return new Response(
        JSON.stringify("Please provide id"),
        { status:400,headers: { "Content-Type": "application/json" } },
      )
    }

    const data=await getMultiTableData(parseInt(id));
    return new Response(
      JSON.stringify(data),
      { status:200, headers: { "Content-Type": "application/json" } },
    )
  }
  else{
    return new Response(
      JSON.stringify({error:"This method is not allowed here"}),
      { status:500,headers: { "Content-Type": "application/json" } },
    )
  }

  
})
