const https = require('https');
const {mysql} = require('../qcloud');
module.exports=async(ctx)=>{
    const {isbn,openid} = ctx.request.body;
    ctx.state.data = {
        msg:'添加书成功'

    }
    try{
        await mysql('books').insert({id:"1",author:"dewen",title:"冲"});
        ctx.state.data = {
            msg:'添加书成功'

        }
    }catch(e){
        ctx.state = {
            code:-1,
            msg:'添加书失败'+e.sqlMessage

        }
    }
    if(isbn&&openid){
        let url =  'https://api.douban.com/v2/book/isbn/'+ isbn; 
        const bookinfo = await getJSON(url);
        const rate = bookinfo.rating.average;
        const {title,image,alt,publisher,summary,price} = bookinfo;
        console.log(bookinfo);
        const tags = bookinfo.tags.map(v=>{
            return `${v.title}${v.count}`
        }).join(',');
        const author = bookinfo.author.join(',');
        console.log({rate,title,image,alt,publisher,summary,price,tags,author});
        
        ctx.state.data = {
            msg:'添加书成功'

        }
        
        
    }
}
async function getJSON(url){
    return new Promise((reslove,reject)=>{
        https.get(url,res=>{
            let urlData = '';
            res.on('data',data=>{
                urlData = data;
            })
            res.on('end',data=>{
                const bookinfo = JSON.parse(urlData)
                if(bookinfo.title){
                    reslove(bookinfo);
                }
                urlData = data;
                reject(bookinfo);
            });
        })
    })
}