import supabase from "../DbConfif/DbConn.ts";



export default async function getMultiTableData(id:number) 
{
    try{
        const {data:userDetail,error}=await supabase
        .from('emp').select(`*,dept(*)`).eq('id',id);
        if(error)
        {
            return new Error(`${id} is not available`);
        }
        else
        {
            return userDetail;
        }
    }
    catch(error)
    {
        if(error instanceof Error)
        throw new Error("An Unexpected Error",error);
    }
    
}